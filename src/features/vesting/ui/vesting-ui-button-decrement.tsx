import { VestingAccount } from '@project/anchor'
import { UiWalletAccount } from '@wallet-ui/react'
import { Button } from '@/components/ui/button'

import { useVestingDecrementMutation } from '../data-access/use-vesting-decrement-mutation'

export function VestingUiButtonDecrement({ account, vesting }: { account: UiWalletAccount; vesting: VestingAccount }) {
  const decrementMutation = useVestingDecrementMutation({ account, vesting })

  return (
    <Button variant="outline" onClick={() => decrementMutation.mutateAsync()} disabled={decrementMutation.isPending}>
      Decrement
    </Button>
  )
}
