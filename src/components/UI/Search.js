import React, { Component } from 'react';

export class Search extends Component {
  state = {
    text: '',
  };

  change = (q) => {
    this.setState({ text: q });
    this.props.getQuery(q);
  };

  render() {
    return (
      <section className="search">
        <form action="">
          <input
            type="text"
            className="form-control"
            placeholder="Search Characters"
            autoFocus
            value={this.state.text}
            onChange={(e) => this.change(e.target.value)}
          />
        </form>
      </section>
    );
  }
}

export default Search;
