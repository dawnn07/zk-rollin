'use client'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount } from 'wagmi'
export default function ConnectButton() {
  const { open, close } = useWeb3Modal()
  const { address, isConnecting, isDisconnected } = useAccount()
  return (
    <button
      onClick={() => open()}
      className='px-6 py-[8px] bg-[#1D39C4] rounded-xl border border-[rgba(255,255,255,0.05)] transition-all hover:opacity-70'>
      <span className='text-[16px] leading-[28px] font-semibold text-[#FFF]'>{
        address ?
          address.slice(0, 6) + '...' + address.slice(-4)
          : 'Connect Wallet'
      }</span>
    </button>
  )
}