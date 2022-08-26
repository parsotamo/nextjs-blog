import { Fragment } from 'react';
import Head from 'next/head';
import PostContent from '../../components/posts/post-detail/post-content';
import { getPostsData, getPostsFiles } from '../../lib/posts-util';

const PostDetailsPage = (props)=>{
  return <Fragment>
    <Head>
      <title>{props.post.title}</title>
      <meta name='description' content={props.post.excerpt} />
    </Head>
          <PostContent post={props.post} />
  </Fragment> 
}

export function getStaticProps(context){
  const {params} = context;
  const {slug} = params;
  const post = getPostsData(slug);
  return {
    props: {
      post
    },
    revalidate: 600
  }
}

export function getStaticPaths(){
    const postFileNames = getPostsFiles();
    const slugs = postFileNames.map(fileName=> fileName.replace(/\.md$/, ''));

    return {
      paths: slugs.map(slug => ({
        params:{
          slug
        }
      })),
      fallback: false 
    } 
}

export default PostDetailsPage;