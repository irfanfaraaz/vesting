import { VESTING_PROGRAM_ADDRESS } from '@project/anchor'
import { AppExplorerLink } from '@/components/app-explorer-link'
import { ellipsify } from '@wallet-ui/react'

export function VestingUiProgramExplorerLink() {
  return <AppExplorerLink address={VESTING_PROGRAM_ADDRESS} label={ellipsify(VESTING_PROGRAM_ADDRESS)} />
}
