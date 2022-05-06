import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import CardEpisode from './CardEpisode'
import CardLocation from './CardLocation'
import CardCharacter from './CardCharacter'
import { fetchResults } from './Utils'
import CardPopup from './CardPopup'
// combine all card child component into this parent component
export default function Cards ({ url }) {
  const [data, setData] = useState({ character: null, origin: null, location: null, episode: null })
  const [popup, setPopup] = useState(false)

  useEffect(() => {
    fetchResults(url)
      .then((characterResp) => {
        Promise.all([fetchResults(characterResp.origin.url), fetchResults(characterResp.location.url), fetchResults(characterResp.episode[0])])
          .then(values => setData({ character: characterResp, origin: values[0], location: values[1], episode: values[2] }))
      })
      .catch(err => console.log(err))
  }, [url])

  // toggle the popup
  const toggle = () => setPopup(prevState => !prevState)

  return (
    <div className='card'>
    {data?.character ? <CardCharacter data = {data.character} /> : <div></div>}
    {data?.origin ? <CardLocation title = {'Origin'} data = {data.origin} alternativeName = {data.character.origin.name} /> : <div></div>}
    {data?.location ? <CardLocation title = {'Location'} data = {data.location} alternativeName = {data.character.location.name} /> : <div></div>}
    {data?.episode ? <CardEpisode title = {'Episode'} data = {data.episode} toggle={toggle} /> : <div></div>}
    {popup && <CardPopup episode={data.character.episode} toggle={toggle} />}
    </div>
  )
}

Cards.propTypes = {
  url: PropTypes.string.isRequired
}
