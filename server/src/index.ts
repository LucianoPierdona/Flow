import { MikroORM } from "@mikro-orm/core";
import { Podcast } from "./entities/Podcast";
import mikroOrmConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(mikroOrmConfig);
  await orm.getMigrator().up();

  const podcast = orm.em.create(Podcast, { title: "my first podcast" });
  await orm.em.persistAndFlush(podcast);
};

main().catch((err) => {
  console.error(err);
});
