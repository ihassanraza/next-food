import MealForm from '@/components/meals/meal-form';

import Classes from './page.module.css';

export const metadata = {
    title: 'Share Meal',
    description: 'Share your favorite meal Or any other meal you feel needs sharing!'
};

export default function ShareMealPage() {
    return (
        <>
            <header className={Classes.header}>
                <h1>
                    Share your <span className={Classes.highlight}>favorite meal</span>
                </h1>
                <p>Or any other meal you feel needs sharing!</p>
            </header>
            <main className={Classes.main}>
                <MealForm />
            </main>
        </>
    );
}