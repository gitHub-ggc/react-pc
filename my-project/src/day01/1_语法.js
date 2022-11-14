import React from 'react';
import ReactDOM from 'react-dom/client';

import Child1 from './component/child1.jsx';
function App(){
    return <div>
        <h1>hell react</h1>
        <input type="text"/>
        <Child1></Child1>
    </div>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);