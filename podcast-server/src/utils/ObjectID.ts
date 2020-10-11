import { ObjectID } from "typeorm";

export const toObjectId = (value: number | ObjectID): ObjectID => {
  return typeof value === "number" ? new ObjectID(value) : value;
};
