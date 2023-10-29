import connect from "@/dbConfig/dbConfig"
import User from "@/model/user";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

//----------post request-------
export async function POST(request: NextRequest) {
  try {
    //storing new user's signup data into variable
    const reqBody = await request.json();

    //destructuring that data
    const {firstname,lastname,email,mobile,password}= reqBody;
    console.log(reqBody);
    

    //checking if user with that email address is alread exist or not
    const userCheck = await User.findOne({email})
    if(userCheck){
        return NextResponse.json({error:"user is  already exist"},{status:400})
    }

    //encrypting the password
    const pass = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash
    (password,pass)

    //saving user in database
    const newUser = new User({
        firstname,
        lastname,
        email,
        mobile,
        password:hashPassword
    })

    const savedUser = await newUser.save();
    console.log(savedUser);
    

    return NextResponse.json({
        message:"user created",success:true, savedUser
    })

  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
