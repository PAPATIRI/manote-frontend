import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';

const MessageContainer = styled.div(({ danger }) => [
  danger ? tw`border-red-500` : tw`border-green-500`,
  tw`flex flex-col items-center justify-center m-4 p-4 border-2 rounded`
]);

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
