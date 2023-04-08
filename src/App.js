import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lexend+Mega:wght@600&display=swap');

  body {
    font-family: 'Lexend Mega', sans-serif;
  }
`;


const Background = styled.div`
  background-image: radial-gradient(black 15%, transparent 16%);
  background-size: 20px 20px;
  background-color: #fe4e00;
  height: 100vh;
`;

const Container = styled.body`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  width: 35vw;
  border: 3px solid black;
  border-radius: 20px;
  box-shadow: 5px 5px black;
  padding: 20px;
  max-width: 500px;
  margin: auto; 
  overflow-y: auto;
`;

const Title = styled.h1`
font-size: 50px;
text-align: center;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

const Input = styled.input`
  padding: 0px;
  width: 40vw;
  max-width: 300px;
  height: 5vh;
  border: 4px solid black;
  border-radius: 5px;
  box-shadow: 5px 5px black; 
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Lexend Mega', sans-serif;
`;

const Button = styled.button`
  background-color: #e9190f;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  box-shadow: 5px 5px black;
  margin-left: 20px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  font-family: 'Lexend Mega', sans-serif;

&:hover {
  background-color: #e4520e;
}
`;

const Ol = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Li = styled.li`
  width: 40vw;
  max-width: 400px;
  height: 5vh;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border: 3px solid black;
  border-radius: 5px;
  box-shadow: 2px 2px black;
  margin-bottom: 10px;
  padding: 10px;
`;

const DeleteButton = styled.button`
  background-color: #e9190f;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 5px 5px black;
  margin-left: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  font-family: 'Lexend Mega', sans-serif;

&:hover {
  background-color: #e4520e;
}
`;

const Task = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

export default function App() {
  const [add, setAdd] = useState("");
  const [guarda, setGuarda] = useState([]);

  const removertarefa = (id) => {setGuarda(guarda.filter((item) => item.id !== id));
  };

  return (
    
    <Background>
    <Container>
    <GlobalStyle />
   

      <Title>Lista de Tarefas</Title>

      <InputWrapper>
        <Input onChange={(e) => setAdd(e.target.value)} value={add} type="text"/>
        <Button onClick={() => {setGuarda(guarda.concat({ tarefa: add, id: Date.now() }));
          setAdd(""); }}>
          Add
        </Button>
      </InputWrapper>

      <Ol>
        {guarda.map((item) => (<Li key={item.id}><Task>{item.tarefa}</Task>
            <DeleteButton onClick={() => removertarefa(item.id)}>
              delete
            </DeleteButton>
          </Li>
        ))}
      </Ol>
    </Container>
    </Background>
  );
}
