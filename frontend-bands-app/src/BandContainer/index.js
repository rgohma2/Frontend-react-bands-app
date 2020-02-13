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

	addBand = async (band) => {
		try{
			const response = await fetch(process.env.REACT_APP_API_URL + '/api/v1/bands/', {
				method: 'POST',
				body: JSON.stringify(band),
				headers: {
					'Content-Type': 'application/json'
				}
			}) 

			const newBand = await response.json()
			this.setState({
				bands: [...this.state.bands, newBand.data]
			})



		}catch(err){
			console.log(err)
		}
	}

	render() {
		return(
			<div>
				BandContainer
				<BandList 
				bands={this.state.bands}
				/>
				<BandNewForm 
				addBand={this.addBand}
				/>
			</div>
		)
	}
}

export default BandContainer