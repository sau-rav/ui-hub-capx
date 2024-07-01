import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Image from "next/image";

import CloseIcon from '@mui/icons-material/Close';

import Link from 'next/link';

import {NavModalStyle, boxStyle} from './Navbar.constants';

import logo from "../../public/logo.png";


export default function NavbarModal({ isModalOpen, handleModalClose, handleLogout, handleHome }) {

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
                style={NavModalStyle}
            >
                <Fade in={isModalOpen}>
                    <Box sx={boxStyle}>
                        <div className="flex items-center justify-between">
                            <Image src={logo} alt="logo" height={38} onClick={handleHome} />
                            <CloseIcon sx={{ fontSize: 30, color: "#FFFFFF" }} onClick={handleModalClose} />
                        </div>
                        {/* <div className="flex flex-col items-center" style={{ marginBottom: '20px', marginTop: '20px' }}>
                            <Link  href="/faq" className="w-full font-semibold text-[24px] leading-[29px]" style={{ color: '#fff', paddingBottom: '10px', borderBottom: '1px solid #595959', zIndex: '999999' }} onClick={handleModalClose}>FAQ</Link>
                        </div> */}
                        <button
                            className="h-full w-max md:px-6 py-2 md:py-3 rounded-full relative bg-golden text-black hover:font-bold mt-4"
                            style={{paddingLeft: '34px', paddingRight: '34px'}}
                            onClick={handleLogout}
                        >
                            <span>Logout</span>
                        </button>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
