import style from './style.module.css'
import fonts from 'theme/fonts/fonts.module.css'
import classNames from "classnames";
import Section from "../../Utils/Wrappers/Section";
import {Link} from "react-router-dom";

const contentCls = classNames(style.content, fonts.red)
const NotFound = () => {
    return (
        <Section>
            <div className={style.container}>
                <div className={contentCls}>
                    <h1 className={fonts.sectionHeader}>Oops! Seems like we can not find the page you are looking for!</h1>
                    <h1 className={fonts.sectionHeader}>Why don't you double check the URL or try heading back towards our {' '}
                    <Link to={'/crypto-mask'}>
                        Home Page
                    </Link>
                    </h1>
                </div>
            </div>
        </Section>
    );
};

export default NotFound;
