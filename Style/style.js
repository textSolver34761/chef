function goBack() {
    window.history.go(-1);
}

! function(t) {
  function e() {}

  function n(t, e) {
    return function() {
      t.apply(e, arguments)
    }
  }

  function i(t) {
    if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
    if ("function" != typeof t) throw new TypeError("not a function");
    this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], c(t, this)
  }

  function o(t, e) {
    for (; 3 === t._state;) t = t._value;
    return 0 === t._state ? void t._deferreds.push(e) : (t._handled = !0, void i._immediateFn(function() {
      var n = 1 === t._state ? e.onFulfilled : e.onRejected;
      if (null === n) return void(1 === t._state ? s : r)(e.promise, t._value);
      var i;
      try {
        i = n(t._value)
      } catch (t) {
        return void r(e.promise, t)
      }
      s(e.promise, i)
    }))
  }

  function s(t, e) {
    try {
      if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
      if (e && ("object" == typeof e || "function" == typeof e)) {
        var o = e.then;
        if (e instanceof i) return t._state = 3, t._value = e, void a(t);
        if ("function" == typeof o) return void c(n(o, e), t)
      }
      t._state = 1, t._value = e, a(t)
    } catch (e) {
      r(t, e)
    }
  }

  function r(t, e) {
    t._state = 2, t._value = e, a(t)
  }

  function a(t) {
    2 === t._state && 0 === t._deferreds.length && i._immediateFn(function() {
      t._handled || i._unhandledRejectionFn(t._value)
    });
    for (var e = 0, n = t._deferreds.length; e < n; e++) o(t, t._deferreds[e]);
    t._deferreds = null
  }

  function l(t, e, n) {
    this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n
  }

  function c(t, e) {
    var n = !1;
    try {
      t(function(t) {
        n || (n = !0, s(e, t))
      }, function(t) {
        n || (n = !0, r(e, t))
      })
    } catch (t) {
      if (n) return;
      n = !0, r(e, t)
    }
  }
  var u = setTimeout;
  i.prototype.catch = function(t) {
    return this.then(null, t)
  }, i.prototype.then = function(t, n) {
    var i = new this.constructor(e);
    return o(this, new l(t, n, i)), i
  }, i.all = function(t) {
    var e = Array.prototype.slice.call(t);
    return new i(function(t, n) {
      function i(s, r) {
        try {
          if (r && ("object" == typeof r || "function" == typeof r)) {
            var a = r.then;
            if ("function" == typeof a) return void a.call(r, function(t) {
              i(s, t)
            }, n)
          }
          e[s] = r, 0 === --o && t(e)
        } catch (t) {
          n(t)
        }
      }
      if (0 === e.length) return t([]);
      for (var o = e.length, s = 0; s < e.length; s++) i(s, e[s])
    })
  }, i.resolve = function(t) {
    return t && "object" == typeof t && t.constructor === i ? t : new i(function(e) {
      e(t)
    })
  }, i.reject = function(t) {
    return new i(function(e, n) {
      n(t)
    })
  }, i.race = function(t) {
    return new i(function(e, n) {
      for (var i = 0, o = t.length; i < o; i++) t[i].then(e, n)
    })
  }, i._immediateFn = "function" == typeof setImmediate && function(t) {
    setImmediate(t)
  } || function(t) {
    u(t, 0)
  }, i._unhandledRejectionFn = function(t) {
    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
  }, i._setImmediateFn = function(t) {
    i._immediateFn = t
  }, i._setUnhandledRejectionFn = function(t) {
    i._unhandledRejectionFn = t
  }, "undefined" != typeof module && module.exports ? module.exports = i : t.Promise || (t.Promise = i)
}(this);
try {
  var ce = new window.CustomEvent("test");
  if (ce.preventDefault(), ce.defaultPrevented !== !0) throw new Error("Could not prevent default")
} catch (t) {
  var CustomEvent = function(t, e) {
    var n, i;
    return e = e || {
      bubbles: !1,
      cancelable: !1,
      detail: void 0
    }, n = document.createEvent("CustomEvent"), n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i = n.preventDefault, n.preventDefault = function() {
      i.call(this);
      try {
        Object.defineProperty(this, "defaultPrevented", {
          get: function() {
            return !0
          }
        })
      } catch (t) {
        this.defaultPrevented = !0
      }
    }, n
  };
  CustomEvent.prototype = window.Event.prototype, window.CustomEvent = CustomEvent
}
var cf;
! function(t) {
  var e = function() {
    function e(n) {
      if (this.version = "0.9.1", this.cdnPath = "//conversational-form-091-0iznjsw.stackpathdns.com/", this.isDevelopment = !1, this.loadExternalStyleSheet = !0, this.preventAutoAppend = !1, this.preventAutoStart = !1, window.ConversationalForm = this, console.log("Conversational Form > version:", this.version), window.ConversationalForm[this.createId] = this, n.flowStepCallback && (t.FlowManager.generalFlowStepCallback = n.flowStepCallback), (document.getElementById("conversational-form-development") || 0 == n.loadExternalStyleSheet) && (this.loadExternalStyleSheet = !1), isNaN(n.scrollAccerlation) || (t.ScrollController.accerlation = n.scrollAccerlation), this.preventAutoStart = n.preventAutoStart, this.preventAutoAppend = n.preventAutoAppend, !n.formEl) throw new Error("Conversational Form error, the formEl needs to be defined.");
      this.formEl = n.formEl, this.formEl.setAttribute("cf-create-id", this.createId), this.submitCallback = n.submitCallback, "" == this.formEl.getAttribute("cf-no-animation") && (e.animationsEnabled = !1), "" == this.formEl.getAttribute("cf-prevent-autofocus") && (t.UserInput.preventAutoFocus = !0), this.dictionary = new t.Dictionary({
        data: n.dictionaryData,
        robotData: n.dictionaryRobot,
        userImage: n.userImage,
        robotImage: n.robotImage
      }), this.context = n.context ? n.context : document.body, this.tags = n.tags, this.init()
    }
    return Object.defineProperty(e.prototype, "createId", {
      get: function() {
        return this._createId || (this._createId = (new Date).getTime().toString()), this._createId
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "eventTarget", {
      get: function() {
        return this._eventTarget || (this._eventTarget = new t.EventDispatcher(this)), this._eventTarget
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.init = function() {
      if (t.Helpers.setEmojiLib(), this.loadExternalStyleSheet) {
        var e = document.head || document.getElementsByTagName("head")[0],
          n = document.createElement("link"),
          i = this.cdnPath + "conversational-form.min.css";
        n.type = "text/css", n.media = "all", n.setAttribute("rel", "stylesheet"), n.setAttribute("href", i), e.appendChild(n)
      } else this.isDevelopment = !0;
      var o = window.getComputedStyle(this.context).getPropertyValue("position").toLowerCase();
      if (["fixed", "absolute", "relative"].indexOf(o) == -1 && (this.context.style.position = "relative"), !this.tags || 0 == this.tags.length) {
        this.tags = [];
        for (var s = [].slice.call(this.formEl.querySelectorAll("input, select, button, textarea"), 0), r = 0; r < s.length; r++) {
          var a = s[r];
          t.Tag.isTagValid(a) && this.tags.push(t.Tag.createTag(a))
        }
      }
      for (var l = [], r = 0; r < this.tags.length; r++) {
        var a = this.tags[r];
        a && t.Tag.isTagValid(a.domElement) || l.push(a)
      }
      for (var r = 0; r < l.length; r++) {
        var c = l[r];
        this.tags.splice(this.tags.indexOf(c), 1)
      }
      return this.tags && 0 != this.tags.length || console.warn("Conversational Form: No tags found or registered."), this.setupTagGroups(), this.setupUI(), this
    }, e.prototype.updateDictionaryValue = function(e, n, i) {
      t.Dictionary.set(e, n, i), ["robot-image", "user-image"].indexOf(e) != -1 && this.chatList.updateThumbnail("robot-image" == e, i)
    }, e.prototype.getFormData = function(t) {
      if (void 0 === t && (t = !1), t) {
        for (var e = {}, n = 0; n < this.tags.length; n++) {
          var i = this.tags[n];
          i.name && i.value && (e[i.name] = i.value)
        }
        return e
      }
      var o = new FormData(this.formEl);
      return o
    }, e.prototype.addRobotChatResponse = function(t) {
      this.chatList.createResponse(!0, null, t)
    }, e.prototype.addUserChatResponse = function(t) {
      this.chatList.createResponse(!1, null, t)
    }, e.prototype.stop = function(t) {
      void 0 === t && (t = ""), this.flowManager.stop(), "" != t && this.chatList.createResponse(!0, null, t), this.userInput.onFlowStopped()
    }, e.prototype.start = function() {
      this.userInput.disabled = !1, this.userInput.visible = !0, this.flowManager.start()
    }, e.prototype.getTag = function(t) {
      return "number" == typeof t ? this.tags[t] : null
    }, e.prototype.setupTagGroups = function() {
      for (var e = [], n = 0; n < this.tags.length; n++) {
        var i = this.tags[n];
        "radio" != i.type && "checkbox" != i.type || (e[i.name] || (e[i.name] = []), console.log(this.constructor.name, "tag.name]:", i.name), e[i.name].push(i))
      }
      if (Object.keys(e).length > 0)
        for (var o in e)
          if (e[o].length > 0)
            for (var s = new t.TagGroup({
                elements: e[o]
              }), n = 0; n < e[o].length; n++) {
              var r = e[o][n];
              0 == n ? this.tags.splice(this.tags.indexOf(r), 1, s) : this.tags.splice(this.tags.indexOf(r), 1)
            }
    }, e.prototype.setupUI = function() {
      console.log("Conversational Form > start > mapped DOM tags:", this.tags), console.log("----------------------------------------------"), this.flowManager = new t.FlowManager({
        cfReference: this,
        eventTarget: this.eventTarget,
        tags: this.tags
      }), this.el = document.createElement("div"), this.el.id = "conversational-form", this.el.className = "conversational-form", e.animationsEnabled && this.el.classList.add("conversational-form--enable-animation"), this.preventAutoAppend || this.context.appendChild(this.el), this.el.style.visibility = "hidden";
      var n = document.createElement("div");
      n.className = "conversational-form-inner", this.el.appendChild(n), this.chatList = new t.ChatList({
        eventTarget: this.eventTarget
      }), n.appendChild(this.chatList.el), this.userInput = new t.UserInput({
        eventTarget: this.eventTarget,
        cfReference: this
      }), n.appendChild(this.userInput.el), this.onUserAnswerClickedCallback = this.onUserAnswerClicked.bind(this), this.eventTarget.addEventListener(t.ChatResponseEvents.USER_ANSWER_CLICKED, this.onUserAnswerClickedCallback, !1), this.el.classList.add("conversational-form--show"), this.preventAutoStart || this.flowManager.start(), this.tags && 0 != this.tags.length || (this.userInput.visible = !0)
    }, e.prototype.onUserAnswerClicked = function(t) {
      var e = t.detail;
      this.flowManager.editTag(e)
    }, e.prototype.remapTagsAndStartFrom = function(t, e) {
      void 0 === t && (t = 0), void 0 === e && (e = !1), e && this.chatList.setCurrentUserResponse(this.userInput.getFlowDTO());
      for (var n = 0; n < this.tags.length; n++) {
        var i = this.tags[n];
        i.refresh()
      }
      this.flowManager.startFrom(t)
    }, e.prototype.focus = function() {
      this.userInput && this.userInput.setFocusOnInput()
    }, e.prototype.doSubmitForm = function() {
      if (this.el.classList.add("done"), this.userInput.reset(), this.submitCallback) this.submitCallback();
      else {
        var t = this.formEl.ownerDocument.createElement("input");
        t.style.display = "none", t.type = "submit", this.formEl.appendChild(t), t.click(), this.formEl.removeChild(t), this.remove()
      }
    }, e.prototype.remove = function() {
      this.onUserAnswerClickedCallback && (this.eventTarget.removeEventListener(t.ChatResponseEvents.USER_ANSWER_CLICKED, this.onUserAnswerClickedCallback, !1), this.onUserAnswerClickedCallback = null), this.flowManager && this.flowManager.dealloc(), this.userInput && this.userInput.dealloc(), this.chatList && this.chatList.dealloc(), this.dictionary = null, this.flowManager = null, this.userInput = null, this.chatList = null, this.context = null, this.formEl = null, this.tags = null, this.submitCallback = null, this.el.parentNode.removeChild(this.el), this.el = null, window.ConversationalForm[this.createId] = null
    }, e.illustrateFlow = function(t, n, i, o) {
      if (void 0 === o && (o = null), e.ILLUSTRATE_APP_FLOW && "Netscape" != navigator.appName) {
        var s = "font-weight: 900; background: pink; color: black; padding: 0px 5px;";
        console.log("%c** event flow: %c" + i + "%c flow type: %c" + n + "%c from: %c" + t.constructor.name, "font-weight: 900;", s, "font-weight: 400;", s, "font-weight: 400;", s), o && console.log("** event flow detail:", o)
      }
    }, e.autoStartTheConversation = function() {
      if (!e.hasAutoInstantiated) {
        var n = document.querySelectorAll("form[cf-form]") || document.querySelectorAll("form[cf-form-element]"),
          i = document.querySelectorAll("*[cf-context]");
        if (n && n.length > 0) {
          for (var o = 0; o < n.length; o++) {
            var s = n[o],
              r = i[o];
            new t.ConversationalForm({
              formEl: s,
              context: r
            })
          }
          e.hasAutoInstantiated = !0
        }
      }
    }, e
  }();
  e.animationsEnabled = !0, e.ILLUSTRATE_APP_FLOW = !0, e.hasAutoInstantiated = !1, t.ConversationalForm = e
}(cf || (cf = {})), "complete" == document.readyState ? cf.ConversationalForm.autoStartTheConversation() : window.addEventListener("load", function() {
    cf.ConversationalForm.autoStartTheConversation()
  }, !1),
  function(t) {
    if ("function" == typeof define && define.amd) define(["jquery"], t);
    else try {
      t(jQuery)
    } catch (t) {}
  }(function(t) {
    t.fn.conversationalForm = function(t) {
      return t = t || {}, t.formEl || (t.formEl = this[0]), new cf.ConversationalForm(t)
    }
  });
var cf;
! function(t) {
  var e = function() {
    function t() {}
    return t.lerp = function(t, e, n) {
      return (n - e) * t + e
    }, t.norm = function(t, e, n) {
      return (t - e) / (n - e)
    }, t.getXYFromMouseTouchEvent = function(t) {
      var e = null;
      return t.originalEvent ? e = t.originalEvent.touches || t.originalEvent.changedTouches : t.changedTouches && (e = t.changedTouches), e ? {
        x: e[0].pageX,
        y: e[0].pageY,
        touches: e[0]
      } : {
        x: t.pageX,
        y: t.pageY,
        touches: null
      }
    }, t.getInnerTextOfElement = function(t) {
      var e = document.createElement("DIV");
      e.innerHTML = t.innerHTML;
      var n = e.textContent || e.innerText || "";
      return n = String(n).replace(/^\s+|\s+$/g, "")
    }, t.getMouseEvent = function(t) {
      var e = [];
      return e.click = "ontouchstart" in window ? "touchstart" : "click", e.mousedown = "ontouchstart" in window ? "touchstart" : "mousedown", e.mouseup = "ontouchstart" in window ? "touchend" : "mouseup", e.mousemove = "ontouchstart" in window ? "touchmove" : "mousemove", e[t]
    }, t.setEmojiLib = function(e, n) {
      void 0 === e && (e = "emojify"), void 0 === n && (n = "//cdnjs.cloudflare.com/ajax/libs/emojify.js/1.1.0/js/emojify.min.js");
      var i = document.head || document.getElementsByTagName("head")[0],
        o = document.createElement("script");
      o.type = "text/javascript", o.onload = function() {
        t.emojilib = window[e], t.emojilib && t.emojilib.setConfig({
          img_dir: "https://cdnjs.cloudflare.com/ajax/libs/emojify.js/1.1.0/images/basic/"
        })
      }, o.setAttribute("src", n), i.appendChild(o)
    }, t.emojify = function(e) {
      return t.emojilib && (e = t.emojilib.replace(e)), e
    }, t.setTransform = function(t, e) {
      t.style["-webkit-transform"] = e, t.style["-moz-transform"] = e, t.style["-ms-transform"] = e, t.style.transform = e
    }, t
  }();
  e.caniuse = {
    fileReader: function() {
      return !!(window.File && window.FileReader && window.FileList && window.Blob)
    }
  }, e.emojilib = null, t.Helpers = e
}(cf || (cf = {}));
var cf;
! function(t) {
  var e = function() {
    function t(t) {
      this._cf = t, this.target = document.createDocumentFragment()
    }
    return Object.defineProperty(t.prototype, "cf", {
      get: function() {
        return this._cf
      },
      enumerable: !0,
      configurable: !0
    }), t.prototype.addEventListener = function(t, e, n) {
      return this.target.addEventListener(t, e, n)
    }, t.prototype.dispatchEvent = function(t) {
      return this.target.dispatchEvent(t)
    }, t.prototype.removeEventListener = function(t, e, n) {
      this.target.removeEventListener(t, e, n)
    }, t
  }();
  t.EventDispatcher = e
}(cf || (cf = {}));
var cf;
! function(t) {
  var e = function() {
    function t(t) {
      if (this.eventTarget = t.eventTarget, !this.eventTarget) throw new Error("this.eventTarget not set!! : " + this.constructor.name);
      this.setData(t), this.createElement()
    }
    return t.prototype.setData = function(t) {}, t.prototype.createElement = function() {
      var t = document.createElement("template");
      return t.innerHTML = this.getTemplate(), this.el = t.firstChild || t.content.firstChild, this.el
    }, t.prototype.getTemplate = function() {
      return "should be overwritten..."
    }, t.prototype.dealloc = function() {
      this.el.parentNode.removeChild(this.el)
    }, t
  }();
  t.BasicElement = e
}(cf || (cf = {}));
var __extends = this && this.__extends || function(t, e) {
    function n() {
      this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
  },
  cf;
! function(t) {
  t.ControlElementEvents = {
    SUBMIT_VALUE: "cf-basic-element-submit",
    PROGRESS_CHANGE: "cf-basic-element-progress",
    ON_FOCUS: "cf-basic-element-on-focus",
    ON_LOADED: "cf-basic-element-on-loaded"
  }, t.ControlElementProgressStates = {
    BUSY: "cf-control-element-progress-BUSY",
    READY: "cf-control-element-progress-READY"
  };
  var e = function(e) {
    function n(t) {
      var n = e.call(this, t) || this;
      return n.animateInTimer = 0, n._partOfSeveralChoices = !1, n._focus = !1, n.onFocusCallback = n.onFocus.bind(n), n.el.addEventListener("focus", n.onFocusCallback, !1), n.onBlurCallback = n.onBlur.bind(n), n.el.addEventListener("blur", n.onBlurCallback, !1), n
    }
    return __extends(n, e), Object.defineProperty(n.prototype, "type", {
      get: function() {
        return "ControlElement"
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "partOfSeveralChoices", {
      get: function() {
        return this._partOfSeveralChoices
      },
      set: function(t) {
        this._partOfSeveralChoices = t
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "value", {
      get: function() {
        var e, n = this.referenceTag.hasImage;
        if (n && !this.partOfSeveralChoices) {
          var i = n ? "<img src='" + this.referenceTag.domElement.getAttribute("cf-image") + "'/>" : "";
          e = "<div class='contains-image'>", e += i, e += "<span>" + t.Helpers.getInnerTextOfElement(this.el) + "</span>", e += "</div>"
        } else e = "<div><span>" + t.Helpers.getInnerTextOfElement(this.el) + "</span></div>";
        return e
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "positionVector", {
      get: function() {
        return this._positionVector
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "tabIndex", {
      set: function(t) {
        this.el.tabIndex = t
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "highlight", {
      get: function() {
        return this.el.classList.contains("highlight")
      },
      set: function(t) {
        this.el.classList.toggle("highlight", t)
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "focus", {
      get: function() {
        return this._focus
      },
      set: function(t) {
        this._focus = t, this._focus ? this.el.focus() : this.el.blur()
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "visible", {
      get: function() {
        return !this.el.classList.contains("hide")
      },
      set: function(t) {
        t ? this.el.classList.remove("hide") : (this.el.classList.add("hide"), this.tabIndex = -1, this.highlight = !1)
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.onBlur = function(t) {
      this._focus = !1
    }, n.prototype.onFocus = function(e) {
      this._focus = !0, t.ConversationalForm.illustrateFlow(this, "dispatch", t.ControlElementEvents.ON_FOCUS, this.referenceTag), this.eventTarget.dispatchEvent(new CustomEvent(t.ControlElementEvents.ON_FOCUS, {
        detail: this.positionVector
      }))
    }, n.prototype.hasImage = function() {
      return !1
    }, n.prototype.calcPosition = function() {
      var t = parseInt(window.getComputedStyle(this.el).getPropertyValue("margin-right"), 10);
      this._positionVector = {
        height: this.el.offsetHeight,
        width: this.el.offsetWidth + t,
        x: this.el.offsetLeft,
        y: this.el.offsetTop,
        el: this
      }, this._positionVector.centerX = this._positionVector.x + .5 * this._positionVector.width, this._positionVector.centerY = this._positionVector.y + .5 * this._positionVector.height
    }, n.prototype.setData = function(t) {
      this.referenceTag = t.referenceTag, e.prototype.setData.call(this, t)
    }, n.prototype.animateIn = function() {
      clearTimeout(this.animateInTimer), this.el.classList.add("animate-in")
    }, n.prototype.animateOut = function() {
      this.el.classList.add("animate-out")
    }, n.prototype.onChoose = function() {
      t.ConversationalForm.illustrateFlow(this, "dispatch", t.ControlElementEvents.SUBMIT_VALUE, this.referenceTag), this.eventTarget.dispatchEvent(new CustomEvent(t.ControlElementEvents.SUBMIT_VALUE, {
        detail: this
      }))
    }, n.prototype.dealloc = function() {
      this.el.removeEventListener("blur", this.onBlurCallback, !1), this.onBlurCallback = null, this.el.removeEventListener("focus", this.onFocusCallback, !1), this.onFocusCallback = null, e.prototype.dealloc.call(this)
    }, n
  }(t.BasicElement);
  t.ControlElement = e
}(cf || (cf = {}));
var cf;
! function(t) {
  var e = function() {
    function e(e) {
      this.ignoreKeyboardInput = !1, this.rowIndex = -1, this.columnIndex = 0, this.elementWidth = 0, this.filterListNumberOfVisible = 0, this.listWidth = 0, this.el = e.el, this.eventTarget = e.eventTarget, this.list = this.el.getElementsByTagName("cf-list")[0], this.infoElement = e.infoEl, this.onScrollCallback = this.onScroll.bind(this), this.el.addEventListener("scroll", this.onScrollCallback, !1), this.onElementFocusCallback = this.onElementFocus.bind(this), this.eventTarget.addEventListener(t.ControlElementEvents.ON_FOCUS, this.onElementFocusCallback, !1), this.onElementLoadedCallback = this.onElementLoaded.bind(this), this.eventTarget.addEventListener(t.ControlElementEvents.ON_LOADED, this.onElementLoadedCallback, !1), this.onChatReponsesUpdatedCallback = this.onChatReponsesUpdated.bind(this), this.eventTarget.addEventListener(t.ChatListEvents.CHATLIST_UPDATED, this.onChatReponsesUpdatedCallback, !1), this.onUserInputKeyChangeCallback = this.onUserInputKeyChange.bind(this), this.eventTarget.addEventListener(t.UserInputEvents.KEY_CHANGE, this.onUserInputKeyChangeCallback, !1), this.userInputUpdateCallback = this.onUserInputUpdate.bind(this), this.eventTarget.addEventListener(t.FlowEvents.USER_INPUT_UPDATE, this.userInputUpdateCallback, !1), this.listScrollController = new t.ScrollController({
        interactionListener: this.el,
        listToScroll: this.list,
        eventTarget: this.eventTarget,
        listNavButtons: this.el.getElementsByTagName("cf-list-button")
      })
    }
    return Object.defineProperty(e.prototype, "active", {
      get: function() {
        return this.elements && this.elements.length > 0
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "focus", {
      get: function() {
        if (!this.elements) return !1;
        for (var t = this.getElements(), e = 0; e < t.length; e++) {
          var n = t[e];
          if (n.focus) return !0
        }
        return !1
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "highlighted", {
      get: function() {
        if (!this.elements) return !1;
        for (var t = this.getElements(), e = 0; e < t.length; e++) {
          var n = t[e];
          if (n.highlight) return !0
        }
        return !1
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "disabled", {
      set: function(t) {
        t ? this.list.classList.add("disabled") : this.list.classList.remove("disabled")
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "length", {
      get: function() {
        var t = this.getElements();
        return t.length
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.onScroll = function(t) {
      this.el.scrollLeft = 0
    }, e.prototype.onElementLoaded = function(t) {
      this.resize()
    }, e.prototype.onElementFocus = function(t) {
      var e = t.detail,
        n = e.x + e.width < this.elementWidth ? 0 : e.x - e.width;
      n *= -1, this.updateRowColIndexFromVector(e), this.listScrollController.setScroll(n, 0)
    }, e.prototype.updateRowColIndexFromVector = function(t) {
      for (var e = 0; e < this.tableableRows.length; e++)
        for (var n = this.tableableRows[e], i = 0; i < n.length; i++) {
          var o = n[i];
          if (o == t.el) {
            this.rowIndex = e, this.columnIndex = i;
            break
          }
        }
    }, e.prototype.onChatReponsesUpdated = function(t) {
      this.animateElementsIn()
    }, e.prototype.onUserInputKeyChange = function(e) {
      if (this.ignoreKeyboardInput) return void(this.ignoreKeyboardInput = !1);
      var n = e.detail,
        i = n.dto.input;
      if (this.active) {
        var o = [t.Dictionary.keyCodes.left, t.Dictionary.keyCodes.right, t.Dictionary.keyCodes.down, t.Dictionary.keyCodes.up].indexOf(n.keyCode) != -1,
          s = n.inputFieldActive && !o;
        if (s) {
          var r = e.detail.dto,
            a = r.input.getInputValue();
          this.filterElementsFrom(a)
        } else n.keyCode == t.Dictionary.keyCodes.left ? this.columnIndex-- : n.keyCode == t.Dictionary.keyCodes.right ? this.columnIndex++ : n.keyCode == t.Dictionary.keyCodes.down ? this.updateRowIndex(1) : n.keyCode == t.Dictionary.keyCodes.up ? this.updateRowIndex(-1) : n.keyCode != t.Dictionary.keyCodes.enter && n.keyCode != t.Dictionary.keyCodes.space || (this.tableableRows[this.rowIndex] && this.tableableRows[this.rowIndex][this.columnIndex] ? this.tableableRows[this.rowIndex][this.columnIndex].el.click() : this.tableableRows[0] && 1 == this.tableableRows[0].length && this.tableableRows[0][0].el.click()), this.validateRowColIndexes() || i.setFocusOnInput()
      }
      i.active || !this.validateRowColIndexes() || !this.tableableRows || 0 != this.rowIndex && 1 != this.rowIndex ? i.active || i.setFocusOnInput() : this.tableableRows[this.rowIndex][this.columnIndex].focus = !0
    }, e.prototype.validateRowColIndexes = function() {
      this.el.classList.contains("two-row") ? 1 : 0;
      return this.rowIndex != -1 && this.tableableRows[this.rowIndex] ? (this.columnIndex < 0 && (this.columnIndex = this.tableableRows[this.rowIndex].length - 1), this.columnIndex > this.tableableRows[this.rowIndex].length - 1 && (this.columnIndex = 0), !0) : (this.resetTabList(), !1)
    }, e.prototype.updateRowIndex = function(t) {
      var e = this.rowIndex;
      if (this.rowIndex += t, this.tableableRows[this.rowIndex])
        for (var n = this.tableableRows[e] ? this.tableableRows[e][this.columnIndex].positionVector.centerX : 0, i = this.tableableRows[this.rowIndex], o = 1e13, s = 0; s < i.length; s++) {
          var r = i[s];
          o > Math.abs(n - r.positionVector.centerX) && (o = Math.abs(n - r.positionVector.centerX), this.columnIndex = s)
        }
    }, e.prototype.resetTabList = function() {
      this.rowIndex = -1, this.columnIndex = -1
    }, e.prototype.onUserInputUpdate = function(t) {
      if (this.el.classList.remove("animate-in"), this.infoElement.classList.remove("show"), this.elements)
        for (var e = this.getElements(), n = 0; n < e.length; n++) {
          var i = e[n];
          i.animateOut()
        }
    }, e.prototype.filterElementsFrom = function(e) {
      var n = e.toLowerCase().split(" ");
      n.indexOf("") != -1 && n.splice(n.indexOf(""), 1);
      var i = this.getElements();
      if (i.length > 1) {
        for (var o = [], s = 0; s < i.length; s++) {
          var r = i[s];
          r.highlight = !1;
          for (var a = !0, l = 0; l < n.length; l++) {
            var c = n[l];
            a && (a = r.value.toLowerCase().indexOf(c) != -1)
          }
          r.visible = a, a && r.visible && o.push(r)
        }
        this.infoElement.innerHTML = 0 == o.length ? t.Dictionary.get("input-no-filter").split("{input-value}").join(e) : "", 0 == o.length ? this.infoElement.classList.add("show") : this.infoElement.classList.remove("show");
        var u = this.filterListNumberOfVisible != o.length;
        u && (this.resize(), this.animateElementsIn()), this.filterListNumberOfVisible = o.length, "" != e && this.filterListNumberOfVisible > 0 && (o[0].highlight = !0)
      }
    }, e.prototype.clickOnHighlighted = function() {
      for (var t = this.getElements(), e = 0; e < t.length; e++) {
        var n = t[e];
        if (n.highlight) {
          n.el.click();
          break
        }
      }
    }, e.prototype.animateElementsIn = function() {
      if (this.elements) {
        var t = this.getElements();
        if (t.length > 0) {
          this.el.classList.contains("animate-in") || this.el.classList.add("animate-in");
          for (var e = 0; e < t.length; e++) {
            var n = t[e];
            n.animateIn()
          }
        }
      }
    }, e.prototype.getElements = function() {
      return this.elements.length > 0 && "OptionsList" == this.elements[0].type ? this.elements[0].elements : this.elements
    }, e.prototype.buildTabableRows = function() {
      this.tableableRows = [], this.resetTabList();
      var t = this.getElements();
      if (this.el.classList.contains("two-row")) {
        this.tableableRows[0] = [], this.tableableRows[1] = [];
        for (var e = 0; e < t.length; e++) {
          var n = t[e];
          n.visible && (n.positionVector.y < 30 ? this.tableableRows[0].push(n) : this.tableableRows[1].push(n))
        }
      } else {
        this.tableableRows[0] = [];
        for (var e = 0; e < t.length; e++) {
          var n = t[e];
          n.visible && this.tableableRows[0].push(n)
        }
      }
    }, e.prototype.resetAfterErrorMessage = function() {
      this.currentControlElement && (this.currentControlElement.checked = !this.currentControlElement.checked, this.currentControlElement = null), this.disabled = !1
    }, e.prototype.focusFrom = function(t) {
      this.tableableRows && (this.columnIndex = 0, "bottom" == t ? this.rowIndex = this.el.classList.contains("two-row") ? 1 : 0 : "top" == t && (this.rowIndex = 0), this.tableableRows[this.rowIndex] && this.tableableRows[this.rowIndex][this.columnIndex] ? (this.ignoreKeyboardInput = !0, this.tableableRows[this.rowIndex][this.columnIndex].focus = !0) : this.resetTabList())
    }, e.prototype.updateStateOnElements = function(t) {
      if (this.disabled = !0, this.currentControlElement = t, "RadioButton" == t.type)
        for (var e = this.getElements(), n = 0; n < e.length; n++) {
          var i = e[n];
          i != t && (i.checked = !1)
        }
    }, e.prototype.reset = function() {
      this.el.classList.remove("one-row"), this.el.classList.remove("two-row")
    }, e.prototype.getElement = function(t) {
      return this.elements[t]
    }, e.prototype.getDTO = function() {
      var e = {
        text: void 0,
        controlElements: []
      };
      if (this.elements && this.elements.length > 0) switch (this.elements[0].type) {
        case "CheckboxButton":
          for (var n = 0, i = [], o = 0; o < this.elements.length; o++) {
            var s = this.elements[o];
            if (s.checked && n++ > 1) break
          }
          for (var o = 0; o < this.elements.length; o++) {
            var r = this.elements[o];
            r.checked && (n > 1 && (r.partOfSeveralChoices = !0), i.push(r.value)), e.controlElements.push(r)
          }
          e.text = t.Dictionary.parseAndGetMultiValueString(i);
          break;
        case "RadioButton":
          for (var o = 0; o < this.elements.length; o++) {
            var a = this.elements[o];
            a.checked && (e.text = a.value), e.controlElements.push(a)
          }
          break;
        case "OptionsList":
          var l = this.elements[0];
          e.controlElements = l.getValue();
          var i = [];
          if (e.controlElements && e.controlElements[0])
            for (var c = 0; c < e.controlElements.length; c++) {
              e.controlElements[c];
              i.push(e.controlElements[c].value)
            }
          e.controlElements = l.elements, e.text = t.Dictionary.parseAndGetMultiValueString(i);
          break;
        case "UploadFileUI":
          e.text = this.elements[0].getFilesAsString(), e.controlElements.push(this.elements[0])
      }
      return e
    }, e.prototype.clearTagsAndReset = function() {
      if (this.reset(), this.elements)
        for (; this.elements.length > 0;) this.elements.pop().dealloc()
    }, e.prototype.buildTags = function(e) {
      var n = this;
      this.disabled = !1;
      this.el.parentNode.getElementsByTagName("ul")[0], this.el.parentNode.getElementsByTagName("ul")[1];
      this.clearTagsAndReset(), this.elements = [];
      for (var i = 0; i < e.length; i++) {
        var o = e[i];
        switch (o.type) {
          case "radio":
            this.elements.push(new t.RadioButton({
              referenceTag: o,
              eventTarget: this.eventTarget
            }));
            break;
          case "checkbox":
            this.elements.push(new t.CheckboxButton({
              referenceTag: o,
              eventTarget: this.eventTarget
            }));
            break;
          case "select":
            this.elements.push(new t.OptionsList({
              referenceTag: o,
              context: this.list,
              eventTarget: this.eventTarget
            }));
            break;
          case "input":
          default:
            "file" == o.type && this.elements.push(new t.UploadFileUI({
              referenceTag: o,
              eventTarget: this.eventTarget
            }))
        }
        if ("select" != o.type && this.elements.length > 0) {
          var s = this.elements[this.elements.length - 1];
          this.list.appendChild(s.el)
        }
      }
      var r = this.elements[0] && "OptionsList" == this.elements[0].type;
      r ? this.filterListNumberOfVisible = this.elements[0].elements.length : this.filterListNumberOfVisible = e.length, new Promise(function(t, e) {
        return n.resize(t, e)
      }).then(function() {
        var e = n.el.classList.contains("one-row") ? 52 : n.el.classList.contains("two-row") ? 102 : 0,
          i = {
            height: e
          };
        t.ConversationalForm.illustrateFlow(n, "dispatch", t.UserInputEvents.CONTROL_ELEMENTS_ADDED, i), n.eventTarget.dispatchEvent(new CustomEvent(t.UserInputEvents.CONTROL_ELEMENTS_ADDED, {
          detail: i
        }))
      })
    }, e.prototype.resize = function(t, e) {
      var n = this;
      this.list.style.width = "100%", this.el.classList.remove("resized"), this.el.classList.remove("one-row"), this.el.classList.remove("two-row"), this.elementWidth = 0, setTimeout(function() {
        n.listWidth = 0;
        var e = n.getElements();
        if (e.length > 0) {
          for (var i = [], o = [], s = !1, r = 0; r < e.length; r++) {
            var a = e[r];
            a.visible && (a.calcPosition(), n.listWidth += a.positionVector.width, i.push(a.positionVector.x + a.positionVector.width), o.push(a)), a.hasImage() && (s = !0)
          }
          var l = n.el.offsetWidth,
            c = n.listWidth > l;
          c && !s ? (n.el.classList.add("two-row"), n.listWidth = Math.max(l, Math.round(i[Math.floor(i.length / 2)] + 50)), n.list.style.width = n.listWidth + "px") : n.el.classList.add("one-row"), setTimeout(function() {
            for (var t = 0; t < e.length; t++) {
              var i = e[t];
              i.visible && i.calcPosition()
            }
            c = n.listWidth > l;
            for (var o = e.slice(), s = o.sort(function(t, e) {
                var n = t.positionVector.y > e.positionVector.y;
                return t.positionVector.x == e.positionVector.x ? n ? 1 : -1 : t.positionVector.x < e.positionVector.x ? -1 : 1
              }), r = 0, t = 0; t < s.length; t++) {
              var i = s[t];
              i.visible ? i.tabIndex = 2 + r++ : i.tabIndex = -1
            }
            cancelAnimationFrame(n.rAF), c ? n.el.classList.remove("hide-nav-buttons") : n.el.classList.add("hide-nav-buttons"), n.elementWidth = l, n.listScrollController.resize(n.listWidth, n.elementWidth), n.buildTabableRows(), n.el.classList.add("resized")
          }, 0)
        }
        t && t()
      }, 0)
    }, e.prototype.dealloc = function() {
      this.currentControlElement = null, this.tableableRows = null, cancelAnimationFrame(this.rAF), this.rAF = null, this.el.removeEventListener("scroll", this.onScrollCallback, !1), this.onScrollCallback = null, this.eventTarget.removeEventListener(t.ControlElementEvents.ON_FOCUS, this.onElementFocusCallback, !1), this.onElementFocusCallback = null, this.eventTarget.removeEventListener(t.ChatListEvents.CHATLIST_UPDATED, this.onChatReponsesUpdatedCallback, !1), this.onChatReponsesUpdatedCallback = null, this.eventTarget.removeEventListener(t.UserInputEvents.KEY_CHANGE, this.onUserInputKeyChangeCallback, !1), this.onUserInputKeyChangeCallback = null, this.eventTarget.removeEventListener(t.FlowEvents.USER_INPUT_UPDATE, this.userInputUpdateCallback, !1), this.userInputUpdateCallback = null, this.eventTarget.removeEventListener(t.ControlElementEvents.ON_LOADED, this.onElementLoadedCallback, !1), this.onElementLoadedCallback = null, this.listScrollController.dealloc()
    }, e
  }();
  t.ControlElements = e
}(cf || (cf = {}));
var cf;
! function(t) {
  var e = function() {
    function e(e) {
      this.listWidth = 0, this.visibleAreaWidth = 0, this.max = 0, this.interacting = !1, this.x = 0, this.xTarget = 0, this.startX = 0, this.startXTarget = 0, this.mouseSpeed = 0, this.mouseSpeedTarget = 0, this.direction = 0, this.directionTarget = 0, this.inputAccerlation = 0, this.inputAccerlationTarget = 0, this.interactionListener = e.interactionListener, this.eventTarget = e.eventTarget, this.listToScroll = e.listToScroll, this.prevButton = e.listNavButtons[0], this.nextButton = e.listNavButtons[1], this.onListNavButtonsClickCallback = this.onListNavButtonsClick.bind(this), this.prevButton.addEventListener("click", this.onListNavButtonsClickCallback, !1), this.nextButton.addEventListener("click", this.onListNavButtonsClickCallback, !1), this.documentLeaveCallback = this.documentLeave.bind(this), this.onInteractStartCallback = this.onInteractStart.bind(this), this.onInteractEndCallback = this.onInteractEnd.bind(this), this.onInteractMoveCallback = this.onInteractMove.bind(this), document.addEventListener("mouseleave", this.documentLeaveCallback, !1), document.addEventListener(t.Helpers.getMouseEvent("mouseup"), this.documentLeaveCallback, !1), this.interactionListener.addEventListener(t.Helpers.getMouseEvent("mousedown"), this.onInteractStartCallback, !1), this.interactionListener.addEventListener(t.Helpers.getMouseEvent("mouseup"), this.onInteractEndCallback, !1), this.interactionListener.addEventListener(t.Helpers.getMouseEvent("mousemove"), this.onInteractMoveCallback, !1)
    }
    return e.prototype.onListNavButtonsClick = function(t) {
      var e = t.currentTarget.getAttribute("direction");
      this.pushDirection("next" == e ? -1 : 1)
    }, e.prototype.documentLeave = function(t) {
      this.onInteractEnd(t)
    }, e.prototype.onInteractStart = function(e) {
      var n = t.Helpers.getXYFromMouseTouchEvent(e);
      this.interacting = !0, this.startX = n.x, this.startXTarget = this.startX, this.inputAccerlation = 0, this.render()
    }, e.prototype.onInteractEnd = function(t) {
      this.interacting = !1
    }, e.prototype.onInteractMove = function(e) {
      if (this.interacting) {
        var n = t.Helpers.getXYFromMouseTouchEvent(e),
          i = n.x - this.startX,
          o = 6.2;
        this.inputAccerlationTarget = i * o, this.directionTarget = this.inputAccerlationTarget < 0 ? -1 : 1, this.startXTarget = n.x
      }
    }, e.prototype.render = function() {
      var n = this;
      this.rAF && cancelAnimationFrame(this.rAF), this.startX += .2 * (this.startXTarget - this.startX), this.inputAccerlation += (this.inputAccerlationTarget - this.inputAccerlation) * (this.interacting ? Math.min(e.accerlation + .1, 1) : e.accerlation);
      var i = .25;
      this.inputAccerlationTarget *= i, this.direction += .2 * (this.directionTarget - this.direction), this.mouseSpeed += .2 * (this.mouseSpeedTarget - this.mouseSpeed), this.direction += this.mouseSpeed, this.xTarget += .05 * this.inputAccerlation, this.xTarget > 0 && (this.xTarget += (0 - this.xTarget) * t.Helpers.lerp(e.accerlation, .3, .8)), this.xTarget < this.max && (this.xTarget += (this.max - this.xTarget) * t.Helpers.lerp(e.accerlation, .3, .8)), this.x += .4 * (this.xTarget - this.x);
      var o = Math.round(this.x);
      o < 0 && (this.prevButton.classList.contains("active") || this.prevButton.classList.add("active"), this.prevButton.classList.contains("cf-gradient") || this.prevButton.classList.add("cf-gradient")), 0 == o && (this.prevButton.classList.contains("active") && this.prevButton.classList.remove("active"), this.prevButton.classList.contains("cf-gradient") && this.prevButton.classList.remove("cf-gradient")), o > this.max && (this.nextButton.classList.contains("active") || this.nextButton.classList.add("active"), this.nextButton.classList.contains("cf-gradient") || this.nextButton.classList.add("cf-gradient")), o <= this.max && (this.nextButton.classList.contains("active") && this.nextButton.classList.remove("active"), this.nextButton.classList.contains("cf-gradient") && this.nextButton.classList.remove("cf-gradient"));
      var s = this.x;
      t.Helpers.setTransform(this.listToScroll, "translateX(" + s + "px)"), (this.interacting || Math.abs(this.x - this.xTarget) > .02 && !this.interacting) && (this.rAF = window.requestAnimationFrame(function() {
        return n.render()
      }))
    }, e.prototype.setScroll = function(t, e) {
      this.xTarget = this.visibleAreaWidth == this.listWidth ? 0 : t, this.render()
    }, e.prototype.pushDirection = function(t) {
      this.inputAccerlationTarget += 5e3 * t, this.render()
    }, e.prototype.dealloc = function() {
      this.prevButton.removeEventListener("click", this.onListNavButtonsClickCallback, !1), this.nextButton.removeEventListener("click", this.onListNavButtonsClickCallback, !1), this.onListNavButtonsClickCallback = null, this.prevButton = null, this.nextButton = null, document.removeEventListener("mouseleave", this.documentLeaveCallback, !1), document.removeEventListener(t.Helpers.getMouseEvent("mouseup"), this.documentLeaveCallback, !1), this.interactionListener.removeEventListener(t.Helpers.getMouseEvent("mousedown"), this.onInteractStartCallback, !1), this.interactionListener.removeEventListener(t.Helpers.getMouseEvent("mouseup"), this.onInteractEndCallback, !1), this.interactionListener.removeEventListener(t.Helpers.getMouseEvent("mousemove"), this.onInteractMoveCallback, !1), this.documentLeaveCallback = null, this.onInteractStartCallback = null, this.onInteractEndCallback = null, this.onInteractMoveCallback = null
    }, e.prototype.reset = function() {
      this.interacting = !1, this.startX = 0, this.startXTarget = this.startX, this.inputAccerlation = 0, this.x = 0, this.xTarget = 0, t.Helpers.setTransform(this.listToScroll, "translateX(0px)"), this.render(), this.prevButton.classList.remove("active"), this.nextButton.classList.remove("active")
    }, e.prototype.resize = function(t, e) {
      this.reset(), this.visibleAreaWidth = e, this.listWidth = Math.max(e, t), this.max = (this.listWidth - this.visibleAreaWidth) * -1, this.render()
    }, e
  }();
  e.accerlation = .1, t.ScrollController = e
}(cf || (cf = {}));
var cf;
! function(t) {
  var e = function() {
    function t(e) {
      this.data = {
        "user-image": "//conversational-form-static-0iznjsw.stackpathdns.com/src/images/human.png",
        "entry-not-found": "Dictionary item not found.",
        "input-placeholder": "Type your answer here ...",
        "group-placeholder": "Type to filter list ...",
        "input-placeholder-error": "Your input is not correct ...",
        "input-placeholder-required": "Input is required ...",
        "input-placeholder-file-error": "File upload failed ...",
        "input-placeholder-file-size-error": "File size too big ...",
        "input-no-filter": "No results found for <strong>{input-value}</strong>",
        "user-reponse-and": " and ",
        "user-reponse-missing": "Missing input ...",
        "user-reponse-missing-group": "Nothing selected ...",
        general: "General type1|General type2",
        "icon-type-file": "<svg class='cf-icon-file' viewBox='0 0 10 14' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g transform='translate(-756.000000, -549.000000)' fill='#0D83FF'><g transform='translate(736.000000, 127.000000)'><g transform='translate(0.000000, 406.000000)'><polygon points='20 16 26.0030799 16 30 19.99994 30 30 20 30'></polygon></g></g></g></g></svg>"
      }, this.robotData = {
        "robot-image": "//conversational-form-static-0iznjsw.stackpathdns.com/src/images/robot.png",
        input: "Please write some text.",
        text: "Please write some text.",
        checkbox: "Select as many as you want.",
        name: "What's your name?",
        email: "Need your e-mail.",
        password: "Please provide password",
        tel: "What's your phone number?",
        radio: "I need you to select one of these.",
        select: "Choose any of these options.",
        general: "General1|General2|General3.."
      }, t.instance = this, e && e.data && (this.data = this.validateAndSetNewData(e.data, this.data)), e.userImage && (this.data["user-image"] = e.userImage), e.robotImage && (this.robotData["robot-image"] = e.robotImage), e && e.robotData && (this.robotData = this.validateAndSetNewData(e.robotData, this.robotData))
    }
    return t.get = function(e) {
      var n = t.instance,
        i = n.data[e];
      if (i) {
        var o = i.split("|");
        i = o[Math.floor(Math.random() * o.length)]
      } else i = n.data["entry-not-found"];
      return i
    }, t.set = function(e, n, i) {
      var o = t.instance,
        s = "robot" == n ? o.robotData : o.data;
      return s[e] = i, s[e]
    }, t.getRobotResponse = function(e) {
      var n = t.instance,
        i = n.robotData[e];
      if (i) {
        var o = i.split("|");
        i = o[Math.floor(Math.random() * o.length)]
      } else {
        var s = n.robotData.general.split("|");
        i = s[Math.floor(Math.random() * s.length)]
      }
      return i
    }, t.parseAndGetMultiValueString = function(e) {
      for (var n = "", i = 0; i < e.length; i++) {
        var o = e[i],
          s = e.length > 1 && i == e.length - 2 ? t.get("user-reponse-and") : ", ";
        n += o + (i < e.length - 1 ? s : "")
      }
      return n
    }, t.prototype.validateAndSetNewData = function(t, e) {
      for (var n in e) t[n] || (console.warn("Conversational Form Dictionary warning, '" + n + "' value is undefined, mapping '" + n + "' to default value. See Dictionary.ts for keys."), t[n] = e[n]);
      return t
    }, t
  }();
  e.keyCodes = {
    left: 37,
    right: 39,
    down: 40,
    up: 38,
    enter: 13,
    space: 32,
    shift: 16,
    tab: 9
  }, t.Dictionary = e
}(cf || (cf = {}));
var cf;
! function(cf) {
  var Tag = function() {
    function Tag(options) {
      this.domElement = options.domElement, this.domElement.tabIndex = -1, options.questions && (this.questions = options.questions), this.domElement.getAttribute("cf-validation") && (this.validationCallback = eval(this.domElement.getAttribute("cf-validation"))), this.domElement.getAttribute("pattern") && (this.pattern = new RegExp(this.domElement.getAttribute("pattern"))), "group" != this.type && console.log("Conversational Form > Tag registered:", this.type), this.refresh()
    }
    return Object.defineProperty(Tag.prototype, "type", {
      get: function() {
        return this.domElement.getAttribute("type") || this.domElement.tagName.toLowerCase()
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(Tag.prototype, "name", {
      get: function() {
        return this.domElement.getAttribute("name")
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(Tag.prototype, "inputPlaceholder", {
      get: function() {
        return this._inputPlaceholder
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(Tag.prototype, "label", {
      get: function() {
        return this._label || this.findAndSetLabel(), this._label ? this._label : cf.Dictionary.getRobotResponse(this.type)
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(Tag.prototype, "value", {
      get: function() {
        return this.domElement.value
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(Tag.prototype, "hasImage", {
      get: function() {
        return this.domElement.hasAttribute("cf-image")
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(Tag.prototype, "disabled", {
      get: function() {
        return void 0 != this.domElement.getAttribute("disabled") && null != this.domElement.getAttribute("disabled")
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(Tag.prototype, "required", {
      get: function() {
        return !!this.domElement.getAttribute("required") || "" == this.domElement.getAttribute("required")
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(Tag.prototype, "question", {
      get: function() {
        return this.questions && 0 != this.questions.length ? this.questions[Math.floor(Math.random() * this.questions.length)] : cf.Dictionary.getRobotResponse(this.type)
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(Tag.prototype, "errorMessage", {
      get: function() {
        return this.errorMessages || (this.domElement.getAttribute("cf-error") ? this.errorMessages = this.domElement.getAttribute("cf-error").split("|") : this.domElement.parentNode && this.domElement.parentNode.getAttribute("cf-error") ? this.errorMessages = this.domElement.parentNode.getAttribute("cf-error").split("|") : this.required ? this.errorMessages = [cf.Dictionary.get("input-placeholder-required")] : "file" == this.type ? this.errorMessages = [cf.Dictionary.get("input-placeholder-file-error")] : this.errorMessages = [cf.Dictionary.get("input-placeholder-error")]), this.errorMessages[Math.floor(Math.random() * this.errorMessages.length)]
      },
      enumerable: !0,
      configurable: !0
    }), Tag.prototype.dealloc = function() {
      this.domElement = null, this.defaultValue = null, this.errorMessages = null, this.pattern = null, this._label = null, this.validationCallback = null, this.questions = null
    }, Tag.isTagValid = function(t) {
      if ("hidden" === t.getAttribute("type")) return !1;
      if ("submit" === t.getAttribute("type")) return !1;
      if ("button" == t.getAttribute("type")) return !1;
      if ("none" === t.style.display) return !1;
      if ("hidden" === t.style.visibility) return !1;
      var e = cf.Helpers.getInnerTextOfElement(t);
      return ("option" != t.tagName.toLowerCase() || "" != e && " " != e) && ("select" == t.tagName.toLowerCase() || "option" == t.tagName.toLowerCase() || !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length))
    }, Tag.createTag = function(t) {
      if (Tag.isTagValid(t)) {
        var e = void 0;
        return "input" == t.tagName.toLowerCase() ? e = new cf.InputTag({
          domElement: t
        }) : "textarea" == t.tagName.toLowerCase() ? e = new cf.InputTag({
          domElement: t
        }) : "select" == t.tagName.toLowerCase() ? e = new cf.SelectTag({
          domElement: t
        }) : "button" == t.tagName.toLowerCase() ? e = new cf.ButtonTag({
          domElement: t
        }) : "option" == t.tagName.toLowerCase() && (e = new cf.OptionTag({
          domElement: t
        })), e
      }
      return null
    }, Tag.prototype.refresh = function() {
      this.defaultValue = this.domElement.value, this.questions = null, this.findAndSetQuestions()
    }, Tag.prototype.setTagValueAndIsValid = function(t) {
      var e = !0,
        n = t.text;
      this.pattern && (e = this.pattern.test(n)), "" == n && this.required && (e = !1);
      var i = parseInt(this.domElement.getAttribute("min"), 10) || -1,
        o = parseInt(this.domElement.getAttribute("max"), 10) || -1;
      return i != -1 && n.length < i && (e = !1), o != -1 && n.length > o && (e = !1), e && "file" != this.type && (this.domElement.value = n), e
    }, Tag.prototype.findAndSetQuestions = function() {
      if (!this.questions) {
        if (this.domElement.getAttribute("cf-questions")) this.questions = this.domElement.getAttribute("cf-questions").split("|"), this.domElement.getAttribute("cf-input-placeholder") && (this._inputPlaceholder = this.domElement.getAttribute("cf-input-placeholder"));
        else if (this.domElement.parentNode && this.domElement.parentNode.getAttribute("cf-questions")) {
          var t = this.domElement.parentNode;
          this.questions = t.getAttribute("cf-questions").split("|"), t.getAttribute("cf-input-placeholder") && (this._inputPlaceholder = t.getAttribute("cf-input-placeholder"))
        } else {
          var e = this.domElement.getAttribute("id"),
            n = document.querySelector("label[for='" + e + "']");
          n && (this.questions = [cf.Helpers.getInnerTextOfElement(n)])
        }!this.questions && this.domElement.getAttribute("placeholder") && (this.questions = [this.domElement.getAttribute("placeholder")])
      }
    }, Tag.prototype.findAndSetLabel = function() {
      if (this.domElement.getAttribute("cf-label")) this._label = this.domElement.getAttribute("cf-label");
      else {
        var t = this.domElement.parentNode;
        if (t) {
          var e = t.getElementsByTagName("label");
          if (0 == e.length) {
            var n = cf.Helpers.getInnerTextOfElement(t);
            n && n.length > 0 && (e = [t])
          }
          e.length > 0 && e[0] && (this._label = cf.Helpers.getInnerTextOfElement(e[0]))
        }
      }
    }, Tag
  }();
  cf.Tag = Tag
}(cf || (cf = {}));
var cf;
! function(t) {
  var e = function() {
    function e(t) {
      this.elements = t.elements, console.log("TagGroup registered:", this.elements[0].type, this)
    }
    return Object.defineProperty(e.prototype, "required", {
      get: function() {
        for (var t = 0; t < this.elements.length; t++) {
          this.elements[t];
          if (this.elements[t].required) return !0
        }
        return !1
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "type", {
      get: function() {
        return "group"
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "name", {
      get: function() {
        return this.elements[0].name
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "label", {
      get: function() {
        return this.elements[0].label
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "question", {
      get: function() {
        var e = this.elements[0].question;
        if (e) return e;
        var n = t.Dictionary.getRobotResponse(this.getGroupTagType());
        return n
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "activeElements", {
      get: function() {
        return this._activeElements
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "value", {
      get: function() {
        return this._values
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "disabled", {
      get: function() {
        for (var t = !1, e = 0; e < this.elements.length; e++) {
          var n = this.elements[e];
          n.disabled && (t = !0)
        }
        return t
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "errorMessage", {
      get: function() {
        for (var e = t.Dictionary.get("input-placeholder-error"), n = 0; n < this.elements.length; n++) {
          var i = this.elements[n];
          e = i.errorMessage
        }
        return e
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.dealloc = function() {
      for (var t = 0; t < this.elements.length; t++) {
        var e = this.elements[t];
        e.dealloc()
      }
      this.elements = null
    }, e.prototype.refresh = function() {
      for (var t = 0; t < this.elements.length; t++) {
        var e = this.elements[t];
        e.refresh()
      }
    }, e.prototype.getGroupTagType = function() {
      return this.elements[0].type
    }, e.prototype.setTagValueAndIsValid = function(t) {
      var e = !1,
        n = this.elements[0].type;
      switch (this._values = [], this._activeElements = [], n) {
        case "radio":
          for (var i = [], o = !1, s = 0; s < t.controlElements.length; s++) {
            var r = t.controlElements[s],
              a = this.elements[this.elements.indexOf(r.referenceTag)];
            r.visible && (i.push(r), a == r.referenceTag && (a.domElement.checked = r.checked, r.checked && (this._values.push(a.value), this._activeElements.push(a)), !o && r.checked && (o = !0)))
          }
          if (e || 1 != i.length) !e && o && (e = o);
          else {
            var r = i[0],
              a = this.elements[this.elements.indexOf(r.referenceTag)];
            r.checked = !0, a.domElement.checked = !0, e = !0, r.checked && (this._values.push(a.value), this._activeElements.push(a))
          }
          break;
        case "checkbox":
          e = !0;
          for (var s = 0; s < t.controlElements.length; s++) {
            var r = t.controlElements[s],
              a = this.elements[this.elements.indexOf(r.referenceTag)];
            a.domElement.checked = r.checked, r.checked && (this._values.push(a.value), this._activeElements.push(a))
          }
      }
      return e
    }, e
  }();
  t.TagGroup = e
}(cf || (cf = {}));
var __extends = this && this.__extends || function(t, e) {
    function n() {
      this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
  },
  cf;
! function(t) {
  var e = function(t) {
    function e(e) {
      var n = t.call(this, e) || this;
      return "text" == n.type || "email" == n.type || "tel" == n.type || "checkbox" == n.type || "radio" == n.type || "password" == n.type || "file" == n.type, n
    }
    return __extends(e, t), e.prototype.findAndSetQuestions = function() {
      t.prototype.findAndSetQuestions.call(this)
    }, e.prototype.findAndSetLabel = function() {
      t.prototype.findAndSetLabel.call(this), !this._label
    }, e.prototype.setTagValueAndIsValid = function(e) {
      return "checkbox" == this.type || t.prototype.setTagValueAndIsValid.call(this, e)
    }, e.prototype.dealloc = function() {
      t.prototype.dealloc.call(this)
    }, e
  }(t.Tag);
  t.InputTag = e
}(cf || (cf = {}));
var __extends = this && this.__extends || function(t, e) {
    function n() {
      this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
  },
  cf;
! function(t) {
  var e = function(e) {
    function n(n) {
      var i = e.call(this, n) || this;
      i.optionTags = [];
      for (var o = i.domElement.getElementsByTagName("option"), s = 0; s < o.length; s++) {
        var r = o[s],
          a = t.Tag.createTag(r);
        a && i.optionTags.push(a)
      }
      return i
    }
    return __extends(n, e), Object.defineProperty(n.prototype, "type", {
      get: function() {
        return "select"
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "value", {
      get: function() {
        return this._values
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "multipleChoice", {
      get: function() {
        return this.domElement.hasAttribute("multiple")
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.setTagValueAndIsValid = function(t) {
      var e = !1,
        n = [];
      this._values = [];
      for (var i = 0; i < this.optionTags.length; i++)
        for (var o = this.optionTags[i], s = 0; s < t.controlElements.length; s++) {
          var r = t.controlElements[s];
          r.referenceTag == o && (o.selected = r.selected, !e && o.selected && (e = !0), o.selected && this._values.push(o.value), r.visible && n.push(r))
        }
      if (!e && 1 == n.length) {
        var a = n[0],
          o = this.optionTags[this.optionTags.indexOf(a.referenceTag)];
        a.selected = !0, o.selected = !0, e = !0, o.selected && this._values.push(o.value)
      }
      return e
    }, n
  }(t.Tag);
  t.SelectTag = e
}(cf || (cf = {}));
var __extends = this && this.__extends || function(t, e) {
    function n() {
      this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
  },
  cf;
! function(t) {
  var e = function(t) {
    function e(e) {
      var n = t.call(this, e) || this;
      return "submit" == n.domElement.getAttribute("type") || "button" == n.domElement.getAttribute("type"), n
    }
    return __extends(e, t), e
  }(t.Tag);
  t.ButtonTag = e
}(cf || (cf = {}));
var __extends = this && this.__extends || function(t, e) {
    function n() {
      this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
  },
  cf;
! function(t) {
  var e = function(e) {
    function n() {
      return null !== e && e.apply(this, arguments) || this
    }
    return __extends(n, e), Object.defineProperty(n.prototype, "type", {
      get: function() {
        return "option"
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "label", {
      get: function() {
        return t.Helpers.getInnerTextOfElement(this.domElement)
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "selected", {
      get: function() {
        return this.domElement.selected
      },
      set: function(t) {
        t ? this.domElement.setAttribute("selected", "selected") : this.domElement.removeAttribute("selected")
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.setTagValueAndIsValid = function(t) {
      var e = !0;
      return e
    }, n
  }(t.Tag);
  t.OptionTag = e
}(cf || (cf = {}));
var __extends = this && this.__extends || function(t, e) {
    function n() {
      this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
  },
  cf;
! function(t) {
  var e = function(e) {
    function n(t) {
      var n = e.call(this, t) || this;
      return n.clickCallback = n.onClick.bind(n), n.el.addEventListener("click", n.clickCallback, !1), n.mouseDownCallback = n.onMouseDown.bind(n), n.el.addEventListener("mousedown", n.mouseDownCallback, !1), n.checkForImage(), n
    }
    return __extends(n, e), Object.defineProperty(n.prototype, "type", {
      get: function() {
        return "Button"
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.hasImage = function() {
      return this.referenceTag.hasImage
    }, n.prototype.checkForImage = function() {
      var t = this.hasImage();
      t && (this.el.classList.add("has-image"), this.imgEl = document.createElement("img"), this.imageLoadedCallback = this.onImageLoaded.bind(this), this.imgEl.classList.add("cf-image"), this.imgEl.addEventListener("load", this.imageLoadedCallback, !1), this.imgEl.src = this.referenceTag.domElement.getAttribute("cf-image"), this.el.insertBefore(this.imgEl, this.el.children[0]))
    }, n.prototype.onImageLoaded = function() {
      this.imgEl.classList.add("loaded"), this.eventTarget.dispatchEvent(new CustomEvent(t.ControlElementEvents.ON_LOADED, {}))
    }, n.prototype.onMouseDown = function(t) {
      t.preventDefault()
    }, n.prototype.onClick = function(t) {
      this.onChoose()
    }, n.prototype.dealloc = function() {
      this.el.removeEventListener("click", this.clickCallback, !1), this.clickCallback = null, this.imageLoadedCallback && (this.imgEl.removeEventListener("load", this.imageLoadedCallback, !1), this.imageLoadedCallback = null), this.el.removeEventListener("mousedown", this.mouseDownCallback, !1), this.mouseDownCallback = null, e.prototype.dealloc.call(this)
    }, n.prototype.getTemplate = function() {
      return '<cf-button class="cf-button">\n\t\t\t\t' + this.referenceTag.label + "\n\t\t\t</cf-button>\n\t\t\t"
    }, n
  }(t.ControlElement);
  t.Button = e
}(cf || (cf = {}));
var __extends = this && this.__extends || function(t, e) {
    function n() {
      this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
  },
  cf;
! function(t) {
  var e = function(t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this
    }
    return __extends(e, t), Object.defineProperty(e.prototype, "type", {
      get: function() {
        return "RadioButton"
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "checked", {
      get: function() {
        var t = this.el.hasAttribute("checked") && "checked" == this.el.getAttribute("checked");
        return t
      },
      set: function(t) {
        t ? this.el.setAttribute("checked", "checked") : this.el.removeAttribute("checked")
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.onClick = function(e) {
      this.checked = !this.checked, t.prototype.onClick.call(this, e)
    }, e.prototype.getTemplate = function() {
      var t = this.referenceTag.domElement.hasAttribute("checked");
      return '<cf-radio-button class="cf-button" checked=' + (t ? "checked" : "") + ">\n\t\t\t\t<div>\n\t\t\t\t\t<cf-radio></cf-radio>\n\t\t\t\t\t" + this.referenceTag.label + "\n\t\t\t\t</div>\n\t\t\t</cf-radio-button>\n\t\t\t"
    }, e
  }(t.Button);
  t.RadioButton = e
}(cf || (cf = {}));
var __extends = this && this.__extends || function(t, e) {
    function n() {
      this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
  },
  cf;
! function(t) {
  var e = function(t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this
    }
    return __extends(e, t), Object.defineProperty(e.prototype, "type", {
      get: function() {
        return "CheckboxButton"
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "checked", {
      get: function() {
        return "checked" == this.el.getAttribute("checked")
      },
      set: function(t) {
        t ? (this.el.setAttribute("checked", "checked"), this.referenceTag.domElement.value = "1", this.referenceTag.domElement.setAttribute("checked", "checked")) : (this.el.removeAttribute("checked"), this.referenceTag.domElement.value = "0", this.referenceTag.domElement.removeAttribute("checked"))
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.onClick = function(t) {
      this.checked = !this.checked
    }, e.prototype.getTemplate = function() {
      var t = "1" == this.referenceTag.value || this.referenceTag.domElement.hasAttribute("checked");
      return '<cf-button class="cf-button cf-checkbox-button ' + (0 == this.referenceTag.label.trim().length ? "no-text" : "") + '" checked=' + (t ? "checked" : "") + ">\n\t\t\t\t<div>\n\t\t\t\t\t<cf-checkbox></cf-checkbox>\n\t\t\t\t\t" + this.referenceTag.label + "\n\t\t\t\t</div>\n\t\t\t</cf-button>\n\t\t\t"
    }, e
  }(t.Button);
  t.CheckboxButton = e
}(cf || (cf = {}));
var __extends = this && this.__extends || function(t, e) {
    function n() {
      this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
  },
  cf;
! function(t) {
  t.OptionButtonEvents = {
    CLICK: "cf-option-button-click"
  };
  var e = function(e) {
    function n() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.isMultiChoice = !1, t
    }
    return __extends(n, e), Object.defineProperty(n.prototype, "type", {
      get: function() {
        return "OptionButton"
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "selected", {
      get: function() {
        return this.el.hasAttribute("selected")
      },
      set: function(t) {
        t ? this.el.setAttribute("selected", "selected") : this.el.removeAttribute("selected")
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.setData = function(t) {
      this.isMultiChoice = t.isMultiChoice, e.prototype.setData.call(this, t)
    }, n.prototype.onClick = function(e) {
      t.ConversationalForm.illustrateFlow(this, "dispatch", t.OptionButtonEvents.CLICK, this), this.eventTarget.dispatchEvent(new CustomEvent(t.OptionButtonEvents.CLICK, {
        detail: this
      }))
    }, n.prototype.getTemplate = function() {
      var t = '<cf-button class="cf-button ' + (this.isMultiChoice ? "cf-checkbox-button" : "") + '" ' + (this.referenceTag.domElement.selected ? "selected='selected'" : "") + ">";
      return t += "<div>", this.isMultiChoice && (t += "<cf-checkbox></cf-checkbox>"), t += this.referenceTag.label, t += "</div>", t += "</cf-button>"
    }, n
  }(t.Button);
  t.OptionButton = e
}(cf || (cf = {}));
var cf;
! function(t) {
  var e = function() {
    function e(e) {
      this.context = e.context, this.eventTarget = e.eventTarget, this.referenceTag = e.referenceTag, this.multiChoice = this.referenceTag.domElement.hasAttribute("multiple"), this.onOptionButtonClickCallback = this.onOptionButtonClick.bind(this), this.eventTarget.addEventListener(t.OptionButtonEvents.CLICK, this.onOptionButtonClickCallback, !1), this.createElements()
    }
    return Object.defineProperty(e.prototype, "type", {
      get: function() {
        return "OptionsList"
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.getValue = function() {
      for (var t = [], e = 0; e < this.elements.length; e++) {
        var n = this.elements[e];
        if (!this.multiChoice && n.selected) return t.push(n), t;
        this.multiChoice && n.selected && t.push(n)
      }
      return t
    }, e.prototype.onOptionButtonClick = function(e) {
      if (this.multiChoice) e.detail.selected = !e.detail.selected;
      else {
        for (var n = 0; n < this.elements.length; n++) {
          var i = this.elements[n];
          i != e.detail ? i.selected = !1 : i.selected = !0
        }
        t.ConversationalForm.illustrateFlow(this, "dispatch", t.ControlElementEvents.SUBMIT_VALUE, this.referenceTag), this.eventTarget.dispatchEvent(new CustomEvent(t.ControlElementEvents.SUBMIT_VALUE, {
          detail: e.detail
        }))
      }
    }, e.prototype.createElements = function() {
      this.elements = [];
      for (var e = this.referenceTag.optionTags, n = 0; n < e.length; n++) {
        var i = e[n],
          o = new t.OptionButton({
            referenceTag: i,
            isMultiChoice: this.referenceTag.multipleChoice,
            eventTarget: this.eventTarget
          });
        this.elements.push(o), this.context.appendChild(o.el)
      }
    }, e.prototype.dealloc = function() {
      for (this.eventTarget.removeEventListener(t.OptionButtonEvents.CLICK, this.onOptionButtonClickCallback, !1), this.onOptionButtonClickCallback = null; this.elements.length > 0;) this.elements.pop().dealloc();
      this.elements = null
    }, e
  }();
  t.OptionsList = e
}(cf || (cf = {}));
var __extends = this && this.__extends || function(t, e) {
    function n() {
      this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
  },
  cf;
! function(t) {
  var e = function(e) {
    function n(n) {
      var i = e.call(this, n) || this;
      if (i.maxFileSize = 1e11, i.loading = !1, i.submitTimer = 0, i._fileName = "", i._readerResult = "", !t.Helpers.caniuse.fileReader()) throw new Error("Conversational Form Error: No FileReader available for client.");
      var o = i.referenceTag.domElement.getAttribute("cf-max-size") || i.referenceTag.domElement.getAttribute("max-size");
      if (o) {
        var s = parseInt(o, 10);
        i.maxFileSize = s
      }
      return i.progressBar = i.el.getElementsByTagName("cf-upload-file-progress-bar")[0], i.onDomElementChangeCallback = i.onDomElementChange.bind(i), i.referenceTag.domElement.addEventListener("change", i.onDomElementChangeCallback, !1), i
    }
    return __extends(n, e), Object.defineProperty(n.prototype, "value", {
      get: function() {
        return this.referenceTag.domElement.value
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "readerResult", {
      get: function() {
        return this._readerResult
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "files", {
      get: function() {
        return this._files
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "fileName", {
      get: function() {
        return this._fileName
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "type", {
      get: function() {
        return "UploadFileUI"
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.getFilesAsString = function() {
      var e = document.createElement("span");
      return e.innerHTML = t.Dictionary.get("icon-type-file") + this.fileName, e.outerHTML
    }, n.prototype.onDomElementChange = function(e) {
      var n = this;
      console.log("...onDomElementChange");
      var i = new FileReader;
      this._files = this.referenceTag.domElement.files, i.onerror = function(t) {
        console.log("onerror", t)
      }, i.onprogress = function(t) {
        console.log("onprogress", t), n.progressBar.style.width = t.loaded / t.total * 100 + "%"
      }, i.onabort = function(t) {
        console.log("onabort", t)
      }, i.onloadstart = function(e) {
        var o = n.files[0],
          s = o ? o.size : n.maxFileSize + 1;
        if (s > n.maxFileSize) {
          i.abort();
          var r = {
            errorText: t.Dictionary.get("input-placeholder-file-size-error")
          };
          t.ConversationalForm.illustrateFlow(n, "dispatch", t.FlowEvents.USER_INPUT_INVALID, r), n.eventTarget.dispatchEvent(new CustomEvent(t.FlowEvents.USER_INPUT_INVALID, {
            detail: r
          }))
        } else {
          n._fileName = o.name, n.loading = !0, n.animateIn();
          var a = Math.floor(Math.log(s) / Math.log(1024)),
            l = ["b", "kb", "mb", "gb"];
          a = Math.min(l.length - 1, a);
          var c = 1 * Number((s / Math.pow(1024, a)).toFixed(2)) + " " + l[a],
            u = o.name + " (" + c + ")";
          n.el.getElementsByTagName("cf-upload-file-text")[0].innerHTML = u, n.eventTarget.dispatchEvent(new CustomEvent(t.ControlElementEvents.PROGRESS_CHANGE, {
            detail: t.ControlElementProgressStates.BUSY
          }))
        }
      }, i.onload = function(e) {
        n._readerResult = e.target.result, n.progressBar.classList.add("loaded"), n.submitTimer = setTimeout(function() {
          n.el.classList.remove("animate-in"), n.onChoose(), n.eventTarget.dispatchEvent(new CustomEvent(t.ControlElementEvents.PROGRESS_CHANGE, {
            detail: t.ControlElementProgressStates.READY
          }))
        }, 0)
      }, i.readAsDataURL(this.files[0])
    }, n.prototype.animateIn = function() {
      this.loading && e.prototype.animateIn.call(this)
    }, n.prototype.onClick = function(t) {}, n.prototype.triggerFileSelect = function() {
      this.referenceTag.domElement.click()
    }, n.prototype.dealloc = function() {
      clearTimeout(this.submitTimer), this.progressBar = null, this.onDomElementChangeCallback && (this.referenceTag.domElement.removeEventListener("change", this.onDomElementChangeCallback, !1), this.onDomElementChangeCallback = null), e.prototype.dealloc.call(this)
    }, n.prototype.getTemplate = function() {
      "1" == this.referenceTag.value || this.referenceTag.domElement.hasAttribute("checked");
      return "<cf-upload-file-ui>\n\t\t\t\t<cf-upload-file-text></cf-upload-file-text>\n\t\t\t\t<cf-upload-file-progress>\n\t\t\t\t\t<cf-upload-file-progress-bar></cf-upload-file-progress-bar>\n\t\t\t\t</cf-upload-file-progress>\n\t\t\t</cf-upload-file-ui>\n\t\t\t"
    }, n
  }(t.Button);
  t.UploadFileUI = e
}(cf || (cf = {}));
var __extends = this && this.__extends || function(t, e) {
    function n() {
      this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
  },
  cf;
! function(t) {
  t.UserInputEvents = {
    SUBMIT: "cf-input-user-input-submit",
    KEY_CHANGE: "cf-input-key-change",
    CONTROL_ELEMENTS_ADDED: "cf-input-control-elements-added"
  };
  var e = function(e) {
    function n(n) {
      var i = e.call(this, n) || this;
      return i.currentValue = "", i.errorTimer = 0, i.shiftIsDown = !1, i._disabled = !1, i._active = !1, i.cfReference = n.cfReference, i.eventTarget = n.eventTarget, i.inputElement = i.el.getElementsByTagName("textarea")[0], i.onInputFocusCallback = i.onInputFocus.bind(i), i.inputElement.addEventListener("focus", i.onInputFocusCallback, !1), i.onInputBlurCallback = i.onInputBlur.bind(i), i.inputElement.addEventListener("blur", i.onInputBlurCallback, !1), i.controlElements = new t.ControlElements({
          el: i.el.getElementsByTagName("cf-input-control-elements")[0],
          infoEl: i.el.getElementsByTagName("cf-info")[0],
          eventTarget: i.eventTarget
        }), i.windowFocusCallback = i.windowFocus.bind(i), window.addEventListener("focus", i.windowFocusCallback, !1), i.keyUpCallback = i.onKeyUp.bind(i), document.addEventListener("keyup", i.keyUpCallback, !1), i.keyDownCallback = i.onKeyDown.bind(i), document.addEventListener("keydown", i.keyDownCallback, !1), i.flowUpdateCallback = i.onFlowUpdate.bind(i), i.eventTarget.addEventListener(t.FlowEvents.FLOW_UPDATE, i.flowUpdateCallback, !1), i.inputInvalidCallback = i.inputInvalid.bind(i),
        i.eventTarget.addEventListener(t.FlowEvents.USER_INPUT_INVALID, i.inputInvalidCallback, !1), i.onControlElementSubmitCallback = i.onControlElementSubmit.bind(i), i.eventTarget.addEventListener(t.ControlElementEvents.SUBMIT_VALUE, i.onControlElementSubmitCallback, !1), i.onControlElementProgressChangeCallback = i.onControlElementProgressChange.bind(i), i.eventTarget.addEventListener(t.ControlElementEvents.PROGRESS_CHANGE, i.onControlElementProgressChangeCallback, !1), i.submitButton = i.el.getElementsByTagName("cf-input-button")[0], i.onSubmitButtonClickCallback = i.onSubmitButtonClick.bind(i), i.submitButton.addEventListener("click", i.onSubmitButtonClickCallback, !1), i
    }
    return __extends(n, e), Object.defineProperty(n.prototype, "active", {
      get: function() {
        return this.inputElement === document.activeElement || this._active
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "visible", {
      set: function(t) {
        !this.el.classList.contains("animate-in") && t ? this.el.classList.add("animate-in") : this.el.classList.contains("animate-in") && !t && this.el.classList.remove("animate-in")
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "currentTag", {
      get: function() {
        return this._currentTag
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "disabled", {
      set: function(t) {
        var e = this._disabled != t;
        e && (this._disabled = t, t ? (this.el.setAttribute("disabled", "disabled"), this.inputElement.blur()) : (this.setFocusOnInput(), this.el.removeAttribute("disabled")))
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.getInputValue = function() {
      var t = this.inputElement.value,
        e = document.createElement("div");
      return e.appendChild(document.createTextNode(t)), e.innerHTML
    }, n.prototype.getFlowDTO = function() {
      var t;
      return t = this.controlElements && this.controlElements.active ? this.controlElements.getDTO() : {
        text: this.getInputValue()
      }, t.input = this, t
    }, n.prototype.reset = function() {
      this.controlElements && this.controlElements.clearTagsAndReset()
    }, n.prototype.onFlowStopped = function() {
      this.controlElements && this.controlElements.clearTagsAndReset(), this.disabled = !0, this.visible = !1
    }, n.prototype.onInputChange = function() {
      (this.active || this.controlElements.active) && (this.inputElement.style.height = "0px", this.inputElement.style.height = this.inputElement.scrollHeight + "px")
    }, n.prototype.inputInvalid = function(e) {
      var i = this;
      t.ConversationalForm.illustrateFlow(this, "receive", e.type, e.detail);
      var o = e.detail;
      this.inputElement.setAttribute("data-value", this.inputElement.value), this.inputElement.value = "", this.el.setAttribute("error", ""), this.disabled = !0, this.inputElement.setAttribute("placeholder", o.errorText || this._currentTag.errorMessage), clearTimeout(this.errorTimer), this.errorTimer = setTimeout(function() {
        i.disabled = !1, i.el.removeAttribute("error"), i.inputElement.value = i.inputElement.getAttribute("data-value"), i.inputElement.setAttribute("data-value", ""), i.setPlaceholder(), i.setFocusOnInput(), i.controlElements && i.controlElements.resetAfterErrorMessage()
      }, n.ERROR_TIME)
    }, n.prototype.setPlaceholder = function() {
      this._currentTag ? this._currentTag.inputPlaceholder ? this.inputElement.setAttribute("placeholder", this._currentTag.inputPlaceholder) : this.inputElement.setAttribute("placeholder", "group" == this._currentTag.type ? t.Dictionary.get("group-placeholder") : t.Dictionary.get("input-placeholder")) : this.inputElement.setAttribute("placeholder", t.Dictionary.get("group-placeholder"))
    }, n.prototype.onFlowUpdate = function(e) {
      var i = this;
      t.ConversationalForm.illustrateFlow(this, "receive", e.type, e.detail), this.visible = !0, this._currentTag = e.detail, this.el.setAttribute("tag-type", this._currentTag.type), this.inputElement.setAttribute("type", "password" == this._currentTag.type ? "password" : "input"), clearTimeout(this.errorTimer), this.el.removeAttribute("error"), this.inputElement.setAttribute("data-value", ""), this.inputElement.value = "", this.setPlaceholder(), this.resetValue(), n.preventAutoFocus || this.setFocusOnInput(), this.controlElements.reset(), "group" == this._currentTag.type ? this.buildControlElements(this._currentTag.elements) : this.buildControlElements([this._currentTag]), "text" != this._currentTag.type && "email" != this._currentTag.type || (this.inputElement.value = this._currentTag.defaultValue.toString(), this.onInputChange()), setTimeout(function() {
        i.disabled = !1
      }, 150)
    }, n.prototype.onControlElementProgressChange = function(e) {
      var n = e.detail;
      this.disabled = n == t.ControlElementProgressStates.BUSY
    }, n.prototype.buildControlElements = function(t) {
      this.controlElements.buildTags(t)
    }, n.prototype.onControlElementSubmit = function(e) {
      t.ConversationalForm.illustrateFlow(this, "receive", e.type, e.detail);
      var n = e.detail;
      this.controlElements.updateStateOnElements(n), this.doSubmit()
    }, n.prototype.onSubmitButtonClick = function(t) {
      this.onEnterOrSubmitButtonSubmit(t)
    }, n.prototype.onKeyDown = function(e) {
      (this.active || this.controlElements.focus) && (e.keyCode == t.Dictionary.keyCodes.shift && (this.shiftIsDown = !0), e.keyCode != t.Dictionary.keyCodes.enter || e.shiftKey ? this._currentTag && "password" == this._currentTag.type && ("backspace" == e.key.toLowerCase() ? this.currentValue = this.currentValue.length > 0 ? this.currentValue.slice(0, this.currentValue.length - 1) : "" : this.currentValue += e.key) : e.preventDefault())
    }, n.prototype.onKeyUp = function(e) {
      if (this.active || this.controlElements.focus) {
        if ("" != this.inputElement.value && this.inputElement.selectionStart == this.inputElement.selectionEnd || (this.currentValue = ""), e.keyCode == t.Dictionary.keyCodes.shift) this.shiftIsDown = !1;
        else if (e.keyCode == t.Dictionary.keyCodes.up) e.preventDefault(), this.active && !this.controlElements.focus && this.controlElements.focusFrom("bottom");
        else if (e.keyCode == t.Dictionary.keyCodes.down) e.preventDefault(), this.active && !this.controlElements.focus && this.controlElements.focusFrom("top");
        else if (e.keyCode == t.Dictionary.keyCodes.tab) {
          for (var n = !1, i = e.target.parentNode; null != i;) {
            if (i === this.cfReference.el) {
              n = !0;
              break
            }
            i = i.parentNode
          }
          n || (e.preventDefault(), this.controlElements.active || this.setFocusOnInput())
        }
        if (!this.el.hasAttribute("disabled")) {
          var o = this.getFlowDTO();
          if (e.keyCode == t.Dictionary.keyCodes.enter && !e.shiftKey || e.keyCode == t.Dictionary.keyCodes.space)
            if (e.keyCode == t.Dictionary.keyCodes.enter && this.active) e.preventDefault(), this.onEnterOrSubmitButtonSubmit();
            else if (e.keyCode == t.Dictionary.keyCodes.enter || e.keyCode == t.Dictionary.keyCodes.space) {
            e.preventDefault();
            var s = "group" == this._currentTag.type ? this._currentTag.getGroupTagType() : this._currentTag.type;
            if ("select" == s || "checkbox" == s) {
              var r = this._currentTag;
              "checkbox" == s || r.multipleChoice ? this.active && e.keyCode == t.Dictionary.keyCodes.enter ? this.submitButton.click() : (this.dispatchKeyChange(o, e.keyCode), this.active || (this.resetValue(), this.setFocusOnInput(), this.dispatchKeyChange(o, e.keyCode))) : this.dispatchKeyChange(o, e.keyCode)
            } else "group" == this._currentTag.type && this.dispatchKeyChange(o, e.keyCode)
          } else e.keyCode == t.Dictionary.keyCodes.space && document.activeElement && this.dispatchKeyChange(o, e.keyCode);
          else e.keyCode != t.Dictionary.keyCodes.shift && e.keyCode != t.Dictionary.keyCodes.tab && this.dispatchKeyChange(o, e.keyCode);
          this._currentTag && "password" == this._currentTag.type && (this.inputElement.value = this.currentValue.replace(/./g, function() {
            return "*"
          })), this.onInputChange()
        }
      }
    }, n.prototype.dispatchKeyChange = function(e, n) {
      t.ConversationalForm.illustrateFlow(this, "dispatch", t.UserInputEvents.KEY_CHANGE, e), this.eventTarget.dispatchEvent(new CustomEvent(t.UserInputEvents.KEY_CHANGE, {
        detail: {
          dto: e,
          keyCode: n,
          inputFieldActive: this.active
        }
      }))
    }, n.prototype.windowFocus = function(t) {
      n.preventAutoFocus || this.setFocusOnInput()
    }, n.prototype.onInputBlur = function(t) {
      this._active = !1
    }, n.prototype.onInputFocus = function(t) {
      this._active = !0, this.onInputChange()
    }, n.prototype.setFocusOnInput = function() {
      this.inputElement.focus()
    }, n.prototype.onEnterOrSubmitButtonSubmit = function(t) {
      void 0 === t && (t = null), this.active && this.controlElements.highlighted ? this.controlElements.clickOnHighlighted() : this._currentTag ? "file" == this._currentTag.type && t ? this.controlElements.getElement(0).triggerFileSelect() : this.doSubmit() : this.eventTarget.cf.addUserChatResponse(this.inputElement.value)
    }, n.prototype.doSubmit = function() {
      var e = this.getFlowDTO();
      this.disabled = !0, this.el.removeAttribute("error"), this.inputElement.setAttribute("data-value", ""), t.ConversationalForm.illustrateFlow(this, "dispatch", t.UserInputEvents.SUBMIT, e), this.eventTarget.dispatchEvent(new CustomEvent(t.UserInputEvents.SUBMIT, {
        detail: e
      }))
    }, n.prototype.resetValue = function() {
      this.inputElement.value = "", this.onInputChange()
    }, n.prototype.dealloc = function() {
      this.inputElement.removeEventListener("blur", this.onInputBlurCallback, !1), this.onInputBlurCallback = null, this.inputElement.removeEventListener("focus", this.onInputFocusCallback, !1), this.onInputFocusCallback = null, window.removeEventListener("focus", this.windowFocusCallback, !1), this.windowFocusCallback = null, document.removeEventListener("keydown", this.keyDownCallback, !1), this.keyDownCallback = null, document.removeEventListener("keyup", this.keyUpCallback, !1), this.keyUpCallback = null, this.eventTarget.removeEventListener(t.FlowEvents.FLOW_UPDATE, this.flowUpdateCallback, !1), this.flowUpdateCallback = null, this.eventTarget.removeEventListener(t.FlowEvents.USER_INPUT_INVALID, this.inputInvalidCallback, !1), this.inputInvalidCallback = null, this.eventTarget.removeEventListener(t.ControlElementEvents.SUBMIT_VALUE, this.onControlElementSubmitCallback, !1), this.onControlElementSubmitCallback = null, this.submitButton = this.el.getElementsByClassName("cf-input-button")[0], this.submitButton.removeEventListener("click", this.onSubmitButtonClickCallback, !1), this.onSubmitButtonClickCallback = null, e.prototype.dealloc.call(this)
    }, n.prototype.getTemplate = function() {
      return '<cf-input>\n\t\t\t\t<cf-info></cf-info>\n\t\t\t\t<cf-input-control-elements>\n\t\t\t\t\t<cf-list-button direction="prev">\n\t\t\t\t\t</cf-list-button>\n\t\t\t\t\t<cf-list-button direction="next">\n\t\t\t\t\t</cf-list-button>\n\t\t\t\t\t<cf-list>\n\t\t\t\t\t</cf-list>\n\t\t\t\t</cf-input-control-elements>\n\n\t\t\t\t<cf-input-button class="cf-input-button">\n\t\t\t\t\t<div class="cf-icon-progress"></div>\n\t\t\t\t\t<div class="cf-icon-attachment"></div>\n\t\t\t\t</cf-input-button>\n\t\t\t\t\n\t\t\t\t<textarea type=\'input\' tabindex="1" rows="1"></textarea>\n\n\t\t\t</cf-input>\n\t\t\t'
    }, n
  }(t.BasicElement);
  e.preventAutoFocus = !1, e.ERROR_TIME = 2e3, t.UserInput = e
}(cf || (cf = {}));
var __extends = this && this.__extends || function(t, e) {
    function n() {
      this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
  },
  cf;
! function(t) {
  t.ChatResponseEvents = {
    USER_ANSWER_CLICKED: "cf-on-user-answer-clicked"
  };
  var e = function(e) {
    function n(t) {
      var n = e.call(this, t) || this;
      return n._tag = t.tag, n.textEl = n.el.getElementsByTagName("text")[0], n
    }
    return __extends(n, e), Object.defineProperty(n.prototype, "tag", {
      get: function() {
        return this._tag
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "disabled", {
      get: function() {
        return this.el.classList.contains("disabled")
      },
      set: function(t) {
        this.el.classList.toggle("disabled", t)
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "visible", {
      set: function(t) {
        t ? this.el.classList.add("show") : this.el.classList.remove("show")
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.setValue = function(e) {
      void 0 === e && (e = null), this.visible || (this.visible = !0);
      this.textEl.hasAttribute("thinking");
      if (e) {
        this.response = e.text;
        this.processResponseAndSetText();
        if (this.responseLink && !this.isRobotReponse && this.responseLink.processResponseAndSetText(), e && e.controlElements && e.controlElements[0]) switch (e.controlElements[0].type) {
          case "UploadFileUI":
            this.textEl.classList.add("file-icon")
        }
        this.isRobotReponse || this.onClickCallback || (this.onClickCallback = this.onClick.bind(this), this.el.addEventListener(t.Helpers.getMouseEvent("click"), this.onClickCallback, !1))
      } else this.setToThinking()
    }, n.prototype.hide = function() {
      this.el.classList.remove("show"), this.disabled = !0
    }, n.prototype.show = function() {
      this.el.classList.add("show"), this.disabled = !1, this.response ? this.checkForEditMode() : this.setToThinking()
    }, n.prototype.updateThumbnail = function(t) {
      this.image = t;
      var e = this.el.getElementsByTagName("thumb")[0];
      e.style.backgroundImage = "url(" + this.image + ")"
    }, n.prototype.setLinkToOtherReponse = function(t) {
      this.responseLink = t
    }, n.prototype.processResponseAndSetText = function() {
      var e = this,
        n = this.response;
      if (this._tag && "password" == this._tag.type && !this.isRobotReponse) {
        for (var i = "", o = 0; o < n.length; o++) i += "*";
        n = i
      } else n = t.Helpers.emojify(n);
      this.responseLink && this.isRobotReponse && (n = n.split("{previous-answer}").join(this.responseLink.parsedResponse));
      var s = n.indexOf("contains-image") != -1;
      return s && this.textEl.classList.add("contains-image"), this.textEl.innerHTML = n, this.parsedResponse = n, this.textEl.removeAttribute("thinking"), this.textEl.removeAttribute("value-added"), setTimeout(function() {
        e.textEl.setAttribute("value-added", "")
      }, 0), this.checkForEditMode(), n
    }, n.prototype.checkForEditMode = function() {
      this.isRobotReponse || (this.el.classList.add("can-edit"), this.disabled = !1)
    }, n.prototype.setToThinking = function() {
      this.textEl.innerHTML = n.THINKING_MARKUP, this.el.classList.remove("can-edit"), this.textEl.setAttribute("thinking", "")
    }, n.prototype.onClick = function(e) {
      this.setToThinking(), t.ConversationalForm.illustrateFlow(this, "dispatch", t.ChatResponseEvents.USER_ANSWER_CLICKED, e), this.eventTarget.dispatchEvent(new CustomEvent(t.ChatResponseEvents.USER_ANSWER_CLICKED, {
        detail: this._tag
      }))
    }, n.prototype.setData = function(n) {
      var i = this;
      this.image = n.image, this.response = "", this.isRobotReponse = n.isRobotReponse, e.prototype.setData.call(this, n), setTimeout(function() {
        i.setValue(), i.isRobotReponse || null != n.response ? setTimeout(function() {
          return i.setValue({
            text: n.response
          })
        }, 0) : setTimeout(function() {
          return i.el.classList.add("peak-thumb")
        }, t.ConversationalForm.animationsEnabled ? 1400 : 0)
      }, 0)
    }, n.prototype.dealloc = function() {
      this.onClickCallback && (this.el.removeEventListener(t.Helpers.getMouseEvent("click"), this.onClickCallback, !1), this.onClickCallback = null), e.prototype.dealloc.call(this)
    }, n.prototype.getTemplate = function() {
      return '<cf-chat-response class="' + (this.isRobotReponse ? "robot" : "user") + '">\n\t\t\t\t<thumb style="background-image: url(' + this.image + ')"></thumb>\n\t\t\t\t<text>' + (this.response ? this.response : n.THINKING_MARKUP) + "</text>\n\t\t\t</cf-chat-response>"
    }, n
  }(t.BasicElement);
  e.THINKING_MARKUP = "<thinking><span>.</span><span>.</span><span>.</span></thinking>", t.ChatResponse = e
}(cf || (cf = {}));
var __extends = this && this.__extends || function(t, e) {
    function n() {
      this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
  },
  cf;
! function(t) {
  t.ChatListEvents = {
    CHATLIST_UPDATED: "cf-chatlist-updated"
  };
  var e = function(e) {
    function n(n) {
      var i = e.call(this, n) || this;
      return i.responses = [], i.flowUpdateCallback = i.onFlowUpdate.bind(i), i.eventTarget.addEventListener(t.FlowEvents.FLOW_UPDATE, i.flowUpdateCallback, !1), i.userInputUpdateCallback = i.onUserInputUpdate.bind(i), i.eventTarget.addEventListener(t.FlowEvents.USER_INPUT_UPDATE, i.userInputUpdateCallback, !1), i.onInputKeyChangeCallback = i.onInputKeyChange.bind(i), i.eventTarget.addEventListener(t.UserInputEvents.KEY_CHANGE, i.onInputKeyChangeCallback, !1), i
    }
    return __extends(n, e), n.prototype.onInputKeyChange = function(e) {
      var n = e.detail.dto;
      t.ConversationalForm.illustrateFlow(this, "receive", e.type, n)
    }, n.prototype.onUserInputUpdate = function(e) {
      if (t.ConversationalForm.illustrateFlow(this, "receive", e.type, e.detail), !this.currentUserResponse) throw new Error("No current response ..?");
      var n = e.detail;
      this.setCurrentUserResponse(n)
    }, n.prototype.onFlowUpdate = function(e) {
      t.ConversationalForm.illustrateFlow(this, "receive", e.type, e.detail);
      var n = e.detail;
      if (this.currentResponse && (this.currentResponse.disabled = !1), this.containsTagResponse(n)) this.onUserWantToEditPreviousAnswer(n);
      else {
        var i = this.createResponse(!0, n, n.question);
        this.currentUserResponse && (this.currentUserResponse.setLinkToOtherReponse(i), i.setLinkToOtherReponse(this.currentUserResponse)), this.currentUserResponse = this.createResponse(!1, n)
      }
    }, n.prototype.containsTagResponse = function(t) {
      for (var e = 0; e < this.responses.length; e++) {
        var n = this.responses[e];
        if (!n.isRobotReponse && n.tag == t) return !0
      }
      return !1
    }, n.prototype.onUserWantToEditPreviousAnswer = function(t) {
      for (var e, n = 0; n < this.responses.length; n++) {
        var i = this.responses[n];
        if (!i.isRobotReponse && i.tag == t) {
          e = i;
          break
        }
      }
      this.currentUserResponse.processResponseAndSetText(), e && (this.currentUserResponse == this.responses[this.responses.length - 1] && this.currentUserResponse.hide(), this.currentUserResponse = e, this.onListUpdate(this.currentUserResponse))
    }, n.prototype.onListUpdate = function(e) {
      var n = this;
      setTimeout(function() {
        n.eventTarget.dispatchEvent(new CustomEvent(t.ChatListEvents.CHATLIST_UPDATED, {
          detail: n
        })), e.show(), n.scrollListTo(e)
      }, 0)
    }, n.prototype.setCurrentUserResponse = function(e) {
      this.flowDTOFromUserInputUpdate = e, this.flowDTOFromUserInputUpdate.text || ("group" == e.input.currentTag.type ? this.flowDTOFromUserInputUpdate.text = t.Dictionary.get("user-reponse-missing-group") : "password" != e.input.currentTag.type && (this.flowDTOFromUserInputUpdate.text = t.Dictionary.get("user-reponse-missing"))), this.currentUserResponse.setValue(this.flowDTOFromUserInputUpdate), this.scrollListTo()
    }, n.prototype.updateThumbnail = function(e, n) {
      t.Dictionary.set(e ? "robot-image" : "user-image", e ? "robot" : "human", n);
      for (var i = e ? t.Dictionary.getRobotResponse("robot-image") : t.Dictionary.get("user-image"), o = 0; o < this.responses.length; o++) {
        var s = this.responses[o];
        e && s.isRobotReponse ? s.updateThumbnail(i) : e || s.isRobotReponse || s.updateThumbnail(i)
      }
    }, n.prototype.createResponse = function(e, n, i) {
      void 0 === i && (i = null);
      var o = new t.ChatResponse({
        tag: n,
        eventTarget: this.eventTarget,
        isRobotReponse: e,
        response: i,
        image: e ? t.Dictionary.getRobotResponse("robot-image") : t.Dictionary.get("user-image")
      });
      this.responses.push(o), this.currentResponse = o;
      var s = this.el.querySelector("scrollable");
      return s.appendChild(this.currentResponse.el), this.onListUpdate(o), o
    }, n.prototype.scrollListTo = function(t) {
      void 0 === t && (t = null);
      try {
        var e = this.el.querySelector("scrollable"),
          n = t ? t.el.offsetTop - 50 : 1e9;
        e.scrollTop = n, setTimeout(function() {
          return e.scrollTop = n
        }, 100)
      } catch (t) {}
    }, n.prototype.getTemplate = function() {
      return "<cf-chat type='pluto'>\n\t\t\t\t\t\t<scrollable></scrollable>\n\t\t\t\t\t</cf-chat>"
    }, n.prototype.dealloc = function() {
      this.eventTarget.removeEventListener(t.FlowEvents.FLOW_UPDATE, this.flowUpdateCallback, !1), this.flowUpdateCallback = null, this.eventTarget.removeEventListener(t.FlowEvents.USER_INPUT_UPDATE, this.userInputUpdateCallback, !1), this.userInputUpdateCallback = null, this.eventTarget.removeEventListener(t.UserInputEvents.KEY_CHANGE, this.onInputKeyChangeCallback, !1), this.onInputKeyChangeCallback = null, e.prototype.dealloc.call(this)
    }, n
  }(t.BasicElement);
  t.ChatList = e
}(cf || (cf = {}));
var cf;
! function(t) {
  t.FlowEvents = {
    USER_INPUT_UPDATE: "cf-flow-user-input-update",
    USER_INPUT_INVALID: "cf-flow-user-input-invalid",
    FLOW_UPDATE: "cf-flow-update"
  };
  var e = function() {
    function e(e) {
      this.stopped = !1, this.maxSteps = 0, this.step = 0, this.savedStep = -1, this.stepTimer = 0, this.cfReference = e.cfReference, this.eventTarget = e.eventTarget, this.tags = e.tags, this.maxSteps = this.tags.length, this.userInputSubmitCallback = this.userInputSubmit.bind(this), this.eventTarget.addEventListener(t.UserInputEvents.SUBMIT, this.userInputSubmitCallback, !1)
    }
    return Object.defineProperty(e.prototype, "currentTag", {
      get: function() {
        return this.tags[this.step]
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.userInputSubmit = function(n) {
      var i = this;
      t.ConversationalForm.illustrateFlow(this, "receive", n.type, n.detail);
      var o = n.detail,
        s = this.currentTag.setTagValueAndIsValid(o),
        r = !1,
        a = !1,
        l = function() {
          return i.currentTag.validationCallback && "function" == typeof i.currentTag.validationCallback && !r && s ? (r = !0, void i.currentTag.validationCallback(o, function() {
            s = !0, l()
          }, function(t) {
            s = !1, t && (o.errorText = t), l()
          })) : e.generalFlowStepCallback && "function" == typeof e.generalFlowStepCallback && !a && s ? (a = !0, void e.generalFlowStepCallback(o, function() {
            s = !0, l()
          }, function(t) {
            s = !1, t && (o.errorText = t), l()
          })) : void(s ? (t.ConversationalForm.illustrateFlow(i, "dispatch", t.FlowEvents.USER_INPUT_UPDATE, o), o = o.input.getFlowDTO(), i.eventTarget.dispatchEvent(new CustomEvent(t.FlowEvents.USER_INPUT_UPDATE, {
            detail: o
          })), setTimeout(function() {
            return i.nextStep()
          }, t.ConversationalForm.animationsEnabled ? 250 : 0)) : (t.ConversationalForm.illustrateFlow(i, "dispatch", t.FlowEvents.USER_INPUT_INVALID, o), i.eventTarget.dispatchEvent(new CustomEvent(t.FlowEvents.USER_INPUT_INVALID, {
            detail: o
          }))))
        };
      l()
    }, e.prototype.startFrom = function(t) {
      "number" == typeof t ? this.step = t : this.step = this.tags.indexOf(t), this.validateStepAndUpdate()
    }, e.prototype.start = function() {
      this.stopped = !1, this.validateStepAndUpdate()
    }, e.prototype.stop = function() {
      this.stopped = !0
    }, e.prototype.nextStep = function() {
      this.savedStep != -1 && (this.step = this.savedStep), this.savedStep = -1, this.step++, this.validateStepAndUpdate()
    }, e.prototype.previousStep = function() {
      this.step--, this.validateStepAndUpdate()
    }, e.prototype.addStep = function() {}, e.prototype.dealloc = function() {
      this.eventTarget.removeEventListener(t.UserInputEvents.SUBMIT, this.userInputSubmitCallback, !1), this.userInputSubmitCallback = null
    }, e.prototype.editTag = function(t) {
      this.savedStep = this.step - 1, this.step = this.tags.indexOf(t), this.validateStepAndUpdate()
    }, e.prototype.skipStep = function() {
      this.nextStep()
    }, e.prototype.validateStepAndUpdate = function() {
      this.maxSteps > 0 && (this.step == this.maxSteps ? this.cfReference.doSubmitForm() : (this.step %= this.maxSteps, this.currentTag.disabled ? this.skipStep() : this.showStep()))
    }, e.prototype.showStep = function() {
      this.stopped || (t.ConversationalForm.illustrateFlow(this, "dispatch", t.FlowEvents.FLOW_UPDATE, this.currentTag), this.currentTag.refresh(), this.eventTarget.dispatchEvent(new CustomEvent(t.FlowEvents.FLOW_UPDATE, {
        detail: this.currentTag
      })))
    }, e
  }();
  e.STEP_TIME = 1e3, t.FlowManager = e
}(cf || (cf = {}));

//form js

// Docs version 1.0.0
// declare module cf{
// 	
// }
// interface cf{
// 	ConversationalForm: any;
// }
// export type ConversationalForm = any;
// interface ConversationalForm = any;
// declare var ConversationalForm: any;
var ConversationalForm = (function () {
    function ConversationalForm() {
    }
    return ConversationalForm;
}());
var ConversationalFormDocs = (function () {
    function ConversationalFormDocs() {
        this.introTimer = 0;
        this.el = document.getElementById("conversational-form-docs");
        this.h1writer = new H1Writer({
            el: document.getElementById("writer")
        });
        var isMenuVisible = window.getComputedStyle(document.getElementById("small-screen-menu")).getPropertyValue("display") != "none";
        if (isMenuVisible)
            this.introFlow1();
        else
            this.introFlow2();
    }
    /**
    * @name introFlow1
    * flow for small screens
    */
    ConversationalFormDocs.prototype.introFlow1 = function () {
        var _this = this;
        this.introTimer = setTimeout(function () {
            _this.toggleMenuState();
            _this.h1writer.start();
            _this.introTimer = setTimeout(function () {
                _this.toggleConversation();
            }, 2500);
        }, 500);
    };
    /**
    * @name introFlow2
    * flow for larger screens
    */
    ConversationalFormDocs.prototype.introFlow2 = function () {
        var _this = this;
        this.h1writer.start();
        this.introTimer = setTimeout(function () {
            document.getElementById("info").classList.add('show');
            _this.introTimer = setTimeout(function () {
                document.getElementById("form").classList.add('show');
                document.getElementById("cf-toggle-btn").classList.add('show');
                _this.introTimer = setTimeout(function () {
                    _this.toggleConversation();
                }, 1500);
            }, 3000);
        }, 1500);
    };
    ConversationalFormDocs.prototype.toggleMenuState = function () {
        var open = this.el.classList.toggle('menu-toggle', !this.el.classList.contains('menu-toggle'));
        if (open) {
            this.el.classList.remove('cf-toggle');
        }
        return false;
    };
    ConversationalFormDocs.prototype.toggleConversation = function () {
        var _this = this;
        clearTimeout(this.introTimer);
        if (!this.el.classList.contains('cf-toggle')) {
            if (!this.cf) {
                this.cf = new window.cf.ConversationalForm({
                    formEl: document.getElementById("cf-form"),
                    context: document.getElementById("cf-context"),
                    robotImage: "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzY0LjAwMDAwMCwgLTUzMC4wMDAwMDApIiBmaWxsPSIjMjIyMjIyIj4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzUzLjAwMDAwMCwgNTE5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHJlY3QgeD0iMTEiIHk9IjExIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiPjwvcmVjdD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+",
                    userImage: "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMjAgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTM3MS4wMDAwMDAsIC02MTAuMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNzQuMDAwMDAwLCA1OTkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBwb2ludHM9IjEwNyAxMSAxMTcgMjcgOTcgMjciPjwvcG9seWdvbj4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+",
                    submitCallback: function () {
                    },
                    flowStepCallback: function (dto, success, error) {
                        if (dto.input.currentTag.domElement) {
                            if (dto.input.currentTag.domElement.getAttribute("name") == "repeat") {
                                location.reload();
                            }
                            else if (dto.input.currentTag.domElement.getAttribute("name") == "submit-form") {
                                var xhr = new XMLHttpRequest();
                                xhr.addEventListener("load", function () {
                                    _this.cf.addRobotChatResponse("We received your submission 🙌");
                                    success();
                                });
                                xhr.open('POST', document.getElementById("cf-form").getAttribute("action"));
                                xhr.setRequestHeader("accept", "application/javascript");
                                xhr.setRequestHeader("Content-Type", "application/json");
                                xhr.send(JSON.stringify(_this.cf.getFormData(true)));
                            }
                            else {
                                success();
                            }
                        }
                        else {
                            success();
                        }
                    }
                });
            }
            if (this.cf.focus)
                this.cf.focus();
            setTimeout(function () {
                _this.el.classList.remove('menu-toggle');
                _this.el.classList.add('cf-toggle');
            }, 10);
        }
        else {
            this.el.classList.remove('cf-toggle');
        }
        return false;
    };
    ConversationalFormDocs.start = function () {
        if (!ConversationalFormDocs.instance)
            window.conversationalFormDocs = new ConversationalFormDocs();
    };
    return ConversationalFormDocs;
}());
var H1Writer = (function () {
    function H1Writer(options) {
        this.progress = 0;
        this.progressTarget = 0;
        this.str = "";
        this.strs = ["...", "yoyoyo."];
        this.step = 0;
        this.el = options.el;
        this.el.innerHTML = "";
        this.el.classList.add("show");
    }
    H1Writer.prototype.start = function () {
        this.progress = 0;
        this.progressTarget = 1;
        this.str = this.strs[this.step];
        this.render();
    };
    H1Writer.prototype.nextStep = function () {
        if (this.progressTarget == 0) {
            this.step++;
        }
        this.str = this.strs[this.step];
        this.progressTarget = this.progressTarget == 0 ? 1 : 0;
        this.render();
    };
    H1Writer.prototype.render = function () {
        var _this = this;
        this.progress += (this.progressTarget - this.progress) * (this.step == 0 ? 0.15 : 0.09);
        var out = this.str.substr(0, Math.round(this.progress * this.str.length));
        this.el.innerHTML = out;
        if (Math.abs(this.progress - this.progressTarget) <= 0.01) {
            cancelAnimationFrame(this.rAF);
            if (this.step < 1) {
                setTimeout(function () {
                    _this.nextStep();
                }, 500);
            }
        }
        else
            this.rAF = window.requestAnimationFrame(function () { return _this.render(); });
    };
    return H1Writer;
}());
if (document.readyState == "complete") {
    // if document alread instantiated, usually this happens if Conversational Form is injected through JS
    ConversationalFormDocs.start();
}
else {
    // await for when document is ready
    window.addEventListener("load", function () {
        ConversationalFormDocs.start();
    }, false);
}