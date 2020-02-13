import React from 'react'
import BandNewForm from './BandNewForm'
import BandList from './BandList'
import BandEditModal from './BandEditModal'
class BandContainer extends React.Component {
	constructor() {

		super()

		this.state = {
			bands:[],
			idOfBandToEdit: -1
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

	editBand = (id) => {
		this.setState({
			idOfBandToEdit: id
		})
	}

	updateBand = async (newBandInfo) => {
		try{
			const response = await fetch(process.env.REACT_APP_API_URL + '/api/v1/dogs/' + this.state.idOfBandToEdit,
			{
				method: 'PUT',
				body: JSON.stringify(newBandInfo),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			const updatedBandJson = response.json()

			if (response.status === 200) {
				const bands = this.state.bands
				const index = bands.findIndex(band => band.id === this.state.idOfBandToEdit)
				bands[index] = updatedBandJson.data
				this.setState({
					bands: bands,
					idOfBandToEdit: -1
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
				editBand={this.editBand}
				/>
				<BandNewForm 
				addBand={this.addBand}
				/>
				{
				this.state.idOfBandToEdit !== -1
				?	
				<BandEditModal bandToEdit={
					this.state.bands.find(band => band.id === this.state.idOfBandToEdit)
				}
				updateBand={this.updateBand}/>
				:
				null
				}
			</div>
		)
	}
}

export default BandContainer