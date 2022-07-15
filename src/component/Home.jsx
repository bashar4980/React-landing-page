import React from 'react'
import Course from './common/Course';

import Header from './common/Header';
import Wrapper from './common/Wrapper';

const Home = () => {
  return (
    <>
   <header>
    <Header img="https://static-exp2.licdn.com/aero-v1/sc/h/d58zfe6h3ycgq5l1ccjpkrtdn" text = {<><span className='text-primary'>Learn</span> without limits</>}/>
    <Wrapper Imagesrc="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6xXERT0XZPJDXgjPzr8Bve/d858e0cda1a5e5df2cb8accd65d5c1b7/outcomes.png?auto=format%2Ccompress&dpr=1&w=606&h=553&q=40" heading="Learner outcomes on Coursera" text={
        <><strong>87% of people learning</strong> for professional development <strong>report career benefits</strong> like getting a promotion, a raise, or starting a new career <br /><br /><br />
          <strong>-Coursera Impact Report (2020)</strong>
        </>
      } />

      <div className="container">
        <h4>Professional Certificates</h4>
        <h1>Get job-ready for an in-demand career</h1>
        <p>Break into a new field like information technology or data science. No prior experience necessary to get started.</p>
      <div className="row g-5 py-5">
      <Course/>
      </div>
      </div>
     
     <Wrapper Imagesrc="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-rebrand/secondary-consumer-cta/Image-Next-Step.png?auto=format%2Ccompress&dpr=1&w=471&h=330&q=40" heading="Take the next step toward your personal and professional goals with Coursera." text={
        <>Join now to receive personalized recommendations from the full Coursera catalog.
        </>
      } />
   </header>
    </>
  )
}

export default Home