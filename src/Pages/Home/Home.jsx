import React from 'react'
import MainHeader from '../../components/Header/MainHeader'
import Search from '../../components/Search/Search'

function Home() {
  return (
    <>
      <MainHeader/ >
        <div>
            <h1 className='text-center text-6xl font-medium '>Book Local Beauty And Wellness Services.</h1>
        </div>
    <Search />

    </>
  )
}

export default Home