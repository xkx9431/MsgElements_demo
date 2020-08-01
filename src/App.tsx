import React, { } from 'react';

import Avatar from  './component/avatar'
import MessageItem from './component/messgeItem'
import { msgType } from './component/messgeItem/msgContent';
// const {
//   avatar,
//   avatarPosition,
//   avatarSize ,
//   MessageContentProps
// } = props
const testMessageItemProps = {
  avatar:true,
  avatarPostion:'right',
  avatarSrc:'https://xkx9431.github.io/xkx_blog/img/xkx_eye_photo.jpg',
  MessageContentProps:{
    msgType: 'text' as msgType,
    text:'hello man , this is the first draft version of msg elements, and this is a text message',
    handleClick : () => console.log( ' clicked text msg')
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
        Size medium
        <Avatar size= { 'medium'}
          src = { 'https://xkx9431.github.io/xkx_blog/img/xkx_eye_photo.jpg' }
          alt = {'sample avatar'}
          onAvatarClick = {  (e:any) => e.preventDefault()}
          />
          <br/>
      </div>

      <div className="message">
        <MessageItem {...testMessageItemProps}>

        </MessageItem>
      </div>

      </div>
    </div>
  );
}

export default App;
