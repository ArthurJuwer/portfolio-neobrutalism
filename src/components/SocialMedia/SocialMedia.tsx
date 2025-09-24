import { Github, Instagram, Linkedin } from 'lucide-react';

import SocialMediaCard from "./SocialMediaCard"

const SocialMedia = () => {
  return (
    <div id="redes"  className="relative flex items-center flex-col bg-mainBackground 2xl:pb-24 xl:pb-20 pb-14">
        <div
        className="absolute top-0 w-full aspect-[1918/465] z-0 bg-[#EBFFC9]"
        style={{ 
            clipPath: "polygon(49.2% 100%, 0% 30.3%, 0% 0%, 100% 0%, 100% 12.1%, 49.2% 100%)" 
        }}
        ></div>
        <div className="z-50 w-11/12 xl:w-10/12 2xl:w-9/12 flex flex-col justify-center lg:shadow-neoBrutalism_right shadow-neoBrutalism_right_mobile rounded-xl">
            <div className="p-6 z-40 bg-thirdGreen text-center rounded-xl border-[3px] border-black">
                <h1 className="font-bold text-2xl">Me siga nas Redes Sociais </h1>
                
            </div>
            <div className="-mt-6 w-full flex justify-center gap-4 flex-col lg:flex-row lg:justify-between py-12 px-3 lg:py-12 lg:px-20 2xl:px-28 bg-secondGreen text-center rounded-xl border-2 border-r-0 border-t-0 border-black">
                
                <SocialMediaCard icon={<Github className="lg:size-20 size-10" />} link="github.com/ArthurJuwer" followers="30 seguidores"/>
                <SocialMediaCard icon={<Linkedin className="lg:size-20 size-10" />} link="linkedin.com/in/arthurjuwer/" followers="854 conexões"/>
                <SocialMediaCard icon={<Instagram className="lg:size-20 size-10" />} link="instagram.com/arthur_juwer" followers="865 seguidores"/>

            </div>
        </div>
    </div>
  )
}

export default SocialMedia