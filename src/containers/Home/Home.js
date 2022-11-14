import React, { useState } from 'react';
import Modal from "../../components/modal/modal";
import './Home.css';

function Home() {
  const [show, setShow] = useState(null);
  const isShow = () => {
    setShow(true);
  }

  const isHide = () => {
    setShow(false);
  }

  return (
    <div className='home-container'>
      <Modal show={show} handleClose={isHide}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, totam. Vel doloribus est et eum placeat dolorem id neque dolores voluptates, cumque numquam excepturi! Quos placeat tempore ex praesentium nulla.
      </Modal>
      <div className='buttons-group'>
        <button className='btn' onClick={isShow}>Modal show</button>
      </div>
    </div>
  )
}

export default Home