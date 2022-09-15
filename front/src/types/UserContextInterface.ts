
import UserPropsType from "@customTypes /UserPropsType"

 interface UserContextInterface {
    user: UserPropsType | undefined | null;
    setUser: (user: UserPropsType) => void;
  }
  export default UserContextInterface
  