import React from 'react'

const  CreatBlogPage= () => {
  return (
    <div className='min-h-screen py-8 px-4 md:px-12'>
      <h2 className='text-2xl font-bold mb-4'>ブログ新規作成</h2>

        {/* formタグ 入力・送信フォームを作成する際に使用する要素
        <form>タグがひとつのフォームとなり、フォームの中に<input>タグ、<select>タグ、<textarea>タグなどのフォーム部品を配置してフォームを作ります*/}
      <form className='bg-slate-200 p-6 rounded shadow-lg'> 
        <div className='mb-4'>
          <label className='text-gray-700 text-sm font-bold md-2'>URL</label>
          <input 
          type='text' 
          className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
          />
        </div>
        <div className='mb-4'>
          <label className='text-gray-700 text-sm font-bold md-2'>タイトル</label>
          <input 
          type='text' 
          className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
          />
        </div>
        <div className='mb-4'>
          <label className='text-gray-700 text-sm font-bold md-2'>本文</label>
          <textarea 
          /*textareaタグ 複数行の入力が可能な入力欄を作成するためのタグ
           */
          className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
          />
        </div>

        <button type='submit' className='py-2 px-4 border rounded-md bg-orange-300'>投稿</button>

      </form>
    </div>
  )
}

export default CreatBlogPage;