import React from 'react';
import ReactDOM from 'react-dom/client';

import Child1 from './child1';

class App extends React.Component {
    state = {
        list: [{ id: 1, val: 'xxx' }],
        content: "66",
    }
    keyDown = (e) => {
        console.log()
        if (e.keyCode == 13) {
            this.setState({
                list:this.state.list.concat({id:Math.random(),val:e.target.value}),
                content:e.target.value,
            })
        }
    }
    btnFun(v){
        this.setState({
            list: this.state.list.filter(item => v.id != item.id)
        })
    }
    aClick = (data) => {
       console.log(data)
    }
    render() {
        let { list, content } = this.state;
        return <div>
            <input type="text" defaultValue={content} onKeyDown={this.keyDown} />
            <ul>
                {
                    list.map(v => {
                        return <li key={v.id}>
                            {v.val}
                            <button onClick={()=>{this.btnFun(v)}}>x</button>
                        </li>
                    })
                }
            </ul>
            <Child1 
             content={content} 
             onFarth={this.aClick}
             render={() => {
                return <div>888</div>
             }}
             ></Child1>
        </div>
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);