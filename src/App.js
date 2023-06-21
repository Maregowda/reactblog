import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import Layout from './Layout';
import { format } from 'date-fns'; 
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useWindowSize from './hooks/useWindowSize';


function App() {
  const { width } = useWindowSize();
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Blogs",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "A blog is a website or page that is a part of a larger website. Typically, it features articles written in a conversational style with accompanying pictures or videos. Blogging is a fun and flexible way for self-expression and social connection, so it is no wonder blogs have become very popular."
    },
    {
      id: 2,
      title: "colorst",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "In the heart of winter, we naturally tend to spend more time at home. While it's nice to stay inside when it gets cold out, spending so much time indoors can start to feel a bit boring. With shorter days, you might also find that the lack of natural light has you feeling a bit low energy too."
    },
    {
      id: 3,
      title: "My school",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Despite a blog’s importance, many schools aren’t using them — or using them effectively. As a matter of fact, our Inbound Marketing Benchmark Report suggests that less than half of schools currently have a school blog, and most of those schools with a blog have an infrequent, sporadic, or minimal blog presence!"
    },
    {
      id: 4,
      title: "Song",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "A music blog is just a blog dedicated to music topics. You can get new music blogs that share up and coming releases, music review blogs that review new releases and educational music blogs. Most music blogs share music streaming options, music videos, album artwork, and publish interviews with artists"
    }
  ])
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    const filteredResults = posts.filter((post) => 
        ((post.body).toLowerCase()).includes(search.toLowerCase())
        || ((post.title).toLowerCase()).includes(search.toLowerCase()))
        setSearchResults(filteredResults.reverse());
  },[posts, search])
    
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {id, title:postTitle, datetime, body:postBody};
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle(''); 
    setPostBody('');
    navigate('/'); 
  }
    
  const handleDelete = (id) => {
    const postsList = posts.filter(post => post.id !== id);
    setPosts(postsList);
    navigate('/');  
  }
  return (
    <Routes>
      <Route path="/" element={<Layout
        width={width}
        search={search}
        setSearch={setSearch}
      />}>
        <Route index element={<Home posts={searchResults} />} />
        <Route path="post">
          <Route index element={<NewPost
            handleSubmit={handleSubmit}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
          />} />
          <Route path=":id" element={<PostPage
            posts={posts}
            handleDelete={handleDelete}
          />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} /> 
      </Route>
    </Routes>
  );
}
export default App;
    