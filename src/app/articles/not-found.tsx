import React from "react";

const notFound = () => {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="p-8 rounded-lg shadow-md text-center bg-white">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">404</h1>
        <p className="text-gray-600">ページが見つかりませんでした。</p>
      </div>
    </div>
    //articlesファイルの配下にのみ作成したnotfoundページなのでURLの/articles/---でエラーが起きた時のみこのエラーページは表示される
  );
};

export default notFound;