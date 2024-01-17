import { notFound } from "next/navigation";
import { Article } from "./types";

//page.tsx(ルートディレクトリ)の記事一覧を表示させるためのAPI取得
export const getAllArticles = async (): Promise<Article[]> => {
  /*<Article[]>
  →複数の記事を配列で取り込むため[]をつける*/
  const res = await fetch(`http://localhost:3003/posts`, {
    cache: "no-store",
  }); //SSR='no-store' SSG='force-cache'
  console.log(res);

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const articles = await res.json();
  //resという変数は文字列もしくはオブジェクトで存在しているためJSON形式にシリアライズ(文字列化)する必要がある
  return articles;
};

//各記事ページごとに内容を反映させるためのAPI取得をISR(再生成)で行う
export const getDetailArticle = async (id: string): Promise<Article> => {
  /*<Article[]>
  →一つの記事の詳細(単数)を取り込むので配列[]はつけない*/
  const res = await fetch(`http://localhost:3003/posts/${id}`, {
    //どの記事を見るのかを指定する必要があるために↑の引数はid:stringを取得させる
    /*fetch(`http://localhost:3003/posts/${id}`,
    → posts.jsonで記述した記事の詳細を開くためには同じくposts.jsonで記述したid(ウェブのURL文末になる)をfetch関数で書かないといけない*/
    next: { revalidate: 60 }, //ISR 60=1分　3600=1時間　新しい内容に編集して更新されたとき最初のサーバーからの取得はSSRだが、その後の取得がSSGで読み込みが早い
  });

  if (res.status === 404) {
    notFound();
  }
  /*もしresで指示したAPI操作のリクエストが通らない、もしくはサーバーに問題があった場合など指定したページが存在しないときに表示されるステータスコード
  next.js側で用意されているnotFound()関数をimportすることで、404ページを用意した際にページ遷移されるようになる*/

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));
  //ページ表示までの遅延指定、複数記事をルートディレクトリに表示させる際にしたものと同じ 今回は1秒

  const article = await res.json();
  //resという変数は文字列もしくはオブジェクトで存在しているためJSON形式にシリアライズ(文字列化)する必要がある
  return article;
  //  →一つの記事の詳細(単数)を取り込むので単数形に書き換えた
};
