import { NewUser } from "../entities/NewUser";
import { MyContext } from "src/types";
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import argon2 from "argon2";
import { COOKIE_NAME } from "../constants";
import { getMongoManager } from "typeorm";

@InputType()
class UsernamePasswordInput {
  @Field()
  username: string;
  @Field()
  password: string;
}

@ObjectType()
class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => NewUser, { nullable: true })
  user?: NewUser;
}

@Resolver()
export class UserResolver {
  @Query(() => NewUser, { nullable: true })
  async me(@Ctx() { req }: MyContext) {
    //you are not logged in

    console.log("before: ", req.session.userId);

    if (!req.session.userId) {
      return null;
    }

    console.log("after: ", req.session.userId);

    const id = req.session.userId;

    const user = await NewUser.findOne(id);
    return user;
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    if (options.username.length <= 2) {
      return {
        errors: [
          {
            field: "email",
            message: "length must be greater than 2",
          },
        ],
      };
    }
    if (options.password.length <= 2) {
      return {
        errors: [
          {
            field: "password",
            message: "length must be greater than 2",
          },
        ],
      };
    }

    const hashedPassword = await argon2.hash(options.password);
    let user;

    try {
      user = new NewUser();
      user.id = Math.floor(Math.random() * 10000000 + 1);
      user.username = options.username;
      user.password = hashedPassword;

      const manager = getMongoManager();
      await manager.save(user);
    } catch (err) {
      console.log("ERRO" + err);
    }

    console.log("reqb", req.session);

    req.session.userId = user?.id;

    console.log("reqa", req.session);

    console.log(user);
    return { user };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    const user = await NewUser.findOne({ username: options.username });
    if (!user) {
      return {
        errors: [
          {
            field: "email",
            message: "that username doesn't exist",
          },
        ],
      };
    }
    const valid = await argon2.verify(user.password, options.password);
    if (!valid) {
      return {
        errors: [
          {
            field: "password",
            message: "incorrect password",
          },
        ],
      };
    }

    console.log("reqb", req.session);

    req.session.userId = user.id;

    console.log("reqa", req.session);
    console.log(req.session.userId);

    return {
      user,
    };
  }

  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: MyContext) {
    return new Promise((resolve) =>
      req.session.destroy((err) => {
        res.clearCookie(COOKIE_NAME);
        if (err) {
          console.log(err);
          resolve(false);
          return;
        }

        resolve(true);
      })
    );
  }
}
