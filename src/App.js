import React, { useState } from 'react';
import Posta7 from './img/Posta7.png'
import styled from 'styled-components'

import './App.css';

const Form = styled.form`
  padding: 16px;
  margin: 5%;
`

const Input = styled.input`
  border:1px solid #4682b4 ;
  border-radius: 3px;
  width: 100%;
  padding: 8px 4px;
  display: block;
`

const Button = styled.button`
  background: #4682b4 ;
  color: white;
  border-radius: 3px;
  height: 32px;
  display: block;
  width: 100%;
  margin-top:5px;
  text-align: center;
`

let result = false;

function handleSubmit(event) {
  (result) ? alert("Correcto! 87, al dar vuelta la imagen y leer los aparcamientos bien, y 'LA' se encuentra repetido en la segunda imagen") : alert("Respuesta incorrecta!")
  event.preventDefault();
}

const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue)
  const onChange = e => setValue(e.target.value)
  
  if(value.toUpperCase().replace(/\s/g, '') === 'UNIONESPERANZA'){
    result = true
  }else{
    result = false
  }
  return { value, onChange }
}


function App() {
  
  const respuesta = useInputValue('')

  return (
    <div className="App">
        <h1>Posta 7</h1>
      <header className="App-header">

        <div className="img-container">
          <img src={Posta7} className="img" alt="Posta 7" />
        </div>

        <p>¿mmmmm que dice aca? <br></br> Ingresa la respuesta correcta.</p>

        <Form onSubmit={handleSubmit}>
          <Input placeholder='Tu Respuesta' {...respuesta} />
          <Button>Enviar respuesta</Button>
        </Form>
      </header>
    </div>
  );
}

export default App;
