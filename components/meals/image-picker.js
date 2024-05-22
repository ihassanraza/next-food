'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

import Classes from './image-picker.module.css';

export default function ImagePicker({ label, name }) {
    const imageRef = useRef();
    const [imgURL, setImgURL] = useState(null);

    const handleImageInput = () => {
        return imageRef.current.click();
    };

    const handleImagePreview = (event) => {
        const file = event.target.files[0];

        if (!file) {
            setImgURL(null);
            return;
        }

        const reader = new FileReader();

        reader.onload = () => setImgURL(reader.result);

        reader.readAsDataURL(file);
    }

    return (
        <div className={Classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={Classes.controls}>
                <div className={Classes.preview}>
                    { imgURL && <Image src={imgURL} alt='Meal Image' fill /> }
                </div>
                <input type='file' id={name} name={name} accept='image/png, image/jpeg' required className={Classes.input} ref={imageRef} onChange={handleImagePreview} />
            </div>
            <button type='button' className={Classes.button} onClick={handleImageInput}>Add Image</button>
        </div>
    );
}