// libs
import { useRouter } from "next/router";
import { useCallback, useRef, useState, useEffect } from "react";
import Confetti from "react-confetti";

// components
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

// hooks
import { useIsMobile } from "../hooks/useIsMobile";
import { useUser } from "../context/user";

// constants
import {
  THANKYOU_MODAL_STYLES,
  CONTAINER_STYLES,
} from "../constants/thankyouModalStyles";

const CONFETTI_COLORS = ["#ED8E36", "#FFC48E", "#ef5222", "#ba3143"];
const drawShape = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath();
  const random1 = Math.floor(Math.random() * 20) + 1;
  const random2 = Math.floor(Math.random() * 40) + 1;

  const toss = Math.random() > 0.5;

  toss
    ? ctx.fillRect(-random2 / 4, -random2, random2 / 4, random2)
    : ctx.fillRect(-random1 / 2, -random1, random1 / 2, random1);
  ctx.stroke();
  ctx.closePath();
};

export const ThankyouModal = ({ isOpen }: { isOpen: boolean }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const isMobile = useIsMobile();
  const userContext = useUser();
  const { user } = userContext ?? {};

  const [width, setWidth] = useState<number>(500);
  const [height, setHeight] = useState<number>(500);

  useEffect(() => {
    if (contentRef.current) {
      const { width: w, height: h } =
        contentRef.current.getBoundingClientRect();
      setWidth(w);
      setHeight(h);
    }
  }, [contentRef?.current]);

  const onProfileClick = useCallback(() => {
    router.push("/profile");
  }, [router]);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={onProfileClick}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        style={THANKYOU_MODAL_STYLES}
      >
        <Fade in={isOpen}>
          <Box sx={CONTAINER_STYLES} ref={contentRef}>
            <div className="flex items-center flex flex-col gap-16 py-32">
              <div className="absolute inset-0">
                <Confetti
                  width={width}
                  height={height}
                  colors={CONFETTI_COLORS}
                  drawShape={drawShape}
                />
              </div>
              <div
                className="p-2 hover:cursor-pointer absolute hover:bg-golden-light rounded-full hover:text-black"
                style={{ right: "2%", top: "5%" }}
              >
                <CloseIcon
                  sx={{ fontSize: 30, color: "#FFFFFF" }}
                  onClick={onProfileClick}
                />
              </div>
              <div className="flex gap-4 flex-wrap justify-center items-center">
                <p className="text-3xl md:text-7xl font-semibold text-white">
                  Welcome to CapX,
                </p>
                <p className="text-3xl md:text-7xl font-semibold text-golden">
                  {user?.displayName}
                </p>
              </div>
              <p
                className="text-xl md:text-3xl font-normal text-white text-center px-2"
                style={isMobile ? undefined : { maxWidth: "60%" }}
              >
                We will go live soon! Stay connected with us on social media for
                the latest updates and exclusive content!
              </p>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
