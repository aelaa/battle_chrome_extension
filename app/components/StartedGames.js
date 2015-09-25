const StartedGames = (props) => {
  const messages = props.messages;
  return (
    <dl>
      <dt><h4>Started games <span className='badge'>{messages.length}</span></h4></dt>
      {messages.length > 0 ?
        messages.map(function(message) {
          href = settings.host + '/games/' + message.id;
          nicknames = _.pluck(message.players, 'nickname');
          playerLangs = _.pluck(message.players, 'lang');

          return (
            <dd>
              <span>{playerLangs.join('/')} : </span>
              <a href={href} target='_blank' className='game-link'>
                {nicknames.join(' vs ')}
              </a>
            </dd>
            );
        }, this)
        : ''
      }
    </dl>
  );
};

export default StartedGames;
