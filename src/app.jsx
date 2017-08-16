import React, { Component } from 'react';
import TopSpot from './topspot';
class App extends Component {
constructor(props){
  super(props);
  this.state={
    topspots: []

  }
}
componentWillMount(){
  axios
    .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
    .then(response => response.data)
    .then(topspots => this.setState({ topspots }));
}




  render() {
    return (
<div className='App'>

  <div className="container">
    <div className="jumbotron">
      <h1>30 Top Spots In San Diego</h1>
    <p>This Will Display 30 cool spots in san Diego using <strong>React.js</strong></p>
    </div>

 {
    this.state.topspots.map(topspot => (
        <TopSpot
            key={topspot.id}
            name={topspot.name}
            description={topspot.description}
            location={topspot.location} />
    ))





}








{/*FIX ME  */}



  </div>
</div>
    );
  }
}

export default App;
