import React from 'react'
import BandNewForm from './BandNewForm'
import BandList from './BandList'
class BandContainer extends React.Component {
	constructor() {

		super()

		this.state = {
			bands:[]
		}
	}

	componentDidMount() {
		this.getBands()
	}

	getBands = async () => {
		try{
			const response = await fetch(process.env.REACT_APP_API_URL + '/api/v1/bands/')
			console.log(response);
			const bands = await response.json()
			console.log(bands);
			this.setState({
				bands: bands.data
			})
			
		}catch(err){
			console.log(err)
		}
	}

	render() {
		return(
			<div>
				BandContainer
				<BandNewForm />
				<BandList 
				bands={this.state.bands}
				/>
			</div>
		)
	}
}

export default BandContainer