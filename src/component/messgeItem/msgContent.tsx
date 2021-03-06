//
//
import React, {FC,MouseEvent } from 'react';

import TextMessage, { textMessageProps  } from './textMsg'
import SystemMessage, { systemMessageProps  } from './systemMsg'
import PhotoMessage, { photoMessageProps  } from './photoMsg'


export type msgType = 'system'| 'photo' | 'text'


export interface MessageContentProps{
    msgType: msgType;
    text?:string;
    handleClick?(e : MouseEvent<HTMLElement> ) : void,
    data?: string;
    photoMsg?:string;
    systemMsg?:string;
}



const generateMessageContent : FC<MessageContentProps> = ( msgProps: Partial< MessageContentProps> ) => {
  const {
    msgType,
    ...restProps
  } = msgProps
  switch (msgType ){
    case 'text':
      return <TextMessage  {...restProps as textMessageProps }/>
    case 'system':
      return <SystemMessage  {...restProps as systemMessageProps }/>
    case 'photo':
      return <PhotoMessage  {...restProps as photoMessageProps }/>
  }
  return <div></div>
}

const MessageContent: FC<MessageContentProps> = (props)=>{

  return generateMessageContent(props) ;
}

export default MessageContent
