import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton.jsx";

function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Something went wrong 😢
        </h1>
        <p className="mt-6 leading-7 text-gray-600 text-red-800">
          {error.data || error.message}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <p className="rounded-md bg-indigo-100 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <LinkButton to="-1">&larr; Go back</LinkButton>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Error;
