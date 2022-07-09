import styles from "./JoinUs.module.scss";
import Image from "next/image";
import brokoli from "../../../assets/brokoli.png";
import fruits2 from "../../../assets/joinus-fruit.png";
import fruits3 from "../../../assets/onion.png";
import Link from 'next/link'

function JoinUs() {
  return (
    <div className={styles['container']}>
      <div className={styles['title-1']}>
        <h1>Join us</h1>
        <p>Build your career and grow with us! Be a part of our office team or delivery team.</p>
        <Link href="/joinus/career">
          <a className={styles['button-1']}>Apply now</a>
        </Link>
        {/* <button type='button' href="/">Apply now</button> */}
      </div>
      <div className={styles['title-2']}>
        <h1>Collaborate with us</h1>
        <p>Expand your reach with us! Swadeli is always excited to collaborate with brands as partners.</p>
        <Link href="/joinus/partnership">
          <a className={styles['button-2']}>Apply now</a>
        </Link>
        {/* <button type='button'>Apply now</button> */}
      </div>
      <div className={styles['bckground-img']}>
        <Image
          src={brokoli}
        />
      </div>
      <div className={styles['bckground-img-2']}>
        <Image
          src={fruits2}
        />
      </div>
      <div className={styles['bckground-img-3']}>
        <Image
          src={fruits3}
        />
      </div>
    </div>
  )
}

export default JoinUs