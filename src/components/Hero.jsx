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
            <span className="text-white">GET 20% OFF - </span>
              ALL Web Development Packages!! {" "} 
            <span className="text-white"> - Offer ends December 1st </span>   
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">  
          Website <br className="sm:block hidden"/> {" "}
          <span className="text-gradient">Development</span> {" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">Simplified.</h1>
        <p className={`${styles.paragraph} max-w-[490px] mt-3`}>Tailormade Website Development for any size business - Web Dojo has got you covered.</p>
        <p className={`${styles.paragraph} max-w-[490px] mt-5`}>Scale traffic to your Website with our customizable digital/social media marketing packages. Developed using the fastest frameworks available today, utilizing libraries created & future-proofed by companies like Meta & Google.</p>
        <p className={`${styles.paragraph} max-w-[490px] mt-3`}>Start talking with our team based in Edmonton today, and let us turn your online business vision, into a reality. Call our Web development team in Edmonton for a free quote +1-780-243-4760.</p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-5 my-10 relative`}>
        <img src={robot} alt="webdev" className="w-[80%] h-[70%] relative z-[5]"/>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
        <div className="absolute z-[1] w-[70%] h-[60%] rounded-full bottom-40 white__gradient"/>
        <div className="absolute z-[0] w-[40%] h-[50%] right-20 bottom-20 blue__gradient"/>

      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
      </div>

    </section>
  )
}

export default Hero