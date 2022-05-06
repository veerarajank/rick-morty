import React, { useState } from 'react'
import Cards from './components/Cards'
import './App.css'
import image from './images/Rick&MortyIcon.png'
export default function App () {
  const [records, setRecords] = useState([1, 2, 3, 4])

  const nextPage = () => {
    // set next page until max character is reached
    // max length is temporary assigned - it need to be implment with api total pages and total characters
    if (records[records.length - 1] < 824) {
      setRecords(records.map((value) => value + 4))
    } else {
      setRecords([825, 826])
    }
  }

  // set next page until starting charater is reached
  const prevPage = () => {
    if (records[0] === 825) {
      setRecords([821, 822, 823, 824])
    } else if (records[0] > 1) {
      setRecords(records.map((value) => value - 4))
    }
  }

  return (
    <>
      <div className='header'>
        <img src={image} alt="RickAndMorty" width="40px" height="40px" />
        <span className='header-title'> Rick and Morty Character Profiles </span>
      </div>
      <div className='main-container'>
        <div className='Prev' onClick={prevPage}>
          &lt;
        </div>
        <div className='cards'>
          {records.map((character, index) => (
            <div key={index}>
              <Cards url = {process.env.REACT_APP_URL + character} />
            </div>
          ))}
        </div>
        <div className='Next' onClick={nextPage}>
          &gt;
        </div>
      </div>
    </>
  )
}
