// Simple Web3/MetaMask mock implementation
;(() => {
  try {
    console.log("Web3 mock initialized")

    // Create comprehensive mock objects
    const mockEthereum = {
      isMetaMask: false,
      networkVersion: "1",
      chainId: "0x1",
      selectedAddress: null,
      isConnected: () => false,
      request: (params) => {
        console.log("Mock ethereum.request called with:", params)
        return Promise.resolve(null)
      },
      on: (event, callback) => {
        console.log("Mock ethereum.on called for event:", event)
        return
      },
      removeListener: () => {
        return
      },
      autoRefreshOnNetworkChange: false,
      _metamask: {
        isUnlocked: () => Promise.resolve(false),
        isEnabled: () => Promise.resolve(false),
      },
    }

    // Mock Web3 object
    const mockWeb3 = {
      eth: {
        accounts: [],
        defaultAccount: null,
        defaultBlock: "latest",
        getAccounts: () => Promise.resolve([]),
        getBalance: () => Promise.resolve("0"),
        getBlockNumber: () => Promise.resolve(0),
      },
      version: {
        api: "0.0.0",
        node: "Mock Node",
        network: "0",
        ethereum: "0",
      },
    }

    // Define properties on window if available
    if (typeof window !== "undefined") {
      try {
        Object.defineProperty(window, "ethereum", {
          value: mockEthereum,
          writable: false,
          configurable: true,
        })

        Object.defineProperty(window, "web3", {
          value: mockWeb3,
          writable: false,
          configurable: true,
        })

        console.log("Web3/MetaMask mocking applied successfully")
      } catch (e) {
        console.log("Could not set Web3 mocks:", e.message)
      }
    }
  } catch (e) {
    console.log("Web3 mock initialization failed:", e.message)
  }
})()
