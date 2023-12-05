import { ChangeEvent, useState } from 'react'
import './App.css'


export default function App() {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');

  const handlerChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const value: string = event.target.value.slice(1, 7);
    setInput(value);
    let color;
    if (value.length === 2) color = value + value + value;
    if (value.length === 3) color = value + value;
    if (value.length === 6) color = value;
    if (!color) return;
    
    const a = parseInt(color.slice(0, 2), 16);
    const b = parseInt(color.slice(2, 4), 16);
    const c = parseInt(color.slice(4, 6), 16);
    if (!a || !b || !c) return setOutput('Ошибка!')
    setOutput(`rgb(${a}, ${b}, ${c})`);
  }

  return (
    <div className='app' style={{backgroundColor: output}}>
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