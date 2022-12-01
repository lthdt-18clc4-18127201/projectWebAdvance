import { useState, useEffect } from 'react';
import jwtDecode from "jwt-decode";

function LoginGooglePage() {
  const [user, setUser] = useState({});

  function handleCallbackResponse(response){
    const userObject =jwtDecode(response.credential);
    console.log("Encoded JWT ID token: {$response.credential)}");
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(){
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(()=>{
        /* global google */
      google.accounts.id.initialize({
        client_id:"166244307267-5nqmrkvug5isrni7pv2pietceivt1tsc.apps.googleusercontent.com",
        callback: handleCallbackResponse
      });

      google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        {theme: "outline",size :"large"}
      );

      google.accounts.id.prompt();
  },[]);
  // If we have no user: sign in button
  // If we have a user: show the log out
  
  return (
    <div className="App">
      <div id ="signInDiv">Sign in -Choose account to sign in
      </div>
      { user &&
      <div>
        <img src={user.picture} alt="user profile"/>
        <h3>{user.name}</h3>
      </div>
      }
      
      {
        Object.keys(user).length !==0 && 
        <button type='button' onClick={(e)=>handleSignOut(e)}>Sign out</button>
      }
      
    </div>
  );
}


  export default LoginGooglePage;