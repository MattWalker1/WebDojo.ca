import { cloudbased } from '../assets';
import styles, { layout } from '../style';

const CardDeal = () => (
    <section className={layout.section}>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}> Cloud based Hosting  <br className="sm:block hidden"/>  </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Web Dojo eliminates cybersecurity threats and put you and your customers minds at ease. Using modern frameworks and technologies, Web Dojo securely stores your data behind multi-layered security protocols &
        backs your sensitive data up on the cloud, no risks, stress-free. Cloud Data is stored in mutliple geographical locations, preventing the risk of a catastrophic loss.</p>
      </div>


      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>

        <div className={layout.sectionImg}>
        <img src={cloudbased} alt="cloudbased" className="w-[100%] h-[100%]" />
        </div>

        <div className="absolute z-[0] w-[50%] h-[15%] top-0 pink__gradient"/>
        <div className="absolute z-[1] w-[70%] h-[60%] rounded-full bottom-40 white__gradient"/>
        <div className="absolute z-[0] w-[50%] h-[10%] right-20 bottom-20 blue__gradient"/>

      </div>
    </section>
)


export default CardDeal