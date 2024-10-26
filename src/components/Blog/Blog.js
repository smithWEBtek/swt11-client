import { useEffect, useState } from 'react';
import fetchJson from "../utils/fetchJson";
import Canvas from '../Canvas/Canvas';
import StaticHtmlRenderer from '../utils/StaticHtmlRenderer'

const Blog = () => {
  const [postLinks, setPostLinks] = useState([])
  const [blogContent, setBlogContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchJson('post-summaries');
        setPostLinks(result);
        console.log('result: ', result);
      } catch (err) {
        console.log('Error fetching blog post summaries: ', err.message)
      }
    };
    fetchData();
  }, []);

  function OnClickPost(file, event) {
    event.preventDefault();
    try {
      const html = StaticHtmlRenderer(`${file}`);
      setBlogContent(html.blogContent);
    } catch (err) {
      console.log('Error rendering HTML: ', err.message);
    }
  };

  const postLinkCards = postLinks.map((post) => {
    return (
      <div key={post.id} className="postlink-card">
        <button
          onClick={(event) => OnClickPost(post.filename, event)}>
          <div className="postlink-card-title">{post.title}</div>
          <p className="postlink-card-subtitle">{post.summary}</p>
        </button>
      </div>
    );
  });

  const postLinkCardsContainer = (
    <div className="postlinks-container">
      <div className="postlinks-container-title">Blog</div>
      {postLinkCards}
    </div>
  )

  return (
    <>
      {postLinkCardsContainer}
      <Canvas content={blogContent} />
      {/* <div dangerouslySetInnerHTML={{ __html: blogContent }} /> */}
    </>
  )
}

export default Blog;