import React from 'react';
import './App.scss';

function App() {
  return (
    <div className='container'>
      <section>
        <article className='article-1'>
          <h2>Join our community</h2>

          <h3>30-day, hassle-free money back guarantee</h3>

          <p>Gain access to our full library of tutorials along with expert code reviews. 
          Perfect for any developers who are serious about honing their skills.</p>

        </article>
        <section className='section-2'>
          <article className='article-2'>
            <div>
              <h3>Monthly Subscription</h3>

              <p><span className='dollar-big'> $29</span><span> per month</span></p>

              <p>Full access for less than <span className='dollar-small'>$1</span> a day</p>

              <button className='btn'>Sign Up</button>
            </div>
          </article>
          <article className='article-3'>
              <h3>Why Us</h3>
              
              <p>Tutorials by industry experts<br/>
              Peer &amp; expert code review<br/>
              Coding exercises<br/>
              Access to our GitHub repos<br/>
              Community forum<br/>
              Flashcard decks<br/>
              New videos every week</p>
          </article>
        </section>
      </section>
    </div>
  );
}

export default App;
