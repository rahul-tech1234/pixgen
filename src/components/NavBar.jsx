"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const userData=authClient.useSession();
  //console.log(userData.data?.user.image);
  const handleSignOut=async()=>{
    await authClient.signOut();
  }
  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">pixgen.</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-photos"}>All Photos</Link>
          </li>
          <li>
            <Link href={"/pricing"}>Pricing</Link>
          </li>
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          {
            !userData &&
            <ul className="flex items-center  text-sm gap-5">
            <li>
              <Link href={"/signup"}>SignUp</Link>
            </li>
            <li>
              <Link href={"/signin"}>SignIn</Link>
            </li>
          </ul>
        }
          
        {
          userData && (
            <div className="flex gap-3">
              <Avatar>
        <Avatar.Image alt="John Doe" src="{userData.data?.user.image}" referrerPolicy="no-referrer" />
        <Avatar.Fallback className="text-2xl items-stretch flex">{userData.data?.user.name.toUpperCase().charAt(0)}</Avatar.Fallback>
      </Avatar>
        <Button variant="danger" onClick={handleSignOut}>SignOut</Button>
            </div>
          ) 
           
          }
          
        
        </div>
      </nav>
    </div>
  );
};

export default Navbar;