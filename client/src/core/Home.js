import React from 'react';
import Posts from '../post/Posts';

const Home = () => (
  <div>
    <div className='jumbotron jumbotron-fluid'>
      <div className='container'>
        <h2 className='display-4'>Hello People</h2>
        <p className='lead'>
          Welcome to Photo/Gif sharing website. You can share any photo or GIF
        </p>
      </div>
      <div className='container'>
        <Posts />
      </div>
    </div>
  </div>
);

export default Home;
