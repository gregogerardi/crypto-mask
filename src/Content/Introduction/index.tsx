import Section from "../../Utils/Wrappers/Section";
import style from './style.module.css'
import fonts from 'theme/fonts/fonts.module.css'
import classNames from "classnames";

const descriptionCls = classNames(style.description, fonts.defaultFont)
const contentCls = classNames(style.content, fonts.red)
const Introduction = () => {
    return (
        <Section>
            <div className={style.container}>
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
