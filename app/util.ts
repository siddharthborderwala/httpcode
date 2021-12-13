export function getGradientFromCode(code: string) {
  const c = code.slice(0, 1)
  switch (c) {
    case '1':
      return 'from-cyan-400 to-blue-500'
    case '2':
      return 'from-green-400 to-cyan-500'
    case '3':
      return 'from-purple-500 to-indigo-500'
    case '4':
      return 'from-yellow-400 to-orange-500'
    case '5':
      return 'from-orange-400 to-pink-600'
    default:
      throw new Error('Check the code for gradient')
  }
}
