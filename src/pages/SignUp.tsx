import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SignUpForm from "../components/ui/SignUpForm";
import { auth } from "../lib/firebase";
import { setUser } from "../redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const path = location?.state?.path?.pathname || "/";

  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(setUser(user?.email));
    });

    if (user.email) {
      navigate(path, { replace: true });
    }
  }, [dispatch, user.email, path, navigate]);

  return (
    <div className="flex items-center justify-center h-screen my-8 md:my-0">
      <div className="card lg:card-side bg-base-200 shadow-xl mt-16">
        <figure>
          <img
            className="hidden lg:block w-full h-full object-cover"
            src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Sign Up!</h2>
          <p className="font-light max-w-[300px]">
            Please provide your valid email and a password
          </p>
          <SignUpForm />
          <p className="text-sm">
            Already have an account,{" "}
            <span
              onClick={() => navigate("/sign-in")}
              className="link link-secondary"
            >
              sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
