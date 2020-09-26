import { NewUser } from "../entities/NewUser";
import { MyContext } from "src/types";
import { Arg, Ctx, Field, InputType, Mutation, Resolver } from "type-graphql";
import argon2 from "argon2";

@InputType()
class UsernamePasswordInput {
  @Field()
  username: string;
  @Field()
  password: string;
}

@Resolver()
export class UserResolver {
  @Mutation(() => NewUser)
  async register(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { em }: MyContext
  ) {
    const hashedPassword = await argon2.hash(options.password);
    const user = em.create(NewUser, {
      id: Math.floor(Math.random() * 10000000 + 1),
      username: options.username,
      password: hashedPassword,
    });
    await em.persistAndFlush(user);
    console.log(user);
    return user;
  }
}
