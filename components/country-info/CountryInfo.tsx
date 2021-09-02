import React from 'react'
import Layout from '../layout'

const Details = ({data}) => {
  let details = data.length ? 
    data.map((cur, idx) => 
      <p key={cur.code + idx} className="item">
        {cur.name}{" "}
      </p>) : <p className="item">Not Available!</p>
      return details;
}

export default function CountryInfo({ info }) {
  // console.log(info)
  
  return (
    <Layout>
      <header><h1>{info.name}</h1></header>
      <p>Capital: {info.capital}</p>
      <p>Native Name: {info.native}</p>
      <p>Phone Code: {info.phone}</p>
      <div id="main">
        <section>
          <div className="block">
            <h3>Languages</h3>
            <Details data={info.languages}/>
          </div>
          <div className="block">
            <h3>Currency</h3>
            <p className="item">{info.currency ? info.currency : "Not Available!"}</p>
          </div>
          <div className="block">
            <h3>States</h3>
            <Details data={info.states}/>
          </div>
          <div className="block">
            <h3>Continent</h3>
            <p className="item">{info.continent.name}</p>
          </div>
          <div className="block">
            <h3>Neigbouring Countries</h3>
            <Details data={info.continent.countries}/>
          </div>
        </section>
      </div>
    </Layout>
  );
}

