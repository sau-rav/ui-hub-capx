import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Image from "next/image";

import CloseIcon from '@mui/icons-material/Close';

import Link from 'next/link';

import logo from "../../public/logo.png";

const style = {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: '#000',
    text: '#fff',
    border: '1px solid #4F4F4F',
    boxShadow: 24,
    p: 3,
    borderRadius: '25px'
};

const PRIMARY_BUTTON_CLASSNAME =
    "h-full w-max md:px-6 py-2 md:py-3 rounded-full relative bg-golden text-black hover:font-bold";

export default function NavbarModal({ isModalOpen, handleModalClose, handleJoinWaitlist, handleHome }) {

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={isModalOpen}
                onClose={handleModalClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
                style={{
                    background:
                        "linear-gradient(109deg, rgba(51, 50, 50, 0.26) 10.11%, rgba(51, 50, 50, 0.07) 101.56%)",
                    backdropFilter: "blur(17px)",
                    WebkitBackdropFilter: "blur(17px)",
                }}
            >
                <Fade in={isModalOpen}>
                    <Box sx={style}>
                        <div className="flex items-center justify-between">
                            <Image src={logo} alt="logo" height={38} onClick={handleHome} />
                            <CloseIcon sx={{ fontSize: 30, color: "#FFFFFF" }} onClick={handleModalClose} />
                        </div>
                        <div className="flex flex-col items-center" style={{ marginBottom: '20px', marginTop: '20px' }}>
                            <Link  href="/faq" className="w-full font-semibold text-[24px] leading-[29px]" style={{ color: '#fff', paddingBottom: '10px', borderBottom: '1px solid #595959', zIndex: '999999' }}>FAQ</Link>
                        </div>
                        <button
                            className={PRIMARY_BUTTON_CLASSNAME}
                            style={{paddingLeft: '34px', paddingRight: '34px'}}
                            onClick={handleJoinWaitlist}
                        >
                            <span>Join Waitlist</span>
                        </button>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
