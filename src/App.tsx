import React from 'react';
import './App.scss';

import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import Chat from './components/Chat';
import ChatInput from './components/ChatInput';
import { firebaseAuth } from './firebase';


export default function App() {

  const [user] = useAuthState(firebaseAuth);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(firebaseAuth, provider);
  };

  const logOut = () => {
    signOut(firebaseAuth);
  }


  return (
    <div className="App">
      <header className="App-header">
        <h3>ReactChatApp</h3>
        {
          user?
          <button className='btn btn-logout' onClick={logOut}>Logout</button>
          :<button className='btn btn-logout' onClick={signInWithGoogle}>Login</button>
        }
      </header>
      {
        user?
        (
          <>
            <div className="chat-body">
              <Chat/>
            </div>
            <div className="chat-input">
              <ChatInput/>
            </div>
          </>
        ):
        (
          <div>
            <p>Please Login to Continue</p>
          </div>
        )
      }
    </div>
  );
}