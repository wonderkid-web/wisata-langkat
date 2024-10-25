import { getDoc, getDocs, query, where } from "firebase/firestore";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { pengunjungCollection } from "./src/firebase";
// Your own logic for dealing with plaintext password strings; be careful!

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.

      //@ts-ignore
      authorize: async (credentials) => {
        // const qEmail = query(
        //   pengunjungCollection,
        //   where("email", "==", credentials.email)
        // );
        // const userEmail = await getDocs(qEmail);

        // const qPassword = query(
        //   pengunjungCollection,
        //   where("password", "==", credentials.password)
        // );
        // const userPassword = await getDocs(qPassword);

        const user = (await getDocs(pengunjungCollection)).docs
          .map((d) => ({ ...d.data(), id: d.id }))
          .find(
            (u: any) =>
              u.email == credentials.email && u.password == credentials.password
          );

        // logic to salt and hash password

        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("User not found.");
        }

        // return user object with their profile data
        // return userEmail.docs.map((d) => ({ ...d.data(), id: d.id }));
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
});

// import NextAuth from "next-auth"
// import Credentials from "next-auth/providers/credentials"
// import { authConfig } from "./auth.config"

// export const { auth, signIn, signOut, handlers } = NextAuth({
//   ...authConfig,
//   providers: [
//     Credentials({
//       async authorize(credentials) {
//         // This is where you would typically validate the user credentials
//         // For this example, we'll just check if the email and password are provided
//         const { email, password } = credentials as { email: string; password: string }

//         if (email === "user@example.com" && password === "password") {
//           return { id: "1", name: "User", email: "user@example.com" }
//         }
//         return null
//       }
//     })
//   ],
// })
