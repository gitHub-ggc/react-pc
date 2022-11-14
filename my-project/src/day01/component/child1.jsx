import React from 'react';
import ReactDOM from 'react-dom/client';

import Child2 from './child2';
import Child3 from './child3';
class Child1 extends React.Component{
  state =  {
    names : "珠峰",
    age: 1,
  };
  changeName = (e)=>{
    console.log(e)
    // this.state({
    //     names:e.target.value
    // })
  }
  render(){
    return <div>
              父组件
              <input type="text" value={this.state.names} onChange={this.changeName}/>
              {/* <input type="text" value={this.state.age} />
              <Child2 names={this.state.names} ages={this.state.age}></Child2>
              <Child3 names={this.state.names} ages={this.state.age}></Child3> */}
           </div>
  }
}
ReactDOM.render(<Child1 />,document.getElementById('root'));
export default Child1
