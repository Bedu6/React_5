import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu';
import Comentarios from './Comentarios';
import Fotos from './Fotos';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Menu />
            <div className='container'>
              <Route exact path='/' component={Comentarios} />
              <Route exact path='/fotos' component={Fotos} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
