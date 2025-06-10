let newsData = [
  { id: 1, title: 'First News Headline', content: 'News content goes here...', date: new Date() },
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(newsData);
  } else if (req.method === 'POST') {
    const { title, content } = req.body;
    const newItem = { id: Date.now(), title, content, date: new Date() };
    newsData.push(newItem);
    res.status(201).json(newItem);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
// /pages/api/news/index.ts
import dbConnect from '../../../lib/mongodb';
import { News } from '../../../lib/newsModel';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    const news = await News.find({});
    res.status(200).json(news);
  } else if (req.method === 'POST') {
    const { title, content, author } = req.body;
    const newNews = new News({ title, content, author });
    await newNews.save();
    res.status(201).json(newNews);
  }
}
