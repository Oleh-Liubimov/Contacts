import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../../redux/auth/selectors"
import { logOutUser } from "../../redux/auth/operations"

export default function UserMenu() {

  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  return (
    <div className="flex items-center gap-3 px-5">
      <p className="font-semibold">Welcome, {user.name}</p>
      <button
        className="p-2 bg-red-400 rounded hover:bg-red-500 "
        type="button"
        onClick={() => dispatch(logOutUser())} >Logout</button>
    </div>
  )
}
