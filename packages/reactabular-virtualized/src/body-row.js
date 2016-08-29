import React from 'react';
import { bodyRowContextTypes, bodyRowTypes } from './types';

class BodyRow extends React.Component {
  constructor(props) {
    super(props);

    this.ref = null;
  }
  componentDidMount() {
    console.log('row did mount', this.ref.offsetHeight); // eslint-disable-line no-console

    this.context.updateHeight(
      this.props['data-rowindex'],
      this.ref.offsetHeight
    );
  }
  render() {
    return React.createElement(
      'tr',
      {
        ...this.props,
        ref: e => {
          if (e) {
            this.ref = e;
          }
        }
      }
    );
  }
}
BodyRow.contextTypes = bodyRowContextTypes;
BodyRow.propTypes = bodyRowTypes;

export default BodyRow;
