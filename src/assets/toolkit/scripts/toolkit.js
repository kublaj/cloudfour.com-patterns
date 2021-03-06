/**
 * Toolkit JavaScript
 */

'use strict';

import svgxuse from 'svgxuse';
import {arrayFromSelector} from './lib/dom/core';
import {FloatLabel} from './lib/component/float-label';
import {Sky} from './lib/component/sky';
import {ElasticTextarea} from './lib/component/elastic-textarea';
import {FactSlider} from './lib/component/fact-slider';

(function() {

  arrayFromSelector('.js-FunFacts').map(element => {
    new FactSlider(element);
  });

  arrayFromSelector('.js-FloatLabel').map(element => {
    new FloatLabel(element, {
      eventName: 'keyup'
    });
  });

  /**
   * TODO: Make this smart enough to not just fail if `.Sky` has no nav.
   * Or better yet, hook it to a js-* class only when a nav is included.
   */
  arrayFromSelector('.Sky').map(element => {
    var menu = element.querySelector('.Sky-nav-menu');
    var toggle = element.querySelector('.Sky-nav-controls-skipToMenu');

    if (menu && toggle) {
      new Sky({
        root: element,
        menu: menu,
        toggle: toggle
      })
    }
  });

  arrayFromSelector('.js-ElasticTextarea').map(element => {
    new ElasticTextarea(element, {
      eventName: 'keyup'
    });
  });

}());
