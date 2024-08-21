import { getServerSession } from "next-auth";
import Link from "next/link";
import { LoginButton, LogoutButton } from "../buttons.component";

const Header: React.FC = async () => {
  const session = await getServerSession();
  console.log({ session });

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center max-w-7xl sm:px-6 lg:px-8">
        <Link href="/">Angkot</Link>
        <nav className="space-x-4">
          <Link href="/">Home</Link>
          {session && (
            <>
              <Link href="/user">My Profile</Link>
              <Link href={"/anak"}>Anak</Link>
              <Link href={"/kendaraan"}>Kendaraan</Link>
              <Link href="/antar-jemput">Antar Jemput</Link>
            </>
          )}
        </nav>
        <div>{session ? <LogoutButton /> : <LoginButton />}</div>
      </div>
    </header>
  );
};

export default Header;
