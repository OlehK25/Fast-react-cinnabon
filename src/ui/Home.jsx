import CreateUser from "../features/user/CreateUser.jsx";
import { useSelector } from "react-redux";
import Button from "./Button.jsx";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8  text-xl font-semibold md:text-3xl ">
        The best cinnabons
        <img className="inline h-[45px] w-[45px] " src="/cinnabon.png" alt="" />
        <br />
        <span className="text-sky-600">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
