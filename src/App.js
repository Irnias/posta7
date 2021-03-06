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
  if(result){
    alert("Correcto! Que bueno que no leiste solo el final!!")
    window.location.href = "https://invitacion.now.sh/"
  } else {
    alert("Respuesta incorrecta!")
  }
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
        <div className="titulo">
          <h1>Posta 7</h1>
        </div>  
      <header className="App-header">

        <div className="img-container">
          <img src={Posta7} className="img" alt="Posta 7" />
        </div>

        <p>¿mmmmm que dice aca? <br></br> Ingresa la respuesta correcta.</p>

        <Form onSubmit={handleSubmit}>
          <Input placeholder='Tu Respuesta' {...respuesta} />
          <Button>Enviar respuesta</Button>
        </Form>
        <p> Por consultas o dudas pueden contactar a cualquier diri n.n</p>
      </header>
    </div>
  );
}

export default App;
