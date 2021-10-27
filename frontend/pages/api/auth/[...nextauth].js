import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
console.log('id = '+process.env.DB_HOST)
console.log('id = '+process.env.DB_USER)

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.DB_HOST,
      clientSecret: process.env.DB_USER,
      authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
    })
  ],
  jwt : {
      encryption:true,
  },
  secret:process.env.secret,
  callbacks: {
    async jwt(token, account){
        if(account?.accessToken){
            token.accessToken = account.accessToken
        }
        return token; 
    },
    redirect: async(url, _baseurl)=>{
      if(url === '/profile'){
          return Promise.resolve('/');
      }  
      return Promise.resolve('/');
    }
  }
})