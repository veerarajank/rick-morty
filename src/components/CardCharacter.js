import React from 'react'
import PropTypes from 'prop-types'
// display character basic information
export default function CardCharacter ({ data }) {
  return (
        <>
            <div>
                <img className='card-image' src={data.image} width='200px' height='200px' alt={data.name}></img>
            </div>
            <div className='card-content'>
                <p>
                    <span className='card-title'>{data.name}</span><br/>
                    <span className='card-dot' style={{ backgroundColor: characterStatus(data.status) }} />
                    <span className='card-species'>
                        {data.status} - {data.species} - {data.gender}  - {data.type}
                    </span>
                 </p>
            </div>
        </>
  )
}

// decide the background color of dot based on character status
// Alive - green, Dead - red , unknown - grey
const characterStatus = (status) => {
  if (status === 'Alive') {
    return 'green'
  } else if (status === 'Dead') {
    return 'red'
  } else {
    return 'grey'
  }
}

CardCharacter.propTypes = {
  data: PropTypes.object.isRequired
}
