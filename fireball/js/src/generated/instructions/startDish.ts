/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';

/**
 * @category Instructions
 * @category StartDish
 * @category generated
 */
export type StartDishInstructionArgs = {
  dishBump: number;
};
/**
 * @category Instructions
 * @category StartDish
 * @category generated
 */
const startDishStruct = new beet.BeetArgsStruct<
  StartDishInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['dishBump', beet.u8],
  ],
  'StartDishInstructionArgs',
);
/**
 * Accounts required by the _startDish_ instruction
 * @category Instructions
 * @category StartDish
 * @category generated
 */
export type StartDishInstructionAccounts = {
  recipe: web3.PublicKey;
  dish: web3.PublicKey;
  payer: web3.PublicKey;
};

const startDishInstructionDiscriminator = [177, 219, 132, 86, 63, 74, 128, 30];

/**
 * Creates a _StartDish_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category StartDish
 * @category generated
 */
export function createStartDishInstruction(
  accounts: StartDishInstructionAccounts,
  args: StartDishInstructionArgs,
) {
  const { recipe, dish, payer } = accounts;

  const [data] = startDishStruct.serialize({
    instructionDiscriminator: startDishInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: recipe,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: dish,
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
  ];

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey('fireo2tXc3j1Es8GjsGUf6whnEPte8oUvdDz4U2zN9n'),
    keys,
    data,
  });
  return ix;
}