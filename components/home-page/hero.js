import Image from 'next/image';
import styles from './hero.module.css'


const Hero = ()=>{
  return <section className={styles.hero}>
    <div className={styles.image}>
      <Image src="/images/site/ilan_parsotamo.jpg" width={300} height={300} />
    </div>
    <h1>Hi I am Ilan Parsotamo</h1>
    <p>I am a developer😀 I like to build amazing apps both for web and mobile</p>
  </section>
}

export default Hero;