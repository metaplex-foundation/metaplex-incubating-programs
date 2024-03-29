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
 * @category CreateRecipes
 * @category generated
 */
export type CreateRecipesInstructionArgs = {
  ingredients: string;
  roots: number[] /* size: 32 */[];
};
/**
 * @category Instructions
 * @category CreateRecipes
 * @category generated
 */
const createRecipesStruct = new beet.FixableBeetArgsStruct<
  CreateRecipesInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['ingredients', beet.utf8String],
    ['roots', beet.array(beet.uniformFixedSizeArray(beet.u8, 32))],
  ],
  'CreateRecipesInstructionArgs',
);
/**
 * Accounts required by the _createRecipes_ instruction
 * @category Instructions
 * @category CreateRecipes
 * @category generated
 */
export type CreateRecipesInstructionAccounts = {
  recipe: web3.PublicKey;
  authority: web3.PublicKey;
  payer: web3.PublicKey;
};

const createRecipesInstructionDiscriminator = [69, 115, 68, 232, 244, 127, 75, 219];

/**
 * Creates a _CreateRecipes_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category CreateRecipes
 * @category generated
 */
export function createCreateRecipesInstruction(
  accounts: CreateRecipesInstructionAccounts,
  args: CreateRecipesInstructionArgs,
) {
  const { recipe, authority, payer } = accounts;

  const [data] = createRecipesStruct.serialize({
    instructionDiscriminator: createRecipesInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: recipe,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: authority,
      isWritable: false,
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
