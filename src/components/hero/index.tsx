import pic1 from '@/images/1.png'
import pic2 from '@/images/2.png'
import pic3 from '@/images/3.png'
import pic4 from '@/images/4.png'
import pic5 from '@/images/5.png'
import hero from '@/images/hero_bg.png'
import Image from 'next/image'
import Slider from '../slider'
const Hero = () => {
  const data = [
    {
      id: 1,
      image: pic5
    },
    {
      id: 2,
      image: pic4
    },
    {
      id: 3,
      image: pic2
    },
    {
      id: 4,
      image: pic3
    },
    {
      id: 5,
      image: pic1
    },
  ];


  return (
    <section className='md:px-[160px] px-4 md:py-[80px] py-10 h-[830px] relative'>
      <div className="decor-dark-blue md:w-[464.454px] md:h-[120.137px] w-[300px] h-[40px] top-[0px] absolute z-0 left-1/2 transform -translate-x-1/2">
      </div>
      <Image src={hero} alt="hero" className='mix-blend-lighten absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[597px] w-full' />
      <div className='bg-[rgba(255,255,255,0.10)] rounded-full w-fit px-6 py-2 mx-auto'>
        <span className='md:text-[24px] text-sm font-medium text-[#2F54EB] '>Explore New NFT</span>
      </div>
      <p className='pt-4 md:text-[36px] md:leading-[40px] text-2xl font-bold text-center'>We deliver the best solutions with cutting-edge<br className='md:flex hidden' />
        technology to empower your NFT business</p>

      <div className="center relative z-10">
        <Slider data={data} activeSlide={2} />
      </div>
      <div className="decor-light-blue md:w-[1314.958px] w-[300px] md:h-[84.706px] h-[80px] bottom-[222.456px] absolute z-0 left-1/2 transform -translate-x-1/2">
      </div>
    </section>
  )
}

export default Hero