import { fetchApp, fetchArticles, fetchCategories } from '../lib/api';
import { AppMeta, Content } from 'newt-client-js';
import type { Article } from '../src/types/article';
import type { Category } from '../src/types/category';
import { fetchFormatArticles } from '../lib/date';

import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from '../src/components';
import Head from 'next/head';
import Link from 'next/link';
import { formatDate } from '../lib/date';
import HomeNonFeatureArticles from '../src/components/Misc/HomeNonFeatureAricles';

export interface HomeProps {
    app: AppMeta;
    categories: (Content & Category)[];
    articles: (Content & Article)[];
    total: number;
    page?: number;
    categorySlug?: string;
    articles: (Content & Article)[];
    articles: any[];
}

export default function TopPage({ articles, total }: HomeProps) {
    // console.log(app);
    // console.log(categories);
    console.log(articles);
    return (
        <>
            {/* <h1>{app.name}</h1> */}
            <ul>
                {articles.map((article, i) => (
                    <li key={i}>{article.preview.articleTitle}</li>
                ))}
            </ul>
            <ul>
                {articles.map((article, i) => (
                    <li key={i}>{article.preview.date}</li>
                ))}
            </ul>
            <p>{total}</p>
        </>
    );
}

export async function getStaticProps(): Promise<{ props: HomeProps }> {
    // const app = await fetchApp();
    // const categories = await fetchCategories();
    const { articles, total } = await fetchFormatArticles();
    // const articles = await fetchFormatArticles();
    console.log(articles);
    return {
        props: {
            // app,
            // categories,
            articles,
            total,
        },
    };
}
