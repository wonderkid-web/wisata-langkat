import React from "react";
import { auth, signOut } from "@/auth";


async function page() {
  const session = await auth();
  return (
    <div className="relative">
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">signout</button>
      </form>

      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}

export default page;
