import { PublicKey } from '@solana/web3.js';
export * from './accounts';
export * from './errors';
export * from './instructions';

/**
 * Program address
 *
 * @category constants
 * @category generated
 */
export const PROGRAM_ADDRESS = 'fireo2tXc3j1Es8GjsGUf6whnEPte8oUvdDz4U2zN9n';

/**
 * Program public key
 *
 * @category constants
 * @category generated
 */
export const PROGRAM_ID = new PublicKey(PROGRAM_ADDRESS);
