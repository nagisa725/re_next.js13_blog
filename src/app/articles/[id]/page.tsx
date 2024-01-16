import React from 'react'
import Image from 'next/image'

const Article = ({params}:{params:{id: string }}) => {
    console.log(params.id)
  return (
    <div className='max-w-3xl mx-auto p-5'>Article
        <Image 
        src ='https://source.unsplash.com/collection/1346951/1000×500?sig=1' alt=''
        width={1280}
        height={300}
        />
        <h1 className='text-4xl text-center md-10 mt-10'>
            タイトル
        </h1>
        <div className='text-lg leading-relaxed text-justify'>
            <p>本文</p>
        </div>
    </div>
  )
}

export default Article