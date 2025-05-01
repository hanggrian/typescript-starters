import {JSX} from 'react';

export default function View(): JSX.Element {
  return (
      <label data-testid='view-id' className='view-class'>Hello World</label>
  );
}
