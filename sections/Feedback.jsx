'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tweeen', 0.2, 1)}
        className="flex-[0.4] lg:max-[370px] flex justify-end lg:justify-center flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">HuynhND</h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">Lập trình viên Fullstack</p>
        </div>
        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
          “Công việc hằng ngày của thế giới 4.0 thực sự rất áp lực, đến với Massage Home24h tôi được trút bỏ hầu hết các gánh nặng và áp lực hằng ngày tại công ty và trong cuộc sống”
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center item-center"
      >
        {/* <img src="/planet-09.png" alt="planet" className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" /> */}
          <iframe className="w-full lg:h-[610px] lg:w-[610px] h-auto min-h-[310px] object-cover rounded-[40px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.9994873187748!2d108.23062829999999!3d16.0655164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421986ccc707c9%3A0x2e05015ced66d049!2sMassage%20Home24h!5e0!3m2!1svi!2s!4v1747738511186!5m2!1svi!2s" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <img src="/stamp.png" alt="stamp" className="md:w-[170px] w-[115px]  md:h-[170px] h-[115px] object-contain" />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
