import styled from '@emotion/styled';

export const Button = styled.button`
color: #fff;
font-size: 16px;
display: block;
margin: 15px auto ;
padding: 10px 20px;
border: none;
background-color: #23be45;
    border-radius: 0.5rem;
    transition: outline 250ms ease-in-out, color 250ms ease-in-out,background-color 250ms ease-in-out;
    &:focus, &:hover {
        outline: 1px solid #23be45;
        color: #23be45;
        background-color: inherit;
    }
`