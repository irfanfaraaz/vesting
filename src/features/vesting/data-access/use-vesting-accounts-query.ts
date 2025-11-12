import { useSolana } from '@/components/solana/use-solana'
import { useQuery } from '@tanstack/react-query'
import { getVestingProgramAccounts } from '@project/anchor'
import { useVestingAccountsQueryKey } from './use-vesting-accounts-query-key'

export function useVestingAccountsQuery() {
  const { client } = useSolana()

  return useQuery({
    queryKey: useVestingAccountsQueryKey(),
    queryFn: async () => await getVestingProgramAccounts(client.rpc),
  })
}
