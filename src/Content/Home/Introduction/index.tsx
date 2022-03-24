import Section from "../../../Utils/Wrappers/Section";
import style from './style.module.css'
import fonts from 'theme/fonts/fonts.module.css'
import classNames from "classnames";
import { useHashScroll } from "react-hash-scroll";
import {useHashScrollDefaultOptions} from "../../../Layout/constant";

const descriptionCls = classNames(style.description, fonts.defaultFont)
const contentCls = classNames(style.content, fonts.red)
const Introduction = () => {
    const scrollRef = useHashScroll<HTMLDivElement>("introduction", useHashScrollDefaultOptions);
    return (
        <Section>
            <div className={style.container} ref={scrollRef}>
                <div className={contentCls}>
                    <h1 className={fonts.sectionHeader}>This is the title</h1>
                    <div className={descriptionCls}>
                        <span>This is some random content</span>
                        <span>This is some random content</span>
                        <span>This is some random content</span>
                        <span>This is some random content</span>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Introduction;
