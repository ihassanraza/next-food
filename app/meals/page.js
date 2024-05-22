import Link from 'next/link';
import { Suspense } from 'react';

import { getMeals } from '@/lib/meals';
import MealsGrid from '@/components/meals/meals-grid';

import Classes from './page.module.css';

export const metadata = {
    title: 'Meals',
    description: 'Choose your favorite recipe and cook it yourself. It is easy and fun.'
}

const Meals = async () => {
    const meals = await getMeals();
    return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
    return (
        <>
            <header className={Classes.header}>
                <h1>Delicious meals, created {' '} <span className={Classes.highlight}>by you</span></h1>
                <p>Choose your favorite recipe and cook it yourself. It is easy and fun.</p>
                <p className={Classes.cta}>
                    <Link href="/meals/share">Share Your Favorite Recipe</Link>
                </p>
            </header>
            <main className={Classes.main}>
                <Suspense fallback={<p className={Classes.loading}>Fetching meals...</p>}>
                    <Meals />
                </Suspense>
            </main>
        </>
    );
}