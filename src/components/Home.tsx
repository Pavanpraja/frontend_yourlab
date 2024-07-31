import HomeCard from '@/components/HomeCard'
import CardInfo from '@/components/CardInfo'
import ProfileData from '@/components/ProfileData'
import LabCard from '@/components/LabCard'
import Appointment from '@/app/doctor/appointment/page'


const Home = () => {
  
  return (
    <>
      <HomeCard  />
      <ProfileData />
      <CardInfo />
      <LabCard />
      <Appointment />
    </>
  )
}

export default Home
