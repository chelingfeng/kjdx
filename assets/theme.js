function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function ($) {
  var $ = jQuery = $;
  var cc = {
    sections: []
  };
  theme.Shopify = {
    formatMoney: function formatMoney(t, r) {
      function e(t, r) {
        return void 0 === t ? r : t;
      }

      function a(t, r, a, o) {
        if (r = e(r, 2), a = e(a, ","), o = e(o, "."), isNaN(t) || null == t) return 0;
        t = (t / 100).toFixed(r);
        var n = t.split(".");
        return n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + a) + (n[1] ? o + n[1] : "");
      }

      "string" == typeof t && (t = t.replace(".", ""));
      var o = "",
          n = /\{\{\s*(\w+)\s*\}\}/,
          i = r || this.money_format;

      switch (i.match(n)[1]) {
        case "amount":
          o = a(t, 2);
          break;

        case "amount_no_decimals":
          o = a(t, 0);
          break;

        case "amount_with_comma_separator":
          o = a(t, 2, ".", ",");
          break;

        case "amount_with_space_separator":
          o = a(t, 2, " ", ",");
          break;

        case "amount_with_period_and_space_separator":
          o = a(t, 2, " ", ".");
          break;

        case "amount_no_decimals_with_comma_separator":
          o = a(t, 0, ".", ",");
          break;

        case "amount_no_decimals_with_space_separator":
          o = a(t, 0, " ", "");
          break;

        case "amount_with_apostrophe_separator":
          o = a(t, 2, "'", ".");
          break;

        case "amount_with_decimal_separator":
          o = a(t, 2, ".", ".");
      }

      return i.replace(n, o);
    },
    formatImage: function formatImage(originalImageUrl, format) {
      return originalImageUrl.replace(/^(.*)\.([^\.]*)$/g, '$1_' + format + '.$2');
    },
    Image: {
      imageSize: function imageSize(t) {
        var e = t.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);
        return null !== e ? e[1] : null;
      },
      getSizedImageUrl: function getSizedImageUrl(t, e) {
        if (null == e) return t;
        if ("master" == e) return this.removeProtocol(t);
        var o = t.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);

        if (null != o) {
          var i = t.split(o[0]),
              r = o[0];
          return this.removeProtocol(i[0] + "_" + e + r);
        }

        return null;
      },
      removeProtocol: function removeProtocol(t) {
        return t.replace(/http(s)?:/, "");
      }
    }
  };

  var ccComponent = /*#__PURE__*/function () {
    "use strict";

    function ccComponent(name) {
      var cssSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ".cc-".concat(name);

      _classCallCheck(this, ccComponent);

      var _this = this; // Initialize any instance of this component within a section


      $(document).on('cc:component:load', function (event, component, target) {
        if (component === name && $(target).find("".concat(cssSelector, ":not(.cc-initialized)")).length > 0) {
          _this.init($(target).find(cssSelector));
        }
      }); // Destroy any instance of this component within a section

      $(document).on('cc:component:unload', function (event, component, target) {
        if (component === name) {
          _this.destroy($(target).find(cssSelector));
        }
      }); // Initialize any other instance of this component

      $("".concat(cssSelector, ":not(.cc-initialized)")).each(function () {
        _this.init($(this));
      });
    }

    _createClass(ccComponent, [{
      key: "init",
      value: function init($container) {
        $container.addClass('cc-initialized');
      }
    }, {
      key: "destroy",
      value: function destroy($container) {
        $container.removeClass('cc-initialized');
      }
    }]);

    return ccComponent;
  }();

  ; // requires: throttled-scroll, debouncedresize

  theme.Sections = new function () {
    var _ = this;

    _._instances = [];
    _._deferredSectionTargets = [];
    _._sections = [];
    _._deferredLoadViewportExcess = 300; // load defferred sections within this many px of viewport

    _._deferredWatcherRunning = false;

    _.init = function () {
      $(document).on('shopify:section:load', function (e) {
        // load a new section
        var target = _._themeSectionTargetFromShopifySectionTarget(e.target);

        if (target) {
          _.sectionLoad(target);
        }
      }).on('shopify:section:unload', function (e) {
        // unload existing section
        var target = _._themeSectionTargetFromShopifySectionTarget(e.target);

        if (target) {
          _.sectionUnload(target);
        }
      });
      $(window).on('throttled-scroll.themeSectionDeferredLoader debouncedresize.themeSectionDeferredLoader', _._processDeferredSections);
      _._deferredWatcherRunning = true;
    }; // register a type of section


    _.register = function (type, section, options) {
      _._sections.push({
        type: type,
        section: section,
        afterSectionLoadCallback: options ? options.afterLoad : null,
        afterSectionUnloadCallback: options ? options.afterUnload : null
      }); // load now


      $('[data-section-type="' + type + '"]').each(function () {
        if (Shopify.designMode || options && options.deferredLoad === false || !_._deferredWatcherRunning) {
          _.sectionLoad(this);
        } else {
          _.sectionDeferredLoad(this, options);
        }
      });
    }; // prepare a section to load later


    _.sectionDeferredLoad = function (target, options) {
      _._deferredSectionTargets.push({
        target: target,
        deferredLoadViewportExcess: options && options.deferredLoadViewportExcess ? options.deferredLoadViewportExcess : _._deferredLoadViewportExcess
      });

      _._processDeferredSections(true);
    }; // load deferred sections if in/near viewport


    _._processDeferredSections = function (firstRunCheck) {
      if (_._deferredSectionTargets.length) {
        var viewportTop = $(window).scrollTop(),
            viewportBottom = viewportTop + $(window).height(),
            loopStart = firstRunCheck === true ? _._deferredSectionTargets.length - 1 : 0;

        for (var i = loopStart; i < _._deferredSectionTargets.length; i++) {
          var target = _._deferredSectionTargets[i].target,
              viewportExcess = _._deferredSectionTargets[i].deferredLoadViewportExcess,
              sectionTop = $(target).offset().top - viewportExcess,
              doLoad = sectionTop > viewportTop && sectionTop < viewportBottom;

          if (!doLoad) {
            var sectionBottom = sectionTop + $(target).outerHeight() + viewportExcess * 2;
            doLoad = sectionBottom > viewportTop && sectionBottom < viewportBottom;
          }

          if (doLoad || sectionTop < viewportTop && sectionBottom > viewportBottom) {
            // in viewport, load
            _.sectionLoad(target); // remove from deferred queue and resume checks


            _._deferredSectionTargets.splice(i, 1);

            i--;
          }
        }
      } // remove event if no more deferred targets left, if not on first run


      if (firstRunCheck !== true && _._deferredSectionTargets.length === 0) {
        _._deferredWatcherRunning = false;
        $(window).off('.themeSectionDeferredLoader');
      }
    }; // load in a section


    _.sectionLoad = function (target) {
      var target = target,
          sectionObj = _._sectionForTarget(target),
          section = false;

      if (sectionObj.section) {
        section = sectionObj.section;
      } else {
        section = sectionObj;
      }

      if (section !== false) {
        var instance = {
          target: target,
          section: section,
          $shopifySectionContainer: $(target).closest('.shopify-section'),
          thisContext: {
            functions: section.functions
          }
        };

        _._instances.push(instance); //Initialise any components


        if ($(target).data('components')) {
          //Init each component
          var components = $(target).data('components').split(',');
          components.forEach(function (component) {
            $(document).trigger('cc:component:load', [component, target]);
          });
        }

        _._callWith(section, 'onSectionLoad', target, instance.thisContext);

        _._callWith(section, 'afterSectionLoadCallback', target, instance.thisContext); // attach additional UI events if defined


        if (section.onSectionSelect) {
          instance.$shopifySectionContainer.on('shopify:section:select', function (e) {
            _._callWith(section, 'onSectionSelect', e.target, instance.thisContext);
          });
        }

        if (section.onSectionDeselect) {
          instance.$shopifySectionContainer.on('shopify:section:deselect', function (e) {
            _._callWith(section, 'onSectionDeselect', e.target, instance.thisContext);
          });
        }

        if (section.onBlockSelect) {
          $(target).on('shopify:block:select', function (e) {
            _._callWith(section, 'onBlockSelect', e.target, instance.thisContext);
          });
        }

        if (section.onBlockDeselect) {
          $(target).on('shopify:block:deselect', function (e) {
            _._callWith(section, 'onBlockDeselect', e.target, instance.thisContext);
          });
        }
      }
    }; // unload a section


    _.sectionUnload = function (target) {
      var sectionObj = _._sectionForTarget(target);

      var instanceIndex = -1;

      for (var i = 0; i < _._instances.length; i++) {
        if (_._instances[i].target == target) {
          instanceIndex = i;
        }
      }

      if (instanceIndex > -1) {
        var instance = _._instances[instanceIndex]; // remove events and call unload, if loaded

        $(target).off('shopify:block:select shopify:block:deselect');
        instance.$shopifySectionContainer.off('shopify:section:select shopify:section:deselect');

        _._callWith(instance.section, 'onSectionUnload', target, instance.thisContext);

        _._callWith(sectionObj, 'afterSectionUnloadCallback', target, instance.thisContext);

        _._instances.splice(instanceIndex); //Destroy any components


        if ($(target).data('components')) {
          //Init each component
          var components = $(target).data('components').split(',');
          components.forEach(function (component) {
            $(document).trigger('cc:component:unload', [component, target]);
          });
        }
      } else {
        // check if it was a deferred section
        for (var i = 0; i < _._deferredSectionTargets.length; i++) {
          if (_._deferredSectionTargets[i].target == target) {
            _._deferredSectionTargets[i].splice(i, 1);

            break;
          }
        }
      }
    }; // helpers


    _._callWith = function (object, method, param, thisContext) {
      if (typeof object[method] === 'function') {
        if (thisContext) {
          object[method].bind(thisContext)(param);
        } else {
          object[method](param);
        }
      }
    };

    _._themeSectionTargetFromShopifySectionTarget = function (target) {
      var $target = $('[data-section-type]:first', target);

      if ($target.length > 0) {
        return $target[0];
      } else {
        return false;
      }
    };

    _._sectionForTarget = function (target) {
      var type = $(target).attr('data-section-type');

      for (var i = 0; i < _._sections.length; i++) {
        if (_._sections[i].type == type) {
          return _._sections[i];
        }
      }

      return false;
    };

    _._sectionAlreadyRegistered = function (type) {
      for (var i = 0; i < _._sections.length; i++) {
        if (_._sections[i].type == type) {
          return true;
        }
      }

      return false;
    };
  }(); // Loading third party scripts

  theme.scriptsLoaded = {};

  theme.loadScriptOnce = function (src, callback, beforeRun, sync) {
    if (typeof theme.scriptsLoaded[src] === 'undefined') {
      theme.scriptsLoaded[src] = [];
      var tag = document.createElement('script');
      tag.src = src;

      if (sync || beforeRun) {
        tag.async = false;
      }

      if (beforeRun) {
        beforeRun();
      }

      if (typeof callback === 'function') {
        theme.scriptsLoaded[src].push(callback);

        if (tag.readyState) {
          // IE, incl. IE9
          tag.onreadystatechange = function () {
            if (tag.readyState == "loaded" || tag.readyState == "complete") {
              tag.onreadystatechange = null;

              for (var i = 0; i < theme.scriptsLoaded[this].length; i++) {
                theme.scriptsLoaded[this][i]();
              }

              theme.scriptsLoaded[this] = true;
            }
          }.bind(src);
        } else {
          tag.onload = function () {
            // Other browsers
            for (var i = 0; i < theme.scriptsLoaded[this].length; i++) {
              theme.scriptsLoaded[this][i]();
            }

            theme.scriptsLoaded[this] = true;
          }.bind(src);
        }
      }

      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      return true;
    } else if (_typeof(theme.scriptsLoaded[src]) === 'object' && typeof callback === 'function') {
      theme.scriptsLoaded[src].push(callback);
    } else {
      if (typeof callback === 'function') {
        callback();
      }

      return false;
    }
  };

  theme.loadStyleOnce = function (src) {
    var srcWithoutProtocol = src.replace(/^https?:/, '');

    if (!document.querySelector('link[href="' + encodeURI(srcWithoutProtocol) + '"]')) {
      var tag = document.createElement('link');
      tag.href = srcWithoutProtocol;
      tag.rel = 'stylesheet';
      tag.type = 'text/css';
      var firstTag = document.getElementsByTagName('link')[0];
      firstTag.parentNode.insertBefore(tag, firstTag);
    }
  };

  theme.Disclosure = function () {
    var selectors = {
      disclosureList: '[data-disclosure-list]',
      disclosureToggle: '[data-disclosure-toggle]',
      disclosureInput: '[data-disclosure-input]',
      disclosureOptions: '[data-disclosure-option]'
    };
    var classes = {
      listVisible: 'disclosure-list--visible'
    };

    function Disclosure($disclosure) {
      this.$container = $disclosure;
      this.cache = {};

      this._cacheSelectors();

      this._connectOptions();

      this._connectToggle();

      this._onFocusOut();
    }

    Disclosure.prototype = $.extend({}, Disclosure.prototype, {
      _cacheSelectors: function _cacheSelectors() {
        this.cache = {
          $disclosureList: this.$container.find(selectors.disclosureList),
          $disclosureToggle: this.$container.find(selectors.disclosureToggle),
          $disclosureInput: this.$container.find(selectors.disclosureInput),
          $disclosureOptions: this.$container.find(selectors.disclosureOptions)
        };
      },
      _connectToggle: function _connectToggle() {
        this.cache.$disclosureToggle.on('click', function (evt) {
          var ariaExpanded = $(evt.currentTarget).attr('aria-expanded') === 'true';
          $(evt.currentTarget).attr('aria-expanded', !ariaExpanded);
          this.cache.$disclosureList.toggleClass(classes.listVisible);
        }.bind(this));
      },
      _connectOptions: function _connectOptions() {
        this.cache.$disclosureOptions.on('click', function (evt) {
          evt.preventDefault();

          this._submitForm($(evt.currentTarget).data('value'));
        }.bind(this));
      },
      _onFocusOut: function _onFocusOut() {
        this.cache.$disclosureToggle.on('focusout', function (evt) {
          var disclosureLostFocus = this.$container.has(evt.relatedTarget).length === 0;

          if (disclosureLostFocus) {
            this._hideList();
          }
        }.bind(this));
        this.cache.$disclosureList.on('focusout', function (evt) {
          var childInFocus = $(evt.currentTarget).has(evt.relatedTarget).length > 0;
          var isVisible = this.cache.$disclosureList.hasClass(classes.listVisible);

          if (isVisible && !childInFocus) {
            this._hideList();
          }
        }.bind(this));
        this.$container.on('keyup', function (evt) {
          if (evt.which !== 27) return; // escape

          this._hideList();

          this.cache.$disclosureToggle.focus();
        }.bind(this));

        this.bodyOnClick = function (evt) {
          var isOption = this.$container.has(evt.target).length > 0;
          var isVisible = this.cache.$disclosureList.hasClass(classes.listVisible);

          if (isVisible && !isOption) {
            this._hideList();
          }
        }.bind(this);

        $('body').on('click', this.bodyOnClick);
      },
      _submitForm: function _submitForm(value) {
        this.cache.$disclosureInput.val(value);
        this.$container.parents('form').submit();
      },
      _hideList: function _hideList() {
        this.cache.$disclosureList.removeClass(classes.listVisible);
        this.cache.$disclosureToggle.attr('aria-expanded', false);
      },
      unload: function unload() {
        $('body').off('click', this.bodyOnClick);
        this.cache.$disclosureOptions.off();
        this.cache.$disclosureToggle.off();
        this.cache.$disclosureList.off();
        this.$container.off();
      }
    });
    return Disclosure;
  }(); /// Show a short-lived text popup above an element


  theme.showQuickPopup = function (message, $origin) {
    var $popup = $('<div class="simple-popup"/>');
    var offs = $origin.offset();
    $popup.html(message).css({
      'left': offs.left,
      'top': offs.top
    }).hide();
    $('body').append($popup);
    $popup.css({
      marginTop: -$popup.outerHeight() - 10,
      marginLeft: -($popup.outerWidth() - $origin.outerWidth()) / 2
    });
    $popup.fadeIn(200).delay(3500).fadeOut(400, function () {
      $(this).remove();
    });
  }; //v1.0


  $.fn.sort = [].sort; // v1.0

  $.fn.fadeOutAndRemove = function (speed, callback) {
    $(this).fadeOut(speed, function () {
      $(this).remove();
      typeof callback == 'function' && callback();
    });
  }; // Turn a <select> tag into clicky boxes
  // Use with: $('select').clickyBoxes()


  $.fn.clickyBoxes = function (prefix) {
    if (prefix == 'destroy') {
      $(this).off('.clickyboxes');
      $(this).next('.clickyboxes').off('.clickyboxes');
    } else {
      return $(this).filter('select:not(.clickybox-replaced)').addClass('clickybox-replaced').each(function () {
        //Make sure rows are unique
        var prefix = prefix || $(this).attr('id'); //Create container

        var $optCont = $('<ul class="clickyboxes"/>').attr('id', 'clickyboxes-' + prefix).data('select', $(this)).insertAfter(this);
        var $label;

        if ($(this).is('[id]')) {
          $label = $('label[for="' + $(this).attr('id') + '"]'); // Grab real label
        } else {
          $label = $(this).siblings('label'); // Rough guess
        }

        if ($label.length > 0) {
          $optCont.addClass('options-' + removeDiacritics($label.text()).toLowerCase().replace(/'/g, '').replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/-*$/, ''));
        } //Add options to container


        $(this).find('option').each(function () {
          $('<li/>').appendTo($optCont).append($('<a href="#"/>').attr('data-value', $(this).val()).html($(this).html()).addClass('opt--' + removeDiacritics($(this).text()).toLowerCase().replace(/'/g, '').replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/-*$/, '')));
        }); //Select change event

        $(this).hide().addClass('replaced').on('change.clickyboxes keyup.clickyboxes', function () {
          //Choose the right option to show
          var val = $(this).val();
          $optCont.find('a').removeClass('active').filter(function () {
            return $(this).attr('data-value') == val;
          }).addClass('active');
        }).trigger('keyup'); //Initial value
        //Button click event

        $optCont.on('click.clickyboxes', 'a', function () {
          if (!$(this).hasClass('active')) {
            var $clicky = $(this).closest('.clickyboxes');
            $clicky.data('select').val($(this).data('value')).trigger('change');
            $clicky.trigger('change');
          }

          return false;
        });
      });
    }
  }; // v1.0
  //Find out how wide scrollbars are on this browser


  $.scrollBarWidth = function () {
    var $temp = $('<div/>').css({
      width: 100,
      height: 100,
      overflow: 'scroll',
      position: 'absolute',
      top: -9999
    }).prependTo('body');
    var w = $temp[0].offsetWidth - $temp[0].clientWidth;
    $temp.remove();
    return w;
  }; //Restyle all select dropdowns
  //NOTE: Only for us on showcase until this can be replaced with jquery.selectreplace.v1.0.js


  var chevronDownIcon = '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/><path d="M0-.75h24v24H0z" fill="none"/></svg>';

  $.fn.selectReplace = function (leaveLabel) {
    return $(this).filter('select:not(.replaced, .noreplace)').each(function () {
      //Add formatting containers
      var $opts = $(this).find('option');
      var initialText = $opts.filter(':selected').length > 0 ? $opts.filter(':selected').text() : $opts.first().text();
      var $cont = $(this).addClass('replaced').wrap('<div class="pretty-select">').parent().addClass('id-' + $(this).attr('id')).append('<span class="text"><span class="value">' + initialText + '</span></span>' + chevronDownIcon); //Label? Move inside

      if ($(this).attr('id')) {
        //Find label
        var $label = $('label[for="' + $(this).attr('id') + '"]'); //If table cells used for layout, do not move the label

        var $selectTD = $(this).closest('td');
        var $labelTD = $label.closest('td');

        if (!leaveLabel && ($selectTD.length == 0 || $labelTD.length == 0 || $selectTD[0] == $labelTD[0])) {
          //Add to dropdown
          var $labelSpan = $('<span class="label">').html($label.html()).prependTo($cont.find('.text')); //Add colon, if it doesn't exist

          if ($labelSpan.slice(-1) != ':') {
            $labelSpan.append(':');
          } // remove label element and use aria


          $cont.find('select').attr('aria-label', $label.text());
          $label.remove();
        }
      }
    }).on('change keyup', function () {
      $(this).siblings('.text').find('.value').html($(this).find(':selected').html());
    });
  };

  $.fn.ccHoverLine = function (opts) {
    $(this).each(function () {
      var $this = $(this);

      if (!$this.hasClass('cc-init')) {
        var updateLine = function updateLine() {
          var $link = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $this.find('li a[aria-selected="true"], li a.active');

          if ($link.length === 1) {
            $hoverLine.css({
              width: $link.width(),
              top: $link.position().top + $link.outerHeight(),
              left: $link.position().left
            });
          }
        };

        $this.append("<li class='cc-hover-line'></li>").addClass('cc-init');
        var $hoverLine = $(this).find(".cc-hover-line");

        if (opts && opts.lineCss) {
          $hoverLine.css(opts.lineCss);
        }

        updateLine();

        if ($(window).outerWidth() < 768) {
          $(this).find("li").click(function () {
            var $link = $(this).find('a');

            if ($link.length === 1) {
              updateLine($link);
            }
          });
        } else {
          $(this).find("li").hover(function () {
            var $link = $(this).find('a');

            if ($link.length === 1) {
              updateLine($link);
            }
          }, function () {
            updateLine();
          });
        }

        $(window).on('debouncedresizewidth', function () {
          updateLine();
        });
      }
    });
  };

  (function () {
    function throttle(callback, threshold) {
      var debounceTimeoutId = -1;
      var tick = false;
      return function () {
        clearTimeout(debounceTimeoutId);
        debounceTimeoutId = setTimeout(callback, threshold);

        if (!tick) {
          callback.call();
          tick = true;
          setTimeout(function () {
            tick = false;
          }, threshold);
        }
      };
    }

    var scrollEvent = document.createEvent('Event');
    scrollEvent.initEvent('throttled-scroll', true, true);
    window.addEventListener("scroll", throttle(function () {
      window.dispatchEvent(scrollEvent);
    }, 200));
  })();

  theme.cartNoteMonitor = {
    load: function load($notes) {
      $notes.on('change.themeCartNoteMonitor paste.themeCartNoteMonitor keyup.themeCartNoteMonitor', function () {
        theme.cartNoteMonitor.postUpdate($(this).val());
      });
    },
    unload: function unload($notes) {
      $notes.off('.themeCartNoteMonitor');
    },
    updateThrottleTimeoutId: -1,
    updateThrottleInterval: 500,
    postUpdate: function postUpdate(val) {
      clearTimeout(theme.cartNoteMonitor.updateThrottleTimeoutId);
      theme.cartNoteMonitor.updateThrottleTimeoutId = setTimeout(function () {
        $.post(theme.routes.cart_url + '/update.js', {
          note: val
        }, function (data) {}, 'json');
      }, theme.cartNoteMonitor.updateThrottleInterval);
    }
  };
  new ( /*#__PURE__*/function (_ccComponent) {
    "use strict";

    _inherits(_class, _ccComponent);

    var _super = _createSuper(_class);

    function _class() {
      _classCallCheck(this, _class);

      return _super.apply(this, arguments);
    }

    _createClass(_class, [{
      key: "init",
      value: function init($container) {
        _get(_getPrototypeOf(_class.prototype), "init", this).call(this, $container); //Emit's an event to indicate a tab is being changed. Also includes the difference in height
        //between the closing and opening tab


        function dispatchTabChangedEvent() {
          var event = new CustomEvent("cc-tab-changed");
          window.dispatchEvent(event);
        }

        $container.on('click', '[data-cc-toggle-panel]', function () {
          var $tabs = $(this).closest('.cc-tabs');
          var tabIndexToShow = $(this).data('cc-toggle-panel');
          var $tabToClose = $tabs.find('.cc-tabs__tab__panel:visible');
          var $tabToOpen = $tabs.find(".cc-tabs__tab .cc-tabs__tab__panel[aria-labelledby=\"product-tab-panel".concat(tabIndexToShow, "\"]"));
          var openAllTabs = $(this).closest('.cc-tabs[data-cc-tab-allow-multi-open="true"]').length;

          if ($tabs.hasClass('cc-tabs--tab-mode')) {
            $tabToClose.attr('hidden', '');
            $tabToOpen.removeAttr('hidden');
            $tabs.find('[role="tab"] [aria-selected="true"]').removeAttr('aria-selected');
            $tabs.find("[data-cc-toggle-panel=\"".concat(tabIndexToShow, "\"]")).attr('aria-selected', 'true');
          } else {
            var accordionSpeed = 300;

            if (!openAllTabs) {
              var tabNeedsClosing = $tabToClose.length;
              var tabNeedsOpening = $tabToOpen.attr('id') !== $tabToClose.attr('id') && $tabToOpen.length;
            } else {
              if ($tabToOpen.is(':visible')) {
                var tabNeedsClosing = true;
                var tabNeedsOpening = false;
                $tabToClose = $tabToOpen;
              } else {
                var tabNeedsClosing = false;
                var tabNeedsOpening = true;
              }
            } // On mobile, all accordions can be open at once


            if ($(window).outerWidth() < 768) {
              if ($tabToOpen.is(':visible')) {
                tabNeedsClosing = true;
                tabNeedsOpening = false;
                $tabToClose = $tabToOpen;
              } else {
                tabNeedsClosing = false;
              }
            }

            if (tabNeedsClosing) {
              $tabToClose.slideUp(accordionSpeed, function () {
                $(this).attr('hidden', '');

                if (!tabNeedsOpening) {
                  dispatchTabChangedEvent();
                }
              });
              $tabToClose.prev().removeAttr('aria-selected');
            }

            if (tabNeedsOpening) {
              $tabToOpen.css('display', 'none').removeAttr('hidden').slideDown(accordionSpeed, dispatchTabChangedEvent);
              $tabToOpen.prev().attr('aria-selected', 'true');
            }
          }

          return false;
        });

        if ($container.hasClass('cc-tabs--tab-mode')) {
          $container.find('.cc-tabs__tab-headers').ccHoverLine();
        }
      }
    }, {
      key: "destroy",
      value: function destroy($container) {
        _get(_getPrototypeOf(_class.prototype), "destroy", this).call(this, $container);

        $container.off('click', '[data-cc-toggle-panel]');
      }
    }]);

    return _class;
  }(ccComponent))('tabs');

  (function ($) {
    $.fn.initAnimateOnScroll = function () {
      if (Waypoint) {
        Waypoint.refreshAll();
      }

      if ($('.cc-animate-enabled').length && $(window).outerWidth() >= 768 || $('.cc-animate-enabled-mobile').length && $(window).outerWidth() < 768) {
        var animationTimeout = 200;

        if (typeof $('.cc-animate-enabled').data('cc-animate-timeout') !== "undefined") {
          animationTimeout = $('.cc-animate-enabled').data('cc-animate-timeout');
        } //Animates all of the children in an element (staggered)


        $('[data-cc-animate-children]:not(.cc-animate-init)').each(function () {
          var animation = $(this).data('cc-animate-children') ? $(this).data('cc-animate-children') : 'cc-fade-in';
          $(this).find('> *').each(function (index) {
            $(this).attr('data-cc-animate', animation).attr('data-cc-animate-delay', (index + 1) / 10 + 's');
          });
          $(this).addClass('cc-animate-init');
        });
        $("[data-cc-animate]:not(.cc-animate-init)").each(function () {
          //Allows you to set the animation delay
          if ($(this).attr('data-cc-animate-delay')) {
            $(this).css('transition-delay', $(this).data('cc-animate-delay'));
          } //Allows you to set the animation duration


          if ($(this).attr('data-cc-animate-duration')) {
            $(this).css('transition-duration', $(this).data('cc-animate-duration'));
          } //Get the animation type if any (e.g. cc-fade-in-up)


          var animation = $(this).data('cc-animate'); //Init the waypoint

          $(this).addClass(animation).addClass('cc-animate-init').waypoint({
            handler: function handler(direction) {
              var $elem = $(this.element);

              if (!$elem.hasClass('cc-animate-complete')) {
                // console.log($elem.attr('class'));
                setTimeout(function () {
                  $elem.addClass('-in').addClass('cc-animate-complete');
                }, animationTimeout);
                setTimeout(function () {
                  //Once the animation is complete (assume 5 seconds), remove the animate attribute
                  //to remove all css
                  $elem.removeAttr("data-cc-animate").css("transition-duration", "").css("transition-delay", "");
                }, 5000);
              }
            },
            offset: $(this).data('cc-animate-offset') ? $(this).data('cc-animate-offset') : '100%'
          });
        });
      }
    };

    $.fn.initAnimateOnScroll();
    $(window).on('debouncedresizewidth', $.fn.initAnimateOnScroll);
    $(document).on('shopify:section:load shopify:section:unload', function () {
      setTimeout($.fn.initAnimateOnScroll, 100);
    });
  })(theme.jQuery);

  var ccPopup = /*#__PURE__*/function () {
    "use strict";

    function ccPopup($container, namespace) {
      _classCallCheck(this, ccPopup);

      this.$container = $container;
      this.namespace = namespace;
      this.cssClasses = {
        visible: 'cc-popup--visible',
        bodyNoScroll: 'cc-popup-no-scroll',
        bodyNoScrollPadRight: 'cc-popup-no-scroll-pad-right'
      };
    }
    /**
     * Open popup on timer / local storage - move focus to input ensure you can tab to submit and close
     * Add the cc-popup--visible class
     * Update aria to visible
     */


    _createClass(ccPopup, [{
      key: "open",
      value: function open(callback) {
        var _this2 = this;

        // Prevent the body from scrolling
        if (this.$container.data('freeze-scroll')) {
          $('body').addClass(this.cssClasses.bodyNoScroll); // Add any padding necessary to the body to compensate for the scrollbar that just disappeared

          var scrollDiv = document.createElement('div');
          scrollDiv.className = 'popup-scrollbar-measure';
          document.body.appendChild(scrollDiv);
          var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
          document.body.removeChild(scrollDiv);

          if (scrollbarWidth > 0) {
            $('body').css('padding-right', scrollbarWidth + 'px').addClass(this.cssClasses.bodyNoScrollPadRight);
          }
        } // Add reveal class


        this.$container.addClass(this.cssClasses.visible); // Track previously focused element

        this.previouslyActiveElement = document.activeElement; // Focus on the close button after the animation in has completed

        setTimeout(function () {
          _this2.$container.find('.cc-popup-close')[0].focus();
        }, 500); // Pressing escape closes the modal

        $(window).on('keydown' + this.namespace, function (event) {
          if (event.keyCode === 27) {
            _this2.close();
          }
        });

        if (callback) {
          callback();
        }
      }
    }, {
      key: "close",

      /**
       * Close popup on click of close button or background - where does the focus go back to?
       * Remove the cc-popup--visible class
       */
      value: function close(callback) {
        var _this3 = this;

        // Remove reveal class
        this.$container.removeClass(this.cssClasses.visible); // Revert focus

        if (this.previouslyActiveElement) {
          $(this.previouslyActiveElement).focus();
        } // Destroy the escape event listener


        $(window).off('keydown' + this.namespace); // Allow the body to scroll and remove any scrollbar-compensating padding

        if (this.$container.data('freeze-scroll')) {
          var transitionDuration = 500;
          var $innerModal = this.$container.find('.cc-popup-modal');

          if ($innerModal.length) {
            transitionDuration = parseFloat(getComputedStyle($innerModal[0])['transitionDuration']);

            if (transitionDuration && transitionDuration > 0) {
              transitionDuration *= 1000;
            }
          }

          setTimeout(function () {
            $('body').removeClass(_this3.cssClasses.bodyNoScroll).removeClass(_this3.cssClasses.bodyNoScrollPadRight).css('padding-right', '0');
          }, transitionDuration);
        }

        if (callback) {
          callback();
        }
      }
    }]);

    return ccPopup;
  }();

  ; // Manage videos

  theme.VideoManager = new function () {
    var _ = this;

    _._permitPlayback = function (container) {
      return !($(container).hasClass('video-container--background') && $(window).outerWidth() < 768);
    }; // Youtube


    _.youtubeVars = {
      incrementor: 0,
      apiReady: false,
      videoData: {},
      toProcessSelector: '.video-container[data-video-type="youtube"]:not(.video--init)'
    };

    _.youtubeApiReady = function () {
      _.youtubeVars.apiReady = true;

      _._loadYoutubeVideos();
    };

    _._loadYoutubeVideos = function (container) {
      if ($(_.youtubeVars.toProcessSelector, container).length) {
        if (_.youtubeVars.apiReady) {
          // play those videos
          $(_.youtubeVars.toProcessSelector, container).each(function () {
            // Don't init background videos on mobile
            if (_._permitPlayback($(this))) {
              $(this).addClass('video--init');
              _.youtubeVars.incrementor++;
              var containerId = 'theme-yt-video-' + _.youtubeVars.incrementor;
              $(this).data('video-container-id', containerId);
              var videoElement = $('<div class="video-container__video-element">').attr('id', containerId).appendTo($('.video-container__video', this));
              var autoplay = $(this).data('video-autoplay');
              var loop = $(this).data('video-loop');
              var player = new YT.Player(containerId, {
                height: '360',
                width: '640',
                videoId: $(this).data('video-id'),
                playerVars: {
                  iv_load_policy: 3,
                  modestbranding: 1,
                  autoplay: autoplay ? 1 : 0,
                  loop: loop ? 1 : 0,
                  playlist: $(this).data('video-id'),
                  rel: 0,
                  showinfo: 0
                },
                events: {
                  onReady: _._onYoutubePlayerReady.bind({
                    autoplay: autoplay,
                    loop: loop,
                    $container: $(this)
                  }),
                  onStateChange: _._onYoutubePlayerStateChange.bind({
                    autoplay: autoplay,
                    loop: loop,
                    $container: $(this)
                  })
                }
              });
              _.youtubeVars.videoData[containerId] = {
                id: containerId,
                container: this,
                videoElement: videoElement,
                player: player
              };
            }
          });
        } else {
          // load api
          theme.loadScriptOnce('https://www.youtube.com/iframe_api');
        }
      }
    };

    _._onYoutubePlayerReady = function (event) {
      event.target.setPlaybackQuality('hd1080');

      if (this.autoplay) {
        event.target.mute();
        event.target.playVideo();
      }

      _._initBackgroundVideo(this.$container);
    };

    _._onYoutubePlayerStateChange = function (event) {
      if (event.data == YT.PlayerState.PLAYING) {
        this.$container.addClass('video--play-started');

        if (this.autoplay) {
          event.target.mute();
        }

        if (this.loop) {
          // 4 times a second, check if we're in the final second of the video. If so, loop it for a more seamless loop
          var finalSecond = event.target.getDuration() - 1;

          if (finalSecond > 2) {
            var loopTheVideo = function loopTheVideo() {
              if (event.target.getCurrentTime() > finalSecond) {
                event.target.seekTo(0);
              }

              setTimeout(loopTheVideo, 250);
            };

            loopTheVideo();
          }
        }
      }
    };

    _._unloadYoutubeVideos = function (container) {
      for (var dataKey in _.youtubeVars.videoData) {
        var data = _.youtubeVars.videoData[dataKey];

        if ($(container).find(data.container).length) {
          data.player.destroy();
          delete _.youtubeVars.videoData[dataKey];
          return;
        }
      }
    }; // Vimeo


    _.vimeoVars = {
      incrementor: 0,
      apiReady: false,
      videoData: {},
      toProcessSelector: '.video-container[data-video-type="vimeo"]:not(.video--init)'
    };

    _.vimeoApiReady = function () {
      _.vimeoVars.apiReady = true;

      _._loadVimeoVideos();
    };

    _._loadVimeoVideos = function (container) {
      if ($(_.vimeoVars.toProcessSelector, container).length) {
        if (_.vimeoVars.apiReady) {
          // play those videos
          $(_.vimeoVars.toProcessSelector, container).each(function () {
            // Don't init background videos on mobile
            if (_._permitPlayback($(this))) {
              $(this).addClass('video--init');
              _.vimeoVars.incrementor++;
              var $this = $(this);
              var containerId = 'theme-vi-video-' + _.vimeoVars.incrementor;
              $(this).data('video-container-id', containerId);
              var videoElement = $('<div class="video-container__video-element">').attr('id', containerId).appendTo($('.video-container__video', this));
              var autoplay = !!$(this).data('video-autoplay');
              var player = new Vimeo.Player(containerId, {
                url: $(this).data('video-url'),
                width: 640,
                loop: $(this).data('video-autoplay'),
                autoplay: autoplay
              });
              player.on('playing', function () {
                $(this).addClass('video--play-started');
              }.bind(this));
              player.ready().then(function () {
                if (autoplay) {
                  player.setVolume(0);
                  player.play();
                }

                if (player.element && player.element.width && player.element.height) {
                  var ratio = parseInt(player.element.height) / parseInt(player.element.width);
                  $this.find('.video-container__video').css('padding-bottom', ratio * 100 + '%');
                }

                _._initBackgroundVideo($this);
              });
              _.vimeoVars.videoData[containerId] = {
                id: containerId,
                container: this,
                videoElement: videoElement,
                player: player,
                autoPlay: autoplay
              };
            }
          });
        } else {
          // load api
          if (window.define) {
            // workaround for third parties using RequireJS
            theme.loadScriptOnce('https://player.vimeo.com/api/player.js', function () {
              _.vimeoVars.apiReady = true;

              _._loadVimeoVideos();

              window.define = window.tempDefine;
            }, function () {
              window.tempDefine = window.define;
              window.define = null;
            });
          } else {
            theme.loadScriptOnce('https://player.vimeo.com/api/player.js', function () {
              _.vimeoVars.apiReady = true;

              _._loadVimeoVideos();
            });
          }
        }
      }
    };

    _._unloadVimeoVideos = function (container) {
      for (var dataKey in _.vimeoVars.videoData) {
        var data = _.vimeoVars.videoData[dataKey];

        if ($(container).find(data.container).length) {
          data.player.unload();
          delete _.vimeoVars.videoData[dataKey];
          return;
        }
      }
    }; // Init third party apis - Youtube and Vimeo


    _._loadThirdPartyApis = function (container) {
      //Don't init youtube or vimeo background videos on mobile
      if (_._permitPlayback($('.video-container', container))) {
        _._loadYoutubeVideos(container);

        _._loadVimeoVideos(container);
      }
    }; // Mp4


    _.mp4Vars = {
      incrementor: 0,
      videoData: {},
      toProcessSelector: '.video-container[data-video-type="mp4"]:not(.video--init)'
    };

    _._loadMp4Videos = function (container) {
      if ($(_.mp4Vars.toProcessSelector, container).length) {
        // play those videos
        $(_.mp4Vars.toProcessSelector, container).addClass('video--init').each(function () {
          _.mp4Vars.incrementor++;
          var $this = $(this);
          var containerId = 'theme-mp-video-' + _.mp4Vars.incrementor;
          $(this).data('video-container-id', containerId);
          var videoElement = $('<div class="video-container__video-element">').attr('id', containerId).appendTo($('.video-container__video', this));
          var $video = $('<video playsinline>');

          if ($(this).data('video-loop')) {
            $video.attr('loop', 'loop');
          }

          if ($(this).data('video-autoplay')) {
            $video.attr({
              autoplay: 'autoplay',
              muted: 'muted'
            });
            $video[0].muted = true; // required by Chrome - ignores attribute

            $video.one('loadeddata', function () {
              this.play();
            });
          }

          $video.on('playing', function () {
            $(this).addClass('video--play-started');
          }.bind(this));
          $video.attr('src', $(this).data('video-url')).appendTo(videoElement);
        });
      }
    };

    _._unloadMp4Videos = function (container) {}; // background video placement for iframes


    _._initBackgroundVideo = function ($container) {
      if ($container.hasClass('video-container--background') && $container.find('.video-container__video iframe').length) {
        var assessBackgroundVideo = function assessBackgroundVideo() {
          var $container = this,
              cw = $container.width(),
              ch = $container.height(),
              cr = cw / ch,
              $frame = $('.video-container__video iframe', this),
              vr = $frame.attr('width') / $frame.attr('height'),
              $pan = $('.video-container__video', this),
              vCrop = 75; // pushes video outside container to hide controls

          if (cr > vr) {
            var vh = cw / vr + vCrop * 2;
            $pan.css({
              marginTop: (ch - vh) / 2 - vCrop,
              marginLeft: '',
              height: vh + vCrop * 2,
              width: ''
            });
          } else {
            var vw = cw * vr + vCrop * 2 * vr;
            $pan.css({
              marginTop: -vCrop,
              marginLeft: (cw - vw) / 2,
              height: ch + vCrop * 2,
              width: vw
            });
          }
        };

        assessBackgroundVideo.bind($container)();
        $(window).on('debouncedresize.' + $container.data('video-container-id'), assessBackgroundVideo.bind($container));
      }
    }; // Compatibility with Sections


    this.onSectionLoad = function (container) {
      // url only - infer type
      $('.video-container[data-video-url]:not([data-video-type])').each(function () {
        var url = $(this).data('video-url');

        if (url.indexOf('.mp4') > -1) {
          $(this).attr('data-video-type', 'mp4');
        }

        if (url.indexOf('vimeo.com') > -1) {
          $(this).attr('data-video-type', 'vimeo');
          $(this).attr('data-video-id', url.split('?')[0].split('/').pop());
        }

        if (url.indexOf('youtu.be') > -1 || url.indexOf('youtube.com') > -1) {
          $(this).attr('data-video-type', 'youtube');

          if (url.indexOf('v=') > -1) {
            $(this).attr('data-video-id', url.split('v=').pop().split('&')[0]);
          } else {
            $(this).attr('data-video-id', url.split('?')[0].split('/').pop());
          }
        }
      });

      _._loadThirdPartyApis(container);

      _._loadMp4Videos(container);

      $(window).on('debouncedresize.video-manager-resize', function () {
        _._loadThirdPartyApis(container);
      }); // play button

      $('.video-container__play', container).on('click', function (evt) {
        evt.preventDefault();
        var $container = $(this).closest('.video-container'); // reveal

        $container.addClass('video-container--playing'); // broadcast a play event on the section container

        $(container).trigger("cc:video:play"); // play

        var id = $container.data('video-container-id');

        if (id.indexOf('theme-yt-video') === 0) {
          _.youtubeVars.videoData[id].player.playVideo();
        } else {
          _.vimeoVars.videoData[id].player.play();
        }
      }); // modal close button

      $('.video-container__stop', container).on('click', function (evt) {
        evt.preventDefault();
        var $container = $(this).closest('.video-container'); // hide

        $container.removeClass('video-container--playing'); // broadcast a stop event on the section container

        $(container).trigger("cc:video:stop"); // play

        var id = $container.data('video-container-id');

        if (id.indexOf('theme-yt-video') === 0) {
          _.youtubeVars.videoData[id].player.stopVideo();
        } else {
          _.vimeoVars.videoData[id].player.pause();

          _.vimeoVars.videoData[id].player.setCurrentTime(0);
        }
      });
    };

    this.onSectionUnload = function (container) {
      $('.video-container__play, .video-container__stop', container).off('click');
      $(window).off('.' + $('.video-container').data('video-container-id'));
      $(window).off('debouncedresize.video-manager-resize');

      _._unloadYoutubeVideos(container);

      _._unloadVimeoVideos(container);

      _._unloadMp4Videos(container);

      $(container).trigger("cc:video:stop");
    };
  }(); // Youtube API callback

  window.onYouTubeIframeAPIReady = function () {
    theme.VideoManager.youtubeApiReady();
  }; // Register the section


  cc.sections.push({
    name: 'video',
    section: theme.VideoManager
  });
  theme.MapSection = new function () {
    var _ = this;

    _.config = {
      zoom: 14,
      styles: {
        "default": [],
        silver: [{
          "elementType": "geometry",
          "stylers": [{
            "color": "#f5f5f5"
          }]
        }, {
          "elementType": "labels.icon",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#616161"
          }]
        }, {
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#f5f5f5"
          }]
        }, {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#bdbdbd"
          }]
        }, {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [{
            "color": "#eeeeee"
          }]
        }, {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#757575"
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{
            "color": "#e5e5e5"
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#9e9e9e"
          }]
        }, {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [{
            "color": "#ffffff"
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#757575"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [{
            "color": "#dadada"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#616161"
          }]
        }, {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#9e9e9e"
          }]
        }, {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [{
            "color": "#e5e5e5"
          }]
        }, {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [{
            "color": "#eeeeee"
          }]
        }, {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#c9c9c9"
          }]
        }, {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#9e9e9e"
          }]
        }],
        retro: [{
          "elementType": "geometry",
          "stylers": [{
            "color": "#ebe3cd"
          }]
        }, {
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#523735"
          }]
        }, {
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#f5f1e6"
          }]
        }, {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#c9b2a6"
          }]
        }, {
          "featureType": "administrative.land_parcel",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#dcd2be"
          }]
        }, {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#ae9e90"
          }]
        }, {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [{
            "color": "#dfd2ae"
          }]
        }, {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [{
            "color": "#dfd2ae"
          }]
        }, {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#93817c"
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#a5b076"
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#447530"
          }]
        }, {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [{
            "color": "#f5f1e6"
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [{
            "color": "#fdfcf8"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [{
            "color": "#f8c967"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#e9bc62"
          }]
        }, {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry",
          "stylers": [{
            "color": "#e98d58"
          }]
        }, {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#db8555"
          }]
        }, {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#806b63"
          }]
        }, {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [{
            "color": "#dfd2ae"
          }]
        }, {
          "featureType": "transit.line",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#8f7d77"
          }]
        }, {
          "featureType": "transit.line",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#ebe3cd"
          }]
        }, {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [{
            "color": "#dfd2ae"
          }]
        }, {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#b9d3c2"
          }]
        }, {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#92998d"
          }]
        }],
        dark: [{
          "elementType": "geometry",
          "stylers": [{
            "color": "#212121"
          }]
        }, {
          "elementType": "labels.icon",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#757575"
          }]
        }, {
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#212121"
          }]
        }, {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [{
            "color": "#757575"
          }]
        }, {
          "featureType": "administrative.country",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#9e9e9e"
          }]
        }, {
          "featureType": "administrative.land_parcel",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#bdbdbd"
          }]
        }, {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#757575"
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{
            "color": "#181818"
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#616161"
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#1b1b1b"
          }]
        }, {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#2c2c2c"
          }]
        }, {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#8a8a8a"
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [{
            "color": "#373737"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [{
            "color": "#3c3c3c"
          }]
        }, {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry",
          "stylers": [{
            "color": "#4e4e4e"
          }]
        }, {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#616161"
          }]
        }, {
          "featureType": "transit",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#757575"
          }]
        }, {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#000000"
          }]
        }, {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#3d3d3d"
          }]
        }],
        night: [{
          "elementType": "geometry",
          "stylers": [{
            "color": "#242f3e"
          }]
        }, {
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#746855"
          }]
        }, {
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#242f3e"
          }]
        }, {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#d59563"
          }]
        }, {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#d59563"
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{
            "color": "#263c3f"
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#6b9a76"
          }]
        }, {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [{
            "color": "#38414e"
          }]
        }, {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#212a37"
          }]
        }, {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#9ca5b3"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [{
            "color": "#746855"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#1f2835"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#f3d19c"
          }]
        }, {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [{
            "color": "#2f3948"
          }]
        }, {
          "featureType": "transit.station",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#d59563"
          }]
        }, {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#17263c"
          }]
        }, {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#515c6d"
          }]
        }, {
          "featureType": "water",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#17263c"
          }]
        }],
        aubergine: [{
          "elementType": "geometry",
          "stylers": [{
            "color": "#1d2c4d"
          }]
        }, {
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#8ec3b9"
          }]
        }, {
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#1a3646"
          }]
        }, {
          "featureType": "administrative.country",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#4b6878"
          }]
        }, {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#64779e"
          }]
        }, {
          "featureType": "administrative.province",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#4b6878"
          }]
        }, {
          "featureType": "landscape.man_made",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#334e87"
          }]
        }, {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [{
            "color": "#023e58"
          }]
        }, {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [{
            "color": "#283d6a"
          }]
        }, {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#6f9ba5"
          }]
        }, {
          "featureType": "poi",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#1d2c4d"
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#023e58"
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#3C7680"
          }]
        }, {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [{
            "color": "#304a7d"
          }]
        }, {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#98a5be"
          }]
        }, {
          "featureType": "road",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#1d2c4d"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [{
            "color": "#2c6675"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#255763"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#b0d5ce"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#023e58"
          }]
        }, {
          "featureType": "transit",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#98a5be"
          }]
        }, {
          "featureType": "transit",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#1d2c4d"
          }]
        }, {
          "featureType": "transit.line",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#283d6a"
          }]
        }, {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [{
            "color": "#3a4762"
          }]
        }, {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#0e1626"
          }]
        }, {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#4e6d70"
          }]
        }]
      }
    };
    _.apiStatus = null;

    this.geolocate = function ($map) {
      var deferred = $.Deferred();
      var geocoder = new google.maps.Geocoder();
      var address = $map.data('address-setting');
      geocoder.geocode({
        address: address
      }, function (results, status) {
        if (status !== google.maps.GeocoderStatus.OK) {
          deferred.reject(status);
        }

        deferred.resolve(results);
      });
      return deferred;
    };

    this.createMap = function (container) {
      var $map = $('.map-section__map-container', container);
      return _.geolocate($map).then(function (results) {
        var mapOptions = {
          zoom: _.config.zoom,
          styles: _.config.styles[$(container).data('map-style')],
          center: results[0].geometry.location,
          scrollwheel: false,
          disableDoubleClickZoom: true,
          disableDefaultUI: true,
          zoomControl: true
        };
        _.map = new google.maps.Map($map[0], mapOptions);
        _.center = _.map.getCenter();
        var marker = new google.maps.Marker({
          map: _.map,
          position: _.center,
          clickable: false
        });
        google.maps.event.addDomListener(window, 'resize', function () {
          google.maps.event.trigger(_.map, 'resize');

          _.map.setCenter(_.center);
        });
      }.bind(this)).fail(function () {
        var errorMessage;

        switch (status) {
          case 'ZERO_RESULTS':
            errorMessage = theme.strings.addressNoResults;
            break;

          case 'OVER_QUERY_LIMIT':
            errorMessage = theme.strings.addressQueryLimit;
            break;

          default:
            errorMessage = theme.strings.addressError;
            break;
        } // Only show error in the theme editor


        if (Shopify.designMode) {
          var $mapContainer = $map.parents('.map-section');
          $mapContainer.addClass('page-width map-section--load-error');
          $mapContainer.find('.map-section__wrapper').html('<div class="errors text-center">' + errorMessage + '</div>');
        }
      });
    };

    this.onSectionLoad = function (target) {
      var $container = $(target); // Global function called by Google on auth errors

      window.gm_authFailure = function () {
        if (!Shopify.designMode) return;
        $container.addClass('page-width map-section--load-error');
        $container.find('.map-section__wrapper').html('<div class="errors text-center">' + theme.strings.authError + '</div>');
      }; // create maps


      var key = $container.data('api-key');

      if (typeof key !== 'string' || key === '') {
        return;
      } // load map


      theme.loadScriptOnce('https://maps.googleapis.com/maps/api/js?key=' + key, function () {
        _.createMap($container);
      });
    };

    this.onSectionUnload = function (target) {
      if (typeof window.google !== 'undefined' && typeof google.maps !== 'undefined') {
        google.maps.event.clearListeners(this.map, 'resize');
      }
    };
  }(); // Register the section

  cc.sections.push({
    name: 'map',
    section: theme.MapSection
  }); // A section that contains other sections, e.g. story page

  theme.NestedSectionsSection = new function () {
    this.onSectionLoad = function (container) {
      // load child sections
      $('[data-nested-section-type]', container).each(function () {
        var type = $(this).attr('data-nested-section-type');
        var section = null;

        for (var i = 0; i < theme.Sections._sections.length; i++) {
          if (theme.Sections._sections[i].type == type) {
            section = theme.Sections._sections[i].section;
          }
        }

        if (section) {
          var instance = {
            target: this,
            section: section,
            $shopifySectionContainer: $(this).closest('.shopify-section'),
            thisContext: {}
          };

          theme.Sections._instances.push(instance);

          $(this).data('themeSectionInstance', instance);
          section.onSectionLoad.bind(instance.thisContext)(this);
        }
      });
    };

    this.onSectionUnload = function (container) {
      // unload child sections
      $('[data-nested-section-type]', container).each(function () {
        theme.Sections.sectionUnload.bind($(this).data('themeSectionInstance').thisContext)(this);
      });
    };

    this.onBlockSelect = function (target) {
      // scroll to block
      $(window).scrollTop($(target).offset().top - 100);
    };
  }(); // Register the section

  cc.sections.push({
    name: 'nested-sections',
    section: theme.NestedSectionsSection
  });
  /**
  * Popup Section Script
  * ------------------------------------------------------------------------------
  *
  * @namespace Popup
  */

  theme.Popup = new function () {
    /**
     * Popup section constructor. Runs on page load as well as Theme Editor
     * `section:load` events.
     * @param {string} container - selector for the section container DOM element
     */
    var dismissedStorageKey = 'cc-theme-popup-dismissed';

    this.onSectionLoad = function (container) {
      var _this4 = this;

      this.namespace = theme.namespaceFromSection(container);
      this.$container = $(container);
      this.popup = new ccPopup(this.$container, this.namespace);
      var dismissForDays = this.$container.data('dismiss-for-days'),
          delaySeconds = this.$container.data('delay-seconds'),
          showPopup = true,
          testMode = this.$container.data('test-mode'),
          lastDismissed = window.localStorage.getItem(dismissedStorageKey); // Should we show it during this page view?
      // Check when it was last dismissed

      if (lastDismissed) {
        var dismissedDaysAgo = (new Date().getTime() - lastDismissed) / (1000 * 60 * 60 * 24);

        if (dismissedDaysAgo < dismissForDays) {
          showPopup = false;
        }
      } // Check for error or success messages


      if (this.$container.find('.cc-popup-form__response').length) {
        showPopup = true;
        delaySeconds = 1; // If success, set as dismissed

        if (this.$container.find('.cc-popup-form__response--success').length) {
          this.functions.popupSetAsDismissed.call(this);
        }
      } // Prevent popup on Shopify robot challenge page


      if (/^\/[^\/]{2,3}\/challenge$/.test(window.location.pathname)) {
        showPopup = false;
      } // Show popup, if appropriate


      if (showPopup || testMode) {
        setTimeout(function () {
          _this4.popup.open();
        }, delaySeconds * 1000);
      } // Click on close button or modal background


      this.$container.on('click' + this.namespace, '.cc-popup-close, .cc-popup-background', function () {
        _this4.popup.close(function () {
          _this4.functions.popupSetAsDismissed.call(_this4);
        });
      });
    };

    this.onSectionSelect = function () {
      this.popup.open();
    };

    this.functions = {
      /**
       * Use localStorage to set as dismissed
       */
      popupSetAsDismissed: function popupSetAsDismissed() {
        window.localStorage.setItem(dismissedStorageKey, new Date().getTime());
      }
    };
    /**
     * Event callback for Theme Editor `section:unload` event
     */

    this.onSectionUnload = function () {
      this.$container.off(this.namespace);
    };
  }(); // Register section

  cc.sections.push({
    name: 'newsletter-popup',
    section: theme.Popup
  });
  /**
   * StoreAvailability Section Script
   * ------------------------------------------------------------------------------
   *
   * @namespace StoreAvailability
   */

  theme.StoreAvailability = function (container) {
    var loadingClass = 'store-availability-loading';
    var initClass = 'store-availability-initialized';
    var storageKey = 'cc-location';

    this.onSectionLoad = function (container) {
      var _this5 = this;

      this.namespace = theme.namespaceFromSection(container);
      this.$container = $(container);
      this.productId = this.$container.data('store-availability-container');
      this.sectionUrl = this.$container.data('section-url');
      this.$modal;
      var firstRun = true; // Handle when a variant is selected

      $(window).on("cc-variant-updated".concat(this.namespace).concat(this.productId), function (e, args) {
        if (args.product.id === _this5.productId) {
          _this5.functions.updateContent.bind(_this5)(args.variant.id, args.product.title, firstRun, _this5.$container.data('has-only-default-variant'), typeof args.variant.available !== "undefined");

          firstRun = false;
        }
      }); // Handle single variant products

      if (this.$container.data('single-variant-id')) {
        this.functions.updateContent.bind(this)(this.$container.data('single-variant-id'), this.$container.data('single-variant-product-title'), firstRun, this.$container.data('has-only-default-variant'), this.$container.data('single-variant-product-available'));
        firstRun = false;
      }
    };

    this.onSectionUnload = function () {
      $(window).off("cc-variant-updated".concat(this.namespace).concat(this.productId));
      this.$container.off('click');

      if (this.$modal) {
        this.$modal.off('click');
      }
    };

    this.functions = {
      // Returns the users location data (if allowed)
      getUserLocation: function getUserLocation() {
        return new Promise(function (resolve, reject) {
          var storedCoords;

          if (sessionStorage[storageKey]) {
            storedCoords = JSON.parse(sessionStorage[storageKey]);
          }

          if (storedCoords) {
            resolve(storedCoords);
          } else {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function (position) {
                var coords = {
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude
                }; //Set the localization api

                fetch('/localization.json', {
                  method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(coords)
                }); //Write to a session storage

                sessionStorage[storageKey] = JSON.stringify(coords);
                resolve(coords);
              }, function () {
                resolve(false);
              }, {
                maximumAge: 3600000,
                // 1 hour
                timeout: 5000
              });
            } else {
              resolve(false);
            }
          }
        });
      },
      // Requests the available stores and calls the callback
      getAvailableStores: function getAvailableStores(variantId, cb) {
        return $.get(this.sectionUrl.replace('VARIANT_ID', variantId), cb);
      },
      // Haversine Distance
      // The haversine formula is an equation giving great-circle distances between
      // two points on a sphere from their longitudes and latitudes
      calculateDistance: function calculateDistance(coords1, coords2, unitSystem) {
        var dtor = Math.PI / 180;
        var radius = unitSystem === 'metric' ? 6378.14 : 3959;
        var rlat1 = coords1.latitude * dtor;
        var rlong1 = coords1.longitude * dtor;
        var rlat2 = coords2.latitude * dtor;
        var rlong2 = coords2.longitude * dtor;
        var dlon = rlong1 - rlong2;
        var dlat = rlat1 - rlat2;
        var a = Math.pow(Math.sin(dlat / 2), 2) + Math.cos(rlat1) * Math.cos(rlat2) * Math.pow(Math.sin(dlon / 2), 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return radius * c;
      },
      // Updates the existing modal pickup with locations with distances from the user
      updateLocationDistances: function updateLocationDistances(coords) {
        var unitSystem = this.$modal.find('[data-unit-system]').data('unit-system');
        var self = this;
        this.$modal.find('[data-distance="false"]').each(function () {
          var _this6 = this;

          var thisCoords = {
            latitude: parseFloat($(this).data('latitude')),
            longitude: parseFloat($(this).data('longitude'))
          };

          if (thisCoords.latitude && thisCoords.longitude) {
            var distance = self.functions.calculateDistance(coords, thisCoords, unitSystem).toFixed(1);
            $(this).html(distance); //Timeout to trigger animation

            setTimeout(function () {
              $(_this6).closest('.store-availability-list__location__distance').addClass('-in');
            }, 0);
          }

          $(this).attr('data-distance', 'true');
        });
      },
      // Requests the available stores and updates the page with info below Add to Basket, and append the modal to the page
      updateContent: function updateContent(variantId, productTitle, firstRun, isSingleDefaultVariant, isVariantAvailable) {
        var _this7 = this;

        this.$container.off('click', '[data-store-availability-modal-open]');
        this.$container.off('click' + this.namespace, '.cc-popup-close, .cc-popup-background');
        $('.store-availabilities-modal').remove();

        if (firstRun) {
          this.$container.hide();
        } else if (!isVariantAvailable) {
          //If the variant is Unavailable (not the same as Out of Stock) - hide the store pickup completely
          this.$container.addClass(loadingClass).addClass(initClass);
          this.$container.css('height', '0px');
        } else {
          this.$container.addClass(loadingClass).addClass(initClass);
          this.$container.css('height', this.$container.outerHeight() > 0 ? this.$container.outerHeight() + 'px' : 'auto');
        }

        if (isVariantAvailable) {
          this.functions.getAvailableStores.call(this, variantId, function (response) {
            if (response.trim().length > 0 && !response.includes('NO_PICKUP')) {
              _this7.$container.html(response);

              _this7.$container.html(_this7.$container.children().first().html()); // editor bug workaround


              _this7.$container.find('[data-store-availability-modal-product-title]').html(productTitle);

              if (isSingleDefaultVariant) {
                _this7.$container.find('.store-availabilities-modal__variant-title').remove();
              }

              _this7.$container.find('.cc-popup').appendTo('body');

              _this7.$modal = $('body').find('.store-availabilities-modal');
              var popup = new ccPopup(_this7.$modal, _this7.namespace);

              _this7.$container.on('click', '[data-store-availability-modal-open]', function () {
                popup.open(); //When the modal is opened, try and get the users location

                _this7.functions.getUserLocation().then(function (coords) {
                  if (coords && _this7.$modal.find('[data-distance="false"]').length) {
                    //Re-retrieve the available stores location modal contents
                    _this7.functions.getAvailableStores.call(_this7, variantId, function (response) {
                      _this7.$modal.find('.store-availabilities-list').html($(response).find('.store-availabilities-list').html());

                      _this7.functions.updateLocationDistances.bind(_this7)(coords);
                    });
                  }
                });

                return false;
              });

              _this7.$modal.on('click' + _this7.namespace, '.cc-popup-close, .cc-popup-background', function () {
                popup.close();
              });

              if (firstRun) {
                _this7.$container.slideDown(300);
              } else {
                _this7.$container.removeClass(loadingClass);

                var newHeight = _this7.$container.find('.store-availability-container').outerHeight();

                _this7.$container.css('height', newHeight > 0 ? newHeight + 'px' : 'auto');
              }
            }
          });
        }
      }
    }; // Initialise the section when it's instantiated

    this.onSectionLoad(container);
  }; // Register section


  cc.sections.push({
    name: 'store-availability',
    section: theme.StoreAvailability
  }); // ensure root_url ends in a slash

  if (!/\/$/.test(theme.routes.root_url)) theme.routes.root_url += '/';
  /*================ General Barry Bits ================*/

  theme.icons = {
    left: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>',
    right: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>',
    close: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
    chevronLightLeft: '<svg fill="#000000" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 14.51,6.51 14,6 8,12 14,18 14.51,17.49 9.03,12 Z"></path></svg>',
    chevronLightRight: '<svg fill="#000000" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 10,6 9.49,6.51 14.97,12 9.49,17.49 10,18 16,12 Z"></path></svg>',
    chevronDown: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/><path d="M0-.75h24v24H0z" fill="none"/></svg>',
    tick: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>',
    add: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
    loading: '<svg xmlns="http://www.w3.org/2000/svg" style="margin: auto; background: transparent; display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" fill="none" stroke="currentColor" stroke-width="5" r="35" stroke-dasharray="164.93361431346415 56.97787143782138" transform="rotate(263.279 50 50)"><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform></circle></svg>',
    chevronRight: '<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0-.25H24v24H0Z" transform="translate(0 0.25)" style="fill:none"></path><polyline points="10 17.83 15.4 12.43 10 7.03" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:8;stroke-width:3px"></polyline></svg>',
    chevronLeft: '<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0-.25H24v24H0Z" transform="translate(0 0.25)" style="fill:none"/> <polyline points="14.4 7.03 9 12.43 14.4 17.83" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:8;stroke-width:3px"/></svg>'
  };
  theme.swipers = {};
  theme.productData = {};
  theme.viewport = {
    isXs: function isXs() {
      return $(window).outerWidth() < 768;
    },
    isSm: function isSm() {
      return $(window).outerWidth() >= 768;
    },
    isMd: function isMd() {
      return $(window).outerWidth() >= 992;
    },
    scrollTo: function scrollTo($elem) {
      var scrollTop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
      var speed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
      var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

      if ($elem && typeof $elem === 'string') {
        $elem = $($elem);
      }

      if (scrollTop === -1 && $elem && $elem.length) {
        scrollTop = $elem.offset().top - theme.Nav().bar.height() - offset;
      }

      $('html,body').animate({
        scrollTop: scrollTop
      }, speed);
    } // ,
    // isElementInView: (el) => {
    //   // Special bonus for those using jQuery
    //   if (typeof jQuery === "function" && el instanceof jQuery) {
    //     el = el[0];
    //   }
    //
    //   var rect = el.getBoundingClientRect();
    //
    //   return (
    //     rect.top >= 0 &&
    //     rect.left >= 0 &&
    //     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    //   );
    // },

  };
  theme.device = {
    isTouch: function isTouch() {
      try {
        document.createEvent("TouchEvent");
        return true;
      } catch (e) {
        return false;
      }
    }
  };
  /*================ Components ================*/

  theme.Nav = function () {
    var $navBar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('#site-control');
    return {
      bar: {
        //Actions
        turnOpaque: function turnOpaque(_turnOpaque) {
          if (_turnOpaque) {
            $navBar.addClass('nav-opaque');
          } else {
            $navBar.removeClass('nav-opaque');
          }
        },
        hide: function hide(_hide) {
          if (_hide) {
            $navBar.addClass('nav-hidden');
          } else {
            $navBar.removeClass('nav-hidden');
          }
        },
        fadeOut: function fadeOut(_fadeOut) {
          if (_fadeOut) {
            $navBar.addClass('nav-fade-out');
          } else {
            $navBar.removeClass('nav-fade-out');
          }
        },
        hideAnnouncement: function hideAnnouncement(hide) {
          if (hide) {
            $navBar.addClass('announcement-hidden');
          } else {
            $navBar.removeClass('announcement-hidden');
          }
        },
        //Note: Don't reference $navBar below as the object may have changed (if in theme editor)
        //Settings
        hasOpaqueSetting: function hasOpaqueSetting() {
          return $('#site-control').data('opacity').includes('opaque');
        },
        hasStickySetting: function hasStickySetting() {
          return $('#site-control').data('positioning') === "sticky";
        },
        isInline: function isInline() {
          return $('#site-control').data('positioning') === "inline";
        },
        getPositionSetting: function getPositionSetting() {
          return $('#site-control').data('positioning');
        },
        getOpacitySetting: function getOpacitySetting() {
          return $('#site-control').data('opacity');
        },
        //Current state
        isCurrentlyOpaque: function isCurrentlyOpaque() {
          return $('#site-control').hasClass('nav-opaque');
        },
        isAnnouncementBar: function isAnnouncementBar() {
          return $('#site-control').find('.cc-announcement__inner').length === 1;
        },
        heightExcludingAnnouncementBar: function heightExcludingAnnouncementBar() {
          return $('#site-control').find('.site-control__inner').outerHeight();
        },
        heightOfAnnouncementBar: function heightOfAnnouncementBar() {
          return $('#site-control').find('.announcement').outerHeight();
        },
        height: function height() {
          //Returns the height including the announcement bar
          return $('#site-control').outerHeight();
        }
      }
    };
  };

  theme.ProductMediaGallery = function ($gallery, $thumbs, isFeaturedProduct) {
    var _this = this;

    var currentMedia;
    var initialisedMedia = {};
    var $viewInSpaceButton = $gallery.find('.view-in-space');
    var $swiperCont = $gallery.find('.swiper-container');
    var swiper;
    var preventSizeRedraw = false;
    var nav = theme.Nav();

    this.Image = function ($elem, autoplay) {
      this.show = function () {
        $elem.addClass('product-media--activated');
        $elem.show();
      };

      this.play = function () {
        $gallery.find('.product-media--current').removeClass('product-media--current');
        $elem.addClass('product-media--current');
      };

      this.destroy = function () {};

      this.pause = function () {
        $elem.removeClass('product-media--activated');
      };

      this.hide = function () {
        $elem.hide();
      }; //Init the image


      this.show();
    };

    this.Video = function ($elem, autoplay) {
      var _video = this;

      var playerObj = {
        play: function play() {},
        pause: function pause() {},
        destroy: function destroy() {}
      };
      var videoElement = $elem.find('video')[0];

      this.show = function () {
        $elem.addClass('product-media--activated');
        $elem.show();

        _this.slideshowTabFix();
      };

      this.play = function () {
        $gallery.find('.product-media--current').removeClass('product-media--current');
        $elem.addClass('product-media--current');

        _video.show();

        playerObj.play();
      };

      this.pause = function () {
        playerObj.pause();
        $elem.removeClass('product-media--activated');
      };

      this.hide = function () {
        playerObj.pause();
        $elem.hide();
      };

      this.destroy = function () {
        playerObj.destroy();
        $(videoElement).off('playing', handlePlay);
        $(document).off('fullscreenchange', delayedSwiperResize);
      }; //Init the video


      theme.loadStyleOnce('https://cdn.shopify.com/shopifycloud/shopify-plyr/v1.0/shopify-plyr.css'); // set up a controller for Plyr video

      window.Shopify.loadFeatures([{
        name: 'video-ui',
        version: '1.0',
        onLoad: function () {
          playerObj = {
            playerType: 'html5',
            element: videoElement,
            plyr: new Shopify.Plyr(videoElement, {
              controls: ['play', 'progress', 'mute', 'volume', 'play-large', 'fullscreen'],
              loop: {
                active: $elem.data('enable-video-looping')
              },
              autoplay: theme.viewport.isSm() && autoplay,
              hideControlsOnPause: true,
              iconUrl: '//cdn.shopify.com/shopifycloud/shopify-plyr/v1.0/shopify-plyr.svg',
              tooltips: {
                controls: false,
                seek: true
              }
            }),
            play: function play() {
              this.plyr.play();
            },
            pause: function pause() {
              this.plyr.pause();
            },
            destroy: function destroy() {
              this.plyr.destroy();
            }
          };
          $elem.addClass('product-media--video-loaded'); // Disable swipe on the model

          $elem.find('.plyr__controls').addClass('swiper-no-swiping');
          initialisedMedia[$elem.data('media-id')] = _video;
        }.bind(this)
      }]);

      function handlePlay() {
        _this.pauseAllMedia($elem.data('media-id'));
      }

      $(videoElement).on('playing', handlePlay);

      function delayedSwiperResize(event) {
        preventSizeRedraw = true; // If not fullscreen

        if (window.innerHeight !== screen.height) {
          setTimeout(function () {
            preventSizeRedraw = true;
          }, 200);
        }
      } //When fullscreen ends, trigger a delayed resize to ensure swiper resets correctly


      $(document).on('fullscreenchange', delayedSwiperResize);

      _video.show();
    };

    this.ExternalVideo = function ($elem, autoplay) {
      var isPlaying = false;

      var _video = this;

      var playerObj = {
        play: function play() {},
        pause: function pause() {},
        destroy: function destroy() {}
      };
      var iframeElement = $elem.find('iframe')[0];

      this.play = function () {
        $gallery.find('.product-media--current').removeClass('product-media--current');
        $elem.addClass('product-media--current');

        _video.show();

        playerObj.play();
      };

      this.togglePlayPause = function () {
        if (isPlaying) {
          _video.pause();
        } else {
          _video.play();
        }
      };

      this.pause = function () {
        playerObj.pause();
        $elem.removeClass('product-media--activated');
      };

      this.show = function () {
        $elem.addClass('product-media--activated');
        $elem.show();

        _this.slideshowTabFix();
      };

      this.hide = function () {
        playerObj.pause();
        $elem.hide();
      };

      this.destroy = function () {
        playerObj.destroy();
        $elem.off('click', '.product-media--video-mask', _video.togglePlayPause);
      }; //Init the external video


      if (/^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(iframeElement.src)) {
        var loadYoutubeVideo = function loadYoutubeVideo() {
          playerObj = {
            playerType: 'youtube',
            element: iframeElement,
            player: new YT.Player(iframeElement, {
              videoId: $elem.data('video-id'),
              events: {
                onReady: function onReady() {
                  initialisedMedia[$elem.data('media-id')] = _video;
                  $elem.addClass('product-media--video-loaded');

                  if (autoplay && theme.viewport.isSm()) {
                    _video.play();
                  }
                },
                onStateChange: function onStateChange(event) {
                  if (event.data === 1) {
                    _this.pauseAllMedia($elem.data('media-id'));
                  }

                  isPlaying = event.data === YT.PlayerState.PLAYING || event.data === YT.PlayerState.BUFFERING || event.data === YT.PlayerState.UNSTARTED;

                  if (event.data === 0 && $elem.data('enable-video-looping')) {
                    event.target.seekTo(0);
                  }
                }
              }
            }),
            play: function play() {
              this.player.playVideo();
            },
            pause: function pause() {
              this.player.pauseVideo();
            },
            destroy: function destroy() {
              this.player.destroy();
            }
          };
        };

        if (window.YT && window.YT.Player) {
          loadYoutubeVideo();
        } else {
          // set up a controller for YouTube video
          var temp = window.onYouTubeIframeAPIReady;

          window.onYouTubeIframeAPIReady = function () {
            temp();
            loadYoutubeVideo();
          };

          theme.loadScriptOnce('https://www.youtube.com/iframe_api');
        }
      }

      $elem.on('click', '.product-media--video-mask', _video.togglePlayPause);

      _video.show();
    };

    this.Model = function ($elem, autoplay) {
      var _model = this;

      var playerObj = {
        play: function play() {},
        pause: function pause() {},
        destroy: function destroy() {}
      };
      var modelElement = $elem.find('model-viewer')[0];

      this.show = function () {
        $elem.show();
        $elem.addClass('product-media--activated');

        _this.slideshowTabFix();

        _model.updateViewInSpaceButton();
      };

      this.updateViewInSpaceButton = function () {
        if (window.ShopifyXR && $viewInSpaceButton.length) {
          //Change the view in space button to launch this model
          $viewInSpaceButton.attr('data-shopify-model3d-id', $elem.data('media-id'));
          window.ShopifyXR.setupXRElements();
        }
      };

      this.play = function () {
        $gallery.find('.product-media--current').removeClass('product-media--current');
        $elem.addClass('product-media--current');

        _model.show();

        playerObj.play();
      };

      this.pause = function () {
        $elem.removeClass('product-media--activated');
        playerObj.pause();
      };

      this.hide = function () {
        playerObj.pause();
        $elem.hide();

        if (window.ShopifyXR && $viewInSpaceButton.length) {
          //Reset the view in space button to launch the first model
          $viewInSpaceButton.attr('data-shopify-model3d-id', $viewInSpaceButton.data('shopify-model3d-first-id'));
          $viewInSpaceButton.attr('data-shopify-title', $viewInSpaceButton.data('shopify-first-title'));
          window.ShopifyXR.setupXRElements();
        }
      };

      this.destroy = function () {//Nothing needed
      };

      this.initAugmentedReality = function () {
        if ($('.model-json', $gallery).length) {
          var doInit = function doInit() {
            if (!window.ShopifyXR) {
              document.addEventListener('shopify_xr_initialized', function shopifyXrEventListener(event) {
                doInit(); //Ensure this only fires once

                event.target.removeEventListener(event.type, shopifyXrEventListener);
              });
              return;
            }

            window.ShopifyXR.addModels(JSON.parse($('.model-json', $gallery).html()));
            window.ShopifyXR.setupXRElements();
          };

          window.Shopify.loadFeatures([{
            name: 'shopify-xr',
            version: '1.0',
            onLoad: doInit
          }]);
        }
      }; //Init the model


      theme.loadStyleOnce('https://cdn.shopify.com/shopifycloud/model-viewer-ui/assets/v1.0/model-viewer-ui.css');
      window.Shopify.loadFeatures([{
        name: 'model-viewer-ui',
        version: '1.0',
        onLoad: function () {
          playerObj = new Shopify.ModelViewerUI(modelElement);
          $elem.addClass('product-media--model-loaded');

          if (autoplay && theme.viewport.isSm()) {
            _model.play();
          } // add mouseup event proxy to fix carousel swipe gestures


          $('<div class="theme-event-proxy">').on('mouseup', function (e) {
            e.stopPropagation();
            e.preventDefault();
            document.dispatchEvent(new MouseEvent('mouseup'));
          }).appendTo($(this).find('.shopify-model-viewer-ui__controls-overlay')); // Prevent the buttons from submitting the form

          $elem.find('button').attr('type', 'button'); // Disable swipe on the model

          $elem.find('.shopify-model-viewer-ui').addClass('swiper-no-swiping');
        }.bind(this)
      }]);
      $elem.find('model-viewer').on('shopify_model_viewer_ui_toggle_play', function () {
        _this.pauseAllMedia($elem.data('media-id'));

        $elem.addClass('product-media-model--playing');
        $gallery.on('click', '.product-media:not([data-media-type="model"])', _model.pause);
      });
      $elem.find('model-viewer').on('shopify_model_viewer_ui_toggle_pause', function () {
        $elem.removeClass('product-media-model--playing');
        $gallery.off('click', '.product-media:not([data-media-type="model"])', _model.pause);
      });
      $elem.on('click', '.product-media--model-mask', function () {
        if (isFeaturedProduct) {
          //If we're on a featured product, delay the initialisation of the model until the current slide has changed
          _this.swipeToSlideIfNotCurrent($elem);

          setTimeout(_model.play, 500);
        } else {
          _model.play();
        }
      });
      initialisedMedia[$elem.data('media-id')] = _model;

      _model.show();

      if (!window.ShopifyXR) {
        _model.initAugmentedReality();
      }
    };

    this.pauseAllMedia = function (ignoreKey) {
      for (var key in initialisedMedia) {
        if (initialisedMedia.hasOwnProperty(key) && (!ignoreKey || key != ignoreKey)) {
          initialisedMedia[key].pause();
        }
      }
    };

    this.showMedia = function ($mediaToShow, autoplay, preventHide) {
      //In with the new
      if ($mediaToShow.length) {
        //Out with the old
        if (currentMedia && !preventHide) {
          currentMedia.pause();
        } //Function to instantiate and return the relevant media


        var getMedia = function getMedia(MediaType) {
          var media;

          if (initialisedMedia.hasOwnProperty($mediaToShow.data('media-id'))) {
            media = initialisedMedia[$mediaToShow.data('media-id')];

            if (autoplay && theme.viewport.isSm()) {
              media.show(); //Delay play so its easier for users to understand that it paused

              setTimeout(media.play, 250);
            } else {
              media.show();
            }
          } else {
            media = new MediaType($mediaToShow, autoplay);
          }

          return media;
        }; //Initialise the media


        if ($mediaToShow.data('media-type') === "image") {
          currentMedia = getMedia(_this.Image);
        } else if ($mediaToShow.data('media-type') === "video") {
          currentMedia = getMedia(_this.Video);
        } else if ($mediaToShow.data('media-type') === "external_video") {
          currentMedia = getMedia(_this.ExternalVideo);
        } else if ($mediaToShow.data('media-type') === "model") {
          currentMedia = getMedia(_this.Model);
        } else {
          console.warn('Media is unknown', $mediaToShow);
          $gallery.find('.product-media:visible').hide();
          $mediaToShow.show();
        }
      }
    };

    this.swipeToSlideIfNotCurrent = function ($elem) {
      var $slide = $elem.closest('.swiper-slide');
      swiper.slideTo($slide.index(), 500);
    };

    this.destroy = function () {
      for (var i = 0; i < initialisedMedia.length; i++) {
        initialisedMedia[i].destroy();
      }

      if (!isFeaturedProduct) {
        $(window).off('load.productTemplateGallery scroll.productTemplateGallery', detectHeaderOverGallery);
      }

      $gallery.closest('.product-area').off('click', '.product-area__details__thumbs__thumb a', handleThumbnailClick);
      $gallery.off('click', '[data-full-size]', handleImageClick);
      $gallery.off('variantImageSelected', _this.pauseAllMedia);
      $(window).off('ccScrollToMedia');

      if ($thumbs && $thumbs.length) {
        $thumbs.off('click');
      }
    };

    this.slideshowTabFix = function () {
      if (swiper) {
        // which slide are we going to?
        var $activeMedia = $swiperCont.find('.product-media--current'),
            $activeSlide = null;

        if ($activeMedia.length) {
          $activeSlide = $activeMedia.closest('.swiper-slide');
        } else {
          $activeSlide = $swiperCont.find('.swiper-slide.swiper-slide-active');
        } // tabindex everything to prevent tabbing into hidden slides


        $activeSlide.find('a, input, button, select, iframe, video, model-viewer, [tabindex]').each(function () {
          if (typeof $(this).data('theme-slideshow-original-tabindex') !== 'undefined') {
            if ($(this).data('theme-slideshow-original-tabindex') === false) {
              $(this).removeAttr('tabindex');
            } else {
              $(this).attr('tabindex', $(this).data('theme-slideshow-original-tabindex'));
            }
          } else {
            $(this).removeAttr('tabindex');
          }
        });
        $($swiperCont.find('.swiper-slide')).not($activeSlide).find('a, input, button, select, iframe, video, model-viewer, [tabindex]').each(function () {
          if (typeof $(this).data('theme-slideshow-original-tabindex') === 'undefined') {
            $(this).data('theme-slideshow-original-tabindex', typeof $(this).attr('tabindex') !== 'undefined' ? $(this).attr('tabindex') : false);
          }

          $(this).attr('tabindex', '-1');
        });
      }
    };

    this.scrollToMedia = function (mediaId) {
      var $variantImage = $("[data-media-id=\"".concat(mediaId, "\"]")); //Scroll to that variant image

      if ($variantImage.length && $('body').hasClass('template-product') && theme.viewport.isSm()) {
        var offset = parseInt($gallery.find('.theme-images').css('padding-top').replace('px', ''));
        var scrollAmount = $variantImage.offset().top - offset + 1; //If the nav is opaque and sticky, compensate for the nav when scrolling

        if (nav.bar.hasOpaqueSetting() && nav.bar.hasStickySetting() || $gallery.data('column-count') > 1 && $(window).outerWidth() > 1100) {
          scrollAmount -= nav.bar.heightExcludingAnnouncementBar();
        } //If scrolling up and the nav is set hide on scroll down, subtract the nav from the new position


        if (scrollAmount < $(window).scrollTop() && nav.bar.getPositionSetting() === 'peek' && nav.bar.hasOpaqueSetting()) {
          scrollAmount -= nav.bar.heightExcludingAnnouncementBar();
        }

        scrollAmount = scrollAmount < 200 ? 0 : scrollAmount;

        if ($gallery.data('column-count') > 1) {
          $gallery.find('.product-media--active-variant').removeClass('product-media--active-variant');
          $variantImage.addClass('product-media--active-variant');

          if (theme.viewport.isMd()) {
            var $column = $variantImage.closest('.media-column[data-scrollax]');

            if ($column.length) {
              var $scrollaxParent = $column.closest('[data-scrollax-parent]');

              if ($scrollaxParent.length) {
                // Find out how far down the top of the variant image is as a percentage of the parent
                var parentHeight = $scrollaxParent.outerHeight();
                var imageOffset = $variantImage.parent().position().top + ($scrollaxParent.outerHeight() - $column.outerHeight()); // Get that as a percentage of the parallax percent (20 is the % parallax to compensate - in product-media.js)

                var percentageFromTopOfParent = (100 / parentHeight * imageOffset).toFixed(2);
                var percentageOfParallaxOffset = 20 * (percentageFromTopOfParent / 100); //Work out the px to compensate

                var parallaxOffset = parentHeight * (percentageOfParallaxOffset / 100);

                if (parallaxOffset > 0) {
                  //40 is the padding top between the column and scrollax parent
                  scrollAmount -= parallaxOffset;
                }
              }
            }
          }
        }

        $('html,body').animate({
          scrollTop: scrollAmount
        }, 1000);
      }
    };

    function detectHeaderOverGallery() {
      var nav = theme.Nav();
      $('body').toggleClass('header-over-gallery', $(window).scrollTop() < $gallery.height() - nav.bar.height());
    }

    function initColumns() {
      var columns = $gallery.data('column-count');
      var $elements = $gallery.find('.theme-img');
      var elementsPerCol = Math.ceil($elements.length / columns);
      var $colContainer = $gallery.find('.theme-images');
      var currentCol = -1;
      var $colWrapper; // //Put more images in the first column to offset the parallax
      // if(columns === 2){
      //   elementsPerCol++;
      // }

      if (columns > 1 && $elements.length > 1) {
        if (theme.settings.productImageParallax) {
          $gallery.attr('data-scrollax-parent', 'true');
        }

        $elements.each(function (i) {
          if (currentCol < Math.floor(i / elementsPerCol)) {
            var additionalAttrs = "";

            if (theme.settings.productImageParallax) {
              if (currentCol === -1) {
                //Note if changing the 20% below, also change the 20% in manifest.js variantImageSelected scroll
                additionalAttrs = "data-scrollax=\"properties: { 'translateY': '-20%' }\"";
              } else if (currentCol === 0) {// additionalAttrs = "data-scrollax=\"properties: { 'translateY': '100px' }\"";
              } else if (currentCol === 1) {
                additionalAttrs = "data-scrollax=\"properties: { 'translateY': '-10%' }\"";
              }
            }

            $colWrapper = $("<div class=\"media-column\" ".concat(additionalAttrs, "></div>")).appendTo($colContainer);
            currentCol++;
          }

          $(this).appendTo($colWrapper);
        });

        if (theme.settings.productImageParallax) {
          if (columns === 2) {
            //Keep the first column the same height or shorter than the second column
            var $firstColumn = $colContainer.find('.media-column').eq(0);
            var $secondColumn = $colContainer.find('.media-column').eq(1);

            if ($secondColumn.outerHeight() > 4000) {
              var maintainFirstColumnHeight = function maintainFirstColumnHeight() {
                if ($secondColumn.outerHeight() < $firstColumn.outerHeight()) {
                  $firstColumn.css('height', $secondColumn.outerHeight() + 'px');
                }
              };

              maintainFirstColumnHeight();
              $(window).on('debouncedresize.columnheights', maintainFirstColumnHeight);
            }
          }

          $(window).Scrollax({
            offset: nav.bar.height()
          });
          $(window).Scrollax('reload');
        }
      }
    }

    function destroyColumns() {
      var $colContainer = $gallery.find('.theme-images');
      $colContainer.find('.theme-img').each(function () {
        $(this).appendTo($colContainer);
      });
      $(window).off('debouncedresize.columnheights');
      $colContainer.find('.media-column').remove();

      if (theme.settings.productImageParallax) {
        $gallery.removeAttr('data-scrollax-parent', 'true');
        $(window).Scrollax('destroy');
      }
    } //Check if media should be displayed in columns


    if (theme.viewport.isSm()) {
      initColumns();
    } //Init all media


    $gallery.find('.product-media').each(function (index) {
      _this.showMedia($(this), false, true);
    }); //Init swiper

    var $swiperExternalVideos = $swiperCont.find('[data-media-type="external_video"]'); //Scrolls to the media of the clicked thumbnail

    function handleThumbnailClick(e) {
      e.preventDefault();
      var mediaId = $(this).closest('[data-media-id]').data('media-id');
      var $media = $gallery.find(".product-media[data-media-id=\"".concat(mediaId, "\"]")); //Scroll to that variant image

      if ($media.length) {
        //fixed and not data-opacity="transparent"
        $gallery.closest('.product-area').find('.thumb-active').removeClass('thumb-active');
        $(this).addClass('thumb-active');

        _this.scrollToMedia(mediaId);
      }

      return false;
    } //Opens the zoom modal


    function handleImageClick() {
      var nav = theme.Nav();

      if (theme.viewport.isSm()) {
        var thisSmallSizeImageUrl = $(this).find('.rimage-wrapper > img')[0].currentSrc;
        var $allImages = $(this).closest('.theme-images').find('[data-full-size]');
        var imageHtml = "<a href=\"#\" data-modal-close class=\"modal-close\">&times;</a>";
        $allImages.each(function () {
          var smallSizeImageUrl = $(this).find('.rimage-wrapper > img')[0].currentSrc;
          var fullSizeImageUrl = $(this).data('full-size');
          var extraAttrs = thisSmallSizeImageUrl === smallSizeImageUrl ? "id='zoom-image'" : ""; //Build the html for the images within the modal

          imageHtml += "<img class=\"zoom-image\" ".concat(extraAttrs, " src=\"").concat(smallSizeImageUrl, "\" data-full-size=\"").concat(fullSizeImageUrl, "\"/>");
        });
        showThemeModal($('<div class="theme-modal product-image-zoom temp -light"  role="dialog" aria-modal="true"/>').append("\n           <div class='inner-scroller -out'>".concat(imageHtml, "</div>")), 'product-image', function ($modal) {
          var $mainImage = $('#zoom-image');
          $mainImage.attr('src', $mainImage.data('full-size')); // let offset = $mainImage.outerHeight() - $(window).outerHeight();
          // if(offset < 0){
          //   offset = 0;
          // }

          setTimeout(function () {
            //Set full resolution of the other images
            $modal.find('[data-full-size]').each(function () {
              $(this).attr('src', $(this).data('full-size'));
            });
          }, 100);
          setTimeout(function () {
            //Scroll to the middle of the image
            $modal.scrollTop($mainImage.position().top + ($mainImage.outerHeight() / 2 - $modal.outerHeight() / 2)); //Scroll to the top of the image
            // $modal.scrollTop($mainImage.position().top);

            $modal.find('.inner-scroller').removeClass('-out');
          }, 1000);
        }, true, nav.bar.isInline());
      }
    } // Bind listeners


    if ($gallery.hasClass('theme-gallery--thumbs-enabled')) {
      $gallery.closest('.product-area').on('click', '.product-area__details__thumbs__thumb a', handleThumbnailClick);
    }

    if ($gallery.hasClass('theme-gallery--zoom-enabled')) {
      $gallery.on('click', '[data-full-size]', handleImageClick);
    }

    $(window).off('ccScrollToMedia').on('ccScrollToMedia', function (e, mediaId) {
      if ($gallery.data('scroll-to-variant-media') !== false || theme.viewport.isXs()) {
        _this.scrollToMedia(mediaId);
      }
    });

    if (!isFeaturedProduct) {
      $(window).on('doThemeGalleryResizeCheck.productTemplateGallery resize.productTemplateGallery', function (e) {}).trigger('doThemeGalleryResizeCheck');
      $(detectHeaderOverGallery); // indicate if header over the gallery

      $(window).on('scroll.productTemplateGallery', detectHeaderOverGallery);
    } else {
      // set external video dimensions for featured products
      $swiperExternalVideos.each(function () {
        $(this).width($gallery.outerHeight() * $(this).data('aspectratio'));
      });
    }

    $gallery.on('variantImageSelected', _this.pauseAllMedia);

    function initSwiper() {
      destroyColumns();
      var extraSwiperOpts = {};

      if ($swiperCont.data('swiper-nav-style') === 'dots') {
        extraSwiperOpts = {
          dynamicBullets: true,
          pagination: {
            el: $swiperCont.find('.swiper-pagination')[0],
            dynamicBullets: true
          }
        };
      } else {
        extraSwiperOpts = {
          navigation: {
            nextEl: $swiperCont.find('.swiper-button-next')[0],
            prevEl: $swiperCont.find('.swiper-button-prev')[0]
          }
        };
      } //Maintain the height of the carousel on desktop


      if (isFeaturedProduct) {
        var updateMediaHeight = function updateMediaHeight() {
          if (theme.viewport.isSm()) {
            $productMedia.css('height', $productDetails.outerHeight() + 'px');
          } else {
            $productMedia.css('height', 'auto');
          }
        };

        var $productDetails = $gallery.closest('.product-area').find('.product-area__details .product-area__details__inner');
        var $productMedia = $gallery.closest('.product-area').find('.product-area__media');
        $(window).on('debouncedresize.swiper', updateMediaHeight);
        updateMediaHeight();
      } //Init swiper


      var swiperOpts = _objectSpread({
        mode: 'horizontal',
        loop: false,
        slidesPerView: 'auto',
        resizeReInit: true,
        autoHeight: false,
        scrollContainer: true,
        grabCursor: true,
        createPagination: false,
        preventClicks: false,
        freeMode: true,
        freeModeFluid: true,
        spaceBetween: 20,
        dynamicBullets: false,
        mousewheel: {
          invert: true,
          forceToAxis: true
        },
        scrollbar: {
          el: $swiperCont.find('.swiper-scrollbar')[0],
          draggable: true
        }
      }, extraSwiperOpts, {
        breakpoints: {
          767: _objectSpread({
            autoHeight: true,
            slidesPerView: 1,
            spaceBetween: 0,
            freeMode: false,
            freeModeFluid: false
          }, extraSwiperOpts)
        },
        on: {
          init: function init() {
            lazySizes.autoSizer.checkElems(); //Hack for iPhone X - where loading the page on slower connection sometimes causes Swiper to steal focus

            if (theme.viewport.isXs() && $('.product-detail__form__options a:not(.size-chart-link)').length && !isFeaturedProduct) {
              $('.product-detail__form__options a:not(.size-chart-link):first').focus();
              setTimeout(function () {
                $(window).scrollTop(0);
              }, 500);
            }
          },
          slideChangeTransitionEnd: function slideChangeTransitionEnd(e) {
            // Update the view in space button on swipe
            if (theme.viewport.isXs() || isFeaturedProduct) {
              var $activeMedia = $gallery.find('.swiper-slide-active .product-media');
              var activeMediaObj = initialisedMedia[$activeMedia.data('media-id')];

              if (activeMediaObj) {
                if ($activeMedia.data('media-type') === 'model') {
                  activeMediaObj.updateViewInSpaceButton();
                } else if (window.ShopifyXR && $viewInSpaceButton.length) {
                  //Reset the view in space button to launch the first model
                  $viewInSpaceButton.attr('data-shopify-model3d-id', $viewInSpaceButton.data('shopify-model3d-first-id'));
                  $viewInSpaceButton.attr('data-shopify-title', $viewInSpaceButton.data('shopify-first-title'));
                  window.ShopifyXR.setupXRElements();
                }
              }
            }

            _this.slideshowTabFix();
          }
        }
      });

      swiper = new Swiper($swiperCont, swiperOpts);
      var randomId = new Date().getTime();
      theme.swipers[randomId] = swiper;
      $swiperCont.attr('data-swiper-id', randomId);
      var startIndex = $gallery.find('.current-img').index();

      if (startIndex > 0) {
        swiper.slideTo(startIndex, 0);
      }

      if (isFeaturedProduct) {
        $gallery.find('.current-img .product-media').addClass('product-media--active-variant');
      } //Disable swipe on single products within the featured product slider


      if ($gallery.hasClass('featured-product__gallery--single')) {
        $swiperCont.addClass('swiper-no-swiping');
      } //Fixes bug where the last slide gets cut off if its a model


      setTimeout(function () {
        $(window).trigger('resize'); //Load lazy images

        lazySizes.autoSizer.checkElems();

        if (swiper) {
          swiper.update();
        } //Autoplay the active slide on desktop


        if (theme.viewport.isSm() && !isFeaturedProduct) {
          _this.showMedia($swiperCont.find('.swiper-slide.swiper-slide-active .product-media'), false, true);
        }

        if (isFeaturedProduct) {
          _this.slideshowTabFix();
        }
      }, isFeaturedProduct ? 3000 : 1000);
    }

    function destroySwiper() {
      $swiperCont.removeClass('swiper-no-swiping');
      swiper.destroy(false);
      initColumns();
    }

    var swiperEnabled = false;

    function toggleSwiper() {
      if (theme.viewport.isXs() && !swiperEnabled) {
        swiperEnabled = true;
        initSwiper();
      } else if (theme.viewport.isSm() && swiperEnabled) {
        swiperEnabled = false;
        destroySwiper();
      }
    }

    $(function () {
      if (isFeaturedProduct) {
        initSwiper();
      } else {
        toggleSwiper();
        $(window).on('debouncedresize.swiper', toggleSwiper);
      }
    });
  };

  ;

  theme.initContentSlider = function (target, afterChange) {
    var lastSlide = $('.slideshow .slide', target).length - 1;
    var speed = $(this).data('transition') == 'instant' ? 0 : 1000;

    if ($(this).data('transition-speed')) {
      speed = $(this).data('transition-speed');
    }

    $('.slideshow', target).each(function () {
      $(this).on('init', function () {
        $('.lazyload--manual', this).removeClass('lazyload--manual').addClass('lazyload');
      }).slick({
        autoplay: $(this).data('autoplay'),
        fade: $(this).data('transition') != 'slide',
        speed: speed,
        autoplaySpeed: $(this).data('autoplay-speed') * 1000,
        arrows: $(this).data('navigation') == 'arrows',
        dots: $(this).data('navigation') == 'dots',
        // pauseOnHover: $(this).data('transition') != 'instant' || $(this).data('autoplay-speed') > 2, // no pause when quick & instant
        infinite: true,
        useTransform: true,
        prevArrow: '<button type="button" class="slick-prev" aria-label="' + theme.strings.previous + '">' + theme.icons.chevronLeft + '</button>',
        nextArrow: '<button type="button" class="slick-next" aria-label="' + theme.strings.next + '">' + theme.icons.chevronRight + '</button>',
        pauseOnHover: false,
        cssEase: 'cubic-bezier(0.25, 1, 0.5, 1)',
        lazyLoad: $(this).find('[data-lazy]').length > 0 ? 'ondemand' : null,
        responsive: [{
          breakpoint: 768,
          settings: {
            fade: $(this).data('transition') != 'slide',
            // keep instant gif-style on mobile
            speed: $(this).data('transition') == 'instant' ? 0 : 750,
            arrows: false,
            //$(this).data('navigation') == 'arrows',
            dots: $(this).data('navigation') != 'none',
            // $(this).data('navigation') == 'none' || $(this).data('navigation') == 'dots',
            lazyLoad: $(this).find('[data-lazy]').length > 0 ? 'progressive' : null
          }
        }]
      }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var _this8 = this;

        //Figure out the direction we're travelling in
        var direction = "left";

        if ((nextSlide < currentSlide && !(currentSlide === lastSlide && nextSlide === 0) || currentSlide == 0 && nextSlide === lastSlide) && !(nextSlide === 1 && currentSlide === 0)) {
          direction = 'right';
        } //Pop the direction to animate from, forcing the text left or right and hidden


        $(this).addClass("direction-".concat(direction));
        var $outgoingSlide = $(slick.$slides.get(currentSlide));
        $outgoingSlide.addClass('-outgoing').addClass('-leaving');
        var movingToClonedSlide = currentSlide === lastSlide && nextSlide === nextSlide || currentSlide === 0 && nextSlide === lastSlide;
        setTimeout(function () {
          //Remove the direction and animate the text in
          $(_this8).removeClass('direction-left').removeClass('direction-right');
          $outgoingSlide.removeClass('-outgoing');
        }, movingToClonedSlide ? 600 : 100); //Cloned slides take longer to initialise

        setTimeout(function () {
          $outgoingSlide.removeClass('-leaving');
        }, 1000);
      }).on('afterChange', function (event, slick, currentSlide) {
        if (afterChange) {
          afterChange(currentSlide);
        }
      });
    });
  };

  theme.initProductSlider = function ($swiperCont) {
    var isBlog = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var slidesInView = $swiperCont.data('products-in-view');
    var breakpoints = {
      767: {
        slidesPerView: 1.2,
        spaceBetween: 10
      },
      900: {
        slidesPerView: slidesInView === 4 || slidesInView === 3 ? 2 : slidesInView
      },
      1439: {
        slidesPerView: slidesInView === 4 || slidesInView === 3 ? 3 : slidesInView
      },
      3000: {
        slidesPerView: slidesInView,
        spaceBetween: 20
      }
    };

    if (isBlog) {
      breakpoints = {
        767: {
          slidesPerView: 1.2,
          spaceBetween: 10
        },
        1024: {
          slidesPerView: 2
        },
        1600: {
          slidesPerView: 3
        },
        3000: {
          slidesPerView: 4,
          spaceBetween: 20
        }
      };
    } //Init swiper


    new Swiper($swiperCont, {
      mode: 'horizontal',
      loop: false,
      resizeReInit: true,
      freeMode: true,
      freeModeFluid: true,
      scrollContainer: true,
      grabCursor: true,
      createPagination: false,
      slidesPerView: slidesInView,
      spaceBetween: 20,
      mousewheel: {
        invert: true,
        forceToAxis: true
      },
      scrollbar: {
        el: $swiperCont.find('.swiper-scrollbar')[0],
        draggable: true
      },
      navigation: {
        nextEl: $swiperCont.find('.swiper-button-next')[0],
        prevEl: $swiperCont.find('.swiper-button-prev')[0]
      },
      breakpoints: breakpoints,
      on: {
        init: function init() {
          lazySizes.autoSizer.checkElems();
        }
      }
    });
  };

  theme.convertOptionsToBoxes = function (container) {
    // show box-style options
    var $form = $('select[name="id"]:first', container).closest('form');
    var $clickies = $form.find('select[data-make-box]').each(function () {
      $(this).find('option[value=""]').remove(); //Remove 'Pick a' option, if exists
    }).clickyBoxes().parent().addClass('has-clickyboxes');
    $('.selector-wrapper:not(.cc-swatches) .clickyboxes').ccHoverLine({
      lineCss: {
        height: '2px'
      }
    }); // If we have clicky boxes, add the disabled-state to options that have no valid variants

    if ($clickies.length > 0) {
      var productData = theme.OptionManager.getProductData($form); // each option

      for (var optionIndex = 0; optionIndex < productData.options.length; optionIndex++) {
        // list each value for this option
        var optionValues = {};

        for (var variantIndex = 0; variantIndex < productData.variants.length; variantIndex++) {
          var variant = productData.variants[variantIndex];

          if (typeof optionValues[variant.options[optionIndex]] === 'undefined') {
            optionValues[variant.options[optionIndex]] = false;
          } // mark true if an option is available


          if (variant.available) {
            optionValues[variant.options[optionIndex]] = true;
          }
        } // mark any completely unavailable options


        for (var key in optionValues) {
          if (!optionValues[key]) {
            $('.selector-wrapper:eq(' + optionIndex + ') .clickyboxes li a', $form).filter(function () {
              return $(this).attr('data-value') == key;
            }).addClass('unavailable');
          }
        }
      }
    }

    if ($form.data('show-realtime-availability')) {
      /// Highlight the available variants.
      theme.OptionManager.updateVariantOptionStatusClasses($form);
    }
  };

  theme.loadInfiniteScroll = function (container) {
    var infiniteLoadCount = 1; /// Pagination-replacement

    $('.pagination.infiniscroll:not(.infinit)', container).addClass('infinit').each(function () {
      var waitForTrigger = $(this).hasClass('wait-for-trigger');
      var $pager = $('<div class="pager-button"><a href="#" aria-label="' + theme.strings.loadMore + '">' + theme.icons.loading + '</a></div>');
      $(this).replaceWith($pager);
      $pager.find('a').attr('href', $(this).find('.next a').attr('href'));
      $pager.on('click', 'a', function (e) {
        if ($(this).hasClass('loading')) {
          return false;
        } //Show spinner


        $(this).addClass('loading'); //Load next page

        var $link = $(this);
        $.get($(this).attr('href'), function (data) {
          infiniteLoadCount++;
          var isCollage = false; // var $data = $($.parseHTML(data));
          // //Grab products & insert into page
          // var indexOffset = $('.product-list .product-block').length;
          // var $newProducts = $data.find('.product-list .product-block').hide().appendTo('.product-list').filter('.product-block').each(function(index){
          //   $(this).removeAttr('data-loop-index').data('loop-index', indexOffset + index);
          // });

          var $data = $($.parseHTML(data)); //Grab products & insert into page

          if ($('.product-list--columns').length) {
            //Collage
            isCollage = true;
            var $newProducts = $data.find('.product-list').hide();
            $newProducts.prepend('<h2>' + theme.strings.page.replace('{{ page }}', infiniteLoadCount) + '</h2>');
            var $newProducts = $newProducts.insertBefore('.product-list-container .pager-button');
          } else {
            //Not collage
            var $newProducts = $data.find('.product-list .product-block').hide().appendTo('.product-list');
          }

          $('.product-list-container').filter('.product-block').each(function (index) {
            $(this).removeAttr('data-loop-index').data('loop-index', index);
            i++;
          }); //Sort by offset from the top
          //Fix height

          if (!isCollage) {
            $('.product-list').height($('.product-list').height()); //Prep entry transitions

            $newProducts.addClass('pre-trans').css('display', ''); //Find total height to slide to

            var newHeight = 0;
            $('.product-list').children().each(function () {
              var h = $(this).position().top + $(this).height();
              if (h > newHeight) newHeight = h;
            }); //Slide down, reveal & prep for more

            $('.product-list').animate({
              height: newHeight
            }, 500, function () {
              $(this).css('height', ''); //At this point, we're ready to transition in & load more

              $newProducts.removeClass('pre-trans');
              setTimeout(theme.tryRefreshProductReviews, 500);
            });
          } else {
            setTimeout(function () {
              $newProducts.fadeIn();
              setTimeout(theme.tryRefreshProductReviews, 500);
            }, 300);
          } //Spin no more


          var $next = $data.find('.pagination .next a');

          if ($next.length == 0) {
            //We are out of products
            $pager.slideUp();
          } else {
            //More to show
            $link.attr('href', $next.attr('href')).removeClass('loading');
          }
        });
        return false;
      });

      if (!waitForTrigger) {
        //Infiniscroll
        $(window).on('throttled-scroll.infiniscroll', function () {
          if ($(window).scrollTop() + $(window).height() > $pager.offset().top - 500) {
            $pager.find('a').trigger('click');
          }
        });
      }
    });
  };

  theme.unloadInfiniteScroll = function (container) {
    if (container) {
      $('.pagination.infiniscroll.infinit', container).removeClass('infinit');
    }

    $(window).off('throttled-scroll.infiniscroll');
  };

  theme.applyAjaxToProductForm = function ($form_param) {
    var shopifyAjaxAddURL = theme.routes.cart_add_url + '.js';
    var shopifyAjaxStorePageURL = theme.routes.search_url;
    $form_param.filter('[data-ajax-add-to-cart="true"]:not(.feedback-go_to_cart)').on('submit', function (e) {
      e.preventDefault();
      var $form = $(this); //Disable add button

      var $btn = $(this).find('[type=submit]').attr('disabled', 'disabled').addClass('confirmation adding');
      $btn.data('originalHtml', $btn.html()).html(theme.strings.productAddingToCart);
      var $stickyBtn = $('.product-area__add-to-cart-xs button');
      var updateStickyButton = theme.viewport.isXs() && $stickyBtn.length;

      if (updateStickyButton) {
        $stickyBtn.attr('disabled', 'disabled');
        $stickyBtn.data('originalHtml', $stickyBtn.html()).html(theme.strings.productAddingToCart);
      } //Add to cart


      $.post(shopifyAjaxAddURL, $form.serialize(), function (itemData) {
        //Enable add button
        $btn.html(theme.icons.tick + ' ' + theme.strings.productAddedToCart);

        if (updateStickyButton) {
          $stickyBtn.html(theme.icons.tick + ' ' + theme.strings.productAddedToCart);
        }

        setTimeout(function () {
          $btn.removeAttr('disabled').removeClass('confirmation').html($btn.data('originalHtml'));

          if (updateStickyButton) {
            $stickyBtn.removeAttr('disabled').removeClass('confirmation').html($stickyBtn.data('originalHtml'));
          }
        }, 4000);

        if ($form.hasClass('feedback-add_in_modal') || $form.hasClass('feedback-add_in_modal_no_checkout')) {
          var product = $.parseJSON(itemData);
          var noCheckoutButton = $form.hasClass('feedback-add_in_modal_no_checkout'); //Preload the thumbnail image

          var thumbUrl = theme.Shopify.formatImage(product.image, '300x');
          var img = new Image();
          img.src = thumbUrl;
          $btn.removeClass('adding');
          var variantHtml = "";

          if (product.selling_plan_allocation && product.selling_plan_allocation.selling_plan.name) {
            variantHtml += "<p class=\"cart-product__content__meta\">".concat(product.selling_plan_allocation.selling_plan.name, "</p>");
          }

          if (product.options_with_values && product.options_with_values.length) {
            for (var _i = 0; _i < product.options_with_values.length; _i++) {
              var option = product.options_with_values[_i];

              if (option.name !== "Title" && option.value !== "Default Title") {
                variantHtml += "<p class=\"cart-product__content__meta\">".concat(option.name, ": ").concat(option.value, "</p>");
              }
            }
          } // let $priceElem = $form.closest('.product-area__details__inner').find('.price-area .current-price');
          // if($priceElem.length){
          //   variantHtml += `<p class="cart-product__content__price">${$priceElem.text()}</p>`;
          // }


          var offset = 25;
          var nav = theme.Nav();

          if (nav.bar.getPositionSetting() !== "inline") {
            offset = nav.bar.height();
          }

          showThemeModal(['<div id="added-to-cart" class="theme-modal theme-modal--small" role="dialog" aria-modal="true" aria-labelledby="added-to-cart-title">', "<div class=\"inner\" style=\"top:".concat(offset, "px\">"), '<a href="#" data-modal-close class="modal-close">&times;</a>', '<h4 id="added-to-cart-title">' + theme.icons.tick + theme.strings.productAddedToCart + '</h4>', '<div class="cart-product">', "<div class=\"cart-product__image\"><img src=\"".concat(thumbUrl, "\" alt=\"").concat(product.featured_image.alt, "\"/></div>"), '<div class="cart-product__content">' + '<p class="cart-product__content__title">', product.product_title, '</p>' + "".concat(variantHtml ? variantHtml : '') + '</div>', '</div>', "<p class=\"links ".concat(noCheckoutButton ? 'links--no-checkout' : '', "\">"), '<a href="' + theme.routes.cart_url + "\" class=\"button ".concat(noCheckoutButton ? '' : 'alt', "\">") + theme.strings.viewCart + '</a>', '<a href="' + theme.routes.checkout + '" class="button button--checkout" [data-cc-checkout-button]>' + theme.strings.popupCheckout + '</a> ', '</p>', '</div>', '</div>'].join(''), null, null, false, true);
        } //Update header summary


        $.get(shopifyAjaxStorePageURL, function (data) {
          var cartSummarySelector = '#site-control .cart:not(.nav-search)';
          var $newCartObj = $($.parseHTML('<div>' + data + '</div>')).find(cartSummarySelector);
          var $currCart = $(cartSummarySelector);
          $currCart.replaceWith($newCartObj);
          $('#site-control').find('[data-cc-animate]').removeAttr('data-cc-animate');
        });
      }, 'text').fail(function (data) {
        //Enable add button
        $btn.removeAttr('disabled').removeClass('confirmation').html($btn.data('originalHtml'));

        if (updateStickyButton) {
          $stickyBtn.removeAttr('disabled').removeClass('confirmation').html($stickyBtn.data('originalHtml'));
        } //Not added, show message


        if (typeof data != 'undefined' && typeof data.status != 'undefined') {
          var jsonRes = $.parseJSON(data.responseText);
          var $statusMessageContainer = $form.find('.product-status-message');
          $statusMessageContainer.html(jsonRes.description);
          $statusMessageContainer.slideDown().fadeIn();
          setTimeout(function () {
            $statusMessageContainer.slideUp();
          }, 8000);
        } else {
          //Some unknown error? Disable ajax and submit the old-fashioned way.
          $form.attr('ajax-add-to-cart', 'false').submit();
        }
      });
    });
  };

  theme.removeAjaxFromProductForm = function ($form_param) {
    $form_param.off('submit');
  }; // Manage option dropdowns


  theme.OptionManager = new function () {
    var _ = this;

    _._getVariantOptionElement = function (variant, $container) {
      return $container.find('select[name="id"] option[value="' + variant.id + '"]');
    };

    _.currentVariant = null;
    _.selectors = {
      container: '.product-area',
      gallery: '.theme-gallery',
      priceArea: '.price-area',
      priceAreaContainer: '.product-area__col--price',
      submitButton: '.product-detail__form input[type=submit], .product-detail__form button[type=submit]',
      multiOption: '.option-selectors'
    };
    _.strings = {
      priceNonExistent: theme.strings.priceNonExistent,
      buttonDefault: theme.strings.buttonDefault,
      buttonNoStock: theme.strings.buttonNoStock,
      buttonNoVariant: theme.strings.buttonNoVariant,
      unitPriceSeparator: theme.strings.unitPriceSeparator,
      inventoryNotice: theme.strings.onlyXLeft,
      priceSoldOut: theme.strings.priceSoldOut
    };

    _._getString = function (key, variant) {
      var string = _.strings[key];

      if (variant) {
        if (string) {
          string = string.replace('[PRICE]', '<span class="theme-money">' + theme.Shopify.formatMoney(variant.price, theme.money_format) + '</span>');
        } else {
          console.warn("No string for key '".concat(key, "' was found."));
        }
      }

      return string;
    };

    _.getProductData = function ($form) {
      var productId = $form.data('product-id');
      var data = null;

      if (!theme.productData[productId]) {
        theme.productData[productId] = JSON.parse(document.getElementById('cc-product-json-' + productId).innerHTML);
      }

      data = theme.productData[productId];

      if (!data) {
        console.log('Product data missing (id: ' + $form.data('product-id') + ')');
      }

      return data;
    };

    _.getBaseUnit = function (variant) {
      return variant.unit_price_measurement.reference_value === 1 ? variant.unit_price_measurement.reference_unit : variant.unit_price_measurement.reference_value + variant.unit_price_measurement.reference_unit;
    }, _.addVariantUrlToHistory = function (variant) {
      if (variant) {
        var newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?variant=' + variant.id;
        window.history.replaceState({
          path: newurl
        }, '', newurl);
      }
    };

    _.updateSku = function (variant, $container) {
      $container.find('.sku .sku__value').html(variant ? variant.sku : '');
      $container.find('.sku').toggleClass('sku--no-sku', !variant || !variant.sku);
    };

    _.updateBarcode = function (variant, $container) {
      $container.find('.barcode .barcode__value').html(variant ? variant.barcode : '');
      $container.find('.barcode').toggleClass('barcode--no-barcode', !variant || !variant.barcode);
    };

    _.updateInventoryNotice = function (variant, $container) {
      var inventoryData = _._getVariantOptionElement(variant, $container).data('inventory');

      if (inventoryData) {
        $container.find('.product-inventory-notice').removeClass('product-inventory-notice--no-inventory').html(_._getString('inventoryNotice').replace('[[ quantity ]]', inventoryData)).slideDown(300);
      } else {
        $container.find('.product-inventory-notice').addClass('product-inventory-notice--no-inventory').slideUp(300);
      }
    };

    _.updateBackorder = function (variant, $container) {
      var $backorder = $container.find('.backorder');

      if ($backorder.length) {
        if (variant && variant.available) {
          if (variant.inventory_management && _._getVariantOptionElement(variant, $container).data('stock') == 'out') {
            var productData = _.getProductData($backorder.closest('form'));

            $backorder.find('.backorder__variant').html(productData.title + (variant.title.indexOf('Default') >= 0 ? '' : ' - ' + variant.title));
            $backorder.show();
          } else {
            $backorder.hide();
          }
        } else {
          $backorder.hide();
        }
      }
    };

    _.updatePrice = function (variant, $container) {
      var $priceArea = $container.find(_.selectors.priceArea);
      $priceArea.removeClass('on-sale');
      var $priceAreaContainer = $container.find(_.selectors.priceAreaContainer);

      if (variant.unit_price_measurement) {
        $priceAreaContainer.removeClass('price-area--no-unit-price').addClass('price-area--has-unit-price');
      } else {
        $priceAreaContainer.removeClass('price-area--has-unit-price').addClass('price-area--no-unit-price');
      }

      if (variant && variant.available == true) {
        var $newPriceArea = $('<div>');

        if (variant.compare_at_price > variant.price) {
          $('<span class="was-price theme-money">').html(theme.Shopify.formatMoney(variant.compare_at_price, theme.money_format)).appendTo($newPriceArea);
          $newPriceArea.append(' ');
          $priceArea.addClass('on-sale');
        }

        $('<span class="current-price theme-money">').html(theme.Shopify.formatMoney(variant.price, theme.money_format)).appendTo($newPriceArea);

        if (variant.unit_price_measurement) {
          var $newUnitPriceArea = $('<div class="unit-price">').appendTo($newPriceArea);
          $('<span class="unit-price__price theme-money">').html(theme.Shopify.formatMoney(variant.unit_price, theme.money_format)).appendTo($newUnitPriceArea);
          $('<span class="unit-price__separator">').html(_._getString('unitPriceSeparator')).appendTo($newUnitPriceArea);
          $('<span class="unit-price__unit">').html(_.getBaseUnit(variant)).appendTo($newUnitPriceArea);
        }

        $priceArea.html($newPriceArea.html());
      } else {
        if (variant) {
          $priceArea.html('<span>' + _._getString('priceSoldOut', variant) + '</span>');
        } else {
          $priceArea.html('<span>' + _._getString('priceNonExistent', variant) + '</span>');
        }
      }
    };

    _._updateButtonText = function ($button, string, variant) {
      $button.each(function () {
        var newVal;
        newVal = _._getString('button' + string, variant);

        if (newVal !== false) {
          if ($(this).is('input')) {
            $(this).val(newVal);
          } else {
            $(this).html(newVal);
          }
        }
      });
    };

    _.updateButtons = function (variant, $container) {
      var $button = $container.find(_.selectors.submitButton);

      if (variant && variant.available == true) {
        $button.removeAttr('disabled');

        _._updateButtonText($button, 'Default', variant);
      } else {
        $button.attr('disabled', 'disabled');

        if (variant) {
          _._updateButtonText($button, 'NoStock', variant);
        } else {
          _._updateButtonText($button, 'NoVariant', variant);
        }
      }
    };

    _.updateContainerStatusClasses = function (variant, $container) {
      $container.toggleClass('variant-status--unavailable', !variant.available);
      $container.toggleClass('variant-status--backorder', variant.available && variant.inventory_management && _._getVariantOptionElement(variant, $container).data('stock') == 'out');
    };

    _.updateVariantOptionStatusClasses = function ($form) {
      var variant = _.currentVariant;

      var productData = _.getProductData($form); //For the given array of option values, find variants which share the same options


      function getMatchingVariants(optionValues) {
        // console.log(`Finding variants with option values: ${optionValues}`);
        var tempVariants = productData.variants;
        var matchingVariants = tempVariants.filter(function (thisVariant) {
          var variantMatches = true;

          for (var j = 0; j < optionValues.length; j++) {
            if (thisVariant.options[j] !== optionValues[j]) {
              variantMatches = false;
              break;
            }
          }

          return variantMatches;
        });
        return matchingVariants;
      } //Returns an object of all the possible values for the given option with each option set to false


      function getAllValuesForOption(i) {
        var allOptionValues = {};

        for (var l = 0; l < productData.variants.length; l++) {
          var value = productData.variants[l].options[i];

          if (value) {
            allOptionValues[value] = false;
          }
        }

        return allOptionValues;
      }

      if (variant === false) {
        //The variant is unavailable, fabricate variant options based on the current selection
        variant = {
          options: []
        };
        $form.find('.selector-wrapper a.active[data-value]').each(function () {
          variant.options.push($(this).data('value'));
        });
      }

      if (variant && variant.options && variant.options.length > 1) {
        var optionValues = _toConsumableArray(variant.options);

        var optionStock = {}; //Iterate the current variant option selection from the bottom up

        for (var _i2 = variant.options.length - 1; _i2 >= 0; _i2--) {
          optionValues.pop(); //Get an object of values for this option all with stock set to false

          var optionAvailability = getAllValuesForOption(_i2); //Get variants which have the parent options

          var matchingVariants = getMatchingVariants(optionValues); //Check for in stock options within matching variants

          for (var k = 0; k < matchingVariants.length; k++) {
            if (matchingVariants[k].available) {
              var value = matchingVariants[k].options[_i2];

              if (value) {
                optionAvailability[value] = true;
              }
            }
          } //Add this option value to the master object of availability for this variant


          optionStock[productData.options[_i2]] = optionAvailability;
        } //Update the UI to reflect stock


        $('.selector-wrapper', $form).each(function () {
          var optionName = $(this).data('option-name');

          for (var _i3 = 0, _Object$entries = Object.entries(optionStock[optionName]); _i3 < _Object$entries.length; _i3++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i3], 2),
                option = _Object$entries$_i[0],
                isAvailable = _Object$entries$_i[1];

            option = removeDiacritics(option).toLowerCase().replace(/'/g, '').replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/-*$/, '');
            $(this).find(".clickyboxes .opt--".concat(option)).toggleClass('unavailable', !isAvailable);
          }
        });
      }
    };

    _.initProductOptions = function (originalInput) {
      $(originalInput).not('.theme-init').addClass('theme-init').each(function () {
        var $originalInput = $(this);

        if ($originalInput.is('select') && !$originalInput.hasClass('is-single-swatch')) {
          var productData = _.getProductData($originalInput.closest('form')); // change state for original dropdown


          $originalInput.on('change.themeProductOptions firstrun.themeProductOptions', function (e, variant) {
            if ($(this).is('input[type=radio]:not(:checked)')) {
              return; // handle radios - only update for checked
            }

            var variant = variant;

            if (!variant && variant !== false) {
              for (var i = 0; i < productData.variants.length; i++) {
                if (productData.variants[i].id == $(this).val()) {
                  variant = productData.variants[i];
                }
              }
            }

            var $container = $(this).closest(_.selectors.container); // update price

            _.updatePrice(variant, $container); // update buttons


            _.updateButtons(variant, $container); // emit an event to broadcast the variant update


            $(window).trigger('cc-variant-updated', {
              variant: variant,
              product: productData
            }); // variant images

            if (variant && variant.featured_media) {
              $container.find(_.selectors.gallery).trigger('variantImageSelected', variant);
            }

            _.currentVariant = variant;
            var $form = $(this).closest('form'); // extra details

            _.updateBarcode(variant, $container);

            _.updateSku(variant, $container);

            _.updateInventoryNotice(variant, $container);

            _.updateBackorder(variant, $container);

            _.updateContainerStatusClasses(variant, $container);

            if ($form.data('show-realtime-availability')) {
              _.updateVariantOptionStatusClasses($form);
            } // variant urls


            if ($form.data('enable-history-state') && e.type == 'change') {
              _.addVariantUrlToHistory(variant);
            } // notify quickbuy of content change


            $container.find('.quickbuy-container').trigger('changedsize');
          }); // split-options wrapper

          $originalInput.closest(_.selectors.container).find(_.selectors.multiOption).on('change.themeProductOptions', 'select', function () {
            var selectedOptions = [];
            $(this).closest(_.selectors.multiOption).find('select').each(function () {
              selectedOptions.push($(this).val());
            }); // find variant

            var variant = false;

            for (var i = 0; i < productData.variants.length; i++) {
              var v = productData.variants[i];
              var matchCount = 0;

              for (var j = 0; j < selectedOptions.length; j++) {
                if (v.options[j] == selectedOptions[j]) {
                  matchCount++;
                }
              }

              if (matchCount == selectedOptions.length) {
                variant = v;
                break;
              }
            } // trigger change


            if (variant) {
              $originalInput.val(variant.id);
            }

            $originalInput.trigger('change', variant);
          }); // first-run

          $originalInput.trigger('firstrun');
        } else {
          var productData = _.getProductData($originalInput.closest('form'));

          var $container = $(this).closest(_.selectors.container);
          var $backorder = $container.find('.backorder');
          var quantityAvailable = $container.find('.single_variant_availability').val();

          if ($backorder.length > 0 && quantityAvailable < 1) {
            $backorder.find('.backorder__variant').html(productData.title + (productData.variants[0].title.indexOf('Default') >= 0 ? '' : ' - ' + productData.variants[0].title));
            $backorder.show();
          }
        } // ajax


        theme.applyAjaxToProductForm($originalInput.closest('form'));
      });
    };

    _.unloadProductOptions = function (originalInput) {
      $(originalInput).removeClass('theme-init').each(function () {
        $(this).trigger('unloading').off('.themeProductOptions');
        $(this).closest(_.selectors.container).find(_.selectors.multiOption).off('.themeProductOptions');
        theme.removeAjaxFromProductForm($(this).closest('form'));
      });
    };
  }();
  ;

  theme.addControlPaddingToModal = function () {
    $('.theme-modal.reveal > .inner').css('padding-top', theme.Nav().bar.height());
  }; /// Maintain padding at the top of the body to reserve space


  theme.updateBodyPadding = function () {
    $('body').css('padding-top', Math.round(theme.Nav().bar.height()));
  };

  theme.assessTopSectionPadding = function () {
    var $topBlogSection = $('#page-content .shopify-section:first-child.section-featured-blog .slideshow-blog');

    if ($topBlogSection.length) {
      $topBlogSection.addClass('slideshow-blog--top');
      var nav = theme.Nav();

      if ($topBlogSection.find('.slideshow-blog__title').length) {
        $topBlogSection.find('.slideshow-blog__title').css('top', nav.bar.height());
      }

      if ($topBlogSection.find('.slideshow-blog__view-all').length) {
        $topBlogSection.find('.slideshow-blog__view-all').css('top', nav.bar.height());
      }
    }
  };

  theme.allowRTEFullWidthImages = function (container) {
    $('.rte--allow-full-width-images p > img, .rte--allow-full-width-images div > img', container).each(function () {
      if ($(this).siblings().length == 0) {
        $(this).unwrap().wrap('<div class="no-side-pad">');
      }
    });
    $('.rte--allow-full-width-images p > a > img, .rte--allow-full-width-images div > a > img', container).each(function () {
      if ($(this).siblings().length == 0 && $(this).parent().siblings().length == 0) {
        $(this).parent().unwrap().wrap('<div class="no-side-pad">');
      }
    });
  };

  theme.browserHas3DTransforms = function () {
    var el = document.createElement('p'),
        has3d,
        transforms = {
      'webkitTransform': '-webkit-transform',
      'OTransform': '-o-transform',
      'msTransform': '-ms-transform',
      'MozTransform': '-moz-transform',
      'transform': 'transform'
    }; // Add it to the body to get the computed style.

    document.body.insertBefore(el, null);

    for (var t in transforms) {
      if (el.style[t] !== undefined) {
        el.style[t] = "translate3d(1px,1px,1px)";
        has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
      }
    }

    document.body.removeChild(el);
    return has3d !== undefined && has3d.length > 0 && has3d !== "none";
  };

  if (theme.browserHas3DTransforms()) {
    $('html').addClass('supports-transforms');
  }

  theme.namespaceFromSection = function (container) {
    return ['.', $(container).data('section-type'), $(container).data('section-id')].join('');
  }; //Try and trigger the reviews stuff to render, but fail silently


  theme.tryRefreshProductReviews = function () {
    if (window.SPR) {
      try {
        SPR.initRatingHandler();
        SPR.initDomEls();
        SPR.loadProducts();
        SPR.loadBadges();
      } catch (err) {}
    }
  } //Keep elements full height where appropriate
  // theme.updateFullHeightElements = function () {
  //   let minHeight = 500;
  //   const windowHeight = $(window).height();
  //
  //   if(windowHeight > minHeight){
  //     minHeight = windowHeight;
  //   }
  //
  //   if()
  //
  //   $('#cc-full-height').remove();
  //
  //   $('head').append(`<style type="text/css" id="cc-full-height">
  //         .height--full, .height--full .rimage-outer-wrapper, .placeholder-image {
  //             min-height: ${minHeight} !important;
  //         }
  //     </style>`);
  // }
  ;
  /*================ Sections ================*/


  theme.HeaderSection = new function () {
    var c;
    var currentScrollTop = 0;
    var default_threshold = 100;

    handleScroll = function handleScroll(nav, positioning, opacity) {
      if (opacity === 'opaque_on_scroll' || opacity === 'opaque_on_scroll_alt') {
        if ($(window).scrollTop() < 100) {
          nav.bar.turnOpaque(false);
        } else {
          nav.bar.turnOpaque(true);
        }
      } else if (opacity !== 'opaque') {
        nav.bar.turnOpaque(false);
      }

      var scrollTop = $(window).scrollTop();

      if ((positioning === 'peek' || nav.bar.isAnnouncementBar() && positioning == "sticky") && scrollTop > 100) {
        currentScrollTop = scrollTop;

        if (positioning != "sticky") {
          if (c < currentScrollTop && scrollTop > default_threshold) {
            nav.bar.hide(true);
          } else if (c > currentScrollTop && !(scrollTop <= 50)) {
            nav.bar.hide(false);
          }
        }

        c = currentScrollTop;
      } else {
        nav.bar.hide(false);
      }

      if (positioning == "sticky" || positioning == "peek") {
        if (scrollTop <= 50) {
          nav.bar.hideAnnouncement(false);
        } else {
          nav.bar.hideAnnouncement(true);
        }
      }
    };

    this.onSectionLoad = function (target) {
      theme.addControlPaddingToModal();
      theme.updateBodyPadding();
      $('body').toggleClass('modal-active', $('.theme-modal.reveal').length > 0);
      $('#page-menu a', target).attr('tabindex', '-1');
      $('#page-menu .main-nav li:has(ul)', target).addClass('has-children');
      $('#page-menu.nav-uses-modal .main-nav li.has-children > a', target).append('<span class="arr">' + theme.icons.chevronRight + '</span>');
      $('.disclosure', target).each(function () {
        $(this).data('disclosure', new theme.Disclosure($(this)));
      });
      var nav = new theme.Nav();
      var positioning = nav.bar.getPositionSetting();
      var opacity = nav.bar.getOpacitySetting();

      if (opacity === "opaque") {
        $('body').addClass('nav-opaque');
      } else {
        $('body').removeClass('nav-opaque');
      }

      if (positioning === "inline") {
        $('body').addClass('nav-inline');
      } else {
        $('body').removeClass('nav-inline');
      }

      if (nav.bar.isAnnouncementBar()) {
        $('body').addClass('showing-announcement');
      } else {
        $('body').removeClass('showing-announcement');
      }

      if (opacity === 'opaque_on_scroll' || opacity === 'opaque_on_scroll_alt' || positioning === 'peek' || nav.bar.isAnnouncementBar()) {
        currentScrollTop = 0;
        $(window).on('throttled-scroll.nav', function () {
          handleScroll(nav, positioning, opacity);
        });
      }

      $(document).on('click.video-section', '.video-container__play', function () {
        if (theme.viewport.isXs()) {
          nav.bar.fadeOut(true);
        }
      });
      $(document).on('click.video-section', '.video-container__stop', function () {
        if (theme.viewport.isXs()) {
          nav.bar.fadeOut(false);
        }
      });
      theme.checkViewportFillers();
      theme.assessAltLogo();
      $(window).trigger('cc-header-updated');
    };

    this.onSectionUnload = function (target) {
      $('.disclosure', target).each(function () {
        $(this).data('disclosure').unload();
      });
      $(window).off('throttled-scroll.nav');
      $(document).on('click.video-section');
    };
  }();
  theme.FooterSection = new function () {
    this.onSectionLoad = function (container) {
      $('.disclosure', container).each(function () {
        $(this).data('disclosure', new theme.Disclosure($(this)));
      });
    };

    this.onSectionUnload = function (container) {
      $('.disclosure', container).each(function () {
        $(this).data('disclosure').unload();
      });
    };
  }();
  theme.SlideshowSection = new function () {
    this.onSectionLoad = function (target) {
      theme.initContentSlider(target);
      $(window).trigger('slideshowfillheight');
      theme.checkViewportFillers();
      theme.assessAltLogo();
    };

    this.onSectionUnload = function (target) {
      $('.slick-slider', target).slick('unslick').off('init');
      $(window).off('.slideshowSection');
    };

    this.onBlockSelect = function (target) {
      $(target).closest('.slick-slider').slick('slickGoTo', $(target).data('slick-index')).slick('slickPause');
    };

    this.onBlockDeselect = function (target) {
      $(target).closest('.slick-slider').slick('slickPlay');
    };
  }();
  theme.FeaturedBlogSection = new function () {
    this.onSectionLoad = function (target) {
      if ($('.carousel-blog', target).length) {
        var $swiperCont = $('.swiper-container', target);

        if ($swiperCont.length === 1) {
          theme.initProductSlider($swiperCont, true);
        }
      }

      if ($('.slideshow-blog', target).length) {
        theme.initContentSlider(target, function (slide) {
          $('.slideshow-blog__titles__active', target).removeClass('slideshow-blog__titles__active');
          $("[data-go-to-slide=\"".concat(slide, "\"]"), target).parent().addClass('slideshow-blog__titles__active');
        });
        var $slideshowTitles = $('.slideshow-blog__titles', target);

        if ($('.slideshow[data-title-navigation="true"]', target).length) {
          var checkTitleNavHeight = function checkTitleNavHeight() {
            if (theme.viewport.isSm()) {
              $('.overlay-type .inner', target).css('padding-bottom', $slideshowTitles.height() + 50 + 'px');
            } else {
              $('.overlay-type .inner', target).removeAttr('style');
            }
          };

          checkTitleNavHeight();
          $(window).on('debouncedresize.titleNavHeight', checkTitleNavHeight);
          $('[data-go-to-slide]', target).on('click', function () {
            var slideNum = $(this).data('go-to-slide');
            $('.slideshow', target).slick('slickGoTo', slideNum).slick('slickPause');
            $('.slideshow-blog', target).addClass('slideshow--paused');
            ;
            return false;
          });
          $('[data-go-to-slide]:first', target).parent().addClass('slideshow-blog__titles__active');
        }

        $(window).trigger('slideshowfillheight');
      }

      theme.checkViewportFillers();
      theme.assessAltLogo();
    };

    this.onSectionUnload = function (target) {
      $('.slick-slider', target).slick('unslick').off('init');
      $(window).off('debouncedresize.titleNavHeight');
      $('[data-go-to-slide]', target).off('click');
    };
  }();
  theme.ImageWithTextOverlay = new function () {
    var _ = this;

    _.checkTextOverImageHeights = function () {
      $('[data-section-type="image-with-text-overlay"], [data-nested-section-type="image-with-text-overlay"]').each(function () {
        var $imageContainer = $('.rimage-outer-wrapper', this);
        var imageHeight = $('.rimage-wrapper', this).outerHeight();
        var textVerticalPadding = parseInt($('.overlay', this).css('padding-top'));
        var textHeight = $('.overlay__content', this).height() + textVerticalPadding * 2;

        if (textHeight > imageHeight + 2) {
          // +2 for rounding errors
          $imageContainer.css('height', textHeight);
        } else {
          $imageContainer.css('height', '');
        }
      });
    };

    this.onSectionLoad = function (target) {
      $(window).off('.imageWithTextOverlaySection');

      if ($('.overlay__content', target).length) {
        $(_.checkTextOverImageHeights);
        $(window).on('debouncedresize.imageWithTextOverlaySection', _.checkTextOverImageHeights);
      }

      theme.checkViewportFillers();
    };

    this.onSectionUnload = function (target) {
      $(window).off('.imageWithTextOverlaySection');
    };
  }();
  theme.ImageBesideImageSection = new function () {
    var _ = this;

    _.checkTextOverImageHeights = function () {
      $('.image-beside-image__image').each(function () {
        var $imageContainer = $('.rimage-outer-wrapper', this);
        var imageHeight = $('.rimage-wrapper', this).outerHeight();
        var textVerticalPadding = parseInt($('.overlay', this).css('padding-top'));
        var textHeight = $('.overlay__content', this).height() + textVerticalPadding * 2;

        if (textHeight > imageHeight + 2) {
          // +2 for rounding errors
          $imageContainer.css('height', textHeight);
        } else {
          $imageContainer.css('height', '');
        }
      });
    };

    this.onSectionLoad = function (target) {
      $(window).off('.imageBesideImageSection');

      if ($('.overlay__content', target).length) {
        $(_.checkTextOverImageHeights);
        $(window).on('debouncedresize.imageBesideImageSection', _.checkTextOverImageHeights);
      }

      theme.checkViewportFillers();
    };

    this.onSectionUnload = function (target) {
      $(window).off('.imageBesideImageSection');
    };
  }();
  theme.ProductTemplateSection = new function () {
    var galleries = [];
    var nav = theme.Nav();

    this.onSectionLoad = function (target) {
      var isFeaturedProduct = $(target).data('is-featured-product') || false; /// Init store availability if applicable

      if (!isFeaturedProduct && $('[data-store-availability-container]', target).length) {
        this.storeAvailability = new theme.StoreAvailability($('[data-store-availability-container]', target)[0]);
      } // header assessment first (affects gallery height)


      theme.checkViewportFillers();
      theme.assessAltLogo();

      if (nav.bar.isCurrentlyOpaque() && !isFeaturedProduct) {
        $('body').removeClass('header-section-overlap');
      } /// Product page upper gallery


      $('.theme-gallery', target).each(function () {
        galleries.push(new theme.ProductMediaGallery($(this), $('.theme-gallery-thumb', target), isFeaturedProduct));
      });
      var headerIsMobileMode = false;
      var $stickyAddToCart = $('.product-area__add-to-cart-xs', target);
      var stickyAddToCartInitialised = !$stickyAddToCart.length;
      var stickyAddToCartIsUnstuck = false;
      var stickyAddToCartThreshold = $('#shopify-section-product-template').outerHeight();
      var $productHeader = $('.product-area__details__header', target);
      var $productDetails = $('.product-area__details', target); /// Work out the tallest product tab and compensate the height of the details area
      /// (for position:sticky to work in this case, it needs a fixed height).

      function resizeProductDetails() {
        if (theme.viewport.isSm()) {
          $productDetails.find('.product-area__details__inner').css('top', nav.bar.height() + 20 + 'px');
          $productHeader.css('margin-top', 0); // If the product details is too close to the top (due to the height of the media panel)

          if ($productDetails.offset().top < nav.bar.height() - 1) {
            $productHeader.css('margin-top', nav.bar.height() - 20 + 'px');
          }

          if (headerIsMobileMode) {
            $productHeader.prependTo('.product-area__details__inner');
            headerIsMobileMode = false;
          }
        } else {
          //It's mobile
          if (!headerIsMobileMode) {
            if ($('.product-area > .product-area__details__header', target).length) {
              $('.product-area > .product-area__details__header', target).remove();
            } //If header overlap is set, set padding top for the header


            if ($('body').hasClass('header-section-overlap')) {
              $productHeader.css('margin-top', nav.bar.height());
            } else {
              $productHeader.css('margin-top', 0);
            }

            $productHeader.prependTo('.product-area');
            headerIsMobileMode = true;
          } else {
            $productHeader.css('margin-top', nav.bar.height());
          }

          if (!stickyAddToCartInitialised) {
            $(window).on('throttled-scroll.sticky-add-to-cart', function () {
              if ($(window).scrollTop() > stickyAddToCartThreshold) {
                if (!stickyAddToCartIsUnstuck) {
                  $stickyAddToCart.addClass('-out');
                  stickyAddToCartIsUnstuck = true;
                }
              } else {
                if (stickyAddToCartIsUnstuck) {
                  $stickyAddToCart.removeClass('-out');
                  stickyAddToCartIsUnstuck = false;
                }
              }
            });
            $('.product-area__add-to-cart-xs button', target).on('click', function (e) {
              $('.product-detail__form form', target).submit();
            });
            stickyAddToCartInitialised = true;
          }
        }
      }

      if (!isFeaturedProduct) {
        $(window).on('debouncedresizewidth.productDetails', resizeProductDetails);
        $(window).on('cc-header-updated.productDetails', resizeProductDetails);
        resizeProductDetails();
      } /// Thumb carousels


      if ($('.product-area__details__thumbs').length) {
        $('.carousel-wrapper .carousel:not(.slick-initialized)', target).each(function ($slick) {
          $(this).on('init reInit setPosition', function () {
            var lastSlide = $(this).find('.slick-slide:last');

            if (lastSlide.length > 0) {
              var slideInnerWidth = lastSlide.position().left + lastSlide.outerWidth(true);
              var $carouselWrapper = $(this).parent();
              var carouselWidth = $carouselWrapper.outerWidth(true);

              if (carouselWidth > slideInnerWidth) {
                $(this).find('.slick-next, .slick-prev').addClass('theme-unnecessary').attr('tabindex', '-1');
              } else {
                $(this).find('.slick-next, .slick-prev').removeClass('theme-unnecessary').attr('tabindex', '0');
              }
            }
          }).on('init reInit setPosition', function ($slick) {
            $('.lazyload--manual', this).removeClass('lazyload--manual').addClass('lazyload');
            setTimeout(function () {
              $($slick.target).find('.slick-slide a').attr('tabindex', '0');
            });
          }).slick({
            autoplay: false,
            fade: false,
            infinite: false,
            useTransform: true,
            arrows: true,
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            centerMode: false,
            verticalSwiping: true,
            vertical: true,
            prevArrow: '<button type="button" class="slick-prev" aria-label="' + theme.strings.previous + '">' + theme.icons.chevronDown + '</button>',
            nextArrow: '<button type="button" class="slick-next" aria-label="' + theme.strings.next + '">' + theme.icons.chevronDown + '</button>',
            responsive: [{
              breakpoint: 1100,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            }]
          });
        });
      } /// Product options


      theme.OptionManager.initProductOptions($('[name="id"]', target)); /// Boxed-options

      theme.convertOptionsToBoxes(target); /// Visual style of dropdowns

      $('select:not(.original-selector)').selectReplace().closest('.selector-wrapper').addClass('has-pretty-select'); /// Size chart

      $('.size-chart-link', target).on('click', function () {
        $.colorbox({
          inline: true,
          href: '#size-chart-content > .size-chart'
        });
        return false;
      }); // Keep colour swatches updated

      $(window).on('cc-variant-updated.product-swatches', function (e, args) {
        var $swatchesContainer = $('.cc-swatches', target);

        if ($swatchesContainer.length) {
          $swatchesContainer.find('.cc-swatches__label').remove();
          $swatchesContainer.find('label').append("<span class=\"cc-swatches__label\">".concat($swatchesContainer.find('.active').text(), "</span>"));
        }
      }); /// Click on the reviews link
      // $('.product-area__details__header [href="#shopify-product-reviews"]', target).on('click', function(){
      //   const $socialLinks = $(target).find('.social-links');
      //   const $reviewsTab = $(target).find('#shopify-product-reviews').closest('.cc-tabs__tab');
      //   const $reviewsHeader = $reviewsTab.find('.cc-tabs__accordion__header');
      //
      //   if($reviewsHeader.length) {
      //     if($reviewsHeader.attr('aria-selected') != "true") {
      //       $reviewsHeader.trigger('click');
      //     }
      //
      //     //Calculate where Reviews are (which isn't easy because they're in a sticky container)
      //     const reviewsTop = $(target).offset().top
      //       + $(target).outerHeight()
      //       - $reviewsTab.outerHeight()
      //       - parseInt($(target).find('.product-area__details__inner').css('padding-bottom').replace('px', ''))
      //       - ($socialLinks.length ? $(target).find('.social-links').outerHeight() : 0)
      //       - theme.Nav().bar.height();
      //
      //     theme.viewport.scrollTo(null, reviewsTop);
      //     return false;
      //   }
      // });
      /// Trigger the animations

      $.fn.initAnimateOnScroll();
    };

    this.onSectionUnload = function (target) {
      $(window).off('doThemeGalleryResizeCheck.productTemplateGallery');
      $(window).off('throttled-scroll.sticky-add-to-cart');
      $(window).off('.productDetails');
      $(window).off('cc-variant-updated.product-swatches');
      $('.spr-container', target).off('click');
      $('.theme-gallery-thumb', target).off('click');
      $('.carousel-wrapper .carousel', target).off('init reInit setPosition');
      $('.slick-slider', target).slick('unslick');
      $('.size-chart-link', target).off('click');
      $('.product-area__add-to-cart-xs button', target).off('click'); // $('.product-area > .product-area__details__header', target).remove();

      theme.OptionManager.unloadProductOptions($('[name="id"]', target));

      if (galleries.length) {
        for (var i = 0; i < galleries.length; i++) {
          galleries[i].destroy();
        }
      }

      if (this.storeAvailability) {
        this.storeAvailability.onSectionUnload();
      }
    };
  }();
  theme.CollectionTemplateSection = new function () {
    this.onSectionLoad = function (target) {
      theme.updateBodyPadding();
      var tagGroupsEnabled = $(target).data('tag-groups-enabled'); // Infinite scroll

      theme.loadInfiniteScroll(target);

      if (!tagGroupsEnabled) {
        // Sorting
        var $sortBy = $('#sort-by', target);

        if ($sortBy.length > 0) {
          queryParams = {};

          if (location.search.length) {
            for (var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&'); i < aCouples.length; i++) {
              aKeyValue = aCouples[i].split('=');

              if (aKeyValue.length > 1) {
                queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);
              }
            }
          }

          $sortBy.val($sortBy.data('initval')).trigger('change').on('change', function () {
            queryParams.sort_by = $(this).val();
            location.search = $.param(queryParams);
          });
        } // Visual style of dropdowns


        $('select').selectReplace();
      } else {
        var buildActiveFilterControls = function buildActiveFilterControls() {
          var activeFilterHtml = "";
          $('.cc-product-filter ul:not(.cc-product-filter__sort-by) li.active button', target).each(function () {
            var tag = $(this).closest('li').data('tag');
            var heading = $(this).closest('.cc-tabs__tab').find('.cc-tabs__accordion__header').text().trim();
            activeFilterHtml += "<li><a href=\"#\" data-active-tag=\"".concat(tag, "\">").concat(heading, ": ").concat($(this).text(), "</a></li>");
          });

          if (activeFilterHtml) {
            var collectionUrl = $(target).closest('[data-collection-url]').data('collection-url');
            $('.product-list-container', target).prepend("\n            <div class=\"active-filter-controls-container\">\n              <ul class=\"active-filter-controls\">\n                  ".concat(activeFilterHtml, "\n                  <li><a href=\"").concat(collectionUrl, "\" class=\"active-filter-controls__clear\">").concat(theme.strings.clearAll, "</a></li>\n              </ul>\n            </div>\n          "));
          } //Update the mobile 'Close filters' button text


          if ($('.cc-product-filter', target).hasClass('-in')) {
            var buttonText;
            var resultCount = $('.product-list', target).data('result-count');

            if (resultCount === 1) {
              buttonText = $('[data-show-collection-filter]', target).data('result-count-text-singular').replace("[x]", resultCount);
            } else {
              buttonText = $('[data-show-collection-filter]', target).data('result-count-text').replace("[x]", resultCount);
            }

            $('[data-show-collection-filter]', target).text(buttonText);
          }
        };

        var updateCollectionResults = function updateCollectionResults(url, updatePushState) {
          var $filterContainer = $('.cc-product-filter-container', target);
          $filterContainer.addClass('cc-product-filter-container--loading');
          $filterContainer.find('.product-list').append("<span class=\"loading\" aria-label=\"".concat(theme.strings.loading, "\">").concat(theme.icons.loading, " </span>"));
          theme.unloadInfiniteScroll(target);
          $.get(url, function (content) {
            var $newPage = $($.parseHTML(content));
            var newTitleTag = $newPage.filter('title').text().trim();
            document.title = newTitleTag;

            if (updatePushState) {
              window.history.pushState(null, newTitleTag, url);
            } //Update the html of the page


            $filterContainer.find('.product-list-container').html($newPage.find('.cc-product-filter-container .product-list-container').html()); //Update each of the hrefs in the filter

            var $filters = $newPage.find('.cc-product-filter .cc-tabs__tab__panel ul');
            $filterContainer.find('.cc-product-filter .cc-tabs__tab__panel ul').each(function (index) {
              $(this).html($filters.eq(index).html());
            });
            buildActiveFilterControls();
            $filterContainer.removeClass('cc-product-filter-container--loading');
            theme.loadInfiniteScroll(target);
            var $collectionContainer = $('.cc-product-filter-container');

            if ($(window).scrollTop() - 200 > $collectionContainer.offset().top) {
              theme.viewport.scrollTo($collectionContainer, -1, 1000, 25);
            }
          });
        };

        // Handle click on the filter groups
        $(target).on('click', '.cc-tabs__tab__panel a', function () {
          $(this).closest('li').toggleClass('active');
          updateCollectionResults($(this).attr('href'), true);
          return false;
        }); // Handle clicking on the pagination

        $(target).on('click', '.pagination a, .active-filter-controls a.active-filter-controls__clear', function () {
          updateCollectionResults($(this).attr('href'), true);
          return false;
        });
        $(window).on('popstate.collection-list', function (e) {
          updateCollectionResults(window.location.href, false);
        }); // Handling clicking on the main filters - only allow one option per filter group

        $(target).on('click', '.cc-tabs__tab .not-a-button', function () {
          //Detect whether we are just deselecting this option
          var preventReselection = $(this).closest('li').hasClass('active'); //Update classes

          $(this).closest('.cc-tabs__tab').find('.active').removeClass('active');

          if (!preventReselection) {
            $(this).closest('li').addClass('active');
          } //Get all active tags


          var activeTags = [];
          $(target).find('.cc-tabs__tab .active').each(function () {
            if ($(this).data('tag')) {
              activeTags.push($(this).data('tag'));
            }
          }); //Construct a new url

          var activeTagsUrlEncoded = activeTags.length > 0 ? activeTags.join("+") : "";
          var currentSortBy = $(target).find('[data-sort].active').data('sort');
          var url = window.location.protocol + "//" + window.location.host + $(target).data('collection-url') + "/" + activeTagsUrlEncoded + "?sort_by=" + currentSortBy;
          updateCollectionResults(url, true);
        });
        $(target).on('click', '[data-active-tag]', function (e) {
          e.preventDefault();
          $(target).find('[data-tag="' + $(this).data('active-tag') + '"] button').trigger('click');
          return false;
        });
        buildActiveFilterControls(); //Prepare the mobile filter button
        // let filterButtonIsStuck = false;
        // let $stickyFilterButton = $('.footer-button-xs', target);
        // $(window).on('throttled-scroll.collection-filter-button', function () {
        //   if ($(window).scrollTop() > 400) {
        //     if (filterButtonIsStuck) {
        //       $stickyFilterButton.removeClass('-out');
        //       filterButtonIsStuck = false;
        //     }
        //   } else {
        //     if (!filterButtonIsStuck) {
        //       $stickyFilterButton.addClass('-out');
        //       filterButtonIsStuck = true;
        //     }
        //   }
        // });

        var nav = theme.Nav();
        $(target).on('click', '[data-show-collection-filter]', function () {
          if ($('.cc-product-filter', target).hasClass('-in')) {
            $(this).text($(this).data('open-text'));
            nav.bar.fadeOut(false);
          } else {
            $(this).text($(this).data('close-text'));
            nav.bar.fadeOut(true);
          }

          $('.cc-product-filter', target).toggleClass('-in');
          return false;
        });
      }

      theme.checkViewportFillers();
      theme.assessAltLogo();
    };

    this.onSectionUnload = function (target) {
      $('#sort-by', target).off('change');
      $(window).off('popstate.collection-list');
      $(window).off('throttled-scroll.collection-filter-button');
      $('.cc-tabs__tab__panel a', target).off('click');
      $(target).off('click');
      theme.unloadInfiniteScroll();
    };
  }();
  theme.ListCollectionsSection = new function () {
    this.onSectionLoad = function (target) {};
  }();
  theme.SearchTemplateSection = new function () {
    this.onSectionLoad = function (target) {
      theme.loadInfiniteScroll(target);
    };

    this.onSectionUnload = function (target) {
      theme.unloadInfiniteScroll();
    };
  }();
  theme.BlogTemplateSection = new function () {
    this.onSectionLoad = function (target) {
      /// Visual style of dropdowns
      $('select').selectReplace();
      theme.allowRTEFullWidthImages(target);
    };
  }();
  theme.ArticleTemplateSection = new function () {
    this.onSectionLoad = function (target) {
      theme.checkViewportFillers();
      theme.assessAltLogo();
      theme.allowRTEFullWidthImages(target);
    };
  }();
  theme.CartTemplateSection = new function () {
    this.onSectionLoad = function (target) {
      theme.cartNoteMonitor.load($('#cartform [name="note"]', target)); // terms and conditions checkbox

      if ($('#cartform input#terms', target).length > 0) {
        $(document).on('click.cartTemplateSection', '#cartform [name="checkout"]:submit, .additional-checkout-buttons :submit, .additional-checkout-buttons input[type=image], a[href="/checkout"]', function () {
          if ($('#cartform input#terms:checked').length == 0) {
            alert(theme.strings.cartConfirmation);
            return false;
          }
        });
      }
    };

    this.onSectionUnload = function (target) {
      theme.cartNoteMonitor.unload($('#cartform [name="note"]', target));
      $(document).off('.cartTemplateSection');
    };
  }();
  theme.CollectionListSection = new function () {
    this.onSectionLoad = function (target) {
      var $swiperCont = $('.swiper-container', target);

      if ($swiperCont.length === 1) {
        theme.initProductSlider($swiperCont);
      }
    };
  }();
  theme.FeaturedCollectionSection = new function () {
    this.onSectionLoad = function (target) {
      var $swiperCont = $('.swiper-container', target);

      if ($swiperCont.length === 1) {
        theme.initProductSlider($swiperCont);
      }
    };
  }();
  theme.ProductRecommendations = new function () {
    this.onSectionLoad = function (container) {
      var max_products = 12; // Look for an element with class 'product-recommendations'

      var productRecommendationsSection = document.querySelector(".product-recommendations");

      if (productRecommendationsSection === null) {
        return;
      } // Read product id from data attribute


      var productId = productRecommendationsSection.dataset.productId; // Read limit from data attribute

      var limit = productRecommendationsSection.dataset.limit; // Build request URL

      var requestUrl = productRecommendationsSection.dataset.url + "?section_id=product-recommendations&limit=" + max_products + "&product_id=" + productId; // Create request and submit it using Ajax

      var request = new XMLHttpRequest();
      request.open("GET", requestUrl);

      request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
          var container = document.createElement("div");
          container.innerHTML = request.response;
          productRecommendationsSection.parentElement.innerHTML = container.querySelector(".product-recommendations").innerHTML;
          $.fn.initAnimateOnScroll();
          var $swiperCont = $('#shopify-section-product-recommendations .swiper-container');

          if ($swiperCont.length === 1) {
            theme.initProductSlider($swiperCont);
            setTimeout(theme.tryRefreshProductReviews, 500);
          } else {
            console.warn('Unable to find #shopify-section-product-recommendations');
          }
        }
      };

      request.send();
    };

    this.onSectionUnload = function (container) {};
  }();
  theme.GallerySection = new function () {
    this.onSectionLoad = function (container) {
      var $carouselGallery = $('.gallery--mobile-carousel', container);

      if ($carouselGallery.length) {
        var assessCarouselFunction = function assessCarouselFunction() {
          var isCarousel = $carouselGallery.hasClass('slick-slider'),
              shouldShowCarousel = theme.viewport.isXs();

          if (!shouldShowCarousel) {
            $('.lazyload--manual', $carouselGallery).removeClass('lazyload--manual').addClass('lazyload');
          }

          if (isCarousel && !shouldShowCarousel) {
            // Destroy carousel
            // - unload slick
            $carouselGallery.slick('unslick').off('init');
            $carouselGallery.find('a, .gallery__item').removeAttr('tabindex').removeAttr('role'); // - re-row items

            var rowLimit = $carouselGallery.data('grid');
            var $currentRow = null;
            $carouselGallery.find('.gallery__item').each(function (index) {
              if (index % rowLimit === 0) {
                $currentRow = $('<div class="gallery__row">').appendTo($carouselGallery);
              }

              $(this).appendTo($currentRow);
            });
          } else if (!isCarousel && shouldShowCarousel) {
            // Create carousel
            // - de-row items
            $carouselGallery.find('.gallery__item').appendTo($carouselGallery);
            $carouselGallery.find('.gallery__row').remove(); // - init carousel

            $carouselGallery.on('init', function () {
              $('.lazyload--manual', this).removeClass('lazyload--manual').addClass('lazyload');
            }).slick({
              autoplay: false,
              fade: false,
              infinite: false,
              useTransform: true,
              arrows: false,
              dots: true
            });
          }
        };

        assessCarouselFunction();
        $(window).on('debouncedresize.themeSection' + container.id, assessCarouselFunction);
      }
    };

    this.onSectionUnload = function (container) {
      $(window).off('.themeSection' + container.id);
      $('.slick-slider', container).each(function () {
        $(this).slick('unslick').off('init');
      });
    };

    this.onBlockSelect = function (block) {
      $(block).closest('.slick-slider').each(function () {
        $(this).slick('slickGoTo', $(this).data('slick-index')).slick('slickPause');
      });
    };

    this.onBlockDeselect = function (block) {
      $(block).closest('.slick-slider').each(function () {
        $(this).slick('slickPlay');
      });
    };
  }();
  theme.TestimonialsSection = new function () {
    var scrollax;

    this.onSectionLoad = function (container) {
      if (theme.settings.animationEnabledDesktop && theme.viewport.isSm()) {
        scrollax = new Scrollax(window).init();
      }
    };

    this.onSectionUnload = function (container) {
      if (scrollax && scrollax.Scrollax) {
        scrollax.Scrollax('destroy');
      }
    };
  }();
  theme.PageStoryTemplate = new function () {
    var scrollax;

    this.onSectionLoad = function (container) {
      if (theme.settings.animationEnabledDesktop && theme.viewport.isSm()) {
        scrollax = new Scrollax(window).init();
      }
    };

    this.onSectionUnload = function (container) {
      if (scrollax && scrollax.Scrollax) {
        scrollax.Scrollax('destroy');
      }
    };
  }();
  jQuery(function ($) {
    lazySizesConfig.minSize = 200; /// Gallery variant images

    $(document).on('variantImageSelected', '.theme-gallery', function (e, args) {
      var $container = $(this);

      if ($(this).find('.swiper-container-horizontal').length) {
        var $swiperImgLinks = $('.swiper-container:first .swiper-slide .product-media', this);
        var swiperId = $('.swiper-container:first', this).data('swiper-id');
        var swiper = theme.swipers[swiperId];
        var toMatch = args.featured_media.id;
        var $match = $swiperImgLinks.filter(function () {
          return $(this).data('media-id') == toMatch;
        }).first();

        if ($match.length) {
          setTimeout(function () {
            swiper.update();
            swiper.slideTo($match.parent().index(), 1000);
            $container.find('.product-media--active-variant').removeClass('product-media--active-variant');
            $match.closest('.product-media').addClass('product-media--active-variant');
          }, args.eventType === 'firstrun' ? 1500 : 0); //Above: If its the first page load, wait 1.5s for media to load
        }
      } else if (!$(this).hasClass('featured-product__gallery')) {
        $(window).trigger('ccScrollToMedia', args.featured_media.id);
      } //If thumbs, scroll to the active one and add a class to it


      var $thumbSlider = $(this).closest('.shopify-section').find('.product-area__details__thumbs .carousel');

      if ($thumbSlider.length === 1 && ($container.data('scroll-to-variant-media') !== false || theme.viewport.isXs())) {
        var $activeSlide = $thumbSlider.find("[data-media-id=\"".concat(args.featured_media.id, "\"]:first"));

        if ($activeSlide.length) {
          $thumbSlider.find('.thumb-active').removeClass('thumb-active');
          $activeSlide.find('a').addClass('thumb-active');
          $thumbSlider.slick('slickGoTo', $activeSlide.data('slick-index'));
        }
      }
    }); /// Visual style of dropdowns

    $('select:not(.original-selector)').selectReplace().closest('.selector-wrapper').addClass('has-pretty-select'); /// General-purpose lightbox

    $('a[rel=lightbox]').colorbox(); /// Galleries (only on large screens)

    if (theme.viewport.isSm()) {
      $('a[rel="gallery"]').colorbox({
        rel: 'gallery'
      });
    } /// Translations for colorbox


    $.extend($.colorbox.settings, {
      previous: theme.strings.colorBoxPrevious,
      next: theme.strings.colorBoxNext,
      close: theme.icons.close
    }); /// Image-links

    $('.rte a img').closest('a').addClass('contains-img'); /// Check if using correct logo (would be nice to assess on section move/load/unload as well)

    theme.assessAltLogo(); /// On any section reload

    $(document).on('shopify:section:reorder', function (e) {
      theme.checkViewportFillers();
      theme.assessAltLogo();
      theme.updateBodyPadding();
      theme.assessTopSectionPadding();
    });
    $(document).on('shopify:section:load', function (e) {
      /// Image-links inside any rte block
      $('.rte a img', e.target).closest('a').addClass('contains-img'); /// Feature-sized headers have a little fluff

      if ($('.feature-header', e.target).length) {
        $(window).trigger('assessFeatureHeaders');
      } /// Init any inline videos


      $('.section-background-video--inline', e.target).each(function () {
        theme.VideoManager.onSectionLoad($(this)[0]);
      });
      theme.checkViewportFillers();
      theme.assessAltLogo();
      theme.updateBodyPadding();
      theme.assessTopSectionPadding();
    }); // end of shopify:section:load

    $(document).on('shopify:section:unload', function (e) {
      /// Unload any inline videos
      $('.section-background-video--inline', e.target).each(function () {
        theme.VideoManager.onSectionUnload($(this)[0]);
      });
    });
    theme.assessTopSectionPadding();
    $(window).on('debouncedresizewidth.assessTopSectionPadding', theme.assessTopSectionPadding); /// Slideshow fills viewport

    theme.lastViewportWidth = 0;
    $(window).on('debouncedresize slideshowfillheight', function (e) {
      // if only height changed, don't do anything, to avoid issue with viewport-size-change on mobile-scroll
      if (e.type == 'debouncedresize' && theme.lastViewportWidth == $(window).width()) {
        return;
      }

      var nav = theme.Nav(); // set height of slideshows

      var desiredHeight = $(window).height();

      if (nav.bar.isAnnouncementBar()) {
        desiredHeight -= nav.bar.heightOfAnnouncementBar();
      }

      $('.slideshow.fill-viewport, .slideshow.fill-viewport .slide').css('min-height', desiredHeight); // check for content that must be contained

      $('.slideshow.fill-viewport').each(function () {
        var inner = 0;
        $(this).find('.slide').each(function () {
          var t = 0;
          $('.fill-viewport__contain', this).each(function () {
            t += $(this).outerHeight(true);
          });

          if (inner < t) {
            inner = t;
          }
        });

        if (inner > desiredHeight) {
          $(this).css('min-height', inner);
          $('.slide', this).css('min-height', inner);
        }
      });
      theme.lastViewportWidth = $(window).width(); // bump down any header-overlap areas to cater for announcements

      if ($('body.header-section-overlap').length && nav.bar.isAnnouncementBar()) {
        $('#page-content').css('margin-top', nav.bar.heightOfAnnouncementBar());
      } else {
        $('#page-content').css('margin-top', '');
      }
    }); /// Some states are dependent on scroll position

    $(window).on('scroll assessFeatureHeaders', function () {
      var scrollTop = $(window).scrollTop();
      var appearenceBuffer = 60;
      var windowBottom = scrollTop + $(window).height() - appearenceBuffer;
      $('body').toggleClass('scrolled-down', scrollTop > 0);
      theme.assessAltLogo();
      $('.feature-header:not(.feature-header--visible)').filter(function () {
        var offset = $(this).offset().top;
        var height = $(this).outerHeight();
        return offset + height >= scrollTop && offset <= windowBottom;
      }).addClass('feature-header--visible');
    });
    $(function () {
      $(window).trigger('slideshowfillheight');
      $(window).trigger('assessFeatureHeaders');
    }); /// Side up and remove

    $.fn.slideUpAndRemove = function () {
      var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
      $(this).each(function () {
        $(this).slideUp(speed, function () {
          $(this).remove();
        });
      });
    }; /// Overlay menu nav


    var previousNavRoutes = ['_root'];

    updateNavCtas = function updateNavCtas() {
      var trimmedTitle = previousNavRoutes[previousNavRoutes.length - 1];
      var $ctasToShow = $("#page-menu .nav-ctas__container[data-for-nav-item=\"".concat(trimmedTitle, "\"]:hidden"));

      if ($ctasToShow.length > 0) {
        if ($('#page-menu .nav-ctas__container:visible').length) {
          $('#page-menu .nav-ctas__container:visible').fadeOut(drilldownTransSpeed, function () {
            $ctasToShow.fadeIn(drilldownTransSpeed);
          });
        } else {
          setTimeout(function () {
            $ctasToShow.fadeIn(drilldownTransSpeed);
          }, drilldownTransSpeed);
        }
      } else {
        $('#page-menu .nav-ctas__container:visible').fadeOut(drilldownTransSpeed);
      }
    }; //Drill down


    var drilldownTransSpeed = 250;
    $(document).on('click', '#page-menu.nav-uses-modal .main-nav li.has-children > a', function () {
      var trimmedTitle = $(this).text().replace(/^\s\s*/, '').replace(/\s\s*$/, '').toLowerCase();
      previousNavRoutes.push(trimmedTitle); //- Links

      var $content = $('<div class="container growth-area"/>').append($(this).siblings('ul').clone().wrap("<div class=\"nav-body main-nav growth-area\"/>").parent()); //- Title, in its own menu row, using subnav style for the other links

      var $menuList = $content.find('.main-nav > ul').wrap('<li/>').parent().wrap('<ul/>').parent();

      if (theme.strings.back.length > 0) {
        $menuList.prepend("<li class=\"main-nav__back\" data-nav-title=\"".concat(trimmedTitle, "\"><a href=\"#\" data-revert-back><span class=\"arr arr--left\">").concat(theme.icons.chevronLeft, "</span>").concat(theme.strings.back, "</a></li>"));
      } //Hide current & show new


      var $containers = $('#page-menu > .inner > .nav-container > .container:not(.inactive)');
      $containers.addClass('inactive').fadeOut(drilldownTransSpeed, function () {
        $content.hide().insertAfter($containers.last()).fadeIn(drilldownTransSpeed);
        $content.closest('.theme-modal').focus(); // add focus for keyboard scrolling
      });
      updateNavCtas(); //Hide the footer links

      $('#page-menu > .inner > .nav-container > .nav-footer-links').fadeOut(drilldownTransSpeed);
      return false;
    }); //Drill back up

    $(document).on('click', '#page-menu.nav-uses-modal a[data-revert-back]', function () {
      previousNavRoutes.pop();
      updateNavCtas();
      $('#page-menu.nav-uses-modal > .inner > .nav-container > .container:not(.inactive)').fadeOutAndRemove(drilldownTransSpeed, function () {
        var $menuToShow = $('#page-menu.nav-uses-modal > .inner > .nav-container > .container.inactive:last');
        $menuToShow.removeClass('inactive').fadeIn(drilldownTransSpeed);

        if ($menuToShow.data('root-nav')) {
          $('#page-menu > .inner > .nav-container > .nav-footer-links').fadeIn(drilldownTransSpeed);
        }
      });
      return false;
    }); //Close and reset nav

    $(document).on('reset-modal', '#page-menu.nav-uses-modal', function () {
      closeThemeModal();
      setTimeout(function () {
        $('#page-menu.nav-uses-modal > .inner > .nav-container > .container').removeClass('inactive').show().slice(1).remove();
      }, 300); // Delay to match transition on .theme-modal.reveal

      return false;
    }).on('click', 'a[data-reset-and-close]', function () {
      $('#page-menu.nav-uses-modal').trigger('reset-modal');
      return false;
    }); /// Inline nav links
    //Handle expanding nav

    theme.lastHoverInteractionTimestamp = -1;
    $(document).on('click', '.multi-level-nav .nav-rows  .contains-children > a', function (e) {
      $(this).parent().find('ul:first').slideToggle(300);
      return false;
    });
    $(document).on(theme.device.isTouch() ? 'click forceopen forceclose' : 'forceopen forceclose', '.multi-level-nav .contains-mega-menu a.has-children', function (e) {
      // skip column headings
      if ($(this).hasClass('column-title')) {
        return true;
      }

      var navAnimSpeed = 200; // check if mouse + click events occurred in same event chain

      var thisInteractionTimestamp = Date.now();

      if (e.type == 'click' && thisInteractionTimestamp - theme.lastHoverInteractionTimestamp < 500) {
        return false;
      }

      if (e.type == 'forceopen' || e.type == 'forceclose') {
        theme.lastHoverInteractionTimestamp = thisInteractionTimestamp;
      } //Set some useful vars


      var $tierEl = $(this).closest('[class^="tier-"]');
      var $tierCont = $tierEl.parent();
      var targetTierNum = parseInt($tierEl.attr('class').split('-')[1]) + 1;
      var targetTierClass = 'tier-' + targetTierNum; ///Remove nav for all tiers higher than this one (unless we're opening on same level on hover)

      if (e.type != 'forceopen') {
        $tierCont.children().each(function () {
          if (parseInt($(this).attr('class').split('-')[1]) >= targetTierNum) {
            if (e.type == 'forceclose') {
              $(this).removeClass('tier-appeared');
              var $this = $(this);
              theme.hoverRemoveTierTimeoutId = setTimeout(function () {
                $this.remove();
              }, 260);
            } else {
              $(this).slideUpAndRemove(navAnimSpeed);
            }
          }
        });
      } //Are we expanding or collapsing


      if ($(this).hasClass('expanded') && e.type != 'forceopen') {
        //Collapsing. Reset state
        $(this).removeClass('expanded').removeAttr('aria-expanded').removeAttr('aria-controls');
      } else {
        ///Show nav
        //Reset other nav items at this level
        $tierEl.find('a.expanded').removeClass('expanded').removeAttr('aria-expanded');
        clearTimeout(theme.hoverRemoveTierTimeoutId); //If next tier div doesn't exist, make it

        var $targetTierEl = $tierCont.children('.' + targetTierClass);

        if ($targetTierEl.length == 0) {
          $targetTierEl = $('<div />').addClass(targetTierClass).attr('id', 'menu-' + targetTierClass).appendTo($tierCont);

          if (navAnimSpeed > 0) {
            // new tier, start at 0 height
            $targetTierEl.css('height', '0px');
          }
        } else {
          if (navAnimSpeed > 0) {
            // tier exists, fix its height before replacing contents
            $targetTierEl.css('height', $targetTierEl.height() + 'px');
          }
        } // populate new tier


        $targetTierEl.empty().stop(true, false).append($(this).siblings('ul').clone().attr('style', ''));

        if (navAnimSpeed > 0) {
          // transition to correct height, then clear height css
          $targetTierEl.animate({
            height: $targetTierEl.children().outerHeight()
          }, navAnimSpeed, function () {
            $(this).css('height', '');
          });
        } // add class after reflow, for any transitions


        setTimeout(function () {
          $targetTierEl.addClass('tier-appeared');
        }, 10); //Mark as expanded

        $(this).addClass('expanded').attr('aria-expanded', 'true').attr('aria-controls', 'menu-' + targetTierClass);
        $('body').addClass('nav-mega-open');
      }

      return false;
    }); /// Expanding nav on hover

    theme.closeOpenMenuItem = function () {
      $('body').removeClass('nav-mega-open');
      $('.multi-level-nav.reveal-on-hover .has-children.expanded').trigger('forceclose');
    };

    $(document).on('mouseenter mouseleave', '.multi-level-nav.reveal-on-hover .tier-1 .contains-mega-menu', function (e) {
      if (theme.viewport.isSm()) {
        clearTimeout(theme.closeOpenMenuItemTimeoutId);

        if (e.type == 'mouseenter') {
          $(this).children('a').trigger('forceopen');
        } else {
          theme.closeOpenMenuItemTimeoutId = setTimeout(theme.closeOpenMenuItem, 200);
        }
      }
    });
    $(document).on('mouseleave', '.multi-level-nav.reveal-on-hover .tier-appeared', function (e) {
      if (theme.viewport.isSm()) {
        clearTimeout(theme.closeOpenMenuItemTimeoutId);
        theme.closeOpenMenuItemTimeoutId = setTimeout(theme.closeOpenMenuItem, 50);
      }
    });
    $(document).on('mouseenter', '.multi-level-nav.reveal-on-hover .tier-2, .multi-level-nav.reveal-on-hover .tier-3', function (e) {
      if (theme.viewport.isSm()) {
        clearTimeout(theme.closeOpenMenuItemTimeoutId);
      }
    });

    function isPageScrollin() {
      return $('#page-content').outerHeight() > $(window).height();
    } /// Modal windows


    var removeModalTimeoutID = -1;
    var closeModalDelay = 300;

    window.closeThemeModal = function (immediate) {
      $('a[data-modal-toggle].active').removeClass('active');
      var $modal = $('.theme-modal.reveal');

      if ($modal.hasClass('product-image-zoom')) {
        $modal.find('.modal-close').remove();
      }

      $modal.removeClass('reveal').addClass('unreveal');

      if (!$('body').hasClass('modal-active--prevent-close')) {
        $('body').addClass('modal-closing');
      }

      if ($('html.supports-transforms').length && (typeof immediate == 'undefined' || !immediate)) {
        removeModalTimeoutID = setTimeout(function () {
          $('body').removeClass('modal-active').removeClass('modal-active--show-close-bg').removeClass('modal-active--prevent-close');
          $('body, #page-content, #site-control').css('padding-right', '');
        }, closeModalDelay); // Delay to match transition on .theme-modal.reveal
      } else {
        $('body').removeClass('modal-active').removeClass('modal-active--show-close-bg');
        $('body, #site-control').css('padding-right', '');
      } // tabindex


      $modal.find('a').attr('tabindex', '-1');

      if (immediate) {
        $('body').removeAttr('data-modal-id');
      } else {
        setTimeout(function () {
          $('body').removeAttr('data-modal-id');
        }, 200);
      }

      setTimeout(function () {
        $('body').removeClass('modal-closing');
      }, 300);
      $('#search-modal').removeClass('-in');
    }; //Show arbitrary content in modal window


    window.showThemeModal = function (el, id, callbackFn, showCloseBackground, preventCloseButton) {
      //Close current
      closeThemeModal(true); //Remove any existing temporary modals

      $('.theme-modal.temp').remove();
      theme.Nav().bar.hide(false); //Actually add to the page

      var $el = $(el);
      $el.appendTo('body');
      setTimeout(function () {
        $el.addClass('reveal');
      }, 10);
      theme.addControlPaddingToModal(); //When body is under a modal & has scrollbar, it is not allowed to scroll,
      //so we overflow:hidden it and add a padding the same size as the scrollbar

      if (isPageScrollin()) {
        $('#page-content, #site-control').css('padding-right', $.scrollBarWidth());
      } //Set page state


      $('body').addClass('modal-active');

      if (showCloseBackground) {
        $('body').addClass('modal-active--show-close-bg');
      }

      if (preventCloseButton) {
        $('body').addClass('modal-active--prevent-close');
      } else {
        $('body').addClass('modal-opening');
      }

      if (id) {
        $('body').attr('data-modal-id', id);
      }

      if ($('.theme-modal:visible [data-modal-close]').length) {
        setTimeout(function () {
          $('.theme-modal:visible [data-modal-close]').focus();
        }, 100);
      }

      setTimeout(function () {
        $('body').removeClass('modal-opening');
      }, 300);

      if (callbackFn) {
        callbackFn($el);
      }
    }; //Show existing modal container hidden on page


    window.showInPageModal = function ($target) {
      $target.removeClass('unreveal').addClass('reveal');
      theme.addControlPaddingToModal();
      var $inputs = $target.find('.focus-me'); //Any inputs to highlight?

      $(this).addClass('active'); //When body is under a modal, it is not allowed to scroll, so we need this to keep it the same width

      if (isPageScrollin()) {
        $('body, #site-control').css('padding-right', $.scrollBarWidth());
      }

      $('body').addClass('modal-active  modal-opening').attr('data-modal-id', $target.attr('id'));
      $('a[tabindex]', $target).removeAttr('tabindex');

      if ($inputs.length == 0) {
        $target.closest('.theme-modal').focus(); // add focus for keyboard scrolling
      } else {
        if (theme.viewport.isSm()) {
          $inputs.focus();
        }
      }

      if ($target.attr('id') === "search-modal") {
        setTimeout(function () {
          $('#search-modal').addClass('-in');
        }, 400);
      }

      setTimeout(function () {
        $('body').removeClass('modal-opening');
      }, 400);
    };

    $(document).on('click', 'body:not(.modal-active) a[data-modal-toggle]', function (e) {
      e.preventDefault();
      window.showInPageModal($($(this).data('modal-toggle')));
    }); //Close modal on escape keypress

    $(document).on('keyup', function (e) {
      if (e.which == 27) {
        closeThemeModal();
      }
    }); //Close modal button

    $(document).on('click', 'body.modal-active a[data-modal-close]', function () {
      closeThemeModal();
      return false;
    }); //Click outside container to close modal

    $(document).on('click', '.theme-modal', function (e) {
      if (e.target == this) {
        closeThemeModal(); //Trigger any reset events (e.g. in drilldown nav)

        $(this).trigger('reset-modal');
        return false;
      }
    }); //Switch to a different modal

    $(document).on('click', 'body.modal-active a[data-modal-toggle]', function () {
      closeThemeModal(true);
      $(this).click();
      return false;
    });
    $(document).on('click', '.site-control a[data-modal-nav-toggle]', function () {
      if ($('body.modal-active').length) {
        closeThemeModal(true);
        setTimeout(function () {
          $('#page-menu .crumbs a:first').trigger('click');
        }, 305); // after modal fade-out
      } else {
        window.showInPageModal($('#page-menu'));
      }

      return false;
    }); //Open arbitrary page in a modal

    $(document).on('click', 'a[data-modal-target]', function (e) {
      e.preventDefault();
      showThemeModal($('<div class="theme-modal temp" role="dialog" aria-modal="true"/>').append($('<div class="inner"/>').html($($(this).data('modal-target')).wrapInner('<div class="container"/>').html())));
    }); //Immmediately select contents when focussing on some inputs

    $(document).on('focusin click', 'input.select-on-focus', function () {
      $(this).select();
    }).on('mouseup', 'input.select-on-focus', function (e) {
      e.preventDefault(); //Prevent mouseup killing select()
    }); //Textareas increase size as you type

    $('#template textarea').each(function () {
      $(this).autogrow({
        animate: false,
        onInitialize: true
      });
    });
    $(document).on('click', '.quantity-wrapper [data-quantity]', function () {
      var adj = $(this).data('quantity') == 'up' ? 1 : -1;
      var $qty = $(this).closest('.quantity-wrapper').find('[name=quantity]');
      $qty.val(Math.max(1, parseInt($qty.val()) + adj));
      return false;
    }); /// Redirection dropdowns

    $(document).on('change', 'select.redirecter', function () {
      window.location = $(this).val();
    });

    theme.getUrlParameter = function (name) {
      name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
      var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
      var results = regex.exec(location.search);
      return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }; /// Scroll to the newsletter when necessary


    var formType = theme.getUrlParameter('form_type');

    if (theme.getUrlParameter('customer_posted') || formType && formType === 'customer') {
      if ($('#footer_newsletter_signup').length) {
        setTimeout(function () {
          $('html,body').animate({
            scrollTop: $('#footer_newsletter_signup').offset().top - 100
          }, 1000);
        }, 100);
      }
    } /// Detect android for 100vh fix


    if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
      $('html').addClass('os-android');
    } /// Bind checkout button clicks


    $(document).on('click', '[data-cc-checkout-button]', function (e) {
      if ($('#cc-checkout-form').length) {
        $('#cc-checkout-form').submit();
        return false;
      } else {
        console.warn('Unable to find form with id cc-checkout-form');
      }
    }); /// Bind pseudo-page-to-page animation event

    $(document).on('click', '[data-cc-animate-click]', function (e) {
      if (theme.settings.animationEnabledDesktop) {
        if ((window.location.hostname === this.hostname || !this.hostname.length) && $(this).attr('href').length > 0 && $(this).attr('href') !== '#') {
          e.preventDefault();
          $('#cc-veil').addClass('-in');
          var url = $(this).attr('href');
          $('body').append("<link rel=\"prefetch\" href=\"".concat(url, "\">"));
          setTimeout(function () {
            window.location.href = url;
          }, 200);
          setTimeout(function () {
            //Remove the veil after a few second just in case
            $('#cc-veil').removeClass('-in');
          }, 8000);
          return false;
        }
      }
    });
    theme.updateBodyPadding();
    $(window).on('debouncedresizewidth.updateBodyPadding', theme.updateBodyPadding); // Process lazy loaded images on page load

    setTimeout(lazySizes.autoSizer.checkElems, 1000); /// Watch for tabbing

    function handleFirstTab(e) {
      if (e.keyCode === 9) {
        // 9 == tab
        $('body').addClass('user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
      }
    }

    window.addEventListener('keydown', handleFirstTab); //Hide the footer on the challenge page

    if (window.location.href.indexOf('/challenge') > 0 && window.location.href.indexOf('/pages') === -1) {
      document.getElementById('shopify-section-footer').style.display = 'none';
    }

    if (theme.device.isTouch()) {
      document.getElementsByTagName('html')[0].classList.add('touch');
    }

    var deferredLoadViewportExcess = 1200; /// Register all sections

    theme.Sections.init();
    theme.Sections.register('header', theme.HeaderSection, {
      deferredLoad: false
    });
    theme.Sections.register('footer', theme.FooterSection, {
      deferredLoadViewportExcess: deferredLoadViewportExcess
    });
    theme.Sections.register('slideshow', theme.SlideshowSection, {
      deferredLoadViewportExcess: deferredLoadViewportExcess
    });
    theme.Sections.register('video', theme.VideoManager, {
      deferredLoadViewportExcess: deferredLoadViewportExcess
    });
    theme.Sections.register('background-video', theme.VideoManager, {
      deferredLoadViewportExcess: deferredLoadViewportExcess
    });
    theme.Sections.register('image-with-text-overlay', theme.ImageWithTextOverlay, {
      deferredLoadViewportExcess: deferredLoadViewportExcess
    });
    theme.Sections.register('image-beside-image', theme.ImageBesideImageSection, {
      deferredLoadViewportExcess: deferredLoadViewportExcess
    });
    theme.Sections.register('featured-collection', theme.FeaturedCollectionSection, {
      deferredLoadViewportExcess: deferredLoadViewportExcess
    });
    theme.Sections.register('collection-list', theme.CollectionListSection, {
      deferredLoadViewportExcess: deferredLoadViewportExcess
    });
    theme.Sections.register('featured-blog', theme.FeaturedBlogSection, {
      deferredLoadViewportExcess: deferredLoadViewportExcess
    });
    theme.Sections.register('product-template', theme.ProductTemplateSection, {
      deferredLoadViewportExcess: 200
    });
    theme.Sections.register('collection-template', theme.CollectionTemplateSection, {
      deferredLoad: false
    });
    theme.Sections.register('search-template', theme.SearchTemplateSection, {
      deferredLoad: false
    });
    theme.Sections.register('blog-template', theme.BlogTemplateSection, {
      deferredLoad: false
    });
    theme.Sections.register('article-template', theme.ArticleTemplateSection, {
      deferredLoad: false
    });
    theme.Sections.register('list-collections', theme.ListCollectionsSection, {
      deferredLoadViewportExcess: deferredLoadViewportExcess
    });
    theme.Sections.register('cart-template', theme.CartTemplateSection, {
      deferredLoad: false
    });
    theme.Sections.register('product-recommendations', theme.ProductRecommendations, {
      deferredLoadViewportExcess: deferredLoadViewportExcess
    });
    theme.Sections.register('gallery', theme.GallerySection, {
      deferredLoadViewportExcess: deferredLoadViewportExcess
    });
    theme.Sections.register('testimonials', theme.TestimonialsSection, {
      deferredLoadViewportExcess: deferredLoadViewportExcess
    });
  }); //Register dynamically pulled in sections

  $(function ($) {
    if (cc.sections.length) {
      cc.sections.forEach(function (section) {
        try {
          theme.Sections.register(section.name, section.section);
        } catch (err) {
          console.error("Unable to register section ".concat(section.name, "."), err);
        }
      });
    } else {
      console.warn('Barry: No common sections have been registered.');
    }
  });
})(theme.jQuery);  
/* Built with Barry v1.0.7 */