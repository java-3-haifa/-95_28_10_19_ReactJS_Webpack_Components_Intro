import React from 'react'
import Counter from './counter.js'

export default function () {
    return (
        <div>
            <h1>App component</h1>
            <Counter current={50}/>
        </div>
    );
}
