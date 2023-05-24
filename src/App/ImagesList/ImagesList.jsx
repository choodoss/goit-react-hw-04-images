import { ImgList, ImgItem, Img } from './ImagesList.styled'

export default function ImagesList({ response, hendlerOpenImage }) {
    const imagesList =
        <ImgList>
            {response.map(img => <ImgItem key={img.id}><Img onClick={hendlerOpenImage} src={img.webformatURL} alt={img.tags} data-img={img.largeImageURL} /></ImgItem>)}
        </ImgList>
    return imagesList;
}