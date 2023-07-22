import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Property = () => {
    const {id}= useParams();
    console.log(id);

    useEffect(() => {
        document.title = 'Property'
        console.log(document.title, id)
    }, [id])

  return (
    <main className='h-screen '>
        <div className="container mx-auto">
            <h1 className='mt-24 text-[3rem]'>Property {id}</h1>
        </div>
    </main>
  )
}

export default Property