"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast"
import axios from "axios";


const Signup = () => {
  const router = useRouter();
    const [user,setUser]= React.useState({
        firstname:"",
        lastname:"",
        email:"",
        mobile:"",
        password:""
    })

const [loading,setLoading] = React.useState(false)

    const onSignup = async ()=>{
      try {
        setLoading(true);
       const responce = await axios.post("/api/users/signup",user);
       console.log("sign up success ", responce.data);
       router.push("/login")
      } catch (error) {
        toast.error(error.message);
      }finally{
        setLoading(false);
      }
    }

    
    
    return (
      <>
        <div className="flex justify-center py-5 bg-white ">
          <div className=" border-4 border-slate-800 px-5 rounded-2xl py-5 shadow-xl">
            <div className="mt-10 ">
              <h2
                className="text-center text-2xl text-indigo-900 font-display font-normal lg:text-left 
                xl:text-bold"
              >
                Register here
              </h2>
              <div className="mt-12">
                <form>
                  {/* ----------firstname & lastname --------- */}
                  <div className="flex justify-between">
                    {/* -------firstname------- */}
                    <div>
                      <div className="text-xs font-bold text-gray-700 tracking-wide">
                        Firstname
                      </div>
                      <input
                        className="w-full text-black border-gray-700 text-sm py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                        placeholder="Dominic"
                        value={user.firstname} type="text" id="firstname" onChange={(e)=>setUser({...user,firstname:e.target.value})}
                      />
                    </div>
                    {/* ---------lastname-------- */}
                    <div>
                      <div>
                        <div className="text-xs font-bold text-gray-700 tracking-wide">
                          Lastname
                        </div>
                      </div>
                      <input
                        className="w-full text-black border-gray-700 text-sm py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                        placeholder="Dominic"
                        value={user.lastname} type="text" id="lastname" onChange={(e)=>setUser({...user,lastname:e.target.value})}
                      />
                    </div>
                  </div>
                  {/*------------email field--------- */}
                  <div>
                    <div className="my-5">
                      <div>
                        <div className="text-xs font-bold text-gray-700 tracking-wide">
                          Email
                        </div>
                      </div>
                      <input
                        className="w-full text-black border-gray-700 text-sm py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                        placeholder="Enter your email"
                        value={user.email} type="text" id="email" onChange={(e)=>setUser({...user,email:e.target.value})}
                      />
                    </div>
                  </div>
                  {/* ------------mobile number---------- */}
                  <div>
                    <div className="my-5">
                      <div>
                        <div className="text-xs font-bold text-gray-700 tracking-wide">
                          Mobile number
                        </div>
                      </div>
                      <input
                         className="w-full border-gray-700 text-black  text-sm py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                        placeholder=" Enter your mobile number" maxLength={10} type="number" value={user.mobile} id="mobile" onChange={(e)=>setUser({...user,mobile:e.target.value})}
                      />
                    </div>
                  </div>
                  {/* ------------password ----------- */}
                  <div>
                    <div className="my-5">
                      <div>
                        <div className="text-xs font-bold text-gray-700 tracking-wide">
                          Password
                        </div>
                      </div>
                      <input
                         className="w-full text-black border-gray-700 text-sm py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                        placeholder=" Enter your desired password" type="password" value={user.password} id="password" onChange={(e)=>setUser({...user,password:e.target.value})}
                      />
                    </div>
                  </div>
                  {/* ----------sign up button------- */}
                  <div className="mt-10">
                    <button onClick={onSignup}
                      className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full 
                      font-normal font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                      shadow-lg"
                      type="submit"
                    >
                      {loading?"processing":"signup"}
                    </button>
                  </div>
                  {/*-------login link------ */}
                    <div className="text-xs font-bold text-gray-700 tracking-wide flex justify-center aligh-center">already have account? <Link href={"/login"} className="text-indigo-800" >login here</Link> </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Signup;
  