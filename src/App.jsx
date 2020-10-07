import './App.css'
import React from "react"

import Primeiro from "./components/Primeiro"
import Segundo from "./components/Segundo"
import Child from "./components/Child"


import Card from "./components/layout/Card"
import Repet from "./components/Repet"
import Cond from "./components/Cond"


export default props =>
    <div className="App">
        <Card titulo="Componentes Filhos">
            <Cond numero={10}></Cond>
        </Card>
        <Card titulo="Componentes Filhos">
            <Repet></Repet>
        </Card>
        <Card titulo="Componentes Filhos">
            <Child>
                <ul>
                    <li>Teste</li>
                    <li>Teste</li>
                    <li>Teste</li>
                    <li>Teste</li>
                </ul>
            </Child>
        </Card>
        <Card titulo="Componentes Parametros">
            <Segundo titulo="Esse é o titulo" subtitulo="Este é o sub titulo" />
        </Card>
        <Card titulo="Componentes Primeiro">
            <Primeiro />
        </Card>


    </div>