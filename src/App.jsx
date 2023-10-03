import { useEffect, useState } from 'react'

function App() {
  let [color, setColor] = useState({r: 255, g: 255, b: 255})

    useEffect(() => {
        fetch("https://prueba-backend-tpfi.onrender.com/")
        .then(respuesta => respuesta.json())
        .then(color => setColor(color));
    }, []);

  return (
    <section style = {{backgroundColor: `rgb(${[color.r, color.g, color.b].join(" , ")})`}}>
            <h1> { [ color.r, color.g, color.b].join(",") } </h1>
    </section>
  )
}

    export default App