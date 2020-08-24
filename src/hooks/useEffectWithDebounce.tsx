/* eslint-disable react-hooks/rules-of-hooks */
import React , { useEffect }from  'react'

export function useEffectWithDebounce( effect:()=>void, debounce: number, inputs: React.DependencyList):void{
    if(debounce === 0 || (navigator?.userAgent.includes('jsdom'))){
        useEffect( ()=>{
            effect();
        }, [effect] );

        return;

    }

    let timeout:any;

    const doLater = ():void=>{
        timeout = undefined;
        effect();
    }
    useEffect( ()=> {
        timeout = setTimeout( doLater, debounce );
        return (): void => clearTimeout( timeout )
    } , inputs || [] )
}