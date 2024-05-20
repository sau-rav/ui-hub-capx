import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/logo.png";
import instagramLogo from "../../../public/Socials/instagram.png";
import linkedInLogo from "../../../public/Socials/linkedIn.png";
import twitterLogo from "../../../public/Socials/twitter.png";
import youTubeLogo from "../../../public/Socials/Youtube.png";

import styles from "./Footer.module.scss";

const Footer = (): JSX.Element => {
  return (
    <div
      className={`${styles.footer_wrapper} bg-[#1a1713] 2xl:bg-[#000000] mt-[40px] 2xl:mt-[0] rounded-t-[50px]`}
    >
      <div
        className={`${styles.footer_block} 2xl:flex 2xl:bg-[#000000] 2xl:w-3/4 2xl:rounded-tl-[50px]`}
      >
        <div>
          <div
            className={`bg-[#1a1713] 2xl:rounded-[50px] 2xl:rounded-br-[0px] pl-[20px] 2xl:pl-[37px] ${styles.logo_image}`}
          >
            <Image
              src={logo.src}
              alt="Cap X"
              width={666}
              height={279}
              className={`w-3/4`}
            />
            <div className="font-bold text-[15px] sm:text-[22px] lg:text-[28px] 2xl:text-[36px] leading-[44px] text-[#EDAF36] mt-[6px] pl-[10px]">
              Trading made simpler and smarter
            </div>
          </div>
          <div className="bg-[#1A1713] relative hidden 2xl:block">
            <div
              className={`${styles.copywrite_text} text-[18px] pt-[41px] pr-[25px] pb-[29px] pl-[14px] 2xl:bg-[#000000]`}
            >
              Copyright &copy; CapX 2024. Made in India
              <div className={`${styles.pseudo_block} hidden 2xl:block`}>
                <div
                  className={`${styles.pseudo_curve} hidden 2xl:block`}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#1A1713] 2xl:w-1/4 mt-[11spx] rounded-br-[50px] flex flex-col">
          <div
            className={`${styles.join_us_text} pl-[30px] py-[26px] 2xl:bg-[#000000] 2xl:text-center 2xl:pl-[47px] 2xl:pr-[56px]`}
          >
            <span>Join CapX on</span>
            <div className={`${styles.pseudo_block} hidden 2xl:block`}>
              <div className={`${styles.pseudo_curve} hidden 2xl:block`}></div>
            </div>
          </div>
          <div className="flex items-center 2xl:justify-center h-full pl-[30px] 2xl:pl-[0]">
            <div className="grid grid-cols-4 gap-[15px] md:gap-[30px] lg:gap-[45px] 2xl:grid-cols-2 2xl:gap-[65px]">
              <Link
                href="https://www.youtube.com/channel/UCvFzTxpXy2fWmmP_Ge73Qhg"
                target="_blank"
              >
                <Image
                  src={youTubeLogo.src}
                  alt="Discord"
                  width={72}
                  height={72}
                  className="cursor-pointer max-w-[30px] max-h-[30px] md:max-w-[45px] md:max-h-[45px] lg:max-w-[60px] lg:max-h-[60px] 2xl:max-w-[72px] 2xl:max-h-[72px]"
                />
              </Link>
              <Link href="https://x.com/CapX_live" target="_blank">
                <Image
                  src={twitterLogo.src}
                  alt="Twitter"
                  width={72}
                  height={72}
                  className="cursor-pointer max-w-[30px] max-h-[30px] md:max-w-[45px] md:max-h-[45px] lg:max-w-[60px] lg:max-h-[60px] 2xl:max-w-[72px] 2xl:max-h-[72px]"
                />
              </Link>
              <Link href="https://www.instagram.com/capx_live/" target="_blank">
                <Image
                  src={instagramLogo.src}
                  alt="Instagram"
                  width={72}
                  height={72}
                  className="cursor-pointer max-w-[30px] max-h-[30px] md:max-w-[45px] md:max-h-[45px] lg:max-w-[60px] lg:max-h-[60px] 2xl:max-w-[72px] 2xl:max-h-[72px]"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/capxlive/"
                target="_blank"
              >
                <Image
                  src={linkedInLogo.src}
                  alt="Facebook"
                  width={72}
                  height={72}
                  className="cursor-pointer max-w-[30px] max-h-[30px] md:max-w-[45px] md:max-h-[45px] lg:max-w-[60px] lg:max-h-[60px] 2xl:max-w-[72px] 2xl:max-h-[72px]"
                />
              </Link>
            </div>
          </div>
          <div className="bg-[#1A1713] relative block 2xl:hidden">
            <div
              className={`${styles.copywrite_text} pl-[30px] pt-[20px] text-[12px] lg:text-[16px]`}
            >
              Copyright &copy; CapX 2024. Made in India
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
