import React from 'react'
import { Container } from '../components'
import service from '../appwrite/conf'
import { useState, useEffect } from 'react'
import { postCard } from '../components'

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
      service.getPosts([]).then((posts) => {
  if (posts) {
      setPosts(posts.documents)
  }
})
}, [])
  return (
    <div className='py-8 w-full'>
      <Container>
        <div className='flex flex-wrap'>
        {posts.map((post) => ( 
            <div key={post.$id} className='p-2 w-1/4'>
                <postCard post={post} />
            </div>
        ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts
