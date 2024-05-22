'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { saveMeal } from "./meals";

function isValidateText(text) {
    return text.length > 0;
}

export async function mealAction(prevState ,formData) {
    const mealData = {
        title: formData.get('title'),
        image: formData.get('mealImage'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    };

    if(
        !isValidateText(mealData.title) ||
        !isValidateText(mealData.summary) ||
        !isValidateText(mealData.instructions) ||
        !isValidateText(mealData.creator) ||
        !mealData.creator_email.includes('@') ||
        !mealData.image.size > 0
    ) {
        return { message: 'Invalid Input!' };
    }

    saveMeal(mealData);
    revalidatePath('/meals', 'page');
    redirect('/meals');
}