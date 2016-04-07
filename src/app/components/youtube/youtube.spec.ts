import {
  it,
  describe,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';

import {Youtube} from './youtube';

describe('Youtube Component', () => {

  beforeEachProviders(() => []);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(Youtube).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});
