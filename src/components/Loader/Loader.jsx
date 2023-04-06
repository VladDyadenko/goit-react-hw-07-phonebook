import { Bars } from 'react-loader-spinner';

const Loader = () => {
  return (
    <>
      <Bars
        height="40"
        width="80"
        color="#008000"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </>
  );
};

export default Loader;
