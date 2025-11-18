import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='bg-[#0000000] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a passionate explorer at the nexus of machine learning and artificial intelligence. 
        My journey into this captivating fusion of technology and creativity began with curiosity and has now blossomed into 
        a profound connection. I've dedicated countless hours to mastering the intricacies of AI and ML, driven by an unquenchable 
        thirst for knowledge. This relentless pursuit has led to both groundbreaking  research and a  deep understanding  of how 
        these technologies can reshape our world. But my passion extends beyond algorithms and data. I possess a unique ability to 
        infuse artistry into AI, creating aesthetically engaging applications that push the boundaries of possibility. I'm not just 
        an enthusiast; I'm a visionary artist shaping the future of technology and the arts simultaneously. Join me on this exhilarating 
        journey where creativity converges with technology, and together, we'll explore the limitless potential of AI and ML.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
