import React, { Component } from 'react';
import './App.css';
import Table from './components/table';


class App extends Component {
  constructor(){
    super();
    this.data = null;
    this.toggleCheck = this.toggleCheck.bind(this);
    this.time = this.time.bind(this);
    this.state = {
      data: [],
      isChecked: false
    }
  }

  componentDidMount() {
    fetch('http://localhost:30001/')
    .then(res => res.json())
    .then(data => this.setState({data}));
  }

  time(timeStamp){
    let date = new Date();
    date.setTime(timeStamp);
    return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
};

toggleCheck(){
  new Promise(res => {
    this.setState({isChecked: !this.state.isChecked});
    res();
  })
  .then(() => this.openOnly())
}

openOnly(){
  if(this.state.isChecked){
    let newData = this.state.data.filter(({tradingHours}) => tradingHours[0].to > 1529235200000);

    if(!this.data){
      this.data = [...this.state.data];
    }

    this.setState({data: newData});
  }
  else{
    this.setState({data: this.data});
  }
}

  render() {
    return (
      <div className="App">
        <Table 
          data={this.state.data} 
          toggleCheck={this.toggleCheck} 
          isChecked={this.state.isChecked} 
          time={this.time}
        />
      </div>
    );
  }
}

export default App;
