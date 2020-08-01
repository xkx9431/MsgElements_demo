import React, {FC,MouseEvent} from 'react';



export interface textMessageProps{
  text?:string;
  handleClick(e : MouseEvent<HTMLElement> ) : void
}

export const TextMessage: FC<textMessageProps> = (props) => {
  const {
    text,
    handleClick
  } = props
    return (
      <div className = 'text-msg-container' onClick = { handleClick } >
        { text }
      </div>
    )
}

export default TextMessage