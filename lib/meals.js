import sql from 'better-sqlite3';
import xss from 'xss';
import slugify from 'slugify';
import fs from 'node:fs';

const db = sql('meals.db');

export async function getMeals() {
    await new Promise((res) => setTimeout(res, 5000));
    return db.prepare('SELECT * FROM meals').all();
}

export async function getMeal(mealSlug) {
    return await db.prepare('SELECT * FROM meals WHERE slug = ?').get(mealSlug);
}

export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split('.').pop();
    const filename = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${filename}`);

    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
        if(error) {
            throw new Error("Saving Image Failed!");
        }
    });

    meal.image = `/images/${filename}`;

    db.prepare(`INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email) VALUES ( @slug, @title, @image, @summary, @instructions, @creator, @creator_email )`).run(meal);
}