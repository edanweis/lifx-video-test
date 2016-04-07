import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {LifxService} from './lifx-service';


describe('LifxService Service', () => {

  beforeEachProviders(() => [LifxService]);


  it('should ...', inject([LifxService], (service: LifxService) => {

  }));

});
