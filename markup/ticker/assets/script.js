class TwpxTicker {
  constructor(element, selector) {
    this.element = element;
    this.selector = selector;
    this.speed = t.dataset.speed || 0.25;
    this.pausable = t.dataset.pausable;
    this.reverse = t.dataset.reverse;
    this.paused = !1;
    this.parent = t.parentElement;
    this.parentProps = this.parent.getBoundingClientRect();
    this.content = t.children[0];
    this.innerContent = this.content.innerHTML;
    this.wrapStyles = '';
    this.offset = 0;
    this._setupWrapper();
    this._setupContent();
    this._setupEvents();
    this.wrapper.appendChild(this.content);
    this.element.appendChild(this.wrapper);
  }

  _setupWrapper() {
    (this.wrapper = document.createElement('div')),
      this.wrapper.classList.add('marquee3k__wrapper'),
      (this.wrapper.style.whiteSpace = 'nowrap'),
      (this.wrapper.style.opacity = '0'),
      (this.wrapper.style.transition = 'opacity .5s ease'),
      setTimeout(() => {
        this.wrapper.style.opacity = '1';
      }, 3000);
  }

  _setupContent() {
    this.content.classList.add(`${this.selector}__copy`),
      (this.content.style.opacity = '1'),
      (this.content.style.whiteSpace = 'nowrap'),
      (this.content.style.paddingRight = '60px'),
      (this.content.style.display = 'inline-block'),
      (this.contentWidth = this.content.offsetWidth),
      (this.requiredReps =
        this.contentWidth > this.parentProps.width
          ? 2
          : Math.ceil(
              (this.parentProps.width - this.contentWidth) / this.contentWidth
            ) + 1);
    for (let t = 0; t < this.requiredReps; t++) this._createClone();
    this.reverse && (this.offset = -1 * this.contentWidth),
      this.element.classList.add('is-init');
  }

  _setupEvents() {
    this.element.addEventListener('mouseenter', () => {
      this.pausable && (this.paused = !0);
    }),
      this.element.addEventListener('mouseleave', () => {
        this.pausable && (this.paused = !1);
      });
  }

  _createClone() {
    const t = this.content.cloneNode(!0);
    (t.style.display = 'inline-block'),
      t.classList.add(`${this.selector}__copy`),
      this.wrapper.appendChild(t);
  }

  animate() {
    if (!this.paused) {
      const t = this.reverse
          ? this.offset < 0
          : this.offset > -1 * this.contentWidth,
        e = this.reverse ? -1 : 1,
        s = this.reverse ? -1 * this.contentWidth : 0;
      t ? (this.offset -= this.speed * e) : (this.offset = s),
        (this.wrapper.style.whiteSpace = 'nowrap'),
        (this.wrapper.style.transform = `translate(${this.offset}px, 0) translateZ(0)`);
    }
  }

  _refresh() {
    this.contentWidth = this.content.offsetWidth;
  }

  repopulate(t, e) {
    if (((this.contentWidth = this.content.offsetWidth), e)) {
      const e = Math.ceil(t / this.contentWidth) + 1;
      for (let t = 0; t < e; t++) this._createClone();
    }
  }

  static refresh(t) {
    MARQUEES[t]._refresh();
  }

  static pause(t) {
    MARQUEES[t].paused = !0;
  }

  static play(t) {
    MARQUEES[t].paused = !1;
  }

  static toggle(t) {
    MARQUEES[t].paused = !MARQUEES[t].paused;
  }

  static refreshAll() {
    for (let t = 0; t < MARQUEES.length; t++) MARQUEES[t]._refresh();
  }

  static pauseAll() {
    for (let t = 0; t < MARQUEES.length; t++) MARQUEES[t].paused = !0;
  }

  static playAll() {
    for (let t = 0; t < MARQUEES.length; t++) MARQUEES[t].paused = !1;
  }

  static toggleAll() {
    for (let t = 0; t < MARQUEES.length; t++)
      MARQUEES[t].paused = !MARQUEES[t].paused;
  }

  static init(s = { selector: 'marquee3k' }) {
    t && window.cancelAnimationFrame(t), (window.MARQUEES = []);
    const i = Array.from(document.querySelectorAll(`.${s.selector}`));
    let n,
      r = window.innerWidth;
    for (let t = 0; t < i.length; t++) {
      const n = i[t],
        r = new e(n, s);
      MARQUEES.push(r);
    }
    !(function e() {
      for (let t = 0; t < MARQUEES.length; t++) MARQUEES[t].animate();
      t = window.requestAnimationFrame(e);
    })(),
      window.addEventListener('resize', () => {
        clearTimeout(n),
          (n = setTimeout(() => {
            const t = r < window.innerWidth,
              e = window.innerWidth - r;
            for (let s = 0; s < MARQUEES.length; s++)
              MARQUEES[s].repopulate(e, t);
            r = this.innerWidth;
          }, 250));
      });
  }
}

Marquee3k.init();
