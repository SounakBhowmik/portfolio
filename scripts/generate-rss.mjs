import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const site = 'https://sounakbhowmik.vercel.app';
const dir = path.join(process.cwd(), 'content/blog');
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'));

const items = files
  .map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), 'utf8');
    const { data } = matter(raw);
    const slug = file.replace('.mdx', '');
    return `<item><title><![CDATA[${data.title}]]></title><link>${site}/blog/${slug}</link><pubDate>${new Date(
      data.date
    ).toUTCString()}</pubDate><description><![CDATA[${data.summary}]]></description></item>`;
  })
  .join('');

const xml = `<?xml version="1.0" encoding="UTF-8" ?><rss version="2.0"><channel><title>Sounak Bhowmik Blog</title><link>${site}</link><description>Research writing on quantum computing and ML</description>${items}</channel></rss>`;

fs.writeFileSync(path.join(process.cwd(), 'public/rss.xml'), xml);
