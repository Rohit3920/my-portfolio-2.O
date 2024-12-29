
import './App.css'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import Profile from './component/Profile'
// import { ProfileIcon } from './component/ProfileIcon'
import ProfileData from "./api/profileData.json"

function App() {
  console.log(ProfileData.SocialMedia)

  return (
    <>
      <Navbar />
      {/* <h1>My portfolio 2.O <i className="fa-solid fa-briefcase"></i></h1> */}
      <Profile  ProfileData={ProfileData}/>
      <Footer />
    </>
  )
}

export default App
