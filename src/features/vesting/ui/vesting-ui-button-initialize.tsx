import { Button } from '@/components/ui/button'
import { UiWalletAccount } from '@wallet-ui/react'

import { useVestingInitializeMutation } from '@/features/vesting/data-access/use-vesting-initialize-mutation'

export function VestingUiButtonInitialize({ account }: { account: UiWalletAccount }) {
  const mutationInitialize = useVestingInitializeMutation({ account })

  return (
    <Button onClick={() => mutationInitialize.mutateAsync()} disabled={mutationInitialize.isPending}>
      Initialize Vesting {mutationInitialize.isPending && '...'}
    </Button>
  )
}
