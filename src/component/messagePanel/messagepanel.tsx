//
import React, {FC, CSSProperties } from 'react';
import MessageItem from '../messgeItem'
import{ MessageItemProps }  from '../messgeItem/msgItem'

export type direction = 'horizontal'| 'vertical'

interface MessagePanelProps{
    direction?: direction;
    className ?: string;
    dataSource : MessageItemProps [];
    height?:string;
    width?:string;
}


const MessagePanel: FC<MessagePanelProps>  = ( props ) =>{
  const {
    direction,
    dataSource,
    height,
    width,
  } = props

  const styles = `{height: ${height} ,width: ${width}}` as CSSProperties

  const directionClass = direction === 'vertical' ?  'msg-panel-vertical' : 'msg-panel-horizontal';
  return (
    <div className={"msg-panel-contianer " + directionClass } >
      {
        dataSource.map( (itemProps,index) =>(
          <div key = { index } className = 'msg-item'  > 
            <MessageItem {...itemProps }/>
          </div>
        ) )
      }
    </div>
  )
}

export default MessagePanel;