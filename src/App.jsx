import styles from './style';

import { Navbar, Button, CardDeal, Contact, Services, CTA, Footer, Hero, Testimonials, FeedbackCard } from './components';

const App = () => {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>   
                    <Navbar/>
                </div>
            </div>

            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero/>
                </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Services/>
                    <Button/> 
                    <CardDeal/>
                    <Contact/>
                    <Testimonials/>
                    <CTA/>
                    <Footer/>
                </div>
            </div>
            
        </div>
    )
}

export default App