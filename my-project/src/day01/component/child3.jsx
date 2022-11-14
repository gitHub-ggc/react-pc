import React from 'react';
import ReactDOM from 'react-dom/client';
class Child3 extends React.Component{
  state =  {
    // age2 : "18",
    // name2: "zujian2"
  }
  render(){
    return <div>
              子组件3
              <input type="text" value={this.props.names} />
              <input type="text" value={this.props.ages} />
           </div>
  }
}
export default Child3
