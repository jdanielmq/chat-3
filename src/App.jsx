import React from 'react';

import {ChatContext} from './context/ChatProvider'
import Narbar from './components/Narbar';
import Chat from './components/Chat';

function App() {

  const {usuario} = React.useContext(ChatContext)
  
  return (
    <div >
      <Narbar/>
      {
        usuario.activo ? 
        (
          <Chat/>
        ):(
          <div className='text-center mt-5 lead'>
            click en acceder para iniciar chat
          </div>
        )
      }
    </div>
  );
}

export default App;
