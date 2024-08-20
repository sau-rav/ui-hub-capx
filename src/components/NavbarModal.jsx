import { useRouter , NextRouter} from "next/router";
import { useCallback } from "react";

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Image from "next/image";

import CloseIcon from '@mui/icons-material/Close';


import {NavModalStyle, boxStyle} from './Navbar.constants';

import logo from "../../public/logo.png";

const ITEM_CLASS_NAME = "cursor-pointer w-full font-semibold text-[24px] leading-[29px]"
const ITEM_STYLES = { color: '#fff', paddingBottom: '10px', borderBottom: '1px solid #595959', zIndex: '999999' }

export default function NavbarModal({ isModalOpen, handleModalClose, handleLogout, handleHome }) {
    const router = useRouter();

    const onProfileClick = useCallback(() => {router.push("/profile"); handleModalClose()}, [router, handleModalClose]);
    const onHomeClick = useCallback(() => {router.push("/"); handleModalClose()}, [router, handleModalClose]);


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

                        <div className="flex flex-col items-center" style={{ marginBottom: '20px', marginTop: '20px' }}>
                            <div onClick={onHomeClick} className={ITEM_CLASS_NAME} style={ITEM_STYLES} >Home</div>
                        </div>
                        
                        <div className="flex flex-col items-center" style={{ marginBottom: '20px', marginTop: '20px' }}>
                            <div onClick={onProfileClick} className={ITEM_CLASS_NAME} style={ITEM_STYLES} >Profile</div>
                        </div>

                        <div className="flex flex-col items-center" style={{ marginBottom: '20px', marginTop: '20px' }}>
                            <div onClick={handleLogout}className={ITEM_CLASS_NAME} style={ITEM_STYLES} >Logout</div>
                        </div>

                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
