import { BackgroundCont, ImagesGroup, Image } from './BackgroundContainer.styled';

export default function BackgroundContainer({ response }) {
    if (response < 9) {
        return
    }
    const backgroundContainer =
        <BackgroundCont>
            <ImagesGroup>
                <Image height={3.5} width={4} src={response[0].webformatURL} alt={response[0].tags} />
                <Image height={3} width={4} src={response[1].webformatURL} alt={response[1].tags} />
                <Image height={3.5} width={4} src={response[2].webformatURL} alt={response[2].tags} />
            </ImagesGroup>
            <ImagesGroup>
                <Image height={4} width={3} src={response[3].webformatURL} alt={response[3].tags} />
                <Image height={4} width={3} src={response[4].webformatURL} alt={response[4].tags} />
                <Image height={4} width={3} src={response[5].webformatURL} alt={response[5].tags} />
            </ImagesGroup>
            <ImagesGroup>
                <Image height={3.5} width={4} src={response[6].webformatURL} alt={response[6].tags} />
                <Image height={3} width={4} src={response[7].webformatURL} alt={response[7].tags} />
                <Image height={3.5} width={4} src={response[8].webformatURL} alt={response[8].tags} />
            </ImagesGroup>
        </BackgroundCont>;
    return backgroundContainer;
}

