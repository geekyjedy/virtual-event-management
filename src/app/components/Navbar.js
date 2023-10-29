import React from "react";
import Link from "next/link";

const Navbar = ()=>{
  return(
    <>
      <nav className="bg-gradient-to-r from-indigo-800 to-indigo-300 text-white text-lg font-sans flex space-x-4 items-center  justify-between gap-8 p-4">
        {/* ----------name of project---------- */}
        <Link className="site-name" href={"/"} >Virtual Event Management</Link>
        <ul className="flex">
          {/*----------login button---------- */}
          <li className="px-2"><Link href={"/login"}>
            <button className="bg-white border-2 text-center text-indigo-900 px-5 rounded-xl hover:bg-indigo-700 text-base hover:text-white "  >Login</button>
          </Link>
          </li>  
          {/*------------signup button---------- */}
            <li>
              New User?<span><Link href={"/signup"} className="text-xs text-indigo-900 underline hover:cursor-pointer" >Sign up</Link></span>
            </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;