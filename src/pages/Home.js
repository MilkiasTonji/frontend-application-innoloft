import React from 'react'
import Main from '../components/Main'

const Home = () => {
  return (
    <Main>
      <div className="w-1/2 flex flex-col p-10 mx-auto mt-10 items-start justify-center border border-solid border-main rounded-lg shadow-md">
        <h1> <span className="text-main font-bold text-2xl uppercase">Innoloft</span> frontend application</h1>
        <div className="flex flex-col items-start justify-center ">
          <p>Done By</p>
          <span>Milkias Tonji</span>
          <span>Full-stack developer</span>
        </div>
      </div>
    </Main>
  )
}

export default Home