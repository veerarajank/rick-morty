import CardValues from './CardValues'
import React from 'react'
import PropTypes from 'prop-types'
// display the first episode and display all episodes when click more
export default function CardEpisode ({ title, data, toggle }) {
  return (
        <div className='card-specification'>
            <p className='card-specification-title'>{title}</p>
            <p>
                <CardValues field="First Episode Name:" value={data.name} />
                <CardValues field="First Air Date:" value={data.air_date} />
            </p>
            <div className="more" onClick={toggle}>
                ...
            </div>
        </div>
  )
}

CardEpisode.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired
}
