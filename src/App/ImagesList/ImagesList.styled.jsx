import styled from '@emotion/styled';

export const ImgList = styled.ul`
margin-top: 90px;
list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
`
export const ImgItem = styled.li`
    height: 230px;
    flex-basis: calc((100% - (3*30px)) / 4);
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 0.2rem;
    background-color: #e0e6e0;
    overflow: hidden;

    @media screen and (max-width: 1199px) {
        flex-basis: calc((100% - (2*30px)) / 3);
    }

    @media screen and (max-width: 767px) {
        flex-basis: calc((100% - 30px) / 2);
    }

    @media screen and (max-width: 560px) {
        flex-basis: 100%;
    }
`
export const Img = styled.img`
display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    &:hover{
        filter: brightness(1.2);
        cursor: pointer;
    }
`