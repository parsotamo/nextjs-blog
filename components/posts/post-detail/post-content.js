import PostHeader from './post-header';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import styles from './post-content.module.css';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

const PostContent = (props)=>{
  const {title, image, date, slug, content} = props.post;
  const imagePath = `/images/posts/${slug}/${image}`;
  SyntaxHighlighter.registerLanguage('javascript', javascript);
  SyntaxHighlighter.registerLanguage('css', css);
  const customParagraph = (paragraph)=> {
          const {node} = paragraph;
          if(node.children[0].tagName === 'img'){
            const image = node.children[0];
            return <div className={styles.image}>
            <Image src={`/images/posts/${slug}/${image.properties.src}`} alt={image.properties.alt} width={600} height={300} />
      </div>
          }
          return <p>
            {paragraph.children}
          </p>
  }

  const customSyntaxHighlighter = (code)=>{
    const {className, children} = code;
    const language = className.split('-')[1];
    return <SyntaxHighlighter language={language} style={atomDark} children={children} />
  }
  return <article className={styles.content}>
    <PostHeader title={title} image={imagePath} />
    <ReactMarkdown components={{
      p: customParagraph,
      code: customSyntaxHighlighter
    }}>
      {content}
    </ReactMarkdown>
  </article>
}

export default PostContent;