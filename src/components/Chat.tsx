import { Query } from '@testing-library/react';
import { collection, doc, getDocs, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { firestore } from '../firebase';
import Message from './Message';


export default function Chat() {

const [messages, setMessages]: any = useState([]);

  const scrollDiv = useRef() as MutableRefObject<HTMLDivElement>;

  const messagesQuery = query(collection(firestore, 'messages'), orderBy('createdAt', 'desc'), limit(25));

  useEffect(()=>{
    const fetchMessages = onSnapshot(messagesQuery, (col: any) => {
      const newData = col.docs.map((query:any)=>({...query.data(), id:query.id})).reverse();
      setMessages(newData);
      scrollDiv.current.scrollIntoView({behavior:'smooth'})
    })
  }, [])

  

  return (
    <div className='chat-bubbles'>
        {
            <>
              {
                messages?.map((msg:any)=>(
                  <Message msg={msg} key={msg.id}/>
                ))
              }
              <div ref={scrollDiv}></div>
            </>
        }
    </div>
  )
}
