const SocialMedia = () => {
  return (
    <div className="relative bg-mainBackground h-[65vh]">
        <svg className="absolute top-0 z-0" width="1918" height="465" viewBox="0 0 1918 465" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M942.746 464L1 140.614V1H1917V56.1964L942.746 464Z" fill="#EBFFC9" stroke="#EBFFC9"/>
        </svg>
        <div className="absolute -translate-x-1/2 left-1/2 top-0 z-50 w-9/12 flex flex-col justify-center">
            <div className="p-6 z-40 bg-thirdGreen text-center rounded-2xl border-2 border-black shadow-neoBrutalism">
                <h1 className="font-bold text-2xl">Me siga nas Redes Sociais</h1>
            </div>
            <div className="-mt-3 w-full flex justify-between py-12 px-28 bg-secondGreen text-center rounded-b-2xl border-2 border-t-0 border-black shadow-neoBrutalism">
                <div className="flex flex-col items-center gap-y-4">
                    <div className="size-56 bg-boxGray rounded-md"></div>
                    <h2 className="underline text-boxGray text-xl">github.com/ArthurJuwer</h2>
                    <div className="bg-boxGray px-4 py-1 rounded-2xl w-4/5">
                        <h1 className="text-secondGreen font-medium">13 seguidores</h1>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-y-4">
                    <div className="size-56 bg-boxGray rounded-md"></div>
                    <h2 className="underline text-boxGray text-xl">github.com/ArthurJuwer</h2>
                    <div className="bg-boxGray px-4 py-1 rounded-2xl w-4/5">
                        <h1 className="text-secondGreen font-medium">13 seguidores</h1>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-y-4">
                    <div className="size-56 bg-boxGray rounded-md"></div>
                    <h2 className="underline text-boxGray text-xl">github.com/ArthurJuwer</h2>
                    <div className="bg-boxGray px-4 py-1 rounded-2xl w-4/5">
                        <h1 className="text-secondGreen font-medium">13 seguidores</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SocialMedia