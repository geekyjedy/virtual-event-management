import connect from "@/dbConfig/dbConfig"
import User from "@/model/user";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json()
        const {email,password} = reqBody;
        console.log(reqBody);

        //check user is exist or not
        const user = await User.findOne({email});
        if(user!){
            return NextResponse.json({error:"user not exist"},{status:400})
        }

        const validPassword = await bcryptjs.compare(password,user.password)
            if(!validPassword){
                return NextResponse.json({error:"invalid password"},{status:400})
            }
        //creation  of JWT tokens
        const tokendata = {
            id:user._id,
            email:user.email
        }
        const token = await jwt.sign(tokendata, process.env.SECRET_TOKEN!)

        const response = NextResponse.json({
            message:"login successfull",
            success:true
        })

        response.cookies.set("token",token,{
            httpOnly:true
        })
        return response;

    } catch (error) {
        return  NextResponse.json({error:error.message},{status:500})
    }
}