import React from "react";
import { Article } from "../types";
import Image from "next/image";
import Link from "next/link";

type ArticleListProps = {
  article: Article;
}; //types.tsで指定した型を定義

const ArticleCard = ({ article }: ArticleListProps) => {
  //各ブログ詳細記事を引っ張るため{article}を指定しtypeを定義したArticleListPropsを宣言*/
  return (
    <article className="shadow my-4 flex-col" key={article.id}>
      <Link href={`articles/${article.id}`} className="hover:opacity-75 ">
        <Image
          src={`https://source.unsplash.com/collection/1346951/1000*500?sig=${article.id}`} //ここに各ページを示す${article.id}を入れることで各記事ごとにサムネイルが変わる
          alt=""
          width={1280}
          height={300}
        />
      </Link>
      <div className="bg-white flex flex-col justify-start p-6">
        <Link
          href={`articles/${article.id}`}
          className="text-blue-700 pb-4 font-bold "
        >
          Technology
        </Link>
        <Link
          href={`articles/${article.id}`}
          className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
        >
          {article.title}
        </Link>
        <p className="text-sm pd-3 text-slate-900">
          published on {article.createdAt}
        </p>
        <Link href={`articles/${article.id}`} className="text-slate-900 pb-6">
          {article.content.length > 70
            ? article.content.substring(0, 70) + "..."
            : article.content}
          {/* 文字数制限を設けるため長さを表す length を指定し三項演算子を使う
        ? ○○ : ×× / ○○ → trueのとき...を表す 今回だと article.constent.substring(0,70) = article.constent.(本文部分が)70文字以上のときsubstring(0,70)(0~70文字のみ表示する)+ ...を最後に追加という意味
        ? ○○ : ×× / ×× → falseのとき...を表す 今回だと : article.constent = そのまま表示するという意味
         */}
        </Link>
        <Link
          href={`articles/${article.id}`}
          className="text-pink-800 hover:text-black"
        >
          続きを読む
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
