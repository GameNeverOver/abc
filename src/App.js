import React from 'react';
// import A from './films'
// import Aa from './film2'
import P from './props'
// function App() {
import Tree from './treeSelect'
import Tv from './tv/tv1'
  class App extends React.Component{
    constructor(){
      super()
      this.ref = React.createRef();
    }
    
    render(){
      return (
        <div className="App">
          <div ref={this.ref}>abc</div>
          {/* <A />
          <Aa/> */}
          {/* <P a={123} {...this.props}/> */}
          {/* <Tree/> */}
          <Tv/>
        </div>
      ) 
    }
}

export default App;
