
import './App.css'
import Navbar from './component/Navbar'
import About from './pages/About'
import Footer from './component/Footer'
import Profile from './pages/profile/Profile'
import data from "./api/Data.json"
import Skill from './pages/Skill/Skill'
import ContactUs from './pages/ContactUs'
import Project from './pages/Project'
import Education from './pages/Education'
import IntershipAndCourse from './pages/IntershipAndCourse'
import { Socialicons } from './component/social_icon/Social_Icon'
// import ViewProjectInfo from './view-component/ViewProjectInfo'

function App() {

  return (
    <>
      <Navbar />

      <div id="profile-section">
        <Profile ProfileData={data} />
      </div>

      <Socialicons socialprofils={data.socialprofils} />

      <div id="about-section">
        <About />
      </div>

      <div id="education-section">
        <Education education={data.education} />
      </div>

      <div id="internship-course-section">
        <IntershipAndCourse internshipAndCourse={data.internshipAndCourse} />
      </div>

      <div id="skills-section">
        <Skill mySkills={data.mySkill} />
      </div>

      <div id="projects-section">
        <Project myProjects={data.myProjects} />
      </div>

      <div id="contact-us-section">
        <ContactUs />
      </div>

      <Footer SocialMedia={data.SocialMedia} />
    </>
  )
}

export default App