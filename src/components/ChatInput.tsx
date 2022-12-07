import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { firebaseAuth, firestore } from '../firebase';

export default function ChatInput() {

  const [message, setMessage] = useState('');

  const sendMessage = async (e:any) => {
    e.preventDefault();
    const { uid, displayName, photoURL }:any = firebaseAuth.currentUser;
    console.log(firebaseAuth.currentUser);
    addDoc(collection(firestore, 'messages'), {
      text: message,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
      displayName,
    })
    setMessage('');
  }

  return(
    <>
      <form onSubmit={sendMessage}>
        <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Enter Meesage here!"/>
        <button className='btn btn-send'>Send</button>
      </form>
    </>
  )
}