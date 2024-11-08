import { useRef, useEffect } from 'react';

export default function useEffectOnLaunch(effectFunction, deps) {
    const firstRender = useRef(true);

    useEffect(() => {
        console.log('running useEffectOnLaunch');
        if (firstRender.current) {
            effectFunction();
            firstRender.current = false;
        }
    }, deps);
}
