import React from 'react';
import TestRenderer from 'react-test-renderer';

const Link = props => <a href={props.page}>{props.children}</a>;

const testRenderer = TestRenderer.create(
  <Link page="facebook.com">Facebook</Link>
);

console.log(testRenderer.toJSON());
