import Button from './components/Button';
import './App.css'

import myImage from './assets/react.svg'

export default function App() {
  return ( <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Button onClick={() => console.log("I'm here")}>TEST</Button>
    <hr></hr>
    <img src={myImage} />
    </>
  )
}