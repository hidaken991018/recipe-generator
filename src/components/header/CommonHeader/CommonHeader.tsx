import Image from 'next/image'
export const CommonHeader = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-lightBrown w-full shadow-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-lightBeige text-[20px] font-bold ml-2 drop-shadow-lg cursor-pointer">マイクック</h1>
      </div>
      <div className="flex justify-between items-center">
        <button>
          <Image src="/assets/icon_menu.png" width={30} height={30} alt="" />
        </button>
      </div>
    </div>
  )
}