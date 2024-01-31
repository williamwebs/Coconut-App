"use client";

import { useEffect, useState } from "react";
import styles from "./updateProfile.module.css";
import { useSession } from "next-auth/react";

const UpdateProfile = () => {
  const [user, setUser] = useState({});

  const { data: session } = useSession();

  const fetchUserDetails = async () => {
    try {
      const response = await fetch(`/api/profile?email=${session.user?.email}`);

      if (response) {
        console.log(response);
      } else {
        console.log(response);
      }
      // const data = await response.json();

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const response = await fetch("/api/profile");
  //     const data = await response.json();
  //     setUser(data);
  //   };

  //   fetchUser();
  // }, []);

  return (
    <div className="font-league">
      <form>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 w-full mb-5">
          <div className="w-full sm:w-1/2">
            <label htmlFor="firstname" className={styles.label}>
              First Name
            </label>
            <input type="text" className={styles.inputField} />
          </div>
          <div className="w-full sm:w-1/2">
            <label htmlFor="lastname" className={styles.label}>
              Last Name
            </label>
            <input type="text" className={styles.inputField} />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 w-full mb-5">
          <div className="w-full sm:w-1/2">
            <label htmlFor="email" className={styles.label}>
              Email Address
            </label>
            <input type="email" readOnly className={styles.inputField} />
          </div>
          <div className="w-full sm:w-1/2">
            <label htmlFor="number" className={styles.label}>
              Phone
            </label>
            <input type="tel" className={styles.inputField} />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 w-full mb-5">
          <div className="w-full sm:w-1/2">
            <label htmlFor="nick" className={styles.label}>
              Nickname (optional)
            </label>
            <input type="text" className={styles.inputField} />
          </div>
          <div className="w-full sm:w-1/2">
            <label htmlFor="dob" className={styles.label}>
              DOB
            </label>
            <input type="date" className={styles.inputField} />
          </div>
        </div>
        <div className="mt-5 mx-auto pb-14 sm:pb-5">
          <button className="secondary_btn w-full md:w-1/4 float-right">
            Update profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
