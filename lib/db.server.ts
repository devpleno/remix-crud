import { connect } from "trilogy";
import { User } from "models/User";
import { Quote } from "models/Quote";

const db = connect("./file.db", {
  client: "sql.js",
});

export const getModels = async () => {
  const Quote = await db.model<Quote>("quotes", {
    quote: String,
    author: String,
    id: "increments",
  });
  const User = await db.model<User>("users", {
    email: String,
    passwd: String,
    id: "increments",
  });

  // seed
  const userRoot = await User.findOne({ id: 1 });
  if (!userRoot) {
    await User.create({
      email: "tuliofaria@devpleno.com",
      passwd: "abcd1234",
    });
  }

  return { Quote, User };
};
