import React from "react";
import { Overlay, ModalEl } from "./Modal.styled";

export class Modal extends React.Component {
    onEscapeClick = evt => {
        if (evt.key === 'Escape') {
            this.props.onClose();
        }
    }

    onOverlayClick = evt => {
        if (evt.target === evt.currentTarget) {
            this.props.onClose();
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.onEscapeClick);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onEscapeClick);
    }

    render() {
        const { largeImage } = this.props;
        return (
            <Overlay onClick={this.onOverlayClick}>
                <ModalEl>
                    <img src={largeImage} alt=""/>
                </ModalEl>
            </Overlay>
        )
    }
}