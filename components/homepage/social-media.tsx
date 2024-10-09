import { socialMediaData } from "@/lib/data"


function SocialMedia() {
  return (
    <ul className="flex gap-2 text-2xl">
        {socialMediaData.map(sm=>(
            <li key={sm.id} className="hover:bg-neutral-200 bg-secondary p-1 rounded-sm cursor-pointer">
                {sm.icon}
            </li>
        ))}
    </ul>
  )
}

export default SocialMedia