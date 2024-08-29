import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="justify-center items-center d-flex">
      <SignIn />
    </div>
  );
}
