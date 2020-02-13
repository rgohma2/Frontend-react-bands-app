import React from 'react'
import BandNewForm from './BandNewForm'
import BandList from './BandList'
import BandEditModal from './BandEditModal'
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

	deleteBand = async (id) => {
		try{
			const response = await fetch(process.env.REACT_APP_API_URL + '/api/v1/bands/' + id,
			{
				method: 'DELETE'
			})

			const deleteJson = await response.json()
			console.log(id);

			if (deleteJson.status === 200) {
				this.setState({
					bands: this.state.bands.filter(band => band.id !== id)
				})
			}

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
				deleteBand={this.deleteBand}
				/>
				<BandNewForm 
				addBand={this.addBand}
				/>
				<BandEditModal />
			</div>
		)
	}
}

export default BandContainer