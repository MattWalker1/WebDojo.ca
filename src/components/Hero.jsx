import styles from '../style';
import { discount, robot } from '../assets';


const Hero = () => {
  
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 max-w-[450px]">
          <img src={discount} alt="discount" 
          className="w-[64px] h-[64px]"/>
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Get 20% off - </span>
              all Web Development Packages {" "} 
            <span className="text-white"> - Offer ends June 1 </span>   
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">  
          Website <br className="sm:block hidden"/> {" "}
          <span className="text-gradient">Development</span> {" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">Simplified.</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}> Tailormade Website Development For Any Size Business. WebDojo will help every step of the way.</p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Scale traffic to your website with our custom Ad management services. All websites are developed using the fastest web technologies and frameworks available today, utilizing frameworks & libraries created by companies like Meta & Google.</p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Start talking with our team today and let us turn your online vision, into a reality.</p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="webdev" className="w-[100%] h-[90%] relative z-[5]"/>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"/>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>

      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
      </div>

    </section>
  )
}

export default Hero