import React, {Component} from 'react';
import Toolbar from './film3';
// const ThemeContext = React.createContext('1');
import {ThemeContext,LiuContext} from './data'
export default class App extends Component {
    state = {
        a: 999,
        b: 888
    }
  render() {
    // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
    // 无论多深，任何组件都能读取这个值。
    // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
    return (
        <ThemeContext.Provider value={this.state.a}>
            <LiuContext.Provider value = {this.state.b}>
                    <Toolbar />
                    <span onClick={()=>{
                        this.setState({
                            a: this.state.a + 1
                        })
                    }}>aa</span>
                     <span onClick={()=>{
                        this.setState({
                            b: this.state.b + 1
                        })
                    }}>bb</span>
            </LiuContext.Provider>
        </ThemeContext.Provider>
    );
  }
}

// 中间的组件再也不必指明往下传递 theme 了。
// function Toolbar() {
//   return (
//     <div>
//       <ThemedButton />
//     </div>
//   );
// }

// class ThemedButton extends React.Component {
//   // 指定 contextType 读取当前的 theme context。
//   // React 会往上找到最近的 theme Provider，然后使用它的值。
//   // 在这个例子中，当前的 theme 值为 “dark”。
//   static contextType = ThemeContext;
//   render() {
//     return <div>
//         {this.context},-----
//     </div>;
//   }
// }