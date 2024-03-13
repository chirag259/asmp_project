import { NextResponse } from 'next/server';
import {connectMongoDB} from '../../../llib/mongodb';
import User  from '../../../models/usermodel';


// export async function POST(req){
//     try {
//         await connectMongoDB();
//         const {email}=await req.json();
//         const user=await User.findOne({email}).select("_id");
//         console.log("user:" ,user);
//         return NextResponse.json({user});
//     } catch (error) {
//         console.log(error)
        
//     }
// }