import { Player } from '../types/Player';

export const PlayerPulldown = ({Players}: {Players: Player[]}) => {

  return(
    <ul>
      {Players.map((player) => (
        <li key={player.id}>
          <span>{player.id}</span>
          <span>{player.name}</span>
        </li>
      ))}
    </ul>
  );
};