import Link from "next/link";

export default function Loginform(){
    return( 
    <div className="grid place-items-center h-screen ">
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-blue-400">
            <h1 className="text-xl font-bold my-4 ">Enter the details</h1>
        

        <form className="flex flex-col gap-3">
            <input type="text" placeholder="email" />
            <input type="password" placeholder="password" />
            <button className="bg-blue-600  text-white font-bold cursor-pointer px-6 py-2">Login</button>
           
           <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">Error message</div>

            <Link className="text-sm  mt-3 text-right" href={"/register"}>Dont have an account? 
            <span className="underline">
            Register
            </span>
            </Link>
        </form>

        </div>

    </div>
    );
}