import Header from "Layout/Header";
import {DoorsCover} from "Layout/DoorsCover";
import {FC} from "react";
import style from './style.module.css'

const Layout: FC = ({children}) => (
    <>
        <DoorsCover/>
        <div className="layout">
            <Header/>
            <div className={style.content}>
                {children}
            </div>
        </div>
    </>

);

export default Layout;
