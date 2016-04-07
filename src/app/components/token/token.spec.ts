import {
  it,
  describe,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';

import {Token} from './token';

describe('Token Component', () => {

  beforeEachProviders(() => []);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(Token).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});
