import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPosts() {
 const fileNames = fs.readdirSync(postsDirectory);
 const posts = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      content: matterResult.content,
      data: matterResult.data,
    };
 });

 return posts;
}

export async function getStaticProps() {
 const posts = getPosts();
 const mdxSource = await serialize(posts[0].content);

 return {
    props: {
      posts,
      source: mdxSource,
    },
 };
}