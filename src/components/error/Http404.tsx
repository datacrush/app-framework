import { Link } from "react-router";

export const Http404 = () => {
  return (
    <div style={styles.container}>
      <h1 className="cheesy-blink-gradient">404 - Page Not Found</h1>
      <p style={styles.text}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/secure">Start Over</Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center" as const,
    padding: "2rem",
  },
  text: {
    fontSize: "1.2rem",
    marginBottom: "1rem",
  },
};
