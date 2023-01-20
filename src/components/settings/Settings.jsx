import React from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'

export default function Settings() {
  
  const defaultConfig = {
    theme: 'dark',
    lang: 'es',
  }  

  const [config, setConfig] = useLocalStorage('config', defaultConfig);
  
  const handleClick = (event) => {
    event.preventDefault();

    setConfig((oldConfig) => ({
        ...oldConfig,
        theme: 'light',
    }));
  }

  return (
    <div>
        <h1>APP SETTINGS</h1>
        <p>Actual Config: {config}</p>
        <button
             onClick={handleClick}
             type='button'
        >
            Save New Settings
        </button>
    </div>
  )
}
