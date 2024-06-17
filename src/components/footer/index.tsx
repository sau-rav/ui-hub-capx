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
      setIconSize(72);
    } else if (innerWidth > 1024) {
      setIconSize(60);
    } else if (innerWidth > 768) {
      setIconSize(45);
    }
  }, []);

  return (
    <div className="relative flex items-center justify-center pt-[60px] pb-[40px] bg-normal-black 2xl:bg-normal-black mt-[40px] 2xl:mt-[0] rounded-t-[50px]">
      <div className="2xl:w-11/12">
        <div className="2xl:flex 2xl:bg-normal-black 2xl:w-full 2xl:rounded-tl-[50px]">
          <div className=" 2xl:w-4/5">
            <div className="bg-grey 2xl:rounded-[50px] 2xl:rounded-br-[0px] pl-[20px] pt-[13px] pb-[21px] 2xl:pl-[37px]">
              <Image
                src={logo.src}
                alt="Cap X"
                width={666}
                height={279}
                className={`w-3/5`}
              />
              <div className="font-bold text-[15px] sm:text-[22px] lg:text-[28px] 2xl:text-[36px] leading-[44px] text-[#ED8E36] mt-[6px] pl-[10px]">
                Trading made simpler and smarter
              </div>
            </div>
            <div className="bg-grey relative hidden 2xl:block">
              <div className="relative max-w-fit font-normal text-golden-light text-[18px] leading-[21px] rounded-tr-[50px] pt-[41px] pr-[25px] pb-[29px] pl-[14px] 2xl:bg-normal-black">
                Copyright &copy; CapX 2024. Made in India
                <div className="hidden 2xl:block absolute bg-normal-black right-[-50px] bottom-0">
                  <div className="hidden 2xl:block w-[50px] h-[50px] rounded-bl-[50px] bg-grey"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-grey 2xl:w-2/5 mt-[11spx] rounded-br-[50px] flex flex-col">
            <div className="relative text-[#fffded] font-semibold text-[32px] leading-[39px] rounded-bl-[50px] pl-[30px] py-[26px] 2xl:bg-normal-black 2xl:text-center 2xl:pl-[47px] 2xl:pr-[56px]">
              <span>Join CapX on</span>
              <div className="absolute bg-normal-black right-0 bottom-[-50px] hidden 2xl:block">
                <div className="w-[50px] h-[50px] rounded-tr-[50px] hidden 2xl:block bg-grey"></div>
              </div>
            </div>
            <div className="flex items-center 2xl:justify-center h-full pl-[30px] 2xl:pl-[0]">
              <div className="grid grid-cols-4 gap-[15px] md:gap-[30px] lg:gap-[45px] 2xl:grid-cols-2 2xl:gap-[65px]">
                <a
                  href="https://www.youtube.com/channel/UCvFzTxpXy2fWmmP_Ge73Qhg"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <YouTubeIcon sx={{ fontSize: iconSize, color: "#ED8E36" }} />
                </a>
                <a
                  href="https://x.com/CapX_live"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <XIcon sx={{ fontSize: iconSize, color: "#ED8E36" }} />
                </a>
                <a
                  href="https://www.instagram.com/capx_live/"
                  target="_blank"
                  rel={"noreferrer"}
                >
                  <InstagramIcon
                    sx={{ fontSize: iconSize, color: "#ED8E36" }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/capxlive/"
                  target="_blank"
                  rel={"noreferrer"}
                >
                  <LinkedInIcon sx={{ fontSize: iconSize, color: "#ED8E36" }} />
                </a>
              </div>
            </div>
            <div className="bg-grey relative block 2xl:hidden">
              <div className="relative max-w-fit font-normal text-[#fdc861] text-[18px] leading-[21px] rounded-tr-[50px]  pl-[30px] pt-[20px] text-[12px] lg:text-[16px]">
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
