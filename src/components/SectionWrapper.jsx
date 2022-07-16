import React from "react";
import styles from "../styles/Global";
import Button from "./Button";
import assets from "../assets";

const SectionWrapper = ({
  title,
  description,
  showBtn,
  mockUpImg,
  banner,
  reverse,
}) => {
  return (
    <div
      className={`min-h-screen ${styles.section} ${
        reverse ? styles.bgWhite : styles.bgPrimary
      } ${banner}`}
    >
      <div
        className={`flex item-center${
          reverse ? styles.boxReverseClass : styles.boxClass
        } w-11/12 sm:w-full minmd:w-3/4 `}
      >
        <div
          className={`${styles.descDiv} fadeLeftMini ${
            reverse ? "fadeRightMini" : "fadeLeftMini"
          } ${reverse ? styles.textRight : styles.textLeft}`}
        >
          <h1
            className={`${styles.h1Text} ${
              reverse ? styles.blackText : styles.whiteText
            }`}
          >
            {title}
          </h1>
          <p
            className={`${styles.descriptionText} ${
              reverse ? styles.blackText : styles.whiteText
            }`}
          >
            {description}
          </p>
          {showBtn && (
            <Button assetUrl={assets.expo} Link="Deployed NFT market place" />
          )}
        </div>
      </div>

      <div className={`flex ${styles.flexCenter} p-8 sm:px-0`}>
        <img
          src={mockUpImg}
          alt="Mock up img"
          className={`${styles.sectionImg} ${
            reverse ? "fadeLeftMini" : "fadeRightMini"
          }`}
        />
      </div>
    </div>
  );
};

export default SectionWrapper;
