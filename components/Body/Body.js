import React, { useState } from "react";
import Image from "next/image";
import styles from "./Body.module.scss";
import appleImage from "../../assets/apple-asset.png";
import appStore from "../../assets/app-store.png";
import googlePlay from "../../assets/google-play.png";
import { FiChevronRight } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import leftArrow from "../../assets/arrow-left.png";
import rightArrow from "../../assets/arrow-right.png";
import bicycleMan from "../../assets/bycycle-man.png";
import fruits from "../../assets/fruits.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import mockup from "../../assets/mockup.png";
import Modal from "../Modal/modal";

const Body = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles["body"]}>
      <div className={`${showModal ? "block" : "hidden"}`}>
        <Modal setShowModal={setShowModal} />
      </div>
      <div className={styles['container-c1']}>
        <div>
          <Image
            id="img-c1"
            src={appleImage}
            width={709}
            height={714}
            alt="Apple Image"
          />
        </div>
        <div className={styles["text-content-1"]}>
          <h1>
            Groceries and time, <br/> at your hands. <br/> Delivered to you <br/>
            in <span>15 minutes!</span> <br/>
            <span className={styles["text-italic"]}> #BeliDiSwadeli</span>
          </h1>
          <div className={styles["image-button"]}>
            <div className={styles["app-store"]}>
              <Image src={appStore} alt="Apple Store" />
            </div>
            <div className={styles["google-play"]}>
              <Image src={googlePlay} alt="Google Play" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles["content-2"]}>
        <div className={styles["text-content-2"]}>
          <h2>
            Get your delivery <span>today</span> by
          </h2>
          <h1>19 : 54 : 05</h1>
          <div>
            <button className={styles["button-order"]}>
              <span>ORDER NOW</span>
            </button>
          </div>
        </div>
      </div>
      <div className={styles["content-3"]}>
        <div className={styles["box-1"]}>
          <div className={styles["text-box-1"]}>
            <h3>15 Minutes Delivery</h3>
            <p>Shop all-in 15 minutes. <br/>Quick and hassle-free.</p>
          </div>
        </div>
        <div className={styles["box-2"]}></div>
        <div className={styles["box-3"]}>
          <div className={styles["text-box-2"]}>
            <h3>Competitive Price</h3>
            <p>
              Quality products <br />
              at a competitive <br />
              price.
            </p>
          </div>
        </div>
        <div className={styles["box-4"]}></div>
        <div className={styles["box-5"]}></div>
        <div className={styles["box-6"]}>
          <div className={styles["text-box-3"]}>
            <h3>1000+ of<br/> Products</h3>
            <p>
              Everything on the <br />
              shelves, now at <br />
              your fingertips.
            </p>
          </div>
        </div>
        <div className={styles["box-7"]}></div>
        <div className={styles["box-8"]}>
          <div className={styles["text-box-4"]}>
            <h3>Delivery on Demand</h3>
            <p>
              We&apos;re up late with you. <br/>Whenever you need, <br />
              we always deliver.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#FED002] pb-[70px]">
        <h1 className="font-normal font-Platform text-[50px] leading-[3rem] lg:leading-none lg:text-[80px] text-[#1D493D] text-center mt-10 lg:mt-[77px] mb-[50px]">
          Where <br className="lg:hidden block" /> We Deliver
        </h1>
        <div className="flex flex-col lg:flex-row justify-evenly gap-7 lg:gap-0">
          <div className="flex flex-row lg:flex-col lg:justify-between px-8 gap-4 lg:gap-0 lg:px-0">
            <GoLocation className="w-[40px] lg:w-[61px] h-[64px] lg:h-[74px] text-[#1D493D] lg:mx-auto" />
            <p className="text-center lg:text-[40px] text-[30px] my-auto lg:my-0 text-[#1D493D] font-Roboto">
              Kebayoran Lama
            </p>
          </div>
          <div className="flex flex-row lg:flex-col lg:justify-between px-8 lg:px-0 gap-4 lg:gap-0">
            <div className="font-Roboto lg:w-[152px] w-[100px] lg:mx-auto lg:h-[60px] h-[50px] pt-[6px] pb-[6px] lg:mb-[32px] rounded-full text-[20px] lg:text-[30px] border-[4px] text-[#EEB802] border-[#EEB802] text-center ">
              SOON
            </div>
            <p className="font-Roboto text-center lg:text-[40px] text-[30px] text-[#EEB802]">
              Duren Sawit
            </p>
          </div>
          <div className="flex flex-row lg:flex-col lg:justify-between px-8 lg:px-0 gap-4 lg:gap-0">
            <div className="font-Roboto lg:w-[152px] w-[100px] lg:mx-auto lg:h-[60px] h-[50px] pt-[6px] pb-[6px] lg:mb-[32px] rounded-full text-[20px] lg:text-[30px] border-[4px] text-[#EEB802] border-[#EEB802] text-center ">
              SOON
            </div>
            <p className="font-Roboto text-center lg:text-[40px] text-[30px] text-[#EEB802]">
              Cibubur
            </p>
          </div>
          <div className="flex flex-row lg:flex-col lg:justify-between px-8 lg:px-0 gap-4 lg:gap-0">
            <div className="font-Roboto lg:w-[152px] w-[100px] lg:mx-auto lg:h-[60px] h-[50px] pt-[6px] pb-[6px] lg:mb-[32px] rounded-full text-[20px] lg:text-[30px] border-[4px] text-[#EEB802] border-[#EEB802] text-center ">
              SOON
            </div>
            <p className="font-Roboto text-center lg:text-[40px] text-[30px] text-[#EEB802]">
              Pondok Indah
            </p>
          </div>
          <div className="flex flex-row lg:flex-col lg:justify-between px-8 lg:px-0 gap-4 lg:gap-0">
            <div className="font-Roboto lg:w-[152px] w-[100px] lg:mx-auto lg:h-[60px] h-[50px] pt-[6px] pb-[6px] lg:mb-[32px] rounded-full text-[20px] lg:text-[30px] border-[4px] text-[#EEB802] border-[#EEB802] text-center ">
              SOON
            </div>
            <p className="font-Roboto text-center lg:text-[40px] text-[30px] text-[#EEB802]">
              Bintaro
            </p>
          </div>
        </div>
        <p className="font-Roboto mt-[100px] lg:mt-[131px] text-[#476332] text-[26px] text-center mb-[13px] px-8 lg:px-0">
          We don&apos;t deliver to your area yet?
        </p>
        <div className="px-8 lg:px-0 mx-auto lg:mx-0">
          <div
            onClick={() => setShowModal(true)}
            className="w-5/6 cursor-pointer h-[50px] lg:h-[118px] bg-[#1D493D] px-[20px] lg:px-[56px] rounded-[13px] mx-auto flex flex-row justify-between"
          >
            <span className="lg:text-[40px] hidden lg:block text-[18px] text-white my-auto font-Roboto">
              Let us know where you&apos;d like us to be!
            </span>
            <span className="lg:text-[40px] lg:hidden text-[18px] text-white my-auto font-Roboto">
              Tell us where to go!
            </span>
            <FiChevronRight className="text-[40px] text-white my-auto" />
          </div>
        </div>
      </div>

      <div className="bg-[#F6F4E3] pb-20 lg:pb-32">
        <h1 className="lg:mt-[105px] mt-[50px] lg:mb-[90px] mb-[50px] leading-10 lg:leading-none text-[40px] lg:text-[70px] text-center font-Platform">
          Opportunities <br className="lg:hidden" /> with{" "}
          <span className="font-PoetsenOne font-bold">Swadeli</span>
        </h1>
        <div className="flex flex-row w-full px-5 lg:px-0 lg:w-2/3 gap-5 lg:gap-12 mx-auto lg:min-w-screen-2xl ">
          <div
            className={`flex-1 relative ${styles["bg-bicycle"]} w-52 h-48 lg:h-[500px]`}
          >
            {/* <Image src={bicycleMan} width={594} height={617} /> */}
            <div className="absolute hidden lg:flex flex-row gap-16 cursor-pointer bottom-16 -right-64">
              <div className="w-24 h-24 bg-[#4C9840] flex justify-center rounded-full">
                <HiOutlineArrowNarrowRight className="my-auto text-6xl font-bold text-white" />
              </div>
              <span className="text-[26px] my-auto text-[#4C9840] font-Platform font-normal">
                APPLY NOW
              </span>
            </div>
          </div>
          <div className="flex-1">
            <h1 className="font-Platform text-[28px] lg:text-[60px] leading-[2rem] lg:leading-[4rem] text-[#4C9840] font-semibold">
              Be part of the dream team
            </h1>
            <p className="lg:text-[32px] text-[18px] leading-[1.2rem] lg:leading-[2rem] text-[#3D3D39] mt-8 lg:mt-12 font-Roboto font-normal">
              Build your career and grow with us! Join our office team or our
              delivery team.
            </p>
          </div>
        </div>
        <div className="px-5 mt-7">
          <button className="lg:hidden bg-[#4C9840] text-white text-[24px]  w-full rounded-xl py-4">
            Apply now
          </button>
        </div>
        <div className="w-[90%] lg:w-[64%] h-[.1px] bg-[#4C9840] mx-auto my-[3rem]"></div>
        <div className="flex flex-row-reverse w-full px-5 lg:px-0 lg:w-2/3 gap-5 lg:gap-12 mx-auto min-w-screen-2xl ">
          <div
            className={`flex-1 relative ${styles["bg-fruits"]} w-52 h-48 lg:h-[500px]`}
          >
            {/* <Image src={fruits} width={594} height={617} /> */}
            <div className="absolute hidden lg:flex flex-row-reverse gap-16 cursor-pointer mt-9 bottom-16 -left-64">
              <div className="w-24 h-24 bg-[#4C9840] flex justify-center rounded-full">
                <HiOutlineArrowNarrowLeft className="my-auto text-6xl font-bold text-white" />
              </div>
              <span className="text-[26px] my-auto text-[#4C9840] font-Platform font-normal">
                APPLY NOW
              </span>
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-[28px] lg:text-[60px] leading-[2rem] lg:leading-[4rem] text-[#4C9840] font-semibold lg:text-right font-Platform">
              Collaborate <br className="" /> with us
            </h1>
            <p className="lg:text-[32px] text-[18px] leading-[1.2rem] lg:leading-[2rem] text-[#3D3D39] mt-8 lg:mt-12 lg:text-right font-Roboto font-normal">
              Expand your reach with us! Swadeli invites brands to collaborate
              as partners.
            </p>
          </div>
        </div>
        <div className="px-5 mt-7">
          <button className="lg:hidden bg-[#4C9840] text-white text-[24px]  w-full rounded-xl py-4">
            Apply now
          </button>
        </div>
      </div>

      <div className={`${styles["bg-fruit-red"]} mb-32`}>
        <div className="container mx-auto px-[40px] lg:px-[60px] py-[50px] lg:py-[120px]  relative">
          <h1 className="text-[40px] lg:text-[70px] w-full lg:w-1/2 leading-[3rem] lg:leading-[5rem] text-white font-Platform">
            Need your <br className="hidden lg:block" /> daily essentials in
            <br />
            <span className="font-bold">15 Minutes?</span>
          </h1>
          <div className="flex flex-col lg:flex-row gap-5 mt-16 w-[35%] md:w-[30%]">
            <Image src={appStore} width={200} height={60} alt="Apple Store" />
            <Image src={googlePlay} width={200} height={60} alt="Google Play" />
          </div>
          <div
            className={`${styles["bg-mockup"]} absolute right-0 md:right-10 -bottom-40 lg:-bottom-40 w-[180px] h-[360px] lg:w-[300px] lg:h-[600px] `}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Body;
