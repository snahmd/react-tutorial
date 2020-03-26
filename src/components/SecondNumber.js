import React, {PureComponent} from 'react';

class SecondNumber extends PureComponent {
  /* shouldComponentUpdate(nextProps, nextState) {
    return nextProps.secondNumber !==this.props.secondNumber;
  }*/
  
	render() {
		console.log('SecondNumber rendering..');
		return (
			<div>
				{ this.props.secondNumber }
			</div>
		);
	}
}

export default SecondNumber;