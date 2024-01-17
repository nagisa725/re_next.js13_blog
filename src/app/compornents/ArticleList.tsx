import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Article } from "../types";
import ArticleCard from "./ArticleCard";

type ArticleListProps = {
  articles: Article[]; //複数の記事があるので配列[]
};
const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <div>
      {articles.map((article) => (
        <ArticleCard article={article} key={article.id} />
        /* <article>タグの記述が長くなったので新しくコンポーネントを作りArticleCardをimportでタブ保管
        各ブログ詳細記事を引っ張るためarticle={article}とkeyを指定*/
      ))}
    </div>
  );
};

export default ArticleList;
