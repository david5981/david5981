import logo from './logo.svg';
import './App.css';
import  MagicBall  from './components/MagicBall/MagicBall'
import { Button } from '@mui/material'
import { useEffect, useState } from 'react';

// function App() {
//   let answer = [
//     "Бусспорно",
//     "Мне кажется - да",
//     "Пока не ясно, попробуй снова",
//     "Даже не думай"
//   ];

  // let[number, setNumber] = useState(Math.floor(Math.random() * answer.length))
  
  function App() {
    let [answer, setAnswer] = useState("");
    let [pending, setPending] = useState("")
    let URL = `https://jsonplaceholder.typicode.com/todos${Math.floor(Math.random() * 20 )}`

useEffect(() =>{
  if(pending) {
fetch (URL)
.then(response => response.json())
.then((data) => {
 setPending(false)
 setAnswer(data.title)
})
}
}, [pending])

const handleClick = () => {
   
}

  return (
    <div className="App">
      <header className="App-header">
        <MagicBall  answer={answer} />
         <Button onClick={handleClick}>Получить предсказание</Button>
      </header>
    </div>
  );
  }

export default App;
