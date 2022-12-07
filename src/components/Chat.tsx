import { collection, doc, getDocs, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { firebaseAuth, firestore } from '../firebase';
import Message from './Message';


export default function Chat() {

const [messages, setMessages]: any = useState([]);

  // const fetchMessages = async () => {
  //   await getDocs(query(collection(firestore, 'messages'),orderBy('createdAt'), limit(25)))
  //     .then(querySnapshot=>{
  //       const newData = querySnapshot.docs
  //         .map(doc=>({...doc.data(), id:doc.id}))
  //       setMessages(newData);
  //     })
  // };

  const messagesQuery: any = query(collection(firestore, 'messages'), orderBy('createdAt', 'desc'), limit(25));

  const fetchMessages = onSnapshot(messagesQuery, (col: any) => {
    const newData = col.docs.map((query:any)=>({...query.data(), id:query.id})).reverse();
    setMessages(newData);
  })

  // useEffect(()=>{
  // }, [])

  return (
    <div className='chat-bubbles'>
        {
            messages?.map((msg:any)=>(
              <Message msg={msg} key={msg.id}/>
            ))
        }
    </div>
  )
}
