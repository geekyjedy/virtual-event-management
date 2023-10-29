"use client"

import React,{useEffect} from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"
import toast from "react-hot-toast"
import axios from "axios"


const Login = ()=>{
    const router = useRouter();
    const [user,setUser] = React.useState({
        email :"",
        password:""
    })

    const [buttonDisabled,setButtonDisabled] = React.useState(false);
    const [loading,setLoading]=  React.useState(false)

    const onLogin = async ()=>{
        try {
            setLoading(true);
            const response = await axios.post("api/users/login",user)
            console.log("login success",response.data);
            toast.success("Login success");
            router.push("/profile")
        } catch (error:any) {
                console.log("login failed", error.message);
                toast.error(error.message);
        }finally{
            setLoading(false)
        }
        useEffect(()=>{
            if(user.email.length>0 && user.password.length>0){
                setButtonDisabled(false)
            }else{
                setButtonDisabled(true)
            }
        },[user])

    }
    return(
    <> 
        <div className="flex justify-center bg-white p-10 ">
            <div className="  border-4 border-slate-800 px-5 rounded-2xl py-5 shadow-2xl">
                <div className="mt-10 ">
                    <h2 className="text-center text-2xl text-indigo-900 font-display font-normal lg:text-left 
                    xl:text-bold">Log in</h2>
                    <div className="mt-10">
                        <form>
                            {/* -------email field----- */}
                            <div>
                                <div className="text-xs font-bold text-gray-700 tracking-wide">Email </div>
                                <input className="w-full text-black text-sm py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="text"  placeholder="elonmusk@tesla.com" value={user.email} id="email" onChange={(e)=>setUser({...user,email:e.target.value})}/>
                            </div>
                            {/* -----password field------- */}
                            <div className="mt-8">
                                <div className="flex justify-between items-center">
                                    <div className="text-xs font-bold text-gray-700 tracking-wide">
                                        Password
                                    </div>
                                </div>
                                <input className="w-full text-black  text-sm py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="password" placeholder="Enter your password" value={user.password} id="password" onChange={(e)=>setUser({...user,password:e.target.value})}/>
                            </div>
                            {/* ---------button----- */}
                            <div className="mt-10">
                                <button className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full 
                                font-normal font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg" type="submit" onClick={onLogin}>
                                    Log In
                                </button>
                            </div>
                            <div className="text-xs font-bold text-gray-700 tracking-wide flex justify-center aligh-center">new user? <Link href={"/signup"} className="text-indigo-800" >sign up</Link> </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    </>
    )
}

export default Login;