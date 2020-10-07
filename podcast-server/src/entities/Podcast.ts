import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Podcast {
  @Field()
  @PrimaryKey()
  _id!: number;

  @Field()
  @Property({ type: "number" })
  id: number = this._id;

  @Field(() => String)
  @Property({ type: "date" })
  createdAt = new Date();

  @Field(() => String)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();

  @Field()
  @Property({ type: "text" })
  title!: string;

  @Field()
  @Property({ type: "string" })
  url!: string;

  @Field()
  @Property({ type: "string" })
  thumbnail!: string;

  @Field()
  @Property({ type: "string" })
  description: string;
}
