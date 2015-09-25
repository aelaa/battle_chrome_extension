import OpenedGame from './OpenedGame';

const OpenedGames = (props) => {
  const messages = props.messages;
  return (
    <dl>
      <dt>
        <h4>Opened games <span className='badge'>{messages.length}</span></h4>
      </dt>

      {
        messages.length > 0 ?
          messages.map((message) => {
            return (
              <dd><OpenedGame key={message.id} message={message} /></dd>
              );
          }, this)
          : ''
      }
    </dl>
  );
};

export default OpenedGames;
