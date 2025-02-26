import { ethers } from 'ethers';
import { UnsupportedNetwork } from '../base';
import {
  NODE_PROVIDER,
  NODE_PROVIDER_URL,
  NODE_PROVIDER_URL_CF,
  NODE_PROVIDER_URL_GOERLI,
} from '../config';

const NODE_PROVIDERS = {
  RPC    : 'RPC',
};

export const NETWORK = {
  TESTNET: 'Viction Testnet',
  MAINNET: 'Viction',
} as const;

export type NetworkName = typeof NETWORK[keyof typeof NETWORK];

function getWeb3URL(
  providerName: string,
  api: string,
  network: NetworkName
): string {
  console.log({providerName})
  switch (providerName.toUpperCase()) {
    case NODE_PROVIDERS.RPC:
      return api;
    default:
      throw Error('');
  }
}

export default function getNetwork(network: NetworkName): {
  WEB3_URL: string;
  SUBGRAPH_URL: string;
  provider: ethers.providers.BaseProvider;
} {
  // currently subgraphs used under this function are outdated,
  // we will have namewrapper support and more attributes when latest subgraph goes to production
  let SUBGRAPH_URL: string;
  switch (network) {
    case NETWORK.TESTNET:
      SUBGRAPH_URL = 'https://graph.viction.name/subgraphs/name/vns/subgraph';
      break;
    case NETWORK.MAINNET:
      SUBGRAPH_URL =
        'https://graph.viction.name/subgraphs/name/vns/subgraph';
      break;
    default:
      throw new UnsupportedNetwork(`Unknown network '${network}'`, 501);
  }

  const WEB3_URL = getWeb3URL(NODE_PROVIDER, NODE_PROVIDER_URL, network);

  // add source param at the end for better request measurability
  SUBGRAPH_URL = SUBGRAPH_URL + '?source=ens-metadata';

  const provider = new ethers.providers.StaticJsonRpcProvider(WEB3_URL);
  return { WEB3_URL, SUBGRAPH_URL, provider };
}
