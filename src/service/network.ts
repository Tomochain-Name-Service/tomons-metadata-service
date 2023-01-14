import { ethers } from 'ethers';
import { UnsupportedNetwork } from '../base';


const NETWORK = {
  TESTNET: 'testnet',
  MAINNET: 'mainnet',
};

function getWeb3URL( network: string) {
  switch(network){
    case NETWORK.TESTNET:
      return 'https://rpc.testnet.tomochain.com';
    case NETWORK.MAINNET:
      return 'https://rpc.tomochain.com'
    default:
      throw Error('invalid network');
  }
}

export default function getNetwork(network: string): any {
  // currently subgraphs used under this function are outdated,
  // we will have namewrapper support and more attributes when latest subgraph goes to production
  let SUBGRAPH_URL: string;
  let WEB3_URL: string;
  switch (network) {
    case NETWORK.TESTNET:
      SUBGRAPH_URL = 'http://graph.tomons.site:8000/subgraphs/name/Tomochain-Name-Service/tomons-subgraph';
      WEB3_URL = getWeb3URL( NETWORK.TESTNET);
      break;
    case NETWORK.MAINNET:
      SUBGRAPH_URL = 'https://api.thegraph.com/subgraphs/name/ensdomains/ens';
      WEB3_URL = getWeb3URL( NETWORK.MAINNET);
      break;
    default:
      throw new UnsupportedNetwork(`Unknown network '${network}'`, 400);
  }
  const provider = new ethers.providers.StaticJsonRpcProvider(WEB3_URL);
  return { WEB3_URL, SUBGRAPH_URL, provider };
}
