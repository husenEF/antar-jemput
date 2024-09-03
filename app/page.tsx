import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "@/src/components/buttons.component";
import { authOptions } from "@/src/lib/auth";
import { getServerSession } from "next-auth";


export default async function Home() {
  const session = await getServerSession(authOptions);
  
  
  console.log({ L13: session?.expires });

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
        <LoginButton />
        <RegisterButton />
        <LogoutButton />
        <ProfileButton />
        <h1>Server Session</h1>
        <pre>{JSON.stringify(session)}</pre>
      </div>
    </main>
  );
}
