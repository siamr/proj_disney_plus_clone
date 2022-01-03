import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { db } from "../../../firebase";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: "542310692060-aee7tsbeo3g3ogl7qe4bm54ppej5p724.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // ...add more providers here
  ],

  adapter: FirebaseAdapter(db),
});
