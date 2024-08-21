"use client";

import { useSession } from "next-auth/react";

const Page = () => {
  const { data: session } = useSession();

  return (
    <main id="main-user">
      <h1>Client Session</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </main>
  );
};

export default Page;
