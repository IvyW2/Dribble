import React from 'react';

export const makeElement = (name) => {
  return (classNameOrProps, ...children) => {
    const props = (typeof classNameOrProps === 'string') ? { className: classNameOrProps } : classNameOrProps;
    return React.createElement(name, props, ...children);
  }
}

export default { makeElement };
