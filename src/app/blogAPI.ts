import {Article} from "./types"

export const getAllArticles = async () : Promise<Article[]> => {
    const res = await fetch(`http://localhost:3003/posts`,{
        cache:'no-store'});//SSR='no-store' SSG='force-cache'
        
        if(!res.ok){
            throw new Error("エラーが発生しました");
        }

        const articles  = await res.json();
        //resという変数は文字列もしくはオブジェクトで存在しているためJSON形式にシリアライズ(文字列化)する必要がある
        return articles;
};