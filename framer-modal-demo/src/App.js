import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Modal from './components/Modal/index';

const testText = 'This is my test text';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="save-button"
        onClick={() => (modalOpen ? close() : open())}
      >
        Launch Modal
      </motion.button>

      <AnimatePresence initial={false} wait={true}>
        {modalOpen && (
          <Modal modalOpen={modalOpen} handleClose={close} text={testText} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
