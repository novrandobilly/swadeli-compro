import React from 'react';
import Image from 'next/image';
import styles from './Body.module.scss';
import appleImage from '../../assets/apple-asset.png';
import appStore from '../../assets/app-store.png';
import googlePlay from '../../assets/google-play.png';
import { FiChevronRight } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import leftArrow from '../../assets/arrow-left.png';
import rightArrow from '../../assets/arrow-right.png';
import bicycleMan from '../../assets/bycycle-man.png';
import fruits from '../../assets/fruits.png';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

const Body = () => {
  
  return (
    <div className={styles['body']}>
      <div className={styles['content-1']}>
        <div className={styles['apple-image']}>
          <Image src={appleImage} alt="Apple" />
        </div>
        <div className={styles['text-content-1']}>
          <h1>
            Groceries and time, at your hands. Delivered to you <br />
            in <span>15 minutes!</span>
            <span className={styles['text-italic']}> #BeliDiSwadeli</span>
          </h1>
          <div className={styles['image-button']}>
            <div className={styles['app-store']}>
              <Image src={appStore} alt="AppStore" />
            </div>
            <div className={styles['google-play']}>
              <Image src={googlePlay} alt="GooglePlay" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles['content-2']}>
        <div className={styles['text-content-2']}>
          <h2>
            Get your delivery <span>today</span> by
          </h2>
          <h1>19 : 54 : 05</h1>
          <div>
            <button className={styles['button-order']}>
              <span>ORDER NOW</span>
            </button>
          </div>
        </div>
      </div>
      <div className={styles['content-3']}>
        <div className={styles['box-1']}>
          <div className={styles['text-box-1']}>
            <h3>15 Minutes Delivery</h3>
            <p>Shop all-in 15 minutes. Quick and hassle-free.</p>
          </div>
        </div>
        <div className={styles['box-2']}></div>
        <div className={styles['box-3']}>
          <div className={styles['text-box-2']}>
            <h3>Competitive Price</h3>
            <p>
              Quality products <br />
              at a competitive <br />
              price.
            </p>
          </div>
        </div>
        <div className={styles['box-4']}></div>
        <div className={styles['box-5']}></div>
        <div className={styles['box-6']}>
          <div className={styles['text-box-3']}>
            <h3>1000+ of Products</h3>
            <p>
              Everything on the <br />
              shelves, now at <br />
              your fingertips.
            </p>
          </div>
        </div>
        <div className={styles['box-7']}></div>
        <div className={styles['box-8']}>
          <div className={styles['text-box-4']}>
            <h3>Delivery on Demand</h3>
            <p>
              We&apos;re up late with you. Whenever you need, <br />
              we always deliver.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#FED002] pb-[70px]">
        <h1 className="font-normal text-[80px] text-[#1D493D] text-center mt-[77px] mb-[50px]">Where We Deliver</h1>
        <div className="flex flex-row justify-evenly">
          <div className="flex flex-col justify-between ">
            <GoLocation className="w-[61px] h-[74px] text-[#1D493D] mx-auto" />
            <p className="text-center text-[40px] text-[#1D493D]">Kebayoran Lama</p>
          </div>
          <div className="flex flex-col justify-between">
            <div className="w-[152px] mx-auto h-[60] pt-[6px] pb-[6px] mb-[32px] rounded-full text-[30px] border-[4px] text-[#EEB802] border-[#EEB802] text-center ">
              SOON
            </div>
            <p className="text-center text-[40px] text-[#EEB802]">Duren Sawit</p>
          </div>
          <div className="flex flex-col justify-between">
            <div className="w-[152px] mx-auto h-[60] pt-[6px] pb-[6px] mb-[32px] rounded-full text-[30px] border-[4px] text-[#EEB802] border-[#EEB802] text-center ">
              SOON
            </div>
            <p className="text-center text-[40px] text-[#EEB802]">Cibubur</p>
          </div>
          <div className="flex flex-col justify-between">
            <div className="w-[152px] mx-auto h-[60] pt-[6px] pb-[6px] mb-[32px] rounded-full text-[30px] border-[4px] text-[#EEB802] border-[#EEB802] text-center ">
              SOON
            </div>
            <p className="text-center text-[40px] text-[#EEB802]">Pondok Indah</p>
          </div>
          <div className="flex flex-col justify-between">
            <div className="w-[152px] mx-auto h-[60] pt-[6px] pb-[6px] mb-[32px] rounded-full text-[30px] border-[4px] text-[#EEB802] border-[#EEB802] text-center ">
              SOON
            </div>
            <p className="text-center text-[40px] text-[#EEB802]">Bintaro</p>
          </div>
        </div>
        <p className="mt-[131px] text-[#476332] text-[26px] text-center mb-[13px]">
          We don&apos;t deliver to your area yet?
        </p>
        <div className="w-[975px] cursor-pointer h-[118px] bg-[#1D493D] px-[56px] rounded-[13px] mx-auto flex flex-row justify-between">
          <span className="text-[40px] text-white my-auto">Let us know where you&apos;d like us to be!</span>
          <FiChevronRight className="text-[40px] text-white my-auto" />
        </div>
      </div>
      <div className="bg-[#F6F4E3] pb-32">
        <h1 className="mt-[146px] mb-[90px] text-[70px] text-center ">
          Opportunities with <span>Swadeli</span>
        </h1>
        <div className="w-2/3 mx-auto flex flex-row justify-center gap-12">
          <div className="flex-1">
            <Image src={bicycleMan} width={594} height={617} alt="Bicycle" />
          </div>
          <div className="flex-1">
            <h1 className="text-[60px] leading-[4rem] text-[#4C9840] font-semibold">Be part of the dream team</h1>
            <p className="text-[32px] leading-[2rem] text-[#3D3D39] mt-12">
              Build your career and grow with us! Join our office team or our delivery team.
            </p>
            <div className="flex flex-row mt-9 absolute left-[37rem] gap-16 cursor-pointer">
              <div className="w-24 h-24 bg-[#4C9840] flex justify-center rounded-full">
                <HiOutlineArrowNarrowRight className="text-white text-6xl my-auto font-bold" />
              </div>
              <span className="text-[26px] my-auto text-[#4C9840]">APPLY NOW</span>
            </div>
          </div>
        </div>
        <div className="w-[64%] h-[.1px] bg-[#4C9840] mx-auto my-[3rem]"></div>
        <div className="w-2/3 mx-auto flex flex-row-reverse justify-center gap-12">
          <div className="flex-1">
            <Image src={fruits} width={594} height={617} alt="Fruits" />
          </div>
          <div className="flex-1">
            <h1 className="text-[60px] leading-[4rem] text-[#4C9840] font-semibold text-right">Collaborate with us</h1>
            <p className="text-[32px] leading-[2rem] text-[#3D3D39] mt-12 text-right">
              Expand your reach with us! Swadeli invites brands to collaborate as partners.
            </p>
            <div className="flex flex-row-reverse mt-9 absolute left-[28rem] gap-16 cursor-pointer">
              <div className="w-24 h-24 bg-[#4C9840] flex justify-center rounded-full">
                <HiOutlineArrowNarrowLeft className="text-white text-6xl my-auto font-bold" />
              </div>
              <span className="text-[26px] my-auto text-[#4C9840]">APPLY NOW</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
