
const Explore = () => {
  return (
    <section className="max-w-[1440px] mx-auto flex flex-col gap-8 justify-center items-center h-[566px] relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="480" height="480" viewBox="0 0 480 480" fill="none">
          <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M240.14 479.18C372.354 479.18 479.534 372 479.534 239.787C479.534 107.574 372.354 0.393799 240.14 0.393799C107.926 0.393799 0.746399 107.574 0.746399 239.787C0.746399 372 107.926 479.18 240.14 479.18ZM314.823 111.913C318.458 99.0006 305.927 91.3649 294.482 99.5182L134.724 213.329C122.313 222.171 124.265 239.787 137.657 239.787H179.726V239.461H261.715L194.909 263.033L165.458 367.661C161.823 380.574 174.352 388.21 185.798 380.056L345.556 266.246C357.967 257.404 356.014 239.787 342.623 239.787H278.827L314.823 111.913Z" fill="url(#paint0_linear_1_81)" />
          <defs>
            <linearGradient id="paint0_linear_1_81" x1="240.14" y1="0.393799" x2="240.14" y2="479.18" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2F54EB" />
              <stop offset="1" stopColor="#1B3085" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col items-center gap-[14px] z-20">
        <h1 className="text-[#FFF] md:text-[48px] md:leading-[46px] text-2xl font-bold text-center">Discover the SOS NFT Platform <br /> - Where Every Artwork is a <br />Masterpiece!</h1>
        <p className="md:text-[16px] md:leading-[25px] text-sm tracking-[0.3px] text-[#BFBFBF] text-center">Become part of an elite NFT community where you can buy, sell, and explore unique and <br className="md:flex hidden"/>valuable digital artworks.</p>
      </div>
      <button className="px-6 py-[10px] bg-[#FFF] rounded-full z-20 transition-all hover:opacity-70">
        <span className="text-[18px] text-[#000000] leading-[20px] font-medium">Explore marketplace</span>
      </button>
    </section >
  )
}

export default Explore