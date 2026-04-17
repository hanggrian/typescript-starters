import LabelImpl from './label-impl';
import type { JSX } from 'react';

export default function View(): JSX.Element {
  const impl =
      new LabelImpl({
        getWidth: () => 300,
        getHeight: () => 100,
      });
  return (
      <label>{`${impl.getSize()} pixels.`}</label>
  );
}
