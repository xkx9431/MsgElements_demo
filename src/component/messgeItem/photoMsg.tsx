import React, {FC,MouseEvent} from 'react';



export interface photoMessageProps{
  text?:string;
  handleClick (e : MouseEvent<HTMLElement> ) : void
}

export const PhotoMessage: FC<photoMessageProps> = (props) => {
  const {
    text,
    handleClick
  } = props
    return (
      <div className = 'photo-msg-container' onClick = { handleClick} >
        { text }
      </div>
    )
}

export default PhotoMessage