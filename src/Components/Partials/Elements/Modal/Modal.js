import './Modal.css';
import ModalHeader from './ModalHeader/ModalHeader';

function Modal({ modalHeading, handleClose, children, view }) {
    return (
        <div className='modal-backdrop'>
            <div className={`modal-content ${view && 'view'}`}>
                <ModalHeader
                    modalHeading={modalHeading}
                    handleClose={handleClose}
                />
                <div className='modal-main'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal