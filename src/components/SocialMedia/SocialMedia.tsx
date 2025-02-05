import { Github, Instagram, Linkedin } from 'lucide-react';

import SocialMediaCard from "./SocialMediaCard"

const SocialMedia = () => {
  return (
    <div id="redes"  className="relative bg-mainBackground h-[65vh]">
        <svg className="absolute -top-1 z-0 w-full h-auto" viewBox="0 0 1918 465" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M942.746 464L1 140.614V1H1917V56.1964L942.746 464Z" fill="#EBFFC9" stroke="#EBFFC9"/>
        </svg>
        <div className="absolute -translate-x-1/2 left-1/2 top-0 z-50 w-9/12 flex flex-col justify-center shadow-neoBrutalism_right rounded-xl">
            <div className="p-6 z-40 bg-thirdGreen text-center rounded-xl border-[3px] border-black">
                <h1 className="font-bold text-2xl">Me siga nas Redes Sociais </h1>
                
            </div>
            <div className="-mt-6 w-full flex justify-between py-12 px-28 bg-secondGreen text-center rounded-xl border-2 border-r-0 border-t-0 border-black">
                
                <SocialMediaCard icon={<Github size={70} />} link="github.com/ArthurJuwer" followers="14 seguidores"/>
                <SocialMediaCard icon={<Linkedin size={70} />} link="linkedin.com/in/arthurjuwer/" followers="171 conexões"/>
                <SocialMediaCard icon={<Instagram size={70} />} link="instagram.com/arthur_juwer" followers="821 seguidores"/>

                
                
            </div>
        </div>
    </div>
  )
}

export default SocialMedia