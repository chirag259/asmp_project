import {connectMongoDB} from '../../../llib/mongodb';
import User from '../../../models/usermodel';
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';



export async function POST(req){
    try {
        const { name, email, password, mobile } = await req.json();
        console.log("hello its post function");
         
        const hashedPassword = await bcrypt.hash(password,10);
         await connectMongoDB();
         await  User.create({name,email,password:hashedPassword,mobile});

        return NextResponse.json({message: "User registered "},{status:201});
       
    } 
    catch (error) 
    {
        return NextResponse.json(
            { message: "An error occurred while registering the user." },
            { status: 500 }
        
        );
        console.log("hello 1"); 
    }
}