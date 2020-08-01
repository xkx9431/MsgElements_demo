//
import React, {FC, CSSProperties } from 'react';


export type direction = 'horizontal'| 'vertical'

interface MessagePanelProps{
    direction: direction;
    className ?: string;
    dataSource : object [];
    height:string;
    width:string;
}


const MessagePanel: FC<MessagePanelProps>  = ( props ) =>{
  const {
    direction,
    dataSource,
    height,

    
    width,
  } = props

  const styles = `{height:${height} ,width:${width}}` as CSSProperties

  const directionClass = direction === 'horizontal' ? 'msg-panel-horizontal' : 'msg-panel-vetical';
  return (
    <div className={"msg-panel-contianer " + directionClass }  style={ styles }>
      {
        dataSource.map( (item,index) =>(
          <div key = { index } > this is a  item </div>
        ) )
      }
    </div>
  )
}

export default MessagePanel;