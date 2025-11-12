import { VestingAccount } from '@project/anchor'
import { UiWalletAccount } from '@wallet-ui/react'
import { Button } from '@/components/ui/button'

import { useVestingCloseMutation } from '@/features/vesting/data-access/use-vesting-close-mutation'

export function VestingUiButtonClose({ account, vesting }: { account: UiWalletAccount; vesting: VestingAccount }) {
  const closeMutation = useVestingCloseMutation({ account, vesting })

  return (
    <Button
      variant="destructive"
      onClick={() => {
        if (!window.confirm('Are you sure you want to close this account?')) {
          return
        }
        return closeMutation.mutateAsync()
      }}
      disabled={closeMutation.isPending}
    >
      Close
    </Button>
  )
}
