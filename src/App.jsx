
import './App.css'
import Navbar from './component/Navbar'
import About from './pages/About'
import Footer from './component/Footer'
import Profile from './component/Profile'
import data from "./api/Data.json"
import Skill from './pages/Skill'
import ContactUs from './pages/ContactUs'
import Project from './pages/Project'
import Education from './pages/Education'
import IntershipAndCourse from './pages/IntershipAndCourse'
import { Socialicons } from './component/social_icon/Social_Icon'

function App() {

  return (
    <>
      <Navbar />
      <Profile ProfileData={data} />
      <Socialicons  socialprofils={data.socialprofils}/>
      <About />
      <Education education={data.education} />
      <IntershipAndCourse internshipAndCourse={data.internshipAndCourse}/>
      <Skill />
      <Project myProjects={data.myProjects} />
      <ContactUs />
      <Footer SocialMedia={data.SocialMedia} />
    </>
  )
}

export default App
