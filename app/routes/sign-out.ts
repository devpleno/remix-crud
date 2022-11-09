import { LoaderFunction, redirect } from "@remix-run/node";
import { deleteAuth } from "lib/cookies.server";

export const loader: LoaderFunction = async () => {
  return redirect("/sign-in", {
    headers: {
      "Set-Cookie": await deleteAuth.serialize({}),
    },
  });
};
