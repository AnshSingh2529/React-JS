import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'

function Githubfollowers() {
const data = useLoaderData()
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/AnshSingh2529')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])

  return (
    <div className='flex justify-center  bg-gray-500 text-black font-mono text-3xl'>
       <span>
       Github Followers : {data.followers}
        <img src={data.avatar_url} alt='Github Picture' width={300}/>
       </span>
    </div>
  )
}


export default Githubfollowers

export const githubInfo = async () => {
  const response = await fetch('https://api.github.com/users/AnshSingh2529');
  return response.json();
} 
