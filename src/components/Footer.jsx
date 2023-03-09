import styles from '../style';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}> 
      <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-4`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
            <img
             src={logo}
             alt="webdojo"
             className="w-[266px] h-[72px] object-contain"
            />

            <p> Contact us today.</p>
        </div>
      </div>
    </section>
  )
}

export default Footer