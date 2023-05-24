import styled from '@emotion/styled';

export const Wraper = styled.div`
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
z-index: 999;
background-color: rgba(143, 143, 143, 0.5);
`

export const ModalBody = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 75%;
  max-width: 75%;

  overflow: hidden;
`;
