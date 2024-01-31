"use client";

import { MdOutlinePersonAdd } from "react-icons/md";
import styles from "./profile.module.css";
import UpdateProfile from "@/app/dashboard component/updateProfileForm/UpdateProfileForm";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const Profile = () => {
  const [user, setUser] = useState();

  const { data: session } = useSession();

  const fetchUserDetails = async () => {
    try {
      const response = await fetch(`/api/profile?email=${session.user?.email}`);

      if (response.ok) {
        const data = await response.json();
        setUser(data);
        console.log(user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

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
      <div></div>
      <aside className={styles.profileContent}>{/* <UpdateProfile /> */}</aside>
    </div>
  );
};

export default Profile;
