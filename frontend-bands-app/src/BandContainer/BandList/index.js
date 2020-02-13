import React from 'react'

function BandList(props){
	console.log(props);
	return(
		<div>
		{props.bands.map(band => 
			<li key={band.id}>
			Name: {band.name} 
			<br />
			Year Formed: {band.year_formed} 
			<br />
			Vocals: {band.vocals}
			<br />
			Guitar: {band.guitar}
			<br />
			Drums: {band.drums}
			<button onClick={() => {props.deleteBand(band.id)}}>Delete</button>
			</li>
		)}
		</div>
	)
}

export default BandList