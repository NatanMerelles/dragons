import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Backdrop, Dialog, Content, Header, Footer, Body } from './style';

const Modal = ({ children, isOpen }) => {
  const [body] = document.getElementsByTagName('body');

  if (!isOpen) { return null }

  return (
    ReactDOM.createPortal(
      (
        <Backdrop>
          <Dialog>
            <Content>
              {children}
            </Content>
          </Dialog>
        </Backdrop>
      ),
      body
    )
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool
};

Modal.defaultProps = {
  isOpen: false
};

Object.assign(Modal, { Header, Body, Footer });

export { Modal }