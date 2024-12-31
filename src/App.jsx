
import './App.css'
import Navbar from './component/Navbar'
import About from './pages/About'
import Footer from './component/Footer'
import Profile from './component/Profile'
// import { ProfileIcon } from './component/ProfileIcon'
import ProfileData from "./api/profileData.json"
import Skill from './pages/Skill'
import ContactUs from './pages/ContactUs'

function App() {

  return (
    <>
      <Navbar />
      {/* <h1>My portfolio 2.O <i className="fa-solid fa-briefcase"></i></h1> */}
      <Profile  ProfileData={ProfileData}/>
      <About />
      <Skill />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
