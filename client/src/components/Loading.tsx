import spinner from "../assets/Spinner.svg";

const Loading = () => {
  return (
    <div className="flex justify-center align-middle">
      <img src={spinner} alt="Loading" />
    </div>
  );
};

export default Loading;
