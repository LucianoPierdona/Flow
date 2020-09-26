import { MikroORM } from "@mikro-orm/core";
import { Podcast } from "./entities/Podcast";
import mikroOrmConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(mikroOrmConfig);

  orm.em.getConnection();

  const podcast = orm.em.create(Podcast, { title: "my fourth podcast" });
  await orm.em.nativeInsert(podcast);
};

main().catch((err) => {
  console.error(err);
});
