import React from 'react'
import Landing from 'views/Lading'
import DataState from './context/informacion/DataState'

const App = () => {
    return (
        <DataState>
            <Landing />
        </DataState>

    )
}

export default App
