import React, {Component} from 'react';

interface IState {
  readonly hasError: boolean;
}

export class ErrorBoundary extends Component {

  readonly state: IState = {
    hasError: false
  };

  componentDidCatch(error: Error | null, info: object) {
    this.setState({
      hasError: true
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>Упс....</h2>
      );
    }

    return this.props.children;
  }

}
