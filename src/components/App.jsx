import {useEffect, useState} from "react";
import { getImages } from "api";
import { SearchBar } from "./SearchBar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import { Modal } from "./Modal/Modal";
import { Report } from 'notiflix/build/notiflix-report-aio';

export const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  
  useEffect(() => {
    if (!searchValue) {
      return;
    }
    async function fetchImages() {
      setLoading(true);
      setError(false);
      try {
        const newImages = await getImages(searchValue, page);
        if (newImages.data.hits.length === 0) {
          Report.failure('Oh shit!', 'No results', 'Okay(');
        }
        setGallery(prev => [...prev, ...newImages.data.hits]);
      } catch (error) {
        setError(true);
        Report.failure('Oh shit!', 'No results', 'Okay(');
      } finally {
        setLoading(false)
      }
    }
    fetchImages();
  }, [searchValue, page]);
  
  const onSearch = value => {
    if (value === '') {
      return;
    }
    setSearchValue(value);
    setPage(1);
    setGallery([]);
  }

  const onLoadMore = () => {
    setPage(prev => prev + 1);
  }

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  const onImageClick = url => {
    openModal();
    setLargeImageURL(url);
  }
  
   return (
      <>
        <SearchBar onSubmit={onSearch} />
        <ImageGallery
          gallery={gallery}
          onImageClick={onImageClick}
        />
        {gallery.length > 0 && !loading && <Button onClick={onLoadMore} />}
        {loading && !error && <Loader />}
        {modalOpen && <Modal
          largeImage={largeImageURL}
          onClose={closeModal}
          />
        }
      </>
    );
}