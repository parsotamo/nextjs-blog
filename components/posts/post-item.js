import Link from 'next/link';
import Image from 'next/image';
import styles from './post-item.module.css';

const PostItem = (props)=>{
    const {title, image, excerpt, date, slug} = props.post;
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    const postLink = `/posts/${slug}`;
    const imagePath = `/images/posts/${slug}/${image}`;

    return <li className={styles.post}>
      <Link href={postLink}>
        <a>
          <div className={styles.image}>
            <Image src={imagePath} alt={title} width={300} height={200} layout="responsive" />
          </div>
          <div className={styles.content}>
            <h3>{title}</h3>
              <time>{formattedDate}</time>
              <p>
                {excerpt}
              </p>
          </div>
        </a>
      </Link>
    </li>
}

export default PostItem;