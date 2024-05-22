'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import Burger from '@/public/images/burger.jpg';
import Curry from '@/public/images/curry.jpg';
import Dumplings from '@/public/images/dumplings.jpg';
import Macncheese from '@/public/images/macncheese.jpg';
import Pizza from '@/public/images/pizza.jpg';
import Schnitzel from '@/public/images/schnitzel.jpg';
import TomatoSalad from '@/public/images/tomato-salad.jpg';
import Classes from './image-slideshow.module.css';

const images = [
    { img: Burger, alt: 'A delicious, juicy burger' },
    { img: Curry, alt: 'A delicious, spicy curry' },
    { img: Dumplings, alt: 'Steamed dumplings' },
    { img: Macncheese, alt: 'Mac and cheese' },
    { img: Pizza, alt: 'A delicious pizza' },
    { img: TomatoSalad, alt: 'A delicious schnitzel' },
    { img: Schnitzel, alt: 'A delicious tomato salad' }
];

export default function ImageSlideshow() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevImageIndex) => (prevImageIndex +1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={Classes.slideshow}>
            {
                images.map((image, index) => (
                    <Image 
                        key={index} 
                        src={image.img} 
                        alt={image.alt} 
                        className={currentImageIndex === index ? Classes.active : ''}
                        fill
                    />
                ))
            }
        </div>
    );
}