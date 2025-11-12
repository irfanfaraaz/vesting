import { ReactNode } from 'react'

import { AppAlert } from '@/components/app-alert'
import { useSolana } from '@/components/solana/use-solana'
import { useVestingProgram } from '@/features/vesting/data-access/use-vesting-program'

export function VestingUiProgramGuard({ children }: { children: ReactNode }) {
  const { cluster } = useSolana()
  const programAccountQuery = useVestingProgram()

  if (programAccountQuery.isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>
  }

  if (!programAccountQuery.data?.value) {
    return (
      <AppAlert>Program account not found on {cluster.label}. Be sure to deploy your program and try again.</AppAlert>
    )
  }

  return children
}
