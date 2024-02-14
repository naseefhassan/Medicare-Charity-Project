import React, { useState } from "react";
import Modal from "../Modal/Modal";


Modal.setAppElement("#root");

function Modal() {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <div className="bg-red-900">
        <h1 className="text-3xl"> Modal success</h1>
      </div>
    </Modal>
  );
}

export default Modal;
