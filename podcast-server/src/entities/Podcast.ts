import { Field, ObjectType } from "type-graphql";
import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { NewUser } from "./NewUser";

@ObjectType()
@Entity()
export class Podcast extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  _id!: number;

  @Field()
  @Column()
  id: number = this._id;

  @Field()
  @Column()
  creatorId: number;

  @ManyToOne(() => NewUser, (user) => user.podcasts)
  creator: NewUser;

  @Field()
  @Column()
  title!: string;

  @Field()
  @Column()
  url!: string;

  @Field()
  @Column()
  thumbnail!: string;

  @Field()
  @Column()
  description: string;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
