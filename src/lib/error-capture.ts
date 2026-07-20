let lastCapturedError: Error | undefined

function setupErrorCapture() {
  if (typeof process !== 'undefined') {
    process.on('unhandledRejection', (reason) => {
      lastCapturedError = reason instanceof Error ? reason : new Error(String(reason))
    })
    process.on('uncaughtException', (error) => {
      lastCapturedError = error
    })
  }
}

setupErrorCapture()

export function consumeLastCapturedError(): Error | undefined {
  const error = lastCapturedError
  lastCapturedError = undefined
  return error
}
