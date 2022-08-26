import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getPostsFiles = ()=>{
  return fs.readdirSync(postsDirectory);
}

export const getPostsData = (fileName)=>{
  const postSlug = fileName.replace(/\.md$/, '');
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const {data, content} = matter(fileContent);
  const postData = {
    slug: postSlug,
    content,
    ...data
  }
  return postData;
}

export const getAllPosts = ()=>{
  const postsFiles = getPostsFiles();
  const allPosts = postsFiles.map(postFile=>{
    return getPostsData(postFile);
  });
  const allPostsSorted = allPosts.sort((postA, postB)=> postA.date > postB.date ? -1:1);
  return allPostsSorted;
}

export const getFeaturedPosts = ()=>{
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter(post=> post.isFeatured);
  return featuredPosts;
}

