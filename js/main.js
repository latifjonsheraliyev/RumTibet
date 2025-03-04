(() => {
  var e = {
      911: function (e) {
        e.exports = (function () {
          "use strict";
          var e = {
              d: function (t, i) {
                for (var s in i)
                  e.o(i, s) &&
                    !e.o(t, s) &&
                    Object.defineProperty(t, s, { enumerable: !0, get: i[s] });
              },
              o: function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              },
            },
            t = {};
          e.d(t, {
            default: function () {
              return B;
            },
          });
          var i = {
              days: "days",
              months: "months",
              years: "years",
              day: "day",
              month: "month",
              year: "year",
              eventChangeViewDate: "changeViewDate",
              eventChangeCurrentView: "changeCurrentView",
              eventChangeFocusDate: "changeFocusDate",
              eventChangeSelectedDate: "changeSelectedDate",
              eventChangeTime: "changeTime",
              eventChangeLastSelectedDate: "changeLastSelectedDate",
              actionSelectDate: "selectDate",
              actionUnselectDate: "unselectDate",
              cssClassWeekend: "-weekend-",
            },
            s = {
              classes: "",
              inline: !1,
              locale: {
                days: [
                  "Воскресенье",
                  "Понедельник",
                  "Вторник",
                  "Среда",
                  "Четверг",
                  "Пятница",
                  "Суббота",
                ],
                daysShort: ["Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб"],
                daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                months: [
                  "Январь",
                  "Февраль",
                  "Март",
                  "Апрель",
                  "Май",
                  "Июнь",
                  "Июль",
                  "Август",
                  "Сентябрь",
                  "Октябрь",
                  "Ноябрь",
                  "Декабрь",
                ],
                monthsShort: [
                  "Янв",
                  "Фев",
                  "Мар",
                  "Апр",
                  "Май",
                  "Июн",
                  "Июл",
                  "Авг",
                  "Сен",
                  "Окт",
                  "Ноя",
                  "Дек",
                ],
                today: "Сегодня",
                clear: "Очистить",
                dateFormat: "dd.MM.yyyy",
                timeFormat: "HH:mm",
                firstDay: 1,
              },
              startDate: new Date(),
              firstDay: "",
              weekends: [6, 0],
              dateFormat: "",
              altField: "",
              altFieldDateFormat: "T",
              toggleSelected: !0,
              keyboardNav: !0,
              selectedDates: !1,
              container: "",
              isMobile: !1,
              visible: !1,
              position: "bottom left",
              offset: 12,
              view: i.days,
              minView: i.days,
              showOtherMonths: !0,
              selectOtherMonths: !0,
              moveToOtherMonthsOnSelect: !0,
              showOtherYears: !0,
              selectOtherYears: !0,
              moveToOtherYearsOnSelect: !0,
              minDate: "",
              maxDate: "",
              disableNavWhenOutOfRange: !0,
              multipleDates: !1,
              multipleDatesSeparator: ", ",
              range: !1,
              dynamicRange: !0,
              buttons: !1,
              monthsField: "monthsShort",
              showEvent: "focus",
              autoClose: !1,
              prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',
              nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',
              navTitles: {
                days: "MMMM, <i>yyyy</i>",
                months: "yyyy",
                years: "yyyy1 - yyyy2",
              },
              timepicker: !1,
              onlyTimepicker: !1,
              dateTimeSeparator: " ",
              timeFormat: "",
              minHours: 0,
              maxHours: 24,
              minMinutes: 0,
              maxMinutes: 59,
              hoursStep: 1,
              minutesStep: 1,
              onSelect: !1,
              onChangeViewDate: !1,
              onChangeView: !1,
              onRenderCell: !1,
              onShow: !1,
              onHide: !1,
              onClickDayName: !1,
            };
          function n(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : document;
            return "string" == typeof e ? t.querySelector(e) : e;
          }
          function o() {
            let {
                tagName: e = "div",
                className: t = "",
                innerHtml: i = "",
                id: s = "",
                attrs: n = {},
              } = arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
              o = document.createElement(e);
            return (
              t && o.classList.add(...t.split(" ")),
              s && (o.id = s),
              i && (o.innerHTML = i),
              n && a(o, n),
              o
            );
          }
          function a(e, t) {
            for (let [i, s] of Object.entries(t))
              void 0 !== s && e.setAttribute(i, s);
            return e;
          }
          function r(e) {
            return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate();
          }
          function l(e) {
            let t = e.getHours(),
              { hours: i, dayPeriod: s } = c(t);
            return {
              year: e.getFullYear(),
              month: e.getMonth(),
              fullMonth:
                e.getMonth() + 1 < 10
                  ? "0" + (e.getMonth() + 1)
                  : e.getMonth() + 1,
              date: e.getDate(),
              fullDate: e.getDate() < 10 ? "0" + e.getDate() : e.getDate(),
              day: e.getDay(),
              hours: t,
              fullHours: h(t),
              hours12: i,
              dayPeriod: s,
              fullHours12: h(i),
              minutes: e.getMinutes(),
              fullMinutes:
                e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes(),
            };
          }
          function c(e) {
            return {
              dayPeriod: e > 11 ? "pm" : "am",
              hours: e % 12 == 0 ? 12 : e % 12,
            };
          }
          function h(e) {
            return e < 10 ? "0" + e : e;
          }
          function d(e) {
            let t = 10 * Math.floor(e.getFullYear() / 10);
            return [t, t + 9];
          }
          function u() {
            let e = [];
            for (var t = arguments.length, i = new Array(t), s = 0; s < t; s++)
              i[s] = arguments[s];
            return (
              i.forEach((t) => {
                if ("object" == typeof t) for (let i in t) t[i] && e.push(i);
                else t && e.push(t);
              }),
              e.join(" ")
            );
          }
          function p(e, t) {
            let s =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : i.days;
            if (!e || !t) return !1;
            let n = l(e),
              o = l(t);
            return {
              [i.days]:
                n.date === o.date && n.month === o.month && n.year === o.year,
              [i.months]: n.month === o.month && n.year === o.year,
              [i.years]: n.year === o.year,
            }[s];
          }
          function m(e, t, i) {
            let s = g(e, !1).getTime(),
              n = g(t, !1).getTime();
            return i ? s >= n : s > n;
          }
          function f(e, t) {
            return !m(e, t, !0);
          }
          function g(e) {
            let t =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1],
              i = new Date(e.getTime());
            return (
              "boolean" != typeof t ||
                t ||
                (function (e) {
                  e.setHours(0, 0, 0, 0);
                })(i),
              i
            );
          }
          function v(e, t, i) {
            e.length
              ? e.forEach((e) => {
                  e.addEventListener(t, i);
                })
              : e.addEventListener(t, i);
          }
          function b(e, t) {
            return (
              !(!e || e === document || e instanceof DocumentFragment) &&
              (e.matches(t) ? e : b(e.parentNode, t))
            );
          }
          function y(e, t, i) {
            return e > i ? i : e < t ? t : e;
          }
          function w(e) {
            for (
              var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1;
              s < t;
              s++
            )
              i[s - 1] = arguments[s];
            return (
              i
                .filter((e) => e)
                .forEach((t) => {
                  for (let [i, s] of Object.entries(t))
                    if (void 0 !== s && "[object Object]" === s.toString()) {
                      let t = void 0 !== e[i] ? e[i].toString() : void 0,
                        n = s.toString(),
                        o = Array.isArray(s) ? [] : {};
                      (e[i] = e[i] ? (t !== n ? o : e[i]) : o), w(e[i], s);
                    } else e[i] = s;
                }),
              e
            );
          }
          function x(e) {
            let t = e;
            return (
              e instanceof Date || (t = new Date(e)),
              isNaN(t.getTime()) &&
                (console.log(`Unable to convert value "${e}" to Date object`),
                (t = !1)),
              t
            );
          }
          function S(e) {
            let t = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";
            return new RegExp("(^|>|" + t + ")(" + e + ")($|<|" + t + ")", "g");
          }
          function C(e, t, i) {
            return (
              (t = (function (e) {
                var t = (function (e, t) {
                  if ("object" != typeof e || null === e) return e;
                  var i = e[Symbol.toPrimitive];
                  if (void 0 !== i) {
                    var s = i.call(e, "string");
                    if ("object" != typeof s) return s;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(e);
                })(e);
                return "symbol" == typeof t ? t : String(t);
              })(t)) in e
                ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = i),
              e
            );
          }
          class D {
            constructor() {
              let {
                type: e,
                date: t,
                dp: i,
                opts: s,
                body: n,
              } = arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
              C(this, "focus", () => {
                this.$cell.classList.add("-focus-"), (this.focused = !0);
              }),
                C(this, "removeFocus", () => {
                  this.$cell.classList.remove("-focus-"), (this.focused = !1);
                }),
                C(this, "select", () => {
                  this.$cell.classList.add("-selected-"), (this.selected = !0);
                }),
                C(this, "removeSelect", () => {
                  this.$cell.classList.remove(
                    "-selected-",
                    "-range-from-",
                    "-range-to-"
                  ),
                    (this.selected = !1);
                }),
                C(this, "onChangeSelectedDate", () => {
                  this.isDisabled ||
                    (this._handleSelectedStatus(),
                    this.opts.range && this._handleRangeStatus());
                }),
                C(this, "onChangeFocusDate", (e) => {
                  if (!e) return void (this.focused && this.removeFocus());
                  let t = p(e, this.date, this.type);
                  t ? this.focus() : !t && this.focused && this.removeFocus(),
                    this.opts.range && this._handleRangeStatus();
                }),
                C(
                  this,
                  "render",
                  () => (
                    (this.$cell.innerHTML = this._getHtml()),
                    (this.$cell.adpCell = this),
                    this.$cell
                  )
                ),
                (this.type = e),
                (this.singleType = this.type.slice(0, -1)),
                (this.date = t),
                (this.dp = i),
                (this.opts = s),
                (this.body = n),
                (this.customData = !1),
                this.init();
            }
            init() {
              let { range: e, onRenderCell: t } = this.opts;
              t &&
                (this.customData = t({
                  date: this.date,
                  cellType: this.singleType,
                  datepicker: this.dp,
                })),
                this._createElement(),
                this._bindDatepickerEvents(),
                this._handleInitialFocusStatus(),
                this.dp.hasSelectedDates &&
                  (this._handleSelectedStatus(),
                  e && this._handleRangeStatus());
            }
            _bindDatepickerEvents() {
              this.dp.on(i.eventChangeSelectedDate, this.onChangeSelectedDate),
                this.dp.on(i.eventChangeFocusDate, this.onChangeFocusDate);
            }
            unbindDatepickerEvents() {
              this.dp.off(i.eventChangeSelectedDate, this.onChangeSelectedDate),
                this.dp.off(i.eventChangeFocusDate, this.onChangeFocusDate);
            }
            _createElement() {
              var e;
              let { year: t, month: i, date: s } = l(this.date),
                n =
                  (null === (e = this.customData) || void 0 === e
                    ? void 0
                    : e.attrs) || {};
              this.$cell = o({
                className: this._getClassName(),
                attrs: {
                  "data-year": t,
                  "data-month": i,
                  "data-date": s,
                  ...n,
                },
              });
            }
            _getClassName() {
              var e, t;
              let s = new Date(),
                { selectOtherMonths: n, selectOtherYears: o } = this.opts,
                { minDate: a, maxDate: r } = this.dp,
                { day: c } = l(this.date),
                h = this._isOutOfMinMaxRange(),
                d =
                  null === (e = this.customData) || void 0 === e
                    ? void 0
                    : e.disabled,
                m = u("air-datepicker-cell", `-${this.singleType}-`, {
                  "-current-": p(s, this.date, this.type),
                  "-min-date-": a && p(a, this.date, this.type),
                  "-max-date-": r && p(r, this.date, this.type),
                }),
                f = "";
              switch (this.type) {
                case i.days:
                  f = u({
                    "-weekend-": this.dp.isWeekend(c),
                    "-other-month-": this.isOtherMonth,
                    "-disabled-": (this.isOtherMonth && !n) || h || d,
                  });
                  break;
                case i.months:
                  f = u({ "-disabled-": h || d });
                  break;
                case i.years:
                  f = u({
                    "-other-decade-": this.isOtherDecade,
                    "-disabled-": h || (this.isOtherDecade && !o) || d,
                  });
              }
              return u(
                m,
                f,
                null === (t = this.customData) || void 0 === t
                  ? void 0
                  : t.classes
              );
            }
            _getHtml() {
              var e;
              let { year: t, month: s, date: n } = l(this.date),
                { showOtherMonths: o, showOtherYears: a } = this.opts;
              if (null !== (e = this.customData) && void 0 !== e && e.html)
                return this.customData.html;
              switch (this.type) {
                case i.days:
                  return !o && this.isOtherMonth ? "" : n;
                case i.months:
                  return this.dp.locale[this.opts.monthsField][s];
                case i.years:
                  return !a && this.isOtherDecade ? "" : t;
              }
            }
            _isOutOfMinMaxRange() {
              let { minDate: e, maxDate: t } = this.dp,
                { type: s, date: n } = this,
                { month: o, year: a, date: r } = l(n),
                c = s === i.days,
                h = s === i.years,
                d =
                  !!e && new Date(a, h ? e.getMonth() : o, c ? r : e.getDate()),
                u =
                  !!t && new Date(a, h ? t.getMonth() : o, c ? r : t.getDate());
              return e && t
                ? f(d, e) || m(u, t)
                : e
                ? f(d, e)
                : t
                ? m(u, t)
                : void 0;
            }
            destroy() {
              this.unbindDatepickerEvents();
            }
            _handleRangeStatus() {
              let { rangeDateFrom: e, rangeDateTo: t } = this.dp,
                i = u({
                  "-in-range-":
                    e &&
                    t &&
                    ((s = this.date), (n = e), (o = t), m(s, n) && f(s, o)),
                  "-range-from-": e && p(this.date, e, this.type),
                  "-range-to-": t && p(this.date, t, this.type),
                });
              var s, n, o;
              this.$cell.classList.remove(
                "-range-from-",
                "-range-to-",
                "-in-range-"
              ),
                i && this.$cell.classList.add(...i.split(" "));
            }
            _handleSelectedStatus() {
              let e = this.dp._checkIfDateIsSelected(this.date, this.type);
              e ? this.select() : !e && this.selected && this.removeSelect();
            }
            _handleInitialFocusStatus() {
              p(this.dp.focusDate, this.date, this.type) && this.focus();
            }
            get isDisabled() {
              return this.$cell.matches(".-disabled-");
            }
            get isOtherMonth() {
              return this.dp.isOtherMonth(this.date);
            }
            get isOtherDecade() {
              return this.dp.isOtherDecade(this.date);
            }
          }
          function M(e, t, i) {
            return (
              (t = (function (e) {
                var t = (function (e, t) {
                  if ("object" != typeof e || null === e) return e;
                  var i = e[Symbol.toPrimitive];
                  if (void 0 !== i) {
                    var s = i.call(e, "string");
                    if ("object" != typeof s) return s;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(e);
                })(e);
                return "symbol" == typeof t ? t : String(t);
              })(t)) in e
                ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = i),
              e
            );
          }
          let E = {
            [i.days]: `<div class="air-datepicker-body--day-names"></div><div class="air-datepicker-body--cells -${i.days}-"></div>`,
            [i.months]: `<div class="air-datepicker-body--cells -${i.months}-"></div>`,
            [i.years]: `<div class="air-datepicker-body--cells -${i.years}-"></div>`,
          };
          const T = ".air-datepicker-cell";
          class P {
            constructor(e) {
              let { dp: t, type: s, opts: n } = e;
              M(this, "handleClick", (e) => {
                let t = e.target.closest(T).adpCell;
                if (t.isDisabled) return;
                if (!this.dp.isMinViewReached) return void this.dp.down();
                let i = this.dp._checkIfDateIsSelected(t.date, t.type);
                i
                  ? this.dp._handleAlreadySelectedDates(i, t.date)
                  : this.dp.selectDate(t.date);
              }),
                M(this, "handleDayNameClick", (e) => {
                  let t = e.target.getAttribute("data-day-index");
                  this.opts.onClickDayName({
                    dayIndex: Number(t),
                    datepicker: this.dp,
                  });
                }),
                M(this, "onChangeCurrentView", (e) => {
                  e !== this.type ? this.hide() : (this.show(), this.render());
                }),
                M(this, "onMouseOverCell", (e) => {
                  let t = b(e.target, T);
                  this.dp.setFocusDate(!!t && t.adpCell.date);
                }),
                M(this, "onMouseOutCell", () => {
                  this.dp.setFocusDate(!1);
                }),
                M(this, "onClickBody", (e) => {
                  let { onClickDayName: t } = this.opts,
                    i = e.target;
                  i.closest(T) && this.handleClick(e),
                    t &&
                      i.closest(".air-datepicker-body--day-name") &&
                      this.handleDayNameClick(e);
                }),
                M(this, "onMouseDown", (e) => {
                  this.pressed = !0;
                  let t = b(e.target, T),
                    i = t && t.adpCell;
                  p(i.date, this.dp.rangeDateFrom) &&
                    (this.rangeFromFocused = !0),
                    p(i.date, this.dp.rangeDateTo) &&
                      (this.rangeToFocused = !0);
                }),
                M(this, "onMouseMove", (e) => {
                  if (!this.pressed || !this.dp.isMinViewReached) return;
                  e.preventDefault();
                  let t = b(e.target, T),
                    i = t && t.adpCell,
                    {
                      selectedDates: s,
                      rangeDateTo: n,
                      rangeDateFrom: o,
                    } = this.dp;
                  if (!i || i.isDisabled) return;
                  let { date: a } = i;
                  if (2 === s.length) {
                    if (this.rangeFromFocused && !m(a, n)) {
                      let { hours: e, minutes: t } = l(o);
                      a.setHours(e),
                        a.setMinutes(t),
                        (this.dp.rangeDateFrom = a),
                        this.dp.replaceDate(o, a);
                    }
                    if (this.rangeToFocused && !f(a, o)) {
                      let { hours: e, minutes: t } = l(n);
                      a.setHours(e),
                        a.setMinutes(t),
                        (this.dp.rangeDateTo = a),
                        this.dp.replaceDate(n, a);
                    }
                  }
                }),
                M(this, "onMouseUp", () => {
                  (this.pressed = !1),
                    (this.rangeFromFocused = !1),
                    (this.rangeToFocused = !1);
                }),
                M(this, "onChangeViewDate", (e, t) => {
                  if (!this.isVisible) return;
                  let s = d(e),
                    n = d(t);
                  switch (this.dp.currentView) {
                    case i.days:
                      if (p(e, t, i.months)) return;
                      break;
                    case i.months:
                      if (p(e, t, i.years)) return;
                      break;
                    case i.years:
                      if (s[0] === n[0] && s[1] === n[1]) return;
                  }
                  this.render();
                }),
                M(this, "render", () => {
                  this.destroyCells(),
                    this._generateCells(),
                    this.cells.forEach((e) => {
                      this.$cells.appendChild(e.render());
                    });
                }),
                (this.dp = t),
                (this.type = s),
                (this.opts = n),
                (this.cells = []),
                (this.$el = ""),
                (this.pressed = !1),
                (this.isVisible = !0),
                this.init();
            }
            init() {
              this._buildBaseHtml(),
                this.type === i.days && this.renderDayNames(),
                this.render(),
                this._bindEvents(),
                this._bindDatepickerEvents();
            }
            _bindEvents() {
              let { range: e, dynamicRange: t } = this.opts;
              v(this.$el, "mouseover", this.onMouseOverCell),
                v(this.$el, "mouseout", this.onMouseOutCell),
                v(this.$el, "click", this.onClickBody),
                e &&
                  t &&
                  (v(this.$el, "mousedown", this.onMouseDown),
                  v(this.$el, "mousemove", this.onMouseMove),
                  v(window.document, "mouseup", this.onMouseUp));
            }
            _bindDatepickerEvents() {
              this.dp.on(i.eventChangeViewDate, this.onChangeViewDate),
                this.dp.on(i.eventChangeCurrentView, this.onChangeCurrentView);
            }
            _buildBaseHtml() {
              (this.$el = o({
                className: `air-datepicker-body -${this.type}-`,
                innerHtml: E[this.type],
              })),
                (this.$names = n(".air-datepicker-body--day-names", this.$el)),
                (this.$cells = n(".air-datepicker-body--cells", this.$el));
            }
            _getDayNamesHtml() {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : this.dp.locale.firstDay,
                t = "",
                s = this.dp.isWeekend,
                { onClickDayName: n } = this.opts,
                o = e,
                a = 0;
              for (; a < 7; ) {
                let e = o % 7;
                (t += `<div class="${u("air-datepicker-body--day-name", {
                  [i.cssClassWeekend]: s(e),
                  "-clickable-": !!n,
                })}" data-day-index='${e}'>${this.dp.locale.daysMin[e]}</div>`),
                  a++,
                  o++;
              }
              return t;
            }
            renderDayNames() {
              this.$names.innerHTML = this._getDayNamesHtml();
            }
            _generateCell(e) {
              let { type: t, dp: i, opts: s } = this;
              return new D({ type: t, dp: i, opts: s, date: e, body: this });
            }
            _generateCells() {
              P.getDatesFunction(this.type)(this.dp, (e) => {
                this.cells.push(this._generateCell(e));
              });
            }
            show() {
              (this.isVisible = !0), this.$el.classList.remove("-hidden-");
            }
            hide() {
              (this.isVisible = !1), this.$el.classList.add("-hidden-");
            }
            destroyCells() {
              this.cells.forEach((e) => e.destroy()),
                (this.cells = []),
                (this.$cells.innerHTML = "");
            }
            destroy() {
              this.destroyCells(),
                this.dp.off(i.eventChangeViewDate, this.onChangeViewDate),
                this.dp.off(i.eventChangeCurrentView, this.onChangeCurrentView);
            }
            static getDaysDates(e, t) {
              let {
                  viewDate: i,
                  locale: { firstDay: s },
                } = e,
                n = r(i),
                { year: o, month: a } = l(i),
                c = new Date(o, a, 1),
                h = new Date(o, a, n),
                d = c.getDay() - s,
                u = 6 - h.getDay() + s;
              (d = d < 0 ? d + 7 : d), (u = u > 6 ? u - 7 : u);
              let p = (function (e, t) {
                  let { year: i, month: s, date: n } = l(e);
                  return new Date(i, s, n - t);
                })(c, d),
                m = n + d + u,
                f = p.getDate(),
                { year: g, month: v } = l(p),
                b = 0;
              const y = [];
              for (; b < m; ) {
                let e = new Date(g, v, f + b);
                t && t(e), y.push(e), b++;
              }
              return y;
            }
            static getMonthsDates(e, t) {
              let { year: i } = e.parsedViewDate,
                s = 0,
                n = [];
              for (; s < 12; ) {
                const e = new Date(i, s);
                n.push(e), t && t(e), s++;
              }
              return n;
            }
            static getYearsDates(e, t) {
              let i = d(e.viewDate),
                s = i[0] - 1,
                n = i[1] + 1,
                o = s,
                a = [];
              for (; o <= n; ) {
                const e = new Date(o, 0);
                a.push(e), t && t(e), o++;
              }
              return a;
            }
            static getDatesFunction() {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : i.days;
              return {
                [i.days]: P.getDaysDates,
                [i.months]: P.getMonthsDates,
                [i.years]: P.getYearsDates,
              }[e];
            }
          }
          function O(e, t, i) {
            return (
              (t = (function (e) {
                var t = (function (e, t) {
                  if ("object" != typeof e || null === e) return e;
                  var i = e[Symbol.toPrimitive];
                  if (void 0 !== i) {
                    var s = i.call(e, "string");
                    if ("object" != typeof s) return s;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(e);
                })(e);
                return "symbol" == typeof t ? t : String(t);
              })(t)) in e
                ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = i),
              e
            );
          }
          class k {
            constructor(e) {
              let { dp: t, opts: i } = e;
              O(this, "onClickNav", (e) => {
                let t = b(e.target, ".air-datepicker-nav--action");
                if (!t) return;
                let i = t.dataset.action;
                this.dp[i]();
              }),
                O(this, "onChangeViewDate", () => {
                  this.render(), this._resetNavStatus(), this.handleNavStatus();
                }),
                O(this, "onChangeCurrentView", () => {
                  this.render(), this._resetNavStatus(), this.handleNavStatus();
                }),
                O(this, "onClickNavTitle", () => {
                  this.dp.isFinalView || this.dp.up();
                }),
                O(this, "update", () => {
                  let { prevHtml: e, nextHtml: t } = this.opts;
                  (this.$prev.innerHTML = e),
                    (this.$next.innerHTML = t),
                    this._resetNavStatus(),
                    this.render(),
                    this.handleNavStatus();
                }),
                O(this, "renderDelay", () => {
                  setTimeout(this.render);
                }),
                O(this, "render", () => {
                  (this.$title.innerHTML = this._getTitle()),
                    (function (e, t) {
                      for (let i in t)
                        t[i] ? e.classList.add(i) : e.classList.remove(i);
                    })(this.$title, { "-disabled-": this.dp.isFinalView });
                }),
                (this.dp = t),
                (this.opts = i),
                this.init();
            }
            init() {
              this._createElement(),
                this._buildBaseHtml(),
                this._defineDOM(),
                this.render(),
                this.handleNavStatus(),
                this._bindEvents(),
                this._bindDatepickerEvents();
            }
            _defineDOM() {
              (this.$title = n(".air-datepicker-nav--title", this.$el)),
                (this.$prev = n('[data-action="prev"]', this.$el)),
                (this.$next = n('[data-action="next"]', this.$el));
            }
            _bindEvents() {
              this.$el.addEventListener("click", this.onClickNav),
                this.$title.addEventListener("click", this.onClickNavTitle);
            }
            _bindDatepickerEvents() {
              this.dp.on(i.eventChangeViewDate, this.onChangeViewDate),
                this.dp.on(i.eventChangeCurrentView, this.onChangeCurrentView),
                this.isNavIsFunction &&
                  (this.dp.on(i.eventChangeSelectedDate, this.renderDelay),
                  this.dp.opts.timepicker &&
                    this.dp.on(i.eventChangeTime, this.render));
            }
            destroy() {
              this.dp.off(i.eventChangeViewDate, this.onChangeViewDate),
                this.dp.off(i.eventChangeCurrentView, this.onChangeCurrentView),
                this.isNavIsFunction &&
                  (this.dp.off(i.eventChangeSelectedDate, this.renderDelay),
                  this.dp.opts.timepicker &&
                    this.dp.off(i.eventChangeTime, this.render));
            }
            _createElement() {
              this.$el = o({ tagName: "nav", className: "air-datepicker-nav" });
            }
            _getTitle() {
              let { dp: e, opts: t } = this,
                i = t.navTitles[e.currentView];
              return "function" == typeof i
                ? i(e)
                : e.formatDate(e.viewDate, i);
            }
            handleNavStatus() {
              let { disableNavWhenOutOfRange: e } = this.opts,
                { minDate: t, maxDate: s } = this.dp;
              if ((!t && !s) || !e) return;
              let { year: n, month: o } = this.dp.parsedViewDate,
                a = !!t && l(t),
                r = !!s && l(s);
              switch (this.dp.currentView) {
                case i.days:
                  t && a.month >= o && a.year >= n && this._disableNav("prev"),
                    s &&
                      r.month <= o &&
                      r.year <= n &&
                      this._disableNav("next");
                  break;
                case i.months:
                  t && a.year >= n && this._disableNav("prev"),
                    s && r.year <= n && this._disableNav("next");
                  break;
                case i.years: {
                  let e = d(this.dp.viewDate);
                  t && a.year >= e[0] && this._disableNav("prev"),
                    s && r.year <= e[1] && this._disableNav("next");
                  break;
                }
              }
            }
            _disableNav(e) {
              n('[data-action="' + e + '"]', this.$el).classList.add(
                "-disabled-"
              );
            }
            _resetNavStatus() {
              !(function (e) {
                for (
                  var t = arguments.length,
                    i = new Array(t > 1 ? t - 1 : 0),
                    s = 1;
                  s < t;
                  s++
                )
                  i[s - 1] = arguments[s];
                e.length
                  ? e.forEach((e) => {
                      e.classList.remove(...i);
                    })
                  : e.classList.remove(...i);
              })(
                this.$el.querySelectorAll(".air-datepicker-nav--action"),
                "-disabled-"
              );
            }
            _buildBaseHtml() {
              let { prevHtml: e, nextHtml: t } = this.opts;
              this.$el.innerHTML = `<div class="air-datepicker-nav--action" data-action="prev">${e}</div><div class="air-datepicker-nav--title"></div><div class="air-datepicker-nav--action" data-action="next">${t}</div>`;
            }
            get isNavIsFunction() {
              let { navTitles: e } = this.opts;
              return Object.keys(e).find((t) => "function" == typeof e[t]);
            }
          }
          var L = {
            today: {
              content: (e) => e.locale.today,
              onClick: (e) => e.setViewDate(new Date()),
            },
            clear: {
              content: (e) => e.locale.clear,
              onClick: (e) => e.clear(),
            },
          };
          class A {
            constructor(e) {
              let { dp: t, opts: i } = e;
              (this.dp = t), (this.opts = i), this.init();
            }
            init() {
              this.createElement(), this.render();
            }
            createElement() {
              this.$el = o({ className: "air-datepicker-buttons" });
            }
            destroy() {
              this.$el.parentNode.removeChild(this.$el);
            }
            clearHtml() {
              return (this.$el.innerHTML = ""), this;
            }
            generateButtons() {
              let { buttons: e } = this.opts;
              Array.isArray(e) || (e = [e]),
                e.forEach((e) => {
                  let t = e;
                  "string" == typeof e && L[e] && (t = L[e]);
                  let i = this.createButton(t);
                  t.onClick && this.attachEventToButton(i, t.onClick),
                    this.$el.appendChild(i);
                });
            }
            attachEventToButton(e, t) {
              e.addEventListener("click", () => {
                t(this.dp);
              });
            }
            createButton(e) {
              let {
                content: t,
                className: i,
                tagName: s = "button",
                attrs: n = {},
              } = e;
              return o({
                tagName: s,
                innerHtml: `<span tabindex='-1'>${
                  "function" == typeof t ? t(this.dp) : t
                }</span>`,
                className: u("air-datepicker-button", i),
                attrs: n,
              });
            }
            render() {
              this.generateButtons();
            }
          }
          function _(e, t, i) {
            return (
              (t = (function (e) {
                var t = (function (e, t) {
                  if ("object" != typeof e || null === e) return e;
                  var i = e[Symbol.toPrimitive];
                  if (void 0 !== i) {
                    var s = i.call(e, "string");
                    if ("object" != typeof s) return s;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(e);
                })(e);
                return "symbol" == typeof t ? t : String(t);
              })(t)) in e
                ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = i),
              e
            );
          }
          class F {
            constructor() {
              let { opts: e, dp: t } =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              _(this, "toggleTimepickerIsActive", (e) => {
                this.dp.timepickerIsActive = e;
              }),
                _(this, "onChangeSelectedDate", (e) => {
                  let { date: t, updateTime: i = !1 } = e;
                  t &&
                    (this.setMinMaxTime(t),
                    this.setCurrentTime(!!i && t),
                    this.addTimeToDate(t));
                }),
                _(this, "onChangeLastSelectedDate", (e) => {
                  e && (this.setTime(e), this.render());
                }),
                _(this, "onChangeInputRange", (e) => {
                  let t = e.target;
                  (this[t.getAttribute("name")] = t.value),
                    this.updateText(),
                    this.dp.trigger(i.eventChangeTime, {
                      hours: this.hours,
                      minutes: this.minutes,
                    });
                }),
                _(this, "onMouseEnterLeave", (e) => {
                  let t = e.target.getAttribute("name"),
                    i = this.$minutesText;
                  "hours" === t && (i = this.$hoursText),
                    i.classList.toggle("-focus-");
                }),
                _(this, "onFocus", () => {
                  this.toggleTimepickerIsActive(!0);
                }),
                _(this, "onBlur", () => {
                  this.toggleTimepickerIsActive(!1);
                }),
                (this.opts = e),
                (this.dp = t);
              let { timeFormat: s } = this.dp.locale;
              s && (s.match(S("h")) || s.match(S("hh"))) && (this.ampm = !0),
                this.init();
            }
            init() {
              this.setTime(this.dp.lastSelectedDate || this.dp.viewDate),
                this.createElement(),
                this.buildHtml(),
                this.defineDOM(),
                this.render(),
                this.bindDatepickerEvents(),
                this.bindDOMEvents();
            }
            bindDatepickerEvents() {
              this.dp.on(i.eventChangeSelectedDate, this.onChangeSelectedDate),
                this.dp.on(
                  i.eventChangeLastSelectedDate,
                  this.onChangeLastSelectedDate
                );
            }
            bindDOMEvents() {
              let e = "input";
              navigator.userAgent.match(/trident/gi) && (e = "change"),
                v(this.$ranges, e, this.onChangeInputRange),
                v(this.$ranges, "mouseenter", this.onMouseEnterLeave),
                v(this.$ranges, "mouseleave", this.onMouseEnterLeave),
                v(this.$ranges, "focus", this.onFocus),
                v(this.$ranges, "mousedown", this.onFocus),
                v(this.$ranges, "blur", this.onBlur);
            }
            createElement() {
              this.$el = o({
                className: u("air-datepicker-time", {
                  "-am-pm-": this.dp.ampm,
                }),
              });
            }
            destroy() {
              this.dp.off(i.eventChangeSelectedDate, this.onChangeSelectedDate),
                this.dp.off(
                  i.eventChangeLastSelectedDate,
                  this.onChangeLastSelectedDate
                ),
                this.$el.parentNode.removeChild(this.$el);
            }
            buildHtml() {
              let {
                ampm: e,
                hours: t,
                displayHours: i,
                minutes: s,
                minHours: n,
                minMinutes: o,
                maxHours: a,
                maxMinutes: r,
                dayPeriod: l,
                opts: { hoursStep: c, minutesStep: d },
              } = this;
              this.$el.innerHTML =
                `<div class="air-datepicker-time--current">   <span class="air-datepicker-time--current-hours">${h(
                  i
                )}</span>   <span class="air-datepicker-time--current-colon">:</span>   <span class="air-datepicker-time--current-minutes">${h(
                  s
                )}</span>   ` +
                (e
                  ? `<span class='air-datepicker-time--current-ampm'>${l}</span>`
                  : "") +
                '</div><div class="air-datepicker-time--sliders">   <div class="air-datepicker-time--row">' +
                `      <input type="range" name="hours" value="${t}" min="${n}" max="${a}" step="${c}"/>   </div>   <div class="air-datepicker-time--row">` +
                `      <input type="range" name="minutes" value="${s}" min="${o}" max="${r}" step="${d}"/>   </div></div>`;
            }
            defineDOM() {
              let e = (e) => n(e, this.$el);
              (this.$ranges = this.$el.querySelectorAll('[type="range"]')),
                (this.$hours = e('[name="hours"]')),
                (this.$minutes = e('[name="minutes"]')),
                (this.$hoursText = e(".air-datepicker-time--current-hours")),
                (this.$minutesText = e(
                  ".air-datepicker-time--current-minutes"
                )),
                (this.$ampm = e(".air-datepicker-time--current-ampm"));
            }
            setTime(e) {
              this.setMinMaxTime(e), this.setCurrentTime(e);
            }
            addTimeToDate(e) {
              e && (e.setHours(this.hours), e.setMinutes(this.minutes));
            }
            setMinMaxTime(e) {
              if ((this.setMinMaxTimeFromOptions(), e)) {
                let { minDate: t, maxDate: i } = this.dp;
                t && p(e, t) && this.setMinTimeFromMinDate(t),
                  i && p(e, i) && this.setMaxTimeFromMaxDate(i);
              }
            }
            setCurrentTime(e) {
              let { hours: t, minutes: i } = e ? l(e) : this;
              (this.hours = y(t, this.minHours, this.maxHours)),
                (this.minutes = y(i, this.minMinutes, this.maxMinutes));
            }
            setMinMaxTimeFromOptions() {
              let {
                minHours: e,
                minMinutes: t,
                maxHours: i,
                maxMinutes: s,
              } = this.opts;
              (this.minHours = y(e, 0, 23)),
                (this.minMinutes = y(t, 0, 59)),
                (this.maxHours = y(i, 0, 23)),
                (this.maxMinutes = y(s, 0, 59));
            }
            setMinTimeFromMinDate(e) {
              let { lastSelectedDate: t } = this.dp;
              (this.minHours = e.getHours()),
                t && t.getHours() > e.getHours()
                  ? (this.minMinutes = this.opts.minMinutes)
                  : (this.minMinutes = e.getMinutes());
            }
            setMaxTimeFromMaxDate(e) {
              let { lastSelectedDate: t } = this.dp;
              (this.maxHours = e.getHours()),
                t && t.getHours() < e.getHours()
                  ? (this.maxMinutes = this.opts.maxMinutes)
                  : (this.maxMinutes = e.getMinutes());
            }
            updateSliders() {
              (a(this.$hours, {
                min: this.minHours,
                max: this.maxHours,
              }).value = this.hours),
                (a(this.$minutes, {
                  min: this.minMinutes,
                  max: this.maxMinutes,
                }).value = this.minutes);
            }
            updateText() {
              (this.$hoursText.innerHTML = h(this.displayHours)),
                (this.$minutesText.innerHTML = h(this.minutes)),
                this.ampm && (this.$ampm.innerHTML = this.dayPeriod);
            }
            set hours(e) {
              this._hours = e;
              let { hours: t, dayPeriod: i } = c(e);
              (this.displayHours = this.ampm ? t : e), (this.dayPeriod = i);
            }
            get hours() {
              return this._hours;
            }
            render() {
              this.updateSliders(), this.updateText();
            }
          }
          function I(e, t, i) {
            return (
              (t = (function (e) {
                var t = (function (e, t) {
                  if ("object" != typeof e || null === e) return e;
                  var i = e[Symbol.toPrimitive];
                  if (void 0 !== i) {
                    var s = i.call(e, "string");
                    if ("object" != typeof s) return s;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(e);
                })(e);
                return "symbol" == typeof t ? t : String(t);
              })(t)) in e
                ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = i),
              e
            );
          }
          class R {
            constructor(e) {
              let { dp: t, opts: i } = e;
              I(this, "pressedKeys", new Set()),
                I(
                  this,
                  "hotKeys",
                  new Map([
                    [
                      [
                        ["Control", "ArrowRight"],
                        ["Control", "ArrowUp"],
                      ],
                      (e) => e.month++,
                    ],
                    [
                      [
                        ["Control", "ArrowLeft"],
                        ["Control", "ArrowDown"],
                      ],
                      (e) => e.month--,
                    ],
                    [
                      [
                        ["Shift", "ArrowRight"],
                        ["Shift", "ArrowUp"],
                      ],
                      (e) => e.year++,
                    ],
                    [
                      [
                        ["Shift", "ArrowLeft"],
                        ["Shift", "ArrowDown"],
                      ],
                      (e) => e.year--,
                    ],
                    [
                      [
                        ["Alt", "ArrowRight"],
                        ["Alt", "ArrowUp"],
                      ],
                      (e) => (e.year += 10),
                    ],
                    [
                      [
                        ["Alt", "ArrowLeft"],
                        ["Alt", "ArrowDown"],
                      ],
                      (e) => (e.year -= 10),
                    ],
                    [["Control", "Shift", "ArrowUp"], (e, t) => t.up()],
                  ])
                ),
                I(this, "handleHotKey", (e) => {
                  let t = this.hotKeys.get(e),
                    i = l(this.getInitialFocusDate());
                  t(i, this.dp);
                  let { year: s, month: n, date: o } = i,
                    a = r(new Date(s, n));
                  a < o && (o = a);
                  let c = this.dp.getClampedDate(new Date(s, n, o));
                  this.dp.setFocusDate(c, { viewDateTransition: !0 });
                }),
                I(this, "isHotKeyPressed", () => {
                  let e = !1,
                    t = this.pressedKeys.size,
                    i = (e) => this.pressedKeys.has(e);
                  for (let [s] of this.hotKeys) {
                    if (e) break;
                    if (Array.isArray(s[0]))
                      s.forEach((n) => {
                        e || t !== n.length || (e = n.every(i) && s);
                      });
                    else {
                      if (t !== s.length) continue;
                      e = s.every(i) && s;
                    }
                  }
                  return e;
                }),
                I(this, "isArrow", (e) => e >= 37 && e <= 40),
                I(this, "onKeyDown", (e) => {
                  let { key: t, which: i } = e,
                    {
                      dp: s,
                      dp: { focusDate: n },
                      opts: o,
                    } = this;
                  this.registerKey(t);
                  let a = this.isHotKeyPressed();
                  if (a) return e.preventDefault(), void this.handleHotKey(a);
                  if (this.isArrow(i))
                    return e.preventDefault(), void this.focusNextCell(t);
                  if ("Enter" === t) {
                    if (s.currentView !== o.minView) return void s.down();
                    if (n) {
                      let e = s._checkIfDateIsSelected(n);
                      return void (e
                        ? s._handleAlreadySelectedDates(e, n)
                        : s.selectDate(n));
                    }
                  }
                  "Escape" === t && this.dp.hide();
                }),
                I(this, "onKeyUp", (e) => {
                  this.removeKey(e.key);
                }),
                (this.dp = t),
                (this.opts = i),
                this.init();
            }
            init() {
              this.bindKeyboardEvents();
            }
            bindKeyboardEvents() {
              let { $el: e } = this.dp;
              e.addEventListener("keydown", this.onKeyDown),
                e.addEventListener("keyup", this.onKeyUp);
            }
            destroy() {
              let { $el: e } = this.dp;
              e.removeEventListener("keydown", this.onKeyDown),
                e.removeEventListener("keyup", this.onKeyUp),
                (this.hotKeys = null),
                (this.pressedKeys = null);
            }
            getInitialFocusDate() {
              let {
                  focusDate: e,
                  currentView: t,
                  selectedDates: s,
                  parsedViewDate: { year: n, month: o },
                } = this.dp,
                a = e || s[s.length - 1];
              if (!a)
                switch (t) {
                  case i.days:
                    a = new Date(n, o, new Date().getDate());
                    break;
                  case i.months:
                    a = new Date(n, o, 1);
                    break;
                  case i.years:
                    a = new Date(n, 0, 1);
                }
              return a;
            }
            focusNextCell(e) {
              let t = this.getInitialFocusDate(),
                { currentView: s } = this.dp,
                { days: n, months: o, years: a } = i,
                r = l(t),
                c = r.year,
                h = r.month,
                d = r.date;
              switch (e) {
                case "ArrowLeft":
                  s === n && (d -= 1), s === o && (h -= 1), s === a && (c -= 1);
                  break;
                case "ArrowUp":
                  s === n && (d -= 7), s === o && (h -= 3), s === a && (c -= 4);
                  break;
                case "ArrowRight":
                  s === n && (d += 1), s === o && (h += 1), s === a && (c += 1);
                  break;
                case "ArrowDown":
                  s === n && (d += 7), s === o && (h += 3), s === a && (c += 4);
              }
              let u = this.dp.getClampedDate(new Date(c, h, d));
              this.dp.setFocusDate(u, { viewDateTransition: !0 });
            }
            registerKey(e) {
              this.pressedKeys.add(e);
            }
            removeKey(e) {
              this.pressedKeys.delete(e);
            }
          }
          let $ = {
            on(e, t) {
              this.__events || (this.__events = {}),
                this.__events[e]
                  ? this.__events[e].push(t)
                  : (this.__events[e] = [t]);
            },
            off(e, t) {
              this.__events &&
                this.__events[e] &&
                (this.__events[e] = this.__events[e].filter((e) => e !== t));
            },
            removeAllEvents() {
              this.__events = {};
            },
            trigger(e) {
              for (
                var t = arguments.length,
                  i = new Array(t > 1 ? t - 1 : 0),
                  s = 1;
                s < t;
                s++
              )
                i[s - 1] = arguments[s];
              this.__events &&
                this.__events[e] &&
                this.__events[e].forEach((e) => {
                  e(...i);
                });
            },
          };
          function z(e, t, i) {
            return (
              (t = (function (e) {
                var t = (function (e, t) {
                  if ("object" != typeof e || null === e) return e;
                  var i = e[Symbol.toPrimitive];
                  if (void 0 !== i) {
                    var s = i.call(e, "string");
                    if ("object" != typeof s) return s;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(e);
                })(e);
                return "symbol" == typeof t ? t : String(t);
              })(t)) in e
                ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = i),
              e
            );
          }
          let H = "",
            j = "",
            N = !1;
          class B {
            static buildGlobalContainer(e) {
              (N = !0),
                (H = o({ className: e, id: e })),
                n("body").appendChild(H);
            }
            constructor(e, t) {
              var a = this;
              if (
                (z(this, "viewIndexes", [i.days, i.months, i.years]),
                z(this, "next", () => {
                  let { year: e, month: t } = this.parsedViewDate;
                  switch (this.currentView) {
                    case i.days:
                      this.setViewDate(new Date(e, t + 1, 1));
                      break;
                    case i.months:
                      this.setViewDate(new Date(e + 1, t, 1));
                      break;
                    case i.years:
                      this.setViewDate(new Date(e + 10, 0, 1));
                  }
                }),
                z(this, "prev", () => {
                  let { year: e, month: t } = this.parsedViewDate;
                  switch (this.currentView) {
                    case i.days:
                      this.setViewDate(new Date(e, t - 1, 1));
                      break;
                    case i.months:
                      this.setViewDate(new Date(e - 1, t, 1));
                      break;
                    case i.years:
                      this.setViewDate(new Date(e - 10, 0, 1));
                  }
                }),
                z(this, "_finishHide", () => {
                  (this.hideAnimation = !1),
                    this._destroyComponents(),
                    this.$container.removeChild(this.$datepicker);
                }),
                z(this, "setPosition", function (e) {
                  let t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  if ("function" == typeof (e = e || a.opts.position))
                    return void (a.customHide = e({
                      $datepicker: a.$datepicker,
                      $target: a.$el,
                      $pointer: a.$pointer,
                      isViewChange: t,
                      done: a._finishHide,
                    }));
                  let i,
                    s,
                    { isMobile: n } = a.opts,
                    o = a.$el.getBoundingClientRect(),
                    r = a.$el.getBoundingClientRect(),
                    l = a.$datepicker.offsetParent,
                    c = a.$el.offsetParent,
                    h = a.$datepicker.getBoundingClientRect(),
                    d = e.split(" "),
                    u = window.scrollY,
                    p = window.scrollX,
                    m = a.opts.offset,
                    f = d[0],
                    g = d[1];
                  if (n) a.$datepicker.style.cssText = "left: 50%; top: 50%";
                  else {
                    if (
                      (l === c &&
                        l !== document.body &&
                        ((r = {
                          top: a.$el.offsetTop,
                          left: a.$el.offsetLeft,
                          width: o.width,
                          height: a.$el.offsetHeight,
                        }),
                        (u = 0),
                        (p = 0)),
                      l !== c && l !== document.body)
                    ) {
                      let e = l.getBoundingClientRect();
                      (r = {
                        top: o.top - e.top,
                        left: o.left - e.left,
                        width: o.width,
                        height: o.height,
                      }),
                        (u = 0),
                        (p = 0);
                    }
                    switch (f) {
                      case "top":
                        i = r.top - h.height - m;
                        break;
                      case "right":
                        s = r.left + r.width + m;
                        break;
                      case "bottom":
                        i = r.top + r.height + m;
                        break;
                      case "left":
                        s = r.left - h.width - m;
                    }
                    switch (g) {
                      case "top":
                        i = r.top;
                        break;
                      case "right":
                        s = r.left + r.width - h.width;
                        break;
                      case "bottom":
                        i = r.top + r.height - h.height;
                        break;
                      case "left":
                        s = r.left;
                        break;
                      case "center":
                        /left|right/.test(f)
                          ? (i = r.top + r.height / 2 - h.height / 2)
                          : (s = r.left + r.width / 2 - h.width / 2);
                    }
                    a.$datepicker.style.cssText = `left: ${s + p}px; top: ${
                      i + u
                    }px`;
                  }
                }),
                z(this, "_setInputValue", () => {
                  let {
                      opts: e,
                      $altField: t,
                      locale: { dateFormat: i },
                    } = this,
                    { altFieldDateFormat: s, altField: n } = e;
                  n && t && (t.value = this._getInputValue(s)),
                    (this.$el.value = this._getInputValue(i));
                }),
                z(this, "_getInputValue", (e) => {
                  let { selectedDates: t, opts: i } = this,
                    { multipleDates: s, multipleDatesSeparator: n } = i;
                  if (!t.length) return "";
                  let o = "function" == typeof e,
                    a = o
                      ? e(s ? t : t[0])
                      : t.map((t) => this.formatDate(t, e));
                  return (a = o ? a : a.join(n)), a;
                }),
                z(this, "_checkIfDateIsSelected", function (e) {
                  let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : i.days,
                    s = !1;
                  return (
                    a.selectedDates.some((i) => {
                      let n = p(e, i, t);
                      return (s = n && i), n;
                    }),
                    s
                  );
                }),
                z(this, "_scheduleCallAfterTransition", (e) => {
                  this._cancelScheduledCall(),
                    e && e(!1),
                    (this._onTransitionEnd = () => {
                      e && e(!0);
                    }),
                    this.$datepicker.addEventListener(
                      "transitionend",
                      this._onTransitionEnd,
                      { once: !0 }
                    );
                }),
                z(this, "_cancelScheduledCall", () => {
                  this.$datepicker.removeEventListener(
                    "transitionend",
                    this._onTransitionEnd
                  );
                }),
                z(this, "setViewDate", (e) => {
                  if (!((e = x(e)) instanceof Date)) return;
                  if (p(e, this.viewDate)) return;
                  let t = this.viewDate;
                  this.viewDate = e;
                  let { onChangeViewDate: s } = this.opts;
                  if (s) {
                    let { month: e, year: t } = this.parsedViewDate;
                    s({ month: e, year: t, decade: this.curDecade });
                  }
                  this.trigger(i.eventChangeViewDate, e, t);
                }),
                z(this, "setFocusDate", function (e) {
                  let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  (!e || (e = x(e)) instanceof Date) &&
                    ((a.focusDate = e),
                    a.opts.range && e && a._handleRangeOnFocus(),
                    a.trigger(i.eventChangeFocusDate, e, t));
                }),
                z(this, "setCurrentView", (e) => {
                  if (this.viewIndexes.includes(e)) {
                    if (
                      ((this.currentView = e),
                      this.elIsInput &&
                        this.visible &&
                        this.setPosition(void 0, !0),
                      this.trigger(i.eventChangeCurrentView, e),
                      !this.views[e])
                    ) {
                      let t = (this.views[e] = new P({
                        dp: this,
                        opts: this.opts,
                        type: e,
                      }));
                      this.shouldUpdateDOM && this.$content.appendChild(t.$el);
                    }
                    this.opts.onChangeView && this.opts.onChangeView(e);
                  }
                }),
                z(this, "_updateLastSelectedDate", (e) => {
                  (this.lastSelectedDate = e),
                    this.trigger(i.eventChangeLastSelectedDate, e);
                }),
                z(this, "destroy", () => {
                  let { showEvent: e, isMobile: t } = this.opts,
                    i = this.$datepicker.parentNode;
                  i && i.removeChild(this.$datepicker),
                    this.$el.removeEventListener(e, this._onFocus),
                    this.$el.removeEventListener("blur", this._onBlur),
                    window.removeEventListener("resize", this._onResize),
                    t && this._removeMobileAttributes(),
                    this.keyboardNav && this.keyboardNav.destroy(),
                    (this.views = null),
                    (this.nav = null),
                    (this.$datepicker = null),
                    (this.opts = null),
                    (this.$customContainer = null),
                    (this.viewDate = null),
                    (this.focusDate = null),
                    (this.selectedDates = null),
                    (this.rangeDateFrom = null),
                    (this.rangeDateTo = null);
                }),
                z(this, "update", function () {
                  let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = w({}, a.opts);
                  w(a.opts, e);
                  let {
                      timepicker: s,
                      buttons: n,
                      range: o,
                      selectedDates: r,
                      isMobile: l,
                    } = a.opts,
                    c = a.visible || a.treatAsInline;
                  a._createMinMaxDates(),
                    a._limitViewDateByMaxMinDates(),
                    a._handleLocale(),
                    !t.selectedDates && r && a.selectDate(r),
                    e.view && a.setCurrentView(e.view),
                    a._setInputValue(),
                    t.range && !o
                      ? ((a.rangeDateTo = !1), (a.rangeDateFrom = !1))
                      : !t.range &&
                        o &&
                        a.selectedDates.length &&
                        ((a.rangeDateFrom = a.selectedDates[0]),
                        (a.rangeDateTo = a.selectedDates[1])),
                    t.timepicker && !s
                      ? (c && a.timepicker.destroy(),
                        (a.timepicker = !1),
                        a.$timepicker.parentNode.removeChild(a.$timepicker))
                      : !t.timepicker && s && a._addTimepicker(),
                    !t.buttons && n
                      ? a._addButtons()
                      : t.buttons && !n
                      ? (a.buttons.destroy(),
                        a.$buttons.parentNode.removeChild(a.$buttons))
                      : c && t.buttons && n && a.buttons.clearHtml().render(),
                    !t.isMobile && l
                      ? (a.treatAsInline || j || a._createMobileOverlay(),
                        a._addMobileAttributes(),
                        a.visible && a._showMobileOverlay())
                      : t.isMobile &&
                        !l &&
                        (a._removeMobileAttributes(),
                        a.visible &&
                          (j.classList.remove("-active-"),
                          "function" != typeof a.opts.position &&
                            a.setPosition())),
                    c &&
                      (a.nav.update(),
                      a.views[a.currentView].render(),
                      a.currentView === i.days &&
                        a.views[a.currentView].renderDayNames());
                }),
                z(this, "isOtherMonth", (e) => {
                  let { month: t } = l(e);
                  return t !== this.parsedViewDate.month;
                }),
                z(this, "isOtherYear", (e) => {
                  let { year: t } = l(e);
                  return t !== this.parsedViewDate.year;
                }),
                z(this, "isOtherDecade", (e) => {
                  let { year: t } = l(e),
                    [i, s] = d(this.viewDate);
                  return t < i || t > s;
                }),
                z(this, "_onChangeSelectedDate", (e) => {
                  let { silent: t } = e;
                  setTimeout(() => {
                    this._setInputValue(),
                      this.opts.onSelect && !t && this._triggerOnSelect();
                  });
                }),
                z(this, "_onChangeFocusedDate", function (e) {
                  let { viewDateTransition: t } =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  if (!e) return;
                  let i = !1;
                  t &&
                    (i =
                      a.isOtherMonth(e) ||
                      a.isOtherYear(e) ||
                      a.isOtherDecade(e)),
                    i && a.setViewDate(e),
                    a.opts.onFocus &&
                      a.opts.onFocus({ datepicker: a, date: e });
                }),
                z(this, "_onChangeTime", (e) => {
                  let { hours: t, minutes: i } = e,
                    s = new Date(),
                    {
                      lastSelectedDate: n,
                      opts: { onSelect: o },
                    } = this,
                    a = n;
                  n || (a = s);
                  let r = this.getCell(a, this.currentViewSingular),
                    l = r && r.adpCell;
                  (l && l.isDisabled) ||
                    (a.setHours(t),
                    a.setMinutes(i),
                    n
                      ? (this._setInputValue(), o && this._triggerOnSelect())
                      : this.selectDate(a));
                }),
                z(this, "_onFocus", (e) => {
                  this.visible || this.show();
                }),
                z(this, "_onBlur", (e) => {
                  this.inFocus ||
                    !this.visible ||
                    this.opts.isMobile ||
                    this.hide();
                }),
                z(this, "_onMouseDown", (e) => {
                  this.inFocus = !0;
                }),
                z(this, "_onMouseUp", (e) => {
                  (this.inFocus = !1), this.$el.focus();
                }),
                z(this, "_onResize", () => {
                  this.visible &&
                    "function" != typeof this.opts.position &&
                    this.setPosition();
                }),
                z(this, "_onClickOverlay", () => {
                  this.visible && this.hide();
                }),
                z(this, "getViewDates", function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : i.days;
                  return P.getDatesFunction(e)(a);
                }),
                z(this, "isWeekend", (e) => this.opts.weekends.includes(e)),
                z(this, "getClampedDate", (e) => {
                  let { minDate: t, maxDate: i } = this,
                    s = e;
                  return i && m(e, i) ? (s = i) : t && f(e, t) && (s = t), s;
                }),
                (this.$el = n(e)),
                !this.$el)
              )
                return;
              (this.$datepicker = o({ className: "air-datepicker" })),
                (this.opts = w({}, s, t)),
                (this.$customContainer =
                  !!this.opts.container && n(this.opts.container)),
                (this.$altField = n(this.opts.altField || !1));
              let { view: r, startDate: c } = this.opts;
              c || (this.opts.startDate = new Date()),
                "INPUT" === this.$el.nodeName && (this.elIsInput = !0),
                (this.inited = !1),
                (this.visible = !1),
                (this.viewDate = x(this.opts.startDate)),
                (this.focusDate = !1),
                (this.initialReadonly = this.$el.getAttribute("readonly")),
                (this.customHide = !1),
                (this.currentView = r),
                (this.selectedDates = []),
                (this.views = {}),
                (this.keys = []),
                (this.rangeDateFrom = ""),
                (this.rangeDateTo = ""),
                (this.timepickerIsActive = !1),
                (this.treatAsInline = this.opts.inline || !this.elIsInput),
                this.init();
            }
            init() {
              let {
                  opts: e,
                  treatAsInline: t,
                  opts: {
                    inline: i,
                    isMobile: s,
                    selectedDates: o,
                    keyboardNav: a,
                    onlyTimepicker: r,
                  },
                } = this,
                l = n("body");
              (!N || (N && H && !l.contains(H))) &&
                !i &&
                this.elIsInput &&
                !this.$customContainer &&
                B.buildGlobalContainer(B.defaultGlobalContainerId),
                !s || j || t || this._createMobileOverlay(),
                this._handleLocale(),
                this._bindSubEvents(),
                this._createMinMaxDates(),
                this._limitViewDateByMaxMinDates(),
                this.elIsInput &&
                  (i || this._bindEvents(),
                  a && !r && (this.keyboardNav = new R({ dp: this, opts: e }))),
                o && this.selectDate(o, { silent: !0 }),
                this.opts.visible && !t && this.show(),
                s && !t && this.$el.setAttribute("readonly", !0),
                t && this._createComponents();
            }
            _createMobileOverlay() {
              (j = o({ className: "air-datepicker-overlay" })),
                H.appendChild(j);
            }
            _createComponents() {
              let {
                opts: e,
                treatAsInline: t,
                opts: {
                  inline: i,
                  buttons: s,
                  timepicker: n,
                  position: o,
                  classes: a,
                  onlyTimepicker: r,
                  isMobile: l,
                },
              } = this;
              this._buildBaseHtml(),
                this.elIsInput && (i || this._setPositionClasses(o)),
                (!i && this.elIsInput) ||
                  this.$datepicker.classList.add("-inline-"),
                a && this.$datepicker.classList.add(...a.split(" ")),
                r && this.$datepicker.classList.add("-only-timepicker-"),
                l && !t && this._addMobileAttributes(),
                (this.views[this.currentView] = new P({
                  dp: this,
                  type: this.currentView,
                  opts: e,
                })),
                (this.nav = new k({ dp: this, opts: e })),
                n && this._addTimepicker(),
                s && this._addButtons(),
                this.$content.appendChild(this.views[this.currentView].$el),
                this.$nav.appendChild(this.nav.$el);
            }
            _destroyComponents() {
              for (let e in this.views) this.views[e].destroy();
              (this.views = {}),
                this.nav.destroy(),
                this.timepicker && this.timepicker.destroy();
            }
            _addMobileAttributes() {
              j.addEventListener("click", this._onClickOverlay),
                this.$datepicker.classList.add("-is-mobile-"),
                this.$el.setAttribute("readonly", !0);
            }
            _removeMobileAttributes() {
              j.removeEventListener("click", this._onClickOverlay),
                this.$datepicker.classList.remove("-is-mobile-"),
                this.initialReadonly ||
                  "" === this.initialReadonly ||
                  this.$el.removeAttribute("readonly");
            }
            _createMinMaxDates() {
              let { minDate: e, maxDate: t } = this.opts;
              (this.minDate = !!e && x(e)), (this.maxDate = !!t && x(t));
            }
            _addTimepicker() {
              (this.$timepicker = o({ className: "air-datepicker--time" })),
                this.$datepicker.appendChild(this.$timepicker),
                (this.timepicker = new F({ dp: this, opts: this.opts })),
                this.$timepicker.appendChild(this.timepicker.$el);
            }
            _addButtons() {
              (this.$buttons = o({ className: "air-datepicker--buttons" })),
                this.$datepicker.appendChild(this.$buttons),
                (this.buttons = new A({ dp: this, opts: this.opts })),
                this.$buttons.appendChild(this.buttons.$el);
            }
            _bindSubEvents() {
              this.on(i.eventChangeSelectedDate, this._onChangeSelectedDate),
                this.on(i.eventChangeFocusDate, this._onChangeFocusedDate),
                this.on(i.eventChangeTime, this._onChangeTime);
            }
            _buildBaseHtml() {
              let { inline: e } = this.opts;
              var t, i;
              this.elIsInput
                ? e
                  ? ((t = this.$datepicker),
                    (i = this.$el).parentNode.insertBefore(t, i.nextSibling))
                  : this.$container.appendChild(this.$datepicker)
                : this.$el.appendChild(this.$datepicker),
                (this.$datepicker.innerHTML =
                  '<i class="air-datepicker--pointer"></i><div class="air-datepicker--navigation"></div><div class="air-datepicker--content"></div>'),
                (this.$content = n(
                  ".air-datepicker--content",
                  this.$datepicker
                )),
                (this.$pointer = n(
                  ".air-datepicker--pointer",
                  this.$datepicker
                )),
                (this.$nav = n(
                  ".air-datepicker--navigation",
                  this.$datepicker
                ));
            }
            _handleLocale() {
              let {
                locale: e,
                dateFormat: t,
                firstDay: i,
                timepicker: s,
                onlyTimepicker: n,
                timeFormat: o,
                dateTimeSeparator: a,
              } = this.opts;
              var r;
              (this.locale = ((r = e), JSON.parse(JSON.stringify(r)))),
                t && (this.locale.dateFormat = t),
                void 0 !== o && "" !== o && (this.locale.timeFormat = o);
              let { timeFormat: l } = this.locale;
              if (
                ("" !== i && (this.locale.firstDay = i),
                s && "function" != typeof t)
              ) {
                let e = l ? a : "";
                this.locale.dateFormat = [this.locale.dateFormat, l || ""].join(
                  e
                );
              }
              n &&
                "function" != typeof t &&
                (this.locale.dateFormat = this.locale.timeFormat);
            }
            _setPositionClasses(e) {
              if ("function" == typeof e)
                return void this.$datepicker.classList.add("-custom-position-");
              let t = (e = e.split(" "))[0],
                i = `air-datepicker -${t}-${e[1]}- -from-${t}-`;
              this.$datepicker.classList.add(...i.split(" "));
            }
            _bindEvents() {
              this.$el.addEventListener(this.opts.showEvent, this._onFocus),
                this.$el.addEventListener("blur", this._onBlur),
                this.$datepicker.addEventListener(
                  "mousedown",
                  this._onMouseDown
                ),
                this.$datepicker.addEventListener("mouseup", this._onMouseUp),
                window.addEventListener("resize", this._onResize);
            }
            _limitViewDateByMaxMinDates() {
              let { viewDate: e, minDate: t, maxDate: i } = this;
              i && m(e, i) && this.setViewDate(i),
                t && f(e, t) && this.setViewDate(t);
            }
            formatDate() {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : this.viewDate,
                t = arguments.length > 1 ? arguments[1] : void 0;
              if (((e = x(e)), !(e instanceof Date))) return;
              let i = t,
                s = this.locale,
                n = l(e),
                o = n.dayPeriod,
                a = d(e),
                r = B.replacer,
                c = {
                  T: e.getTime(),
                  m: n.minutes,
                  mm: n.fullMinutes,
                  h: n.hours12,
                  hh: n.fullHours12,
                  H: n.hours,
                  HH: n.fullHours,
                  aa: o,
                  AA: o.toUpperCase(),
                  E: s.daysShort[n.day],
                  EEEE: s.days[n.day],
                  d: n.date,
                  dd: n.fullDate,
                  M: n.month + 1,
                  MM: n.fullMonth,
                  MMM: s.monthsShort[n.month],
                  MMMM: s.months[n.month],
                  yy: n.year.toString().slice(-2),
                  yyyy: n.year,
                  yyyy1: a[0],
                  yyyy2: a[1],
                };
              for (let [e, t] of Object.entries(c)) i = r(i, S(e), t);
              return i;
            }
            down(e) {
              this._handleUpDownActions(e, "down");
            }
            up(e) {
              this._handleUpDownActions(e, "up");
            }
            selectDate(e) {
              let t,
                s =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                { currentView: n, parsedViewDate: o, selectedDates: a } = this,
                { updateTime: r } = s,
                {
                  moveToOtherMonthsOnSelect: l,
                  moveToOtherYearsOnSelect: c,
                  multipleDates: h,
                  range: d,
                  autoClose: u,
                  onBeforeSelect: p,
                } = this.opts,
                f = a.length;
              if (Array.isArray(e))
                return (
                  e.forEach((e) => {
                    this.selectDate(e, s);
                  }),
                  new Promise((e) => {
                    setTimeout(e);
                  })
                );
              if ((e = x(e)) instanceof Date) {
                if (p && !p({ date: e, datepicker: this }))
                  return Promise.resolve();
                if (
                  (n === i.days &&
                    e.getMonth() !== o.month &&
                    l &&
                    (t = new Date(e.getFullYear(), e.getMonth(), 1)),
                  n === i.years &&
                    e.getFullYear() !== o.year &&
                    c &&
                    (t = new Date(e.getFullYear(), 0, 1)),
                  t && this.setViewDate(t),
                  h && !d)
                ) {
                  if (f === h) return;
                  this._checkIfDateIsSelected(e) || a.push(e);
                } else if (d)
                  switch (f) {
                    case 1:
                      a.push(e),
                        this.rangeDateTo || (this.rangeDateTo = e),
                        m(this.rangeDateFrom, this.rangeDateTo) &&
                          ((this.rangeDateTo = this.rangeDateFrom),
                          (this.rangeDateFrom = e)),
                        (this.selectedDates = [
                          this.rangeDateFrom,
                          this.rangeDateTo,
                        ]);
                      break;
                    case 2:
                      (this.selectedDates = [e]),
                        (this.rangeDateFrom = e),
                        (this.rangeDateTo = "");
                      break;
                    default:
                      (this.selectedDates = [e]), (this.rangeDateFrom = e);
                  }
                else this.selectedDates = [e];
                return (
                  this.trigger(i.eventChangeSelectedDate, {
                    action: i.actionSelectDate,
                    silent: null == s ? void 0 : s.silent,
                    date: e,
                    updateTime: r,
                  }),
                  this._updateLastSelectedDate(e),
                  u &&
                    !this.timepickerIsActive &&
                    this.visible &&
                    (h || d ? d && 1 === f && this.hide() : this.hide()),
                  new Promise((e) => {
                    setTimeout(e);
                  })
                );
              }
            }
            unselectDate(e) {
              let t = this.selectedDates,
                s = this;
              if ((e = x(e)) instanceof Date)
                return t.some((n, o) => {
                  if (p(n, e))
                    return (
                      t.splice(o, 1),
                      s.selectedDates.length
                        ? s._updateLastSelectedDate(
                            s.selectedDates[s.selectedDates.length - 1]
                          )
                        : ((s.rangeDateFrom = ""),
                          (s.rangeDateTo = ""),
                          s._updateLastSelectedDate(!1)),
                      this.trigger(i.eventChangeSelectedDate, {
                        action: i.actionUnselectDate,
                        date: e,
                      }),
                      !0
                    );
                });
            }
            replaceDate(e, t) {
              let s = this.selectedDates.find((t) => p(t, e, this.currentView)),
                n = this.selectedDates.indexOf(s);
              n < 0 ||
                p(this.selectedDates[n], t, this.currentView) ||
                ((this.selectedDates[n] = t),
                this.trigger(i.eventChangeSelectedDate, {
                  action: i.actionSelectDate,
                  date: t,
                  updateTime: !0,
                }),
                this._updateLastSelectedDate(t));
            }
            clear() {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return (
                (this.selectedDates = []),
                (this.rangeDateFrom = !1),
                (this.rangeDateTo = !1),
                (this.lastSelectedDate = !1),
                this.trigger(i.eventChangeSelectedDate, {
                  action: i.actionUnselectDate,
                  silent: e.silent,
                }),
                new Promise((e) => {
                  setTimeout(e);
                })
              );
            }
            show() {
              let { onShow: e, isMobile: t } = this.opts;
              this._cancelScheduledCall(),
                this.visible || this.hideAnimation || this._createComponents(),
                this.setPosition(this.opts.position),
                this.$datepicker.classList.add("-active-"),
                (this.visible = !0),
                e && this._scheduleCallAfterTransition(e),
                t && this._showMobileOverlay();
            }
            hide() {
              let { onHide: e, isMobile: t } = this.opts,
                i = this._hasTransition();
              (this.visible = !1),
                (this.hideAnimation = !0),
                this.$datepicker.classList.remove("-active-"),
                this.customHide && this.customHide(),
                this.elIsInput && this.$el.blur(),
                this._scheduleCallAfterTransition((t) => {
                  !this.customHide &&
                    ((t && i) || (!t && !i)) &&
                    this._finishHide(),
                    e && e(t);
                }),
                t && j.classList.remove("-active-");
            }
            _triggerOnSelect() {
              let e = [],
                t = [],
                {
                  selectedDates: i,
                  locale: s,
                  opts: { onSelect: n, multipleDates: o, range: a },
                } = this,
                r = o || a,
                l = "function" == typeof s.dateFormat;
              i.length &&
                ((e = i.map(g)),
                (t = l
                  ? o
                    ? s.dateFormat(e)
                    : e.map((e) => s.dateFormat(e))
                  : e.map((e) => this.formatDate(e, s.dateFormat)))),
                n({
                  date: r ? e : e[0],
                  formattedDate: r ? t : t[0],
                  datepicker: this,
                });
            }
            _handleAlreadySelectedDates(e, t) {
              const { range: i, toggleSelected: s } = this.opts;
              let n =
                "function" == typeof s ? s({ datepicker: this, date: t }) : s;
              i &&
                (n || (2 !== this.selectedDates.length && this.selectDate(t))),
                n ? this.unselectDate(t) : this._updateLastSelectedDate(e);
            }
            _handleUpDownActions(e, t) {
              if (
                !((e = x(e || this.focusDate || this.viewDate)) instanceof Date)
              )
                return;
              let i = "up" === t ? this.viewIndex + 1 : this.viewIndex - 1;
              i > 2 && (i = 2),
                i < 0 && (i = 0),
                this.setViewDate(new Date(e.getFullYear(), e.getMonth(), 1)),
                this.setCurrentView(this.viewIndexes[i]);
            }
            _handleRangeOnFocus() {
              1 === this.selectedDates.length &&
                (m(this.selectedDates[0], this.focusDate)
                  ? ((this.rangeDateTo = this.selectedDates[0]),
                    (this.rangeDateFrom = this.focusDate))
                  : ((this.rangeDateTo = this.focusDate),
                    (this.rangeDateFrom = this.selectedDates[0])));
            }
            getCell(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : i.day;
              if (!((e = x(e)) instanceof Date)) return;
              let { year: s, month: n, date: o } = l(e),
                a = `[data-year="${s}"]`,
                r = `[data-month="${n}"]`,
                c = {
                  [i.day]: `${a}${r}[data-date="${o}"]`,
                  [i.month]: `${a}${r}`,
                  [i.year]: `${a}`,
                };
              return this.views[this.currentView].$el.querySelector(c[t]);
            }
            _showMobileOverlay() {
              j.classList.add("-active-");
            }
            _hasTransition() {
              return (
                window
                  .getComputedStyle(this.$datepicker)
                  .getPropertyValue("transition-duration")
                  .split(", ")
                  .reduce((e, t) => parseFloat(t) + e, 0) > 0
              );
            }
            get shouldUpdateDOM() {
              return this.visible || this.treatAsInline;
            }
            get parsedViewDate() {
              return l(this.viewDate);
            }
            get currentViewSingular() {
              return this.currentView.slice(0, -1);
            }
            get curDecade() {
              return d(this.viewDate);
            }
            get viewIndex() {
              return this.viewIndexes.indexOf(this.currentView);
            }
            get isFinalView() {
              return this.currentView === i.years;
            }
            get hasSelectedDates() {
              return this.selectedDates.length > 0;
            }
            get isMinViewReached() {
              return (
                this.currentView === this.opts.minView ||
                this.currentView === i.days
              );
            }
            get $container() {
              return this.$customContainer || H;
            }
            static replacer(e, t, i) {
              return e.replace(t, function (e, t, s, n) {
                return t + i + n;
              });
            }
          }
          var V;
          return (
            z(B, "defaults", s),
            z(B, "version", "3.4.0"),
            z(B, "defaultGlobalContainerId", "air-datepicker-global-container"),
            (V = B.prototype),
            Object.assign(V, $),
            t.default
          );
        })();
      },
      318: () => {
        const e = document.querySelectorAll("[data-animation]"),
          t = new IntersectionObserver(
            function (e, t) {
              e.forEach((e) => {
                if (!e.isIntersecting) return;
                e.target.classList.remove("left-appearance");
                const i = e.target.children;
                setTimeout(() => {
                  for (let e of i)
                    if (e.hasAttribute("data-animate"))
                      for (let t of e.children)
                        t.hasAttribute("blog") &&
                          (t.classList.remove("appearance-block4"),
                          t.classList.remove("appearance-block5")),
                          t.hasAttribute("destinations") &&
                            (t.classList.remove("left-appearance-block"),
                            t.classList.remove("left-appearance-block2"),
                            t.classList.remove("left-appearance-block3"));
                }, 200),
                  t.unobserve(e.target);
              });
            },
            { root: null, threshold: 0.25 }
          );
        e.forEach((e) => {
          t.observe(e), e.classList.add("left-appearance");
        });
      },
      964: () => {
        const e = document.querySelector(".burger"),
          t = document.querySelector(".close"),
          i = document.querySelector(".header__left"),
          s = document.querySelectorAll(".nav__item"),
          n = () => {
            i.classList.remove("header__left-active");
          };
        s.forEach((e) => {
          e.addEventListener("click", n);
        }),
          e.addEventListener("click", () => {
            i.classList.add("header__left-active");
          }),
          t.addEventListener("click", n),
          document.addEventListener("keydown", (e) => {
            "Escape" === e.code && n();
          });
      },
      59: () => {
        const e = document.querySelector("#location"),
          t = document.querySelector("#airDate"),
          i = document.querySelector("#participant"),
          s =
            (document.querySelector("#hero-btn"),
            document.querySelector(".choose-programm")),
          n = document.querySelector(".reset-btn");
        s.addEventListener("submit", (s) => {
          s.preventDefault(),
            e.value && t.value && i.value
              ? (window.location.href =
                  "https://pegastk.com/?etext=2202.Ownu0OmdbGuRTQtVPb8F9r7-DYwVe7x_qw_vNAYcg5h1c3hhc29mYXhwenl3bGpz.d766a1ca3dba274ccb09ba75fd1c8d07a652a74b&yclid=5887379468034841082")
              : (alert("Не все поля заполнены"),
                n.classList.remove("reset-btn--hidden"));
        });
      },
      173: () => {
        const e = document.querySelectorAll("img[data-src]"),
          t = new IntersectionObserver(
            function (e, t) {
              e.forEach((e) => {
                e.isIntersecting &&
                  ((e.target.srcset = e.target.dataset.src),
                  e.target.addEventListener("load", () =>
                    e.target.classList.remove("layz-blur")
                  ),
                  t.unobserve(e.target));
              });
            },
            { root: null, threshold: 0.1 }
          );
        e.forEach((e) => t.observe(e));
      },
      698: () => {
        const e = document.querySelectorAll(".card-blog__footer");
        document.querySelectorAll(".card-blog__text").forEach((e) => {
          if (e.textContent.length < 240) {
            const t = e
              .closest(".card-blog__info")
              .querySelector(".card-blog__footer")
              .querySelector("button");
            if (!t) return;
            t.classList.add("card-blog__btn--disabled"),
              t.setAttribute("disabled", !0);
          }
        }),
          e.forEach((e) => {
            e.lastElementChild.addEventListener("click", (t) => {
              var i, s, n;
              (s = t.target),
                (n = "decrease-text--row-4"),
                (i = e).previousElementSibling.classList.toggle(n),
                i.previousElementSibling.classList.contains(n)
                  ? ((s.textContent = "читать полностью"),
                    s.classList.remove("opened-content"))
                  : ((s.textContent = "скрыть"),
                    s.classList.add("opened-content"));
            });
          });
      },
    },
    t = {};
  function i(s) {
    var n = t[s];
    if (void 0 !== n) return n.exports;
    var o = (t[s] = { exports: {} });
    return e[s].call(o.exports, o, o.exports, i), o.exports;
  }
  (i.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return i.d(t, { a: t }), t;
  }),
    (i.d = (e, t) => {
      for (var s in t)
        i.o(t, s) &&
          !i.o(e, s) &&
          Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
    }),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      function e(e, t) {
        let i;
        return function () {
          for (var s = arguments.length, n = new Array(s), o = 0; o < s; o++)
            n[o] = arguments[o];
          clearTimeout(i),
            (i = setTimeout(() => {
              e.apply(this, n);
            }, t));
        };
      }
      const t = document.querySelector(".header");
      document.addEventListener(
        "scroll",
        e(() => {
          document.addEventListener("scroll", () => {
            document.documentElement.scrollTop > 1
              ? t.classList.add("header-fixed")
              : t.classList.remove("header-fixed");
          });
        }, 100)
      ),
        i(318),
        i(698),
        i(59),
        i(964);
      const s = document.querySelector(".modal"),
        n = document.querySelector(".consultation-btn"),
        o = document.querySelector(".modal__close"),
        a = document.querySelector(".show-hide-password"),
        r = document.querySelector("#password"),
        l = document.querySelector('svg[data-status="hide"]'),
        c = document.querySelector(".hide-password"),
        h = document.querySelector("body"),
        d = function (e, t) {
          (r.type = e), l.classList.toggle(t), c.classList.toggle(t);
        },
        u = function () {
          s.classList.add("modal--hidden"), h.classList.remove("body--modal");
        };
      a.addEventListener("click", (e) => {
        e.preventDefault(),
          "password" === r.type
            ? d("text", "hide-password")
            : d("password", "hide-password");
      }),
        r.addEventListener(
          "input",
          e(function () {
            this.value < 1 ? (a.style.opacity = 0) : (a.style.opacity = 1);
          }, 150)
        ),
        n.addEventListener("click", (e) => {
          e.preventDefault(),
            s.classList.remove("modal--hidden"),
            h.classList.add("body--modal");
        }),
        s.addEventListener("click", (e) => {
          e.target.hasAttribute("data-overlay") && u();
        }),
        o.addEventListener("click", (e) => {
          e.preventDefault(), u();
        }),
        document.addEventListener("keydown", (e) => {
          "Escape" === e.code && u();
        }),
        i(173);
      var p = i(911);
      new (i.n(p)())("#airDate", { range: !0, multipleDatesSeparator: " - " });
      const m = (e, t = 1e4) => (
          (e = parseFloat(e + "") || 0),
          Math.round((e + Number.EPSILON) * t) / t
        ),
        f = function (e) {
          if (!(e && e instanceof Element && e.offsetParent)) return !1;
          const t = e.scrollHeight > e.clientHeight,
            i = window.getComputedStyle(e).overflowY,
            s = -1 !== i.indexOf("hidden"),
            n = -1 !== i.indexOf("visible");
          return t && !s && !n;
        },
        g = function (e, t = void 0) {
          return (
            !(!e || e === document.body || (t && e === t)) &&
            (f(e) ? e : g(e.parentElement, t))
          );
        },
        v = function (e) {
          var t = new DOMParser().parseFromString(e, "text/html").body;
          if (t.childElementCount > 1) {
            for (var i = document.createElement("div"); t.firstChild; )
              i.appendChild(t.firstChild);
            return i;
          }
          return t.firstChild;
        },
        b = (e) => `${e || ""}`.split(" ").filter((e) => !!e),
        y = (e, t, i) => {
          b(t).forEach((t) => {
            e && e.classList.toggle(t, i || !1);
          });
        };
      class w {
        constructor(e) {
          Object.defineProperty(this, "pageX", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
            Object.defineProperty(this, "pageY", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "clientX", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "clientY", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "id", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "time", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "nativePointer", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.nativePointer = e),
            (this.pageX = e.pageX),
            (this.pageY = e.pageY),
            (this.clientX = e.clientX),
            (this.clientY = e.clientY),
            (this.id = self.Touch && e instanceof Touch ? e.identifier : -1),
            (this.time = Date.now());
        }
      }
      const x = { passive: !1 };
      class S {
        constructor(
          e,
          { start: t = () => !0, move: i = () => {}, end: s = () => {} }
        ) {
          Object.defineProperty(this, "element", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
            Object.defineProperty(this, "startCallback", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "moveCallback", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "endCallback", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "currentPointers", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: [],
            }),
            Object.defineProperty(this, "startPointers", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: [],
            }),
            (this.element = e),
            (this.startCallback = t),
            (this.moveCallback = i),
            (this.endCallback = s);
          for (const e of [
            "onPointerStart",
            "onTouchStart",
            "onMove",
            "onTouchEnd",
            "onPointerEnd",
            "onWindowBlur",
          ])
            this[e] = this[e].bind(this);
          this.element.addEventListener("mousedown", this.onPointerStart, x),
            this.element.addEventListener("touchstart", this.onTouchStart, x),
            this.element.addEventListener("touchmove", this.onMove, x),
            this.element.addEventListener("touchend", this.onTouchEnd),
            this.element.addEventListener("touchcancel", this.onTouchEnd);
        }
        onPointerStart(e) {
          if (!e.buttons || 0 !== e.button) return;
          const t = new w(e);
          this.currentPointers.some((e) => e.id === t.id) ||
            (this.triggerPointerStart(t, e) &&
              (window.addEventListener("mousemove", this.onMove),
              window.addEventListener("mouseup", this.onPointerEnd),
              window.addEventListener("blur", this.onWindowBlur)));
        }
        onTouchStart(e) {
          for (const t of Array.from(e.changedTouches || []))
            this.triggerPointerStart(new w(t), e);
          window.addEventListener("blur", this.onWindowBlur);
        }
        onMove(e) {
          const t = this.currentPointers.slice(),
            i =
              "changedTouches" in e
                ? Array.from(e.changedTouches || []).map((e) => new w(e))
                : [new w(e)],
            s = [];
          for (const e of i) {
            const t = this.currentPointers.findIndex((t) => t.id === e.id);
            t < 0 || (s.push(e), (this.currentPointers[t] = e));
          }
          s.length && this.moveCallback(e, this.currentPointers.slice(), t);
        }
        onPointerEnd(e) {
          (e.buttons > 0 && 0 !== e.button) ||
            (this.triggerPointerEnd(e, new w(e)),
            window.removeEventListener("mousemove", this.onMove),
            window.removeEventListener("mouseup", this.onPointerEnd),
            window.removeEventListener("blur", this.onWindowBlur));
        }
        onTouchEnd(e) {
          for (const t of Array.from(e.changedTouches || []))
            this.triggerPointerEnd(e, new w(t));
        }
        triggerPointerStart(e, t) {
          return (
            !!this.startCallback(t, e, this.currentPointers.slice()) &&
            (this.currentPointers.push(e), this.startPointers.push(e), !0)
          );
        }
        triggerPointerEnd(e, t) {
          const i = this.currentPointers.findIndex((e) => e.id === t.id);
          i < 0 ||
            (this.currentPointers.splice(i, 1),
            this.startPointers.splice(i, 1),
            this.endCallback(e, t, this.currentPointers.slice()));
        }
        onWindowBlur() {
          this.clear();
        }
        clear() {
          for (; this.currentPointers.length; ) {
            const e = this.currentPointers[this.currentPointers.length - 1];
            this.currentPointers.splice(this.currentPointers.length - 1, 1),
              this.startPointers.splice(this.currentPointers.length - 1, 1),
              this.endCallback(
                new Event("touchend", {
                  bubbles: !0,
                  cancelable: !0,
                  clientX: e.clientX,
                  clientY: e.clientY,
                }),
                e,
                this.currentPointers.slice()
              );
          }
        }
        stop() {
          this.element.removeEventListener("mousedown", this.onPointerStart, x),
            this.element.removeEventListener(
              "touchstart",
              this.onTouchStart,
              x
            ),
            this.element.removeEventListener("touchmove", this.onMove, x),
            this.element.removeEventListener("touchend", this.onTouchEnd),
            this.element.removeEventListener("touchcancel", this.onTouchEnd),
            window.removeEventListener("mousemove", this.onMove),
            window.removeEventListener("mouseup", this.onPointerEnd),
            window.removeEventListener("blur", this.onWindowBlur);
        }
      }
      function C(e, t) {
        return t
          ? Math.sqrt(
              Math.pow(t.clientX - e.clientX, 2) +
                Math.pow(t.clientY - e.clientY, 2)
            )
          : 0;
      }
      function D(e, t) {
        return t
          ? {
              clientX: (e.clientX + t.clientX) / 2,
              clientY: (e.clientY + t.clientY) / 2,
            }
          : e;
      }
      const M = (e) =>
          "object" == typeof e &&
          null !== e &&
          e.constructor === Object &&
          "[object Object]" === Object.prototype.toString.call(e),
        E = (e, ...t) => {
          const i = t.length;
          for (let s = 0; s < i; s++) {
            const i = t[s] || {};
            Object.entries(i).forEach(([t, i]) => {
              const s = Array.isArray(i) ? [] : {};
              e[t] || Object.assign(e, { [t]: s }),
                M(i)
                  ? Object.assign(e[t], E(s, i))
                  : Array.isArray(i)
                  ? Object.assign(e, { [t]: [...i] })
                  : Object.assign(e, { [t]: i });
            });
          }
          return e;
        },
        T = function (e, t) {
          return e
            .split(".")
            .reduce((e, t) => ("object" == typeof e ? e[t] : void 0), t);
        };
      class P {
        constructor(e = {}) {
          Object.defineProperty(this, "options", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          }),
            Object.defineProperty(this, "events", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new Map(),
            }),
            this.setOptions(e);
          for (const e of Object.getOwnPropertyNames(
            Object.getPrototypeOf(this)
          ))
            e.startsWith("on") &&
              "function" == typeof this[e] &&
              (this[e] = this[e].bind(this));
        }
        setOptions(e) {
          this.options = e ? E({}, this.constructor.defaults, e) : {};
          for (const [e, t] of Object.entries(this.option("on") || {}))
            this.on(e, t);
        }
        option(e, ...t) {
          let i = T(e, this.options);
          return (
            i && "function" == typeof i && (i = i.call(this, this, ...t)), i
          );
        }
        optionFor(e, t, i, ...s) {
          let n = T(t, e);
          var o;
          "string" != typeof (o = n) ||
            isNaN(o) ||
            isNaN(parseFloat(o)) ||
            (n = parseFloat(n)),
            "true" === n && (n = !0),
            "false" === n && (n = !1),
            n && "function" == typeof n && (n = n.call(this, this, e, ...s));
          let a = T(t, this.options);
          return (
            a && "function" == typeof a
              ? (n = a.call(this, this, e, ...s, n))
              : void 0 === n && (n = a),
            void 0 === n ? i : n
          );
        }
        cn(e) {
          const t = this.options.classes;
          return (t && t[e]) || "";
        }
        localize(e, t = []) {
          e = String(e).replace(/\{\{(\w+).?(\w+)?\}\}/g, (e, t, i) => {
            let s = "";
            return (
              i
                ? (s = this.option(
                    `${t[0] + t.toLowerCase().substring(1)}.l10n.${i}`
                  ))
                : t && (s = this.option(`l10n.${t}`)),
              s || (s = e),
              s
            );
          });
          for (let i = 0; i < t.length; i++) e = e.split(t[i][0]).join(t[i][1]);
          return e.replace(/\{\{(.*?)\}\}/g, (e, t) => t);
        }
        on(e, t) {
          let i = [];
          "string" == typeof e
            ? (i = e.split(" "))
            : Array.isArray(e) && (i = e),
            this.events || (this.events = new Map()),
            i.forEach((e) => {
              let i = this.events.get(e);
              i || (this.events.set(e, []), (i = [])),
                i.includes(t) || i.push(t),
                this.events.set(e, i);
            });
        }
        off(e, t) {
          let i = [];
          "string" == typeof e
            ? (i = e.split(" "))
            : Array.isArray(e) && (i = e),
            i.forEach((e) => {
              const i = this.events.get(e);
              if (Array.isArray(i)) {
                const e = i.indexOf(t);
                e > -1 && i.splice(e, 1);
              }
            });
        }
        emit(e, ...t) {
          [...(this.events.get(e) || [])].forEach((e) => e(this, ...t)),
            "*" !== e && this.emit("*", e, ...t);
        }
      }
      Object.defineProperty(P, "version", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "5.0.23",
      }),
        Object.defineProperty(P, "defaults", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: {},
        });
      class O extends P {
        constructor(e = {}) {
          super(e),
            Object.defineProperty(this, "plugins", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: {},
            });
        }
        attachPlugins(e = {}) {
          const t = new Map();
          for (const [i, s] of Object.entries(e)) {
            const e = this.option(i),
              n = this.plugins[i];
            n || !1 === e
              ? n && !1 === e && (n.detach(), delete this.plugins[i])
              : t.set(i, new s(this, e || {}));
          }
          for (const [e, i] of t) (this.plugins[e] = i), i.attach();
        }
        detachPlugins(e) {
          e = e || Object.keys(this.plugins);
          for (const t of e) {
            const e = this.plugins[t];
            e && e.detach(), delete this.plugins[t];
          }
          return this.emit("detachPlugins"), this;
        }
      }
      var k;
      !(function (e) {
        (e[(e.Init = 0)] = "Init"),
          (e[(e.Error = 1)] = "Error"),
          (e[(e.Ready = 2)] = "Ready"),
          (e[(e.Panning = 3)] = "Panning"),
          (e[(e.Mousemove = 4)] = "Mousemove"),
          (e[(e.Destroy = 5)] = "Destroy");
      })(k || (k = {}));
      const L = ["a", "b", "c", "d", "e", "f"],
        A = {
          PANUP: "Move up",
          PANDOWN: "Move down",
          PANLEFT: "Move left",
          PANRIGHT: "Move right",
          ZOOMIN: "Zoom in",
          ZOOMOUT: "Zoom out",
          TOGGLEZOOM: "Toggle zoom level",
          TOGGLE1TO1: "Toggle zoom level",
          ITERATEZOOM: "Toggle zoom level",
          ROTATECCW: "Rotate counterclockwise",
          ROTATECW: "Rotate clockwise",
          FLIPX: "Flip horizontally",
          FLIPY: "Flip vertically",
          FITX: "Fit horizontally",
          FITY: "Fit vertically",
          RESET: "Reset",
          TOGGLEFS: "Toggle fullscreen",
        },
        _ = {
          content: null,
          width: "auto",
          height: "auto",
          panMode: "drag",
          touch: !0,
          dragMinThreshold: 3,
          lockAxis: !1,
          mouseMoveFactor: 1,
          mouseMoveFriction: 0.12,
          zoom: !0,
          pinchToZoom: !0,
          panOnlyZoomed: "auto",
          minScale: 1,
          maxScale: 2,
          friction: 0.25,
          dragFriction: 0.35,
          decelFriction: 0.05,
          click: "toggleZoom",
          dblClick: !1,
          wheel: "zoom",
          wheelLimit: 7,
          spinner: !0,
          bounds: "auto",
          infinite: !1,
          rubberband: !0,
          bounce: !0,
          maxVelocity: 75,
          transformParent: !1,
          classes: {
            content: "f-panzoom__content",
            isLoading: "is-loading",
            canZoomIn: "can-zoom_in",
            canZoomOut: "can-zoom_out",
            isDraggable: "is-draggable",
            isDragging: "is-dragging",
            inFullscreen: "in-fullscreen",
            htmlHasFullscreen: "with-panzoom-in-fullscreen",
          },
          l10n: A,
        },
        F =
          '<div class="f-spinner"><svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="20"></circle><circle cx="25" cy="25" r="20"></circle></svg></div>',
        I = (e) => e && null !== e && e instanceof Element && "nodeType" in e,
        R = (e, t) => {
          e &&
            b(t).forEach((t) => {
              e.classList.remove(t);
            });
        },
        $ = (e, t) => {
          e &&
            b(t).forEach((t) => {
              e.classList.add(t);
            });
        },
        z = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 },
        H = 1e3,
        j = "mousemove",
        N = "drag",
        B = "content";
      let V = null,
        W = null;
      class q extends O {
        get isTouchDevice() {
          return (
            null === W && (W = window.matchMedia("(hover: none)").matches), W
          );
        }
        get isMobile() {
          return (
            null === V &&
              (V = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)),
            V
          );
        }
        get panMode() {
          return this.options.panMode !== j || this.isTouchDevice ? N : j;
        }
        get panOnlyZoomed() {
          const e = this.options.panOnlyZoomed;
          return "auto" === e ? this.isTouchDevice : e;
        }
        get isInfinite() {
          return this.option("infinite");
        }
        get angle() {
          return (
            (180 * Math.atan2(this.current.b, this.current.a)) / Math.PI || 0
          );
        }
        get targetAngle() {
          return (
            (180 * Math.atan2(this.target.b, this.target.a)) / Math.PI || 0
          );
        }
        get scale() {
          const { a: e, b: t } = this.current;
          return Math.sqrt(e * e + t * t) || 1;
        }
        get targetScale() {
          const { a: e, b: t } = this.target;
          return Math.sqrt(e * e + t * t) || 1;
        }
        get minScale() {
          return this.option("minScale") || 1;
        }
        get fullScale() {
          const { contentRect: e } = this;
          return e.fullWidth / e.fitWidth || 1;
        }
        get maxScale() {
          return this.fullScale * (this.option("maxScale") || 1) || 1;
        }
        get coverScale() {
          const { containerRect: e, contentRect: t } = this,
            i = Math.max(e.height / t.fitHeight, e.width / t.fitWidth) || 1;
          return Math.min(this.fullScale, i);
        }
        get isScaling() {
          return (
            Math.abs(this.targetScale - this.scale) > 1e-5 && !this.isResting
          );
        }
        get isContentLoading() {
          const e = this.content;
          return !!(e && e instanceof HTMLImageElement) && !e.complete;
        }
        get isResting() {
          if (this.isBouncingX || this.isBouncingY) return !1;
          for (const e of L) {
            const t = "e" == e || "f" === e ? 0.001 : 1e-5;
            if (Math.abs(this.target[e] - this.current[e]) > t) return !1;
          }
          return !(!this.ignoreBounds && !this.checkBounds().inBounds);
        }
        constructor(e, t = {}, i = {}) {
          var s;
          if (
            (super(t),
            Object.defineProperty(this, "pointerTracker", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            }),
            Object.defineProperty(this, "resizeObserver", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            }),
            Object.defineProperty(this, "updateTimer", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            }),
            Object.defineProperty(this, "clickTimer", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            }),
            Object.defineProperty(this, "rAF", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            }),
            Object.defineProperty(this, "isTicking", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "friction", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            Object.defineProperty(this, "ignoreBounds", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "isBouncingX", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "isBouncingY", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "clicks", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            Object.defineProperty(this, "trackingPoints", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: [],
            }),
            Object.defineProperty(this, "pwt", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            Object.defineProperty(this, "cwd", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            Object.defineProperty(this, "pmme", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "state", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: k.Init,
            }),
            Object.defineProperty(this, "isDragging", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "container", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "content", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "spinner", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            }),
            Object.defineProperty(this, "containerRect", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: { width: 0, height: 0, innerWidth: 0, innerHeight: 0 },
            }),
            Object.defineProperty(this, "contentRect", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                fullWidth: 0,
                fullHeight: 0,
                fitWidth: 0,
                fitHeight: 0,
                width: 0,
                height: 0,
              },
            }),
            Object.defineProperty(this, "dragStart", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: { x: 0, y: 0, top: 0, left: 0, time: 0 },
            }),
            Object.defineProperty(this, "dragOffset", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: { x: 0, y: 0, time: 0 },
            }),
            Object.defineProperty(this, "current", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: Object.assign({}, z),
            }),
            Object.defineProperty(this, "target", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: Object.assign({}, z),
            }),
            Object.defineProperty(this, "velocity", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 },
            }),
            Object.defineProperty(this, "lockedAxis", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            !e)
          )
            throw new Error("Container Element Not Found");
          (this.container = e),
            this.initContent(),
            this.attachPlugins(Object.assign(Object.assign({}, q.Plugins), i)),
            this.emit("attachPlugins"),
            this.emit("init");
          const n = this.content;
          if (
            (n.addEventListener("load", this.onLoad),
            n.addEventListener("error", this.onError),
            this.isContentLoading)
          ) {
            if (this.option("spinner")) {
              e.classList.add(this.cn("isLoading"));
              const t = v(F);
              !e.contains(n) || n.parentElement instanceof HTMLPictureElement
                ? (this.spinner = e.appendChild(t))
                : (this.spinner =
                    (null === (s = n.parentElement) || void 0 === s
                      ? void 0
                      : s.insertBefore(t, n)) || null);
            }
            this.emit("beforeLoad");
          } else
            queueMicrotask(() => {
              this.enable();
            });
        }
        initContent() {
          const { container: e } = this,
            t = this.cn(B);
          let i = this.option(B) || e.querySelector(`.${t}`);
          if (
            (i ||
              ((i = e.querySelector("img,picture") || e.firstElementChild),
              i && $(i, t)),
            i instanceof HTMLPictureElement && (i = i.querySelector("img")),
            !i)
          )
            throw new Error("No content found");
          this.content = i;
        }
        onLoad() {
          const { spinner: e, container: t, state: i } = this;
          e && (e.remove(), (this.spinner = null)),
            this.option("spinner") && t.classList.remove(this.cn("isLoading")),
            this.emit("afterLoad"),
            i === k.Init ? this.enable() : this.updateMetrics();
        }
        onError() {
          this.state !== k.Destroy &&
            (this.spinner && (this.spinner.remove(), (this.spinner = null)),
            this.stop(),
            this.detachEvents(),
            (this.state = k.Error),
            this.emit("error"));
        }
        attachObserver() {
          var e;
          const t = () => {
            const { container: e, containerRect: t } = this;
            return (
              Math.abs(t.width - e.getBoundingClientRect().width) > 0.1 ||
              Math.abs(t.height - e.getBoundingClientRect().height) > 0.1
            );
          };
          this.resizeObserver ||
            void 0 === window.ResizeObserver ||
            (this.resizeObserver = new ResizeObserver(() => {
              this.updateTimer ||
                (t()
                  ? (this.onResize(),
                    this.isMobile &&
                      (this.updateTimer = setTimeout(() => {
                        t() && this.onResize(), (this.updateTimer = null);
                      }, 500)))
                  : this.updateTimer &&
                    (clearTimeout(this.updateTimer),
                    (this.updateTimer = null)));
            })),
            null === (e = this.resizeObserver) ||
              void 0 === e ||
              e.observe(this.container);
        }
        detachObserver() {
          var e;
          null === (e = this.resizeObserver) || void 0 === e || e.disconnect();
        }
        attachEvents() {
          const { container: e } = this;
          e.addEventListener("click", this.onClick, {
            passive: !1,
            capture: !1,
          }),
            e.addEventListener("wheel", this.onWheel, { passive: !1 }),
            (this.pointerTracker = new S(e, {
              start: this.onPointerDown,
              move: this.onPointerMove,
              end: this.onPointerUp,
            })),
            document.addEventListener(j, this.onMouseMove);
        }
        detachEvents() {
          var e;
          const { container: t } = this;
          t.removeEventListener("click", this.onClick, {
            passive: !1,
            capture: !1,
          }),
            t.removeEventListener("wheel", this.onWheel, { passive: !1 }),
            null === (e = this.pointerTracker) || void 0 === e || e.stop(),
            (this.pointerTracker = null),
            document.removeEventListener(j, this.onMouseMove),
            document.removeEventListener("keydown", this.onKeydown, !0),
            this.clickTimer &&
              (clearTimeout(this.clickTimer), (this.clickTimer = null)),
            this.updateTimer &&
              (clearTimeout(this.updateTimer), (this.updateTimer = null));
        }
        animate() {
          const e = this.friction;
          this.setTargetForce();
          const t = this.option("maxVelocity");
          for (const i of L)
            e
              ? ((this.velocity[i] *= 1 - e),
                t &&
                  !this.isScaling &&
                  (this.velocity[i] = Math.max(
                    Math.min(this.velocity[i], t),
                    -1 * t
                  )),
                (this.current[i] += this.velocity[i]))
              : (this.current[i] = this.target[i]);
          this.setTransform(),
            this.setEdgeForce(),
            !this.isResting || this.isDragging
              ? (this.rAF = requestAnimationFrame(() => this.animate()))
              : this.stop("current");
        }
        setTargetForce() {
          for (const e of L)
            ("e" === e && this.isBouncingX) ||
              ("f" === e && this.isBouncingY) ||
              (this.velocity[e] =
                (1 / (1 - this.friction) - 1) *
                (this.target[e] - this.current[e]));
        }
        checkBounds(e = 0, t = 0) {
          const { current: i } = this,
            s = i.e + e,
            n = i.f + t,
            o = this.getBounds(),
            { x: a, y: r } = o,
            l = a.min,
            c = a.max,
            h = r.min,
            d = r.max;
          let u = 0,
            p = 0;
          return (
            l !== 1 / 0 && s < l
              ? (u = l - s)
              : c !== 1 / 0 && s > c && (u = c - s),
            h !== 1 / 0 && n < h
              ? (p = h - n)
              : d !== 1 / 0 && n > d && (p = d - n),
            Math.abs(u) < 0.001 && (u = 0),
            Math.abs(p) < 0.001 && (p = 0),
            Object.assign(Object.assign({}, o), {
              xDiff: u,
              yDiff: p,
              inBounds: !u && !p,
            })
          );
        }
        clampTargetBounds() {
          const { target: e } = this,
            { x: t, y: i } = this.getBounds();
          t.min !== 1 / 0 && (e.e = Math.max(e.e, t.min)),
            t.max !== 1 / 0 && (e.e = Math.min(e.e, t.max)),
            i.min !== 1 / 0 && (e.f = Math.max(e.f, i.min)),
            i.max !== 1 / 0 && (e.f = Math.min(e.f, i.max));
        }
        calculateContentDim(e = this.current) {
          const { content: t, contentRect: i } = this,
            { fitWidth: s, fitHeight: n, fullWidth: o, fullHeight: a } = i;
          let r = o,
            l = a;
          if (this.option("zoom") || 0 !== this.angle) {
            const i = !(
                t instanceof HTMLImageElement ||
                ("none" !== window.getComputedStyle(t).maxWidth &&
                  "none" !== window.getComputedStyle(t).maxHeight)
              ),
              c = i ? o : s,
              h = i ? a : n,
              d = this.getMatrix(e),
              u = new DOMPoint(0, 0).matrixTransform(d),
              p = new DOMPoint(0 + c, 0).matrixTransform(d),
              m = new DOMPoint(0 + c, 0 + h).matrixTransform(d),
              f = new DOMPoint(0, 0 + h).matrixTransform(d),
              g = Math.abs(m.x - u.x),
              v = Math.abs(m.y - u.y),
              b = Math.abs(f.x - p.x),
              y = Math.abs(f.y - p.y);
            (r = Math.max(g, b)), (l = Math.max(v, y));
          }
          return { contentWidth: r, contentHeight: l };
        }
        setEdgeForce() {
          if (
            this.ignoreBounds ||
            this.isDragging ||
            this.panMode === j ||
            this.targetScale < this.scale
          )
            return (this.isBouncingX = !1), void (this.isBouncingY = !1);
          const { target: e } = this,
            { x: t, y: i, xDiff: s, yDiff: n } = this.checkBounds(),
            o = this.option("maxVelocity");
          let a = this.velocity.e,
            r = this.velocity.f;
          0 !== s
            ? ((this.isBouncingX = !0),
              s * a <= 0
                ? (a += 0.14 * s)
                : ((a = 0.14 * s),
                  t.min !== 1 / 0 && (this.target.e = Math.max(e.e, t.min)),
                  t.max !== 1 / 0 && (this.target.e = Math.min(e.e, t.max))),
              o && (a = Math.max(Math.min(a, o), -1 * o)))
            : (this.isBouncingX = !1),
            0 !== n
              ? ((this.isBouncingY = !0),
                n * r <= 0
                  ? (r += 0.14 * n)
                  : ((r = 0.14 * n),
                    i.min !== 1 / 0 && (this.target.f = Math.max(e.f, i.min)),
                    i.max !== 1 / 0 && (this.target.f = Math.min(e.f, i.max))),
                o && (r = Math.max(Math.min(r, o), -1 * o)))
              : (this.isBouncingY = !1),
            this.isBouncingX && (this.velocity.e = a),
            this.isBouncingY && (this.velocity.f = r);
        }
        enable() {
          const { content: e } = this,
            t = new DOMMatrixReadOnly(window.getComputedStyle(e).transform);
          for (const e of L) this.current[e] = this.target[e] = t[e];
          this.updateMetrics(),
            this.attachObserver(),
            this.attachEvents(),
            (this.state = k.Ready),
            this.emit("ready");
        }
        onClick(e) {
          var t;
          this.isDragging &&
            (null === (t = this.pointerTracker) || void 0 === t || t.clear(),
            (this.trackingPoints = []),
            this.startDecelAnim());
          const i = e.target;
          if (!i || e.defaultPrevented) return;
          if (i.hasAttribute("disabled"))
            return e.preventDefault(), void e.stopPropagation();
          if (
            (() => {
              const e = window.getSelection();
              return e && "Range" === e.type;
            })() &&
            !i.closest("button")
          )
            return;
          const s = i.closest("[data-panzoom-action]"),
            n = i.closest("[data-panzoom-change]"),
            o = s || n,
            a = o && I(o) ? o.dataset : null;
          if (a) {
            const t = a.panzoomChange,
              i = a.panzoomAction;
            if (((t || i) && e.preventDefault(), t)) {
              let i = {};
              try {
                i = JSON.parse(t);
              } catch (e) {
                console && console.warn("The given data was not valid JSON");
              }
              return void this.applyChange(i);
            }
            if (i) return void (this[i] && this[i]());
          }
          if (
            Math.abs(this.dragOffset.x) > 3 ||
            Math.abs(this.dragOffset.y) > 3
          )
            return e.preventDefault(), void e.stopPropagation();
          if (i.closest("[data-fancybox]")) return;
          const r = this.content.getBoundingClientRect(),
            l = this.dragStart;
          if (
            l.time &&
            !this.canZoomOut() &&
            (Math.abs(r.x - l.x) > 2 || Math.abs(r.y - l.y) > 2)
          )
            return;
          this.dragStart.time = 0;
          const c = (t) => {
              this.option("zoom", e) &&
                t &&
                "string" == typeof t &&
                /(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(
                  t
                ) &&
                "function" == typeof this[t] &&
                (e.preventDefault(), this[t]({ event: e }));
            },
            h = this.option("click", e),
            d = this.option("dblClick", e);
          d
            ? (this.clicks++,
              1 == this.clicks &&
                (this.clickTimer = setTimeout(() => {
                  1 === this.clicks
                    ? (this.emit("click", e), !e.defaultPrevented && h && c(h))
                    : (this.emit("dblClick", e), e.defaultPrevented || c(d)),
                    (this.clicks = 0),
                    (this.clickTimer = null);
                }, 350)))
            : (this.emit("click", e), !e.defaultPrevented && h && c(h));
        }
        addTrackingPoint(e) {
          const t = this.trackingPoints.filter(
            (e) => e.time > Date.now() - 100
          );
          t.push(e), (this.trackingPoints = t);
        }
        onPointerDown(e, t, i) {
          var s;
          if (!1 === this.option("touch", e)) return !1;
          (this.pwt = 0),
            (this.dragOffset = { x: 0, y: 0, time: 0 }),
            (this.trackingPoints = []);
          const n = this.content.getBoundingClientRect();
          if (
            ((this.dragStart = {
              x: n.x,
              y: n.y,
              top: n.top,
              left: n.left,
              time: Date.now(),
            }),
            this.clickTimer)
          )
            return !1;
          if (this.panMode === j && this.targetScale > 1)
            return e.preventDefault(), e.stopPropagation(), !1;
          const o = e.composedPath()[0];
          if (!i.length) {
            if (
              [
                "TEXTAREA",
                "OPTION",
                "INPUT",
                "SELECT",
                "VIDEO",
                "IFRAME",
              ].includes(o.nodeName) ||
              o.closest(
                "[contenteditable],[data-selectable],[data-draggable],[data-clickable],[data-panzoom-change],[data-panzoom-action]"
              )
            )
              return !1;
            null === (s = window.getSelection()) ||
              void 0 === s ||
              s.removeAllRanges();
          }
          if ("mousedown" === e.type)
            ["A", "BUTTON"].includes(o.nodeName) || e.preventDefault();
          else if (Math.abs(this.velocity.a) > 0.3) return !1;
          return (
            (this.target.e = this.current.e),
            (this.target.f = this.current.f),
            this.stop(),
            this.isDragging ||
              ((this.isDragging = !0),
              this.addTrackingPoint(t),
              this.emit("touchStart", e)),
            !0
          );
        }
        onPointerMove(e, t, i) {
          if (!1 === this.option("touch", e)) return;
          if (!this.isDragging) return;
          if (
            t.length < 2 &&
            this.panOnlyZoomed &&
            m(this.targetScale) <= m(this.minScale)
          )
            return;
          if ((this.emit("touchMove", e), e.defaultPrevented)) return;
          this.addTrackingPoint(t[0]);
          const { content: s } = this,
            n = D(i[0], i[1]),
            o = D(t[0], t[1]);
          let a = 0,
            r = 0;
          if (t.length > 1) {
            const e = s.getBoundingClientRect();
            (a = n.clientX - e.left - 0.5 * e.width),
              (r = n.clientY - e.top - 0.5 * e.height);
          }
          const l = C(i[0], i[1]),
            c = C(t[0], t[1]);
          let h = l ? c / l : 1,
            d = o.clientX - n.clientX,
            u = o.clientY - n.clientY;
          (this.dragOffset.x += d),
            (this.dragOffset.y += u),
            (this.dragOffset.time = Date.now() - this.dragStart.time);
          let p =
            m(this.targetScale) === m(this.minScale) && this.option("lockAxis");
          if (p && !this.lockedAxis)
            if ("xy" === p || "y" === p || "touchmove" === e.type) {
              if (
                Math.abs(this.dragOffset.x) < 6 &&
                Math.abs(this.dragOffset.y) < 6
              )
                return void e.preventDefault();
              const t = Math.abs(
                (180 * Math.atan2(this.dragOffset.y, this.dragOffset.x)) /
                  Math.PI
              );
              (this.lockedAxis = t > 45 && t < 135 ? "y" : "x"),
                (this.dragOffset.x = 0),
                (this.dragOffset.y = 0),
                (d = 0),
                (u = 0);
            } else this.lockedAxis = p;
          if (
            (g(e.target, this.content) && ((p = "x"), (this.dragOffset.y = 0)),
            p &&
              "xy" !== p &&
              this.lockedAxis !== p &&
              m(this.targetScale) === m(this.minScale))
          )
            return;
          e.cancelable && e.preventDefault(),
            this.container.classList.add(this.cn("isDragging"));
          const f = this.checkBounds(d, u);
          this.option("rubberband")
            ? ("x" !== this.isInfinite &&
                ((f.xDiff > 0 && d < 0) || (f.xDiff < 0 && d > 0)) &&
                (d *= Math.max(
                  0,
                  0.5 - Math.abs((0.75 / this.contentRect.fitWidth) * f.xDiff)
                )),
              "y" !== this.isInfinite &&
                ((f.yDiff > 0 && u < 0) || (f.yDiff < 0 && u > 0)) &&
                (u *= Math.max(
                  0,
                  0.5 - Math.abs((0.75 / this.contentRect.fitHeight) * f.yDiff)
                )))
            : (f.xDiff && (d = 0), f.yDiff && (u = 0));
          const v = this.targetScale,
            b = this.minScale,
            y = this.maxScale;
          v < 0.5 * b && (h = Math.max(h, b)),
            v > 1.5 * y && (h = Math.min(h, y)),
            "y" === this.lockedAxis && m(v) === m(b) && (d = 0),
            "x" === this.lockedAxis && m(v) === m(b) && (u = 0),
            this.applyChange({
              originX: a,
              originY: r,
              panX: d,
              panY: u,
              scale: h,
              friction: this.option("dragFriction"),
              ignoreBounds: !0,
            });
        }
        onPointerUp(e, t, i) {
          if (i.length)
            return (
              (this.dragOffset.x = 0),
              (this.dragOffset.y = 0),
              void (this.trackingPoints = [])
            );
          this.container.classList.remove(this.cn("isDragging")),
            this.isDragging &&
              (this.addTrackingPoint(t),
              this.panOnlyZoomed &&
                this.contentRect.width - this.contentRect.fitWidth < 1 &&
                this.contentRect.height - this.contentRect.fitHeight < 1 &&
                (this.trackingPoints = []),
              g(e.target, this.content) &&
                "y" === this.lockedAxis &&
                (this.trackingPoints = []),
              this.emit("touchEnd", e),
              (this.isDragging = !1),
              (this.lockedAxis = !1),
              this.state !== k.Destroy &&
                (e.defaultPrevented || this.startDecelAnim()));
        }
        startDecelAnim() {
          var e;
          const t = this.isScaling;
          this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
            (this.isBouncingX = !1),
            (this.isBouncingY = !1);
          for (const e of L) this.velocity[e] = 0;
          (this.target.e = this.current.e),
            (this.target.f = this.current.f),
            R(this.container, "is-scaling"),
            R(this.container, "is-animating"),
            (this.isTicking = !1);
          const { trackingPoints: i } = this,
            s = i[0],
            n = i[i.length - 1];
          let o = 0,
            a = 0,
            r = 0;
          n &&
            s &&
            ((o = n.clientX - s.clientX),
            (a = n.clientY - s.clientY),
            (r = n.time - s.time));
          const l =
            (null === (e = window.visualViewport) || void 0 === e
              ? void 0
              : e.scale) || 1;
          1 !== l && ((o *= l), (a *= l));
          let c = 0,
            h = 0,
            d = 0,
            u = 0,
            p = this.option("decelFriction");
          const f = this.targetScale;
          if (r > 0) {
            (d = Math.abs(o) > 3 ? o / (r / 30) : 0),
              (u = Math.abs(a) > 3 ? a / (r / 30) : 0);
            const e = this.option("maxVelocity");
            e &&
              ((d = Math.max(Math.min(d, e), -1 * e)),
              (u = Math.max(Math.min(u, e), -1 * e)));
          }
          d && (c = d / (1 / (1 - p) - 1)),
            u && (h = u / (1 / (1 - p) - 1)),
            ("y" === this.option("lockAxis") ||
              ("xy" === this.option("lockAxis") &&
                "y" === this.lockedAxis &&
                m(f) === this.minScale)) &&
              (c = d = 0),
            ("x" === this.option("lockAxis") ||
              ("xy" === this.option("lockAxis") &&
                "x" === this.lockedAxis &&
                m(f) === this.minScale)) &&
              (h = u = 0);
          const g = this.dragOffset.x,
            v = this.dragOffset.y,
            b = this.option("dragMinThreshold") || 0;
          Math.abs(g) < b && Math.abs(v) < b && ((c = h = 0), (d = u = 0)),
            (f < this.minScale - 1e-5 ||
              f > this.maxScale + 1e-5 ||
              (t && !c && !h)) &&
              (p = 0.35),
            this.applyChange({ panX: c, panY: h, friction: p }),
            this.emit("decel", d, u, g, v);
        }
        onWheel(e) {
          var t = [-e.deltaX || 0, -e.deltaY || 0, -e.detail || 0].reduce(
            function (e, t) {
              return Math.abs(t) > Math.abs(e) ? t : e;
            }
          );
          const i = Math.max(-1, Math.min(1, t));
          if ((this.emit("wheel", e, i), this.panMode === j)) return;
          if (e.defaultPrevented) return;
          const s = this.option("wheel");
          "pan" === s
            ? (e.preventDefault(),
              (this.panOnlyZoomed && !this.canZoomOut()) ||
                this.applyChange({
                  panX: 2 * -e.deltaX,
                  panY: 2 * -e.deltaY,
                  bounce: !1,
                }))
            : "zoom" === s &&
              !1 !== this.option("zoom") &&
              this.zoomWithWheel(e);
        }
        onMouseMove(e) {
          this.panWithMouse(e);
        }
        onKeydown(e) {
          "Escape" === e.key && this.toggleFS();
        }
        onResize() {
          this.updateMetrics(),
            this.checkBounds().inBounds || this.requestTick();
        }
        setTransform() {
          this.emit("beforeTransform");
          const { current: e, target: t, content: i, contentRect: s } = this,
            n = Object.assign({}, z);
          for (const i of L) {
            const s = "e" == i || "f" === i ? H : 1e5;
            (n[i] = m(e[i], s)),
              Math.abs(t[i] - e[i]) < ("e" == i || "f" === i ? 0.51 : 0.001) &&
                (e[i] = t[i]);
          }
          let { a: o, b: a, c: r, d: l, e: c, f: h } = n,
            d = `matrix(${o}, ${a}, ${r}, ${l}, ${c}, ${h})`,
            u =
              i.parentElement instanceof HTMLPictureElement
                ? i.parentElement
                : i;
          if (
            (this.option("transformParent") && (u = u.parentElement || u),
            u.style.transform === d)
          )
            return;
          u.style.transform = d;
          const { contentWidth: p, contentHeight: f } =
            this.calculateContentDim();
          (s.width = p), (s.height = f), this.emit("afterTransform");
        }
        updateMetrics(e = !1) {
          var t;
          if (!this || this.state === k.Destroy) return;
          if (this.isContentLoading) return;
          const i = Math.max(
              1,
              (null === (t = window.visualViewport) || void 0 === t
                ? void 0
                : t.scale) || 1
            ),
            { container: s, content: n } = this,
            o = n instanceof HTMLImageElement,
            a = s.getBoundingClientRect(),
            r = getComputedStyle(this.container);
          let l = a.width * i,
            c = a.height * i;
          const h = parseFloat(r.paddingTop) + parseFloat(r.paddingBottom),
            d = l - (parseFloat(r.paddingLeft) + parseFloat(r.paddingRight)),
            u = c - h;
          this.containerRect = {
            width: l,
            height: c,
            innerWidth: d,
            innerHeight: u,
          };
          let p = this.option("width") || "auto",
            f = this.option("height") || "auto";
          "auto" === p &&
            (p =
              parseFloat(n.dataset.width || "") ||
              ((e) => {
                let t = 0;
                return (
                  (t =
                    e instanceof HTMLImageElement
                      ? e.naturalWidth
                      : e instanceof SVGElement
                      ? e.width.baseVal.value
                      : Math.max(e.offsetWidth, e.scrollWidth)),
                  t || 0
                );
              })(n)),
            "auto" === f &&
              (f =
                parseFloat(n.dataset.height || "") ||
                ((e) => {
                  let t = 0;
                  return (
                    (t =
                      e instanceof HTMLImageElement
                        ? e.naturalHeight
                        : e instanceof SVGElement
                        ? e.height.baseVal.value
                        : Math.max(e.offsetHeight, e.scrollHeight)),
                    t || 0
                  );
                })(n));
          let g =
            n.parentElement instanceof HTMLPictureElement ? n.parentElement : n;
          this.option("transformParent") && (g = g.parentElement || g);
          const v = g.getAttribute("style") || "";
          g.style.setProperty("transform", "none", "important"),
            o && ((g.style.width = ""), (g.style.height = "")),
            g.offsetHeight;
          const b = n.getBoundingClientRect();
          let y = b.width * i,
            w = b.height * i,
            x = 0,
            S = 0;
          o &&
            (Math.abs(p - y) > 1 || Math.abs(f - w) > 1) &&
            ({
              width: y,
              height: w,
              top: x,
              left: S,
            } = ((e, t, i, s) => {
              const n = i / s;
              return (
                n > e / t ? ((i = e), (s = e / n)) : ((i = t * n), (s = t)),
                { width: i, height: s, top: 0.5 * (t - s), left: 0.5 * (e - i) }
              );
            })(y, w, p, f)),
            (this.contentRect = Object.assign(
              Object.assign({}, this.contentRect),
              {
                top: b.top - a.top + x,
                bottom: a.bottom - b.bottom + x,
                left: b.left - a.left + S,
                right: a.right - b.right + S,
                fitWidth: y,
                fitHeight: w,
                width: y,
                height: w,
                fullWidth: p,
                fullHeight: f,
              }
            )),
            (g.style.cssText = v),
            o && ((g.style.width = `${y}px`), (g.style.height = `${w}px`)),
            this.setTransform(),
            !0 !== e && this.emit("refresh"),
            this.ignoreBounds ||
              (m(this.targetScale) < m(this.minScale)
                ? this.zoomTo(this.minScale, { friction: 0 })
                : this.targetScale > this.maxScale
                ? this.zoomTo(this.maxScale, { friction: 0 })
                : this.state === k.Init ||
                  this.checkBounds().inBounds ||
                  this.requestTick()),
            this.updateControls();
        }
        getBounds() {
          const e = this.option("bounds");
          if ("auto" !== e) return e;
          const { contentWidth: t, contentHeight: i } =
            this.calculateContentDim(this.target);
          let s = 0,
            n = 0,
            o = 0,
            a = 0;
          const r = this.option("infinite");
          if (!0 === r || (this.lockedAxis && r === this.lockedAxis))
            (s = -1 / 0), (o = 1 / 0), (n = -1 / 0), (a = 1 / 0);
          else {
            let { containerRect: e, contentRect: r } = this,
              l = m(this.contentRect.fitWidth * this.targetScale, H),
              c = m(this.contentRect.fitHeight * this.targetScale, H),
              { innerWidth: h, innerHeight: d } = e;
            if (
              (this.containerRect.width === l && (h = e.width),
              this.containerRect.width === c && (d = e.height),
              t > h)
            ) {
              (o = 0.5 * (t - h)), (s = -1 * o);
              let e = 0.5 * (r.right - r.left);
              (s += e), (o += e);
            }
            if (
              (this.contentRect.fitWidth > h &&
                t < h &&
                ((s -= 0.5 * (this.contentRect.fitWidth - h)),
                (o -= 0.5 * (this.contentRect.fitWidth - h))),
              i > d)
            ) {
              (a = 0.5 * (i - d)), (n = -1 * a);
              let e = 0.5 * (r.bottom - r.top);
              (n += e), (a += e);
            }
            this.contentRect.fitHeight > d &&
              i < d &&
              ((s -= 0.5 * (this.contentRect.fitHeight - d)),
              (o -= 0.5 * (this.contentRect.fitHeight - d)));
          }
          return { x: { min: s, max: o }, y: { min: n, max: a } };
        }
        updateControls() {
          const e = this,
            t = e.container,
            {
              panMode: i,
              contentRect: s,
              fullScale: n,
              targetScale: o,
              coverScale: a,
              maxScale: r,
              minScale: l,
            } = e;
          let c =
              {
                toggleMax: o - l < 0.5 * (r - l) ? r : l,
                toggleCover: o - l < 0.5 * (a - l) ? a : l,
                toggleZoom: o - l < 0.5 * (n - l) ? n : l,
              }[e.option("click") || ""] || l,
            h = e.canZoomIn(),
            d = e.canZoomOut(),
            u = i === N && !!this.option("touch"),
            p = d && u;
          u &&
            (m(o) < m(l) && !this.panOnlyZoomed && (p = !0),
            (m(s.width, 1) > m(s.fitWidth, 1) ||
              m(s.height, 1) > m(s.fitHeight, 1)) &&
              (p = !0)),
            m(s.width * o, 1) < m(s.fitWidth, 1) && (p = !1),
            i === j && (p = !1);
          let f = h && m(c) > m(o),
            g = !f && !p && d && m(c) < m(o);
          y(t, this.cn("canZoomIn"), f),
            y(t, this.cn("canZoomOut"), g),
            y(t, this.cn("isDraggable"), p);
          for (const e of t.querySelectorAll('[data-panzoom-action="zoomIn"]'))
            h
              ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex"))
              : (e.setAttribute("disabled", ""),
                e.setAttribute("tabindex", "-1"));
          for (const e of t.querySelectorAll('[data-panzoom-action="zoomOut"]'))
            d
              ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex"))
              : (e.setAttribute("disabled", ""),
                e.setAttribute("tabindex", "-1"));
          for (const e of t.querySelectorAll(
            '[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]'
          )) {
            h || d
              ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex"))
              : (e.setAttribute("disabled", ""),
                e.setAttribute("tabindex", "-1"));
            const t = e.querySelector("g");
            t && (t.style.display = h ? "" : "none");
          }
        }
        panTo({
          x: e = this.target.e,
          y: t = this.target.f,
          scale: i = this.targetScale,
          friction: s = this.option("friction"),
          angle: n = 0,
          originX: o = 0,
          originY: a = 0,
          flipX: r = !1,
          flipY: l = !1,
          ignoreBounds: c = !1,
        }) {
          this.state !== k.Destroy &&
            this.applyChange({
              panX: e - this.target.e,
              panY: t - this.target.f,
              scale: i / this.targetScale,
              angle: n,
              originX: o,
              originY: a,
              friction: s,
              flipX: r,
              flipY: l,
              ignoreBounds: c,
            });
        }
        applyChange({
          panX: e = 0,
          panY: t = 0,
          scale: i = 1,
          angle: s = 0,
          originX: n = -this.current.e,
          originY: o = -this.current.f,
          friction: a = this.option("friction"),
          flipX: r = !1,
          flipY: l = !1,
          ignoreBounds: c = !1,
          bounce: h = this.option("bounce"),
        }) {
          const d = this.state;
          if (d === k.Destroy) return;
          this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
            (this.friction = a || 0),
            (this.ignoreBounds = c);
          const { current: u } = this,
            p = u.e,
            f = u.f,
            g = this.getMatrix(this.target);
          let v = new DOMMatrix()
            .translate(p, f)
            .translate(n, o)
            .translate(e, t);
          if (this.option("zoom")) {
            if (!c) {
              const e = this.targetScale,
                t = this.minScale,
                s = this.maxScale;
              e * i < t && (i = t / e), e * i > s && (i = s / e);
            }
            v = v.scale(i);
          }
          (v = v.translate(-n, -o).translate(-p, -f).multiply(g)),
            s && (v = v.rotate(s)),
            r && (v = v.scale(-1, 1)),
            l && (v = v.scale(1, -1));
          for (const e of L)
            "e" !== e &&
            "f" !== e &&
            (v[e] > this.minScale + 1e-5 || v[e] < this.minScale - 1e-5)
              ? (this.target[e] = v[e])
              : (this.target[e] = m(v[e], H));
          (this.targetScale < this.scale ||
            Math.abs(i - 1) > 0.1 ||
            this.panMode === j ||
            !1 === h) &&
            !c &&
            this.clampTargetBounds(),
            d === k.Init
              ? this.animate()
              : this.isResting ||
                ((this.state = k.Panning), this.requestTick());
        }
        stop(e = !1) {
          if (this.state === k.Init || this.state === k.Destroy) return;
          const t = this.isTicking;
          this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
            (this.isBouncingX = !1),
            (this.isBouncingY = !1);
          for (const t of L)
            (this.velocity[t] = 0),
              "current" === e
                ? (this.current[t] = this.target[t])
                : "target" === e && (this.target[t] = this.current[t]);
          this.setTransform(),
            R(this.container, "is-scaling"),
            R(this.container, "is-animating"),
            (this.isTicking = !1),
            (this.state = k.Ready),
            t && (this.emit("endAnimation"), this.updateControls());
        }
        requestTick() {
          this.isTicking ||
            (this.emit("startAnimation"),
            this.updateControls(),
            $(this.container, "is-animating"),
            this.isScaling && $(this.container, "is-scaling")),
            (this.isTicking = !0),
            this.rAF ||
              (this.rAF = requestAnimationFrame(() => this.animate()));
        }
        panWithMouse(e, t = this.option("mouseMoveFriction")) {
          if (((this.pmme = e), this.panMode !== j || !e)) return;
          if (m(this.targetScale) <= m(this.minScale)) return;
          this.emit("mouseMove", e);
          const { container: i, containerRect: s, contentRect: n } = this,
            o = s.width,
            a = s.height,
            r = i.getBoundingClientRect(),
            l = (e.clientX || 0) - r.left,
            c = (e.clientY || 0) - r.top;
          let { contentWidth: h, contentHeight: d } = this.calculateContentDim(
            this.target
          );
          const u = this.option("mouseMoveFactor");
          u > 1 && (h !== o && (h *= u), d !== a && (d *= u));
          let p = 0.5 * (h - o) - (((l / o) * 100) / 100) * (h - o);
          p += 0.5 * (n.right - n.left);
          let f = 0.5 * (d - a) - (((c / a) * 100) / 100) * (d - a);
          (f += 0.5 * (n.bottom - n.top)),
            this.applyChange({
              panX: p - this.target.e,
              panY: f - this.target.f,
              friction: t,
            });
        }
        zoomWithWheel(e) {
          if (this.state === k.Destroy || this.state === k.Init) return;
          const t = Date.now();
          if (t - this.pwt < 45) return void e.preventDefault();
          this.pwt = t;
          var i = [-e.deltaX || 0, -e.deltaY || 0, -e.detail || 0].reduce(
            function (e, t) {
              return Math.abs(t) > Math.abs(e) ? t : e;
            }
          );
          const s = Math.max(-1, Math.min(1, i)),
            { targetScale: n, maxScale: o, minScale: a } = this;
          let r = (n * (100 + 45 * s)) / 100;
          m(r) < m(a) && m(n) <= m(a)
            ? ((this.cwd += Math.abs(s)), (r = a))
            : m(r) > m(o) && m(n) >= m(o)
            ? ((this.cwd += Math.abs(s)), (r = o))
            : ((this.cwd = 0), (r = Math.max(Math.min(r, o), a))),
            this.cwd > this.option("wheelLimit") ||
              (e.preventDefault(),
              m(r) !== m(n) && this.zoomTo(r, { event: e }));
        }
        canZoomIn() {
          return (
            this.option("zoom") &&
            (m(this.contentRect.width, 1) < m(this.contentRect.fitWidth, 1) ||
              m(this.targetScale) < m(this.maxScale))
          );
        }
        canZoomOut() {
          return this.option("zoom") && m(this.targetScale) > m(this.minScale);
        }
        zoomIn(e = 1.25, t) {
          this.zoomTo(this.targetScale * e, t);
        }
        zoomOut(e = 0.8, t) {
          this.zoomTo(this.targetScale * e, t);
        }
        zoomToFit(e) {
          this.zoomTo("fit", e);
        }
        zoomToCover(e) {
          this.zoomTo("cover", e);
        }
        zoomToFull(e) {
          this.zoomTo("full", e);
        }
        zoomToMax(e) {
          this.zoomTo("max", e);
        }
        toggleZoom(e) {
          this.zoomTo(
            this.targetScale - this.minScale <
              0.5 * (this.fullScale - this.minScale)
              ? "full"
              : "fit",
            e
          );
        }
        toggleMax(e) {
          this.zoomTo(
            this.targetScale - this.minScale <
              0.5 * (this.maxScale - this.minScale)
              ? "max"
              : "fit",
            e
          );
        }
        toggleCover(e) {
          this.zoomTo(
            this.targetScale - this.minScale <
              0.5 * (this.coverScale - this.minScale)
              ? "cover"
              : "fit",
            e
          );
        }
        iterateZoom(e) {
          this.zoomTo("next", e);
        }
        zoomTo(
          e = 1,
          {
            friction: t = "auto",
            originX: i = "auto",
            originY: s = "auto",
            event: n,
          } = {}
        ) {
          if (this.isContentLoading || this.state === k.Destroy) return;
          const { targetScale: o } = this;
          this.stop();
          let a = 1;
          if (
            (this.panMode === j && (n = this.pmme || n),
            n || "auto" === i || "auto" === s)
          ) {
            const e = this.content.getBoundingClientRect(),
              t = this.container.getBoundingClientRect(),
              o = n ? n.clientX : t.left + 0.5 * t.width,
              a = n ? n.clientY : t.top + 0.5 * t.height;
            (i = o - e.left - 0.5 * e.width), (s = a - e.top - 0.5 * e.height);
          }
          const r = this.fullScale,
            l = this.maxScale;
          let c = this.coverScale;
          "number" == typeof e
            ? (a = e / o)
            : ("next" === e &&
                (r - c < 0.2 && (c = r),
                (e = o < r - 1e-5 ? "full" : o < l - 1e-5 ? "max" : "fit")),
              (a =
                "full" === e
                  ? r / o || 1
                  : "cover" === e
                  ? c / o || 1
                  : "max" === e
                  ? l / o || 1
                  : 1 / o || 1)),
            (t = "auto" === t ? (a > 1 ? 0.15 : 0.25) : t),
            this.applyChange({ scale: a, originX: i, originY: s, friction: t }),
            n && this.panMode === j && this.panWithMouse(n, t);
        }
        rotateCCW() {
          this.applyChange({ angle: -90 });
        }
        rotateCW() {
          this.applyChange({ angle: 90 });
        }
        flipX() {
          this.applyChange({ flipX: !0 });
        }
        flipY() {
          this.applyChange({ flipY: !0 });
        }
        fitX() {
          this.stop("target");
          const { containerRect: e, contentRect: t, target: i } = this;
          this.applyChange({
            panX: 0.5 * e.width - (t.left + 0.5 * t.fitWidth) - i.e,
            panY: 0.5 * e.height - (t.top + 0.5 * t.fitHeight) - i.f,
            scale: e.width / t.fitWidth / this.targetScale,
            originX: 0,
            originY: 0,
            ignoreBounds: !0,
          });
        }
        fitY() {
          this.stop("target");
          const { containerRect: e, contentRect: t, target: i } = this;
          this.applyChange({
            panX: 0.5 * e.width - (t.left + 0.5 * t.fitWidth) - i.e,
            panY: 0.5 * e.innerHeight - (t.top + 0.5 * t.fitHeight) - i.f,
            scale: e.height / t.fitHeight / this.targetScale,
            originX: 0,
            originY: 0,
            ignoreBounds: !0,
          });
        }
        toggleFS() {
          const { container: e } = this,
            t = this.cn("inFullscreen"),
            i = this.cn("htmlHasFullscreen");
          e.classList.toggle(t);
          const s = e.classList.contains(t);
          s
            ? (document.documentElement.classList.add(i),
              document.addEventListener("keydown", this.onKeydown, !0))
            : (document.documentElement.classList.remove(i),
              document.removeEventListener("keydown", this.onKeydown, !0)),
            this.updateMetrics(),
            this.emit(s ? "enterFS" : "exitFS");
        }
        getMatrix(e = this.current) {
          const { a: t, b: i, c: s, d: n, e: o, f: a } = e;
          return new DOMMatrix([t, i, s, n, o, a]);
        }
        reset(e) {
          if (this.state !== k.Init && this.state !== k.Destroy) {
            this.stop("current");
            for (const e of L) this.target[e] = z[e];
            (this.target.a = this.minScale),
              (this.target.d = this.minScale),
              this.clampTargetBounds(),
              this.isResting ||
                ((this.friction = void 0 === e ? this.option("friction") : e),
                (this.state = k.Panning),
                this.requestTick());
          }
        }
        destroy() {
          this.stop(),
            (this.state = k.Destroy),
            this.detachEvents(),
            this.detachObserver();
          const { container: e, content: t } = this,
            i = this.option("classes") || {};
          for (const t of Object.values(i)) e.classList.remove(t + "");
          t &&
            (t.removeEventListener("load", this.onLoad),
            t.removeEventListener("error", this.onError)),
            this.detachPlugins();
        }
      }
      Object.defineProperty(q, "defaults", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: _,
      }),
        Object.defineProperty(q, "Plugins", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: {},
        });
      const Y = function (e, t) {
          let i = !0;
          return (...s) => {
            i &&
              ((i = !1),
              e(...s),
              setTimeout(() => {
                i = !0;
              }, t));
          };
        },
        X = (e, t) => {
          let i = [];
          return (
            e.childNodes.forEach((e) => {
              e.nodeType !== Node.ELEMENT_NODE ||
                (t && !e.matches(t)) ||
                i.push(e);
            }),
            i
          );
        };
      var U;
      !(function (e) {
        (e[(e.Init = 0)] = "Init"),
          (e[(e.Ready = 1)] = "Ready"),
          (e[(e.Destroy = 2)] = "Destroy");
      })(U || (U = {}));
      const Z = (e) => {
          if ("string" == typeof e || e instanceof HTMLElement) e = { html: e };
          else {
            const t = e.thumb;
            void 0 !== t &&
              ("string" == typeof t && (e.thumbSrc = t),
              t instanceof HTMLImageElement &&
                ((e.thumbEl = t), (e.thumbElSrc = t.src), (e.thumbSrc = t.src)),
              delete e.thumb);
          }
          return Object.assign(
            {
              html: "",
              el: null,
              isDom: !1,
              class: "",
              customClass: "",
              index: -1,
              dim: 0,
              gap: 0,
              pos: 0,
              transition: !1,
            },
            e
          );
        },
        G = (e = {}) =>
          Object.assign({ index: -1, slides: [], dim: 0, pos: -1 }, e);
      class K extends P {
        constructor(e, t) {
          super(t),
            Object.defineProperty(this, "instance", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: e,
            });
        }
        attach() {}
        detach() {}
      }
      class J extends K {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "isDynamic", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "list", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            });
        }
        onRefresh() {
          this.refresh();
        }
        build() {
          let e = this.list;
          return (
            e ||
              ((e = document.createElement("ul")),
              $(e, this.cn("list")),
              e.setAttribute("role", "tablist"),
              this.instance.container.appendChild(e),
              $(this.instance.container, this.cn("hasDots")),
              (this.list = e)),
            e
          );
        }
        refresh() {
          var e;
          const t = this.instance.pages.length,
            i = Math.min(2, this.option("minCount")),
            s = Math.max(2e3, this.option("maxCount")),
            n = this.option("dynamicFrom");
          if (t < i || t > s) return void this.cleanup();
          const o = "number" == typeof n && t > 5 && t >= n,
            a =
              !this.list ||
              this.isDynamic !== o ||
              this.list.children.length !== t;
          a && this.cleanup();
          const r = this.build();
          if ((y(r, this.cn("isDynamic"), !!o), a))
            for (let e = 0; e < t; e++) r.append(this.createItem(e));
          let l,
            c = 0;
          for (const t of [...r.children]) {
            const i = c === this.instance.page;
            i && (l = t),
              y(t, this.cn("isCurrent"), i),
              null === (e = t.children[0]) ||
                void 0 === e ||
                e.setAttribute("aria-selected", i ? "true" : "false");
            for (const e of ["isBeforePrev", "isPrev", "isNext", "isAfterNext"])
              R(t, this.cn(e));
            c++;
          }
          if (((l = l || r.firstChild), o && l)) {
            const e = l.previousElementSibling,
              t = e && e.previousElementSibling;
            $(e, this.cn("isPrev")), $(t, this.cn("isBeforePrev"));
            const i = l.nextElementSibling,
              s = i && i.nextElementSibling;
            $(i, this.cn("isNext")), $(s, this.cn("isAfterNext"));
          }
          this.isDynamic = o;
        }
        createItem(e = 0) {
          var t;
          const i = document.createElement("li");
          i.setAttribute("role", "presentation");
          const s = v(
            this.instance
              .localize(this.option("dotTpl"), [["%d", e + 1]])
              .replace(/\%i/g, e + "")
          );
          return (
            i.appendChild(s),
            null === (t = i.children[0]) ||
              void 0 === t ||
              t.setAttribute("role", "tab"),
            i
          );
        }
        cleanup() {
          this.list && (this.list.remove(), (this.list = null)),
            (this.isDynamic = !1),
            R(this.instance.container, this.cn("hasDots"));
        }
        attach() {
          this.instance.on(["refresh", "change"], this.onRefresh);
        }
        detach() {
          this.instance.off(["refresh", "change"], this.onRefresh),
            this.cleanup();
        }
      }
      Object.defineProperty(J, "defaults", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {
          classes: {
            list: "f-carousel__dots",
            isDynamic: "is-dynamic",
            hasDots: "has-dots",
            dot: "f-carousel__dot",
            isBeforePrev: "is-before-prev",
            isPrev: "is-prev",
            isCurrent: "is-current",
            isNext: "is-next",
            isAfterNext: "is-after-next",
          },
          dotTpl:
            '<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>',
          dynamicFrom: 11,
          maxCount: 1 / 0,
          minCount: 2,
        },
      });
      const Q = "disabled",
        ee = "next",
        te = "prev";
      class ie extends K {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "container", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            }),
            Object.defineProperty(this, "prev", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            }),
            Object.defineProperty(this, "next", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            });
        }
        onRefresh() {
          const e = this.instance,
            t = e.pages.length,
            i = e.page;
          if (t < 2) return void this.cleanup();
          this.build();
          let s = this.prev,
            n = this.next;
          s &&
            n &&
            (s.removeAttribute(Q),
            n.removeAttribute(Q),
            e.isInfinite ||
              (i <= 0 && s.setAttribute(Q, ""),
              i >= t - 1 && n.setAttribute(Q, "")));
        }
        createButton(e) {
          const t = this.instance,
            i = document.createElement("button");
          i.setAttribute("tabindex", "0"),
            i.setAttribute("title", t.localize(`{{${e.toUpperCase()}}}`)),
            $(
              i,
              this.cn("button") + " " + this.cn(e === ee ? "isNext" : "isPrev")
            );
          const s = t.isRTL ? (e === ee ? te : ee) : e;
          var n;
          return (
            (i.innerHTML = t.localize(this.option(`${s}Tpl`))),
            (i.dataset[
              `carousel${
                ((n = e),
                n
                  ? n.match("^[a-z]")
                    ? n.charAt(0).toUpperCase() + n.substring(1)
                    : n
                  : "")
              }`
            ] = "true"),
            i
          );
        }
        build() {
          let e = this.container;
          e ||
            ((this.container = e = document.createElement("div")),
            $(e, this.cn("container")),
            this.instance.container.appendChild(e)),
            this.next || (this.next = e.appendChild(this.createButton(ee))),
            this.prev || (this.prev = e.appendChild(this.createButton(te)));
        }
        cleanup() {
          this.prev && this.prev.remove(),
            this.next && this.next.remove(),
            this.container && this.container.remove(),
            (this.prev = null),
            (this.next = null),
            (this.container = null);
        }
        attach() {
          this.instance.on(["refresh", "change"], this.onRefresh);
        }
        detach() {
          this.instance.off(["refresh", "change"], this.onRefresh),
            this.cleanup();
        }
      }
      Object.defineProperty(ie, "defaults", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {
          classes: {
            container: "f-carousel__nav",
            button: "f-button",
            isNext: "is-next",
            isPrev: "is-prev",
          },
          nextTpl:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
          prevTpl:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',
        },
      });
      class se extends K {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "selectedIndex", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            }),
            Object.defineProperty(this, "target", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            }),
            Object.defineProperty(this, "nav", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            });
        }
        addAsTargetFor(e) {
          (this.target = this.instance), (this.nav = e), this.attachEvents();
        }
        addAsNavFor(e) {
          (this.nav = this.instance), (this.target = e), this.attachEvents();
        }
        attachEvents() {
          this.nav &&
            this.target &&
            ((this.nav.options.initialSlide = this.target.options.initialPage),
            this.nav.state === U.Ready
              ? this.onNavReady(this.nav)
              : this.nav.on("ready", this.onNavReady),
            this.target.state === U.Ready
              ? this.onTargetReady(this.target)
              : this.target.on("ready", this.onTargetReady));
        }
        onNavReady(e) {
          e.on("createSlide", this.onNavCreateSlide),
            e.on("Panzoom.click", this.onNavClick),
            e.on("Panzoom.touchEnd", this.onNavTouch),
            this.onTargetChange();
        }
        onTargetReady(e) {
          e.on("change", this.onTargetChange),
            e.on("Panzoom.refresh", this.onTargetChange),
            this.onTargetChange();
        }
        onNavClick(e, t, i) {
          this.onNavTouch(e, e.panzoom, i);
        }
        onNavTouch(e, t, i) {
          var s, n;
          if (Math.abs(t.dragOffset.x) > 3 || Math.abs(t.dragOffset.y) > 3)
            return;
          const o = i.target,
            { nav: a, target: r } = this;
          if (!a || !r || !o) return;
          const l = o.closest("[data-index]");
          if ((i.stopPropagation(), i.preventDefault(), !l)) return;
          const c = parseInt(l.dataset.index || "", 10) || 0,
            h = r.getPageForSlide(c),
            d = a.getPageForSlide(c);
          a.slideTo(d),
            r.slideTo(h, {
              friction:
                (null ===
                  (n =
                    null === (s = this.nav) || void 0 === s
                      ? void 0
                      : s.plugins) || void 0 === n
                  ? void 0
                  : n.Sync.option("friction")) || 0,
            }),
            this.markSelectedSlide(c);
        }
        onNavCreateSlide(e, t) {
          t.index === this.selectedIndex && this.markSelectedSlide(t.index);
        }
        onTargetChange() {
          const { target: e, nav: t } = this;
          if (!e || !t) return;
          if (t.state !== U.Ready || e.state !== U.Ready) return;
          const i = e.pages[e.page].slides[0].index,
            s = t.getPageForSlide(i);
          this.markSelectedSlide(i),
            t.slideTo(s, null === t.prevPage ? { friction: 0 } : void 0);
        }
        markSelectedSlide(e) {
          const t = this.nav;
          t &&
            t.state === U.Ready &&
            ((this.selectedIndex = e),
            [...t.slides].map((t) => {
              t.el &&
                t.el.classList[t.index === e ? "add" : "remove"](
                  "is-nav-selected"
                );
            }));
        }
        attach() {
          const e = this;
          let t = e.options.target,
            i = e.options.nav;
          t ? e.addAsNavFor(t) : i && e.addAsTargetFor(i);
        }
        detach() {
          const e = this,
            t = e.nav,
            i = e.target;
          t &&
            (t.off("ready", e.onNavReady),
            t.off("createSlide", e.onNavCreateSlide),
            t.off("Panzoom.click", e.onNavClick),
            t.off("Panzoom.touchEnd", e.onNavTouch)),
            (e.nav = null),
            i &&
              (i.off("ready", e.onTargetReady),
              i.off("refresh", e.onTargetChange),
              i.off("change", e.onTargetChange)),
            (e.target = null);
        }
      }
      Object.defineProperty(se, "defaults", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: { friction: 0.35 },
      });
      const ne = { Navigation: ie, Dots: J, Sync: se };
      class oe extends O {
        get axis() {
          return this.isHorizontal ? "e" : "f";
        }
        get isEnabled() {
          return this.state === U.Ready;
        }
        get isInfinite() {
          let e = !1;
          const { contentDim: t, viewportDim: i, pages: s, slides: n } = this;
          return (
            s.length >= 2 && t + n[0].dim >= i && (e = this.option("infinite")),
            e
          );
        }
        get isRTL() {
          return "rtl" === this.option("direction");
        }
        get isHorizontal() {
          return "x" === this.option("axis");
        }
        constructor(e, t = {}, i = {}) {
          if (
            (super(),
            Object.defineProperty(this, "bp", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "",
            }),
            Object.defineProperty(this, "lp", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            Object.defineProperty(this, "userOptions", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: {},
            }),
            Object.defineProperty(this, "userPlugins", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: {},
            }),
            Object.defineProperty(this, "state", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: U.Init,
            }),
            Object.defineProperty(this, "page", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            Object.defineProperty(this, "prevPage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            }),
            Object.defineProperty(this, "container", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "viewport", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            }),
            Object.defineProperty(this, "track", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            }),
            Object.defineProperty(this, "slides", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: [],
            }),
            Object.defineProperty(this, "pages", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: [],
            }),
            Object.defineProperty(this, "panzoom", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            }),
            Object.defineProperty(this, "inTransition", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new Set(),
            }),
            Object.defineProperty(this, "contentDim", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            Object.defineProperty(this, "viewportDim", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            "string" == typeof e && (e = document.querySelector(e)),
            !e || !I(e))
          )
            throw new Error("No Element found");
          (this.container = e),
            (this.slideNext = Y(this.slideNext.bind(this), 150)),
            (this.slidePrev = Y(this.slidePrev.bind(this), 150)),
            (this.userOptions = t),
            (this.userPlugins = i),
            queueMicrotask(() => {
              this.processOptions();
            });
        }
        processOptions() {
          const e = E({}, oe.defaults, this.userOptions);
          let t = "";
          const i = e.breakpoints;
          if (i && M(i))
            for (const [s, n] of Object.entries(i))
              window.matchMedia(s).matches && M(n) && ((t += s), E(e, n));
          (t === this.bp && this.state !== U.Init) ||
            ((this.bp = t),
            this.state === U.Ready &&
              (e.initialSlide = this.pages[this.page].slides[0].index),
            this.state !== U.Init && this.destroy(),
            super.setOptions(e),
            !1 === this.option("enabled")
              ? this.attachEvents()
              : setTimeout(() => {
                  this.init();
                }, 0));
        }
        init() {
          (this.state = U.Init),
            this.emit("init"),
            this.attachPlugins(
              Object.assign(Object.assign({}, oe.Plugins), this.userPlugins)
            ),
            this.emit("attachPlugins"),
            this.initLayout(),
            this.initSlides(),
            this.updateMetrics(),
            this.setInitialPosition(),
            this.initPanzoom(),
            this.attachEvents(),
            (this.state = U.Ready),
            this.emit("ready");
        }
        initLayout() {
          const { container: e } = this,
            t = this.option("classes");
          $(e, this.cn("container")),
            y(e, t.isLTR, !this.isRTL),
            y(e, t.isRTL, this.isRTL),
            y(e, t.isVertical, !this.isHorizontal),
            y(e, t.isHorizontal, this.isHorizontal);
          let i = this.option("viewport") || e.querySelector(`.${t.viewport}`);
          i ||
            ((i = document.createElement("div")),
            $(i, t.viewport),
            i.append(...X(e, `.${t.slide}`)),
            e.prepend(i));
          let s = this.option("track") || e.querySelector(`.${t.track}`);
          s ||
            ((s = document.createElement("div")),
            $(s, t.track),
            s.append(...Array.from(i.childNodes))),
            s.setAttribute("aria-live", "polite"),
            i.contains(s) || i.prepend(s),
            (this.viewport = i),
            (this.track = s),
            this.emit("initLayout");
        }
        initSlides() {
          const { track: e } = this;
          if (e) {
            (this.slides = []),
              [...X(e, `.${this.cn("slide")}`)].forEach((e) => {
                if (I(e)) {
                  const t = Z({ el: e, isDom: !0, index: this.slides.length });
                  this.slides.push(t),
                    this.emit("initSlide", t, this.slides.length);
                }
              });
            for (let e of this.option("slides", [])) {
              const t = Z(e);
              (t.index = this.slides.length),
                this.slides.push(t),
                this.emit("initSlide", t, this.slides.length);
            }
            this.emit("initSlides");
          }
        }
        setInitialPage() {
          let e = 0;
          const t = this.option("initialSlide");
          (e =
            "number" == typeof t
              ? this.getPageForSlide(t)
              : parseInt(this.option("initialPage", 0) + "", 10) || 0),
            (this.page = e);
        }
        setInitialPosition() {
          if (!this.track || !this.pages.length) return;
          const e = this.isHorizontal;
          let t = this.page;
          this.pages[t] || (this.page = t = 0);
          const i = this.pages[t].pos * (this.isRTL && e ? 1 : -1),
            s = e ? `${i}px` : "0",
            n = e ? "0" : `${i}px`;
          (this.track.style.transform = `translate3d(${s}, ${n}, 0) scale(1)`),
            this.option("adaptiveHeight") && this.setViewportHeight();
        }
        initPanzoom() {
          this.panzoom && (this.panzoom.destroy(), (this.panzoom = null));
          const e = this.option("Panzoom") || {};
          (this.panzoom = new q(
            this.viewport,
            E(
              {},
              {
                content: this.track,
                zoom: !1,
                panOnlyZoomed: !1,
                lockAxis: this.isHorizontal ? "x" : "y",
                infinite: this.isInfinite,
                click: !1,
                dblClick: !1,
                touch: (e) => !(this.pages.length < 2 && !e.options.infinite),
                bounds: () => this.getBounds(),
                maxVelocity: (e) =>
                  Math.abs(e.target[this.axis] - e.current[this.axis]) <
                  2 * this.viewportDim
                    ? 100
                    : 0,
              },
              e
            )
          )),
            this.panzoom.on("*", (e, t, ...i) => {
              this.emit(`Panzoom.${t}`, e, ...i);
            }),
            this.panzoom.on("decel", this.onDecel),
            this.panzoom.on("refresh", this.onRefresh),
            this.panzoom.on("beforeTransform", this.onBeforeTransform),
            this.panzoom.on("endAnimation", this.onEndAnimation);
        }
        attachEvents() {
          const e = this.container;
          e &&
            (e.addEventListener("click", this.onClick, {
              passive: !1,
              capture: !1,
            }),
            e.addEventListener("slideTo", this.onSlideTo)),
            window.addEventListener("resize", this.onResize);
        }
        createPages() {
          let e = [];
          const { contentDim: t, viewportDim: i } = this;
          let s = this.option("slidesPerPage");
          ("number" != typeof s || t <= i) && (s = 1 / 0);
          let n = 0,
            o = 0,
            a = 0;
          for (const t of this.slides)
            (!e.length || o + t.dim - i > 0.05 || a === s) &&
              (e.push(G()), (n = e.length - 1), (o = 0), (a = 0)),
              e[n].slides.push(t),
              (o += t.dim + t.gap),
              a++;
          return e;
        }
        processPages() {
          const e = this.pages,
            { contentDim: t, viewportDim: i } = this,
            s = this.option("center"),
            n = this.option("fill"),
            o = n && s && t > i && !this.isInfinite;
          if (
            (e.forEach((e, n) => {
              (e.index = n), (e.pos = e.slides[0].pos), (e.dim = 0);
              for (const [t, i] of e.slides.entries())
                (e.dim += i.dim), t < e.slides.length - 1 && (e.dim += i.gap);
              o && e.pos + 0.5 * e.dim < 0.5 * i
                ? (e.pos = 0)
                : o && e.pos + 0.5 * e.dim >= t - 0.5 * i
                ? (e.pos = t - i)
                : s && (e.pos += -0.5 * (i - e.dim));
            }),
            e.forEach((e, s) => {
              n &&
                !this.isInfinite &&
                t > i &&
                ((e.pos = Math.max(e.pos, 0)),
                (e.pos = Math.min(e.pos, t - i))),
                (e.pos = m(e.pos, 1e3)),
                (e.dim = m(e.dim, 1e3)),
                Math.abs(e.pos) <= 0.1 && (e.pos = 0);
            }),
            this.isInfinite)
          )
            return e;
          const a = [];
          let r;
          return (
            e.forEach((e) => {
              const t = Object.assign({}, e);
              r && t.pos === r.pos
                ? ((r.dim += t.dim), (r.slides = [...r.slides, ...t.slides]))
                : ((t.index = a.length), (r = t), a.push(t));
            }),
            a
          );
        }
        getPageFromIndex(e = 0) {
          const t = this.pages.length;
          let i;
          return (
            (e = parseInt((e || 0).toString()) || 0),
            (i = this.isInfinite
              ? ((e % t) + t) % t
              : Math.max(Math.min(e, t - 1), 0)),
            i
          );
        }
        getSlideMetrics(e) {
          var t, i;
          const s = this.isHorizontal ? "width" : "height";
          let n = 0,
            o = 0,
            a = e.el;
          const r = a && !a.parentNode;
          if (
            (a
              ? (n = parseFloat(a.dataset[s] || "") || 0)
              : ((a = document.createElement("div")),
                (a.style.visibility = "hidden"),
                (this.track || document.body).prepend(a)),
            $(a, this.cn("slide") + " " + e.class + " " + e.customClass),
            n)
          )
            (a.style[s] = `${n}px`),
              (a.style["width" === s ? "height" : "width"] = "");
          else {
            r && (this.track || document.body).prepend(a);
            const e = Math.max(
              1,
              (null === (t = window.visualViewport) || void 0 === t
                ? void 0
                : t.scale) || 1
            );
            n = a.getBoundingClientRect()[s] * e;
          }
          const l = getComputedStyle(a);
          return (
            "content-box" === l.boxSizing &&
              (this.isHorizontal
                ? ((n += parseFloat(l.paddingLeft) || 0),
                  (n += parseFloat(l.paddingRight) || 0))
                : ((n += parseFloat(l.paddingTop) || 0),
                  (n += parseFloat(l.paddingBottom) || 0))),
            (o =
              parseFloat(
                l[this.isHorizontal ? "marginRight" : "marginBottom"]
              ) || 0),
            r
              ? null === (i = a.parentElement) ||
                void 0 === i ||
                i.removeChild(a)
              : e.el || a.remove(),
            { dim: m(n, 1e3), gap: m(o, 1e3) }
          );
        }
        getBounds() {
          const { isInfinite: e, isRTL: t, isHorizontal: i, pages: s } = this;
          let n = { min: 0, max: 0 };
          if (e) n = { min: -1 / 0, max: 1 / 0 };
          else if (s.length) {
            const e = s[0].pos,
              o = s[s.length - 1].pos;
            n = t && i ? { min: e, max: o } : { min: -1 * o, max: -1 * e };
          }
          return {
            x: i ? n : { min: 0, max: 0 },
            y: i ? { min: 0, max: 0 } : n,
          };
        }
        repositionSlides() {
          let e,
            {
              isHorizontal: t,
              isRTL: i,
              isInfinite: s,
              viewport: n,
              viewportDim: o,
              contentDim: a,
              page: r,
              pages: l,
              slides: c,
              panzoom: h,
            } = this,
            d = 0,
            u = 0,
            p = 0,
            f = 0;
          h ? (f = -1 * h.current[this.axis]) : l[r] && (f = l[r].pos || 0),
            (e = t ? (i ? "right" : "left") : "top"),
            i && t && (f *= -1);
          for (const t of c)
            t.el
              ? ("top" === e
                  ? ((t.el.style.right = ""), (t.el.style.left = ""))
                  : (t.el.style.top = ""),
                t.index !== d
                  ? (t.el.style[e] = 0 === u ? "" : `${m(u, 1e3)}px`)
                  : (t.el.style[e] = ""),
                (p += t.dim + t.gap),
                d++)
              : (u += t.dim + t.gap);
          if (s && p && n) {
            let i = getComputedStyle(n),
              s = "padding",
              r = t ? "Right" : "Bottom",
              l = parseFloat(i[s + (t ? "Left" : "Top")]);
            (f -= l), (o += l), (o += parseFloat(i[s + r]));
            for (const t of c)
              t.el &&
                (m(t.pos) < m(o) &&
                  m(t.pos + t.dim + t.gap) < m(f) &&
                  m(f) > m(a - o) &&
                  (t.el.style[e] = `${m(u + p, 1e3)}px`),
                m(t.pos + t.gap) >= m(a - o) &&
                  m(t.pos) > m(f + o) &&
                  m(f) < m(o) &&
                  (t.el.style[e] = `-${m(p, 1e3)}px`));
          }
          let g,
            v,
            b = [...this.inTransition];
          if ((b.length > 1 && ((g = l[b[0]]), (v = l[b[1]])), g && v)) {
            let t = 0;
            for (const i of c)
              i.el
                ? this.inTransition.has(i.index) &&
                  g.slides.indexOf(i) < 0 &&
                  (i.el.style[e] = `${m(t + (g.pos - v.pos), 1e3)}px`)
                : (t += i.dim + i.gap);
          }
        }
        createSlideEl(e) {
          const { track: t, slides: i } = this;
          if (!t || !e) return;
          if (e.el && e.el.parentNode) return;
          const s = e.el || document.createElement("div");
          $(s, this.cn("slide")), $(s, e.class), $(s, e.customClass);
          const n = e.html;
          n &&
            (n instanceof HTMLElement
              ? s.appendChild(n)
              : (s.innerHTML = e.html + ""));
          const o = [];
          i.forEach((e, t) => {
            e.el && o.push(t);
          });
          const a = e.index;
          let r = null;
          o.length &&
            (r =
              i[
                o.reduce((e, t) => (Math.abs(t - a) < Math.abs(e - a) ? t : e))
              ]);
          const l =
            r && r.el && r.el.parentNode
              ? r.index < e.index
                ? r.el.nextSibling
                : r.el
              : null;
          t.insertBefore(s, t.contains(l) ? l : null),
            (e.el = s),
            this.emit("createSlide", e);
        }
        removeSlideEl(e, t = !1) {
          const i = e.el;
          if (!i || !i.parentNode) return;
          const s = this.cn("isSelected");
          if (
            (i.classList.contains(s) &&
              (R(i, s), this.emit("unselectSlide", e)),
            e.isDom && !t)
          )
            return (
              i.removeAttribute("aria-hidden"),
              i.removeAttribute("data-index"),
              void (i.style.left = "")
            );
          this.emit("removeSlide", e);
          const n = new CustomEvent("animationend");
          i.dispatchEvent(n), e.el && (e.el.remove(), (e.el = null));
        }
        transitionTo(e = 0, t = this.option("transition")) {
          if (!t) return !1;
          const { pages: i, panzoom: s } = this;
          e = parseInt((e || 0).toString()) || 0;
          const n = this.getPageFromIndex(e);
          if (
            !s ||
            !i[n] ||
            i.length < 2 ||
            Math.abs(i[this.page].slides[0].dim - this.viewportDim) > 1
          )
            return !1;
          const o = e > this.page ? 1 : -1,
            a = this.pages[n].pos * (this.isRTL ? 1 : -1);
          if (this.page === n && Math.abs(a - s.target[this.axis]) < 1)
            return !1;
          this.clearTransitions();
          const r = s.isResting;
          $(this.container, this.cn("inTransition"));
          const l = this.pages[this.page].slides[0],
            c = this.pages[n].slides[0];
          this.inTransition.add(c.index), this.createSlideEl(c);
          let h = l.el,
            d = c.el;
          r || "slide" === t || ((t = "fadeFast"), (h = null));
          const u = this.isRTL ? "next" : "prev",
            p = this.isRTL ? "prev" : "next";
          return (
            h &&
              (this.inTransition.add(l.index),
              (l.transition = t),
              h.addEventListener("animationend", this.onAnimationEnd),
              h.classList.add(`f-${t}Out`, `to-${o > 0 ? p : u}`)),
            d &&
              ((c.transition = t),
              d.addEventListener("animationend", this.onAnimationEnd),
              d.classList.add(`f-${t}In`, `from-${o > 0 ? u : p}`)),
            s.panTo({
              x: this.isHorizontal ? a : 0,
              y: this.isHorizontal ? 0 : a,
              friction: 0,
            }),
            this.onChange(n),
            !0
          );
        }
        manageSlideVisiblity() {
          const e = new Set(),
            t = new Set(),
            i = this.getVisibleSlides(
              parseFloat(this.option("preload", 0) + "") || 0
            );
          for (const s of this.slides) i.has(s) ? e.add(s) : t.add(s);
          for (const t of this.inTransition) e.add(this.slides[t]);
          for (const t of e) this.createSlideEl(t), this.lazyLoadSlide(t);
          for (const i of t) e.has(i) || this.removeSlideEl(i);
          this.markSelectedSlides(), this.repositionSlides();
        }
        markSelectedSlides() {
          if (!this.pages[this.page] || !this.pages[this.page].slides) return;
          const e = "aria-hidden";
          let t = this.cn("isSelected");
          if (t)
            for (const i of this.slides) {
              const s = i.el;
              s &&
                ((s.dataset.index = `${i.index}`),
                this.pages[this.page].slides.includes(i)
                  ? (s.classList.contains(t) ||
                      ($(s, t), this.emit("selectSlide", i)),
                    s.removeAttribute(e))
                  : (s.classList.contains(t) &&
                      (R(s, t), this.emit("unselectSlide", i)),
                    s.setAttribute(e, "true")));
            }
        }
        flipInfiniteTrack() {
          const e = this.panzoom;
          if (!e || !this.isInfinite) return;
          const t = "x" === this.option("axis") ? "e" : "f",
            { viewportDim: i, contentDim: s } = this;
          let n = e.current[t],
            o = e.target[t] - n,
            a = 0,
            r = 0.5 * i,
            l = s;
          this.isRTL && this.isHorizontal
            ? (n < -r && ((a = -1), (n += l)), n > l - r && ((a = 1), (n -= l)))
            : (n > r && ((a = 1), (n -= l)),
              n < -l + r && ((a = -1), (n += l))),
            a && ((e.current[t] = n), (e.target[t] = n + o));
        }
        lazyLoadSlide(e) {
          const t = this,
            i = e && e.el;
          if (!i) return;
          const s = new Set(),
            n = "f-fadeIn";
          i.querySelectorAll("[data-lazy-srcset]").forEach((e) => {
            e instanceof HTMLImageElement && s.add(e);
          });
          let o = Array.from(i.querySelectorAll("[data-lazy-src]"));
          i.dataset.lazySrc && o.push(i),
            o.map((e) => {
              e instanceof HTMLImageElement
                ? s.add(e)
                : I(e) &&
                  ((e.style.backgroundImage = `url('${
                    e.dataset.lazySrc || ""
                  }')`),
                  delete e.dataset.lazySrc);
            });
          const a = (e, i, s) => {
            s && (s.remove(), (s = null)),
              i.complete &&
                (i.classList.add(n),
                setTimeout(() => {
                  i.classList.remove(n);
                }, 350),
                (i.style.visibility = "")),
              this.option("adaptiveHeight") &&
                e.el &&
                this.pages[this.page].slides.indexOf(e) > -1 &&
                (t.updateMetrics(), t.setViewportHeight()),
              this.emit("load", e);
          };
          for (const t of s) {
            let i = null;
            (t.src = t.dataset.lazySrcset || t.dataset.lazySrc || ""),
              delete t.dataset.lazySrc,
              delete t.dataset.lazySrcset,
              (t.style.visibility = "hidden"),
              t.addEventListener("error", () => {
                a(e, t, i);
              }),
              t.addEventListener("load", () => {
                a(e, t, i);
              }),
              setTimeout(() => {
                t.parentNode &&
                  e.el &&
                  (t.complete
                    ? a(e, t, i)
                    : ((i = v(F)), t.parentNode.insertBefore(i, t)));
              }, 300);
          }
        }
        onAnimationEnd(e) {
          var t;
          const i = e.target,
            s = i ? parseInt(i.dataset.index || "", 10) || 0 : -1,
            n = this.slides[s],
            o = e.animationName;
          if (!i || !n || !o) return;
          const a = !!this.inTransition.has(s) && n.transition;
          a &&
            o.substring(0, a.length + 2) === `f-${a}` &&
            this.inTransition.delete(s),
            this.inTransition.size || this.clearTransitions(),
            s === this.page &&
              (null === (t = this.panzoom) || void 0 === t
                ? void 0
                : t.isResting) &&
              this.emit("settle");
        }
        onDecel(e, t = 0, i = 0, s = 0, n = 0) {
          const { isRTL: o, isHorizontal: a, axis: r, pages: l } = this,
            c = l.length,
            h = Math.abs(Math.atan2(i, t) / (Math.PI / 180));
          let d = 0;
          if (((d = h > 45 && h < 135 ? (a ? 0 : i) : a ? t : 0), !c)) return;
          const u = this.option("dragFree");
          let p = this.page,
            m = o && a ? 1 : -1;
          const f = e.target[r] * m,
            g = e.current[r] * m;
          let { pageIndex: v } = this.getPageFromPosition(f),
            { pageIndex: b } = this.getPageFromPosition(g);
          u
            ? this.onChange(v)
            : (Math.abs(d) > 5
                ? (l[p].dim <
                    document.documentElement[
                      "client" + (this.isHorizontal ? "Width" : "Height")
                    ] -
                      1 && (p = b),
                  (p =
                    o && a ? (d < 0 ? p - 1 : p + 1) : d < 0 ? p + 1 : p - 1))
                : (p = 0 === s && 0 === n ? p : b),
              this.slideTo(p, {
                transition: !1,
                friction: e.option("decelFriction"),
              }));
        }
        onClick(e) {
          const t = e.target,
            i = t && I(t) ? t.dataset : null;
          let s, n;
          i &&
            (void 0 !== i.carouselPage
              ? ((n = "slideTo"), (s = i.carouselPage))
              : void 0 !== i.carouselNext
              ? (n = "slideNext")
              : void 0 !== i.carouselPrev && (n = "slidePrev")),
            n
              ? (e.preventDefault(),
                e.stopPropagation(),
                t && !t.hasAttribute("disabled") && this[n](s))
              : this.emit("click", e);
        }
        onSlideTo(e) {
          const t = e.detail || 0;
          this.slideTo(this.getPageForSlide(t), { friction: 0 });
        }
        onChange(e, t = 0) {
          const i = this.page;
          (this.prevPage = i),
            (this.page = e),
            this.option("adaptiveHeight") && this.setViewportHeight(),
            e !== i &&
              (this.markSelectedSlides(), this.emit("change", e, i, t));
        }
        onRefresh() {
          let e = this.contentDim,
            t = this.viewportDim;
          this.updateMetrics(),
            (this.contentDim === e && this.viewportDim === t) ||
              this.slideTo(this.page, { friction: 0, transition: !1 });
        }
        onResize() {
          this.option("breakpoints") && this.processOptions();
        }
        onBeforeTransform(e) {
          this.lp !== e.current[this.axis] &&
            (this.flipInfiniteTrack(), this.manageSlideVisiblity()),
            (this.lp = e.current.e);
        }
        onEndAnimation() {
          this.inTransition.size || this.emit("settle");
        }
        reInit(e = null, t = null) {
          this.destroy(),
            (this.state = U.Init),
            (this.userOptions = e || this.userOptions),
            (this.userPlugins = t || this.userPlugins),
            this.processOptions();
        }
        slideTo(
          e = 0,
          {
            friction: t = this.option("friction"),
            transition: i = this.option("transition"),
          } = {}
        ) {
          if (this.state === U.Destroy) return;
          const {
              axis: s,
              isHorizontal: n,
              isRTL: o,
              pages: a,
              panzoom: r,
            } = this,
            l = a.length,
            c = o && n ? 1 : -1;
          if (!r || !l) return;
          if (this.transitionTo(e, i)) return;
          const h = this.getPageFromIndex(e);
          let d = a[h].pos;
          if (this.isInfinite) {
            const t = this.contentDim,
              i = r.target[s] * c;
            if (2 === l) d += t * Math.floor(parseFloat(e + "") / 2);
            else {
              const e = i;
              d = [d, d - t, d + t].reduce(function (t, i) {
                return Math.abs(i - e) < Math.abs(t - e) ? i : t;
              });
            }
          }
          (d *= c),
            Math.abs(r.target[s] - d) < 0.1 ||
              (r.panTo({ x: n ? d : 0, y: n ? 0 : d, friction: t }),
              this.onChange(h));
        }
        slideToClosest(e) {
          if (this.panzoom) {
            const { pageIndex: t } = this.getPageFromPosition(
              this.panzoom.current[this.isHorizontal ? "e" : "f"]
            );
            this.slideTo(t, e);
          }
        }
        slideNext() {
          this.slideTo(this.page + 1);
        }
        slidePrev() {
          this.slideTo(this.page - 1);
        }
        clearTransitions() {
          this.inTransition.clear(), R(this.container, this.cn("inTransition"));
          const e = ["to-prev", "to-next", "from-prev", "from-next"];
          for (const t of this.slides) {
            const i = t.el;
            if (i) {
              i.removeEventListener("animationend", this.onAnimationEnd),
                i.classList.remove(...e);
              const s = t.transition;
              s && i.classList.remove(`f-${s}Out`, `f-${s}In`);
            }
          }
          this.manageSlideVisiblity();
        }
        prependSlide(e) {
          var t, i;
          let s = Array.isArray(e) ? e : [e];
          for (const e of s.reverse()) this.slides.unshift(Z(e));
          for (let e = 0; e < this.slides.length; e++) this.slides[e].index = e;
          const n =
            (null === (t = this.pages[this.page]) || void 0 === t
              ? void 0
              : t.pos) || 0;
          (this.page += s.length), this.updateMetrics();
          const o =
            (null === (i = this.pages[this.page]) || void 0 === i
              ? void 0
              : i.pos) || 0;
          if (this.panzoom) {
            const e = this.isRTL ? n - o : o - n;
            (this.panzoom.target.e -= e),
              (this.panzoom.current.e -= e),
              this.panzoom.requestTick();
          }
        }
        appendSlide(e) {
          let t = Array.isArray(e) ? e : [e];
          for (const e of t) {
            const t = Z(e);
            (t.index = this.slides.length),
              this.slides.push(t),
              this.emit("initSlide", t, this.slides.length);
          }
          this.updateMetrics();
        }
        removeSlide(e) {
          const t = this.slides.length;
          (e = ((e % t) + t) % t),
            this.removeSlideEl(this.slides[e], !0),
            this.slides.splice(e, 1);
          for (let e = 0; e < this.slides.length; e++) this.slides[e].index = e;
          this.updateMetrics(),
            this.slideTo(this.page, { friction: 0, transition: !1 });
        }
        updateMetrics() {
          const { panzoom: e, viewport: t, track: i, isHorizontal: s } = this;
          if (!i) return;
          const n = s ? "width" : "height",
            o = s ? "offsetWidth" : "offsetHeight";
          if (t) {
            let e = Math.max(t[o], m(t.getBoundingClientRect()[n], 1e3)),
              i = getComputedStyle(t),
              a = "padding",
              r = s ? "Right" : "Bottom";
            (e -=
              parseFloat(i[a + (s ? "Left" : "Top")]) + parseFloat(i[a + r])),
              (this.viewportDim = e);
          }
          let a,
            r = this.pages.length,
            l = 0;
          for (const [e, t] of this.slides.entries()) {
            let i = 0,
              s = 0;
            !t.el && a
              ? ((i = a.dim), (s = a.gap))
              : (({ dim: i, gap: s } = this.getSlideMetrics(t)), (a = t)),
              (i = m(i, 1e3)),
              (s = m(s, 1e3)),
              (t.dim = i),
              (t.gap = s),
              (t.pos = l),
              (l += i),
              (this.isInfinite || e < this.slides.length - 1) && (l += s);
          }
          const c = this.contentDim;
          (l = m(l, 1e3)),
            (this.contentDim = l),
            e &&
              ((e.contentRect[n] = l),
              (e.contentRect["e" === this.axis ? "fullWidth" : "fullHeight"] =
                l)),
            (this.pages = this.createPages()),
            (this.pages = this.processPages()),
            this.state === U.Init && this.setInitialPage(),
            (this.page = Math.max(
              0,
              Math.min(this.page, this.pages.length - 1)
            )),
            e &&
              r === this.pages.length &&
              Math.abs(l - c) > 0.5 &&
              ((e.target[this.axis] = -1 * this.pages[this.page].pos),
              (e.current[this.axis] = -1 * this.pages[this.page].pos),
              e.stop()),
            this.manageSlideVisiblity(),
            this.emit("refresh");
        }
        getProgress(e, t = !1) {
          void 0 === e && (e = this.page);
          const i = this,
            s = i.panzoom,
            n = i.pages[e] || 0;
          if (!n || !s) return 0;
          let o = -1 * s.current.e,
            a = i.contentDim;
          var r = [
            m((o - n.pos) / (1 * n.dim), 1e3),
            m((o + a - n.pos) / (1 * n.dim), 1e3),
            m((o - a - n.pos) / (1 * n.dim), 1e3),
          ].reduce(function (e, t) {
            return Math.abs(t) < Math.abs(e) ? t : e;
          });
          return t ? r : Math.max(-1, Math.min(1, r));
        }
        setViewportHeight() {
          const { page: e, pages: t, viewport: i, isHorizontal: s } = this;
          if (!i || !t[e]) return;
          let n = 0;
          s &&
            this.track &&
            ((this.track.style.height = "auto"),
            t[e].slides.forEach((e) => {
              e.el && (n = Math.max(n, e.el.offsetHeight));
            })),
            (i.style.height = n ? `${n}px` : "");
        }
        getPageForSlide(e) {
          for (const t of this.pages)
            for (const i of t.slides) if (i.index === e) return t.index;
          return -1;
        }
        getVisibleSlides(e = 0) {
          var t;
          const i = new Set();
          let { contentDim: s, viewportDim: n, pages: o, page: a } = this;
          s =
            s +
              (null === (t = this.slides[this.slides.length - 1]) ||
              void 0 === t
                ? void 0
                : t.gap) || 0;
          let r = 0;
          (r = this.panzoom
            ? -1 * this.panzoom.current[this.axis]
            : (o[a] && o[a].pos) || 0),
            this.isInfinite && (r -= Math.floor(r / s) * s),
            this.isRTL && this.isHorizontal && (r *= -1);
          const l = r - n * e,
            c = r + n * (e + 1),
            h = this.isInfinite ? [-1, 0, 1] : [0];
          for (const e of this.slides)
            for (const t of h) {
              const n = e.pos + t * s,
                o = e.pos + e.dim + e.gap + t * s;
              n < c && o > l && i.add(e);
            }
          return i;
        }
        getPageFromPosition(e) {
          const { viewportDim: t, contentDim: i } = this,
            s = this.pages.length,
            n = this.slides.length,
            o = this.slides[n - 1];
          let a = 0,
            r = 0,
            l = 0;
          const c = this.option("center");
          c && (e += 0.5 * t),
            this.isInfinite ||
              (e = Math.max(this.slides[0].pos, Math.min(e, o.pos)));
          const h = i + o.gap;
          (l = Math.floor(e / h) || 0), (e -= l * h);
          let d = o,
            u = this.slides.find((t) => {
              const i = e + (d && !c ? 0.5 * d.dim : 0);
              return (d = t), t.pos <= i && t.pos + t.dim + t.gap > i;
            });
          return (
            u || (u = o),
            (r = this.getPageForSlide(u.index)),
            (a = r + l * s),
            { page: a, pageIndex: r }
          );
        }
        destroy() {
          if ([U.Destroy].includes(this.state)) return;
          this.state = U.Destroy;
          const {
              container: e,
              viewport: t,
              track: i,
              slides: s,
              panzoom: n,
            } = this,
            o = this.option("classes");
          e.removeEventListener("click", this.onClick, {
            passive: !1,
            capture: !1,
          }),
            e.removeEventListener("slideTo", this.onSlideTo),
            window.removeEventListener("resize", this.onResize),
            n && (n.destroy(), (this.panzoom = null)),
            s &&
              s.forEach((e) => {
                this.removeSlideEl(e);
              }),
            this.detachPlugins(),
            t &&
              t.offsetParent &&
              i &&
              i.offsetParent &&
              t.replaceWith(...i.childNodes);
          for (const [t, i] of Object.entries(o))
            "container" !== t && i && e.classList.remove(i);
          (this.track = null),
            (this.viewport = null),
            (this.page = 0),
            (this.slides = []);
          const a = this.events.get("ready");
          (this.events = new Map()), a && this.events.set("ready", a);
        }
      }
      Object.defineProperty(oe, "Panzoom", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: q,
      }),
        Object.defineProperty(oe, "defaults", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: {
            viewport: null,
            track: null,
            enabled: !0,
            slides: [],
            axis: "x",
            transition: "fade",
            preload: 1,
            slidesPerPage: "auto",
            initialPage: 0,
            friction: 0.12,
            Panzoom: { decelFriction: 0.12 },
            center: !0,
            infinite: !0,
            fill: !0,
            dragFree: !1,
            adaptiveHeight: !1,
            direction: "ltr",
            classes: {
              container: "f-carousel",
              viewport: "f-carousel__viewport",
              track: "f-carousel__track",
              slide: "f-carousel__slide",
              isLTR: "is-ltr",
              isRTL: "is-rtl",
              isHorizontal: "is-horizontal",
              isVertical: "is-vertical",
              inTransition: "in-transition",
              isSelected: "is-selected",
            },
            l10n: {
              NEXT: "Next slide",
              PREV: "Previous slide",
              GOTO: "Go to slide #%d",
            },
          },
        }),
        Object.defineProperty(oe, "Plugins", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ne,
        });
      const ae = function (e) {
          const t = window.pageYOffset,
            i = window.pageYOffset + window.innerHeight;
          if (!I(e)) return 0;
          const s = e.getBoundingClientRect(),
            n = s.y + window.pageYOffset,
            o = s.y + s.height + window.pageYOffset;
          if (t > o || i < n) return 0;
          if (t < n && i > o) return 100;
          if (n < t && o > i) return 100;
          let a = s.height;
          n < t && (a -= window.pageYOffset - n), o > i && (a -= o - i);
          const r = (a / window.innerHeight) * 100;
          return Math.round(r);
        },
        re = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        );
      let le;
      const ce = [
          "a[href]",
          "area[href]",
          'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
          "select:not([disabled]):not([aria-hidden])",
          "textarea:not([disabled]):not([aria-hidden])",
          "button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)",
          "iframe",
          "object",
          "embed",
          "video",
          "audio",
          "[contenteditable]",
          '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])',
        ].join(","),
        he = (e) => {
          if (e && re) {
            void 0 === le &&
              document.createElement("div").focus({
                get preventScroll() {
                  return (le = !0), !1;
                },
              });
            try {
              if (le) e.focus({ preventScroll: !0 });
              else {
                const t = window.pageXOffset || document.body.scrollTop,
                  i = window.pageYOffset || document.body.scrollLeft;
                e.focus(),
                  document.body.scrollTo({ top: t, left: i, behavior: "auto" });
              }
            } catch (e) {}
          }
        },
        de = {
          dragToClose: !0,
          hideScrollbar: !0,
          Carousel: {
            classes: {
              container: "fancybox__carousel",
              viewport: "fancybox__viewport",
              track: "fancybox__track",
              slide: "fancybox__slide",
            },
          },
          contentClick: "toggleZoom",
          contentDblClick: !1,
          backdropClick: "close",
          animated: !0,
          idle: 3500,
          showClass: "f-zoomInUp",
          hideClass: "f-fadeOut",
          commonCaption: !1,
          parentEl: null,
          startIndex: 0,
          l10n: Object.assign(Object.assign({}, A), {
            CLOSE: "Close",
            NEXT: "Next",
            PREV: "Previous",
            MODAL: "You can close this modal content with the ESC key",
            ERROR: "Something Went Wrong, Please Try Again Later",
            IMAGE_ERROR: "Image Not Found",
            ELEMENT_NOT_FOUND: "HTML Element Not Found",
            AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
            AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
            IFRAME_ERROR: "Error Loading Page",
            TOGGLE_ZOOM: "Toggle zoom level",
            TOGGLE_THUMBS: "Toggle thumbnails",
            TOGGLE_SLIDESHOW: "Toggle slideshow",
            TOGGLE_FULLSCREEN: "Toggle full-screen mode",
            DOWNLOAD: "Download",
          }),
          tpl: {
            closeButton:
              '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>',
            main: '<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">\n    <div class="fancybox__backdrop"></div>\n    <div class="fancybox__carousel"></div>\n    <div class="fancybox__footer"></div>\n  </div>',
          },
          groupAll: !1,
          groupAttr: "data-fancybox",
          defaultType: "image",
          defaultDisplay: "block",
          autoFocus: !0,
          trapFocus: !0,
          placeFocusBack: !0,
          closeButton: "auto",
          keyboard: {
            Escape: "close",
            Delete: "close",
            Backspace: "close",
            PageUp: "next",
            PageDown: "prev",
            ArrowUp: "prev",
            ArrowDown: "next",
            ArrowRight: "next",
            ArrowLeft: "prev",
          },
          Fullscreen: { autoStart: !1 },
          compact: () =>
            window.matchMedia("(max-width: 578px), (max-height: 578px)")
              .matches,
          wheel: "zoom",
        };
      var ue, pe;
      !(function (e) {
        (e[(e.Init = 0)] = "Init"),
          (e[(e.Ready = 1)] = "Ready"),
          (e[(e.Closing = 2)] = "Closing"),
          (e[(e.CustomClosing = 3)] = "CustomClosing"),
          (e[(e.Destroy = 4)] = "Destroy");
      })(ue || (ue = {})),
        (function (e) {
          (e[(e.Loading = 0)] = "Loading"),
            (e[(e.Opening = 1)] = "Opening"),
            (e[(e.Ready = 2)] = "Ready"),
            (e[(e.Closing = 3)] = "Closing");
        })(pe || (pe = {}));
      const me = () => {
        queueMicrotask(() => {
          (() => {
            const { slug: e, index: t } = fe.parseURL(),
              i = rt.getInstance();
            if (i && !1 !== i.option("Hash")) {
              const s = i.carousel;
              if (e && s) {
                for (let t of s.slides)
                  if (t.slug && t.slug === e) return s.slideTo(t.index);
                if (e === i.option("slug")) return s.slideTo(t - 1);
                const n = i.getSlide(),
                  o = n && n.triggerEl && n.triggerEl.dataset;
                if (o && o.fancybox === e) return s.slideTo(t - 1);
              }
              (fe.hasSilentClose = !0), i.close();
            }
            fe.startFromUrl();
          })();
        });
      };
      class fe extends K {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "origHash", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "",
            }),
            Object.defineProperty(this, "timer", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            });
        }
        onChange() {
          const e = this.instance,
            t = e.carousel;
          this.timer && clearTimeout(this.timer);
          const i = e.getSlide();
          if (!t || !i) return;
          const s = e.isOpeningSlide(i),
            n = new URL(document.URL).hash;
          let o,
            a = i.slug || void 0,
            r = i.triggerEl || void 0;
          (o = a || this.instance.option("slug")),
            !o && r && r.dataset && (o = r.dataset.fancybox);
          let l = "";
          o &&
            "true" !== o &&
            (l =
              "#" + o + (!a && t.slides.length > 1 ? "-" + (i.index + 1) : "")),
            s && (this.origHash = n !== l ? n : ""),
            l &&
              n !== l &&
              (this.timer = setTimeout(() => {
                try {
                  e.state === ue.Ready &&
                    window.history[s ? "pushState" : "replaceState"](
                      {},
                      document.title,
                      window.location.pathname + window.location.search + l
                    );
                } catch (e) {}
              }, 300));
        }
        onClose() {
          if (
            (this.timer && clearTimeout(this.timer), !0 !== fe.hasSilentClose)
          )
            try {
              window.history.replaceState(
                {},
                document.title,
                window.location.pathname +
                  window.location.search +
                  (this.origHash || "")
              );
            } catch (e) {}
        }
        attach() {
          const e = this.instance;
          e.on("Carousel.ready", this.onChange),
            e.on("Carousel.change", this.onChange),
            e.on("close", this.onClose);
        }
        detach() {
          const e = this.instance;
          e.off("Carousel.ready", this.onChange),
            e.off("Carousel.change", this.onChange),
            e.off("close", this.onClose);
        }
        static parseURL() {
          const e = window.location.hash.slice(1),
            t = e.split("-"),
            i = t[t.length - 1],
            s = (i && /^\+?\d+$/.test(i) && parseInt(t.pop() || "1", 10)) || 1;
          return { hash: e, slug: t.join("-"), index: s };
        }
        static startFromUrl() {
          if (
            ((fe.hasSilentClose = !1),
            rt.getInstance() || !1 === rt.defaults.Hash)
          )
            return;
          const { hash: e, slug: t, index: i } = fe.parseURL();
          if (!t) return;
          let s = document.querySelector(`[data-slug="${e}"]`);
          if (
            (s &&
              s.dispatchEvent(
                new CustomEvent("click", { bubbles: !0, cancelable: !0 })
              ),
            rt.getInstance())
          )
            return;
          const n = document.querySelectorAll(`[data-fancybox="${t}"]`);
          n.length &&
            ((s = n[i - 1]),
            s &&
              s.dispatchEvent(
                new CustomEvent("click", { bubbles: !0, cancelable: !0 })
              ));
        }
        static destroy() {
          window.removeEventListener("hashchange", me, !1);
        }
      }
      function ge() {
        window.addEventListener("hashchange", me, !1),
          setTimeout(() => {
            fe.startFromUrl();
          }, 500);
      }
      Object.defineProperty(fe, "defaults", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {},
      }),
        Object.defineProperty(fe, "hasSilentClose", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        }),
        re &&
          (/complete|interactive|loaded/.test(document.readyState)
            ? ge()
            : document.addEventListener("DOMContentLoaded", ge));
      class ve extends K {
        onCreateSlide(e, t, i) {
          const s = this.instance.optionFor(i, "src") || "";
          i.el &&
            "image" === i.type &&
            "string" == typeof s &&
            this.setImage(i, s);
        }
        onRemoveSlide(e, t, i) {
          i.panzoom && i.panzoom.destroy(),
            (i.panzoom = void 0),
            (i.imageEl = void 0);
        }
        onChange(e, t, i, s) {
          for (const e of t.slides) {
            const t = e.panzoom;
            t && e.index !== i && t.reset(0.35);
          }
        }
        onClose() {
          var e;
          const t = this.instance,
            i = t.container,
            s = t.getSlide();
          if (!i || !i.parentElement || !s) return;
          const { el: n, contentEl: o, panzoom: a } = s,
            r = s.thumbElSrc;
          if (
            !n ||
            !r ||
            !o ||
            !a ||
            a.isContentLoading ||
            a.state === k.Init ||
            a.state === k.Destroy
          )
            return;
          a.updateMetrics();
          let l = this.getZoomInfo(s);
          if (!l) return;
          (this.instance.state = ue.CustomClosing),
            i.classList.remove("is-zooming-in"),
            i.classList.add("is-zooming-out"),
            (o.style.backgroundImage = `url('${r}')`);
          const c = i.getBoundingClientRect();
          1 ===
            ((null === (e = window.visualViewport) || void 0 === e
              ? void 0
              : e.scale) || 1) &&
            Object.assign(i.style, {
              position: "absolute",
              top: `${window.pageYOffset}px`,
              left: `${window.pageXOffset}px`,
              bottom: "auto",
              right: "auto",
              width: `${c.width}px`,
              height: `${c.height}px`,
              overflow: "hidden",
            });
          const { x: h, y: d, scale: u, opacity: p } = l;
          if (p) {
            const e = ((e, t, i, s) => {
              const n = t - e;
              return (t) => 1 + (((t - e) / n) * -1 || 0);
            })(a.scale, u);
            a.on("afterTransform", () => {
              o.style.opacity = e(a.scale) + "";
            });
          }
          a.on("endAnimation", () => {
            t.destroy();
          }),
            (a.target.a = u),
            (a.target.b = 0),
            (a.target.c = 0),
            (a.target.d = u),
            a.panTo({
              x: h,
              y: d,
              scale: u,
              friction: p ? 0.2 : 0.33,
              ignoreBounds: !0,
            }),
            a.isResting && t.destroy();
        }
        setImage(e, t) {
          const i = this.instance;
          (e.src = t),
            this.process(e, t).then(
              (t) => {
                var s;
                const n = e.contentEl,
                  o = e.imageEl,
                  a = e.thumbElSrc;
                if (i.isClosing() || !n || !o) return;
                n.offsetHeight;
                const r = !!i.isOpeningSlide(e) && this.getZoomInfo(e);
                if (this.option("protected")) {
                  null === (s = e.el) ||
                    void 0 === s ||
                    s.addEventListener("contextmenu", (e) => {
                      e.preventDefault();
                    });
                  const t = document.createElement("div");
                  $(t, "fancybox-protected"), n.appendChild(t);
                }
                if (a && r) {
                  const s = t.contentRect,
                    o = Math.max(s.fullWidth, s.fullHeight);
                  let c = null;
                  !r.opacity &&
                    o > 1200 &&
                    ((c = document.createElement("img")),
                    $(c, "fancybox-ghost"),
                    (c.src = a),
                    n.appendChild(c));
                  const h = () => {
                    c &&
                      ($(c, "f-fadeFastOut"),
                      setTimeout(() => {
                        c && (c.remove(), (c = null));
                      }, 200));
                  };
                  ((l = a),
                  new Promise((e, t) => {
                    const i = new Image();
                    (i.onload = e), (i.onerror = t), (i.src = l);
                  })).then(
                    () => {
                      i.hideLoading(e),
                        (e.state = pe.Opening),
                        this.instance.emit("reveal", e),
                        this.zoomIn(e).then(
                          () => {
                            h(), this.instance.done(e);
                          },
                          () => {}
                        ),
                        c &&
                          setTimeout(
                            () => {
                              h();
                            },
                            o > 2500 ? 800 : 200
                          );
                    },
                    () => {
                      i.hideLoading(e), i.revealContent(e);
                    }
                  );
                } else {
                  const s = this.optionFor(e, "initialSize"),
                    n = this.optionFor(e, "zoom"),
                    o = {
                      event: i.prevMouseMoveEvent || i.options.event,
                      friction: n ? 0.12 : 0,
                    };
                  let a = i.optionFor(e, "showClass") || void 0,
                    r = !0;
                  i.isOpeningSlide(e) &&
                    ("full" === s
                      ? t.zoomToFull(o)
                      : "cover" === s
                      ? t.zoomToCover(o)
                      : "max" === s
                      ? t.zoomToMax(o)
                      : (r = !1),
                    t.stop("current")),
                    r && a && (a = t.isDragging ? "f-fadeIn" : ""),
                    i.hideLoading(e),
                    i.revealContent(e, a);
                }
                var l;
              },
              () => {
                i.setError(e, "{{IMAGE_ERROR}}");
              }
            );
        }
        process(e, t) {
          return new Promise((i, s) => {
            var n;
            const o = this.instance,
              a = e.el;
            o.clearContent(e), o.showLoading(e);
            let r = this.optionFor(e, "content");
            if (("string" == typeof r && (r = v(r)), !r || !I(r))) {
              if (
                ((r = document.createElement("img")),
                r instanceof HTMLImageElement)
              ) {
                let i = "",
                  s = e.caption;
                (i =
                  "string" == typeof s && s
                    ? s.replace(/<[^>]+>/gi, "").substring(0, 1e3)
                    : `Image ${e.index + 1} of ${
                        null === (n = o.carousel) || void 0 === n
                          ? void 0
                          : n.pages.length
                      }`),
                  (r.src = t || ""),
                  (r.alt = i),
                  (r.draggable = !1),
                  e.srcset && r.setAttribute("srcset", e.srcset);
              }
              e.sizes && r.setAttribute("sizes", e.sizes);
            }
            r.classList.add("fancybox-image"),
              (e.imageEl = r),
              o.setContent(e, r, !1),
              (e.panzoom = new q(
                a,
                E({ transformParent: !0 }, this.option("Panzoom") || {}, {
                  content: r,
                  width: o.optionFor(e, "width", "auto"),
                  height: o.optionFor(e, "height", "auto"),
                  wheel: () => {
                    const e = o.option("wheel");
                    return ("zoom" === e || "pan" == e) && e;
                  },
                  click: (t, i) => {
                    var s, n;
                    if (o.isCompact || o.isClosing()) return !1;
                    if (
                      e.index !==
                      (null === (s = o.getSlide()) || void 0 === s
                        ? void 0
                        : s.index)
                    )
                      return !1;
                    if (i) {
                      const e = i.composedPath()[0];
                      if (
                        [
                          "A",
                          "BUTTON",
                          "TEXTAREA",
                          "OPTION",
                          "INPUT",
                          "SELECT",
                          "VIDEO",
                        ].includes(e.nodeName)
                      )
                        return !1;
                    }
                    let a =
                      !i ||
                      (i.target &&
                        (null === (n = e.contentEl) || void 0 === n
                          ? void 0
                          : n.contains(i.target)));
                    return o.option(a ? "contentClick" : "backdropClick") || !1;
                  },
                  dblClick: () =>
                    o.isCompact
                      ? "toggleZoom"
                      : o.option("contentDblClick") || !1,
                  spinner: !1,
                  panOnlyZoomed: !0,
                  wheelLimit: 1 / 0,
                  on: {
                    ready: (e) => {
                      i(e);
                    },
                    error: () => {
                      s();
                    },
                    destroy: () => {
                      s();
                    },
                  },
                })
              ));
          });
        }
        zoomIn(e) {
          return new Promise((t, i) => {
            const s = this.instance,
              n = s.container,
              { panzoom: o, contentEl: a, el: r } = e;
            o && o.updateMetrics();
            const l = this.getZoomInfo(e);
            if (!(l && r && a && o && n)) return void i();
            const { x: c, y: h, scale: d, opacity: u } = l,
              p = () => {
                e.state !== pe.Closing &&
                  (u &&
                    (a.style.opacity =
                      Math.max(Math.min(1, 1 - (1 - o.scale) / (1 - d)), 0) +
                      ""),
                  o.scale >= 1 && o.scale > o.targetScale - 0.1 && t(o));
              },
              m = (e) => {
                R(n, "is-zooming-in"),
                  e.scale < 0.99 ||
                    e.scale > 1.01 ||
                    ((a.style.opacity = ""),
                    e.off("endAnimation", m),
                    e.off("touchStart", m),
                    e.off("afterTransform", p),
                    t(e));
              };
            o.on("endAnimation", m),
              o.on("touchStart", m),
              o.on("afterTransform", p),
              o.on(["error", "destroy"], () => {
                i();
              }),
              o.panTo({ x: c, y: h, scale: d, friction: 0, ignoreBounds: !0 }),
              o.stop("current");
            const f = {
                event:
                  "mousemove" === o.panMode
                    ? s.prevMouseMoveEvent || s.options.event
                    : void 0,
              },
              g = this.optionFor(e, "initialSize");
            $(n, "is-zooming-in"),
              s.hideLoading(e),
              "full" === g
                ? o.zoomToFull(f)
                : "cover" === g
                ? o.zoomToCover(f)
                : "max" === g
                ? o.zoomToMax(f)
                : o.reset(0.172);
          });
        }
        getZoomInfo(e) {
          var t;
          const { el: i, imageEl: s, thumbEl: n, panzoom: o } = e;
          if (
            !i ||
            !s ||
            !n ||
            !o ||
            ae(n) < 3 ||
            !this.optionFor(e, "zoom") ||
            this.instance.state === ue.Destroy
          )
            return !1;
          if (
            1 !==
            ((null === (t = window.visualViewport) || void 0 === t
              ? void 0
              : t.scale) || 1)
          )
            return !1;
          let {
              top: a,
              left: r,
              width: l,
              height: c,
            } = n.getBoundingClientRect(),
            { top: h, left: d, fitWidth: u, fitHeight: p } = o.contentRect;
          if (!(l && c && u && p)) return !1;
          const m = o.container.getBoundingClientRect();
          (d += m.left), (h += m.top);
          const f = -1 * (d + 0.5 * u - (r + 0.5 * l)),
            g = -1 * (h + 0.5 * p - (a + 0.5 * c)),
            v = l / u;
          let b = this.option("zoomOpacity") || !1;
          return (
            "auto" === b && (b = Math.abs(l / c - u / p) > 0.1),
            { x: f, y: g, scale: v, opacity: b }
          );
        }
        attach() {
          const e = this,
            t = e.instance;
          t.on("Carousel.change", e.onChange),
            t.on("Carousel.createSlide", e.onCreateSlide),
            t.on("Carousel.removeSlide", e.onRemoveSlide),
            t.on("close", e.onClose);
        }
        detach() {
          const e = this,
            t = e.instance;
          t.off("Carousel.change", e.onChange),
            t.off("Carousel.createSlide", e.onCreateSlide),
            t.off("Carousel.removeSlide", e.onRemoveSlide),
            t.off("close", e.onClose);
        }
      }
      Object.defineProperty(ve, "defaults", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {
          initialSize: "fit",
          Panzoom: { maxScale: 1 },
          protected: !1,
          zoom: !0,
          zoomOpacity: "auto",
        },
      }),
        "function" == typeof SuppressedError && SuppressedError;
      const be = "html",
        ye = "image",
        we = "map",
        xe = "youtube",
        Se = "vimeo",
        Ce = "html5video",
        De = (e, t = {}) => {
          const i = new URL(e),
            s = new URLSearchParams(i.search),
            n = new URLSearchParams();
          for (const [e, i] of [...s, ...Object.entries(t)]) {
            let t = i.toString();
            "t" === e ? n.set("start", parseInt(t).toString()) : n.set(e, t);
          }
          let o = n.toString(),
            a = e.match(/#t=((.*)?\d+s)/);
          return a && (o += `#t=${a[1]}`), o;
        },
        Me = [
          "image",
          "html",
          "ajax",
          "inline",
          "clone",
          "iframe",
          "map",
          "pdf",
          "html5video",
          "youtube",
          "vimeo",
        ];
      class Ee extends K {
        onInitSlide(e, t, i) {
          this.processType(i);
        }
        onCreateSlide(e, t, i) {
          this.setContent(i);
        }
        onClearContent(e, t) {
          t.xhr && (t.xhr.abort(), (t.xhr = null));
          const i = t.iframeEl;
          i &&
            ((i.onload = i.onerror = null),
            (i.src = "//about:blank"),
            (t.iframeEl = null));
          const s = t.contentEl,
            n = t.placeholderEl;
          if ("inline" === t.type && s && n)
            s.classList.remove("fancybox__content"),
              "none" !== s.style.display && (s.style.display = "none"),
              n.parentNode && n.parentNode.insertBefore(s, n),
              n.remove(),
              (t.contentEl = void 0),
              (t.placeholderEl = void 0);
          else
            for (; t.el && t.el.firstChild; ) t.el.removeChild(t.el.firstChild);
        }
        onSelectSlide(e, t, i) {
          i.state === pe.Ready && this.playVideo();
        }
        onUnselectSlide(e, t, i) {
          var s, n;
          if (i.type === Ce) {
            try {
              null ===
                (n =
                  null === (s = i.el) || void 0 === s
                    ? void 0
                    : s.querySelector("video")) ||
                void 0 === n ||
                n.pause();
            } catch (e) {}
            return;
          }
          let o;
          i.type === Se
            ? (o = { method: "pause", value: "true" })
            : i.type === xe && (o = { event: "command", func: "pauseVideo" }),
            o &&
              i.iframeEl &&
              i.iframeEl.contentWindow &&
              i.iframeEl.contentWindow.postMessage(JSON.stringify(o), "*"),
            i.poller && clearTimeout(i.poller);
        }
        onDone(e, t) {
          e.isCurrentSlide(t) && !e.isClosing() && this.playVideo();
        }
        onRefresh(e, t) {
          t.slides.forEach((e) => {
            e.el && (this.resizeIframe(e), this.setAspectRatio(e));
          });
        }
        onMessage(e) {
          try {
            let t = JSON.parse(e.data);
            if ("https://player.vimeo.com" === e.origin) {
              if ("ready" === t.event)
                for (let t of Array.from(
                  document.getElementsByClassName("fancybox__iframe")
                ))
                  t instanceof HTMLIFrameElement &&
                    t.contentWindow === e.source &&
                    (t.dataset.ready = "true");
            } else if (
              e.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) &&
              "onReady" === t.event
            ) {
              const e = document.getElementById(t.id);
              e && (e.dataset.ready = "true");
            }
          } catch (e) {}
        }
        loadAjaxContent(e) {
          const t = this.instance.optionFor(e, "src") || "";
          this.instance.showLoading(e);
          const i = this.instance,
            s = new XMLHttpRequest();
          i.showLoading(e),
            (s.onreadystatechange = function () {
              s.readyState === XMLHttpRequest.DONE &&
                i.state === ue.Ready &&
                (i.hideLoading(e),
                200 === s.status
                  ? i.setContent(e, s.responseText)
                  : i.setError(
                      e,
                      404 === s.status
                        ? "{{AJAX_NOT_FOUND}}"
                        : "{{AJAX_FORBIDDEN}}"
                    ));
            });
          const n = e.ajax || null;
          s.open(n ? "POST" : "GET", t + ""),
            s.setRequestHeader(
              "Content-Type",
              "application/x-www-form-urlencoded"
            ),
            s.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
            s.send(n),
            (e.xhr = s);
        }
        setInlineContent(e) {
          let t = null;
          if (I(e.src)) t = e.src;
          else if ("string" == typeof e.src) {
            const i = e.src.split("#", 2).pop();
            t = i ? document.getElementById(i) : null;
          }
          if (t) {
            if ("clone" === e.type || t.closest(".fancybox__slide")) {
              t = t.cloneNode(!0);
              const i = t.dataset.animationName;
              i && (t.classList.remove(i), delete t.dataset.animationName);
              let s = t.getAttribute("id");
              (s = s ? `${s}--clone` : `clone-${this.instance.id}-${e.index}`),
                t.setAttribute("id", s);
            } else if (t.parentNode) {
              const i = document.createElement("div");
              i.classList.add("fancybox-placeholder"),
                t.parentNode.insertBefore(i, t),
                (e.placeholderEl = i);
            }
            this.instance.setContent(e, t);
          } else this.instance.setError(e, "{{ELEMENT_NOT_FOUND}}");
        }
        setIframeContent(e) {
          const { src: t, el: i } = e;
          if (!t || "string" != typeof t || !i) return;
          i.classList.add("is-loading");
          const s = this.instance,
            n = document.createElement("iframe");
          (n.className = "fancybox__iframe"),
            n.setAttribute("id", `fancybox__iframe_${s.id}_${e.index}`);
          for (const [t, i] of Object.entries(
            this.optionFor(e, "iframeAttr") || {}
          ))
            n.setAttribute(t, i);
          (n.onerror = () => {
            s.setError(e, "{{IFRAME_ERROR}}");
          }),
            (e.iframeEl = n);
          const o = this.optionFor(e, "preload");
          if ("iframe" !== e.type || !1 === o)
            return (
              n.setAttribute("src", e.src + ""),
              s.setContent(e, n, !1),
              this.resizeIframe(e),
              void s.revealContent(e)
            );
          s.showLoading(e),
            (n.onload = () => {
              if (!n.src.length) return;
              const t = "true" !== n.dataset.ready;
              (n.dataset.ready = "true"),
                this.resizeIframe(e),
                t ? s.revealContent(e) : s.hideLoading(e);
            }),
            n.setAttribute("src", t),
            s.setContent(e, n, !1);
        }
        resizeIframe(e) {
          const { type: t, iframeEl: i } = e;
          if (t === xe || t === Se) return;
          const s = null == i ? void 0 : i.parentElement;
          if (!i || !s) return;
          let n = !1 !== e.autoSize,
            o = e.width || 0,
            a = e.height || 0;
          o && a && (n = !1);
          const r = s && s.style;
          if (!1 !== e.preload && !1 !== n && r)
            try {
              const e = window.getComputedStyle(s),
                t = parseFloat(e.paddingLeft) + parseFloat(e.paddingRight),
                n = parseFloat(e.paddingTop) + parseFloat(e.paddingBottom),
                l = i.contentWindow;
              if (l) {
                const e = l.document,
                  i = e.getElementsByTagName(be)[0],
                  s = e.body;
                (r.width = ""),
                  (s.style.overflow = "hidden"),
                  (o = o || i.scrollWidth + t),
                  (r.width = `${o}px`),
                  (s.style.overflow = ""),
                  (r.flex = "0 0 auto"),
                  (r.height = `${s.scrollHeight}px`),
                  (a = i.scrollHeight + n);
              }
            } catch (e) {}
          if (o || a) {
            const e = { flex: "0 1 auto", width: "", height: "" };
            o && "auto" !== o && (e.width = `${o}px`),
              a && "auto" !== a && (e.height = `${a}px`),
              Object.assign(r, e);
          }
        }
        playVideo() {
          const e = this.instance.getSlide();
          if (!e) return;
          const { el: t } = e;
          if (!t || !t.offsetParent) return;
          if (!this.optionFor(e, "videoAutoplay")) return;
          if (e.type === Ce)
            try {
              const e = t.querySelector("video");
              if (e) {
                const t = e.play();
                void 0 !== t &&
                  t
                    .then(() => {})
                    .catch((t) => {
                      (e.muted = !0), e.play();
                    });
              }
            } catch (e) {}
          if (e.type !== xe && e.type !== Se) return;
          const i = () => {
            if (e.iframeEl && e.iframeEl.contentWindow) {
              let t;
              if ("true" === e.iframeEl.dataset.ready)
                return (
                  (t =
                    e.type === xe
                      ? { event: "command", func: "playVideo" }
                      : { method: "play", value: "true" }),
                  t &&
                    e.iframeEl.contentWindow.postMessage(
                      JSON.stringify(t),
                      "*"
                    ),
                  void (e.poller = void 0)
                );
              e.type === xe &&
                ((t = {
                  event: "listening",
                  id: e.iframeEl.getAttribute("id"),
                }),
                e.iframeEl.contentWindow.postMessage(JSON.stringify(t), "*"));
            }
            e.poller = setTimeout(i, 250);
          };
          i();
        }
        processType(e) {
          if (e.html)
            return (e.type = be), (e.src = e.html), void (e.html = "");
          const t = this.instance.optionFor(e, "src", "");
          if (!t || "string" != typeof t) return;
          let i = e.type,
            s = null;
          if (
            (s = t.match(
              /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i
            ))
          ) {
            const n = this.optionFor(e, xe),
              { nocookie: o } = n,
              a = (function (e, t) {
                var i = {};
                for (var s in e)
                  Object.prototype.hasOwnProperty.call(e, s) &&
                    t.indexOf(s) < 0 &&
                    (i[s] = e[s]);
                if (
                  null != e &&
                  "function" == typeof Object.getOwnPropertySymbols
                ) {
                  var n = 0;
                  for (s = Object.getOwnPropertySymbols(e); n < s.length; n++)
                    t.indexOf(s[n]) < 0 &&
                      Object.prototype.propertyIsEnumerable.call(e, s[n]) &&
                      (i[s[n]] = e[s[n]]);
                }
                return i;
              })(n, ["nocookie"]),
              r = `www.youtube${o ? "-nocookie" : ""}.com`,
              l = De(t, a),
              c = encodeURIComponent(s[2]);
            (e.videoId = c),
              (e.src = `https://${r}/embed/${c}?${l}`),
              (e.thumbSrc =
                e.thumbSrc || `https://i.ytimg.com/vi/${c}/mqdefault.jpg`),
              (i = xe);
          } else if (
            (s = t.match(
              /^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/
            ))
          ) {
            const n = De(t, this.optionFor(e, Se)),
              o = encodeURIComponent(s[1]),
              a = s[4] || "";
            (e.videoId = o),
              (e.src = `https://player.vimeo.com/video/${o}?${
                a ? `h=${a}${n ? "&" : ""}` : ""
              }${n}`),
              (i = Se);
          }
          if (!i && e.triggerEl) {
            const t = e.triggerEl.dataset.type;
            Me.includes(t) && (i = t);
          }
          i ||
            ("string" == typeof t &&
              ("#" === t.charAt(0)
                ? (i = "inline")
                : (s = t.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
                ? ((i = Ce),
                  (e.videoFormat =
                    e.videoFormat ||
                    "video/" + ("ogv" === s[1] ? "ogg" : s[1])))
                : t.match(
                    /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
                  )
                ? (i = ye)
                : t.match(/\.(pdf)((\?|#).*)?$/i)
                ? (i = "pdf")
                : (s = t.match(
                    /(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i
                  ))
                ? ((e.src = `https://maps.google.${s[1]}/?ll=${(s[2]
                    ? s[2] +
                      "&z=" +
                      Math.floor(parseFloat(s[3])) +
                      (s[4] ? s[4].replace(/^\//, "&") : "")
                    : s[4] + ""
                  ).replace(/\?/, "&")}&output=${
                    s[4] && s[4].indexOf("layer=c") > 0 ? "svembed" : "embed"
                  }`),
                  (i = we))
                : (s = t.match(
                    /(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i
                  )) &&
                  ((e.src = `https://maps.google.${s[1]}/maps?q=${s[2]
                    .replace("query=", "q=")
                    .replace("api=1", "")}&output=embed`),
                  (i = we)))),
            (i = i || this.instance.option("defaultType")),
            (e.type = i),
            i === ye && (e.thumbSrc = e.thumbSrc || e.src);
        }
        setContent(e) {
          const t = this.instance.optionFor(e, "src") || "";
          if (e && e.type && t) {
            switch (e.type) {
              case be:
                this.instance.setContent(e, t);
                break;
              case Ce:
                const i = this.option("videoTpl");
                i &&
                  this.instance.setContent(
                    e,
                    i
                      .replace(/\{\{src\}\}/gi, t + "")
                      .replace(
                        /\{\{format\}\}/gi,
                        this.optionFor(e, "videoFormat") || ""
                      )
                      .replace(/\{\{poster\}\}/gi, e.poster || e.thumbSrc || "")
                  );
                break;
              case "inline":
              case "clone":
                this.setInlineContent(e);
                break;
              case "ajax":
                this.loadAjaxContent(e);
                break;
              case "pdf":
              case we:
              case xe:
              case Se:
                e.preload = !1;
              case "iframe":
                this.setIframeContent(e);
            }
            this.setAspectRatio(e);
          }
        }
        setAspectRatio(e) {
          const t = e.contentEl;
          if (!(e.el && t && e.type && [xe, Se, Ce].includes(e.type))) return;
          let i,
            s = e.width || "auto",
            n = e.height || "auto";
          if ("auto" === s || "auto" === n) {
            i = this.optionFor(e, "videoRatio");
            const t = (i + "").match(/(\d+)\s*\/\s?(\d+)/);
            i =
              t && t.length > 2
                ? parseFloat(t[1]) / parseFloat(t[2])
                : parseFloat(i + "");
          } else s && n && (i = s / n);
          if (!i) return;
          (t.style.aspectRatio = ""),
            (t.style.width = ""),
            (t.style.height = ""),
            t.offsetHeight;
          const o = t.getBoundingClientRect(),
            a = o.width || 1,
            r = o.height || 1;
          (t.style.aspectRatio = i + ""),
            i < a / r
              ? ((n = "auto" === n ? r : Math.min(r, n)),
                (t.style.width = "auto"),
                (t.style.height = `${n}px`))
              : ((s = "auto" === s ? a : Math.min(a, s)),
                (t.style.width = `${s}px`),
                (t.style.height = "auto"));
        }
        attach() {
          const e = this,
            t = e.instance;
          t.on("Carousel.initSlide", e.onInitSlide),
            t.on("Carousel.createSlide", e.onCreateSlide),
            t.on("Carousel.selectSlide", e.onSelectSlide),
            t.on("Carousel.unselectSlide", e.onUnselectSlide),
            t.on("Carousel.Panzoom.refresh", e.onRefresh),
            t.on("done", e.onDone),
            t.on("clearContent", e.onClearContent),
            window.addEventListener("message", e.onMessage);
        }
        detach() {
          const e = this,
            t = e.instance;
          t.off("Carousel.initSlide", e.onInitSlide),
            t.off("Carousel.createSlide", e.onCreateSlide),
            t.off("Carousel.selectSlide", e.onSelectSlide),
            t.off("Carousel.unselectSlide", e.onUnselectSlide),
            t.off("Carousel.Panzoom.refresh", e.onRefresh),
            t.off("done", e.onDone),
            t.off("clearContent", e.onClearContent),
            window.removeEventListener("message", e.onMessage);
        }
      }
      Object.defineProperty(Ee, "defaults", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {
          ajax: null,
          autoSize: !0,
          iframeAttr: { allow: "autoplay; fullscreen", scrolling: "auto" },
          preload: !0,
          videoAutoplay: !0,
          videoRatio: 16 / 9,
          videoTpl:
            '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
          videoFormat: "",
          vimeo: { byline: 1, color: "00adef", controls: 1, dnt: 1, muted: 0 },
          youtube: { controls: 1, enablejsapi: 1, nocookie: 1, rel: 0, fs: 1 },
        },
      });
      const Te = "play",
        Pe = "pause",
        Oe = "ready";
      class ke extends K {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "state", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: Oe,
            }),
            Object.defineProperty(this, "inHover", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "timer", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            }),
            Object.defineProperty(this, "progressBar", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            });
        }
        get isActive() {
          return this.state !== Oe;
        }
        onReady(e) {
          this.option("autoStart") &&
            (e.isInfinite || e.page < e.pages.length - 1) &&
            this.start();
        }
        onChange() {
          var e;
          (null === (e = this.instance.panzoom) || void 0 === e
            ? void 0
            : e.isResting) || (this.removeProgressBar(), this.pause());
        }
        onSettle() {
          this.resume();
        }
        onVisibilityChange() {
          "visible" === document.visibilityState ? this.resume() : this.pause();
        }
        onMouseEnter() {
          (this.inHover = !0), this.pause();
        }
        onMouseLeave() {
          var e;
          (this.inHover = !1),
            (null === (e = this.instance.panzoom) || void 0 === e
              ? void 0
              : e.isResting) && this.resume();
        }
        onTimerEnd() {
          const e = this.instance;
          "play" === this.state &&
            (e.isInfinite || e.page !== e.pages.length - 1
              ? e.slideNext()
              : e.slideTo(0));
        }
        removeProgressBar() {
          this.progressBar &&
            (this.progressBar.remove(), (this.progressBar = null));
        }
        createProgressBar() {
          var e;
          if (!this.option("showProgress")) return null;
          this.removeProgressBar();
          const t = this.instance,
            i =
              (null === (e = t.pages[t.page]) || void 0 === e
                ? void 0
                : e.slides) || [];
          let s = this.option("progressParentEl");
          if ((s || (s = (1 === i.length ? i[0].el : null) || t.viewport), !s))
            return null;
          const n = document.createElement("div");
          return (
            $(n, "f-progress"),
            s.prepend(n),
            (this.progressBar = n),
            n.offsetHeight,
            n
          );
        }
        set() {
          const e = this,
            t = e.instance;
          if (t.pages.length < 2) return;
          if (e.timer) return;
          const i = e.option("timeout");
          (e.state = Te), $(t.container, "has-autoplay");
          let s = e.createProgressBar();
          s &&
            ((s.style.transitionDuration = `${i}ms`),
            (s.style.transform = "scaleX(1)")),
            (e.timer = setTimeout(() => {
              (e.timer = null), e.inHover || e.onTimerEnd();
            }, i)),
            e.emit("set");
        }
        clear() {
          const e = this;
          e.timer && (clearTimeout(e.timer), (e.timer = null)),
            e.removeProgressBar();
        }
        start() {
          const e = this;
          if ((e.set(), e.state !== Oe)) {
            if (e.option("pauseOnHover")) {
              const t = e.instance.container;
              t.addEventListener("mouseenter", e.onMouseEnter, !1),
                t.addEventListener("mouseleave", e.onMouseLeave, !1);
            }
            document.addEventListener(
              "visibilitychange",
              e.onVisibilityChange,
              !1
            ),
              e.emit("start");
          }
        }
        stop() {
          const e = this,
            t = e.state,
            i = e.instance.container;
          e.clear(),
            (e.state = Oe),
            i.removeEventListener("mouseenter", e.onMouseEnter, !1),
            i.removeEventListener("mouseleave", e.onMouseLeave, !1),
            document.removeEventListener(
              "visibilitychange",
              e.onVisibilityChange,
              !1
            ),
            R(i, "has-autoplay"),
            t !== Oe && e.emit("stop");
        }
        pause() {
          const e = this;
          e.state === Te && ((e.state = Pe), e.clear(), e.emit(Pe));
        }
        resume() {
          const e = this,
            t = e.instance;
          if (t.isInfinite || t.page !== t.pages.length - 1)
            if (e.state !== Te) {
              if (e.state === Pe && !e.inHover) {
                const t = new Event("resume", { bubbles: !0, cancelable: !0 });
                e.emit("resume", t), t.defaultPrevented || e.set();
              }
            } else e.set();
          else e.stop();
        }
        toggle() {
          this.state === Te || this.state === Pe ? this.stop() : this.start();
        }
        attach() {
          const e = this,
            t = e.instance;
          t.on("ready", e.onReady),
            t.on("Panzoom.startAnimation", e.onChange),
            t.on("Panzoom.endAnimation", e.onSettle),
            t.on("Panzoom.touchMove", e.onChange);
        }
        detach() {
          const e = this,
            t = e.instance;
          t.off("ready", e.onReady),
            t.off("Panzoom.startAnimation", e.onChange),
            t.off("Panzoom.endAnimation", e.onSettle),
            t.off("Panzoom.touchMove", e.onChange),
            e.stop();
        }
      }
      Object.defineProperty(ke, "defaults", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {
          autoStart: !0,
          pauseOnHover: !0,
          progressParentEl: null,
          showProgress: !0,
          timeout: 3e3,
        },
      });
      class Le extends K {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "ref", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            });
        }
        onPrepare(e) {
          const t = e.carousel;
          if (!t) return;
          const i = e.container;
          i &&
            ((t.options.Autoplay = E(
              { autoStart: !1 },
              this.option("Autoplay") || {},
              {
                pauseOnHover: !1,
                timeout: this.option("timeout"),
                progressParentEl: () => this.option("progressParentEl") || null,
                on: {
                  start: () => {
                    e.emit("startSlideshow");
                  },
                  set: (t) => {
                    var s;
                    i.classList.add("has-slideshow"),
                      (null === (s = e.getSlide()) || void 0 === s
                        ? void 0
                        : s.state) !== pe.Ready && t.pause();
                  },
                  stop: () => {
                    i.classList.remove("has-slideshow"),
                      e.isCompact || e.endIdle(),
                      e.emit("endSlideshow");
                  },
                  resume: (t, i) => {
                    var s, n, o;
                    !i ||
                      !i.cancelable ||
                      ((null === (s = e.getSlide()) || void 0 === s
                        ? void 0
                        : s.state) === pe.Ready &&
                        (null ===
                          (o =
                            null === (n = e.carousel) || void 0 === n
                              ? void 0
                              : n.panzoom) || void 0 === o
                          ? void 0
                          : o.isResting)) ||
                      i.preventDefault();
                  },
                },
              }
            )),
            t.attachPlugins({ Autoplay: ke }),
            (this.ref = t.plugins.Autoplay));
        }
        onReady(e) {
          const t = e.carousel,
            i = this.ref;
          i &&
            t &&
            this.option("playOnStart") &&
            (t.isInfinite || t.page < t.pages.length - 1) &&
            i.start();
        }
        onDone(e, t) {
          const i = this.ref,
            s = e.carousel;
          if (!i || !s) return;
          const n = t.panzoom;
          n &&
            n.on("startAnimation", () => {
              e.isCurrentSlide(t) && i.stop();
            }),
            e.isCurrentSlide(t) && i.resume();
        }
        onKeydown(e, t) {
          var i;
          const s = this.ref;
          s &&
            t === this.option("key") &&
            "BUTTON" !==
              (null === (i = document.activeElement) || void 0 === i
                ? void 0
                : i.nodeName) &&
            s.toggle();
        }
        attach() {
          const e = this,
            t = e.instance;
          t.on("Carousel.init", e.onPrepare),
            t.on("Carousel.ready", e.onReady),
            t.on("done", e.onDone),
            t.on("keydown", e.onKeydown);
        }
        detach() {
          const e = this,
            t = e.instance;
          t.off("Carousel.init", e.onPrepare),
            t.off("Carousel.ready", e.onReady),
            t.off("done", e.onDone),
            t.off("keydown", e.onKeydown);
        }
      }
      Object.defineProperty(Le, "defaults", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {
          key: " ",
          playOnStart: !1,
          progressParentEl: (e) => {
            var t;
            return (
              (null === (t = e.instance.container) || void 0 === t
                ? void 0
                : t.querySelector(
                    ".fancybox__toolbar [data-fancybox-toggle-slideshow]"
                  )) || e.instance.container
            );
          },
          timeout: 3e3,
        },
      });
      const Ae = {
        classes: {
          container: "f-thumbs f-carousel__thumbs",
          viewport: "f-thumbs__viewport",
          track: "f-thumbs__track",
          slide: "f-thumbs__slide",
          isResting: "is-resting",
          isSelected: "is-selected",
          isLoading: "is-loading",
          hasThumbs: "has-thumbs",
        },
        minCount: 2,
        parentEl: null,
        thumbTpl:
          '<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>',
        type: "modern",
      };
      var _e;
      !(function (e) {
        (e[(e.Init = 0)] = "Init"),
          (e[(e.Ready = 1)] = "Ready"),
          (e[(e.Hidden = 2)] = "Hidden");
      })(_e || (_e = {}));
      let Fe = class extends K {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "type", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "modern",
            }),
            Object.defineProperty(this, "container", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            }),
            Object.defineProperty(this, "track", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            }),
            Object.defineProperty(this, "carousel", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            }),
            Object.defineProperty(this, "panzoom", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            }),
            Object.defineProperty(this, "thumbWidth", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            Object.defineProperty(this, "thumbClipWidth", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            Object.defineProperty(this, "thumbHeight", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            Object.defineProperty(this, "thumbGap", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            Object.defineProperty(this, "thumbExtraGap", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            Object.defineProperty(this, "shouldCenter", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !0,
            }),
            Object.defineProperty(this, "state", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: _e.Init,
            });
        }
        formatThumb(e, t) {
          return this.instance.localize(t, [
            ["%i", e.index],
            ["%d", e.index + 1],
            [
              "%s",
              e.thumbSrc ||
                "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            ],
          ]);
        }
        getSlides() {
          const e = [],
            t = this.option("thumbTpl") || "";
          if (t)
            for (const i of this.instance.slides || []) {
              let s = "";
              i.type &&
                ((s = `for-${i.type}`),
                i.type &&
                  ["video", "youtube", "vimeo", "html5video"].includes(
                    i.type
                  ) &&
                  (s += " for-video")),
                e.push({ html: this.formatThumb(i, t), customClass: s });
            }
          return e;
        }
        onInitSlide(e, t) {
          const i = t.el;
          i &&
            ((t.thumbSrc = i.dataset.thumbSrc || t.thumbSrc || ""),
            (t.thumbClipWidth =
              parseFloat(i.dataset.thumbClipWidth || "") ||
              t.thumbClipWidth ||
              0),
            (t.thumbHeight =
              parseFloat(i.dataset.thumbHeight || "") || t.thumbHeight || 0));
        }
        onInitSlides() {
          this.build();
        }
        onRefreshM() {
          this.refreshModern();
        }
        onChangeM() {
          "modern" === this.type &&
            ((this.shouldCenter = !0), this.centerModern());
        }
        onClickModern(e) {
          e.preventDefault(), e.stopPropagation();
          const t = this.instance,
            i = t.page,
            s = (e) => {
              if (e) {
                const t = e.closest("[data-carousel-index]");
                if (t) return parseInt(t.dataset.carouselIndex || "", 10) || 0;
              }
              return -1;
            },
            n = (e, t) => {
              const i = document.elementFromPoint(e, t);
              return i ? s(i) : -1;
            };
          let o = s(e.target);
          o < 0 &&
            ((o = n(e.clientX + this.thumbGap, e.clientY)),
            o === i && (o = i - 1)),
            o < 0 &&
              ((o = n(e.clientX - this.thumbGap, e.clientY)),
              o === i && (o = i + 1)),
            o < 0 &&
              (o = ((t) => {
                let s = n(e.clientX - t, e.clientY),
                  a = n(e.clientX + t, e.clientY);
                return (
                  o < 0 && s === i && (o = i + 1),
                  o < 0 && a === i && (o = i - 1),
                  o
                );
              })(this.thumbExtraGap)),
            o === i
              ? this.centerModern()
              : o > -1 && o < t.pages.length && t.slideTo(o);
        }
        onTransformM() {
          if ("modern" !== this.type) return;
          const { instance: e, container: t, track: i } = this,
            s = e.panzoom;
          if (!(t && i && s && this.panzoom)) return;
          y(t, this.cn("isResting"), s.state !== k.Init && s.isResting);
          const n = this.thumbGap,
            o = this.thumbExtraGap,
            a = this.thumbClipWidth;
          let r = 0,
            l = 0,
            c = 0;
          for (const t of e.slides) {
            let i = t.index,
              s = t.thumbSlideEl;
            if (!s) continue;
            y(s, this.cn("isSelected"), i === e.page),
              (l = 1 - Math.abs(e.getProgress(i))),
              s.style.setProperty("--progress", l ? l + "" : "");
            const h = 0.5 * ((t.thumbWidth || 0) - a);
            (r += n),
              (r += h),
              l && (r -= l * (h + o)),
              s.style.setProperty("--shift", r - n + ""),
              (r += h),
              l && (r -= l * (h + o)),
              (r -= n),
              0 === i && (c = o * l);
          }
          i &&
            (i.style.setProperty("--left", c + ""),
            i.style.setProperty("--width", r + c + n + o * l + "")),
            this.shouldCenter && this.centerModern();
        }
        buildClassic() {
          const { container: e, track: t } = this,
            i = this.getSlides();
          if (!e || !t || !i) return;
          const s = new this.instance.constructor(
            e,
            E(
              {
                track: t,
                infinite: !1,
                center: !0,
                fill: !0,
                dragFree: !0,
                slidesPerPage: 1,
                transition: !1,
                Dots: !1,
                Navigation: !1,
                classes: {
                  container: "f-thumbs",
                  viewport: "f-thumbs__viewport",
                  track: "f-thumbs__track",
                  slide: "f-thumbs__slide",
                },
              },
              this.option("Carousel") || {},
              { Sync: { target: this.instance }, slides: i }
            )
          );
          (this.carousel = s),
            (this.track = t),
            s.on("ready", () => {
              this.emit("ready");
            }),
            s.on("createSlide", (e, t) => {
              this.emit("createSlide", t, t.el);
            });
        }
        buildModern() {
          if ("modern" !== this.type) return;
          const { container: e, track: t, instance: i } = this,
            s = this.option("thumbTpl") || "";
          if (!e || !t || !s) return;
          e.addEventListener("keydown", () => {
            R(e, "is-using-mouse");
          }),
            $(e, "is-horizontal"),
            this.updateModern();
          for (const e of i.slides || []) {
            const i = document.createElement("div");
            if (($(i, this.cn("slide")), e.type)) {
              let t = `for-${e.type}`;
              ["video", "youtube", "vimeo", "html5video"].includes(e.type) &&
                (t += " for-video"),
                $(i, t);
            }
            i.appendChild(v(this.formatThumb(e, s))),
              this.emit("createSlide", e, i),
              (e.thumbSlideEl = i),
              t.appendChild(i),
              this.resizeModernSlide(e);
          }
          const n = new i.constructor.Panzoom(e, {
            content: t,
            lockAxis: "x",
            zoom: !1,
            panOnlyZoomed: !1,
            bounds: () => {
              let e = 0,
                t = 0,
                s = i.slides[0],
                n = i.slides[i.slides.length - 1],
                o = i.slides[i.page];
              return (
                s &&
                  n &&
                  o &&
                  ((t = -1 * this.getModernThumbPos(0)),
                  0 !== i.page && (t += 0.5 * (s.thumbWidth || 0)),
                  (e = -1 * this.getModernThumbPos(i.slides.length - 1)),
                  i.page !== i.slides.length - 1 &&
                    (e +=
                      (n.thumbWidth || 0) -
                      (o.thumbWidth || 0) -
                      0.5 * (n.thumbWidth || 0))),
                { x: { min: e, max: t }, y: { min: 0, max: 0 } }
              );
            },
          });
          n.on("touchStart", (e, t) => {
            (this.shouldCenter = !1), $(this.container, "is-using-mouse");
          }),
            n.on("click", (e, t) => this.onClickModern(t)),
            n.on("ready", () => {
              this.centerModern(), this.emit("ready");
            }),
            n.on(["afterTransform", "refresh"], (e) => {
              this.lazyLoadModern();
            }),
            (this.panzoom = n),
            this.refreshModern();
        }
        updateModern() {
          if ("modern" !== this.type) return;
          const { container: e } = this;
          e &&
            ((this.thumbGap =
              parseFloat(
                getComputedStyle(e).getPropertyValue("--f-thumb-gap")
              ) || 0),
            (this.thumbExtraGap =
              parseFloat(
                getComputedStyle(e).getPropertyValue("--f-thumb-extra-gap")
              ) || 0),
            (this.thumbWidth =
              parseFloat(
                getComputedStyle(e).getPropertyValue("--f-thumb-width")
              ) || 40),
            (this.thumbClipWidth =
              parseFloat(
                getComputedStyle(e).getPropertyValue("--f-thumb-clip-width")
              ) || 40),
            (this.thumbHeight =
              parseFloat(
                getComputedStyle(e).getPropertyValue("--f-thumb-height")
              ) || 40));
        }
        refreshModern() {
          var e;
          if ("modern" === this.type) {
            this.updateModern();
            for (const e of this.instance.slides || [])
              this.resizeModernSlide(e);
            this.onTransformM(),
              null === (e = this.panzoom) ||
                void 0 === e ||
                e.updateMetrics(!0),
              this.centerModern(0);
          }
        }
        centerModern(e) {
          const t = this.instance,
            { container: i, panzoom: s } = this;
          if (!i || !s || s.state === k.Init) return;
          const n = t.page;
          let o = this.getModernThumbPos(n),
            a = o;
          for (let e = t.page - 3; e < t.page + 3; e++) {
            if (e < 0 || e > t.pages.length - 1 || e === t.page) continue;
            const i = 1 - Math.abs(t.getProgress(e));
            i > 0 && i < 1 && (a += i * (this.getModernThumbPos(e) - o));
          }
          let r = 100;
          void 0 === e &&
            ((e = 0.2),
            t.inTransition.size > 0 && (e = 0.12),
            Math.abs(-1 * s.current.e - a) > s.containerRect.width &&
              ((e = 0.5), (r = 0))),
            (s.options.maxVelocity = r),
            s.applyChange({
              panX: m(-1 * a - s.target.e, 1e3),
              friction: null === t.prevPage ? 0 : e,
            });
        }
        lazyLoadModern() {
          const { instance: e, panzoom: t } = this;
          if (!t) return;
          const i = -1 * t.current.e || 0;
          let s = this.getModernThumbPos(e.page);
          if (t.state !== k.Init || 0 === s)
            for (const s of e.slides || []) {
              const e = s.thumbSlideEl;
              if (!e) continue;
              const n = e.querySelector("img[data-lazy-src]"),
                o = s.index,
                a = this.getModernThumbPos(o),
                r = i - 0.5 * t.containerRect.innerWidth,
                l = r + t.containerRect.innerWidth;
              if (!n || a < r || a > l) continue;
              let c = n.dataset.lazySrc;
              if (!c || !c.length) continue;
              if ((delete n.dataset.lazySrc, (n.src = c), n.complete)) continue;
              $(e, this.cn("isLoading"));
              const h = v(F);
              e.appendChild(h),
                n.addEventListener(
                  "load",
                  () => {
                    e.offsetParent &&
                      (e.classList.remove(this.cn("isLoading")), h.remove());
                  },
                  !1
                );
            }
        }
        resizeModernSlide(e) {
          if ("modern" !== this.type) return;
          if (!e.thumbSlideEl) return;
          const t =
            e.thumbClipWidth && e.thumbHeight
              ? Math.round(
                  this.thumbHeight * (e.thumbClipWidth / e.thumbHeight)
                )
              : this.thumbWidth;
          e.thumbWidth = t;
        }
        getModernThumbPos(e) {
          const t = this.instance.slides[e],
            i = this.panzoom;
          if (!i || !i.contentRect.fitWidth) return 0;
          let s = i.containerRect.innerWidth,
            n = i.contentRect.width;
          2 === this.instance.slides.length &&
            ((e -= 1), (n = 2 * this.thumbClipWidth));
          let o =
            e * (this.thumbClipWidth + this.thumbGap) +
            this.thumbExtraGap +
            0.5 * (t.thumbWidth || 0);
          return (o -= n > s ? 0.5 * s : 0.5 * n), m(o || 0, 1);
        }
        isDisabled() {
          const e = this.option("minCount") || 0;
          if (e) {
            const t = this.instance;
            let i = 0;
            for (const e of t.slides || []) e.thumbSrc && i++;
            if (i < e) return !0;
          }
          const t = this.option("type");
          return ["modern", "classic"].indexOf(t) < 0;
        }
        build() {
          if (this.state !== _e.Init) return;
          if (this.isDisabled()) return;
          const e = this.instance.container,
            t = this.option("type");
          this.type = t;
          const i = document.createElement("div");
          $(i, this.cn("container")), $(i, `is-${t}`);
          const s = this.option("parentEl");
          s ? s.appendChild(i) : e.after(i),
            (this.container = i),
            $(e, this.cn("hasThumbs"));
          const n = document.createElement("div");
          $(n, this.cn("track")),
            i.appendChild(n),
            (this.track = n),
            "classic" === t ? this.buildClassic() : this.buildModern(),
            (this.state = _e.Ready);
        }
        cleanup() {
          this.carousel && this.carousel.destroy(),
            (this.carousel = null),
            this.panzoom && this.panzoom.destroy(),
            (this.panzoom = null),
            this.container && this.container.remove(),
            (this.container = null),
            (this.track = null),
            (this.state = _e.Init),
            R(this.instance.container, this.cn("hasThumbs"));
        }
        attach() {
          const e = this,
            t = e.instance;
          t.on("initSlide", e.onInitSlide),
            t.state === U.Init
              ? t.on("initSlides", e.onInitSlides)
              : e.onInitSlides(),
            t.on("Panzoom.afterTransform", e.onTransformM),
            t.on("Panzoom.refresh", e.onRefreshM),
            t.on("change", e.onChangeM);
        }
        detach() {
          const e = this,
            t = e.instance;
          t.off("initSlide", e.onInitSlide),
            t.off("initSlides", e.onInitSlides),
            t.off("Panzoom.afterTransform", e.onTransformM),
            t.off("Panzoom.refresh", e.onRefreshM),
            t.off("change", e.onChangeM),
            e.cleanup();
        }
      };
      Object.defineProperty(Fe, "defaults", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Ae,
      });
      const Ie = Object.assign(Object.assign({}, Ae), {
          key: "t",
          showOnStart: !0,
          parentEl: null,
        }),
        Re = "is-masked",
        $e = "aria-hidden";
      class ze extends K {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "ref", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            }),
            Object.defineProperty(this, "hidden", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            });
        }
        get isEnabled() {
          const e = this.ref;
          return e && !e.isDisabled();
        }
        get isHidden() {
          return this.hidden;
        }
        onInit() {
          var e;
          const t = this,
            i = t.instance,
            s = i.carousel;
          if (t.ref || !s) return;
          const n = t.option("parentEl") || i.footer || i.container;
          if (!n) return;
          const o = E({}, t.options, {
            parentEl: n,
            classes: { container: "f-thumbs fancybox__thumbs" },
            Carousel: {
              Sync: { friction: i.option("Carousel.friction") || 0 },
            },
            on: {
              ready: (e) => {
                const i = e.container;
                i &&
                  this.hidden &&
                  (t.refresh(),
                  (i.style.transition = "none"),
                  t.hide(),
                  i.offsetHeight,
                  queueMicrotask(() => {
                    (i.style.transition = ""), t.show();
                  }));
              },
            },
          });
          (o.Carousel = o.Carousel || {}),
            (o.Carousel.on = E(
              (null === (e = t.options.Carousel) || void 0 === e
                ? void 0
                : e.on) || {},
              {
                click: (e, t) => {
                  t.stopPropagation();
                },
              }
            )),
            (s.options.Thumbs = o),
            s.attachPlugins({ Thumbs: Fe }),
            (t.ref = s.plugins.Thumbs),
            t.option("showOnStart") ||
              ((t.ref.state = _e.Hidden), (t.hidden = !0));
        }
        onResize() {
          var e;
          const t =
            null === (e = this.ref) || void 0 === e ? void 0 : e.container;
          t && (t.style.maxHeight = "");
        }
        onKeydown(e, t) {
          const i = this.option("key");
          i && i === t && this.toggle();
        }
        toggle() {
          const e = this.ref;
          if (e && !e.isDisabled())
            return e.state === _e.Hidden
              ? ((e.state = _e.Init), void e.build())
              : void (this.hidden ? this.show() : this.hide());
        }
        show() {
          const e = this.ref;
          if (!e || e.isDisabled()) return;
          const t = e.container;
          t &&
            (this.refresh(),
            t.offsetHeight,
            t.removeAttribute($e),
            t.classList.remove(Re),
            (this.hidden = !1));
        }
        hide() {
          const e = this.ref,
            t = e && e.container;
          t &&
            (this.refresh(),
            t.offsetHeight,
            t.classList.add(Re),
            t.setAttribute($e, "true")),
            (this.hidden = !0);
        }
        refresh() {
          const e = this.ref;
          if (!e || !e.state) return;
          const t = e.container,
            i = (null == t ? void 0 : t.firstChild) || null;
          t &&
            i &&
            i.childNodes.length &&
            (t.style.maxHeight = `${i.getBoundingClientRect().height}px`);
        }
        attach() {
          const e = this,
            t = e.instance;
          t.state === ue.Init ? t.on("Carousel.init", e.onInit) : e.onInit(),
            t.on("resize", e.onResize),
            t.on("keydown", e.onKeydown);
        }
        detach() {
          var e;
          const t = this,
            i = t.instance;
          i.off("Carousel.init", t.onInit),
            i.off("resize", t.onResize),
            i.off("keydown", t.onKeydown),
            null === (e = i.carousel) ||
              void 0 === e ||
              e.detachPlugins(["Thumbs"]),
            (t.ref = null);
        }
      }
      Object.defineProperty(ze, "defaults", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Ie,
      });
      const He = {
        panLeft: {
          icon: '<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>',
          change: { panX: -100 },
        },
        panRight: {
          icon: '<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>',
          change: { panX: 100 },
        },
        panUp: {
          icon: '<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>',
          change: { panY: -100 },
        },
        panDown: {
          icon: '<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>',
          change: { panY: 100 },
        },
        zoomIn: {
          icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>',
          action: "zoomIn",
        },
        zoomOut: {
          icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
          action: "zoomOut",
        },
        toggle1to1: {
          icon: '<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>',
          action: "toggleZoom",
        },
        toggleZoom: {
          icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
          action: "toggleZoom",
        },
        iterateZoom: {
          icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
          action: "iterateZoom",
        },
        rotateCCW: {
          icon: '<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>',
          action: "rotateCCW",
        },
        rotateCW: {
          icon: '<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>',
          action: "rotateCW",
        },
        flipX: {
          icon: '<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>',
          action: "flipX",
        },
        flipY: {
          icon: '<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>',
          action: "flipY",
        },
        fitX: {
          icon: '<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>',
          action: "fitX",
        },
        fitY: {
          icon: '<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>',
          action: "fitY",
        },
        reset: {
          icon: '<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',
          action: "reset",
        },
        toggleFS: {
          icon: '<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>',
          action: "toggleFS",
        },
      };
      var je;
      !(function (e) {
        (e[(e.Init = 0)] = "Init"),
          (e[(e.Ready = 1)] = "Ready"),
          (e[(e.Disabled = 2)] = "Disabled");
      })(je || (je = {}));
      const Ne = {
        tabindex: "-1",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
      };
      class Be extends K {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "state", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: je.Init,
            }),
            Object.defineProperty(this, "container", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            });
        }
        onReady(e) {
          var t;
          if (!e.carousel) return;
          let i = this.option("display"),
            s = this.option("absolute"),
            n = this.option("enabled");
          if ("auto" === n) {
            const e = this.instance.carousel;
            let t = 0;
            if (e)
              for (const i of e.slides)
                (i.panzoom || "image" === i.type) && t++;
            t || (n = !1);
          }
          n || (i = void 0);
          let o = 0;
          const a = { left: [], middle: [], right: [] };
          if (i)
            for (const e of ["left", "middle", "right"])
              for (const s of i[e]) {
                const i = this.createEl(s);
                i && (null === (t = a[e]) || void 0 === t || t.push(i), o++);
              }
          let r = null;
          if ((o && (r = this.createContainer()), r)) {
            for (const [e, t] of Object.entries(a)) {
              const i = document.createElement("div");
              $(i, "fancybox__toolbar__column is-" + e);
              for (const e of t) i.appendChild(e);
              "auto" !== s || "middle" !== e || t.length || (s = !0),
                r.appendChild(i);
            }
            !0 === s && $(r, "is-absolute"),
              (this.state = je.Ready),
              this.onRefresh();
          } else this.state = je.Disabled;
        }
        onClick(e) {
          var t, i;
          const s = this.instance,
            n = s.getSlide(),
            o = null == n ? void 0 : n.panzoom,
            a = e.target,
            r = a && I(a) ? a.dataset : null;
          if (!r) return;
          if (void 0 !== r.fancyboxToggleThumbs)
            return (
              e.preventDefault(),
              e.stopPropagation(),
              void (
                null === (t = s.plugins.Thumbs) ||
                void 0 === t ||
                t.toggle()
              )
            );
          if (void 0 !== r.fancyboxToggleFullscreen)
            return (
              e.preventDefault(),
              e.stopPropagation(),
              void this.instance.toggleFullscreen()
            );
          if (void 0 !== r.fancyboxToggleSlideshow) {
            e.preventDefault(), e.stopPropagation();
            const t =
              null === (i = s.carousel) || void 0 === i
                ? void 0
                : i.plugins.Autoplay;
            let n = t.isActive;
            return (
              o && "mousemove" === o.panMode && !n && o.reset(),
              void (n ? t.stop() : t.start())
            );
          }
          const l = r.panzoomAction,
            c = r.panzoomChange;
          if (((c || l) && (e.preventDefault(), e.stopPropagation()), c)) {
            let t = {};
            try {
              t = JSON.parse(c);
            } catch (e) {}
            o && o.applyChange(t);
          } else l && o && o[l] && o[l]();
        }
        onChange() {
          this.onRefresh();
        }
        onRefresh() {
          if (this.instance.isClosing()) return;
          const e = this.container;
          if (!e) return;
          const t = this.instance.getSlide();
          if (!t || t.state !== pe.Ready) return;
          const i = t && !t.error && t.panzoom;
          for (const t of e.querySelectorAll("[data-panzoom-action]"))
            i
              ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex"))
              : (t.setAttribute("disabled", ""),
                t.setAttribute("tabindex", "-1"));
          let s = i && i.canZoomIn(),
            n = i && i.canZoomOut();
          for (const t of e.querySelectorAll('[data-panzoom-action="zoomIn"]'))
            s
              ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex"))
              : (t.setAttribute("disabled", ""),
                t.setAttribute("tabindex", "-1"));
          for (const t of e.querySelectorAll('[data-panzoom-action="zoomOut"]'))
            n
              ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex"))
              : (t.setAttribute("disabled", ""),
                t.setAttribute("tabindex", "-1"));
          for (const t of e.querySelectorAll(
            '[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]'
          )) {
            n || s
              ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex"))
              : (t.setAttribute("disabled", ""),
                t.setAttribute("tabindex", "-1"));
            const e = t.querySelector("g");
            e && (e.style.display = s ? "" : "none");
          }
        }
        onDone(e, t) {
          var i;
          null === (i = t.panzoom) ||
            void 0 === i ||
            i.on("afterTransform", () => {
              this.instance.isCurrentSlide(t) && this.onRefresh();
            }),
            this.instance.isCurrentSlide(t) && this.onRefresh();
        }
        createContainer() {
          const e = this.instance.container;
          if (!e) return null;
          const t = this.option("parentEl") || e,
            i = document.createElement("div");
          return (
            $(i, "fancybox__toolbar"),
            t.prepend(i),
            i.addEventListener("click", this.onClick, {
              passive: !1,
              capture: !0,
            }),
            e && $(e, "has-toolbar"),
            (this.container = i),
            i
          );
        }
        createEl(e) {
          const t = this.instance,
            i = t.carousel;
          if (!i) return null;
          if ("toggleFS" === e) return null;
          if ("fullscreen" === e && !t.fsAPI) return null;
          let s = null;
          const n = i.slides.length || 0;
          let o = 0,
            a = 0;
          for (const e of i.slides)
            (e.panzoom || "image" === e.type) && o++,
              ("image" === e.type || e.downloadSrc) && a++;
          if (n < 2 && ["infobar", "prev", "next"].includes(e)) return s;
          if (void 0 !== He[e] && !o) return null;
          if ("download" === e && !a) return null;
          if ("thumbs" === e) {
            const e = t.plugins.Thumbs;
            if (!e || !e.isEnabled) return null;
          }
          if ("slideshow" === e && (!i.plugins.Autoplay || n < 2)) return null;
          if (void 0 !== He[e]) {
            const t = He[e];
            (s = document.createElement("button")),
              s.setAttribute(
                "title",
                this.instance.localize(`{{${e.toUpperCase()}}}`)
              ),
              $(s, "f-button"),
              t.action && (s.dataset.panzoomAction = t.action),
              t.change && (s.dataset.panzoomChange = JSON.stringify(t.change)),
              s.appendChild(v(this.instance.localize(t.icon)));
          } else {
            const t = (this.option("items") || [])[e];
            t &&
              ((s = v(this.instance.localize(t.tpl))),
              "function" == typeof t.click &&
                s.addEventListener("click", (e) => {
                  e.preventDefault(),
                    e.stopPropagation(),
                    "function" == typeof t.click && t.click.call(this, this, e);
                }));
          }
          const r = null == s ? void 0 : s.querySelector("svg");
          if (r)
            for (const [e, t] of Object.entries(Ne))
              r.getAttribute(e) || r.setAttribute(e, String(t));
          return s;
        }
        removeContainer() {
          const e = this.container;
          e && e.remove(), (this.container = null), (this.state = je.Disabled);
          const t = this.instance.container;
          t && R(t, "has-toolbar");
        }
        attach() {
          const e = this,
            t = e.instance;
          t.on("Carousel.initSlides", e.onReady),
            t.on("done", e.onDone),
            t.on("reveal", e.onChange),
            t.on("Carousel.change", e.onChange),
            e.onReady(e.instance);
        }
        detach() {
          const e = this,
            t = e.instance;
          t.off("Carousel.initSlides", e.onReady),
            t.off("done", e.onDone),
            t.off("reveal", e.onChange),
            t.off("Carousel.change", e.onChange),
            e.removeContainer();
        }
      }
      Object.defineProperty(Be, "defaults", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {
          absolute: "auto",
          display: {
            left: ["infobar"],
            middle: [],
            right: [
              "iterateZoom",
              "slideshow",
              "fullscreen",
              "thumbs",
              "close",
            ],
          },
          enabled: "auto",
          items: {
            infobar: {
              tpl: '<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>',
            },
            download: {
              tpl: '<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>',
            },
            prev: {
              tpl: '<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>',
            },
            next: {
              tpl: '<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>',
            },
            slideshow: {
              tpl: '<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>',
            },
            fullscreen: {
              tpl: '<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>',
            },
            thumbs: {
              tpl: '<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>',
            },
            close: {
              tpl: '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>',
            },
          },
          parentEl: null,
        },
      });
      const Ve = {
          Hash: fe,
          Html: Ee,
          Images: ve,
          Slideshow: Le,
          Thumbs: ze,
          Toolbar: Be,
        },
        We = "with-fancybox",
        qe = "hide-scrollbar",
        Ye = "--fancybox-scrollbar-compensate",
        Xe = "--fancybox-body-margin",
        Ue = "is-animated",
        Ze = "is-compact",
        Ge = "is-loading",
        Ke = "disabled",
        Je = "tabindex",
        Qe = "download",
        et = "href",
        tt = "src",
        it = function () {
          var e = window.getSelection();
          return e && "Range" === e.type;
        };
      let st = null,
        nt = null;
      const ot = new Map();
      let at = 0;
      class rt extends O {
        get isIdle() {
          return this.idle;
        }
        get isCompact() {
          return this.option("compact");
        }
        constructor(e = [], t = {}, i = {}) {
          super(t),
            Object.defineProperty(this, "userSlides", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: [],
            }),
            Object.defineProperty(this, "userPlugins", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: {},
            }),
            Object.defineProperty(this, "idle", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "idleTimer", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            }),
            Object.defineProperty(this, "clickTimer", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            }),
            Object.defineProperty(this, "pwt", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            Object.defineProperty(this, "ignoreFocusChange", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "state", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: ue.Init,
            }),
            Object.defineProperty(this, "id", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            Object.defineProperty(this, "container", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            }),
            Object.defineProperty(this, "footer", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            }),
            Object.defineProperty(this, "caption", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            }),
            Object.defineProperty(this, "carousel", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            }),
            Object.defineProperty(this, "lastFocus", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            }),
            Object.defineProperty(this, "prevMouseMoveEvent", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "fsAPI", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.fsAPI = (() => {
              let e,
                t = "",
                i = "",
                s = "";
              return (
                document.fullscreenEnabled
                  ? ((t = "requestFullscreen"),
                    (i = "exitFullscreen"),
                    (s = "fullscreenElement"))
                  : document.webkitFullscreenEnabled &&
                    ((t = "webkitRequestFullscreen"),
                    (i = "webkitExitFullscreen"),
                    (s = "webkitFullscreenElement")),
                t &&
                  (e = {
                    request: function (e) {
                      return "webkitRequestFullscreen" === t
                        ? e[t](Element.ALLOW_KEYBOARD_INPUT)
                        : e[t]();
                    },
                    exit: function () {
                      return document[s] && document[i]();
                    },
                    isFullscreen: function () {
                      return document[s];
                    },
                  }),
                e
              );
            })()),
            (this.id = t.id || ++at),
            ot.set(this.id, this),
            (this.userSlides = e),
            (this.userPlugins = i),
            queueMicrotask(() => {
              this.init();
            });
        }
        init() {
          if (this.state === ue.Destroy) return;
          (this.state = ue.Init),
            this.attachPlugins(
              Object.assign(Object.assign({}, rt.Plugins), this.userPlugins)
            ),
            this.emit("init"),
            this.emit("attachPlugins"),
            !0 === this.option("hideScrollbar") &&
              (() => {
                if (!re) return;
                const e = document.body;
                if (e.classList.contains(qe)) return;
                let t =
                  window.innerWidth -
                  document.documentElement.getBoundingClientRect().width;
                t < 0 && (t = 0);
                const i = e.currentStyle || window.getComputedStyle(e),
                  s = parseFloat(i.marginRight);
                document.documentElement.style.setProperty(Ye, `${t}px`),
                  s && e.style.setProperty(Xe, `${s}px`),
                  e.classList.add(qe);
              })(),
            this.initLayout(),
            this.scale();
          const e = () => {
              this.initCarousel(this.userSlides),
                (this.state = ue.Ready),
                this.attachEvents(),
                this.emit("ready"),
                setTimeout(() => {
                  this.container &&
                    this.container.setAttribute("aria-hidden", "false");
                }, 16);
            },
            t = this.fsAPI;
          this.option("Fullscreen.autoStart") && t && !t.isFullscreen()
            ? t
                .request(this.container)
                .then(() => e())
                .catch(() => e())
            : e();
        }
        initLayout() {
          var e, t;
          const i = this.option("parentEl") || document.body,
            s = v(this.localize(this.option("tpl.main") || ""));
          s &&
            (s.setAttribute("id", `fancybox-${this.id}`),
            s.setAttribute("aria-label", this.localize("{{MODAL}}")),
            s.classList.toggle(Ze, this.isCompact),
            $(s, this.option("mainClass") || ""),
            (this.container = s),
            (this.footer = s.querySelector(".fancybox__footer")),
            i.appendChild(s),
            $(document.documentElement, We),
            (st && nt) ||
              ((st = document.createElement("span")),
              $(st, "fancybox-focus-guard"),
              st.setAttribute(Je, "0"),
              st.setAttribute("aria-hidden", "true"),
              st.setAttribute("aria-label", "Focus guard"),
              (nt = st.cloneNode()),
              null === (e = s.parentElement) ||
                void 0 === e ||
                e.insertBefore(st, s),
              null === (t = s.parentElement) || void 0 === t || t.append(nt)),
            this.option("animated") &&
              ($(s, Ue),
              setTimeout(() => {
                this.isClosing() || R(s, Ue);
              }, 350)),
            this.emit("initLayout"));
        }
        initCarousel(e) {
          const t = this.container;
          if (!t) return;
          const i = t.querySelector(".fancybox__carousel");
          if (!i) return;
          const s = (this.carousel = new oe(
            i,
            E(
              {},
              {
                slides: e,
                transition: "fade",
                Panzoom: {
                  lockAxis: this.option("dragToClose") ? "xy" : "x",
                  infinite: !!this.option("dragToClose") && "y",
                },
                Dots: !1,
                Navigation: {
                  classes: {
                    container: "fancybox__nav",
                    button: "f-button",
                    isNext: "is-next",
                    isPrev: "is-prev",
                  },
                },
                initialPage: this.option("startIndex"),
                l10n: this.option("l10n"),
              },
              this.option("Carousel") || {}
            )
          ));
          s.on("*", (e, t, ...i) => {
            this.emit(`Carousel.${t}`, e, ...i);
          }),
            s.on(["ready", "change"], () => {
              var e;
              const t = this.getSlide();
              t &&
                (null === (e = t.panzoom) ||
                  void 0 === e ||
                  e.updateControls()),
                this.manageCaption(t);
            }),
            this.on("Carousel.removeSlide", (e, t, i) => {
              this.clearContent(i), (i.state = void 0);
            }),
            s.on("Panzoom.touchStart", () => {
              var e, t;
              this.isCompact || this.endIdle(),
                (null === (e = document.activeElement) || void 0 === e
                  ? void 0
                  : e.closest(".f-thumbs")) &&
                  (null === (t = this.container) || void 0 === t || t.focus());
            }),
            s.on("settle", () => {
              this.idleTimer ||
                this.isCompact ||
                !this.option("idle") ||
                this.setIdle(),
                this.option("autoFocus") &&
                  !this.isClosing &&
                  this.checkFocus();
            }),
            this.option("dragToClose") &&
              (s.on("Panzoom.afterTransform", (e, t) => {
                const i = this.getSlide();
                if (i && f(i.el)) return;
                const s = this.container;
                if (s) {
                  const e = Math.abs(t.current.f),
                    i =
                      e < 1
                        ? ""
                        : Math.max(
                            0.5,
                            Math.min(1, 1 - (e / t.contentRect.fitHeight) * 1.5)
                          );
                  s.style.setProperty("--fancybox-ts", i ? "0s" : ""),
                    s.style.setProperty("--fancybox-opacity", i + "");
                }
              }),
              s.on("Panzoom.touchEnd", (e, t, i) => {
                var s;
                const n = this.getSlide();
                if (n && f(n.el)) return;
                if (
                  t.isMobile &&
                  document.activeElement &&
                  -1 !==
                    ["TEXTAREA", "INPUT"].indexOf(
                      null === (s = document.activeElement) || void 0 === s
                        ? void 0
                        : s.nodeName
                    )
                )
                  return;
                const o = Math.abs(t.dragOffset.y);
                "y" === t.lockedAxis &&
                  (o >= 200 || (o >= 50 && t.dragOffset.time < 300)) &&
                  (i && i.cancelable && i.preventDefault(),
                  this.close(
                    i,
                    "f-throwOut" + (t.current.f < 0 ? "Up" : "Down")
                  ));
              })),
            s.on("change", (e) => {
              var t;
              let i =
                null === (t = this.getSlide()) || void 0 === t
                  ? void 0
                  : t.triggerEl;
              if (i) {
                const t = new CustomEvent("slideTo", {
                  bubbles: !0,
                  cancelable: !0,
                  detail: e.page,
                });
                i.dispatchEvent(t);
              }
            }),
            s.on(["refresh", "change"], (e) => {
              const t = this.container;
              if (!t) return;
              for (const i of t.querySelectorAll(
                "[data-fancybox-current-index]"
              ))
                i.innerHTML = e.page + 1;
              for (const i of t.querySelectorAll("[data-fancybox-count]"))
                i.innerHTML = e.pages.length;
              if (!e.isInfinite) {
                for (const i of t.querySelectorAll("[data-fancybox-next]"))
                  e.page < e.pages.length - 1
                    ? (i.removeAttribute(Ke), i.removeAttribute(Je))
                    : (i.setAttribute(Ke, ""), i.setAttribute(Je, "-1"));
                for (const i of t.querySelectorAll("[data-fancybox-prev]"))
                  e.page > 0
                    ? (i.removeAttribute(Ke), i.removeAttribute(Je))
                    : (i.setAttribute(Ke, ""), i.setAttribute(Je, "-1"));
              }
              const i = this.getSlide();
              if (!i) return;
              let s = i.downloadSrc || "";
              s ||
                "image" !== i.type ||
                i.error ||
                "string" != typeof i[tt] ||
                (s = i[tt]);
              for (const e of t.querySelectorAll("[data-fancybox-download]")) {
                const t = i.downloadFilename;
                s
                  ? (e.removeAttribute(Ke),
                    e.removeAttribute(Je),
                    e.setAttribute(et, s),
                    e.setAttribute(Qe, t || s),
                    e.setAttribute("target", "_blank"))
                  : (e.setAttribute(Ke, ""),
                    e.setAttribute(Je, "-1"),
                    e.removeAttribute(et),
                    e.removeAttribute(Qe));
              }
            }),
            this.emit("initCarousel");
        }
        attachEvents() {
          const e = this,
            t = e.container;
          if (!t) return;
          t.addEventListener("click", e.onClick, { passive: !1, capture: !1 }),
            t.addEventListener("wheel", e.onWheel, {
              passive: !1,
              capture: !1,
            }),
            document.addEventListener("keydown", e.onKeydown, {
              passive: !1,
              capture: !0,
            }),
            document.addEventListener(
              "visibilitychange",
              e.onVisibilityChange,
              !1
            ),
            document.addEventListener("mousemove", e.onMousemove),
            e.option("trapFocus") &&
              document.addEventListener("focus", e.onFocus, !0),
            window.addEventListener("resize", e.onResize);
          const i = window.visualViewport;
          i &&
            (i.addEventListener("scroll", e.onResize),
            i.addEventListener("resize", e.onResize));
        }
        detachEvents() {
          const e = this,
            t = e.container;
          if (!t) return;
          document.removeEventListener("keydown", e.onKeydown, {
            passive: !1,
            capture: !0,
          }),
            t.removeEventListener("wheel", e.onWheel, {
              passive: !1,
              capture: !1,
            }),
            t.removeEventListener("click", e.onClick, {
              passive: !1,
              capture: !1,
            }),
            document.removeEventListener("mousemove", e.onMousemove),
            window.removeEventListener("resize", e.onResize);
          const i = window.visualViewport;
          i &&
            (i.removeEventListener("resize", e.onResize),
            i.removeEventListener("scroll", e.onResize)),
            document.removeEventListener(
              "visibilitychange",
              e.onVisibilityChange,
              !1
            ),
            document.removeEventListener("focus", e.onFocus, !0);
        }
        scale() {
          const e = this.container;
          if (!e) return;
          const t = window.visualViewport,
            i = Math.max(1, (null == t ? void 0 : t.scale) || 1);
          let s = "",
            n = "",
            o = "";
          if (t && i > 1) {
            let e = `${t.offsetLeft}px`,
              a = `${t.offsetTop}px`;
            (s = t.width * i + "px"),
              (n = t.height * i + "px"),
              (o = `translate3d(${e}, ${a}, 0) scale(${1 / i})`);
          }
          (e.style.transform = o), (e.style.width = s), (e.style.height = n);
        }
        onClick(e) {
          var t, i;
          const { container: s, isCompact: n } = this;
          if (!s || this.isClosing()) return;
          !n && this.option("idle") && this.resetIdle();
          const o = e.composedPath()[0];
          if (o.closest(".f-spinner") || o.closest("[data-fancybox-close]"))
            return e.preventDefault(), void this.close(e);
          if (o.closest("[data-fancybox-prev]"))
            return e.preventDefault(), void this.prev();
          if (o.closest("[data-fancybox-next]"))
            return e.preventDefault(), void this.next();
          const a = document.activeElement;
          if (it() && a && s.contains(a)) return;
          if (
            o ===
            (null === (t = this.carousel) || void 0 === t
              ? void 0
              : t.container)
          )
            return;
          if (
            n &&
            "image" ===
              (null === (i = this.getSlide()) || void 0 === i ? void 0 : i.type)
          )
            return void (this.clickTimer
              ? (clearTimeout(this.clickTimer), (this.clickTimer = null))
              : (this.clickTimer = setTimeout(() => {
                  this.toggleIdle(), (this.clickTimer = null);
                }, 350)));
          if ((this.emit("click", e), e.defaultPrevented)) return;
          let r = !1;
          if (o.closest(".fancybox__content")) {
            if (a) {
              if (a.closest("[contenteditable]")) return;
              o.matches(ce) || a.blur();
            }
            if (it()) return;
            r = this.option("contentClick");
          } else
            o.closest(".fancybox__carousel") &&
              !o.matches(ce) &&
              (r = this.option("backdropClick"));
          "close" === r
            ? (e.preventDefault(), this.close(e))
            : "next" === r
            ? (e.preventDefault(), this.next())
            : "prev" === r && (e.preventDefault(), this.prev());
        }
        onWheel(e) {
          var t;
          let i = this.option("wheel", e);
          (null === (t = e.target) || void 0 === t
            ? void 0
            : t.closest(".fancybox__thumbs")) && (i = "slide");
          const s = "slide" === i,
            n = [-e.deltaX || 0, -e.deltaY || 0, -e.detail || 0].reduce(
              function (e, t) {
                return Math.abs(t) > Math.abs(e) ? t : e;
              }
            ),
            o = Math.max(-1, Math.min(1, n)),
            a = Date.now();
          this.pwt && a - this.pwt < 300
            ? s && e.preventDefault()
            : ((this.pwt = a),
              this.emit("wheel", e),
              e.defaultPrevented ||
                ("close" === i
                  ? (e.preventDefault(), this.close(e))
                  : "slide" === i &&
                    (e.preventDefault(), this[o > 0 ? "prev" : "next"]())));
        }
        onKeydown(e) {
          if (!this.isTopmost()) return;
          this.isCompact ||
            !this.option("idle") ||
            this.isClosing() ||
            this.resetIdle();
          const t = e.key,
            i = this.option("keyboard");
          if (!i || e.ctrlKey || e.altKey || e.shiftKey) return;
          const s = e.composedPath()[0],
            n = document.activeElement && document.activeElement.classList,
            o =
              (n && n.contains("f-button")) ||
              s.dataset.carouselPage ||
              s.dataset.carouselIndex;
          if (
            "Escape" !== t &&
            !o &&
            I(s) &&
            (s.isContentEditable ||
              -1 !==
                ["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(
                  s.nodeName
                ))
          )
            return;
          this.emit("keydown", t, e);
          const a = i[t];
          "function" == typeof this[a] && (e.preventDefault(), this[a]());
        }
        onResize() {
          const e = Ze,
            t = this.container;
          if (!t) return;
          const i = this.isCompact;
          t.classList.toggle(e, i),
            this.manageCaption(this.getSlide()),
            this.isCompact ? this.clearIdle() : this.endIdle(),
            this.scale(),
            this.emit("resize");
        }
        onFocus(e) {
          this.isTopmost() && this.checkFocus(e);
        }
        onMousemove(e) {
          (this.prevMouseMoveEvent = e),
            !this.isCompact && this.option("idle") && this.resetIdle();
        }
        onVisibilityChange() {
          "visible" === document.visibilityState
            ? this.checkFocus()
            : this.endIdle();
        }
        manageCloseBtn(e) {
          const t = this.optionFor(e, "closeButton") || !1;
          if ("auto" === t) {
            const e = this.plugins.Toolbar;
            if (e && e.state === je.Ready) return;
          }
          if (!t) return;
          if (!e.contentEl || e.closeBtnEl) return;
          const i = this.option("tpl.closeButton");
          if (i) {
            const t = v(this.localize(i));
            (e.closeBtnEl = e.contentEl.appendChild(t)),
              e.el && $(e.el, "has-close-btn");
          }
        }
        manageCaption(e = void 0) {
          var t, i;
          const s = "fancybox__caption",
            n = "has-caption",
            o = this.container;
          if (!o) return;
          R(o, n);
          const a = this.isCompact || this.option("commonCaption"),
            r = !a;
          if (
            (this.caption && this.stop(this.caption),
            r && this.caption && (this.caption.remove(), (this.caption = null)),
            a && !this.caption)
          )
            for (const e of (null === (t = this.carousel) || void 0 === t
              ? void 0
              : t.slides) || [])
              e.captionEl &&
                (e.captionEl.remove(),
                (e.captionEl = void 0),
                R(e.el, n),
                null === (i = e.el) ||
                  void 0 === i ||
                  i.removeAttribute("aria-labelledby"));
          if (
            (e || (e = this.getSlide()), !e || (a && !this.isCurrentSlide(e)))
          )
            return;
          const l = e.el;
          let c = this.optionFor(e, "caption", "");
          if (!c)
            return void (
              a &&
              this.caption &&
              this.animate(this.caption, "f-fadeOut", () => {
                this.caption && (this.caption.innerHTML = "");
              })
            );
          let h = null;
          if (r) {
            if (((h = e.captionEl || null), l && !h)) {
              const t = s + `_${this.id}_${e.index}`;
              (h = document.createElement("div")),
                $(h, s),
                h.setAttribute("id", t),
                (e.captionEl = l.appendChild(h)),
                $(l, n),
                l.setAttribute("aria-labelledby", t);
            }
          } else
            (h = this.caption),
              h || (h = o.querySelector("." + s)),
              h ||
                ((h = document.createElement("div")),
                (h.dataset.fancyboxCaption = ""),
                $(h, s),
                (this.footer || o).prepend(h)),
              $(o, n),
              (this.caption = h);
          h &&
            ((h.innerHTML = ""),
            "string" == typeof c || "number" == typeof c
              ? (h.innerHTML = c + "")
              : c instanceof HTMLElement && h.appendChild(c));
        }
        checkFocus(e) {
          var t;
          const i = document.activeElement || null;
          (i &&
            (null === (t = this.container) || void 0 === t
              ? void 0
              : t.contains(i))) ||
            this.focus(e);
        }
        focus(e) {
          var t;
          if (this.ignoreFocusChange) return;
          const i = document.activeElement || null,
            s = (null == e ? void 0 : e.target) || null,
            n = this.container,
            o = this.getSlide();
          if (
            !n ||
            !(null === (t = this.carousel) || void 0 === t
              ? void 0
              : t.viewport)
          )
            return;
          if (!e && i && n.contains(i)) return;
          const a = o && o.state === pe.Ready ? o.el : null;
          if (!a || a.contains(i) || n === i) return;
          e && e.cancelable && e.preventDefault(),
            (this.ignoreFocusChange = !0);
          const r = Array.from(n.querySelectorAll(ce));
          let l = [],
            c = null;
          for (let e of r) {
            const t = !e.offsetParent || e.closest('[aria-hidden="true"]'),
              i = a && a.contains(e),
              s = !this.carousel.viewport.contains(e);
            if (e === n || ((i || s) && !t)) {
              l.push(e);
              const t = e.dataset.origTabindex;
              void 0 !== t && t && (e.tabIndex = parseFloat(t)),
                e.removeAttribute("data-orig-tabindex"),
                (!e.hasAttribute("autoFocus") && c) || (c = e);
            } else {
              const t =
                void 0 === e.dataset.origTabindex
                  ? e.getAttribute("tabindex") || ""
                  : e.dataset.origTabindex;
              t && (e.dataset.origTabindex = t), (e.tabIndex = -1);
            }
          }
          let h = null;
          e
            ? (!s || l.indexOf(s) < 0) &&
              ((h = c || n),
              l.length &&
                (i === nt
                  ? (h = l[0])
                  : (this.lastFocus !== n && i !== st) ||
                    (h = l[l.length - 1])))
            : (h = o && "image" === o.type ? n : c || n),
            h && he(h),
            (this.lastFocus = document.activeElement),
            (this.ignoreFocusChange = !1);
        }
        next() {
          const e = this.carousel;
          e && e.pages.length > 1 && e.slideNext();
        }
        prev() {
          const e = this.carousel;
          e && e.pages.length > 1 && e.slidePrev();
        }
        jumpTo(...e) {
          this.carousel && this.carousel.slideTo(...e);
        }
        isTopmost() {
          var e;
          return (
            (null === (e = rt.getInstance()) || void 0 === e ? void 0 : e.id) ==
            this.id
          );
        }
        animate(e = null, t = "", i) {
          if (!e || !t) return void (i && i());
          this.stop(e);
          const s = (n) => {
            n.target === e &&
              e.dataset.animationName &&
              (e.removeEventListener("animationend", s),
              delete e.dataset.animationName,
              i && i(),
              R(e, t));
          };
          (e.dataset.animationName = t),
            e.addEventListener("animationend", s),
            $(e, t);
        }
        stop(e) {
          e &&
            e.dispatchEvent(
              new CustomEvent("animationend", {
                bubbles: !1,
                cancelable: !0,
                currentTarget: e,
              })
            );
        }
        setContent(e, t = "", i = !0) {
          if (this.isClosing()) return;
          const s = e.el;
          if (!s) return;
          let n = null;
          if (
            (I(t)
              ? (n = t)
              : ((n = v(t + "")),
                I(n) ||
                  ((n = document.createElement("div")),
                  (n.innerHTML = t + ""))),
            ["img", "picture", "iframe", "video", "audio"].includes(
              n.nodeName.toLowerCase()
            ))
          ) {
            const e = document.createElement("div");
            e.appendChild(n), (n = e);
          }
          I(n) && e.filter && !e.error && (n = n.querySelector(e.filter)),
            n && I(n)
              ? ($(n, "fancybox__content"),
                e.id && n.setAttribute("id", e.id),
                ("none" !== n.style.display &&
                  "none" !== getComputedStyle(n).getPropertyValue("display")) ||
                  (n.style.display =
                    e.display || this.option("defaultDisplay") || "flex"),
                s.classList.add(
                  `has-${e.error ? "error" : e.type || "unknown"}`
                ),
                s.prepend(n),
                (e.contentEl = n),
                i && this.revealContent(e),
                this.manageCloseBtn(e),
                this.manageCaption(e))
              : this.setError(e, "{{ELEMENT_NOT_FOUND}}");
        }
        revealContent(e, t) {
          const i = e.el,
            s = e.contentEl;
          i &&
            s &&
            (this.emit("reveal", e),
            this.hideLoading(e),
            (e.state = pe.Opening),
            (t = this.isOpeningSlide(e)
              ? void 0 === t
                ? this.optionFor(e, "showClass")
                : t
              : "f-fadeIn")
              ? this.animate(s, t, () => {
                  this.done(e);
                })
              : this.done(e));
        }
        done(e) {
          this.isClosing() ||
            ((e.state = pe.Ready),
            this.emit("done", e),
            $(e.el, "is-done"),
            this.isCurrentSlide(e) &&
              this.option("autoFocus") &&
              queueMicrotask(() => {
                this.option("autoFocus") &&
                  (this.option("autoFocus") ? this.focus() : this.checkFocus());
              }),
            this.isOpeningSlide(e) &&
              !this.isCompact &&
              this.option("idle") &&
              this.setIdle());
        }
        isCurrentSlide(e) {
          const t = this.getSlide();
          return !(!e || !t) && t.index === e.index;
        }
        isOpeningSlide(e) {
          var t, i;
          return (
            null ===
              (null === (t = this.carousel) || void 0 === t
                ? void 0
                : t.prevPage) &&
            e.index ===
              (null === (i = this.getSlide()) || void 0 === i
                ? void 0
                : i.index)
          );
        }
        showLoading(e) {
          e.state = pe.Loading;
          const t = e.el;
          t &&
            ($(t, Ge),
            this.emit("loading", e),
            e.spinnerEl ||
              setTimeout(() => {
                if (
                  !this.isClosing() &&
                  !e.spinnerEl &&
                  e.state === pe.Loading
                ) {
                  let i = v(F);
                  (e.spinnerEl = i), t.prepend(i), this.animate(i, "f-fadeIn");
                }
              }, 250));
        }
        hideLoading(e) {
          const t = e.el;
          if (!t) return;
          const i = e.spinnerEl;
          this.isClosing()
            ? null == i || i.remove()
            : (R(t, Ge),
              i &&
                this.animate(i, "f-fadeOut", () => {
                  i.remove();
                }),
              e.state === pe.Loading &&
                (this.emit("loaded", e), (e.state = pe.Ready)));
        }
        setError(e, t) {
          if (this.isClosing()) return;
          const i = new Event("error", { bubbles: !0, cancelable: !0 });
          if ((this.emit("error", i, e), i.defaultPrevented)) return;
          (e.error = t), this.hideLoading(e), this.clearContent(e);
          const s = document.createElement("div");
          s.classList.add("fancybox-error"),
            (s.innerHTML = this.localize(t || "<p>{{ERROR}}</p>")),
            this.setContent(e, s);
        }
        clearContent(e) {
          if (void 0 === e.state) return;
          this.emit("clearContent", e),
            e.contentEl && (e.contentEl.remove(), (e.contentEl = void 0));
          const t = e.el;
          t &&
            (R(t, "has-error"),
            R(t, "has-unknown"),
            R(t, `has-${e.type || "unknown"}`)),
            e.closeBtnEl && e.closeBtnEl.remove(),
            (e.closeBtnEl = void 0),
            e.captionEl && e.captionEl.remove(),
            (e.captionEl = void 0),
            e.spinnerEl && e.spinnerEl.remove(),
            (e.spinnerEl = void 0);
        }
        getSlide() {
          var e;
          const t = this.carousel;
          return (
            (null ===
              (e = null == t ? void 0 : t.pages[null == t ? void 0 : t.page]) ||
            void 0 === e
              ? void 0
              : e.slides[0]) || void 0
          );
        }
        close(e, t) {
          if (this.isClosing()) return;
          const i = new Event("shouldClose", { bubbles: !0, cancelable: !0 });
          if ((this.emit("shouldClose", i, e), i.defaultPrevented)) return;
          e && e.cancelable && (e.preventDefault(), e.stopPropagation());
          const s = this.fsAPI,
            n = () => {
              this.proceedClose(e, t);
            };
          s && s.isFullscreen()
            ? Promise.resolve(s.exit()).then(() => n())
            : n();
        }
        clearIdle() {
          this.idleTimer && clearTimeout(this.idleTimer),
            (this.idleTimer = null);
        }
        setIdle(e = !1) {
          const t = () => {
            this.clearIdle(),
              (this.idle = !0),
              $(this.container, "is-idle"),
              this.emit("setIdle");
          };
          if ((this.clearIdle(), !this.isClosing()))
            if (e) t();
            else {
              const e = this.option("idle");
              e && (this.idleTimer = setTimeout(t, e));
            }
        }
        endIdle() {
          this.clearIdle(),
            this.idle &&
              !this.isClosing() &&
              ((this.idle = !1),
              R(this.container, "is-idle"),
              this.emit("endIdle"));
        }
        resetIdle() {
          this.endIdle(), this.setIdle();
        }
        toggleIdle() {
          this.idle ? this.endIdle() : this.setIdle(!0);
        }
        toggleFullscreen() {
          const e = this.fsAPI;
          e &&
            (e.isFullscreen()
              ? e.exit()
              : this.container && e.request(this.container));
        }
        isClosing() {
          return [ue.Closing, ue.CustomClosing, ue.Destroy].includes(
            this.state
          );
        }
        proceedClose(e, t) {
          var i, s;
          (this.state = ue.Closing), this.clearIdle(), this.detachEvents();
          const n = this.container,
            o = this.carousel,
            a = this.getSlide(),
            r =
              a && this.option("placeFocusBack")
                ? a.triggerEl || this.option("triggerEl")
                : null;
          if (
            (r && (ae(r) ? he(r) : r.focus()),
            n &&
              ($(n, "is-closing"),
              n.setAttribute("aria-hidden", "true"),
              this.option("animated") && $(n, Ue),
              (n.style.pointerEvents = "none")),
            o)
          ) {
            o.clearTransitions(),
              null === (i = o.panzoom) || void 0 === i || i.destroy(),
              null === (s = o.plugins.Navigation) || void 0 === s || s.detach();
            for (const e of o.slides) {
              (e.state = pe.Closing), this.hideLoading(e);
              const t = e.contentEl;
              t && this.stop(t);
              const i = null == e ? void 0 : e.panzoom;
              i && (i.stop(), i.detachEvents(), i.detachObserver()),
                this.isCurrentSlide(e) || o.emit("removeSlide", e);
            }
          }
          this.emit("close", e),
            this.state !== ue.CustomClosing
              ? (void 0 === t && a && (t = this.optionFor(a, "hideClass")),
                t && a
                  ? (this.animate(a.contentEl, t, () => {
                      o && o.emit("removeSlide", a);
                    }),
                    setTimeout(() => {
                      this.destroy();
                    }, 500))
                  : this.destroy())
              : setTimeout(() => {
                  this.destroy();
                }, 500);
        }
        destroy() {
          var e;
          if (this.state === ue.Destroy) return;
          (this.state = ue.Destroy),
            null === (e = this.carousel) || void 0 === e || e.destroy();
          const t = this.container;
          t && t.remove(), ot.delete(this.id);
          const i = rt.getInstance();
          i
            ? i.focus()
            : (st && (st.remove(), (st = null)),
              nt && (nt.remove(), (nt = null)),
              R(document.documentElement, We),
              (() => {
                if (!re) return;
                const e = document,
                  t = e.body;
                t.classList.remove(qe),
                  t.style.setProperty(Xe, ""),
                  e.documentElement.style.setProperty(Ye, "");
              })(),
              this.emit("destroy"));
        }
        static bind(e, t, i) {
          if (!re) return;
          let s,
            n = "",
            o = {};
          if (
            (void 0 === e
              ? (s = document.body)
              : "string" == typeof e
              ? ((s = document.body),
                (n = e),
                "object" == typeof t && (o = t || {}))
              : ((s = e),
                "string" == typeof t && (n = t),
                "object" == typeof i && (o = i || {})),
            !s || !I(s))
          )
            return;
          n = n || "[data-fancybox]";
          const a = rt.openers.get(s) || new Map();
          a.set(n, o),
            rt.openers.set(s, a),
            1 === a.size && s.addEventListener("click", rt.fromEvent);
        }
        static unbind(e, t) {
          let i,
            s = "";
          if (
            ("string" == typeof e
              ? ((i = document.body), (s = e))
              : ((i = e), "string" == typeof t && (s = t)),
            !i)
          )
            return;
          const n = rt.openers.get(i);
          n && s && n.delete(s),
            (s && n) ||
              (rt.openers.delete(i),
              i.removeEventListener("click", rt.fromEvent));
        }
        static destroy() {
          let e;
          for (; (e = rt.getInstance()); ) e.destroy();
          for (const e of rt.openers.keys())
            e.removeEventListener("click", rt.fromEvent);
          rt.openers = new Map();
        }
        static fromEvent(e) {
          if (e.defaultPrevented) return;
          if (e.button && 0 !== e.button) return;
          if (e.ctrlKey || e.metaKey || e.shiftKey) return;
          let t = e.composedPath()[0];
          const i = t.closest("[data-fancybox-trigger]");
          if (i) {
            const e = i.dataset.fancyboxTrigger || "",
              s = document.querySelectorAll(`[data-fancybox="${e}"]`),
              n = parseInt(i.dataset.fancyboxIndex || "", 10) || 0;
            t = s[n] || t;
          }
          if (!(t && t instanceof Element)) return;
          let s, n, o, a;
          if (
            ([...rt.openers].reverse().find(
              ([e, i]) =>
                !(
                  !e.contains(t) ||
                  ![...i].reverse().find(([i, r]) => {
                    let l = t.closest(i);
                    return !!l && ((s = e), (n = i), (o = l), (a = r), !0);
                  })
                )
            ),
            !s || !n || !o)
          )
            return;
          (a = a || {}), e.preventDefault(), (t = o);
          let r = [],
            l = E({}, de, a);
          (l.event = e), (l.triggerEl = t), (l.delegate = i);
          const c = l.groupAll,
            h = l.groupAttr,
            d = h && t ? t.getAttribute(`${h}`) : "";
          if (
            ((!t || d || c) && (r = [].slice.call(s.querySelectorAll(n))),
            t &&
              !c &&
              (r = d ? r.filter((e) => e.getAttribute(`${h}`) === d) : [t]),
            !r.length)
          )
            return;
          const u = rt.getInstance();
          return u && u.options.triggerEl && r.indexOf(u.options.triggerEl) > -1
            ? void 0
            : (t && (l.startIndex = r.indexOf(t)), rt.fromNodes(r, l));
        }
        static fromSelector(e, t) {
          let i = null,
            s = "";
          if (
            ("string" == typeof e
              ? ((i = document.body), (s = e))
              : e instanceof HTMLElement &&
                "string" == typeof t &&
                ((i = e), (s = t)),
            !i || !s)
          )
            return !1;
          const n = rt.openers.get(i);
          if (!n) return !1;
          const o = n.get(s);
          return !!o && rt.fromNodes(Array.from(i.querySelectorAll(s)), o);
        }
        static fromNodes(e, t) {
          t = E({}, de, t || {});
          const i = [];
          for (const s of e) {
            const e = s.dataset || {},
              n =
                e[tt] ||
                s.getAttribute(et) ||
                s.getAttribute("currentSrc") ||
                s.getAttribute(tt) ||
                void 0;
            let o;
            const a = t.delegate;
            let r;
            a &&
              i.length === t.startIndex &&
              (o =
                a instanceof HTMLImageElement
                  ? a
                  : a.querySelector("img:not([aria-hidden])")),
              o ||
                (o =
                  s instanceof HTMLImageElement
                    ? s
                    : s.querySelector("img:not([aria-hidden])")),
              o &&
                ((r = o.currentSrc || o[tt] || void 0),
                !r &&
                  o.dataset &&
                  (r = o.dataset.lazySrc || o.dataset[tt] || void 0));
            const l = {
              src: n,
              triggerEl: s,
              thumbEl: o,
              thumbElSrc: r,
              thumbSrc: r,
            };
            for (const t in e) l[t] = e[t] + "";
            i.push(l);
          }
          return new rt(i, t);
        }
        static getInstance(e) {
          return e
            ? ot.get(e)
            : Array.from(ot.values())
                .reverse()
                .find((e) => !e.isClosing() && e) || null;
        }
        static getSlide() {
          var e;
          return (
            (null === (e = rt.getInstance()) || void 0 === e
              ? void 0
              : e.getSlide()) || null
          );
        }
        static show(e = [], t = {}) {
          return new rt(e, t);
        }
        static next() {
          const e = rt.getInstance();
          e && e.next();
        }
        static prev() {
          const e = rt.getInstance();
          e && e.prev();
        }
        static close(e = !0, ...t) {
          if (e) for (const e of ot.values()) e.close(...t);
          else {
            const e = rt.getInstance();
            e && e.close(...t);
          }
        }
      }
      Object.defineProperty(rt, "version", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "5.0.23",
      }),
        Object.defineProperty(rt, "defaults", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: de,
        }),
        Object.defineProperty(rt, "Plugins", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ve,
        }),
        Object.defineProperty(rt, "openers", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: new Map(),
        }),
        document.querySelector(".about__play").addEventListener("click", () => {
          rt.show([
            {
              src: "https://www.youtube.com/watch?v=IsD9VvPB0Ak&ab_channel=MYUSATRAVELS",
              type: "video",
            },
          ]);
        }),
        document.querySelectorAll(".grid-gallery__zoom").forEach((e, t) => {
          e.addEventListener("click", () => {
            +e.dataset.index === t &&
              rt.show([{ src: `img/full${t + 1}.jpg`, type: "image" }]);
          });
        });
    })();
})();
