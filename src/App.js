import './App.css';
import { useState } from 'react';
import quotes from './quotes.json'
import QuoteBox from './components/QuoteBox.jsx';

function App() {

  const colors = ["#845eC2", "#D65DB1","#FF6F91", "#ff9671", "#ffc75f"];

  //state 
  const [quote, setUser] = useState(quotes[getNumber(quotes.length)]);
  const [background, setBackground] = useState(colors[getNumber(colors.length)]);

  //manejo de funcion para el background
  const handleUser = () => {
  const index = getNumber(quotes.length);
  setUser(quotes[index]);
  setBackground(colors[getNumber(colors.length)])
  }
 
  return (
    <div className="app" style={{background}}>
      <QuoteBox 
      
        quotes={quote.quote}
        autor={quote.author}
        changeUser={handleUser}
        color={background}
      />
    </div>
  );
}

//const getNumber = () =>Math.floor(Math.random() * max);

const getNumber = max => Math.floor(Math.random() * max);
export default App;


