import React from 'react';
import Link from 'next/link';
import Router from "next/router";


const errorPage = () => {
Router.replace(/.*/, "/");

Return(  
    <div>
        <h1>Oops, Something Went Wrong</h1>
        <p>Try <Link href='/'><a>going back</a></Link>.</p>
    </div>
)};

export default errorPage;