import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ArticleList = () => {
  return (
    <article>
        <Link href='#'>
            <Image 
            src ='https://source.unsplash.com/collection/1346951/1000×500?sig=1' alt=''
            width={1280}
            height={300}
            />
        </Link>
        <div className='bg-white flex flex-col justify-start p-6'>
          <Link href='#' className='text-blue-700 pb-4 font-bold '>
            Technology
          </Link>
          <Link href='#' className='text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4'>
            テストテスト
          </Link>
          <p className='text-sm pd-3 text-slate-900'>
            Publicshed on 2024/1/15
          </p>
          <Link href="#" className='text-slate-900 pb-6'>
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          </Link>
          <Link href="#" className='text-pink-800 hover:text-black'>
          続きを読む
          </Link>
        </div>      
    </article>
  )
}

export default ArticleList