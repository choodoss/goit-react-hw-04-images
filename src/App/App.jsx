import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BackgroundContainer from './BackgroundContainer/BackgroundContainer';
import { searchImages } from './fetchDefault/fetchDefault';
import SearchForm from './SearchForm/SearchForm';
import ImagesList from './ImagesList/ImagesList';
import { Container, Img } from './App.styled';
import LoadBtn from './LoadBtn/LoadBtn';
import { ColorRing } from 'react-loader-spinner'
import { createPortal } from 'react-dom';

export default function App() {
  const [name, setName] = useState('');
  const [page, setPage] = useState(1);
  const [per_page, setPerPage] = useState(9);
  const [category, setCategory] = useState('all');
  const [colors, setColors] = useState('all');
  const [orientation, setoOrientation] = useState('all');
  const [image_type, setImageType] = useState('all');
  const [response, setResponse] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [secondRespons, setSecondRespons] = useState(false);

  useEffect(() => {
    searchImages({ name, page, per_page, category, colors, orientation, image_type })
      .then(res => {
        return setResponse(res.hits)
      })
  }, []);

  useEffect(() => {
    if (loading) {
      searchImages({ name, page, per_page, category, colors, orientation, image_type })
        .then(res => {
          if (res.total !== 0) {
            setSubmitted(true)
            setResponse(res.hits)
            setTotal(res.totalHits)
            setSecondRespons(true)
          } else {
            toast.error("Картинки за вашим запитом відсутні");
          }
        }).finally(setLoading(false))
    }
  }, [name, category, colors, orientation, image_type]);

  useEffect(() => {
    if (loading && secondRespons) {
      searchImages({ name, page, per_page, category, colors, orientation, image_type })
        .then(res => {
          setResponse([...response, ...res.hits])
          setLoading(false)
        }).finally(setLoading(false))
    }
  }, [page, per_page]);

  const hendleSubmitChange = ({ searchName, category, colors, orientation, image_type }) => {
    if (searchName === undefined) {
      if (category) {
        setName('')
        setLoading(true)
        setCategory(category)
      }
      if (colors) {
        setLoading(true)
        setColors(colors)
      }
      if (orientation) {
        setLoading(true)
        setoOrientation(orientation)
      }
      if (image_type) {
        setLoading(true)
        setImageType(image_type)
      }
    }
    else {
      setSecondRespons(false)
      setPerPage(16)
      setName(searchName)
      setLoading(true)
      setCategory("all")
      setColors("all")
      setoOrientation("all")
      setImageType("all")
      setPage(1)
    }
  }

  const hendlerLoadMore = () => {
    setPage(prePage => prePage + 1)
    setLoading(true)
  }

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
      <SearchForm onSubmit={hendleSubmitChange} submitted={submitted} />
      {response && submitted ? <ImagesList response={response} /> : null}
      {(total / page) > per_page && response && submitted ? <LoadBtn hendlerLoadMore={hendlerLoadMore} /> : null}
      {loader}
      <ToastContainer
        position="top-center"
        autoClose={3000}
      />
    </Container>
  );
  return app;
}

