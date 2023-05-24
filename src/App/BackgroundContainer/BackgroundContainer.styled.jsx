import styled from '@emotion/styled';

export const BackgroundCont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 5px;
max-width: 100svw;
height: 100svh;
padding: 10px;

position: fixed;
top: 0;
left: 50%;
transform: translateX(-50%);
z-index: 101;

transition: opacity 1000ms cubic-bezier(0.075, 0.82, 0.165, 1);

/* opacity: 0;
pointer-events: none; */
`
export const ImagesGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 5px;
    :last-child{
    align-items: flex-start;
}`

export const Image = styled.img`
display: block;
    object-fit: cover;
    height: calc((100svh - 10px) / ${(props) => props.height});
    width: calc((100svw - 10px) / ${(props) => props.width});
    `