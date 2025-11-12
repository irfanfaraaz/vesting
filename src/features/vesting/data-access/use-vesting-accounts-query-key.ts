import { useSolana } from '@/components/solana/use-solana'

export function useVestingAccountsQueryKey() {
  const { cluster } = useSolana()

  return ['vesting', 'accounts', { cluster }]
}
