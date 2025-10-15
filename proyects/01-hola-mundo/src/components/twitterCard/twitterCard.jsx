import './twitterCard.css'
import { useState } from 'react';

export function TwitterCard({ children, userName, isFollowing }) {

  const [isFollowingState, setIsFollowingState] = useState(isFollowing);
  const changeState = () =>{
    setIsFollowingState(!isFollowingState);

  }

  const txt = isFollowingState ? "Siguiendo" : "Seguir";
  const buttonStyle = isFollowingState
  ? "tw-followCard-button is-following"
  : "tw-followCard-button";

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="Kiko Beats" />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonStyle} onClick={changeState}>
          <span className="tw-followCard-text">{txt}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
