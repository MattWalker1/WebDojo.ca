import styles from '../style';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}> 
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
            <img src={logo}
             alt="webdojo"
             className="w-[366px] h-[192px] object-contain"/>
            <p className={`${styles.paragraph} mt-4 max-w-[310px]`}> Our talented Web Developers will take your business to the next level, call today for a free quote +1-780-243-4760! </p>
        </div>



       <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10"> 
          {footerLinks.map((footerLink) => (
            <div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]"> 
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((Link, index) => (
                  <li key={Link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                  {Link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> 
      </div>
        <div>
          <p className={`${styles.paragraph} mt-0 max-w-[2010px]`}> Designed & Hosted by WebDojo.ca | Copyright Web Dojo. All Rights Reserved © 2023 </p>
        </div>
    </section>
  )
}

export default Footer