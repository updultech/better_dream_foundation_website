// Complete Web3/MetaMask mock implementation
;(() => {
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

  // Mock Web3 provider
  const mockProvider = {
    isMetaMask: false,
    networkVersion: "1",
    chainId: "0x1",
    selectedAddress: null,
    isConnected: () => false,
    request: (params) => {
      console.log("Mock provider.request called with:", params)
      return Promise.resolve(null)
    },
    send: (params, callback) => {
      console.log("Mock provider.send called with:", params)
      callback && callback(null, { result: null })
      return Promise.resolve({ result: null })
    },
    sendAsync: (params, callback) => {
      console.log("Mock provider.sendAsync called with:", params)
      callback && callback(null, { result: null })
      return Promise.resolve({ result: null })
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
      getCode: () => Promise.resolve("0x"),
      getCoinbase: () => Promise.resolve(null),
      getGasPrice: () => Promise.resolve("0"),
      getHashrate: () => Promise.resolve(0),
      getPastLogs: () => Promise.resolve([]),
      getStorageAt: () => Promise.resolve("0x"),
      getTransactionCount: () => Promise.resolve(0),
      getTransactionReceipt: () => Promise.resolve(null),
      getTransaction: () => Promise.resolve(null),
      getBlockTransactionCount: () => Promise.resolve(0),
      getBlock: () => Promise.resolve(null),
      getUncle: () => Promise.resolve(null),
      getWork: () => Promise.resolve([]),
      isMining: () => false,
      isSyncing: () => false,
      net: {
        getId: () => Promise.resolve(1),
        isListening: () => Promise.resolve(true),
        getPeerCount: () => Promise.resolve(0),
      },
      personal: {
        ecRecover: () => Promise.resolve(""),
        importRawKey: () => Promise.resolve(""),
        listAccounts: () => Promise.resolve([]),
        lockAccount: () => Promise.resolve(true),
        newAccount: () => Promise.resolve(""),
        unlockAccount: () => Promise.resolve(true),
        sendTransaction: () => Promise.resolve(""),
        sign: () => Promise.resolve(""),
      },
    },
    version: {
      api: "0.0.0",
      node: "Mock Node",
      network: "0",
      ethereum: "0",
      whisper: "0",
    },
  }

  // Mock ChromeTransport
  const mockChromeTransport = {
    connectChrome: () => {
      console.log("Mock ChromeTransport.connectChrome called")
      return Promise.resolve({
        connected: false,
        send: () => Promise.resolve(null),
        close: () => Promise.resolve(),
      })
    },
  }

  // Define properties on window
  try {
    // Define ethereum
    Object.defineProperty(window, "ethereum", {
      value: mockEthereum,
      writable: false,
      configurable: true,
    })

    // Define web3
    Object.defineProperty(window, "web3", {
      value: mockWeb3,
      writable: false,
      configurable: true,
    })

    // Define ChromeTransport
    if (!window.ChromeTransport) {
      window.ChromeTransport = mockChromeTransport
    }

    // Mock chrome.runtime
    if (window.chrome) {
      window.chrome.runtime = {
        connect: () => ({
          onMessage: { addListener: () => {} },
          onDisconnect: { addListener: () => {} },
          postMessage: () => {},
        }),
        sendMessage: () => {},
      }
    }

    // Intercept any attempts to inject scripts
    const originalCreateElement = document.createElement
    document.createElement = (tagName) => {
      const element = originalCreateElement.call(document, tagName)
      if (tagName.toLowerCase() === "script") {
        // Monitor script src attribute
        const originalSetAttribute = element.setAttribute
        element.setAttribute = function (name, value) {
          if (
            name === "src" &&
            (value.includes("metamask") ||
              value.includes("web3") ||
              value.includes("ethereum") ||
              value.includes("inject") ||
              value.includes("extension"))
          ) {
            console.log("Blocked loading of potential Web3 script:", value)
            return
          }
          return originalSetAttribute.call(this, name, value)
        }
      }
      return element
    }

    console.log("Complete Web3/MetaMask mocking applied")
  } catch (e) {
    console.error("Error setting up Web3 mocks:", e)
  }
})()
