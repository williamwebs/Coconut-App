import { MdOutlinePersonAdd, MdPersonAdd } from "react-icons/md";
import styles from "./profile.module.css";
import UpdateProfile from "@/app/dashboard component/updateProfileForm/UpdateProfileForm";

const Profile = () => {
  return (
    <div className={styles.container}>
      <aside className={styles.profilePicture}>
        <div className="p-2 text-center">
          <MdOutlinePersonAdd className="text-9xl text-gray-900 mx-auto" />
          <span className="text-xs">
            click to change profile picture / drag n drop your photo here
          </span>
        </div>
      </aside>
      <aside className={styles.profileContent}>
        <UpdateProfile />
      </aside>
    </div>
  );
};

export default Profile;
