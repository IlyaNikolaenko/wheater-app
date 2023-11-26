import { useRouteError } from "react-router-dom";
import styles from "../../app/styles/errorPage.module.css";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className={styles.container}>
      <h1> Oops </h1>
      <p>Sorry, an unexpected error has occured</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
export default ErrorPage;
