import { getDefaultConfig } from "@rainbow-me/rainbowkit"
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from "wagmi/chains"

if (!process.env.NEXT_PUBLIC_PROJECT_ID) throw new Error("project id required")

export const config = getDefaultConfig({
  appName: "RainbowKit demo",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [sepolia] : []),
  ],
  ssr: true,
})
