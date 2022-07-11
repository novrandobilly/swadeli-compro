import styles from './AboutUs.module.scss';
import Image from 'next/image';
import courier1 from '../../../assets/courier-1.png';
import courier2 from '../../../assets/courier-2.png';

export default function AboutUs() {
  return (
    <div>
      <div className={styles['container']}>
        <div className={styles['title']}>
          <h1>About Us</h1>
        </div>
        <div className={styles['image-1']}>
          <Image src={courier1} alt="Courier" />
        </div>
        <div className={styles['text-1']}>
          <p>Swadeli is a quick commerce app that replaces the conventional with convenience.</p>
          <br />
          <p>We are here to be your other (quicker) set of hands–handing you groceries in 15 minutes.</p>
        </div>
        <div className={styles['middle']}>
          <div className={styles['text-middle']}>
            <h2>Shop with ease, on your time</h2>
          </div>
        </div>
        <div className={styles['text-2']}>
          <p>
            We know you’re busy, so, with product options that are variative, price that is competitive, and our
            commitment to provide a shopping experience that is more effective, we make shopping effortless.
          </p>
        </div>
        <div className={styles['image-2']}>
          <Image src={courier2} alt="Courier" />
        </div>
      </div>
      <div className={styles['container-2']}>
        <div className={styles['title']}>
          <h1>Our Purpose</h1>
        </div>
        <div className={styles['text-content']}>
          <h4>Instant Access to Daily Needs</h4>
          <p>Our mission to provide instant access to daily needs means</p>
        </div>
        <div className={styles['three-circle']}>
          <div className={styles['option-1']}>
            <div className={styles['circle-1']}>
              <span>1</span>
            </div>
            <div className={styles['text-1']}>
              <p>Enabling convenience to your daily life.</p>
            </div>
          </div>
          <div className={styles['option-1']}>
            <div className={styles['circle-1']}>
              <span>2</span>
            </div>
            <div className={styles['text-2']}>
              <p>Giving you more control over product quality and freshness.</p>
            </div>
          </div>
          <div className={styles['option-1']}>
            <div className={styles['circle-1']}>
              <span>3</span>
            </div>
            <div className={styles['text-1']}>
              <p>Transforming shopping behavior to reduce food waste.</p>
            </div>
          </div>
        </div>
        <div className={styles['text-content']}>
          <h4>Extending Room for Growth</h4>
          <p>
            Through our platform, we aim to give more room for growth for you, suppliers, and the environment. Our
            mission is to empower you to own your time, by providing convenience to your daily life. In the process, we
            also aspire to extend access for suppliers to reach end-consumers and reduce space used up for markets and
            parking lots.
          </p>
        </div>
        <div className={styles['text-content']}>
          <h4>Promoting Sustainability</h4>
          <p>
            Through our platform, we aim to give more room for growth for you, suppliers, and the environment. Our
            mission is to empower you to own your time, by providing convenience to your daily life. In the process, we
            also aspire to extend access for suppliers to reach end-consumers and reduce space used up for markets and
            parking lots.
          </p>
        </div>
      </div>
    </div>
  );
}
