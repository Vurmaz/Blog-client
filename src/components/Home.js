
import React from "react"
import Welcome from "./Welcome"
import Intro from "./Intro"
import HomePosts from './HomePosts'
import Footer from "./Footer"

export default function Home({ cookies }) {
    
    return(
        <>
            <Welcome />
            <Intro />
            <HomePosts cookies={cookies}/>
            <Footer />
        </>
    )
}