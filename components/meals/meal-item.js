import Image from 'next/image';
import Link from 'next/link';

import Classes from './meal-item.module.css';

export default function MealItem({ title, summary, slug, creator, image }) {
    return (
        <article className={Classes.meal}>
            <header>
                <div className={Classes.image}>
                    <Image src={image} alt={title} fill />
                </div>
                <div className={Classes.headerText}>
                    <h2>{title}</h2>
                    <p>by {creator}</p>
                </div>
            </header>
            <div className={Classes.content}>
                <p className={Classes.summary}>{summary}</p>
                <div className={Classes.actions}>
                    <Link href={`/meals/${slug}`}>View Details</Link>
                </div>
            </div>
        </article>
    );
}