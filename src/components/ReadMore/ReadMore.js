import PT from 'prop-types';
import { useState } from 'react';
import { ReadorHide, Text } from './ReadMore.styled';

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <Text>
      {isReadMore ? text.slice(0, 150) : text}
      <ReadorHide onClick={toggleReadMore}>
        {isReadMore ? '...read more' : ' show less'}
      </ReadorHide>
    </Text>
  );
};

ReadMore.propTypes = {
  children: PT.node,
};

export default ReadMore;
