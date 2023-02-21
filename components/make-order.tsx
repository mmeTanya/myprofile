import { useState } from "react";
import ClientOnlyPortal from './clientOnlyPortal'
import Button from "../components/button";
import Modal from "../components/modal";
import s from "../styles/make-order.module.scss";


const Order = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className={s.order}>
      <div className='container'>
        <h2 className={s.order__title}>Click on the button if you want to leave me message</h2>
        <Button theme={'animate'} onClick={handleOpenModal} type={'button'} text={'Leave message'} />
        {showModal && <ClientOnlyPortal selector="#modal"><Modal onClose={handleCloseModal} /></ClientOnlyPortal>}
      </div>
    </section>
  );
};

export default Order;
