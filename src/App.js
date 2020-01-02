import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      boo1: false,
      ts: [],
  

    }
  }
  it = (event) => {
    this.setState({
      item: event.target.value,
    })
  }

  task = () => {
    this.setState({
      ts: [...this.state.ts, { text: this.state.item, id: Math.random(), vb: this.state.boo1 }],

    });
  }
  undo = (id) => {
    this.setState({

      ts: this.state.ts.map((e) => (e.id === id) ? { text: e.text, id: e.id, vb: !this.state.boo1 } : e),


    })
    console.log(this.state.ts)
  }
  del = (id) => {
    this.setState({
      ts: this.state.ts.filter((e) => (e.id) !== id)
    })
  }
  render() {
    return (<div className='container'>
      <h1>To-Do App!</h1>
      <h5>Add New To-Do </h5>
      <input className='in' type='text' placeholder='Enter New Task' onChange={this.it} />
      <button onClick={this.state.item ? this.task : console.log()} >Add</button>
      <div className='ajout'>{this.state.ts.map((e, i) => <div key={i} className='ad'>
        <button onClick={() => this.undo(e.id)}>{(e.vb) ? 'undo' : 'Complete'}</button>
        <button onClick={() => this.del(e.id)}>Delete</button>
        <span style={{ textDecoration: ((e.vb) ? 'line-through' : 'none') }}>{e.text}</span>
      </div>)}</div>

    </div>);
  }
}

export default App;

