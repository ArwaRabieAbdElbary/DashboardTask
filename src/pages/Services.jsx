import React from 'react'
import services from './data/Services'

const Services = () => {
  return (
    <div>
        <h1>Services Page</h1>
        {services.map(service => (
            <div key={service.id} className="border p-4 my-2 bg-white rounded shadow">
                <h2 className="text-xl font-bold">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
                <img src={service.image} alt={service.name} />

            </div>
        ))}
      
    </div>
  )
}

export default Services
