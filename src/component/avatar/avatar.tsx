import React, {FC,MouseEvent} from 'react';


export type avatarSize = 'large'| 'medium'| 'small'

interface avatarProps{
    size: avatarSize;
    className ?: string;
    src ?: string;
    alt ?:string;
    onAvatarClick?(e : MouseEvent<HTMLElement> ) : void;
}

export const Avatar: FC<avatarProps> = (props) => {
    const {
        size,
        src,
        alt,
        onAvatarClick,
    } = props

    const sizeClass = `avatar-size-${size}`

    return (
        <button className={'msg-avatar-generic ' + sizeClass}  onClick={ onAvatarClick ?  onAvatarClick : e=>e.preventDefault()}>
            <img src={src} alt={alt} className='msg-avatar-image'></img>;
        </button>
    );
}

export default Avatar;