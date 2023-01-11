/* eslint-disable */
import CustomLink from "../Custom/CustomLink"
import { useState, useEffect } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data => setPosts(data)).then(e => console.log(e)
    )
  }, [])

  
  return (
    <ul>
    {/* <Link to={`/posts/${posts[0].id}`} >{posts[0].title}</Link> */}
      {posts && posts.map((i) => (
        <li key={i.id}>
          <CustomLink to={`/posts/${i.id}`} >{i.title}</CustomLink>
        </li>
      ))}
    </ul>
  )
}

export default Posts
