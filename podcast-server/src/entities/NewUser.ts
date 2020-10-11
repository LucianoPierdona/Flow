import { Field, ObjectType } from "type-graphql";
import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Podcast } from "./Podcast";
import { toObjectId } from "../utils/ObjectID";

@ObjectType()
@Entity()
export class NewUser extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  _id!: typeof toObjectId;

  @Field()
  @Column()
  id: number = this._id;

  @Field()
  @Column({ unique: true })
  username!: string;

  @Column()
  password!: string;

  @OneToMany(() => Podcast, (podcast) => podcast.creator)
  podcasts: Podcast[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
