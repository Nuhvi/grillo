/*
 * Board Messages
 *
 * This contains all the text for the Board container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Board';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Board container!',
  },
});
