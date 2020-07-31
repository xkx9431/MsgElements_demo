import React, {FC} from 'react';


type avatarSize = 'large'| 'medium'| 'small'

interface avatarProps{
    size: avatarSize;
    className ?: string;
    src ?: string;
    alt ?:string;
    onAvatarClick ?: any;
}

export const Avatar: FC<avatarProps> = (props) => {
    const {
        size,
        src,
        alt,
        onAvatarClick
    } = props

    const sizeClass = `avatar-size-${size}`

    return (
        <button className={'msg-avatar-generic ' + sizeClass} onClick={( e ) => onAvatarClick( e )}>
            <img src={src} alt={alt} className='msg-avatar-image'></img>;
        </button>
    );
}

export default Avatar;