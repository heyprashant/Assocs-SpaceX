import React from 'react';
import Layout from '../components/Layout/Layout';

function HomePage({data}) {
  
    return (<div>
      <Layout data={data} />
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-size: 18px;
          font-weight: 350;
          line-height: 1.6;
          color: #000000;
          font-family: sans-serif;
        }
        h1 {
          font-weight: 600;
        }
        p {
          margin-bottom: 10px;
        }
      `}</style>

      </div>);
  }
  
  export default HomePage;


  export async function getServerSideProps() {
    // Fetch data from external API
    // const res = await fetch(`https://api.spaceXdata.com/v3/launches?limit=100`)
    // const data = await res.json()
  
    // Pass data to the page via props
    return { props: {  } }
  }