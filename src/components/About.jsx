import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc";
import style from "./styles/about.module.css";
import { textVariant, fadeIn } from "../utils/motion";

const About = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>
      About Me
    </motion.h1>
    <div className={style.para}>
      <motion.p variants={fadeIn("", "", 0.5, 1)} className={style.text}>
        Hey there! I&apos;m{" "}
        <a
          href="https://www.linkedin.com/in/tomHolland/"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Ilija Malenovic,
        </a>{" "}
        a Senior Full-stack Web Developer, with over a +5 years of experience
        working with cutting-edge languages and programming techniques. I enjoy
        working on challenging projects which require the use of the most
        advanced languages and development techniques. I am adept at innovative
        problem solving and developing high-quality code. I excel at web
        application development, including coordinating ground-up planning,
        programming, and implementation of the core modules. I am
        self-disciplined and able to work independently or as part of a
        cross-functional team.
      </motion.p>
      <motion.p variants={fadeIn("", "", 1, 1)} className={style.text}>
        As a Freelancer, I have worked on a variety of projects for a wide range
        of clients, assisting them with their business needs by creating
        innovative and cutting-edge web applications.{" "}
        <a
          href="https://github.com/tomholland665"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          {" "}
        </a>{" "}
      </motion.p>
      {/* <motion.p variants={fadeIn('', '', 1.25, 1)} className={style.text}>
        Ready to bring your project to life?
        {' '}
        <a
          href="https://drive.google.com/file/d/1tciorak3ZNmMrPPnG_b9eSMnv94fY61_/view?usp=sharing"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Check out my resume
        </a>
        {' '}
        for more insights into my journey and qualifications.
      </motion.p> */}
    </div>
  </>
);

export default SectionWrapper(About, "about", "");
