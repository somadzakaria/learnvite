import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
  const username = useLogin();

  return (
    <div>
      <h1>Profile Page</h1>
      <h1>Usermu : {username}</h1>
    </div>
  );
};

export default ProfilePage;
