import React from 'react';
// import ReactDOM from 'react-dom/client';
class Child1 extends React.Component{
  state =  {
    // age2 : "18",
    name2: "zujian2",
    arr:[1,2,3,4,5]
  }
  aa = (e) => {
    this.setState({
      name2:e.target.value
    },() => {
      this.props.onFarth(this.state.name2)
    })
  }
  render(){
    let {content,render} = this.props;
    let {arr} = this.state;
    console.log(888,render)
    return <div>
              子组件一
              {content}
              <input type="text" defaultValue={content} onChange={this.aa} />
              {/* <ul>
                {
                  arr.map(item => {
                    return <li key={item}>{render()}</li>
                  })
                }
              </ul> */}
              {/* { render ? render() : 'ceshi'} */}
              { render ? 'ceshi' : render()}
           </div>
  }
}
export default Child1