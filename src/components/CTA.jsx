import styles from '../style';
import Button from './Button';

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}> Web/AI technology will transform your business. Get your free quote today!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}> This is where the text will go</p>
      </div>

      <div>
       <Button />
  
      </div>
    </section>
  )
}

export default CTA