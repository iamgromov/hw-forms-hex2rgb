import { ChangeEvent, useState } from 'react'
import './App.css'


export default function App() {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');

  function convert(value: string) {
    const container = document.querySelector('.color-container') as HTMLElement
    if (/([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value)) {
      const r = parseInt(value.substring(0, 2), 16);
      const g = parseInt(value.substring(2, 4), 16);
      const b = parseInt(value.substring(4, 6), 16);
      
      setOutput(`rgb (${r}, ${g}, ${b})`);
      container.style.background = `#${value}`;
      console.log(value);
    } else {
      setOutput(`Ошибка!`)
      container.style.background = '#ff0000';
    }
  }

  const handlerChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const value: string = event.target.value.slice(1, 7);
    setInput(value);

    if (value.length === 6)  {
      convert(value);
    }
  }

  return (
    <div className='app'>
      <div className="color-container">
        <input 
          className='color__input input' 
          type="text" 
          value={`#${input}`}
          onChange={handlerChangeInput}
        />
        <input 
          className='color__input output' 
          type="text" 
          value={output}
          disabled
        />
      </div>
    </div>
  )
}