"use client";

import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

import "./embla.css"

export default function EmblaCarousel(props) {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        AutoScroll({
        playOnInit: true,
        stopOnInteraction: false,
        speed: 2,
        startDelay: 500,
        rootNode: (emblaRoot) => {
            console.log('Embla root element:', emblaRoot);
            return emblaRoot;
        },
        })
    ]);

    useEffect(() => {
        if (!emblaApi) return;

        const autoScroll = emblaApi.plugins().autoScroll;
        if (!autoScroll) return;

    }, [emblaApi]);

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                {slides.map((index) => (
                    <div className="embla__slide" key={index}>
                    <div className="embla__slide__number">
                        <span>{index + 1}</span>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}
