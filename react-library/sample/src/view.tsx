import LabelExtImpl from 'library-extension/label-ext-impl';
import type { JSX } from 'react';

export default function View(): JSX.Element {
  const impl =
      new LabelExtImpl({
        getX: () => 50,
        getY: () => 50,
        getWidth: () => 300,
        getHeight: () => 100,
      });
  return (
      <label>{`${impl.getSize()} pixels at ${impl.getPosition()}.`}</label>
  );
}
