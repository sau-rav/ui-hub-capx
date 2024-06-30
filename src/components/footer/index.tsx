import { useEffect, useState } from "react";
import Image from "next/image";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logo from "../../../public/logo.png";

const Footer = (): JSX.Element => {
  const [iconSize, setIconSize] = useState<number>(30);

  useEffect(() => {
    const innerWidth = window.innerWidth;
    if (innerWidth > 1280) {
      setIconSize(65);
    } else if (innerWidth > 1024) {
      setIconSize(58);
    } else if (innerWidth > 768) {
      setIconSize(50);
    }
  }, []);

  return (
    <div className="relative flex items-center justify-center xl:pt-[60px] xl:pb-[40px] bg-normal-black xl:bg-normal-black mt-[40px] xl:mt-[0] rounded-t-[50px]">
      <div className="xl:w-11/12">
        <div className="xl:flex xl:bg-normal-black xl:w-full xl:rounded-tl-[50px]">
          <div className="xl:w-4/5">
            <div className="flex flex-col xl:block bg-light-black rounded-t-[40px] xl:rounded-[50px] xl:rounded-br-[0px] pt-[13px] pb-[21px] xl:pl-[37px] items-center">
              <Image
                src={logo.src}
                alt="Cap X"
                width={666}
                height={279}
                className={`w-3/5`}
              />
              <div className="font-bold text-[16px] leading-[19px] text-[#FFFBF6] mt-[6px] xl:pl-[37px]">
                Research to investing, all-in-one place
              </div>
            </div>
            <div className="bg-light-black relative hidden xl:block">
              <div className="relative max-w-fit font-normal text-golden-light text-[18px] leading-[21px] rounded-tr-[50px] pt-[41px] pr-[25px] pb-[29px] pl-[14px] xl:bg-normal-black">
                Copyright &copy; CapX 2024. Made in India
                <div className="hidden xl:block absolute bg-normal-black right-[-50px] bottom-0">
                  <div className="hidden xl:block w-[50px] h-[50px] rounded-bl-[50px] bg-light-black"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-light-black xl:w-2/5 mt-[11spx] xl:rounded-br-[50px] flex flex-col items-center xl:items-stretch">
            <div className="relative text-[#fffded] font-semibold text-[32px] leading-[39px] rounded-bl-[50px] 2xl:pl-[30px] py-[26px] xl:bg-normal-black xl:text-center xl:pl-[47px] xl:pr-[56px]">
              <span>Join CapX on</span>
              <div className="absolute bg-normal-black right-0 bottom-[-50px] hidden xl:block">
                <div className="w-[50px] h-[50px] rounded-tr-[50px] hidden xl:block bg-light-black"></div>
              </div>
            </div>
            <div className="flex items-center xl:justify-center h-full 2xl:pl-[30px] xl:pl-[0]">
              <div className="grid grid-cols-4 gap-[15px] md:gap-[30px] lg:gap-[45px] xl:grid-cols-2 xl:gap-[65px]">
                <a
                  href="https://www.youtube.com/channel/UCvFzTxpXy2fWmmP_Ge73Qhg"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <YouTubeIcon sx={{ fontSize: iconSize, color: "#E8C19C" }} />
                </a>
                <a
                  href="https://x.com/CapX_live"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <XIcon sx={{ fontSize: iconSize, color: "#E8C19C" }} />
                </a>
                <a
                  href="https://www.instagram.com/capx_live/"
                  target="_blank"
                  rel={"noreferrer"}
                >
                  <InstagramIcon
                    sx={{ fontSize: iconSize, color: "#E8C19C" }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/capxlive/"
                  target="_blank"
                  rel={"noreferrer"}
                >
                  <LinkedInIcon sx={{ fontSize: iconSize, color: "#E8C19C" }} />
                </a>
              </div>
            </div>
            <div className="bg-light-black relative block xl:hidden pb-[40px] xl:pb-0">
              <div className="relative max-w-full xl:max-w-fit font-normal text-[#FFC48E] text-[18px] leading-[21px] rounded-tr-[50px] xl:pl-[30px] pt-[20px] text-[12px] lg:text-[16px] flex xl:block justify-center">
                Copyright &copy; CapX 2024. Made in India
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
