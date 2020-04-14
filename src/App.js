import React from 'react';
import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: 'Nelson Muntz',
      image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185',
      quote: 'Shoplifting is a victimless crime, like punching someone in the dark.',
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    // Send the request
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          quote: data[0].quote,
          character: data[0].character,
          image: data[0].image,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <QuoteCard quote={this.state.quote} image={this.state.image} character={this.state.character} />
        <button type="button" onClick={this.getQuote}>Get another quote!</button>
      </div>
    );
  }
}


export default App;
