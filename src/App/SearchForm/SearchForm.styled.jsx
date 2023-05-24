import styled from '@emotion/styled';

export const SearchFormCont = styled.form`

    position: ${({ submitted }) => submitted ? 'fixed' : 'absolute'};
    height: ${({ submitted }) => submitted ? '90px' : '100svh'};
    width: ${({ submitted }) => submitted ? '100%' : '100svw'};
    top: ${({ submitted }) => submitted ? 0 : '50%'};
    left: ${({ submitted }) => submitted ? 0 : '50%'};
    z-index: 999;
    transform: translate${({ submitted }) => submitted ? 0 : '(-50%, -50%)'};
    transition: background-color 500ms ease-in-out, top 1000ms ease-in-out;
    background-color: rgba${({ submitted }) => submitted ? '(255, 255, 255, 0.8)' : '(143, 143, 143, 0.3)'};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const SearchFormBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`

export const SearchInput = styled.input`
    width: 300px;
    padding: 5px;
    height: 30px;
    margin-right: 10px;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.16;
    letter-spacing: 0.01em;
    color: #36cadd;

    &::placeholder {
        color: #8c8f91;
    }

    border: 1px solid #23be45;
    border-radius: 0.5rem;
    ;
    background-color: #ffffff;

    transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);

    &:focus {
        border: 3px solid #36cadd;
        outline: none;
    }

    &:not(:placeholder-shown) {
        border: 1px solid #36cadd;
    }
`
export const SearchButton = styled.button`
    display: flex;
        justify-content: center;
    align-items: center;

    height: 30px;
    width: 30px;
    border: 1px solid #23be45;
    border-radius: 0.5rem;
    background-color: #ffffff;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), fill 250ms cubic-bezier(0.4, 0, 0.2, 1), border 250ms cubic-bezier(0.4, 0, 0.2, 1);
    color: #23be45;

    &:hover {
        background-color: #36cadd;
        outline: none;
        color: #fff;
    }

    &:focus {
        background-color: #36cadd;
        outline: none;
        color: #fff;
    }
`
export const Filters = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
export const SelectGroup = styled.div`
        position: relative;
display: block;
width: 10em;
height: 120%;

background: #d7e7d0;
overflow: hidden;
border-radius: .25em;
&:after {
    content: '\\00d7';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 0 1em;
    background: #d7e7d0;
    ;
    pointer-events: none;

}
&:hover::after {
    color: #f39c12;

}
`
export const Select = styled.select`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0 0 0 .5em;
    color: #646363;
    cursor: pointer;
    appearance: none;
    outline: 0;
    box-shadow: none;
    border: 0;
    background: #d7e7d0;
    background-image: none;
    `
