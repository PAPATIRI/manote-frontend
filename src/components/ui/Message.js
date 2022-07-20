import PropTypes from 'prop-types';

const { default: styled } = require('styled-components');

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  padding: 0 1rem;
  border: 2px solid ${(props) => (props === 'danger' ? '#f56565' : '#68d391')};
  border-radius: 8px;
`;

export default function Message(props) {
  const { type, text } = props;
  return (
    <div>
      {type === 'error' ? (
        <MessageContainer>
          <p>❌ {text}</p>
        </MessageContainer>
      ) : (
        <MessageContainer>
          <p>✅ {text}</p>
        </MessageContainer>
      )}
    </div>
  );
}

Message.propTypes = {
  text: PropTypes.node.isRequired,
  type: PropTypes.node.isRequired
};
