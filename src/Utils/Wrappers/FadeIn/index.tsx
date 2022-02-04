import {useElementOnScreen} from "../../CustomHooks/useElementOnScreen";
import classNames from "classnames";
import animations from "theme/animations.module.css";
import {FC, useEffect, useState} from "react";

const FadeIn: FC = ({children}) => {
    const [containerRef, isVisible] = useElementOnScreen()
    const [loaded, setLoaded] = useState(false)
    const [sectionCls, setSectionCls] = useState(animations.willFadeUp)
    useEffect(()=>{
        if(isVisible && !loaded){
            setSectionCls(classNames(animations.didFadeUp))
            setLoaded(true)
        }
    },[isVisible, loaded])

    return (
        <section ref={containerRef} className={sectionCls}>
            {children}
        </section>
    );
};

export default FadeIn;
