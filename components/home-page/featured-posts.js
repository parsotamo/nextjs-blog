import Grid from '../posts/posts-grid';
import styles from './featured-posts.module.css';

const FeaturedPosts = (props)=>{

  return <section className={styles.latest}>
    <h2>Featured Posts</h2>
    <Grid posts={props.posts} />
  </section>
};

export default FeaturedPosts;