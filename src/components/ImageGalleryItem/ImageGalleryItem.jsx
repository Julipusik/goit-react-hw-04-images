import React from "react";
import { GalleryItem, GalleryImage } from "./ImageGalleryItem.styled";

export class ImageGalleryItem extends React.Component {
    render() {
        const { smallImage, largeImage, onImageClick } = this.props;
        return (
            <GalleryItem>
                <GalleryImage src={smallImage} alt="" onClick={() => {onImageClick(largeImage)}}/>
            </GalleryItem>
        )
    }
}