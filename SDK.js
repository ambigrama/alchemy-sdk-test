import { Network, Alchemy } from 'alchemy-sdk';
import * as dotenv from 'dotenv';

dotenv.config()

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: process.env.API_KEY, // Replace with your Alchemy API Key.
  network: Network.ETH_GOERLI, // Replace with your network.
};

const alchemy = new Alchemy(settings);

// Access standard Ethers.js JSON-RPC node request
alchemy.core.getBlockNumber().then(console.log);

// Access Alchemy Enhanced API requests
alchemy.core.getTokenBalances(process.env.ADDRESS).then(console.log);

// Access the Alchemy NFT API
alchemy.nft.getNftsForOwner('vitalik.eth').then(console.log);

// Access WebSockets and Alchemy-specific WS methods
alchemy.ws.on(
  {
    method: 'alchemy_pendingTransactions'
  },
  res => console.log(res)
);