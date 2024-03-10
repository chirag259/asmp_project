import NextAuth from "next-auth/next";

import Credentials from "next-auth/providers/credentials";

const authOptions={
    providers:[
        CredentialsProvider({
            name:"credentials",
            

        })
    ]
}