import React from "react";
import { auth } from "../../../utils/auth";

async function page() {
  const session = await auth();
  console.log("a    ww", session);
  return <div>page</div>;
}

export default page;
