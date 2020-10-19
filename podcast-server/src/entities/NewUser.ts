import { Field, ObjectType } from "type-graphql";
import {
  Entity,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Podcast } from "./Podcast";

@ObjectType()
@Entity()
export class NewUser extends BaseEntity {
  @PrimaryGeneratedColumn()
  idServer: number;

  @Field()
  @Column()
  id!: number;

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
