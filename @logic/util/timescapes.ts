export default {
  wait: after => new Promise<void>((resolve, reject) => {
    setTimeout(() => resolve(), after)
  })
}
