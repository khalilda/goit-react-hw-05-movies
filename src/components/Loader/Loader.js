import { ThreeDots } from 'react-loader-spinner';
import { LoaderWrapp } from './components/Loader/Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapp>
      <ThreeDots
        height={80}
        width={80}
        color="#e50914"
        radius="9"
        ariaLabel="three dots loading"
        wrapperClassName=""
        wrapperStyles={{}}
        visible={true}
      />
    </LoaderWrapp>
  );
};

export default Loader;
