import React, { useState } from 'react';
import './Cards.css';
import { Modal, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cardData = [
  {
    id: 1,
    title: 'Busca Binária',
    description: 'Espaço pra texto',
    icon: <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
  },
  {
    id: 2,
    title: 'React',
    description: 'Biblioteca JavaScript para criar interfaces de usuário interativas e reutilizáveis',
    icon: <FontAwesomeIcon icon={faReact} size="2x" />
  },
  {
    id: 3,
    title: 'Vite',
    description: 'Ferramenta de build moderna e rápida para projetos web, focada em desempenho',
    icon: (
      <img
        src="https://vitejs.dev/logo-with-shadow.png"
        alt="Vite Logo"
        style={{ width: '32px', height: '32px' }}
      />
    )
  },
  {
    id: 4,
    title: 'Linguagem C',
    description: 'Linguagem de programação estruturada, usada em sistemas, drivers e aplicações de baixo nível',
    icon: (
      <svg width="32px" height="32px" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.7 0 4-2 4-4s-1.3-4-4-4-4 2-4 4 1.3 4 4 4zm0 2c-3.3 0-6 1.7-6 4v2h12v-2c0-2.3-2.7-4-6-4z" />
      </svg>
    )
  }
];

function Cards() {
  const [openModalId, setOpenModalId] = useState(null);

  const handleOpen = (id) => setOpenModalId(id);
  const handleClose = () => setOpenModalId(null);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <div className="grid">
        {cardData.map((card) => (
          <div key={card.id} className="card" onClick={() => handleOpen(card.id)}>
            <span className="icon">{card.icon}</span>
            <h4>{card.title}</h4>
            <p>{card.description}</p>
            <div className="shine"></div>
            <div className="background">
              <div className="tiles">{[...Array(10)].map((_, i) => <div key={i} className={`tile tile-${i + 1}`}></div>)}</div>
              <div className="line line-1"></div>
              <div className="line line-2"></div>
              <div className="line line-3"></div>
            </div>
          </div>
        ))}
      </div>

      {cardData.map((card) => (
        <Modal key={card.id} open={openModalId === card.id} onClose={handleClose}>
          <Box sx={style}>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </Box>
        </Modal>
      ))}
    </>
  );
}

export default Cards;
