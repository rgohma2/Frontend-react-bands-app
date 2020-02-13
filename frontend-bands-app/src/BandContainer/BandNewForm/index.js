import React from 'react'

class BandNewForm extends React.Component {
	constructor() {

		super()

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
				<h3>Create New Band</h3>
				<form>
					Name:<input type="text" name="name" 
					alue={this.state.name} 
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
					<button>Add New Band</button>
				</form>
			</div>
		)
	}
}

export default BandNewForm