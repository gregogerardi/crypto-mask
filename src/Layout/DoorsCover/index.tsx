import style from './style.module.css'
import door from 'assets/textures/pixerArtWood.jpeg'
import classNames from "classnames";
import {useToggle} from "../../Utils/CustomHooks/useToogle";
import {useMemo} from "react";

export const DoorsCover = () => {
    const [isOpen, {toggleOn}] = useToggle(false)
    const leftDoorCls = useMemo(() =>
        classNames(style.door, style.left, {[style.open]: isOpen}), [isOpen])
    const rightDoorCls = useMemo(() =>
        classNames(style.door, style.right, {[style.open]: isOpen}), [isOpen])
    return (
        <>
            <div
                className={leftDoorCls}
                style={{backgroundImage: `url(${door})`}}
                onClick={toggleOn}
            />
             <div
                className={rightDoorCls}
                style={{backgroundImage: `url(${door})`}}
                onClick={toggleOn}
            />
        </>
    )
}
