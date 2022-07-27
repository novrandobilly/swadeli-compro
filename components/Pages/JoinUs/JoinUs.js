import styles from './JoinUs.module.scss';
import Image from 'next/image';
import brokoli from '../../../assets/brokoli.png';
import fruits2 from '../../../assets/joinus-fruit.png';
import fruits3 from '../../../assets/onion.png';
import greesapple from '../../../assets/green-apple.png';
import Link from 'next/link';

function JoinUs() {
  return (
    <div className={styles['container']}>
      <div className={styles['content']}>
        <div className={styles['title-1']}>
          <h1>Join us!</h1>
          <div className={styles['responsive-joinus']}>
            <div className={styles['green-apple']}>
              <Image src={greesapple} alt="Green Apple" />
            </div>
            <div className={styles['text-responsive']}>
              <p className='font-Roboto mb-4'>Build your career and<br/>grow with us!</p>
              <p className="font-normal font-Platform">Be a part of our office team<br/> or delivery team.</p>
            </div>
          </div>
          <div className={styles['not-responsive']}>
            <p className="md:font-Roboto font-Platform font-bold">Build your career and grow with us! Be a part of our office team or delivery team.</p>
          </div>
          <Link href="/joinus/career">
            <a className={`${styles['button-1']} cursor-pointer`}>Apply now</a>
          </Link> 
          {/* <button type='button' href="/">Apply now</button> */}
        </div>
        <div className={styles['title-2']}>
          <h1>Collaborate with us!</h1>
          <p className="md:font-Roboto font-Platform font-bold">Expand your reach with us! Swadeli is <br/>always excited to collaborate with <br/>brands as partners.</p>
          <Link href="/joinus/partnership">
            <a className={styles['button-2']}>Apply now</a>
          </Link> 
          {/* <button type='button'>Apply now</button> */}
        </div>
      </div>
      <div className={styles['bckground-img']}>
        <Image src={brokoli} alt="Brokoli" />
      </div>
      <div className={styles['bckground-img-2']}>
        <Image src={fruits2} alt="Fruits 2" />
      </div>
      {/* <div className={styles['bckground-img-3']}>
        <Image src={fruits3} alt="Fruits 3" />
      </div> */}
    </div>
  );
}

export default JoinUs;
