import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as { statusText?: string; message: string };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-text-theme">
    <h1 className="text-4xl font-semibold text-red-600">Oops!</h1>
    <p className="text-lg font-medium ">Sorry, an unexpected error has occurred.</p>
    <p className="text-md mt-2 italic ">
      <div>{error.statusText || error.message}</div>
    </p>
  </div>
  );
}