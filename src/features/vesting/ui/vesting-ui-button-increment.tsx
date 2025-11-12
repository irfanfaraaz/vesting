import { VestingAccount } from '@project/anchor'
import { UiWalletAccount } from '@wallet-ui/react'
import { Button } from '@/components/ui/button'
import { useVestingIncrementMutation } from '../data-access/use-vesting-increment-mutation'

export function VestingUiButtonIncrement({ account, vesting }: { account: UiWalletAccount; vesting: VestingAccount }) {
  const incrementMutation = useVestingIncrementMutation({ account, vesting })

  return (
    <Button variant="outline" onClick={() => incrementMutation.mutateAsync()} disabled={incrementMutation.isPending}>
      Increment
    </Button>
  )
}
