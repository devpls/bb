import React, { useEffect } from 'react';
import { BEMHelper } from '@app/utils/bemHelper';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showsSelector } from '@app/store/selectors';
import { fetchShowViewAction } from '@app/store/actions';
import { Card, Spinner } from '@app/components';
import './Show.scss';

const classes = new BEMHelper('show-page');

export const Show = () => {
  const dispatch = useDispatch();
  const { show, episodes, isLoading, router } = useSelector(showsSelector);
  const id = router?.params?.id;
  useEffect(() => {
    if (!id) {
      return;
    }
    dispatch(fetchShowViewAction({ id }));
  }, [dispatch, id]);

  const renderEpisodeList = (data) => {
    return data?.map((episode) => {
      return (
        <li key={episode.id} className={classes('episode')}>
          <Link to={`/episodes/${episode.id}`} className={classes('episode-link')}>
            {episode.name}
          </Link>
        </li>
      );
    });
  };
  const renderEpisodes = () => {
    return episodes.map((season, index) => {
      const seasonNumber = index + 1;
      return (
        <div className={classes('season')}>
          <h3 className={classes('season-title')}>
            <span>Season:</span>
            {seasonNumber}
          </h3>
          <ul className={classes('season-list')}>{renderEpisodeList(season)}</ul>
        </div>
      );
    });
  };
  // Ideally, the spinner should work at the App level or be part of the page layout. But this will require more logic complexity (e.g. creating an additional action from requestEpic), so please forgive this copy/paste.
  const renderContent = () => {
    if (isLoading) {
      return <Spinner />;
    }
    return (
      <div className={classes('')}>
        <Card image={show?.image?.original} description={show?.summary} title={show?.name} />
        {episodes.length > 0 && (
          <>
            <h2 className={classes('title')}>Episodes:</h2>
            {renderEpisodes()}
          </>
        )}
      </div>
    );
  };

  return <>{renderContent()}</>;
};
