import { useGetProfileQuery } from "../redux/Features/Auth/authSlice";

const useProfile = () => {
  const token: string | null = localStorage.getItem("accessToken");
  const { data: profile } = useGetProfileQuery(token as string);
  return { profile };
};

export default useProfile;
