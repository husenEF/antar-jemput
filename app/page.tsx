import { authOptions } from "@/src/lib/auth";
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const authData = await auth();
  const currentUserData = await currentUser();

  console.log({ authData, currentUserData });

  return (
    <main
      id="page-main"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}>
      <div>
        <h1>Server Session</h1>
        <pre>{JSON.stringify({})}</pre>
      </div>
    </main>
  );
}
