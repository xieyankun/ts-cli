import * as React from 'react';
import {
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import { ClickParam } from '../node_modules/antd/lib/menu';

import { Menu } from 'antd';

import SoundReading from './pages/SoundReading';
import Broadcasting from './pages/Broadcasting';

import './styles/main.less';

class App extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      current: 'soundReading',
    };
  }
  public render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Alpha APP 蜻蜓FM 后台配置</h1>
        </div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="soundReading">
            <Link to="/">有声阅读</Link>
          </Menu.Item>
          <Menu.Item key="broadcasting">
            {/* <Link to="/broadcasting">广播电台</Link> */}
          </Menu.Item>
        </Menu>

        <Switch>
          <Route exact={true} path="/" component={SoundReading} />
          <Route path="/broadcasting" component={Broadcasting} />
        </Switch>
      </div>
    );
  }

  private handleClick = (e: ClickParam) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
}

export default App;
