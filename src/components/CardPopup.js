import React, { useEffect, useState } from 'react'
import { fetchResults } from './Utils'
import PropTypes from 'prop-types'
// display all episode information of character in popup box
export default function CardPopup ({ episode, toggle }) {
  const [episodes, setEpisodes] = useState(null)

  useEffect(() => {
    const request = episode.map(url => fetchResults(url))
    Promise.all(request)
      .then(resp => setEpisodes(resp))
  }, [episode])

  return (
    episodes
      ? (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={toggle}>x</span>
                <table className="popup-table">
                    <thead>
                        <tr>
                            <th>
                                Episode Name
                            </th>
                            <th>
                                Air Date
                            </th>
                            <th>
                                Version
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {episodes.map((value, index) => (
                            <tr key={index}>
                                <td>
                                    {value.name}
                                </td>
                                <td>
                                    {value.air_date}
                                </td>
                                <td>
                                    {value.episode}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        )
      : (<div></div>)
  )
}

CardPopup.propTypes = {
  episode: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired
}
