import Image from 'next/image';
import { notFound } from 'next/navigation';

import { getMeal } from '@/lib/meals';

import Classes from './page.module.css';

export const generateMetadata = async ({ params }) => {
    const meal = await getMeal(params.mealSlug);

    return {
        title: meal.title,
        description: meal.summary
    }
}

export default async function MealDetailsPage({ params }) {
    const meal = await getMeal(params.mealSlug);
    meal.instructions = meal.instructions.replace(/\n/g, '<br />');

    if (!meal) {
        notFound();
    }
    
    return (
        <>
            <header className={Classes.header}>
                <div className={Classes.image}>
                    <Image src={meal.image} alt='Meal Image' fill />
                </div>
                <div className={Classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={Classes.creator}>
                        by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p className={Classes.summary}>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p className={Classes.instructions} dangerouslySetInnerHTML={{ 
                    __html: meal.instructions 
                }}></p>
            </main>
        </>
    );
}