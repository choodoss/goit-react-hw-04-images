import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BackgroundContainer from './BackgroundContainer/BackgroundContainer';
import { searchImages } from './fetchDefault/fetchDefault';
import SearchForm from './SearchForm/SearchForm';
import ImagesList from './ImagesList/ImagesList';
import { Container, Img } from './App.styled';
import LoadBtn from './LoadBtn/LoadBtn';
import { ColorRing } from 'react-loader-spinner'
import Modal from './Modal/Modal';
import { createPortal } from 'react-dom';

class App extends Component {

  state = {
    name: '',
    page: 1,
    per_page: 9,
    category: 'all',
    colors: 'all',
    orientation: 'all',
    image_type: 'all',
    response: [],
    submitted: false,
    total: 0,
    largeImg: '',
    modalOpen: false,
    loading: false,
  };

  componentDidMount() {
    searchImages(this.state)
      .then(res => {
        return this.setState({ response: res.hits })
      })
  };

  hendlerSubmitChange = async ({ submit, searchName, category, colors, orientation, image_type }) => {
    if (searchName === undefined) {
      if (category) {
        await this.setState({ name: '', loading: true, category: category })
      }
      if (colors) {
        await this.setState({ name: this.state.name, loading: true, colors: colors })
      }
      if (orientation) {
        await this.setState({ name: this.state.name, loading: true, orientation: orientation })
      }
      if (image_type) {
        await this.setState({ name: this.state.name, loading: true, image_type: image_type })
      }
    } else {
      await this.setState({
        per_page: 16, name: searchName, loading: true, category: "all", colors: 'all',
        orientation: 'all', image_type: 'all', page: 1,
      })
    }
    await searchImages(this.state)
      .then(res => {
        console.log(res)
        if (res.total !== 0) {
          return this.setState({ submitted: { submit }, response: res.hits, total: res.totalHits, loading: false })
        }
        this.setState({ loading: false })
        return toast.error("Картинки за вашим запитом відсутні")
      })


  }

  hendlerLoadMore = async () => {
    await this.setState(prevState => ({ total: prevState.total - 16, page: prevState.page + 1, loading: true }))
    await searchImages(this.state)
      .then(res => {
        return this.setState({ response: [...this.state.response, ...res.hits], loading: false })
      })
  }

  hendlerOpenImage = ({ currentTarget: { dataset: { img } } }) => {
    this.setState({ largeImg: img, modalOpen: true })
  }

  hendlerCloseImage = () => {
    this.setState({ modalOpen: !this.state.modalOpen })
  }

  render() {
    const { response, submitted, total, largeImg, modalOpen, loading } = this.state;
    const hendlerSubmitChange = this.hendlerSubmitChange;
    const hendlerLoadMore = this.hendlerLoadMore;
    const hendlerOpenImage = this.hendlerOpenImage;
    console.log(total)

    const loader = createPortal(
      <ColorRing
        visible={loading}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperClass="blocks-wrapper"
        colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
      />,
      document.getElementById('loader-root')
    );

    const app = (
      <Container>
        {response && !submitted ? <BackgroundContainer response={response} /> : null}
        <SearchForm onSubmit={hendlerSubmitChange} submitted={submitted} />
        {response && submitted ? <ImagesList response={response} hendlerOpenImage={hendlerOpenImage} /> : null}
        {total > 16 && response && submitted ? <LoadBtn hendlerLoadMore={hendlerLoadMore} /> : null}
        {loader}
        {modalOpen && <Modal hendlerCloseImage={this.hendlerCloseImage}><Img src={largeImg} /></Modal>}
        <ToastContainer
          position="top-center"
          autoClose={3000}
        />
      </Container>
    );
    return app;
  }
}

export default App;


