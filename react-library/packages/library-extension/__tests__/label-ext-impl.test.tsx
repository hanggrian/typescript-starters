import {afterEach, beforeEach, describe, expect, it} from 'vitest';
import '@testing-library/jest-dom';
import {render} from '@testing-library/react';
import LabelExtImpl from '../src/label-ext-impl';
import sinon, {SinonStub} from 'sinon';

type MockedLabelExt = {
  getX: SinonStub<any[], number>,
  getY: SinonStub<any[], number>,
};

describe(
    'LabelExtImpl',
    () => {
      let label: MockedLabelExt;
      let app;

      beforeEach(() => {
        label = {
          getX: sinon.stub(),
          getY: sinon.stub(),
        };
        app = render(<div></div>);
      });

      it(
          'test',
          () => {
            label.getX.returns(0);
            label.getY.returns(1);
            expect(new LabelExtImpl(label).getPosition()).toBe('(0,1)');
            sinon.assert.calledOnce(label.getX);
            sinon.assert.calledOnce(label.getY);
          },
      );

      afterEach(() => sinon.restore());
    },
);
