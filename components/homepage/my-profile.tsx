import Image from "next/image"
import myProfile from '@/public/images/image-p1-removebg.png'


function MyProfile() {
  return (
    <div className="flex-1 grid place-items-center">
        <div className="flex justify-center flex-col">
          <Image src={myProfile} alt="profile" priority quality={95} className="object-contain" />
        </div>
    </div>
  )
}

export default MyProfile