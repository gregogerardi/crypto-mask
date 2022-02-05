import {MutableRefObject, useEffect, useRef, useState} from "react";

const defaultOptions: IntersectionObserverInit = {
    threshold: 0.3
}
export const useElementOnScreen = (options: IntersectionObserverInit = defaultOptions):
    [MutableRefObject<null>, boolean] => {
    const containerRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    const callbackFunction = (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
    }
    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options)
        if (containerRef.current) observer.observe(containerRef.current)
        const refReference = containerRef.current
        return () => {
            if (refReference) observer.unobserve(refReference)
        }
    }, [containerRef, options])
    return [containerRef, isVisible]
}
