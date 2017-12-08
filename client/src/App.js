import React, { Component } from 'react';
import axios from 'axios';
import ChartForm from './components/ChartForm';
import ChartList from './components/ChartList';
import { Container, Image } from 'semantic-ui-react';

class App extends Component {
  state = { charts: [] }

  componentDidMount() {
    axios.get('/api/charts')
      .then( res => this.setState({ charts: res.data }) )
  }

  addChart = (name) => {
    const chart = { name }
    axios.post('/api/charts', { chart })
      .then( res => {
        const { charts } = this.state;
        this.setState({ charts: [...charts, res.data] })
      })
  }

  updateChart = (id) => {
    fetch(`/api/charts/${id}`, { method: 'PUT' })
    .then( res => res.json() )
    .then( chart => {
      let charts = this.state.todos.map( t => {
        if (t.id === id)
          return chart
        return t;
    });

    this.setState({ charts });
  })
}


  destroyChart = (id) => {
    axios.delete(`/api/charts/${id}`)
      .then( () => {
        const { charts } = this.state;
        this.setState({ charts: charts.filter( t => t.id !== id ) })
      })
  }


  render() {

    return (
    <div className="main-div">
      <Container textAlign='center'>
        <h1>Billboard App</h1>
        <Image src='client/src/assets/images/album-default.jpg' size='small' />
      <div>
        <ChartForm addChart={this.addChart} />
        <br />
        <ChartList
          charts={this.state.charts}
          update={this.updateChart}
          destroy={this.destroyChart}
        />
      </div>
    </Container>
  </div>

    );
  }
}

export default App;