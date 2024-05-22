'use client';

import { useFormState } from "react-dom";

import ImagePicker from '@/components/meals/image-picker';
import MealShareBtn from '@/components/meals/meal-share-btn';
import { mealAction } from '@/lib/action';

import Classes from './meal-form.module.css';

export default function MealForm() {
    const [state, formAction] = useFormState(mealAction, { message: null });

    return (
        <form className={Classes.form} action={formAction}>
            <div className={Classes.row}>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" name="name" required />
                </p>
                <p>
                    <label htmlFor="email">Your email</label>
                    <input type="email" id="email" name="email" required />
                </p>
            </div>
            <p>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" required />
            </p>
            <p>
                <label htmlFor="summary">Short Summary</label>
                <input type="text" id="summary" name="summary" required />
            </p>
            <p>
                <label htmlFor="instructions">Instructions</label>
                <textarea
                    id="instructions"
                    name="instructions"
                    rows="10"
                    required
                ></textarea>
            </p>
            <ImagePicker label="Add Image" name="mealImage" />
            {state && <p>{state.message}</p>}
            <p className={Classes.actions}>
                <MealShareBtn />
            </p>
        </form>
    );
}