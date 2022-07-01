import React from "react";
import Image from "next/image";
import styles from "./Body.module.scss";
import AppleImage from "../../assets/apple-asset.png";
import appStore from "../../assets/app-store.png";
import googlePlay from "../../assets/google-play.png";

const Body = () => {
  return (
    <div className={styles["body"]}>
      <div className={styles["content-1"]}>
        <div className={styles["image-apple"]}>
          <Image
            src={AppleImage}
          />
        </div>
        <div className={styles['text-1']}>
          <h1 className={styles['text-1-1']}>Groceries and time, at your hand. Delivered to you in <span>15 minutes! #BeliDiSwadeli</span></h1>
          <div className={styles["image-app"]}>
            <div className={styles["app-store"]}>
              <Image
                src={appStore}
              />
            </div>
            <div className={styles["google-play"]}>
              <Image
                src={googlePlay}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;