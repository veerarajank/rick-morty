import React from 'react'
import PropTypes from 'prop-types'
// display the values inside the sub - card
export default function CardValues ({ field, value }) {
  return (
    <>
        <span className='card-subheader'>{field}</span>
        <span className='card-subcontent'>{value}</span><br/>
    </>
  )
}

CardValues.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}
