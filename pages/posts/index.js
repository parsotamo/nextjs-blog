import { Fragment } from 'react';
import Head from 'next/head';
import AllPosts from "../../components/posts/all-posts";
import {getAllPosts} from '../../lib/posts-util';

const PostPage = (props)=>{
  return <Fragment>
    <Head>
      <title>All Programming related posts</title>
      <meta name='description' content='Find all content about different programming languages tutorials and snippets' />
    </Head>
    <AllPosts posts={props.posts} />
  </Fragment>
}

export const getStaticProps = ()=>{
  const posts = getAllPosts();
  return {
    props: {
      posts
    }
  }
}

export default PostPage;