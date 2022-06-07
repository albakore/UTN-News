import React,{useState}  from "react";
import ListNews from './components/ListNews';
import './App.css';
import {Offcanvas,OffcanvasBody,OffcanvasHeader,Button} from 'reactstrap';


function App() {
  const [offcanvas, setoffcanvas] = useState(false);
  const mostrar = () => setoffcanvas(!offcanvas);


  return (
    <div className="App">
      <Button
        color="primary"
        onClick={mostrar}
      >
        Open
      </Button>
      <Offcanvas
        backdrop={false}
        direction="start"
        scrollable
        isOpen={offcanvas}
        //toggle={mostrar}  
      >
        <OffcanvasHeader toggle={mostrar}>
          Noticias
        </OffcanvasHeader>
        <OffcanvasBody>
            <ListNews />
        </OffcanvasBody>
      </Offcanvas>
      
    </div>
  );
}

export default App;
