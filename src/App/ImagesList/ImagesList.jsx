import { ImgList } from './ImagesList.styled'
import ImageItem from './ImageItem/ImageItem';


export default function ImagesList({ response }) {
    const imagesList =
        <ImgList>
            {response.map(img => <ImageItem key={img.id} webformatURL={img.webformatURL} tags={img.tags} largeImageURL={img.largeImageURL} />)}
        </ImgList>
    return imagesList;
}

