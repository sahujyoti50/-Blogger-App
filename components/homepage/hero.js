import classes from "./hero.module.css";
import Image from "next/image";
const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
         src="/images/site/angle.png"
          alt="angle.png"
          width={300}
          height={300}
        />
      </div>
      <p>Hi,I am angle</p>
      <p>I am Software Developer</p>
    </section>
  );
};
export default Hero;
