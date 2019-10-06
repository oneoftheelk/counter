import React from 'react';
import './App.css';
import { CounterContainer } from './components/counter/CounterContainer';

export const App = () => {
    return (
        <div className='app'>
            <CounterContainer />
        </div>
    )
}