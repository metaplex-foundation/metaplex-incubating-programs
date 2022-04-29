/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token';
import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';

/**
 * @category Instructions
 * @category ReclaimMasterEdition
 * @category generated
 */
export type ReclaimMasterEditionInstructionArgs = {
  recipeSignerBump: number;
};
/**
 * @category Instructions
 * @category ReclaimMasterEdition
 * @category generated
 */
const reclaimMasterEditionStruct = new beet.BeetArgsStruct<
  ReclaimMasterEditionInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['recipeSignerBump', beet.u8],
  ],
  'ReclaimMasterEditionInstructionArgs',
);
/**
 * Accounts required by the _reclaimMasterEdition_ instruction
 * @category Instructions
 * @category ReclaimMasterEdition
 * @category generated
 */
export type ReclaimMasterEditionInstructionAccounts = {
  recipe: web3.PublicKey;
  masterMint: web3.PublicKey;
  masterTokenOwner: web3.PublicKey;
  from: web3.PublicKey;
  to: web3.PublicKey;
  payer: web3.PublicKey;
};

const reclaimMasterEditionInstructionDiscriminator = [140, 35, 52, 5, 225, 201, 1, 248];

/**
 * Creates a _ReclaimMasterEdition_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category ReclaimMasterEdition
 * @category generated
 */
export function createReclaimMasterEditionInstruction(
  accounts: ReclaimMasterEditionInstructionAccounts,
  args: ReclaimMasterEditionInstructionArgs,
) {
  const { recipe, masterMint, masterTokenOwner, from, to, payer } = accounts;

  const [data] = reclaimMasterEditionStruct.serialize({
    instructionDiscriminator: reclaimMasterEditionInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: recipe,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: masterMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: masterTokenOwner,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: from,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: to,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey('fireo2tXc3j1Es8GjsGUf6whnEPte8oUvdDz4U2zN9n'),
    keys,
    data,
  });
  return ix;
}