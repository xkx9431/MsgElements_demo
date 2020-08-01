//
//
import React, { FC } from 'react';
import MessageContent ,{ MessageContentProps } from './msgContent'
import Avatar, { avatarSize } from '../avatar/avatar';


interface MessageItemProps{
    avatar: boolean,
    avatarSrc:string,
    avatarPositionClass ?: string ,
    avatarSize ?: avatarSize,
    MessageContentProps:Partial<MessageContentProps> 
}



const MessageItem: FC<MessageItemProps> = (props)=>{

  const {
    avatar,
    avatarSrc,
    avatarPositionClass,
    avatarSize,
    MessageContentProps
  } = props

  return ( 
    <div className= { 'message-item-container ' + avatarPositionClass  }>
      { avatar ? <Avatar  size = { avatarSize || 'medium' }  src = { avatarSrc } /> : null }
      <MessageContent { ...MessageContentProps as MessageContentProps }/>
    </div>
  )

}

export default MessageItem
