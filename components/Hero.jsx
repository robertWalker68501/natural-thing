import styles from "@/styles/Hero.module.css";
import Image from "next/image";
import heroImage from "@/public/assets/hero-image-02.png";

const Hero = () => {
  return (
    <div className="container">
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Natural Thing</h1>
          <p>
            Natural Thing is a San Francisco Bay Area based hard rock quintet
            playing the greatest hard rock tunes from the 70’s and 80’s. Formed
            in 2014, we are five seasoned musicians embracing our love of
            playing hard rock from some of the greatest bands such as Led
            Zeppelin, UFO, Thin Lizzy, Black Sabbath and Montrose.
          </p>
          <button type="button" className={styles.heroButton}>
            Contact
          </button>
        </div>
        <div className={styles.heroImage}>
          <Image src={heroImage} alt="hero image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
