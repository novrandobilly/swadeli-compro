import React from 'react';
import styles from './Partnership.module.scss';
import fruits1 from '../../../assets/orange-juice.png';
import Image from 'next/image';
import fruits2 from '../../../assets/orange-apple.png';
import fruits3 from '../../../assets/onion-partner.png';
import fruits4 from '../../../assets/fruit2-partner.png';
const Partnership = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['content-1']}>
        <div className={styles['title']}>
          <h1>Collaborate<br/> with us</h1>
        </div>
        <div className={styles['sub-title']}>
          <div className={styles['sub-title-image']}>
            <Image src={fruits2} alt="Fruits 2" />
          </div>
          <div className={styles['sub-title-text']}>
            <h6>Expand your reach with us!</h6>
            <p>Swadeli is always excited to <br/>collaborate with brands as <br/>partners.</p>
          </div>
        </div>
      </div>
      <div className={styles['form-partnership']}>
        <div className={styles['input-field']}>
          <label>Full name</label>
          <input type="text" name="fullName" placeholder="Your Name" />
        </div>
        <div className={styles['input-field']}>
          <label>Email address</label>
          <input type="email" name="email" placeholder="Your Email" />
        </div>
        <div className={styles['input-field']}>
          <label>Phone number</label>
          <input type="number" name="phonenNumber" placeholder="081770XXXX" />
        </div>
        <div className={styles['input-field']}>
          <label>Company</label>
          <input type="text" name="company" placeholder="Your Company" />
        </div>
        <div className={styles['input-field']}>
          <label>Company website</label>
          <input type="text" name="companyWebsite" placeholder="YourCompany.com" />
        </div>
        <div className={styles['input-field']}>
          <label>Message</label>
          <textarea name="message" placeholder="What do you want to collaborate on?"></textarea>
        </div>
        <div className={styles['btn-submt']}>
          <button>Submit</button>
        </div>
      </div>
      <div className={styles['image-2']}>
        <Image src={fruits3} alt="Fruits 3" />
      </div>
      <div className={styles['image-3']}>
        <Image src={fruits4} alt="Fruits 4" />
      </div>
      <div className={styles['image-1']}>
        <Image src={fruits1} alt="Fruits 1" />
      </div>
    </div>
  );
};

export default Partnership;
