import Image from 'next/image';

import MealIcon from '@/assets/icons/meal.png';
import CommunityIcon from '@/assets/icons/community.png';
import EventIcon from '@/assets/icons/events.png';
import Classes from './page.module.css';

export const metadata = {
    title: 'Foodies Community',
    description: 'Join our community and share your favorite recipes!'
};

export default function CommunityPage() {
    return (
        <>
            <header className={Classes.header}>
                <h1>One shared passion: <span className={Classes.highlight}>Food</span></h1>
                <p>Join our community and share your favorite recipes!</p>
            </header>
            <main className={Classes.main}>
                <h2>Community Perks</h2>
                <ul className={Classes.perks}>
                    <li>
                        <Image src={MealIcon} alt="A delicious meal" />
                        <p>Share & discover recipes</p>
                    </li>
                    <li>
                        <Image src={CommunityIcon} alt="A crowd of people, cooking" />
                        <p>Find new friends & like-minded people</p>
                    </li>
                    <li>
                        <Image src={EventIcon} alt="A crowd of people at a cooking event" />
                        <p>Participate in exclusive events</p>
                    </li>
                </ul>
            </main>
        </>
    );
}