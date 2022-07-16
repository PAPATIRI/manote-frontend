import PropTypes from 'prop-types';

const { default: styled } = require('styled-components');

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  padding: 0 1rem;
  border: 2px solid #68d391;
  border-radius: 8px;
`;

export default function Message(props) {
  const { text } = props;
  return (
    <MessageContainer>
      <p>{text}</p>
    </MessageContainer>
  );
}

Message.propTypes = {
  text: PropTypes.node.isRequired
};
