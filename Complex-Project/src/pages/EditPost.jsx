import React,{useEffect,useState} from 'react'
import { Container,PostForm } from '../components'
import service from '../appwrite/conf'
import { useParams,useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function EditPost() {
    // const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()
    const post = useSelector(state => {
      return state.post.posts.find(post => post.$id === slug)
  })
    useEffect(() => {
    //     if(slug){
    //         service.getPost(slug).then((post) => {
    //         if(post){
    //             setPosts(post)
    //         }
    //     })
    // }
    //     else{
    //         navigate('/')
    //     }
    // }, [slug, navigate])
    if(!slug || !post) {
      navigate('/')
    }
}, [slug])


  return post ? (
    <div className='py-8'>
      <Container>
            <PostForm post={post} />
      </Container>
    </div>
  ) : null
}

export default EditPost
