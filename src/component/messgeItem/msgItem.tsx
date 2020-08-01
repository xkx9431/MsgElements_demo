//
//
import React, { FC } from 'react';
import MessageContent ,{ MessageContentProps } from './msgContent'
import Avatar, { avatarSize } from '../avatar/avatar';


export type avatarPosition = 'left'| 'right'


interface MessageItemProps{
    avatar: boolean,
    avatarSrc:string,
    avatarPosition ?:avatarPosition,
    avatarSize ?: avatarSize,
    MessageContentProps:Partial<MessageContentProps> 
}



const MessageItem: FC<MessageItemProps> = (props)=>{

  const {
    avatar,
    avatarSrc,
    avatarPosition,
    avatarSize ,
    MessageContentProps
  } = props

  const avatarPositionLeft =  avatarPosition === 'left' ? true : false

  return ( 
    <div className= {"message-item-container "  + ( avatarPosition && avatarPositionLeft? 'message-item-recieved' : 'message-item-sended' ) }>
      { avatar ? <Avatar  size = { avatarSize || 'medium' }  src = { avatarSrc } /> : null }
      <MessageContent { ...MessageContentProps as MessageContentProps }/>
    </div>
  )

}

export default MessageItem
