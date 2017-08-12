//@flow
import { guest_only, authenticated_only } from 'Closies/app/components/auth/Roles'

const Acl = {
  Area: authenticated_only,
  Settings: authenticated_only,
  Login: guest_only,
}

export default Acl
