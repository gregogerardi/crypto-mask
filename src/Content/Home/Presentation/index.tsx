import Section from "../../../Utils/Wrappers/Section";
import style from './style.module.css'
import fonts from 'theme/fonts/fonts.module.css'
import classNames from "classnames";
import perrito from "assets/dogs/dog1.jpg";
import {useHashScroll} from "react-hash-scroll";
import {useHashScrollDefaultOptions} from "../../../Layout/constant";

const nftContentCls = classNames(style.nftContent, fonts.defaultFont)
const contentCls = classNames(style.content)
const nftDescriptionCls = classNames(style.nftDescription)
const Presentation = () => {
    const scrollRef = useHashScroll<HTMLDivElement>("presentation", useHashScrollDefaultOptions);
    return (
        <Section>
            <div className={style.container} ref={scrollRef}>
                <div className={contentCls}>
                    <h1 className={fonts.sectionHeader}>This is the title</h1>
                    <div className={nftContentCls}>
                        <img src={perrito} alt="husky"/>
                        <div className={nftDescriptionCls}>
                            <span>This is some random content about that lovely husky</span>
                            <span>This is some random content about that lovely husky</span>
                            <span>This is some random content about that lovely husky</span>
                            <span>This is some random content about that lovely husky</span>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Presentation;
