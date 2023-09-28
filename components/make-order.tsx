import { useState, useEffect } from 'react';
import ClientOnlyPortal from './clientOnlyPortal'
import Button from "../components/button";
import Modal from "../components/modal";
import Gallery from '../components/gallery'
import s from "../styles/make-order.module.scss";

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
}; 

const Order = () => {
  const [showModal, setShowModal] = useState(false);
  const [slides, setSlides] = useState([])
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    loadSlides()
  }, []);

  const loadSlides = async () => {
    const response = await fetch('/api/gallery')
    setStatus(Status.PENDING)
    const result = await response.json()
    setSlides(result.gallery)
    setStatus(Status.RESOLVED)
  }
  const loadInfo = async () => {
    const response = await fetch('/api/info')
    setStatus(Status.PENDING)
    const result = await response.json()
    setInfo(result.info)
    setStatus(Status.RESOLVED)
  }

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
      <Gallery slides={slides} /> 
    </section>
  );
};

export default Order;
