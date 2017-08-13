//@flow
import { newContext } from 'immutability-helper'
import _ from 'lodash'

const update = newContext()
// TODO carefully analyze if this does what we need and can it be done faster or not

function merger(original2, value2) {
  if (!_.isObject(value2)) {
    return value2
  } else if (_.isArray(value2)) {
    return _.clone(value2)
  } else {
    const copy = _.merge({}, original2)
    return _.mergeWith(copy, value2, merger)
  }
}

update.extend('$deepMerge', (value, original) => {
  const value2 = _.merge({}, value)
  const original2 = _.merge({}, original)
  return _.mergeWith(original2, value2, merger)
})

export default update
