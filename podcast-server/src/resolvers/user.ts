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
  async me(@Ctx() { req, em }: MyContext) {
    //you are not logged in

    console.log("before: ", req.session.userId);

    if (!req.session.userId) {
      return null;
    }

    console.log("after: ", req.session.userId);

    const user = await em.findOne(NewUser, { id: req.session.userId });
    return user;
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { em, req }: MyContext
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
    const user = em.create(NewUser, {
      id: Math.floor(Math.random() * 10000000 + 1),
      username: options.username,
      password: hashedPassword,
    });
    try {
      await em.persistAndFlush(user);
    } catch (err) {
      console.log(err);
      if (err.detail.includes("already exists")) {
        // duplicate username error
        return {
          errors: [
            {
              field: "email",
              message: "username already taken",
            },
          ],
        };
      }
    }

    console.log("reqb", req.session);

    req.session.userId = user.id;

    console.log("reqa", req.session);

    return { user };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { em, req }: MyContext
  ): Promise<UserResponse> {
    const user = await em.findOne(NewUser, { username: options.username });
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
}
