import React from 'react'

function BandList(props){
	console.log(props);
	return(
		<div>
		{props.bands.map(band => 
			<li>
			Name: {band.name} 
			<br />
			Year Formed: {band.year_formed} 
			<br />
			Vocals: {band.vocals}
			<br />
			Guitar: {band.guitar}
			<br />
			Drums: {band.drums}
			</li>
		)}

		</div>
	)
}

export default BandList