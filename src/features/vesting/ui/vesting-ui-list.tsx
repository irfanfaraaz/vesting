import { VestingUiCard } from './vesting-ui-card'
import { useVestingAccountsQuery } from '@/features/vesting/data-access/use-vesting-accounts-query'
import { UiWalletAccount } from '@wallet-ui/react'

export function VestingUiList({ account }: { account: UiWalletAccount }) {
  const vestingAccountsQuery = useVestingAccountsQuery()

  if (vestingAccountsQuery.isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>
  }

  if (!vestingAccountsQuery.data?.length) {
    return (
      <div className="text-center">
        <h2 className={'text-2xl'}>No accounts</h2>
        No accounts found. Initialize one to get started.
      </div>
    )
  }

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {vestingAccountsQuery.data?.map((vesting) => (
        <VestingUiCard account={account} key={vesting.address} vesting={vesting} />
      ))}
    </div>
  )
}
