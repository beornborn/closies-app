//@flow
export const all_allowed = (_user: Object) => true
export const no_one_allowed = (_user: Object) => false
export const authenticated_only = (user: Object) => !!user.id
export const guest_only = (user: Object) => !user.id
