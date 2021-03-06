'use strict';

/**
 * TODO: Like all this project's JavaScript, this could probably benefit from
 * some cleanup and testing.
 */

export class ElasticTextarea {
  constructor (element, {
    minRows = element.getAttribute('rows') || 2,
    eventName = 'input',
    update = true
  } = {}) {
    this.element = element;
    this.minRows = minRows;
    this.lastContent = this.content;

    this.element.addEventListener(eventName, () => this.update());

    if (update) {
      this.update();
    }
  }

  update () {
    if (this.content.length > this.lastContent.length) {
      this.grow();
    } else {
      this.shrink();
    }

    this.lastContent = this.content;
  }

  grow () {
    while (this.isScrolling) {
      this.rows++;
    }
  }

  shrink () {
    for (var i = this.rows; i >= this.minRows; i--) {
      this.rows = i;

      if (this.isScrolling) {
        this.grow();
        break;
      }
    }
  }

  set rows (num) {
    this.element.setAttribute('rows', Math.max(num, this.minRows));
  }

  get rows () {
    return parseInt(this.element.getAttribute('rows') || this.minRows, 10);
  }

  get content () {
    return this.element.value;
  }

  get isScrolling () {
    return this.element.scrollHeight > this.element.clientHeight;
  }
};
