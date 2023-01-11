import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

/* eslint-disable */
const Post = () => {
  const { id } = useParams()
  const [post, setPosts] = useState(null)
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .then((e) => console.log(e))
  }, [])

  return (<><h1>{post && post.title}</h1></>)
}

export default Post
