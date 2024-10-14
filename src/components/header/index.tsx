import ConnectButton from "../connect-button"

const Header = () => {
  return (
    <div className="max-w-[1440px] mx-auto min-h-[76px] w-full md:px-20 px-2 py-4 flex justify-between items-center">
      <div className="p-[7.54px_17.29px_8.46px_3.548px] gap-[12.162px] flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M12.6879 24.5398C19.3153 24.5398 24.6879 19.1672 24.6879 12.5398C24.6879 5.91238 19.3153 0.539795 12.6879 0.539795C6.06044 0.539795 0.687866 5.91238 0.687866 12.5398C0.687866 19.1672 6.06044 24.5398 12.6879 24.5398ZM16.4314 6.1299C16.6137 5.48262 15.9855 5.09987 15.4119 5.50857L7.40373 11.2135C6.78159 11.6568 6.87945 12.5398 7.55073 12.5398H9.65949V12.5234H13.7694L10.4206 13.705L8.94429 18.9497C8.76207 19.597 9.39015 19.9797 9.96387 19.571L17.972 13.8661C18.5941 13.4228 18.4962 12.5398 17.825 12.5398H14.6271L16.4314 6.1299Z" fill="#2F54EB" />
        </svg>
        <h1 className="text-[#FFF] text-[24px] leading-[20px] font-bold">ZKRollin</h1>
      </div>
      <ConnectButton />
    </div>
  )
}

export default Header