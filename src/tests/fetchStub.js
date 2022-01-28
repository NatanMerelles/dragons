const setupFetchStub = (data) => {
  return function fetchStub(_url) {
    return new Promise((resolve) => {
      resolve({
        json: () => Promise.resolve(data)
      })
    })
  }
}

export default setupFetchStub