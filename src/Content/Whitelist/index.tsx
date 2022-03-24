import style from './style.module.css'
import fonts from 'theme/fonts/fonts.module.css'
import classNames from "classnames";
import Section from "../../Utils/Wrappers/Section";

const contentCls = classNames(style.content, fonts.red)
const WhiteList = () => {
    return (
        <Section>
            <div className={style.container}>
                <div className={contentCls}>
                    <h1 className={fonts.sectionHeader}>Placeholder for buy nft section</h1>
                </div>
            </div>
        </Section>
    );
};

export default WhiteList;
