import React from "react";
import Image from "next/image";
import styles from "./Body.module.scss";
import appleImage from "../../assets/apple-asset.png";
import appStore from "../../assets/app-store.png";
import googlePlay from "../../assets/google-play.png";
import fruits from "../../assets/fruits.png"

const Body = () => {
  return (
    <div className={styles["body"]}>
      <div className={styles["content-1"]}>
        <div className={styles["apple-image"]}>
          <Image
            src={appleImage}
          />
        </div>
        <div className={styles["text-content-1"]}>
          <h1>Groceries and time, at your hands. Delivered to you <br/>in <span>15 minutes!</span><span className={styles['text-italic']}> #BeliDiSwadeli</span></h1>
          <div className={styles["image-button"]}>
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
      <div className={styles["content-2"]}>
        <div className={styles["text-content-2"]}>
          <h2>Get your delivery <span>today</span> by</h2>
          <h1>19 : 54 : 05</h1>
          <div>
            <button className={styles["button-order"]}><span>ORDER NOW</span></button>
          </div>
        </div>
      </div>
      <div className={styles["content-3"]}>
        <div className={styles["box-1"]}>
          <div className={styles["text-box-1"]}>
            <h3>15 Minutes Delivery</h3>
            <p>Shop all-in 15 minutes. Quick and hassle-free.</p>
          </div>
        </div>
        <div className={styles["box-2"]}></div>
        <div className={styles["box-3"]}>
          <div className={styles["text-box-2"]}>
            <h3>Competitive Price</h3>
            <p>Quality products <br/>at a competitive <br/>price.</p>
          </div>
        </div>
        <div className={styles["box-4"]}></div>
        <div className={styles["box-5"]}></div>
        <div className={styles["box-6"]}>
          <div className={styles["text-box-3"]}>
            <h3>1000+ of Products</h3>
            <p>Everything on the <br/>shelves, now at <br/>your fingertips.</p>
          </div>
        </div>
        <div className={styles["box-7"]}></div>
        <div className={styles["box-8"]}>
          <div className={styles["text-box-4"]}>
            <h3>Delivery on Demand</h3>
            <p>We're up late with you. Whenever you need, <br/>we always deliver.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;