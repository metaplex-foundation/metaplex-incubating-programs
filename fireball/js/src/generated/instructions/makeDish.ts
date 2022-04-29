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
 * @category MakeDish
 * @category generated
 */
export type MakeDishInstructionArgs = {
  recipeSignerBump: number;
  edition: beet.bignum;
};
/**
 * @category Instructions
 * @category MakeDish
 * @category generated
 */
const makeDishStruct = new beet.BeetArgsStruct<
  MakeDishInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['recipeSignerBump', beet.u8],
    ['edition', beet.u64],
  ],
  'MakeDishInstructionArgs',
);
/**
 * Accounts required by the _makeDish_ instruction
 * @category Instructions
 * @category MakeDish
 * @category generated
 */
export type MakeDishInstructionAccounts = {
  recipe: web3.PublicKey;
  dish: web3.PublicKey;
  payer: web3.PublicKey;
  metadataNewMetadata: web3.PublicKey;
  metadataNewEdition: web3.PublicKey;
  metadataMasterEdition: web3.PublicKey;
  metadataNewMint: web3.PublicKey;
  metadataEditionMarkPda: web3.PublicKey;
  metadataNewMintAuthority: web3.PublicKey;
  metadataMasterTokenOwner: web3.PublicKey;
  metadataMasterTokenAccount: web3.PublicKey;
  metadataNewUpdateAuthority: web3.PublicKey;
  metadataMasterMetadata: web3.PublicKey;
  metadataMasterMint: web3.PublicKey;
  tokenMetadataProgram: web3.PublicKey;
};

const makeDishInstructionDiscriminator = [68, 76, 253, 207, 26, 168, 4, 182];

/**
 * Creates a _MakeDish_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category MakeDish
 * @category generated
 */
export function createMakeDishInstruction(
  accounts: MakeDishInstructionAccounts,
  args: MakeDishInstructionArgs,
) {
  const {
    recipe,
    dish,
    payer,
    metadataNewMetadata,
    metadataNewEdition,
    metadataMasterEdition,
    metadataNewMint,
    metadataEditionMarkPda,
    metadataNewMintAuthority,
    metadataMasterTokenOwner,
    metadataMasterTokenAccount,
    metadataNewUpdateAuthority,
    metadataMasterMetadata,
    metadataMasterMint,
    tokenMetadataProgram,
  } = accounts;

  const [data] = makeDishStruct.serialize({
    instructionDiscriminator: makeDishInstructionDiscriminator,
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
      pubkey: metadataNewMetadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: metadataNewEdition,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: metadataMasterEdition,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: metadataNewMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: metadataEditionMarkPda,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: metadataNewMintAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: metadataMasterTokenOwner,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: metadataMasterTokenAccount,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: metadataNewUpdateAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: metadataMasterMetadata,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: metadataMasterMint,
      isWritable: false,
      isSigner: false,
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
    {
      pubkey: tokenMetadataProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: web3.SYSVAR_RENT_PUBKEY,
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