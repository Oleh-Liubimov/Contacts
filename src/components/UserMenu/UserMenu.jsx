import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../../redux/auth/selectors"
import { logOutUser } from "../../redux/auth/operations"

export default function UserMenu() {

  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  return (
    <div className="flex items-center gap-3">
      <p className="font-semibold">Welcome, {user.name}</p>
      <button type="button" onClick={()=>dispatch(logOutUser())} >Logout</button>
    </div>
  )
}
