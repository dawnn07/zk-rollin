import { useMemo } from "react";
import { Address } from "viem";
import { useAccount, useWriteContract } from "wagmi";
import AIRDROP_ABI from "../contracts/AIRDROP_ABI.json";
export function useClaim() {
  const { address } = useAccount();
  const {
    writeContractAsync,
    data: tx_hash,
    isSuccess,
    isPending,
  } = useWriteContract();

  const claim = async () => {
    await writeContractAsync({
      abi: AIRDROP_ABI,
      address: process.env.NEXT_PUBLIC_CLAIM_ADDRESS as Address,
      functionName: "mint",
      args: [],
    });
  };

  return useMemo(() => {
    return { tx_hash, claim, isPending, isSuccess };
  }, [claim, tx_hash, address]);
}
