import React from 'react'

class BandEditModal extends React.Component {
	constructor(props) {

		super(props)

		this.state = {
			"name": "",
      		"year_formed": "",
      		"vocals": "",
			"drums": "",
      		"guitar": ""
		}
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	render() {
		return(
			<div>
				<h3>Edit Band</h3>
				<form onSubmit={this.handleSubmit}>
					Name:<input type="text" name="name" 
					value={this.state.name} 
					onChange={this.handleChange}/>
					Year formed:<input type="number" name="year_formed"
					value={this.state.year_formed} 
					onChange={this.handleChange}/>
					Vocals:<input type="text" name="vocals"
					value={this.state.vocals} 
					onChange={this.handleChange}/>
					Guitar:<input type="text" name="guitar"
					value={this.state.guitar} 
					onChange={this.handleChange}/>/>
					Drums:<input type="text" name="drums"
					value={this.state.drums} 
					onChange={this.handleChange}/>/>
					<button>Update Band</button>
				</form>
			</div>
		)
	}
}

export default BandEditModal