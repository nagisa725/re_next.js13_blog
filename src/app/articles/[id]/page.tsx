import React from "react";
import Image from "next/image";
import { getDetailArticle } from "@/app/blogAPI";

const Article = async ({ params }: { params: { id: string } }) => {
  // console.log(params.id)
  const detailArticle = await getDetailArticle(params.id);
  // console.log(detailArticle);
  //

  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image
        src={`https://source.unsplash.com/collection/1346951/1000*500?sig=${detailArticle.id}`} //ここに各ページを示す${detailArticle.id}を入れることで各記事ごとにサムネイルが変わる
        alt=""
        width={1280}
        height={300}
      />
      <h1 className="text-4xl text-center md-10 mt-10">
        {detailArticle.title}
        {/* blogAPIで引っ張ってきたgetDetailArticleの記事詳細APIをdetailArticleに格納したので第一引数へ
        posts.jsonで定義したtitleを第二引数に入れる */}
      </h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>{detailArticle.constent}</p>
        {/* 上と同義 */}
      </div>
    </div>
  );
};

export default Article;
