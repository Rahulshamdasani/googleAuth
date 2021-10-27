# googleAuth
Using google authentication in Next JS

### npx create-next-app name

npx add next-auth

go to pages/api/auth

and create file [...nextauth].js

Then go to app.js and wrap it inside provider

<br/><br/>
go to google set the path to localhost:3000
<br/>
and redirect url to http://localhost:3000/api/auth/callback/google
<br/><br/>
Then copy the code inside ...nextauth.js 
<br/>
set the environment variables inside .env
and it should be good to go.

<br/>
Reference taken from
<code>https://next-auth.js.org/getting-started/example</code>