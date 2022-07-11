import React from 'react';
import styles from './Career.module.scss';
import Image from 'next/image';
import png1 from '../../../assets/png-joinus-1.png';
import png2 from '../../../assets/png-joinus-2.png';
import png3 from '../../../assets/png-joinus-3.png';
import greenApple from '../../../assets/green-apple.png';

const Career = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}>
        <h1>Join us</h1>
      </div>
      <div className={styles['sub-title']}>
        <div className={styles['sub-title-image']}>
          <Image src={greenApple} alt="Green Apple" />
        </div>
        <div className={styles['sub-title-text']}>
          <h6>Build your career and grow with us!</h6>
          <p>Be a part of our office team or delivery team.</p>
        </div>
      </div>
      <div className={styles['form-join-us']}>
        <div className={styles['input-field']}>
          <label>Full name</label>
          <input type="text" name="fullName" placeholder="Your Name (based on KTP)" />
        </div>
        <div className={styles['input-field']}>
          <label>Email address</label>
          <input type="email" name="emailAddress" placeholder="Name@email.com" />
        </div>
        <div className={styles['input-field']}>
          <label>Phone number</label>
          <input type="number" name="phoneNumber" placeholder="081770XXXX" />
        </div>
        <div className={styles['input-field']}>
          <label>Current address</label>
          <input type="text" name="currentAddress" placeholder="Your address" />
        </div>
        <div className={styles['input-field']}>
          <label>Latest education</label>
          <select>
            <option>S1</option>
            <option>S2</option>
            <option>D1/D3</option>
            <option>High School</option>
          </select>
        </div>
        <div className={styles['input-field']}>
          <label>Current employer</label>
          <input type="text" name="currentEmployee" placeholder="Company Name" />
        </div>
        <div className={styles['input-field']}>
          <label>Current role</label>
          <input type="text" name="currentRole" placeholder="Role" />
        </div>
        <div className={styles['input-field']}>
          <label>Notice period</label>
          <input type="text" name="noticePeriod" placeholder="Notice Period" />
        </div>
        <div className={styles['input-field']}>
          <label>Position applying for</label>
          <select>
            <option>Marketing</option>
          </select>
        </div>
        <div className={styles['input-field']}>
          <label>Attach CV</label>
          <input type="file" name="attachPeriod" />
        </div>
        <div className={styles['input-field']}>
          <label>Linkedin profile</label>
          <input type="text" name="linkedinProfile" placeholder="www.linkedin.com/janedoe" />
        </div>
        <div className={styles['btn-submt']}>
          <button>Submit</button>
        </div>
      </div>
      <div>
        <div className={styles['image-1']}>
          <Image
            // width={480}
            // height={850}
            src={png1}
            alt="Join us"
          />
        </div>
        <div className={styles['image-2']}>
          <Image width={920} height={751} src={png2} alt="PNG2" />
        </div>
        <div className={styles['image-3']}>
          <Image width={600} height={431} src={png3} alt="PNG3" />
        </div>
      </div>
    </div>
  );
};

export default Career;
