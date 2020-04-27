import React from 'react'
// 中间的组件再也不必指明往下传递 theme 了。
// const ThemeContext = React.createContext();
import {ThemeContext,LiuContext} from './data'


export default function Toolbar() {
  return (
    <div>
      {/* <ThemedButton /> */}
      <Content />
    </div>
  );
}

class ThemedButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “dark”。
  static contextType = ThemeContext; // 写法1 
  render() {
    return <div>
        {this.context},-----
    </div>;
  }
}
// ThemedButton.contextType = ThemeContext;  写法1与此写法等价

// 一个组件可能会消费多个 context
function Content() {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <LiuContext.Consumer>
            {user => (
              <div>
                  {user} xx
                  <br />
                  {theme} ..
              </div>
            )}
          </LiuContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
}
