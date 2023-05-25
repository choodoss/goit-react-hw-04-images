import { useEffect } from 'react';
import { Wraper, ModalBody } from './Modal.styled';
import { createPortal } from 'react-dom';

export default function Modal({ children, hendlerCloseImage }) {

    const hendlerShutDown = e => {
        console.log(e)
        if (e.key === 'Escape' || e.target === e.currentTarget) {
            hendlerCloseImage();
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', hendlerShutDown);
        return () => window.removeEventListener('keydown', hendlerShutDown);
    }, []);

    return createPortal(<Wraper onClick={hendlerShutDown}>
        <ModalBody>{children}</ModalBody>
    </Wraper>, document.getElementById('modal-root'))
}

