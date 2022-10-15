import { fetchApp, fetchArticles, fetchCategories } from '../lib/api';
import { AppMeta, Content } from 'newt-client-js';
import type { Article } from '../src/types/article';
import type { Category } from '../src/types/category';

import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from '../src/components';
import Head from 'next/head';
import Link from 'next/link';
import { formatDate } from '../lib/date';
// import HomeNonFeatureArticles from '../src/components/Misc/HomeNonFeatureAricles';

export interface HomeProps {
    app: AppMeta;
    categories: (Content & Category)[];
    articles: (Content & Article)[];
    total: number;
    page?: number;
    categorySlug?: string;
}

export default function TopPage({ app, categories, articles, total }: HomeProps) {
    console.log(app);
    console.log(categories);
    const arr = ['リンゴ', 'パイナップル', 'ペン'];
    return (
        <PageLayout>
            <h1>{app.name}</h1>
            <h1>{app.uid}</h1>
            <ul>
                {articles.map((article, i) => (
                    <li key={i}>{article.title}</li>
                ))}
            </ul>
        </PageLayout>
    );
}

export async function getStaticProps(): Promise<{ props: HomeProps }> {
    const app = await fetchApp();
    const categories = await fetchCategories();
    const { articles, total } = await fetchArticles();
    return {
        props: {
            app,
            categories,
            articles,
            total,
        },
    };
}
