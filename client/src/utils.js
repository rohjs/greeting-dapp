const getWeb3 = () => {
  return new Promise((resolve, reject) => {
    window.addEventListener('load', async () => {
      if (!window.ethereum) {
        reject('Must install MetaMask')
      }

      const web3 = new Web3(window.ethereum)

      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' })
        resolve(web3)
      } catch (error) {
        reject(error)
      }
    })
  })
}

const getContract = async (web3) => {
  const data = await $.getJSON('./contracts/Greeting.json')
  const netId = await web3.eth.net.getId()
  const deployedNetwork = data.networks[netId]

  const greeting = new web3.eth.Contract(
    data.abi,
    deployedNetwork && deployedNetwork.address
  )

  return greeting
}
