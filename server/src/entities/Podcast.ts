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
  @PrimaryGeneratedColumn()
  idServer: number;

  @Field()
  @Column()
  id!: number;

  @Field()
  @Column()
  creatorId: number;

  @Field()
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
