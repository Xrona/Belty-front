export default (context, inject) => {
  inject('load', async (action, errHandler) => {
    try {
      await action()
    } catch (error) {
      if (errHandler) {
        errHandler(error)
      }
    }
  })
}
