// Here we export some useful types and functions for interacting with the Anchor program.
import { Account, getBase58Decoder, SolanaClient } from 'gill'
import { getProgramAccountsDecoded } from './helpers/get-program-accounts-decoded'
import { Vesting, VESTING_DISCRIMINATOR, VESTING_PROGRAM_ADDRESS, getVestingDecoder } from './client/js'
import VestingIDL from '../target/idl/vesting.json'

export type VestingAccount = Account<Vesting, string>

// Re-export the generated IDL and type
export { VestingIDL }

export * from './client/js'

export function getVestingProgramAccounts(rpc: SolanaClient['rpc']) {
  return getProgramAccountsDecoded(rpc, {
    decoder: getVestingDecoder(),
    filter: getBase58Decoder().decode(VESTING_DISCRIMINATOR),
    programAddress: VESTING_PROGRAM_ADDRESS,
  })
}
