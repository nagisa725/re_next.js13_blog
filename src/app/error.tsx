'use client'

import React from 'react'

const  Error = ({reset}:{reset:()=>void}) => {
  // reset もう一度試す を押した時ページがリフレッシュする typescript
  return (
    <div className='bg-red-100 border-l-4 border-red-500 text-red-700 mt-4 rounded shadow-md mx-auto p-2'>
      <h3 className='font-bold md-2'>
        エラーが発生しました
      </h3>
      <button onClick={() => reset()}
      // ボタンを押した時にページがリフレッシュする
      className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition duration-200'>
        もう一度試す
      </button>
    </div>
  )
};

export default  Error;