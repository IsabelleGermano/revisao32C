import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
     <header>
        <h1> Login </h1>
     </header>
     <main>
        <form action="">
          <div>
            <label htmlFor="usuario">Usuário</label>
            <input type="text" id='usuario '  placeholder='digite seu usuario'/>
          </div>
          <div><label htmlFor="usuario">senha</label>
            <input type="password" id='senha'  placeholder='digite sua senhaa'/></div>

            <button>Enviar</button>
        </form>
     </main>
    </>
  )
}

export default App
