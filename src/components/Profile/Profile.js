import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
  const { isAuthenticated, user } = useAuth0();
  console.log(
    "🚀 ~ file: Profile.js:8 ~ Profile ~ isAuthenticated, user",
    isAuthenticated,
    user
  );

  if (isAuthenticated) {
    const profileData = {
      isAuthenticated,
      ...user,
    };
    localStorage.setItem("userInformation", JSON.stringify(profileData));
  }

  return (
    <div>
      <img src={user.picture} />
      <p>{user.name}</p>
    </div>
  );
};
