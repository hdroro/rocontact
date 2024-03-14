import { Rings } from "react-loader-spinner";

function Loading() {
  return (
    <div className="loading-container">
      <Rings color="#c3392c" height={80} width={80} />
      <div>Loading data ...</div>
    </div>
  );
}

export default Loading;
