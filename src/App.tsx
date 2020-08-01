import React, { MouseEvent } from 'react';

import Avatar from  './component/avatar'
import MessageItem from './component/messgeItem'
import { msgType } from './component/messgeItem/msgContent';
// const {
//   avatar,
//   avatarPosition,
//   avatarSize ,
//   MessageContentProps
// } = props
const textMessageItemProps1 = {
  avatar:true,
  avatarPositionClass:'message-item-sended',
  avatarSrc:'https://xkx9431.github.io/xkx_blog/img/xkx_eye_photo.jpg',
  MessageContentProps:{
    msgType: 'text' as msgType,
    text:'hello man , this is the first draft version of msg elements, and this is a sended text message ',
    handleClick : () => console.log( ' clicked text msg')
  }
}
const textMessageItemProps2 = {
  avatar:true,
  avatarPositionClass:'message-item-recieved',
  avatarSrc:'https://xkx9431.github.io/xkx_blog/img/xkx_eye_photo.jpg',
  MessageContentProps:{
    msgType: 'text' as msgType,
    text:'hello man , this is the first draft version of msg elements, and this is a recieved text message',
    handleClick : () => console.log( ' clicked text msg')
  }
}

const systemMessageItemProps = {
  avatar:false,
  MessageContentProps:{
    msgType: 'system' as msgType,
    systemMsg:'hello man , this is the first draft version of msg elements, and this is a system message',
  }
}

const photoMessageItemProps = {
  avatar:true,
  avatarPositionClass:'message-item-recieved',
  avatarSrc:'https://xkx9431.github.io/xkx_blog/img/xkx_eye_photo.jpg',
  MessageContentProps:{
    msgType: 'photo' as msgType,
    src : 'https://xkx9431.github.io/xkx_blog/img/xkx_eye_photo.jpg',
    alt : 'this is a photo alt',
    handleClick: (e: MouseEvent<HTMLElement>)=>{
      e.preventDefault();
      alert( 'please verify, then download!!!!' );
    }
  }
}


function App() {
  return (
    <div >
      <h1>
        Message Elements using typescript
      </h1>
      <br/>
      <div className="show-panel">
      <div className="avatar">

        <br/>
        Avatar Size medium
        <Avatar size= { 'medium'}
          src = { 'https://xkx9431.github.io/xkx_blog/img/xkx_eye_photo.jpg' }
          alt = {'sample avatar'}
          onAvatarClick = {  (e:any) => e.preventDefault()}
          />
          <br/>
      </div>

      <div className="message">
        text message (sended)
        <MessageItem {...textMessageItemProps1}/>
        <br/>
        text message (recieved)
        <MessageItem {...textMessageItemProps2}/>
        <br/>
        text message (sended)
        <MessageItem {...textMessageItemProps1}/>
        <br/>
        text message (recieved)
        <MessageItem {...textMessageItemProps2}/>
        <br/>
        text message (sended)
        <MessageItem {...textMessageItemProps1}/>
        <br/>
        text message (recieved)
        <MessageItem {...textMessageItemProps2}/>
        <br/>
        system 
        <MessageItem {...systemMessageItemProps}/>
        <br/>
        photo (recieved)
        <MessageItem {...photoMessageItemProps}/>
        <br/>
      </div>

      </div>
    </div>
  );
}

export default App;
