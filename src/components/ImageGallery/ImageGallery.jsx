import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";

export const ImageGallery = ({ gallery, onImageClick }) => {
    return (
        <Gallery>
            {gallery.map(image => {
                return (
                    <ImageGalleryItem
                        key={image.id}
                        smallImage={image.webformatURL}
                        onImageClick={() => onImageClick(image.largeImageURL)}
                    />
                )
            })}
        </Gallery>
    )
}