import Section from "../../Utils/Wrappers/Section";
import style from './style.module.css'
import pastorAustraliano from "assets/dogs/pastorAustraliano.jpeg";
import {useHashScroll} from "react-hash-scroll";
import {useHashScrollDefaultOptions} from "Layout/constant";
import AliceCarousel from 'react-alice-carousel';
import {SyntheticEvent} from "react";

const handleDragStart = (e: SyntheticEvent) => e.preventDefault();

const responsive = {
    0: {items: 1},
    512: {items: 2},
    768: {items: 3},
    1024: {items: 4},
};

const imgs = [
    pastorAustraliano,
    pastorAustraliano,
    pastorAustraliano,
    pastorAustraliano,
    pastorAustraliano,
    pastorAustraliano,
    pastorAustraliano,
    pastorAustraliano,
    pastorAustraliano,
    pastorAustraliano,
    pastorAustraliano]

const items = imgs.map(imgSource=><div className={style.imgContainer}>
    <img src={imgSource} alt={"pastorAustraliano"} onDragStart={handleDragStart} role="presentation"/>
</div>)

const Gallery = () => {
    const scrollRef = useHashScroll<HTMLDivElement>("presentation", useHashScrollDefaultOptions);
    return (
        <Section>
            <div className={style.container} ref={scrollRef}>
                <div className={style.content}>
                    <AliceCarousel
                        autoPlay
                        infinite
                        mouseTracking
                        touchTracking
                        animationDuration={2000}
                        items={items}
                        responsive={responsive}
                        controlsStrategy="responsive"
                        disableButtonsControls
                    />
                </div>
            </div>
        </Section>
    );
};

export default Gallery;
