import Head from 'next/head'
import ArticleList from '../components/ArticleList'


export default function Home({articles}) {
   
  return (
    <div>
       <Head>
         <title> PracticeOne</title>
         <meta name='keywords' content='web, prograing, nextjs, project' />
       </Head>

       <ArticleList articles={articles}/>

       
     
    </div>
  )
}
export const getStaticProps = async () => { // fuction to fetch ----v dont forget to pas articles as props down on the
  const res = await fetch ('https://jsonplaceholder.typicode.com/posts?_limit=6^)')
  const articles = await res.json()

  return {
    props:{
      articles // pas the fetched articles as prop ----^ export default function Home({articles})
    }


  }
}