import React from 'react';
import '../assets/App.css';
import Container from './Container'
import Bg1 from '../assets/images/bg1.jpg'
import Bg2 from '../assets/images/bg2.jpg'
import Bg3 from '../assets/images/bg3.jpg'
import Bg4 from '../assets/images/bg4.jpg'
import Bg5 from '../assets/images/bg5.jpg'
import Bg6 from '../assets/images/bg6.jpg'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      bgArray: [Bg1, Bg2, Bg3, Bg4, Bg5, Bg6],
      styles: this.setBg(Bg1),
      index: 1
    }
    this.updateBg = this.updateBg.bind(this)
  }

  setBg(bg) {
    return {
      background: `linear-gradient(rgba(255, 255, 255, .3), rgba(255, 255, 255, .3)), url(${bg}) center / 700px no-repeat #fff`,
    } 
  }

  updateBg() {
    this.setState(prevState => {
      return {
        styles: this.setBg(this.state.bgArray[this.state.index % 6]),
        index: prevState.index + 1
      }
    })
  }
  
  render() { 
    return (
      <div className="App" style={this.state.styles}>
        < Container onUpdate={this.updateBg}/>
      </div>
    );
  }
}

export default App;
