import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Rotas from './Rotas/Rotas';

// GABRIELA GEORG, EDUARDA, JÚLIA, MARIANA E PEDRO - 3AM

function App() {
  return (
    <>
    <ChakraProvider>
      <Rotas/> 
    </ChakraProvider>

    </>
  );
}

export default App;
