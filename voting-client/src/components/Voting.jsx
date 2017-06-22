import React, {Component} from 'react';

export default class Voting extends Component {
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
      <div>
        {this.props.winner ? <Winner ref="winner" winner={this.props.winner} /> : <Vote {...this.props} />}
      </div>
    );
  }
}
