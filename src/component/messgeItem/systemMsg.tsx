import React, {FC,MouseEvent,useState} from 'react';



export interface systemMessageProps{
  systemMsg:string;
  handleClick? (e : MouseEvent<HTMLElement> ) : void
}

export const SystemMessage: FC<systemMessageProps> = (props) => {
  const {
    systemMsg
  } = props
  const [ systemInfo, setSystemInfo] =  useState( systemMsg|| 'system info' )
    return (
      <div className = 'system-msg-container' onClick = { e =>{ e.preventDefault();setSystemInfo( 'this system info has been read !')} } >
        <p>{ systemInfo }</p>
      </div>
    )
}

export default SystemMessage