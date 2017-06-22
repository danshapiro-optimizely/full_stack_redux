import React from 'react';

export default class Vote extends Component {
  getPair() {
    return this.props.pair || [];
  }

  isDisabled() {
    return !!this.props.hasVoted;
  }

  hasVotedFor(entry) {
    return this.props.hasVoted === entry;
  }

  render() {
    return (
      <div className="voting">
        {this.getPair().map(entry => {
          <button
            key={}
            disabled={this.isDisabled()}
            onClick={()=> this.props.vote(entry)}>
            <h1>{entry}</h1>
          </button>
        })}
      </div>
    )
  }

}
