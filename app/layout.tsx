import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import LoginBtn from "./LoginBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { LogOutBtn } from "./LogoutBtn";
Link;
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let session = await getServerSession(authOptions);
  console.log(session);
  return (
    <html lang="en">
      <body>
        <div className="navbar">
          <Link href="/" className="logo">
            Appleforum
          </Link>
          <Link href="/list">List</Link>
          <Link href="/write">write</Link>
          {session ? (
            <span>
              {session.user?.name}
              <LogOutBtn />
            </span>
          ) : (
            <LoginBtn />
          )}
        </div>{" "}
        {children}
      </body>
    </html>
  );
}
