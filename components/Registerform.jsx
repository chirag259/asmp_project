"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function Registerform(){


          const [name, setName]= useState("");
          const [email, setEmail]= useState("");
          const [password, setPassword]= useState("");
          const [mobile, setMobile]= useState("");
          const [error, setError]= useState("");

          const router=useRouter();
           const handleSubmit = async (e) => {
       
       
            e.preventDefault();

        if (!name || !email || !password || !mobile ) {
            setError("ALL FIELDS ARE NECESSARY");
            return;
        }


        try {
            const resuserexists=await axios.post("/api/userexists",
            {method:"POST",
             headers:
            {
                "Content-Type":"application/json,"
            },
             body:JSON.stringify({email}),
        });

         const {user}=await resuserexists.json();

         if(user){
            setError("user already exitst");
            return;
         }


            const res = await axios.post("/api/register",
            {method:"POST",
                headers: 
                { 
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify({ name, email, password, mobile, }),
            });

            if (res.ok) {
                const form = e.target;
                form.reset();
                router.push("/");



            }
            else {
                console.log("user registration failed");
            }

        }
        catch (error) {
            console.log("Error during registration: ", error);
        }
    };

          return(

        <div className="grid place-items-center h-screen ">
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-blue-400">
            <h1 className="text-xl font-bold my-4 ">Register</h1>
        

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Fullname" />
            <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="email" />
            <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password" />
            <input onChange={(e)=>setMobile(e.target.value)} type="tel" placeholder="mobile" />
            <button className="bg-blue-600  text-white font-bold cursor-pointer px-6 py-2">Register</button>

        { error&&(
           <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
           {error}
           </div>
        )
           }  


            <Link className="text-sm  mt-3 text-right" href={'/'}>Already have an account? 
            <span className="underline">
            Login
            </span>
            </Link>
        </form>

        </div>

    </div>

    );

}