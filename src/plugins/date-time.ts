const YEAR_MS = 365 * 86400 * 1000
const MONTH_MS = 30 * 86400 * 1000
const WEEK_MS = 7 * 86400 * 1000
const DAY_MS = 1 * 86400 * 1000
const HOUR_MS = 60 * 60 * 1000
const MINUTE_MS = 1 * 60 * 1000

const TIME_AGO_RANGES = [
  { minMs: YEAR_MS, unit: 'year' },
  { minMs: MONTH_MS, unit: 'month' },
  { minMs: WEEK_MS, unit: 'week' },
  { minMs: DAY_MS, unit: 'day' },
  { minMs: HOUR_MS, unit: 'hour' },
  { minMs: MINUTE_MS, unit: 'minute' },
]

export function timeAgo(time: Date) {
  const durationMs = Date.now() - time.getTime()
  for (const ms of TIME_AGO_RANGES) {
    const value = Math.floor(durationMs / ms.minMs)
    if (value > 0) return [value, ms.unit, 'ago'].join(' ')
  }
  if (durationMs > 0) return 'less 1 minute'
  return 'future'
}
