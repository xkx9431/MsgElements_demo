import React, {FC,MouseEvent} from 'react';



export interface systemMessageProps{
  text?:string;
  handleClick (e : MouseEvent<HTMLElement> ) : void
}

export const SystemMessage: FC<systemMessageProps> = (props) => {
  const {
    text,
    handleClick
  } = props
    return (
      <div className = 'system-msg-container' onClick = { handleClick} >
        { text }
      </div>
    )
}

export default SystemMessage