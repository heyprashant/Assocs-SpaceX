import React from 'react';
import Layout from '../components/Layout/Layout';

function HomePage({data}) {
  
    return (<div>
      <Layout />
      </div>);
  }
  
  export default HomePage;


  export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://api.spaceXdata.com/v3/launches?limit=100`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }