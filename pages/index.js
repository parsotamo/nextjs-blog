import { Fragment } from "react";
import Head from 'next/head';
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from "../lib/posts-util";

const HomePage = (props)=>{
  return <div> 
    <Fragment>
      <Head>
        <title>Welcome to Ilan's Next Blog</title>
        <meta name="description" content="This blog is about my experience with programming languages" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.featuredPosts} />
    </Fragment>
  </div>
}

export function getStaticProps(){
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      featuredPosts
    }
  }
}

export default HomePage;