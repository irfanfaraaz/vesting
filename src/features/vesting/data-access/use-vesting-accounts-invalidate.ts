import { useQueryClient } from '@tanstack/react-query'
import { useVestingAccountsQueryKey } from './use-vesting-accounts-query-key'

export function useVestingAccountsInvalidate() {
  const queryClient = useQueryClient()
  const queryKey = useVestingAccountsQueryKey()

  return () => queryClient.invalidateQueries({ queryKey })
}
