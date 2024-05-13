import CircularProgress from "@mui/joy/CircularProgress";

const Loader = () => {
  return (
    <div className="loader">
      Please Wait...
      <CircularProgress variant="solid" size="sm" />
    </div>
  );
};

export default Loader;
