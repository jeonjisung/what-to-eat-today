import type { TimeSlot } from '@/types/recommendation'

export function getCurrentTimeSlot(): TimeSlot {
    const hour = new Date().getHours()

    if (hour >= 5 && hour <= 10) return 'breakfast'
    if (hour >= 11 && hour <= 14) return 'lunch'
    if (hour >= 17 && hour <= 21) return 'dinner'
    return 'late'
}
