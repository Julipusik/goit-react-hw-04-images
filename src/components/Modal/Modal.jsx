import React, { useEffect } from "react";
import { Overlay, ModalEl } from "./Modal.styled";

export const Modal = ({largeImage, onClose}) => {
    useEffect(() => {
        const onEscapeClick = evt => {
            if (evt.key === 'Escape') {
                this.props.onClose();
            }
        }
        window.addEventListener('keydown', onEscapeClick);
        return () => {
            window.removeEventListener('keydown', onEscapeClick);
        }

    })
    

    const onOverlayClick = evt => {
        if (evt.target === evt.currentTarget) {
            onClose();
        }
    }

    return (
        <Overlay onClick={onOverlayClick}>
            <ModalEl>
                <img src={largeImage} alt="" />
            </ModalEl>
        </Overlay>
    )
}