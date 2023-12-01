import React from 'react';
import { auth } from './firebase'; // Adjust the path to your firebase.js file
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // handle user or perform other actions
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <div>
      <h2>Login Component</h2>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
};

export default Login;
