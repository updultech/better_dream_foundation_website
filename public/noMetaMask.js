// This script prevents MetaMask detection
;(() => {
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

  // Intercept any attempts to check for MetaMask
  const originalHasOwnProperty = Object.prototype.hasOwnProperty
  Object.prototype.hasOwnProperty = function (prop) {
    if (prop === "ethereum" || prop === "web3") {
      return false
    }
    return originalHasOwnProperty.call(this, prop)
  }
})()
