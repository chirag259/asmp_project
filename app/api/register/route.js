import {connectMongoDB} from '../../../llib/mongodb';
import User from '../../../models/usermodel';
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";



export async function POST(req){
    try {
        const body = await req.json();
        const { name, email, password, mobile } = body;

        if(!name && name.length <2){
            return NextResponse.json({error:"name is required"},{status:400});
        }

        
        const user=await User.findOne({email})

        if(user){
            return NextResponse.json(
                {error:"user already exists with same email",},
                {status:400}
            );  
            
        }


        console.log("hello its post function");
         
        const hashedPassword = await bcrypt.hash(password,10);
        await connectMongoDB();
        await  User.create({name,email,password:hashedPassword,mobile});

        return NextResponse.json({message: "User registered "},{status:201});
       
    } 
    catch (error) 
    {
        console.log("hello 1");
        return NextResponse.json(
            { message: "An error occurred while registering the user." },
            { status: 500 }
        
        );

    }
}