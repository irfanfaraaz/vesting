import { VestingAccount } from '@project/anchor'
import { UiWalletAccount } from '@wallet-ui/react'
import { Button } from '@/components/ui/button'

import { useVestingSetMutation } from '@/features/vesting/data-access/use-vesting-set-mutation'

export function VestingUiButtonSet({ account, vesting }: { account: UiWalletAccount; vesting: VestingAccount }) {
  const setMutation = useVestingSetMutation({ account, vesting })

  return (
    <Button
      variant="outline"
      onClick={() => {
        const value = window.prompt('Set value to:', vesting.data.count.toString() ?? '0')
        if (!value || parseInt(value) === vesting.data.count || isNaN(parseInt(value))) {
          return
        }
        return setMutation.mutateAsync(parseInt(value))
      }}
      disabled={setMutation.isPending}
    >
      Set
    </Button>
  )
}
