//@flow
import { guest_only, authenticated_only } from 'Closies/app/components/auth__authorizer/Roles'

const Acl = {
  Area: authenticated_only,
  Settings: authenticated_only,
  Closies: authenticated_only,
  Groups: authenticated_only,
  GroupView: authenticated_only,
  CurrentInvite: authenticated_only,
  AddGroup: authenticated_only,
  Activity: authenticated_only,
  NewActivity: authenticated_only,
  SelectGroups: authenticated_only,
  ActivityList: authenticated_only,
  EditProfile: authenticated_only,
  ViewProfile: authenticated_only,
  JoinGroup: authenticated_only,
  Login: guest_only,
}

export default Acl
