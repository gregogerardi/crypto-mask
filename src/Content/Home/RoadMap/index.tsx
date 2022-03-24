import Section from "../../../Utils/Wrappers/Section";
import style from './style.module.css'
import fonts from 'theme/fonts/fonts.module.css'
import classNames from "classnames";
import { useHashScroll } from "react-hash-scroll";
import {useHashScrollDefaultOptions} from "../../../Layout/constant";
import FadeIn from "../../../Utils/Wrappers/FadeIn";

const descriptionCls = classNames(style.description, fonts.defaultFont, fonts.size26)
const RoadMap = () => {
    const scrollRef = useHashScroll<HTMLDivElement>("roadmap", useHashScrollDefaultOptions);
    return (
        <Section>
            <div className={style.container} ref={scrollRef}>
                <div className={style.content}>
                    <FadeIn>
                        <h1 className={fonts.sectionHeader}>RoadMap to make a puppy happy</h1>
                    </FadeIn>
                    <div className={descriptionCls}>
                        <FadeIn>
                            <span>Feed him</span>
                        </FadeIn>
                        <FadeIn>
                            <div className={style.line}/>
                        </FadeIn>
                        <FadeIn>
                            <span>Love him</span>
                        </FadeIn>
                        <FadeIn>
                            <div className={style.line}/>
                        </FadeIn>
                        <FadeIn>
                            <span>Feed him</span>
                        </FadeIn>
                        <FadeIn>
                            <div className={style.line}/>
                        </FadeIn>
                        <FadeIn>
                            <span>Love him</span>
                        </FadeIn>
                        <FadeIn>
                            <div className={style.line}/>
                        </FadeIn>
                        <FadeIn>
                            <span>Feed him</span>
                        </FadeIn>
                        <FadeIn>
                            <div className={style.line}/>
                        </FadeIn>
                        <FadeIn>
                            <span>Love him</span>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default RoadMap;
