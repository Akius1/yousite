import React from 'react';

import './App.css';
import PageLayout from './Views/PageLayout/PageLayout';
import Introduction from './Components/Introduction/Introduction.component';
import ProjectPage from './Views/ProjectPage/ProjectPage';
import AboutPage from './Views/AboutPage/AboutPage';

function App() {
  return (
    <PageLayout>
      <Introduction
        name="UgoZeal"
        twitter_link="twitter"
        linkedin_link="linkedin"
        facebook_link="facebook"
        email="ugozeal@gmail.com"
        job_role="IOS Software Engineer"
        experince="2 years Node JS and React developer"
        address="Lagos, Nigeria"
      />
      <ProjectPage />
      <AboutPage />
    </PageLayout>
  );
}

export default App;
