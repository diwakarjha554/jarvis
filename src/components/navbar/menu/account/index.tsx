import Avatar from "@/app/components/ui/Avatar";
import { SafeUser } from "@/types";

interface MenuProps {
  currentUser?: SafeUser | null;
}

const AccountBtnMenu: React.FC<MenuProps> = ({ currentUser }) => {
  return (
    <div className="flex items-center gap-2">
        <Avatar src={currentUser?.image}/>
        <span>Account</span>
    </div>
  )
}

export default AccountBtnMenu;