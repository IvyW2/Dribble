/* global React */
import { $div } from '..';

export class Container extends React.Component {
  render() {
    const { children, style } = this.props;
    const classes = (this.props.className || '').split(' ');
    classes.push('container');
    const props = { className: classes.join(' ').trim(), style };
    return $div(props, ...([].concat(children)));
  }
}
export const $Container = (props, ...children) =>
  React.createElement(Container, props, ...children);
