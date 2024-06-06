import { useSelector } from "react-redux";
import { Navigation } from "../Navigation/Navigation";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

export default function AppBar() {

    const {isLoggedIn} = useSelector(selectIsLoggedIn)

    return (
        <header className="flex justify-between items-center mb-4 border-b ">
            <Navigation />
            {isLoggedIn ? <UserMenu/> : <AuthNav/> }
      </header>
  )
}
