import { useEffect, useState } from 'react';
import fetchJson from "../utils/fetchJson";

const Posts = () => {
  const [data, setData] = useState([])
  const [, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchJson('blog');
        setData(result);

      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  const posts = data.map((post, index) => {
    return (
      <div key={index} className="post-card">
        <div className="post-card-title">{post.title}</div>
        <p className="post-summary">{post.summary}</p>
      </div>
    )
  })
  return (
    <div className="posts-container">
      <div className="posts-title">Blog</div>
      {posts}
    </div>
  )
}

export default Posts;