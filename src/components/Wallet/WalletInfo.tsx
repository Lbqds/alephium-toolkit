import { useAlephiumBalanceContext, useBalance, useWallet } from '@alephium/web3-react';
import {  Center, rem } from '@mantine/core';
import MyTable from '../Misc/MyTable';
import CopyText from '../Misc/CopyText';
import { useEffect } from 'react';

function WalletInfo() {
  const wallet = useWallet();
  const { balance, updateBalanceForTx } = useBalance();

  const account = wallet !== undefined ? wallet.account : undefined
  console.log(`==== `, balance, account?.address)

  useEffect(() => {
    console.log(`===== useEffect`)
    try {
      updateBalanceForTx("fe9ede54e19411ccdbaaa620e1249fffeeb494266c26d2a9d1e6e6aec16d0bfe")
    } catch (error) {
      console.log(error)
    }
  })

  return (
    <Center h={rem("80%")}>
      <MyTable w={rem("60rem")} data={{
        "Network Type": account?.address,
        "Address Group": account?.group,
        "Address": <CopyText value={account?.address ?? '???'} />,
        "Public Key": <CopyText value={account?.publicKey ?? '???'} />,
        "balance": `${JSON.stringify(balance)} ALPH`
      }} />
    </Center>
  );
}

export default WalletInfo;
