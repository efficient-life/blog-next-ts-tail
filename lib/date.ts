import { DateTime } from 'luxon';
import { fetchArticles, fetchCategories } from '../lib/api';

export const formatDate = (dateStr: string, format = 'DATE_SHORT') => {
    return DateTime.fromISO(dateStr).setZone('Asia/Tokyo').toLocaleString(DateTime[format]);
};

export const fetchFormatArticles = async () => {
    // const articles = await fetchArticles();
    let { articles, total }: any = await fetchArticles();

    articles = articles.map((article: any) => {
        return {
            path: '',
            preview: {
                author: article.author.name,
                date: article._sys.createdAt,
                articleTitle: article.title,
                tags: article.tags,
                thumbnail: article.thumbnail ? article.thumbnail.src : '',
                shortIntro: article.shortintro,
                category: article.category,
            },
            seo: {
                title: article.title,
                description: article.shortintro,
                keywords: article.tags,
                ogImage: article.thumbnail ? article.thumbnail.src : '',
                author: article.author.name,
            },
        };
    });
    return { articles, total };
};
// {
//   "_id": "_id",
//   "_sys": {
//     "createdAt": "2022-01-01T00:00:00.000Z",
//     "updatedAt": "2022-01-01T00:00:00.000Z",
//     "raw": {
//       "createdAt": "2022-01-01T00:00:00.000Z",
//       "updatedAt": "2022-01-01T00:00:00.000Z",
//       "firstPublishedAt": "2022-01-01T00:00:00.000Z",
//       "publishedAt": "2022-01-01T00:00:00.000Z"
//     }
//   },
//   "author": "referenceId",
//   "title": "text",
//   "tags": "text",
//   "thumbnail": {
//     "_id": "imageId",
//     "src": "imageUrl",
//     "fileType": "image/png",
//     "fileSize": 12345678,
//     "fileName": "image.png",
//     "width": 600,
//     "height": 400
//   },
//   "shortintro": "text",
//   "category": "referenceId"
// }
// {
//     path: '/pages/tutorial/how-to-setup-blog.tsx',
//     featureArticle: true,
//     preview: {
//         author: MAYUR,
//         date: 'August 08 2022',
//         articleTitle: 'How to setup this blog template',
//         tags: 'demo, blog setup',
//         thumbnail: '/public/imp_assets/tutorials/how-to-setup-blog.svg',
//         shortIntro: 'These are the steps to setup your blog',
//         category: 'tutorial',
//     },
//     seo: {
//         title: 'How to setup this blog template',
//         description: 'These are the steps to setup your blog',
//         keywords: 'demo, blog setup',
//         ogImage: '/public/imp_assets/tutorials/how-to-setup-blog.svg',
//         twitterHandle: '@mayur_nalwala',
//         author: MAYUR.name,
//     },
// },
