import React from 'react'
import CardValues from './CardValues'
import PropTypes from 'prop-types'
// display the origin or location infomation of the character
export default function CardLocation ({ title, data, alternativeName }) {
  return (
        <div className='card-specification'>
            <p className='card-specification-title'>{title}</p>
            <p>
                <CardValues field="Name:" value={data.name ? data.name : alternativeName} />
                <CardValues field="Type:" value={data.type} />
                <CardValues field="Dimension:" value={data.dimension} />
                <CardValues field="Residents:" value={data?.residents?.length} />
            </p>
        </div>
  )
}

CardLocation.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  alternativeName: PropTypes.string.isRequired
}
