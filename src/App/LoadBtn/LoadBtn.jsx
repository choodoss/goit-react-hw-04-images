import { Button } from './LoadBtn.styled';

export default function LoadBtn({ hendlerLoadMore }) {
    const loadbtn =
        <Button onClick={hendlerLoadMore} type='button'>Load more</Button>
    return loadbtn;
}