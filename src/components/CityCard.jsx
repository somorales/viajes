import React from 'react'
import { useParams } from 'react-router'

function CityCard(props) {

  const {eachCity, index} = props

  return (
    <div className='city-card' key={index}  style={{backgroundImage:`url (${eachCity.image})`}}>
      <img src={eachCity.image} alt={eachCity.city} />
      <h2>{eachCity.city}</h2>
    </div>
  )
}

export default CityCard
