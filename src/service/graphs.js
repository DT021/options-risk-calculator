const xIntercept = (a, b) => a.x - a.y * (b.x - a.x) / (b.y - a.y)

export default {
  xIntercept
}
