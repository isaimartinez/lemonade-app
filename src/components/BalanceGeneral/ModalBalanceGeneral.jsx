import React from 'react';
import Modal from 'react-modal';
import BalanceGeneral from './BalanceGeneral';
import {Button} from '../'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    height: '50%',
    padding: 0,
    backgroundColor: "#fafbfb",
  },
  overlay: {
    backgroundColor: 'rgba(250, 250, 249, 0.8)',
    zIndex: '5'
  }
};
const ModalBalanceGeneral = ({isModalBalanceGeneral, setIsModalBalanceGeneral}) => {

  const closeModal = () => {
    setIsModalBalanceGeneral(false)
  }

  return (
    <Modal
      isOpen={isModalBalanceGeneral}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="ModalBalanceGeneral"
    >
      <div className='flex flex-col h-full'>
        <div className='flex flex-col items-center w-full m-auto'>
          <p className='text-3xl'>Balance General</p>
          <div className='flex p-5 w-full'>
            <BalanceGeneral />
          </div>
          <div className='flex p-5 w-full'>
            <Button label={"Cerrar"} onClick={closeModal}/>
          </div>
        </div>

      </div>
    </Modal>
  )
}

export default ModalBalanceGeneral