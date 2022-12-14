import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Posts from '../components/Posts'
import {sanityClient} from '../sanity'
import {Post} from '../typing'

interface Props {
  posts: [Post];
}

export default function Home ({posts}: Props){ 

  return (
    <div className="">
      <Head>
        <title>Medium Pakistan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <Posts posts={posts} />
      
    </div>
  )
}

export const getServerSideProps = async()=>{
  const query =  `*[_type == "post"]{
    _id,
    title,
    author->{
        name,
        image
    },
    'comments': *[
      _type == 'comment' &&
      post._ref == ^._id &&
      approved == true 
    ],
    description,
    mainImage,
    slug
}`;
  const posts = await sanityClient.fetch(query);
  return {
      props:{
          posts,
      }
  } 
}

