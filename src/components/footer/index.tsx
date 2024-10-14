import { social } from "@/lib/constant"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className='max-w-[1440px] mx-auto md:px-[120px] px-4 pt-[64px] pb-[24px] flex flex-col gap-5'>
      <div className="flex flex-col gap-[41px]">
        <div className="flex items-center gap-2 justify-center">
          {
            social.map((item, index) => (
              <Link key={index}
                className="p-[10px] bg-[#262626] rounded-full w-10 h-10"
                href={item.link} target="_blank" rel="noreferrer">
                <Image src={item.icon} alt={item.name} />
              </Link>
            ))
          }
        </div>
        <div className="flex items-center justify-center gap-3 pt-[24.03px] pb-[15.97px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M20.5479 40.4238C31.5936 40.4238 40.5479 31.4695 40.5479 20.4238C40.5479 9.37813 31.5936 0.423828 20.5479 0.423828C9.50214 0.423828 0.547852 9.37813 0.547852 20.4238C0.547852 31.4695 9.50214 40.4238 20.5479 40.4238ZM26.7872 9.74066C27.0909 8.66187 26.044 8.02395 25.0879 8.70512L11.741 18.2134C10.7041 18.9521 10.8672 20.4238 11.986 20.4238H15.5006V20.3966H22.3504L16.7691 22.3659L14.3086 31.107C14.0049 32.1858 15.0517 32.8237 16.0079 32.1425L29.3548 22.6343C30.3917 21.8956 30.2285 20.4238 29.1098 20.4238H23.78L26.7872 9.74066Z" fill="#2F54EB" />
          </svg>
          <h1 className="text-[#FFF] text-[36px] leading-[40px] font-bold">ZKRollin</h1>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#2E2E2E]"></div>
      <div className="flex items-center justify-between text-[#BFBFBF] md:text-base text-xs">
        <span className="tracking-[-0.3px] whitespace-nowrap">© 2024 ZKRollin. All rights reserved.</span>
        <div className="flex md:gap-10 gap-3 items-center whitespace-nowrap">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer