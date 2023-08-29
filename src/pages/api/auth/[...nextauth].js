import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { authAxios } from "../../../tools/libraries/axios";
import { ENDPOINTS } from "../../../constants/endpoints";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      id: "credentials",
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const { email, password } = credentials;

        console.log(email, password);

        console.log("Authorize function called");

        // login api call to the server
        const { status, data } = await authAxios.post(ENDPOINTS.LOGIN, {
          email,
          password,
        });

        console.log("after login request");

        console.log(`status: ${status} data:${data}`);

        if (status === 200) {
          console.log(data);
          // const hashedToken = data?.hashedToken;
          // console.log(hashedToken);
          const user = {
            name: `${data.user.otherNames} ${data.user.lastName}`,
            email: data.user.email,
            phoneNumber: data.user.phoneNumber,
            accessToken: data.token,
            role: data.user.role,
            address: data.user.address,
          };
          console.log(user);
          return user;
        } else {
          // console.log("run");
          // console.log(status, data);
          return null;
        }
      },
    }),
  ],

  secret: "Thisisthesecret",

  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },

    // TODO: how to update the token with the user's information
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = user.accessToken;
        token.phoneNumber = user.phoneNumber;
        token.role = user.role;
        token.address = user.address;
      }
      return token;
    },

    // TODO: check how to update the user object in the session and get access to the access token and the user type
    async session({ session, token, user }) {
      session.user.accessToken = token.accessToken;
      session.user.phoneNumber = token.phoneNumber;
      session.user.role = token.role;
      session.user.address = token.address;

      return session;
    },
  },

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "../../login",
  },
};

export default NextAuth(authOptions);
