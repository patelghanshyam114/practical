import React, { Component } from 'react';
import './App.css';
import withQuery from 'with-query';
import Card from './Card.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search_string: "",
      cards: []
    }
  }

  setSearch = (e) => {
    this.setState({search_string: e.target.value});
  }

  search_repository() {

    var thes = this;
    var url = 'https://api.github.com/search/repositories';

    fetch(withQuery(url, { q: this.state.search_string }))
    .then((resp) => resp.json())
    .then(function(data) {
      thes.setState({cards: data.items});
    })
    .catch(function(error) {
      console.log(error);
    });

  }

  renderActiveButton() {
    if (this.state.search_string === "") {
      return(
        <button disabled onClick={this.search_repository.bind(this)}>Search</button>
      );
    } else {
      return(
        <button  onClick={this.search_repository.bind(this)}>Search</button>
      );
    }
  }

  renderResults() {
    if (this.state.cards.length > 0) {
      return(
        <div>
          <p>Results</p>
          {
            this.state.cards.map(
              info => <Card key={info.id} {...info} />
            )
          }
        </div>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <div className="width-container">
          <div className="top">
            <p>Practical Test</p>
            <div>
              <input placeholder="search"  type="text" value={this.state.search_string} onChange={this.setSearch} />
              {this.renderActiveButton()}
            </div>
          </div>
          {this.renderResults()}
        </div>
      </div>
    );
  }
}

export default App;
