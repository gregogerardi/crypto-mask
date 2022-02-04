import {FC} from "react";
import FadeIn from "Utils/Wrappers/FadeIn";

const Section: FC = ({children}) => (
    <FadeIn>
        {children}
    </FadeIn>
);


export default Section;
