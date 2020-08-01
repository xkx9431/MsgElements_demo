import React, {FC,MouseEvent} from 'react';



export interface photoMessageProps{
  src:string;
  onError?:any;
  alt:string
  handleClick (e : MouseEvent<HTMLElement> ) : void
}

export const PhotoMessage: FC<photoMessageProps> = (props) => {
  const {
    src,
    alt,
    handleClick
  } = props
    return (
      <div className = 'photo-msg-container' onClick = { handleClick} >
        <img src = { src } alt = {alt}/>
      </div>
    )
}

export default PhotoMessage