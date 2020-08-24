import React, { useRef, useEffect} from 'react'

export function useClickOutSide( Component: any, onClickOutSide : ()=> void){
    return ( props:{}) =>{
        const node: any  = useRef();

        const handleClick = ( ev: any) =>{
            if(!node.current.contains( ev.target)){
                onClickOutSide();
            }
        };

        useEffect( ()=>{
            document.addEventListener( 'click',handleClick);
            return (): void =>{
                document.removeEventListener('click',handleClick);
            }
        },[]);
        return (
            <div ref = {node}>
                <Component {...props}/>
            </div>
        )
    }
}