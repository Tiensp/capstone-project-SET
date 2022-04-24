import React, {useState, createContext} from "react";

const {Provider, Consumer} = createContext();

function DropletsProvider(props){

  const [droplets, setDroplets] = useState([]);

  return (
    <Provider value={{droplets: droplets, setDroplets: setDroplets}}>
      {props.children}
    </Provider>
  )
}

export {DropletsProvider, Consumer as DropletsConsumer};