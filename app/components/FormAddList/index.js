/**
 *
 * FormAddList
 *
 */

import { FormattedMessage } from 'react-intl';

import React from 'react';
import PropTypes from 'prop-types';
import messages from './messages';

function FormAddList({ submitHandler }) {
  return (
    <form
      onSubmit={evt => {
        evt.preventDefault();
        const form = evt.target;
        const title = form.children.title.value.trim();
        submitHandler(title);
        form.reset();
      }}
    >
      <input name="title" placeholder="add list" />
      <button type="submit">
        <FormattedMessage {...messages.submitButton} />
      </button>
    </form>
  );
}

FormAddList.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};

export default FormAddList;
