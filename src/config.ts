const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'metadata.tomons.site';
const ENV = process.env.ENV || 'local'; // local/prod

const FONT_FOLDER = path.join((ENV === 'local' ? 'src' : 'dist'), 'assets');
const CANVAS_FONT_PATH = path.join(FONT_FOLDER, 'Satoshi-Bold.ttf');
const CANVAS_EMOJI_FONT_PATH = path.join(FONT_FOLDER, 'NotoColorEmoji.ttf');
const INAMEWRAPPER = process.env.INAMEWRAPPER || '0xe89c48dc';

const IPFS_GATEWAY = 'https://ipfs.tomons.site:5001/';
const INFURA_API_KEY = process.env.INFURA_API_KEY || '';

const ADDRESS_ETH_REGISTRAR = process.env.ADDRESS_ETH_REGISTRAR || '0x1BF60f2141703F4beee4E5482C771875546Ed74B';
const ADDRESS_ETH_REGISTRY = process.env.ADDRESS_ETH_REGISTRY || '0x5d938F93b2Ff9Bb490f523467A5bEA141064c0e0'
const ADDRESS_NAME_WRAPPER = process.env.ADDRESS_NAME_WRAPPER || '0x620535b5e6d5104EEBc9C8645E54de10120cfA8e';

const SERVER_URL =
  ENV === 'local' ? `http://metadata.tomons.site:${PORT}` : `https://${HOST}`;

const ETH_REGISTRY_ABI = [
  'function recordExists(bytes32 node) external view returns (bool)'
];

// response timeout: 1 min
const RESPONSE_TIMEOUT = 60 * 1000;

export {
  ADDRESS_ETH_REGISTRAR,
  ADDRESS_ETH_REGISTRY,
  ADDRESS_NAME_WRAPPER,
  CANVAS_FONT_PATH,
  CANVAS_EMOJI_FONT_PATH,
  ETH_REGISTRY_ABI,
  INAMEWRAPPER,
  IPFS_GATEWAY,
  INFURA_API_KEY,
  RESPONSE_TIMEOUT,
  SERVER_URL,
};