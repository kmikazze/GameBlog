import FormularioPostagem from '../../postagens/FormularioPostagem';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalPostagem.css'

function ModalPostagem() {
  return (
    <>
      <Popup 
      trigger={<button className='rounded-full px-4 bg-yellow text-dark-blue hover:bg-white border border-dark-blue hover:text-dark-blue shadow-xl'>Nova postagem</button>} modal>
        <div>
          <FormularioPostagem />
        </div>
      </Popup>
    </>
  );
}

export default ModalPostagem;