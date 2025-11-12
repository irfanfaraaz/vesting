import { VestingAccount } from '@project/anchor'
import { ellipsify, UiWalletAccount } from '@wallet-ui/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AppExplorerLink } from '@/components/app-explorer-link'
import { VestingUiButtonClose } from './vesting-ui-button-close'
import { VestingUiButtonDecrement } from './vesting-ui-button-decrement'
import { VestingUiButtonIncrement } from './vesting-ui-button-increment'
import { VestingUiButtonSet } from './vesting-ui-button-set'

export function VestingUiCard({ account, vesting }: { account: UiWalletAccount; vesting: VestingAccount }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Vesting: {vesting.data.count}</CardTitle>
        <CardDescription>
          Account: <AppExplorerLink address={vesting.address} label={ellipsify(vesting.address)} />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 justify-evenly">
          <VestingUiButtonIncrement account={account} vesting={vesting} />
          <VestingUiButtonSet account={account} vesting={vesting} />
          <VestingUiButtonDecrement account={account} vesting={vesting} />
          <VestingUiButtonClose account={account} vesting={vesting} />
        </div>
      </CardContent>
    </Card>
  )
}
