//@flow
import { newContext } from 'immutability-helper'
import _ from 'lodash'

const update = newContext()

function merger(original, value) {
  if (!_.isObject(value)) {
    return value
  } else if (_.isArray(value)) {
    return value
  } else {
    const newValue = {...value}
    const newOriginal = {...original}
    if (newValue.toDelete) {
      newValue.toDelete.forEach(id => delete newOriginal[id])
      delete newValue.toDelete
    }
    return _.mergeWith(newOriginal, newValue, merger)
  }
}

update.extend('$deepMerge', (value, original) => {
  return _.mergeWith({...original}, {...value}, merger)
})

export default update
