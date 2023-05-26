import { useState } from 'react';
import { ImgItem, Img } from './ImageItem.styled'
import Modal from '../../Modal/Modal'


export default function ImageItem({ webformatURL, tags, largeImageURL }) {
    const [modalOpen, setModalOpen] = useState(false);

    const hendleToggleImage = () => {
        setModalOpen(!modalOpen)
    }

    const imgItem =
        <>
            <ImgItem>
                <Img onClick={hendleToggleImage} src={webformatURL} alt={tags} /></ImgItem>
            {
                modalOpen && <Modal hendlerCloseImage={hendleToggleImage}>
                    <Img src={largeImageURL} alt={tags} /></Modal>
            }
        </>
    return imgItem;
}

