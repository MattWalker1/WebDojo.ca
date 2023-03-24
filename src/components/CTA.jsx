import styles from '../style';
import Button from './Button';

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}> A fast, modern, online presence will transform your business..</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}> Website performance & user functionality in 2023 has never been more important. No matter your industry. With our team of talented web developers and internationally published designers, we will elevate your business online, that we can guarantee. </p>
      </div>

      <div>
        <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[14px] text-primary outline-none ${styles} rounded-[10px]`} onClick={() => window.location = 'mailto:mwalkermain@gmail.com'}>Contact us today</button>
  
      </div>
    </section>
  )
}

export default CTA