/**
 *
 * BoardPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectBoardPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function BoardPage() {
  useInjectReducer({ key: 'boardPage', reducer });
  useInjectSaga({ key: 'boardPage', saga });

  return (
    <div>
      <Helmet>
        <title>BoardPage</title>
        <meta name="description" content="Description of BoardPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

BoardPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  boardPage: makeSelectBoardPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(BoardPage);
