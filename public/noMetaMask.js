// This script prevents MetaMask detection
;(() => {
  if (typeof window === "undefined") return

  try {
    // Disable Web3 and MetaMask detection
    window.ethereum = undefined
    window.web3 = undefined

    // Prevent any potential MetaMask detection
    Object.defineProperty(window, "ethereum", {
      value: undefined,
      writable: false,
      configurable: false,
    })

    // Block any potential Web3 detection
    Object.defineProperty(window, "web3", {
      value: undefined,
      writable: false,
      configurable: false,
    })

    console.log("MetaMask detection blocked")
  } catch (e) {
    console.log("MetaMask blocker failed:", e.message)
  }
})()
