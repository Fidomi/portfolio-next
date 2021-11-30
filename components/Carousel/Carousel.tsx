import React, { useState } from "react";
import Image from "next/dist/client/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import style from "./Carousel.module.scss";

interface Props {
    images: StaticImageData[];
}

const Carousel = (props: Props) => {
    const [index, setIndex] = useState(0);

    const slideRight = () => {
        const nextIndex = index + 1;
        if (nextIndex > props.images.length - 1) {
            setIndex(0);
        } else {
            setIndex(nextIndex);
        }
    };

    const slideLeft = () => {
        const nextIndex = index - 1;
        if (nextIndex < 0) {
            setIndex(props.images.length - 1);
        } else {
            setIndex(nextIndex);
        }
    };

    return (
        <div className={`${style.carousel_wrapper}`}>
            <button className={`order-2 flex-2`} onClick={slideLeft}>
                <ChevronLeftIcon className={`w-8 text-black mx-auto`} />
            </button>
            <Image
                className={`order-1 flex-1`}
                src={props.images[index]}
                alt={`Image-number_${index}`}
            />
            <button className={`order-3 flex-2`} onClick={slideRight}>
                <ChevronRightIcon className={`w-8 text-black mx-auto`} />
            </button>
        </div>
    );
};

export default Carousel;
