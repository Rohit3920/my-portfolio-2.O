
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

function App() {

  return (
    <>
      <Navbar />
      <Profile ProfileData={data} />
      <About />
      <Education education={data.education} />
      <Skill />
      <Project myProjects={data.myProjects} />
      <ContactUs />
      <Footer SocialMedia={data.SocialMedia} />
    </>
  )
}

export default App
