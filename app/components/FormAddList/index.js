/**
 *
 * FormAddList
 *
 */

import { FormattedMessage } from 'react-intl';

import React from 'react';
import PropTypes from 'prop-types';
import messages from './messages';

function FormAddList({ idBoard, newPos, submitHandler }) {
  return (
    <form
      onSubmit={evt => {
        evt.preventDefault();
        const form = evt.target;
        const title = form.children.title.value.trim();
        submitHandler(title, idBoard, newPos);
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
  idBoard: PropTypes.string.isRequired,
  newPos: PropTypes.number.isRequired,
  submitHandler: PropTypes.func.isRequired,
};

export default FormAddList;
