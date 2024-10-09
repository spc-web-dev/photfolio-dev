import Image from "next/image"
import myProfile from '@/app/fonts/images/image-p1-removebg.png'


function MyProfile() {
  return (
    <div className="flex-1 grid place-items-center">
        <div className="flex justify-center flex-col">
          {/* <h1 className="text-center text-3xl italic font-serif bg-neutral-100">MR. L1R2S3</h1> */}
          <Image src={myProfile} alt="profile" className="object-contain" />
        </div>
    </div>
  )
}

export default MyProfile