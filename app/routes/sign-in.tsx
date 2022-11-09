import { ActionFunction, json, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { getModels } from "lib/db.server";
import { signToken } from "lib/jwt.server";
import { auth } from "../../lib/cookies.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email: string = (formData.get("email") as string) || "";
  const passwd = formData.get("passwd") as string;

  const { User } = await getModels();
  const user = await User.findOne({ email });
  if (user) {
    if (user.passwd === passwd) {
      const payload = {
        id: user.id,
        email: user.email,
      };
      const token = signToken(payload);
      const cookie = { id: user.id, email, token };
      return redirect("/admin", {
        headers: {
          "Set-Cookie": await auth.serialize(cookie),
        },
      });
    }
  }

  return json({});
};

const SignIn = () => {
  return (
    <>
      <h1>Sign-in</h1>
      <Form method="post">
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="passwd" placeholder="senha" />
        <button type="submit">Sign-in</button>
      </Form>
    </>
  );
};
export default SignIn;
