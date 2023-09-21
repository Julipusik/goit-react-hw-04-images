import React from "react";
import { getImages } from "api";
import { SearchBar } from "./SearchBar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import { Modal } from "./Modal/Modal";
import { Report } from 'notiflix/build/notiflix-report-aio';


export class App extends React.Component {
  state = {
    searchValue: '',
    gallery: [],
    page: 1,
    loading: false,
    error: false,
    modalOpen: false,
    largeImageURL: '',
  }

  async componentDidUpdate(prevProps, prevState) {
    const { page, searchValue, gallery } = this.state;

    if (searchValue !== prevState.searchValue || page !== prevState.page) {
      this.setState({ loading: true, error: false });
      
      try {
        const newImages = await getImages(searchValue, page);
        if (newImages.data.hits.length === 0) {
          Report.failure('Oh shit!', 'No results', 'Okay(');
        }
        this.setState({ gallery: [...gallery, ...newImages.data.hits] });
      } catch (error) {
        this.setState({ error: true });
        Report.failure('Oh shit!', 'No results', 'Okay(');
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  onSearch = value => {
    if (value === '') {
      return;
    }
    this.setState({ searchValue: value, page: 1, gallery: [] });
  }

  onLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    })
  }

  openModal = () => {
    this.setState({ modalOpen: true });
  }

  closeModal = () => {
    this.setState({ modalOpen: false });
  }

  onImageClick = url => {
    this.openModal();
    this.setState({ largeImageURL: url });
  }

  render() {
    const { gallery, loading, error, modalOpen, largeImageURL } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.onSearch} />
        <ImageGallery
          gallery={gallery}
          onImageClick={this.onImageClick}
        />
        {gallery.length > 0 && !loading && <Button onClick={this.onLoadMore} />}
        {loading && !error && <Loader />}
        {modalOpen && <Modal
          largeImage={largeImageURL}
          onClose={this.closeModal}
          />
        }
      </div>
    );
  }
};

