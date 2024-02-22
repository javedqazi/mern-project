import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
export default function signIn() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span
              className="px-3 py-1 
          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
           rounded-lg text-white"
            >
              Qazi's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            this is ademo project.you can sign with your email and password or
            with Google.
          </p>
        </div>

        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <div>
                <Label value="Your UserName" />
                <TextInput type="text" placeholder=" UserName" id="username" />
              </div>
              <div>
                <Label value="Your Email " />
                <TextInput type="text" placeholder="@company.com" id="email" />
              </div>
              <div>
                <Label value="Your Password" />
                <TextInput type="text" placeholder=" Password" id="password" />
              </div>
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/signin" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
