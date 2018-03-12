import React, {PropTypes} from 'react';

export default class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "show": false
    }
  }

 



  openLink() {
    window.open(this.props.html_url,'_blank');
  }

  render() {
    return (
      <table border="1" class="table" >
	<tr>
		<td>Name</td><td>{this.props.full_name}</td>
		<td>Score</td><td>{this.props.score}</td>
		<td>Forks</td><td>{this.props.forks}</td>
	</tr>
	<tr>
		<td>URL</td><td colspan="3"><a href="{this.openLink.bind(this)}">{this.props.html_url}</a></td>
		<td>Open Issues</td><td>{this.props.open_issues}</td>
				
	</tr>
	<tr>
		<td>Description</td><td colspan="5">{this.props.description}</td>
		
	</tr>
     </table>
    );
  }
}
