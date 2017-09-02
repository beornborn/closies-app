//@flow
import moment from 'moment'

export const humanDate = (date: string) => moment(date).calendar(null, {sameDay: 'h:mm a'})
