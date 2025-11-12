import { useSolana } from '@/components/solana/use-solana'
import { WalletDropdown } from '@/components/wallet-dropdown'
import { AppHero } from '@/components/app-hero'
import { VestingUiButtonInitialize } from './ui/vesting-ui-button-initialize'
import { VestingUiList } from './ui/vesting-ui-list'
import { VestingUiProgramExplorerLink } from './ui/vesting-ui-program-explorer-link'
import { VestingUiProgramGuard } from './ui/vesting-ui-program-guard'

export default function VestingFeature() {
  const { account } = useSolana()

  return (
    <VestingUiProgramGuard>
      <AppHero
        title="Vesting"
        subtitle={
          account
            ? "Initialize a new vesting onchain by clicking the button. Use the program's methods (increment, decrement, set, and close) to change the state of the account."
            : 'Select a wallet to run the program.'
        }
      >
        <p className="mb-6">
          <VestingUiProgramExplorerLink />
        </p>
        {account ? (
          <VestingUiButtonInitialize account={account} />
        ) : (
          <div style={{ display: 'inline-block' }}>
            <WalletDropdown />
          </div>
        )}
      </AppHero>
      {account ? <VestingUiList account={account} /> : null}
    </VestingUiProgramGuard>
  )
}
