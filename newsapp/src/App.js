import React, { Component, useRef } from 'react';
import './components/NavBar';
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
export default class App extends Component {
  pageSize = 9;
  apiKey = process.env.API_NEWS;
  state = {
    progress : 0
  }
  setProgress(progress){
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        {/* <LoadingBar
        color='#f11946'
        progress={10}
        // onLoaderFinished={() => setProgress(0)}
      /> */}
        <Routes>
          <Route path="/" element={< News  key='general' pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="general"/>}></Route>
          <Route path="/Business" element={ <News key='business'  pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="business"/>}></Route>
          <Route path="/Entertainment" element={<News key='entertainment'  pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="entertainment"/>}></Route>
          <Route path="/General" element={ <News key='general'  pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="general"/>}></Route>
          <Route path="/Health" element={ <News key='health'  pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="health"/>}></Route>
          <Route path="/Science" element={ <News key='science'  pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="science"/>}></Route>
          <Route path="/Sports" element={ <News key='sports'  pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="sports"/>}></Route>
          <Route path="/Technology" element={ <News  key='technology' pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="technology"/>}></Route>

        </Routes>
        </Router>
      </div>
    )
  }
}

// export default App;