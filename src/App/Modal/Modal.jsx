import { PureComponent } from 'react';
import { Wraper, ModalBody } from './Modal.styled';
import { createPortal } from 'react-dom';

class Modal extends PureComponent {
    hendlerShutDown = (e) => {
        if (e.key === 'Escape' || e.target === e.currentTarget) {
            this.props.hendlerCloseImage();
        }
    }
    componentDidMount() {
        window.addEventListener('keydown', this.hendlerShutDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.hendlerShutDown);
    }

    render() {
        return createPortal(<Wraper onClick={this.hendlerShutDown}>
            <ModalBody>{this.props.children}</ModalBody>
        </Wraper>, document.getElementById('modal-root'))
    }

}

export default Modal;
