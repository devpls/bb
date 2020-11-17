import React, { useEffect } from 'react';
import { BEMHelper } from '@app/utils/bemHelper';
import { Card, Spinner } from '@app/components';
import { useDispatch, useSelector } from 'react-redux';
import { episodeViewSelector } from '@app/store/selectors';
import { fetchEpisodeAction } from '@app/store/actions';

const classes = new BEMHelper('episode-page');
export const Episode = () => {
  const dispatch = useDispatch();
  const { data, isLoading, router } = useSelector(episodeViewSelector);
  const id = router?.params?.id;
  useEffect(() => {
    if (!id) {
      return;
    }
    dispatch(fetchEpisodeAction({ id }));
  }, [dispatch, id]);
  // Ideally, the spinner should work at the App level or be part of the page layout. But this will require more logic complexity (e.g. creating an additional action from requestEpic), so please forgive this copy/paste.
  const renderContent = () => {
    if (isLoading) {
      return <Spinner />;
    }
    return (
      <div className={classes('')}>
        <Card image={data?.image?.original} description={data?.summary} title={data?.name} />
      </div>
    );
  };

  return <>{renderContent()}</>;
};
