import MealItem from './meal-item';

import Classes from './meals-grid.module.css';

export default function MealsGrid({ meals }) {
    return (
        <ul className={Classes.meals}>
            {
                meals.map((meal) => (
                    <li key={meal.id}>
                        <MealItem {...meal} />
                    </li>
                ))
            }
        </ul>
    );
}