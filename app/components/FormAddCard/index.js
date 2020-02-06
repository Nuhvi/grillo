/**
 *
 * FormAddList
 *
 */

import { FormattedMessage } from 'react-intl';

import React from 'react';
import PropTypes from 'prop-types';
import messages from './messages';

function FormAddCard({ idList, submitHandler }) {
  return (
    <form
      onSubmit={evt => {
        evt.preventDefault();
        const form = evt.target;
        const title = form.children.title.value.trim();
        submitHandler(title, idList);
        form.reset();
      }}
    >
      <input name="title" placeholder="Add Card" />
      <button type="submit">
        <FormattedMessage {...messages.submitButton} />
      </button>
    </form>
  );
}

FormAddCard.propTypes = {
  idList: PropTypes.string.isRequired,
  submitHandler: PropTypes.func.isRequired,
};

export default FormAddCard;
