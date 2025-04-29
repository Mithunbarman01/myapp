"use client"
import React from 'react'
import { useState } from 'react'

const page = () => {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setgenerated] = useState(false)
  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        seturl("")
        setshorturl("")
        console.log(result)
        alert(result.message)

      })
      .catch((error) => console.error(error));

  }



  return (
    <div className='mx-auto max-w-lg  my-16 p-8 rounded-lg flex flex-col gap-5 bg-purple-50'>

      <h1 className=' text-2xl font-bold '>Enter your Short URLs</h1>

      <div className='flex flex-col gap-5'>


        <input type="text"
          value={url}
          className=' h-10 rounded-md border border-purple-200 px-6 py-6'
          placeholder='Enter your URL'
          onChange={e => { seturl(e.target.value) }} />

        <input type="text"
          value={shorturl}
          className=' h-10 rounded-md border border-purple-200 px-5 py-6'
          placeholder='Enter your Short prefer URL'
          onChange={e => { setshorturl(e.target.value) }} />

        <button onClick={generate} className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 my-3 font-bold text-white'>Generate</button>
      </div>

      {generated && <> <span className='font-bold text-lg'>Your Link </span><code><Link target="_blank" href={generated}>{generated}</Link> 
      </code></>}

    </div>
  )
}

export default page
