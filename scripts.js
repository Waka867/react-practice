'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}







class HelloMessage extends React.Component {
	render() {
		return (
			<div>
				Hello {this.props.name}	
			</div>
		)
	}
}






const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);



ReactDOM.render(
	<HelloMessage name="Taylor" />,
	document.getElementById('hello-example')
);
