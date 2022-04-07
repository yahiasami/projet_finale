import React from 'react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'


export const SuccessModal = ({modalIsOpen, toggleModal}) => {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={toggleModal} className="modal">
      <div className="modal__form">
        <h2 className="modal__heading">Account Successfully created!</h2>

          <button className="modal__form--btn">
            <Link className="react-link" to="/">Return to home</Link>
          </button>
      </div>
    </Modal>
  )
}

