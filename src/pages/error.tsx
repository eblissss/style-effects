import { useRouteError } from "react-router-dom";
import Menu from "../menu";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  const formatError = error as { statusText: string, message: string }

  return (
    <>
    <Menu />
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{formatError.statusText || formatError.message}</i>
      </p>
    </div>
    </>
  );
}