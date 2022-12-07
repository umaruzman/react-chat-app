import moment from 'moment';
import React from 'react'
import { firebaseAuth } from '../firebase'

export default function Message({msg}:any) {

    const messageClass = firebaseAuth.currentUser?.uid === msg?.uid ? 'bubble sent' : 'bubble received';
    const name = firebaseAuth.currentUser?.uid === msg?.uid ?  'You': msg?.displayName;
    
    const dateTime = moment(msg.createdAt?.toDate()).format('DD/MM/YYYY HH:mm');

    return (
        <div className={messageClass}>
            <div className='bubble-image'>
                <img src={msg?.photoURL} alt={name} referrerPolicy="no-referrer"/>
            </div>
            <div className='spacing-div'></div>
            <div className='bubble-text'>
                <span className='name'>{name}</span>
                <span className='message'>{msg?.text}</span>
                <span className='time'>{dateTime}</span>
            </div>
        </div>
    )
}
