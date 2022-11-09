import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { auth } from "lib/cookies.server";

const AdminHome = () => {
  const data = useLoaderData();
  return (
    <>
      <h1>Admin</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default AdminHome;
