var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_main = __commonJS({
  "dist/main.js"(exports, module) {
    /*! For license information please see main.js.LICENSE.txt */
    !function(t, e) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.NodeRSA = e() : t.NodeRSA = e();
    }(exports, () => (() => {
      var __webpack_modules__ = { 3740: (t, e, r) => {
        var n = e;
        n.bignum = r(8724), n.define = r(2487).define, n.base = r(6973), n.constants = r(6613), n.decoders = r(9353), n.encoders = r(433);
      }, 2487: (t, e, r) => {
        var n = r(3740), i = r(6192);
        function o(t2, e2) {
          this.name = t2, this.body = e2, this.decoders = {}, this.encoders = {};
        }
        e.define = function(t2, e2) {
          return new o(t2, e2);
        }, o.prototype._createNamed = function(t2) {
          var e2;
          try {
            e2 = r(6935).runInThisContext("(function " + this.name + "(entity) {\n  this._initNamed(entity);\n})");
          } catch (t3) {
            e2 = function(t4) {
              this._initNamed(t4);
            };
          }
          return i(e2, t2), e2.prototype._initNamed = function(e3) {
            t2.call(this, e3);
          }, new e2(this);
        }, o.prototype._getDecoder = function(t2) {
          return t2 = t2 || "der", this.decoders.hasOwnProperty(t2) || (this.decoders[t2] = this._createNamed(n.decoders[t2])), this.decoders[t2];
        }, o.prototype.decode = function(t2, e2, r2) {
          return this._getDecoder(e2).decode(t2, r2);
        }, o.prototype._getEncoder = function(t2) {
          return t2 = t2 || "der", this.encoders.hasOwnProperty(t2) || (this.encoders[t2] = this._createNamed(n.encoders[t2])), this.encoders[t2];
        }, o.prototype.encode = function(t2, e2, r2) {
          return this._getEncoder(e2).encode(t2, r2);
        };
      }, 287: (t, e, r) => {
        var n = r(6192), i = r(6973).Reporter, o = r(4686).Buffer;
        function a(t2, e2) {
          i.call(this, e2), o.isBuffer(t2) ? (this.base = t2, this.offset = 0, this.length = t2.length) : this.error("Input not Buffer");
        }
        function s(t2, e2) {
          if (Array.isArray(t2))
            this.length = 0, this.value = t2.map(function(t3) {
              return t3 instanceof s || (t3 = new s(t3, e2)), this.length += t3.length, t3;
            }, this);
          else if ("number" == typeof t2) {
            if (!(0 <= t2 && t2 <= 255))
              return e2.error("non-byte EncoderBuffer value");
            this.value = t2, this.length = 1;
          } else if ("string" == typeof t2)
            this.value = t2, this.length = o.byteLength(t2);
          else {
            if (!o.isBuffer(t2))
              return e2.error("Unsupported type: " + typeof t2);
            this.value = t2, this.length = t2.length;
          }
        }
        n(a, i), e.t = a, a.prototype.save = function() {
          return { offset: this.offset, reporter: i.prototype.save.call(this) };
        }, a.prototype.restore = function(t2) {
          var e2 = new a(this.base);
          return e2.offset = t2.offset, e2.length = this.offset, this.offset = t2.offset, i.prototype.restore.call(this, t2.reporter), e2;
        }, a.prototype.isEmpty = function() {
          return this.offset === this.length;
        }, a.prototype.readUInt8 = function(t2) {
          return this.offset + 1 <= this.length ? this.base.readUInt8(this.offset++, true) : this.error(t2 || "DecoderBuffer overrun");
        }, a.prototype.skip = function(t2, e2) {
          if (!(this.offset + t2 <= this.length))
            return this.error(e2 || "DecoderBuffer overrun");
          var r2 = new a(this.base);
          return r2._reporterState = this._reporterState, r2.offset = this.offset, r2.length = this.offset + t2, this.offset += t2, r2;
        }, a.prototype.raw = function(t2) {
          return this.base.slice(t2 ? t2.offset : this.offset, this.length);
        }, e.d = s, s.prototype.join = function(t2, e2) {
          return t2 || (t2 = new o(this.length)), e2 || (e2 = 0), 0 === this.length || (Array.isArray(this.value) ? this.value.forEach(function(r2) {
            r2.join(t2, e2), e2 += r2.length;
          }) : ("number" == typeof this.value ? t2[e2] = this.value : "string" == typeof this.value ? t2.write(this.value, e2) : o.isBuffer(this.value) && this.value.copy(t2, e2), e2 += this.length)), t2;
        };
      }, 6973: (t, e, r) => {
        var n = e;
        n.Reporter = r(888).a, n.DecoderBuffer = r(287).t, n.EncoderBuffer = r(287).d, n.Node = r(9861);
      }, 9861: (t, e, r) => {
        var n = r(6973).Reporter, i = r(6973).EncoderBuffer, o = r(6973).DecoderBuffer, a = r(8637), s = ["seq", "seqof", "set", "setof", "objid", "bool", "gentime", "utctime", "null_", "enum", "int", "objDesc", "bitstr", "bmpstr", "charstr", "genstr", "graphstr", "ia5str", "iso646str", "numstr", "octstr", "printstr", "t61str", "unistr", "utf8str", "videostr"], f = ["key", "obj", "use", "optional", "explicit", "implicit", "def", "choice", "any", "contains"].concat(s);
        function h(t2, e2) {
          var r2 = {};
          this._baseState = r2, r2.enc = t2, r2.parent = e2 || null, r2.children = null, r2.tag = null, r2.args = null, r2.reverseArgs = null, r2.choice = null, r2.optional = false, r2.any = false, r2.obj = false, r2.use = null, r2.useDecoder = null, r2.key = null, r2.default = null, r2.explicit = null, r2.implicit = null, r2.contains = null, r2.parent || (r2.children = [], this._wrap());
        }
        t.exports = h;
        var u = ["enc", "parent", "children", "tag", "args", "reverseArgs", "choice", "optional", "any", "obj", "use", "alteredUse", "key", "default", "explicit", "implicit", "contains"];
        h.prototype.clone = function() {
          var t2 = this._baseState, e2 = {};
          u.forEach(function(r3) {
            e2[r3] = t2[r3];
          });
          var r2 = new this.constructor(e2.parent);
          return r2._baseState = e2, r2;
        }, h.prototype._wrap = function() {
          var t2 = this._baseState;
          f.forEach(function(e2) {
            this[e2] = function() {
              var r2 = new this.constructor(this);
              return t2.children.push(r2), r2[e2].apply(r2, arguments);
            };
          }, this);
        }, h.prototype._init = function(t2) {
          var e2 = this._baseState;
          a(null === e2.parent), t2.call(this), e2.children = e2.children.filter(function(t3) {
            return t3._baseState.parent === this;
          }, this), a.equal(e2.children.length, 1, "Root node can have only one child");
        }, h.prototype._useArgs = function(t2) {
          var e2 = this._baseState, r2 = t2.filter(function(t3) {
            return t3 instanceof this.constructor;
          }, this);
          t2 = t2.filter(function(t3) {
            return !(t3 instanceof this.constructor);
          }, this), 0 !== r2.length && (a(null === e2.children), e2.children = r2, r2.forEach(function(t3) {
            t3._baseState.parent = this;
          }, this)), 0 !== t2.length && (a(null === e2.args), e2.args = t2, e2.reverseArgs = t2.map(function(t3) {
            if ("object" != typeof t3 || t3.constructor !== Object)
              return t3;
            var e3 = {};
            return Object.keys(t3).forEach(function(r3) {
              r3 == (0 | r3) && (r3 |= 0);
              var n2 = t3[r3];
              e3[n2] = r3;
            }), e3;
          }));
        }, ["_peekTag", "_decodeTag", "_use", "_decodeStr", "_decodeObjid", "_decodeTime", "_decodeNull", "_decodeInt", "_decodeBool", "_decodeList", "_encodeComposite", "_encodeStr", "_encodeObjid", "_encodeTime", "_encodeNull", "_encodeInt", "_encodeBool"].forEach(function(t2) {
          h.prototype[t2] = function() {
            var e2 = this._baseState;
            throw new Error(t2 + " not implemented for encoding: " + e2.enc);
          };
        }), s.forEach(function(t2) {
          h.prototype[t2] = function() {
            var e2 = this._baseState, r2 = Array.prototype.slice.call(arguments);
            return a(null === e2.tag), e2.tag = t2, this._useArgs(r2), this;
          };
        }), h.prototype.use = function(t2) {
          a(t2);
          var e2 = this._baseState;
          return a(null === e2.use), e2.use = t2, this;
        }, h.prototype.optional = function() {
          return this._baseState.optional = true, this;
        }, h.prototype.def = function(t2) {
          var e2 = this._baseState;
          return a(null === e2.default), e2.default = t2, e2.optional = true, this;
        }, h.prototype.explicit = function(t2) {
          var e2 = this._baseState;
          return a(null === e2.explicit && null === e2.implicit), e2.explicit = t2, this;
        }, h.prototype.implicit = function(t2) {
          var e2 = this._baseState;
          return a(null === e2.explicit && null === e2.implicit), e2.implicit = t2, this;
        }, h.prototype.obj = function() {
          var t2 = this._baseState, e2 = Array.prototype.slice.call(arguments);
          return t2.obj = true, 0 !== e2.length && this._useArgs(e2), this;
        }, h.prototype.key = function(t2) {
          var e2 = this._baseState;
          return a(null === e2.key), e2.key = t2, this;
        }, h.prototype.any = function() {
          return this._baseState.any = true, this;
        }, h.prototype.choice = function(t2) {
          var e2 = this._baseState;
          return a(null === e2.choice), e2.choice = t2, this._useArgs(Object.keys(t2).map(function(e3) {
            return t2[e3];
          })), this;
        }, h.prototype.contains = function(t2) {
          var e2 = this._baseState;
          return a(null === e2.use), e2.contains = t2, this;
        }, h.prototype._decode = function(t2, e2) {
          var r2 = this._baseState;
          if (null === r2.parent)
            return t2.wrapResult(r2.children[0]._decode(t2, e2));
          var n2, i2 = r2.default, a2 = true, s2 = null;
          if (null !== r2.key && (s2 = t2.enterKey(r2.key)), r2.optional) {
            var f2 = null;
            if (null !== r2.explicit ? f2 = r2.explicit : null !== r2.implicit ? f2 = r2.implicit : null !== r2.tag && (f2 = r2.tag), null !== f2 || r2.any) {
              if (a2 = this._peekTag(t2, f2, r2.any), t2.isError(a2))
                return a2;
            } else {
              var h2 = t2.save();
              try {
                null === r2.choice ? this._decodeGeneric(r2.tag, t2, e2) : this._decodeChoice(t2, e2), a2 = true;
              } catch (t3) {
                a2 = false;
              }
              t2.restore(h2);
            }
          }
          if (r2.obj && a2 && (n2 = t2.enterObject()), a2) {
            if (null !== r2.explicit) {
              var u2 = this._decodeTag(t2, r2.explicit);
              if (t2.isError(u2))
                return u2;
              t2 = u2;
            }
            var c = t2.offset;
            if (null === r2.use && null === r2.choice) {
              r2.any && (h2 = t2.save());
              var d = this._decodeTag(t2, null !== r2.implicit ? r2.implicit : r2.tag, r2.any);
              if (t2.isError(d))
                return d;
              r2.any ? i2 = t2.raw(h2) : t2 = d;
            }
            if (e2 && e2.track && null !== r2.tag && e2.track(t2.path(), c, t2.length, "tagged"), e2 && e2.track && null !== r2.tag && e2.track(t2.path(), t2.offset, t2.length, "content"), r2.any || (i2 = null === r2.choice ? this._decodeGeneric(r2.tag, t2, e2) : this._decodeChoice(t2, e2)), t2.isError(i2))
              return i2;
            if (r2.any || null !== r2.choice || null === r2.children || r2.children.forEach(function(r3) {
              r3._decode(t2, e2);
            }), r2.contains && ("octstr" === r2.tag || "bitstr" === r2.tag)) {
              var l = new o(i2);
              i2 = this._getUse(r2.contains, t2._reporterState.obj)._decode(l, e2);
            }
          }
          return r2.obj && a2 && (i2 = t2.leaveObject(n2)), null === r2.key || null === i2 && true !== a2 ? null !== s2 && t2.exitKey(s2) : t2.leaveKey(s2, r2.key, i2), i2;
        }, h.prototype._decodeGeneric = function(t2, e2, r2) {
          var n2 = this._baseState;
          return "seq" === t2 || "set" === t2 ? null : "seqof" === t2 || "setof" === t2 ? this._decodeList(e2, t2, n2.args[0], r2) : /str$/.test(t2) ? this._decodeStr(e2, t2, r2) : "objid" === t2 && n2.args ? this._decodeObjid(e2, n2.args[0], n2.args[1], r2) : "objid" === t2 ? this._decodeObjid(e2, null, null, r2) : "gentime" === t2 || "utctime" === t2 ? this._decodeTime(e2, t2, r2) : "null_" === t2 ? this._decodeNull(e2, r2) : "bool" === t2 ? this._decodeBool(e2, r2) : "objDesc" === t2 ? this._decodeStr(e2, t2, r2) : "int" === t2 || "enum" === t2 ? this._decodeInt(e2, n2.args && n2.args[0], r2) : null !== n2.use ? this._getUse(n2.use, e2._reporterState.obj)._decode(e2, r2) : e2.error("unknown tag: " + t2);
        }, h.prototype._getUse = function(t2, e2) {
          var r2 = this._baseState;
          return r2.useDecoder = this._use(t2, e2), a(null === r2.useDecoder._baseState.parent), r2.useDecoder = r2.useDecoder._baseState.children[0], r2.implicit !== r2.useDecoder._baseState.implicit && (r2.useDecoder = r2.useDecoder.clone(), r2.useDecoder._baseState.implicit = r2.implicit), r2.useDecoder;
        }, h.prototype._decodeChoice = function(t2, e2) {
          var r2 = this._baseState, n2 = null, i2 = false;
          return Object.keys(r2.choice).some(function(o2) {
            var a2 = t2.save(), s2 = r2.choice[o2];
            try {
              var f2 = s2._decode(t2, e2);
              if (t2.isError(f2))
                return false;
              n2 = { type: o2, value: f2 }, i2 = true;
            } catch (e3) {
              return t2.restore(a2), false;
            }
            return true;
          }, this), i2 ? n2 : t2.error("Choice not matched");
        }, h.prototype._createEncoderBuffer = function(t2) {
          return new i(t2, this.reporter);
        }, h.prototype._encode = function(t2, e2, r2) {
          var n2 = this._baseState;
          if (null === n2.default || n2.default !== t2) {
            var i2 = this._encodeValue(t2, e2, r2);
            if (void 0 !== i2 && !this._skipDefault(i2, e2, r2))
              return i2;
          }
        }, h.prototype._encodeValue = function(t2, e2, r2) {
          var i2 = this._baseState;
          if (null === i2.parent)
            return i2.children[0]._encode(t2, e2 || new n());
          var o2 = null;
          if (this.reporter = e2, i2.optional && void 0 === t2) {
            if (null === i2.default)
              return;
            t2 = i2.default;
          }
          var a2 = null, s2 = false;
          if (i2.any)
            o2 = this._createEncoderBuffer(t2);
          else if (i2.choice)
            o2 = this._encodeChoice(t2, e2);
          else if (i2.contains)
            a2 = this._getUse(i2.contains, r2)._encode(t2, e2), s2 = true;
          else if (i2.children)
            a2 = i2.children.map(function(r3) {
              if ("null_" === r3._baseState.tag)
                return r3._encode(null, e2, t2);
              if (null === r3._baseState.key)
                return e2.error("Child should have a key");
              var n2 = e2.enterKey(r3._baseState.key);
              if ("object" != typeof t2)
                return e2.error("Child expected, but input is not object");
              var i3 = r3._encode(t2[r3._baseState.key], e2, t2);
              return e2.leaveKey(n2), i3;
            }, this).filter(function(t3) {
              return t3;
            }), a2 = this._createEncoderBuffer(a2);
          else if ("seqof" === i2.tag || "setof" === i2.tag) {
            if (!i2.args || 1 !== i2.args.length)
              return e2.error("Too many args for : " + i2.tag);
            if (!Array.isArray(t2))
              return e2.error("seqof/setof, but data is not Array");
            var f2 = this.clone();
            f2._baseState.implicit = null, a2 = this._createEncoderBuffer(t2.map(function(r3) {
              var n2 = this._baseState;
              return this._getUse(n2.args[0], t2)._encode(r3, e2);
            }, f2));
          } else
            null !== i2.use ? o2 = this._getUse(i2.use, r2)._encode(t2, e2) : (a2 = this._encodePrimitive(i2.tag, t2), s2 = true);
          if (!i2.any && null === i2.choice) {
            var h2 = null !== i2.implicit ? i2.implicit : i2.tag, u2 = null === i2.implicit ? "universal" : "context";
            null === h2 ? null === i2.use && e2.error("Tag could be omitted only for .use()") : null === i2.use && (o2 = this._encodeComposite(h2, s2, u2, a2));
          }
          return null !== i2.explicit && (o2 = this._encodeComposite(i2.explicit, false, "context", o2)), o2;
        }, h.prototype._encodeChoice = function(t2, e2) {
          var r2 = this._baseState, n2 = r2.choice[t2.type];
          return n2 || a(false, t2.type + " not found in " + JSON.stringify(Object.keys(r2.choice))), n2._encode(t2.value, e2);
        }, h.prototype._encodePrimitive = function(t2, e2) {
          var r2 = this._baseState;
          if (/str$/.test(t2))
            return this._encodeStr(e2, t2);
          if ("objid" === t2 && r2.args)
            return this._encodeObjid(e2, r2.reverseArgs[0], r2.args[1]);
          if ("objid" === t2)
            return this._encodeObjid(e2, null, null);
          if ("gentime" === t2 || "utctime" === t2)
            return this._encodeTime(e2, t2);
          if ("null_" === t2)
            return this._encodeNull();
          if ("int" === t2 || "enum" === t2)
            return this._encodeInt(e2, r2.args && r2.reverseArgs[0]);
          if ("bool" === t2)
            return this._encodeBool(e2);
          if ("objDesc" === t2)
            return this._encodeStr(e2, t2);
          throw new Error("Unsupported tag: " + t2);
        }, h.prototype._isNumstr = function(t2) {
          return /^[0-9 ]*$/.test(t2);
        }, h.prototype._isPrintstr = function(t2) {
          return /^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(t2);
        };
      }, 888: (t, e, r) => {
        var n = r(6192);
        function i(t2) {
          this._reporterState = { obj: null, path: [], options: t2 || {}, errors: [] };
        }
        function o(t2, e2) {
          this.path = t2, this.rethrow(e2);
        }
        e.a = i, i.prototype.isError = function(t2) {
          return t2 instanceof o;
        }, i.prototype.save = function() {
          var t2 = this._reporterState;
          return { obj: t2.obj, pathLen: t2.path.length };
        }, i.prototype.restore = function(t2) {
          var e2 = this._reporterState;
          e2.obj = t2.obj, e2.path = e2.path.slice(0, t2.pathLen);
        }, i.prototype.enterKey = function(t2) {
          return this._reporterState.path.push(t2);
        }, i.prototype.exitKey = function(t2) {
          var e2 = this._reporterState;
          e2.path = e2.path.slice(0, t2 - 1);
        }, i.prototype.leaveKey = function(t2, e2, r2) {
          var n2 = this._reporterState;
          this.exitKey(t2), null !== n2.obj && (n2.obj[e2] = r2);
        }, i.prototype.path = function() {
          return this._reporterState.path.join("/");
        }, i.prototype.enterObject = function() {
          var t2 = this._reporterState, e2 = t2.obj;
          return t2.obj = {}, e2;
        }, i.prototype.leaveObject = function(t2) {
          var e2 = this._reporterState, r2 = e2.obj;
          return e2.obj = t2, r2;
        }, i.prototype.error = function(t2) {
          var e2, r2 = this._reporterState, n2 = t2 instanceof o;
          if (e2 = n2 ? t2 : new o(r2.path.map(function(t3) {
            return "[" + JSON.stringify(t3) + "]";
          }).join(""), t2.message || t2, t2.stack), !r2.options.partial)
            throw e2;
          return n2 || r2.errors.push(e2), e2;
        }, i.prototype.wrapResult = function(t2) {
          var e2 = this._reporterState;
          return e2.options.partial ? { result: this.isError(t2) ? null : t2, errors: e2.errors } : t2;
        }, n(o, Error), o.prototype.rethrow = function(t2) {
          if (this.message = t2 + " at: " + (this.path || "(shallow)"), Error.captureStackTrace && Error.captureStackTrace(this, o), !this.stack)
            try {
              throw new Error(this.message);
            } catch (t3) {
              this.stack = t3.stack;
            }
          return this;
        };
      }, 618: (t, e, r) => {
        var n = r(6613);
        e.tagClass = { 0: "universal", 1: "application", 2: "context", 3: "private" }, e.tagClassByName = n._reverse(e.tagClass), e.tag = { 0: "end", 1: "bool", 2: "int", 3: "bitstr", 4: "octstr", 5: "null_", 6: "objid", 7: "objDesc", 8: "external", 9: "real", 10: "enum", 11: "embed", 12: "utf8str", 13: "relativeOid", 16: "seq", 17: "set", 18: "numstr", 19: "printstr", 20: "t61str", 21: "videostr", 22: "ia5str", 23: "utctime", 24: "gentime", 25: "graphstr", 26: "iso646str", 27: "genstr", 28: "unistr", 29: "charstr", 30: "bmpstr" }, e.tagByName = n._reverse(e.tag);
      }, 6613: (t, e, r) => {
        var n = e;
        n._reverse = function(t2) {
          var e2 = {};
          return Object.keys(t2).forEach(function(r2) {
            (0 | r2) == r2 && (r2 |= 0);
            var n2 = t2[r2];
            e2[n2] = r2;
          }), e2;
        }, n.der = r(618);
      }, 2102: (t, e, r) => {
        var n = r(6192), i = r(3740), o = i.base, a = i.bignum, s = i.constants.der;
        function f(t2) {
          this.enc = "der", this.name = t2.name, this.entity = t2, this.tree = new h(), this.tree._init(t2.body);
        }
        function h(t2) {
          o.Node.call(this, "der", t2);
        }
        function u(t2, e2) {
          var r2 = t2.readUInt8(e2);
          if (t2.isError(r2))
            return r2;
          var n2 = s.tagClass[r2 >> 6], i2 = !(32 & r2);
          if (31 & ~r2)
            r2 &= 31;
          else {
            var o2 = r2;
            for (r2 = 0; !(128 & ~o2); ) {
              if (o2 = t2.readUInt8(e2), t2.isError(o2))
                return o2;
              r2 <<= 7, r2 |= 127 & o2;
            }
          }
          return { cls: n2, primitive: i2, tag: r2, tagStr: s.tag[r2] };
        }
        function c(t2, e2, r2) {
          var n2 = t2.readUInt8(r2);
          if (t2.isError(n2))
            return n2;
          if (!e2 && 128 === n2)
            return null;
          if (!(128 & n2))
            return n2;
          var i2 = 127 & n2;
          if (i2 > 4)
            return t2.error("length octect is too long");
          n2 = 0;
          for (var o2 = 0; o2 < i2; o2++) {
            n2 <<= 8;
            var a2 = t2.readUInt8(r2);
            if (t2.isError(a2))
              return a2;
            n2 |= a2;
          }
          return n2;
        }
        t.exports = f, f.prototype.decode = function(t2, e2) {
          return t2 instanceof o.DecoderBuffer || (t2 = new o.DecoderBuffer(t2, e2)), this.tree._decode(t2, e2);
        }, n(h, o.Node), h.prototype._peekTag = function(t2, e2, r2) {
          if (t2.isEmpty())
            return false;
          var n2 = t2.save(), i2 = u(t2, 'Failed to peek tag: "' + e2 + '"');
          return t2.isError(i2) ? i2 : (t2.restore(n2), i2.tag === e2 || i2.tagStr === e2 || i2.tagStr + "of" === e2 || r2);
        }, h.prototype._decodeTag = function(t2, e2, r2) {
          var n2 = u(t2, 'Failed to decode tag of "' + e2 + '"');
          if (t2.isError(n2))
            return n2;
          var i2 = c(t2, n2.primitive, 'Failed to get length of "' + e2 + '"');
          if (t2.isError(i2))
            return i2;
          if (!r2 && n2.tag !== e2 && n2.tagStr !== e2 && n2.tagStr + "of" !== e2)
            return t2.error('Failed to match tag: "' + e2 + '"');
          if (n2.primitive || null !== i2)
            return t2.skip(i2, 'Failed to match body of: "' + e2 + '"');
          var o2 = t2.save(), a2 = this._skipUntilEnd(t2, 'Failed to skip indefinite length body: "' + this.tag + '"');
          return t2.isError(a2) ? a2 : (i2 = t2.offset - o2.offset, t2.restore(o2), t2.skip(i2, 'Failed to match body of: "' + e2 + '"'));
        }, h.prototype._skipUntilEnd = function(t2, e2) {
          for (; ; ) {
            var r2 = u(t2, e2);
            if (t2.isError(r2))
              return r2;
            var n2, i2 = c(t2, r2.primitive, e2);
            if (t2.isError(i2))
              return i2;
            if (n2 = r2.primitive || null !== i2 ? t2.skip(i2) : this._skipUntilEnd(t2, e2), t2.isError(n2))
              return n2;
            if ("end" === r2.tagStr)
              break;
          }
        }, h.prototype._decodeList = function(t2, e2, r2, n2) {
          for (var i2 = []; !t2.isEmpty(); ) {
            var o2 = this._peekTag(t2, "end");
            if (t2.isError(o2))
              return o2;
            var a2 = r2.decode(t2, "der", n2);
            if (t2.isError(a2) && o2)
              break;
            i2.push(a2);
          }
          return i2;
        }, h.prototype._decodeStr = function(t2, e2) {
          if ("bitstr" === e2) {
            var r2 = t2.readUInt8();
            return t2.isError(r2) ? r2 : { unused: r2, data: t2.raw() };
          }
          if ("bmpstr" === e2) {
            var n2 = t2.raw();
            if (n2.length % 2 == 1)
              return t2.error("Decoding of string type: bmpstr length mismatch");
            for (var i2 = "", o2 = 0; o2 < n2.length / 2; o2++)
              i2 += String.fromCharCode(n2.readUInt16BE(2 * o2));
            return i2;
          }
          if ("numstr" === e2) {
            var a2 = t2.raw().toString("ascii");
            return this._isNumstr(a2) ? a2 : t2.error("Decoding of string type: numstr unsupported characters");
          }
          if ("octstr" === e2)
            return t2.raw();
          if ("objDesc" === e2)
            return t2.raw();
          if ("printstr" === e2) {
            var s2 = t2.raw().toString("ascii");
            return this._isPrintstr(s2) ? s2 : t2.error("Decoding of string type: printstr unsupported characters");
          }
          return /str$/.test(e2) ? t2.raw().toString() : t2.error("Decoding of string type: " + e2 + " unsupported");
        }, h.prototype._decodeObjid = function(t2, e2, r2) {
          for (var n2, i2 = [], o2 = 0; !t2.isEmpty(); ) {
            var a2 = t2.readUInt8();
            o2 <<= 7, o2 |= 127 & a2, 128 & a2 || (i2.push(o2), o2 = 0);
          }
          128 & a2 && i2.push(o2);
          var s2 = i2[0] / 40 | 0, f2 = i2[0] % 40;
          if (n2 = r2 ? i2 : [s2, f2].concat(i2.slice(1)), e2) {
            var h2 = e2[n2.join(" ")];
            void 0 === h2 && (h2 = e2[n2.join(".")]), void 0 !== h2 && (n2 = h2);
          }
          return n2;
        }, h.prototype._decodeTime = function(t2, e2) {
          var r2 = t2.raw().toString();
          if ("gentime" === e2)
            var n2 = 0 | r2.slice(0, 4), i2 = 0 | r2.slice(4, 6), o2 = 0 | r2.slice(6, 8), a2 = 0 | r2.slice(8, 10), s2 = 0 | r2.slice(10, 12), f2 = 0 | r2.slice(12, 14);
          else {
            if ("utctime" !== e2)
              return t2.error("Decoding " + e2 + " time is not supported yet");
            n2 = 0 | r2.slice(0, 2), i2 = 0 | r2.slice(2, 4), o2 = 0 | r2.slice(4, 6), a2 = 0 | r2.slice(6, 8), s2 = 0 | r2.slice(8, 10), f2 = 0 | r2.slice(10, 12), n2 = n2 < 70 ? 2e3 + n2 : 1900 + n2;
          }
          return Date.UTC(n2, i2 - 1, o2, a2, s2, f2, 0);
        }, h.prototype._decodeNull = function(t2) {
          return null;
        }, h.prototype._decodeBool = function(t2) {
          var e2 = t2.readUInt8();
          return t2.isError(e2) ? e2 : 0 !== e2;
        }, h.prototype._decodeInt = function(t2, e2) {
          var r2 = t2.raw(), n2 = new a(r2);
          return e2 && (n2 = e2[n2.toString(10)] || n2), n2;
        }, h.prototype._use = function(t2, e2) {
          return "function" == typeof t2 && (t2 = t2(e2)), t2._getDecoder("der").tree;
        };
      }, 9353: (t, e, r) => {
        var n = e;
        n.der = r(2102), n.pem = r(2403);
      }, 2403: (t, e, r) => {
        var n = r(6192), i = r(4686).Buffer, o = r(2102);
        function a(t2) {
          o.call(this, t2), this.enc = "pem";
        }
        n(a, o), t.exports = a, a.prototype.decode = function(t2, e2) {
          for (var r2 = t2.toString().split(/[\r\n]+/g), n2 = e2.label.toUpperCase(), a2 = /^-----(BEGIN|END) ([^-]+)-----$/, s = -1, f = -1, h = 0; h < r2.length; h++) {
            var u = r2[h].match(a2);
            if (null !== u && u[2] === n2) {
              if (-1 !== s) {
                if ("END" !== u[1])
                  break;
                f = h;
                break;
              }
              if ("BEGIN" !== u[1])
                break;
              s = h;
            }
          }
          if (-1 === s || -1 === f)
            throw new Error("PEM section not found for: " + n2);
          var c = r2.slice(s + 1, f).join("");
          c.replace(/[^a-z0-9\+\/=]+/gi, "");
          var d = new i(c, "base64");
          return o.prototype.decode.call(this, d, e2);
        };
      }, 6574: (t, e, r) => {
        var n = r(6192), i = r(4686).Buffer, o = r(3740), a = o.base, s = o.constants.der;
        function f(t2) {
          this.enc = "der", this.name = t2.name, this.entity = t2, this.tree = new h(), this.tree._init(t2.body);
        }
        function h(t2) {
          a.Node.call(this, "der", t2);
        }
        function u(t2) {
          return t2 < 10 ? "0" + t2 : t2;
        }
        t.exports = f, f.prototype.encode = function(t2, e2) {
          return this.tree._encode(t2, e2).join();
        }, n(h, a.Node), h.prototype._encodeComposite = function(t2, e2, r2, n2) {
          var o2, a2 = function(t3, e3, r3, n3) {
            var i2;
            if ("seqof" === t3 ? t3 = "seq" : "setof" === t3 && (t3 = "set"), s.tagByName.hasOwnProperty(t3))
              i2 = s.tagByName[t3];
            else {
              if ("number" != typeof t3 || (0 | t3) !== t3)
                return n3.error("Unknown tag: " + t3);
              i2 = t3;
            }
            return i2 >= 31 ? n3.error("Multi-octet tag encoding unsupported") : (e3 || (i2 |= 32), i2 |= s.tagClassByName[r3 || "universal"] << 6);
          }(t2, e2, r2, this.reporter);
          if (n2.length < 128)
            return (o2 = new i(2))[0] = a2, o2[1] = n2.length, this._createEncoderBuffer([o2, n2]);
          for (var f2 = 1, h2 = n2.length; h2 >= 256; h2 >>= 8)
            f2++;
          (o2 = new i(2 + f2))[0] = a2, o2[1] = 128 | f2, h2 = 1 + f2;
          for (var u2 = n2.length; u2 > 0; h2--, u2 >>= 8)
            o2[h2] = 255 & u2;
          return this._createEncoderBuffer([o2, n2]);
        }, h.prototype._encodeStr = function(t2, e2) {
          if ("bitstr" === e2)
            return this._createEncoderBuffer([0 | t2.unused, t2.data]);
          if ("bmpstr" === e2) {
            for (var r2 = new i(2 * t2.length), n2 = 0; n2 < t2.length; n2++)
              r2.writeUInt16BE(t2.charCodeAt(n2), 2 * n2);
            return this._createEncoderBuffer(r2);
          }
          return "numstr" === e2 ? this._isNumstr(t2) ? this._createEncoderBuffer(t2) : this.reporter.error("Encoding of string type: numstr supports only digits and space") : "printstr" === e2 ? this._isPrintstr(t2) ? this._createEncoderBuffer(t2) : this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark") : /str$/.test(e2) || "objDesc" === e2 ? this._createEncoderBuffer(t2) : this.reporter.error("Encoding of string type: " + e2 + " unsupported");
        }, h.prototype._encodeObjid = function(t2, e2, r2) {
          if ("string" == typeof t2) {
            if (!e2)
              return this.reporter.error("string objid given, but no values map found");
            if (!e2.hasOwnProperty(t2))
              return this.reporter.error("objid not found in values map");
            t2 = e2[t2].split(/[\s\.]+/g);
            for (var n2 = 0; n2 < t2.length; n2++)
              t2[n2] |= 0;
          } else if (Array.isArray(t2))
            for (t2 = t2.slice(), n2 = 0; n2 < t2.length; n2++)
              t2[n2] |= 0;
          if (!Array.isArray(t2))
            return this.reporter.error("objid() should be either array or string, got: " + JSON.stringify(t2));
          if (!r2) {
            if (t2[1] >= 40)
              return this.reporter.error("Second objid identifier OOB");
            t2.splice(0, 2, 40 * t2[0] + t2[1]);
          }
          var o2 = 0;
          for (n2 = 0; n2 < t2.length; n2++) {
            var a2 = t2[n2];
            for (o2++; a2 >= 128; a2 >>= 7)
              o2++;
          }
          var s2 = new i(o2), f2 = s2.length - 1;
          for (n2 = t2.length - 1; n2 >= 0; n2--)
            for (a2 = t2[n2], s2[f2--] = 127 & a2; (a2 >>= 7) > 0; )
              s2[f2--] = 128 | 127 & a2;
          return this._createEncoderBuffer(s2);
        }, h.prototype._encodeTime = function(t2, e2) {
          var r2, n2 = new Date(t2);
          return "gentime" === e2 ? r2 = [u(n2.getFullYear()), u(n2.getUTCMonth() + 1), u(n2.getUTCDate()), u(n2.getUTCHours()), u(n2.getUTCMinutes()), u(n2.getUTCSeconds()), "Z"].join("") : "utctime" === e2 ? r2 = [u(n2.getFullYear() % 100), u(n2.getUTCMonth() + 1), u(n2.getUTCDate()), u(n2.getUTCHours()), u(n2.getUTCMinutes()), u(n2.getUTCSeconds()), "Z"].join("") : this.reporter.error("Encoding " + e2 + " time is not supported yet"), this._encodeStr(r2, "octstr");
        }, h.prototype._encodeNull = function() {
          return this._createEncoderBuffer("");
        }, h.prototype._encodeInt = function(t2, e2) {
          if ("string" == typeof t2) {
            if (!e2)
              return this.reporter.error("String int or enum given, but no values map");
            if (!e2.hasOwnProperty(t2))
              return this.reporter.error("Values map doesn't contain: " + JSON.stringify(t2));
            t2 = e2[t2];
          }
          if ("number" != typeof t2 && !i.isBuffer(t2)) {
            var r2 = t2.toArray();
            !t2.sign && 128 & r2[0] && r2.unshift(0), t2 = new i(r2);
          }
          if (i.isBuffer(t2)) {
            var n2 = t2.length;
            0 === t2.length && n2++;
            var o2 = new i(n2);
            return t2.copy(o2), 0 === t2.length && (o2[0] = 0), this._createEncoderBuffer(o2);
          }
          if (t2 < 128)
            return this._createEncoderBuffer(t2);
          if (t2 < 256)
            return this._createEncoderBuffer([0, t2]);
          n2 = 1;
          for (var a2 = t2; a2 >= 256; a2 >>= 8)
            n2++;
          for (a2 = (o2 = new Array(n2)).length - 1; a2 >= 0; a2--)
            o2[a2] = 255 & t2, t2 >>= 8;
          return 128 & o2[0] && o2.unshift(0), this._createEncoderBuffer(new i(o2));
        }, h.prototype._encodeBool = function(t2) {
          return this._createEncoderBuffer(t2 ? 255 : 0);
        }, h.prototype._use = function(t2, e2) {
          return "function" == typeof t2 && (t2 = t2(e2)), t2._getEncoder("der").tree;
        }, h.prototype._skipDefault = function(t2, e2, r2) {
          var n2, i2 = this._baseState;
          if (null === i2.default)
            return false;
          var o2 = t2.join();
          if (void 0 === i2.defaultBuffer && (i2.defaultBuffer = this._encodeValue(i2.default, e2, r2).join()), o2.length !== i2.defaultBuffer.length)
            return false;
          for (n2 = 0; n2 < o2.length; n2++)
            if (o2[n2] !== i2.defaultBuffer[n2])
              return false;
          return true;
        };
      }, 433: (t, e, r) => {
        var n = e;
        n.der = r(6574), n.pem = r(3515);
      }, 3515: (t, e, r) => {
        var n = r(6192), i = r(6574);
        function o(t2) {
          i.call(this, t2), this.enc = "pem";
        }
        n(o, i), t.exports = o, o.prototype.encode = function(t2, e2) {
          for (var r2 = i.prototype.encode.call(this, t2).toString("base64"), n2 = ["-----BEGIN " + e2.label + "-----"], o2 = 0; o2 < r2.length; o2 += 64)
            n2.push(r2.slice(o2, o2 + 64));
          return n2.push("-----END " + e2.label + "-----"), n2.join("\n");
        };
      }, 1044: (t) => {
        t.exports = { newInvalidAsn1Error: function(t2) {
          var e = new Error();
          return e.name = "InvalidAsn1Error", e.message = t2 || "", e;
        } };
      }, 4107: (t, e, r) => {
        var n = r(1044), i = r(1738), o = r(9304), a = r(7460);
        for (var s in t.exports = { Reader: o, Writer: a }, i)
          i.hasOwnProperty(s) && (t.exports[s] = i[s]);
        for (var f in n)
          n.hasOwnProperty(f) && (t.exports[f] = n[f]);
      }, 9304: (t, e, r) => {
        var n = r(4130), i = r(7475).Buffer, o = r(1738), a = r(1044).newInvalidAsn1Error;
        function s(t2) {
          if (!t2 || !i.isBuffer(t2))
            throw new TypeError("data must be a node Buffer");
          this._buf = t2, this._size = t2.length, this._len = 0, this._offset = 0;
        }
        Object.defineProperty(s.prototype, "length", { enumerable: true, get: function() {
          return this._len;
        } }), Object.defineProperty(s.prototype, "offset", { enumerable: true, get: function() {
          return this._offset;
        } }), Object.defineProperty(s.prototype, "remain", { get: function() {
          return this._size - this._offset;
        } }), Object.defineProperty(s.prototype, "buffer", { get: function() {
          return this._buf.slice(this._offset);
        } }), s.prototype.readByte = function(t2) {
          if (this._size - this._offset < 1)
            return null;
          var e2 = 255 & this._buf[this._offset];
          return t2 || (this._offset += 1), e2;
        }, s.prototype.peek = function() {
          return this.readByte(true);
        }, s.prototype.readLength = function(t2) {
          if (void 0 === t2 && (t2 = this._offset), t2 >= this._size)
            return null;
          var e2 = 255 & this._buf[t2++];
          if (null === e2)
            return null;
          if (128 & ~e2)
            this._len = e2;
          else {
            if (0 == (e2 &= 127))
              throw a("Indefinite length not supported");
            if (e2 > 4)
              throw a("encoding too long");
            if (this._size - t2 < e2)
              return null;
            this._len = 0;
            for (var r2 = 0; r2 < e2; r2++)
              this._len = (this._len << 8) + (255 & this._buf[t2++]);
          }
          return t2;
        }, s.prototype.readSequence = function(t2) {
          var e2 = this.peek();
          if (null === e2)
            return null;
          if (void 0 !== t2 && t2 !== e2)
            throw a("Expected 0x" + t2.toString(16) + ": got 0x" + e2.toString(16));
          var r2 = this.readLength(this._offset + 1);
          return null === r2 ? null : (this._offset = r2, e2);
        }, s.prototype.readInt = function() {
          return this._readTag(o.Integer);
        }, s.prototype.readBoolean = function() {
          return 0 !== this._readTag(o.Boolean);
        }, s.prototype.readEnumeration = function() {
          return this._readTag(o.Enumeration);
        }, s.prototype.readString = function(t2, e2) {
          t2 || (t2 = o.OctetString);
          var r2 = this.peek();
          if (null === r2)
            return null;
          if (r2 !== t2)
            throw a("Expected 0x" + t2.toString(16) + ": got 0x" + r2.toString(16));
          var n2 = this.readLength(this._offset + 1);
          if (null === n2)
            return null;
          if (this.length > this._size - n2)
            return null;
          if (this._offset = n2, 0 === this.length)
            return e2 ? i.alloc(0) : "";
          var s2 = this._buf.slice(this._offset, this._offset + this.length);
          return this._offset += this.length, e2 ? s2 : s2.toString("utf8");
        }, s.prototype.readOID = function(t2) {
          t2 || (t2 = o.OID);
          var e2 = this.readString(t2, true);
          if (null === e2)
            return null;
          for (var r2 = [], n2 = 0, i2 = 0; i2 < e2.length; i2++) {
            var a2 = 255 & e2[i2];
            n2 <<= 7, n2 += 127 & a2, 128 & a2 || (r2.push(n2), n2 = 0);
          }
          return n2 = r2.shift(), r2.unshift(n2 % 40), r2.unshift(n2 / 40 | 0), r2.join(".");
        }, s.prototype._readTag = function(t2) {
          n.ok(void 0 !== t2);
          var e2 = this.peek();
          if (null === e2)
            return null;
          if (e2 !== t2)
            throw a("Expected 0x" + t2.toString(16) + ": got 0x" + e2.toString(16));
          var r2 = this.readLength(this._offset + 1);
          if (null === r2)
            return null;
          if (this.length > 4)
            throw a("Integer too long: " + this.length);
          if (this.length > this._size - r2)
            return null;
          this._offset = r2;
          for (var i2 = this._buf[this._offset], o2 = 0, s2 = 0; s2 < this.length; s2++)
            o2 <<= 8, o2 |= 255 & this._buf[this._offset++];
          return 128 & ~i2 || 4 === s2 || (o2 -= 1 << 8 * s2), 0 | o2;
        }, t.exports = s;
      }, 1738: (t) => {
        t.exports = { EOC: 0, Boolean: 1, Integer: 2, BitString: 3, OctetString: 4, Null: 5, OID: 6, ObjectDescriptor: 7, External: 8, Real: 9, Enumeration: 10, PDV: 11, Utf8String: 12, RelativeOID: 13, Sequence: 16, Set: 17, NumericString: 18, PrintableString: 19, T61String: 20, VideotexString: 21, IA5String: 22, UTCTime: 23, GeneralizedTime: 24, GraphicString: 25, VisibleString: 26, GeneralString: 28, UniversalString: 29, CharacterString: 30, BMPString: 31, Constructor: 32, Context: 128 };
      }, 7460: (t, e, r) => {
        var n = r(4130), i = r(7475).Buffer, o = r(1738), a = r(1044).newInvalidAsn1Error, s = { size: 1024, growthFactor: 8 };
        function f(t2) {
          var e2, r2;
          e2 = s, r2 = t2 || {}, n.ok(e2), n.equal(typeof e2, "object"), n.ok(r2), n.equal(typeof r2, "object"), Object.getOwnPropertyNames(e2).forEach(function(t3) {
            if (!r2[t3]) {
              var n2 = Object.getOwnPropertyDescriptor(e2, t3);
              Object.defineProperty(r2, t3, n2);
            }
          }), t2 = r2, this._buf = i.alloc(t2.size || 1024), this._size = this._buf.length, this._offset = 0, this._options = t2, this._seq = [];
        }
        Object.defineProperty(f.prototype, "buffer", { get: function() {
          if (this._seq.length)
            throw a(this._seq.length + " unended sequence(s)");
          return this._buf.slice(0, this._offset);
        } }), f.prototype.writeByte = function(t2) {
          if ("number" != typeof t2)
            throw new TypeError("argument must be a Number");
          this._ensure(1), this._buf[this._offset++] = t2;
        }, f.prototype.writeInt = function(t2, e2) {
          if ("number" != typeof t2)
            throw new TypeError("argument must be a Number");
          "number" != typeof e2 && (e2 = o.Integer);
          for (var r2 = 4; (!(4286578688 & t2) || -8388608 == (4286578688 & t2)) && r2 > 1; )
            r2--, t2 <<= 8;
          if (r2 > 4)
            throw a("BER ints cannot be > 0xffffffff");
          for (this._ensure(2 + r2), this._buf[this._offset++] = e2, this._buf[this._offset++] = r2; r2-- > 0; )
            this._buf[this._offset++] = (4278190080 & t2) >>> 24, t2 <<= 8;
        }, f.prototype.writeNull = function() {
          this.writeByte(o.Null), this.writeByte(0);
        }, f.prototype.writeEnumeration = function(t2, e2) {
          if ("number" != typeof t2)
            throw new TypeError("argument must be a Number");
          return "number" != typeof e2 && (e2 = o.Enumeration), this.writeInt(t2, e2);
        }, f.prototype.writeBoolean = function(t2, e2) {
          if ("boolean" != typeof t2)
            throw new TypeError("argument must be a Boolean");
          "number" != typeof e2 && (e2 = o.Boolean), this._ensure(3), this._buf[this._offset++] = e2, this._buf[this._offset++] = 1, this._buf[this._offset++] = t2 ? 255 : 0;
        }, f.prototype.writeString = function(t2, e2) {
          if ("string" != typeof t2)
            throw new TypeError("argument must be a string (was: " + typeof t2 + ")");
          "number" != typeof e2 && (e2 = o.OctetString);
          var r2 = i.byteLength(t2);
          this.writeByte(e2), this.writeLength(r2), r2 && (this._ensure(r2), this._buf.write(t2, this._offset), this._offset += r2);
        }, f.prototype.writeBuffer = function(t2, e2) {
          if ("number" != typeof e2)
            throw new TypeError("tag must be a number");
          if (!i.isBuffer(t2))
            throw new TypeError("argument must be a buffer");
          this.writeByte(e2), this.writeLength(t2.length), this._ensure(t2.length), t2.copy(this._buf, this._offset, 0, t2.length), this._offset += t2.length;
        }, f.prototype.writeStringArray = function(t2) {
          if (Array.isArray(t2))
            throw new TypeError("argument must be an Array[String]");
          var e2 = this;
          t2.forEach(function(t3) {
            e2.writeString(t3);
          });
        }, f.prototype.writeOID = function(t2, e2) {
          if ("string" != typeof t2)
            throw new TypeError("argument must be a string");
          if ("number" != typeof e2 && (e2 = o.OID), !/^([0-9]+\.){3,}[0-9]+$/.test(t2))
            throw new Error("argument is not a valid OID string");
          var r2 = t2.split("."), n2 = [];
          n2.push(40 * parseInt(r2[0], 10) + parseInt(r2[1], 10)), r2.slice(2).forEach(function(t3) {
            !function(t4, e3) {
              e3 < 128 ? t4.push(e3) : e3 < 16384 ? (t4.push(e3 >>> 7 | 128), t4.push(127 & e3)) : e3 < 2097152 ? (t4.push(e3 >>> 14 | 128), t4.push(e3 >>> 7 & 255 | 128), t4.push(127 & e3)) : e3 < 268435456 ? (t4.push(e3 >>> 21 | 128), t4.push(e3 >>> 14 & 255 | 128), t4.push(e3 >>> 7 & 255 | 128), t4.push(127 & e3)) : (t4.push(e3 >>> 28 & 255 | 128), t4.push(e3 >>> 21 & 255 | 128), t4.push(e3 >>> 14 & 255 | 128), t4.push(e3 >>> 7 & 255 | 128), t4.push(127 & e3));
            }(n2, parseInt(t3, 10));
          });
          var i2 = this;
          this._ensure(2 + n2.length), this.writeByte(e2), this.writeLength(n2.length), n2.forEach(function(t3) {
            i2.writeByte(t3);
          });
        }, f.prototype.writeLength = function(t2) {
          if ("number" != typeof t2)
            throw new TypeError("argument must be a Number");
          if (this._ensure(4), t2 <= 127)
            this._buf[this._offset++] = t2;
          else if (t2 <= 255)
            this._buf[this._offset++] = 129, this._buf[this._offset++] = t2;
          else if (t2 <= 65535)
            this._buf[this._offset++] = 130, this._buf[this._offset++] = t2 >> 8, this._buf[this._offset++] = t2;
          else {
            if (!(t2 <= 16777215))
              throw a("Length too long (> 4 bytes)");
            this._buf[this._offset++] = 131, this._buf[this._offset++] = t2 >> 16, this._buf[this._offset++] = t2 >> 8, this._buf[this._offset++] = t2;
          }
        }, f.prototype.startSequence = function(t2) {
          "number" != typeof t2 && (t2 = o.Sequence | o.Constructor), this.writeByte(t2), this._seq.push(this._offset), this._ensure(3), this._offset += 3;
        }, f.prototype.endSequence = function() {
          var t2 = this._seq.pop(), e2 = t2 + 3, r2 = this._offset - e2;
          if (r2 <= 127)
            this._shift(e2, r2, -2), this._buf[t2] = r2;
          else if (r2 <= 255)
            this._shift(e2, r2, -1), this._buf[t2] = 129, this._buf[t2 + 1] = r2;
          else if (r2 <= 65535)
            this._buf[t2] = 130, this._buf[t2 + 1] = r2 >> 8, this._buf[t2 + 2] = r2;
          else {
            if (!(r2 <= 16777215))
              throw a("Sequence too long");
            this._shift(e2, r2, 1), this._buf[t2] = 131, this._buf[t2 + 1] = r2 >> 16, this._buf[t2 + 2] = r2 >> 8, this._buf[t2 + 3] = r2;
          }
        }, f.prototype._shift = function(t2, e2, r2) {
          n.ok(void 0 !== t2), n.ok(void 0 !== e2), n.ok(r2), this._buf.copy(this._buf, t2 + r2, t2, t2 + e2), this._offset += r2;
        }, f.prototype._ensure = function(t2) {
          if (n.ok(t2), this._size - this._offset < t2) {
            var e2 = this._size * this._options.growthFactor;
            e2 - this._offset < t2 && (e2 += t2);
            var r2 = i.alloc(e2);
            this._buf.copy(r2, 0, 0, this._offset), this._buf = r2, this._size = e2;
          }
        }, t.exports = f;
      }, 2369: (t, e, r) => {
        var n = r(4107);
        t.exports = { Ber: n, BerReader: n.Reader, BerWriter: n.Writer };
      }, 4130: (t, e, r) => {
        "use strict";
        function n(t2) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          }, n(t2);
        }
        var i, o, a = r(7951).codes, s = a.ERR_AMBIGUOUS_ARGUMENT, f = a.ERR_INVALID_ARG_TYPE, h = a.ERR_INVALID_ARG_VALUE, u = a.ERR_INVALID_RETURN_VALUE, c = a.ERR_MISSING_ARGS, d = r(1356), l = r(9983).inspect, p = r(9983).types, b = p.isPromise, y = p.isRegExp, g = Object.assign ? Object.assign : r(1965).assign, m = Object.is ? Object.is : r(4727);
        function v() {
          var t2 = r(6593);
          i = t2.isDeepEqual, o = t2.isDeepStrictEqual;
        }
        /* @__PURE__ */ new Map();
        var w = false, _ = t.exports = A, S = {};
        function E(t2) {
          if (t2.message instanceof Error)
            throw t2.message;
          throw new d(t2);
        }
        function M(t2, e2, r2, n2) {
          if (!r2) {
            var i2 = false;
            if (0 === e2)
              i2 = true, n2 = "No value argument passed to `assert.ok()`";
            else if (n2 instanceof Error)
              throw n2;
            var o2 = new d({ actual: r2, expected: true, message: n2, operator: "==", stackStartFn: t2 });
            throw o2.generatedMessage = i2, o2;
          }
        }
        function A() {
          for (var t2 = arguments.length, e2 = new Array(t2), r2 = 0; r2 < t2; r2++)
            e2[r2] = arguments[r2];
          M.apply(void 0, [A, e2.length].concat(e2));
        }
        _.fail = function t2(e2, r2, n2, i2, o2) {
          var a2, s2 = arguments.length;
          if (0 === s2 ? a2 = "Failed" : 1 === s2 ? (n2 = e2, e2 = void 0) : (false === w && (w = true, (process.emitWarning ? process.emitWarning : console.warn.bind(console))("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.", "DeprecationWarning", "DEP0094")), 2 === s2 && (i2 = "!=")), n2 instanceof Error)
            throw n2;
          var f2 = { actual: e2, expected: r2, operator: void 0 === i2 ? "fail" : i2, stackStartFn: o2 || t2 };
          void 0 !== n2 && (f2.message = n2);
          var h2 = new d(f2);
          throw a2 && (h2.message = a2, h2.generatedMessage = true), h2;
        }, _.AssertionError = d, _.ok = A, _.equal = function t2(e2, r2, n2) {
          if (arguments.length < 2)
            throw new c("actual", "expected");
          e2 != r2 && E({ actual: e2, expected: r2, message: n2, operator: "==", stackStartFn: t2 });
        }, _.notEqual = function t2(e2, r2, n2) {
          if (arguments.length < 2)
            throw new c("actual", "expected");
          e2 == r2 && E({ actual: e2, expected: r2, message: n2, operator: "!=", stackStartFn: t2 });
        }, _.deepEqual = function t2(e2, r2, n2) {
          if (arguments.length < 2)
            throw new c("actual", "expected");
          void 0 === i && v(), i(e2, r2) || E({ actual: e2, expected: r2, message: n2, operator: "deepEqual", stackStartFn: t2 });
        }, _.notDeepEqual = function t2(e2, r2, n2) {
          if (arguments.length < 2)
            throw new c("actual", "expected");
          void 0 === i && v(), i(e2, r2) && E({ actual: e2, expected: r2, message: n2, operator: "notDeepEqual", stackStartFn: t2 });
        }, _.deepStrictEqual = function t2(e2, r2, n2) {
          if (arguments.length < 2)
            throw new c("actual", "expected");
          void 0 === i && v(), o(e2, r2) || E({ actual: e2, expected: r2, message: n2, operator: "deepStrictEqual", stackStartFn: t2 });
        }, _.notDeepStrictEqual = function t2(e2, r2, n2) {
          if (arguments.length < 2)
            throw new c("actual", "expected");
          void 0 === i && v(), o(e2, r2) && E({ actual: e2, expected: r2, message: n2, operator: "notDeepStrictEqual", stackStartFn: t2 });
        }, _.strictEqual = function t2(e2, r2, n2) {
          if (arguments.length < 2)
            throw new c("actual", "expected");
          m(e2, r2) || E({ actual: e2, expected: r2, message: n2, operator: "strictEqual", stackStartFn: t2 });
        }, _.notStrictEqual = function t2(e2, r2, n2) {
          if (arguments.length < 2)
            throw new c("actual", "expected");
          m(e2, r2) && E({ actual: e2, expected: r2, message: n2, operator: "notStrictEqual", stackStartFn: t2 });
        };
        var k = function t2(e2, r2, n2) {
          var i2 = this;
          !function(t3, e3) {
            if (!(t3 instanceof e3))
              throw new TypeError("Cannot call a class as a function");
          }(this, t2), r2.forEach(function(t3) {
            t3 in e2 && (void 0 !== n2 && "string" == typeof n2[t3] && y(e2[t3]) && e2[t3].test(n2[t3]) ? i2[t3] = n2[t3] : i2[t3] = e2[t3]);
          });
        };
        function B(t2, e2, r2, a2) {
          if ("function" != typeof e2) {
            if (y(e2))
              return e2.test(t2);
            if (2 === arguments.length)
              throw new f("expected", ["Function", "RegExp"], e2);
            if ("object" !== n(t2) || null === t2) {
              var s2 = new d({ actual: t2, expected: e2, message: r2, operator: "deepStrictEqual", stackStartFn: a2 });
              throw s2.operator = a2.name, s2;
            }
            var u2 = Object.keys(e2);
            if (e2 instanceof Error)
              u2.push("name", "message");
            else if (0 === u2.length)
              throw new h("error", e2, "may not be an empty object");
            return void 0 === i && v(), u2.forEach(function(n2) {
              "string" == typeof t2[n2] && y(e2[n2]) && e2[n2].test(t2[n2]) || function(t3, e3, r3, n3, i2, a3) {
                if (!(r3 in t3) || !o(t3[r3], e3[r3])) {
                  if (!n3) {
                    var s3 = new k(t3, i2), f2 = new k(e3, i2, t3), h2 = new d({ actual: s3, expected: f2, operator: "deepStrictEqual", stackStartFn: a3 });
                    throw h2.actual = t3, h2.expected = e3, h2.operator = a3.name, h2;
                  }
                  E({ actual: t3, expected: e3, message: n3, operator: a3.name, stackStartFn: a3 });
                }
              }(t2, e2, n2, r2, u2, a2);
            }), true;
          }
          return void 0 !== e2.prototype && t2 instanceof e2 || !Error.isPrototypeOf(e2) && true === e2.call({}, t2);
        }
        function O(t2) {
          if ("function" != typeof t2)
            throw new f("fn", "Function", t2);
          try {
            t2();
          } catch (t3) {
            return t3;
          }
          return S;
        }
        function x(t2) {
          return b(t2) || null !== t2 && "object" === n(t2) && "function" == typeof t2.then && "function" == typeof t2.catch;
        }
        function I(t2) {
          return Promise.resolve().then(function() {
            var e2;
            if ("function" == typeof t2) {
              if (!x(e2 = t2()))
                throw new u("instance of Promise", "promiseFn", e2);
            } else {
              if (!x(t2))
                throw new f("promiseFn", ["Function", "Promise"], t2);
              e2 = t2;
            }
            return Promise.resolve().then(function() {
              return e2;
            }).then(function() {
              return S;
            }).catch(function(t3) {
              return t3;
            });
          });
        }
        function R(t2, e2, r2, i2) {
          if ("string" == typeof r2) {
            if (4 === arguments.length)
              throw new f("error", ["Object", "Error", "Function", "RegExp"], r2);
            if ("object" === n(e2) && null !== e2) {
              if (e2.message === r2)
                throw new s("error/message", 'The error message "'.concat(e2.message, '" is identical to the message.'));
            } else if (e2 === r2)
              throw new s("error/message", 'The error "'.concat(e2, '" is identical to the message.'));
            i2 = r2, r2 = void 0;
          } else if (null != r2 && "object" !== n(r2) && "function" != typeof r2)
            throw new f("error", ["Object", "Error", "Function", "RegExp"], r2);
          if (e2 === S) {
            var o2 = "";
            r2 && r2.name && (o2 += " (".concat(r2.name, ")")), o2 += i2 ? ": ".concat(i2) : ".";
            var a2 = "rejects" === t2.name ? "rejection" : "exception";
            E({ actual: void 0, expected: r2, operator: t2.name, message: "Missing expected ".concat(a2).concat(o2), stackStartFn: t2 });
          }
          if (r2 && !B(e2, r2, i2, t2))
            throw e2;
        }
        function T(t2, e2, r2, n2) {
          if (e2 !== S) {
            if ("string" == typeof r2 && (n2 = r2, r2 = void 0), !r2 || B(e2, r2)) {
              var i2 = n2 ? ": ".concat(n2) : ".", o2 = "doesNotReject" === t2.name ? "rejection" : "exception";
              E({ actual: e2, expected: r2, operator: t2.name, message: "Got unwanted ".concat(o2).concat(i2, "\n") + 'Actual message: "'.concat(e2 && e2.message, '"'), stackStartFn: t2 });
            }
            throw e2;
          }
        }
        function P() {
          for (var t2 = arguments.length, e2 = new Array(t2), r2 = 0; r2 < t2; r2++)
            e2[r2] = arguments[r2];
          M.apply(void 0, [P, e2.length].concat(e2));
        }
        _.throws = function t2(e2) {
          for (var r2 = arguments.length, n2 = new Array(r2 > 1 ? r2 - 1 : 0), i2 = 1; i2 < r2; i2++)
            n2[i2 - 1] = arguments[i2];
          R.apply(void 0, [t2, O(e2)].concat(n2));
        }, _.rejects = function t2(e2) {
          for (var r2 = arguments.length, n2 = new Array(r2 > 1 ? r2 - 1 : 0), i2 = 1; i2 < r2; i2++)
            n2[i2 - 1] = arguments[i2];
          return I(e2).then(function(e3) {
            return R.apply(void 0, [t2, e3].concat(n2));
          });
        }, _.doesNotThrow = function t2(e2) {
          for (var r2 = arguments.length, n2 = new Array(r2 > 1 ? r2 - 1 : 0), i2 = 1; i2 < r2; i2++)
            n2[i2 - 1] = arguments[i2];
          T.apply(void 0, [t2, O(e2)].concat(n2));
        }, _.doesNotReject = function t2(e2) {
          for (var r2 = arguments.length, n2 = new Array(r2 > 1 ? r2 - 1 : 0), i2 = 1; i2 < r2; i2++)
            n2[i2 - 1] = arguments[i2];
          return I(e2).then(function(e3) {
            return T.apply(void 0, [t2, e3].concat(n2));
          });
        }, _.ifError = function t2(e2) {
          if (null != e2) {
            var r2 = "ifError got unwanted exception: ";
            "object" === n(e2) && "string" == typeof e2.message ? 0 === e2.message.length && e2.constructor ? r2 += e2.constructor.name : r2 += e2.message : r2 += l(e2);
            var i2 = new d({ actual: e2, expected: null, operator: "ifError", message: r2, stackStartFn: t2 }), o2 = e2.stack;
            if ("string" == typeof o2) {
              var a2 = o2.split("\n");
              a2.shift();
              for (var s2 = i2.stack.split("\n"), f2 = 0; f2 < a2.length; f2++) {
                var h2 = s2.indexOf(a2[f2]);
                if (-1 !== h2) {
                  s2 = s2.slice(0, h2);
                  break;
                }
              }
              i2.stack = "".concat(s2.join("\n"), "\n").concat(a2.join("\n"));
            }
            throw i2;
          }
        }, _.strict = g(P, _, { equal: _.strictEqual, deepEqual: _.deepStrictEqual, notEqual: _.notStrictEqual, notDeepEqual: _.notDeepStrictEqual }), _.strict.strict = _.strict;
      }, 1356: (t, e, r) => {
        "use strict";
        function n(t2, e2, r2) {
          return e2 in t2 ? Object.defineProperty(t2, e2, { value: r2, enumerable: true, configurable: true, writable: true }) : t2[e2] = r2, t2;
        }
        function i(t2, e2) {
          for (var r2 = 0; r2 < e2.length; r2++) {
            var n2 = e2[r2];
            n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t2, n2.key, n2);
          }
        }
        function o(t2, e2) {
          return !e2 || "object" !== c(e2) && "function" != typeof e2 ? a(t2) : e2;
        }
        function a(t2) {
          if (void 0 === t2)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t2;
        }
        function s(t2) {
          var e2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
          return s = function(t3) {
            if (null === t3 || (r2 = t3, -1 === Function.toString.call(r2).indexOf("[native code]")))
              return t3;
            var r2;
            if ("function" != typeof t3)
              throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== e2) {
              if (e2.has(t3))
                return e2.get(t3);
              e2.set(t3, n2);
            }
            function n2() {
              return f(t3, arguments, u(this).constructor);
            }
            return n2.prototype = Object.create(t3.prototype, { constructor: { value: n2, enumerable: false, writable: true, configurable: true } }), h(n2, t3);
          }, s(t2);
        }
        function f(t2, e2, r2) {
          return f = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
              })), true;
            } catch (t3) {
              return false;
            }
          }() ? Reflect.construct : function(t3, e3, r3) {
            var n2 = [null];
            n2.push.apply(n2, e3);
            var i2 = new (Function.bind.apply(t3, n2))();
            return r3 && h(i2, r3.prototype), i2;
          }, f.apply(null, arguments);
        }
        function h(t2, e2) {
          return h = Object.setPrototypeOf || function(t3, e3) {
            return t3.__proto__ = e3, t3;
          }, h(t2, e2);
        }
        function u(t2) {
          return u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t3) {
            return t3.__proto__ || Object.getPrototypeOf(t3);
          }, u(t2);
        }
        function c(t2) {
          return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          }, c(t2);
        }
        var d = r(9983).inspect, l = r(7951).codes.ERR_INVALID_ARG_TYPE;
        function p(t2, e2, r2) {
          return (void 0 === r2 || r2 > t2.length) && (r2 = t2.length), t2.substring(r2 - e2.length, r2) === e2;
        }
        var b = "", y = "", g = "", m = "", v = { deepStrictEqual: "Expected values to be strictly deep-equal:", strictEqual: "Expected values to be strictly equal:", strictEqualObject: 'Expected "actual" to be reference-equal to "expected":', deepEqual: "Expected values to be loosely deep-equal:", equal: "Expected values to be loosely equal:", notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:', notStrictEqual: 'Expected "actual" to be strictly unequal to:', notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":', notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:', notEqual: 'Expected "actual" to be loosely unequal to:', notIdentical: "Values identical but not reference-equal:" };
        function w(t2) {
          var e2 = Object.keys(t2), r2 = Object.create(Object.getPrototypeOf(t2));
          return e2.forEach(function(e3) {
            r2[e3] = t2[e3];
          }), Object.defineProperty(r2, "message", { value: t2.message }), r2;
        }
        function _(t2) {
          return d(t2, { compact: false, customInspect: false, depth: 1e3, maxArrayLength: 1 / 0, showHidden: false, breakLength: 1 / 0, showProxy: false, sorted: true, getters: true });
        }
        var S = function(t2) {
          function e2(t3) {
            var r3;
            if (function(t4, e3) {
              if (!(t4 instanceof e3))
                throw new TypeError("Cannot call a class as a function");
            }(this, e2), "object" !== c(t3) || null === t3)
              throw new l("options", "Object", t3);
            var n2 = t3.message, i2 = t3.operator, s3 = t3.stackStartFn, f2 = t3.actual, h2 = t3.expected, d2 = Error.stackTraceLimit;
            if (Error.stackTraceLimit = 0, null != n2)
              r3 = o(this, u(e2).call(this, String(n2)));
            else if (process.stderr && process.stderr.isTTY && (process.stderr && process.stderr.getColorDepth && 1 !== process.stderr.getColorDepth() ? (b = "\x1B[34m", y = "\x1B[32m", m = "\x1B[39m", g = "\x1B[31m") : (b = "", y = "", m = "", g = "")), "object" === c(f2) && null !== f2 && "object" === c(h2) && null !== h2 && "stack" in f2 && f2 instanceof Error && "stack" in h2 && h2 instanceof Error && (f2 = w(f2), h2 = w(h2)), "deepStrictEqual" === i2 || "strictEqual" === i2)
              r3 = o(this, u(e2).call(this, function(t4, e3, r4) {
                var n3 = "", i3 = "", o2 = 0, a2 = "", s4 = false, f3 = _(t4), h3 = f3.split("\n"), u2 = _(e3).split("\n"), d3 = 0, l2 = "";
                if ("strictEqual" === r4 && "object" === c(t4) && "object" === c(e3) && null !== t4 && null !== e3 && (r4 = "strictEqualObject"), 1 === h3.length && 1 === u2.length && h3[0] !== u2[0]) {
                  var w2 = h3[0].length + u2[0].length;
                  if (w2 <= 10) {
                    if (!("object" === c(t4) && null !== t4 || "object" === c(e3) && null !== e3 || 0 === t4 && 0 === e3))
                      return "".concat(v[r4], "\n\n") + "".concat(h3[0], " !== ").concat(u2[0], "\n");
                  } else if ("strictEqualObject" !== r4 && w2 < (process.stderr && process.stderr.isTTY ? process.stderr.columns : 80)) {
                    for (; h3[0][d3] === u2[0][d3]; )
                      d3++;
                    d3 > 2 && (l2 = "\n  ".concat(function(t5, e4) {
                      if (e4 = Math.floor(e4), 0 == t5.length || 0 == e4)
                        return "";
                      var r5 = t5.length * e4;
                      for (e4 = Math.floor(Math.log(e4) / Math.log(2)); e4; )
                        t5 += t5, e4--;
                      return t5 + t5.substring(0, r5 - t5.length);
                    }(" ", d3), "^"), d3 = 0);
                  }
                }
                for (var S3 = h3[h3.length - 1], E2 = u2[u2.length - 1]; S3 === E2 && (d3++ < 2 ? a2 = "\n  ".concat(S3).concat(a2) : n3 = S3, h3.pop(), u2.pop(), 0 !== h3.length && 0 !== u2.length); )
                  S3 = h3[h3.length - 1], E2 = u2[u2.length - 1];
                var M2 = Math.max(h3.length, u2.length);
                if (0 === M2) {
                  var A2 = f3.split("\n");
                  if (A2.length > 30)
                    for (A2[26] = "".concat(b, "...").concat(m); A2.length > 27; )
                      A2.pop();
                  return "".concat(v.notIdentical, "\n\n").concat(A2.join("\n"), "\n");
                }
                d3 > 3 && (a2 = "\n".concat(b, "...").concat(m).concat(a2), s4 = true), "" !== n3 && (a2 = "\n  ".concat(n3).concat(a2), n3 = "");
                var k2 = 0, B = v[r4] + "\n".concat(y, "+ actual").concat(m, " ").concat(g, "- expected").concat(m), O = " ".concat(b, "...").concat(m, " Lines skipped");
                for (d3 = 0; d3 < M2; d3++) {
                  var x = d3 - o2;
                  if (h3.length < d3 + 1)
                    x > 1 && d3 > 2 && (x > 4 ? (i3 += "\n".concat(b, "...").concat(m), s4 = true) : x > 3 && (i3 += "\n  ".concat(u2[d3 - 2]), k2++), i3 += "\n  ".concat(u2[d3 - 1]), k2++), o2 = d3, n3 += "\n".concat(g, "-").concat(m, " ").concat(u2[d3]), k2++;
                  else if (u2.length < d3 + 1)
                    x > 1 && d3 > 2 && (x > 4 ? (i3 += "\n".concat(b, "...").concat(m), s4 = true) : x > 3 && (i3 += "\n  ".concat(h3[d3 - 2]), k2++), i3 += "\n  ".concat(h3[d3 - 1]), k2++), o2 = d3, i3 += "\n".concat(y, "+").concat(m, " ").concat(h3[d3]), k2++;
                  else {
                    var I = u2[d3], R = h3[d3], T = R !== I && (!p(R, ",") || R.slice(0, -1) !== I);
                    T && p(I, ",") && I.slice(0, -1) === R && (T = false, R += ","), T ? (x > 1 && d3 > 2 && (x > 4 ? (i3 += "\n".concat(b, "...").concat(m), s4 = true) : x > 3 && (i3 += "\n  ".concat(h3[d3 - 2]), k2++), i3 += "\n  ".concat(h3[d3 - 1]), k2++), o2 = d3, i3 += "\n".concat(y, "+").concat(m, " ").concat(R), n3 += "\n".concat(g, "-").concat(m, " ").concat(I), k2 += 2) : (i3 += n3, n3 = "", 1 !== x && 0 !== d3 || (i3 += "\n  ".concat(R), k2++));
                  }
                  if (k2 > 20 && d3 < M2 - 2)
                    return "".concat(B).concat(O, "\n").concat(i3, "\n").concat(b, "...").concat(m).concat(n3, "\n") + "".concat(b, "...").concat(m);
                }
                return "".concat(B).concat(s4 ? O : "", "\n").concat(i3).concat(n3).concat(a2).concat(l2);
              }(f2, h2, i2)));
            else if ("notDeepStrictEqual" === i2 || "notStrictEqual" === i2) {
              var S2 = v[i2], E = _(f2).split("\n");
              if ("notStrictEqual" === i2 && "object" === c(f2) && null !== f2 && (S2 = v.notStrictEqualObject), E.length > 30)
                for (E[26] = "".concat(b, "...").concat(m); E.length > 27; )
                  E.pop();
              r3 = 1 === E.length ? o(this, u(e2).call(this, "".concat(S2, " ").concat(E[0]))) : o(this, u(e2).call(this, "".concat(S2, "\n\n").concat(E.join("\n"), "\n")));
            } else {
              var M = _(f2), A = "", k = v[i2];
              "notDeepEqual" === i2 || "notEqual" === i2 ? (M = "".concat(v[i2], "\n\n").concat(M)).length > 1024 && (M = "".concat(M.slice(0, 1021), "...")) : (A = "".concat(_(h2)), M.length > 512 && (M = "".concat(M.slice(0, 509), "...")), A.length > 512 && (A = "".concat(A.slice(0, 509), "...")), "deepEqual" === i2 || "equal" === i2 ? M = "".concat(k, "\n\n").concat(M, "\n\nshould equal\n\n") : A = " ".concat(i2, " ").concat(A)), r3 = o(this, u(e2).call(this, "".concat(M).concat(A)));
            }
            return Error.stackTraceLimit = d2, r3.generatedMessage = !n2, Object.defineProperty(a(r3), "name", { value: "AssertionError [ERR_ASSERTION]", enumerable: false, writable: true, configurable: true }), r3.code = "ERR_ASSERTION", r3.actual = f2, r3.expected = h2, r3.operator = i2, Error.captureStackTrace && Error.captureStackTrace(a(r3), s3), r3.stack, r3.name = "AssertionError", o(r3);
          }
          var r2, s2;
          return function(t3, e3) {
            if ("function" != typeof e3 && null !== e3)
              throw new TypeError("Super expression must either be null or a function");
            t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, writable: true, configurable: true } }), e3 && h(t3, e3);
          }(e2, t2), r2 = e2, s2 = [{ key: "toString", value: function() {
            return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message);
          } }, { key: d.custom, value: function(t3, e3) {
            return d(this, function(t4) {
              for (var e4 = 1; e4 < arguments.length; e4++) {
                var r3 = null != arguments[e4] ? arguments[e4] : {}, i2 = Object.keys(r3);
                "function" == typeof Object.getOwnPropertySymbols && (i2 = i2.concat(Object.getOwnPropertySymbols(r3).filter(function(t5) {
                  return Object.getOwnPropertyDescriptor(r3, t5).enumerable;
                }))), i2.forEach(function(e5) {
                  n(t4, e5, r3[e5]);
                });
              }
              return t4;
            }({}, e3, { customInspect: false, depth: 0 }));
          } }], s2 && i(r2.prototype, s2), e2;
        }(s(Error));
        t.exports = S;
      }, 7951: (t, e, r) => {
        "use strict";
        function n(t2) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          }, n(t2);
        }
        function i(t2) {
          return i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t3) {
            return t3.__proto__ || Object.getPrototypeOf(t3);
          }, i(t2);
        }
        function o(t2, e2) {
          return o = Object.setPrototypeOf || function(t3, e3) {
            return t3.__proto__ = e3, t3;
          }, o(t2, e2);
        }
        var a, s, f = {};
        function h(t2, e2, r2) {
          r2 || (r2 = Error);
          var a2 = function(r3) {
            function a3(r4, o2, s2) {
              var f2;
              return function(t3, e3) {
                if (!(t3 instanceof e3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, a3), f2 = function(t3, e3) {
                return !e3 || "object" !== n(e3) && "function" != typeof e3 ? function(t4) {
                  if (void 0 === t4)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return t4;
                }(t3) : e3;
              }(this, i(a3).call(this, function(t3, r5, n2) {
                return "string" == typeof e2 ? e2 : e2(t3, r5, n2);
              }(r4, o2, s2))), f2.code = t2, f2;
            }
            return function(t3, e3) {
              if ("function" != typeof e3 && null !== e3)
                throw new TypeError("Super expression must either be null or a function");
              t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, writable: true, configurable: true } }), e3 && o(t3, e3);
            }(a3, r3), a3;
          }(r2);
          f[t2] = a2;
        }
        function u(t2, e2) {
          if (Array.isArray(t2)) {
            var r2 = t2.length;
            return t2 = t2.map(function(t3) {
              return String(t3);
            }), r2 > 2 ? "one of ".concat(e2, " ").concat(t2.slice(0, r2 - 1).join(", "), ", or ") + t2[r2 - 1] : 2 === r2 ? "one of ".concat(e2, " ").concat(t2[0], " or ").concat(t2[1]) : "of ".concat(e2, " ").concat(t2[0]);
          }
          return "of ".concat(e2, " ").concat(String(t2));
        }
        h("ERR_AMBIGUOUS_ARGUMENT", 'The "%s" argument is ambiguous. %s', TypeError), h("ERR_INVALID_ARG_TYPE", function(t2, e2, i2) {
          var o2, s2, f2, h2, c;
          if (void 0 === a && (a = r(4130)), a("string" == typeof t2, "'name' must be a string"), "string" == typeof e2 && (s2 = "not ", e2.substr(0, 4) === s2) ? (o2 = "must not be", e2 = e2.replace(/^not /, "")) : o2 = "must be", function(t3, e3, r2) {
            return (void 0 === r2 || r2 > t3.length) && (r2 = t3.length), t3.substring(r2 - 9, r2) === e3;
          }(t2, " argument"))
            f2 = "The ".concat(t2, " ").concat(o2, " ").concat(u(e2, "type"));
          else {
            var d = ("number" != typeof c && (c = 0), c + 1 > (h2 = t2).length || -1 === h2.indexOf(".", c) ? "argument" : "property");
            f2 = 'The "'.concat(t2, '" ').concat(d, " ").concat(o2, " ").concat(u(e2, "type"));
          }
          return f2 + ". Received type ".concat(n(i2));
        }, TypeError), h("ERR_INVALID_ARG_VALUE", function(t2, e2) {
          var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "is invalid";
          void 0 === s && (s = r(9983));
          var i2 = s.inspect(e2);
          return i2.length > 128 && (i2 = "".concat(i2.slice(0, 128), "...")), "The argument '".concat(t2, "' ").concat(n2, ". Received ").concat(i2);
        }, TypeError, RangeError), h("ERR_INVALID_RETURN_VALUE", function(t2, e2, r2) {
          var i2;
          return i2 = r2 && r2.constructor && r2.constructor.name ? "instance of ".concat(r2.constructor.name) : "type ".concat(n(r2)), "Expected ".concat(t2, ' to be returned from the "').concat(e2, '"') + " function but got ".concat(i2, ".");
        }, TypeError), h("ERR_MISSING_ARGS", function() {
          for (var t2 = arguments.length, e2 = new Array(t2), n2 = 0; n2 < t2; n2++)
            e2[n2] = arguments[n2];
          void 0 === a && (a = r(4130)), a(e2.length > 0, "At least one arg needs to be specified");
          var i2 = "The ", o2 = e2.length;
          switch (e2 = e2.map(function(t3) {
            return '"'.concat(t3, '"');
          }), o2) {
            case 1:
              i2 += "".concat(e2[0], " argument");
              break;
            case 2:
              i2 += "".concat(e2[0], " and ").concat(e2[1], " arguments");
              break;
            default:
              i2 += e2.slice(0, o2 - 1).join(", "), i2 += ", and ".concat(e2[o2 - 1], " arguments");
          }
          return "".concat(i2, " must be specified");
        }, TypeError), t.exports.codes = f;
      }, 6593: (t, e, r) => {
        "use strict";
        function n(t2, e2) {
          return function(t3) {
            if (Array.isArray(t3))
              return t3;
          }(t2) || function(t3, e3) {
            var r2 = [], n2 = true, i2 = false, o2 = void 0;
            try {
              for (var a2, s2 = t3[Symbol.iterator](); !(n2 = (a2 = s2.next()).done) && (r2.push(a2.value), !e3 || r2.length !== e3); n2 = true)
                ;
            } catch (t4) {
              i2 = true, o2 = t4;
            } finally {
              try {
                n2 || null == s2.return || s2.return();
              } finally {
                if (i2)
                  throw o2;
              }
            }
            return r2;
          }(t2, e2) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }();
        }
        function i(t2) {
          return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          }, i(t2);
        }
        var o = void 0 !== /a/g.flags, a = function(t2) {
          var e2 = [];
          return t2.forEach(function(t3) {
            return e2.push(t3);
          }), e2;
        }, s = function(t2) {
          var e2 = [];
          return t2.forEach(function(t3, r2) {
            return e2.push([r2, t3]);
          }), e2;
        }, f = Object.is ? Object.is : r(4727), h = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function() {
          return [];
        }, u = Number.isNaN ? Number.isNaN : r(3641);
        function c(t2) {
          return t2.call.bind(t2);
        }
        var d = c(Object.prototype.hasOwnProperty), l = c(Object.prototype.propertyIsEnumerable), p = c(Object.prototype.toString), b = r(9983).types, y = b.isAnyArrayBuffer, g = b.isArrayBufferView, m = b.isDate, v = b.isMap, w = b.isRegExp, _ = b.isSet, S = b.isNativeError, E = b.isBoxedPrimitive, M = b.isNumberObject, A = b.isStringObject, k = b.isBooleanObject, B = b.isBigIntObject, O = b.isSymbolObject, x = b.isFloat32Array, I = b.isFloat64Array;
        function R(t2) {
          if (0 === t2.length || t2.length > 10)
            return true;
          for (var e2 = 0; e2 < t2.length; e2++) {
            var r2 = t2.charCodeAt(e2);
            if (r2 < 48 || r2 > 57)
              return true;
          }
          return 10 === t2.length && t2 >= Math.pow(2, 32);
        }
        function T(t2) {
          return Object.keys(t2).filter(R).concat(h(t2).filter(Object.prototype.propertyIsEnumerable.bind(t2)));
        }
        function P(t2, e2) {
          if (t2 === e2)
            return 0;
          for (var r2 = t2.length, n2 = e2.length, i2 = 0, o2 = Math.min(r2, n2); i2 < o2; ++i2)
            if (t2[i2] !== e2[i2]) {
              r2 = t2[i2], n2 = e2[i2];
              break;
            }
          return r2 < n2 ? -1 : n2 < r2 ? 1 : 0;
        }
        var N = 0, j = 1, D = 2, L = 3;
        function C(t2, e2, r2, n2) {
          if (t2 === e2)
            return 0 !== t2 || !r2 || f(t2, e2);
          if (r2) {
            if ("object" !== i(t2))
              return "number" == typeof t2 && u(t2) && u(e2);
            if ("object" !== i(e2) || null === t2 || null === e2)
              return false;
            if (Object.getPrototypeOf(t2) !== Object.getPrototypeOf(e2))
              return false;
          } else {
            if (null === t2 || "object" !== i(t2))
              return (null === e2 || "object" !== i(e2)) && t2 == e2;
            if (null === e2 || "object" !== i(e2))
              return false;
          }
          var a2, s2, h2, c2, d2 = p(t2);
          if (d2 !== p(e2))
            return false;
          if (Array.isArray(t2)) {
            if (t2.length !== e2.length)
              return false;
            var l2 = T(t2), b2 = T(e2);
            return l2.length === b2.length && q(t2, e2, r2, n2, j, l2);
          }
          if ("[object Object]" === d2 && (!v(t2) && v(e2) || !_(t2) && _(e2)))
            return false;
          if (m(t2)) {
            if (!m(e2) || Date.prototype.getTime.call(t2) !== Date.prototype.getTime.call(e2))
              return false;
          } else if (w(t2)) {
            if (!w(e2) || (h2 = t2, c2 = e2, !(o ? h2.source === c2.source && h2.flags === c2.flags : RegExp.prototype.toString.call(h2) === RegExp.prototype.toString.call(c2))))
              return false;
          } else if (S(t2) || t2 instanceof Error) {
            if (t2.message !== e2.message || t2.name !== e2.name)
              return false;
          } else {
            if (g(t2)) {
              if (r2 || !x(t2) && !I(t2)) {
                if (!function(t3, e3) {
                  return t3.byteLength === e3.byteLength && 0 === P(new Uint8Array(t3.buffer, t3.byteOffset, t3.byteLength), new Uint8Array(e3.buffer, e3.byteOffset, e3.byteLength));
                }(t2, e2))
                  return false;
              } else if (!function(t3, e3) {
                if (t3.byteLength !== e3.byteLength)
                  return false;
                for (var r3 = 0; r3 < t3.byteLength; r3++)
                  if (t3[r3] !== e3[r3])
                    return false;
                return true;
              }(t2, e2))
                return false;
              var R2 = T(t2), C2 = T(e2);
              return R2.length === C2.length && q(t2, e2, r2, n2, N, R2);
            }
            if (_(t2))
              return !(!_(e2) || t2.size !== e2.size) && q(t2, e2, r2, n2, D);
            if (v(t2))
              return !(!v(e2) || t2.size !== e2.size) && q(t2, e2, r2, n2, L);
            if (y(t2)) {
              if (s2 = e2, (a2 = t2).byteLength !== s2.byteLength || 0 !== P(new Uint8Array(a2), new Uint8Array(s2)))
                return false;
            } else if (E(t2) && !function(t3, e3) {
              return M(t3) ? M(e3) && f(Number.prototype.valueOf.call(t3), Number.prototype.valueOf.call(e3)) : A(t3) ? A(e3) && String.prototype.valueOf.call(t3) === String.prototype.valueOf.call(e3) : k(t3) ? k(e3) && Boolean.prototype.valueOf.call(t3) === Boolean.prototype.valueOf.call(e3) : B(t3) ? B(e3) && BigInt.prototype.valueOf.call(t3) === BigInt.prototype.valueOf.call(e3) : O(e3) && Symbol.prototype.valueOf.call(t3) === Symbol.prototype.valueOf.call(e3);
            }(t2, e2))
              return false;
          }
          return q(t2, e2, r2, n2, N);
        }
        function U(t2, e2) {
          return e2.filter(function(e3) {
            return l(t2, e3);
          });
        }
        function q(t2, e2, r2, o2, f2, u2) {
          if (5 === arguments.length) {
            u2 = Object.keys(t2);
            var c2 = Object.keys(e2);
            if (u2.length !== c2.length)
              return false;
          }
          for (var p2 = 0; p2 < u2.length; p2++)
            if (!d(e2, u2[p2]))
              return false;
          if (r2 && 5 === arguments.length) {
            var b2 = h(t2);
            if (0 !== b2.length) {
              var y2 = 0;
              for (p2 = 0; p2 < b2.length; p2++) {
                var g2 = b2[p2];
                if (l(t2, g2)) {
                  if (!l(e2, g2))
                    return false;
                  u2.push(g2), y2++;
                } else if (l(e2, g2))
                  return false;
              }
              var m2 = h(e2);
              if (b2.length !== m2.length && U(e2, m2).length !== y2)
                return false;
            } else {
              var v2 = h(e2);
              if (0 !== v2.length && 0 !== U(e2, v2).length)
                return false;
            }
          }
          if (0 === u2.length && (f2 === N || f2 === j && 0 === t2.length || 0 === t2.size))
            return true;
          if (void 0 === o2)
            o2 = { val1: /* @__PURE__ */ new Map(), val2: /* @__PURE__ */ new Map(), position: 0 };
          else {
            var w2 = o2.val1.get(t2);
            if (void 0 !== w2) {
              var _2 = o2.val2.get(e2);
              if (void 0 !== _2)
                return w2 === _2;
            }
            o2.position++;
          }
          o2.val1.set(t2, o2.position), o2.val2.set(e2, o2.position);
          var S2 = function(t3, e3, r3, o3, f3, h2) {
            var u3 = 0;
            if (h2 === D) {
              if (!function(t4, e4, r4, n2) {
                for (var o4 = null, s2 = a(t4), f4 = 0; f4 < s2.length; f4++) {
                  var h3 = s2[f4];
                  if ("object" === i(h3) && null !== h3)
                    null === o4 && (o4 = /* @__PURE__ */ new Set()), o4.add(h3);
                  else if (!e4.has(h3)) {
                    if (r4)
                      return false;
                    if (!K(t4, e4, h3))
                      return false;
                    null === o4 && (o4 = /* @__PURE__ */ new Set()), o4.add(h3);
                  }
                }
                if (null !== o4) {
                  for (var u4 = a(e4), c4 = 0; c4 < u4.length; c4++) {
                    var d2 = u4[c4];
                    if ("object" === i(d2) && null !== d2) {
                      if (!F(o4, d2, r4, n2))
                        return false;
                    } else if (!r4 && !t4.has(d2) && !F(o4, d2, r4, n2))
                      return false;
                  }
                  return 0 === o4.size;
                }
                return true;
              }(t3, e3, r3, f3))
                return false;
            } else if (h2 === L) {
              if (!function(t4, e4, r4, o4) {
                for (var a2 = null, f4 = s(t4), h3 = 0; h3 < f4.length; h3++) {
                  var u4 = n(f4[h3], 2), c4 = u4[0], d2 = u4[1];
                  if ("object" === i(c4) && null !== c4)
                    null === a2 && (a2 = /* @__PURE__ */ new Set()), a2.add(c4);
                  else {
                    var l3 = e4.get(c4);
                    if (void 0 === l3 && !e4.has(c4) || !C(d2, l3, r4, o4)) {
                      if (r4)
                        return false;
                      if (!G(t4, e4, c4, d2, o4))
                        return false;
                      null === a2 && (a2 = /* @__PURE__ */ new Set()), a2.add(c4);
                    }
                  }
                }
                if (null !== a2) {
                  for (var p4 = s(e4), b3 = 0; b3 < p4.length; b3++) {
                    var y3 = n(p4[b3], 2), g3 = (c4 = y3[0], y3[1]);
                    if ("object" === i(c4) && null !== c4) {
                      if (!H(a2, t4, c4, g3, r4, o4))
                        return false;
                    } else if (!(r4 || t4.has(c4) && C(t4.get(c4), g3, false, o4) || H(a2, t4, c4, g3, false, o4)))
                      return false;
                  }
                  return 0 === a2.size;
                }
                return true;
              }(t3, e3, r3, f3))
                return false;
            } else if (h2 === j)
              for (; u3 < t3.length; u3++) {
                if (!d(t3, u3)) {
                  if (d(e3, u3))
                    return false;
                  for (var c3 = Object.keys(t3); u3 < c3.length; u3++) {
                    var l2 = c3[u3];
                    if (!d(e3, l2) || !C(t3[l2], e3[l2], r3, f3))
                      return false;
                  }
                  return c3.length === Object.keys(e3).length;
                }
                if (!d(e3, u3) || !C(t3[u3], e3[u3], r3, f3))
                  return false;
              }
            for (u3 = 0; u3 < o3.length; u3++) {
              var p3 = o3[u3];
              if (!C(t3[p3], e3[p3], r3, f3))
                return false;
            }
            return true;
          }(t2, e2, r2, u2, o2, f2);
          return o2.val1.delete(t2), o2.val2.delete(e2), S2;
        }
        function F(t2, e2, r2, n2) {
          for (var i2 = a(t2), o2 = 0; o2 < i2.length; o2++) {
            var s2 = i2[o2];
            if (C(e2, s2, r2, n2))
              return t2.delete(s2), true;
          }
          return false;
        }
        function z(t2) {
          switch (i(t2)) {
            case "undefined":
              return null;
            case "object":
              return;
            case "symbol":
              return false;
            case "string":
              t2 = +t2;
            case "number":
              if (u(t2))
                return false;
          }
          return true;
        }
        function K(t2, e2, r2) {
          var n2 = z(r2);
          return null != n2 ? n2 : e2.has(n2) && !t2.has(n2);
        }
        function G(t2, e2, r2, n2, i2) {
          var o2 = z(r2);
          if (null != o2)
            return o2;
          var a2 = e2.get(o2);
          return !(void 0 === a2 && !e2.has(o2) || !C(n2, a2, false, i2)) && !t2.has(o2) && C(n2, a2, false, i2);
        }
        function H(t2, e2, r2, n2, i2, o2) {
          for (var s2 = a(t2), f2 = 0; f2 < s2.length; f2++) {
            var h2 = s2[f2];
            if (C(r2, h2, i2, o2) && C(n2, e2.get(h2), i2, o2))
              return t2.delete(h2), true;
          }
          return false;
        }
        t.exports = { isDeepEqual: function(t2, e2) {
          return C(t2, e2, false);
        }, isDeepStrictEqual: function(t2, e2) {
          return C(t2, e2, true);
        } };
      }, 5350: (t, e) => {
        "use strict";
        e.byteLength = function(t2) {
          var e2 = s(t2), r2 = e2[0], n2 = e2[1];
          return 3 * (r2 + n2) / 4 - n2;
        }, e.toByteArray = function(t2) {
          var e2, r2, o2 = s(t2), a2 = o2[0], f2 = o2[1], h = new i(function(t3, e3, r3) {
            return 3 * (e3 + r3) / 4 - r3;
          }(0, a2, f2)), u = 0, c = f2 > 0 ? a2 - 4 : a2;
          for (r2 = 0; r2 < c; r2 += 4)
            e2 = n[t2.charCodeAt(r2)] << 18 | n[t2.charCodeAt(r2 + 1)] << 12 | n[t2.charCodeAt(r2 + 2)] << 6 | n[t2.charCodeAt(r2 + 3)], h[u++] = e2 >> 16 & 255, h[u++] = e2 >> 8 & 255, h[u++] = 255 & e2;
          return 2 === f2 && (e2 = n[t2.charCodeAt(r2)] << 2 | n[t2.charCodeAt(r2 + 1)] >> 4, h[u++] = 255 & e2), 1 === f2 && (e2 = n[t2.charCodeAt(r2)] << 10 | n[t2.charCodeAt(r2 + 1)] << 4 | n[t2.charCodeAt(r2 + 2)] >> 2, h[u++] = e2 >> 8 & 255, h[u++] = 255 & e2), h;
        }, e.fromByteArray = function(t2) {
          for (var e2, n2 = t2.length, i2 = n2 % 3, o2 = [], a2 = 16383, s2 = 0, h = n2 - i2; s2 < h; s2 += a2)
            o2.push(f(t2, s2, s2 + a2 > h ? h : s2 + a2));
          return 1 === i2 ? (e2 = t2[n2 - 1], o2.push(r[e2 >> 2] + r[e2 << 4 & 63] + "==")) : 2 === i2 && (e2 = (t2[n2 - 2] << 8) + t2[n2 - 1], o2.push(r[e2 >> 10] + r[e2 >> 4 & 63] + r[e2 << 2 & 63] + "=")), o2.join("");
        };
        for (var r = [], n = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0; a < 64; ++a)
          r[a] = o[a], n[o.charCodeAt(a)] = a;
        function s(t2) {
          var e2 = t2.length;
          if (e2 % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
          var r2 = t2.indexOf("=");
          return -1 === r2 && (r2 = e2), [r2, r2 === e2 ? 0 : 4 - r2 % 4];
        }
        function f(t2, e2, n2) {
          for (var i2, o2, a2 = [], s2 = e2; s2 < n2; s2 += 3)
            i2 = (t2[s2] << 16 & 16711680) + (t2[s2 + 1] << 8 & 65280) + (255 & t2[s2 + 2]), a2.push(r[(o2 = i2) >> 18 & 63] + r[o2 >> 12 & 63] + r[o2 >> 6 & 63] + r[63 & o2]);
          return a2.join("");
        }
        n["-".charCodeAt(0)] = 62, n["_".charCodeAt(0)] = 63;
      }, 8724: function(t, e, r) {
        !function(t2, e2) {
          "use strict";
          function n(t3, e3) {
            if (!t3)
              throw new Error(e3 || "Assertion failed");
          }
          function i(t3, e3) {
            t3.super_ = e3;
            var r2 = function() {
            };
            r2.prototype = e3.prototype, t3.prototype = new r2(), t3.prototype.constructor = t3;
          }
          function o(t3, e3, r2) {
            if (o.isBN(t3))
              return t3;
            this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t3 && ("le" !== e3 && "be" !== e3 || (r2 = e3, e3 = 10), this._init(t3 || 0, e3 || 10, r2 || "be"));
          }
          var a;
          "object" == typeof t2 ? t2.exports = o : e2.BN = o, o.BN = o, o.wordSize = 26;
          try {
            a = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : r(4654).Buffer;
          } catch (t3) {
          }
          function s(t3, e3) {
            var r2 = t3.charCodeAt(e3);
            return r2 >= 65 && r2 <= 70 ? r2 - 55 : r2 >= 97 && r2 <= 102 ? r2 - 87 : r2 - 48 & 15;
          }
          function f(t3, e3, r2) {
            var n2 = s(t3, r2);
            return r2 - 1 >= e3 && (n2 |= s(t3, r2 - 1) << 4), n2;
          }
          function h(t3, e3, r2, n2) {
            for (var i2 = 0, o2 = Math.min(t3.length, r2), a2 = e3; a2 < o2; a2++) {
              var s2 = t3.charCodeAt(a2) - 48;
              i2 *= n2, i2 += s2 >= 49 ? s2 - 49 + 10 : s2 >= 17 ? s2 - 17 + 10 : s2;
            }
            return i2;
          }
          o.isBN = function(t3) {
            return t3 instanceof o || null !== t3 && "object" == typeof t3 && t3.constructor.wordSize === o.wordSize && Array.isArray(t3.words);
          }, o.max = function(t3, e3) {
            return t3.cmp(e3) > 0 ? t3 : e3;
          }, o.min = function(t3, e3) {
            return t3.cmp(e3) < 0 ? t3 : e3;
          }, o.prototype._init = function(t3, e3, r2) {
            if ("number" == typeof t3)
              return this._initNumber(t3, e3, r2);
            if ("object" == typeof t3)
              return this._initArray(t3, e3, r2);
            "hex" === e3 && (e3 = 16), n(e3 === (0 | e3) && e3 >= 2 && e3 <= 36);
            var i2 = 0;
            "-" === (t3 = t3.toString().replace(/\s+/g, ""))[0] && (i2++, this.negative = 1), i2 < t3.length && (16 === e3 ? this._parseHex(t3, i2, r2) : (this._parseBase(t3, e3, i2), "le" === r2 && this._initArray(this.toArray(), e3, r2)));
          }, o.prototype._initNumber = function(t3, e3, r2) {
            t3 < 0 && (this.negative = 1, t3 = -t3), t3 < 67108864 ? (this.words = [67108863 & t3], this.length = 1) : t3 < 4503599627370496 ? (this.words = [67108863 & t3, t3 / 67108864 & 67108863], this.length = 2) : (n(t3 < 9007199254740992), this.words = [67108863 & t3, t3 / 67108864 & 67108863, 1], this.length = 3), "le" === r2 && this._initArray(this.toArray(), e3, r2);
          }, o.prototype._initArray = function(t3, e3, r2) {
            if (n("number" == typeof t3.length), t3.length <= 0)
              return this.words = [0], this.length = 1, this;
            this.length = Math.ceil(t3.length / 3), this.words = new Array(this.length);
            for (var i2 = 0; i2 < this.length; i2++)
              this.words[i2] = 0;
            var o2, a2, s2 = 0;
            if ("be" === r2)
              for (i2 = t3.length - 1, o2 = 0; i2 >= 0; i2 -= 3)
                a2 = t3[i2] | t3[i2 - 1] << 8 | t3[i2 - 2] << 16, this.words[o2] |= a2 << s2 & 67108863, this.words[o2 + 1] = a2 >>> 26 - s2 & 67108863, (s2 += 24) >= 26 && (s2 -= 26, o2++);
            else if ("le" === r2)
              for (i2 = 0, o2 = 0; i2 < t3.length; i2 += 3)
                a2 = t3[i2] | t3[i2 + 1] << 8 | t3[i2 + 2] << 16, this.words[o2] |= a2 << s2 & 67108863, this.words[o2 + 1] = a2 >>> 26 - s2 & 67108863, (s2 += 24) >= 26 && (s2 -= 26, o2++);
            return this.strip();
          }, o.prototype._parseHex = function(t3, e3, r2) {
            this.length = Math.ceil((t3.length - e3) / 6), this.words = new Array(this.length);
            for (var n2 = 0; n2 < this.length; n2++)
              this.words[n2] = 0;
            var i2, o2 = 0, a2 = 0;
            if ("be" === r2)
              for (n2 = t3.length - 1; n2 >= e3; n2 -= 2)
                i2 = f(t3, e3, n2) << o2, this.words[a2] |= 67108863 & i2, o2 >= 18 ? (o2 -= 18, a2 += 1, this.words[a2] |= i2 >>> 26) : o2 += 8;
            else
              for (n2 = (t3.length - e3) % 2 == 0 ? e3 + 1 : e3; n2 < t3.length; n2 += 2)
                i2 = f(t3, e3, n2) << o2, this.words[a2] |= 67108863 & i2, o2 >= 18 ? (o2 -= 18, a2 += 1, this.words[a2] |= i2 >>> 26) : o2 += 8;
            this.strip();
          }, o.prototype._parseBase = function(t3, e3, r2) {
            this.words = [0], this.length = 1;
            for (var n2 = 0, i2 = 1; i2 <= 67108863; i2 *= e3)
              n2++;
            n2--, i2 = i2 / e3 | 0;
            for (var o2 = t3.length - r2, a2 = o2 % n2, s2 = Math.min(o2, o2 - a2) + r2, f2 = 0, u2 = r2; u2 < s2; u2 += n2)
              f2 = h(t3, u2, u2 + n2, e3), this.imuln(i2), this.words[0] + f2 < 67108864 ? this.words[0] += f2 : this._iaddn(f2);
            if (0 !== a2) {
              var c2 = 1;
              for (f2 = h(t3, u2, t3.length, e3), u2 = 0; u2 < a2; u2++)
                c2 *= e3;
              this.imuln(c2), this.words[0] + f2 < 67108864 ? this.words[0] += f2 : this._iaddn(f2);
            }
            this.strip();
          }, o.prototype.copy = function(t3) {
            t3.words = new Array(this.length);
            for (var e3 = 0; e3 < this.length; e3++)
              t3.words[e3] = this.words[e3];
            t3.length = this.length, t3.negative = this.negative, t3.red = this.red;
          }, o.prototype.clone = function() {
            var t3 = new o(null);
            return this.copy(t3), t3;
          }, o.prototype._expand = function(t3) {
            for (; this.length < t3; )
              this.words[this.length++] = 0;
            return this;
          }, o.prototype.strip = function() {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }, o.prototype._normSign = function() {
            return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this;
          }, o.prototype.inspect = function() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          };
          var u = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"], c = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], d = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
          function l(t3, e3, r2) {
            r2.negative = e3.negative ^ t3.negative;
            var n2 = t3.length + e3.length | 0;
            r2.length = n2, n2 = n2 - 1 | 0;
            var i2 = 0 | t3.words[0], o2 = 0 | e3.words[0], a2 = i2 * o2, s2 = 67108863 & a2, f2 = a2 / 67108864 | 0;
            r2.words[0] = s2;
            for (var h2 = 1; h2 < n2; h2++) {
              for (var u2 = f2 >>> 26, c2 = 67108863 & f2, d2 = Math.min(h2, e3.length - 1), l2 = Math.max(0, h2 - t3.length + 1); l2 <= d2; l2++) {
                var p2 = h2 - l2 | 0;
                u2 += (a2 = (i2 = 0 | t3.words[p2]) * (o2 = 0 | e3.words[l2]) + c2) / 67108864 | 0, c2 = 67108863 & a2;
              }
              r2.words[h2] = 0 | c2, f2 = 0 | u2;
            }
            return 0 !== f2 ? r2.words[h2] = 0 | f2 : r2.length--, r2.strip();
          }
          o.prototype.toString = function(t3, e3) {
            var r2;
            if (e3 = 0 | e3 || 1, 16 === (t3 = t3 || 10) || "hex" === t3) {
              r2 = "";
              for (var i2 = 0, o2 = 0, a2 = 0; a2 < this.length; a2++) {
                var s2 = this.words[a2], f2 = (16777215 & (s2 << i2 | o2)).toString(16);
                r2 = 0 != (o2 = s2 >>> 24 - i2 & 16777215) || a2 !== this.length - 1 ? u[6 - f2.length] + f2 + r2 : f2 + r2, (i2 += 2) >= 26 && (i2 -= 26, a2--);
              }
              for (0 !== o2 && (r2 = o2.toString(16) + r2); r2.length % e3 != 0; )
                r2 = "0" + r2;
              return 0 !== this.negative && (r2 = "-" + r2), r2;
            }
            if (t3 === (0 | t3) && t3 >= 2 && t3 <= 36) {
              var h2 = c[t3], l2 = d[t3];
              r2 = "";
              var p2 = this.clone();
              for (p2.negative = 0; !p2.isZero(); ) {
                var b2 = p2.modn(l2).toString(t3);
                r2 = (p2 = p2.idivn(l2)).isZero() ? b2 + r2 : u[h2 - b2.length] + b2 + r2;
              }
              for (this.isZero() && (r2 = "0" + r2); r2.length % e3 != 0; )
                r2 = "0" + r2;
              return 0 !== this.negative && (r2 = "-" + r2), r2;
            }
            n(false, "Base should be between 2 and 36");
          }, o.prototype.toNumber = function() {
            var t3 = this.words[0];
            return 2 === this.length ? t3 += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t3 += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(false, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t3 : t3;
          }, o.prototype.toJSON = function() {
            return this.toString(16);
          }, o.prototype.toBuffer = function(t3, e3) {
            return n(void 0 !== a), this.toArrayLike(a, t3, e3);
          }, o.prototype.toArray = function(t3, e3) {
            return this.toArrayLike(Array, t3, e3);
          }, o.prototype.toArrayLike = function(t3, e3, r2) {
            var i2 = this.byteLength(), o2 = r2 || Math.max(1, i2);
            n(i2 <= o2, "byte array longer than desired length"), n(o2 > 0, "Requested array length <= 0"), this.strip();
            var a2, s2, f2 = "le" === e3, h2 = new t3(o2), u2 = this.clone();
            if (f2) {
              for (s2 = 0; !u2.isZero(); s2++)
                a2 = u2.andln(255), u2.iushrn(8), h2[s2] = a2;
              for (; s2 < o2; s2++)
                h2[s2] = 0;
            } else {
              for (s2 = 0; s2 < o2 - i2; s2++)
                h2[s2] = 0;
              for (s2 = 0; !u2.isZero(); s2++)
                a2 = u2.andln(255), u2.iushrn(8), h2[o2 - s2 - 1] = a2;
            }
            return h2;
          }, Math.clz32 ? o.prototype._countBits = function(t3) {
            return 32 - Math.clz32(t3);
          } : o.prototype._countBits = function(t3) {
            var e3 = t3, r2 = 0;
            return e3 >= 4096 && (r2 += 13, e3 >>>= 13), e3 >= 64 && (r2 += 7, e3 >>>= 7), e3 >= 8 && (r2 += 4, e3 >>>= 4), e3 >= 2 && (r2 += 2, e3 >>>= 2), r2 + e3;
          }, o.prototype._zeroBits = function(t3) {
            if (0 === t3)
              return 26;
            var e3 = t3, r2 = 0;
            return 8191 & e3 || (r2 += 13, e3 >>>= 13), 127 & e3 || (r2 += 7, e3 >>>= 7), 15 & e3 || (r2 += 4, e3 >>>= 4), 3 & e3 || (r2 += 2, e3 >>>= 2), 1 & e3 || r2++, r2;
          }, o.prototype.bitLength = function() {
            var t3 = this.words[this.length - 1], e3 = this._countBits(t3);
            return 26 * (this.length - 1) + e3;
          }, o.prototype.zeroBits = function() {
            if (this.isZero())
              return 0;
            for (var t3 = 0, e3 = 0; e3 < this.length; e3++) {
              var r2 = this._zeroBits(this.words[e3]);
              if (t3 += r2, 26 !== r2)
                break;
            }
            return t3;
          }, o.prototype.byteLength = function() {
            return Math.ceil(this.bitLength() / 8);
          }, o.prototype.toTwos = function(t3) {
            return 0 !== this.negative ? this.abs().inotn(t3).iaddn(1) : this.clone();
          }, o.prototype.fromTwos = function(t3) {
            return this.testn(t3 - 1) ? this.notn(t3).iaddn(1).ineg() : this.clone();
          }, o.prototype.isNeg = function() {
            return 0 !== this.negative;
          }, o.prototype.neg = function() {
            return this.clone().ineg();
          }, o.prototype.ineg = function() {
            return this.isZero() || (this.negative ^= 1), this;
          }, o.prototype.iuor = function(t3) {
            for (; this.length < t3.length; )
              this.words[this.length++] = 0;
            for (var e3 = 0; e3 < t3.length; e3++)
              this.words[e3] = this.words[e3] | t3.words[e3];
            return this.strip();
          }, o.prototype.ior = function(t3) {
            return n(!(this.negative | t3.negative)), this.iuor(t3);
          }, o.prototype.or = function(t3) {
            return this.length > t3.length ? this.clone().ior(t3) : t3.clone().ior(this);
          }, o.prototype.uor = function(t3) {
            return this.length > t3.length ? this.clone().iuor(t3) : t3.clone().iuor(this);
          }, o.prototype.iuand = function(t3) {
            var e3;
            e3 = this.length > t3.length ? t3 : this;
            for (var r2 = 0; r2 < e3.length; r2++)
              this.words[r2] = this.words[r2] & t3.words[r2];
            return this.length = e3.length, this.strip();
          }, o.prototype.iand = function(t3) {
            return n(!(this.negative | t3.negative)), this.iuand(t3);
          }, o.prototype.and = function(t3) {
            return this.length > t3.length ? this.clone().iand(t3) : t3.clone().iand(this);
          }, o.prototype.uand = function(t3) {
            return this.length > t3.length ? this.clone().iuand(t3) : t3.clone().iuand(this);
          }, o.prototype.iuxor = function(t3) {
            var e3, r2;
            this.length > t3.length ? (e3 = this, r2 = t3) : (e3 = t3, r2 = this);
            for (var n2 = 0; n2 < r2.length; n2++)
              this.words[n2] = e3.words[n2] ^ r2.words[n2];
            if (this !== e3)
              for (; n2 < e3.length; n2++)
                this.words[n2] = e3.words[n2];
            return this.length = e3.length, this.strip();
          }, o.prototype.ixor = function(t3) {
            return n(!(this.negative | t3.negative)), this.iuxor(t3);
          }, o.prototype.xor = function(t3) {
            return this.length > t3.length ? this.clone().ixor(t3) : t3.clone().ixor(this);
          }, o.prototype.uxor = function(t3) {
            return this.length > t3.length ? this.clone().iuxor(t3) : t3.clone().iuxor(this);
          }, o.prototype.inotn = function(t3) {
            n("number" == typeof t3 && t3 >= 0);
            var e3 = 0 | Math.ceil(t3 / 26), r2 = t3 % 26;
            this._expand(e3), r2 > 0 && e3--;
            for (var i2 = 0; i2 < e3; i2++)
              this.words[i2] = 67108863 & ~this.words[i2];
            return r2 > 0 && (this.words[i2] = ~this.words[i2] & 67108863 >> 26 - r2), this.strip();
          }, o.prototype.notn = function(t3) {
            return this.clone().inotn(t3);
          }, o.prototype.setn = function(t3, e3) {
            n("number" == typeof t3 && t3 >= 0);
            var r2 = t3 / 26 | 0, i2 = t3 % 26;
            return this._expand(r2 + 1), this.words[r2] = e3 ? this.words[r2] | 1 << i2 : this.words[r2] & ~(1 << i2), this.strip();
          }, o.prototype.iadd = function(t3) {
            var e3, r2, n2;
            if (0 !== this.negative && 0 === t3.negative)
              return this.negative = 0, e3 = this.isub(t3), this.negative ^= 1, this._normSign();
            if (0 === this.negative && 0 !== t3.negative)
              return t3.negative = 0, e3 = this.isub(t3), t3.negative = 1, e3._normSign();
            this.length > t3.length ? (r2 = this, n2 = t3) : (r2 = t3, n2 = this);
            for (var i2 = 0, o2 = 0; o2 < n2.length; o2++)
              e3 = (0 | r2.words[o2]) + (0 | n2.words[o2]) + i2, this.words[o2] = 67108863 & e3, i2 = e3 >>> 26;
            for (; 0 !== i2 && o2 < r2.length; o2++)
              e3 = (0 | r2.words[o2]) + i2, this.words[o2] = 67108863 & e3, i2 = e3 >>> 26;
            if (this.length = r2.length, 0 !== i2)
              this.words[this.length] = i2, this.length++;
            else if (r2 !== this)
              for (; o2 < r2.length; o2++)
                this.words[o2] = r2.words[o2];
            return this;
          }, o.prototype.add = function(t3) {
            var e3;
            return 0 !== t3.negative && 0 === this.negative ? (t3.negative = 0, e3 = this.sub(t3), t3.negative ^= 1, e3) : 0 === t3.negative && 0 !== this.negative ? (this.negative = 0, e3 = t3.sub(this), this.negative = 1, e3) : this.length > t3.length ? this.clone().iadd(t3) : t3.clone().iadd(this);
          }, o.prototype.isub = function(t3) {
            if (0 !== t3.negative) {
              t3.negative = 0;
              var e3 = this.iadd(t3);
              return t3.negative = 1, e3._normSign();
            }
            if (0 !== this.negative)
              return this.negative = 0, this.iadd(t3), this.negative = 1, this._normSign();
            var r2, n2, i2 = this.cmp(t3);
            if (0 === i2)
              return this.negative = 0, this.length = 1, this.words[0] = 0, this;
            i2 > 0 ? (r2 = this, n2 = t3) : (r2 = t3, n2 = this);
            for (var o2 = 0, a2 = 0; a2 < n2.length; a2++)
              o2 = (e3 = (0 | r2.words[a2]) - (0 | n2.words[a2]) + o2) >> 26, this.words[a2] = 67108863 & e3;
            for (; 0 !== o2 && a2 < r2.length; a2++)
              o2 = (e3 = (0 | r2.words[a2]) + o2) >> 26, this.words[a2] = 67108863 & e3;
            if (0 === o2 && a2 < r2.length && r2 !== this)
              for (; a2 < r2.length; a2++)
                this.words[a2] = r2.words[a2];
            return this.length = Math.max(this.length, a2), r2 !== this && (this.negative = 1), this.strip();
          }, o.prototype.sub = function(t3) {
            return this.clone().isub(t3);
          };
          var p = function(t3, e3, r2) {
            var n2, i2, o2, a2 = t3.words, s2 = e3.words, f2 = r2.words, h2 = 0, u2 = 0 | a2[0], c2 = 8191 & u2, d2 = u2 >>> 13, l2 = 0 | a2[1], p2 = 8191 & l2, b2 = l2 >>> 13, y2 = 0 | a2[2], g2 = 8191 & y2, m2 = y2 >>> 13, v2 = 0 | a2[3], w2 = 8191 & v2, _2 = v2 >>> 13, S2 = 0 | a2[4], E2 = 8191 & S2, M2 = S2 >>> 13, A = 0 | a2[5], k = 8191 & A, B = A >>> 13, O = 0 | a2[6], x = 8191 & O, I = O >>> 13, R = 0 | a2[7], T = 8191 & R, P = R >>> 13, N = 0 | a2[8], j = 8191 & N, D = N >>> 13, L = 0 | a2[9], C = 8191 & L, U = L >>> 13, q = 0 | s2[0], F = 8191 & q, z = q >>> 13, K = 0 | s2[1], G = 8191 & K, H = K >>> 13, $ = 0 | s2[2], W = 8191 & $, V = $ >>> 13, Y = 0 | s2[3], Z = 8191 & Y, X = Y >>> 13, J = 0 | s2[4], Q = 8191 & J, tt = J >>> 13, et = 0 | s2[5], rt = 8191 & et, nt = et >>> 13, it = 0 | s2[6], ot = 8191 & it, at = it >>> 13, st = 0 | s2[7], ft = 8191 & st, ht = st >>> 13, ut = 0 | s2[8], ct = 8191 & ut, dt = ut >>> 13, lt = 0 | s2[9], pt = 8191 & lt, bt = lt >>> 13;
            r2.negative = t3.negative ^ e3.negative, r2.length = 19;
            var yt = (h2 + (n2 = Math.imul(c2, F)) | 0) + ((8191 & (i2 = (i2 = Math.imul(c2, z)) + Math.imul(d2, F) | 0)) << 13) | 0;
            h2 = ((o2 = Math.imul(d2, z)) + (i2 >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, n2 = Math.imul(p2, F), i2 = (i2 = Math.imul(p2, z)) + Math.imul(b2, F) | 0, o2 = Math.imul(b2, z);
            var gt = (h2 + (n2 = n2 + Math.imul(c2, G) | 0) | 0) + ((8191 & (i2 = (i2 = i2 + Math.imul(c2, H) | 0) + Math.imul(d2, G) | 0)) << 13) | 0;
            h2 = ((o2 = o2 + Math.imul(d2, H) | 0) + (i2 >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, n2 = Math.imul(g2, F), i2 = (i2 = Math.imul(g2, z)) + Math.imul(m2, F) | 0, o2 = Math.imul(m2, z), n2 = n2 + Math.imul(p2, G) | 0, i2 = (i2 = i2 + Math.imul(p2, H) | 0) + Math.imul(b2, G) | 0, o2 = o2 + Math.imul(b2, H) | 0;
            var mt = (h2 + (n2 = n2 + Math.imul(c2, W) | 0) | 0) + ((8191 & (i2 = (i2 = i2 + Math.imul(c2, V) | 0) + Math.imul(d2, W) | 0)) << 13) | 0;
            h2 = ((o2 = o2 + Math.imul(d2, V) | 0) + (i2 >>> 13) | 0) + (mt >>> 26) | 0, mt &= 67108863, n2 = Math.imul(w2, F), i2 = (i2 = Math.imul(w2, z)) + Math.imul(_2, F) | 0, o2 = Math.imul(_2, z), n2 = n2 + Math.imul(g2, G) | 0, i2 = (i2 = i2 + Math.imul(g2, H) | 0) + Math.imul(m2, G) | 0, o2 = o2 + Math.imul(m2, H) | 0, n2 = n2 + Math.imul(p2, W) | 0, i2 = (i2 = i2 + Math.imul(p2, V) | 0) + Math.imul(b2, W) | 0, o2 = o2 + Math.imul(b2, V) | 0;
            var vt = (h2 + (n2 = n2 + Math.imul(c2, Z) | 0) | 0) + ((8191 & (i2 = (i2 = i2 + Math.imul(c2, X) | 0) + Math.imul(d2, Z) | 0)) << 13) | 0;
            h2 = ((o2 = o2 + Math.imul(d2, X) | 0) + (i2 >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, n2 = Math.imul(E2, F), i2 = (i2 = Math.imul(E2, z)) + Math.imul(M2, F) | 0, o2 = Math.imul(M2, z), n2 = n2 + Math.imul(w2, G) | 0, i2 = (i2 = i2 + Math.imul(w2, H) | 0) + Math.imul(_2, G) | 0, o2 = o2 + Math.imul(_2, H) | 0, n2 = n2 + Math.imul(g2, W) | 0, i2 = (i2 = i2 + Math.imul(g2, V) | 0) + Math.imul(m2, W) | 0, o2 = o2 + Math.imul(m2, V) | 0, n2 = n2 + Math.imul(p2, Z) | 0, i2 = (i2 = i2 + Math.imul(p2, X) | 0) + Math.imul(b2, Z) | 0, o2 = o2 + Math.imul(b2, X) | 0;
            var wt = (h2 + (n2 = n2 + Math.imul(c2, Q) | 0) | 0) + ((8191 & (i2 = (i2 = i2 + Math.imul(c2, tt) | 0) + Math.imul(d2, Q) | 0)) << 13) | 0;
            h2 = ((o2 = o2 + Math.imul(d2, tt) | 0) + (i2 >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, n2 = Math.imul(k, F), i2 = (i2 = Math.imul(k, z)) + Math.imul(B, F) | 0, o2 = Math.imul(B, z), n2 = n2 + Math.imul(E2, G) | 0, i2 = (i2 = i2 + Math.imul(E2, H) | 0) + Math.imul(M2, G) | 0, o2 = o2 + Math.imul(M2, H) | 0, n2 = n2 + Math.imul(w2, W) | 0, i2 = (i2 = i2 + Math.imul(w2, V) | 0) + Math.imul(_2, W) | 0, o2 = o2 + Math.imul(_2, V) | 0, n2 = n2 + Math.imul(g2, Z) | 0, i2 = (i2 = i2 + Math.imul(g2, X) | 0) + Math.imul(m2, Z) | 0, o2 = o2 + Math.imul(m2, X) | 0, n2 = n2 + Math.imul(p2, Q) | 0, i2 = (i2 = i2 + Math.imul(p2, tt) | 0) + Math.imul(b2, Q) | 0, o2 = o2 + Math.imul(b2, tt) | 0;
            var _t = (h2 + (n2 = n2 + Math.imul(c2, rt) | 0) | 0) + ((8191 & (i2 = (i2 = i2 + Math.imul(c2, nt) | 0) + Math.imul(d2, rt) | 0)) << 13) | 0;
            h2 = ((o2 = o2 + Math.imul(d2, nt) | 0) + (i2 >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, n2 = Math.imul(x, F), i2 = (i2 = Math.imul(x, z)) + Math.imul(I, F) | 0, o2 = Math.imul(I, z), n2 = n2 + Math.imul(k, G) | 0, i2 = (i2 = i2 + Math.imul(k, H) | 0) + Math.imul(B, G) | 0, o2 = o2 + Math.imul(B, H) | 0, n2 = n2 + Math.imul(E2, W) | 0, i2 = (i2 = i2 + Math.imul(E2, V) | 0) + Math.imul(M2, W) | 0, o2 = o2 + Math.imul(M2, V) | 0, n2 = n2 + Math.imul(w2, Z) | 0, i2 = (i2 = i2 + Math.imul(w2, X) | 0) + Math.imul(_2, Z) | 0, o2 = o2 + Math.imul(_2, X) | 0, n2 = n2 + Math.imul(g2, Q) | 0, i2 = (i2 = i2 + Math.imul(g2, tt) | 0) + Math.imul(m2, Q) | 0, o2 = o2 + Math.imul(m2, tt) | 0, n2 = n2 + Math.imul(p2, rt) | 0, i2 = (i2 = i2 + Math.imul(p2, nt) | 0) + Math.imul(b2, rt) | 0, o2 = o2 + Math.imul(b2, nt) | 0;
            var St = (h2 + (n2 = n2 + Math.imul(c2, ot) | 0) | 0) + ((8191 & (i2 = (i2 = i2 + Math.imul(c2, at) | 0) + Math.imul(d2, ot) | 0)) << 13) | 0;
            h2 = ((o2 = o2 + Math.imul(d2, at) | 0) + (i2 >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, n2 = Math.imul(T, F), i2 = (i2 = Math.imul(T, z)) + Math.imul(P, F) | 0, o2 = Math.imul(P, z), n2 = n2 + Math.imul(x, G) | 0, i2 = (i2 = i2 + Math.imul(x, H) | 0) + Math.imul(I, G) | 0, o2 = o2 + Math.imul(I, H) | 0, n2 = n2 + Math.imul(k, W) | 0, i2 = (i2 = i2 + Math.imul(k, V) | 0) + Math.imul(B, W) | 0, o2 = o2 + Math.imul(B, V) | 0, n2 = n2 + Math.imul(E2, Z) | 0, i2 = (i2 = i2 + Math.imul(E2, X) | 0) + Math.imul(M2, Z) | 0, o2 = o2 + Math.imul(M2, X) | 0, n2 = n2 + Math.imul(w2, Q) | 0, i2 = (i2 = i2 + Math.imul(w2, tt) | 0) + Math.imul(_2, Q) | 0, o2 = o2 + Math.imul(_2, tt) | 0, n2 = n2 + Math.imul(g2, rt) | 0, i2 = (i2 = i2 + Math.imul(g2, nt) | 0) + Math.imul(m2, rt) | 0, o2 = o2 + Math.imul(m2, nt) | 0, n2 = n2 + Math.imul(p2, ot) | 0, i2 = (i2 = i2 + Math.imul(p2, at) | 0) + Math.imul(b2, ot) | 0, o2 = o2 + Math.imul(b2, at) | 0;
            var Et = (h2 + (n2 = n2 + Math.imul(c2, ft) | 0) | 0) + ((8191 & (i2 = (i2 = i2 + Math.imul(c2, ht) | 0) + Math.imul(d2, ft) | 0)) << 13) | 0;
            h2 = ((o2 = o2 + Math.imul(d2, ht) | 0) + (i2 >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, n2 = Math.imul(j, F), i2 = (i2 = Math.imul(j, z)) + Math.imul(D, F) | 0, o2 = Math.imul(D, z), n2 = n2 + Math.imul(T, G) | 0, i2 = (i2 = i2 + Math.imul(T, H) | 0) + Math.imul(P, G) | 0, o2 = o2 + Math.imul(P, H) | 0, n2 = n2 + Math.imul(x, W) | 0, i2 = (i2 = i2 + Math.imul(x, V) | 0) + Math.imul(I, W) | 0, o2 = o2 + Math.imul(I, V) | 0, n2 = n2 + Math.imul(k, Z) | 0, i2 = (i2 = i2 + Math.imul(k, X) | 0) + Math.imul(B, Z) | 0, o2 = o2 + Math.imul(B, X) | 0, n2 = n2 + Math.imul(E2, Q) | 0, i2 = (i2 = i2 + Math.imul(E2, tt) | 0) + Math.imul(M2, Q) | 0, o2 = o2 + Math.imul(M2, tt) | 0, n2 = n2 + Math.imul(w2, rt) | 0, i2 = (i2 = i2 + Math.imul(w2, nt) | 0) + Math.imul(_2, rt) | 0, o2 = o2 + Math.imul(_2, nt) | 0, n2 = n2 + Math.imul(g2, ot) | 0, i2 = (i2 = i2 + Math.imul(g2, at) | 0) + Math.imul(m2, ot) | 0, o2 = o2 + Math.imul(m2, at) | 0, n2 = n2 + Math.imul(p2, ft) | 0, i2 = (i2 = i2 + Math.imul(p2, ht) | 0) + Math.imul(b2, ft) | 0, o2 = o2 + Math.imul(b2, ht) | 0;
            var Mt = (h2 + (n2 = n2 + Math.imul(c2, ct) | 0) | 0) + ((8191 & (i2 = (i2 = i2 + Math.imul(c2, dt) | 0) + Math.imul(d2, ct) | 0)) << 13) | 0;
            h2 = ((o2 = o2 + Math.imul(d2, dt) | 0) + (i2 >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, n2 = Math.imul(C, F), i2 = (i2 = Math.imul(C, z)) + Math.imul(U, F) | 0, o2 = Math.imul(U, z), n2 = n2 + Math.imul(j, G) | 0, i2 = (i2 = i2 + Math.imul(j, H) | 0) + Math.imul(D, G) | 0, o2 = o2 + Math.imul(D, H) | 0, n2 = n2 + Math.imul(T, W) | 0, i2 = (i2 = i2 + Math.imul(T, V) | 0) + Math.imul(P, W) | 0, o2 = o2 + Math.imul(P, V) | 0, n2 = n2 + Math.imul(x, Z) | 0, i2 = (i2 = i2 + Math.imul(x, X) | 0) + Math.imul(I, Z) | 0, o2 = o2 + Math.imul(I, X) | 0, n2 = n2 + Math.imul(k, Q) | 0, i2 = (i2 = i2 + Math.imul(k, tt) | 0) + Math.imul(B, Q) | 0, o2 = o2 + Math.imul(B, tt) | 0, n2 = n2 + Math.imul(E2, rt) | 0, i2 = (i2 = i2 + Math.imul(E2, nt) | 0) + Math.imul(M2, rt) | 0, o2 = o2 + Math.imul(M2, nt) | 0, n2 = n2 + Math.imul(w2, ot) | 0, i2 = (i2 = i2 + Math.imul(w2, at) | 0) + Math.imul(_2, ot) | 0, o2 = o2 + Math.imul(_2, at) | 0, n2 = n2 + Math.imul(g2, ft) | 0, i2 = (i2 = i2 + Math.imul(g2, ht) | 0) + Math.imul(m2, ft) | 0, o2 = o2 + Math.imul(m2, ht) | 0, n2 = n2 + Math.imul(p2, ct) | 0, i2 = (i2 = i2 + Math.imul(p2, dt) | 0) + Math.imul(b2, ct) | 0, o2 = o2 + Math.imul(b2, dt) | 0;
            var At = (h2 + (n2 = n2 + Math.imul(c2, pt) | 0) | 0) + ((8191 & (i2 = (i2 = i2 + Math.imul(c2, bt) | 0) + Math.imul(d2, pt) | 0)) << 13) | 0;
            h2 = ((o2 = o2 + Math.imul(d2, bt) | 0) + (i2 >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, n2 = Math.imul(C, G), i2 = (i2 = Math.imul(C, H)) + Math.imul(U, G) | 0, o2 = Math.imul(U, H), n2 = n2 + Math.imul(j, W) | 0, i2 = (i2 = i2 + Math.imul(j, V) | 0) + Math.imul(D, W) | 0, o2 = o2 + Math.imul(D, V) | 0, n2 = n2 + Math.imul(T, Z) | 0, i2 = (i2 = i2 + Math.imul(T, X) | 0) + Math.imul(P, Z) | 0, o2 = o2 + Math.imul(P, X) | 0, n2 = n2 + Math.imul(x, Q) | 0, i2 = (i2 = i2 + Math.imul(x, tt) | 0) + Math.imul(I, Q) | 0, o2 = o2 + Math.imul(I, tt) | 0, n2 = n2 + Math.imul(k, rt) | 0, i2 = (i2 = i2 + Math.imul(k, nt) | 0) + Math.imul(B, rt) | 0, o2 = o2 + Math.imul(B, nt) | 0, n2 = n2 + Math.imul(E2, ot) | 0, i2 = (i2 = i2 + Math.imul(E2, at) | 0) + Math.imul(M2, ot) | 0, o2 = o2 + Math.imul(M2, at) | 0, n2 = n2 + Math.imul(w2, ft) | 0, i2 = (i2 = i2 + Math.imul(w2, ht) | 0) + Math.imul(_2, ft) | 0, o2 = o2 + Math.imul(_2, ht) | 0, n2 = n2 + Math.imul(g2, ct) | 0, i2 = (i2 = i2 + Math.imul(g2, dt) | 0) + Math.imul(m2, ct) | 0, o2 = o2 + Math.imul(m2, dt) | 0;
            var kt = (h2 + (n2 = n2 + Math.imul(p2, pt) | 0) | 0) + ((8191 & (i2 = (i2 = i2 + Math.imul(p2, bt) | 0) + Math.imul(b2, pt) | 0)) << 13) | 0;
            h2 = ((o2 = o2 + Math.imul(b2, bt) | 0) + (i2 >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, n2 = Math.imul(C, W), i2 = (i2 = Math.imul(C, V)) + Math.imul(U, W) | 0, o2 = Math.imul(U, V), n2 = n2 + Math.imul(j, Z) | 0, i2 = (i2 = i2 + Math.imul(j, X) | 0) + Math.imul(D, Z) | 0, o2 = o2 + Math.imul(D, X) | 0, n2 = n2 + Math.imul(T, Q) | 0, i2 = (i2 = i2 + Math.imul(T, tt) | 0) + Math.imul(P, Q) | 0, o2 = o2 + Math.imul(P, tt) | 0, n2 = n2 + Math.imul(x, rt) | 0, i2 = (i2 = i2 + Math.imul(x, nt) | 0) + Math.imul(I, rt) | 0, o2 = o2 + Math.imul(I, nt) | 0, n2 = n2 + Math.imul(k, ot) | 0, i2 = (i2 = i2 + Math.imul(k, at) | 0) + Math.imul(B, ot) | 0, o2 = o2 + Math.imul(B, at) | 0, n2 = n2 + Math.imul(E2, ft) | 0, i2 = (i2 = i2 + Math.imul(E2, ht) | 0) + Math.imul(M2, ft) | 0, o2 = o2 + Math.imul(M2, ht) | 0, n2 = n2 + Math.imul(w2, ct) | 0, i2 = (i2 = i2 + Math.imul(w2, dt) | 0) + Math.imul(_2, ct) | 0, o2 = o2 + Math.imul(_2, dt) | 0;
            var Bt = (h2 + (n2 = n2 + Math.imul(g2, pt) | 0) | 0) + ((8191 & (i2 = (i2 = i2 + Math.imul(g2, bt) | 0) + Math.imul(m2, pt) | 0)) << 13) | 0;
            h2 = ((o2 = o2 + Math.imul(m2, bt) | 0) + (i2 >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, n2 = Math.imul(C, Z), i2 = (i2 = Math.imul(C, X)) + Math.imul(U, Z) | 0, o2 = Math.imul(U, X), n2 = n2 + Math.imul(j, Q) | 0, i2 = (i2 = i2 + Math.imul(j, tt) | 0) + Math.imul(D, Q) | 0, o2 = o2 + Math.imul(D, tt) | 0, n2 = n2 + Math.imul(T, rt) | 0, i2 = (i2 = i2 + Math.imul(T, nt) | 0) + Math.imul(P, rt) | 0, o2 = o2 + Math.imul(P, nt) | 0, n2 = n2 + Math.imul(x, ot) | 0, i2 = (i2 = i2 + Math.imul(x, at) | 0) + Math.imul(I, ot) | 0, o2 = o2 + Math.imul(I, at) | 0, n2 = n2 + Math.imul(k, ft) | 0, i2 = (i2 = i2 + Math.imul(k, ht) | 0) + Math.imul(B, ft) | 0, o2 = o2 + Math.imul(B, ht) | 0, n2 = n2 + Math.imul(E2, ct) | 0, i2 = (i2 = i2 + Math.imul(E2, dt) | 0) + Math.imul(M2, ct) | 0, o2 = o2 + Math.imul(M2, dt) | 0;
            var Ot = (h2 + (n2 = n2 + Math.imul(w2, pt) | 0) | 0) + ((8191 & (i2 = (i2 = i2 + Math.imul(w2, bt) | 0) + Math.imul(_2, pt) | 0)) << 13) | 0;
            h2 = ((o2 = o2 + Math.imul(_2, bt) | 0) + (i2 >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, n2 = Math.imul(C, Q), i2 = (i2 = Math.imul(C, tt)) + Math.imul(U, Q) | 0, o2 = Math.imul(U, tt), n2 = n2 + Math.imul(j, rt) | 0, i2 = (i2 = i2 + Math.imul(j, nt) | 0) + Math.imul(D, rt) | 0, o2 = o2 + Math.imul(D, nt) | 0, n2 = n2 + Math.imul(T, ot) | 0, i2 = (i2 = i2 + Math.imul(T, at) | 0) + Math.imul(P, ot) | 0, o2 = o2 + Math.imul(P, at) | 0, n2 = n2 + Math.imul(x, ft) | 0, i2 = (i2 = i2 + Math.imul(x, ht) | 0) + Math.imul(I, ft) | 0, o2 = o2 + Math.imul(I, ht) | 0, n2 = n2 + Math.imul(k, ct) | 0, i2 = (i2 = i2 + Math.imul(k, dt) | 0) + Math.imul(B, ct) | 0, o2 = o2 + Math.imul(B, dt) | 0;
            var xt = (h2 + (n2 = n2 + Math.imul(E2, pt) | 0) | 0) + ((8191 & (i2 = (i2 = i2 + Math.imul(E2, bt) | 0) + Math.imul(M2, pt) | 0)) << 13) | 0;
            h2 = ((o2 = o2 + Math.imul(M2, bt) | 0) + (i2 >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, n2 = Math.imul(C, rt), i2 = (i2 = Math.imul(C, nt)) + Math.imul(U, rt) | 0, o2 = Math.imul(U, nt), n2 = n2 + Math.imul(j, ot) | 0, i2 = (i2 = i2 + Math.imul(j, at) | 0) + Math.imul(D, ot) | 0, o2 = o2 + Math.imul(D, at) | 0, n2 = n2 + Math.imul(T, ft) | 0, i2 = (i2 = i2 + Math.imul(T, ht) | 0) + Math.imul(P, ft) | 0, o2 = o2 + Math.imul(P, ht) | 0, n2 = n2 + Math.imul(x, ct) | 0, i2 = (i2 = i2 + Math.imul(x, dt) | 0) + Math.imul(I, ct) | 0, o2 = o2 + Math.imul(I, dt) | 0;
            var It = (h2 + (n2 = n2 + Math.imul(k, pt) | 0) | 0) + ((8191 & (i2 = (i2 = i2 + Math.imul(k, bt) | 0) + Math.imul(B, pt) | 0)) << 13) | 0;
            h2 = ((o2 = o2 + Math.imul(B, bt) | 0) + (i2 >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, n2 = Math.imul(C, ot), i2 = (i2 = Math.imul(C, at)) + Math.imul(U, ot) | 0, o2 = Math.imul(U, at), n2 = n2 + Math.imul(j, ft) | 0, i2 = (i2 = i2 + Math.imul(j, ht) | 0) + Math.imul(D, ft) | 0, o2 = o2 + Math.imul(D, ht) | 0, n2 = n2 + Math.imul(T, ct) | 0, i2 = (i2 = i2 + Math.imul(T, dt) | 0) + Math.imul(P, ct) | 0, o2 = o2 + Math.imul(P, dt) | 0;
            var Rt = (h2 + (n2 = n2 + Math.imul(x, pt) | 0) | 0) + ((8191 & (i2 = (i2 = i2 + Math.imul(x, bt) | 0) + Math.imul(I, pt) | 0)) << 13) | 0;
            h2 = ((o2 = o2 + Math.imul(I, bt) | 0) + (i2 >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, n2 = Math.imul(C, ft), i2 = (i2 = Math.imul(C, ht)) + Math.imul(U, ft) | 0, o2 = Math.imul(U, ht), n2 = n2 + Math.imul(j, ct) | 0, i2 = (i2 = i2 + Math.imul(j, dt) | 0) + Math.imul(D, ct) | 0, o2 = o2 + Math.imul(D, dt) | 0;
            var Tt = (h2 + (n2 = n2 + Math.imul(T, pt) | 0) | 0) + ((8191 & (i2 = (i2 = i2 + Math.imul(T, bt) | 0) + Math.imul(P, pt) | 0)) << 13) | 0;
            h2 = ((o2 = o2 + Math.imul(P, bt) | 0) + (i2 >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, n2 = Math.imul(C, ct), i2 = (i2 = Math.imul(C, dt)) + Math.imul(U, ct) | 0, o2 = Math.imul(U, dt);
            var Pt = (h2 + (n2 = n2 + Math.imul(j, pt) | 0) | 0) + ((8191 & (i2 = (i2 = i2 + Math.imul(j, bt) | 0) + Math.imul(D, pt) | 0)) << 13) | 0;
            h2 = ((o2 = o2 + Math.imul(D, bt) | 0) + (i2 >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863;
            var Nt = (h2 + (n2 = Math.imul(C, pt)) | 0) + ((8191 & (i2 = (i2 = Math.imul(C, bt)) + Math.imul(U, pt) | 0)) << 13) | 0;
            return h2 = ((o2 = Math.imul(U, bt)) + (i2 >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, f2[0] = yt, f2[1] = gt, f2[2] = mt, f2[3] = vt, f2[4] = wt, f2[5] = _t, f2[6] = St, f2[7] = Et, f2[8] = Mt, f2[9] = At, f2[10] = kt, f2[11] = Bt, f2[12] = Ot, f2[13] = xt, f2[14] = It, f2[15] = Rt, f2[16] = Tt, f2[17] = Pt, f2[18] = Nt, 0 !== h2 && (f2[19] = h2, r2.length++), r2;
          };
          function b(t3, e3, r2) {
            return new y().mulp(t3, e3, r2);
          }
          function y(t3, e3) {
            this.x = t3, this.y = e3;
          }
          Math.imul || (p = l), o.prototype.mulTo = function(t3, e3) {
            var r2, n2 = this.length + t3.length;
            return r2 = 10 === this.length && 10 === t3.length ? p(this, t3, e3) : n2 < 63 ? l(this, t3, e3) : n2 < 1024 ? function(t4, e4, r3) {
              r3.negative = e4.negative ^ t4.negative, r3.length = t4.length + e4.length;
              for (var n3 = 0, i2 = 0, o2 = 0; o2 < r3.length - 1; o2++) {
                var a2 = i2;
                i2 = 0;
                for (var s2 = 67108863 & n3, f2 = Math.min(o2, e4.length - 1), h2 = Math.max(0, o2 - t4.length + 1); h2 <= f2; h2++) {
                  var u2 = o2 - h2, c2 = (0 | t4.words[u2]) * (0 | e4.words[h2]), d2 = 67108863 & c2;
                  s2 = 67108863 & (d2 = d2 + s2 | 0), i2 += (a2 = (a2 = a2 + (c2 / 67108864 | 0) | 0) + (d2 >>> 26) | 0) >>> 26, a2 &= 67108863;
                }
                r3.words[o2] = s2, n3 = a2, a2 = i2;
              }
              return 0 !== n3 ? r3.words[o2] = n3 : r3.length--, r3.strip();
            }(this, t3, e3) : b(this, t3, e3), r2;
          }, y.prototype.makeRBT = function(t3) {
            for (var e3 = new Array(t3), r2 = o.prototype._countBits(t3) - 1, n2 = 0; n2 < t3; n2++)
              e3[n2] = this.revBin(n2, r2, t3);
            return e3;
          }, y.prototype.revBin = function(t3, e3, r2) {
            if (0 === t3 || t3 === r2 - 1)
              return t3;
            for (var n2 = 0, i2 = 0; i2 < e3; i2++)
              n2 |= (1 & t3) << e3 - i2 - 1, t3 >>= 1;
            return n2;
          }, y.prototype.permute = function(t3, e3, r2, n2, i2, o2) {
            for (var a2 = 0; a2 < o2; a2++)
              n2[a2] = e3[t3[a2]], i2[a2] = r2[t3[a2]];
          }, y.prototype.transform = function(t3, e3, r2, n2, i2, o2) {
            this.permute(o2, t3, e3, r2, n2, i2);
            for (var a2 = 1; a2 < i2; a2 <<= 1)
              for (var s2 = a2 << 1, f2 = Math.cos(2 * Math.PI / s2), h2 = Math.sin(2 * Math.PI / s2), u2 = 0; u2 < i2; u2 += s2)
                for (var c2 = f2, d2 = h2, l2 = 0; l2 < a2; l2++) {
                  var p2 = r2[u2 + l2], b2 = n2[u2 + l2], y2 = r2[u2 + l2 + a2], g2 = n2[u2 + l2 + a2], m2 = c2 * y2 - d2 * g2;
                  g2 = c2 * g2 + d2 * y2, y2 = m2, r2[u2 + l2] = p2 + y2, n2[u2 + l2] = b2 + g2, r2[u2 + l2 + a2] = p2 - y2, n2[u2 + l2 + a2] = b2 - g2, l2 !== s2 && (m2 = f2 * c2 - h2 * d2, d2 = f2 * d2 + h2 * c2, c2 = m2);
                }
          }, y.prototype.guessLen13b = function(t3, e3) {
            var r2 = 1 | Math.max(e3, t3), n2 = 1 & r2, i2 = 0;
            for (r2 = r2 / 2 | 0; r2; r2 >>>= 1)
              i2++;
            return 1 << i2 + 1 + n2;
          }, y.prototype.conjugate = function(t3, e3, r2) {
            if (!(r2 <= 1))
              for (var n2 = 0; n2 < r2 / 2; n2++) {
                var i2 = t3[n2];
                t3[n2] = t3[r2 - n2 - 1], t3[r2 - n2 - 1] = i2, i2 = e3[n2], e3[n2] = -e3[r2 - n2 - 1], e3[r2 - n2 - 1] = -i2;
              }
          }, y.prototype.normalize13b = function(t3, e3) {
            for (var r2 = 0, n2 = 0; n2 < e3 / 2; n2++) {
              var i2 = 8192 * Math.round(t3[2 * n2 + 1] / e3) + Math.round(t3[2 * n2] / e3) + r2;
              t3[n2] = 67108863 & i2, r2 = i2 < 67108864 ? 0 : i2 / 67108864 | 0;
            }
            return t3;
          }, y.prototype.convert13b = function(t3, e3, r2, i2) {
            for (var o2 = 0, a2 = 0; a2 < e3; a2++)
              o2 += 0 | t3[a2], r2[2 * a2] = 8191 & o2, o2 >>>= 13, r2[2 * a2 + 1] = 8191 & o2, o2 >>>= 13;
            for (a2 = 2 * e3; a2 < i2; ++a2)
              r2[a2] = 0;
            n(0 === o2), n(!(-8192 & o2));
          }, y.prototype.stub = function(t3) {
            for (var e3 = new Array(t3), r2 = 0; r2 < t3; r2++)
              e3[r2] = 0;
            return e3;
          }, y.prototype.mulp = function(t3, e3, r2) {
            var n2 = 2 * this.guessLen13b(t3.length, e3.length), i2 = this.makeRBT(n2), o2 = this.stub(n2), a2 = new Array(n2), s2 = new Array(n2), f2 = new Array(n2), h2 = new Array(n2), u2 = new Array(n2), c2 = new Array(n2), d2 = r2.words;
            d2.length = n2, this.convert13b(t3.words, t3.length, a2, n2), this.convert13b(e3.words, e3.length, h2, n2), this.transform(a2, o2, s2, f2, n2, i2), this.transform(h2, o2, u2, c2, n2, i2);
            for (var l2 = 0; l2 < n2; l2++) {
              var p2 = s2[l2] * u2[l2] - f2[l2] * c2[l2];
              f2[l2] = s2[l2] * c2[l2] + f2[l2] * u2[l2], s2[l2] = p2;
            }
            return this.conjugate(s2, f2, n2), this.transform(s2, f2, d2, o2, n2, i2), this.conjugate(d2, o2, n2), this.normalize13b(d2, n2), r2.negative = t3.negative ^ e3.negative, r2.length = t3.length + e3.length, r2.strip();
          }, o.prototype.mul = function(t3) {
            var e3 = new o(null);
            return e3.words = new Array(this.length + t3.length), this.mulTo(t3, e3);
          }, o.prototype.mulf = function(t3) {
            var e3 = new o(null);
            return e3.words = new Array(this.length + t3.length), b(this, t3, e3);
          }, o.prototype.imul = function(t3) {
            return this.clone().mulTo(t3, this);
          }, o.prototype.imuln = function(t3) {
            n("number" == typeof t3), n(t3 < 67108864);
            for (var e3 = 0, r2 = 0; r2 < this.length; r2++) {
              var i2 = (0 | this.words[r2]) * t3, o2 = (67108863 & i2) + (67108863 & e3);
              e3 >>= 26, e3 += i2 / 67108864 | 0, e3 += o2 >>> 26, this.words[r2] = 67108863 & o2;
            }
            return 0 !== e3 && (this.words[r2] = e3, this.length++), this;
          }, o.prototype.muln = function(t3) {
            return this.clone().imuln(t3);
          }, o.prototype.sqr = function() {
            return this.mul(this);
          }, o.prototype.isqr = function() {
            return this.imul(this.clone());
          }, o.prototype.pow = function(t3) {
            var e3 = function(t4) {
              for (var e4 = new Array(t4.bitLength()), r3 = 0; r3 < e4.length; r3++) {
                var n3 = r3 / 26 | 0, i3 = r3 % 26;
                e4[r3] = (t4.words[n3] & 1 << i3) >>> i3;
              }
              return e4;
            }(t3);
            if (0 === e3.length)
              return new o(1);
            for (var r2 = this, n2 = 0; n2 < e3.length && 0 === e3[n2]; n2++, r2 = r2.sqr())
              ;
            if (++n2 < e3.length)
              for (var i2 = r2.sqr(); n2 < e3.length; n2++, i2 = i2.sqr())
                0 !== e3[n2] && (r2 = r2.mul(i2));
            return r2;
          }, o.prototype.iushln = function(t3) {
            n("number" == typeof t3 && t3 >= 0);
            var e3, r2 = t3 % 26, i2 = (t3 - r2) / 26, o2 = 67108863 >>> 26 - r2 << 26 - r2;
            if (0 !== r2) {
              var a2 = 0;
              for (e3 = 0; e3 < this.length; e3++) {
                var s2 = this.words[e3] & o2, f2 = (0 | this.words[e3]) - s2 << r2;
                this.words[e3] = f2 | a2, a2 = s2 >>> 26 - r2;
              }
              a2 && (this.words[e3] = a2, this.length++);
            }
            if (0 !== i2) {
              for (e3 = this.length - 1; e3 >= 0; e3--)
                this.words[e3 + i2] = this.words[e3];
              for (e3 = 0; e3 < i2; e3++)
                this.words[e3] = 0;
              this.length += i2;
            }
            return this.strip();
          }, o.prototype.ishln = function(t3) {
            return n(0 === this.negative), this.iushln(t3);
          }, o.prototype.iushrn = function(t3, e3, r2) {
            var i2;
            n("number" == typeof t3 && t3 >= 0), i2 = e3 ? (e3 - e3 % 26) / 26 : 0;
            var o2 = t3 % 26, a2 = Math.min((t3 - o2) / 26, this.length), s2 = 67108863 ^ 67108863 >>> o2 << o2, f2 = r2;
            if (i2 -= a2, i2 = Math.max(0, i2), f2) {
              for (var h2 = 0; h2 < a2; h2++)
                f2.words[h2] = this.words[h2];
              f2.length = a2;
            }
            if (0 === a2)
              ;
            else if (this.length > a2)
              for (this.length -= a2, h2 = 0; h2 < this.length; h2++)
                this.words[h2] = this.words[h2 + a2];
            else
              this.words[0] = 0, this.length = 1;
            var u2 = 0;
            for (h2 = this.length - 1; h2 >= 0 && (0 !== u2 || h2 >= i2); h2--) {
              var c2 = 0 | this.words[h2];
              this.words[h2] = u2 << 26 - o2 | c2 >>> o2, u2 = c2 & s2;
            }
            return f2 && 0 !== u2 && (f2.words[f2.length++] = u2), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip();
          }, o.prototype.ishrn = function(t3, e3, r2) {
            return n(0 === this.negative), this.iushrn(t3, e3, r2);
          }, o.prototype.shln = function(t3) {
            return this.clone().ishln(t3);
          }, o.prototype.ushln = function(t3) {
            return this.clone().iushln(t3);
          }, o.prototype.shrn = function(t3) {
            return this.clone().ishrn(t3);
          }, o.prototype.ushrn = function(t3) {
            return this.clone().iushrn(t3);
          }, o.prototype.testn = function(t3) {
            n("number" == typeof t3 && t3 >= 0);
            var e3 = t3 % 26, r2 = (t3 - e3) / 26, i2 = 1 << e3;
            return !(this.length <= r2 || !(this.words[r2] & i2));
          }, o.prototype.imaskn = function(t3) {
            n("number" == typeof t3 && t3 >= 0);
            var e3 = t3 % 26, r2 = (t3 - e3) / 26;
            if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r2)
              return this;
            if (0 !== e3 && r2++, this.length = Math.min(r2, this.length), 0 !== e3) {
              var i2 = 67108863 ^ 67108863 >>> e3 << e3;
              this.words[this.length - 1] &= i2;
            }
            return this.strip();
          }, o.prototype.maskn = function(t3) {
            return this.clone().imaskn(t3);
          }, o.prototype.iaddn = function(t3) {
            return n("number" == typeof t3), n(t3 < 67108864), t3 < 0 ? this.isubn(-t3) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < t3 ? (this.words[0] = t3 - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t3), this.negative = 1, this) : this._iaddn(t3);
          }, o.prototype._iaddn = function(t3) {
            this.words[0] += t3;
            for (var e3 = 0; e3 < this.length && this.words[e3] >= 67108864; e3++)
              this.words[e3] -= 67108864, e3 === this.length - 1 ? this.words[e3 + 1] = 1 : this.words[e3 + 1]++;
            return this.length = Math.max(this.length, e3 + 1), this;
          }, o.prototype.isubn = function(t3) {
            if (n("number" == typeof t3), n(t3 < 67108864), t3 < 0)
              return this.iaddn(-t3);
            if (0 !== this.negative)
              return this.negative = 0, this.iaddn(t3), this.negative = 1, this;
            if (this.words[0] -= t3, 1 === this.length && this.words[0] < 0)
              this.words[0] = -this.words[0], this.negative = 1;
            else
              for (var e3 = 0; e3 < this.length && this.words[e3] < 0; e3++)
                this.words[e3] += 67108864, this.words[e3 + 1] -= 1;
            return this.strip();
          }, o.prototype.addn = function(t3) {
            return this.clone().iaddn(t3);
          }, o.prototype.subn = function(t3) {
            return this.clone().isubn(t3);
          }, o.prototype.iabs = function() {
            return this.negative = 0, this;
          }, o.prototype.abs = function() {
            return this.clone().iabs();
          }, o.prototype._ishlnsubmul = function(t3, e3, r2) {
            var i2, o2, a2 = t3.length + r2;
            this._expand(a2);
            var s2 = 0;
            for (i2 = 0; i2 < t3.length; i2++) {
              o2 = (0 | this.words[i2 + r2]) + s2;
              var f2 = (0 | t3.words[i2]) * e3;
              s2 = ((o2 -= 67108863 & f2) >> 26) - (f2 / 67108864 | 0), this.words[i2 + r2] = 67108863 & o2;
            }
            for (; i2 < this.length - r2; i2++)
              s2 = (o2 = (0 | this.words[i2 + r2]) + s2) >> 26, this.words[i2 + r2] = 67108863 & o2;
            if (0 === s2)
              return this.strip();
            for (n(-1 === s2), s2 = 0, i2 = 0; i2 < this.length; i2++)
              s2 = (o2 = -(0 | this.words[i2]) + s2) >> 26, this.words[i2] = 67108863 & o2;
            return this.negative = 1, this.strip();
          }, o.prototype._wordDiv = function(t3, e3) {
            var r2 = (this.length, t3.length), n2 = this.clone(), i2 = t3, a2 = 0 | i2.words[i2.length - 1];
            0 != (r2 = 26 - this._countBits(a2)) && (i2 = i2.ushln(r2), n2.iushln(r2), a2 = 0 | i2.words[i2.length - 1]);
            var s2, f2 = n2.length - i2.length;
            if ("mod" !== e3) {
              (s2 = new o(null)).length = f2 + 1, s2.words = new Array(s2.length);
              for (var h2 = 0; h2 < s2.length; h2++)
                s2.words[h2] = 0;
            }
            var u2 = n2.clone()._ishlnsubmul(i2, 1, f2);
            0 === u2.negative && (n2 = u2, s2 && (s2.words[f2] = 1));
            for (var c2 = f2 - 1; c2 >= 0; c2--) {
              var d2 = 67108864 * (0 | n2.words[i2.length + c2]) + (0 | n2.words[i2.length + c2 - 1]);
              for (d2 = Math.min(d2 / a2 | 0, 67108863), n2._ishlnsubmul(i2, d2, c2); 0 !== n2.negative; )
                d2--, n2.negative = 0, n2._ishlnsubmul(i2, 1, c2), n2.isZero() || (n2.negative ^= 1);
              s2 && (s2.words[c2] = d2);
            }
            return s2 && s2.strip(), n2.strip(), "div" !== e3 && 0 !== r2 && n2.iushrn(r2), { div: s2 || null, mod: n2 };
          }, o.prototype.divmod = function(t3, e3, r2) {
            return n(!t3.isZero()), this.isZero() ? { div: new o(0), mod: new o(0) } : 0 !== this.negative && 0 === t3.negative ? (s2 = this.neg().divmod(t3, e3), "mod" !== e3 && (i2 = s2.div.neg()), "div" !== e3 && (a2 = s2.mod.neg(), r2 && 0 !== a2.negative && a2.iadd(t3)), { div: i2, mod: a2 }) : 0 === this.negative && 0 !== t3.negative ? (s2 = this.divmod(t3.neg(), e3), "mod" !== e3 && (i2 = s2.div.neg()), { div: i2, mod: s2.mod }) : this.negative & t3.negative ? (s2 = this.neg().divmod(t3.neg(), e3), "div" !== e3 && (a2 = s2.mod.neg(), r2 && 0 !== a2.negative && a2.isub(t3)), { div: s2.div, mod: a2 }) : t3.length > this.length || this.cmp(t3) < 0 ? { div: new o(0), mod: this } : 1 === t3.length ? "div" === e3 ? { div: this.divn(t3.words[0]), mod: null } : "mod" === e3 ? { div: null, mod: new o(this.modn(t3.words[0])) } : { div: this.divn(t3.words[0]), mod: new o(this.modn(t3.words[0])) } : this._wordDiv(t3, e3);
            var i2, a2, s2;
          }, o.prototype.div = function(t3) {
            return this.divmod(t3, "div", false).div;
          }, o.prototype.mod = function(t3) {
            return this.divmod(t3, "mod", false).mod;
          }, o.prototype.umod = function(t3) {
            return this.divmod(t3, "mod", true).mod;
          }, o.prototype.divRound = function(t3) {
            var e3 = this.divmod(t3);
            if (e3.mod.isZero())
              return e3.div;
            var r2 = 0 !== e3.div.negative ? e3.mod.isub(t3) : e3.mod, n2 = t3.ushrn(1), i2 = t3.andln(1), o2 = r2.cmp(n2);
            return o2 < 0 || 1 === i2 && 0 === o2 ? e3.div : 0 !== e3.div.negative ? e3.div.isubn(1) : e3.div.iaddn(1);
          }, o.prototype.modn = function(t3) {
            n(t3 <= 67108863);
            for (var e3 = (1 << 26) % t3, r2 = 0, i2 = this.length - 1; i2 >= 0; i2--)
              r2 = (e3 * r2 + (0 | this.words[i2])) % t3;
            return r2;
          }, o.prototype.idivn = function(t3) {
            n(t3 <= 67108863);
            for (var e3 = 0, r2 = this.length - 1; r2 >= 0; r2--) {
              var i2 = (0 | this.words[r2]) + 67108864 * e3;
              this.words[r2] = i2 / t3 | 0, e3 = i2 % t3;
            }
            return this.strip();
          }, o.prototype.divn = function(t3) {
            return this.clone().idivn(t3);
          }, o.prototype.egcd = function(t3) {
            n(0 === t3.negative), n(!t3.isZero());
            var e3 = this, r2 = t3.clone();
            e3 = 0 !== e3.negative ? e3.umod(t3) : e3.clone();
            for (var i2 = new o(1), a2 = new o(0), s2 = new o(0), f2 = new o(1), h2 = 0; e3.isEven() && r2.isEven(); )
              e3.iushrn(1), r2.iushrn(1), ++h2;
            for (var u2 = r2.clone(), c2 = e3.clone(); !e3.isZero(); ) {
              for (var d2 = 0, l2 = 1; !(e3.words[0] & l2) && d2 < 26; ++d2, l2 <<= 1)
                ;
              if (d2 > 0)
                for (e3.iushrn(d2); d2-- > 0; )
                  (i2.isOdd() || a2.isOdd()) && (i2.iadd(u2), a2.isub(c2)), i2.iushrn(1), a2.iushrn(1);
              for (var p2 = 0, b2 = 1; !(r2.words[0] & b2) && p2 < 26; ++p2, b2 <<= 1)
                ;
              if (p2 > 0)
                for (r2.iushrn(p2); p2-- > 0; )
                  (s2.isOdd() || f2.isOdd()) && (s2.iadd(u2), f2.isub(c2)), s2.iushrn(1), f2.iushrn(1);
              e3.cmp(r2) >= 0 ? (e3.isub(r2), i2.isub(s2), a2.isub(f2)) : (r2.isub(e3), s2.isub(i2), f2.isub(a2));
            }
            return { a: s2, b: f2, gcd: r2.iushln(h2) };
          }, o.prototype._invmp = function(t3) {
            n(0 === t3.negative), n(!t3.isZero());
            var e3 = this, r2 = t3.clone();
            e3 = 0 !== e3.negative ? e3.umod(t3) : e3.clone();
            for (var i2, a2 = new o(1), s2 = new o(0), f2 = r2.clone(); e3.cmpn(1) > 0 && r2.cmpn(1) > 0; ) {
              for (var h2 = 0, u2 = 1; !(e3.words[0] & u2) && h2 < 26; ++h2, u2 <<= 1)
                ;
              if (h2 > 0)
                for (e3.iushrn(h2); h2-- > 0; )
                  a2.isOdd() && a2.iadd(f2), a2.iushrn(1);
              for (var c2 = 0, d2 = 1; !(r2.words[0] & d2) && c2 < 26; ++c2, d2 <<= 1)
                ;
              if (c2 > 0)
                for (r2.iushrn(c2); c2-- > 0; )
                  s2.isOdd() && s2.iadd(f2), s2.iushrn(1);
              e3.cmp(r2) >= 0 ? (e3.isub(r2), a2.isub(s2)) : (r2.isub(e3), s2.isub(a2));
            }
            return (i2 = 0 === e3.cmpn(1) ? a2 : s2).cmpn(0) < 0 && i2.iadd(t3), i2;
          }, o.prototype.gcd = function(t3) {
            if (this.isZero())
              return t3.abs();
            if (t3.isZero())
              return this.abs();
            var e3 = this.clone(), r2 = t3.clone();
            e3.negative = 0, r2.negative = 0;
            for (var n2 = 0; e3.isEven() && r2.isEven(); n2++)
              e3.iushrn(1), r2.iushrn(1);
            for (; ; ) {
              for (; e3.isEven(); )
                e3.iushrn(1);
              for (; r2.isEven(); )
                r2.iushrn(1);
              var i2 = e3.cmp(r2);
              if (i2 < 0) {
                var o2 = e3;
                e3 = r2, r2 = o2;
              } else if (0 === i2 || 0 === r2.cmpn(1))
                break;
              e3.isub(r2);
            }
            return r2.iushln(n2);
          }, o.prototype.invm = function(t3) {
            return this.egcd(t3).a.umod(t3);
          }, o.prototype.isEven = function() {
            return !(1 & this.words[0]);
          }, o.prototype.isOdd = function() {
            return !(1 & ~this.words[0]);
          }, o.prototype.andln = function(t3) {
            return this.words[0] & t3;
          }, o.prototype.bincn = function(t3) {
            n("number" == typeof t3);
            var e3 = t3 % 26, r2 = (t3 - e3) / 26, i2 = 1 << e3;
            if (this.length <= r2)
              return this._expand(r2 + 1), this.words[r2] |= i2, this;
            for (var o2 = i2, a2 = r2; 0 !== o2 && a2 < this.length; a2++) {
              var s2 = 0 | this.words[a2];
              o2 = (s2 += o2) >>> 26, s2 &= 67108863, this.words[a2] = s2;
            }
            return 0 !== o2 && (this.words[a2] = o2, this.length++), this;
          }, o.prototype.isZero = function() {
            return 1 === this.length && 0 === this.words[0];
          }, o.prototype.cmpn = function(t3) {
            var e3, r2 = t3 < 0;
            if (0 !== this.negative && !r2)
              return -1;
            if (0 === this.negative && r2)
              return 1;
            if (this.strip(), this.length > 1)
              e3 = 1;
            else {
              r2 && (t3 = -t3), n(t3 <= 67108863, "Number is too big");
              var i2 = 0 | this.words[0];
              e3 = i2 === t3 ? 0 : i2 < t3 ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -e3 : e3;
          }, o.prototype.cmp = function(t3) {
            if (0 !== this.negative && 0 === t3.negative)
              return -1;
            if (0 === this.negative && 0 !== t3.negative)
              return 1;
            var e3 = this.ucmp(t3);
            return 0 !== this.negative ? 0 | -e3 : e3;
          }, o.prototype.ucmp = function(t3) {
            if (this.length > t3.length)
              return 1;
            if (this.length < t3.length)
              return -1;
            for (var e3 = 0, r2 = this.length - 1; r2 >= 0; r2--) {
              var n2 = 0 | this.words[r2], i2 = 0 | t3.words[r2];
              if (n2 !== i2) {
                n2 < i2 ? e3 = -1 : n2 > i2 && (e3 = 1);
                break;
              }
            }
            return e3;
          }, o.prototype.gtn = function(t3) {
            return 1 === this.cmpn(t3);
          }, o.prototype.gt = function(t3) {
            return 1 === this.cmp(t3);
          }, o.prototype.gten = function(t3) {
            return this.cmpn(t3) >= 0;
          }, o.prototype.gte = function(t3) {
            return this.cmp(t3) >= 0;
          }, o.prototype.ltn = function(t3) {
            return -1 === this.cmpn(t3);
          }, o.prototype.lt = function(t3) {
            return -1 === this.cmp(t3);
          }, o.prototype.lten = function(t3) {
            return this.cmpn(t3) <= 0;
          }, o.prototype.lte = function(t3) {
            return this.cmp(t3) <= 0;
          }, o.prototype.eqn = function(t3) {
            return 0 === this.cmpn(t3);
          }, o.prototype.eq = function(t3) {
            return 0 === this.cmp(t3);
          }, o.red = function(t3) {
            return new E(t3);
          }, o.prototype.toRed = function(t3) {
            return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), t3.convertTo(this)._forceRed(t3);
          }, o.prototype.fromRed = function() {
            return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
          }, o.prototype._forceRed = function(t3) {
            return this.red = t3, this;
          }, o.prototype.forceRed = function(t3) {
            return n(!this.red, "Already a number in reduction context"), this._forceRed(t3);
          }, o.prototype.redAdd = function(t3) {
            return n(this.red, "redAdd works only with red numbers"), this.red.add(this, t3);
          }, o.prototype.redIAdd = function(t3) {
            return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t3);
          }, o.prototype.redSub = function(t3) {
            return n(this.red, "redSub works only with red numbers"), this.red.sub(this, t3);
          }, o.prototype.redISub = function(t3) {
            return n(this.red, "redISub works only with red numbers"), this.red.isub(this, t3);
          }, o.prototype.redShl = function(t3) {
            return n(this.red, "redShl works only with red numbers"), this.red.shl(this, t3);
          }, o.prototype.redMul = function(t3) {
            return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t3), this.red.mul(this, t3);
          }, o.prototype.redIMul = function(t3) {
            return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t3), this.red.imul(this, t3);
          }, o.prototype.redSqr = function() {
            return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
          }, o.prototype.redISqr = function() {
            return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
          }, o.prototype.redSqrt = function() {
            return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
          }, o.prototype.redInvm = function() {
            return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
          }, o.prototype.redNeg = function() {
            return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
          }, o.prototype.redPow = function(t3) {
            return n(this.red && !t3.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t3);
          };
          var g = { k256: null, p224: null, p192: null, p25519: null };
          function m(t3, e3) {
            this.name = t3, this.p = new o(e3, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
          }
          function v() {
            m.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
          }
          function w() {
            m.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
          }
          function _() {
            m.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
          }
          function S() {
            m.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
          }
          function E(t3) {
            if ("string" == typeof t3) {
              var e3 = o._prime(t3);
              this.m = e3.p, this.prime = e3;
            } else
              n(t3.gtn(1), "modulus must be greater than 1"), this.m = t3, this.prime = null;
          }
          function M(t3) {
            E.call(this, t3), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
          }
          m.prototype._tmp = function() {
            var t3 = new o(null);
            return t3.words = new Array(Math.ceil(this.n / 13)), t3;
          }, m.prototype.ireduce = function(t3) {
            var e3, r2 = t3;
            do {
              this.split(r2, this.tmp), e3 = (r2 = (r2 = this.imulK(r2)).iadd(this.tmp)).bitLength();
            } while (e3 > this.n);
            var n2 = e3 < this.n ? -1 : r2.ucmp(this.p);
            return 0 === n2 ? (r2.words[0] = 0, r2.length = 1) : n2 > 0 ? r2.isub(this.p) : void 0 !== r2.strip ? r2.strip() : r2._strip(), r2;
          }, m.prototype.split = function(t3, e3) {
            t3.iushrn(this.n, 0, e3);
          }, m.prototype.imulK = function(t3) {
            return t3.imul(this.k);
          }, i(v, m), v.prototype.split = function(t3, e3) {
            for (var r2 = 4194303, n2 = Math.min(t3.length, 9), i2 = 0; i2 < n2; i2++)
              e3.words[i2] = t3.words[i2];
            if (e3.length = n2, t3.length <= 9)
              return t3.words[0] = 0, void (t3.length = 1);
            var o2 = t3.words[9];
            for (e3.words[e3.length++] = o2 & r2, i2 = 10; i2 < t3.length; i2++) {
              var a2 = 0 | t3.words[i2];
              t3.words[i2 - 10] = (a2 & r2) << 4 | o2 >>> 22, o2 = a2;
            }
            o2 >>>= 22, t3.words[i2 - 10] = o2, 0 === o2 && t3.length > 10 ? t3.length -= 10 : t3.length -= 9;
          }, v.prototype.imulK = function(t3) {
            t3.words[t3.length] = 0, t3.words[t3.length + 1] = 0, t3.length += 2;
            for (var e3 = 0, r2 = 0; r2 < t3.length; r2++) {
              var n2 = 0 | t3.words[r2];
              e3 += 977 * n2, t3.words[r2] = 67108863 & e3, e3 = 64 * n2 + (e3 / 67108864 | 0);
            }
            return 0 === t3.words[t3.length - 1] && (t3.length--, 0 === t3.words[t3.length - 1] && t3.length--), t3;
          }, i(w, m), i(_, m), i(S, m), S.prototype.imulK = function(t3) {
            for (var e3 = 0, r2 = 0; r2 < t3.length; r2++) {
              var n2 = 19 * (0 | t3.words[r2]) + e3, i2 = 67108863 & n2;
              n2 >>>= 26, t3.words[r2] = i2, e3 = n2;
            }
            return 0 !== e3 && (t3.words[t3.length++] = e3), t3;
          }, o._prime = function(t3) {
            if (g[t3])
              return g[t3];
            var e3;
            if ("k256" === t3)
              e3 = new v();
            else if ("p224" === t3)
              e3 = new w();
            else if ("p192" === t3)
              e3 = new _();
            else {
              if ("p25519" !== t3)
                throw new Error("Unknown prime " + t3);
              e3 = new S();
            }
            return g[t3] = e3, e3;
          }, E.prototype._verify1 = function(t3) {
            n(0 === t3.negative, "red works only with positives"), n(t3.red, "red works only with red numbers");
          }, E.prototype._verify2 = function(t3, e3) {
            n(!(t3.negative | e3.negative), "red works only with positives"), n(t3.red && t3.red === e3.red, "red works only with red numbers");
          }, E.prototype.imod = function(t3) {
            return this.prime ? this.prime.ireduce(t3)._forceRed(this) : t3.umod(this.m)._forceRed(this);
          }, E.prototype.neg = function(t3) {
            return t3.isZero() ? t3.clone() : this.m.sub(t3)._forceRed(this);
          }, E.prototype.add = function(t3, e3) {
            this._verify2(t3, e3);
            var r2 = t3.add(e3);
            return r2.cmp(this.m) >= 0 && r2.isub(this.m), r2._forceRed(this);
          }, E.prototype.iadd = function(t3, e3) {
            this._verify2(t3, e3);
            var r2 = t3.iadd(e3);
            return r2.cmp(this.m) >= 0 && r2.isub(this.m), r2;
          }, E.prototype.sub = function(t3, e3) {
            this._verify2(t3, e3);
            var r2 = t3.sub(e3);
            return r2.cmpn(0) < 0 && r2.iadd(this.m), r2._forceRed(this);
          }, E.prototype.isub = function(t3, e3) {
            this._verify2(t3, e3);
            var r2 = t3.isub(e3);
            return r2.cmpn(0) < 0 && r2.iadd(this.m), r2;
          }, E.prototype.shl = function(t3, e3) {
            return this._verify1(t3), this.imod(t3.ushln(e3));
          }, E.prototype.imul = function(t3, e3) {
            return this._verify2(t3, e3), this.imod(t3.imul(e3));
          }, E.prototype.mul = function(t3, e3) {
            return this._verify2(t3, e3), this.imod(t3.mul(e3));
          }, E.prototype.isqr = function(t3) {
            return this.imul(t3, t3.clone());
          }, E.prototype.sqr = function(t3) {
            return this.mul(t3, t3);
          }, E.prototype.sqrt = function(t3) {
            if (t3.isZero())
              return t3.clone();
            var e3 = this.m.andln(3);
            if (n(e3 % 2 == 1), 3 === e3) {
              var r2 = this.m.add(new o(1)).iushrn(2);
              return this.pow(t3, r2);
            }
            for (var i2 = this.m.subn(1), a2 = 0; !i2.isZero() && 0 === i2.andln(1); )
              a2++, i2.iushrn(1);
            n(!i2.isZero());
            var s2 = new o(1).toRed(this), f2 = s2.redNeg(), h2 = this.m.subn(1).iushrn(1), u2 = this.m.bitLength();
            for (u2 = new o(2 * u2 * u2).toRed(this); 0 !== this.pow(u2, h2).cmp(f2); )
              u2.redIAdd(f2);
            for (var c2 = this.pow(u2, i2), d2 = this.pow(t3, i2.addn(1).iushrn(1)), l2 = this.pow(t3, i2), p2 = a2; 0 !== l2.cmp(s2); ) {
              for (var b2 = l2, y2 = 0; 0 !== b2.cmp(s2); y2++)
                b2 = b2.redSqr();
              n(y2 < p2);
              var g2 = this.pow(c2, new o(1).iushln(p2 - y2 - 1));
              d2 = d2.redMul(g2), c2 = g2.redSqr(), l2 = l2.redMul(c2), p2 = y2;
            }
            return d2;
          }, E.prototype.invm = function(t3) {
            var e3 = t3._invmp(this.m);
            return 0 !== e3.negative ? (e3.negative = 0, this.imod(e3).redNeg()) : this.imod(e3);
          }, E.prototype.pow = function(t3, e3) {
            if (e3.isZero())
              return new o(1).toRed(this);
            if (0 === e3.cmpn(1))
              return t3.clone();
            var r2 = new Array(16);
            r2[0] = new o(1).toRed(this), r2[1] = t3;
            for (var n2 = 2; n2 < r2.length; n2++)
              r2[n2] = this.mul(r2[n2 - 1], t3);
            var i2 = r2[0], a2 = 0, s2 = 0, f2 = e3.bitLength() % 26;
            for (0 === f2 && (f2 = 26), n2 = e3.length - 1; n2 >= 0; n2--) {
              for (var h2 = e3.words[n2], u2 = f2 - 1; u2 >= 0; u2--) {
                var c2 = h2 >> u2 & 1;
                i2 !== r2[0] && (i2 = this.sqr(i2)), 0 !== c2 || 0 !== a2 ? (a2 <<= 1, a2 |= c2, (4 == ++s2 || 0 === n2 && 0 === u2) && (i2 = this.mul(i2, r2[a2]), s2 = 0, a2 = 0)) : s2 = 0;
              }
              f2 = 26;
            }
            return i2;
          }, E.prototype.convertTo = function(t3) {
            var e3 = t3.umod(this.m);
            return e3 === t3 ? e3.clone() : e3;
          }, E.prototype.convertFrom = function(t3) {
            var e3 = t3.clone();
            return e3.red = null, e3;
          }, o.mont = function(t3) {
            return new M(t3);
          }, i(M, E), M.prototype.convertTo = function(t3) {
            return this.imod(t3.ushln(this.shift));
          }, M.prototype.convertFrom = function(t3) {
            var e3 = this.imod(t3.mul(this.rinv));
            return e3.red = null, e3;
          }, M.prototype.imul = function(t3, e3) {
            if (t3.isZero() || e3.isZero())
              return t3.words[0] = 0, t3.length = 1, t3;
            var r2 = t3.imul(e3), n2 = r2.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), i2 = r2.isub(n2).iushrn(this.shift), o2 = i2;
            return i2.cmp(this.m) >= 0 ? o2 = i2.isub(this.m) : i2.cmpn(0) < 0 && (o2 = i2.iadd(this.m)), o2._forceRed(this);
          }, M.prototype.mul = function(t3, e3) {
            if (t3.isZero() || e3.isZero())
              return new o(0)._forceRed(this);
            var r2 = t3.mul(e3), n2 = r2.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), i2 = r2.isub(n2).iushrn(this.shift), a2 = i2;
            return i2.cmp(this.m) >= 0 ? a2 = i2.isub(this.m) : i2.cmpn(0) < 0 && (a2 = i2.iadd(this.m)), a2._forceRed(this);
          }, M.prototype.invm = function(t3) {
            return this.imod(t3._invmp(this.m).mul(this.r2))._forceRed(this);
          };
        }(t = r.nmd(t), this);
      }, 8478: function(t, e, r) {
        !function(t2, e2) {
          "use strict";
          function n(t3, e3) {
            if (!t3)
              throw new Error(e3 || "Assertion failed");
          }
          function i(t3, e3) {
            t3.super_ = e3;
            var r2 = function() {
            };
            r2.prototype = e3.prototype, t3.prototype = new r2(), t3.prototype.constructor = t3;
          }
          function o(t3, e3, r2) {
            if (o.isBN(t3))
              return t3;
            this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t3 && ("le" !== e3 && "be" !== e3 || (r2 = e3, e3 = 10), this._init(t3 || 0, e3 || 10, r2 || "be"));
          }
          var a;
          "object" == typeof t2 ? t2.exports = o : e2.BN = o, o.BN = o, o.wordSize = 26;
          try {
            a = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : r(4149).Buffer;
          } catch (t3) {
          }
          function s(t3, e3) {
            var r2 = t3.charCodeAt(e3);
            return r2 >= 48 && r2 <= 57 ? r2 - 48 : r2 >= 65 && r2 <= 70 ? r2 - 55 : r2 >= 97 && r2 <= 102 ? r2 - 87 : void n(false, "Invalid character in " + t3);
          }
          function f(t3, e3, r2) {
            var n2 = s(t3, r2);
            return r2 - 1 >= e3 && (n2 |= s(t3, r2 - 1) << 4), n2;
          }
          function h(t3, e3, r2, i2) {
            for (var o2 = 0, a2 = 0, s2 = Math.min(t3.length, r2), f2 = e3; f2 < s2; f2++) {
              var h2 = t3.charCodeAt(f2) - 48;
              o2 *= i2, a2 = h2 >= 49 ? h2 - 49 + 10 : h2 >= 17 ? h2 - 17 + 10 : h2, n(h2 >= 0 && a2 < i2, "Invalid character"), o2 += a2;
            }
            return o2;
          }
          function u(t3, e3) {
            t3.words = e3.words, t3.length = e3.length, t3.negative = e3.negative, t3.red = e3.red;
          }
          if (o.isBN = function(t3) {
            return t3 instanceof o || null !== t3 && "object" == typeof t3 && t3.constructor.wordSize === o.wordSize && Array.isArray(t3.words);
          }, o.max = function(t3, e3) {
            return t3.cmp(e3) > 0 ? t3 : e3;
          }, o.min = function(t3, e3) {
            return t3.cmp(e3) < 0 ? t3 : e3;
          }, o.prototype._init = function(t3, e3, r2) {
            if ("number" == typeof t3)
              return this._initNumber(t3, e3, r2);
            if ("object" == typeof t3)
              return this._initArray(t3, e3, r2);
            "hex" === e3 && (e3 = 16), n(e3 === (0 | e3) && e3 >= 2 && e3 <= 36);
            var i2 = 0;
            "-" === (t3 = t3.toString().replace(/\s+/g, ""))[0] && (i2++, this.negative = 1), i2 < t3.length && (16 === e3 ? this._parseHex(t3, i2, r2) : (this._parseBase(t3, e3, i2), "le" === r2 && this._initArray(this.toArray(), e3, r2)));
          }, o.prototype._initNumber = function(t3, e3, r2) {
            t3 < 0 && (this.negative = 1, t3 = -t3), t3 < 67108864 ? (this.words = [67108863 & t3], this.length = 1) : t3 < 4503599627370496 ? (this.words = [67108863 & t3, t3 / 67108864 & 67108863], this.length = 2) : (n(t3 < 9007199254740992), this.words = [67108863 & t3, t3 / 67108864 & 67108863, 1], this.length = 3), "le" === r2 && this._initArray(this.toArray(), e3, r2);
          }, o.prototype._initArray = function(t3, e3, r2) {
            if (n("number" == typeof t3.length), t3.length <= 0)
              return this.words = [0], this.length = 1, this;
            this.length = Math.ceil(t3.length / 3), this.words = new Array(this.length);
            for (var i2 = 0; i2 < this.length; i2++)
              this.words[i2] = 0;
            var o2, a2, s2 = 0;
            if ("be" === r2)
              for (i2 = t3.length - 1, o2 = 0; i2 >= 0; i2 -= 3)
                a2 = t3[i2] | t3[i2 - 1] << 8 | t3[i2 - 2] << 16, this.words[o2] |= a2 << s2 & 67108863, this.words[o2 + 1] = a2 >>> 26 - s2 & 67108863, (s2 += 24) >= 26 && (s2 -= 26, o2++);
            else if ("le" === r2)
              for (i2 = 0, o2 = 0; i2 < t3.length; i2 += 3)
                a2 = t3[i2] | t3[i2 + 1] << 8 | t3[i2 + 2] << 16, this.words[o2] |= a2 << s2 & 67108863, this.words[o2 + 1] = a2 >>> 26 - s2 & 67108863, (s2 += 24) >= 26 && (s2 -= 26, o2++);
            return this._strip();
          }, o.prototype._parseHex = function(t3, e3, r2) {
            this.length = Math.ceil((t3.length - e3) / 6), this.words = new Array(this.length);
            for (var n2 = 0; n2 < this.length; n2++)
              this.words[n2] = 0;
            var i2, o2 = 0, a2 = 0;
            if ("be" === r2)
              for (n2 = t3.length - 1; n2 >= e3; n2 -= 2)
                i2 = f(t3, e3, n2) << o2, this.words[a2] |= 67108863 & i2, o2 >= 18 ? (o2 -= 18, a2 += 1, this.words[a2] |= i2 >>> 26) : o2 += 8;
            else
              for (n2 = (t3.length - e3) % 2 == 0 ? e3 + 1 : e3; n2 < t3.length; n2 += 2)
                i2 = f(t3, e3, n2) << o2, this.words[a2] |= 67108863 & i2, o2 >= 18 ? (o2 -= 18, a2 += 1, this.words[a2] |= i2 >>> 26) : o2 += 8;
            this._strip();
          }, o.prototype._parseBase = function(t3, e3, r2) {
            this.words = [0], this.length = 1;
            for (var n2 = 0, i2 = 1; i2 <= 67108863; i2 *= e3)
              n2++;
            n2--, i2 = i2 / e3 | 0;
            for (var o2 = t3.length - r2, a2 = o2 % n2, s2 = Math.min(o2, o2 - a2) + r2, f2 = 0, u2 = r2; u2 < s2; u2 += n2)
              f2 = h(t3, u2, u2 + n2, e3), this.imuln(i2), this.words[0] + f2 < 67108864 ? this.words[0] += f2 : this._iaddn(f2);
            if (0 !== a2) {
              var c2 = 1;
              for (f2 = h(t3, u2, t3.length, e3), u2 = 0; u2 < a2; u2++)
                c2 *= e3;
              this.imuln(c2), this.words[0] + f2 < 67108864 ? this.words[0] += f2 : this._iaddn(f2);
            }
            this._strip();
          }, o.prototype.copy = function(t3) {
            t3.words = new Array(this.length);
            for (var e3 = 0; e3 < this.length; e3++)
              t3.words[e3] = this.words[e3];
            t3.length = this.length, t3.negative = this.negative, t3.red = this.red;
          }, o.prototype._move = function(t3) {
            u(t3, this);
          }, o.prototype.clone = function() {
            var t3 = new o(null);
            return this.copy(t3), t3;
          }, o.prototype._expand = function(t3) {
            for (; this.length < t3; )
              this.words[this.length++] = 0;
            return this;
          }, o.prototype._strip = function() {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }, o.prototype._normSign = function() {
            return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this;
          }, "undefined" != typeof Symbol && "function" == typeof Symbol.for)
            try {
              o.prototype[Symbol.for("nodejs.util.inspect.custom")] = c;
            } catch (t3) {
              o.prototype.inspect = c;
            }
          else
            o.prototype.inspect = c;
          function c() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          }
          var d = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"], l = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], p = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
          function b(t3, e3, r2) {
            r2.negative = e3.negative ^ t3.negative;
            var n2 = t3.length + e3.length | 0;
            r2.length = n2, n2 = n2 - 1 | 0;
            var i2 = 0 | t3.words[0], o2 = 0 | e3.words[0], a2 = i2 * o2, s2 = 67108863 & a2, f2 = a2 / 67108864 | 0;
            r2.words[0] = s2;
            for (var h2 = 1; h2 < n2; h2++) {
              for (var u2 = f2 >>> 26, c2 = 67108863 & f2, d2 = Math.min(h2, e3.length - 1), l2 = Math.max(0, h2 - t3.length + 1); l2 <= d2; l2++) {
                var p2 = h2 - l2 | 0;
                u2 += (a2 = (i2 = 0 | t3.words[p2]) * (o2 = 0 | e3.words[l2]) + c2) / 67108864 | 0, c2 = 67108863 & a2;
              }
              r2.words[h2] = 0 | c2, f2 = 0 | u2;
            }
            return 0 !== f2 ? r2.words[h2] = 0 | f2 : r2.length--, r2._strip();
          }
          o.prototype.toString = function(t3, e3) {
            var r2;
            if (e3 = 0 | e3 || 1, 16 === (t3 = t3 || 10) || "hex" === t3) {
              r2 = "";
              for (var i2 = 0, o2 = 0, a2 = 0; a2 < this.length; a2++) {
                var s2 = this.words[a2], f2 = (16777215 & (s2 << i2 | o2)).toString(16);
                o2 = s2 >>> 24 - i2 & 16777215, (i2 += 2) >= 26 && (i2 -= 26, a2--), r2 = 0 !== o2 || a2 !== this.length - 1 ? d[6 - f2.length] + f2 + r2 : f2 + r2;
              }
              for (0 !== o2 && (r2 = o2.toString(16) + r2); r2.length % e3 != 0; )
                r2 = "0" + r2;
              return 0 !== this.negative && (r2 = "-" + r2), r2;
            }
            if (t3 === (0 | t3) && t3 >= 2 && t3 <= 36) {
              var h2 = l[t3], u2 = p[t3];
              r2 = "";
              var c2 = this.clone();
              for (c2.negative = 0; !c2.isZero(); ) {
                var b2 = c2.modrn(u2).toString(t3);
                r2 = (c2 = c2.idivn(u2)).isZero() ? b2 + r2 : d[h2 - b2.length] + b2 + r2;
              }
              for (this.isZero() && (r2 = "0" + r2); r2.length % e3 != 0; )
                r2 = "0" + r2;
              return 0 !== this.negative && (r2 = "-" + r2), r2;
            }
            n(false, "Base should be between 2 and 36");
          }, o.prototype.toNumber = function() {
            var t3 = this.words[0];
            return 2 === this.length ? t3 += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t3 += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(false, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t3 : t3;
          }, o.prototype.toJSON = function() {
            return this.toString(16, 2);
          }, a && (o.prototype.toBuffer = function(t3, e3) {
            return this.toArrayLike(a, t3, e3);
          }), o.prototype.toArray = function(t3, e3) {
            return this.toArrayLike(Array, t3, e3);
          }, o.prototype.toArrayLike = function(t3, e3, r2) {
            this._strip();
            var i2 = this.byteLength(), o2 = r2 || Math.max(1, i2);
            n(i2 <= o2, "byte array longer than desired length"), n(o2 > 0, "Requested array length <= 0");
            var a2 = function(t4, e4) {
              return t4.allocUnsafe ? t4.allocUnsafe(e4) : new t4(e4);
            }(t3, o2);
            return this["_toArrayLike" + ("le" === e3 ? "LE" : "BE")](a2, i2), a2;
          }, o.prototype._toArrayLikeLE = function(t3, e3) {
            for (var r2 = 0, n2 = 0, i2 = 0, o2 = 0; i2 < this.length; i2++) {
              var a2 = this.words[i2] << o2 | n2;
              t3[r2++] = 255 & a2, r2 < t3.length && (t3[r2++] = a2 >> 8 & 255), r2 < t3.length && (t3[r2++] = a2 >> 16 & 255), 6 === o2 ? (r2 < t3.length && (t3[r2++] = a2 >> 24 & 255), n2 = 0, o2 = 0) : (n2 = a2 >>> 24, o2 += 2);
            }
            if (r2 < t3.length)
              for (t3[r2++] = n2; r2 < t3.length; )
                t3[r2++] = 0;
          }, o.prototype._toArrayLikeBE = function(t3, e3) {
            for (var r2 = t3.length - 1, n2 = 0, i2 = 0, o2 = 0; i2 < this.length; i2++) {
              var a2 = this.words[i2] << o2 | n2;
              t3[r2--] = 255 & a2, r2 >= 0 && (t3[r2--] = a2 >> 8 & 255), r2 >= 0 && (t3[r2--] = a2 >> 16 & 255), 6 === o2 ? (r2 >= 0 && (t3[r2--] = a2 >> 24 & 255), n2 = 0, o2 = 0) : (n2 = a2 >>> 24, o2 += 2);
            }
            if (r2 >= 0)
              for (t3[r2--] = n2; r2 >= 0; )
                t3[r2--] = 0;
          }, Math.clz32 ? o.prototype._countBits = function(t3) {
            return 32 - Math.clz32(t3);
          } : o.prototype._countBits = function(t3) {
            var e3 = t3, r2 = 0;
            return e3 >= 4096 && (r2 += 13, e3 >>>= 13), e3 >= 64 && (r2 += 7, e3 >>>= 7), e3 >= 8 && (r2 += 4, e3 >>>= 4), e3 >= 2 && (r2 += 2, e3 >>>= 2), r2 + e3;
          }, o.prototype._zeroBits = function(t3) {
            if (0 === t3)
              return 26;
            var e3 = t3, r2 = 0;
            return 8191 & e3 || (r2 += 13, e3 >>>= 13), 127 & e3 || (r2 += 7, e3 >>>= 7), 15 & e3 || (r2 += 4, e3 >>>= 4), 3 & e3 || (r2 += 2, e3 >>>= 2), 1 & e3 || r2++, r2;
          }, o.prototype.bitLength = function() {
            var t3 = this.words[this.length - 1], e3 = this._countBits(t3);
            return 26 * (this.length - 1) + e3;
          }, o.prototype.zeroBits = function() {
            if (this.isZero())
              return 0;
            for (var t3 = 0, e3 = 0; e3 < this.length; e3++) {
              var r2 = this._zeroBits(this.words[e3]);
              if (t3 += r2, 26 !== r2)
                break;
            }
            return t3;
          }, o.prototype.byteLength = function() {
            return Math.ceil(this.bitLength() / 8);
          }, o.prototype.toTwos = function(t3) {
            return 0 !== this.negative ? this.abs().inotn(t3).iaddn(1) : this.clone();
          }, o.prototype.fromTwos = function(t3) {
            return this.testn(t3 - 1) ? this.notn(t3).iaddn(1).ineg() : this.clone();
          }, o.prototype.isNeg = function() {
            return 0 !== this.negative;
          }, o.prototype.neg = function() {
            return this.clone().ineg();
          }, o.prototype.ineg = function() {
            return this.isZero() || (this.negative ^= 1), this;
          }, o.prototype.iuor = function(t3) {
            for (; this.length < t3.length; )
              this.words[this.length++] = 0;
            for (var e3 = 0; e3 < t3.length; e3++)
              this.words[e3] = this.words[e3] | t3.words[e3];
            return this._strip();
          }, o.prototype.ior = function(t3) {
            return n(!(this.negative | t3.negative)), this.iuor(t3);
          }, o.prototype.or = function(t3) {
            return this.length > t3.length ? this.clone().ior(t3) : t3.clone().ior(this);
          }, o.prototype.uor = function(t3) {
            return this.length > t3.length ? this.clone().iuor(t3) : t3.clone().iuor(this);
          }, o.prototype.iuand = function(t3) {
            var e3;
            e3 = this.length > t3.length ? t3 : this;
            for (var r2 = 0; r2 < e3.length; r2++)
              this.words[r2] = this.words[r2] & t3.words[r2];
            return this.length = e3.length, this._strip();
          }, o.prototype.iand = function(t3) {
            return n(!(this.negative | t3.negative)), this.iuand(t3);
          }, o.prototype.and = function(t3) {
            return this.length > t3.length ? this.clone().iand(t3) : t3.clone().iand(this);
          }, o.prototype.uand = function(t3) {
            return this.length > t3.length ? this.clone().iuand(t3) : t3.clone().iuand(this);
          }, o.prototype.iuxor = function(t3) {
            var e3, r2;
            this.length > t3.length ? (e3 = this, r2 = t3) : (e3 = t3, r2 = this);
            for (var n2 = 0; n2 < r2.length; n2++)
              this.words[n2] = e3.words[n2] ^ r2.words[n2];
            if (this !== e3)
              for (; n2 < e3.length; n2++)
                this.words[n2] = e3.words[n2];
            return this.length = e3.length, this._strip();
          }, o.prototype.ixor = function(t3) {
            return n(!(this.negative | t3.negative)), this.iuxor(t3);
          }, o.prototype.xor = function(t3) {
            return this.length > t3.length ? this.clone().ixor(t3) : t3.clone().ixor(this);
          }, o.prototype.uxor = function(t3) {
            return this.length > t3.length ? this.clone().iuxor(t3) : t3.clone().iuxor(this);
          }, o.prototype.inotn = function(t3) {
            n("number" == typeof t3 && t3 >= 0);
            var e3 = 0 | Math.ceil(t3 / 26), r2 = t3 % 26;
            this._expand(e3), r2 > 0 && e3--;
            for (var i2 = 0; i2 < e3; i2++)
              this.words[i2] = 67108863 & ~this.words[i2];
            return r2 > 0 && (this.words[i2] = ~this.words[i2] & 67108863 >> 26 - r2), this._strip();
          }, o.prototype.notn = function(t3) {
            return this.clone().inotn(t3);
          }, o.prototype.setn = function(t3, e3) {
            n("number" == typeof t3 && t3 >= 0);
            var r2 = t3 / 26 | 0, i2 = t3 % 26;
            return this._expand(r2 + 1), this.words[r2] = e3 ? this.words[r2] | 1 << i2 : this.words[r2] & ~(1 << i2), this._strip();
          }, o.prototype.iadd = function(t3) {
            var e3, r2, n2;
            if (0 !== this.negative && 0 === t3.negative)
              return this.negative = 0, e3 = this.isub(t3), this.negative ^= 1, this._normSign();
            if (0 === this.negative && 0 !== t3.negative)
              return t3.negative = 0, e3 = this.isub(t3), t3.negative = 1, e3._normSign();
            this.length > t3.length ? (r2 = this, n2 = t3) : (r2 = t3, n2 = this);
            for (var i2 = 0, o2 = 0; o2 < n2.length; o2++)
              e3 = (0 | r2.words[o2]) + (0 | n2.words[o2]) + i2, this.words[o2] = 67108863 & e3, i2 = e3 >>> 26;
            for (; 0 !== i2 && o2 < r2.length; o2++)
              e3 = (0 | r2.words[o2]) + i2, this.words[o2] = 67108863 & e3, i2 = e3 >>> 26;
            if (this.length = r2.length, 0 !== i2)
              this.words[this.length] = i2, this.length++;
            else if (r2 !== this)
              for (; o2 < r2.length; o2++)
                this.words[o2] = r2.words[o2];
            return this;
          }, o.prototype.add = function(t3) {
            var e3;
            return 0 !== t3.negative && 0 === this.negative ? (t3.negative = 0, e3 = this.sub(t3), t3.negative ^= 1, e3) : 0 === t3.negative && 0 !== this.negative ? (this.negative = 0, e3 = t3.sub(this), this.negative = 1, e3) : this.length > t3.length ? this.clone().iadd(t3) : t3.clone().iadd(this);
          }, o.prototype.isub = function(t3) {
            if (0 !== t3.negative) {
              t3.negative = 0;
              var e3 = this.iadd(t3);
              return t3.negative = 1, e3._normSign();
            }
            if (0 !== this.negative)
              return this.negative = 0, this.iadd(t3), this.negative = 1, this._normSign();
            var r2, n2, i2 = this.cmp(t3);
            if (0 === i2)
              return this.negative = 0, this.length = 1, this.words[0] = 0, this;
            i2 > 0 ? (r2 = this, n2 = t3) : (r2 = t3, n2 = this);
            for (var o2 = 0, a2 = 0; a2 < n2.length; a2++)
              o2 = (e3 = (0 | r2.words[a2]) - (0 | n2.words[a2]) + o2) >> 26, this.words[a2] = 67108863 & e3;
            for (; 0 !== o2 && a2 < r2.length; a2++)
              o2 = (e3 = (0 | r2.words[a2]) + o2) >> 26, this.words[a2] = 67108863 & e3;
            if (0 === o2 && a2 < r2.length && r2 !== this)
              for (; a2 < r2.length; a2++)
                this.words[a2] = r2.words[a2];
            return this.length = Math.max(this.length, a2), r2 !== this && (this.negative = 1), this._strip();
          }, o.prototype.sub = function(t3) {
            return this.clone().isub(t3);
          };
          var y = function(t3, e3, r2) {
            var n2, i2, o2, a2 = t3.words, s2 = e3.words, f2 = r2.words, h2 = 0, u2 = 0 | a2[0], c2 = 8191 & u2, d2 = u2 >>> 13, l2 = 0 | a2[1], p2 = 8191 & l2, b2 = l2 >>> 13, y2 = 0 | a2[2], g2 = 8191 & y2, m2 = y2 >>> 13, v2 = 0 | a2[3], w2 = 8191 & v2, _2 = v2 >>> 13, S2 = 0 | a2[4], E2 = 8191 & S2, M2 = S2 >>> 13, A2 = 0 | a2[5], k2 = 8191 & A2, B2 = A2 >>> 13, O = 0 | a2[6], x = 8191 & O, I = O >>> 13, R = 0 | a2[7], T = 8191 & R, P = R >>> 13, N = 0 | a2[8], j = 8191 & N, D = N >>> 13, L = 0 | a2[9], C = 8191 & L, U = L >>> 13, q = 0 | s2[0], F = 8191 & q, z = q >>> 13, K = 0 | s2[1], G = 8191 & K, H = K >>> 13, $ = 0 | s2[2], W = 8191 & $, V = $ >>> 13, Y = 0 | s2[3], Z = 8191 & Y, X = Y >>> 13, J = 0 | s2[4], Q = 8191 & J, tt = J >>> 13, et = 0 | s2[5], rt = 8191 & et, nt = et >>> 13, it = 0 | s2[6], ot = 8191 & it, at = it >>> 13, st = 0 | s2[7], ft = 8191 & st, ht = st >>> 13, ut = 0 | s2[8], ct = 8191 & ut, dt = ut >>> 13, lt = 0 | s2[9], pt = 8191 & lt, bt = lt >>> 13;
            r2.negative = t3.negative ^ e3.negative, r2.length = 19;
            var yt = (h2 + (n2 = Math.imul(c2, F)) | 0) + ((8191 & (i2 = (i2 = Math.imul(c2, z)) + Math.imul(d2, F) | 0)) << 13) | 0;
            h2 = ((o2 = Math.imul(d2, z)) + (i2 >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, n2 = Math.imul(p2, F), i2 = (i2 = Math.imul(p2, z)) + Math.imul(b2, F) | 0, o2 = Math.imul(b2, z);
            var gt = (h2 + (n2 = n2 + Math.imul(c2, G) | 0) | 0) + ((8191 & (i2 = (i2 = i2 + Math.imul(c2, H) | 0) + Math.imul(d2, G) | 0)) << 13) | 0;
            h2 = ((o2 = o2 + Math.imul(d2, H) | 0) + (i2 >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, n2 = Math.imul(g2, F), i2 = (i2 = Math.imul(g2, z)) + Math.imul(m2, F) | 0, o2 = Math.imul(m2, z), n2 = n2 + Math.imul(p2, G) | 0, i2 = (i2 = i2 + Math.imul(p2, H) | 0) + Math.imul(b2, G) | 0, o2 = o2 + Math.imul(b2, H) | 0;
            var mt = (h2 + (n2 = n2 + Math.imul(c2, W) | 0) | 0) + ((8191 & (i2 = (i2 = i2 + Math.imul(c2, V) | 0) + Math.imul(d2, W) | 0)) << 13) | 0;
            h2 = ((o2 = o2 + Math.imul(d2, V) | 0) + (i2 >>> 13) | 0) + (mt >>> 26) | 0, mt &= 67108863, n2 = Math.imul(w2, F), i2 = (i2 = Math.imul(w2, z)) + Math.imul(_2, F) | 0, o2 = Math.imul(_2, z), n2 = n2 + Math.imul(g2, G) | 0, i2 = (i2 = i2 + Math.imul(g2, H) | 0) + Math.imul(m2, G) | 0, o2 = o2 + Math.imul(m2, H) | 0, n2 = n2 + Math.imul(p2, W) | 0, i2 = (i2 = i2 + Math.imul(p2, V) | 0) + Math.imul(b2, W) | 0, o2 = o2 + Math.imul(b2, V) | 0;
            var vt = (h2 + (n2 = n2 + Math.imul(c2, Z) | 0) | 0) + ((8191 & (i2 = (i2 = i2 + Math.imul(c2, X) | 0) + Math.imul(d2, Z) | 0)) << 13) | 0;
            h2 = ((o2 = o2 + Math.imul(d2, X) | 0) + (i2 >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, n2 = Math.imul(E2, F), i2 = (i2 = Math.imul(E2, z)) + Math.imul(M2, F) | 0, o2 = Math.imul(M2, z), n2 = n2 + Math.imul(w2, G) | 0, i2 = (i2 = i2 + Math.imul(w2, H) | 0) + Math.imul(_2, G) | 0, o2 = o2 + Math.imul(_2, H) | 0, n2 = n2 + Math.imul(g2, W) | 0, i2 = (i2 = i2 + Math.imul(g2, V) | 0) + Math.imul(m2, W) | 0, o2 = o2 + Math.imul(m2, V) | 0, n2 = n2 + Math.imul(p2, Z) | 0, i2 = (i2 = i2 + Math.imul(p2, X) | 0) + Math.imul(b2, Z) | 0, o2 = o2 + Math.imul(b2, X) | 0;
            var wt = (h2 + (n2 = n2 + Math.imul(c2, Q) | 0) | 0) + ((8191 & (i2 = (i2 = i2 + Math.imul(c2, tt) | 0) + Math.imul(d2, Q) | 0)) << 13) | 0;
            h2 = ((o2 = o2 + Math.imul(d2, tt) | 0) + (i2 >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, n2 = Math.imul(k2, F), i2 = (i2 = Math.imul(k2, z)) + Math.imul(B2, F) | 0, o2 = Math.imul(B2, z), n2 = n2 + Math.imul(E2, G) | 0, i2 = (i2 = i2 + Math.imul(E2, H) | 0) + Math.imul(M2, G) | 0, o2 = o2 + Math.imul(M2, H) | 0, n2 = n2 + Math.imul(w2, W) | 0, i2 = (i2 = i2 + Math.imul(w2, V) | 0) + Math.imul(_2, W) | 0, o2 = o2 + Math.imul(_2, V) | 0, n2 = n2 + Math.imul(g2, Z) | 0, i2 = (i2 = i2 + Math.imul(g2, X) | 0) + Math.imul(m2, Z) | 0, o2 = o2 + Math.imul(m2, X) | 0, n2 = n2 + Math.imul(p2, Q) | 0, i2 = (i2 = i2 + Math.imul(p2, tt) | 0) + Math.imul(b2, Q) | 0, o2 = o2 + Math.imul(b2, tt) | 0;
            var _t = (h2 + (n2 = n2 + Math.imul(c2, rt) | 0) | 0) + ((8191 & (i2 = (i2 = i2 + Math.imul(c2, nt) | 0) + Math.imul(d2, rt) | 0)) << 13) | 0;
            h2 = ((o2 = o2 + Math.imul(d2, nt) | 0) + (i2 >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, n2 = Math.imul(x, F), i2 = (i2 = Math.imul(x, z)) + Math.imul(I, F) | 0, o2 = Math.imul(I, z), n2 = n2 + Math.imul(k2, G) | 0, i2 = (i2 = i2 + Math.imul(k2, H) | 0) + Math.imul(B2, G) | 0, o2 = o2 + Math.imul(B2, H) | 0, n2 = n2 + Math.imul(E2, W) | 0, i2 = (i2 = i2 + Math.imul(E2, V) | 0) + Math.imul(M2, W) | 0, o2 = o2 + Math.imul(M2, V) | 0, n2 = n2 + Math.imul(w2, Z) | 0, i2 = (i2 = i2 + Math.imul(w2, X) | 0) + Math.imul(_2, Z) | 0, o2 = o2 + Math.imul(_2, X) | 0, n2 = n2 + Math.imul(g2, Q) | 0, i2 = (i2 = i2 + Math.imul(g2, tt) | 0) + Math.imul(m2, Q) | 0, o2 = o2 + Math.imul(m2, tt) | 0, n2 = n2 + Math.imul(p2, rt) | 0, i2 = (i2 = i2 + Math.imul(p2, nt) | 0) + Math.imul(b2, rt) | 0, o2 = o2 + Math.imul(b2, nt) | 0;
            var St = (h2 + (n2 = n2 + Math.imul(c2, ot) | 0) | 0) + ((8191 & (i2 = (i2 = i2 + Math.imul(c2, at) | 0) + Math.imul(d2, ot) | 0)) << 13) | 0;
            h2 = ((o2 = o2 + Math.imul(d2, at) | 0) + (i2 >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, n2 = Math.imul(T, F), i2 = (i2 = Math.imul(T, z)) + Math.imul(P, F) | 0, o2 = Math.imul(P, z), n2 = n2 + Math.imul(x, G) | 0, i2 = (i2 = i2 + Math.imul(x, H) | 0) + Math.imul(I, G) | 0, o2 = o2 + Math.imul(I, H) | 0, n2 = n2 + Math.imul(k2, W) | 0, i2 = (i2 = i2 + Math.imul(k2, V) | 0) + Math.imul(B2, W) | 0, o2 = o2 + Math.imul(B2, V) | 0, n2 = n2 + Math.imul(E2, Z) | 0, i2 = (i2 = i2 + Math.imul(E2, X) | 0) + Math.imul(M2, Z) | 0, o2 = o2 + Math.imul(M2, X) | 0, n2 = n2 + Math.imul(w2, Q) | 0, i2 = (i2 = i2 + Math.imul(w2, tt) | 0) + Math.imul(_2, Q) | 0, o2 = o2 + Math.imul(_2, tt) | 0, n2 = n2 + Math.imul(g2, rt) | 0, i2 = (i2 = i2 + Math.imul(g2, nt) | 0) + Math.imul(m2, rt) | 0, o2 = o2 + Math.imul(m2, nt) | 0, n2 = n2 + Math.imul(p2, ot) | 0, i2 = (i2 = i2 + Math.imul(p2, at) | 0) + Math.imul(b2, ot) | 0, o2 = o2 + Math.imul(b2, at) | 0;
            var Et = (h2 + (n2 = n2 + Math.imul(c2, ft) | 0) | 0) + ((8191 & (i2 = (i2 = i2 + Math.imul(c2, ht) | 0) + Math.imul(d2, ft) | 0)) << 13) | 0;
            h2 = ((o2 = o2 + Math.imul(d2, ht) | 0) + (i2 >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, n2 = Math.imul(j, F), i2 = (i2 = Math.imul(j, z)) + Math.imul(D, F) | 0, o2 = Math.imul(D, z), n2 = n2 + Math.imul(T, G) | 0, i2 = (i2 = i2 + Math.imul(T, H) | 0) + Math.imul(P, G) | 0, o2 = o2 + Math.imul(P, H) | 0, n2 = n2 + Math.imul(x, W) | 0, i2 = (i2 = i2 + Math.imul(x, V) | 0) + Math.imul(I, W) | 0, o2 = o2 + Math.imul(I, V) | 0, n2 = n2 + Math.imul(k2, Z) | 0, i2 = (i2 = i2 + Math.imul(k2, X) | 0) + Math.imul(B2, Z) | 0, o2 = o2 + Math.imul(B2, X) | 0, n2 = n2 + Math.imul(E2, Q) | 0, i2 = (i2 = i2 + Math.imul(E2, tt) | 0) + Math.imul(M2, Q) | 0, o2 = o2 + Math.imul(M2, tt) | 0, n2 = n2 + Math.imul(w2, rt) | 0, i2 = (i2 = i2 + Math.imul(w2, nt) | 0) + Math.imul(_2, rt) | 0, o2 = o2 + Math.imul(_2, nt) | 0, n2 = n2 + Math.imul(g2, ot) | 0, i2 = (i2 = i2 + Math.imul(g2, at) | 0) + Math.imul(m2, ot) | 0, o2 = o2 + Math.imul(m2, at) | 0, n2 = n2 + Math.imul(p2, ft) | 0, i2 = (i2 = i2 + Math.imul(p2, ht) | 0) + Math.imul(b2, ft) | 0, o2 = o2 + Math.imul(b2, ht) | 0;
            var Mt = (h2 + (n2 = n2 + Math.imul(c2, ct) | 0) | 0) + ((8191 & (i2 = (i2 = i2 + Math.imul(c2, dt) | 0) + Math.imul(d2, ct) | 0)) << 13) | 0;
            h2 = ((o2 = o2 + Math.imul(d2, dt) | 0) + (i2 >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, n2 = Math.imul(C, F), i2 = (i2 = Math.imul(C, z)) + Math.imul(U, F) | 0, o2 = Math.imul(U, z), n2 = n2 + Math.imul(j, G) | 0, i2 = (i2 = i2 + Math.imul(j, H) | 0) + Math.imul(D, G) | 0, o2 = o2 + Math.imul(D, H) | 0, n2 = n2 + Math.imul(T, W) | 0, i2 = (i2 = i2 + Math.imul(T, V) | 0) + Math.imul(P, W) | 0, o2 = o2 + Math.imul(P, V) | 0, n2 = n2 + Math.imul(x, Z) | 0, i2 = (i2 = i2 + Math.imul(x, X) | 0) + Math.imul(I, Z) | 0, o2 = o2 + Math.imul(I, X) | 0, n2 = n2 + Math.imul(k2, Q) | 0, i2 = (i2 = i2 + Math.imul(k2, tt) | 0) + Math.imul(B2, Q) | 0, o2 = o2 + Math.imul(B2, tt) | 0, n2 = n2 + Math.imul(E2, rt) | 0, i2 = (i2 = i2 + Math.imul(E2, nt) | 0) + Math.imul(M2, rt) | 0, o2 = o2 + Math.imul(M2, nt) | 0, n2 = n2 + Math.imul(w2, ot) | 0, i2 = (i2 = i2 + Math.imul(w2, at) | 0) + Math.imul(_2, ot) | 0, o2 = o2 + Math.imul(_2, at) | 0, n2 = n2 + Math.imul(g2, ft) | 0, i2 = (i2 = i2 + Math.imul(g2, ht) | 0) + Math.imul(m2, ft) | 0, o2 = o2 + Math.imul(m2, ht) | 0, n2 = n2 + Math.imul(p2, ct) | 0, i2 = (i2 = i2 + Math.imul(p2, dt) | 0) + Math.imul(b2, ct) | 0, o2 = o2 + Math.imul(b2, dt) | 0;
            var At = (h2 + (n2 = n2 + Math.imul(c2, pt) | 0) | 0) + ((8191 & (i2 = (i2 = i2 + Math.imul(c2, bt) | 0) + Math.imul(d2, pt) | 0)) << 13) | 0;
            h2 = ((o2 = o2 + Math.imul(d2, bt) | 0) + (i2 >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, n2 = Math.imul(C, G), i2 = (i2 = Math.imul(C, H)) + Math.imul(U, G) | 0, o2 = Math.imul(U, H), n2 = n2 + Math.imul(j, W) | 0, i2 = (i2 = i2 + Math.imul(j, V) | 0) + Math.imul(D, W) | 0, o2 = o2 + Math.imul(D, V) | 0, n2 = n2 + Math.imul(T, Z) | 0, i2 = (i2 = i2 + Math.imul(T, X) | 0) + Math.imul(P, Z) | 0, o2 = o2 + Math.imul(P, X) | 0, n2 = n2 + Math.imul(x, Q) | 0, i2 = (i2 = i2 + Math.imul(x, tt) | 0) + Math.imul(I, Q) | 0, o2 = o2 + Math.imul(I, tt) | 0, n2 = n2 + Math.imul(k2, rt) | 0, i2 = (i2 = i2 + Math.imul(k2, nt) | 0) + Math.imul(B2, rt) | 0, o2 = o2 + Math.imul(B2, nt) | 0, n2 = n2 + Math.imul(E2, ot) | 0, i2 = (i2 = i2 + Math.imul(E2, at) | 0) + Math.imul(M2, ot) | 0, o2 = o2 + Math.imul(M2, at) | 0, n2 = n2 + Math.imul(w2, ft) | 0, i2 = (i2 = i2 + Math.imul(w2, ht) | 0) + Math.imul(_2, ft) | 0, o2 = o2 + Math.imul(_2, ht) | 0, n2 = n2 + Math.imul(g2, ct) | 0, i2 = (i2 = i2 + Math.imul(g2, dt) | 0) + Math.imul(m2, ct) | 0, o2 = o2 + Math.imul(m2, dt) | 0;
            var kt = (h2 + (n2 = n2 + Math.imul(p2, pt) | 0) | 0) + ((8191 & (i2 = (i2 = i2 + Math.imul(p2, bt) | 0) + Math.imul(b2, pt) | 0)) << 13) | 0;
            h2 = ((o2 = o2 + Math.imul(b2, bt) | 0) + (i2 >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, n2 = Math.imul(C, W), i2 = (i2 = Math.imul(C, V)) + Math.imul(U, W) | 0, o2 = Math.imul(U, V), n2 = n2 + Math.imul(j, Z) | 0, i2 = (i2 = i2 + Math.imul(j, X) | 0) + Math.imul(D, Z) | 0, o2 = o2 + Math.imul(D, X) | 0, n2 = n2 + Math.imul(T, Q) | 0, i2 = (i2 = i2 + Math.imul(T, tt) | 0) + Math.imul(P, Q) | 0, o2 = o2 + Math.imul(P, tt) | 0, n2 = n2 + Math.imul(x, rt) | 0, i2 = (i2 = i2 + Math.imul(x, nt) | 0) + Math.imul(I, rt) | 0, o2 = o2 + Math.imul(I, nt) | 0, n2 = n2 + Math.imul(k2, ot) | 0, i2 = (i2 = i2 + Math.imul(k2, at) | 0) + Math.imul(B2, ot) | 0, o2 = o2 + Math.imul(B2, at) | 0, n2 = n2 + Math.imul(E2, ft) | 0, i2 = (i2 = i2 + Math.imul(E2, ht) | 0) + Math.imul(M2, ft) | 0, o2 = o2 + Math.imul(M2, ht) | 0, n2 = n2 + Math.imul(w2, ct) | 0, i2 = (i2 = i2 + Math.imul(w2, dt) | 0) + Math.imul(_2, ct) | 0, o2 = o2 + Math.imul(_2, dt) | 0;
            var Bt = (h2 + (n2 = n2 + Math.imul(g2, pt) | 0) | 0) + ((8191 & (i2 = (i2 = i2 + Math.imul(g2, bt) | 0) + Math.imul(m2, pt) | 0)) << 13) | 0;
            h2 = ((o2 = o2 + Math.imul(m2, bt) | 0) + (i2 >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, n2 = Math.imul(C, Z), i2 = (i2 = Math.imul(C, X)) + Math.imul(U, Z) | 0, o2 = Math.imul(U, X), n2 = n2 + Math.imul(j, Q) | 0, i2 = (i2 = i2 + Math.imul(j, tt) | 0) + Math.imul(D, Q) | 0, o2 = o2 + Math.imul(D, tt) | 0, n2 = n2 + Math.imul(T, rt) | 0, i2 = (i2 = i2 + Math.imul(T, nt) | 0) + Math.imul(P, rt) | 0, o2 = o2 + Math.imul(P, nt) | 0, n2 = n2 + Math.imul(x, ot) | 0, i2 = (i2 = i2 + Math.imul(x, at) | 0) + Math.imul(I, ot) | 0, o2 = o2 + Math.imul(I, at) | 0, n2 = n2 + Math.imul(k2, ft) | 0, i2 = (i2 = i2 + Math.imul(k2, ht) | 0) + Math.imul(B2, ft) | 0, o2 = o2 + Math.imul(B2, ht) | 0, n2 = n2 + Math.imul(E2, ct) | 0, i2 = (i2 = i2 + Math.imul(E2, dt) | 0) + Math.imul(M2, ct) | 0, o2 = o2 + Math.imul(M2, dt) | 0;
            var Ot = (h2 + (n2 = n2 + Math.imul(w2, pt) | 0) | 0) + ((8191 & (i2 = (i2 = i2 + Math.imul(w2, bt) | 0) + Math.imul(_2, pt) | 0)) << 13) | 0;
            h2 = ((o2 = o2 + Math.imul(_2, bt) | 0) + (i2 >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, n2 = Math.imul(C, Q), i2 = (i2 = Math.imul(C, tt)) + Math.imul(U, Q) | 0, o2 = Math.imul(U, tt), n2 = n2 + Math.imul(j, rt) | 0, i2 = (i2 = i2 + Math.imul(j, nt) | 0) + Math.imul(D, rt) | 0, o2 = o2 + Math.imul(D, nt) | 0, n2 = n2 + Math.imul(T, ot) | 0, i2 = (i2 = i2 + Math.imul(T, at) | 0) + Math.imul(P, ot) | 0, o2 = o2 + Math.imul(P, at) | 0, n2 = n2 + Math.imul(x, ft) | 0, i2 = (i2 = i2 + Math.imul(x, ht) | 0) + Math.imul(I, ft) | 0, o2 = o2 + Math.imul(I, ht) | 0, n2 = n2 + Math.imul(k2, ct) | 0, i2 = (i2 = i2 + Math.imul(k2, dt) | 0) + Math.imul(B2, ct) | 0, o2 = o2 + Math.imul(B2, dt) | 0;
            var xt = (h2 + (n2 = n2 + Math.imul(E2, pt) | 0) | 0) + ((8191 & (i2 = (i2 = i2 + Math.imul(E2, bt) | 0) + Math.imul(M2, pt) | 0)) << 13) | 0;
            h2 = ((o2 = o2 + Math.imul(M2, bt) | 0) + (i2 >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, n2 = Math.imul(C, rt), i2 = (i2 = Math.imul(C, nt)) + Math.imul(U, rt) | 0, o2 = Math.imul(U, nt), n2 = n2 + Math.imul(j, ot) | 0, i2 = (i2 = i2 + Math.imul(j, at) | 0) + Math.imul(D, ot) | 0, o2 = o2 + Math.imul(D, at) | 0, n2 = n2 + Math.imul(T, ft) | 0, i2 = (i2 = i2 + Math.imul(T, ht) | 0) + Math.imul(P, ft) | 0, o2 = o2 + Math.imul(P, ht) | 0, n2 = n2 + Math.imul(x, ct) | 0, i2 = (i2 = i2 + Math.imul(x, dt) | 0) + Math.imul(I, ct) | 0, o2 = o2 + Math.imul(I, dt) | 0;
            var It = (h2 + (n2 = n2 + Math.imul(k2, pt) | 0) | 0) + ((8191 & (i2 = (i2 = i2 + Math.imul(k2, bt) | 0) + Math.imul(B2, pt) | 0)) << 13) | 0;
            h2 = ((o2 = o2 + Math.imul(B2, bt) | 0) + (i2 >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, n2 = Math.imul(C, ot), i2 = (i2 = Math.imul(C, at)) + Math.imul(U, ot) | 0, o2 = Math.imul(U, at), n2 = n2 + Math.imul(j, ft) | 0, i2 = (i2 = i2 + Math.imul(j, ht) | 0) + Math.imul(D, ft) | 0, o2 = o2 + Math.imul(D, ht) | 0, n2 = n2 + Math.imul(T, ct) | 0, i2 = (i2 = i2 + Math.imul(T, dt) | 0) + Math.imul(P, ct) | 0, o2 = o2 + Math.imul(P, dt) | 0;
            var Rt = (h2 + (n2 = n2 + Math.imul(x, pt) | 0) | 0) + ((8191 & (i2 = (i2 = i2 + Math.imul(x, bt) | 0) + Math.imul(I, pt) | 0)) << 13) | 0;
            h2 = ((o2 = o2 + Math.imul(I, bt) | 0) + (i2 >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, n2 = Math.imul(C, ft), i2 = (i2 = Math.imul(C, ht)) + Math.imul(U, ft) | 0, o2 = Math.imul(U, ht), n2 = n2 + Math.imul(j, ct) | 0, i2 = (i2 = i2 + Math.imul(j, dt) | 0) + Math.imul(D, ct) | 0, o2 = o2 + Math.imul(D, dt) | 0;
            var Tt = (h2 + (n2 = n2 + Math.imul(T, pt) | 0) | 0) + ((8191 & (i2 = (i2 = i2 + Math.imul(T, bt) | 0) + Math.imul(P, pt) | 0)) << 13) | 0;
            h2 = ((o2 = o2 + Math.imul(P, bt) | 0) + (i2 >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, n2 = Math.imul(C, ct), i2 = (i2 = Math.imul(C, dt)) + Math.imul(U, ct) | 0, o2 = Math.imul(U, dt);
            var Pt = (h2 + (n2 = n2 + Math.imul(j, pt) | 0) | 0) + ((8191 & (i2 = (i2 = i2 + Math.imul(j, bt) | 0) + Math.imul(D, pt) | 0)) << 13) | 0;
            h2 = ((o2 = o2 + Math.imul(D, bt) | 0) + (i2 >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863;
            var Nt = (h2 + (n2 = Math.imul(C, pt)) | 0) + ((8191 & (i2 = (i2 = Math.imul(C, bt)) + Math.imul(U, pt) | 0)) << 13) | 0;
            return h2 = ((o2 = Math.imul(U, bt)) + (i2 >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, f2[0] = yt, f2[1] = gt, f2[2] = mt, f2[3] = vt, f2[4] = wt, f2[5] = _t, f2[6] = St, f2[7] = Et, f2[8] = Mt, f2[9] = At, f2[10] = kt, f2[11] = Bt, f2[12] = Ot, f2[13] = xt, f2[14] = It, f2[15] = Rt, f2[16] = Tt, f2[17] = Pt, f2[18] = Nt, 0 !== h2 && (f2[19] = h2, r2.length++), r2;
          };
          function g(t3, e3, r2) {
            r2.negative = e3.negative ^ t3.negative, r2.length = t3.length + e3.length;
            for (var n2 = 0, i2 = 0, o2 = 0; o2 < r2.length - 1; o2++) {
              var a2 = i2;
              i2 = 0;
              for (var s2 = 67108863 & n2, f2 = Math.min(o2, e3.length - 1), h2 = Math.max(0, o2 - t3.length + 1); h2 <= f2; h2++) {
                var u2 = o2 - h2, c2 = (0 | t3.words[u2]) * (0 | e3.words[h2]), d2 = 67108863 & c2;
                s2 = 67108863 & (d2 = d2 + s2 | 0), i2 += (a2 = (a2 = a2 + (c2 / 67108864 | 0) | 0) + (d2 >>> 26) | 0) >>> 26, a2 &= 67108863;
              }
              r2.words[o2] = s2, n2 = a2, a2 = i2;
            }
            return 0 !== n2 ? r2.words[o2] = n2 : r2.length--, r2._strip();
          }
          function m(t3, e3, r2) {
            return g(t3, e3, r2);
          }
          function v(t3, e3) {
            this.x = t3, this.y = e3;
          }
          Math.imul || (y = b), o.prototype.mulTo = function(t3, e3) {
            var r2 = this.length + t3.length;
            return 10 === this.length && 10 === t3.length ? y(this, t3, e3) : r2 < 63 ? b(this, t3, e3) : r2 < 1024 ? g(this, t3, e3) : m(this, t3, e3);
          }, v.prototype.makeRBT = function(t3) {
            for (var e3 = new Array(t3), r2 = o.prototype._countBits(t3) - 1, n2 = 0; n2 < t3; n2++)
              e3[n2] = this.revBin(n2, r2, t3);
            return e3;
          }, v.prototype.revBin = function(t3, e3, r2) {
            if (0 === t3 || t3 === r2 - 1)
              return t3;
            for (var n2 = 0, i2 = 0; i2 < e3; i2++)
              n2 |= (1 & t3) << e3 - i2 - 1, t3 >>= 1;
            return n2;
          }, v.prototype.permute = function(t3, e3, r2, n2, i2, o2) {
            for (var a2 = 0; a2 < o2; a2++)
              n2[a2] = e3[t3[a2]], i2[a2] = r2[t3[a2]];
          }, v.prototype.transform = function(t3, e3, r2, n2, i2, o2) {
            this.permute(o2, t3, e3, r2, n2, i2);
            for (var a2 = 1; a2 < i2; a2 <<= 1)
              for (var s2 = a2 << 1, f2 = Math.cos(2 * Math.PI / s2), h2 = Math.sin(2 * Math.PI / s2), u2 = 0; u2 < i2; u2 += s2)
                for (var c2 = f2, d2 = h2, l2 = 0; l2 < a2; l2++) {
                  var p2 = r2[u2 + l2], b2 = n2[u2 + l2], y2 = r2[u2 + l2 + a2], g2 = n2[u2 + l2 + a2], m2 = c2 * y2 - d2 * g2;
                  g2 = c2 * g2 + d2 * y2, y2 = m2, r2[u2 + l2] = p2 + y2, n2[u2 + l2] = b2 + g2, r2[u2 + l2 + a2] = p2 - y2, n2[u2 + l2 + a2] = b2 - g2, l2 !== s2 && (m2 = f2 * c2 - h2 * d2, d2 = f2 * d2 + h2 * c2, c2 = m2);
                }
          }, v.prototype.guessLen13b = function(t3, e3) {
            var r2 = 1 | Math.max(e3, t3), n2 = 1 & r2, i2 = 0;
            for (r2 = r2 / 2 | 0; r2; r2 >>>= 1)
              i2++;
            return 1 << i2 + 1 + n2;
          }, v.prototype.conjugate = function(t3, e3, r2) {
            if (!(r2 <= 1))
              for (var n2 = 0; n2 < r2 / 2; n2++) {
                var i2 = t3[n2];
                t3[n2] = t3[r2 - n2 - 1], t3[r2 - n2 - 1] = i2, i2 = e3[n2], e3[n2] = -e3[r2 - n2 - 1], e3[r2 - n2 - 1] = -i2;
              }
          }, v.prototype.normalize13b = function(t3, e3) {
            for (var r2 = 0, n2 = 0; n2 < e3 / 2; n2++) {
              var i2 = 8192 * Math.round(t3[2 * n2 + 1] / e3) + Math.round(t3[2 * n2] / e3) + r2;
              t3[n2] = 67108863 & i2, r2 = i2 < 67108864 ? 0 : i2 / 67108864 | 0;
            }
            return t3;
          }, v.prototype.convert13b = function(t3, e3, r2, i2) {
            for (var o2 = 0, a2 = 0; a2 < e3; a2++)
              o2 += 0 | t3[a2], r2[2 * a2] = 8191 & o2, o2 >>>= 13, r2[2 * a2 + 1] = 8191 & o2, o2 >>>= 13;
            for (a2 = 2 * e3; a2 < i2; ++a2)
              r2[a2] = 0;
            n(0 === o2), n(!(-8192 & o2));
          }, v.prototype.stub = function(t3) {
            for (var e3 = new Array(t3), r2 = 0; r2 < t3; r2++)
              e3[r2] = 0;
            return e3;
          }, v.prototype.mulp = function(t3, e3, r2) {
            var n2 = 2 * this.guessLen13b(t3.length, e3.length), i2 = this.makeRBT(n2), o2 = this.stub(n2), a2 = new Array(n2), s2 = new Array(n2), f2 = new Array(n2), h2 = new Array(n2), u2 = new Array(n2), c2 = new Array(n2), d2 = r2.words;
            d2.length = n2, this.convert13b(t3.words, t3.length, a2, n2), this.convert13b(e3.words, e3.length, h2, n2), this.transform(a2, o2, s2, f2, n2, i2), this.transform(h2, o2, u2, c2, n2, i2);
            for (var l2 = 0; l2 < n2; l2++) {
              var p2 = s2[l2] * u2[l2] - f2[l2] * c2[l2];
              f2[l2] = s2[l2] * c2[l2] + f2[l2] * u2[l2], s2[l2] = p2;
            }
            return this.conjugate(s2, f2, n2), this.transform(s2, f2, d2, o2, n2, i2), this.conjugate(d2, o2, n2), this.normalize13b(d2, n2), r2.negative = t3.negative ^ e3.negative, r2.length = t3.length + e3.length, r2._strip();
          }, o.prototype.mul = function(t3) {
            var e3 = new o(null);
            return e3.words = new Array(this.length + t3.length), this.mulTo(t3, e3);
          }, o.prototype.mulf = function(t3) {
            var e3 = new o(null);
            return e3.words = new Array(this.length + t3.length), m(this, t3, e3);
          }, o.prototype.imul = function(t3) {
            return this.clone().mulTo(t3, this);
          }, o.prototype.imuln = function(t3) {
            var e3 = t3 < 0;
            e3 && (t3 = -t3), n("number" == typeof t3), n(t3 < 67108864);
            for (var r2 = 0, i2 = 0; i2 < this.length; i2++) {
              var o2 = (0 | this.words[i2]) * t3, a2 = (67108863 & o2) + (67108863 & r2);
              r2 >>= 26, r2 += o2 / 67108864 | 0, r2 += a2 >>> 26, this.words[i2] = 67108863 & a2;
            }
            return 0 !== r2 && (this.words[i2] = r2, this.length++), e3 ? this.ineg() : this;
          }, o.prototype.muln = function(t3) {
            return this.clone().imuln(t3);
          }, o.prototype.sqr = function() {
            return this.mul(this);
          }, o.prototype.isqr = function() {
            return this.imul(this.clone());
          }, o.prototype.pow = function(t3) {
            var e3 = function(t4) {
              for (var e4 = new Array(t4.bitLength()), r3 = 0; r3 < e4.length; r3++) {
                var n3 = r3 / 26 | 0, i3 = r3 % 26;
                e4[r3] = t4.words[n3] >>> i3 & 1;
              }
              return e4;
            }(t3);
            if (0 === e3.length)
              return new o(1);
            for (var r2 = this, n2 = 0; n2 < e3.length && 0 === e3[n2]; n2++, r2 = r2.sqr())
              ;
            if (++n2 < e3.length)
              for (var i2 = r2.sqr(); n2 < e3.length; n2++, i2 = i2.sqr())
                0 !== e3[n2] && (r2 = r2.mul(i2));
            return r2;
          }, o.prototype.iushln = function(t3) {
            n("number" == typeof t3 && t3 >= 0);
            var e3, r2 = t3 % 26, i2 = (t3 - r2) / 26, o2 = 67108863 >>> 26 - r2 << 26 - r2;
            if (0 !== r2) {
              var a2 = 0;
              for (e3 = 0; e3 < this.length; e3++) {
                var s2 = this.words[e3] & o2, f2 = (0 | this.words[e3]) - s2 << r2;
                this.words[e3] = f2 | a2, a2 = s2 >>> 26 - r2;
              }
              a2 && (this.words[e3] = a2, this.length++);
            }
            if (0 !== i2) {
              for (e3 = this.length - 1; e3 >= 0; e3--)
                this.words[e3 + i2] = this.words[e3];
              for (e3 = 0; e3 < i2; e3++)
                this.words[e3] = 0;
              this.length += i2;
            }
            return this._strip();
          }, o.prototype.ishln = function(t3) {
            return n(0 === this.negative), this.iushln(t3);
          }, o.prototype.iushrn = function(t3, e3, r2) {
            var i2;
            n("number" == typeof t3 && t3 >= 0), i2 = e3 ? (e3 - e3 % 26) / 26 : 0;
            var o2 = t3 % 26, a2 = Math.min((t3 - o2) / 26, this.length), s2 = 67108863 ^ 67108863 >>> o2 << o2, f2 = r2;
            if (i2 -= a2, i2 = Math.max(0, i2), f2) {
              for (var h2 = 0; h2 < a2; h2++)
                f2.words[h2] = this.words[h2];
              f2.length = a2;
            }
            if (0 === a2)
              ;
            else if (this.length > a2)
              for (this.length -= a2, h2 = 0; h2 < this.length; h2++)
                this.words[h2] = this.words[h2 + a2];
            else
              this.words[0] = 0, this.length = 1;
            var u2 = 0;
            for (h2 = this.length - 1; h2 >= 0 && (0 !== u2 || h2 >= i2); h2--) {
              var c2 = 0 | this.words[h2];
              this.words[h2] = u2 << 26 - o2 | c2 >>> o2, u2 = c2 & s2;
            }
            return f2 && 0 !== u2 && (f2.words[f2.length++] = u2), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip();
          }, o.prototype.ishrn = function(t3, e3, r2) {
            return n(0 === this.negative), this.iushrn(t3, e3, r2);
          }, o.prototype.shln = function(t3) {
            return this.clone().ishln(t3);
          }, o.prototype.ushln = function(t3) {
            return this.clone().iushln(t3);
          }, o.prototype.shrn = function(t3) {
            return this.clone().ishrn(t3);
          }, o.prototype.ushrn = function(t3) {
            return this.clone().iushrn(t3);
          }, o.prototype.testn = function(t3) {
            n("number" == typeof t3 && t3 >= 0);
            var e3 = t3 % 26, r2 = (t3 - e3) / 26, i2 = 1 << e3;
            return !(this.length <= r2 || !(this.words[r2] & i2));
          }, o.prototype.imaskn = function(t3) {
            n("number" == typeof t3 && t3 >= 0);
            var e3 = t3 % 26, r2 = (t3 - e3) / 26;
            if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r2)
              return this;
            if (0 !== e3 && r2++, this.length = Math.min(r2, this.length), 0 !== e3) {
              var i2 = 67108863 ^ 67108863 >>> e3 << e3;
              this.words[this.length - 1] &= i2;
            }
            return this._strip();
          }, o.prototype.maskn = function(t3) {
            return this.clone().imaskn(t3);
          }, o.prototype.iaddn = function(t3) {
            return n("number" == typeof t3), n(t3 < 67108864), t3 < 0 ? this.isubn(-t3) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= t3 ? (this.words[0] = t3 - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t3), this.negative = 1, this) : this._iaddn(t3);
          }, o.prototype._iaddn = function(t3) {
            this.words[0] += t3;
            for (var e3 = 0; e3 < this.length && this.words[e3] >= 67108864; e3++)
              this.words[e3] -= 67108864, e3 === this.length - 1 ? this.words[e3 + 1] = 1 : this.words[e3 + 1]++;
            return this.length = Math.max(this.length, e3 + 1), this;
          }, o.prototype.isubn = function(t3) {
            if (n("number" == typeof t3), n(t3 < 67108864), t3 < 0)
              return this.iaddn(-t3);
            if (0 !== this.negative)
              return this.negative = 0, this.iaddn(t3), this.negative = 1, this;
            if (this.words[0] -= t3, 1 === this.length && this.words[0] < 0)
              this.words[0] = -this.words[0], this.negative = 1;
            else
              for (var e3 = 0; e3 < this.length && this.words[e3] < 0; e3++)
                this.words[e3] += 67108864, this.words[e3 + 1] -= 1;
            return this._strip();
          }, o.prototype.addn = function(t3) {
            return this.clone().iaddn(t3);
          }, o.prototype.subn = function(t3) {
            return this.clone().isubn(t3);
          }, o.prototype.iabs = function() {
            return this.negative = 0, this;
          }, o.prototype.abs = function() {
            return this.clone().iabs();
          }, o.prototype._ishlnsubmul = function(t3, e3, r2) {
            var i2, o2, a2 = t3.length + r2;
            this._expand(a2);
            var s2 = 0;
            for (i2 = 0; i2 < t3.length; i2++) {
              o2 = (0 | this.words[i2 + r2]) + s2;
              var f2 = (0 | t3.words[i2]) * e3;
              s2 = ((o2 -= 67108863 & f2) >> 26) - (f2 / 67108864 | 0), this.words[i2 + r2] = 67108863 & o2;
            }
            for (; i2 < this.length - r2; i2++)
              s2 = (o2 = (0 | this.words[i2 + r2]) + s2) >> 26, this.words[i2 + r2] = 67108863 & o2;
            if (0 === s2)
              return this._strip();
            for (n(-1 === s2), s2 = 0, i2 = 0; i2 < this.length; i2++)
              s2 = (o2 = -(0 | this.words[i2]) + s2) >> 26, this.words[i2] = 67108863 & o2;
            return this.negative = 1, this._strip();
          }, o.prototype._wordDiv = function(t3, e3) {
            var r2 = (this.length, t3.length), n2 = this.clone(), i2 = t3, a2 = 0 | i2.words[i2.length - 1];
            0 != (r2 = 26 - this._countBits(a2)) && (i2 = i2.ushln(r2), n2.iushln(r2), a2 = 0 | i2.words[i2.length - 1]);
            var s2, f2 = n2.length - i2.length;
            if ("mod" !== e3) {
              (s2 = new o(null)).length = f2 + 1, s2.words = new Array(s2.length);
              for (var h2 = 0; h2 < s2.length; h2++)
                s2.words[h2] = 0;
            }
            var u2 = n2.clone()._ishlnsubmul(i2, 1, f2);
            0 === u2.negative && (n2 = u2, s2 && (s2.words[f2] = 1));
            for (var c2 = f2 - 1; c2 >= 0; c2--) {
              var d2 = 67108864 * (0 | n2.words[i2.length + c2]) + (0 | n2.words[i2.length + c2 - 1]);
              for (d2 = Math.min(d2 / a2 | 0, 67108863), n2._ishlnsubmul(i2, d2, c2); 0 !== n2.negative; )
                d2--, n2.negative = 0, n2._ishlnsubmul(i2, 1, c2), n2.isZero() || (n2.negative ^= 1);
              s2 && (s2.words[c2] = d2);
            }
            return s2 && s2._strip(), n2._strip(), "div" !== e3 && 0 !== r2 && n2.iushrn(r2), { div: s2 || null, mod: n2 };
          }, o.prototype.divmod = function(t3, e3, r2) {
            return n(!t3.isZero()), this.isZero() ? { div: new o(0), mod: new o(0) } : 0 !== this.negative && 0 === t3.negative ? (s2 = this.neg().divmod(t3, e3), "mod" !== e3 && (i2 = s2.div.neg()), "div" !== e3 && (a2 = s2.mod.neg(), r2 && 0 !== a2.negative && a2.iadd(t3)), { div: i2, mod: a2 }) : 0 === this.negative && 0 !== t3.negative ? (s2 = this.divmod(t3.neg(), e3), "mod" !== e3 && (i2 = s2.div.neg()), { div: i2, mod: s2.mod }) : this.negative & t3.negative ? (s2 = this.neg().divmod(t3.neg(), e3), "div" !== e3 && (a2 = s2.mod.neg(), r2 && 0 !== a2.negative && a2.isub(t3)), { div: s2.div, mod: a2 }) : t3.length > this.length || this.cmp(t3) < 0 ? { div: new o(0), mod: this } : 1 === t3.length ? "div" === e3 ? { div: this.divn(t3.words[0]), mod: null } : "mod" === e3 ? { div: null, mod: new o(this.modrn(t3.words[0])) } : { div: this.divn(t3.words[0]), mod: new o(this.modrn(t3.words[0])) } : this._wordDiv(t3, e3);
            var i2, a2, s2;
          }, o.prototype.div = function(t3) {
            return this.divmod(t3, "div", false).div;
          }, o.prototype.mod = function(t3) {
            return this.divmod(t3, "mod", false).mod;
          }, o.prototype.umod = function(t3) {
            return this.divmod(t3, "mod", true).mod;
          }, o.prototype.divRound = function(t3) {
            var e3 = this.divmod(t3);
            if (e3.mod.isZero())
              return e3.div;
            var r2 = 0 !== e3.div.negative ? e3.mod.isub(t3) : e3.mod, n2 = t3.ushrn(1), i2 = t3.andln(1), o2 = r2.cmp(n2);
            return o2 < 0 || 1 === i2 && 0 === o2 ? e3.div : 0 !== e3.div.negative ? e3.div.isubn(1) : e3.div.iaddn(1);
          }, o.prototype.modrn = function(t3) {
            var e3 = t3 < 0;
            e3 && (t3 = -t3), n(t3 <= 67108863);
            for (var r2 = (1 << 26) % t3, i2 = 0, o2 = this.length - 1; o2 >= 0; o2--)
              i2 = (r2 * i2 + (0 | this.words[o2])) % t3;
            return e3 ? -i2 : i2;
          }, o.prototype.modn = function(t3) {
            return this.modrn(t3);
          }, o.prototype.idivn = function(t3) {
            var e3 = t3 < 0;
            e3 && (t3 = -t3), n(t3 <= 67108863);
            for (var r2 = 0, i2 = this.length - 1; i2 >= 0; i2--) {
              var o2 = (0 | this.words[i2]) + 67108864 * r2;
              this.words[i2] = o2 / t3 | 0, r2 = o2 % t3;
            }
            return this._strip(), e3 ? this.ineg() : this;
          }, o.prototype.divn = function(t3) {
            return this.clone().idivn(t3);
          }, o.prototype.egcd = function(t3) {
            n(0 === t3.negative), n(!t3.isZero());
            var e3 = this, r2 = t3.clone();
            e3 = 0 !== e3.negative ? e3.umod(t3) : e3.clone();
            for (var i2 = new o(1), a2 = new o(0), s2 = new o(0), f2 = new o(1), h2 = 0; e3.isEven() && r2.isEven(); )
              e3.iushrn(1), r2.iushrn(1), ++h2;
            for (var u2 = r2.clone(), c2 = e3.clone(); !e3.isZero(); ) {
              for (var d2 = 0, l2 = 1; !(e3.words[0] & l2) && d2 < 26; ++d2, l2 <<= 1)
                ;
              if (d2 > 0)
                for (e3.iushrn(d2); d2-- > 0; )
                  (i2.isOdd() || a2.isOdd()) && (i2.iadd(u2), a2.isub(c2)), i2.iushrn(1), a2.iushrn(1);
              for (var p2 = 0, b2 = 1; !(r2.words[0] & b2) && p2 < 26; ++p2, b2 <<= 1)
                ;
              if (p2 > 0)
                for (r2.iushrn(p2); p2-- > 0; )
                  (s2.isOdd() || f2.isOdd()) && (s2.iadd(u2), f2.isub(c2)), s2.iushrn(1), f2.iushrn(1);
              e3.cmp(r2) >= 0 ? (e3.isub(r2), i2.isub(s2), a2.isub(f2)) : (r2.isub(e3), s2.isub(i2), f2.isub(a2));
            }
            return { a: s2, b: f2, gcd: r2.iushln(h2) };
          }, o.prototype._invmp = function(t3) {
            n(0 === t3.negative), n(!t3.isZero());
            var e3 = this, r2 = t3.clone();
            e3 = 0 !== e3.negative ? e3.umod(t3) : e3.clone();
            for (var i2, a2 = new o(1), s2 = new o(0), f2 = r2.clone(); e3.cmpn(1) > 0 && r2.cmpn(1) > 0; ) {
              for (var h2 = 0, u2 = 1; !(e3.words[0] & u2) && h2 < 26; ++h2, u2 <<= 1)
                ;
              if (h2 > 0)
                for (e3.iushrn(h2); h2-- > 0; )
                  a2.isOdd() && a2.iadd(f2), a2.iushrn(1);
              for (var c2 = 0, d2 = 1; !(r2.words[0] & d2) && c2 < 26; ++c2, d2 <<= 1)
                ;
              if (c2 > 0)
                for (r2.iushrn(c2); c2-- > 0; )
                  s2.isOdd() && s2.iadd(f2), s2.iushrn(1);
              e3.cmp(r2) >= 0 ? (e3.isub(r2), a2.isub(s2)) : (r2.isub(e3), s2.isub(a2));
            }
            return (i2 = 0 === e3.cmpn(1) ? a2 : s2).cmpn(0) < 0 && i2.iadd(t3), i2;
          }, o.prototype.gcd = function(t3) {
            if (this.isZero())
              return t3.abs();
            if (t3.isZero())
              return this.abs();
            var e3 = this.clone(), r2 = t3.clone();
            e3.negative = 0, r2.negative = 0;
            for (var n2 = 0; e3.isEven() && r2.isEven(); n2++)
              e3.iushrn(1), r2.iushrn(1);
            for (; ; ) {
              for (; e3.isEven(); )
                e3.iushrn(1);
              for (; r2.isEven(); )
                r2.iushrn(1);
              var i2 = e3.cmp(r2);
              if (i2 < 0) {
                var o2 = e3;
                e3 = r2, r2 = o2;
              } else if (0 === i2 || 0 === r2.cmpn(1))
                break;
              e3.isub(r2);
            }
            return r2.iushln(n2);
          }, o.prototype.invm = function(t3) {
            return this.egcd(t3).a.umod(t3);
          }, o.prototype.isEven = function() {
            return !(1 & this.words[0]);
          }, o.prototype.isOdd = function() {
            return !(1 & ~this.words[0]);
          }, o.prototype.andln = function(t3) {
            return this.words[0] & t3;
          }, o.prototype.bincn = function(t3) {
            n("number" == typeof t3);
            var e3 = t3 % 26, r2 = (t3 - e3) / 26, i2 = 1 << e3;
            if (this.length <= r2)
              return this._expand(r2 + 1), this.words[r2] |= i2, this;
            for (var o2 = i2, a2 = r2; 0 !== o2 && a2 < this.length; a2++) {
              var s2 = 0 | this.words[a2];
              o2 = (s2 += o2) >>> 26, s2 &= 67108863, this.words[a2] = s2;
            }
            return 0 !== o2 && (this.words[a2] = o2, this.length++), this;
          }, o.prototype.isZero = function() {
            return 1 === this.length && 0 === this.words[0];
          }, o.prototype.cmpn = function(t3) {
            var e3, r2 = t3 < 0;
            if (0 !== this.negative && !r2)
              return -1;
            if (0 === this.negative && r2)
              return 1;
            if (this._strip(), this.length > 1)
              e3 = 1;
            else {
              r2 && (t3 = -t3), n(t3 <= 67108863, "Number is too big");
              var i2 = 0 | this.words[0];
              e3 = i2 === t3 ? 0 : i2 < t3 ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -e3 : e3;
          }, o.prototype.cmp = function(t3) {
            if (0 !== this.negative && 0 === t3.negative)
              return -1;
            if (0 === this.negative && 0 !== t3.negative)
              return 1;
            var e3 = this.ucmp(t3);
            return 0 !== this.negative ? 0 | -e3 : e3;
          }, o.prototype.ucmp = function(t3) {
            if (this.length > t3.length)
              return 1;
            if (this.length < t3.length)
              return -1;
            for (var e3 = 0, r2 = this.length - 1; r2 >= 0; r2--) {
              var n2 = 0 | this.words[r2], i2 = 0 | t3.words[r2];
              if (n2 !== i2) {
                n2 < i2 ? e3 = -1 : n2 > i2 && (e3 = 1);
                break;
              }
            }
            return e3;
          }, o.prototype.gtn = function(t3) {
            return 1 === this.cmpn(t3);
          }, o.prototype.gt = function(t3) {
            return 1 === this.cmp(t3);
          }, o.prototype.gten = function(t3) {
            return this.cmpn(t3) >= 0;
          }, o.prototype.gte = function(t3) {
            return this.cmp(t3) >= 0;
          }, o.prototype.ltn = function(t3) {
            return -1 === this.cmpn(t3);
          }, o.prototype.lt = function(t3) {
            return -1 === this.cmp(t3);
          }, o.prototype.lten = function(t3) {
            return this.cmpn(t3) <= 0;
          }, o.prototype.lte = function(t3) {
            return this.cmp(t3) <= 0;
          }, o.prototype.eqn = function(t3) {
            return 0 === this.cmpn(t3);
          }, o.prototype.eq = function(t3) {
            return 0 === this.cmp(t3);
          }, o.red = function(t3) {
            return new k(t3);
          }, o.prototype.toRed = function(t3) {
            return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), t3.convertTo(this)._forceRed(t3);
          }, o.prototype.fromRed = function() {
            return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
          }, o.prototype._forceRed = function(t3) {
            return this.red = t3, this;
          }, o.prototype.forceRed = function(t3) {
            return n(!this.red, "Already a number in reduction context"), this._forceRed(t3);
          }, o.prototype.redAdd = function(t3) {
            return n(this.red, "redAdd works only with red numbers"), this.red.add(this, t3);
          }, o.prototype.redIAdd = function(t3) {
            return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t3);
          }, o.prototype.redSub = function(t3) {
            return n(this.red, "redSub works only with red numbers"), this.red.sub(this, t3);
          }, o.prototype.redISub = function(t3) {
            return n(this.red, "redISub works only with red numbers"), this.red.isub(this, t3);
          }, o.prototype.redShl = function(t3) {
            return n(this.red, "redShl works only with red numbers"), this.red.shl(this, t3);
          }, o.prototype.redMul = function(t3) {
            return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t3), this.red.mul(this, t3);
          }, o.prototype.redIMul = function(t3) {
            return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t3), this.red.imul(this, t3);
          }, o.prototype.redSqr = function() {
            return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
          }, o.prototype.redISqr = function() {
            return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
          }, o.prototype.redSqrt = function() {
            return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
          }, o.prototype.redInvm = function() {
            return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
          }, o.prototype.redNeg = function() {
            return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
          }, o.prototype.redPow = function(t3) {
            return n(this.red && !t3.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t3);
          };
          var w = { k256: null, p224: null, p192: null, p25519: null };
          function _(t3, e3) {
            this.name = t3, this.p = new o(e3, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
          }
          function S() {
            _.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
          }
          function E() {
            _.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
          }
          function M() {
            _.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
          }
          function A() {
            _.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
          }
          function k(t3) {
            if ("string" == typeof t3) {
              var e3 = o._prime(t3);
              this.m = e3.p, this.prime = e3;
            } else
              n(t3.gtn(1), "modulus must be greater than 1"), this.m = t3, this.prime = null;
          }
          function B(t3) {
            k.call(this, t3), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
          }
          _.prototype._tmp = function() {
            var t3 = new o(null);
            return t3.words = new Array(Math.ceil(this.n / 13)), t3;
          }, _.prototype.ireduce = function(t3) {
            var e3, r2 = t3;
            do {
              this.split(r2, this.tmp), e3 = (r2 = (r2 = this.imulK(r2)).iadd(this.tmp)).bitLength();
            } while (e3 > this.n);
            var n2 = e3 < this.n ? -1 : r2.ucmp(this.p);
            return 0 === n2 ? (r2.words[0] = 0, r2.length = 1) : n2 > 0 ? r2.isub(this.p) : void 0 !== r2.strip ? r2.strip() : r2._strip(), r2;
          }, _.prototype.split = function(t3, e3) {
            t3.iushrn(this.n, 0, e3);
          }, _.prototype.imulK = function(t3) {
            return t3.imul(this.k);
          }, i(S, _), S.prototype.split = function(t3, e3) {
            for (var r2 = 4194303, n2 = Math.min(t3.length, 9), i2 = 0; i2 < n2; i2++)
              e3.words[i2] = t3.words[i2];
            if (e3.length = n2, t3.length <= 9)
              return t3.words[0] = 0, void (t3.length = 1);
            var o2 = t3.words[9];
            for (e3.words[e3.length++] = o2 & r2, i2 = 10; i2 < t3.length; i2++) {
              var a2 = 0 | t3.words[i2];
              t3.words[i2 - 10] = (a2 & r2) << 4 | o2 >>> 22, o2 = a2;
            }
            o2 >>>= 22, t3.words[i2 - 10] = o2, 0 === o2 && t3.length > 10 ? t3.length -= 10 : t3.length -= 9;
          }, S.prototype.imulK = function(t3) {
            t3.words[t3.length] = 0, t3.words[t3.length + 1] = 0, t3.length += 2;
            for (var e3 = 0, r2 = 0; r2 < t3.length; r2++) {
              var n2 = 0 | t3.words[r2];
              e3 += 977 * n2, t3.words[r2] = 67108863 & e3, e3 = 64 * n2 + (e3 / 67108864 | 0);
            }
            return 0 === t3.words[t3.length - 1] && (t3.length--, 0 === t3.words[t3.length - 1] && t3.length--), t3;
          }, i(E, _), i(M, _), i(A, _), A.prototype.imulK = function(t3) {
            for (var e3 = 0, r2 = 0; r2 < t3.length; r2++) {
              var n2 = 19 * (0 | t3.words[r2]) + e3, i2 = 67108863 & n2;
              n2 >>>= 26, t3.words[r2] = i2, e3 = n2;
            }
            return 0 !== e3 && (t3.words[t3.length++] = e3), t3;
          }, o._prime = function(t3) {
            if (w[t3])
              return w[t3];
            var e3;
            if ("k256" === t3)
              e3 = new S();
            else if ("p224" === t3)
              e3 = new E();
            else if ("p192" === t3)
              e3 = new M();
            else {
              if ("p25519" !== t3)
                throw new Error("Unknown prime " + t3);
              e3 = new A();
            }
            return w[t3] = e3, e3;
          }, k.prototype._verify1 = function(t3) {
            n(0 === t3.negative, "red works only with positives"), n(t3.red, "red works only with red numbers");
          }, k.prototype._verify2 = function(t3, e3) {
            n(!(t3.negative | e3.negative), "red works only with positives"), n(t3.red && t3.red === e3.red, "red works only with red numbers");
          }, k.prototype.imod = function(t3) {
            return this.prime ? this.prime.ireduce(t3)._forceRed(this) : (u(t3, t3.umod(this.m)._forceRed(this)), t3);
          }, k.prototype.neg = function(t3) {
            return t3.isZero() ? t3.clone() : this.m.sub(t3)._forceRed(this);
          }, k.prototype.add = function(t3, e3) {
            this._verify2(t3, e3);
            var r2 = t3.add(e3);
            return r2.cmp(this.m) >= 0 && r2.isub(this.m), r2._forceRed(this);
          }, k.prototype.iadd = function(t3, e3) {
            this._verify2(t3, e3);
            var r2 = t3.iadd(e3);
            return r2.cmp(this.m) >= 0 && r2.isub(this.m), r2;
          }, k.prototype.sub = function(t3, e3) {
            this._verify2(t3, e3);
            var r2 = t3.sub(e3);
            return r2.cmpn(0) < 0 && r2.iadd(this.m), r2._forceRed(this);
          }, k.prototype.isub = function(t3, e3) {
            this._verify2(t3, e3);
            var r2 = t3.isub(e3);
            return r2.cmpn(0) < 0 && r2.iadd(this.m), r2;
          }, k.prototype.shl = function(t3, e3) {
            return this._verify1(t3), this.imod(t3.ushln(e3));
          }, k.prototype.imul = function(t3, e3) {
            return this._verify2(t3, e3), this.imod(t3.imul(e3));
          }, k.prototype.mul = function(t3, e3) {
            return this._verify2(t3, e3), this.imod(t3.mul(e3));
          }, k.prototype.isqr = function(t3) {
            return this.imul(t3, t3.clone());
          }, k.prototype.sqr = function(t3) {
            return this.mul(t3, t3);
          }, k.prototype.sqrt = function(t3) {
            if (t3.isZero())
              return t3.clone();
            var e3 = this.m.andln(3);
            if (n(e3 % 2 == 1), 3 === e3) {
              var r2 = this.m.add(new o(1)).iushrn(2);
              return this.pow(t3, r2);
            }
            for (var i2 = this.m.subn(1), a2 = 0; !i2.isZero() && 0 === i2.andln(1); )
              a2++, i2.iushrn(1);
            n(!i2.isZero());
            var s2 = new o(1).toRed(this), f2 = s2.redNeg(), h2 = this.m.subn(1).iushrn(1), u2 = this.m.bitLength();
            for (u2 = new o(2 * u2 * u2).toRed(this); 0 !== this.pow(u2, h2).cmp(f2); )
              u2.redIAdd(f2);
            for (var c2 = this.pow(u2, i2), d2 = this.pow(t3, i2.addn(1).iushrn(1)), l2 = this.pow(t3, i2), p2 = a2; 0 !== l2.cmp(s2); ) {
              for (var b2 = l2, y2 = 0; 0 !== b2.cmp(s2); y2++)
                b2 = b2.redSqr();
              n(y2 < p2);
              var g2 = this.pow(c2, new o(1).iushln(p2 - y2 - 1));
              d2 = d2.redMul(g2), c2 = g2.redSqr(), l2 = l2.redMul(c2), p2 = y2;
            }
            return d2;
          }, k.prototype.invm = function(t3) {
            var e3 = t3._invmp(this.m);
            return 0 !== e3.negative ? (e3.negative = 0, this.imod(e3).redNeg()) : this.imod(e3);
          }, k.prototype.pow = function(t3, e3) {
            if (e3.isZero())
              return new o(1).toRed(this);
            if (0 === e3.cmpn(1))
              return t3.clone();
            var r2 = new Array(16);
            r2[0] = new o(1).toRed(this), r2[1] = t3;
            for (var n2 = 2; n2 < r2.length; n2++)
              r2[n2] = this.mul(r2[n2 - 1], t3);
            var i2 = r2[0], a2 = 0, s2 = 0, f2 = e3.bitLength() % 26;
            for (0 === f2 && (f2 = 26), n2 = e3.length - 1; n2 >= 0; n2--) {
              for (var h2 = e3.words[n2], u2 = f2 - 1; u2 >= 0; u2--) {
                var c2 = h2 >> u2 & 1;
                i2 !== r2[0] && (i2 = this.sqr(i2)), 0 !== c2 || 0 !== a2 ? (a2 <<= 1, a2 |= c2, (4 == ++s2 || 0 === n2 && 0 === u2) && (i2 = this.mul(i2, r2[a2]), s2 = 0, a2 = 0)) : s2 = 0;
              }
              f2 = 26;
            }
            return i2;
          }, k.prototype.convertTo = function(t3) {
            var e3 = t3.umod(this.m);
            return e3 === t3 ? e3.clone() : e3;
          }, k.prototype.convertFrom = function(t3) {
            var e3 = t3.clone();
            return e3.red = null, e3;
          }, o.mont = function(t3) {
            return new B(t3);
          }, i(B, k), B.prototype.convertTo = function(t3) {
            return this.imod(t3.ushln(this.shift));
          }, B.prototype.convertFrom = function(t3) {
            var e3 = this.imod(t3.mul(this.rinv));
            return e3.red = null, e3;
          }, B.prototype.imul = function(t3, e3) {
            if (t3.isZero() || e3.isZero())
              return t3.words[0] = 0, t3.length = 1, t3;
            var r2 = t3.imul(e3), n2 = r2.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), i2 = r2.isub(n2).iushrn(this.shift), o2 = i2;
            return i2.cmp(this.m) >= 0 ? o2 = i2.isub(this.m) : i2.cmpn(0) < 0 && (o2 = i2.iadd(this.m)), o2._forceRed(this);
          }, B.prototype.mul = function(t3, e3) {
            if (t3.isZero() || e3.isZero())
              return new o(0)._forceRed(this);
            var r2 = t3.mul(e3), n2 = r2.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), i2 = r2.isub(n2).iushrn(this.shift), a2 = i2;
            return i2.cmp(this.m) >= 0 ? a2 = i2.isub(this.m) : i2.cmpn(0) < 0 && (a2 = i2.iadd(this.m)), a2._forceRed(this);
          }, B.prototype.invm = function(t3) {
            return this.imod(t3._invmp(this.m).mul(this.r2))._forceRed(this);
          };
        }(t = r.nmd(t), this);
      }, 3569: (t, e, r) => {
        var n;
        function i(t2) {
          this.rand = t2;
        }
        if (t.exports = function(t2) {
          return n || (n = new i(null)), n.generate(t2);
        }, t.exports.Rand = i, i.prototype.generate = function(t2) {
          return this._rand(t2);
        }, i.prototype._rand = function(t2) {
          if (this.rand.getBytes)
            return this.rand.getBytes(t2);
          for (var e2 = new Uint8Array(t2), r2 = 0; r2 < e2.length; r2++)
            e2[r2] = this.rand.getByte();
          return e2;
        }, "object" == typeof self)
          self.crypto && self.crypto.getRandomValues ? i.prototype._rand = function(t2) {
            var e2 = new Uint8Array(t2);
            return self.crypto.getRandomValues(e2), e2;
          } : self.msCrypto && self.msCrypto.getRandomValues ? i.prototype._rand = function(t2) {
            var e2 = new Uint8Array(t2);
            return self.msCrypto.getRandomValues(e2), e2;
          } : "object" == typeof window && (i.prototype._rand = function() {
            throw new Error("Not implemented yet");
          });
        else
          try {
            var o = r(9780);
            if ("function" != typeof o.randomBytes)
              throw new Error("Not supported");
            i.prototype._rand = function(t2) {
              return o.randomBytes(t2);
            };
          } catch (t2) {
          }
      }, 9979: (t, e, r) => {
        var n = r(6671).Buffer;
        function i(t2) {
          n.isBuffer(t2) || (t2 = n.from(t2));
          for (var e2 = t2.length / 4 | 0, r2 = new Array(e2), i2 = 0; i2 < e2; i2++)
            r2[i2] = t2.readUInt32BE(4 * i2);
          return r2;
        }
        function o(t2) {
          for (; 0 < t2.length; t2++)
            t2[0] = 0;
        }
        function a(t2, e2, r2, n2, i2) {
          for (var o2, a2, s2, f2, h2 = r2[0], u = r2[1], c = r2[2], d = r2[3], l = t2[0] ^ e2[0], p = t2[1] ^ e2[1], b = t2[2] ^ e2[2], y = t2[3] ^ e2[3], g = 4, m = 1; m < i2; m++)
            o2 = h2[l >>> 24] ^ u[p >>> 16 & 255] ^ c[b >>> 8 & 255] ^ d[255 & y] ^ e2[g++], a2 = h2[p >>> 24] ^ u[b >>> 16 & 255] ^ c[y >>> 8 & 255] ^ d[255 & l] ^ e2[g++], s2 = h2[b >>> 24] ^ u[y >>> 16 & 255] ^ c[l >>> 8 & 255] ^ d[255 & p] ^ e2[g++], f2 = h2[y >>> 24] ^ u[l >>> 16 & 255] ^ c[p >>> 8 & 255] ^ d[255 & b] ^ e2[g++], l = o2, p = a2, b = s2, y = f2;
          return o2 = (n2[l >>> 24] << 24 | n2[p >>> 16 & 255] << 16 | n2[b >>> 8 & 255] << 8 | n2[255 & y]) ^ e2[g++], a2 = (n2[p >>> 24] << 24 | n2[b >>> 16 & 255] << 16 | n2[y >>> 8 & 255] << 8 | n2[255 & l]) ^ e2[g++], s2 = (n2[b >>> 24] << 24 | n2[y >>> 16 & 255] << 16 | n2[l >>> 8 & 255] << 8 | n2[255 & p]) ^ e2[g++], f2 = (n2[y >>> 24] << 24 | n2[l >>> 16 & 255] << 16 | n2[p >>> 8 & 255] << 8 | n2[255 & b]) ^ e2[g++], [o2 >>>= 0, a2 >>>= 0, s2 >>>= 0, f2 >>>= 0];
        }
        var s = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], f = function() {
          for (var t2 = new Array(256), e2 = 0; e2 < 256; e2++)
            t2[e2] = e2 < 128 ? e2 << 1 : e2 << 1 ^ 283;
          for (var r2 = [], n2 = [], i2 = [[], [], [], []], o2 = [[], [], [], []], a2 = 0, s2 = 0, f2 = 0; f2 < 256; ++f2) {
            var h2 = s2 ^ s2 << 1 ^ s2 << 2 ^ s2 << 3 ^ s2 << 4;
            h2 = h2 >>> 8 ^ 255 & h2 ^ 99, r2[a2] = h2, n2[h2] = a2;
            var u = t2[a2], c = t2[u], d = t2[c], l = 257 * t2[h2] ^ 16843008 * h2;
            i2[0][a2] = l << 24 | l >>> 8, i2[1][a2] = l << 16 | l >>> 16, i2[2][a2] = l << 8 | l >>> 24, i2[3][a2] = l, l = 16843009 * d ^ 65537 * c ^ 257 * u ^ 16843008 * a2, o2[0][h2] = l << 24 | l >>> 8, o2[1][h2] = l << 16 | l >>> 16, o2[2][h2] = l << 8 | l >>> 24, o2[3][h2] = l, 0 === a2 ? a2 = s2 = 1 : (a2 = u ^ t2[t2[t2[d ^ u]]], s2 ^= t2[t2[s2]]);
          }
          return { SBOX: r2, INV_SBOX: n2, SUB_MIX: i2, INV_SUB_MIX: o2 };
        }();
        function h(t2) {
          this._key = i(t2), this._reset();
        }
        h.blockSize = 16, h.keySize = 32, h.prototype.blockSize = h.blockSize, h.prototype.keySize = h.keySize, h.prototype._reset = function() {
          for (var t2 = this._key, e2 = t2.length, r2 = e2 + 6, n2 = 4 * (r2 + 1), i2 = [], o2 = 0; o2 < e2; o2++)
            i2[o2] = t2[o2];
          for (o2 = e2; o2 < n2; o2++) {
            var a2 = i2[o2 - 1];
            o2 % e2 == 0 ? (a2 = a2 << 8 | a2 >>> 24, a2 = f.SBOX[a2 >>> 24] << 24 | f.SBOX[a2 >>> 16 & 255] << 16 | f.SBOX[a2 >>> 8 & 255] << 8 | f.SBOX[255 & a2], a2 ^= s[o2 / e2 | 0] << 24) : e2 > 6 && o2 % e2 == 4 && (a2 = f.SBOX[a2 >>> 24] << 24 | f.SBOX[a2 >>> 16 & 255] << 16 | f.SBOX[a2 >>> 8 & 255] << 8 | f.SBOX[255 & a2]), i2[o2] = i2[o2 - e2] ^ a2;
          }
          for (var h2 = [], u = 0; u < n2; u++) {
            var c = n2 - u, d = i2[c - (u % 4 ? 0 : 4)];
            h2[u] = u < 4 || c <= 4 ? d : f.INV_SUB_MIX[0][f.SBOX[d >>> 24]] ^ f.INV_SUB_MIX[1][f.SBOX[d >>> 16 & 255]] ^ f.INV_SUB_MIX[2][f.SBOX[d >>> 8 & 255]] ^ f.INV_SUB_MIX[3][f.SBOX[255 & d]];
          }
          this._nRounds = r2, this._keySchedule = i2, this._invKeySchedule = h2;
        }, h.prototype.encryptBlockRaw = function(t2) {
          return a(t2 = i(t2), this._keySchedule, f.SUB_MIX, f.SBOX, this._nRounds);
        }, h.prototype.encryptBlock = function(t2) {
          var e2 = this.encryptBlockRaw(t2), r2 = n.allocUnsafe(16);
          return r2.writeUInt32BE(e2[0], 0), r2.writeUInt32BE(e2[1], 4), r2.writeUInt32BE(e2[2], 8), r2.writeUInt32BE(e2[3], 12), r2;
        }, h.prototype.decryptBlock = function(t2) {
          var e2 = (t2 = i(t2))[1];
          t2[1] = t2[3], t2[3] = e2;
          var r2 = a(t2, this._invKeySchedule, f.INV_SUB_MIX, f.INV_SBOX, this._nRounds), o2 = n.allocUnsafe(16);
          return o2.writeUInt32BE(r2[0], 0), o2.writeUInt32BE(r2[3], 4), o2.writeUInt32BE(r2[2], 8), o2.writeUInt32BE(r2[1], 12), o2;
        }, h.prototype.scrub = function() {
          o(this._keySchedule), o(this._invKeySchedule), o(this._key);
        }, t.exports.AES = h;
      }, 1767: (t, e, r) => {
        var n = r(9979), i = r(6671).Buffer, o = r(9526), a = r(6192), s = r(6097), f = r(1931), h = r(9209);
        function u(t2, e2, r2, a2) {
          o.call(this);
          var f2 = i.alloc(4, 0);
          this._cipher = new n.AES(e2);
          var u2 = this._cipher.encryptBlock(f2);
          this._ghash = new s(u2), r2 = function(t3, e3, r3) {
            if (12 === e3.length)
              return t3._finID = i.concat([e3, i.from([0, 0, 0, 1])]), i.concat([e3, i.from([0, 0, 0, 2])]);
            var n2 = new s(r3), o2 = e3.length, a3 = o2 % 16;
            n2.update(e3), a3 && (a3 = 16 - a3, n2.update(i.alloc(a3, 0))), n2.update(i.alloc(8, 0));
            var f3 = 8 * o2, u3 = i.alloc(8);
            u3.writeUIntBE(f3, 0, 8), n2.update(u3), t3._finID = n2.state;
            var c = i.from(t3._finID);
            return h(c), c;
          }(this, r2, u2), this._prev = i.from(r2), this._cache = i.allocUnsafe(0), this._secCache = i.allocUnsafe(0), this._decrypt = a2, this._alen = 0, this._len = 0, this._mode = t2, this._authTag = null, this._called = false;
        }
        a(u, o), u.prototype._update = function(t2) {
          if (!this._called && this._alen) {
            var e2 = 16 - this._alen % 16;
            e2 < 16 && (e2 = i.alloc(e2, 0), this._ghash.update(e2));
          }
          this._called = true;
          var r2 = this._mode.encrypt(this, t2);
          return this._decrypt ? this._ghash.update(t2) : this._ghash.update(r2), this._len += t2.length, r2;
        }, u.prototype._final = function() {
          if (this._decrypt && !this._authTag)
            throw new Error("Unsupported state or unable to authenticate data");
          var t2 = f(this._ghash.final(8 * this._alen, 8 * this._len), this._cipher.encryptBlock(this._finID));
          if (this._decrypt && function(t3, e2) {
            var r2 = 0;
            t3.length !== e2.length && r2++;
            for (var n2 = Math.min(t3.length, e2.length), i2 = 0; i2 < n2; ++i2)
              r2 += t3[i2] ^ e2[i2];
            return r2;
          }(t2, this._authTag))
            throw new Error("Unsupported state or unable to authenticate data");
          this._authTag = t2, this._cipher.scrub();
        }, u.prototype.getAuthTag = function() {
          if (this._decrypt || !i.isBuffer(this._authTag))
            throw new Error("Attempting to get auth tag in unsupported state");
          return this._authTag;
        }, u.prototype.setAuthTag = function(t2) {
          if (!this._decrypt)
            throw new Error("Attempting to set auth tag in unsupported state");
          this._authTag = t2;
        }, u.prototype.setAAD = function(t2) {
          if (this._called)
            throw new Error("Attempting to set AAD in unsupported state");
          this._ghash.update(t2), this._alen += t2.length;
        }, t.exports = u;
      }, 2592: (t, e, r) => {
        var n = r(6042), i = r(6770), o = r(9072);
        e.createCipher = e.Cipher = n.createCipher, e.createCipheriv = e.Cipheriv = n.createCipheriv, e.createDecipher = e.Decipher = i.createDecipher, e.createDecipheriv = e.Decipheriv = i.createDecipheriv, e.listCiphers = e.getCiphers = function() {
          return Object.keys(o);
        };
      }, 6770: (t, e, r) => {
        var n = r(1767), i = r(6671).Buffer, o = r(4787), a = r(2849), s = r(9526), f = r(9979), h = r(9651);
        function u(t2, e2, r2) {
          s.call(this), this._cache = new c(), this._last = void 0, this._cipher = new f.AES(e2), this._prev = i.from(r2), this._mode = t2, this._autopadding = true;
        }
        function c() {
          this.cache = i.allocUnsafe(0);
        }
        function d(t2, e2, r2) {
          var s2 = o[t2.toLowerCase()];
          if (!s2)
            throw new TypeError("invalid suite type");
          if ("string" == typeof r2 && (r2 = i.from(r2)), "GCM" !== s2.mode && r2.length !== s2.iv)
            throw new TypeError("invalid iv length " + r2.length);
          if ("string" == typeof e2 && (e2 = i.from(e2)), e2.length !== s2.key / 8)
            throw new TypeError("invalid key length " + e2.length);
          return "stream" === s2.type ? new a(s2.module, e2, r2, true) : "auth" === s2.type ? new n(s2.module, e2, r2, true) : new u(s2.module, e2, r2);
        }
        r(6192)(u, s), u.prototype._update = function(t2) {
          var e2, r2;
          this._cache.add(t2);
          for (var n2 = []; e2 = this._cache.get(this._autopadding); )
            r2 = this._mode.decrypt(this, e2), n2.push(r2);
          return i.concat(n2);
        }, u.prototype._final = function() {
          var t2 = this._cache.flush();
          if (this._autopadding)
            return function(t3) {
              var e2 = t3[15];
              if (e2 < 1 || e2 > 16)
                throw new Error("unable to decrypt data");
              for (var r2 = -1; ++r2 < e2; )
                if (t3[r2 + (16 - e2)] !== e2)
                  throw new Error("unable to decrypt data");
              if (16 !== e2)
                return t3.slice(0, 16 - e2);
            }(this._mode.decrypt(this, t2));
          if (t2)
            throw new Error("data not multiple of block length");
        }, u.prototype.setAutoPadding = function(t2) {
          return this._autopadding = !!t2, this;
        }, c.prototype.add = function(t2) {
          this.cache = i.concat([this.cache, t2]);
        }, c.prototype.get = function(t2) {
          var e2;
          if (t2) {
            if (this.cache.length > 16)
              return e2 = this.cache.slice(0, 16), this.cache = this.cache.slice(16), e2;
          } else if (this.cache.length >= 16)
            return e2 = this.cache.slice(0, 16), this.cache = this.cache.slice(16), e2;
          return null;
        }, c.prototype.flush = function() {
          if (this.cache.length)
            return this.cache;
        }, e.createDecipher = function(t2, e2) {
          var r2 = o[t2.toLowerCase()];
          if (!r2)
            throw new TypeError("invalid suite type");
          var n2 = h(e2, false, r2.key, r2.iv);
          return d(t2, n2.key, n2.iv);
        }, e.createDecipheriv = d;
      }, 6042: (t, e, r) => {
        var n = r(4787), i = r(1767), o = r(6671).Buffer, a = r(2849), s = r(9526), f = r(9979), h = r(9651);
        function u(t2, e2, r2) {
          s.call(this), this._cache = new d(), this._cipher = new f.AES(e2), this._prev = o.from(r2), this._mode = t2, this._autopadding = true;
        }
        r(6192)(u, s), u.prototype._update = function(t2) {
          var e2, r2;
          this._cache.add(t2);
          for (var n2 = []; e2 = this._cache.get(); )
            r2 = this._mode.encrypt(this, e2), n2.push(r2);
          return o.concat(n2);
        };
        var c = o.alloc(16, 16);
        function d() {
          this.cache = o.allocUnsafe(0);
        }
        function l(t2, e2, r2) {
          var s2 = n[t2.toLowerCase()];
          if (!s2)
            throw new TypeError("invalid suite type");
          if ("string" == typeof e2 && (e2 = o.from(e2)), e2.length !== s2.key / 8)
            throw new TypeError("invalid key length " + e2.length);
          if ("string" == typeof r2 && (r2 = o.from(r2)), "GCM" !== s2.mode && r2.length !== s2.iv)
            throw new TypeError("invalid iv length " + r2.length);
          return "stream" === s2.type ? new a(s2.module, e2, r2) : "auth" === s2.type ? new i(s2.module, e2, r2) : new u(s2.module, e2, r2);
        }
        u.prototype._final = function() {
          var t2 = this._cache.flush();
          if (this._autopadding)
            return t2 = this._mode.encrypt(this, t2), this._cipher.scrub(), t2;
          if (!t2.equals(c))
            throw this._cipher.scrub(), new Error("data not multiple of block length");
        }, u.prototype.setAutoPadding = function(t2) {
          return this._autopadding = !!t2, this;
        }, d.prototype.add = function(t2) {
          this.cache = o.concat([this.cache, t2]);
        }, d.prototype.get = function() {
          if (this.cache.length > 15) {
            var t2 = this.cache.slice(0, 16);
            return this.cache = this.cache.slice(16), t2;
          }
          return null;
        }, d.prototype.flush = function() {
          for (var t2 = 16 - this.cache.length, e2 = o.allocUnsafe(t2), r2 = -1; ++r2 < t2; )
            e2.writeUInt8(t2, r2);
          return o.concat([this.cache, e2]);
        }, e.createCipheriv = l, e.createCipher = function(t2, e2) {
          var r2 = n[t2.toLowerCase()];
          if (!r2)
            throw new TypeError("invalid suite type");
          var i2 = h(e2, false, r2.key, r2.iv);
          return l(t2, i2.key, i2.iv);
        };
      }, 6097: (t, e, r) => {
        var n = r(6671).Buffer, i = n.alloc(16, 0);
        function o(t2) {
          var e2 = n.allocUnsafe(16);
          return e2.writeUInt32BE(t2[0] >>> 0, 0), e2.writeUInt32BE(t2[1] >>> 0, 4), e2.writeUInt32BE(t2[2] >>> 0, 8), e2.writeUInt32BE(t2[3] >>> 0, 12), e2;
        }
        function a(t2) {
          this.h = t2, this.state = n.alloc(16, 0), this.cache = n.allocUnsafe(0);
        }
        a.prototype.ghash = function(t2) {
          for (var e2 = -1; ++e2 < t2.length; )
            this.state[e2] ^= t2[e2];
          this._multiply();
        }, a.prototype._multiply = function() {
          for (var t2, e2, r2, n2 = [(t2 = this.h).readUInt32BE(0), t2.readUInt32BE(4), t2.readUInt32BE(8), t2.readUInt32BE(12)], i2 = [0, 0, 0, 0], a2 = -1; ++a2 < 128; ) {
            for (!!(this.state[~~(a2 / 8)] & 1 << 7 - a2 % 8) && (i2[0] ^= n2[0], i2[1] ^= n2[1], i2[2] ^= n2[2], i2[3] ^= n2[3]), r2 = !!(1 & n2[3]), e2 = 3; e2 > 0; e2--)
              n2[e2] = n2[e2] >>> 1 | (1 & n2[e2 - 1]) << 31;
            n2[0] = n2[0] >>> 1, r2 && (n2[0] = n2[0] ^ 225 << 24);
          }
          this.state = o(i2);
        }, a.prototype.update = function(t2) {
          var e2;
          for (this.cache = n.concat([this.cache, t2]); this.cache.length >= 16; )
            e2 = this.cache.slice(0, 16), this.cache = this.cache.slice(16), this.ghash(e2);
        }, a.prototype.final = function(t2, e2) {
          return this.cache.length && this.ghash(n.concat([this.cache, i], 16)), this.ghash(o([0, t2, 0, e2])), this.state;
        }, t.exports = a;
      }, 9209: (t) => {
        t.exports = function(t2) {
          for (var e, r = t2.length; r--; ) {
            if (255 !== (e = t2.readUInt8(r))) {
              e++, t2.writeUInt8(e, r);
              break;
            }
            t2.writeUInt8(0, r);
          }
        };
      }, 1689: (t, e, r) => {
        var n = r(1931);
        e.encrypt = function(t2, e2) {
          var r2 = n(e2, t2._prev);
          return t2._prev = t2._cipher.encryptBlock(r2), t2._prev;
        }, e.decrypt = function(t2, e2) {
          var r2 = t2._prev;
          t2._prev = e2;
          var i = t2._cipher.decryptBlock(e2);
          return n(i, r2);
        };
      }, 3518: (t, e, r) => {
        var n = r(6671).Buffer, i = r(1931);
        function o(t2, e2, r2) {
          var o2 = e2.length, a = i(e2, t2._cache);
          return t2._cache = t2._cache.slice(o2), t2._prev = n.concat([t2._prev, r2 ? e2 : a]), a;
        }
        e.encrypt = function(t2, e2, r2) {
          for (var i2, a = n.allocUnsafe(0); e2.length; ) {
            if (0 === t2._cache.length && (t2._cache = t2._cipher.encryptBlock(t2._prev), t2._prev = n.allocUnsafe(0)), !(t2._cache.length <= e2.length)) {
              a = n.concat([a, o(t2, e2, r2)]);
              break;
            }
            i2 = t2._cache.length, a = n.concat([a, o(t2, e2.slice(0, i2), r2)]), e2 = e2.slice(i2);
          }
          return a;
        };
      }, 7779: (t, e, r) => {
        var n = r(6671).Buffer;
        function i(t2, e2, r2) {
          for (var n2, i2, a = -1, s = 0; ++a < 8; )
            n2 = e2 & 1 << 7 - a ? 128 : 0, s += (128 & (i2 = t2._cipher.encryptBlock(t2._prev)[0] ^ n2)) >> a % 8, t2._prev = o(t2._prev, r2 ? n2 : i2);
          return s;
        }
        function o(t2, e2) {
          var r2 = t2.length, i2 = -1, o2 = n.allocUnsafe(t2.length);
          for (t2 = n.concat([t2, n.from([e2])]); ++i2 < r2; )
            o2[i2] = t2[i2] << 1 | t2[i2 + 1] >> 7;
          return o2;
        }
        e.encrypt = function(t2, e2, r2) {
          for (var o2 = e2.length, a = n.allocUnsafe(o2), s = -1; ++s < o2; )
            a[s] = i(t2, e2[s], r2);
          return a;
        };
      }, 6180: (t, e, r) => {
        var n = r(6671).Buffer;
        function i(t2, e2, r2) {
          var i2 = t2._cipher.encryptBlock(t2._prev)[0] ^ e2;
          return t2._prev = n.concat([t2._prev.slice(1), n.from([r2 ? e2 : i2])]), i2;
        }
        e.encrypt = function(t2, e2, r2) {
          for (var o = e2.length, a = n.allocUnsafe(o), s = -1; ++s < o; )
            a[s] = i(t2, e2[s], r2);
          return a;
        };
      }, 6316: (t, e, r) => {
        var n = r(1931), i = r(6671).Buffer, o = r(9209);
        function a(t2) {
          var e2 = t2._cipher.encryptBlockRaw(t2._prev);
          return o(t2._prev), e2;
        }
        e.encrypt = function(t2, e2) {
          var r2 = Math.ceil(e2.length / 16), o2 = t2._cache.length;
          t2._cache = i.concat([t2._cache, i.allocUnsafe(16 * r2)]);
          for (var s = 0; s < r2; s++) {
            var f = a(t2), h = o2 + 16 * s;
            t2._cache.writeUInt32BE(f[0], h + 0), t2._cache.writeUInt32BE(f[1], h + 4), t2._cache.writeUInt32BE(f[2], h + 8), t2._cache.writeUInt32BE(f[3], h + 12);
          }
          var u = t2._cache.slice(0, e2.length);
          return t2._cache = t2._cache.slice(e2.length), n(e2, u);
        };
      }, 8597: (t, e) => {
        e.encrypt = function(t2, e2) {
          return t2._cipher.encryptBlock(e2);
        }, e.decrypt = function(t2, e2) {
          return t2._cipher.decryptBlock(e2);
        };
      }, 4787: (t, e, r) => {
        var n = { ECB: r(8597), CBC: r(1689), CFB: r(3518), CFB8: r(6180), CFB1: r(7779), OFB: r(9674), CTR: r(6316), GCM: r(6316) }, i = r(9072);
        for (var o in i)
          i[o].module = n[i[o].mode];
        t.exports = i;
      }, 9674: (t, e, r) => {
        var n = r(1931);
        function i(t2) {
          return t2._prev = t2._cipher.encryptBlock(t2._prev), t2._prev;
        }
        e.encrypt = function(t2, e2) {
          for (; t2._cache.length < e2.length; )
            t2._cache = Buffer.concat([t2._cache, i(t2)]);
          var r2 = t2._cache.slice(0, e2.length);
          return t2._cache = t2._cache.slice(e2.length), n(e2, r2);
        };
      }, 2849: (t, e, r) => {
        var n = r(9979), i = r(6671).Buffer, o = r(9526);
        function a(t2, e2, r2, a2) {
          o.call(this), this._cipher = new n.AES(e2), this._prev = i.from(r2), this._cache = i.allocUnsafe(0), this._secCache = i.allocUnsafe(0), this._decrypt = a2, this._mode = t2;
        }
        r(6192)(a, o), a.prototype._update = function(t2) {
          return this._mode.encrypt(this, t2, this._decrypt);
        }, a.prototype._final = function() {
          this._cipher.scrub();
        }, t.exports = a;
      }, 1373: (t, e, r) => {
        var n = r(7776), i = r(2592), o = r(4787), a = r(3904), s = r(9651);
        function f(t2, e2, r2) {
          if (t2 = t2.toLowerCase(), o[t2])
            return i.createCipheriv(t2, e2, r2);
          if (a[t2])
            return new n({ key: e2, iv: r2, mode: t2 });
          throw new TypeError("invalid suite type");
        }
        function h(t2, e2, r2) {
          if (t2 = t2.toLowerCase(), o[t2])
            return i.createDecipheriv(t2, e2, r2);
          if (a[t2])
            return new n({ key: e2, iv: r2, mode: t2, decrypt: true });
          throw new TypeError("invalid suite type");
        }
        e.createCipher = e.Cipher = function(t2, e2) {
          var r2, n2;
          if (t2 = t2.toLowerCase(), o[t2])
            r2 = o[t2].key, n2 = o[t2].iv;
          else {
            if (!a[t2])
              throw new TypeError("invalid suite type");
            r2 = 8 * a[t2].key, n2 = a[t2].iv;
          }
          var i2 = s(e2, false, r2, n2);
          return f(t2, i2.key, i2.iv);
        }, e.createCipheriv = e.Cipheriv = f, e.createDecipher = e.Decipher = function(t2, e2) {
          var r2, n2;
          if (t2 = t2.toLowerCase(), o[t2])
            r2 = o[t2].key, n2 = o[t2].iv;
          else {
            if (!a[t2])
              throw new TypeError("invalid suite type");
            r2 = 8 * a[t2].key, n2 = a[t2].iv;
          }
          var i2 = s(e2, false, r2, n2);
          return h(t2, i2.key, i2.iv);
        }, e.createDecipheriv = e.Decipheriv = h, e.listCiphers = e.getCiphers = function() {
          return Object.keys(a).concat(i.getCiphers());
        };
      }, 7776: (t, e, r) => {
        var n = r(9526), i = r(9913), o = r(6192), a = r(6671).Buffer, s = { "des-ede3-cbc": i.CBC.instantiate(i.EDE), "des-ede3": i.EDE, "des-ede-cbc": i.CBC.instantiate(i.EDE), "des-ede": i.EDE, "des-cbc": i.CBC.instantiate(i.DES), "des-ecb": i.DES };
        function f(t2) {
          n.call(this);
          var e2, r2 = t2.mode.toLowerCase(), i2 = s[r2];
          e2 = t2.decrypt ? "decrypt" : "encrypt";
          var o2 = t2.key;
          a.isBuffer(o2) || (o2 = a.from(o2)), "des-ede" !== r2 && "des-ede-cbc" !== r2 || (o2 = a.concat([o2, o2.slice(0, 8)]));
          var f2 = t2.iv;
          a.isBuffer(f2) || (f2 = a.from(f2)), this._des = i2.create({ key: o2, iv: f2, type: e2 });
        }
        s.des = s["des-cbc"], s.des3 = s["des-ede3-cbc"], t.exports = f, o(f, n), f.prototype._update = function(t2) {
          return a.from(this._des.update(t2));
        }, f.prototype._final = function() {
          return a.from(this._des.final());
        };
      }, 3904: (t, e) => {
        e["des-ecb"] = { key: 8, iv: 0 }, e["des-cbc"] = e.des = { key: 8, iv: 8 }, e["des-ede3-cbc"] = e.des3 = { key: 24, iv: 8 }, e["des-ede3"] = { key: 24, iv: 0 }, e["des-ede-cbc"] = { key: 16, iv: 8 }, e["des-ede"] = { key: 16, iv: 0 };
      }, 4442: (t, e, r) => {
        var n = r(8478), i = r(8030);
        function o(t2) {
          var e2, r2 = t2.modulus.byteLength();
          do {
            e2 = new n(i(r2));
          } while (e2.cmp(t2.modulus) >= 0 || !e2.umod(t2.prime1) || !e2.umod(t2.prime2));
          return e2;
        }
        function a(t2, e2) {
          var r2 = function(t3) {
            var e3 = o(t3);
            return { blinder: e3.toRed(n.mont(t3.modulus)).redPow(new n(t3.publicExponent)).fromRed(), unblinder: e3.invm(t3.modulus) };
          }(e2), i2 = e2.modulus.byteLength(), a2 = new n(t2).mul(r2.blinder).umod(e2.modulus), s = a2.toRed(n.mont(e2.prime1)), f = a2.toRed(n.mont(e2.prime2)), h = e2.coefficient, u = e2.prime1, c = e2.prime2, d = s.redPow(e2.exponent1).fromRed(), l = f.redPow(e2.exponent2).fromRed(), p = d.isub(l).imul(h).umod(u).imul(c);
          return l.iadd(p).imul(r2.unblinder).umod(e2.modulus).toArrayLike(Buffer, "be", i2);
        }
        a.getr = o, t.exports = a;
      }, 7152: (t, e, r) => {
        "use strict";
        t.exports = r(6178);
      }, 159: (t, e, r) => {
        "use strict";
        var n = r(6671).Buffer, i = r(7824), o = r(2613), a = r(6192), s = r(3190), f = r(490), h = r(6178);
        function u(t2) {
          o.Writable.call(this);
          var e2 = h[t2];
          if (!e2)
            throw new Error("Unknown message digest");
          this._hashType = e2.hash, this._hash = i(e2.hash), this._tag = e2.id, this._signType = e2.sign;
        }
        function c(t2) {
          o.Writable.call(this);
          var e2 = h[t2];
          if (!e2)
            throw new Error("Unknown message digest");
          this._hash = i(e2.hash), this._tag = e2.id, this._signType = e2.sign;
        }
        function d(t2) {
          return new u(t2);
        }
        function l(t2) {
          return new c(t2);
        }
        Object.keys(h).forEach(function(t2) {
          h[t2].id = n.from(h[t2].id, "hex"), h[t2.toLowerCase()] = h[t2];
        }), a(u, o.Writable), u.prototype._write = function(t2, e2, r2) {
          this._hash.update(t2), r2();
        }, u.prototype.update = function(t2, e2) {
          return this._hash.update("string" == typeof t2 ? n.from(t2, e2) : t2), this;
        }, u.prototype.sign = function(t2, e2) {
          this.end();
          var r2 = this._hash.digest(), n2 = s(r2, t2, this._hashType, this._signType, this._tag);
          return e2 ? n2.toString(e2) : n2;
        }, a(c, o.Writable), c.prototype._write = function(t2, e2, r2) {
          this._hash.update(t2), r2();
        }, c.prototype.update = function(t2, e2) {
          return this._hash.update("string" == typeof t2 ? n.from(t2, e2) : t2), this;
        }, c.prototype.verify = function(t2, e2, r2) {
          var i2 = "string" == typeof e2 ? n.from(e2, r2) : e2;
          this.end();
          var o2 = this._hash.digest();
          return f(i2, o2, t2, this._signType, this._tag);
        }, t.exports = { Sign: d, Verify: l, createSign: d, createVerify: l };
      }, 3190: (t, e, r) => {
        "use strict";
        var n = r(6671).Buffer, i = r(4646), o = r(4442), a = r(1709).ec, s = r(8478), f = r(8396), h = r(9644);
        function u(t2, e2, r2, o2) {
          if ((t2 = n.from(t2.toArray())).length < e2.byteLength()) {
            var a2 = n.alloc(e2.byteLength() - t2.length);
            t2 = n.concat([a2, t2]);
          }
          var s2 = r2.length, f2 = function(t3, e3) {
            t3 = (t3 = c(t3, e3)).mod(e3);
            var r3 = n.from(t3.toArray());
            if (r3.length < e3.byteLength()) {
              var i2 = n.alloc(e3.byteLength() - r3.length);
              r3 = n.concat([i2, r3]);
            }
            return r3;
          }(r2, e2), h2 = n.alloc(s2);
          h2.fill(1);
          var u2 = n.alloc(s2);
          return u2 = i(o2, u2).update(h2).update(n.from([0])).update(t2).update(f2).digest(), h2 = i(o2, u2).update(h2).digest(), { k: u2 = i(o2, u2).update(h2).update(n.from([1])).update(t2).update(f2).digest(), v: h2 = i(o2, u2).update(h2).digest() };
        }
        function c(t2, e2) {
          var r2 = new s(t2), n2 = (t2.length << 3) - e2.bitLength();
          return n2 > 0 && r2.ishrn(n2), r2;
        }
        function d(t2, e2, r2) {
          var o2, a2;
          do {
            for (o2 = n.alloc(0); 8 * o2.length < t2.bitLength(); )
              e2.v = i(r2, e2.k).update(e2.v).digest(), o2 = n.concat([o2, e2.v]);
            a2 = c(o2, t2), e2.k = i(r2, e2.k).update(e2.v).update(n.from([0])).digest(), e2.v = i(r2, e2.k).update(e2.v).digest();
          } while (-1 !== a2.cmp(t2));
          return a2;
        }
        function l(t2, e2, r2, n2) {
          return t2.toRed(s.mont(r2)).redPow(e2).fromRed().mod(n2);
        }
        t.exports = function(t2, e2, r2, i2, p) {
          var b = f(e2);
          if (b.curve) {
            if ("ecdsa" !== i2 && "ecdsa/rsa" !== i2)
              throw new Error("wrong private key type");
            return function(t3, e3) {
              var r3 = h[e3.curve.join(".")];
              if (!r3)
                throw new Error("unknown curve " + e3.curve.join("."));
              var i3 = new a(r3).keyFromPrivate(e3.privateKey).sign(t3);
              return n.from(i3.toDER());
            }(t2, b);
          }
          if ("dsa" === b.type) {
            if ("dsa" !== i2)
              throw new Error("wrong private key type");
            return function(t3, e3, r3) {
              for (var i3, o2 = e3.params.priv_key, a2 = e3.params.p, f2 = e3.params.q, h2 = e3.params.g, p2 = new s(0), b2 = c(t3, f2).mod(f2), y2 = false, g2 = u(o2, f2, t3, r3); false === y2; )
                p2 = l(h2, i3 = d(f2, g2, r3), a2, f2), 0 === (y2 = i3.invm(f2).imul(b2.add(o2.mul(p2))).mod(f2)).cmpn(0) && (y2 = false, p2 = new s(0));
              return function(t4, e4) {
                t4 = t4.toArray(), e4 = e4.toArray(), 128 & t4[0] && (t4 = [0].concat(t4)), 128 & e4[0] && (e4 = [0].concat(e4));
                var r4 = [48, t4.length + e4.length + 4, 2, t4.length];
                return r4 = r4.concat(t4, [2, e4.length], e4), n.from(r4);
              }(p2, y2);
            }(t2, b, r2);
          }
          if ("rsa" !== i2 && "ecdsa/rsa" !== i2)
            throw new Error("wrong private key type");
          if (void 0 !== e2.padding && 1 !== e2.padding)
            throw new Error("illegal or unsupported padding mode");
          t2 = n.concat([p, t2]);
          for (var y = b.modulus.byteLength(), g = [0, 1]; t2.length + g.length + 1 < y; )
            g.push(255);
          g.push(0);
          for (var m = -1; ++m < t2.length; )
            g.push(t2[m]);
          return o(g, b);
        }, t.exports.getKey = u, t.exports.makeKey = d;
      }, 490: (t, e, r) => {
        "use strict";
        var n = r(6671).Buffer, i = r(8478), o = r(1709).ec, a = r(8396), s = r(9644);
        function f(t2, e2) {
          if (t2.cmpn(0) <= 0)
            throw new Error("invalid sig");
          if (t2.cmp(e2) >= 0)
            throw new Error("invalid sig");
        }
        t.exports = function(t2, e2, r2, h, u) {
          var c = a(r2);
          if ("ec" === c.type) {
            if ("ecdsa" !== h && "ecdsa/rsa" !== h)
              throw new Error("wrong public key type");
            return function(t3, e3, r3) {
              var n2 = s[r3.data.algorithm.curve.join(".")];
              if (!n2)
                throw new Error("unknown curve " + r3.data.algorithm.curve.join("."));
              var i2 = new o(n2), a2 = r3.data.subjectPrivateKey.data;
              return i2.verify(e3, t3, a2);
            }(t2, e2, c);
          }
          if ("dsa" === c.type) {
            if ("dsa" !== h)
              throw new Error("wrong public key type");
            return function(t3, e3, r3) {
              var n2 = r3.data.p, o2 = r3.data.q, s2 = r3.data.g, h2 = r3.data.pub_key, u2 = a.signature.decode(t3, "der"), c2 = u2.s, d2 = u2.r;
              f(c2, o2), f(d2, o2);
              var l2 = i.mont(n2), p2 = c2.invm(o2);
              return 0 === s2.toRed(l2).redPow(new i(e3).mul(p2).mod(o2)).fromRed().mul(h2.toRed(l2).redPow(d2.mul(p2).mod(o2)).fromRed()).mod(n2).mod(o2).cmp(d2);
            }(t2, e2, c);
          }
          if ("rsa" !== h && "ecdsa/rsa" !== h)
            throw new Error("wrong public key type");
          e2 = n.concat([u, e2]);
          for (var d = c.modulus.byteLength(), l = [1], p = 0; e2.length + l.length + 2 < d; )
            l.push(255), p += 1;
          l.push(0);
          for (var b = -1; ++b < e2.length; )
            l.push(e2[b]);
          l = n.from(l);
          var y = i.mont(c.modulus);
          t2 = (t2 = new i(t2).toRed(y)).redPow(new i(c.publicExponent)), t2 = n.from(t2.fromRed().toArray());
          var g = p < 8 ? 1 : 0;
          for (d = Math.min(t2.length, l.length), t2.length !== l.length && (g = 1), b = -1; ++b < d; )
            g |= t2[b] ^ l[b];
          return 0 === g;
        };
      }, 1931: (t) => {
        t.exports = function(t2, e) {
          for (var r = Math.min(t2.length, e.length), n = new Buffer(r), i = 0; i < r; ++i)
            n[i] = t2[i] ^ e[i];
          return n;
        };
      }, 4686: (t, e, r) => {
        "use strict";
        const n = r(5350), i = r(7947), o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
        e.Buffer = f, e.SlowBuffer = function(t2) {
          return +t2 != t2 && (t2 = 0), f.alloc(+t2);
        }, e.INSPECT_MAX_BYTES = 50;
        const a = 2147483647;
        function s(t2) {
          if (t2 > a)
            throw new RangeError('The value "' + t2 + '" is invalid for option "size"');
          const e2 = new Uint8Array(t2);
          return Object.setPrototypeOf(e2, f.prototype), e2;
        }
        function f(t2, e2, r2) {
          if ("number" == typeof t2) {
            if ("string" == typeof e2)
              throw new TypeError('The "string" argument must be of type string. Received type number');
            return c(t2);
          }
          return h(t2, e2, r2);
        }
        function h(t2, e2, r2) {
          if ("string" == typeof t2)
            return function(t3, e3) {
              if ("string" == typeof e3 && "" !== e3 || (e3 = "utf8"), !f.isEncoding(e3))
                throw new TypeError("Unknown encoding: " + e3);
              const r3 = 0 | b(t3, e3);
              let n3 = s(r3);
              const i3 = n3.write(t3, e3);
              return i3 !== r3 && (n3 = n3.slice(0, i3)), n3;
            }(t2, e2);
          if (ArrayBuffer.isView(t2))
            return function(t3) {
              if (Y(t3, Uint8Array)) {
                const e3 = new Uint8Array(t3);
                return l(e3.buffer, e3.byteOffset, e3.byteLength);
              }
              return d(t3);
            }(t2);
          if (null == t2)
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t2);
          if (Y(t2, ArrayBuffer) || t2 && Y(t2.buffer, ArrayBuffer))
            return l(t2, e2, r2);
          if ("undefined" != typeof SharedArrayBuffer && (Y(t2, SharedArrayBuffer) || t2 && Y(t2.buffer, SharedArrayBuffer)))
            return l(t2, e2, r2);
          if ("number" == typeof t2)
            throw new TypeError('The "value" argument must not be of type number. Received type number');
          const n2 = t2.valueOf && t2.valueOf();
          if (null != n2 && n2 !== t2)
            return f.from(n2, e2, r2);
          const i2 = function(t3) {
            if (f.isBuffer(t3)) {
              const e3 = 0 | p(t3.length), r3 = s(e3);
              return 0 === r3.length || t3.copy(r3, 0, 0, e3), r3;
            }
            return void 0 !== t3.length ? "number" != typeof t3.length || Z(t3.length) ? s(0) : d(t3) : "Buffer" === t3.type && Array.isArray(t3.data) ? d(t3.data) : void 0;
          }(t2);
          if (i2)
            return i2;
          if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t2[Symbol.toPrimitive])
            return f.from(t2[Symbol.toPrimitive]("string"), e2, r2);
          throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t2);
        }
        function u(t2) {
          if ("number" != typeof t2)
            throw new TypeError('"size" argument must be of type number');
          if (t2 < 0)
            throw new RangeError('The value "' + t2 + '" is invalid for option "size"');
        }
        function c(t2) {
          return u(t2), s(t2 < 0 ? 0 : 0 | p(t2));
        }
        function d(t2) {
          const e2 = t2.length < 0 ? 0 : 0 | p(t2.length), r2 = s(e2);
          for (let n2 = 0; n2 < e2; n2 += 1)
            r2[n2] = 255 & t2[n2];
          return r2;
        }
        function l(t2, e2, r2) {
          if (e2 < 0 || t2.byteLength < e2)
            throw new RangeError('"offset" is outside of buffer bounds');
          if (t2.byteLength < e2 + (r2 || 0))
            throw new RangeError('"length" is outside of buffer bounds');
          let n2;
          return n2 = void 0 === e2 && void 0 === r2 ? new Uint8Array(t2) : void 0 === r2 ? new Uint8Array(t2, e2) : new Uint8Array(t2, e2, r2), Object.setPrototypeOf(n2, f.prototype), n2;
        }
        function p(t2) {
          if (t2 >= a)
            throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
          return 0 | t2;
        }
        function b(t2, e2) {
          if (f.isBuffer(t2))
            return t2.length;
          if (ArrayBuffer.isView(t2) || Y(t2, ArrayBuffer))
            return t2.byteLength;
          if ("string" != typeof t2)
            throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t2);
          const r2 = t2.length, n2 = arguments.length > 2 && true === arguments[2];
          if (!n2 && 0 === r2)
            return 0;
          let i2 = false;
          for (; ; )
            switch (e2) {
              case "ascii":
              case "latin1":
              case "binary":
                return r2;
              case "utf8":
              case "utf-8":
                return $(t2).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * r2;
              case "hex":
                return r2 >>> 1;
              case "base64":
                return W(t2).length;
              default:
                if (i2)
                  return n2 ? -1 : $(t2).length;
                e2 = ("" + e2).toLowerCase(), i2 = true;
            }
        }
        function y(t2, e2, r2) {
          let n2 = false;
          if ((void 0 === e2 || e2 < 0) && (e2 = 0), e2 > this.length)
            return "";
          if ((void 0 === r2 || r2 > this.length) && (r2 = this.length), r2 <= 0)
            return "";
          if ((r2 >>>= 0) <= (e2 >>>= 0))
            return "";
          for (t2 || (t2 = "utf8"); ; )
            switch (t2) {
              case "hex":
                return I(this, e2, r2);
              case "utf8":
              case "utf-8":
                return k(this, e2, r2);
              case "ascii":
                return O(this, e2, r2);
              case "latin1":
              case "binary":
                return x(this, e2, r2);
              case "base64":
                return A(this, e2, r2);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return R(this, e2, r2);
              default:
                if (n2)
                  throw new TypeError("Unknown encoding: " + t2);
                t2 = (t2 + "").toLowerCase(), n2 = true;
            }
        }
        function g(t2, e2, r2) {
          const n2 = t2[e2];
          t2[e2] = t2[r2], t2[r2] = n2;
        }
        function m(t2, e2, r2, n2, i2) {
          if (0 === t2.length)
            return -1;
          if ("string" == typeof r2 ? (n2 = r2, r2 = 0) : r2 > 2147483647 ? r2 = 2147483647 : r2 < -2147483648 && (r2 = -2147483648), Z(r2 = +r2) && (r2 = i2 ? 0 : t2.length - 1), r2 < 0 && (r2 = t2.length + r2), r2 >= t2.length) {
            if (i2)
              return -1;
            r2 = t2.length - 1;
          } else if (r2 < 0) {
            if (!i2)
              return -1;
            r2 = 0;
          }
          if ("string" == typeof e2 && (e2 = f.from(e2, n2)), f.isBuffer(e2))
            return 0 === e2.length ? -1 : v(t2, e2, r2, n2, i2);
          if ("number" == typeof e2)
            return e2 &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i2 ? Uint8Array.prototype.indexOf.call(t2, e2, r2) : Uint8Array.prototype.lastIndexOf.call(t2, e2, r2) : v(t2, [e2], r2, n2, i2);
          throw new TypeError("val must be string, number or Buffer");
        }
        function v(t2, e2, r2, n2, i2) {
          let o2, a2 = 1, s2 = t2.length, f2 = e2.length;
          if (void 0 !== n2 && ("ucs2" === (n2 = String(n2).toLowerCase()) || "ucs-2" === n2 || "utf16le" === n2 || "utf-16le" === n2)) {
            if (t2.length < 2 || e2.length < 2)
              return -1;
            a2 = 2, s2 /= 2, f2 /= 2, r2 /= 2;
          }
          function h2(t3, e3) {
            return 1 === a2 ? t3[e3] : t3.readUInt16BE(e3 * a2);
          }
          if (i2) {
            let n3 = -1;
            for (o2 = r2; o2 < s2; o2++)
              if (h2(t2, o2) === h2(e2, -1 === n3 ? 0 : o2 - n3)) {
                if (-1 === n3 && (n3 = o2), o2 - n3 + 1 === f2)
                  return n3 * a2;
              } else
                -1 !== n3 && (o2 -= o2 - n3), n3 = -1;
          } else
            for (r2 + f2 > s2 && (r2 = s2 - f2), o2 = r2; o2 >= 0; o2--) {
              let r3 = true;
              for (let n3 = 0; n3 < f2; n3++)
                if (h2(t2, o2 + n3) !== h2(e2, n3)) {
                  r3 = false;
                  break;
                }
              if (r3)
                return o2;
            }
          return -1;
        }
        function w(t2, e2, r2, n2) {
          r2 = Number(r2) || 0;
          const i2 = t2.length - r2;
          n2 ? (n2 = Number(n2)) > i2 && (n2 = i2) : n2 = i2;
          const o2 = e2.length;
          let a2;
          for (n2 > o2 / 2 && (n2 = o2 / 2), a2 = 0; a2 < n2; ++a2) {
            const n3 = parseInt(e2.substr(2 * a2, 2), 16);
            if (Z(n3))
              return a2;
            t2[r2 + a2] = n3;
          }
          return a2;
        }
        function _(t2, e2, r2, n2) {
          return V($(e2, t2.length - r2), t2, r2, n2);
        }
        function S(t2, e2, r2, n2) {
          return V(function(t3) {
            const e3 = [];
            for (let r3 = 0; r3 < t3.length; ++r3)
              e3.push(255 & t3.charCodeAt(r3));
            return e3;
          }(e2), t2, r2, n2);
        }
        function E(t2, e2, r2, n2) {
          return V(W(e2), t2, r2, n2);
        }
        function M(t2, e2, r2, n2) {
          return V(function(t3, e3) {
            let r3, n3, i2;
            const o2 = [];
            for (let a2 = 0; a2 < t3.length && !((e3 -= 2) < 0); ++a2)
              r3 = t3.charCodeAt(a2), n3 = r3 >> 8, i2 = r3 % 256, o2.push(i2), o2.push(n3);
            return o2;
          }(e2, t2.length - r2), t2, r2, n2);
        }
        function A(t2, e2, r2) {
          return 0 === e2 && r2 === t2.length ? n.fromByteArray(t2) : n.fromByteArray(t2.slice(e2, r2));
        }
        function k(t2, e2, r2) {
          r2 = Math.min(t2.length, r2);
          const n2 = [];
          let i2 = e2;
          for (; i2 < r2; ) {
            const e3 = t2[i2];
            let o2 = null, a2 = e3 > 239 ? 4 : e3 > 223 ? 3 : e3 > 191 ? 2 : 1;
            if (i2 + a2 <= r2) {
              let r3, n3, s2, f2;
              switch (a2) {
                case 1:
                  e3 < 128 && (o2 = e3);
                  break;
                case 2:
                  r3 = t2[i2 + 1], 128 == (192 & r3) && (f2 = (31 & e3) << 6 | 63 & r3, f2 > 127 && (o2 = f2));
                  break;
                case 3:
                  r3 = t2[i2 + 1], n3 = t2[i2 + 2], 128 == (192 & r3) && 128 == (192 & n3) && (f2 = (15 & e3) << 12 | (63 & r3) << 6 | 63 & n3, f2 > 2047 && (f2 < 55296 || f2 > 57343) && (o2 = f2));
                  break;
                case 4:
                  r3 = t2[i2 + 1], n3 = t2[i2 + 2], s2 = t2[i2 + 3], 128 == (192 & r3) && 128 == (192 & n3) && 128 == (192 & s2) && (f2 = (15 & e3) << 18 | (63 & r3) << 12 | (63 & n3) << 6 | 63 & s2, f2 > 65535 && f2 < 1114112 && (o2 = f2));
              }
            }
            null === o2 ? (o2 = 65533, a2 = 1) : o2 > 65535 && (o2 -= 65536, n2.push(o2 >>> 10 & 1023 | 55296), o2 = 56320 | 1023 & o2), n2.push(o2), i2 += a2;
          }
          return function(t3) {
            const e3 = t3.length;
            if (e3 <= B)
              return String.fromCharCode.apply(String, t3);
            let r3 = "", n3 = 0;
            for (; n3 < e3; )
              r3 += String.fromCharCode.apply(String, t3.slice(n3, n3 += B));
            return r3;
          }(n2);
        }
        e.kMaxLength = a, f.TYPED_ARRAY_SUPPORT = function() {
          try {
            const t2 = new Uint8Array(1), e2 = { foo: function() {
              return 42;
            } };
            return Object.setPrototypeOf(e2, Uint8Array.prototype), Object.setPrototypeOf(t2, e2), 42 === t2.foo();
          } catch (t2) {
            return false;
          }
        }(), f.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(f.prototype, "parent", { enumerable: true, get: function() {
          if (f.isBuffer(this))
            return this.buffer;
        } }), Object.defineProperty(f.prototype, "offset", { enumerable: true, get: function() {
          if (f.isBuffer(this))
            return this.byteOffset;
        } }), f.poolSize = 8192, f.from = function(t2, e2, r2) {
          return h(t2, e2, r2);
        }, Object.setPrototypeOf(f.prototype, Uint8Array.prototype), Object.setPrototypeOf(f, Uint8Array), f.alloc = function(t2, e2, r2) {
          return function(t3, e3, r3) {
            return u(t3), t3 <= 0 ? s(t3) : void 0 !== e3 ? "string" == typeof r3 ? s(t3).fill(e3, r3) : s(t3).fill(e3) : s(t3);
          }(t2, e2, r2);
        }, f.allocUnsafe = function(t2) {
          return c(t2);
        }, f.allocUnsafeSlow = function(t2) {
          return c(t2);
        }, f.isBuffer = function(t2) {
          return null != t2 && true === t2._isBuffer && t2 !== f.prototype;
        }, f.compare = function(t2, e2) {
          if (Y(t2, Uint8Array) && (t2 = f.from(t2, t2.offset, t2.byteLength)), Y(e2, Uint8Array) && (e2 = f.from(e2, e2.offset, e2.byteLength)), !f.isBuffer(t2) || !f.isBuffer(e2))
            throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
          if (t2 === e2)
            return 0;
          let r2 = t2.length, n2 = e2.length;
          for (let i2 = 0, o2 = Math.min(r2, n2); i2 < o2; ++i2)
            if (t2[i2] !== e2[i2]) {
              r2 = t2[i2], n2 = e2[i2];
              break;
            }
          return r2 < n2 ? -1 : n2 < r2 ? 1 : 0;
        }, f.isEncoding = function(t2) {
          switch (String(t2).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return true;
            default:
              return false;
          }
        }, f.concat = function(t2, e2) {
          if (!Array.isArray(t2))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === t2.length)
            return f.alloc(0);
          let r2;
          if (void 0 === e2)
            for (e2 = 0, r2 = 0; r2 < t2.length; ++r2)
              e2 += t2[r2].length;
          const n2 = f.allocUnsafe(e2);
          let i2 = 0;
          for (r2 = 0; r2 < t2.length; ++r2) {
            let e3 = t2[r2];
            if (Y(e3, Uint8Array))
              i2 + e3.length > n2.length ? (f.isBuffer(e3) || (e3 = f.from(e3)), e3.copy(n2, i2)) : Uint8Array.prototype.set.call(n2, e3, i2);
            else {
              if (!f.isBuffer(e3))
                throw new TypeError('"list" argument must be an Array of Buffers');
              e3.copy(n2, i2);
            }
            i2 += e3.length;
          }
          return n2;
        }, f.byteLength = b, f.prototype._isBuffer = true, f.prototype.swap16 = function() {
          const t2 = this.length;
          if (t2 % 2 != 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (let e2 = 0; e2 < t2; e2 += 2)
            g(this, e2, e2 + 1);
          return this;
        }, f.prototype.swap32 = function() {
          const t2 = this.length;
          if (t2 % 4 != 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (let e2 = 0; e2 < t2; e2 += 4)
            g(this, e2, e2 + 3), g(this, e2 + 1, e2 + 2);
          return this;
        }, f.prototype.swap64 = function() {
          const t2 = this.length;
          if (t2 % 8 != 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (let e2 = 0; e2 < t2; e2 += 8)
            g(this, e2, e2 + 7), g(this, e2 + 1, e2 + 6), g(this, e2 + 2, e2 + 5), g(this, e2 + 3, e2 + 4);
          return this;
        }, f.prototype.toString = function() {
          const t2 = this.length;
          return 0 === t2 ? "" : 0 === arguments.length ? k(this, 0, t2) : y.apply(this, arguments);
        }, f.prototype.toLocaleString = f.prototype.toString, f.prototype.equals = function(t2) {
          if (!f.isBuffer(t2))
            throw new TypeError("Argument must be a Buffer");
          return this === t2 || 0 === f.compare(this, t2);
        }, f.prototype.inspect = function() {
          let t2 = "";
          const r2 = e.INSPECT_MAX_BYTES;
          return t2 = this.toString("hex", 0, r2).replace(/(.{2})/g, "$1 ").trim(), this.length > r2 && (t2 += " ... "), "<Buffer " + t2 + ">";
        }, o && (f.prototype[o] = f.prototype.inspect), f.prototype.compare = function(t2, e2, r2, n2, i2) {
          if (Y(t2, Uint8Array) && (t2 = f.from(t2, t2.offset, t2.byteLength)), !f.isBuffer(t2))
            throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t2);
          if (void 0 === e2 && (e2 = 0), void 0 === r2 && (r2 = t2 ? t2.length : 0), void 0 === n2 && (n2 = 0), void 0 === i2 && (i2 = this.length), e2 < 0 || r2 > t2.length || n2 < 0 || i2 > this.length)
            throw new RangeError("out of range index");
          if (n2 >= i2 && e2 >= r2)
            return 0;
          if (n2 >= i2)
            return -1;
          if (e2 >= r2)
            return 1;
          if (this === t2)
            return 0;
          let o2 = (i2 >>>= 0) - (n2 >>>= 0), a2 = (r2 >>>= 0) - (e2 >>>= 0);
          const s2 = Math.min(o2, a2), h2 = this.slice(n2, i2), u2 = t2.slice(e2, r2);
          for (let t3 = 0; t3 < s2; ++t3)
            if (h2[t3] !== u2[t3]) {
              o2 = h2[t3], a2 = u2[t3];
              break;
            }
          return o2 < a2 ? -1 : a2 < o2 ? 1 : 0;
        }, f.prototype.includes = function(t2, e2, r2) {
          return -1 !== this.indexOf(t2, e2, r2);
        }, f.prototype.indexOf = function(t2, e2, r2) {
          return m(this, t2, e2, r2, true);
        }, f.prototype.lastIndexOf = function(t2, e2, r2) {
          return m(this, t2, e2, r2, false);
        }, f.prototype.write = function(t2, e2, r2, n2) {
          if (void 0 === e2)
            n2 = "utf8", r2 = this.length, e2 = 0;
          else if (void 0 === r2 && "string" == typeof e2)
            n2 = e2, r2 = this.length, e2 = 0;
          else {
            if (!isFinite(e2))
              throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            e2 >>>= 0, isFinite(r2) ? (r2 >>>= 0, void 0 === n2 && (n2 = "utf8")) : (n2 = r2, r2 = void 0);
          }
          const i2 = this.length - e2;
          if ((void 0 === r2 || r2 > i2) && (r2 = i2), t2.length > 0 && (r2 < 0 || e2 < 0) || e2 > this.length)
            throw new RangeError("Attempt to write outside buffer bounds");
          n2 || (n2 = "utf8");
          let o2 = false;
          for (; ; )
            switch (n2) {
              case "hex":
                return w(this, t2, e2, r2);
              case "utf8":
              case "utf-8":
                return _(this, t2, e2, r2);
              case "ascii":
              case "latin1":
              case "binary":
                return S(this, t2, e2, r2);
              case "base64":
                return E(this, t2, e2, r2);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return M(this, t2, e2, r2);
              default:
                if (o2)
                  throw new TypeError("Unknown encoding: " + n2);
                n2 = ("" + n2).toLowerCase(), o2 = true;
            }
        }, f.prototype.toJSON = function() {
          return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
        };
        const B = 4096;
        function O(t2, e2, r2) {
          let n2 = "";
          r2 = Math.min(t2.length, r2);
          for (let i2 = e2; i2 < r2; ++i2)
            n2 += String.fromCharCode(127 & t2[i2]);
          return n2;
        }
        function x(t2, e2, r2) {
          let n2 = "";
          r2 = Math.min(t2.length, r2);
          for (let i2 = e2; i2 < r2; ++i2)
            n2 += String.fromCharCode(t2[i2]);
          return n2;
        }
        function I(t2, e2, r2) {
          const n2 = t2.length;
          (!e2 || e2 < 0) && (e2 = 0), (!r2 || r2 < 0 || r2 > n2) && (r2 = n2);
          let i2 = "";
          for (let n3 = e2; n3 < r2; ++n3)
            i2 += X[t2[n3]];
          return i2;
        }
        function R(t2, e2, r2) {
          const n2 = t2.slice(e2, r2);
          let i2 = "";
          for (let t3 = 0; t3 < n2.length - 1; t3 += 2)
            i2 += String.fromCharCode(n2[t3] + 256 * n2[t3 + 1]);
          return i2;
        }
        function T(t2, e2, r2) {
          if (t2 % 1 != 0 || t2 < 0)
            throw new RangeError("offset is not uint");
          if (t2 + e2 > r2)
            throw new RangeError("Trying to access beyond buffer length");
        }
        function P(t2, e2, r2, n2, i2, o2) {
          if (!f.isBuffer(t2))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (e2 > i2 || e2 < o2)
            throw new RangeError('"value" argument is out of bounds');
          if (r2 + n2 > t2.length)
            throw new RangeError("Index out of range");
        }
        function N(t2, e2, r2, n2, i2) {
          z(e2, n2, i2, t2, r2, 7);
          let o2 = Number(e2 & BigInt(4294967295));
          t2[r2++] = o2, o2 >>= 8, t2[r2++] = o2, o2 >>= 8, t2[r2++] = o2, o2 >>= 8, t2[r2++] = o2;
          let a2 = Number(e2 >> BigInt(32) & BigInt(4294967295));
          return t2[r2++] = a2, a2 >>= 8, t2[r2++] = a2, a2 >>= 8, t2[r2++] = a2, a2 >>= 8, t2[r2++] = a2, r2;
        }
        function j(t2, e2, r2, n2, i2) {
          z(e2, n2, i2, t2, r2, 7);
          let o2 = Number(e2 & BigInt(4294967295));
          t2[r2 + 7] = o2, o2 >>= 8, t2[r2 + 6] = o2, o2 >>= 8, t2[r2 + 5] = o2, o2 >>= 8, t2[r2 + 4] = o2;
          let a2 = Number(e2 >> BigInt(32) & BigInt(4294967295));
          return t2[r2 + 3] = a2, a2 >>= 8, t2[r2 + 2] = a2, a2 >>= 8, t2[r2 + 1] = a2, a2 >>= 8, t2[r2] = a2, r2 + 8;
        }
        function D(t2, e2, r2, n2, i2, o2) {
          if (r2 + n2 > t2.length)
            throw new RangeError("Index out of range");
          if (r2 < 0)
            throw new RangeError("Index out of range");
        }
        function L(t2, e2, r2, n2, o2) {
          return e2 = +e2, r2 >>>= 0, o2 || D(t2, 0, r2, 4), i.write(t2, e2, r2, n2, 23, 4), r2 + 4;
        }
        function C(t2, e2, r2, n2, o2) {
          return e2 = +e2, r2 >>>= 0, o2 || D(t2, 0, r2, 8), i.write(t2, e2, r2, n2, 52, 8), r2 + 8;
        }
        f.prototype.slice = function(t2, e2) {
          const r2 = this.length;
          (t2 = ~~t2) < 0 ? (t2 += r2) < 0 && (t2 = 0) : t2 > r2 && (t2 = r2), (e2 = void 0 === e2 ? r2 : ~~e2) < 0 ? (e2 += r2) < 0 && (e2 = 0) : e2 > r2 && (e2 = r2), e2 < t2 && (e2 = t2);
          const n2 = this.subarray(t2, e2);
          return Object.setPrototypeOf(n2, f.prototype), n2;
        }, f.prototype.readUintLE = f.prototype.readUIntLE = function(t2, e2, r2) {
          t2 >>>= 0, e2 >>>= 0, r2 || T(t2, e2, this.length);
          let n2 = this[t2], i2 = 1, o2 = 0;
          for (; ++o2 < e2 && (i2 *= 256); )
            n2 += this[t2 + o2] * i2;
          return n2;
        }, f.prototype.readUintBE = f.prototype.readUIntBE = function(t2, e2, r2) {
          t2 >>>= 0, e2 >>>= 0, r2 || T(t2, e2, this.length);
          let n2 = this[t2 + --e2], i2 = 1;
          for (; e2 > 0 && (i2 *= 256); )
            n2 += this[t2 + --e2] * i2;
          return n2;
        }, f.prototype.readUint8 = f.prototype.readUInt8 = function(t2, e2) {
          return t2 >>>= 0, e2 || T(t2, 1, this.length), this[t2];
        }, f.prototype.readUint16LE = f.prototype.readUInt16LE = function(t2, e2) {
          return t2 >>>= 0, e2 || T(t2, 2, this.length), this[t2] | this[t2 + 1] << 8;
        }, f.prototype.readUint16BE = f.prototype.readUInt16BE = function(t2, e2) {
          return t2 >>>= 0, e2 || T(t2, 2, this.length), this[t2] << 8 | this[t2 + 1];
        }, f.prototype.readUint32LE = f.prototype.readUInt32LE = function(t2, e2) {
          return t2 >>>= 0, e2 || T(t2, 4, this.length), (this[t2] | this[t2 + 1] << 8 | this[t2 + 2] << 16) + 16777216 * this[t2 + 3];
        }, f.prototype.readUint32BE = f.prototype.readUInt32BE = function(t2, e2) {
          return t2 >>>= 0, e2 || T(t2, 4, this.length), 16777216 * this[t2] + (this[t2 + 1] << 16 | this[t2 + 2] << 8 | this[t2 + 3]);
        }, f.prototype.readBigUInt64LE = J(function(t2) {
          K(t2 >>>= 0, "offset");
          const e2 = this[t2], r2 = this[t2 + 7];
          void 0 !== e2 && void 0 !== r2 || G(t2, this.length - 8);
          const n2 = e2 + 256 * this[++t2] + 65536 * this[++t2] + this[++t2] * 2 ** 24, i2 = this[++t2] + 256 * this[++t2] + 65536 * this[++t2] + r2 * 2 ** 24;
          return BigInt(n2) + (BigInt(i2) << BigInt(32));
        }), f.prototype.readBigUInt64BE = J(function(t2) {
          K(t2 >>>= 0, "offset");
          const e2 = this[t2], r2 = this[t2 + 7];
          void 0 !== e2 && void 0 !== r2 || G(t2, this.length - 8);
          const n2 = e2 * 2 ** 24 + 65536 * this[++t2] + 256 * this[++t2] + this[++t2], i2 = this[++t2] * 2 ** 24 + 65536 * this[++t2] + 256 * this[++t2] + r2;
          return (BigInt(n2) << BigInt(32)) + BigInt(i2);
        }), f.prototype.readIntLE = function(t2, e2, r2) {
          t2 >>>= 0, e2 >>>= 0, r2 || T(t2, e2, this.length);
          let n2 = this[t2], i2 = 1, o2 = 0;
          for (; ++o2 < e2 && (i2 *= 256); )
            n2 += this[t2 + o2] * i2;
          return i2 *= 128, n2 >= i2 && (n2 -= Math.pow(2, 8 * e2)), n2;
        }, f.prototype.readIntBE = function(t2, e2, r2) {
          t2 >>>= 0, e2 >>>= 0, r2 || T(t2, e2, this.length);
          let n2 = e2, i2 = 1, o2 = this[t2 + --n2];
          for (; n2 > 0 && (i2 *= 256); )
            o2 += this[t2 + --n2] * i2;
          return i2 *= 128, o2 >= i2 && (o2 -= Math.pow(2, 8 * e2)), o2;
        }, f.prototype.readInt8 = function(t2, e2) {
          return t2 >>>= 0, e2 || T(t2, 1, this.length), 128 & this[t2] ? -1 * (255 - this[t2] + 1) : this[t2];
        }, f.prototype.readInt16LE = function(t2, e2) {
          t2 >>>= 0, e2 || T(t2, 2, this.length);
          const r2 = this[t2] | this[t2 + 1] << 8;
          return 32768 & r2 ? 4294901760 | r2 : r2;
        }, f.prototype.readInt16BE = function(t2, e2) {
          t2 >>>= 0, e2 || T(t2, 2, this.length);
          const r2 = this[t2 + 1] | this[t2] << 8;
          return 32768 & r2 ? 4294901760 | r2 : r2;
        }, f.prototype.readInt32LE = function(t2, e2) {
          return t2 >>>= 0, e2 || T(t2, 4, this.length), this[t2] | this[t2 + 1] << 8 | this[t2 + 2] << 16 | this[t2 + 3] << 24;
        }, f.prototype.readInt32BE = function(t2, e2) {
          return t2 >>>= 0, e2 || T(t2, 4, this.length), this[t2] << 24 | this[t2 + 1] << 16 | this[t2 + 2] << 8 | this[t2 + 3];
        }, f.prototype.readBigInt64LE = J(function(t2) {
          K(t2 >>>= 0, "offset");
          const e2 = this[t2], r2 = this[t2 + 7];
          void 0 !== e2 && void 0 !== r2 || G(t2, this.length - 8);
          const n2 = this[t2 + 4] + 256 * this[t2 + 5] + 65536 * this[t2 + 6] + (r2 << 24);
          return (BigInt(n2) << BigInt(32)) + BigInt(e2 + 256 * this[++t2] + 65536 * this[++t2] + this[++t2] * 2 ** 24);
        }), f.prototype.readBigInt64BE = J(function(t2) {
          K(t2 >>>= 0, "offset");
          const e2 = this[t2], r2 = this[t2 + 7];
          void 0 !== e2 && void 0 !== r2 || G(t2, this.length - 8);
          const n2 = (e2 << 24) + 65536 * this[++t2] + 256 * this[++t2] + this[++t2];
          return (BigInt(n2) << BigInt(32)) + BigInt(this[++t2] * 2 ** 24 + 65536 * this[++t2] + 256 * this[++t2] + r2);
        }), f.prototype.readFloatLE = function(t2, e2) {
          return t2 >>>= 0, e2 || T(t2, 4, this.length), i.read(this, t2, true, 23, 4);
        }, f.prototype.readFloatBE = function(t2, e2) {
          return t2 >>>= 0, e2 || T(t2, 4, this.length), i.read(this, t2, false, 23, 4);
        }, f.prototype.readDoubleLE = function(t2, e2) {
          return t2 >>>= 0, e2 || T(t2, 8, this.length), i.read(this, t2, true, 52, 8);
        }, f.prototype.readDoubleBE = function(t2, e2) {
          return t2 >>>= 0, e2 || T(t2, 8, this.length), i.read(this, t2, false, 52, 8);
        }, f.prototype.writeUintLE = f.prototype.writeUIntLE = function(t2, e2, r2, n2) {
          t2 = +t2, e2 >>>= 0, r2 >>>= 0, n2 || P(this, t2, e2, r2, Math.pow(2, 8 * r2) - 1, 0);
          let i2 = 1, o2 = 0;
          for (this[e2] = 255 & t2; ++o2 < r2 && (i2 *= 256); )
            this[e2 + o2] = t2 / i2 & 255;
          return e2 + r2;
        }, f.prototype.writeUintBE = f.prototype.writeUIntBE = function(t2, e2, r2, n2) {
          t2 = +t2, e2 >>>= 0, r2 >>>= 0, n2 || P(this, t2, e2, r2, Math.pow(2, 8 * r2) - 1, 0);
          let i2 = r2 - 1, o2 = 1;
          for (this[e2 + i2] = 255 & t2; --i2 >= 0 && (o2 *= 256); )
            this[e2 + i2] = t2 / o2 & 255;
          return e2 + r2;
        }, f.prototype.writeUint8 = f.prototype.writeUInt8 = function(t2, e2, r2) {
          return t2 = +t2, e2 >>>= 0, r2 || P(this, t2, e2, 1, 255, 0), this[e2] = 255 & t2, e2 + 1;
        }, f.prototype.writeUint16LE = f.prototype.writeUInt16LE = function(t2, e2, r2) {
          return t2 = +t2, e2 >>>= 0, r2 || P(this, t2, e2, 2, 65535, 0), this[e2] = 255 & t2, this[e2 + 1] = t2 >>> 8, e2 + 2;
        }, f.prototype.writeUint16BE = f.prototype.writeUInt16BE = function(t2, e2, r2) {
          return t2 = +t2, e2 >>>= 0, r2 || P(this, t2, e2, 2, 65535, 0), this[e2] = t2 >>> 8, this[e2 + 1] = 255 & t2, e2 + 2;
        }, f.prototype.writeUint32LE = f.prototype.writeUInt32LE = function(t2, e2, r2) {
          return t2 = +t2, e2 >>>= 0, r2 || P(this, t2, e2, 4, 4294967295, 0), this[e2 + 3] = t2 >>> 24, this[e2 + 2] = t2 >>> 16, this[e2 + 1] = t2 >>> 8, this[e2] = 255 & t2, e2 + 4;
        }, f.prototype.writeUint32BE = f.prototype.writeUInt32BE = function(t2, e2, r2) {
          return t2 = +t2, e2 >>>= 0, r2 || P(this, t2, e2, 4, 4294967295, 0), this[e2] = t2 >>> 24, this[e2 + 1] = t2 >>> 16, this[e2 + 2] = t2 >>> 8, this[e2 + 3] = 255 & t2, e2 + 4;
        }, f.prototype.writeBigUInt64LE = J(function(t2, e2 = 0) {
          return N(this, t2, e2, BigInt(0), BigInt("0xffffffffffffffff"));
        }), f.prototype.writeBigUInt64BE = J(function(t2, e2 = 0) {
          return j(this, t2, e2, BigInt(0), BigInt("0xffffffffffffffff"));
        }), f.prototype.writeIntLE = function(t2, e2, r2, n2) {
          if (t2 = +t2, e2 >>>= 0, !n2) {
            const n3 = Math.pow(2, 8 * r2 - 1);
            P(this, t2, e2, r2, n3 - 1, -n3);
          }
          let i2 = 0, o2 = 1, a2 = 0;
          for (this[e2] = 255 & t2; ++i2 < r2 && (o2 *= 256); )
            t2 < 0 && 0 === a2 && 0 !== this[e2 + i2 - 1] && (a2 = 1), this[e2 + i2] = (t2 / o2 | 0) - a2 & 255;
          return e2 + r2;
        }, f.prototype.writeIntBE = function(t2, e2, r2, n2) {
          if (t2 = +t2, e2 >>>= 0, !n2) {
            const n3 = Math.pow(2, 8 * r2 - 1);
            P(this, t2, e2, r2, n3 - 1, -n3);
          }
          let i2 = r2 - 1, o2 = 1, a2 = 0;
          for (this[e2 + i2] = 255 & t2; --i2 >= 0 && (o2 *= 256); )
            t2 < 0 && 0 === a2 && 0 !== this[e2 + i2 + 1] && (a2 = 1), this[e2 + i2] = (t2 / o2 | 0) - a2 & 255;
          return e2 + r2;
        }, f.prototype.writeInt8 = function(t2, e2, r2) {
          return t2 = +t2, e2 >>>= 0, r2 || P(this, t2, e2, 1, 127, -128), t2 < 0 && (t2 = 255 + t2 + 1), this[e2] = 255 & t2, e2 + 1;
        }, f.prototype.writeInt16LE = function(t2, e2, r2) {
          return t2 = +t2, e2 >>>= 0, r2 || P(this, t2, e2, 2, 32767, -32768), this[e2] = 255 & t2, this[e2 + 1] = t2 >>> 8, e2 + 2;
        }, f.prototype.writeInt16BE = function(t2, e2, r2) {
          return t2 = +t2, e2 >>>= 0, r2 || P(this, t2, e2, 2, 32767, -32768), this[e2] = t2 >>> 8, this[e2 + 1] = 255 & t2, e2 + 2;
        }, f.prototype.writeInt32LE = function(t2, e2, r2) {
          return t2 = +t2, e2 >>>= 0, r2 || P(this, t2, e2, 4, 2147483647, -2147483648), this[e2] = 255 & t2, this[e2 + 1] = t2 >>> 8, this[e2 + 2] = t2 >>> 16, this[e2 + 3] = t2 >>> 24, e2 + 4;
        }, f.prototype.writeInt32BE = function(t2, e2, r2) {
          return t2 = +t2, e2 >>>= 0, r2 || P(this, t2, e2, 4, 2147483647, -2147483648), t2 < 0 && (t2 = 4294967295 + t2 + 1), this[e2] = t2 >>> 24, this[e2 + 1] = t2 >>> 16, this[e2 + 2] = t2 >>> 8, this[e2 + 3] = 255 & t2, e2 + 4;
        }, f.prototype.writeBigInt64LE = J(function(t2, e2 = 0) {
          return N(this, t2, e2, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
        }), f.prototype.writeBigInt64BE = J(function(t2, e2 = 0) {
          return j(this, t2, e2, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
        }), f.prototype.writeFloatLE = function(t2, e2, r2) {
          return L(this, t2, e2, true, r2);
        }, f.prototype.writeFloatBE = function(t2, e2, r2) {
          return L(this, t2, e2, false, r2);
        }, f.prototype.writeDoubleLE = function(t2, e2, r2) {
          return C(this, t2, e2, true, r2);
        }, f.prototype.writeDoubleBE = function(t2, e2, r2) {
          return C(this, t2, e2, false, r2);
        }, f.prototype.copy = function(t2, e2, r2, n2) {
          if (!f.isBuffer(t2))
            throw new TypeError("argument should be a Buffer");
          if (r2 || (r2 = 0), n2 || 0 === n2 || (n2 = this.length), e2 >= t2.length && (e2 = t2.length), e2 || (e2 = 0), n2 > 0 && n2 < r2 && (n2 = r2), n2 === r2)
            return 0;
          if (0 === t2.length || 0 === this.length)
            return 0;
          if (e2 < 0)
            throw new RangeError("targetStart out of bounds");
          if (r2 < 0 || r2 >= this.length)
            throw new RangeError("Index out of range");
          if (n2 < 0)
            throw new RangeError("sourceEnd out of bounds");
          n2 > this.length && (n2 = this.length), t2.length - e2 < n2 - r2 && (n2 = t2.length - e2 + r2);
          const i2 = n2 - r2;
          return this === t2 && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e2, r2, n2) : Uint8Array.prototype.set.call(t2, this.subarray(r2, n2), e2), i2;
        }, f.prototype.fill = function(t2, e2, r2, n2) {
          if ("string" == typeof t2) {
            if ("string" == typeof e2 ? (n2 = e2, e2 = 0, r2 = this.length) : "string" == typeof r2 && (n2 = r2, r2 = this.length), void 0 !== n2 && "string" != typeof n2)
              throw new TypeError("encoding must be a string");
            if ("string" == typeof n2 && !f.isEncoding(n2))
              throw new TypeError("Unknown encoding: " + n2);
            if (1 === t2.length) {
              const e3 = t2.charCodeAt(0);
              ("utf8" === n2 && e3 < 128 || "latin1" === n2) && (t2 = e3);
            }
          } else
            "number" == typeof t2 ? t2 &= 255 : "boolean" == typeof t2 && (t2 = Number(t2));
          if (e2 < 0 || this.length < e2 || this.length < r2)
            throw new RangeError("Out of range index");
          if (r2 <= e2)
            return this;
          let i2;
          if (e2 >>>= 0, r2 = void 0 === r2 ? this.length : r2 >>> 0, t2 || (t2 = 0), "number" == typeof t2)
            for (i2 = e2; i2 < r2; ++i2)
              this[i2] = t2;
          else {
            const o2 = f.isBuffer(t2) ? t2 : f.from(t2, n2), a2 = o2.length;
            if (0 === a2)
              throw new TypeError('The value "' + t2 + '" is invalid for argument "value"');
            for (i2 = 0; i2 < r2 - e2; ++i2)
              this[i2 + e2] = o2[i2 % a2];
          }
          return this;
        };
        const U = {};
        function q(t2, e2, r2) {
          U[t2] = class extends r2 {
            constructor() {
              super(), Object.defineProperty(this, "message", { value: e2.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${t2}]`, this.stack, delete this.name;
            }
            get code() {
              return t2;
            }
            set code(t3) {
              Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: t3, writable: true });
            }
            toString() {
              return `${this.name} [${t2}]: ${this.message}`;
            }
          };
        }
        function F(t2) {
          let e2 = "", r2 = t2.length;
          const n2 = "-" === t2[0] ? 1 : 0;
          for (; r2 >= n2 + 4; r2 -= 3)
            e2 = `_${t2.slice(r2 - 3, r2)}${e2}`;
          return `${t2.slice(0, r2)}${e2}`;
        }
        function z(t2, e2, r2, n2, i2, o2) {
          if (t2 > r2 || t2 < e2) {
            const n3 = "bigint" == typeof e2 ? "n" : "";
            let i3;
            throw i3 = o2 > 3 ? 0 === e2 || e2 === BigInt(0) ? `>= 0${n3} and < 2${n3} ** ${8 * (o2 + 1)}${n3}` : `>= -(2${n3} ** ${8 * (o2 + 1) - 1}${n3}) and < 2 ** ${8 * (o2 + 1) - 1}${n3}` : `>= ${e2}${n3} and <= ${r2}${n3}`, new U.ERR_OUT_OF_RANGE("value", i3, t2);
          }
          !function(t3, e3, r3) {
            K(e3, "offset"), void 0 !== t3[e3] && void 0 !== t3[e3 + r3] || G(e3, t3.length - (r3 + 1));
          }(n2, i2, o2);
        }
        function K(t2, e2) {
          if ("number" != typeof t2)
            throw new U.ERR_INVALID_ARG_TYPE(e2, "number", t2);
        }
        function G(t2, e2, r2) {
          if (Math.floor(t2) !== t2)
            throw K(t2, r2), new U.ERR_OUT_OF_RANGE(r2 || "offset", "an integer", t2);
          if (e2 < 0)
            throw new U.ERR_BUFFER_OUT_OF_BOUNDS();
          throw new U.ERR_OUT_OF_RANGE(r2 || "offset", `>= ${r2 ? 1 : 0} and <= ${e2}`, t2);
        }
        q("ERR_BUFFER_OUT_OF_BOUNDS", function(t2) {
          return t2 ? `${t2} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
        }, RangeError), q("ERR_INVALID_ARG_TYPE", function(t2, e2) {
          return `The "${t2}" argument must be of type number. Received type ${typeof e2}`;
        }, TypeError), q("ERR_OUT_OF_RANGE", function(t2, e2, r2) {
          let n2 = `The value of "${t2}" is out of range.`, i2 = r2;
          return Number.isInteger(r2) && Math.abs(r2) > 2 ** 32 ? i2 = F(String(r2)) : "bigint" == typeof r2 && (i2 = String(r2), (r2 > BigInt(2) ** BigInt(32) || r2 < -(BigInt(2) ** BigInt(32))) && (i2 = F(i2)), i2 += "n"), n2 += ` It must be ${e2}. Received ${i2}`, n2;
        }, RangeError);
        const H = /[^+/0-9A-Za-z-_]/g;
        function $(t2, e2) {
          let r2;
          e2 = e2 || 1 / 0;
          const n2 = t2.length;
          let i2 = null;
          const o2 = [];
          for (let a2 = 0; a2 < n2; ++a2) {
            if (r2 = t2.charCodeAt(a2), r2 > 55295 && r2 < 57344) {
              if (!i2) {
                if (r2 > 56319) {
                  (e2 -= 3) > -1 && o2.push(239, 191, 189);
                  continue;
                }
                if (a2 + 1 === n2) {
                  (e2 -= 3) > -1 && o2.push(239, 191, 189);
                  continue;
                }
                i2 = r2;
                continue;
              }
              if (r2 < 56320) {
                (e2 -= 3) > -1 && o2.push(239, 191, 189), i2 = r2;
                continue;
              }
              r2 = 65536 + (i2 - 55296 << 10 | r2 - 56320);
            } else
              i2 && (e2 -= 3) > -1 && o2.push(239, 191, 189);
            if (i2 = null, r2 < 128) {
              if ((e2 -= 1) < 0)
                break;
              o2.push(r2);
            } else if (r2 < 2048) {
              if ((e2 -= 2) < 0)
                break;
              o2.push(r2 >> 6 | 192, 63 & r2 | 128);
            } else if (r2 < 65536) {
              if ((e2 -= 3) < 0)
                break;
              o2.push(r2 >> 12 | 224, r2 >> 6 & 63 | 128, 63 & r2 | 128);
            } else {
              if (!(r2 < 1114112))
                throw new Error("Invalid code point");
              if ((e2 -= 4) < 0)
                break;
              o2.push(r2 >> 18 | 240, r2 >> 12 & 63 | 128, r2 >> 6 & 63 | 128, 63 & r2 | 128);
            }
          }
          return o2;
        }
        function W(t2) {
          return n.toByteArray(function(t3) {
            if ((t3 = (t3 = t3.split("=")[0]).trim().replace(H, "")).length < 2)
              return "";
            for (; t3.length % 4 != 0; )
              t3 += "=";
            return t3;
          }(t2));
        }
        function V(t2, e2, r2, n2) {
          let i2;
          for (i2 = 0; i2 < n2 && !(i2 + r2 >= e2.length || i2 >= t2.length); ++i2)
            e2[i2 + r2] = t2[i2];
          return i2;
        }
        function Y(t2, e2) {
          return t2 instanceof e2 || null != t2 && null != t2.constructor && null != t2.constructor.name && t2.constructor.name === e2.name;
        }
        function Z(t2) {
          return t2 != t2;
        }
        const X = function() {
          const t2 = "0123456789abcdef", e2 = new Array(256);
          for (let r2 = 0; r2 < 16; ++r2) {
            const n2 = 16 * r2;
            for (let i2 = 0; i2 < 16; ++i2)
              e2[n2 + i2] = t2[r2] + t2[i2];
          }
          return e2;
        }();
        function J(t2) {
          return "undefined" == typeof BigInt ? Q : t2;
        }
        function Q() {
          throw new Error("BigInt not supported");
        }
      }, 2787: (t, e, r) => {
        "use strict";
        var n = r(8534), i = r(1919), o = i(n("String.prototype.indexOf"));
        t.exports = function(t2, e2) {
          var r2 = n(t2, !!e2);
          return "function" == typeof r2 && o(t2, ".prototype.") > -1 ? i(r2) : r2;
        };
      }, 1919: (t, e, r) => {
        "use strict";
        var n = r(3583), i = r(8534), o = r(2644), a = r(7379), s = i("%Function.prototype.apply%"), f = i("%Function.prototype.call%"), h = i("%Reflect.apply%", true) || n.call(f, s), u = r(3790), c = i("%Math.max%");
        t.exports = function(t2) {
          if ("function" != typeof t2)
            throw new a("a function is required");
          var e2 = h(n, f, arguments);
          return o(e2, 1 + c(0, t2.length - (arguments.length - 1)), true);
        };
        var d = function() {
          return h(n, s, arguments);
        };
        u ? u(t.exports, "apply", { value: d }) : t.exports.apply = d;
      }, 9526: (t, e, r) => {
        var n = r(6671).Buffer, i = r(896).Transform, o = r(4105).I;
        function a(t2) {
          i.call(this), this.hashMode = "string" == typeof t2, this.hashMode ? this[t2] = this._finalOrDigest : this.final = this._finalOrDigest, this._final && (this.__final = this._final, this._final = null), this._decoder = null, this._encoding = null;
        }
        r(6192)(a, i), a.prototype.update = function(t2, e2, r2) {
          "string" == typeof t2 && (t2 = n.from(t2, e2));
          var i2 = this._update(t2);
          return this.hashMode ? this : (r2 && (i2 = this._toString(i2, r2)), i2);
        }, a.prototype.setAutoPadding = function() {
        }, a.prototype.getAuthTag = function() {
          throw new Error("trying to get auth tag in unsupported state");
        }, a.prototype.setAuthTag = function() {
          throw new Error("trying to set auth tag in unsupported state");
        }, a.prototype.setAAD = function() {
          throw new Error("trying to set aad in unsupported state");
        }, a.prototype._transform = function(t2, e2, r2) {
          var n2;
          try {
            this.hashMode ? this._update(t2) : this.push(this._update(t2));
          } catch (t3) {
            n2 = t3;
          } finally {
            r2(n2);
          }
        }, a.prototype._flush = function(t2) {
          var e2;
          try {
            this.push(this.__final());
          } catch (t3) {
            e2 = t3;
          }
          t2(e2);
        }, a.prototype._finalOrDigest = function(t2) {
          var e2 = this.__final() || n.alloc(0);
          return t2 && (e2 = this._toString(e2, t2, true)), e2;
        }, a.prototype._toString = function(t2, e2, r2) {
          if (this._decoder || (this._decoder = new o(e2), this._encoding = e2), this._encoding !== e2)
            throw new Error("can't switch encodings");
          var n2 = this._decoder.write(t2);
          return r2 && (n2 += this._decoder.end()), n2;
        }, t.exports = a;
      }, 3615: (t, e, r) => {
        function n(t2) {
          return Object.prototype.toString.call(t2);
        }
        e.isArray = function(t2) {
          return Array.isArray ? Array.isArray(t2) : "[object Array]" === n(t2);
        }, e.isBoolean = function(t2) {
          return "boolean" == typeof t2;
        }, e.isNull = function(t2) {
          return null === t2;
        }, e.isNullOrUndefined = function(t2) {
          return null == t2;
        }, e.isNumber = function(t2) {
          return "number" == typeof t2;
        }, e.isString = function(t2) {
          return "string" == typeof t2;
        }, e.isSymbol = function(t2) {
          return "symbol" == typeof t2;
        }, e.isUndefined = function(t2) {
          return void 0 === t2;
        }, e.isRegExp = function(t2) {
          return "[object RegExp]" === n(t2);
        }, e.isObject = function(t2) {
          return "object" == typeof t2 && null !== t2;
        }, e.isDate = function(t2) {
          return "[object Date]" === n(t2);
        }, e.isError = function(t2) {
          return "[object Error]" === n(t2) || t2 instanceof Error;
        }, e.isFunction = function(t2) {
          return "function" == typeof t2;
        }, e.isPrimitive = function(t2) {
          return null === t2 || "boolean" == typeof t2 || "number" == typeof t2 || "string" == typeof t2 || "symbol" == typeof t2 || void 0 === t2;
        }, e.isBuffer = r(4686).Buffer.isBuffer;
      }, 8939: (t, e, r) => {
        var n = r(1709), i = r(8724);
        t.exports = function(t2) {
          return new a(t2);
        };
        var o = { secp256k1: { name: "secp256k1", byteLength: 32 }, secp224r1: { name: "p224", byteLength: 28 }, prime256v1: { name: "p256", byteLength: 32 }, prime192v1: { name: "p192", byteLength: 24 }, ed25519: { name: "ed25519", byteLength: 32 }, secp384r1: { name: "p384", byteLength: 48 }, secp521r1: { name: "p521", byteLength: 66 } };
        function a(t2) {
          this.curveType = o[t2], this.curveType || (this.curveType = { name: t2 }), this.curve = new n.ec(this.curveType.name), this.keys = void 0;
        }
        function s(t2, e2, r2) {
          Array.isArray(t2) || (t2 = t2.toArray());
          var n2 = new Buffer(t2);
          if (r2 && n2.length < r2) {
            var i2 = new Buffer(r2 - n2.length);
            i2.fill(0), n2 = Buffer.concat([i2, n2]);
          }
          return e2 ? n2.toString(e2) : n2;
        }
        o.p224 = o.secp224r1, o.p256 = o.secp256r1 = o.prime256v1, o.p192 = o.secp192r1 = o.prime192v1, o.p384 = o.secp384r1, o.p521 = o.secp521r1, a.prototype.generateKeys = function(t2, e2) {
          return this.keys = this.curve.genKeyPair(), this.getPublicKey(t2, e2);
        }, a.prototype.computeSecret = function(t2, e2, r2) {
          return e2 = e2 || "utf8", Buffer.isBuffer(t2) || (t2 = new Buffer(t2, e2)), s(this.curve.keyFromPublic(t2).getPublic().mul(this.keys.getPrivate()).getX(), r2, this.curveType.byteLength);
        }, a.prototype.getPublicKey = function(t2, e2) {
          var r2 = this.keys.getPublic("compressed" === e2, true);
          return "hybrid" === e2 && (r2[r2.length - 1] % 2 ? r2[0] = 7 : r2[0] = 6), s(r2, t2);
        }, a.prototype.getPrivateKey = function(t2) {
          return s(this.keys.getPrivate(), t2);
        }, a.prototype.setPublicKey = function(t2, e2) {
          return e2 = e2 || "utf8", Buffer.isBuffer(t2) || (t2 = new Buffer(t2, e2)), this.keys._importPublic(t2), this;
        }, a.prototype.setPrivateKey = function(t2, e2) {
          e2 = e2 || "utf8", Buffer.isBuffer(t2) || (t2 = new Buffer(t2, e2));
          var r2 = new i(t2);
          return r2 = r2.toString(16), this.keys = this.curve.genKeyPair(), this.keys._importPrivate(r2), this;
        };
      }, 7824: (t, e, r) => {
        "use strict";
        var n = r(6192), i = r(5916), o = r(1609), a = r(9273), s = r(9526);
        function f(t2) {
          s.call(this, "digest"), this._hash = t2;
        }
        n(f, s), f.prototype._update = function(t2) {
          this._hash.update(t2);
        }, f.prototype._final = function() {
          return this._hash.digest();
        }, t.exports = function(t2) {
          return "md5" === (t2 = t2.toLowerCase()) ? new i() : "rmd160" === t2 || "ripemd160" === t2 ? new o() : new f(a(t2));
        };
      }, 1868: (t, e, r) => {
        var n = r(5916);
        t.exports = function(t2) {
          return new n().update(t2).digest();
        };
      }, 4646: (t, e, r) => {
        "use strict";
        var n = r(6192), i = r(3823), o = r(9526), a = r(6671).Buffer, s = r(1868), f = r(1609), h = r(9273), u = a.alloc(128);
        function c(t2, e2) {
          o.call(this, "digest"), "string" == typeof e2 && (e2 = a.from(e2));
          var r2 = "sha512" === t2 || "sha384" === t2 ? 128 : 64;
          this._alg = t2, this._key = e2, e2.length > r2 ? e2 = ("rmd160" === t2 ? new f() : h(t2)).update(e2).digest() : e2.length < r2 && (e2 = a.concat([e2, u], r2));
          for (var n2 = this._ipad = a.allocUnsafe(r2), i2 = this._opad = a.allocUnsafe(r2), s2 = 0; s2 < r2; s2++)
            n2[s2] = 54 ^ e2[s2], i2[s2] = 92 ^ e2[s2];
          this._hash = "rmd160" === t2 ? new f() : h(t2), this._hash.update(n2);
        }
        n(c, o), c.prototype._update = function(t2) {
          this._hash.update(t2);
        }, c.prototype._final = function() {
          var t2 = this._hash.digest();
          return ("rmd160" === this._alg ? new f() : h(this._alg)).update(this._opad).update(t2).digest();
        }, t.exports = function(t2, e2) {
          return "rmd160" === (t2 = t2.toLowerCase()) || "ripemd160" === t2 ? new c("rmd160", e2) : "md5" === t2 ? new i(s, e2) : new c(t2, e2);
        };
      }, 3823: (t, e, r) => {
        "use strict";
        var n = r(6192), i = r(6671).Buffer, o = r(9526), a = i.alloc(128), s = 64;
        function f(t2, e2) {
          o.call(this, "digest"), "string" == typeof e2 && (e2 = i.from(e2)), this._alg = t2, this._key = e2, e2.length > s ? e2 = t2(e2) : e2.length < s && (e2 = i.concat([e2, a], s));
          for (var r2 = this._ipad = i.allocUnsafe(s), n2 = this._opad = i.allocUnsafe(s), f2 = 0; f2 < s; f2++)
            r2[f2] = 54 ^ e2[f2], n2[f2] = 92 ^ e2[f2];
          this._hash = [r2];
        }
        n(f, o), f.prototype._update = function(t2) {
          this._hash.push(t2);
        }, f.prototype._final = function() {
          var t2 = this._alg(i.concat(this._hash));
          return this._alg(i.concat([this._opad, t2]));
        }, t.exports = f;
      }, 6855: (t, e, r) => {
        "use strict";
        e.randomBytes = e.rng = e.pseudoRandomBytes = e.prng = r(8030), e.createHash = e.Hash = r(7824), e.createHmac = e.Hmac = r(4646);
        var n = r(7152), i = Object.keys(n), o = ["sha1", "sha224", "sha256", "sha384", "sha512", "md5", "rmd160"].concat(i);
        e.getHashes = function() {
          return o;
        };
        var a = r(8045);
        e.pbkdf2 = a.pbkdf2, e.pbkdf2Sync = a.pbkdf2Sync;
        var s = r(1373);
        e.Cipher = s.Cipher, e.createCipher = s.createCipher, e.Cipheriv = s.Cipheriv, e.createCipheriv = s.createCipheriv, e.Decipher = s.Decipher, e.createDecipher = s.createDecipher, e.Decipheriv = s.Decipheriv, e.createDecipheriv = s.createDecipheriv, e.getCiphers = s.getCiphers, e.listCiphers = s.listCiphers;
        var f = r(6399);
        e.DiffieHellmanGroup = f.DiffieHellmanGroup, e.createDiffieHellmanGroup = f.createDiffieHellmanGroup, e.getDiffieHellman = f.getDiffieHellman, e.createDiffieHellman = f.createDiffieHellman, e.DiffieHellman = f.DiffieHellman;
        var h = r(159);
        e.createSign = h.createSign, e.Sign = h.Sign, e.createVerify = h.createVerify, e.Verify = h.Verify, e.createECDH = r(8939);
        var u = r(8596);
        e.publicEncrypt = u.publicEncrypt, e.privateEncrypt = u.privateEncrypt, e.publicDecrypt = u.publicDecrypt, e.privateDecrypt = u.privateDecrypt;
        var c = r(4526);
        e.randomFill = c.randomFill, e.randomFillSync = c.randomFillSync, e.createCredentials = function() {
          throw new Error(["sorry, createCredentials is not implemented yet", "we accept pull requests", "https://github.com/crypto-browserify/crypto-browserify"].join("\n"));
        }, e.constants = { DH_CHECK_P_NOT_SAFE_PRIME: 2, DH_CHECK_P_NOT_PRIME: 1, DH_UNABLE_TO_CHECK_GENERATOR: 4, DH_NOT_SUITABLE_GENERATOR: 8, NPN_ENABLED: 1, ALPN_ENABLED: 1, RSA_PKCS1_PADDING: 1, RSA_SSLV23_PADDING: 2, RSA_NO_PADDING: 3, RSA_PKCS1_OAEP_PADDING: 4, RSA_X931_PADDING: 5, RSA_PKCS1_PSS_PADDING: 6, POINT_CONVERSION_COMPRESSED: 2, POINT_CONVERSION_UNCOMPRESSED: 4, POINT_CONVERSION_HYBRID: 6 };
      }, 7517: (t, e, r) => {
        "use strict";
        var n = r(3790), i = r(7388), o = r(7379), a = r(1325);
        t.exports = function(t2, e2, r2) {
          if (!t2 || "object" != typeof t2 && "function" != typeof t2)
            throw new o("`obj` must be an object or a function`");
          if ("string" != typeof e2 && "symbol" != typeof e2)
            throw new o("`property` must be a string or a symbol`");
          if (arguments.length > 3 && "boolean" != typeof arguments[3] && null !== arguments[3])
            throw new o("`nonEnumerable`, if provided, must be a boolean or null");
          if (arguments.length > 4 && "boolean" != typeof arguments[4] && null !== arguments[4])
            throw new o("`nonWritable`, if provided, must be a boolean or null");
          if (arguments.length > 5 && "boolean" != typeof arguments[5] && null !== arguments[5])
            throw new o("`nonConfigurable`, if provided, must be a boolean or null");
          if (arguments.length > 6 && "boolean" != typeof arguments[6])
            throw new o("`loose`, if provided, must be a boolean");
          var s = arguments.length > 3 ? arguments[3] : null, f = arguments.length > 4 ? arguments[4] : null, h = arguments.length > 5 ? arguments[5] : null, u = arguments.length > 6 && arguments[6], c = !!a && a(t2, e2);
          if (n)
            n(t2, e2, { configurable: null === h && c ? c.configurable : !h, enumerable: null === s && c ? c.enumerable : !s, value: r2, writable: null === f && c ? c.writable : !f });
          else {
            if (!u && (s || f || h))
              throw new i("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
            t2[e2] = r2;
          }
        };
      }, 8189: (t, e, r) => {
        "use strict";
        var n = r(1748), i = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"), o = Object.prototype.toString, a = Array.prototype.concat, s = r(7517), f = r(708)(), h = function(t2, e2, r2, n2) {
          if (e2 in t2) {
            if (true === n2) {
              if (t2[e2] === r2)
                return;
            } else if ("function" != typeof (i2 = n2) || "[object Function]" !== o.call(i2) || !n2())
              return;
          }
          var i2;
          f ? s(t2, e2, r2, true) : s(t2, e2, r2);
        }, u = function(t2, e2) {
          var r2 = arguments.length > 2 ? arguments[2] : {}, o2 = n(e2);
          i && (o2 = a.call(o2, Object.getOwnPropertySymbols(e2)));
          for (var s2 = 0; s2 < o2.length; s2 += 1)
            h(t2, o2[s2], e2[o2[s2]], r2[o2[s2]]);
        };
        u.supportsDescriptors = !!f, t.exports = u;
      }, 9913: (t, e, r) => {
        "use strict";
        e.utils = r(6115), e.Cipher = r(9663), e.DES = r(3322), e.CBC = r(9748), e.EDE = r(8886);
      }, 9748: (t, e, r) => {
        "use strict";
        var n = r(8637), i = r(6192), o = {};
        function a(t2) {
          n.equal(t2.length, 8, "Invalid IV length"), this.iv = new Array(8);
          for (var e2 = 0; e2 < this.iv.length; e2++)
            this.iv[e2] = t2[e2];
        }
        e.instantiate = function(t2) {
          function e2(e3) {
            t2.call(this, e3), this._cbcInit();
          }
          i(e2, t2);
          for (var r2 = Object.keys(o), n2 = 0; n2 < r2.length; n2++) {
            var a2 = r2[n2];
            e2.prototype[a2] = o[a2];
          }
          return e2.create = function(t3) {
            return new e2(t3);
          }, e2;
        }, o._cbcInit = function() {
          var t2 = new a(this.options.iv);
          this._cbcState = t2;
        }, o._update = function(t2, e2, r2, n2) {
          var i2 = this._cbcState, o2 = this.constructor.super_.prototype, a2 = i2.iv;
          if ("encrypt" === this.type) {
            for (var s = 0; s < this.blockSize; s++)
              a2[s] ^= t2[e2 + s];
            for (o2._update.call(this, a2, 0, r2, n2), s = 0; s < this.blockSize; s++)
              a2[s] = r2[n2 + s];
          } else {
            for (o2._update.call(this, t2, e2, r2, n2), s = 0; s < this.blockSize; s++)
              r2[n2 + s] ^= a2[s];
            for (s = 0; s < this.blockSize; s++)
              a2[s] = t2[e2 + s];
          }
        };
      }, 9663: (t, e, r) => {
        "use strict";
        var n = r(8637);
        function i(t2) {
          this.options = t2, this.type = this.options.type, this.blockSize = 8, this._init(), this.buffer = new Array(this.blockSize), this.bufferOff = 0, this.padding = false !== t2.padding;
        }
        t.exports = i, i.prototype._init = function() {
        }, i.prototype.update = function(t2) {
          return 0 === t2.length ? [] : "decrypt" === this.type ? this._updateDecrypt(t2) : this._updateEncrypt(t2);
        }, i.prototype._buffer = function(t2, e2) {
          for (var r2 = Math.min(this.buffer.length - this.bufferOff, t2.length - e2), n2 = 0; n2 < r2; n2++)
            this.buffer[this.bufferOff + n2] = t2[e2 + n2];
          return this.bufferOff += r2, r2;
        }, i.prototype._flushBuffer = function(t2, e2) {
          return this._update(this.buffer, 0, t2, e2), this.bufferOff = 0, this.blockSize;
        }, i.prototype._updateEncrypt = function(t2) {
          var e2 = 0, r2 = 0, n2 = (this.bufferOff + t2.length) / this.blockSize | 0, i2 = new Array(n2 * this.blockSize);
          0 !== this.bufferOff && (e2 += this._buffer(t2, e2), this.bufferOff === this.buffer.length && (r2 += this._flushBuffer(i2, r2)));
          for (var o = t2.length - (t2.length - e2) % this.blockSize; e2 < o; e2 += this.blockSize)
            this._update(t2, e2, i2, r2), r2 += this.blockSize;
          for (; e2 < t2.length; e2++, this.bufferOff++)
            this.buffer[this.bufferOff] = t2[e2];
          return i2;
        }, i.prototype._updateDecrypt = function(t2) {
          for (var e2 = 0, r2 = 0, n2 = Math.ceil((this.bufferOff + t2.length) / this.blockSize) - 1, i2 = new Array(n2 * this.blockSize); n2 > 0; n2--)
            e2 += this._buffer(t2, e2), r2 += this._flushBuffer(i2, r2);
          return e2 += this._buffer(t2, e2), i2;
        }, i.prototype.final = function(t2) {
          var e2, r2;
          return t2 && (e2 = this.update(t2)), r2 = "encrypt" === this.type ? this._finalEncrypt() : this._finalDecrypt(), e2 ? e2.concat(r2) : r2;
        }, i.prototype._pad = function(t2, e2) {
          if (0 === e2)
            return false;
          for (; e2 < t2.length; )
            t2[e2++] = 0;
          return true;
        }, i.prototype._finalEncrypt = function() {
          if (!this._pad(this.buffer, this.bufferOff))
            return [];
          var t2 = new Array(this.blockSize);
          return this._update(this.buffer, 0, t2, 0), t2;
        }, i.prototype._unpad = function(t2) {
          return t2;
        }, i.prototype._finalDecrypt = function() {
          n.equal(this.bufferOff, this.blockSize, "Not enough data to decrypt");
          var t2 = new Array(this.blockSize);
          return this._flushBuffer(t2, 0), this._unpad(t2);
        };
      }, 3322: (t, e, r) => {
        "use strict";
        var n = r(8637), i = r(6192), o = r(6115), a = r(9663);
        function s() {
          this.tmp = new Array(2), this.keys = null;
        }
        function f(t2) {
          a.call(this, t2);
          var e2 = new s();
          this._desState = e2, this.deriveKeys(e2, t2.key);
        }
        i(f, a), t.exports = f, f.create = function(t2) {
          return new f(t2);
        };
        var h = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
        f.prototype.deriveKeys = function(t2, e2) {
          t2.keys = new Array(32), n.equal(e2.length, this.blockSize, "Invalid key length");
          var r2 = o.readUInt32BE(e2, 0), i2 = o.readUInt32BE(e2, 4);
          o.pc1(r2, i2, t2.tmp, 0), r2 = t2.tmp[0], i2 = t2.tmp[1];
          for (var a2 = 0; a2 < t2.keys.length; a2 += 2) {
            var s2 = h[a2 >>> 1];
            r2 = o.r28shl(r2, s2), i2 = o.r28shl(i2, s2), o.pc2(r2, i2, t2.keys, a2);
          }
        }, f.prototype._update = function(t2, e2, r2, n2) {
          var i2 = this._desState, a2 = o.readUInt32BE(t2, e2), s2 = o.readUInt32BE(t2, e2 + 4);
          o.ip(a2, s2, i2.tmp, 0), a2 = i2.tmp[0], s2 = i2.tmp[1], "encrypt" === this.type ? this._encrypt(i2, a2, s2, i2.tmp, 0) : this._decrypt(i2, a2, s2, i2.tmp, 0), a2 = i2.tmp[0], s2 = i2.tmp[1], o.writeUInt32BE(r2, a2, n2), o.writeUInt32BE(r2, s2, n2 + 4);
        }, f.prototype._pad = function(t2, e2) {
          if (false === this.padding)
            return false;
          for (var r2 = t2.length - e2, n2 = e2; n2 < t2.length; n2++)
            t2[n2] = r2;
          return true;
        }, f.prototype._unpad = function(t2) {
          if (false === this.padding)
            return t2;
          for (var e2 = t2[t2.length - 1], r2 = t2.length - e2; r2 < t2.length; r2++)
            n.equal(t2[r2], e2);
          return t2.slice(0, t2.length - e2);
        }, f.prototype._encrypt = function(t2, e2, r2, n2, i2) {
          for (var a2 = e2, s2 = r2, f2 = 0; f2 < t2.keys.length; f2 += 2) {
            var h2 = t2.keys[f2], u = t2.keys[f2 + 1];
            o.expand(s2, t2.tmp, 0), h2 ^= t2.tmp[0], u ^= t2.tmp[1];
            var c = o.substitute(h2, u), d = s2;
            s2 = (a2 ^ o.permute(c)) >>> 0, a2 = d;
          }
          o.rip(s2, a2, n2, i2);
        }, f.prototype._decrypt = function(t2, e2, r2, n2, i2) {
          for (var a2 = r2, s2 = e2, f2 = t2.keys.length - 2; f2 >= 0; f2 -= 2) {
            var h2 = t2.keys[f2], u = t2.keys[f2 + 1];
            o.expand(a2, t2.tmp, 0), h2 ^= t2.tmp[0], u ^= t2.tmp[1];
            var c = o.substitute(h2, u), d = a2;
            a2 = (s2 ^ o.permute(c)) >>> 0, s2 = d;
          }
          o.rip(a2, s2, n2, i2);
        };
      }, 8886: (t, e, r) => {
        "use strict";
        var n = r(8637), i = r(6192), o = r(9663), a = r(3322);
        function s(t2, e2) {
          n.equal(e2.length, 24, "Invalid key length");
          var r2 = e2.slice(0, 8), i2 = e2.slice(8, 16), o2 = e2.slice(16, 24);
          this.ciphers = "encrypt" === t2 ? [a.create({ type: "encrypt", key: r2 }), a.create({ type: "decrypt", key: i2 }), a.create({ type: "encrypt", key: o2 })] : [a.create({ type: "decrypt", key: o2 }), a.create({ type: "encrypt", key: i2 }), a.create({ type: "decrypt", key: r2 })];
        }
        function f(t2) {
          o.call(this, t2);
          var e2 = new s(this.type, this.options.key);
          this._edeState = e2;
        }
        i(f, o), t.exports = f, f.create = function(t2) {
          return new f(t2);
        }, f.prototype._update = function(t2, e2, r2, n2) {
          var i2 = this._edeState;
          i2.ciphers[0]._update(t2, e2, r2, n2), i2.ciphers[1]._update(r2, n2, r2, n2), i2.ciphers[2]._update(r2, n2, r2, n2);
        }, f.prototype._pad = a.prototype._pad, f.prototype._unpad = a.prototype._unpad;
      }, 6115: (t, e) => {
        "use strict";
        e.readUInt32BE = function(t2, e2) {
          return (t2[0 + e2] << 24 | t2[1 + e2] << 16 | t2[2 + e2] << 8 | t2[3 + e2]) >>> 0;
        }, e.writeUInt32BE = function(t2, e2, r2) {
          t2[0 + r2] = e2 >>> 24, t2[1 + r2] = e2 >>> 16 & 255, t2[2 + r2] = e2 >>> 8 & 255, t2[3 + r2] = 255 & e2;
        }, e.ip = function(t2, e2, r2, n2) {
          for (var i2 = 0, o = 0, a = 6; a >= 0; a -= 2) {
            for (var s = 0; s <= 24; s += 8)
              i2 <<= 1, i2 |= e2 >>> s + a & 1;
            for (s = 0; s <= 24; s += 8)
              i2 <<= 1, i2 |= t2 >>> s + a & 1;
          }
          for (a = 6; a >= 0; a -= 2) {
            for (s = 1; s <= 25; s += 8)
              o <<= 1, o |= e2 >>> s + a & 1;
            for (s = 1; s <= 25; s += 8)
              o <<= 1, o |= t2 >>> s + a & 1;
          }
          r2[n2 + 0] = i2 >>> 0, r2[n2 + 1] = o >>> 0;
        }, e.rip = function(t2, e2, r2, n2) {
          for (var i2 = 0, o = 0, a = 0; a < 4; a++)
            for (var s = 24; s >= 0; s -= 8)
              i2 <<= 1, i2 |= e2 >>> s + a & 1, i2 <<= 1, i2 |= t2 >>> s + a & 1;
          for (a = 4; a < 8; a++)
            for (s = 24; s >= 0; s -= 8)
              o <<= 1, o |= e2 >>> s + a & 1, o <<= 1, o |= t2 >>> s + a & 1;
          r2[n2 + 0] = i2 >>> 0, r2[n2 + 1] = o >>> 0;
        }, e.pc1 = function(t2, e2, r2, n2) {
          for (var i2 = 0, o = 0, a = 7; a >= 5; a--) {
            for (var s = 0; s <= 24; s += 8)
              i2 <<= 1, i2 |= e2 >> s + a & 1;
            for (s = 0; s <= 24; s += 8)
              i2 <<= 1, i2 |= t2 >> s + a & 1;
          }
          for (s = 0; s <= 24; s += 8)
            i2 <<= 1, i2 |= e2 >> s + a & 1;
          for (a = 1; a <= 3; a++) {
            for (s = 0; s <= 24; s += 8)
              o <<= 1, o |= e2 >> s + a & 1;
            for (s = 0; s <= 24; s += 8)
              o <<= 1, o |= t2 >> s + a & 1;
          }
          for (s = 0; s <= 24; s += 8)
            o <<= 1, o |= t2 >> s + a & 1;
          r2[n2 + 0] = i2 >>> 0, r2[n2 + 1] = o >>> 0;
        }, e.r28shl = function(t2, e2) {
          return t2 << e2 & 268435455 | t2 >>> 28 - e2;
        };
        var r = [14, 11, 17, 4, 27, 23, 25, 0, 13, 22, 7, 18, 5, 9, 16, 24, 2, 20, 12, 21, 1, 8, 15, 26, 15, 4, 25, 19, 9, 1, 26, 16, 5, 11, 23, 8, 12, 7, 17, 0, 22, 3, 10, 14, 6, 20, 27, 24];
        e.pc2 = function(t2, e2, n2, i2) {
          for (var o = 0, a = 0, s = r.length >>> 1, f = 0; f < s; f++)
            o <<= 1, o |= t2 >>> r[f] & 1;
          for (f = s; f < r.length; f++)
            a <<= 1, a |= e2 >>> r[f] & 1;
          n2[i2 + 0] = o >>> 0, n2[i2 + 1] = a >>> 0;
        }, e.expand = function(t2, e2, r2) {
          var n2 = 0, i2 = 0;
          n2 = (1 & t2) << 5 | t2 >>> 27;
          for (var o = 23; o >= 15; o -= 4)
            n2 <<= 6, n2 |= t2 >>> o & 63;
          for (o = 11; o >= 3; o -= 4)
            i2 |= t2 >>> o & 63, i2 <<= 6;
          i2 |= (31 & t2) << 1 | t2 >>> 31, e2[r2 + 0] = n2 >>> 0, e2[r2 + 1] = i2 >>> 0;
        };
        var n = [14, 0, 4, 15, 13, 7, 1, 4, 2, 14, 15, 2, 11, 13, 8, 1, 3, 10, 10, 6, 6, 12, 12, 11, 5, 9, 9, 5, 0, 3, 7, 8, 4, 15, 1, 12, 14, 8, 8, 2, 13, 4, 6, 9, 2, 1, 11, 7, 15, 5, 12, 11, 9, 3, 7, 14, 3, 10, 10, 0, 5, 6, 0, 13, 15, 3, 1, 13, 8, 4, 14, 7, 6, 15, 11, 2, 3, 8, 4, 14, 9, 12, 7, 0, 2, 1, 13, 10, 12, 6, 0, 9, 5, 11, 10, 5, 0, 13, 14, 8, 7, 10, 11, 1, 10, 3, 4, 15, 13, 4, 1, 2, 5, 11, 8, 6, 12, 7, 6, 12, 9, 0, 3, 5, 2, 14, 15, 9, 10, 13, 0, 7, 9, 0, 14, 9, 6, 3, 3, 4, 15, 6, 5, 10, 1, 2, 13, 8, 12, 5, 7, 14, 11, 12, 4, 11, 2, 15, 8, 1, 13, 1, 6, 10, 4, 13, 9, 0, 8, 6, 15, 9, 3, 8, 0, 7, 11, 4, 1, 15, 2, 14, 12, 3, 5, 11, 10, 5, 14, 2, 7, 12, 7, 13, 13, 8, 14, 11, 3, 5, 0, 6, 6, 15, 9, 0, 10, 3, 1, 4, 2, 7, 8, 2, 5, 12, 11, 1, 12, 10, 4, 14, 15, 9, 10, 3, 6, 15, 9, 0, 0, 6, 12, 10, 11, 1, 7, 13, 13, 8, 15, 9, 1, 4, 3, 5, 14, 11, 5, 12, 2, 7, 8, 2, 4, 14, 2, 14, 12, 11, 4, 2, 1, 12, 7, 4, 10, 7, 11, 13, 6, 1, 8, 5, 5, 0, 3, 15, 15, 10, 13, 3, 0, 9, 14, 8, 9, 6, 4, 11, 2, 8, 1, 12, 11, 7, 10, 1, 13, 14, 7, 2, 8, 13, 15, 6, 9, 15, 12, 0, 5, 9, 6, 10, 3, 4, 0, 5, 14, 3, 12, 10, 1, 15, 10, 4, 15, 2, 9, 7, 2, 12, 6, 9, 8, 5, 0, 6, 13, 1, 3, 13, 4, 14, 14, 0, 7, 11, 5, 3, 11, 8, 9, 4, 14, 3, 15, 2, 5, 12, 2, 9, 8, 5, 12, 15, 3, 10, 7, 11, 0, 14, 4, 1, 10, 7, 1, 6, 13, 0, 11, 8, 6, 13, 4, 13, 11, 0, 2, 11, 14, 7, 15, 4, 0, 9, 8, 1, 13, 10, 3, 14, 12, 3, 9, 5, 7, 12, 5, 2, 10, 15, 6, 8, 1, 6, 1, 6, 4, 11, 11, 13, 13, 8, 12, 1, 3, 4, 7, 10, 14, 7, 10, 9, 15, 5, 6, 0, 8, 15, 0, 14, 5, 2, 9, 3, 2, 12, 13, 1, 2, 15, 8, 13, 4, 8, 6, 10, 15, 3, 11, 7, 1, 4, 10, 12, 9, 5, 3, 6, 14, 11, 5, 0, 0, 14, 12, 9, 7, 2, 7, 2, 11, 1, 4, 14, 1, 7, 9, 4, 12, 10, 14, 8, 2, 13, 0, 15, 6, 12, 10, 9, 13, 0, 15, 3, 3, 5, 5, 6, 8, 11];
        e.substitute = function(t2, e2) {
          for (var r2 = 0, i2 = 0; i2 < 4; i2++)
            r2 <<= 4, r2 |= n[64 * i2 + (t2 >>> 18 - 6 * i2 & 63)];
          for (i2 = 0; i2 < 4; i2++)
            r2 <<= 4, r2 |= n[256 + 64 * i2 + (e2 >>> 18 - 6 * i2 & 63)];
          return r2 >>> 0;
        };
        var i = [16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22, 30, 24, 8, 18, 0, 5, 29, 23, 13, 19, 2, 26, 10, 21, 28, 7];
        e.permute = function(t2) {
          for (var e2 = 0, r2 = 0; r2 < i.length; r2++)
            e2 <<= 1, e2 |= t2 >>> i[r2] & 1;
          return e2 >>> 0;
        }, e.padSplit = function(t2, e2, r2) {
          for (var n2 = t2.toString(2); n2.length < e2; )
            n2 = "0" + n2;
          for (var i2 = [], o = 0; o < e2; o += r2)
            i2.push(n2.slice(o, o + r2));
          return i2.join(" ");
        };
      }, 6399: (t, e, r) => {
        var n = r(6245), i = r(4828), o = r(6835), a = { binary: true, hex: true, base64: true };
        e.DiffieHellmanGroup = e.createDiffieHellmanGroup = e.getDiffieHellman = function(t2) {
          var e2 = new Buffer(i[t2].prime, "hex"), r2 = new Buffer(i[t2].gen, "hex");
          return new o(e2, r2);
        }, e.createDiffieHellman = e.DiffieHellman = function t2(e2, r2, i2, s) {
          return Buffer.isBuffer(r2) || void 0 === a[r2] ? t2(e2, "binary", r2, i2) : (r2 = r2 || "binary", s = s || "binary", i2 = i2 || new Buffer([2]), Buffer.isBuffer(i2) || (i2 = new Buffer(i2, s)), "number" == typeof e2 ? new o(n(e2, i2), i2, true) : (Buffer.isBuffer(e2) || (e2 = new Buffer(e2, r2)), new o(e2, i2, true)));
        };
      }, 6835: (t, e, r) => {
        var n = r(8724), i = new (r(4959))(), o = new n(24), a = new n(11), s = new n(10), f = new n(3), h = new n(7), u = r(6245), c = r(8030);
        function d(t2, e2) {
          return e2 = e2 || "utf8", Buffer.isBuffer(t2) || (t2 = new Buffer(t2, e2)), this._pub = new n(t2), this;
        }
        function l(t2, e2) {
          return e2 = e2 || "utf8", Buffer.isBuffer(t2) || (t2 = new Buffer(t2, e2)), this._priv = new n(t2), this;
        }
        t.exports = b;
        var p = {};
        function b(t2, e2, r2) {
          this.setGenerator(e2), this.__prime = new n(t2), this._prime = n.mont(this.__prime), this._primeLen = t2.length, this._pub = void 0, this._priv = void 0, this._primeCode = void 0, r2 ? (this.setPublicKey = d, this.setPrivateKey = l) : this._primeCode = 8;
        }
        function y(t2, e2) {
          var r2 = new Buffer(t2.toArray());
          return e2 ? r2.toString(e2) : r2;
        }
        Object.defineProperty(b.prototype, "verifyError", { enumerable: true, get: function() {
          return "number" != typeof this._primeCode && (this._primeCode = function(t2, e2) {
            var r2 = e2.toString("hex"), n2 = [r2, t2.toString(16)].join("_");
            if (n2 in p)
              return p[n2];
            var c2, d2 = 0;
            if (t2.isEven() || !u.simpleSieve || !u.fermatTest(t2) || !i.test(t2))
              return d2 += 1, d2 += "02" === r2 || "05" === r2 ? 8 : 4, p[n2] = d2, d2;
            switch (i.test(t2.shrn(1)) || (d2 += 2), r2) {
              case "02":
                t2.mod(o).cmp(a) && (d2 += 8);
                break;
              case "05":
                (c2 = t2.mod(s)).cmp(f) && c2.cmp(h) && (d2 += 8);
                break;
              default:
                d2 += 4;
            }
            return p[n2] = d2, d2;
          }(this.__prime, this.__gen)), this._primeCode;
        } }), b.prototype.generateKeys = function() {
          return this._priv || (this._priv = new n(c(this._primeLen))), this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed(), this.getPublicKey();
        }, b.prototype.computeSecret = function(t2) {
          var e2 = (t2 = (t2 = new n(t2)).toRed(this._prime)).redPow(this._priv).fromRed(), r2 = new Buffer(e2.toArray()), i2 = this.getPrime();
          if (r2.length < i2.length) {
            var o2 = new Buffer(i2.length - r2.length);
            o2.fill(0), r2 = Buffer.concat([o2, r2]);
          }
          return r2;
        }, b.prototype.getPublicKey = function(t2) {
          return y(this._pub, t2);
        }, b.prototype.getPrivateKey = function(t2) {
          return y(this._priv, t2);
        }, b.prototype.getPrime = function(t2) {
          return y(this.__prime, t2);
        }, b.prototype.getGenerator = function(t2) {
          return y(this._gen, t2);
        }, b.prototype.setGenerator = function(t2, e2) {
          return e2 = e2 || "utf8", Buffer.isBuffer(t2) || (t2 = new Buffer(t2, e2)), this.__gen = t2, this._gen = new n(t2), this;
        };
      }, 6245: (t, e, r) => {
        var n = r(8030);
        t.exports = m, m.simpleSieve = y, m.fermatTest = g;
        var i = r(8724), o = new i(24), a = new (r(4959))(), s = new i(1), f = new i(2), h = new i(5), u = (new i(16), new i(8), new i(10)), c = new i(3), d = (new i(7), new i(11)), l = new i(4), p = (new i(12), null);
        function b() {
          if (null !== p)
            return p;
          var t2 = [];
          t2[0] = 2;
          for (var e2 = 1, r2 = 3; r2 < 1048576; r2 += 2) {
            for (var n2 = Math.ceil(Math.sqrt(r2)), i2 = 0; i2 < e2 && t2[i2] <= n2 && r2 % t2[i2] != 0; i2++)
              ;
            e2 !== i2 && t2[i2] <= n2 || (t2[e2++] = r2);
          }
          return p = t2, t2;
        }
        function y(t2) {
          for (var e2 = b(), r2 = 0; r2 < e2.length; r2++)
            if (0 === t2.modn(e2[r2]))
              return 0 === t2.cmpn(e2[r2]);
          return true;
        }
        function g(t2) {
          var e2 = i.mont(t2);
          return 0 === f.toRed(e2).redPow(t2.subn(1)).fromRed().cmpn(1);
        }
        function m(t2, e2) {
          if (t2 < 16)
            return new i(2 === e2 || 5 === e2 ? [140, 123] : [140, 39]);
          var r2, p2;
          for (e2 = new i(e2); ; ) {
            for (r2 = new i(n(Math.ceil(t2 / 8))); r2.bitLength() > t2; )
              r2.ishrn(1);
            if (r2.isEven() && r2.iadd(s), r2.testn(1) || r2.iadd(f), e2.cmp(f)) {
              if (!e2.cmp(h))
                for (; r2.mod(u).cmp(c); )
                  r2.iadd(l);
            } else
              for (; r2.mod(o).cmp(d); )
                r2.iadd(l);
            if (y(p2 = r2.shrn(1)) && y(r2) && g(p2) && g(r2) && a.test(p2) && a.test(r2))
              return r2;
          }
        }
      }, 1709: (t, e, r) => {
        "use strict";
        var n = e;
        n.version = r(2928).rE, n.utils = r(103), n.rand = r(3569), n.curve = r(674), n.curves = r(4636), n.ec = r(5571), n.eddsa = r(2030);
      }, 4449: (t, e, r) => {
        "use strict";
        var n = r(8724), i = r(103), o = i.getNAF, a = i.getJSF, s = i.assert;
        function f(t2, e2) {
          this.type = t2, this.p = new n(e2.p, 16), this.red = e2.prime ? n.red(e2.prime) : n.mont(this.p), this.zero = new n(0).toRed(this.red), this.one = new n(1).toRed(this.red), this.two = new n(2).toRed(this.red), this.n = e2.n && new n(e2.n, 16), this.g = e2.g && this.pointFromJSON(e2.g, e2.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
          var r2 = this.n && this.p.div(this.n);
          !r2 || r2.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = true, this.redN = this.n.toRed(this.red));
        }
        function h(t2, e2) {
          this.curve = t2, this.type = e2, this.precomputed = null;
        }
        t.exports = f, f.prototype.point = function() {
          throw new Error("Not implemented");
        }, f.prototype.validate = function() {
          throw new Error("Not implemented");
        }, f.prototype._fixedNafMul = function(t2, e2) {
          s(t2.precomputed);
          var r2 = t2._getDoubles(), n2 = o(e2, 1, this._bitLength), i2 = (1 << r2.step + 1) - (r2.step % 2 == 0 ? 2 : 1);
          i2 /= 3;
          var a2, f2, h2 = [];
          for (a2 = 0; a2 < n2.length; a2 += r2.step) {
            f2 = 0;
            for (var u = a2 + r2.step - 1; u >= a2; u--)
              f2 = (f2 << 1) + n2[u];
            h2.push(f2);
          }
          for (var c = this.jpoint(null, null, null), d = this.jpoint(null, null, null), l = i2; l > 0; l--) {
            for (a2 = 0; a2 < h2.length; a2++)
              (f2 = h2[a2]) === l ? d = d.mixedAdd(r2.points[a2]) : f2 === -l && (d = d.mixedAdd(r2.points[a2].neg()));
            c = c.add(d);
          }
          return c.toP();
        }, f.prototype._wnafMul = function(t2, e2) {
          var r2 = 4, n2 = t2._getNAFPoints(r2);
          r2 = n2.wnd;
          for (var i2 = n2.points, a2 = o(e2, r2, this._bitLength), f2 = this.jpoint(null, null, null), h2 = a2.length - 1; h2 >= 0; h2--) {
            for (var u = 0; h2 >= 0 && 0 === a2[h2]; h2--)
              u++;
            if (h2 >= 0 && u++, f2 = f2.dblp(u), h2 < 0)
              break;
            var c = a2[h2];
            s(0 !== c), f2 = "affine" === t2.type ? c > 0 ? f2.mixedAdd(i2[c - 1 >> 1]) : f2.mixedAdd(i2[-c - 1 >> 1].neg()) : c > 0 ? f2.add(i2[c - 1 >> 1]) : f2.add(i2[-c - 1 >> 1].neg());
          }
          return "affine" === t2.type ? f2.toP() : f2;
        }, f.prototype._wnafMulAdd = function(t2, e2, r2, n2, i2) {
          var s2, f2, h2, u = this._wnafT1, c = this._wnafT2, d = this._wnafT3, l = 0;
          for (s2 = 0; s2 < n2; s2++) {
            var p = (h2 = e2[s2])._getNAFPoints(t2);
            u[s2] = p.wnd, c[s2] = p.points;
          }
          for (s2 = n2 - 1; s2 >= 1; s2 -= 2) {
            var b = s2 - 1, y = s2;
            if (1 === u[b] && 1 === u[y]) {
              var g = [e2[b], null, null, e2[y]];
              0 === e2[b].y.cmp(e2[y].y) ? (g[1] = e2[b].add(e2[y]), g[2] = e2[b].toJ().mixedAdd(e2[y].neg())) : 0 === e2[b].y.cmp(e2[y].y.redNeg()) ? (g[1] = e2[b].toJ().mixedAdd(e2[y]), g[2] = e2[b].add(e2[y].neg())) : (g[1] = e2[b].toJ().mixedAdd(e2[y]), g[2] = e2[b].toJ().mixedAdd(e2[y].neg()));
              var m = [-3, -1, -5, -7, 0, 7, 5, 1, 3], v = a(r2[b], r2[y]);
              for (l = Math.max(v[0].length, l), d[b] = new Array(l), d[y] = new Array(l), f2 = 0; f2 < l; f2++) {
                var w = 0 | v[0][f2], _ = 0 | v[1][f2];
                d[b][f2] = m[3 * (w + 1) + (_ + 1)], d[y][f2] = 0, c[b] = g;
              }
            } else
              d[b] = o(r2[b], u[b], this._bitLength), d[y] = o(r2[y], u[y], this._bitLength), l = Math.max(d[b].length, l), l = Math.max(d[y].length, l);
          }
          var S = this.jpoint(null, null, null), E = this._wnafT4;
          for (s2 = l; s2 >= 0; s2--) {
            for (var M = 0; s2 >= 0; ) {
              var A = true;
              for (f2 = 0; f2 < n2; f2++)
                E[f2] = 0 | d[f2][s2], 0 !== E[f2] && (A = false);
              if (!A)
                break;
              M++, s2--;
            }
            if (s2 >= 0 && M++, S = S.dblp(M), s2 < 0)
              break;
            for (f2 = 0; f2 < n2; f2++) {
              var k = E[f2];
              0 !== k && (k > 0 ? h2 = c[f2][k - 1 >> 1] : k < 0 && (h2 = c[f2][-k - 1 >> 1].neg()), S = "affine" === h2.type ? S.mixedAdd(h2) : S.add(h2));
            }
          }
          for (s2 = 0; s2 < n2; s2++)
            c[s2] = null;
          return i2 ? S : S.toP();
        }, f.BasePoint = h, h.prototype.eq = function() {
          throw new Error("Not implemented");
        }, h.prototype.validate = function() {
          return this.curve.validate(this);
        }, f.prototype.decodePoint = function(t2, e2) {
          t2 = i.toArray(t2, e2);
          var r2 = this.p.byteLength();
          if ((4 === t2[0] || 6 === t2[0] || 7 === t2[0]) && t2.length - 1 == 2 * r2)
            return 6 === t2[0] ? s(t2[t2.length - 1] % 2 == 0) : 7 === t2[0] && s(t2[t2.length - 1] % 2 == 1), this.point(t2.slice(1, 1 + r2), t2.slice(1 + r2, 1 + 2 * r2));
          if ((2 === t2[0] || 3 === t2[0]) && t2.length - 1 === r2)
            return this.pointFromX(t2.slice(1, 1 + r2), 3 === t2[0]);
          throw new Error("Unknown point format");
        }, h.prototype.encodeCompressed = function(t2) {
          return this.encode(t2, true);
        }, h.prototype._encode = function(t2) {
          var e2 = this.curve.p.byteLength(), r2 = this.getX().toArray("be", e2);
          return t2 ? [this.getY().isEven() ? 2 : 3].concat(r2) : [4].concat(r2, this.getY().toArray("be", e2));
        }, h.prototype.encode = function(t2, e2) {
          return i.encode(this._encode(e2), t2);
        }, h.prototype.precompute = function(t2) {
          if (this.precomputed)
            return this;
          var e2 = { doubles: null, naf: null, beta: null };
          return e2.naf = this._getNAFPoints(8), e2.doubles = this._getDoubles(4, t2), e2.beta = this._getBeta(), this.precomputed = e2, this;
        }, h.prototype._hasDoubles = function(t2) {
          if (!this.precomputed)
            return false;
          var e2 = this.precomputed.doubles;
          return !!e2 && e2.points.length >= Math.ceil((t2.bitLength() + 1) / e2.step);
        }, h.prototype._getDoubles = function(t2, e2) {
          if (this.precomputed && this.precomputed.doubles)
            return this.precomputed.doubles;
          for (var r2 = [this], n2 = this, i2 = 0; i2 < e2; i2 += t2) {
            for (var o2 = 0; o2 < t2; o2++)
              n2 = n2.dbl();
            r2.push(n2);
          }
          return { step: t2, points: r2 };
        }, h.prototype._getNAFPoints = function(t2) {
          if (this.precomputed && this.precomputed.naf)
            return this.precomputed.naf;
          for (var e2 = [this], r2 = (1 << t2) - 1, n2 = 1 === r2 ? null : this.dbl(), i2 = 1; i2 < r2; i2++)
            e2[i2] = e2[i2 - 1].add(n2);
          return { wnd: t2, points: e2 };
        }, h.prototype._getBeta = function() {
          return null;
        }, h.prototype.dblp = function(t2) {
          for (var e2 = this, r2 = 0; r2 < t2; r2++)
            e2 = e2.dbl();
          return e2;
        };
      }, 3326: (t, e, r) => {
        "use strict";
        var n = r(103), i = r(8724), o = r(6192), a = r(4449), s = n.assert;
        function f(t2) {
          this.twisted = 1 != (0 | t2.a), this.mOneA = this.twisted && -1 == (0 | t2.a), this.extended = this.mOneA, a.call(this, "edwards", t2), this.a = new i(t2.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new i(t2.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new i(t2.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), s(!this.twisted || 0 === this.c.fromRed().cmpn(1)), this.oneC = 1 == (0 | t2.c);
        }
        function h(t2, e2, r2, n2, o2) {
          a.BasePoint.call(this, t2, "projective"), null === e2 && null === r2 && null === n2 ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = true) : (this.x = new i(e2, 16), this.y = new i(r2, 16), this.z = n2 ? new i(n2, 16) : this.curve.one, this.t = o2 && new i(o2, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))));
        }
        o(f, a), t.exports = f, f.prototype._mulA = function(t2) {
          return this.mOneA ? t2.redNeg() : this.a.redMul(t2);
        }, f.prototype._mulC = function(t2) {
          return this.oneC ? t2 : this.c.redMul(t2);
        }, f.prototype.jpoint = function(t2, e2, r2, n2) {
          return this.point(t2, e2, r2, n2);
        }, f.prototype.pointFromX = function(t2, e2) {
          (t2 = new i(t2, 16)).red || (t2 = t2.toRed(this.red));
          var r2 = t2.redSqr(), n2 = this.c2.redSub(this.a.redMul(r2)), o2 = this.one.redSub(this.c2.redMul(this.d).redMul(r2)), a2 = n2.redMul(o2.redInvm()), s2 = a2.redSqrt();
          if (0 !== s2.redSqr().redSub(a2).cmp(this.zero))
            throw new Error("invalid point");
          var f2 = s2.fromRed().isOdd();
          return (e2 && !f2 || !e2 && f2) && (s2 = s2.redNeg()), this.point(t2, s2);
        }, f.prototype.pointFromY = function(t2, e2) {
          (t2 = new i(t2, 16)).red || (t2 = t2.toRed(this.red));
          var r2 = t2.redSqr(), n2 = r2.redSub(this.c2), o2 = r2.redMul(this.d).redMul(this.c2).redSub(this.a), a2 = n2.redMul(o2.redInvm());
          if (0 === a2.cmp(this.zero)) {
            if (e2)
              throw new Error("invalid point");
            return this.point(this.zero, t2);
          }
          var s2 = a2.redSqrt();
          if (0 !== s2.redSqr().redSub(a2).cmp(this.zero))
            throw new Error("invalid point");
          return s2.fromRed().isOdd() !== e2 && (s2 = s2.redNeg()), this.point(s2, t2);
        }, f.prototype.validate = function(t2) {
          if (t2.isInfinity())
            return true;
          t2.normalize();
          var e2 = t2.x.redSqr(), r2 = t2.y.redSqr(), n2 = e2.redMul(this.a).redAdd(r2), i2 = this.c2.redMul(this.one.redAdd(this.d.redMul(e2).redMul(r2)));
          return 0 === n2.cmp(i2);
        }, o(h, a.BasePoint), f.prototype.pointFromJSON = function(t2) {
          return h.fromJSON(this, t2);
        }, f.prototype.point = function(t2, e2, r2, n2) {
          return new h(this, t2, e2, r2, n2);
        }, h.fromJSON = function(t2, e2) {
          return new h(t2, e2[0], e2[1], e2[2]);
        }, h.prototype.inspect = function() {
          return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
        }, h.prototype.isInfinity = function() {
          return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || this.zOne && 0 === this.y.cmp(this.curve.c));
        }, h.prototype._extDbl = function() {
          var t2 = this.x.redSqr(), e2 = this.y.redSqr(), r2 = this.z.redSqr();
          r2 = r2.redIAdd(r2);
          var n2 = this.curve._mulA(t2), i2 = this.x.redAdd(this.y).redSqr().redISub(t2).redISub(e2), o2 = n2.redAdd(e2), a2 = o2.redSub(r2), s2 = n2.redSub(e2), f2 = i2.redMul(a2), h2 = o2.redMul(s2), u = i2.redMul(s2), c = a2.redMul(o2);
          return this.curve.point(f2, h2, c, u);
        }, h.prototype._projDbl = function() {
          var t2, e2, r2, n2, i2, o2, a2 = this.x.redAdd(this.y).redSqr(), s2 = this.x.redSqr(), f2 = this.y.redSqr();
          if (this.curve.twisted) {
            var h2 = (n2 = this.curve._mulA(s2)).redAdd(f2);
            this.zOne ? (t2 = a2.redSub(s2).redSub(f2).redMul(h2.redSub(this.curve.two)), e2 = h2.redMul(n2.redSub(f2)), r2 = h2.redSqr().redSub(h2).redSub(h2)) : (i2 = this.z.redSqr(), o2 = h2.redSub(i2).redISub(i2), t2 = a2.redSub(s2).redISub(f2).redMul(o2), e2 = h2.redMul(n2.redSub(f2)), r2 = h2.redMul(o2));
          } else
            n2 = s2.redAdd(f2), i2 = this.curve._mulC(this.z).redSqr(), o2 = n2.redSub(i2).redSub(i2), t2 = this.curve._mulC(a2.redISub(n2)).redMul(o2), e2 = this.curve._mulC(n2).redMul(s2.redISub(f2)), r2 = n2.redMul(o2);
          return this.curve.point(t2, e2, r2);
        }, h.prototype.dbl = function() {
          return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl();
        }, h.prototype._extAdd = function(t2) {
          var e2 = this.y.redSub(this.x).redMul(t2.y.redSub(t2.x)), r2 = this.y.redAdd(this.x).redMul(t2.y.redAdd(t2.x)), n2 = this.t.redMul(this.curve.dd).redMul(t2.t), i2 = this.z.redMul(t2.z.redAdd(t2.z)), o2 = r2.redSub(e2), a2 = i2.redSub(n2), s2 = i2.redAdd(n2), f2 = r2.redAdd(e2), h2 = o2.redMul(a2), u = s2.redMul(f2), c = o2.redMul(f2), d = a2.redMul(s2);
          return this.curve.point(h2, u, d, c);
        }, h.prototype._projAdd = function(t2) {
          var e2, r2, n2 = this.z.redMul(t2.z), i2 = n2.redSqr(), o2 = this.x.redMul(t2.x), a2 = this.y.redMul(t2.y), s2 = this.curve.d.redMul(o2).redMul(a2), f2 = i2.redSub(s2), h2 = i2.redAdd(s2), u = this.x.redAdd(this.y).redMul(t2.x.redAdd(t2.y)).redISub(o2).redISub(a2), c = n2.redMul(f2).redMul(u);
          return this.curve.twisted ? (e2 = n2.redMul(h2).redMul(a2.redSub(this.curve._mulA(o2))), r2 = f2.redMul(h2)) : (e2 = n2.redMul(h2).redMul(a2.redSub(o2)), r2 = this.curve._mulC(f2).redMul(h2)), this.curve.point(c, e2, r2);
        }, h.prototype.add = function(t2) {
          return this.isInfinity() ? t2 : t2.isInfinity() ? this : this.curve.extended ? this._extAdd(t2) : this._projAdd(t2);
        }, h.prototype.mul = function(t2) {
          return this._hasDoubles(t2) ? this.curve._fixedNafMul(this, t2) : this.curve._wnafMul(this, t2);
        }, h.prototype.mulAdd = function(t2, e2, r2) {
          return this.curve._wnafMulAdd(1, [this, e2], [t2, r2], 2, false);
        }, h.prototype.jmulAdd = function(t2, e2, r2) {
          return this.curve._wnafMulAdd(1, [this, e2], [t2, r2], 2, true);
        }, h.prototype.normalize = function() {
          if (this.zOne)
            return this;
          var t2 = this.z.redInvm();
          return this.x = this.x.redMul(t2), this.y = this.y.redMul(t2), this.t && (this.t = this.t.redMul(t2)), this.z = this.curve.one, this.zOne = true, this;
        }, h.prototype.neg = function() {
          return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg());
        }, h.prototype.getX = function() {
          return this.normalize(), this.x.fromRed();
        }, h.prototype.getY = function() {
          return this.normalize(), this.y.fromRed();
        }, h.prototype.eq = function(t2) {
          return this === t2 || 0 === this.getX().cmp(t2.getX()) && 0 === this.getY().cmp(t2.getY());
        }, h.prototype.eqXToP = function(t2) {
          var e2 = t2.toRed(this.curve.red).redMul(this.z);
          if (0 === this.x.cmp(e2))
            return true;
          for (var r2 = t2.clone(), n2 = this.curve.redN.redMul(this.z); ; ) {
            if (r2.iadd(this.curve.n), r2.cmp(this.curve.p) >= 0)
              return false;
            if (e2.redIAdd(n2), 0 === this.x.cmp(e2))
              return true;
          }
        }, h.prototype.toP = h.prototype.normalize, h.prototype.mixedAdd = h.prototype.add;
      }, 674: (t, e, r) => {
        "use strict";
        var n = e;
        n.base = r(4449), n.short = r(1680), n.mont = r(8662), n.edwards = r(3326);
      }, 8662: (t, e, r) => {
        "use strict";
        var n = r(8724), i = r(6192), o = r(4449), a = r(103);
        function s(t2) {
          o.call(this, "mont", t2), this.a = new n(t2.a, 16).toRed(this.red), this.b = new n(t2.b, 16).toRed(this.red), this.i4 = new n(4).toRed(this.red).redInvm(), this.two = new n(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two));
        }
        function f(t2, e2, r2) {
          o.BasePoint.call(this, t2, "projective"), null === e2 && null === r2 ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new n(e2, 16), this.z = new n(r2, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)));
        }
        i(s, o), t.exports = s, s.prototype.validate = function(t2) {
          var e2 = t2.normalize().x, r2 = e2.redSqr(), n2 = r2.redMul(e2).redAdd(r2.redMul(this.a)).redAdd(e2);
          return 0 === n2.redSqrt().redSqr().cmp(n2);
        }, i(f, o.BasePoint), s.prototype.decodePoint = function(t2, e2) {
          return this.point(a.toArray(t2, e2), 1);
        }, s.prototype.point = function(t2, e2) {
          return new f(this, t2, e2);
        }, s.prototype.pointFromJSON = function(t2) {
          return f.fromJSON(this, t2);
        }, f.prototype.precompute = function() {
        }, f.prototype._encode = function() {
          return this.getX().toArray("be", this.curve.p.byteLength());
        }, f.fromJSON = function(t2, e2) {
          return new f(t2, e2[0], e2[1] || t2.one);
        }, f.prototype.inspect = function() {
          return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
        }, f.prototype.isInfinity = function() {
          return 0 === this.z.cmpn(0);
        }, f.prototype.dbl = function() {
          var t2 = this.x.redAdd(this.z).redSqr(), e2 = this.x.redSub(this.z).redSqr(), r2 = t2.redSub(e2), n2 = t2.redMul(e2), i2 = r2.redMul(e2.redAdd(this.curve.a24.redMul(r2)));
          return this.curve.point(n2, i2);
        }, f.prototype.add = function() {
          throw new Error("Not supported on Montgomery curve");
        }, f.prototype.diffAdd = function(t2, e2) {
          var r2 = this.x.redAdd(this.z), n2 = this.x.redSub(this.z), i2 = t2.x.redAdd(t2.z), o2 = t2.x.redSub(t2.z).redMul(r2), a2 = i2.redMul(n2), s2 = e2.z.redMul(o2.redAdd(a2).redSqr()), f2 = e2.x.redMul(o2.redISub(a2).redSqr());
          return this.curve.point(s2, f2);
        }, f.prototype.mul = function(t2) {
          for (var e2 = t2.clone(), r2 = this, n2 = this.curve.point(null, null), i2 = []; 0 !== e2.cmpn(0); e2.iushrn(1))
            i2.push(e2.andln(1));
          for (var o2 = i2.length - 1; o2 >= 0; o2--)
            0 === i2[o2] ? (r2 = r2.diffAdd(n2, this), n2 = n2.dbl()) : (n2 = r2.diffAdd(n2, this), r2 = r2.dbl());
          return n2;
        }, f.prototype.mulAdd = function() {
          throw new Error("Not supported on Montgomery curve");
        }, f.prototype.jumlAdd = function() {
          throw new Error("Not supported on Montgomery curve");
        }, f.prototype.eq = function(t2) {
          return 0 === this.getX().cmp(t2.getX());
        }, f.prototype.normalize = function() {
          return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this;
        }, f.prototype.getX = function() {
          return this.normalize(), this.x.fromRed();
        };
      }, 1680: (t, e, r) => {
        "use strict";
        var n = r(103), i = r(8724), o = r(6192), a = r(4449), s = n.assert;
        function f(t2) {
          a.call(this, "short", t2), this.a = new i(t2.a, 16).toRed(this.red), this.b = new i(t2.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(t2), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4);
        }
        function h(t2, e2, r2, n2) {
          a.BasePoint.call(this, t2, "affine"), null === e2 && null === r2 ? (this.x = null, this.y = null, this.inf = true) : (this.x = new i(e2, 16), this.y = new i(r2, 16), n2 && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = false);
        }
        function u(t2, e2, r2, n2) {
          a.BasePoint.call(this, t2, "jacobian"), null === e2 && null === r2 && null === n2 ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new i(0)) : (this.x = new i(e2, 16), this.y = new i(r2, 16), this.z = new i(n2, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
        }
        o(f, a), t.exports = f, f.prototype._getEndomorphism = function(t2) {
          if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            var e2, r2;
            if (t2.beta)
              e2 = new i(t2.beta, 16).toRed(this.red);
            else {
              var n2 = this._getEndoRoots(this.p);
              e2 = (e2 = n2[0].cmp(n2[1]) < 0 ? n2[0] : n2[1]).toRed(this.red);
            }
            if (t2.lambda)
              r2 = new i(t2.lambda, 16);
            else {
              var o2 = this._getEndoRoots(this.n);
              0 === this.g.mul(o2[0]).x.cmp(this.g.x.redMul(e2)) ? r2 = o2[0] : (r2 = o2[1], s(0 === this.g.mul(r2).x.cmp(this.g.x.redMul(e2))));
            }
            return { beta: e2, lambda: r2, basis: t2.basis ? t2.basis.map(function(t3) {
              return { a: new i(t3.a, 16), b: new i(t3.b, 16) };
            }) : this._getEndoBasis(r2) };
          }
        }, f.prototype._getEndoRoots = function(t2) {
          var e2 = t2 === this.p ? this.red : i.mont(t2), r2 = new i(2).toRed(e2).redInvm(), n2 = r2.redNeg(), o2 = new i(3).toRed(e2).redNeg().redSqrt().redMul(r2);
          return [n2.redAdd(o2).fromRed(), n2.redSub(o2).fromRed()];
        }, f.prototype._getEndoBasis = function(t2) {
          for (var e2, r2, n2, o2, a2, s2, f2, h2, u2, c = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), d = t2, l = this.n.clone(), p = new i(1), b = new i(0), y = new i(0), g = new i(1), m = 0; 0 !== d.cmpn(0); ) {
            var v = l.div(d);
            h2 = l.sub(v.mul(d)), u2 = y.sub(v.mul(p));
            var w = g.sub(v.mul(b));
            if (!n2 && h2.cmp(c) < 0)
              e2 = f2.neg(), r2 = p, n2 = h2.neg(), o2 = u2;
            else if (n2 && 2 == ++m)
              break;
            f2 = h2, l = d, d = h2, y = p, p = u2, g = b, b = w;
          }
          a2 = h2.neg(), s2 = u2;
          var _ = n2.sqr().add(o2.sqr());
          return a2.sqr().add(s2.sqr()).cmp(_) >= 0 && (a2 = e2, s2 = r2), n2.negative && (n2 = n2.neg(), o2 = o2.neg()), a2.negative && (a2 = a2.neg(), s2 = s2.neg()), [{ a: n2, b: o2 }, { a: a2, b: s2 }];
        }, f.prototype._endoSplit = function(t2) {
          var e2 = this.endo.basis, r2 = e2[0], n2 = e2[1], i2 = n2.b.mul(t2).divRound(this.n), o2 = r2.b.neg().mul(t2).divRound(this.n), a2 = i2.mul(r2.a), s2 = o2.mul(n2.a), f2 = i2.mul(r2.b), h2 = o2.mul(n2.b);
          return { k1: t2.sub(a2).sub(s2), k2: f2.add(h2).neg() };
        }, f.prototype.pointFromX = function(t2, e2) {
          (t2 = new i(t2, 16)).red || (t2 = t2.toRed(this.red));
          var r2 = t2.redSqr().redMul(t2).redIAdd(t2.redMul(this.a)).redIAdd(this.b), n2 = r2.redSqrt();
          if (0 !== n2.redSqr().redSub(r2).cmp(this.zero))
            throw new Error("invalid point");
          var o2 = n2.fromRed().isOdd();
          return (e2 && !o2 || !e2 && o2) && (n2 = n2.redNeg()), this.point(t2, n2);
        }, f.prototype.validate = function(t2) {
          if (t2.inf)
            return true;
          var e2 = t2.x, r2 = t2.y, n2 = this.a.redMul(e2), i2 = e2.redSqr().redMul(e2).redIAdd(n2).redIAdd(this.b);
          return 0 === r2.redSqr().redISub(i2).cmpn(0);
        }, f.prototype._endoWnafMulAdd = function(t2, e2, r2) {
          for (var n2 = this._endoWnafT1, i2 = this._endoWnafT2, o2 = 0; o2 < t2.length; o2++) {
            var a2 = this._endoSplit(e2[o2]), s2 = t2[o2], f2 = s2._getBeta();
            a2.k1.negative && (a2.k1.ineg(), s2 = s2.neg(true)), a2.k2.negative && (a2.k2.ineg(), f2 = f2.neg(true)), n2[2 * o2] = s2, n2[2 * o2 + 1] = f2, i2[2 * o2] = a2.k1, i2[2 * o2 + 1] = a2.k2;
          }
          for (var h2 = this._wnafMulAdd(1, n2, i2, 2 * o2, r2), u2 = 0; u2 < 2 * o2; u2++)
            n2[u2] = null, i2[u2] = null;
          return h2;
        }, o(h, a.BasePoint), f.prototype.point = function(t2, e2, r2) {
          return new h(this, t2, e2, r2);
        }, f.prototype.pointFromJSON = function(t2, e2) {
          return h.fromJSON(this, t2, e2);
        }, h.prototype._getBeta = function() {
          if (this.curve.endo) {
            var t2 = this.precomputed;
            if (t2 && t2.beta)
              return t2.beta;
            var e2 = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
            if (t2) {
              var r2 = this.curve, n2 = function(t3) {
                return r2.point(t3.x.redMul(r2.endo.beta), t3.y);
              };
              t2.beta = e2, e2.precomputed = { beta: null, naf: t2.naf && { wnd: t2.naf.wnd, points: t2.naf.points.map(n2) }, doubles: t2.doubles && { step: t2.doubles.step, points: t2.doubles.points.map(n2) } };
            }
            return e2;
          }
        }, h.prototype.toJSON = function() {
          return this.precomputed ? [this.x, this.y, this.precomputed && { doubles: this.precomputed.doubles && { step: this.precomputed.doubles.step, points: this.precomputed.doubles.points.slice(1) }, naf: this.precomputed.naf && { wnd: this.precomputed.naf.wnd, points: this.precomputed.naf.points.slice(1) } }] : [this.x, this.y];
        }, h.fromJSON = function(t2, e2, r2) {
          "string" == typeof e2 && (e2 = JSON.parse(e2));
          var n2 = t2.point(e2[0], e2[1], r2);
          if (!e2[2])
            return n2;
          function i2(e3) {
            return t2.point(e3[0], e3[1], r2);
          }
          var o2 = e2[2];
          return n2.precomputed = { beta: null, doubles: o2.doubles && { step: o2.doubles.step, points: [n2].concat(o2.doubles.points.map(i2)) }, naf: o2.naf && { wnd: o2.naf.wnd, points: [n2].concat(o2.naf.points.map(i2)) } }, n2;
        }, h.prototype.inspect = function() {
          return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
        }, h.prototype.isInfinity = function() {
          return this.inf;
        }, h.prototype.add = function(t2) {
          if (this.inf)
            return t2;
          if (t2.inf)
            return this;
          if (this.eq(t2))
            return this.dbl();
          if (this.neg().eq(t2))
            return this.curve.point(null, null);
          if (0 === this.x.cmp(t2.x))
            return this.curve.point(null, null);
          var e2 = this.y.redSub(t2.y);
          0 !== e2.cmpn(0) && (e2 = e2.redMul(this.x.redSub(t2.x).redInvm()));
          var r2 = e2.redSqr().redISub(this.x).redISub(t2.x), n2 = e2.redMul(this.x.redSub(r2)).redISub(this.y);
          return this.curve.point(r2, n2);
        }, h.prototype.dbl = function() {
          if (this.inf)
            return this;
          var t2 = this.y.redAdd(this.y);
          if (0 === t2.cmpn(0))
            return this.curve.point(null, null);
          var e2 = this.curve.a, r2 = this.x.redSqr(), n2 = t2.redInvm(), i2 = r2.redAdd(r2).redIAdd(r2).redIAdd(e2).redMul(n2), o2 = i2.redSqr().redISub(this.x.redAdd(this.x)), a2 = i2.redMul(this.x.redSub(o2)).redISub(this.y);
          return this.curve.point(o2, a2);
        }, h.prototype.getX = function() {
          return this.x.fromRed();
        }, h.prototype.getY = function() {
          return this.y.fromRed();
        }, h.prototype.mul = function(t2) {
          return t2 = new i(t2, 16), this.isInfinity() ? this : this._hasDoubles(t2) ? this.curve._fixedNafMul(this, t2) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t2]) : this.curve._wnafMul(this, t2);
        }, h.prototype.mulAdd = function(t2, e2, r2) {
          var n2 = [this, e2], i2 = [t2, r2];
          return this.curve.endo ? this.curve._endoWnafMulAdd(n2, i2) : this.curve._wnafMulAdd(1, n2, i2, 2);
        }, h.prototype.jmulAdd = function(t2, e2, r2) {
          var n2 = [this, e2], i2 = [t2, r2];
          return this.curve.endo ? this.curve._endoWnafMulAdd(n2, i2, true) : this.curve._wnafMulAdd(1, n2, i2, 2, true);
        }, h.prototype.eq = function(t2) {
          return this === t2 || this.inf === t2.inf && (this.inf || 0 === this.x.cmp(t2.x) && 0 === this.y.cmp(t2.y));
        }, h.prototype.neg = function(t2) {
          if (this.inf)
            return this;
          var e2 = this.curve.point(this.x, this.y.redNeg());
          if (t2 && this.precomputed) {
            var r2 = this.precomputed, n2 = function(t3) {
              return t3.neg();
            };
            e2.precomputed = { naf: r2.naf && { wnd: r2.naf.wnd, points: r2.naf.points.map(n2) }, doubles: r2.doubles && { step: r2.doubles.step, points: r2.doubles.points.map(n2) } };
          }
          return e2;
        }, h.prototype.toJ = function() {
          return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one);
        }, o(u, a.BasePoint), f.prototype.jpoint = function(t2, e2, r2) {
          return new u(this, t2, e2, r2);
        }, u.prototype.toP = function() {
          if (this.isInfinity())
            return this.curve.point(null, null);
          var t2 = this.z.redInvm(), e2 = t2.redSqr(), r2 = this.x.redMul(e2), n2 = this.y.redMul(e2).redMul(t2);
          return this.curve.point(r2, n2);
        }, u.prototype.neg = function() {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
        }, u.prototype.add = function(t2) {
          if (this.isInfinity())
            return t2;
          if (t2.isInfinity())
            return this;
          var e2 = t2.z.redSqr(), r2 = this.z.redSqr(), n2 = this.x.redMul(e2), i2 = t2.x.redMul(r2), o2 = this.y.redMul(e2.redMul(t2.z)), a2 = t2.y.redMul(r2.redMul(this.z)), s2 = n2.redSub(i2), f2 = o2.redSub(a2);
          if (0 === s2.cmpn(0))
            return 0 !== f2.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
          var h2 = s2.redSqr(), u2 = h2.redMul(s2), c = n2.redMul(h2), d = f2.redSqr().redIAdd(u2).redISub(c).redISub(c), l = f2.redMul(c.redISub(d)).redISub(o2.redMul(u2)), p = this.z.redMul(t2.z).redMul(s2);
          return this.curve.jpoint(d, l, p);
        }, u.prototype.mixedAdd = function(t2) {
          if (this.isInfinity())
            return t2.toJ();
          if (t2.isInfinity())
            return this;
          var e2 = this.z.redSqr(), r2 = this.x, n2 = t2.x.redMul(e2), i2 = this.y, o2 = t2.y.redMul(e2).redMul(this.z), a2 = r2.redSub(n2), s2 = i2.redSub(o2);
          if (0 === a2.cmpn(0))
            return 0 !== s2.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
          var f2 = a2.redSqr(), h2 = f2.redMul(a2), u2 = r2.redMul(f2), c = s2.redSqr().redIAdd(h2).redISub(u2).redISub(u2), d = s2.redMul(u2.redISub(c)).redISub(i2.redMul(h2)), l = this.z.redMul(a2);
          return this.curve.jpoint(c, d, l);
        }, u.prototype.dblp = function(t2) {
          if (0 === t2)
            return this;
          if (this.isInfinity())
            return this;
          if (!t2)
            return this.dbl();
          var e2;
          if (this.curve.zeroA || this.curve.threeA) {
            var r2 = this;
            for (e2 = 0; e2 < t2; e2++)
              r2 = r2.dbl();
            return r2;
          }
          var n2 = this.curve.a, i2 = this.curve.tinv, o2 = this.x, a2 = this.y, s2 = this.z, f2 = s2.redSqr().redSqr(), h2 = a2.redAdd(a2);
          for (e2 = 0; e2 < t2; e2++) {
            var u2 = o2.redSqr(), c = h2.redSqr(), d = c.redSqr(), l = u2.redAdd(u2).redIAdd(u2).redIAdd(n2.redMul(f2)), p = o2.redMul(c), b = l.redSqr().redISub(p.redAdd(p)), y = p.redISub(b), g = l.redMul(y);
            g = g.redIAdd(g).redISub(d);
            var m = h2.redMul(s2);
            e2 + 1 < t2 && (f2 = f2.redMul(d)), o2 = b, s2 = m, h2 = g;
          }
          return this.curve.jpoint(o2, h2.redMul(i2), s2);
        }, u.prototype.dbl = function() {
          return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
        }, u.prototype._zeroDbl = function() {
          var t2, e2, r2;
          if (this.zOne) {
            var n2 = this.x.redSqr(), i2 = this.y.redSqr(), o2 = i2.redSqr(), a2 = this.x.redAdd(i2).redSqr().redISub(n2).redISub(o2);
            a2 = a2.redIAdd(a2);
            var s2 = n2.redAdd(n2).redIAdd(n2), f2 = s2.redSqr().redISub(a2).redISub(a2), h2 = o2.redIAdd(o2);
            h2 = (h2 = h2.redIAdd(h2)).redIAdd(h2), t2 = f2, e2 = s2.redMul(a2.redISub(f2)).redISub(h2), r2 = this.y.redAdd(this.y);
          } else {
            var u2 = this.x.redSqr(), c = this.y.redSqr(), d = c.redSqr(), l = this.x.redAdd(c).redSqr().redISub(u2).redISub(d);
            l = l.redIAdd(l);
            var p = u2.redAdd(u2).redIAdd(u2), b = p.redSqr(), y = d.redIAdd(d);
            y = (y = y.redIAdd(y)).redIAdd(y), t2 = b.redISub(l).redISub(l), e2 = p.redMul(l.redISub(t2)).redISub(y), r2 = (r2 = this.y.redMul(this.z)).redIAdd(r2);
          }
          return this.curve.jpoint(t2, e2, r2);
        }, u.prototype._threeDbl = function() {
          var t2, e2, r2;
          if (this.zOne) {
            var n2 = this.x.redSqr(), i2 = this.y.redSqr(), o2 = i2.redSqr(), a2 = this.x.redAdd(i2).redSqr().redISub(n2).redISub(o2);
            a2 = a2.redIAdd(a2);
            var s2 = n2.redAdd(n2).redIAdd(n2).redIAdd(this.curve.a), f2 = s2.redSqr().redISub(a2).redISub(a2);
            t2 = f2;
            var h2 = o2.redIAdd(o2);
            h2 = (h2 = h2.redIAdd(h2)).redIAdd(h2), e2 = s2.redMul(a2.redISub(f2)).redISub(h2), r2 = this.y.redAdd(this.y);
          } else {
            var u2 = this.z.redSqr(), c = this.y.redSqr(), d = this.x.redMul(c), l = this.x.redSub(u2).redMul(this.x.redAdd(u2));
            l = l.redAdd(l).redIAdd(l);
            var p = d.redIAdd(d), b = (p = p.redIAdd(p)).redAdd(p);
            t2 = l.redSqr().redISub(b), r2 = this.y.redAdd(this.z).redSqr().redISub(c).redISub(u2);
            var y = c.redSqr();
            y = (y = (y = y.redIAdd(y)).redIAdd(y)).redIAdd(y), e2 = l.redMul(p.redISub(t2)).redISub(y);
          }
          return this.curve.jpoint(t2, e2, r2);
        }, u.prototype._dbl = function() {
          var t2 = this.curve.a, e2 = this.x, r2 = this.y, n2 = this.z, i2 = n2.redSqr().redSqr(), o2 = e2.redSqr(), a2 = r2.redSqr(), s2 = o2.redAdd(o2).redIAdd(o2).redIAdd(t2.redMul(i2)), f2 = e2.redAdd(e2), h2 = (f2 = f2.redIAdd(f2)).redMul(a2), u2 = s2.redSqr().redISub(h2.redAdd(h2)), c = h2.redISub(u2), d = a2.redSqr();
          d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
          var l = s2.redMul(c).redISub(d), p = r2.redAdd(r2).redMul(n2);
          return this.curve.jpoint(u2, l, p);
        }, u.prototype.trpl = function() {
          if (!this.curve.zeroA)
            return this.dbl().add(this);
          var t2 = this.x.redSqr(), e2 = this.y.redSqr(), r2 = this.z.redSqr(), n2 = e2.redSqr(), i2 = t2.redAdd(t2).redIAdd(t2), o2 = i2.redSqr(), a2 = this.x.redAdd(e2).redSqr().redISub(t2).redISub(n2), s2 = (a2 = (a2 = (a2 = a2.redIAdd(a2)).redAdd(a2).redIAdd(a2)).redISub(o2)).redSqr(), f2 = n2.redIAdd(n2);
          f2 = (f2 = (f2 = f2.redIAdd(f2)).redIAdd(f2)).redIAdd(f2);
          var h2 = i2.redIAdd(a2).redSqr().redISub(o2).redISub(s2).redISub(f2), u2 = e2.redMul(h2);
          u2 = (u2 = u2.redIAdd(u2)).redIAdd(u2);
          var c = this.x.redMul(s2).redISub(u2);
          c = (c = c.redIAdd(c)).redIAdd(c);
          var d = this.y.redMul(h2.redMul(f2.redISub(h2)).redISub(a2.redMul(s2)));
          d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
          var l = this.z.redAdd(a2).redSqr().redISub(r2).redISub(s2);
          return this.curve.jpoint(c, d, l);
        }, u.prototype.mul = function(t2, e2) {
          return t2 = new i(t2, e2), this.curve._wnafMul(this, t2);
        }, u.prototype.eq = function(t2) {
          if ("affine" === t2.type)
            return this.eq(t2.toJ());
          if (this === t2)
            return true;
          var e2 = this.z.redSqr(), r2 = t2.z.redSqr();
          if (0 !== this.x.redMul(r2).redISub(t2.x.redMul(e2)).cmpn(0))
            return false;
          var n2 = e2.redMul(this.z), i2 = r2.redMul(t2.z);
          return 0 === this.y.redMul(i2).redISub(t2.y.redMul(n2)).cmpn(0);
        }, u.prototype.eqXToP = function(t2) {
          var e2 = this.z.redSqr(), r2 = t2.toRed(this.curve.red).redMul(e2);
          if (0 === this.x.cmp(r2))
            return true;
          for (var n2 = t2.clone(), i2 = this.curve.redN.redMul(e2); ; ) {
            if (n2.iadd(this.curve.n), n2.cmp(this.curve.p) >= 0)
              return false;
            if (r2.redIAdd(i2), 0 === this.x.cmp(r2))
              return true;
          }
        }, u.prototype.inspect = function() {
          return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
        }, u.prototype.isInfinity = function() {
          return 0 === this.z.cmpn(0);
        };
      }, 4636: (t, e, r) => {
        "use strict";
        var n, i = e, o = r(5402), a = r(674), s = r(103).assert;
        function f(t2) {
          "short" === t2.type ? this.curve = new a.short(t2) : "edwards" === t2.type ? this.curve = new a.edwards(t2) : this.curve = new a.mont(t2), this.g = this.curve.g, this.n = this.curve.n, this.hash = t2.hash, s(this.g.validate(), "Invalid curve"), s(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
        }
        function h(t2, e2) {
          Object.defineProperty(i, t2, { configurable: true, enumerable: true, get: function() {
            var r2 = new f(e2);
            return Object.defineProperty(i, t2, { configurable: true, enumerable: true, value: r2 }), r2;
          } });
        }
        i.PresetCurve = f, h("p192", { type: "short", prime: "p192", p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff", a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc", b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1", n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831", hash: o.sha256, gRed: false, g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"] }), h("p224", { type: "short", prime: "p224", p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001", a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe", b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4", n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d", hash: o.sha256, gRed: false, g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"] }), h("p256", { type: "short", prime: null, p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff", a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc", b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b", n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551", hash: o.sha256, gRed: false, g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"] }), h("p384", { type: "short", prime: null, p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff", a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc", b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef", n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973", hash: o.sha384, gRed: false, g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"] }), h("p521", { type: "short", prime: null, p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff", a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc", b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00", n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409", hash: o.sha512, gRed: false, g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"] }), h("curve25519", { type: "mont", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "76d06", b: "1", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: o.sha256, gRed: false, g: ["9"] }), h("ed25519", { type: "edwards", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "-1", c: "1", d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: o.sha256, gRed: false, g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"] });
        try {
          n = r(8687);
        } catch (t2) {
          n = void 0;
        }
        h("secp256k1", { type: "short", prime: "k256", p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f", a: "0", b: "7", n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141", h: "1", hash: o.sha256, beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee", lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72", basis: [{ a: "3086d221a7d46bcde86c90e49284eb15", b: "-e4437ed6010e88286f547fa90abfe4c3" }, { a: "114ca50f7a8e2f3f657c1108d9d44cfd8", b: "3086d221a7d46bcde86c90e49284eb15" }], gRed: false, g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", n] });
      }, 5571: (t, e, r) => {
        "use strict";
        var n = r(8724), i = r(756), o = r(103), a = r(4636), s = r(3569), f = o.assert, h = r(252), u = r(4413);
        function c(t2) {
          if (!(this instanceof c))
            return new c(t2);
          "string" == typeof t2 && (f(Object.prototype.hasOwnProperty.call(a, t2), "Unknown curve " + t2), t2 = a[t2]), t2 instanceof a.PresetCurve && (t2 = { curve: t2 }), this.curve = t2.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = t2.curve.g, this.g.precompute(t2.curve.n.bitLength() + 1), this.hash = t2.hash || t2.curve.hash;
        }
        t.exports = c, c.prototype.keyPair = function(t2) {
          return new h(this, t2);
        }, c.prototype.keyFromPrivate = function(t2, e2) {
          return h.fromPrivate(this, t2, e2);
        }, c.prototype.keyFromPublic = function(t2, e2) {
          return h.fromPublic(this, t2, e2);
        }, c.prototype.genKeyPair = function(t2) {
          t2 || (t2 = {});
          for (var e2 = new i({ hash: this.hash, pers: t2.pers, persEnc: t2.persEnc || "utf8", entropy: t2.entropy || s(this.hash.hmacStrength), entropyEnc: t2.entropy && t2.entropyEnc || "utf8", nonce: this.n.toArray() }), r2 = this.n.byteLength(), o2 = this.n.sub(new n(2)); ; ) {
            var a2 = new n(e2.generate(r2));
            if (!(a2.cmp(o2) > 0))
              return a2.iaddn(1), this.keyFromPrivate(a2);
          }
        }, c.prototype._truncateToN = function(t2, e2) {
          var r2 = 8 * t2.byteLength() - this.n.bitLength();
          return r2 > 0 && (t2 = t2.ushrn(r2)), !e2 && t2.cmp(this.n) >= 0 ? t2.sub(this.n) : t2;
        }, c.prototype.sign = function(t2, e2, r2, o2) {
          "object" == typeof r2 && (o2 = r2, r2 = null), o2 || (o2 = {}), e2 = this.keyFromPrivate(e2, r2), t2 = this._truncateToN(new n(t2, 16));
          for (var a2 = this.n.byteLength(), s2 = e2.getPrivate().toArray("be", a2), f2 = t2.toArray("be", a2), h2 = new i({ hash: this.hash, entropy: s2, nonce: f2, pers: o2.pers, persEnc: o2.persEnc || "utf8" }), c2 = this.n.sub(new n(1)), d = 0; ; d++) {
            var l = o2.k ? o2.k(d) : new n(h2.generate(this.n.byteLength()));
            if (!((l = this._truncateToN(l, true)).cmpn(1) <= 0 || l.cmp(c2) >= 0)) {
              var p = this.g.mul(l);
              if (!p.isInfinity()) {
                var b = p.getX(), y = b.umod(this.n);
                if (0 !== y.cmpn(0)) {
                  var g = l.invm(this.n).mul(y.mul(e2.getPrivate()).iadd(t2));
                  if (0 !== (g = g.umod(this.n)).cmpn(0)) {
                    var m = (p.getY().isOdd() ? 1 : 0) | (0 !== b.cmp(y) ? 2 : 0);
                    return o2.canonical && g.cmp(this.nh) > 0 && (g = this.n.sub(g), m ^= 1), new u({ r: y, s: g, recoveryParam: m });
                  }
                }
              }
            }
          }
        }, c.prototype.verify = function(t2, e2, r2, i2) {
          t2 = this._truncateToN(new n(t2, 16)), r2 = this.keyFromPublic(r2, i2);
          var o2 = (e2 = new u(e2, "hex")).r, a2 = e2.s;
          if (o2.cmpn(1) < 0 || o2.cmp(this.n) >= 0)
            return false;
          if (a2.cmpn(1) < 0 || a2.cmp(this.n) >= 0)
            return false;
          var s2, f2 = a2.invm(this.n), h2 = f2.mul(t2).umod(this.n), c2 = f2.mul(o2).umod(this.n);
          return this.curve._maxwellTrick ? !(s2 = this.g.jmulAdd(h2, r2.getPublic(), c2)).isInfinity() && s2.eqXToP(o2) : !(s2 = this.g.mulAdd(h2, r2.getPublic(), c2)).isInfinity() && 0 === s2.getX().umod(this.n).cmp(o2);
        }, c.prototype.recoverPubKey = function(t2, e2, r2, i2) {
          f((3 & r2) === r2, "The recovery param is more than two bits"), e2 = new u(e2, i2);
          var o2 = this.n, a2 = new n(t2), s2 = e2.r, h2 = e2.s, c2 = 1 & r2, d = r2 >> 1;
          if (s2.cmp(this.curve.p.umod(this.curve.n)) >= 0 && d)
            throw new Error("Unable to find sencond key candinate");
          s2 = d ? this.curve.pointFromX(s2.add(this.curve.n), c2) : this.curve.pointFromX(s2, c2);
          var l = e2.r.invm(o2), p = o2.sub(a2).mul(l).umod(o2), b = h2.mul(l).umod(o2);
          return this.g.mulAdd(p, s2, b);
        }, c.prototype.getKeyRecoveryParam = function(t2, e2, r2, n2) {
          if (null !== (e2 = new u(e2, n2)).recoveryParam)
            return e2.recoveryParam;
          for (var i2 = 0; i2 < 4; i2++) {
            var o2;
            try {
              o2 = this.recoverPubKey(t2, e2, i2);
            } catch (t3) {
              continue;
            }
            if (o2.eq(r2))
              return i2;
          }
          throw new Error("Unable to find valid recovery factor");
        };
      }, 252: (t, e, r) => {
        "use strict";
        var n = r(8724), i = r(103).assert;
        function o(t2, e2) {
          this.ec = t2, this.priv = null, this.pub = null, e2.priv && this._importPrivate(e2.priv, e2.privEnc), e2.pub && this._importPublic(e2.pub, e2.pubEnc);
        }
        t.exports = o, o.fromPublic = function(t2, e2, r2) {
          return e2 instanceof o ? e2 : new o(t2, { pub: e2, pubEnc: r2 });
        }, o.fromPrivate = function(t2, e2, r2) {
          return e2 instanceof o ? e2 : new o(t2, { priv: e2, privEnc: r2 });
        }, o.prototype.validate = function() {
          var t2 = this.getPublic();
          return t2.isInfinity() ? { result: false, reason: "Invalid public key" } : t2.validate() ? t2.mul(this.ec.curve.n).isInfinity() ? { result: true, reason: null } : { result: false, reason: "Public key * N != O" } : { result: false, reason: "Public key is not a point" };
        }, o.prototype.getPublic = function(t2, e2) {
          return "string" == typeof t2 && (e2 = t2, t2 = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), e2 ? this.pub.encode(e2, t2) : this.pub;
        }, o.prototype.getPrivate = function(t2) {
          return "hex" === t2 ? this.priv.toString(16, 2) : this.priv;
        }, o.prototype._importPrivate = function(t2, e2) {
          this.priv = new n(t2, e2 || 16), this.priv = this.priv.umod(this.ec.curve.n);
        }, o.prototype._importPublic = function(t2, e2) {
          if (t2.x || t2.y)
            return "mont" === this.ec.curve.type ? i(t2.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || i(t2.x && t2.y, "Need both x and y coordinate"), void (this.pub = this.ec.curve.point(t2.x, t2.y));
          this.pub = this.ec.curve.decodePoint(t2, e2);
        }, o.prototype.derive = function(t2) {
          return t2.validate() || i(t2.validate(), "public point not validated"), t2.mul(this.priv).getX();
        }, o.prototype.sign = function(t2, e2, r2) {
          return this.ec.sign(t2, this, e2, r2);
        }, o.prototype.verify = function(t2, e2) {
          return this.ec.verify(t2, e2, this);
        }, o.prototype.inspect = function() {
          return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
        };
      }, 4413: (t, e, r) => {
        "use strict";
        var n = r(8724), i = r(103), o = i.assert;
        function a(t2, e2) {
          if (t2 instanceof a)
            return t2;
          this._importDER(t2, e2) || (o(t2.r && t2.s, "Signature without r or s"), this.r = new n(t2.r, 16), this.s = new n(t2.s, 16), void 0 === t2.recoveryParam ? this.recoveryParam = null : this.recoveryParam = t2.recoveryParam);
        }
        function s() {
          this.place = 0;
        }
        function f(t2, e2) {
          var r2 = t2[e2.place++];
          if (!(128 & r2))
            return r2;
          var n2 = 15 & r2;
          if (0 === n2 || n2 > 4)
            return false;
          for (var i2 = 0, o2 = 0, a2 = e2.place; o2 < n2; o2++, a2++)
            i2 <<= 8, i2 |= t2[a2], i2 >>>= 0;
          return !(i2 <= 127) && (e2.place = a2, i2);
        }
        function h(t2) {
          for (var e2 = 0, r2 = t2.length - 1; !t2[e2] && !(128 & t2[e2 + 1]) && e2 < r2; )
            e2++;
          return 0 === e2 ? t2 : t2.slice(e2);
        }
        function u(t2, e2) {
          if (e2 < 128)
            t2.push(e2);
          else {
            var r2 = 1 + (Math.log(e2) / Math.LN2 >>> 3);
            for (t2.push(128 | r2); --r2; )
              t2.push(e2 >>> (r2 << 3) & 255);
            t2.push(e2);
          }
        }
        t.exports = a, a.prototype._importDER = function(t2, e2) {
          t2 = i.toArray(t2, e2);
          var r2 = new s();
          if (48 !== t2[r2.place++])
            return false;
          var o2 = f(t2, r2);
          if (false === o2)
            return false;
          if (o2 + r2.place !== t2.length)
            return false;
          if (2 !== t2[r2.place++])
            return false;
          var a2 = f(t2, r2);
          if (false === a2)
            return false;
          var h2 = t2.slice(r2.place, a2 + r2.place);
          if (r2.place += a2, 2 !== t2[r2.place++])
            return false;
          var u2 = f(t2, r2);
          if (false === u2)
            return false;
          if (t2.length !== u2 + r2.place)
            return false;
          var c = t2.slice(r2.place, u2 + r2.place);
          if (0 === h2[0]) {
            if (!(128 & h2[1]))
              return false;
            h2 = h2.slice(1);
          }
          if (0 === c[0]) {
            if (!(128 & c[1]))
              return false;
            c = c.slice(1);
          }
          return this.r = new n(h2), this.s = new n(c), this.recoveryParam = null, true;
        }, a.prototype.toDER = function(t2) {
          var e2 = this.r.toArray(), r2 = this.s.toArray();
          for (128 & e2[0] && (e2 = [0].concat(e2)), 128 & r2[0] && (r2 = [0].concat(r2)), e2 = h(e2), r2 = h(r2); !(r2[0] || 128 & r2[1]); )
            r2 = r2.slice(1);
          var n2 = [2];
          u(n2, e2.length), (n2 = n2.concat(e2)).push(2), u(n2, r2.length);
          var o2 = n2.concat(r2), a2 = [48];
          return u(a2, o2.length), a2 = a2.concat(o2), i.encode(a2, t2);
        };
      }, 2030: (t, e, r) => {
        "use strict";
        var n = r(5402), i = r(4636), o = r(103), a = o.assert, s = o.parseBytes, f = r(4905), h = r(5104);
        function u(t2) {
          if (a("ed25519" === t2, "only tested with ed25519 so far"), !(this instanceof u))
            return new u(t2);
          t2 = i[t2].curve, this.curve = t2, this.g = t2.g, this.g.precompute(t2.n.bitLength() + 1), this.pointClass = t2.point().constructor, this.encodingLength = Math.ceil(t2.n.bitLength() / 8), this.hash = n.sha512;
        }
        t.exports = u, u.prototype.sign = function(t2, e2) {
          t2 = s(t2);
          var r2 = this.keyFromSecret(e2), n2 = this.hashInt(r2.messagePrefix(), t2), i2 = this.g.mul(n2), o2 = this.encodePoint(i2), a2 = this.hashInt(o2, r2.pubBytes(), t2).mul(r2.priv()), f2 = n2.add(a2).umod(this.curve.n);
          return this.makeSignature({ R: i2, S: f2, Rencoded: o2 });
        }, u.prototype.verify = function(t2, e2, r2) {
          t2 = s(t2), e2 = this.makeSignature(e2);
          var n2 = this.keyFromPublic(r2), i2 = this.hashInt(e2.Rencoded(), n2.pubBytes(), t2), o2 = this.g.mul(e2.S());
          return e2.R().add(n2.pub().mul(i2)).eq(o2);
        }, u.prototype.hashInt = function() {
          for (var t2 = this.hash(), e2 = 0; e2 < arguments.length; e2++)
            t2.update(arguments[e2]);
          return o.intFromLE(t2.digest()).umod(this.curve.n);
        }, u.prototype.keyFromPublic = function(t2) {
          return f.fromPublic(this, t2);
        }, u.prototype.keyFromSecret = function(t2) {
          return f.fromSecret(this, t2);
        }, u.prototype.makeSignature = function(t2) {
          return t2 instanceof h ? t2 : new h(this, t2);
        }, u.prototype.encodePoint = function(t2) {
          var e2 = t2.getY().toArray("le", this.encodingLength);
          return e2[this.encodingLength - 1] |= t2.getX().isOdd() ? 128 : 0, e2;
        }, u.prototype.decodePoint = function(t2) {
          var e2 = (t2 = o.parseBytes(t2)).length - 1, r2 = t2.slice(0, e2).concat(-129 & t2[e2]), n2 = !!(128 & t2[e2]), i2 = o.intFromLE(r2);
          return this.curve.pointFromY(i2, n2);
        }, u.prototype.encodeInt = function(t2) {
          return t2.toArray("le", this.encodingLength);
        }, u.prototype.decodeInt = function(t2) {
          return o.intFromLE(t2);
        }, u.prototype.isPoint = function(t2) {
          return t2 instanceof this.pointClass;
        };
      }, 4905: (t, e, r) => {
        "use strict";
        var n = r(103), i = n.assert, o = n.parseBytes, a = n.cachedProperty;
        function s(t2, e2) {
          this.eddsa = t2, this._secret = o(e2.secret), t2.isPoint(e2.pub) ? this._pub = e2.pub : this._pubBytes = o(e2.pub);
        }
        s.fromPublic = function(t2, e2) {
          return e2 instanceof s ? e2 : new s(t2, { pub: e2 });
        }, s.fromSecret = function(t2, e2) {
          return e2 instanceof s ? e2 : new s(t2, { secret: e2 });
        }, s.prototype.secret = function() {
          return this._secret;
        }, a(s, "pubBytes", function() {
          return this.eddsa.encodePoint(this.pub());
        }), a(s, "pub", function() {
          return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv());
        }), a(s, "privBytes", function() {
          var t2 = this.eddsa, e2 = this.hash(), r2 = t2.encodingLength - 1, n2 = e2.slice(0, t2.encodingLength);
          return n2[0] &= 248, n2[r2] &= 127, n2[r2] |= 64, n2;
        }), a(s, "priv", function() {
          return this.eddsa.decodeInt(this.privBytes());
        }), a(s, "hash", function() {
          return this.eddsa.hash().update(this.secret()).digest();
        }), a(s, "messagePrefix", function() {
          return this.hash().slice(this.eddsa.encodingLength);
        }), s.prototype.sign = function(t2) {
          return i(this._secret, "KeyPair can only verify"), this.eddsa.sign(t2, this);
        }, s.prototype.verify = function(t2, e2) {
          return this.eddsa.verify(t2, e2, this);
        }, s.prototype.getSecret = function(t2) {
          return i(this._secret, "KeyPair is public only"), n.encode(this.secret(), t2);
        }, s.prototype.getPublic = function(t2) {
          return n.encode(this.pubBytes(), t2);
        }, t.exports = s;
      }, 5104: (t, e, r) => {
        "use strict";
        var n = r(8724), i = r(103), o = i.assert, a = i.cachedProperty, s = i.parseBytes;
        function f(t2, e2) {
          this.eddsa = t2, "object" != typeof e2 && (e2 = s(e2)), Array.isArray(e2) && (e2 = { R: e2.slice(0, t2.encodingLength), S: e2.slice(t2.encodingLength) }), o(e2.R && e2.S, "Signature without R or S"), t2.isPoint(e2.R) && (this._R = e2.R), e2.S instanceof n && (this._S = e2.S), this._Rencoded = Array.isArray(e2.R) ? e2.R : e2.Rencoded, this._Sencoded = Array.isArray(e2.S) ? e2.S : e2.Sencoded;
        }
        a(f, "S", function() {
          return this.eddsa.decodeInt(this.Sencoded());
        }), a(f, "R", function() {
          return this.eddsa.decodePoint(this.Rencoded());
        }), a(f, "Rencoded", function() {
          return this.eddsa.encodePoint(this.R());
        }), a(f, "Sencoded", function() {
          return this.eddsa.encodeInt(this.S());
        }), f.prototype.toBytes = function() {
          return this.Rencoded().concat(this.Sencoded());
        }, f.prototype.toHex = function() {
          return i.encode(this.toBytes(), "hex").toUpperCase();
        }, t.exports = f;
      }, 8687: (t) => {
        t.exports = { doubles: { step: 4, points: [["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"], ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"], ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"], ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"], ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"], ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"], ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"], ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"], ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"], ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"], ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"], ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"], ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"], ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"], ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"], ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"], ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"], ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"], ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"], ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"], ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"], ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"], ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"], ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"], ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"], ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"], ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"], ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"], ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"], ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"], ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"], ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"], ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"], ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"], ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"], ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"], ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"], ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"], ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"], ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"], ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"], ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"], ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"], ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"], ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"], ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"], ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"], ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"], ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"], ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"], ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"], ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"], ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"], ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"], ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"], ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"], ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"], ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"], ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"], ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"], ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"], ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"], ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"], ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"], ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]] }, naf: { wnd: 7, points: [["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"], ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"], ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"], ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"], ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"], ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"], ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"], ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"], ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"], ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"], ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"], ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"], ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"], ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"], ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"], ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"], ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"], ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"], ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"], ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"], ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"], ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"], ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"], ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"], ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"], ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"], ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"], ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"], ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"], ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"], ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"], ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"], ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"], ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"], ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"], ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"], ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"], ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"], ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"], ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"], ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"], ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"], ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"], ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"], ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"], ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"], ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"], ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"], ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"], ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"], ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"], ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"], ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"], ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"], ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"], ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"], ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"], ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"], ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"], ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"], ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"], ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"], ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"], ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"], ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"], ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"], ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"], ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"], ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"], ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"], ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"], ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"], ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"], ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"], ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"], ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"], ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"], ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"], ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"], ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"], ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"], ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"], ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"], ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"], ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"], ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"], ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"], ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"], ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"], ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"], ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"], ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"], ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"], ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"], ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"], ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"], ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"], ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"], ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"], ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"], ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"], ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"], ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"], ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"], ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"], ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"], ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"], ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"], ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"], ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"], ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"], ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"], ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"], ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"], ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"], ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"], ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"], ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"], ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"], ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"], ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"], ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"], ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"], ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"], ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"], ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"], ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]] } };
      }, 103: (t, e, r) => {
        "use strict";
        var n = e, i = r(8724), o = r(8637), a = r(5138);
        n.assert = o, n.toArray = a.toArray, n.zero2 = a.zero2, n.toHex = a.toHex, n.encode = a.encode, n.getNAF = function(t2, e2, r2) {
          var n2, i2 = new Array(Math.max(t2.bitLength(), r2) + 1);
          for (n2 = 0; n2 < i2.length; n2 += 1)
            i2[n2] = 0;
          var o2 = 1 << e2 + 1, a2 = t2.clone();
          for (n2 = 0; n2 < i2.length; n2++) {
            var s, f = a2.andln(o2 - 1);
            a2.isOdd() ? (s = f > (o2 >> 1) - 1 ? (o2 >> 1) - f : f, a2.isubn(s)) : s = 0, i2[n2] = s, a2.iushrn(1);
          }
          return i2;
        }, n.getJSF = function(t2, e2) {
          var r2 = [[], []];
          t2 = t2.clone(), e2 = e2.clone();
          for (var n2, i2 = 0, o2 = 0; t2.cmpn(-i2) > 0 || e2.cmpn(-o2) > 0; ) {
            var a2, s, f = t2.andln(3) + i2 & 3, h = e2.andln(3) + o2 & 3;
            3 === f && (f = -1), 3 === h && (h = -1), a2 = 1 & f ? 3 != (n2 = t2.andln(7) + i2 & 7) && 5 !== n2 || 2 !== h ? f : -f : 0, r2[0].push(a2), s = 1 & h ? 3 != (n2 = e2.andln(7) + o2 & 7) && 5 !== n2 || 2 !== f ? h : -h : 0, r2[1].push(s), 2 * i2 === a2 + 1 && (i2 = 1 - i2), 2 * o2 === s + 1 && (o2 = 1 - o2), t2.iushrn(1), e2.iushrn(1);
          }
          return r2;
        }, n.cachedProperty = function(t2, e2, r2) {
          var n2 = "_" + e2;
          t2.prototype[e2] = function() {
            return void 0 !== this[n2] ? this[n2] : this[n2] = r2.call(this);
          };
        }, n.parseBytes = function(t2) {
          return "string" == typeof t2 ? n.toArray(t2, "hex") : t2;
        }, n.intFromLE = function(t2) {
          return new i(t2, "hex", "le");
        };
      }, 3790: (t, e, r) => {
        "use strict";
        var n = r(8534)("%Object.defineProperty%", true) || false;
        if (n)
          try {
            n({}, "a", { value: 1 });
          } catch (t2) {
            n = false;
          }
        t.exports = n;
      }, 1101: (t) => {
        "use strict";
        t.exports = EvalError;
      }, 9183: (t) => {
        "use strict";
        t.exports = Error;
      }, 7570: (t) => {
        "use strict";
        t.exports = RangeError;
      }, 9898: (t) => {
        "use strict";
        t.exports = ReferenceError;
      }, 7388: (t) => {
        "use strict";
        t.exports = SyntaxError;
      }, 7379: (t) => {
        "use strict";
        t.exports = TypeError;
      }, 4585: (t) => {
        "use strict";
        t.exports = URIError;
      }, 1965: (t) => {
        "use strict";
        function e(t2, e2) {
          if (null == t2)
            throw new TypeError("Cannot convert first argument to object");
          for (var r = Object(t2), n = 1; n < arguments.length; n++) {
            var i = arguments[n];
            if (null != i)
              for (var o = Object.keys(Object(i)), a = 0, s = o.length; a < s; a++) {
                var f = o[a], h = Object.getOwnPropertyDescriptor(i, f);
                void 0 !== h && h.enumerable && (r[f] = i[f]);
              }
          }
          return r;
        }
        t.exports = { assign: e, polyfill: function() {
          Object.assign || Object.defineProperty(Object, "assign", { enumerable: false, configurable: true, writable: true, value: e });
        } };
      }, 9784: (t) => {
        "use strict";
        var e, r = "object" == typeof Reflect ? Reflect : null, n = r && "function" == typeof r.apply ? r.apply : function(t2, e2, r2) {
          return Function.prototype.apply.call(t2, e2, r2);
        };
        e = r && "function" == typeof r.ownKeys ? r.ownKeys : Object.getOwnPropertySymbols ? function(t2) {
          return Object.getOwnPropertyNames(t2).concat(Object.getOwnPropertySymbols(t2));
        } : function(t2) {
          return Object.getOwnPropertyNames(t2);
        };
        var i = Number.isNaN || function(t2) {
          return t2 != t2;
        };
        function o() {
          o.init.call(this);
        }
        t.exports = o, t.exports.once = function(t2, e2) {
          return new Promise(function(r2, n2) {
            function i2(r3) {
              t2.removeListener(e2, o2), n2(r3);
            }
            function o2() {
              "function" == typeof t2.removeListener && t2.removeListener("error", i2), r2([].slice.call(arguments));
            }
            b(t2, e2, o2, { once: true }), "error" !== e2 && function(t3, e3, r3) {
              "function" == typeof t3.on && b(t3, "error", e3, { once: true });
            }(t2, i2);
          });
        }, o.EventEmitter = o, o.prototype._events = void 0, o.prototype._eventsCount = 0, o.prototype._maxListeners = void 0;
        var a = 10;
        function s(t2) {
          if ("function" != typeof t2)
            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t2);
        }
        function f(t2) {
          return void 0 === t2._maxListeners ? o.defaultMaxListeners : t2._maxListeners;
        }
        function h(t2, e2, r2, n2) {
          var i2, o2, a2, h2;
          if (s(r2), void 0 === (o2 = t2._events) ? (o2 = t2._events = /* @__PURE__ */ Object.create(null), t2._eventsCount = 0) : (void 0 !== o2.newListener && (t2.emit("newListener", e2, r2.listener ? r2.listener : r2), o2 = t2._events), a2 = o2[e2]), void 0 === a2)
            a2 = o2[e2] = r2, ++t2._eventsCount;
          else if ("function" == typeof a2 ? a2 = o2[e2] = n2 ? [r2, a2] : [a2, r2] : n2 ? a2.unshift(r2) : a2.push(r2), (i2 = f(t2)) > 0 && a2.length > i2 && !a2.warned) {
            a2.warned = true;
            var u2 = new Error("Possible EventEmitter memory leak detected. " + a2.length + " " + String(e2) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            u2.name = "MaxListenersExceededWarning", u2.emitter = t2, u2.type = e2, u2.count = a2.length, h2 = u2, console && console.warn && console.warn(h2);
          }
          return t2;
        }
        function u() {
          if (!this.fired)
            return this.target.removeListener(this.type, this.wrapFn), this.fired = true, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
        }
        function c(t2, e2, r2) {
          var n2 = { fired: false, wrapFn: void 0, target: t2, type: e2, listener: r2 }, i2 = u.bind(n2);
          return i2.listener = r2, n2.wrapFn = i2, i2;
        }
        function d(t2, e2, r2) {
          var n2 = t2._events;
          if (void 0 === n2)
            return [];
          var i2 = n2[e2];
          return void 0 === i2 ? [] : "function" == typeof i2 ? r2 ? [i2.listener || i2] : [i2] : r2 ? function(t3) {
            for (var e3 = new Array(t3.length), r3 = 0; r3 < e3.length; ++r3)
              e3[r3] = t3[r3].listener || t3[r3];
            return e3;
          }(i2) : p(i2, i2.length);
        }
        function l(t2) {
          var e2 = this._events;
          if (void 0 !== e2) {
            var r2 = e2[t2];
            if ("function" == typeof r2)
              return 1;
            if (void 0 !== r2)
              return r2.length;
          }
          return 0;
        }
        function p(t2, e2) {
          for (var r2 = new Array(e2), n2 = 0; n2 < e2; ++n2)
            r2[n2] = t2[n2];
          return r2;
        }
        function b(t2, e2, r2, n2) {
          if ("function" == typeof t2.on)
            n2.once ? t2.once(e2, r2) : t2.on(e2, r2);
          else {
            if ("function" != typeof t2.addEventListener)
              throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t2);
            t2.addEventListener(e2, function i2(o2) {
              n2.once && t2.removeEventListener(e2, i2), r2(o2);
            });
          }
        }
        Object.defineProperty(o, "defaultMaxListeners", { enumerable: true, get: function() {
          return a;
        }, set: function(t2) {
          if ("number" != typeof t2 || t2 < 0 || i(t2))
            throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t2 + ".");
          a = t2;
        } }), o.init = function() {
          void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
        }, o.prototype.setMaxListeners = function(t2) {
          if ("number" != typeof t2 || t2 < 0 || i(t2))
            throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t2 + ".");
          return this._maxListeners = t2, this;
        }, o.prototype.getMaxListeners = function() {
          return f(this);
        }, o.prototype.emit = function(t2) {
          for (var e2 = [], r2 = 1; r2 < arguments.length; r2++)
            e2.push(arguments[r2]);
          var i2 = "error" === t2, o2 = this._events;
          if (void 0 !== o2)
            i2 = i2 && void 0 === o2.error;
          else if (!i2)
            return false;
          if (i2) {
            var a2;
            if (e2.length > 0 && (a2 = e2[0]), a2 instanceof Error)
              throw a2;
            var s2 = new Error("Unhandled error." + (a2 ? " (" + a2.message + ")" : ""));
            throw s2.context = a2, s2;
          }
          var f2 = o2[t2];
          if (void 0 === f2)
            return false;
          if ("function" == typeof f2)
            n(f2, this, e2);
          else {
            var h2 = f2.length, u2 = p(f2, h2);
            for (r2 = 0; r2 < h2; ++r2)
              n(u2[r2], this, e2);
          }
          return true;
        }, o.prototype.addListener = function(t2, e2) {
          return h(this, t2, e2, false);
        }, o.prototype.on = o.prototype.addListener, o.prototype.prependListener = function(t2, e2) {
          return h(this, t2, e2, true);
        }, o.prototype.once = function(t2, e2) {
          return s(e2), this.on(t2, c(this, t2, e2)), this;
        }, o.prototype.prependOnceListener = function(t2, e2) {
          return s(e2), this.prependListener(t2, c(this, t2, e2)), this;
        }, o.prototype.removeListener = function(t2, e2) {
          var r2, n2, i2, o2, a2;
          if (s(e2), void 0 === (n2 = this._events))
            return this;
          if (void 0 === (r2 = n2[t2]))
            return this;
          if (r2 === e2 || r2.listener === e2)
            0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : (delete n2[t2], n2.removeListener && this.emit("removeListener", t2, r2.listener || e2));
          else if ("function" != typeof r2) {
            for (i2 = -1, o2 = r2.length - 1; o2 >= 0; o2--)
              if (r2[o2] === e2 || r2[o2].listener === e2) {
                a2 = r2[o2].listener, i2 = o2;
                break;
              }
            if (i2 < 0)
              return this;
            0 === i2 ? r2.shift() : function(t3, e3) {
              for (; e3 + 1 < t3.length; e3++)
                t3[e3] = t3[e3 + 1];
              t3.pop();
            }(r2, i2), 1 === r2.length && (n2[t2] = r2[0]), void 0 !== n2.removeListener && this.emit("removeListener", t2, a2 || e2);
          }
          return this;
        }, o.prototype.off = o.prototype.removeListener, o.prototype.removeAllListeners = function(t2) {
          var e2, r2, n2;
          if (void 0 === (r2 = this._events))
            return this;
          if (void 0 === r2.removeListener)
            return 0 === arguments.length ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : void 0 !== r2[t2] && (0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : delete r2[t2]), this;
          if (0 === arguments.length) {
            var i2, o2 = Object.keys(r2);
            for (n2 = 0; n2 < o2.length; ++n2)
              "removeListener" !== (i2 = o2[n2]) && this.removeAllListeners(i2);
            return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
          }
          if ("function" == typeof (e2 = r2[t2]))
            this.removeListener(t2, e2);
          else if (void 0 !== e2)
            for (n2 = e2.length - 1; n2 >= 0; n2--)
              this.removeListener(t2, e2[n2]);
          return this;
        }, o.prototype.listeners = function(t2) {
          return d(this, t2, true);
        }, o.prototype.rawListeners = function(t2) {
          return d(this, t2, false);
        }, o.listenerCount = function(t2, e2) {
          return "function" == typeof t2.listenerCount ? t2.listenerCount(e2) : l.call(t2, e2);
        }, o.prototype.listenerCount = l, o.prototype.eventNames = function() {
          return this._eventsCount > 0 ? e(this._events) : [];
        };
      }, 9651: (t, e, r) => {
        var n = r(6671).Buffer, i = r(5916);
        t.exports = function(t2, e2, r2, o) {
          if (n.isBuffer(t2) || (t2 = n.from(t2, "binary")), e2 && (n.isBuffer(e2) || (e2 = n.from(e2, "binary")), 8 !== e2.length))
            throw new RangeError("salt should be Buffer with 8 byte length");
          for (var a = r2 / 8, s = n.alloc(a), f = n.alloc(o || 0), h = n.alloc(0); a > 0 || o > 0; ) {
            var u = new i();
            u.update(h), u.update(t2), e2 && u.update(e2), h = u.digest();
            var c = 0;
            if (a > 0) {
              var d = s.length - a;
              c = Math.min(a, h.length), h.copy(s, d, 0, c), a -= c;
            }
            if (c < h.length && o > 0) {
              var l = f.length - o, p = Math.min(o, h.length - c);
              h.copy(f, l, c, c + p), o -= p;
            }
          }
          return h.fill(0), { key: s, iv: f };
        };
      }, 4405: (t, e, r) => {
        "use strict";
        var n = r(2719), i = Object.prototype.toString, o = Object.prototype.hasOwnProperty;
        t.exports = function(t2, e2, r2) {
          if (!n(e2))
            throw new TypeError("iterator must be a function");
          var a;
          arguments.length >= 3 && (a = r2), "[object Array]" === i.call(t2) ? function(t3, e3, r3) {
            for (var n2 = 0, i2 = t3.length; n2 < i2; n2++)
              o.call(t3, n2) && (null == r3 ? e3(t3[n2], n2, t3) : e3.call(r3, t3[n2], n2, t3));
          }(t2, e2, a) : "string" == typeof t2 ? function(t3, e3, r3) {
            for (var n2 = 0, i2 = t3.length; n2 < i2; n2++)
              null == r3 ? e3(t3.charAt(n2), n2, t3) : e3.call(r3, t3.charAt(n2), n2, t3);
          }(t2, e2, a) : function(t3, e3, r3) {
            for (var n2 in t3)
              o.call(t3, n2) && (null == r3 ? e3(t3[n2], n2, t3) : e3.call(r3, t3[n2], n2, t3));
          }(t2, e2, a);
        };
      }, 1777: (t) => {
        "use strict";
        var e = Object.prototype.toString, r = Math.max, n = function(t2, e2) {
          for (var r2 = [], n2 = 0; n2 < t2.length; n2 += 1)
            r2[n2] = t2[n2];
          for (var i = 0; i < e2.length; i += 1)
            r2[i + t2.length] = e2[i];
          return r2;
        };
        t.exports = function(t2) {
          var i = this;
          if ("function" != typeof i || "[object Function]" !== e.apply(i))
            throw new TypeError("Function.prototype.bind called on incompatible " + i);
          for (var o, a = function(t3, e2) {
            for (var r2 = [], n2 = 1, i2 = 0; n2 < t3.length; n2 += 1, i2 += 1)
              r2[i2] = t3[n2];
            return r2;
          }(arguments), s = r(0, i.length - a.length), f = [], h = 0; h < s; h++)
            f[h] = "$" + h;
          if (o = Function("binder", "return function (" + function(t3, e2) {
            for (var r2 = "", n2 = 0; n2 < t3.length; n2 += 1)
              r2 += t3[n2], n2 + 1 < t3.length && (r2 += ",");
            return r2;
          }(f) + "){ return binder.apply(this,arguments); }")(function() {
            if (this instanceof o) {
              var e2 = i.apply(this, n(a, arguments));
              return Object(e2) === e2 ? e2 : this;
            }
            return i.apply(t2, n(a, arguments));
          }), i.prototype) {
            var u = function() {
            };
            u.prototype = i.prototype, o.prototype = new u(), u.prototype = null;
          }
          return o;
        };
      }, 3583: (t, e, r) => {
        "use strict";
        var n = r(1777);
        t.exports = Function.prototype.bind || n;
      }, 8534: (t, e, r) => {
        "use strict";
        var n, i = r(9183), o = r(1101), a = r(7570), s = r(9898), f = r(7388), h = r(7379), u = r(4585), c = Function, d = function(t2) {
          try {
            return c('"use strict"; return (' + t2 + ").constructor;")();
          } catch (t3) {
          }
        }, l = Object.getOwnPropertyDescriptor;
        if (l)
          try {
            l({}, "");
          } catch (t2) {
            l = null;
          }
        var p = function() {
          throw new h();
        }, b = l ? function() {
          try {
            return p;
          } catch (t2) {
            try {
              return l(arguments, "callee").get;
            } catch (t3) {
              return p;
            }
          }
        }() : p, y = r(1427)(), g = r(757)(), m = Object.getPrototypeOf || (g ? function(t2) {
          return t2.__proto__;
        } : null), v = {}, w = "undefined" != typeof Uint8Array && m ? m(Uint8Array) : n, _ = { __proto__: null, "%AggregateError%": "undefined" == typeof AggregateError ? n : AggregateError, "%Array%": Array, "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? n : ArrayBuffer, "%ArrayIteratorPrototype%": y && m ? m([][Symbol.iterator]()) : n, "%AsyncFromSyncIteratorPrototype%": n, "%AsyncFunction%": v, "%AsyncGenerator%": v, "%AsyncGeneratorFunction%": v, "%AsyncIteratorPrototype%": v, "%Atomics%": "undefined" == typeof Atomics ? n : Atomics, "%BigInt%": "undefined" == typeof BigInt ? n : BigInt, "%BigInt64Array%": "undefined" == typeof BigInt64Array ? n : BigInt64Array, "%BigUint64Array%": "undefined" == typeof BigUint64Array ? n : BigUint64Array, "%Boolean%": Boolean, "%DataView%": "undefined" == typeof DataView ? n : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": i, "%eval%": eval, "%EvalError%": o, "%Float32Array%": "undefined" == typeof Float32Array ? n : Float32Array, "%Float64Array%": "undefined" == typeof Float64Array ? n : Float64Array, "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? n : FinalizationRegistry, "%Function%": c, "%GeneratorFunction%": v, "%Int8Array%": "undefined" == typeof Int8Array ? n : Int8Array, "%Int16Array%": "undefined" == typeof Int16Array ? n : Int16Array, "%Int32Array%": "undefined" == typeof Int32Array ? n : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": y && m ? m(m([][Symbol.iterator]())) : n, "%JSON%": "object" == typeof JSON ? JSON : n, "%Map%": "undefined" == typeof Map ? n : Map, "%MapIteratorPrototype%": "undefined" != typeof Map && y && m ? m((/* @__PURE__ */ new Map())[Symbol.iterator]()) : n, "%Math%": Math, "%Number%": Number, "%Object%": Object, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": "undefined" == typeof Promise ? n : Promise, "%Proxy%": "undefined" == typeof Proxy ? n : Proxy, "%RangeError%": a, "%ReferenceError%": s, "%Reflect%": "undefined" == typeof Reflect ? n : Reflect, "%RegExp%": RegExp, "%Set%": "undefined" == typeof Set ? n : Set, "%SetIteratorPrototype%": "undefined" != typeof Set && y && m ? m((/* @__PURE__ */ new Set())[Symbol.iterator]()) : n, "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? n : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": y && m ? m(""[Symbol.iterator]()) : n, "%Symbol%": y ? Symbol : n, "%SyntaxError%": f, "%ThrowTypeError%": b, "%TypedArray%": w, "%TypeError%": h, "%Uint8Array%": "undefined" == typeof Uint8Array ? n : Uint8Array, "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? n : Uint8ClampedArray, "%Uint16Array%": "undefined" == typeof Uint16Array ? n : Uint16Array, "%Uint32Array%": "undefined" == typeof Uint32Array ? n : Uint32Array, "%URIError%": u, "%WeakMap%": "undefined" == typeof WeakMap ? n : WeakMap, "%WeakRef%": "undefined" == typeof WeakRef ? n : WeakRef, "%WeakSet%": "undefined" == typeof WeakSet ? n : WeakSet };
        if (m)
          try {
            null.error;
          } catch (t2) {
            var S = m(m(t2));
            _["%Error.prototype%"] = S;
          }
        var E = function t2(e2) {
          var r2;
          if ("%AsyncFunction%" === e2)
            r2 = d("async function () {}");
          else if ("%GeneratorFunction%" === e2)
            r2 = d("function* () {}");
          else if ("%AsyncGeneratorFunction%" === e2)
            r2 = d("async function* () {}");
          else if ("%AsyncGenerator%" === e2) {
            var n2 = t2("%AsyncGeneratorFunction%");
            n2 && (r2 = n2.prototype);
          } else if ("%AsyncIteratorPrototype%" === e2) {
            var i2 = t2("%AsyncGenerator%");
            i2 && m && (r2 = m(i2.prototype));
          }
          return _[e2] = r2, r2;
        }, M = { __proto__: null, "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"], "%ArrayPrototype%": ["Array", "prototype"], "%ArrayProto_entries%": ["Array", "prototype", "entries"], "%ArrayProto_forEach%": ["Array", "prototype", "forEach"], "%ArrayProto_keys%": ["Array", "prototype", "keys"], "%ArrayProto_values%": ["Array", "prototype", "values"], "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"], "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"], "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"], "%BooleanPrototype%": ["Boolean", "prototype"], "%DataViewPrototype%": ["DataView", "prototype"], "%DatePrototype%": ["Date", "prototype"], "%ErrorPrototype%": ["Error", "prototype"], "%EvalErrorPrototype%": ["EvalError", "prototype"], "%Float32ArrayPrototype%": ["Float32Array", "prototype"], "%Float64ArrayPrototype%": ["Float64Array", "prototype"], "%FunctionPrototype%": ["Function", "prototype"], "%Generator%": ["GeneratorFunction", "prototype"], "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"], "%Int8ArrayPrototype%": ["Int8Array", "prototype"], "%Int16ArrayPrototype%": ["Int16Array", "prototype"], "%Int32ArrayPrototype%": ["Int32Array", "prototype"], "%JSONParse%": ["JSON", "parse"], "%JSONStringify%": ["JSON", "stringify"], "%MapPrototype%": ["Map", "prototype"], "%NumberPrototype%": ["Number", "prototype"], "%ObjectPrototype%": ["Object", "prototype"], "%ObjProto_toString%": ["Object", "prototype", "toString"], "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"], "%PromisePrototype%": ["Promise", "prototype"], "%PromiseProto_then%": ["Promise", "prototype", "then"], "%Promise_all%": ["Promise", "all"], "%Promise_reject%": ["Promise", "reject"], "%Promise_resolve%": ["Promise", "resolve"], "%RangeErrorPrototype%": ["RangeError", "prototype"], "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"], "%RegExpPrototype%": ["RegExp", "prototype"], "%SetPrototype%": ["Set", "prototype"], "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"], "%StringPrototype%": ["String", "prototype"], "%SymbolPrototype%": ["Symbol", "prototype"], "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"], "%TypedArrayPrototype%": ["TypedArray", "prototype"], "%TypeErrorPrototype%": ["TypeError", "prototype"], "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"], "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"], "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"], "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"], "%URIErrorPrototype%": ["URIError", "prototype"], "%WeakMapPrototype%": ["WeakMap", "prototype"], "%WeakSetPrototype%": ["WeakSet", "prototype"] }, A = r(3583), k = r(7533), B = A.call(Function.call, Array.prototype.concat), O = A.call(Function.apply, Array.prototype.splice), x = A.call(Function.call, String.prototype.replace), I = A.call(Function.call, String.prototype.slice), R = A.call(Function.call, RegExp.prototype.exec), T = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, P = /\\(\\)?/g, N = function(t2, e2) {
          var r2, n2 = t2;
          if (k(M, n2) && (n2 = "%" + (r2 = M[n2])[0] + "%"), k(_, n2)) {
            var i2 = _[n2];
            if (i2 === v && (i2 = E(n2)), void 0 === i2 && !e2)
              throw new h("intrinsic " + t2 + " exists, but is not available. Please file an issue!");
            return { alias: r2, name: n2, value: i2 };
          }
          throw new f("intrinsic " + t2 + " does not exist!");
        };
        t.exports = function(t2, e2) {
          if ("string" != typeof t2 || 0 === t2.length)
            throw new h("intrinsic name must be a non-empty string");
          if (arguments.length > 1 && "boolean" != typeof e2)
            throw new h('"allowMissing" argument must be a boolean');
          if (null === R(/^%?[^%]*%?$/, t2))
            throw new f("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
          var r2 = function(t3) {
            var e3 = I(t3, 0, 1), r3 = I(t3, -1);
            if ("%" === e3 && "%" !== r3)
              throw new f("invalid intrinsic syntax, expected closing `%`");
            if ("%" === r3 && "%" !== e3)
              throw new f("invalid intrinsic syntax, expected opening `%`");
            var n3 = [];
            return x(t3, T, function(t4, e4, r4, i3) {
              n3[n3.length] = r4 ? x(i3, P, "$1") : e4 || t4;
            }), n3;
          }(t2), n2 = r2.length > 0 ? r2[0] : "", i2 = N("%" + n2 + "%", e2), o2 = i2.name, a2 = i2.value, s2 = false, u2 = i2.alias;
          u2 && (n2 = u2[0], O(r2, B([0, 1], u2)));
          for (var c2 = 1, d2 = true; c2 < r2.length; c2 += 1) {
            var p2 = r2[c2], b2 = I(p2, 0, 1), y2 = I(p2, -1);
            if (('"' === b2 || "'" === b2 || "`" === b2 || '"' === y2 || "'" === y2 || "`" === y2) && b2 !== y2)
              throw new f("property names with quotes must have matching quotes");
            if ("constructor" !== p2 && d2 || (s2 = true), k(_, o2 = "%" + (n2 += "." + p2) + "%"))
              a2 = _[o2];
            else if (null != a2) {
              if (!(p2 in a2)) {
                if (!e2)
                  throw new h("base intrinsic for " + t2 + " exists, but the property is not available.");
                return;
              }
              if (l && c2 + 1 >= r2.length) {
                var g2 = l(a2, p2);
                a2 = (d2 = !!g2) && "get" in g2 && !("originalValue" in g2.get) ? g2.get : a2[p2];
              } else
                d2 = k(a2, p2), a2 = a2[p2];
              d2 && !s2 && (_[o2] = a2);
            }
          }
          return a2;
        };
      }, 1325: (t, e, r) => {
        "use strict";
        var n = r(8534)("%Object.getOwnPropertyDescriptor%", true);
        if (n)
          try {
            n([], "length");
          } catch (t2) {
            n = null;
          }
        t.exports = n;
      }, 708: (t, e, r) => {
        "use strict";
        var n = r(3790), i = function() {
          return !!n;
        };
        i.hasArrayLengthDefineBug = function() {
          if (!n)
            return null;
          try {
            return 1 !== n([], "length", { value: 1 }).length;
          } catch (t2) {
            return true;
          }
        }, t.exports = i;
      }, 757: (t) => {
        "use strict";
        var e = { __proto__: null, foo: {} }, r = Object;
        t.exports = function() {
          return { __proto__: e }.foo === e.foo && !(e instanceof r);
        };
      }, 1427: (t, e, r) => {
        "use strict";
        var n = "undefined" != typeof Symbol && Symbol, i = r(6465);
        t.exports = function() {
          return "function" == typeof n && "function" == typeof Symbol && "symbol" == typeof n("foo") && "symbol" == typeof Symbol("bar") && i();
        };
      }, 6465: (t) => {
        "use strict";
        t.exports = function() {
          if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols)
            return false;
          if ("symbol" == typeof Symbol.iterator)
            return true;
          var t2 = {}, e = Symbol("test"), r = Object(e);
          if ("string" == typeof e)
            return false;
          if ("[object Symbol]" !== Object.prototype.toString.call(e))
            return false;
          if ("[object Symbol]" !== Object.prototype.toString.call(r))
            return false;
          for (e in t2[e] = 42, t2)
            return false;
          if ("function" == typeof Object.keys && 0 !== Object.keys(t2).length)
            return false;
          if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t2).length)
            return false;
          var n = Object.getOwnPropertySymbols(t2);
          if (1 !== n.length || n[0] !== e)
            return false;
          if (!Object.prototype.propertyIsEnumerable.call(t2, e))
            return false;
          if ("function" == typeof Object.getOwnPropertyDescriptor) {
            var i = Object.getOwnPropertyDescriptor(t2, e);
            if (42 !== i.value || true !== i.enumerable)
              return false;
          }
          return true;
        };
      }, 6618: (t, e, r) => {
        "use strict";
        var n = r(6465);
        t.exports = function() {
          return n() && !!Symbol.toStringTag;
        };
      }, 859: (t, e, r) => {
        "use strict";
        var n = r(6671).Buffer, i = r(5727).Transform;
        function o(t2) {
          i.call(this), this._block = n.allocUnsafe(t2), this._blockSize = t2, this._blockOffset = 0, this._length = [0, 0, 0, 0], this._finalized = false;
        }
        r(6192)(o, i), o.prototype._transform = function(t2, e2, r2) {
          var n2 = null;
          try {
            this.update(t2, e2);
          } catch (t3) {
            n2 = t3;
          }
          r2(n2);
        }, o.prototype._flush = function(t2) {
          var e2 = null;
          try {
            this.push(this.digest());
          } catch (t3) {
            e2 = t3;
          }
          t2(e2);
        }, o.prototype.update = function(t2, e2) {
          if (function(t3, e3) {
            if (!n.isBuffer(t3) && "string" != typeof t3)
              throw new TypeError("Data must be a string or a buffer");
          }(t2), this._finalized)
            throw new Error("Digest already called");
          n.isBuffer(t2) || (t2 = n.from(t2, e2));
          for (var r2 = this._block, i2 = 0; this._blockOffset + t2.length - i2 >= this._blockSize; ) {
            for (var o2 = this._blockOffset; o2 < this._blockSize; )
              r2[o2++] = t2[i2++];
            this._update(), this._blockOffset = 0;
          }
          for (; i2 < t2.length; )
            r2[this._blockOffset++] = t2[i2++];
          for (var a = 0, s = 8 * t2.length; s > 0; ++a)
            this._length[a] += s, (s = this._length[a] / 4294967296 | 0) > 0 && (this._length[a] -= 4294967296 * s);
          return this;
        }, o.prototype._update = function() {
          throw new Error("_update is not implemented");
        }, o.prototype.digest = function(t2) {
          if (this._finalized)
            throw new Error("Digest already called");
          this._finalized = true;
          var e2 = this._digest();
          void 0 !== t2 && (e2 = e2.toString(t2)), this._block.fill(0), this._blockOffset = 0;
          for (var r2 = 0; r2 < 4; ++r2)
            this._length[r2] = 0;
          return e2;
        }, o.prototype._digest = function() {
          throw new Error("_digest is not implemented");
        }, t.exports = o;
      }, 5402: (t, e, r) => {
        var n = e;
        n.utils = r(900), n.common = r(7984), n.sha = r(2991), n.ripemd = r(262), n.hmac = r(5370), n.sha1 = n.sha.sha1, n.sha256 = n.sha.sha256, n.sha224 = n.sha.sha224, n.sha384 = n.sha.sha384, n.sha512 = n.sha.sha512, n.ripemd160 = n.ripemd.ripemd160;
      }, 7984: (t, e, r) => {
        "use strict";
        var n = r(900), i = r(8637);
        function o() {
          this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
        }
        e.BlockHash = o, o.prototype.update = function(t2, e2) {
          if (t2 = n.toArray(t2, e2), this.pending ? this.pending = this.pending.concat(t2) : this.pending = t2, this.pendingTotal += t2.length, this.pending.length >= this._delta8) {
            var r2 = (t2 = this.pending).length % this._delta8;
            this.pending = t2.slice(t2.length - r2, t2.length), 0 === this.pending.length && (this.pending = null), t2 = n.join32(t2, 0, t2.length - r2, this.endian);
            for (var i2 = 0; i2 < t2.length; i2 += this._delta32)
              this._update(t2, i2, i2 + this._delta32);
          }
          return this;
        }, o.prototype.digest = function(t2) {
          return this.update(this._pad()), i(null === this.pending), this._digest(t2);
        }, o.prototype._pad = function() {
          var t2 = this.pendingTotal, e2 = this._delta8, r2 = e2 - (t2 + this.padLength) % e2, n2 = new Array(r2 + this.padLength);
          n2[0] = 128;
          for (var i2 = 1; i2 < r2; i2++)
            n2[i2] = 0;
          if (t2 <<= 3, "big" === this.endian) {
            for (var o2 = 8; o2 < this.padLength; o2++)
              n2[i2++] = 0;
            n2[i2++] = 0, n2[i2++] = 0, n2[i2++] = 0, n2[i2++] = 0, n2[i2++] = t2 >>> 24 & 255, n2[i2++] = t2 >>> 16 & 255, n2[i2++] = t2 >>> 8 & 255, n2[i2++] = 255 & t2;
          } else
            for (n2[i2++] = 255 & t2, n2[i2++] = t2 >>> 8 & 255, n2[i2++] = t2 >>> 16 & 255, n2[i2++] = t2 >>> 24 & 255, n2[i2++] = 0, n2[i2++] = 0, n2[i2++] = 0, n2[i2++] = 0, o2 = 8; o2 < this.padLength; o2++)
              n2[i2++] = 0;
          return n2;
        };
      }, 5370: (t, e, r) => {
        "use strict";
        var n = r(900), i = r(8637);
        function o(t2, e2, r2) {
          if (!(this instanceof o))
            return new o(t2, e2, r2);
          this.Hash = t2, this.blockSize = t2.blockSize / 8, this.outSize = t2.outSize / 8, this.inner = null, this.outer = null, this._init(n.toArray(e2, r2));
        }
        t.exports = o, o.prototype._init = function(t2) {
          t2.length > this.blockSize && (t2 = new this.Hash().update(t2).digest()), i(t2.length <= this.blockSize);
          for (var e2 = t2.length; e2 < this.blockSize; e2++)
            t2.push(0);
          for (e2 = 0; e2 < t2.length; e2++)
            t2[e2] ^= 54;
          for (this.inner = new this.Hash().update(t2), e2 = 0; e2 < t2.length; e2++)
            t2[e2] ^= 106;
          this.outer = new this.Hash().update(t2);
        }, o.prototype.update = function(t2, e2) {
          return this.inner.update(t2, e2), this;
        }, o.prototype.digest = function(t2) {
          return this.outer.update(this.inner.digest()), this.outer.digest(t2);
        };
      }, 262: (t, e, r) => {
        "use strict";
        var n = r(900), i = r(7984), o = n.rotl32, a = n.sum32, s = n.sum32_3, f = n.sum32_4, h = i.BlockHash;
        function u() {
          if (!(this instanceof u))
            return new u();
          h.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little";
        }
        function c(t2, e2, r2, n2) {
          return t2 <= 15 ? e2 ^ r2 ^ n2 : t2 <= 31 ? e2 & r2 | ~e2 & n2 : t2 <= 47 ? (e2 | ~r2) ^ n2 : t2 <= 63 ? e2 & n2 | r2 & ~n2 : e2 ^ (r2 | ~n2);
        }
        function d(t2) {
          return t2 <= 15 ? 0 : t2 <= 31 ? 1518500249 : t2 <= 47 ? 1859775393 : t2 <= 63 ? 2400959708 : 2840853838;
        }
        function l(t2) {
          return t2 <= 15 ? 1352829926 : t2 <= 31 ? 1548603684 : t2 <= 47 ? 1836072691 : t2 <= 63 ? 2053994217 : 0;
        }
        n.inherits(u, h), e.ripemd160 = u, u.blockSize = 512, u.outSize = 160, u.hmacStrength = 192, u.padLength = 64, u.prototype._update = function(t2, e2) {
          for (var r2 = this.h[0], n2 = this.h[1], i2 = this.h[2], h2 = this.h[3], u2 = this.h[4], m = r2, v = n2, w = i2, _ = h2, S = u2, E = 0; E < 80; E++) {
            var M = a(o(f(r2, c(E, n2, i2, h2), t2[p[E] + e2], d(E)), y[E]), u2);
            r2 = u2, u2 = h2, h2 = o(i2, 10), i2 = n2, n2 = M, M = a(o(f(m, c(79 - E, v, w, _), t2[b[E] + e2], l(E)), g[E]), S), m = S, S = _, _ = o(w, 10), w = v, v = M;
          }
          M = s(this.h[1], i2, _), this.h[1] = s(this.h[2], h2, S), this.h[2] = s(this.h[3], u2, m), this.h[3] = s(this.h[4], r2, v), this.h[4] = s(this.h[0], n2, w), this.h[0] = M;
        }, u.prototype._digest = function(t2) {
          return "hex" === t2 ? n.toHex32(this.h, "little") : n.split32(this.h, "little");
        };
        var p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13], b = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11], y = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6], g = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];
      }, 2991: (t, e, r) => {
        "use strict";
        e.sha1 = r(7267), e.sha224 = r(8496), e.sha256 = r(1413), e.sha384 = r(9281), e.sha512 = r(9952);
      }, 7267: (t, e, r) => {
        "use strict";
        var n = r(900), i = r(7984), o = r(1339), a = n.rotl32, s = n.sum32, f = n.sum32_5, h = o.ft_1, u = i.BlockHash, c = [1518500249, 1859775393, 2400959708, 3395469782];
        function d() {
          if (!(this instanceof d))
            return new d();
          u.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80);
        }
        n.inherits(d, u), t.exports = d, d.blockSize = 512, d.outSize = 160, d.hmacStrength = 80, d.padLength = 64, d.prototype._update = function(t2, e2) {
          for (var r2 = this.W, n2 = 0; n2 < 16; n2++)
            r2[n2] = t2[e2 + n2];
          for (; n2 < r2.length; n2++)
            r2[n2] = a(r2[n2 - 3] ^ r2[n2 - 8] ^ r2[n2 - 14] ^ r2[n2 - 16], 1);
          var i2 = this.h[0], o2 = this.h[1], u2 = this.h[2], d2 = this.h[3], l = this.h[4];
          for (n2 = 0; n2 < r2.length; n2++) {
            var p = ~~(n2 / 20), b = f(a(i2, 5), h(p, o2, u2, d2), l, r2[n2], c[p]);
            l = d2, d2 = u2, u2 = a(o2, 30), o2 = i2, i2 = b;
          }
          this.h[0] = s(this.h[0], i2), this.h[1] = s(this.h[1], o2), this.h[2] = s(this.h[2], u2), this.h[3] = s(this.h[3], d2), this.h[4] = s(this.h[4], l);
        }, d.prototype._digest = function(t2) {
          return "hex" === t2 ? n.toHex32(this.h, "big") : n.split32(this.h, "big");
        };
      }, 8496: (t, e, r) => {
        "use strict";
        var n = r(900), i = r(1413);
        function o() {
          if (!(this instanceof o))
            return new o();
          i.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428];
        }
        n.inherits(o, i), t.exports = o, o.blockSize = 512, o.outSize = 224, o.hmacStrength = 192, o.padLength = 64, o.prototype._digest = function(t2) {
          return "hex" === t2 ? n.toHex32(this.h.slice(0, 7), "big") : n.split32(this.h.slice(0, 7), "big");
        };
      }, 1413: (t, e, r) => {
        "use strict";
        var n = r(900), i = r(7984), o = r(1339), a = r(8637), s = n.sum32, f = n.sum32_4, h = n.sum32_5, u = o.ch32, c = o.maj32, d = o.s0_256, l = o.s1_256, p = o.g0_256, b = o.g1_256, y = i.BlockHash, g = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
        function m() {
          if (!(this instanceof m))
            return new m();
          y.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = g, this.W = new Array(64);
        }
        n.inherits(m, y), t.exports = m, m.blockSize = 512, m.outSize = 256, m.hmacStrength = 192, m.padLength = 64, m.prototype._update = function(t2, e2) {
          for (var r2 = this.W, n2 = 0; n2 < 16; n2++)
            r2[n2] = t2[e2 + n2];
          for (; n2 < r2.length; n2++)
            r2[n2] = f(b(r2[n2 - 2]), r2[n2 - 7], p(r2[n2 - 15]), r2[n2 - 16]);
          var i2 = this.h[0], o2 = this.h[1], y2 = this.h[2], g2 = this.h[3], m2 = this.h[4], v = this.h[5], w = this.h[6], _ = this.h[7];
          for (a(this.k.length === r2.length), n2 = 0; n2 < r2.length; n2++) {
            var S = h(_, l(m2), u(m2, v, w), this.k[n2], r2[n2]), E = s(d(i2), c(i2, o2, y2));
            _ = w, w = v, v = m2, m2 = s(g2, S), g2 = y2, y2 = o2, o2 = i2, i2 = s(S, E);
          }
          this.h[0] = s(this.h[0], i2), this.h[1] = s(this.h[1], o2), this.h[2] = s(this.h[2], y2), this.h[3] = s(this.h[3], g2), this.h[4] = s(this.h[4], m2), this.h[5] = s(this.h[5], v), this.h[6] = s(this.h[6], w), this.h[7] = s(this.h[7], _);
        }, m.prototype._digest = function(t2) {
          return "hex" === t2 ? n.toHex32(this.h, "big") : n.split32(this.h, "big");
        };
      }, 9281: (t, e, r) => {
        "use strict";
        var n = r(900), i = r(9952);
        function o() {
          if (!(this instanceof o))
            return new o();
          i.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428];
        }
        n.inherits(o, i), t.exports = o, o.blockSize = 1024, o.outSize = 384, o.hmacStrength = 192, o.padLength = 128, o.prototype._digest = function(t2) {
          return "hex" === t2 ? n.toHex32(this.h.slice(0, 12), "big") : n.split32(this.h.slice(0, 12), "big");
        };
      }, 9952: (t, e, r) => {
        "use strict";
        var n = r(900), i = r(7984), o = r(8637), a = n.rotr64_hi, s = n.rotr64_lo, f = n.shr64_hi, h = n.shr64_lo, u = n.sum64, c = n.sum64_hi, d = n.sum64_lo, l = n.sum64_4_hi, p = n.sum64_4_lo, b = n.sum64_5_hi, y = n.sum64_5_lo, g = i.BlockHash, m = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
        function v() {
          if (!(this instanceof v))
            return new v();
          g.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = m, this.W = new Array(160);
        }
        function w(t2, e2, r2, n2, i2) {
          var o2 = t2 & r2 ^ ~t2 & i2;
          return o2 < 0 && (o2 += 4294967296), o2;
        }
        function _(t2, e2, r2, n2, i2, o2) {
          var a2 = e2 & n2 ^ ~e2 & o2;
          return a2 < 0 && (a2 += 4294967296), a2;
        }
        function S(t2, e2, r2, n2, i2) {
          var o2 = t2 & r2 ^ t2 & i2 ^ r2 & i2;
          return o2 < 0 && (o2 += 4294967296), o2;
        }
        function E(t2, e2, r2, n2, i2, o2) {
          var a2 = e2 & n2 ^ e2 & o2 ^ n2 & o2;
          return a2 < 0 && (a2 += 4294967296), a2;
        }
        function M(t2, e2) {
          var r2 = a(t2, e2, 28) ^ a(e2, t2, 2) ^ a(e2, t2, 7);
          return r2 < 0 && (r2 += 4294967296), r2;
        }
        function A(t2, e2) {
          var r2 = s(t2, e2, 28) ^ s(e2, t2, 2) ^ s(e2, t2, 7);
          return r2 < 0 && (r2 += 4294967296), r2;
        }
        function k(t2, e2) {
          var r2 = s(t2, e2, 14) ^ s(t2, e2, 18) ^ s(e2, t2, 9);
          return r2 < 0 && (r2 += 4294967296), r2;
        }
        function B(t2, e2) {
          var r2 = a(t2, e2, 1) ^ a(t2, e2, 8) ^ f(t2, e2, 7);
          return r2 < 0 && (r2 += 4294967296), r2;
        }
        function O(t2, e2) {
          var r2 = s(t2, e2, 1) ^ s(t2, e2, 8) ^ h(t2, e2, 7);
          return r2 < 0 && (r2 += 4294967296), r2;
        }
        function x(t2, e2) {
          var r2 = s(t2, e2, 19) ^ s(e2, t2, 29) ^ h(t2, e2, 6);
          return r2 < 0 && (r2 += 4294967296), r2;
        }
        n.inherits(v, g), t.exports = v, v.blockSize = 1024, v.outSize = 512, v.hmacStrength = 192, v.padLength = 128, v.prototype._prepareBlock = function(t2, e2) {
          for (var r2 = this.W, n2 = 0; n2 < 32; n2++)
            r2[n2] = t2[e2 + n2];
          for (; n2 < r2.length; n2 += 2) {
            var i2 = (y2 = r2[n2 - 4], g2 = r2[n2 - 3], m2 = void 0, (m2 = a(y2, g2, 19) ^ a(g2, y2, 29) ^ f(y2, g2, 6)) < 0 && (m2 += 4294967296), m2), o2 = x(r2[n2 - 4], r2[n2 - 3]), s2 = r2[n2 - 14], h2 = r2[n2 - 13], u2 = B(r2[n2 - 30], r2[n2 - 29]), c2 = O(r2[n2 - 30], r2[n2 - 29]), d2 = r2[n2 - 32], b2 = r2[n2 - 31];
            r2[n2] = l(i2, o2, s2, h2, u2, c2, d2, b2), r2[n2 + 1] = p(i2, o2, s2, h2, u2, c2, d2, b2);
          }
          var y2, g2, m2;
        }, v.prototype._update = function(t2, e2) {
          this._prepareBlock(t2, e2);
          var r2, n2, i2, s2 = this.W, f2 = this.h[0], h2 = this.h[1], l2 = this.h[2], p2 = this.h[3], g2 = this.h[4], m2 = this.h[5], v2 = this.h[6], B2 = this.h[7], O2 = this.h[8], x2 = this.h[9], I = this.h[10], R = this.h[11], T = this.h[12], P = this.h[13], N = this.h[14], j = this.h[15];
          o(this.k.length === s2.length);
          for (var D = 0; D < s2.length; D += 2) {
            var L = N, C = j, U = (i2 = void 0, (i2 = a(r2 = O2, n2 = x2, 14) ^ a(r2, n2, 18) ^ a(n2, r2, 9)) < 0 && (i2 += 4294967296), i2), q = k(O2, x2), F = w(O2, 0, I, 0, T), z = _(0, x2, 0, R, 0, P), K = this.k[D], G = this.k[D + 1], H = s2[D], $ = s2[D + 1], W = b(L, C, U, q, F, z, K, G, H, $), V = y(L, C, U, q, F, z, K, G, H, $);
            L = M(f2, h2), C = A(f2, h2), U = S(f2, 0, l2, 0, g2), q = E(0, h2, 0, p2, 0, m2);
            var Y = c(L, C, U, q), Z = d(L, C, U, q);
            N = T, j = P, T = I, P = R, I = O2, R = x2, O2 = c(v2, B2, W, V), x2 = d(B2, B2, W, V), v2 = g2, B2 = m2, g2 = l2, m2 = p2, l2 = f2, p2 = h2, f2 = c(W, V, Y, Z), h2 = d(W, V, Y, Z);
          }
          u(this.h, 0, f2, h2), u(this.h, 2, l2, p2), u(this.h, 4, g2, m2), u(this.h, 6, v2, B2), u(this.h, 8, O2, x2), u(this.h, 10, I, R), u(this.h, 12, T, P), u(this.h, 14, N, j);
        }, v.prototype._digest = function(t2) {
          return "hex" === t2 ? n.toHex32(this.h, "big") : n.split32(this.h, "big");
        };
      }, 1339: (t, e, r) => {
        "use strict";
        var n = r(900).rotr32;
        function i(t2, e2, r2) {
          return t2 & e2 ^ ~t2 & r2;
        }
        function o(t2, e2, r2) {
          return t2 & e2 ^ t2 & r2 ^ e2 & r2;
        }
        function a(t2, e2, r2) {
          return t2 ^ e2 ^ r2;
        }
        e.ft_1 = function(t2, e2, r2, n2) {
          return 0 === t2 ? i(e2, r2, n2) : 1 === t2 || 3 === t2 ? a(e2, r2, n2) : 2 === t2 ? o(e2, r2, n2) : void 0;
        }, e.ch32 = i, e.maj32 = o, e.p32 = a, e.s0_256 = function(t2) {
          return n(t2, 2) ^ n(t2, 13) ^ n(t2, 22);
        }, e.s1_256 = function(t2) {
          return n(t2, 6) ^ n(t2, 11) ^ n(t2, 25);
        }, e.g0_256 = function(t2) {
          return n(t2, 7) ^ n(t2, 18) ^ t2 >>> 3;
        }, e.g1_256 = function(t2) {
          return n(t2, 17) ^ n(t2, 19) ^ t2 >>> 10;
        };
      }, 900: (t, e, r) => {
        "use strict";
        var n = r(8637), i = r(6192);
        function o(t2, e2) {
          return 55296 == (64512 & t2.charCodeAt(e2)) && !(e2 < 0 || e2 + 1 >= t2.length) && 56320 == (64512 & t2.charCodeAt(e2 + 1));
        }
        function a(t2) {
          return (t2 >>> 24 | t2 >>> 8 & 65280 | t2 << 8 & 16711680 | (255 & t2) << 24) >>> 0;
        }
        function s(t2) {
          return 1 === t2.length ? "0" + t2 : t2;
        }
        function f(t2) {
          return 7 === t2.length ? "0" + t2 : 6 === t2.length ? "00" + t2 : 5 === t2.length ? "000" + t2 : 4 === t2.length ? "0000" + t2 : 3 === t2.length ? "00000" + t2 : 2 === t2.length ? "000000" + t2 : 1 === t2.length ? "0000000" + t2 : t2;
        }
        e.inherits = i, e.toArray = function(t2, e2) {
          if (Array.isArray(t2))
            return t2.slice();
          if (!t2)
            return [];
          var r2 = [];
          if ("string" == typeof t2)
            if (e2) {
              if ("hex" === e2)
                for ((t2 = t2.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (t2 = "0" + t2), i2 = 0; i2 < t2.length; i2 += 2)
                  r2.push(parseInt(t2[i2] + t2[i2 + 1], 16));
            } else
              for (var n2 = 0, i2 = 0; i2 < t2.length; i2++) {
                var a2 = t2.charCodeAt(i2);
                a2 < 128 ? r2[n2++] = a2 : a2 < 2048 ? (r2[n2++] = a2 >> 6 | 192, r2[n2++] = 63 & a2 | 128) : o(t2, i2) ? (a2 = 65536 + ((1023 & a2) << 10) + (1023 & t2.charCodeAt(++i2)), r2[n2++] = a2 >> 18 | 240, r2[n2++] = a2 >> 12 & 63 | 128, r2[n2++] = a2 >> 6 & 63 | 128, r2[n2++] = 63 & a2 | 128) : (r2[n2++] = a2 >> 12 | 224, r2[n2++] = a2 >> 6 & 63 | 128, r2[n2++] = 63 & a2 | 128);
              }
          else
            for (i2 = 0; i2 < t2.length; i2++)
              r2[i2] = 0 | t2[i2];
          return r2;
        }, e.toHex = function(t2) {
          for (var e2 = "", r2 = 0; r2 < t2.length; r2++)
            e2 += s(t2[r2].toString(16));
          return e2;
        }, e.htonl = a, e.toHex32 = function(t2, e2) {
          for (var r2 = "", n2 = 0; n2 < t2.length; n2++) {
            var i2 = t2[n2];
            "little" === e2 && (i2 = a(i2)), r2 += f(i2.toString(16));
          }
          return r2;
        }, e.zero2 = s, e.zero8 = f, e.join32 = function(t2, e2, r2, i2) {
          var o2 = r2 - e2;
          n(o2 % 4 == 0);
          for (var a2 = new Array(o2 / 4), s2 = 0, f2 = e2; s2 < a2.length; s2++, f2 += 4) {
            var h;
            h = "big" === i2 ? t2[f2] << 24 | t2[f2 + 1] << 16 | t2[f2 + 2] << 8 | t2[f2 + 3] : t2[f2 + 3] << 24 | t2[f2 + 2] << 16 | t2[f2 + 1] << 8 | t2[f2], a2[s2] = h >>> 0;
          }
          return a2;
        }, e.split32 = function(t2, e2) {
          for (var r2 = new Array(4 * t2.length), n2 = 0, i2 = 0; n2 < t2.length; n2++, i2 += 4) {
            var o2 = t2[n2];
            "big" === e2 ? (r2[i2] = o2 >>> 24, r2[i2 + 1] = o2 >>> 16 & 255, r2[i2 + 2] = o2 >>> 8 & 255, r2[i2 + 3] = 255 & o2) : (r2[i2 + 3] = o2 >>> 24, r2[i2 + 2] = o2 >>> 16 & 255, r2[i2 + 1] = o2 >>> 8 & 255, r2[i2] = 255 & o2);
          }
          return r2;
        }, e.rotr32 = function(t2, e2) {
          return t2 >>> e2 | t2 << 32 - e2;
        }, e.rotl32 = function(t2, e2) {
          return t2 << e2 | t2 >>> 32 - e2;
        }, e.sum32 = function(t2, e2) {
          return t2 + e2 >>> 0;
        }, e.sum32_3 = function(t2, e2, r2) {
          return t2 + e2 + r2 >>> 0;
        }, e.sum32_4 = function(t2, e2, r2, n2) {
          return t2 + e2 + r2 + n2 >>> 0;
        }, e.sum32_5 = function(t2, e2, r2, n2, i2) {
          return t2 + e2 + r2 + n2 + i2 >>> 0;
        }, e.sum64 = function(t2, e2, r2, n2) {
          var i2 = t2[e2], o2 = n2 + t2[e2 + 1] >>> 0, a2 = (o2 < n2 ? 1 : 0) + r2 + i2;
          t2[e2] = a2 >>> 0, t2[e2 + 1] = o2;
        }, e.sum64_hi = function(t2, e2, r2, n2) {
          return (e2 + n2 >>> 0 < e2 ? 1 : 0) + t2 + r2 >>> 0;
        }, e.sum64_lo = function(t2, e2, r2, n2) {
          return e2 + n2 >>> 0;
        }, e.sum64_4_hi = function(t2, e2, r2, n2, i2, o2, a2, s2) {
          var f2 = 0, h = e2;
          return f2 += (h = h + n2 >>> 0) < e2 ? 1 : 0, f2 += (h = h + o2 >>> 0) < o2 ? 1 : 0, t2 + r2 + i2 + a2 + (f2 += (h = h + s2 >>> 0) < s2 ? 1 : 0) >>> 0;
        }, e.sum64_4_lo = function(t2, e2, r2, n2, i2, o2, a2, s2) {
          return e2 + n2 + o2 + s2 >>> 0;
        }, e.sum64_5_hi = function(t2, e2, r2, n2, i2, o2, a2, s2, f2, h) {
          var u = 0, c = e2;
          return u += (c = c + n2 >>> 0) < e2 ? 1 : 0, u += (c = c + o2 >>> 0) < o2 ? 1 : 0, u += (c = c + s2 >>> 0) < s2 ? 1 : 0, t2 + r2 + i2 + a2 + f2 + (u += (c = c + h >>> 0) < h ? 1 : 0) >>> 0;
        }, e.sum64_5_lo = function(t2, e2, r2, n2, i2, o2, a2, s2, f2, h) {
          return e2 + n2 + o2 + s2 + h >>> 0;
        }, e.rotr64_hi = function(t2, e2, r2) {
          return (e2 << 32 - r2 | t2 >>> r2) >>> 0;
        }, e.rotr64_lo = function(t2, e2, r2) {
          return (t2 << 32 - r2 | e2 >>> r2) >>> 0;
        }, e.shr64_hi = function(t2, e2, r2) {
          return t2 >>> r2;
        }, e.shr64_lo = function(t2, e2, r2) {
          return (t2 << 32 - r2 | e2 >>> r2) >>> 0;
        };
      }, 7533: (t, e, r) => {
        "use strict";
        var n = Function.prototype.call, i = Object.prototype.hasOwnProperty, o = r(3583);
        t.exports = o.call(n, i);
      }, 756: (t, e, r) => {
        "use strict";
        var n = r(5402), i = r(5138), o = r(8637);
        function a(t2) {
          if (!(this instanceof a))
            return new a(t2);
          this.hash = t2.hash, this.predResist = !!t2.predResist, this.outLen = this.hash.outSize, this.minEntropy = t2.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
          var e2 = i.toArray(t2.entropy, t2.entropyEnc || "hex"), r2 = i.toArray(t2.nonce, t2.nonceEnc || "hex"), n2 = i.toArray(t2.pers, t2.persEnc || "hex");
          o(e2.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(e2, r2, n2);
        }
        t.exports = a, a.prototype._init = function(t2, e2, r2) {
          var n2 = t2.concat(e2).concat(r2);
          this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
          for (var i2 = 0; i2 < this.V.length; i2++)
            this.K[i2] = 0, this.V[i2] = 1;
          this._update(n2), this._reseed = 1, this.reseedInterval = 281474976710656;
        }, a.prototype._hmac = function() {
          return new n.hmac(this.hash, this.K);
        }, a.prototype._update = function(t2) {
          var e2 = this._hmac().update(this.V).update([0]);
          t2 && (e2 = e2.update(t2)), this.K = e2.digest(), this.V = this._hmac().update(this.V).digest(), t2 && (this.K = this._hmac().update(this.V).update([1]).update(t2).digest(), this.V = this._hmac().update(this.V).digest());
        }, a.prototype.reseed = function(t2, e2, r2, n2) {
          "string" != typeof e2 && (n2 = r2, r2 = e2, e2 = null), t2 = i.toArray(t2, e2), r2 = i.toArray(r2, n2), o(t2.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t2.concat(r2 || [])), this._reseed = 1;
        }, a.prototype.generate = function(t2, e2, r2, n2) {
          if (this._reseed > this.reseedInterval)
            throw new Error("Reseed is required");
          "string" != typeof e2 && (n2 = r2, r2 = e2, e2 = null), r2 && (r2 = i.toArray(r2, n2 || "hex"), this._update(r2));
          for (var o2 = []; o2.length < t2; )
            this.V = this._hmac().update(this.V).digest(), o2 = o2.concat(this.V);
          var a2 = o2.slice(0, t2);
          return this._update(r2), this._reseed++, i.encode(a2, e2);
        };
      }, 7947: (t, e) => {
        e.read = function(t2, e2, r, n, i) {
          var o, a, s = 8 * i - n - 1, f = (1 << s) - 1, h = f >> 1, u = -7, c = r ? i - 1 : 0, d = r ? -1 : 1, l = t2[e2 + c];
          for (c += d, o = l & (1 << -u) - 1, l >>= -u, u += s; u > 0; o = 256 * o + t2[e2 + c], c += d, u -= 8)
            ;
          for (a = o & (1 << -u) - 1, o >>= -u, u += n; u > 0; a = 256 * a + t2[e2 + c], c += d, u -= 8)
            ;
          if (0 === o)
            o = 1 - h;
          else {
            if (o === f)
              return a ? NaN : 1 / 0 * (l ? -1 : 1);
            a += Math.pow(2, n), o -= h;
          }
          return (l ? -1 : 1) * a * Math.pow(2, o - n);
        }, e.write = function(t2, e2, r, n, i, o) {
          var a, s, f, h = 8 * o - i - 1, u = (1 << h) - 1, c = u >> 1, d = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, l = n ? 0 : o - 1, p = n ? 1 : -1, b = e2 < 0 || 0 === e2 && 1 / e2 < 0 ? 1 : 0;
          for (e2 = Math.abs(e2), isNaN(e2) || e2 === 1 / 0 ? (s = isNaN(e2) ? 1 : 0, a = u) : (a = Math.floor(Math.log(e2) / Math.LN2), e2 * (f = Math.pow(2, -a)) < 1 && (a--, f *= 2), (e2 += a + c >= 1 ? d / f : d * Math.pow(2, 1 - c)) * f >= 2 && (a++, f /= 2), a + c >= u ? (s = 0, a = u) : a + c >= 1 ? (s = (e2 * f - 1) * Math.pow(2, i), a += c) : (s = e2 * Math.pow(2, c - 1) * Math.pow(2, i), a = 0)); i >= 8; t2[r + l] = 255 & s, l += p, s /= 256, i -= 8)
            ;
          for (a = a << i | s, h += i; h > 0; t2[r + l] = 255 & a, l += p, a /= 256, h -= 8)
            ;
          t2[r + l - p] |= 128 * b;
        };
      }, 6192: (t) => {
        "function" == typeof Object.create ? t.exports = function(t2, e) {
          e && (t2.super_ = e, t2.prototype = Object.create(e.prototype, { constructor: { value: t2, enumerable: false, writable: true, configurable: true } }));
        } : t.exports = function(t2, e) {
          if (e) {
            t2.super_ = e;
            var r = function() {
            };
            r.prototype = e.prototype, t2.prototype = new r(), t2.prototype.constructor = t2;
          }
        };
      }, 8286: (t, e, r) => {
        "use strict";
        var n = r(6618)(), i = r(2787)("Object.prototype.toString"), o = function(t2) {
          return !(n && t2 && "object" == typeof t2 && Symbol.toStringTag in t2) && "[object Arguments]" === i(t2);
        }, a = function(t2) {
          return !!o(t2) || null !== t2 && "object" == typeof t2 && "number" == typeof t2.length && t2.length >= 0 && "[object Array]" !== i(t2) && "[object Function]" === i(t2.callee);
        }, s = function() {
          return o(arguments);
        }();
        o.isLegacyArguments = a, t.exports = s ? o : a;
      }, 2719: (t) => {
        "use strict";
        var e, r, n = Function.prototype.toString, i = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
        if ("function" == typeof i && "function" == typeof Object.defineProperty)
          try {
            e = Object.defineProperty({}, "length", { get: function() {
              throw r;
            } }), r = {}, i(function() {
              throw 42;
            }, null, e);
          } catch (t2) {
            t2 !== r && (i = null);
          }
        else
          i = null;
        var o = /^\s*class\b/, a = function(t2) {
          try {
            var e2 = n.call(t2);
            return o.test(e2);
          } catch (t3) {
            return false;
          }
        }, s = function(t2) {
          try {
            return !a(t2) && (n.call(t2), true);
          } catch (t3) {
            return false;
          }
        }, f = Object.prototype.toString, h = "function" == typeof Symbol && !!Symbol.toStringTag, u = !(0 in [,]), c = function() {
          return false;
        };
        if ("object" == typeof document) {
          var d = document.all;
          f.call(d) === f.call(document.all) && (c = function(t2) {
            if ((u || !t2) && (void 0 === t2 || "object" == typeof t2))
              try {
                var e2 = f.call(t2);
                return ("[object HTMLAllCollection]" === e2 || "[object HTML document.all class]" === e2 || "[object HTMLCollection]" === e2 || "[object Object]" === e2) && null == t2("");
              } catch (t3) {
              }
            return false;
          });
        }
        t.exports = i ? function(t2) {
          if (c(t2))
            return true;
          if (!t2)
            return false;
          if ("function" != typeof t2 && "object" != typeof t2)
            return false;
          try {
            i(t2, null, e);
          } catch (t3) {
            if (t3 !== r)
              return false;
          }
          return !a(t2) && s(t2);
        } : function(t2) {
          if (c(t2))
            return true;
          if (!t2)
            return false;
          if ("function" != typeof t2 && "object" != typeof t2)
            return false;
          if (h)
            return s(t2);
          if (a(t2))
            return false;
          var e2 = f.call(t2);
          return !("[object Function]" !== e2 && "[object GeneratorFunction]" !== e2 && !/^\[object HTML/.test(e2)) && s(t2);
        };
      }, 9155: (t, e, r) => {
        "use strict";
        var n, i = Object.prototype.toString, o = Function.prototype.toString, a = /^\s*(?:function)?\*/, s = r(6618)(), f = Object.getPrototypeOf;
        t.exports = function(t2) {
          if ("function" != typeof t2)
            return false;
          if (a.test(o.call(t2)))
            return true;
          if (!s)
            return "[object GeneratorFunction]" === i.call(t2);
          if (!f)
            return false;
          if (void 0 === n) {
            var e2 = function() {
              if (!s)
                return false;
              try {
                return Function("return function*() {}")();
              } catch (t3) {
              }
            }();
            n = !!e2 && f(e2);
          }
          return f(t2) === n;
        };
      }, 5903: (t) => {
        "use strict";
        t.exports = function(t2) {
          return t2 != t2;
        };
      }, 3641: (t, e, r) => {
        "use strict";
        var n = r(1919), i = r(8189), o = r(5903), a = r(6126), s = r(1324), f = n(a(), Number);
        i(f, { getPolyfill: a, implementation: o, shim: s }), t.exports = f;
      }, 6126: (t, e, r) => {
        "use strict";
        var n = r(5903);
        t.exports = function() {
          return Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a") ? Number.isNaN : n;
        };
      }, 1324: (t, e, r) => {
        "use strict";
        var n = r(8189), i = r(6126);
        t.exports = function() {
          var t2 = i();
          return n(Number, { isNaN: t2 }, { isNaN: function() {
            return Number.isNaN !== t2;
          } }), t2;
        };
      }, 9345: (t, e, r) => {
        "use strict";
        var n = r(1337);
        t.exports = function(t2) {
          return !!n(t2);
        };
      }, 934: (t) => {
        var e = {}.toString;
        t.exports = Array.isArray || function(t2) {
          return "[object Array]" == e.call(t2);
        };
      }, 5916: (t, e, r) => {
        "use strict";
        var n = r(6192), i = r(859), o = r(6671).Buffer, a = new Array(16);
        function s() {
          i.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878;
        }
        function f(t2, e2) {
          return t2 << e2 | t2 >>> 32 - e2;
        }
        function h(t2, e2, r2, n2, i2, o2, a2) {
          return f(t2 + (e2 & r2 | ~e2 & n2) + i2 + o2 | 0, a2) + e2 | 0;
        }
        function u(t2, e2, r2, n2, i2, o2, a2) {
          return f(t2 + (e2 & n2 | r2 & ~n2) + i2 + o2 | 0, a2) + e2 | 0;
        }
        function c(t2, e2, r2, n2, i2, o2, a2) {
          return f(t2 + (e2 ^ r2 ^ n2) + i2 + o2 | 0, a2) + e2 | 0;
        }
        function d(t2, e2, r2, n2, i2, o2, a2) {
          return f(t2 + (r2 ^ (e2 | ~n2)) + i2 + o2 | 0, a2) + e2 | 0;
        }
        n(s, i), s.prototype._update = function() {
          for (var t2 = a, e2 = 0; e2 < 16; ++e2)
            t2[e2] = this._block.readInt32LE(4 * e2);
          var r2 = this._a, n2 = this._b, i2 = this._c, o2 = this._d;
          r2 = h(r2, n2, i2, o2, t2[0], 3614090360, 7), o2 = h(o2, r2, n2, i2, t2[1], 3905402710, 12), i2 = h(i2, o2, r2, n2, t2[2], 606105819, 17), n2 = h(n2, i2, o2, r2, t2[3], 3250441966, 22), r2 = h(r2, n2, i2, o2, t2[4], 4118548399, 7), o2 = h(o2, r2, n2, i2, t2[5], 1200080426, 12), i2 = h(i2, o2, r2, n2, t2[6], 2821735955, 17), n2 = h(n2, i2, o2, r2, t2[7], 4249261313, 22), r2 = h(r2, n2, i2, o2, t2[8], 1770035416, 7), o2 = h(o2, r2, n2, i2, t2[9], 2336552879, 12), i2 = h(i2, o2, r2, n2, t2[10], 4294925233, 17), n2 = h(n2, i2, o2, r2, t2[11], 2304563134, 22), r2 = h(r2, n2, i2, o2, t2[12], 1804603682, 7), o2 = h(o2, r2, n2, i2, t2[13], 4254626195, 12), i2 = h(i2, o2, r2, n2, t2[14], 2792965006, 17), r2 = u(r2, n2 = h(n2, i2, o2, r2, t2[15], 1236535329, 22), i2, o2, t2[1], 4129170786, 5), o2 = u(o2, r2, n2, i2, t2[6], 3225465664, 9), i2 = u(i2, o2, r2, n2, t2[11], 643717713, 14), n2 = u(n2, i2, o2, r2, t2[0], 3921069994, 20), r2 = u(r2, n2, i2, o2, t2[5], 3593408605, 5), o2 = u(o2, r2, n2, i2, t2[10], 38016083, 9), i2 = u(i2, o2, r2, n2, t2[15], 3634488961, 14), n2 = u(n2, i2, o2, r2, t2[4], 3889429448, 20), r2 = u(r2, n2, i2, o2, t2[9], 568446438, 5), o2 = u(o2, r2, n2, i2, t2[14], 3275163606, 9), i2 = u(i2, o2, r2, n2, t2[3], 4107603335, 14), n2 = u(n2, i2, o2, r2, t2[8], 1163531501, 20), r2 = u(r2, n2, i2, o2, t2[13], 2850285829, 5), o2 = u(o2, r2, n2, i2, t2[2], 4243563512, 9), i2 = u(i2, o2, r2, n2, t2[7], 1735328473, 14), r2 = c(r2, n2 = u(n2, i2, o2, r2, t2[12], 2368359562, 20), i2, o2, t2[5], 4294588738, 4), o2 = c(o2, r2, n2, i2, t2[8], 2272392833, 11), i2 = c(i2, o2, r2, n2, t2[11], 1839030562, 16), n2 = c(n2, i2, o2, r2, t2[14], 4259657740, 23), r2 = c(r2, n2, i2, o2, t2[1], 2763975236, 4), o2 = c(o2, r2, n2, i2, t2[4], 1272893353, 11), i2 = c(i2, o2, r2, n2, t2[7], 4139469664, 16), n2 = c(n2, i2, o2, r2, t2[10], 3200236656, 23), r2 = c(r2, n2, i2, o2, t2[13], 681279174, 4), o2 = c(o2, r2, n2, i2, t2[0], 3936430074, 11), i2 = c(i2, o2, r2, n2, t2[3], 3572445317, 16), n2 = c(n2, i2, o2, r2, t2[6], 76029189, 23), r2 = c(r2, n2, i2, o2, t2[9], 3654602809, 4), o2 = c(o2, r2, n2, i2, t2[12], 3873151461, 11), i2 = c(i2, o2, r2, n2, t2[15], 530742520, 16), r2 = d(r2, n2 = c(n2, i2, o2, r2, t2[2], 3299628645, 23), i2, o2, t2[0], 4096336452, 6), o2 = d(o2, r2, n2, i2, t2[7], 1126891415, 10), i2 = d(i2, o2, r2, n2, t2[14], 2878612391, 15), n2 = d(n2, i2, o2, r2, t2[5], 4237533241, 21), r2 = d(r2, n2, i2, o2, t2[12], 1700485571, 6), o2 = d(o2, r2, n2, i2, t2[3], 2399980690, 10), i2 = d(i2, o2, r2, n2, t2[10], 4293915773, 15), n2 = d(n2, i2, o2, r2, t2[1], 2240044497, 21), r2 = d(r2, n2, i2, o2, t2[8], 1873313359, 6), o2 = d(o2, r2, n2, i2, t2[15], 4264355552, 10), i2 = d(i2, o2, r2, n2, t2[6], 2734768916, 15), n2 = d(n2, i2, o2, r2, t2[13], 1309151649, 21), r2 = d(r2, n2, i2, o2, t2[4], 4149444226, 6), o2 = d(o2, r2, n2, i2, t2[11], 3174756917, 10), i2 = d(i2, o2, r2, n2, t2[2], 718787259, 15), n2 = d(n2, i2, o2, r2, t2[9], 3951481745, 21), this._a = this._a + r2 | 0, this._b = this._b + n2 | 0, this._c = this._c + i2 | 0, this._d = this._d + o2 | 0;
        }, s.prototype._digest = function() {
          this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
          var t2 = o.allocUnsafe(16);
          return t2.writeInt32LE(this._a, 0), t2.writeInt32LE(this._b, 4), t2.writeInt32LE(this._c, 8), t2.writeInt32LE(this._d, 12), t2;
        }, t.exports = s;
      }, 4959: (t, e, r) => {
        var n = r(8724), i = r(3569);
        function o(t2) {
          this.rand = t2 || new i.Rand();
        }
        t.exports = o, o.create = function(t2) {
          return new o(t2);
        }, o.prototype._randbelow = function(t2) {
          var e2 = t2.bitLength(), r2 = Math.ceil(e2 / 8);
          do {
            var i2 = new n(this.rand.generate(r2));
          } while (i2.cmp(t2) >= 0);
          return i2;
        }, o.prototype._randrange = function(t2, e2) {
          var r2 = e2.sub(t2);
          return t2.add(this._randbelow(r2));
        }, o.prototype.test = function(t2, e2, r2) {
          var i2 = t2.bitLength(), o2 = n.mont(t2), a = new n(1).toRed(o2);
          e2 || (e2 = Math.max(1, i2 / 48 | 0));
          for (var s = t2.subn(1), f = 0; !s.testn(f); f++)
            ;
          for (var h = t2.shrn(f), u = s.toRed(o2); e2 > 0; e2--) {
            var c = this._randrange(new n(2), s);
            r2 && r2(c);
            var d = c.toRed(o2).redPow(h);
            if (0 !== d.cmp(a) && 0 !== d.cmp(u)) {
              for (var l = 1; l < f; l++) {
                if (0 === (d = d.redSqr()).cmp(a))
                  return false;
                if (0 === d.cmp(u))
                  break;
              }
              if (l === f)
                return false;
            }
          }
          return true;
        }, o.prototype.getDivisor = function(t2, e2) {
          var r2 = t2.bitLength(), i2 = n.mont(t2), o2 = new n(1).toRed(i2);
          e2 || (e2 = Math.max(1, r2 / 48 | 0));
          for (var a = t2.subn(1), s = 0; !a.testn(s); s++)
            ;
          for (var f = t2.shrn(s), h = a.toRed(i2); e2 > 0; e2--) {
            var u = this._randrange(new n(2), a), c = t2.gcd(u);
            if (0 !== c.cmpn(1))
              return c;
            var d = u.toRed(i2).redPow(f);
            if (0 !== d.cmp(o2) && 0 !== d.cmp(h)) {
              for (var l = 1; l < s; l++) {
                if (0 === (d = d.redSqr()).cmp(o2))
                  return d.fromRed().subn(1).gcd(t2);
                if (0 === d.cmp(h))
                  break;
              }
              if (l === s)
                return (d = d.redSqr()).fromRed().subn(1).gcd(t2);
            }
          }
          return false;
        };
      }, 8637: (t) => {
        function e(t2, e2) {
          if (!t2)
            throw new Error(e2 || "Assertion failed");
        }
        t.exports = e, e.equal = function(t2, e2, r) {
          if (t2 != e2)
            throw new Error(r || "Assertion failed: " + t2 + " != " + e2);
        };
      }, 5138: (t, e) => {
        "use strict";
        var r = e;
        function n(t2) {
          return 1 === t2.length ? "0" + t2 : t2;
        }
        function i(t2) {
          for (var e2 = "", r2 = 0; r2 < t2.length; r2++)
            e2 += n(t2[r2].toString(16));
          return e2;
        }
        r.toArray = function(t2, e2) {
          if (Array.isArray(t2))
            return t2.slice();
          if (!t2)
            return [];
          var r2 = [];
          if ("string" != typeof t2) {
            for (var n2 = 0; n2 < t2.length; n2++)
              r2[n2] = 0 | t2[n2];
            return r2;
          }
          if ("hex" === e2)
            for ((t2 = t2.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (t2 = "0" + t2), n2 = 0; n2 < t2.length; n2 += 2)
              r2.push(parseInt(t2[n2] + t2[n2 + 1], 16));
          else
            for (n2 = 0; n2 < t2.length; n2++) {
              var i2 = t2.charCodeAt(n2), o = i2 >> 8, a = 255 & i2;
              o ? r2.push(o, a) : r2.push(a);
            }
          return r2;
        }, r.zero2 = n, r.toHex = i, r.encode = function(t2, e2) {
          return "hex" === e2 ? i(t2) : t2;
        };
      }, 8713: (t) => {
        "use strict";
        var e = function(t2) {
          return t2 != t2;
        };
        t.exports = function(t2, r) {
          return 0 === t2 && 0 === r ? 1 / t2 == 1 / r : t2 === r || !(!e(t2) || !e(r));
        };
      }, 4727: (t, e, r) => {
        "use strict";
        var n = r(8189), i = r(1919), o = r(8713), a = r(8284), s = r(9046), f = i(a(), Object);
        n(f, { getPolyfill: a, implementation: o, shim: s }), t.exports = f;
      }, 8284: (t, e, r) => {
        "use strict";
        var n = r(8713);
        t.exports = function() {
          return "function" == typeof Object.is ? Object.is : n;
        };
      }, 9046: (t, e, r) => {
        "use strict";
        var n = r(8284), i = r(8189);
        t.exports = function() {
          var t2 = n();
          return i(Object, { is: t2 }, { is: function() {
            return Object.is !== t2;
          } }), t2;
        };
      }, 6712: (t, e, r) => {
        "use strict";
        var n;
        if (!Object.keys) {
          var i = Object.prototype.hasOwnProperty, o = Object.prototype.toString, a = r(416), s = Object.prototype.propertyIsEnumerable, f = !s.call({ toString: null }, "toString"), h = s.call(function() {
          }, "prototype"), u = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], c = function(t2) {
            var e2 = t2.constructor;
            return e2 && e2.prototype === t2;
          }, d = { $applicationCache: true, $console: true, $external: true, $frame: true, $frameElement: true, $frames: true, $innerHeight: true, $innerWidth: true, $onmozfullscreenchange: true, $onmozfullscreenerror: true, $outerHeight: true, $outerWidth: true, $pageXOffset: true, $pageYOffset: true, $parent: true, $scrollLeft: true, $scrollTop: true, $scrollX: true, $scrollY: true, $self: true, $webkitIndexedDB: true, $webkitStorageInfo: true, $window: true }, l = function() {
            if ("undefined" == typeof window)
              return false;
            for (var t2 in window)
              try {
                if (!d["$" + t2] && i.call(window, t2) && null !== window[t2] && "object" == typeof window[t2])
                  try {
                    c(window[t2]);
                  } catch (t3) {
                    return true;
                  }
              } catch (t3) {
                return true;
              }
            return false;
          }();
          n = function(t2) {
            var e2 = null !== t2 && "object" == typeof t2, r2 = "[object Function]" === o.call(t2), n2 = a(t2), s2 = e2 && "[object String]" === o.call(t2), d2 = [];
            if (!e2 && !r2 && !n2)
              throw new TypeError("Object.keys called on a non-object");
            var p = h && r2;
            if (s2 && t2.length > 0 && !i.call(t2, 0))
              for (var b = 0; b < t2.length; ++b)
                d2.push(String(b));
            if (n2 && t2.length > 0)
              for (var y = 0; y < t2.length; ++y)
                d2.push(String(y));
            else
              for (var g in t2)
                p && "prototype" === g || !i.call(t2, g) || d2.push(String(g));
            if (f)
              for (var m = function(t3) {
                if ("undefined" == typeof window || !l)
                  return c(t3);
                try {
                  return c(t3);
                } catch (t4) {
                  return false;
                }
              }(t2), v = 0; v < u.length; ++v)
                m && "constructor" === u[v] || !i.call(t2, u[v]) || d2.push(u[v]);
            return d2;
          };
        }
        t.exports = n;
      }, 1748: (t, e, r) => {
        "use strict";
        var n = Array.prototype.slice, i = r(416), o = Object.keys, a = o ? function(t2) {
          return o(t2);
        } : r(6712), s = Object.keys;
        a.shim = function() {
          if (Object.keys) {
            var t2 = function() {
              var t3 = Object.keys(arguments);
              return t3 && t3.length === arguments.length;
            }(1, 2);
            t2 || (Object.keys = function(t3) {
              return i(t3) ? s(n.call(t3)) : s(t3);
            });
          } else
            Object.keys = a;
          return Object.keys || a;
        }, t.exports = a;
      }, 416: (t) => {
        "use strict";
        var e = Object.prototype.toString;
        t.exports = function(t2) {
          var r = e.call(t2), n = "[object Arguments]" === r;
          return n || (n = "[object Array]" !== r && null !== t2 && "object" == typeof t2 && "number" == typeof t2.length && t2.length >= 0 && "[object Function]" === e.call(t2.callee)), n;
        };
      }, 4083: (t, e, r) => {
        "use strict";
        var n = r(3740);
        e.certificate = r(9067);
        var i = n.define("RSAPrivateKey", function() {
          this.seq().obj(this.key("version").int(), this.key("modulus").int(), this.key("publicExponent").int(), this.key("privateExponent").int(), this.key("prime1").int(), this.key("prime2").int(), this.key("exponent1").int(), this.key("exponent2").int(), this.key("coefficient").int());
        });
        e.RSAPrivateKey = i;
        var o = n.define("RSAPublicKey", function() {
          this.seq().obj(this.key("modulus").int(), this.key("publicExponent").int());
        });
        e.RSAPublicKey = o;
        var a = n.define("AlgorithmIdentifier", function() {
          this.seq().obj(this.key("algorithm").objid(), this.key("none").null_().optional(), this.key("curve").objid().optional(), this.key("params").seq().obj(this.key("p").int(), this.key("q").int(), this.key("g").int()).optional());
        }), s = n.define("SubjectPublicKeyInfo", function() {
          this.seq().obj(this.key("algorithm").use(a), this.key("subjectPublicKey").bitstr());
        });
        e.PublicKey = s;
        var f = n.define("PrivateKeyInfo", function() {
          this.seq().obj(this.key("version").int(), this.key("algorithm").use(a), this.key("subjectPrivateKey").octstr());
        });
        e.PrivateKey = f;
        var h = n.define("EncryptedPrivateKeyInfo", function() {
          this.seq().obj(this.key("algorithm").seq().obj(this.key("id").objid(), this.key("decrypt").seq().obj(this.key("kde").seq().obj(this.key("id").objid(), this.key("kdeparams").seq().obj(this.key("salt").octstr(), this.key("iters").int())), this.key("cipher").seq().obj(this.key("algo").objid(), this.key("iv").octstr()))), this.key("subjectPrivateKey").octstr());
        });
        e.EncryptedPrivateKey = h;
        var u = n.define("DSAPrivateKey", function() {
          this.seq().obj(this.key("version").int(), this.key("p").int(), this.key("q").int(), this.key("g").int(), this.key("pub_key").int(), this.key("priv_key").int());
        });
        e.DSAPrivateKey = u, e.DSAparam = n.define("DSAparam", function() {
          this.int();
        });
        var c = n.define("ECParameters", function() {
          this.choice({ namedCurve: this.objid() });
        }), d = n.define("ECPrivateKey", function() {
          this.seq().obj(this.key("version").int(), this.key("privateKey").octstr(), this.key("parameters").optional().explicit(0).use(c), this.key("publicKey").optional().explicit(1).bitstr());
        });
        e.ECPrivateKey = d, e.signature = n.define("signature", function() {
          this.seq().obj(this.key("r").int(), this.key("s").int());
        });
      }, 9067: (t, e, r) => {
        "use strict";
        var n = r(3740), i = n.define("Time", function() {
          this.choice({ utcTime: this.utctime(), generalTime: this.gentime() });
        }), o = n.define("AttributeTypeValue", function() {
          this.seq().obj(this.key("type").objid(), this.key("value").any());
        }), a = n.define("AlgorithmIdentifier", function() {
          this.seq().obj(this.key("algorithm").objid(), this.key("parameters").optional(), this.key("curve").objid().optional());
        }), s = n.define("SubjectPublicKeyInfo", function() {
          this.seq().obj(this.key("algorithm").use(a), this.key("subjectPublicKey").bitstr());
        }), f = n.define("RelativeDistinguishedName", function() {
          this.setof(o);
        }), h = n.define("RDNSequence", function() {
          this.seqof(f);
        }), u = n.define("Name", function() {
          this.choice({ rdnSequence: this.use(h) });
        }), c = n.define("Validity", function() {
          this.seq().obj(this.key("notBefore").use(i), this.key("notAfter").use(i));
        }), d = n.define("Extension", function() {
          this.seq().obj(this.key("extnID").objid(), this.key("critical").bool().def(false), this.key("extnValue").octstr());
        }), l = n.define("TBSCertificate", function() {
          this.seq().obj(this.key("version").explicit(0).int().optional(), this.key("serialNumber").int(), this.key("signature").use(a), this.key("issuer").use(u), this.key("validity").use(c), this.key("subject").use(u), this.key("subjectPublicKeyInfo").use(s), this.key("issuerUniqueID").implicit(1).bitstr().optional(), this.key("subjectUniqueID").implicit(2).bitstr().optional(), this.key("extensions").explicit(3).seqof(d).optional());
        }), p = n.define("X509Certificate", function() {
          this.seq().obj(this.key("tbsCertificate").use(l), this.key("signatureAlgorithm").use(a), this.key("signatureValue").bitstr());
        });
        t.exports = p;
      }, 4747: (t, e, r) => {
        "use strict";
        var n = /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r+/=]+)[\n\r]+/m, i = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m, o = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r+/=]+)-----END \1-----$/m, a = r(9651), s = r(2592), f = r(6671).Buffer;
        t.exports = function(t2, e2) {
          var r2, h = t2.toString(), u = h.match(n);
          if (u) {
            var c = "aes" + u[1], d = f.from(u[2], "hex"), l = f.from(u[3].replace(/[\r\n]/g, ""), "base64"), p = a(e2, d.slice(0, 8), parseInt(u[1], 10)).key, b = [], y = s.createDecipheriv(c, p, d);
            b.push(y.update(l)), b.push(y.final()), r2 = f.concat(b);
          } else {
            var g = h.match(o);
            r2 = f.from(g[2].replace(/[\r\n]/g, ""), "base64");
          }
          return { tag: h.match(i)[1], data: r2 };
        };
      }, 8396: (t, e, r) => {
        "use strict";
        var n = r(4083), i = r(7029), o = r(4747), a = r(2592), s = r(8045), f = r(6671).Buffer;
        function h(t2) {
          var e2;
          "object" != typeof t2 || f.isBuffer(t2) || (e2 = t2.passphrase, t2 = t2.key), "string" == typeof t2 && (t2 = f.from(t2));
          var r2, h2, u = o(t2, e2), c = u.tag, d = u.data;
          switch (c) {
            case "CERTIFICATE":
              h2 = n.certificate.decode(d, "der").tbsCertificate.subjectPublicKeyInfo;
            case "PUBLIC KEY":
              switch (h2 || (h2 = n.PublicKey.decode(d, "der")), r2 = h2.algorithm.algorithm.join(".")) {
                case "1.2.840.113549.1.1.1":
                  return n.RSAPublicKey.decode(h2.subjectPublicKey.data, "der");
                case "1.2.840.10045.2.1":
                  return h2.subjectPrivateKey = h2.subjectPublicKey, { type: "ec", data: h2 };
                case "1.2.840.10040.4.1":
                  return h2.algorithm.params.pub_key = n.DSAparam.decode(h2.subjectPublicKey.data, "der"), { type: "dsa", data: h2.algorithm.params };
                default:
                  throw new Error("unknown key id " + r2);
              }
            case "ENCRYPTED PRIVATE KEY":
              d = function(t3, e3) {
                var r3 = t3.algorithm.decrypt.kde.kdeparams.salt, n2 = parseInt(t3.algorithm.decrypt.kde.kdeparams.iters.toString(), 10), o2 = i[t3.algorithm.decrypt.cipher.algo.join(".")], h3 = t3.algorithm.decrypt.cipher.iv, u2 = t3.subjectPrivateKey, c2 = parseInt(o2.split("-")[1], 10) / 8, d2 = s.pbkdf2Sync(e3, r3, n2, c2, "sha1"), l = a.createDecipheriv(o2, d2, h3), p = [];
                return p.push(l.update(u2)), p.push(l.final()), f.concat(p);
              }(d = n.EncryptedPrivateKey.decode(d, "der"), e2);
            case "PRIVATE KEY":
              switch (r2 = (h2 = n.PrivateKey.decode(d, "der")).algorithm.algorithm.join(".")) {
                case "1.2.840.113549.1.1.1":
                  return n.RSAPrivateKey.decode(h2.subjectPrivateKey, "der");
                case "1.2.840.10045.2.1":
                  return { curve: h2.algorithm.curve, privateKey: n.ECPrivateKey.decode(h2.subjectPrivateKey, "der").privateKey };
                case "1.2.840.10040.4.1":
                  return h2.algorithm.params.priv_key = n.DSAparam.decode(h2.subjectPrivateKey, "der"), { type: "dsa", params: h2.algorithm.params };
                default:
                  throw new Error("unknown key id " + r2);
              }
            case "RSA PUBLIC KEY":
              return n.RSAPublicKey.decode(d, "der");
            case "RSA PRIVATE KEY":
              return n.RSAPrivateKey.decode(d, "der");
            case "DSA PRIVATE KEY":
              return { type: "dsa", params: n.DSAPrivateKey.decode(d, "der") };
            case "EC PRIVATE KEY":
              return { curve: (d = n.ECPrivateKey.decode(d, "der")).parameters.value, privateKey: d.privateKey };
            default:
              throw new Error("unknown key type " + c);
          }
        }
        h.signature = n.signature, t.exports = h;
      }, 8045: (t, e, r) => {
        e.pbkdf2 = r(293), e.pbkdf2Sync = r(4047);
      }, 293: (t, e, r) => {
        var n, i, o = r(6671).Buffer, a = r(8039), s = r(6552), f = r(4047), h = r(4427), u = r.g.crypto && r.g.crypto.subtle, c = { sha: "SHA-1", "sha-1": "SHA-1", sha1: "SHA-1", sha256: "SHA-256", "sha-256": "SHA-256", sha384: "SHA-384", "sha-384": "SHA-384", "sha-512": "SHA-512", sha512: "SHA-512" }, d = [];
        function l() {
          return i || (i = r.g.process && r.g.process.nextTick ? r.g.process.nextTick : r.g.queueMicrotask ? r.g.queueMicrotask : r.g.setImmediate ? r.g.setImmediate : r.g.setTimeout);
        }
        function p(t2, e2, r2, n2, i2) {
          return u.importKey("raw", t2, { name: "PBKDF2" }, false, ["deriveBits"]).then(function(t3) {
            return u.deriveBits({ name: "PBKDF2", salt: e2, iterations: r2, hash: { name: i2 } }, t3, n2 << 3);
          }).then(function(t3) {
            return o.from(t3);
          });
        }
        t.exports = function(t2, e2, i2, b, y, g) {
          "function" == typeof y && (g = y, y = void 0);
          var m = c[(y = y || "sha1").toLowerCase()];
          if (m && "function" == typeof r.g.Promise) {
            if (a(i2, b), t2 = h(t2, s, "Password"), e2 = h(e2, s, "Salt"), "function" != typeof g)
              throw new Error("No callback provided to pbkdf2");
            !function(t3, e3) {
              t3.then(function(t4) {
                l()(function() {
                  e3(null, t4);
                });
              }, function(t4) {
                l()(function() {
                  e3(t4);
                });
              });
            }(function(t3) {
              if (r.g.process && !r.g.process.browser)
                return Promise.resolve(false);
              if (!u || !u.importKey || !u.deriveBits)
                return Promise.resolve(false);
              if (void 0 !== d[t3])
                return d[t3];
              var e3 = p(n = n || o.alloc(8), n, 10, 128, t3).then(function() {
                return true;
              }).catch(function() {
                return false;
              });
              return d[t3] = e3, e3;
            }(m).then(function(r2) {
              return r2 ? p(t2, e2, i2, b, m) : f(t2, e2, i2, b, y);
            }), g);
          } else
            l()(function() {
              var r2;
              try {
                r2 = f(t2, e2, i2, b, y);
              } catch (t3) {
                return g(t3);
              }
              g(null, r2);
            });
        };
      }, 6552: (t, e, r) => {
        var n;
        n = r.g.process && r.g.process.browser ? "utf-8" : r.g.process && r.g.process.version ? parseInt(process.version.split(".")[0].slice(1), 10) >= 6 ? "utf-8" : "binary" : "utf-8", t.exports = n;
      }, 8039: (t) => {
        var e = Math.pow(2, 30) - 1;
        t.exports = function(t2, r) {
          if ("number" != typeof t2)
            throw new TypeError("Iterations not a number");
          if (t2 < 0)
            throw new TypeError("Bad iterations");
          if ("number" != typeof r)
            throw new TypeError("Key length not a number");
          if (r < 0 || r > e || r != r)
            throw new TypeError("Bad key length");
        };
      }, 4047: (t, e, r) => {
        var n = r(1868), i = r(1609), o = r(9273), a = r(6671).Buffer, s = r(8039), f = r(6552), h = r(4427), u = a.alloc(128), c = { md5: 16, sha1: 20, sha224: 28, sha256: 32, sha384: 48, sha512: 64, rmd160: 20, ripemd160: 20 };
        function d(t2, e2, r2) {
          var s2 = /* @__PURE__ */ function(t3) {
            return "rmd160" === t3 || "ripemd160" === t3 ? function(t4) {
              return new i().update(t4).digest();
            } : "md5" === t3 ? n : function(e3) {
              return o(t3).update(e3).digest();
            };
          }(t2), f2 = "sha512" === t2 || "sha384" === t2 ? 128 : 64;
          e2.length > f2 ? e2 = s2(e2) : e2.length < f2 && (e2 = a.concat([e2, u], f2));
          for (var h2 = a.allocUnsafe(f2 + c[t2]), d2 = a.allocUnsafe(f2 + c[t2]), l = 0; l < f2; l++)
            h2[l] = 54 ^ e2[l], d2[l] = 92 ^ e2[l];
          var p = a.allocUnsafe(f2 + r2 + 4);
          h2.copy(p, 0, 0, f2), this.ipad1 = p, this.ipad2 = h2, this.opad = d2, this.alg = t2, this.blocksize = f2, this.hash = s2, this.size = c[t2];
        }
        d.prototype.run = function(t2, e2) {
          return t2.copy(e2, this.blocksize), this.hash(e2).copy(this.opad, this.blocksize), this.hash(this.opad);
        }, t.exports = function(t2, e2, r2, n2, i2) {
          s(r2, n2);
          var o2 = new d(i2 = i2 || "sha1", t2 = h(t2, f, "Password"), (e2 = h(e2, f, "Salt")).length), u2 = a.allocUnsafe(n2), l = a.allocUnsafe(e2.length + 4);
          e2.copy(l, 0, 0, e2.length);
          for (var p = 0, b = c[i2], y = Math.ceil(n2 / b), g = 1; g <= y; g++) {
            l.writeUInt32BE(g, e2.length);
            for (var m = o2.run(l, o2.ipad1), v = m, w = 1; w < r2; w++) {
              v = o2.run(v, o2.ipad2);
              for (var _ = 0; _ < b; _++)
                m[_] ^= v[_];
            }
            m.copy(u2, p), p += b;
          }
          return u2;
        };
      }, 4427: (t, e, r) => {
        var n = r(6671).Buffer;
        t.exports = function(t2, e2, r2) {
          if (n.isBuffer(t2))
            return t2;
          if ("string" == typeof t2)
            return n.from(t2, e2);
          if (ArrayBuffer.isView(t2))
            return n.from(t2.buffer);
          throw new TypeError(r2 + " must be a string, a Buffer, a typed array or a DataView");
        };
      }, 2830: (t) => {
        "use strict";
        t.exports = ["Float32Array", "Float64Array", "Int8Array", "Int16Array", "Int32Array", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array"];
      }, 2316: (t) => {
        "use strict";
        "undefined" == typeof process || !process.version || 0 === process.version.indexOf("v0.") || 0 === process.version.indexOf("v1.") && 0 !== process.version.indexOf("v1.8.") ? t.exports = { nextTick: function(t2, e, r, n) {
          if ("function" != typeof t2)
            throw new TypeError('"callback" argument must be a function');
          var i, o, a = arguments.length;
          switch (a) {
            case 0:
            case 1:
              return process.nextTick(t2);
            case 2:
              return process.nextTick(function() {
                t2.call(null, e);
              });
            case 3:
              return process.nextTick(function() {
                t2.call(null, e, r);
              });
            case 4:
              return process.nextTick(function() {
                t2.call(null, e, r, n);
              });
            default:
              for (i = new Array(a - 1), o = 0; o < i.length; )
                i[o++] = arguments[o];
              return process.nextTick(function() {
                t2.apply(null, i);
              });
          }
        } } : t.exports = process;
      }, 8596: (t, e, r) => {
        e.publicEncrypt = r(4298), e.privateDecrypt = r(1942), e.privateEncrypt = function(t2, r2) {
          return e.publicEncrypt(t2, r2, true);
        }, e.publicDecrypt = function(t2, r2) {
          return e.privateDecrypt(t2, r2, true);
        };
      }, 1938: (t, e, r) => {
        var n = r(7824), i = r(6671).Buffer;
        function o(t2) {
          var e2 = i.allocUnsafe(4);
          return e2.writeUInt32BE(t2, 0), e2;
        }
        t.exports = function(t2, e2) {
          for (var r2, a = i.alloc(0), s = 0; a.length < e2; )
            r2 = o(s++), a = i.concat([a, n("sha1").update(t2).update(r2).digest()]);
          return a.slice(0, e2);
        };
      }, 1942: (t, e, r) => {
        var n = r(8396), i = r(1938), o = r(529), a = r(8724), s = r(4442), f = r(7824), h = r(7699), u = r(6671).Buffer;
        t.exports = function(t2, e2, r2) {
          var c;
          c = t2.padding ? t2.padding : r2 ? 1 : 4;
          var d, l = n(t2), p = l.modulus.byteLength();
          if (e2.length > p || new a(e2).cmp(l.modulus) >= 0)
            throw new Error("decryption error");
          d = r2 ? h(new a(e2), l) : s(e2, l);
          var b = u.alloc(p - d.length);
          if (d = u.concat([b, d], p), 4 === c)
            return function(t3, e3) {
              var r3 = t3.modulus.byteLength(), n2 = f("sha1").update(u.alloc(0)).digest(), a2 = n2.length;
              if (0 !== e3[0])
                throw new Error("decryption error");
              var s2 = e3.slice(1, a2 + 1), h2 = e3.slice(a2 + 1), c2 = o(s2, i(h2, a2)), d2 = o(h2, i(c2, r3 - a2 - 1));
              if (function(t4, e4) {
                t4 = u.from(t4), e4 = u.from(e4);
                var r4 = 0, n3 = t4.length;
                t4.length !== e4.length && (r4++, n3 = Math.min(t4.length, e4.length));
                for (var i2 = -1; ++i2 < n3; )
                  r4 += t4[i2] ^ e4[i2];
                return r4;
              }(n2, d2.slice(0, a2)))
                throw new Error("decryption error");
              for (var l2 = a2; 0 === d2[l2]; )
                l2++;
              if (1 !== d2[l2++])
                throw new Error("decryption error");
              return d2.slice(l2);
            }(l, d);
          if (1 === c)
            return function(t3, e3, r3) {
              for (var n2 = e3.slice(0, 2), i2 = 2, o2 = 0; 0 !== e3[i2++]; )
                if (i2 >= e3.length) {
                  o2++;
                  break;
                }
              var a2 = e3.slice(2, i2 - 1);
              if (("0002" !== n2.toString("hex") && !r3 || "0001" !== n2.toString("hex") && r3) && o2++, a2.length < 8 && o2++, o2)
                throw new Error("decryption error");
              return e3.slice(i2);
            }(0, d, r2);
          if (3 === c)
            return d;
          throw new Error("unknown padding");
        };
      }, 4298: (t, e, r) => {
        var n = r(8396), i = r(8030), o = r(7824), a = r(1938), s = r(529), f = r(8724), h = r(7699), u = r(4442), c = r(6671).Buffer;
        t.exports = function(t2, e2, r2) {
          var d;
          d = t2.padding ? t2.padding : r2 ? 1 : 4;
          var l, p = n(t2);
          if (4 === d)
            l = function(t3, e3) {
              var r3 = t3.modulus.byteLength(), n2 = e3.length, h2 = o("sha1").update(c.alloc(0)).digest(), u2 = h2.length, d2 = 2 * u2;
              if (n2 > r3 - d2 - 2)
                throw new Error("message too long");
              var l2 = c.alloc(r3 - n2 - d2 - 2), p2 = r3 - u2 - 1, b = i(u2), y = s(c.concat([h2, l2, c.alloc(1, 1), e3], p2), a(b, p2)), g = s(b, a(y, u2));
              return new f(c.concat([c.alloc(1), g, y], r3));
            }(p, e2);
          else if (1 === d)
            l = function(t3, e3, r3) {
              var n2, o2 = e3.length, a2 = t3.modulus.byteLength();
              if (o2 > a2 - 11)
                throw new Error("message too long");
              return n2 = r3 ? c.alloc(a2 - o2 - 3, 255) : function(t4) {
                for (var e4, r4 = c.allocUnsafe(t4), n3 = 0, o3 = i(2 * t4), a3 = 0; n3 < t4; )
                  a3 === o3.length && (o3 = i(2 * t4), a3 = 0), (e4 = o3[a3++]) && (r4[n3++] = e4);
                return r4;
              }(a2 - o2 - 3), new f(c.concat([c.from([0, r3 ? 1 : 2]), n2, c.alloc(1), e3], a2));
            }(p, e2, r2);
          else {
            if (3 !== d)
              throw new Error("unknown padding");
            if ((l = new f(e2)).cmp(p.modulus) >= 0)
              throw new Error("data too long for modulus");
          }
          return r2 ? u(l, p) : h(l, p);
        };
      }, 7699: (t, e, r) => {
        var n = r(8724), i = r(6671).Buffer;
        t.exports = function(t2, e2) {
          return i.from(t2.toRed(n.mont(e2.modulus)).redPow(new n(e2.publicExponent)).fromRed().toArray());
        };
      }, 529: (t) => {
        t.exports = function(t2, e) {
          for (var r = t2.length, n = -1; ++n < r; )
            t2[n] ^= e[n];
          return t2;
        };
      }, 8030: (t, e, r) => {
        "use strict";
        var n = 65536, i = r(6671).Buffer, o = r.g.crypto || r.g.msCrypto;
        o && o.getRandomValues ? t.exports = function(t2, e2) {
          if (t2 > 4294967295)
            throw new RangeError("requested too many random bytes");
          var r2 = i.allocUnsafe(t2);
          if (t2 > 0)
            if (t2 > n)
              for (var a = 0; a < t2; a += n)
                o.getRandomValues(r2.slice(a, a + n));
            else
              o.getRandomValues(r2);
          return "function" == typeof e2 ? process.nextTick(function() {
            e2(null, r2);
          }) : r2;
        } : t.exports = function() {
          throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11");
        };
      }, 4526: (t, e, r) => {
        "use strict";
        function n() {
          throw new Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11");
        }
        var i = r(6671), o = r(8030), a = i.Buffer, s = i.kMaxLength, f = r.g.crypto || r.g.msCrypto, h = Math.pow(2, 32) - 1;
        function u(t2, e2) {
          if ("number" != typeof t2 || t2 != t2)
            throw new TypeError("offset must be a number");
          if (t2 > h || t2 < 0)
            throw new TypeError("offset must be a uint32");
          if (t2 > s || t2 > e2)
            throw new RangeError("offset out of range");
        }
        function c(t2, e2, r2) {
          if ("number" != typeof t2 || t2 != t2)
            throw new TypeError("size must be a number");
          if (t2 > h || t2 < 0)
            throw new TypeError("size must be a uint32");
          if (t2 + e2 > r2 || t2 > s)
            throw new RangeError("buffer too small");
        }
        function d(t2, e2, r2, n2) {
          if (process.browser) {
            var i2 = t2.buffer, a2 = new Uint8Array(i2, e2, r2);
            return f.getRandomValues(a2), n2 ? void process.nextTick(function() {
              n2(null, t2);
            }) : t2;
          }
          if (!n2)
            return o(r2).copy(t2, e2), t2;
          o(r2, function(r3, i3) {
            if (r3)
              return n2(r3);
            i3.copy(t2, e2), n2(null, t2);
          });
        }
        f && f.getRandomValues || !process.browser ? (e.randomFill = function(t2, e2, n2, i2) {
          if (!(a.isBuffer(t2) || t2 instanceof r.g.Uint8Array))
            throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
          if ("function" == typeof e2)
            i2 = e2, e2 = 0, n2 = t2.length;
          else if ("function" == typeof n2)
            i2 = n2, n2 = t2.length - e2;
          else if ("function" != typeof i2)
            throw new TypeError('"cb" argument must be a function');
          return u(e2, t2.length), c(n2, e2, t2.length), d(t2, e2, n2, i2);
        }, e.randomFillSync = function(t2, e2, n2) {
          if (void 0 === e2 && (e2 = 0), !(a.isBuffer(t2) || t2 instanceof r.g.Uint8Array))
            throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
          return u(e2, t2.length), void 0 === n2 && (n2 = t2.length - e2), c(n2, e2, t2.length), d(t2, e2, n2);
        }) : (e.randomFill = n, e.randomFillSync = n);
      }, 5204: (t, e, r) => {
        "use strict";
        var n = r(2316), i = Object.keys || function(t2) {
          var e2 = [];
          for (var r2 in t2)
            e2.push(r2);
          return e2;
        };
        t.exports = c;
        var o = Object.create(r(3615));
        o.inherits = r(6192);
        var a = r(4618), s = r(3422);
        o.inherits(c, a);
        for (var f = i(s.prototype), h = 0; h < f.length; h++) {
          var u = f[h];
          c.prototype[u] || (c.prototype[u] = s.prototype[u]);
        }
        function c(t2) {
          if (!(this instanceof c))
            return new c(t2);
          a.call(this, t2), s.call(this, t2), t2 && false === t2.readable && (this.readable = false), t2 && false === t2.writable && (this.writable = false), this.allowHalfOpen = true, t2 && false === t2.allowHalfOpen && (this.allowHalfOpen = false), this.once("end", d);
        }
        function d() {
          this.allowHalfOpen || this._writableState.ended || n.nextTick(l, this);
        }
        function l(t2) {
          t2.end();
        }
        Object.defineProperty(c.prototype, "writableHighWaterMark", { enumerable: false, get: function() {
          return this._writableState.highWaterMark;
        } }), Object.defineProperty(c.prototype, "destroyed", { get: function() {
          return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed;
        }, set: function(t2) {
          void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = t2, this._writableState.destroyed = t2);
        } }), c.prototype._destroy = function(t2, e2) {
          this.push(null), this.end(), n.nextTick(e2, t2);
        };
      }, 8846: (t, e, r) => {
        "use strict";
        t.exports = o;
        var n = r(3796), i = Object.create(r(3615));
        function o(t2) {
          if (!(this instanceof o))
            return new o(t2);
          n.call(this, t2);
        }
        i.inherits = r(6192), i.inherits(o, n), o.prototype._transform = function(t2, e2, r2) {
          r2(null, t2);
        };
      }, 4618: (t, e, r) => {
        "use strict";
        var n = r(2316);
        t.exports = m;
        var i, o = r(934);
        m.ReadableState = g, r(9784).EventEmitter;
        var a = function(t2, e2) {
          return t2.listeners(e2).length;
        }, s = r(5699), f = r(2947).Buffer, h = (void 0 !== r.g ? r.g : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {
        }, u = Object.create(r(3615));
        u.inherits = r(6192);
        var c = r(124), d = void 0;
        d = c && c.debuglog ? c.debuglog("stream") : function() {
        };
        var l, p = r(1020), b = r(2090);
        u.inherits(m, s);
        var y = ["error", "close", "destroy", "pause", "resume"];
        function g(t2, e2) {
          t2 = t2 || {};
          var n2 = e2 instanceof (i = i || r(5204));
          this.objectMode = !!t2.objectMode, n2 && (this.objectMode = this.objectMode || !!t2.readableObjectMode);
          var o2 = t2.highWaterMark, a2 = t2.readableHighWaterMark, s2 = this.objectMode ? 16 : 16384;
          this.highWaterMark = o2 || 0 === o2 ? o2 : n2 && (a2 || 0 === a2) ? a2 : s2, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new p(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = false, this.endEmitted = false, this.reading = false, this.sync = true, this.needReadable = false, this.emittedReadable = false, this.readableListening = false, this.resumeScheduled = false, this.destroyed = false, this.defaultEncoding = t2.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = false, this.decoder = null, this.encoding = null, t2.encoding && (l || (l = r(5226).I), this.decoder = new l(t2.encoding), this.encoding = t2.encoding);
        }
        function m(t2) {
          if (i = i || r(5204), !(this instanceof m))
            return new m(t2);
          this._readableState = new g(t2, this), this.readable = true, t2 && ("function" == typeof t2.read && (this._read = t2.read), "function" == typeof t2.destroy && (this._destroy = t2.destroy)), s.call(this);
        }
        function v(t2, e2, r2, n2, i2) {
          var o2, a2 = t2._readableState;
          return null === e2 ? (a2.reading = false, function(t3, e3) {
            if (!e3.ended) {
              if (e3.decoder) {
                var r3 = e3.decoder.end();
                r3 && r3.length && (e3.buffer.push(r3), e3.length += e3.objectMode ? 1 : r3.length);
              }
              e3.ended = true, E(t3);
            }
          }(t2, a2)) : (i2 || (o2 = function(t3, e3) {
            var r3, n3;
            return n3 = e3, f.isBuffer(n3) || n3 instanceof h || "string" == typeof e3 || void 0 === e3 || t3.objectMode || (r3 = new TypeError("Invalid non-string/buffer chunk")), r3;
          }(a2, e2)), o2 ? t2.emit("error", o2) : a2.objectMode || e2 && e2.length > 0 ? ("string" == typeof e2 || a2.objectMode || Object.getPrototypeOf(e2) === f.prototype || (e2 = function(t3) {
            return f.from(t3);
          }(e2)), n2 ? a2.endEmitted ? t2.emit("error", new Error("stream.unshift() after end event")) : w(t2, a2, e2, true) : a2.ended ? t2.emit("error", new Error("stream.push() after EOF")) : (a2.reading = false, a2.decoder && !r2 ? (e2 = a2.decoder.write(e2), a2.objectMode || 0 !== e2.length ? w(t2, a2, e2, false) : A(t2, a2)) : w(t2, a2, e2, false))) : n2 || (a2.reading = false)), function(t3) {
            return !t3.ended && (t3.needReadable || t3.length < t3.highWaterMark || 0 === t3.length);
          }(a2);
        }
        function w(t2, e2, r2, n2) {
          e2.flowing && 0 === e2.length && !e2.sync ? (t2.emit("data", r2), t2.read(0)) : (e2.length += e2.objectMode ? 1 : r2.length, n2 ? e2.buffer.unshift(r2) : e2.buffer.push(r2), e2.needReadable && E(t2)), A(t2, e2);
        }
        Object.defineProperty(m.prototype, "destroyed", { get: function() {
          return void 0 !== this._readableState && this._readableState.destroyed;
        }, set: function(t2) {
          this._readableState && (this._readableState.destroyed = t2);
        } }), m.prototype.destroy = b.destroy, m.prototype._undestroy = b.undestroy, m.prototype._destroy = function(t2, e2) {
          this.push(null), e2(t2);
        }, m.prototype.push = function(t2, e2) {
          var r2, n2 = this._readableState;
          return n2.objectMode ? r2 = true : "string" == typeof t2 && ((e2 = e2 || n2.defaultEncoding) !== n2.encoding && (t2 = f.from(t2, e2), e2 = ""), r2 = true), v(this, t2, e2, false, r2);
        }, m.prototype.unshift = function(t2) {
          return v(this, t2, null, true, false);
        }, m.prototype.isPaused = function() {
          return false === this._readableState.flowing;
        }, m.prototype.setEncoding = function(t2) {
          return l || (l = r(5226).I), this._readableState.decoder = new l(t2), this._readableState.encoding = t2, this;
        };
        var _ = 8388608;
        function S(t2, e2) {
          return t2 <= 0 || 0 === e2.length && e2.ended ? 0 : e2.objectMode ? 1 : t2 != t2 ? e2.flowing && e2.length ? e2.buffer.head.data.length : e2.length : (t2 > e2.highWaterMark && (e2.highWaterMark = function(t3) {
            return t3 >= _ ? t3 = _ : (t3--, t3 |= t3 >>> 1, t3 |= t3 >>> 2, t3 |= t3 >>> 4, t3 |= t3 >>> 8, t3 |= t3 >>> 16, t3++), t3;
          }(t2)), t2 <= e2.length ? t2 : e2.ended ? e2.length : (e2.needReadable = true, 0));
        }
        function E(t2) {
          var e2 = t2._readableState;
          e2.needReadable = false, e2.emittedReadable || (d("emitReadable", e2.flowing), e2.emittedReadable = true, e2.sync ? n.nextTick(M, t2) : M(t2));
        }
        function M(t2) {
          d("emit readable"), t2.emit("readable"), x(t2);
        }
        function A(t2, e2) {
          e2.readingMore || (e2.readingMore = true, n.nextTick(k, t2, e2));
        }
        function k(t2, e2) {
          for (var r2 = e2.length; !e2.reading && !e2.flowing && !e2.ended && e2.length < e2.highWaterMark && (d("maybeReadMore read 0"), t2.read(0), r2 !== e2.length); )
            r2 = e2.length;
          e2.readingMore = false;
        }
        function B(t2) {
          d("readable nexttick read 0"), t2.read(0);
        }
        function O(t2, e2) {
          e2.reading || (d("resume read 0"), t2.read(0)), e2.resumeScheduled = false, e2.awaitDrain = 0, t2.emit("resume"), x(t2), e2.flowing && !e2.reading && t2.read(0);
        }
        function x(t2) {
          var e2 = t2._readableState;
          for (d("flow", e2.flowing); e2.flowing && null !== t2.read(); )
            ;
        }
        function I(t2, e2) {
          return 0 === e2.length ? null : (e2.objectMode ? r2 = e2.buffer.shift() : !t2 || t2 >= e2.length ? (r2 = e2.decoder ? e2.buffer.join("") : 1 === e2.buffer.length ? e2.buffer.head.data : e2.buffer.concat(e2.length), e2.buffer.clear()) : r2 = function(t3, e3, r3) {
            var n2;
            return t3 < e3.head.data.length ? (n2 = e3.head.data.slice(0, t3), e3.head.data = e3.head.data.slice(t3)) : n2 = t3 === e3.head.data.length ? e3.shift() : r3 ? function(t4, e4) {
              var r4 = e4.head, n3 = 1, i2 = r4.data;
              for (t4 -= i2.length; r4 = r4.next; ) {
                var o2 = r4.data, a2 = t4 > o2.length ? o2.length : t4;
                if (a2 === o2.length ? i2 += o2 : i2 += o2.slice(0, t4), 0 == (t4 -= a2)) {
                  a2 === o2.length ? (++n3, r4.next ? e4.head = r4.next : e4.head = e4.tail = null) : (e4.head = r4, r4.data = o2.slice(a2));
                  break;
                }
                ++n3;
              }
              return e4.length -= n3, i2;
            }(t3, e3) : function(t4, e4) {
              var r4 = f.allocUnsafe(t4), n3 = e4.head, i2 = 1;
              for (n3.data.copy(r4), t4 -= n3.data.length; n3 = n3.next; ) {
                var o2 = n3.data, a2 = t4 > o2.length ? o2.length : t4;
                if (o2.copy(r4, r4.length - t4, 0, a2), 0 == (t4 -= a2)) {
                  a2 === o2.length ? (++i2, n3.next ? e4.head = n3.next : e4.head = e4.tail = null) : (e4.head = n3, n3.data = o2.slice(a2));
                  break;
                }
                ++i2;
              }
              return e4.length -= i2, r4;
            }(t3, e3), n2;
          }(t2, e2.buffer, e2.decoder), r2);
          var r2;
        }
        function R(t2) {
          var e2 = t2._readableState;
          if (e2.length > 0)
            throw new Error('"endReadable()" called on non-empty stream');
          e2.endEmitted || (e2.ended = true, n.nextTick(T, e2, t2));
        }
        function T(t2, e2) {
          t2.endEmitted || 0 !== t2.length || (t2.endEmitted = true, e2.readable = false, e2.emit("end"));
        }
        function P(t2, e2) {
          for (var r2 = 0, n2 = t2.length; r2 < n2; r2++)
            if (t2[r2] === e2)
              return r2;
          return -1;
        }
        m.prototype.read = function(t2) {
          d("read", t2), t2 = parseInt(t2, 10);
          var e2 = this._readableState, r2 = t2;
          if (0 !== t2 && (e2.emittedReadable = false), 0 === t2 && e2.needReadable && (e2.length >= e2.highWaterMark || e2.ended))
            return d("read: emitReadable", e2.length, e2.ended), 0 === e2.length && e2.ended ? R(this) : E(this), null;
          if (0 === (t2 = S(t2, e2)) && e2.ended)
            return 0 === e2.length && R(this), null;
          var n2, i2 = e2.needReadable;
          return d("need readable", i2), (0 === e2.length || e2.length - t2 < e2.highWaterMark) && d("length less than watermark", i2 = true), e2.ended || e2.reading ? d("reading or ended", i2 = false) : i2 && (d("do read"), e2.reading = true, e2.sync = true, 0 === e2.length && (e2.needReadable = true), this._read(e2.highWaterMark), e2.sync = false, e2.reading || (t2 = S(r2, e2))), null === (n2 = t2 > 0 ? I(t2, e2) : null) ? (e2.needReadable = true, t2 = 0) : e2.length -= t2, 0 === e2.length && (e2.ended || (e2.needReadable = true), r2 !== t2 && e2.ended && R(this)), null !== n2 && this.emit("data", n2), n2;
        }, m.prototype._read = function(t2) {
          this.emit("error", new Error("_read() is not implemented"));
        }, m.prototype.pipe = function(t2, e2) {
          var r2 = this, i2 = this._readableState;
          switch (i2.pipesCount) {
            case 0:
              i2.pipes = t2;
              break;
            case 1:
              i2.pipes = [i2.pipes, t2];
              break;
            default:
              i2.pipes.push(t2);
          }
          i2.pipesCount += 1, d("pipe count=%d opts=%j", i2.pipesCount, e2);
          var s2 = e2 && false === e2.end || t2 === process.stdout || t2 === process.stderr ? g2 : f2;
          function f2() {
            d("onend"), t2.end();
          }
          i2.endEmitted ? n.nextTick(s2) : r2.once("end", s2), t2.on("unpipe", function e3(n2, o2) {
            d("onunpipe"), n2 === r2 && o2 && false === o2.hasUnpiped && (o2.hasUnpiped = true, d("cleanup"), t2.removeListener("close", b2), t2.removeListener("finish", y2), t2.removeListener("drain", h2), t2.removeListener("error", p2), t2.removeListener("unpipe", e3), r2.removeListener("end", f2), r2.removeListener("end", g2), r2.removeListener("data", l2), u2 = true, !i2.awaitDrain || t2._writableState && !t2._writableState.needDrain || h2());
          });
          var h2 = /* @__PURE__ */ function(t3) {
            return function() {
              var e3 = t3._readableState;
              d("pipeOnDrain", e3.awaitDrain), e3.awaitDrain && e3.awaitDrain--, 0 === e3.awaitDrain && a(t3, "data") && (e3.flowing = true, x(t3));
            };
          }(r2);
          t2.on("drain", h2);
          var u2 = false, c2 = false;
          function l2(e3) {
            d("ondata"), c2 = false, false !== t2.write(e3) || c2 || ((1 === i2.pipesCount && i2.pipes === t2 || i2.pipesCount > 1 && -1 !== P(i2.pipes, t2)) && !u2 && (d("false write response, pause", i2.awaitDrain), i2.awaitDrain++, c2 = true), r2.pause());
          }
          function p2(e3) {
            d("onerror", e3), g2(), t2.removeListener("error", p2), 0 === a(t2, "error") && t2.emit("error", e3);
          }
          function b2() {
            t2.removeListener("finish", y2), g2();
          }
          function y2() {
            d("onfinish"), t2.removeListener("close", b2), g2();
          }
          function g2() {
            d("unpipe"), r2.unpipe(t2);
          }
          return r2.on("data", l2), function(t3, e3, r3) {
            if ("function" == typeof t3.prependListener)
              return t3.prependListener(e3, r3);
            t3._events && t3._events[e3] ? o(t3._events[e3]) ? t3._events[e3].unshift(r3) : t3._events[e3] = [r3, t3._events[e3]] : t3.on(e3, r3);
          }(t2, "error", p2), t2.once("close", b2), t2.once("finish", y2), t2.emit("pipe", r2), i2.flowing || (d("pipe resume"), r2.resume()), t2;
        }, m.prototype.unpipe = function(t2) {
          var e2 = this._readableState, r2 = { hasUnpiped: false };
          if (0 === e2.pipesCount)
            return this;
          if (1 === e2.pipesCount)
            return t2 && t2 !== e2.pipes || (t2 || (t2 = e2.pipes), e2.pipes = null, e2.pipesCount = 0, e2.flowing = false, t2 && t2.emit("unpipe", this, r2)), this;
          if (!t2) {
            var n2 = e2.pipes, i2 = e2.pipesCount;
            e2.pipes = null, e2.pipesCount = 0, e2.flowing = false;
            for (var o2 = 0; o2 < i2; o2++)
              n2[o2].emit("unpipe", this, { hasUnpiped: false });
            return this;
          }
          var a2 = P(e2.pipes, t2);
          return -1 === a2 || (e2.pipes.splice(a2, 1), e2.pipesCount -= 1, 1 === e2.pipesCount && (e2.pipes = e2.pipes[0]), t2.emit("unpipe", this, r2)), this;
        }, m.prototype.on = function(t2, e2) {
          var r2 = s.prototype.on.call(this, t2, e2);
          if ("data" === t2)
            false !== this._readableState.flowing && this.resume();
          else if ("readable" === t2) {
            var i2 = this._readableState;
            i2.endEmitted || i2.readableListening || (i2.readableListening = i2.needReadable = true, i2.emittedReadable = false, i2.reading ? i2.length && E(this) : n.nextTick(B, this));
          }
          return r2;
        }, m.prototype.addListener = m.prototype.on, m.prototype.resume = function() {
          var t2 = this._readableState;
          return t2.flowing || (d("resume"), t2.flowing = true, function(t3, e2) {
            e2.resumeScheduled || (e2.resumeScheduled = true, n.nextTick(O, t3, e2));
          }(this, t2)), this;
        }, m.prototype.pause = function() {
          return d("call pause flowing=%j", this._readableState.flowing), false !== this._readableState.flowing && (d("pause"), this._readableState.flowing = false, this.emit("pause")), this;
        }, m.prototype.wrap = function(t2) {
          var e2 = this, r2 = this._readableState, n2 = false;
          for (var i2 in t2.on("end", function() {
            if (d("wrapped end"), r2.decoder && !r2.ended) {
              var t3 = r2.decoder.end();
              t3 && t3.length && e2.push(t3);
            }
            e2.push(null);
          }), t2.on("data", function(i3) {
            d("wrapped data"), r2.decoder && (i3 = r2.decoder.write(i3)), r2.objectMode && null == i3 || (r2.objectMode || i3 && i3.length) && (e2.push(i3) || (n2 = true, t2.pause()));
          }), t2)
            void 0 === this[i2] && "function" == typeof t2[i2] && (this[i2] = /* @__PURE__ */ function(e3) {
              return function() {
                return t2[e3].apply(t2, arguments);
              };
            }(i2));
          for (var o2 = 0; o2 < y.length; o2++)
            t2.on(y[o2], this.emit.bind(this, y[o2]));
          return this._read = function(e3) {
            d("wrapped _read", e3), n2 && (n2 = false, t2.resume());
          }, this;
        }, Object.defineProperty(m.prototype, "readableHighWaterMark", { enumerable: false, get: function() {
          return this._readableState.highWaterMark;
        } }), m._fromList = I;
      }, 3796: (t, e, r) => {
        "use strict";
        t.exports = a;
        var n = r(5204), i = Object.create(r(3615));
        function o(t2, e2) {
          var r2 = this._transformState;
          r2.transforming = false;
          var n2 = r2.writecb;
          if (!n2)
            return this.emit("error", new Error("write callback called multiple times"));
          r2.writechunk = null, r2.writecb = null, null != e2 && this.push(e2), n2(t2);
          var i2 = this._readableState;
          i2.reading = false, (i2.needReadable || i2.length < i2.highWaterMark) && this._read(i2.highWaterMark);
        }
        function a(t2) {
          if (!(this instanceof a))
            return new a(t2);
          n.call(this, t2), this._transformState = { afterTransform: o.bind(this), needTransform: false, transforming: false, writecb: null, writechunk: null, writeencoding: null }, this._readableState.needReadable = true, this._readableState.sync = false, t2 && ("function" == typeof t2.transform && (this._transform = t2.transform), "function" == typeof t2.flush && (this._flush = t2.flush)), this.on("prefinish", s);
        }
        function s() {
          var t2 = this;
          "function" == typeof this._flush ? this._flush(function(e2, r2) {
            f(t2, e2, r2);
          }) : f(this, null, null);
        }
        function f(t2, e2, r2) {
          if (e2)
            return t2.emit("error", e2);
          if (null != r2 && t2.push(r2), t2._writableState.length)
            throw new Error("Calling transform done when ws.length != 0");
          if (t2._transformState.transforming)
            throw new Error("Calling transform done when still transforming");
          return t2.push(null);
        }
        i.inherits = r(6192), i.inherits(a, n), a.prototype.push = function(t2, e2) {
          return this._transformState.needTransform = false, n.prototype.push.call(this, t2, e2);
        }, a.prototype._transform = function(t2, e2, r2) {
          throw new Error("_transform() is not implemented");
        }, a.prototype._write = function(t2, e2, r2) {
          var n2 = this._transformState;
          if (n2.writecb = r2, n2.writechunk = t2, n2.writeencoding = e2, !n2.transforming) {
            var i2 = this._readableState;
            (n2.needTransform || i2.needReadable || i2.length < i2.highWaterMark) && this._read(i2.highWaterMark);
          }
        }, a.prototype._read = function(t2) {
          var e2 = this._transformState;
          null !== e2.writechunk && e2.writecb && !e2.transforming ? (e2.transforming = true, this._transform(e2.writechunk, e2.writeencoding, e2.afterTransform)) : e2.needTransform = true;
        }, a.prototype._destroy = function(t2, e2) {
          var r2 = this;
          n.prototype._destroy.call(this, t2, function(t3) {
            e2(t3), r2.emit("close");
          });
        };
      }, 3422: (t, e, r) => {
        "use strict";
        var n = r(2316);
        function i(t2) {
          var e2 = this;
          this.next = null, this.entry = null, this.finish = function() {
            !function(t3, e3, r2) {
              var n2 = t3.entry;
              for (t3.entry = null; n2; ) {
                var i2 = n2.callback;
                e3.pendingcb--, i2(void 0), n2 = n2.next;
              }
              e3.corkedRequestsFree.next = t3;
            }(e2, t2);
          };
        }
        t.exports = y;
        var o, a = !process.browser && ["v0.10", "v0.9."].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : n.nextTick;
        y.WritableState = b;
        var s = Object.create(r(3615));
        s.inherits = r(6192);
        var f, h = { deprecate: r(1348) }, u = r(5699), c = r(2947).Buffer, d = (void 0 !== r.g ? r.g : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {
        }, l = r(2090);
        function p() {
        }
        function b(t2, e2) {
          o = o || r(5204), t2 = t2 || {};
          var s2 = e2 instanceof o;
          this.objectMode = !!t2.objectMode, s2 && (this.objectMode = this.objectMode || !!t2.writableObjectMode);
          var f2 = t2.highWaterMark, h2 = t2.writableHighWaterMark, u2 = this.objectMode ? 16 : 16384;
          this.highWaterMark = f2 || 0 === f2 ? f2 : s2 && (h2 || 0 === h2) ? h2 : u2, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = false, this.needDrain = false, this.ending = false, this.ended = false, this.finished = false, this.destroyed = false;
          var c2 = false === t2.decodeStrings;
          this.decodeStrings = !c2, this.defaultEncoding = t2.defaultEncoding || "utf8", this.length = 0, this.writing = false, this.corked = 0, this.sync = true, this.bufferProcessing = false, this.onwrite = function(t3) {
            !function(t4, e3) {
              var r2 = t4._writableState, i2 = r2.sync, o2 = r2.writecb;
              if (function(t5) {
                t5.writing = false, t5.writecb = null, t5.length -= t5.writelen, t5.writelen = 0;
              }(r2), e3)
                !function(t5, e4, r3, i3, o3) {
                  --e4.pendingcb, r3 ? (n.nextTick(o3, i3), n.nextTick(S, t5, e4), t5._writableState.errorEmitted = true, t5.emit("error", i3)) : (o3(i3), t5._writableState.errorEmitted = true, t5.emit("error", i3), S(t5, e4));
                }(t4, r2, i2, e3, o2);
              else {
                var s3 = w(r2);
                s3 || r2.corked || r2.bufferProcessing || !r2.bufferedRequest || v(t4, r2), i2 ? a(m, t4, r2, s3, o2) : m(t4, r2, s3, o2);
              }
            }(e2, t3);
          }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = false, this.errorEmitted = false, this.bufferedRequestCount = 0, this.corkedRequestsFree = new i(this);
        }
        function y(t2) {
          if (o = o || r(5204), !(f.call(y, this) || this instanceof o))
            return new y(t2);
          this._writableState = new b(t2, this), this.writable = true, t2 && ("function" == typeof t2.write && (this._write = t2.write), "function" == typeof t2.writev && (this._writev = t2.writev), "function" == typeof t2.destroy && (this._destroy = t2.destroy), "function" == typeof t2.final && (this._final = t2.final)), u.call(this);
        }
        function g(t2, e2, r2, n2, i2, o2, a2) {
          e2.writelen = n2, e2.writecb = a2, e2.writing = true, e2.sync = true, r2 ? t2._writev(i2, e2.onwrite) : t2._write(i2, o2, e2.onwrite), e2.sync = false;
        }
        function m(t2, e2, r2, n2) {
          r2 || function(t3, e3) {
            0 === e3.length && e3.needDrain && (e3.needDrain = false, t3.emit("drain"));
          }(t2, e2), e2.pendingcb--, n2(), S(t2, e2);
        }
        function v(t2, e2) {
          e2.bufferProcessing = true;
          var r2 = e2.bufferedRequest;
          if (t2._writev && r2 && r2.next) {
            var n2 = e2.bufferedRequestCount, o2 = new Array(n2), a2 = e2.corkedRequestsFree;
            a2.entry = r2;
            for (var s2 = 0, f2 = true; r2; )
              o2[s2] = r2, r2.isBuf || (f2 = false), r2 = r2.next, s2 += 1;
            o2.allBuffers = f2, g(t2, e2, true, e2.length, o2, "", a2.finish), e2.pendingcb++, e2.lastBufferedRequest = null, a2.next ? (e2.corkedRequestsFree = a2.next, a2.next = null) : e2.corkedRequestsFree = new i(e2), e2.bufferedRequestCount = 0;
          } else {
            for (; r2; ) {
              var h2 = r2.chunk, u2 = r2.encoding, c2 = r2.callback;
              if (g(t2, e2, false, e2.objectMode ? 1 : h2.length, h2, u2, c2), r2 = r2.next, e2.bufferedRequestCount--, e2.writing)
                break;
            }
            null === r2 && (e2.lastBufferedRequest = null);
          }
          e2.bufferedRequest = r2, e2.bufferProcessing = false;
        }
        function w(t2) {
          return t2.ending && 0 === t2.length && null === t2.bufferedRequest && !t2.finished && !t2.writing;
        }
        function _(t2, e2) {
          t2._final(function(r2) {
            e2.pendingcb--, r2 && t2.emit("error", r2), e2.prefinished = true, t2.emit("prefinish"), S(t2, e2);
          });
        }
        function S(t2, e2) {
          var r2 = w(e2);
          return r2 && (function(t3, e3) {
            e3.prefinished || e3.finalCalled || ("function" == typeof t3._final ? (e3.pendingcb++, e3.finalCalled = true, n.nextTick(_, t3, e3)) : (e3.prefinished = true, t3.emit("prefinish")));
          }(t2, e2), 0 === e2.pendingcb && (e2.finished = true, t2.emit("finish"))), r2;
        }
        s.inherits(y, u), b.prototype.getBuffer = function() {
          for (var t2 = this.bufferedRequest, e2 = []; t2; )
            e2.push(t2), t2 = t2.next;
          return e2;
        }, function() {
          try {
            Object.defineProperty(b.prototype, "buffer", { get: h.deprecate(function() {
              return this.getBuffer();
            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003") });
          } catch (t2) {
          }
        }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (f = Function.prototype[Symbol.hasInstance], Object.defineProperty(y, Symbol.hasInstance, { value: function(t2) {
          return !!f.call(this, t2) || this === y && t2 && t2._writableState instanceof b;
        } })) : f = function(t2) {
          return t2 instanceof this;
        }, y.prototype.pipe = function() {
          this.emit("error", new Error("Cannot pipe, not readable"));
        }, y.prototype.write = function(t2, e2, r2) {
          var i2, o2 = this._writableState, a2 = false, s2 = !o2.objectMode && (i2 = t2, c.isBuffer(i2) || i2 instanceof d);
          return s2 && !c.isBuffer(t2) && (t2 = function(t3) {
            return c.from(t3);
          }(t2)), "function" == typeof e2 && (r2 = e2, e2 = null), s2 ? e2 = "buffer" : e2 || (e2 = o2.defaultEncoding), "function" != typeof r2 && (r2 = p), o2.ended ? function(t3, e3) {
            var r3 = new Error("write after end");
            t3.emit("error", r3), n.nextTick(e3, r3);
          }(this, r2) : (s2 || function(t3, e3, r3, i3) {
            var o3 = true, a3 = false;
            return null === r3 ? a3 = new TypeError("May not write null values to stream") : "string" == typeof r3 || void 0 === r3 || e3.objectMode || (a3 = new TypeError("Invalid non-string/buffer chunk")), a3 && (t3.emit("error", a3), n.nextTick(i3, a3), o3 = false), o3;
          }(this, o2, t2, r2)) && (o2.pendingcb++, a2 = function(t3, e3, r3, n2, i3, o3) {
            if (!r3) {
              var a3 = function(t4, e4, r4) {
                return t4.objectMode || false === t4.decodeStrings || "string" != typeof e4 || (e4 = c.from(e4, r4)), e4;
              }(e3, n2, i3);
              n2 !== a3 && (r3 = true, i3 = "buffer", n2 = a3);
            }
            var s3 = e3.objectMode ? 1 : n2.length;
            e3.length += s3;
            var f2 = e3.length < e3.highWaterMark;
            if (f2 || (e3.needDrain = true), e3.writing || e3.corked) {
              var h2 = e3.lastBufferedRequest;
              e3.lastBufferedRequest = { chunk: n2, encoding: i3, isBuf: r3, callback: o3, next: null }, h2 ? h2.next = e3.lastBufferedRequest : e3.bufferedRequest = e3.lastBufferedRequest, e3.bufferedRequestCount += 1;
            } else
              g(t3, e3, false, s3, n2, i3, o3);
            return f2;
          }(this, o2, s2, t2, e2, r2)), a2;
        }, y.prototype.cork = function() {
          this._writableState.corked++;
        }, y.prototype.uncork = function() {
          var t2 = this._writableState;
          t2.corked && (t2.corked--, t2.writing || t2.corked || t2.bufferProcessing || !t2.bufferedRequest || v(this, t2));
        }, y.prototype.setDefaultEncoding = function(t2) {
          if ("string" == typeof t2 && (t2 = t2.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t2 + "").toLowerCase()) > -1))
            throw new TypeError("Unknown encoding: " + t2);
          return this._writableState.defaultEncoding = t2, this;
        }, Object.defineProperty(y.prototype, "writableHighWaterMark", { enumerable: false, get: function() {
          return this._writableState.highWaterMark;
        } }), y.prototype._write = function(t2, e2, r2) {
          r2(new Error("_write() is not implemented"));
        }, y.prototype._writev = null, y.prototype.end = function(t2, e2, r2) {
          var i2 = this._writableState;
          "function" == typeof t2 ? (r2 = t2, t2 = null, e2 = null) : "function" == typeof e2 && (r2 = e2, e2 = null), null != t2 && this.write(t2, e2), i2.corked && (i2.corked = 1, this.uncork()), i2.ending || function(t3, e3, r3) {
            e3.ending = true, S(t3, e3), r3 && (e3.finished ? n.nextTick(r3) : t3.once("finish", r3)), e3.ended = true, t3.writable = false;
          }(this, i2, r2);
        }, Object.defineProperty(y.prototype, "destroyed", { get: function() {
          return void 0 !== this._writableState && this._writableState.destroyed;
        }, set: function(t2) {
          this._writableState && (this._writableState.destroyed = t2);
        } }), y.prototype.destroy = l.destroy, y.prototype._undestroy = l.undestroy, y.prototype._destroy = function(t2, e2) {
          this.end(), e2(t2);
        };
      }, 1020: (t, e, r) => {
        "use strict";
        var n = r(2947).Buffer, i = r(9926);
        t.exports = function() {
          function t2() {
            !function(t3, e2) {
              if (!(t3 instanceof e2))
                throw new TypeError("Cannot call a class as a function");
            }(this, t2), this.head = null, this.tail = null, this.length = 0;
          }
          return t2.prototype.push = function(t3) {
            var e2 = { data: t3, next: null };
            this.length > 0 ? this.tail.next = e2 : this.head = e2, this.tail = e2, ++this.length;
          }, t2.prototype.unshift = function(t3) {
            var e2 = { data: t3, next: this.head };
            0 === this.length && (this.tail = e2), this.head = e2, ++this.length;
          }, t2.prototype.shift = function() {
            if (0 !== this.length) {
              var t3 = this.head.data;
              return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, t3;
            }
          }, t2.prototype.clear = function() {
            this.head = this.tail = null, this.length = 0;
          }, t2.prototype.join = function(t3) {
            if (0 === this.length)
              return "";
            for (var e2 = this.head, r2 = "" + e2.data; e2 = e2.next; )
              r2 += t3 + e2.data;
            return r2;
          }, t2.prototype.concat = function(t3) {
            if (0 === this.length)
              return n.alloc(0);
            for (var e2, r2, i2 = n.allocUnsafe(t3 >>> 0), o = this.head, a = 0; o; )
              e2 = i2, r2 = a, o.data.copy(e2, r2), a += o.data.length, o = o.next;
            return i2;
          }, t2;
        }(), i && i.inspect && i.inspect.custom && (t.exports.prototype[i.inspect.custom] = function() {
          var t2 = i.inspect({ length: this.length });
          return this.constructor.name + " " + t2;
        });
      }, 2090: (t, e, r) => {
        "use strict";
        var n = r(2316);
        function i(t2, e2) {
          t2.emit("error", e2);
        }
        t.exports = { destroy: function(t2, e2) {
          var r2 = this, o = this._readableState && this._readableState.destroyed, a = this._writableState && this._writableState.destroyed;
          return o || a ? (e2 ? e2(t2) : t2 && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = true, n.nextTick(i, this, t2)) : n.nextTick(i, this, t2)), this) : (this._readableState && (this._readableState.destroyed = true), this._writableState && (this._writableState.destroyed = true), this._destroy(t2 || null, function(t3) {
            !e2 && t3 ? r2._writableState ? r2._writableState.errorEmitted || (r2._writableState.errorEmitted = true, n.nextTick(i, r2, t3)) : n.nextTick(i, r2, t3) : e2 && e2(t3);
          }), this);
        }, undestroy: function() {
          this._readableState && (this._readableState.destroyed = false, this._readableState.reading = false, this._readableState.ended = false, this._readableState.endEmitted = false), this._writableState && (this._writableState.destroyed = false, this._writableState.ended = false, this._writableState.ending = false, this._writableState.finalCalled = false, this._writableState.prefinished = false, this._writableState.finished = false, this._writableState.errorEmitted = false);
        } };
      }, 5699: (t, e, r) => {
        t.exports = r(9784).EventEmitter;
      }, 2613: (t, e, r) => {
        (e = t.exports = r(4618)).Stream = e, e.Readable = e, e.Writable = r(3422), e.Duplex = r(5204), e.Transform = r(3796), e.PassThrough = r(8846);
      }, 8704: (t) => {
        "use strict";
        var e = {};
        function r(t2, r2, n2) {
          n2 || (n2 = Error);
          var i = function(t3) {
            var e2, n3;
            function i2(e3, n4, i3) {
              return t3.call(this, function(t4, e4, n5) {
                return "string" == typeof r2 ? r2 : r2(t4, e4, n5);
              }(e3, n4, i3)) || this;
            }
            return n3 = t3, (e2 = i2).prototype = Object.create(n3.prototype), e2.prototype.constructor = e2, e2.__proto__ = n3, i2;
          }(n2);
          i.prototype.name = n2.name, i.prototype.code = t2, e[t2] = i;
        }
        function n(t2, e2) {
          if (Array.isArray(t2)) {
            var r2 = t2.length;
            return t2 = t2.map(function(t3) {
              return String(t3);
            }), r2 > 2 ? "one of ".concat(e2, " ").concat(t2.slice(0, r2 - 1).join(", "), ", or ") + t2[r2 - 1] : 2 === r2 ? "one of ".concat(e2, " ").concat(t2[0], " or ").concat(t2[1]) : "of ".concat(e2, " ").concat(t2[0]);
          }
          return "of ".concat(e2, " ").concat(String(t2));
        }
        r("ERR_INVALID_OPT_VALUE", function(t2, e2) {
          return 'The value "' + e2 + '" is invalid for option "' + t2 + '"';
        }, TypeError), r("ERR_INVALID_ARG_TYPE", function(t2, e2, r2) {
          var i, o, a, s, f;
          if ("string" == typeof e2 && (o = "not ", e2.substr(0, 4) === o) ? (i = "must not be", e2 = e2.replace(/^not /, "")) : i = "must be", function(t3, e3, r3) {
            return (void 0 === r3 || r3 > t3.length) && (r3 = t3.length), t3.substring(r3 - 9, r3) === e3;
          }(t2, " argument"))
            a = "The ".concat(t2, " ").concat(i, " ").concat(n(e2, "type"));
          else {
            var h = ("number" != typeof f && (f = 0), f + 1 > (s = t2).length || -1 === s.indexOf(".", f) ? "argument" : "property");
            a = 'The "'.concat(t2, '" ').concat(h, " ").concat(i, " ").concat(n(e2, "type"));
          }
          return a + ". Received type ".concat(typeof r2);
        }, TypeError), r("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), r("ERR_METHOD_NOT_IMPLEMENTED", function(t2) {
          return "The " + t2 + " method is not implemented";
        }), r("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), r("ERR_STREAM_DESTROYED", function(t2) {
          return "Cannot call " + t2 + " after a stream was destroyed";
        }), r("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), r("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), r("ERR_STREAM_WRITE_AFTER_END", "write after end"), r("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), r("ERR_UNKNOWN_ENCODING", function(t2) {
          return "Unknown encoding: " + t2;
        }, TypeError), r("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), t.exports.F = e;
      }, 5606: (t, e, r) => {
        "use strict";
        var n = Object.keys || function(t2) {
          var e2 = [];
          for (var r2 in t2)
            e2.push(r2);
          return e2;
        };
        t.exports = h;
        var i = r(4324), o = r(6868);
        r(6192)(h, i);
        for (var a = n(o.prototype), s = 0; s < a.length; s++) {
          var f = a[s];
          h.prototype[f] || (h.prototype[f] = o.prototype[f]);
        }
        function h(t2) {
          if (!(this instanceof h))
            return new h(t2);
          i.call(this, t2), o.call(this, t2), this.allowHalfOpen = true, t2 && (false === t2.readable && (this.readable = false), false === t2.writable && (this.writable = false), false === t2.allowHalfOpen && (this.allowHalfOpen = false, this.once("end", u)));
        }
        function u() {
          this._writableState.ended || process.nextTick(c, this);
        }
        function c(t2) {
          t2.end();
        }
        Object.defineProperty(h.prototype, "writableHighWaterMark", { enumerable: false, get: function() {
          return this._writableState.highWaterMark;
        } }), Object.defineProperty(h.prototype, "writableBuffer", { enumerable: false, get: function() {
          return this._writableState && this._writableState.getBuffer();
        } }), Object.defineProperty(h.prototype, "writableLength", { enumerable: false, get: function() {
          return this._writableState.length;
        } }), Object.defineProperty(h.prototype, "destroyed", { enumerable: false, get: function() {
          return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed;
        }, set: function(t2) {
          void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = t2, this._writableState.destroyed = t2);
        } });
      }, 9648: (t, e, r) => {
        "use strict";
        t.exports = i;
        var n = r(4914);
        function i(t2) {
          if (!(this instanceof i))
            return new i(t2);
          n.call(this, t2);
        }
        r(6192)(i, n), i.prototype._transform = function(t2, e2, r2) {
          r2(null, t2);
        };
      }, 4324: (t, e, r) => {
        "use strict";
        var n;
        t.exports = M, M.ReadableState = E, r(9784).EventEmitter;
        var i, o = function(t2, e2) {
          return t2.listeners(e2).length;
        }, a = r(9481), s = r(4686).Buffer, f = (void 0 !== r.g ? r.g : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {
        }, h = r(8854);
        i = h && h.debuglog ? h.debuglog("stream") : function() {
        };
        var u, c, d, l = r(9865), p = r(4552), b = r(7963).getHighWaterMark, y = r(8704).F, g = y.ERR_INVALID_ARG_TYPE, m = y.ERR_STREAM_PUSH_AFTER_EOF, v = y.ERR_METHOD_NOT_IMPLEMENTED, w = y.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
        r(6192)(M, a);
        var _ = p.errorOrDestroy, S = ["error", "close", "destroy", "pause", "resume"];
        function E(t2, e2, i2) {
          n = n || r(5606), t2 = t2 || {}, "boolean" != typeof i2 && (i2 = e2 instanceof n), this.objectMode = !!t2.objectMode, i2 && (this.objectMode = this.objectMode || !!t2.readableObjectMode), this.highWaterMark = b(this, t2, "readableHighWaterMark", i2), this.buffer = new l(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = false, this.endEmitted = false, this.reading = false, this.sync = true, this.needReadable = false, this.emittedReadable = false, this.readableListening = false, this.resumeScheduled = false, this.paused = true, this.emitClose = false !== t2.emitClose, this.autoDestroy = !!t2.autoDestroy, this.destroyed = false, this.defaultEncoding = t2.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = false, this.decoder = null, this.encoding = null, t2.encoding && (u || (u = r(4105).I), this.decoder = new u(t2.encoding), this.encoding = t2.encoding);
        }
        function M(t2) {
          if (n = n || r(5606), !(this instanceof M))
            return new M(t2);
          var e2 = this instanceof n;
          this._readableState = new E(t2, this, e2), this.readable = true, t2 && ("function" == typeof t2.read && (this._read = t2.read), "function" == typeof t2.destroy && (this._destroy = t2.destroy)), a.call(this);
        }
        function A(t2, e2, r2, n2, o2) {
          i("readableAddChunk", e2);
          var a2, h2 = t2._readableState;
          if (null === e2)
            h2.reading = false, function(t3, e3) {
              if (i("onEofChunk"), !e3.ended) {
                if (e3.decoder) {
                  var r3 = e3.decoder.end();
                  r3 && r3.length && (e3.buffer.push(r3), e3.length += e3.objectMode ? 1 : r3.length);
                }
                e3.ended = true, e3.sync ? x(t3) : (e3.needReadable = false, e3.emittedReadable || (e3.emittedReadable = true, I(t3)));
              }
            }(t2, h2);
          else if (o2 || (a2 = function(t3, e3) {
            var r3, n3;
            return n3 = e3, s.isBuffer(n3) || n3 instanceof f || "string" == typeof e3 || void 0 === e3 || t3.objectMode || (r3 = new g("chunk", ["string", "Buffer", "Uint8Array"], e3)), r3;
          }(h2, e2)), a2)
            _(t2, a2);
          else if (h2.objectMode || e2 && e2.length > 0)
            if ("string" == typeof e2 || h2.objectMode || Object.getPrototypeOf(e2) === s.prototype || (e2 = function(t3) {
              return s.from(t3);
            }(e2)), n2)
              h2.endEmitted ? _(t2, new w()) : k(t2, h2, e2, true);
            else if (h2.ended)
              _(t2, new m());
            else {
              if (h2.destroyed)
                return false;
              h2.reading = false, h2.decoder && !r2 ? (e2 = h2.decoder.write(e2), h2.objectMode || 0 !== e2.length ? k(t2, h2, e2, false) : R(t2, h2)) : k(t2, h2, e2, false);
            }
          else
            n2 || (h2.reading = false, R(t2, h2));
          return !h2.ended && (h2.length < h2.highWaterMark || 0 === h2.length);
        }
        function k(t2, e2, r2, n2) {
          e2.flowing && 0 === e2.length && !e2.sync ? (e2.awaitDrain = 0, t2.emit("data", r2)) : (e2.length += e2.objectMode ? 1 : r2.length, n2 ? e2.buffer.unshift(r2) : e2.buffer.push(r2), e2.needReadable && x(t2)), R(t2, e2);
        }
        Object.defineProperty(M.prototype, "destroyed", { enumerable: false, get: function() {
          return void 0 !== this._readableState && this._readableState.destroyed;
        }, set: function(t2) {
          this._readableState && (this._readableState.destroyed = t2);
        } }), M.prototype.destroy = p.destroy, M.prototype._undestroy = p.undestroy, M.prototype._destroy = function(t2, e2) {
          e2(t2);
        }, M.prototype.push = function(t2, e2) {
          var r2, n2 = this._readableState;
          return n2.objectMode ? r2 = true : "string" == typeof t2 && ((e2 = e2 || n2.defaultEncoding) !== n2.encoding && (t2 = s.from(t2, e2), e2 = ""), r2 = true), A(this, t2, e2, false, r2);
        }, M.prototype.unshift = function(t2) {
          return A(this, t2, null, true, false);
        }, M.prototype.isPaused = function() {
          return false === this._readableState.flowing;
        }, M.prototype.setEncoding = function(t2) {
          u || (u = r(4105).I);
          var e2 = new u(t2);
          this._readableState.decoder = e2, this._readableState.encoding = this._readableState.decoder.encoding;
          for (var n2 = this._readableState.buffer.head, i2 = ""; null !== n2; )
            i2 += e2.write(n2.data), n2 = n2.next;
          return this._readableState.buffer.clear(), "" !== i2 && this._readableState.buffer.push(i2), this._readableState.length = i2.length, this;
        };
        var B = 1073741824;
        function O(t2, e2) {
          return t2 <= 0 || 0 === e2.length && e2.ended ? 0 : e2.objectMode ? 1 : t2 != t2 ? e2.flowing && e2.length ? e2.buffer.head.data.length : e2.length : (t2 > e2.highWaterMark && (e2.highWaterMark = function(t3) {
            return t3 >= B ? t3 = B : (t3--, t3 |= t3 >>> 1, t3 |= t3 >>> 2, t3 |= t3 >>> 4, t3 |= t3 >>> 8, t3 |= t3 >>> 16, t3++), t3;
          }(t2)), t2 <= e2.length ? t2 : e2.ended ? e2.length : (e2.needReadable = true, 0));
        }
        function x(t2) {
          var e2 = t2._readableState;
          i("emitReadable", e2.needReadable, e2.emittedReadable), e2.needReadable = false, e2.emittedReadable || (i("emitReadable", e2.flowing), e2.emittedReadable = true, process.nextTick(I, t2));
        }
        function I(t2) {
          var e2 = t2._readableState;
          i("emitReadable_", e2.destroyed, e2.length, e2.ended), e2.destroyed || !e2.length && !e2.ended || (t2.emit("readable"), e2.emittedReadable = false), e2.needReadable = !e2.flowing && !e2.ended && e2.length <= e2.highWaterMark, D(t2);
        }
        function R(t2, e2) {
          e2.readingMore || (e2.readingMore = true, process.nextTick(T, t2, e2));
        }
        function T(t2, e2) {
          for (; !e2.reading && !e2.ended && (e2.length < e2.highWaterMark || e2.flowing && 0 === e2.length); ) {
            var r2 = e2.length;
            if (i("maybeReadMore read 0"), t2.read(0), r2 === e2.length)
              break;
          }
          e2.readingMore = false;
        }
        function P(t2) {
          var e2 = t2._readableState;
          e2.readableListening = t2.listenerCount("readable") > 0, e2.resumeScheduled && !e2.paused ? e2.flowing = true : t2.listenerCount("data") > 0 && t2.resume();
        }
        function N(t2) {
          i("readable nexttick read 0"), t2.read(0);
        }
        function j(t2, e2) {
          i("resume", e2.reading), e2.reading || t2.read(0), e2.resumeScheduled = false, t2.emit("resume"), D(t2), e2.flowing && !e2.reading && t2.read(0);
        }
        function D(t2) {
          var e2 = t2._readableState;
          for (i("flow", e2.flowing); e2.flowing && null !== t2.read(); )
            ;
        }
        function L(t2, e2) {
          return 0 === e2.length ? null : (e2.objectMode ? r2 = e2.buffer.shift() : !t2 || t2 >= e2.length ? (r2 = e2.decoder ? e2.buffer.join("") : 1 === e2.buffer.length ? e2.buffer.first() : e2.buffer.concat(e2.length), e2.buffer.clear()) : r2 = e2.buffer.consume(t2, e2.decoder), r2);
          var r2;
        }
        function C(t2) {
          var e2 = t2._readableState;
          i("endReadable", e2.endEmitted), e2.endEmitted || (e2.ended = true, process.nextTick(U, e2, t2));
        }
        function U(t2, e2) {
          if (i("endReadableNT", t2.endEmitted, t2.length), !t2.endEmitted && 0 === t2.length && (t2.endEmitted = true, e2.readable = false, e2.emit("end"), t2.autoDestroy)) {
            var r2 = e2._writableState;
            (!r2 || r2.autoDestroy && r2.finished) && e2.destroy();
          }
        }
        function q(t2, e2) {
          for (var r2 = 0, n2 = t2.length; r2 < n2; r2++)
            if (t2[r2] === e2)
              return r2;
          return -1;
        }
        M.prototype.read = function(t2) {
          i("read", t2), t2 = parseInt(t2, 10);
          var e2 = this._readableState, r2 = t2;
          if (0 !== t2 && (e2.emittedReadable = false), 0 === t2 && e2.needReadable && ((0 !== e2.highWaterMark ? e2.length >= e2.highWaterMark : e2.length > 0) || e2.ended))
            return i("read: emitReadable", e2.length, e2.ended), 0 === e2.length && e2.ended ? C(this) : x(this), null;
          if (0 === (t2 = O(t2, e2)) && e2.ended)
            return 0 === e2.length && C(this), null;
          var n2, o2 = e2.needReadable;
          return i("need readable", o2), (0 === e2.length || e2.length - t2 < e2.highWaterMark) && i("length less than watermark", o2 = true), e2.ended || e2.reading ? i("reading or ended", o2 = false) : o2 && (i("do read"), e2.reading = true, e2.sync = true, 0 === e2.length && (e2.needReadable = true), this._read(e2.highWaterMark), e2.sync = false, e2.reading || (t2 = O(r2, e2))), null === (n2 = t2 > 0 ? L(t2, e2) : null) ? (e2.needReadable = e2.length <= e2.highWaterMark, t2 = 0) : (e2.length -= t2, e2.awaitDrain = 0), 0 === e2.length && (e2.ended || (e2.needReadable = true), r2 !== t2 && e2.ended && C(this)), null !== n2 && this.emit("data", n2), n2;
        }, M.prototype._read = function(t2) {
          _(this, new v("_read()"));
        }, M.prototype.pipe = function(t2, e2) {
          var r2 = this, n2 = this._readableState;
          switch (n2.pipesCount) {
            case 0:
              n2.pipes = t2;
              break;
            case 1:
              n2.pipes = [n2.pipes, t2];
              break;
            default:
              n2.pipes.push(t2);
          }
          n2.pipesCount += 1, i("pipe count=%d opts=%j", n2.pipesCount, e2);
          var a2 = e2 && false === e2.end || t2 === process.stdout || t2 === process.stderr ? p2 : s2;
          function s2() {
            i("onend"), t2.end();
          }
          n2.endEmitted ? process.nextTick(a2) : r2.once("end", a2), t2.on("unpipe", function e3(o2, a3) {
            i("onunpipe"), o2 === r2 && a3 && false === a3.hasUnpiped && (a3.hasUnpiped = true, i("cleanup"), t2.removeListener("close", d2), t2.removeListener("finish", l2), t2.removeListener("drain", f2), t2.removeListener("error", c2), t2.removeListener("unpipe", e3), r2.removeListener("end", s2), r2.removeListener("end", p2), r2.removeListener("data", u2), h2 = true, !n2.awaitDrain || t2._writableState && !t2._writableState.needDrain || f2());
          });
          var f2 = /* @__PURE__ */ function(t3) {
            return function() {
              var e3 = t3._readableState;
              i("pipeOnDrain", e3.awaitDrain), e3.awaitDrain && e3.awaitDrain--, 0 === e3.awaitDrain && o(t3, "data") && (e3.flowing = true, D(t3));
            };
          }(r2);
          t2.on("drain", f2);
          var h2 = false;
          function u2(e3) {
            i("ondata");
            var o2 = t2.write(e3);
            i("dest.write", o2), false === o2 && ((1 === n2.pipesCount && n2.pipes === t2 || n2.pipesCount > 1 && -1 !== q(n2.pipes, t2)) && !h2 && (i("false write response, pause", n2.awaitDrain), n2.awaitDrain++), r2.pause());
          }
          function c2(e3) {
            i("onerror", e3), p2(), t2.removeListener("error", c2), 0 === o(t2, "error") && _(t2, e3);
          }
          function d2() {
            t2.removeListener("finish", l2), p2();
          }
          function l2() {
            i("onfinish"), t2.removeListener("close", d2), p2();
          }
          function p2() {
            i("unpipe"), r2.unpipe(t2);
          }
          return r2.on("data", u2), function(t3, e3, r3) {
            if ("function" == typeof t3.prependListener)
              return t3.prependListener(e3, r3);
            t3._events && t3._events[e3] ? Array.isArray(t3._events[e3]) ? t3._events[e3].unshift(r3) : t3._events[e3] = [r3, t3._events[e3]] : t3.on(e3, r3);
          }(t2, "error", c2), t2.once("close", d2), t2.once("finish", l2), t2.emit("pipe", r2), n2.flowing || (i("pipe resume"), r2.resume()), t2;
        }, M.prototype.unpipe = function(t2) {
          var e2 = this._readableState, r2 = { hasUnpiped: false };
          if (0 === e2.pipesCount)
            return this;
          if (1 === e2.pipesCount)
            return t2 && t2 !== e2.pipes || (t2 || (t2 = e2.pipes), e2.pipes = null, e2.pipesCount = 0, e2.flowing = false, t2 && t2.emit("unpipe", this, r2)), this;
          if (!t2) {
            var n2 = e2.pipes, i2 = e2.pipesCount;
            e2.pipes = null, e2.pipesCount = 0, e2.flowing = false;
            for (var o2 = 0; o2 < i2; o2++)
              n2[o2].emit("unpipe", this, { hasUnpiped: false });
            return this;
          }
          var a2 = q(e2.pipes, t2);
          return -1 === a2 || (e2.pipes.splice(a2, 1), e2.pipesCount -= 1, 1 === e2.pipesCount && (e2.pipes = e2.pipes[0]), t2.emit("unpipe", this, r2)), this;
        }, M.prototype.on = function(t2, e2) {
          var r2 = a.prototype.on.call(this, t2, e2), n2 = this._readableState;
          return "data" === t2 ? (n2.readableListening = this.listenerCount("readable") > 0, false !== n2.flowing && this.resume()) : "readable" === t2 && (n2.endEmitted || n2.readableListening || (n2.readableListening = n2.needReadable = true, n2.flowing = false, n2.emittedReadable = false, i("on readable", n2.length, n2.reading), n2.length ? x(this) : n2.reading || process.nextTick(N, this))), r2;
        }, M.prototype.addListener = M.prototype.on, M.prototype.removeListener = function(t2, e2) {
          var r2 = a.prototype.removeListener.call(this, t2, e2);
          return "readable" === t2 && process.nextTick(P, this), r2;
        }, M.prototype.removeAllListeners = function(t2) {
          var e2 = a.prototype.removeAllListeners.apply(this, arguments);
          return "readable" !== t2 && void 0 !== t2 || process.nextTick(P, this), e2;
        }, M.prototype.resume = function() {
          var t2 = this._readableState;
          return t2.flowing || (i("resume"), t2.flowing = !t2.readableListening, function(t3, e2) {
            e2.resumeScheduled || (e2.resumeScheduled = true, process.nextTick(j, t3, e2));
          }(this, t2)), t2.paused = false, this;
        }, M.prototype.pause = function() {
          return i("call pause flowing=%j", this._readableState.flowing), false !== this._readableState.flowing && (i("pause"), this._readableState.flowing = false, this.emit("pause")), this._readableState.paused = true, this;
        }, M.prototype.wrap = function(t2) {
          var e2 = this, r2 = this._readableState, n2 = false;
          for (var o2 in t2.on("end", function() {
            if (i("wrapped end"), r2.decoder && !r2.ended) {
              var t3 = r2.decoder.end();
              t3 && t3.length && e2.push(t3);
            }
            e2.push(null);
          }), t2.on("data", function(o3) {
            i("wrapped data"), r2.decoder && (o3 = r2.decoder.write(o3)), r2.objectMode && null == o3 || (r2.objectMode || o3 && o3.length) && (e2.push(o3) || (n2 = true, t2.pause()));
          }), t2)
            void 0 === this[o2] && "function" == typeof t2[o2] && (this[o2] = /* @__PURE__ */ function(e3) {
              return function() {
                return t2[e3].apply(t2, arguments);
              };
            }(o2));
          for (var a2 = 0; a2 < S.length; a2++)
            t2.on(S[a2], this.emit.bind(this, S[a2]));
          return this._read = function(e3) {
            i("wrapped _read", e3), n2 && (n2 = false, t2.resume());
          }, this;
        }, "function" == typeof Symbol && (M.prototype[Symbol.asyncIterator] = function() {
          return void 0 === c && (c = r(9035)), c(this);
        }), Object.defineProperty(M.prototype, "readableHighWaterMark", { enumerable: false, get: function() {
          return this._readableState.highWaterMark;
        } }), Object.defineProperty(M.prototype, "readableBuffer", { enumerable: false, get: function() {
          return this._readableState && this._readableState.buffer;
        } }), Object.defineProperty(M.prototype, "readableFlowing", { enumerable: false, get: function() {
          return this._readableState.flowing;
        }, set: function(t2) {
          this._readableState && (this._readableState.flowing = t2);
        } }), M._fromList = L, Object.defineProperty(M.prototype, "readableLength", { enumerable: false, get: function() {
          return this._readableState.length;
        } }), "function" == typeof Symbol && (M.from = function(t2, e2) {
          return void 0 === d && (d = r(6869)), d(M, t2, e2);
        });
      }, 4914: (t, e, r) => {
        "use strict";
        t.exports = u;
        var n = r(8704).F, i = n.ERR_METHOD_NOT_IMPLEMENTED, o = n.ERR_MULTIPLE_CALLBACK, a = n.ERR_TRANSFORM_ALREADY_TRANSFORMING, s = n.ERR_TRANSFORM_WITH_LENGTH_0, f = r(5606);
        function h(t2, e2) {
          var r2 = this._transformState;
          r2.transforming = false;
          var n2 = r2.writecb;
          if (null === n2)
            return this.emit("error", new o());
          r2.writechunk = null, r2.writecb = null, null != e2 && this.push(e2), n2(t2);
          var i2 = this._readableState;
          i2.reading = false, (i2.needReadable || i2.length < i2.highWaterMark) && this._read(i2.highWaterMark);
        }
        function u(t2) {
          if (!(this instanceof u))
            return new u(t2);
          f.call(this, t2), this._transformState = { afterTransform: h.bind(this), needTransform: false, transforming: false, writecb: null, writechunk: null, writeencoding: null }, this._readableState.needReadable = true, this._readableState.sync = false, t2 && ("function" == typeof t2.transform && (this._transform = t2.transform), "function" == typeof t2.flush && (this._flush = t2.flush)), this.on("prefinish", c);
        }
        function c() {
          var t2 = this;
          "function" != typeof this._flush || this._readableState.destroyed ? d(this, null, null) : this._flush(function(e2, r2) {
            d(t2, e2, r2);
          });
        }
        function d(t2, e2, r2) {
          if (e2)
            return t2.emit("error", e2);
          if (null != r2 && t2.push(r2), t2._writableState.length)
            throw new s();
          if (t2._transformState.transforming)
            throw new a();
          return t2.push(null);
        }
        r(6192)(u, f), u.prototype.push = function(t2, e2) {
          return this._transformState.needTransform = false, f.prototype.push.call(this, t2, e2);
        }, u.prototype._transform = function(t2, e2, r2) {
          r2(new i("_transform()"));
        }, u.prototype._write = function(t2, e2, r2) {
          var n2 = this._transformState;
          if (n2.writecb = r2, n2.writechunk = t2, n2.writeencoding = e2, !n2.transforming) {
            var i2 = this._readableState;
            (n2.needTransform || i2.needReadable || i2.length < i2.highWaterMark) && this._read(i2.highWaterMark);
          }
        }, u.prototype._read = function(t2) {
          var e2 = this._transformState;
          null === e2.writechunk || e2.transforming ? e2.needTransform = true : (e2.transforming = true, this._transform(e2.writechunk, e2.writeencoding, e2.afterTransform));
        }, u.prototype._destroy = function(t2, e2) {
          f.prototype._destroy.call(this, t2, function(t3) {
            e2(t3);
          });
        };
      }, 6868: (t, e, r) => {
        "use strict";
        function n(t2) {
          var e2 = this;
          this.next = null, this.entry = null, this.finish = function() {
            !function(t3, e3, r2) {
              var n2 = t3.entry;
              for (t3.entry = null; n2; ) {
                var i2 = n2.callback;
                e3.pendingcb--, i2(void 0), n2 = n2.next;
              }
              e3.corkedRequestsFree.next = t3;
            }(e2, t2);
          };
        }
        var i;
        t.exports = M, M.WritableState = E;
        var o, a = { deprecate: r(1348) }, s = r(9481), f = r(4686).Buffer, h = (void 0 !== r.g ? r.g : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {
        }, u = r(4552), c = r(7963).getHighWaterMark, d = r(8704).F, l = d.ERR_INVALID_ARG_TYPE, p = d.ERR_METHOD_NOT_IMPLEMENTED, b = d.ERR_MULTIPLE_CALLBACK, y = d.ERR_STREAM_CANNOT_PIPE, g = d.ERR_STREAM_DESTROYED, m = d.ERR_STREAM_NULL_VALUES, v = d.ERR_STREAM_WRITE_AFTER_END, w = d.ERR_UNKNOWN_ENCODING, _ = u.errorOrDestroy;
        function S() {
        }
        function E(t2, e2, o2) {
          i = i || r(5606), t2 = t2 || {}, "boolean" != typeof o2 && (o2 = e2 instanceof i), this.objectMode = !!t2.objectMode, o2 && (this.objectMode = this.objectMode || !!t2.writableObjectMode), this.highWaterMark = c(this, t2, "writableHighWaterMark", o2), this.finalCalled = false, this.needDrain = false, this.ending = false, this.ended = false, this.finished = false, this.destroyed = false;
          var a2 = false === t2.decodeStrings;
          this.decodeStrings = !a2, this.defaultEncoding = t2.defaultEncoding || "utf8", this.length = 0, this.writing = false, this.corked = 0, this.sync = true, this.bufferProcessing = false, this.onwrite = function(t3) {
            !function(t4, e3) {
              var r2 = t4._writableState, n2 = r2.sync, i2 = r2.writecb;
              if ("function" != typeof i2)
                throw new b();
              if (function(t5) {
                t5.writing = false, t5.writecb = null, t5.length -= t5.writelen, t5.writelen = 0;
              }(r2), e3)
                !function(t5, e4, r3, n3, i3) {
                  --e4.pendingcb, r3 ? (process.nextTick(i3, n3), process.nextTick(I, t5, e4), t5._writableState.errorEmitted = true, _(t5, n3)) : (i3(n3), t5._writableState.errorEmitted = true, _(t5, n3), I(t5, e4));
                }(t4, r2, n2, e3, i2);
              else {
                var o3 = O(r2) || t4.destroyed;
                o3 || r2.corked || r2.bufferProcessing || !r2.bufferedRequest || B(t4, r2), n2 ? process.nextTick(k, t4, r2, o3, i2) : k(t4, r2, o3, i2);
              }
            }(e2, t3);
          }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = false, this.errorEmitted = false, this.emitClose = false !== t2.emitClose, this.autoDestroy = !!t2.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new n(this);
        }
        function M(t2) {
          var e2 = this instanceof (i = i || r(5606));
          if (!e2 && !o.call(M, this))
            return new M(t2);
          this._writableState = new E(t2, this, e2), this.writable = true, t2 && ("function" == typeof t2.write && (this._write = t2.write), "function" == typeof t2.writev && (this._writev = t2.writev), "function" == typeof t2.destroy && (this._destroy = t2.destroy), "function" == typeof t2.final && (this._final = t2.final)), s.call(this);
        }
        function A(t2, e2, r2, n2, i2, o2, a2) {
          e2.writelen = n2, e2.writecb = a2, e2.writing = true, e2.sync = true, e2.destroyed ? e2.onwrite(new g("write")) : r2 ? t2._writev(i2, e2.onwrite) : t2._write(i2, o2, e2.onwrite), e2.sync = false;
        }
        function k(t2, e2, r2, n2) {
          r2 || function(t3, e3) {
            0 === e3.length && e3.needDrain && (e3.needDrain = false, t3.emit("drain"));
          }(t2, e2), e2.pendingcb--, n2(), I(t2, e2);
        }
        function B(t2, e2) {
          e2.bufferProcessing = true;
          var r2 = e2.bufferedRequest;
          if (t2._writev && r2 && r2.next) {
            var i2 = e2.bufferedRequestCount, o2 = new Array(i2), a2 = e2.corkedRequestsFree;
            a2.entry = r2;
            for (var s2 = 0, f2 = true; r2; )
              o2[s2] = r2, r2.isBuf || (f2 = false), r2 = r2.next, s2 += 1;
            o2.allBuffers = f2, A(t2, e2, true, e2.length, o2, "", a2.finish), e2.pendingcb++, e2.lastBufferedRequest = null, a2.next ? (e2.corkedRequestsFree = a2.next, a2.next = null) : e2.corkedRequestsFree = new n(e2), e2.bufferedRequestCount = 0;
          } else {
            for (; r2; ) {
              var h2 = r2.chunk, u2 = r2.encoding, c2 = r2.callback;
              if (A(t2, e2, false, e2.objectMode ? 1 : h2.length, h2, u2, c2), r2 = r2.next, e2.bufferedRequestCount--, e2.writing)
                break;
            }
            null === r2 && (e2.lastBufferedRequest = null);
          }
          e2.bufferedRequest = r2, e2.bufferProcessing = false;
        }
        function O(t2) {
          return t2.ending && 0 === t2.length && null === t2.bufferedRequest && !t2.finished && !t2.writing;
        }
        function x(t2, e2) {
          t2._final(function(r2) {
            e2.pendingcb--, r2 && _(t2, r2), e2.prefinished = true, t2.emit("prefinish"), I(t2, e2);
          });
        }
        function I(t2, e2) {
          var r2 = O(e2);
          if (r2 && (function(t3, e3) {
            e3.prefinished || e3.finalCalled || ("function" != typeof t3._final || e3.destroyed ? (e3.prefinished = true, t3.emit("prefinish")) : (e3.pendingcb++, e3.finalCalled = true, process.nextTick(x, t3, e3)));
          }(t2, e2), 0 === e2.pendingcb && (e2.finished = true, t2.emit("finish"), e2.autoDestroy))) {
            var n2 = t2._readableState;
            (!n2 || n2.autoDestroy && n2.endEmitted) && t2.destroy();
          }
          return r2;
        }
        r(6192)(M, s), E.prototype.getBuffer = function() {
          for (var t2 = this.bufferedRequest, e2 = []; t2; )
            e2.push(t2), t2 = t2.next;
          return e2;
        }, function() {
          try {
            Object.defineProperty(E.prototype, "buffer", { get: a.deprecate(function() {
              return this.getBuffer();
            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003") });
          } catch (t2) {
          }
        }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (o = Function.prototype[Symbol.hasInstance], Object.defineProperty(M, Symbol.hasInstance, { value: function(t2) {
          return !!o.call(this, t2) || this === M && t2 && t2._writableState instanceof E;
        } })) : o = function(t2) {
          return t2 instanceof this;
        }, M.prototype.pipe = function() {
          _(this, new y());
        }, M.prototype.write = function(t2, e2, r2) {
          var n2, i2 = this._writableState, o2 = false, a2 = !i2.objectMode && (n2 = t2, f.isBuffer(n2) || n2 instanceof h);
          return a2 && !f.isBuffer(t2) && (t2 = function(t3) {
            return f.from(t3);
          }(t2)), "function" == typeof e2 && (r2 = e2, e2 = null), a2 ? e2 = "buffer" : e2 || (e2 = i2.defaultEncoding), "function" != typeof r2 && (r2 = S), i2.ending ? function(t3, e3) {
            var r3 = new v();
            _(t3, r3), process.nextTick(e3, r3);
          }(this, r2) : (a2 || function(t3, e3, r3, n3) {
            var i3;
            return null === r3 ? i3 = new m() : "string" == typeof r3 || e3.objectMode || (i3 = new l("chunk", ["string", "Buffer"], r3)), !i3 || (_(t3, i3), process.nextTick(n3, i3), false);
          }(this, i2, t2, r2)) && (i2.pendingcb++, o2 = function(t3, e3, r3, n3, i3, o3) {
            if (!r3) {
              var a3 = function(t4, e4, r4) {
                return t4.objectMode || false === t4.decodeStrings || "string" != typeof e4 || (e4 = f.from(e4, r4)), e4;
              }(e3, n3, i3);
              n3 !== a3 && (r3 = true, i3 = "buffer", n3 = a3);
            }
            var s2 = e3.objectMode ? 1 : n3.length;
            e3.length += s2;
            var h2 = e3.length < e3.highWaterMark;
            if (h2 || (e3.needDrain = true), e3.writing || e3.corked) {
              var u2 = e3.lastBufferedRequest;
              e3.lastBufferedRequest = { chunk: n3, encoding: i3, isBuf: r3, callback: o3, next: null }, u2 ? u2.next = e3.lastBufferedRequest : e3.bufferedRequest = e3.lastBufferedRequest, e3.bufferedRequestCount += 1;
            } else
              A(t3, e3, false, s2, n3, i3, o3);
            return h2;
          }(this, i2, a2, t2, e2, r2)), o2;
        }, M.prototype.cork = function() {
          this._writableState.corked++;
        }, M.prototype.uncork = function() {
          var t2 = this._writableState;
          t2.corked && (t2.corked--, t2.writing || t2.corked || t2.bufferProcessing || !t2.bufferedRequest || B(this, t2));
        }, M.prototype.setDefaultEncoding = function(t2) {
          if ("string" == typeof t2 && (t2 = t2.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t2 + "").toLowerCase()) > -1))
            throw new w(t2);
          return this._writableState.defaultEncoding = t2, this;
        }, Object.defineProperty(M.prototype, "writableBuffer", { enumerable: false, get: function() {
          return this._writableState && this._writableState.getBuffer();
        } }), Object.defineProperty(M.prototype, "writableHighWaterMark", { enumerable: false, get: function() {
          return this._writableState.highWaterMark;
        } }), M.prototype._write = function(t2, e2, r2) {
          r2(new p("_write()"));
        }, M.prototype._writev = null, M.prototype.end = function(t2, e2, r2) {
          var n2 = this._writableState;
          return "function" == typeof t2 ? (r2 = t2, t2 = null, e2 = null) : "function" == typeof e2 && (r2 = e2, e2 = null), null != t2 && this.write(t2, e2), n2.corked && (n2.corked = 1, this.uncork()), n2.ending || function(t3, e3, r3) {
            e3.ending = true, I(t3, e3), r3 && (e3.finished ? process.nextTick(r3) : t3.once("finish", r3)), e3.ended = true, t3.writable = false;
          }(this, n2, r2), this;
        }, Object.defineProperty(M.prototype, "writableLength", { enumerable: false, get: function() {
          return this._writableState.length;
        } }), Object.defineProperty(M.prototype, "destroyed", { enumerable: false, get: function() {
          return void 0 !== this._writableState && this._writableState.destroyed;
        }, set: function(t2) {
          this._writableState && (this._writableState.destroyed = t2);
        } }), M.prototype.destroy = u.destroy, M.prototype._undestroy = u.undestroy, M.prototype._destroy = function(t2, e2) {
          e2(t2);
        };
      }, 9035: (t, e, r) => {
        "use strict";
        var n;
        function i(t2, e2, r2) {
          return (e2 = function(t3) {
            var e3 = function(t4, e4) {
              if ("object" != typeof t4 || null === t4)
                return t4;
              var r3 = t4[Symbol.toPrimitive];
              if (void 0 !== r3) {
                var n2 = r3.call(t4, "string");
                if ("object" != typeof n2)
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return "symbol" == typeof e3 ? e3 : String(e3);
          }(e2)) in t2 ? Object.defineProperty(t2, e2, { value: r2, enumerable: true, configurable: true, writable: true }) : t2[e2] = r2, t2;
        }
        var o = r(2862), a = Symbol("lastResolve"), s = Symbol("lastReject"), f = Symbol("error"), h = Symbol("ended"), u = Symbol("lastPromise"), c = Symbol("handlePromise"), d = Symbol("stream");
        function l(t2, e2) {
          return { value: t2, done: e2 };
        }
        function p(t2) {
          var e2 = t2[a];
          if (null !== e2) {
            var r2 = t2[d].read();
            null !== r2 && (t2[u] = null, t2[a] = null, t2[s] = null, e2(l(r2, false)));
          }
        }
        function b(t2) {
          process.nextTick(p, t2);
        }
        var y = Object.getPrototypeOf(function() {
        }), g = Object.setPrototypeOf((i(n = { get stream() {
          return this[d];
        }, next: function() {
          var t2 = this, e2 = this[f];
          if (null !== e2)
            return Promise.reject(e2);
          if (this[h])
            return Promise.resolve(l(void 0, true));
          if (this[d].destroyed)
            return new Promise(function(e3, r3) {
              process.nextTick(function() {
                t2[f] ? r3(t2[f]) : e3(l(void 0, true));
              });
            });
          var r2, n2 = this[u];
          if (n2)
            r2 = new Promise(/* @__PURE__ */ function(t3, e3) {
              return function(r3, n3) {
                t3.then(function() {
                  e3[h] ? r3(l(void 0, true)) : e3[c](r3, n3);
                }, n3);
              };
            }(n2, this));
          else {
            var i2 = this[d].read();
            if (null !== i2)
              return Promise.resolve(l(i2, false));
            r2 = new Promise(this[c]);
          }
          return this[u] = r2, r2;
        } }, Symbol.asyncIterator, function() {
          return this;
        }), i(n, "return", function() {
          var t2 = this;
          return new Promise(function(e2, r2) {
            t2[d].destroy(null, function(t3) {
              t3 ? r2(t3) : e2(l(void 0, true));
            });
          });
        }), n), y);
        t.exports = function(t2) {
          var e2, r2 = Object.create(g, (i(e2 = {}, d, { value: t2, writable: true }), i(e2, a, { value: null, writable: true }), i(e2, s, { value: null, writable: true }), i(e2, f, { value: null, writable: true }), i(e2, h, { value: t2._readableState.endEmitted, writable: true }), i(e2, c, { value: function(t3, e3) {
            var n2 = r2[d].read();
            n2 ? (r2[u] = null, r2[a] = null, r2[s] = null, t3(l(n2, false))) : (r2[a] = t3, r2[s] = e3);
          }, writable: true }), e2));
          return r2[u] = null, o(t2, function(t3) {
            if (t3 && "ERR_STREAM_PREMATURE_CLOSE" !== t3.code) {
              var e3 = r2[s];
              return null !== e3 && (r2[u] = null, r2[a] = null, r2[s] = null, e3(t3)), void (r2[f] = t3);
            }
            var n2 = r2[a];
            null !== n2 && (r2[u] = null, r2[a] = null, r2[s] = null, n2(l(void 0, true))), r2[h] = true;
          }), t2.on("readable", b.bind(null, r2)), r2;
        };
      }, 9865: (t, e, r) => {
        "use strict";
        function n(t2, e2) {
          var r2 = Object.keys(t2);
          if (Object.getOwnPropertySymbols) {
            var n2 = Object.getOwnPropertySymbols(t2);
            e2 && (n2 = n2.filter(function(e3) {
              return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
            })), r2.push.apply(r2, n2);
          }
          return r2;
        }
        function i(t2) {
          for (var e2 = 1; e2 < arguments.length; e2++) {
            var r2 = null != arguments[e2] ? arguments[e2] : {};
            e2 % 2 ? n(Object(r2), true).forEach(function(e3) {
              o(t2, e3, r2[e3]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(r2)) : n(Object(r2)).forEach(function(e3) {
              Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(r2, e3));
            });
          }
          return t2;
        }
        function o(t2, e2, r2) {
          return (e2 = s(e2)) in t2 ? Object.defineProperty(t2, e2, { value: r2, enumerable: true, configurable: true, writable: true }) : t2[e2] = r2, t2;
        }
        function a(t2, e2) {
          for (var r2 = 0; r2 < e2.length; r2++) {
            var n2 = e2[r2];
            n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t2, s(n2.key), n2);
          }
        }
        function s(t2) {
          var e2 = function(t3, e3) {
            if ("object" != typeof t3 || null === t3)
              return t3;
            var r2 = t3[Symbol.toPrimitive];
            if (void 0 !== r2) {
              var n2 = r2.call(t3, "string");
              if ("object" != typeof n2)
                return n2;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t3);
          }(t2);
          return "symbol" == typeof e2 ? e2 : String(e2);
        }
        var f = r(4686).Buffer, h = r(1220).inspect, u = h && h.custom || "inspect";
        t.exports = function() {
          function t2() {
            !function(t3, e3) {
              if (!(t3 instanceof e3))
                throw new TypeError("Cannot call a class as a function");
            }(this, t2), this.head = null, this.tail = null, this.length = 0;
          }
          var e2, r2;
          return e2 = t2, (r2 = [{ key: "push", value: function(t3) {
            var e3 = { data: t3, next: null };
            this.length > 0 ? this.tail.next = e3 : this.head = e3, this.tail = e3, ++this.length;
          } }, { key: "unshift", value: function(t3) {
            var e3 = { data: t3, next: this.head };
            0 === this.length && (this.tail = e3), this.head = e3, ++this.length;
          } }, { key: "shift", value: function() {
            if (0 !== this.length) {
              var t3 = this.head.data;
              return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, t3;
            }
          } }, { key: "clear", value: function() {
            this.head = this.tail = null, this.length = 0;
          } }, { key: "join", value: function(t3) {
            if (0 === this.length)
              return "";
            for (var e3 = this.head, r3 = "" + e3.data; e3 = e3.next; )
              r3 += t3 + e3.data;
            return r3;
          } }, { key: "concat", value: function(t3) {
            if (0 === this.length)
              return f.alloc(0);
            for (var e3, r3, n2, i2 = f.allocUnsafe(t3 >>> 0), o2 = this.head, a2 = 0; o2; )
              e3 = o2.data, r3 = i2, n2 = a2, f.prototype.copy.call(e3, r3, n2), a2 += o2.data.length, o2 = o2.next;
            return i2;
          } }, { key: "consume", value: function(t3, e3) {
            var r3;
            return t3 < this.head.data.length ? (r3 = this.head.data.slice(0, t3), this.head.data = this.head.data.slice(t3)) : r3 = t3 === this.head.data.length ? this.shift() : e3 ? this._getString(t3) : this._getBuffer(t3), r3;
          } }, { key: "first", value: function() {
            return this.head.data;
          } }, { key: "_getString", value: function(t3) {
            var e3 = this.head, r3 = 1, n2 = e3.data;
            for (t3 -= n2.length; e3 = e3.next; ) {
              var i2 = e3.data, o2 = t3 > i2.length ? i2.length : t3;
              if (o2 === i2.length ? n2 += i2 : n2 += i2.slice(0, t3), 0 == (t3 -= o2)) {
                o2 === i2.length ? (++r3, e3.next ? this.head = e3.next : this.head = this.tail = null) : (this.head = e3, e3.data = i2.slice(o2));
                break;
              }
              ++r3;
            }
            return this.length -= r3, n2;
          } }, { key: "_getBuffer", value: function(t3) {
            var e3 = f.allocUnsafe(t3), r3 = this.head, n2 = 1;
            for (r3.data.copy(e3), t3 -= r3.data.length; r3 = r3.next; ) {
              var i2 = r3.data, o2 = t3 > i2.length ? i2.length : t3;
              if (i2.copy(e3, e3.length - t3, 0, o2), 0 == (t3 -= o2)) {
                o2 === i2.length ? (++n2, r3.next ? this.head = r3.next : this.head = this.tail = null) : (this.head = r3, r3.data = i2.slice(o2));
                break;
              }
              ++n2;
            }
            return this.length -= n2, e3;
          } }, { key: u, value: function(t3, e3) {
            return h(this, i(i({}, e3), {}, { depth: 0, customInspect: false }));
          } }]) && a(e2.prototype, r2), Object.defineProperty(e2, "prototype", { writable: false }), t2;
        }();
      }, 4552: (t) => {
        "use strict";
        function e(t2, e2) {
          n(t2, e2), r(t2);
        }
        function r(t2) {
          t2._writableState && !t2._writableState.emitClose || t2._readableState && !t2._readableState.emitClose || t2.emit("close");
        }
        function n(t2, e2) {
          t2.emit("error", e2);
        }
        t.exports = { destroy: function(t2, i) {
          var o = this, a = this._readableState && this._readableState.destroyed, s = this._writableState && this._writableState.destroyed;
          return a || s ? (i ? i(t2) : t2 && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = true, process.nextTick(n, this, t2)) : process.nextTick(n, this, t2)), this) : (this._readableState && (this._readableState.destroyed = true), this._writableState && (this._writableState.destroyed = true), this._destroy(t2 || null, function(t3) {
            !i && t3 ? o._writableState ? o._writableState.errorEmitted ? process.nextTick(r, o) : (o._writableState.errorEmitted = true, process.nextTick(e, o, t3)) : process.nextTick(e, o, t3) : i ? (process.nextTick(r, o), i(t3)) : process.nextTick(r, o);
          }), this);
        }, undestroy: function() {
          this._readableState && (this._readableState.destroyed = false, this._readableState.reading = false, this._readableState.ended = false, this._readableState.endEmitted = false), this._writableState && (this._writableState.destroyed = false, this._writableState.ended = false, this._writableState.ending = false, this._writableState.finalCalled = false, this._writableState.prefinished = false, this._writableState.finished = false, this._writableState.errorEmitted = false);
        }, errorOrDestroy: function(t2, e2) {
          var r2 = t2._readableState, n2 = t2._writableState;
          r2 && r2.autoDestroy || n2 && n2.autoDestroy ? t2.destroy(e2) : t2.emit("error", e2);
        } };
      }, 2862: (t, e, r) => {
        "use strict";
        var n = r(8704).F.ERR_STREAM_PREMATURE_CLOSE;
        function i() {
        }
        t.exports = function t2(e2, r2, o) {
          if ("function" == typeof r2)
            return t2(e2, null, r2);
          r2 || (r2 = {}), o = /* @__PURE__ */ function(t3) {
            var e3 = false;
            return function() {
              if (!e3) {
                e3 = true;
                for (var r3 = arguments.length, n2 = new Array(r3), i2 = 0; i2 < r3; i2++)
                  n2[i2] = arguments[i2];
                t3.apply(this, n2);
              }
            };
          }(o || i);
          var a = r2.readable || false !== r2.readable && e2.readable, s = r2.writable || false !== r2.writable && e2.writable, f = function() {
            e2.writable || u();
          }, h = e2._writableState && e2._writableState.finished, u = function() {
            s = false, h = true, a || o.call(e2);
          }, c = e2._readableState && e2._readableState.endEmitted, d = function() {
            a = false, c = true, s || o.call(e2);
          }, l = function(t3) {
            o.call(e2, t3);
          }, p = function() {
            var t3;
            return a && !c ? (e2._readableState && e2._readableState.ended || (t3 = new n()), o.call(e2, t3)) : s && !h ? (e2._writableState && e2._writableState.ended || (t3 = new n()), o.call(e2, t3)) : void 0;
          }, b = function() {
            e2.req.on("finish", u);
          };
          return function(t3) {
            return t3.setHeader && "function" == typeof t3.abort;
          }(e2) ? (e2.on("complete", u), e2.on("abort", p), e2.req ? b() : e2.on("request", b)) : s && !e2._writableState && (e2.on("end", f), e2.on("close", f)), e2.on("end", d), e2.on("finish", u), false !== r2.error && e2.on("error", l), e2.on("close", p), function() {
            e2.removeListener("complete", u), e2.removeListener("abort", p), e2.removeListener("request", b), e2.req && e2.req.removeListener("finish", u), e2.removeListener("end", f), e2.removeListener("close", f), e2.removeListener("finish", u), e2.removeListener("end", d), e2.removeListener("error", l), e2.removeListener("close", p);
          };
        };
      }, 6869: (t) => {
        t.exports = function() {
          throw new Error("Readable.from is not available in the browser");
        };
      }, 110: (t, e, r) => {
        "use strict";
        var n, i = r(8704).F, o = i.ERR_MISSING_ARGS, a = i.ERR_STREAM_DESTROYED;
        function s(t2) {
          if (t2)
            throw t2;
        }
        function f(t2) {
          t2();
        }
        function h(t2, e2) {
          return t2.pipe(e2);
        }
        t.exports = function() {
          for (var t2 = arguments.length, e2 = new Array(t2), i2 = 0; i2 < t2; i2++)
            e2[i2] = arguments[i2];
          var u, c = function(t3) {
            return t3.length ? "function" != typeof t3[t3.length - 1] ? s : t3.pop() : s;
          }(e2);
          if (Array.isArray(e2[0]) && (e2 = e2[0]), e2.length < 2)
            throw new o("streams");
          var d = e2.map(function(t3, i3) {
            var o2 = i3 < e2.length - 1;
            return function(t4, e3, i4, o3) {
              o3 = /* @__PURE__ */ function(t5) {
                var e4 = false;
                return function() {
                  e4 || (e4 = true, t5.apply(void 0, arguments));
                };
              }(o3);
              var s2 = false;
              t4.on("close", function() {
                s2 = true;
              }), void 0 === n && (n = r(2862)), n(t4, { readable: e3, writable: i4 }, function(t5) {
                if (t5)
                  return o3(t5);
                s2 = true, o3();
              });
              var f2 = false;
              return function(e4) {
                if (!s2 && !f2)
                  return f2 = true, function(t5) {
                    return t5.setHeader && "function" == typeof t5.abort;
                  }(t4) ? t4.abort() : "function" == typeof t4.destroy ? t4.destroy() : void o3(e4 || new a("pipe"));
              };
            }(t3, o2, i3 > 0, function(t4) {
              u || (u = t4), t4 && d.forEach(f), o2 || (d.forEach(f), c(u));
            });
          });
          return e2.reduce(h);
        };
      }, 7963: (t, e, r) => {
        "use strict";
        var n = r(8704).F.ERR_INVALID_OPT_VALUE;
        t.exports = { getHighWaterMark: function(t2, e2, r2, i) {
          var o = function(t3, e3, r3) {
            return null != t3.highWaterMark ? t3.highWaterMark : e3 ? t3[r3] : null;
          }(e2, i, r2);
          if (null != o) {
            if (!isFinite(o) || Math.floor(o) !== o || o < 0)
              throw new n(i ? r2 : "highWaterMark", o);
            return Math.floor(o);
          }
          return t2.objectMode ? 16 : 16384;
        } };
      }, 9481: (t, e, r) => {
        t.exports = r(9784).EventEmitter;
      }, 5727: (t, e, r) => {
        (e = t.exports = r(4324)).Stream = e, e.Readable = e, e.Writable = r(6868), e.Duplex = r(5606), e.Transform = r(4914), e.PassThrough = r(9648), e.finished = r(2862), e.pipeline = r(110);
      }, 1609: (t, e, r) => {
        "use strict";
        var n = r(4686).Buffer, i = r(6192), o = r(859), a = new Array(16), s = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13], f = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11], h = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6], u = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11], c = [0, 1518500249, 1859775393, 2400959708, 2840853838], d = [1352829926, 1548603684, 1836072691, 2053994217, 0];
        function l() {
          o.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520;
        }
        function p(t2, e2) {
          return t2 << e2 | t2 >>> 32 - e2;
        }
        function b(t2, e2, r2, n2, i2, o2, a2, s2) {
          return p(t2 + (e2 ^ r2 ^ n2) + o2 + a2 | 0, s2) + i2 | 0;
        }
        function y(t2, e2, r2, n2, i2, o2, a2, s2) {
          return p(t2 + (e2 & r2 | ~e2 & n2) + o2 + a2 | 0, s2) + i2 | 0;
        }
        function g(t2, e2, r2, n2, i2, o2, a2, s2) {
          return p(t2 + ((e2 | ~r2) ^ n2) + o2 + a2 | 0, s2) + i2 | 0;
        }
        function m(t2, e2, r2, n2, i2, o2, a2, s2) {
          return p(t2 + (e2 & n2 | r2 & ~n2) + o2 + a2 | 0, s2) + i2 | 0;
        }
        function v(t2, e2, r2, n2, i2, o2, a2, s2) {
          return p(t2 + (e2 ^ (r2 | ~n2)) + o2 + a2 | 0, s2) + i2 | 0;
        }
        i(l, o), l.prototype._update = function() {
          for (var t2 = a, e2 = 0; e2 < 16; ++e2)
            t2[e2] = this._block.readInt32LE(4 * e2);
          for (var r2 = 0 | this._a, n2 = 0 | this._b, i2 = 0 | this._c, o2 = 0 | this._d, l2 = 0 | this._e, w = 0 | this._a, _ = 0 | this._b, S = 0 | this._c, E = 0 | this._d, M = 0 | this._e, A = 0; A < 80; A += 1) {
            var k, B;
            A < 16 ? (k = b(r2, n2, i2, o2, l2, t2[s[A]], c[0], h[A]), B = v(w, _, S, E, M, t2[f[A]], d[0], u[A])) : A < 32 ? (k = y(r2, n2, i2, o2, l2, t2[s[A]], c[1], h[A]), B = m(w, _, S, E, M, t2[f[A]], d[1], u[A])) : A < 48 ? (k = g(r2, n2, i2, o2, l2, t2[s[A]], c[2], h[A]), B = g(w, _, S, E, M, t2[f[A]], d[2], u[A])) : A < 64 ? (k = m(r2, n2, i2, o2, l2, t2[s[A]], c[3], h[A]), B = y(w, _, S, E, M, t2[f[A]], d[3], u[A])) : (k = v(r2, n2, i2, o2, l2, t2[s[A]], c[4], h[A]), B = b(w, _, S, E, M, t2[f[A]], d[4], u[A])), r2 = l2, l2 = o2, o2 = p(i2, 10), i2 = n2, n2 = k, w = M, M = E, E = p(S, 10), S = _, _ = B;
          }
          var O = this._b + i2 + E | 0;
          this._b = this._c + o2 + M | 0, this._c = this._d + l2 + w | 0, this._d = this._e + r2 + _ | 0, this._e = this._a + n2 + S | 0, this._a = O;
        }, l.prototype._digest = function() {
          this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
          var t2 = n.alloc ? n.alloc(20) : new n(20);
          return t2.writeInt32LE(this._a, 0), t2.writeInt32LE(this._b, 4), t2.writeInt32LE(this._c, 8), t2.writeInt32LE(this._d, 12), t2.writeInt32LE(this._e, 16), t2;
        }, t.exports = l;
      }, 2947: (t, e, r) => {
        var n = r(4686), i = n.Buffer;
        function o(t2, e2) {
          for (var r2 in t2)
            e2[r2] = t2[r2];
        }
        function a(t2, e2, r2) {
          return i(t2, e2, r2);
        }
        i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t.exports = n : (o(n, e), e.Buffer = a), o(i, a), a.from = function(t2, e2, r2) {
          if ("number" == typeof t2)
            throw new TypeError("Argument must not be a number");
          return i(t2, e2, r2);
        }, a.alloc = function(t2, e2, r2) {
          if ("number" != typeof t2)
            throw new TypeError("Argument must be a number");
          var n2 = i(t2);
          return void 0 !== e2 ? "string" == typeof r2 ? n2.fill(e2, r2) : n2.fill(e2) : n2.fill(0), n2;
        }, a.allocUnsafe = function(t2) {
          if ("number" != typeof t2)
            throw new TypeError("Argument must be a number");
          return i(t2);
        }, a.allocUnsafeSlow = function(t2) {
          if ("number" != typeof t2)
            throw new TypeError("Argument must be a number");
          return n.SlowBuffer(t2);
        };
      }, 6671: (t, e, r) => {
        var n = r(4686), i = n.Buffer;
        function o(t2, e2) {
          for (var r2 in t2)
            e2[r2] = t2[r2];
        }
        function a(t2, e2, r2) {
          return i(t2, e2, r2);
        }
        i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t.exports = n : (o(n, e), e.Buffer = a), a.prototype = Object.create(i.prototype), o(i, a), a.from = function(t2, e2, r2) {
          if ("number" == typeof t2)
            throw new TypeError("Argument must not be a number");
          return i(t2, e2, r2);
        }, a.alloc = function(t2, e2, r2) {
          if ("number" != typeof t2)
            throw new TypeError("Argument must be a number");
          var n2 = i(t2);
          return void 0 !== e2 ? "string" == typeof r2 ? n2.fill(e2, r2) : n2.fill(e2) : n2.fill(0), n2;
        }, a.allocUnsafe = function(t2) {
          if ("number" != typeof t2)
            throw new TypeError("Argument must be a number");
          return i(t2);
        }, a.allocUnsafeSlow = function(t2) {
          if ("number" != typeof t2)
            throw new TypeError("Argument must be a number");
          return n.SlowBuffer(t2);
        };
      }, 7475: (t, e, r) => {
        "use strict";
        var n, i = r(4686), o = i.Buffer, a = {};
        for (n in i)
          i.hasOwnProperty(n) && "SlowBuffer" !== n && "Buffer" !== n && (a[n] = i[n]);
        var s = a.Buffer = {};
        for (n in o)
          o.hasOwnProperty(n) && "allocUnsafe" !== n && "allocUnsafeSlow" !== n && (s[n] = o[n]);
        if (a.Buffer.prototype = o.prototype, s.from && s.from !== Uint8Array.from || (s.from = function(t2, e2, r2) {
          if ("number" == typeof t2)
            throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof t2);
          if (t2 && void 0 === t2.length)
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t2);
          return o(t2, e2, r2);
        }), s.alloc || (s.alloc = function(t2, e2, r2) {
          if ("number" != typeof t2)
            throw new TypeError('The "size" argument must be of type number. Received type ' + typeof t2);
          if (t2 < 0 || t2 >= 2 * (1 << 30))
            throw new RangeError('The value "' + t2 + '" is invalid for option "size"');
          var n2 = o(t2);
          return e2 && 0 !== e2.length ? "string" == typeof r2 ? n2.fill(e2, r2) : n2.fill(e2) : n2.fill(0), n2;
        }), !a.kStringMaxLength)
          try {
            a.kStringMaxLength = process.binding("buffer").kStringMaxLength;
          } catch (t2) {
          }
        a.constants || (a.constants = { MAX_LENGTH: a.kMaxLength }, a.kStringMaxLength && (a.constants.MAX_STRING_LENGTH = a.kStringMaxLength)), t.exports = a;
      }, 2644: (t, e, r) => {
        "use strict";
        var n = r(8534), i = r(7517), o = r(708)(), a = r(1325), s = r(7379), f = n("%Math.floor%");
        t.exports = function(t2, e2) {
          if ("function" != typeof t2)
            throw new s("`fn` is not a function");
          if ("number" != typeof e2 || e2 < 0 || e2 > 4294967295 || f(e2) !== e2)
            throw new s("`length` must be a positive 32-bit integer");
          var r2 = arguments.length > 2 && !!arguments[2], n2 = true, h = true;
          if ("length" in t2 && a) {
            var u = a(t2, "length");
            u && !u.configurable && (n2 = false), u && !u.writable && (h = false);
          }
          return (n2 || h || !r2) && (o ? i(t2, "length", e2, true, true) : i(t2, "length", e2)), t2;
        };
      }, 9113: (t, e, r) => {
        var n = r(6671).Buffer;
        function i(t2, e2) {
          this._block = n.alloc(t2), this._finalSize = e2, this._blockSize = t2, this._len = 0;
        }
        i.prototype.update = function(t2, e2) {
          "string" == typeof t2 && (e2 = e2 || "utf8", t2 = n.from(t2, e2));
          for (var r2 = this._block, i2 = this._blockSize, o = t2.length, a = this._len, s = 0; s < o; ) {
            for (var f = a % i2, h = Math.min(o - s, i2 - f), u = 0; u < h; u++)
              r2[f + u] = t2[s + u];
            s += h, (a += h) % i2 == 0 && this._update(r2);
          }
          return this._len += o, this;
        }, i.prototype.digest = function(t2) {
          var e2 = this._len % this._blockSize;
          this._block[e2] = 128, this._block.fill(0, e2 + 1), e2 >= this._finalSize && (this._update(this._block), this._block.fill(0));
          var r2 = 8 * this._len;
          if (r2 <= 4294967295)
            this._block.writeUInt32BE(r2, this._blockSize - 4);
          else {
            var n2 = (4294967295 & r2) >>> 0, i2 = (r2 - n2) / 4294967296;
            this._block.writeUInt32BE(i2, this._blockSize - 8), this._block.writeUInt32BE(n2, this._blockSize - 4);
          }
          this._update(this._block);
          var o = this._hash();
          return t2 ? o.toString(t2) : o;
        }, i.prototype._update = function() {
          throw new Error("_update must be implemented by subclass");
        }, t.exports = i;
      }, 9273: (t, e, r) => {
        var n = t.exports = function(t2) {
          t2 = t2.toLowerCase();
          var e2 = n[t2];
          if (!e2)
            throw new Error(t2 + " is not supported (we accept pull requests)");
          return new e2();
        };
        n.sha = r(7519), n.sha1 = r(2496), n.sha224 = r(9031), n.sha256 = r(6630), n.sha384 = r(7718), n.sha512 = r(1863);
      }, 7519: (t, e, r) => {
        var n = r(6192), i = r(9113), o = r(6671).Buffer, a = [1518500249, 1859775393, -1894007588, -899497514], s = new Array(80);
        function f() {
          this.init(), this._w = s, i.call(this, 64, 56);
        }
        function h(t2) {
          return t2 << 30 | t2 >>> 2;
        }
        function u(t2, e2, r2, n2) {
          return 0 === t2 ? e2 & r2 | ~e2 & n2 : 2 === t2 ? e2 & r2 | e2 & n2 | r2 & n2 : e2 ^ r2 ^ n2;
        }
        n(f, i), f.prototype.init = function() {
          return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
        }, f.prototype._update = function(t2) {
          for (var e2, r2 = this._w, n2 = 0 | this._a, i2 = 0 | this._b, o2 = 0 | this._c, s2 = 0 | this._d, f2 = 0 | this._e, c = 0; c < 16; ++c)
            r2[c] = t2.readInt32BE(4 * c);
          for (; c < 80; ++c)
            r2[c] = r2[c - 3] ^ r2[c - 8] ^ r2[c - 14] ^ r2[c - 16];
          for (var d = 0; d < 80; ++d) {
            var l = ~~(d / 20), p = 0 | ((e2 = n2) << 5 | e2 >>> 27) + u(l, i2, o2, s2) + f2 + r2[d] + a[l];
            f2 = s2, s2 = o2, o2 = h(i2), i2 = n2, n2 = p;
          }
          this._a = n2 + this._a | 0, this._b = i2 + this._b | 0, this._c = o2 + this._c | 0, this._d = s2 + this._d | 0, this._e = f2 + this._e | 0;
        }, f.prototype._hash = function() {
          var t2 = o.allocUnsafe(20);
          return t2.writeInt32BE(0 | this._a, 0), t2.writeInt32BE(0 | this._b, 4), t2.writeInt32BE(0 | this._c, 8), t2.writeInt32BE(0 | this._d, 12), t2.writeInt32BE(0 | this._e, 16), t2;
        }, t.exports = f;
      }, 2496: (t, e, r) => {
        var n = r(6192), i = r(9113), o = r(6671).Buffer, a = [1518500249, 1859775393, -1894007588, -899497514], s = new Array(80);
        function f() {
          this.init(), this._w = s, i.call(this, 64, 56);
        }
        function h(t2) {
          return t2 << 5 | t2 >>> 27;
        }
        function u(t2) {
          return t2 << 30 | t2 >>> 2;
        }
        function c(t2, e2, r2, n2) {
          return 0 === t2 ? e2 & r2 | ~e2 & n2 : 2 === t2 ? e2 & r2 | e2 & n2 | r2 & n2 : e2 ^ r2 ^ n2;
        }
        n(f, i), f.prototype.init = function() {
          return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
        }, f.prototype._update = function(t2) {
          for (var e2, r2 = this._w, n2 = 0 | this._a, i2 = 0 | this._b, o2 = 0 | this._c, s2 = 0 | this._d, f2 = 0 | this._e, d = 0; d < 16; ++d)
            r2[d] = t2.readInt32BE(4 * d);
          for (; d < 80; ++d)
            r2[d] = (e2 = r2[d - 3] ^ r2[d - 8] ^ r2[d - 14] ^ r2[d - 16]) << 1 | e2 >>> 31;
          for (var l = 0; l < 80; ++l) {
            var p = ~~(l / 20), b = h(n2) + c(p, i2, o2, s2) + f2 + r2[l] + a[p] | 0;
            f2 = s2, s2 = o2, o2 = u(i2), i2 = n2, n2 = b;
          }
          this._a = n2 + this._a | 0, this._b = i2 + this._b | 0, this._c = o2 + this._c | 0, this._d = s2 + this._d | 0, this._e = f2 + this._e | 0;
        }, f.prototype._hash = function() {
          var t2 = o.allocUnsafe(20);
          return t2.writeInt32BE(0 | this._a, 0), t2.writeInt32BE(0 | this._b, 4), t2.writeInt32BE(0 | this._c, 8), t2.writeInt32BE(0 | this._d, 12), t2.writeInt32BE(0 | this._e, 16), t2;
        }, t.exports = f;
      }, 9031: (t, e, r) => {
        var n = r(6192), i = r(6630), o = r(9113), a = r(6671).Buffer, s = new Array(64);
        function f() {
          this.init(), this._w = s, o.call(this, 64, 56);
        }
        n(f, i), f.prototype.init = function() {
          return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this;
        }, f.prototype._hash = function() {
          var t2 = a.allocUnsafe(28);
          return t2.writeInt32BE(this._a, 0), t2.writeInt32BE(this._b, 4), t2.writeInt32BE(this._c, 8), t2.writeInt32BE(this._d, 12), t2.writeInt32BE(this._e, 16), t2.writeInt32BE(this._f, 20), t2.writeInt32BE(this._g, 24), t2;
        }, t.exports = f;
      }, 6630: (t, e, r) => {
        var n = r(6192), i = r(9113), o = r(6671).Buffer, a = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], s = new Array(64);
        function f() {
          this.init(), this._w = s, i.call(this, 64, 56);
        }
        function h(t2, e2, r2) {
          return r2 ^ t2 & (e2 ^ r2);
        }
        function u(t2, e2, r2) {
          return t2 & e2 | r2 & (t2 | e2);
        }
        function c(t2) {
          return (t2 >>> 2 | t2 << 30) ^ (t2 >>> 13 | t2 << 19) ^ (t2 >>> 22 | t2 << 10);
        }
        function d(t2) {
          return (t2 >>> 6 | t2 << 26) ^ (t2 >>> 11 | t2 << 21) ^ (t2 >>> 25 | t2 << 7);
        }
        function l(t2) {
          return (t2 >>> 7 | t2 << 25) ^ (t2 >>> 18 | t2 << 14) ^ t2 >>> 3;
        }
        n(f, i), f.prototype.init = function() {
          return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this;
        }, f.prototype._update = function(t2) {
          for (var e2, r2 = this._w, n2 = 0 | this._a, i2 = 0 | this._b, o2 = 0 | this._c, s2 = 0 | this._d, f2 = 0 | this._e, p = 0 | this._f, b = 0 | this._g, y = 0 | this._h, g = 0; g < 16; ++g)
            r2[g] = t2.readInt32BE(4 * g);
          for (; g < 64; ++g)
            r2[g] = 0 | (((e2 = r2[g - 2]) >>> 17 | e2 << 15) ^ (e2 >>> 19 | e2 << 13) ^ e2 >>> 10) + r2[g - 7] + l(r2[g - 15]) + r2[g - 16];
          for (var m = 0; m < 64; ++m) {
            var v = y + d(f2) + h(f2, p, b) + a[m] + r2[m] | 0, w = c(n2) + u(n2, i2, o2) | 0;
            y = b, b = p, p = f2, f2 = s2 + v | 0, s2 = o2, o2 = i2, i2 = n2, n2 = v + w | 0;
          }
          this._a = n2 + this._a | 0, this._b = i2 + this._b | 0, this._c = o2 + this._c | 0, this._d = s2 + this._d | 0, this._e = f2 + this._e | 0, this._f = p + this._f | 0, this._g = b + this._g | 0, this._h = y + this._h | 0;
        }, f.prototype._hash = function() {
          var t2 = o.allocUnsafe(32);
          return t2.writeInt32BE(this._a, 0), t2.writeInt32BE(this._b, 4), t2.writeInt32BE(this._c, 8), t2.writeInt32BE(this._d, 12), t2.writeInt32BE(this._e, 16), t2.writeInt32BE(this._f, 20), t2.writeInt32BE(this._g, 24), t2.writeInt32BE(this._h, 28), t2;
        }, t.exports = f;
      }, 7718: (t, e, r) => {
        var n = r(6192), i = r(1863), o = r(9113), a = r(6671).Buffer, s = new Array(160);
        function f() {
          this.init(), this._w = s, o.call(this, 128, 112);
        }
        n(f, i), f.prototype.init = function() {
          return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this;
        }, f.prototype._hash = function() {
          var t2 = a.allocUnsafe(48);
          function e2(e3, r2, n2) {
            t2.writeInt32BE(e3, n2), t2.writeInt32BE(r2, n2 + 4);
          }
          return e2(this._ah, this._al, 0), e2(this._bh, this._bl, 8), e2(this._ch, this._cl, 16), e2(this._dh, this._dl, 24), e2(this._eh, this._el, 32), e2(this._fh, this._fl, 40), t2;
        }, t.exports = f;
      }, 1863: (t, e, r) => {
        var n = r(6192), i = r(9113), o = r(6671).Buffer, a = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591], s = new Array(160);
        function f() {
          this.init(), this._w = s, i.call(this, 128, 112);
        }
        function h(t2, e2, r2) {
          return r2 ^ t2 & (e2 ^ r2);
        }
        function u(t2, e2, r2) {
          return t2 & e2 | r2 & (t2 | e2);
        }
        function c(t2, e2) {
          return (t2 >>> 28 | e2 << 4) ^ (e2 >>> 2 | t2 << 30) ^ (e2 >>> 7 | t2 << 25);
        }
        function d(t2, e2) {
          return (t2 >>> 14 | e2 << 18) ^ (t2 >>> 18 | e2 << 14) ^ (e2 >>> 9 | t2 << 23);
        }
        function l(t2, e2) {
          return (t2 >>> 1 | e2 << 31) ^ (t2 >>> 8 | e2 << 24) ^ t2 >>> 7;
        }
        function p(t2, e2) {
          return (t2 >>> 1 | e2 << 31) ^ (t2 >>> 8 | e2 << 24) ^ (t2 >>> 7 | e2 << 25);
        }
        function b(t2, e2) {
          return (t2 >>> 19 | e2 << 13) ^ (e2 >>> 29 | t2 << 3) ^ t2 >>> 6;
        }
        function y(t2, e2) {
          return (t2 >>> 19 | e2 << 13) ^ (e2 >>> 29 | t2 << 3) ^ (t2 >>> 6 | e2 << 26);
        }
        function g(t2, e2) {
          return t2 >>> 0 < e2 >>> 0 ? 1 : 0;
        }
        n(f, i), f.prototype.init = function() {
          return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this;
        }, f.prototype._update = function(t2) {
          for (var e2 = this._w, r2 = 0 | this._ah, n2 = 0 | this._bh, i2 = 0 | this._ch, o2 = 0 | this._dh, s2 = 0 | this._eh, f2 = 0 | this._fh, m = 0 | this._gh, v = 0 | this._hh, w = 0 | this._al, _ = 0 | this._bl, S = 0 | this._cl, E = 0 | this._dl, M = 0 | this._el, A = 0 | this._fl, k = 0 | this._gl, B = 0 | this._hl, O = 0; O < 32; O += 2)
            e2[O] = t2.readInt32BE(4 * O), e2[O + 1] = t2.readInt32BE(4 * O + 4);
          for (; O < 160; O += 2) {
            var x = e2[O - 30], I = e2[O - 30 + 1], R = l(x, I), T = p(I, x), P = b(x = e2[O - 4], I = e2[O - 4 + 1]), N = y(I, x), j = e2[O - 14], D = e2[O - 14 + 1], L = e2[O - 32], C = e2[O - 32 + 1], U = T + D | 0, q = R + j + g(U, T) | 0;
            q = (q = q + P + g(U = U + N | 0, N) | 0) + L + g(U = U + C | 0, C) | 0, e2[O] = q, e2[O + 1] = U;
          }
          for (var F = 0; F < 160; F += 2) {
            q = e2[F], U = e2[F + 1];
            var z = u(r2, n2, i2), K = u(w, _, S), G = c(r2, w), H = c(w, r2), $ = d(s2, M), W = d(M, s2), V = a[F], Y = a[F + 1], Z = h(s2, f2, m), X = h(M, A, k), J = B + W | 0, Q = v + $ + g(J, B) | 0;
            Q = (Q = (Q = Q + Z + g(J = J + X | 0, X) | 0) + V + g(J = J + Y | 0, Y) | 0) + q + g(J = J + U | 0, U) | 0;
            var tt = H + K | 0, et = G + z + g(tt, H) | 0;
            v = m, B = k, m = f2, k = A, f2 = s2, A = M, s2 = o2 + Q + g(M = E + J | 0, E) | 0, o2 = i2, E = S, i2 = n2, S = _, n2 = r2, _ = w, r2 = Q + et + g(w = J + tt | 0, J) | 0;
          }
          this._al = this._al + w | 0, this._bl = this._bl + _ | 0, this._cl = this._cl + S | 0, this._dl = this._dl + E | 0, this._el = this._el + M | 0, this._fl = this._fl + A | 0, this._gl = this._gl + k | 0, this._hl = this._hl + B | 0, this._ah = this._ah + r2 + g(this._al, w) | 0, this._bh = this._bh + n2 + g(this._bl, _) | 0, this._ch = this._ch + i2 + g(this._cl, S) | 0, this._dh = this._dh + o2 + g(this._dl, E) | 0, this._eh = this._eh + s2 + g(this._el, M) | 0, this._fh = this._fh + f2 + g(this._fl, A) | 0, this._gh = this._gh + m + g(this._gl, k) | 0, this._hh = this._hh + v + g(this._hl, B) | 0;
        }, f.prototype._hash = function() {
          var t2 = o.allocUnsafe(64);
          function e2(e3, r2, n2) {
            t2.writeInt32BE(e3, n2), t2.writeInt32BE(r2, n2 + 4);
          }
          return e2(this._ah, this._al, 0), e2(this._bh, this._bl, 8), e2(this._ch, this._cl, 16), e2(this._dh, this._dl, 24), e2(this._eh, this._el, 32), e2(this._fh, this._fl, 40), e2(this._gh, this._gl, 48), e2(this._hh, this._hl, 56), t2;
        }, t.exports = f;
      }, 896: (t, e, r) => {
        t.exports = i;
        var n = r(9784).EventEmitter;
        function i() {
          n.call(this);
        }
        r(6192)(i, n), i.Readable = r(4324), i.Writable = r(6868), i.Duplex = r(5606), i.Transform = r(4914), i.PassThrough = r(9648), i.finished = r(2862), i.pipeline = r(110), i.Stream = i, i.prototype.pipe = function(t2, e2) {
          var r2 = this;
          function i2(e3) {
            t2.writable && false === t2.write(e3) && r2.pause && r2.pause();
          }
          function o() {
            r2.readable && r2.resume && r2.resume();
          }
          r2.on("data", i2), t2.on("drain", o), t2._isStdio || e2 && false === e2.end || (r2.on("end", s), r2.on("close", f));
          var a = false;
          function s() {
            a || (a = true, t2.end());
          }
          function f() {
            a || (a = true, "function" == typeof t2.destroy && t2.destroy());
          }
          function h(t3) {
            if (u(), 0 === n.listenerCount(this, "error"))
              throw t3;
          }
          function u() {
            r2.removeListener("data", i2), t2.removeListener("drain", o), r2.removeListener("end", s), r2.removeListener("close", f), r2.removeListener("error", h), t2.removeListener("error", h), r2.removeListener("end", u), r2.removeListener("close", u), t2.removeListener("close", u);
          }
          return r2.on("error", h), t2.on("error", h), r2.on("end", u), r2.on("close", u), t2.on("close", u), t2.emit("pipe", r2), t2;
        };
      }, 5226: (t, e, r) => {
        "use strict";
        var n = r(2947).Buffer, i = n.isEncoding || function(t2) {
          switch ((t2 = "" + t2) && t2.toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
            case "raw":
              return true;
            default:
              return false;
          }
        };
        function o(t2) {
          var e2;
          switch (this.encoding = function(t3) {
            var e3 = function(t4) {
              if (!t4)
                return "utf8";
              for (var e4; ; )
                switch (t4) {
                  case "utf8":
                  case "utf-8":
                    return "utf8";
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return "utf16le";
                  case "latin1":
                  case "binary":
                    return "latin1";
                  case "base64":
                  case "ascii":
                  case "hex":
                    return t4;
                  default:
                    if (e4)
                      return;
                    t4 = ("" + t4).toLowerCase(), e4 = true;
                }
            }(t3);
            if ("string" != typeof e3 && (n.isEncoding === i || !i(t3)))
              throw new Error("Unknown encoding: " + t3);
            return e3 || t3;
          }(t2), this.encoding) {
            case "utf16le":
              this.text = f, this.end = h, e2 = 4;
              break;
            case "utf8":
              this.fillLast = s, e2 = 4;
              break;
            case "base64":
              this.text = u, this.end = c, e2 = 3;
              break;
            default:
              return this.write = d, void (this.end = l);
          }
          this.lastNeed = 0, this.lastTotal = 0, this.lastChar = n.allocUnsafe(e2);
        }
        function a(t2) {
          return t2 <= 127 ? 0 : t2 >> 5 == 6 ? 2 : t2 >> 4 == 14 ? 3 : t2 >> 3 == 30 ? 4 : t2 >> 6 == 2 ? -1 : -2;
        }
        function s(t2) {
          var e2 = this.lastTotal - this.lastNeed, r2 = function(t3, e3, r3) {
            if (128 != (192 & e3[0]))
              return t3.lastNeed = 0, "\uFFFD";
            if (t3.lastNeed > 1 && e3.length > 1) {
              if (128 != (192 & e3[1]))
                return t3.lastNeed = 1, "\uFFFD";
              if (t3.lastNeed > 2 && e3.length > 2 && 128 != (192 & e3[2]))
                return t3.lastNeed = 2, "\uFFFD";
            }
          }(this, t2);
          return void 0 !== r2 ? r2 : this.lastNeed <= t2.length ? (t2.copy(this.lastChar, e2, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (t2.copy(this.lastChar, e2, 0, t2.length), void (this.lastNeed -= t2.length));
        }
        function f(t2, e2) {
          if ((t2.length - e2) % 2 == 0) {
            var r2 = t2.toString("utf16le", e2);
            if (r2) {
              var n2 = r2.charCodeAt(r2.length - 1);
              if (n2 >= 55296 && n2 <= 56319)
                return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t2[t2.length - 2], this.lastChar[1] = t2[t2.length - 1], r2.slice(0, -1);
            }
            return r2;
          }
          return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t2[t2.length - 1], t2.toString("utf16le", e2, t2.length - 1);
        }
        function h(t2) {
          var e2 = t2 && t2.length ? this.write(t2) : "";
          if (this.lastNeed) {
            var r2 = this.lastTotal - this.lastNeed;
            return e2 + this.lastChar.toString("utf16le", 0, r2);
          }
          return e2;
        }
        function u(t2, e2) {
          var r2 = (t2.length - e2) % 3;
          return 0 === r2 ? t2.toString("base64", e2) : (this.lastNeed = 3 - r2, this.lastTotal = 3, 1 === r2 ? this.lastChar[0] = t2[t2.length - 1] : (this.lastChar[0] = t2[t2.length - 2], this.lastChar[1] = t2[t2.length - 1]), t2.toString("base64", e2, t2.length - r2));
        }
        function c(t2) {
          var e2 = t2 && t2.length ? this.write(t2) : "";
          return this.lastNeed ? e2 + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e2;
        }
        function d(t2) {
          return t2.toString(this.encoding);
        }
        function l(t2) {
          return t2 && t2.length ? this.write(t2) : "";
        }
        e.I = o, o.prototype.write = function(t2) {
          if (0 === t2.length)
            return "";
          var e2, r2;
          if (this.lastNeed) {
            if (void 0 === (e2 = this.fillLast(t2)))
              return "";
            r2 = this.lastNeed, this.lastNeed = 0;
          } else
            r2 = 0;
          return r2 < t2.length ? e2 ? e2 + this.text(t2, r2) : this.text(t2, r2) : e2 || "";
        }, o.prototype.end = function(t2) {
          var e2 = t2 && t2.length ? this.write(t2) : "";
          return this.lastNeed ? e2 + "\uFFFD" : e2;
        }, o.prototype.text = function(t2, e2) {
          var r2 = function(t3, e3, r3) {
            var n3 = e3.length - 1;
            if (n3 < r3)
              return 0;
            var i2 = a(e3[n3]);
            return i2 >= 0 ? (i2 > 0 && (t3.lastNeed = i2 - 1), i2) : --n3 < r3 || -2 === i2 ? 0 : (i2 = a(e3[n3])) >= 0 ? (i2 > 0 && (t3.lastNeed = i2 - 2), i2) : --n3 < r3 || -2 === i2 ? 0 : (i2 = a(e3[n3])) >= 0 ? (i2 > 0 && (2 === i2 ? i2 = 0 : t3.lastNeed = i2 - 3), i2) : 0;
          }(this, t2, e2);
          if (!this.lastNeed)
            return t2.toString("utf8", e2);
          this.lastTotal = r2;
          var n2 = t2.length - (r2 - this.lastNeed);
          return t2.copy(this.lastChar, 0, n2), t2.toString("utf8", e2, n2);
        }, o.prototype.fillLast = function(t2) {
          if (this.lastNeed <= t2.length)
            return t2.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
          t2.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t2.length), this.lastNeed -= t2.length;
        };
      }, 4105: (t, e, r) => {
        "use strict";
        var n = r(6671).Buffer, i = n.isEncoding || function(t2) {
          switch ((t2 = "" + t2) && t2.toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
            case "raw":
              return true;
            default:
              return false;
          }
        };
        function o(t2) {
          var e2;
          switch (this.encoding = function(t3) {
            var e3 = function(t4) {
              if (!t4)
                return "utf8";
              for (var e4; ; )
                switch (t4) {
                  case "utf8":
                  case "utf-8":
                    return "utf8";
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return "utf16le";
                  case "latin1":
                  case "binary":
                    return "latin1";
                  case "base64":
                  case "ascii":
                  case "hex":
                    return t4;
                  default:
                    if (e4)
                      return;
                    t4 = ("" + t4).toLowerCase(), e4 = true;
                }
            }(t3);
            if ("string" != typeof e3 && (n.isEncoding === i || !i(t3)))
              throw new Error("Unknown encoding: " + t3);
            return e3 || t3;
          }(t2), this.encoding) {
            case "utf16le":
              this.text = f, this.end = h, e2 = 4;
              break;
            case "utf8":
              this.fillLast = s, e2 = 4;
              break;
            case "base64":
              this.text = u, this.end = c, e2 = 3;
              break;
            default:
              return this.write = d, void (this.end = l);
          }
          this.lastNeed = 0, this.lastTotal = 0, this.lastChar = n.allocUnsafe(e2);
        }
        function a(t2) {
          return t2 <= 127 ? 0 : t2 >> 5 == 6 ? 2 : t2 >> 4 == 14 ? 3 : t2 >> 3 == 30 ? 4 : t2 >> 6 == 2 ? -1 : -2;
        }
        function s(t2) {
          var e2 = this.lastTotal - this.lastNeed, r2 = function(t3, e3, r3) {
            if (128 != (192 & e3[0]))
              return t3.lastNeed = 0, "\uFFFD";
            if (t3.lastNeed > 1 && e3.length > 1) {
              if (128 != (192 & e3[1]))
                return t3.lastNeed = 1, "\uFFFD";
              if (t3.lastNeed > 2 && e3.length > 2 && 128 != (192 & e3[2]))
                return t3.lastNeed = 2, "\uFFFD";
            }
          }(this, t2);
          return void 0 !== r2 ? r2 : this.lastNeed <= t2.length ? (t2.copy(this.lastChar, e2, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (t2.copy(this.lastChar, e2, 0, t2.length), void (this.lastNeed -= t2.length));
        }
        function f(t2, e2) {
          if ((t2.length - e2) % 2 == 0) {
            var r2 = t2.toString("utf16le", e2);
            if (r2) {
              var n2 = r2.charCodeAt(r2.length - 1);
              if (n2 >= 55296 && n2 <= 56319)
                return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t2[t2.length - 2], this.lastChar[1] = t2[t2.length - 1], r2.slice(0, -1);
            }
            return r2;
          }
          return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t2[t2.length - 1], t2.toString("utf16le", e2, t2.length - 1);
        }
        function h(t2) {
          var e2 = t2 && t2.length ? this.write(t2) : "";
          if (this.lastNeed) {
            var r2 = this.lastTotal - this.lastNeed;
            return e2 + this.lastChar.toString("utf16le", 0, r2);
          }
          return e2;
        }
        function u(t2, e2) {
          var r2 = (t2.length - e2) % 3;
          return 0 === r2 ? t2.toString("base64", e2) : (this.lastNeed = 3 - r2, this.lastTotal = 3, 1 === r2 ? this.lastChar[0] = t2[t2.length - 1] : (this.lastChar[0] = t2[t2.length - 2], this.lastChar[1] = t2[t2.length - 1]), t2.toString("base64", e2, t2.length - r2));
        }
        function c(t2) {
          var e2 = t2 && t2.length ? this.write(t2) : "";
          return this.lastNeed ? e2 + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e2;
        }
        function d(t2) {
          return t2.toString(this.encoding);
        }
        function l(t2) {
          return t2 && t2.length ? this.write(t2) : "";
        }
        e.I = o, o.prototype.write = function(t2) {
          if (0 === t2.length)
            return "";
          var e2, r2;
          if (this.lastNeed) {
            if (void 0 === (e2 = this.fillLast(t2)))
              return "";
            r2 = this.lastNeed, this.lastNeed = 0;
          } else
            r2 = 0;
          return r2 < t2.length ? e2 ? e2 + this.text(t2, r2) : this.text(t2, r2) : e2 || "";
        }, o.prototype.end = function(t2) {
          var e2 = t2 && t2.length ? this.write(t2) : "";
          return this.lastNeed ? e2 + "\uFFFD" : e2;
        }, o.prototype.text = function(t2, e2) {
          var r2 = function(t3, e3, r3) {
            var n3 = e3.length - 1;
            if (n3 < r3)
              return 0;
            var i2 = a(e3[n3]);
            return i2 >= 0 ? (i2 > 0 && (t3.lastNeed = i2 - 1), i2) : --n3 < r3 || -2 === i2 ? 0 : (i2 = a(e3[n3])) >= 0 ? (i2 > 0 && (t3.lastNeed = i2 - 2), i2) : --n3 < r3 || -2 === i2 ? 0 : (i2 = a(e3[n3])) >= 0 ? (i2 > 0 && (2 === i2 ? i2 = 0 : t3.lastNeed = i2 - 3), i2) : 0;
          }(this, t2, e2);
          if (!this.lastNeed)
            return t2.toString("utf8", e2);
          this.lastTotal = r2;
          var n2 = t2.length - (r2 - this.lastNeed);
          return t2.copy(this.lastChar, 0, n2), t2.toString("utf8", e2, n2);
        }, o.prototype.fillLast = function(t2) {
          if (this.lastNeed <= t2.length)
            return t2.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
          t2.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t2.length), this.lastNeed -= t2.length;
        };
      }, 1348: (t, e, r) => {
        function n(t2) {
          try {
            if (!r.g.localStorage)
              return false;
          } catch (t3) {
            return false;
          }
          var e2 = r.g.localStorage[t2];
          return null != e2 && "true" === String(e2).toLowerCase();
        }
        t.exports = function(t2, e2) {
          if (n("noDeprecation"))
            return t2;
          var r2 = false;
          return function() {
            if (!r2) {
              if (n("throwDeprecation"))
                throw new Error(e2);
              n("traceDeprecation") ? console.trace(e2) : console.warn(e2), r2 = true;
            }
            return t2.apply(this, arguments);
          };
        };
      }, 8293: (t) => {
        t.exports = function(t2) {
          return t2 && "object" == typeof t2 && "function" == typeof t2.copy && "function" == typeof t2.fill && "function" == typeof t2.readUInt8;
        };
      }, 7486: (t, e, r) => {
        "use strict";
        var n = r(8286), i = r(9155), o = r(1337), a = r(9345);
        function s(t2) {
          return t2.call.bind(t2);
        }
        var f = "undefined" != typeof BigInt, h = "undefined" != typeof Symbol, u = s(Object.prototype.toString), c = s(Number.prototype.valueOf), d = s(String.prototype.valueOf), l = s(Boolean.prototype.valueOf);
        if (f)
          var p = s(BigInt.prototype.valueOf);
        if (h)
          var b = s(Symbol.prototype.valueOf);
        function y(t2, e2) {
          if ("object" != typeof t2)
            return false;
          try {
            return e2(t2), true;
          } catch (t3) {
            return false;
          }
        }
        function g(t2) {
          return "[object Map]" === u(t2);
        }
        function m(t2) {
          return "[object Set]" === u(t2);
        }
        function v(t2) {
          return "[object WeakMap]" === u(t2);
        }
        function w(t2) {
          return "[object WeakSet]" === u(t2);
        }
        function _(t2) {
          return "[object ArrayBuffer]" === u(t2);
        }
        function S(t2) {
          return "undefined" != typeof ArrayBuffer && (_.working ? _(t2) : t2 instanceof ArrayBuffer);
        }
        function E(t2) {
          return "[object DataView]" === u(t2);
        }
        function M(t2) {
          return "undefined" != typeof DataView && (E.working ? E(t2) : t2 instanceof DataView);
        }
        e.isArgumentsObject = n, e.isGeneratorFunction = i, e.isTypedArray = a, e.isPromise = function(t2) {
          return "undefined" != typeof Promise && t2 instanceof Promise || null !== t2 && "object" == typeof t2 && "function" == typeof t2.then && "function" == typeof t2.catch;
        }, e.isArrayBufferView = function(t2) {
          return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t2) : a(t2) || M(t2);
        }, e.isUint8Array = function(t2) {
          return "Uint8Array" === o(t2);
        }, e.isUint8ClampedArray = function(t2) {
          return "Uint8ClampedArray" === o(t2);
        }, e.isUint16Array = function(t2) {
          return "Uint16Array" === o(t2);
        }, e.isUint32Array = function(t2) {
          return "Uint32Array" === o(t2);
        }, e.isInt8Array = function(t2) {
          return "Int8Array" === o(t2);
        }, e.isInt16Array = function(t2) {
          return "Int16Array" === o(t2);
        }, e.isInt32Array = function(t2) {
          return "Int32Array" === o(t2);
        }, e.isFloat32Array = function(t2) {
          return "Float32Array" === o(t2);
        }, e.isFloat64Array = function(t2) {
          return "Float64Array" === o(t2);
        }, e.isBigInt64Array = function(t2) {
          return "BigInt64Array" === o(t2);
        }, e.isBigUint64Array = function(t2) {
          return "BigUint64Array" === o(t2);
        }, g.working = "undefined" != typeof Map && g(/* @__PURE__ */ new Map()), e.isMap = function(t2) {
          return "undefined" != typeof Map && (g.working ? g(t2) : t2 instanceof Map);
        }, m.working = "undefined" != typeof Set && m(/* @__PURE__ */ new Set()), e.isSet = function(t2) {
          return "undefined" != typeof Set && (m.working ? m(t2) : t2 instanceof Set);
        }, v.working = "undefined" != typeof WeakMap && v(/* @__PURE__ */ new WeakMap()), e.isWeakMap = function(t2) {
          return "undefined" != typeof WeakMap && (v.working ? v(t2) : t2 instanceof WeakMap);
        }, w.working = "undefined" != typeof WeakSet && w(/* @__PURE__ */ new WeakSet()), e.isWeakSet = function(t2) {
          return w(t2);
        }, _.working = "undefined" != typeof ArrayBuffer && _(new ArrayBuffer()), e.isArrayBuffer = S, E.working = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView && E(new DataView(new ArrayBuffer(1), 0, 1)), e.isDataView = M;
        var A = "undefined" != typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;
        function k(t2) {
          return "[object SharedArrayBuffer]" === u(t2);
        }
        function B(t2) {
          return void 0 !== A && (void 0 === k.working && (k.working = k(new A())), k.working ? k(t2) : t2 instanceof A);
        }
        function O(t2) {
          return y(t2, c);
        }
        function x(t2) {
          return y(t2, d);
        }
        function I(t2) {
          return y(t2, l);
        }
        function R(t2) {
          return f && y(t2, p);
        }
        function T(t2) {
          return h && y(t2, b);
        }
        e.isSharedArrayBuffer = B, e.isAsyncFunction = function(t2) {
          return "[object AsyncFunction]" === u(t2);
        }, e.isMapIterator = function(t2) {
          return "[object Map Iterator]" === u(t2);
        }, e.isSetIterator = function(t2) {
          return "[object Set Iterator]" === u(t2);
        }, e.isGeneratorObject = function(t2) {
          return "[object Generator]" === u(t2);
        }, e.isWebAssemblyCompiledModule = function(t2) {
          return "[object WebAssembly.Module]" === u(t2);
        }, e.isNumberObject = O, e.isStringObject = x, e.isBooleanObject = I, e.isBigIntObject = R, e.isSymbolObject = T, e.isBoxedPrimitive = function(t2) {
          return O(t2) || x(t2) || I(t2) || R(t2) || T(t2);
        }, e.isAnyArrayBuffer = function(t2) {
          return "undefined" != typeof Uint8Array && (S(t2) || B(t2));
        }, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(t2) {
          Object.defineProperty(e, t2, { enumerable: false, value: function() {
            throw new Error(t2 + " is not supported in userland");
          } });
        });
      }, 9983: (t, e, r) => {
        var n = Object.getOwnPropertyDescriptors || function(t2) {
          for (var e2 = Object.keys(t2), r2 = {}, n2 = 0; n2 < e2.length; n2++)
            r2[e2[n2]] = Object.getOwnPropertyDescriptor(t2, e2[n2]);
          return r2;
        }, i = /%[sdj%]/g;
        e.format = function(t2) {
          if (!m(t2)) {
            for (var e2 = [], r2 = 0; r2 < arguments.length; r2++)
              e2.push(f(arguments[r2]));
            return e2.join(" ");
          }
          r2 = 1;
          for (var n2 = arguments, o2 = n2.length, a2 = String(t2).replace(i, function(t3) {
            if ("%%" === t3)
              return "%";
            if (r2 >= o2)
              return t3;
            switch (t3) {
              case "%s":
                return String(n2[r2++]);
              case "%d":
                return Number(n2[r2++]);
              case "%j":
                try {
                  return JSON.stringify(n2[r2++]);
                } catch (t4) {
                  return "[Circular]";
                }
              default:
                return t3;
            }
          }), s2 = n2[r2]; r2 < o2; s2 = n2[++r2])
            y(s2) || !_(s2) ? a2 += " " + s2 : a2 += " " + f(s2);
          return a2;
        }, e.deprecate = function(t2, r2) {
          if ("undefined" != typeof process && true === process.noDeprecation)
            return t2;
          if ("undefined" == typeof process)
            return function() {
              return e.deprecate(t2, r2).apply(this, arguments);
            };
          var n2 = false;
          return function() {
            if (!n2) {
              if (process.throwDeprecation)
                throw new Error(r2);
              process.traceDeprecation ? console.trace(r2) : console.error(r2), n2 = true;
            }
            return t2.apply(this, arguments);
          };
        };
        var o = {}, a = /^$/;
        if (process.env.NODE_DEBUG) {
          var s = process.env.NODE_DEBUG;
          s = s.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), a = new RegExp("^" + s + "$", "i");
        }
        function f(t2, r2) {
          var n2 = { seen: [], stylize: u };
          return arguments.length >= 3 && (n2.depth = arguments[2]), arguments.length >= 4 && (n2.colors = arguments[3]), b(r2) ? n2.showHidden = r2 : r2 && e._extend(n2, r2), v(n2.showHidden) && (n2.showHidden = false), v(n2.depth) && (n2.depth = 2), v(n2.colors) && (n2.colors = false), v(n2.customInspect) && (n2.customInspect = true), n2.colors && (n2.stylize = h), c(n2, t2, n2.depth);
        }
        function h(t2, e2) {
          var r2 = f.styles[e2];
          return r2 ? "\x1B[" + f.colors[r2][0] + "m" + t2 + "\x1B[" + f.colors[r2][1] + "m" : t2;
        }
        function u(t2, e2) {
          return t2;
        }
        function c(t2, r2, n2) {
          if (t2.customInspect && r2 && M(r2.inspect) && r2.inspect !== e.inspect && (!r2.constructor || r2.constructor.prototype !== r2)) {
            var i2 = r2.inspect(n2, t2);
            return m(i2) || (i2 = c(t2, i2, n2)), i2;
          }
          var o2 = function(t3, e2) {
            if (v(e2))
              return t3.stylize("undefined", "undefined");
            if (m(e2)) {
              var r3 = "'" + JSON.stringify(e2).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
              return t3.stylize(r3, "string");
            }
            return g(e2) ? t3.stylize("" + e2, "number") : b(e2) ? t3.stylize("" + e2, "boolean") : y(e2) ? t3.stylize("null", "null") : void 0;
          }(t2, r2);
          if (o2)
            return o2;
          var a2 = Object.keys(r2), s2 = function(t3) {
            var e2 = {};
            return t3.forEach(function(t4, r3) {
              e2[t4] = true;
            }), e2;
          }(a2);
          if (t2.showHidden && (a2 = Object.getOwnPropertyNames(r2)), E(r2) && (a2.indexOf("message") >= 0 || a2.indexOf("description") >= 0))
            return d(r2);
          if (0 === a2.length) {
            if (M(r2)) {
              var f2 = r2.name ? ": " + r2.name : "";
              return t2.stylize("[Function" + f2 + "]", "special");
            }
            if (w(r2))
              return t2.stylize(RegExp.prototype.toString.call(r2), "regexp");
            if (S(r2))
              return t2.stylize(Date.prototype.toString.call(r2), "date");
            if (E(r2))
              return d(r2);
          }
          var h2, u2 = "", _2 = false, A2 = ["{", "}"];
          return p(r2) && (_2 = true, A2 = ["[", "]"]), M(r2) && (u2 = " [Function" + (r2.name ? ": " + r2.name : "") + "]"), w(r2) && (u2 = " " + RegExp.prototype.toString.call(r2)), S(r2) && (u2 = " " + Date.prototype.toUTCString.call(r2)), E(r2) && (u2 = " " + d(r2)), 0 !== a2.length || _2 && 0 != r2.length ? n2 < 0 ? w(r2) ? t2.stylize(RegExp.prototype.toString.call(r2), "regexp") : t2.stylize("[Object]", "special") : (t2.seen.push(r2), h2 = _2 ? function(t3, e2, r3, n3, i3) {
            for (var o3 = [], a3 = 0, s3 = e2.length; a3 < s3; ++a3)
              O(e2, String(a3)) ? o3.push(l(t3, e2, r3, n3, String(a3), true)) : o3.push("");
            return i3.forEach(function(i4) {
              i4.match(/^\d+$/) || o3.push(l(t3, e2, r3, n3, i4, true));
            }), o3;
          }(t2, r2, n2, s2, a2) : a2.map(function(e2) {
            return l(t2, r2, n2, s2, e2, _2);
          }), t2.seen.pop(), function(t3, e2, r3) {
            return t3.reduce(function(t4, e3) {
              return e3.indexOf("\n"), t4 + e3.replace(/\u001b\[\d\d?m/g, "").length + 1;
            }, 0) > 60 ? r3[0] + ("" === e2 ? "" : e2 + "\n ") + " " + t3.join(",\n  ") + " " + r3[1] : r3[0] + e2 + " " + t3.join(", ") + " " + r3[1];
          }(h2, u2, A2)) : A2[0] + u2 + A2[1];
        }
        function d(t2) {
          return "[" + Error.prototype.toString.call(t2) + "]";
        }
        function l(t2, e2, r2, n2, i2, o2) {
          var a2, s2, f2;
          if ((f2 = Object.getOwnPropertyDescriptor(e2, i2) || { value: e2[i2] }).get ? s2 = f2.set ? t2.stylize("[Getter/Setter]", "special") : t2.stylize("[Getter]", "special") : f2.set && (s2 = t2.stylize("[Setter]", "special")), O(n2, i2) || (a2 = "[" + i2 + "]"), s2 || (t2.seen.indexOf(f2.value) < 0 ? (s2 = y(r2) ? c(t2, f2.value, null) : c(t2, f2.value, r2 - 1)).indexOf("\n") > -1 && (s2 = o2 ? s2.split("\n").map(function(t3) {
            return "  " + t3;
          }).join("\n").slice(2) : "\n" + s2.split("\n").map(function(t3) {
            return "   " + t3;
          }).join("\n")) : s2 = t2.stylize("[Circular]", "special")), v(a2)) {
            if (o2 && i2.match(/^\d+$/))
              return s2;
            (a2 = JSON.stringify("" + i2)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a2 = a2.slice(1, -1), a2 = t2.stylize(a2, "name")) : (a2 = a2.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), a2 = t2.stylize(a2, "string"));
          }
          return a2 + ": " + s2;
        }
        function p(t2) {
          return Array.isArray(t2);
        }
        function b(t2) {
          return "boolean" == typeof t2;
        }
        function y(t2) {
          return null === t2;
        }
        function g(t2) {
          return "number" == typeof t2;
        }
        function m(t2) {
          return "string" == typeof t2;
        }
        function v(t2) {
          return void 0 === t2;
        }
        function w(t2) {
          return _(t2) && "[object RegExp]" === A(t2);
        }
        function _(t2) {
          return "object" == typeof t2 && null !== t2;
        }
        function S(t2) {
          return _(t2) && "[object Date]" === A(t2);
        }
        function E(t2) {
          return _(t2) && ("[object Error]" === A(t2) || t2 instanceof Error);
        }
        function M(t2) {
          return "function" == typeof t2;
        }
        function A(t2) {
          return Object.prototype.toString.call(t2);
        }
        function k(t2) {
          return t2 < 10 ? "0" + t2.toString(10) : t2.toString(10);
        }
        e.debuglog = function(t2) {
          if (t2 = t2.toUpperCase(), !o[t2])
            if (a.test(t2)) {
              var r2 = process.pid;
              o[t2] = function() {
                var n2 = e.format.apply(e, arguments);
                console.error("%s %d: %s", t2, r2, n2);
              };
            } else
              o[t2] = function() {
              };
          return o[t2];
        }, e.inspect = f, f.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] }, f.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" }, e.types = r(7486), e.isArray = p, e.isBoolean = b, e.isNull = y, e.isNullOrUndefined = function(t2) {
          return null == t2;
        }, e.isNumber = g, e.isString = m, e.isSymbol = function(t2) {
          return "symbol" == typeof t2;
        }, e.isUndefined = v, e.isRegExp = w, e.types.isRegExp = w, e.isObject = _, e.isDate = S, e.types.isDate = S, e.isError = E, e.types.isNativeError = E, e.isFunction = M, e.isPrimitive = function(t2) {
          return null === t2 || "boolean" == typeof t2 || "number" == typeof t2 || "string" == typeof t2 || "symbol" == typeof t2 || void 0 === t2;
        }, e.isBuffer = r(8293);
        var B = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        function O(t2, e2) {
          return Object.prototype.hasOwnProperty.call(t2, e2);
        }
        e.log = function() {
          var t2, r2;
          console.log("%s - %s", (r2 = [k((t2 = /* @__PURE__ */ new Date()).getHours()), k(t2.getMinutes()), k(t2.getSeconds())].join(":"), [t2.getDate(), B[t2.getMonth()], r2].join(" ")), e.format.apply(e, arguments));
        }, e.inherits = r(6192), e._extend = function(t2, e2) {
          if (!e2 || !_(e2))
            return t2;
          for (var r2 = Object.keys(e2), n2 = r2.length; n2--; )
            t2[r2[n2]] = e2[r2[n2]];
          return t2;
        };
        var x = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;
        function I(t2, e2) {
          if (!t2) {
            var r2 = new Error("Promise was rejected with a falsy value");
            r2.reason = t2, t2 = r2;
          }
          return e2(t2);
        }
        e.promisify = function(t2) {
          if ("function" != typeof t2)
            throw new TypeError('The "original" argument must be of type Function');
          if (x && t2[x]) {
            var e2;
            if ("function" != typeof (e2 = t2[x]))
              throw new TypeError('The "util.promisify.custom" argument must be of type Function');
            return Object.defineProperty(e2, x, { value: e2, enumerable: false, writable: false, configurable: true }), e2;
          }
          function e2() {
            for (var e3, r2, n2 = new Promise(function(t3, n3) {
              e3 = t3, r2 = n3;
            }), i2 = [], o2 = 0; o2 < arguments.length; o2++)
              i2.push(arguments[o2]);
            i2.push(function(t3, n3) {
              t3 ? r2(t3) : e3(n3);
            });
            try {
              t2.apply(this, i2);
            } catch (t3) {
              r2(t3);
            }
            return n2;
          }
          return Object.setPrototypeOf(e2, Object.getPrototypeOf(t2)), x && Object.defineProperty(e2, x, { value: e2, enumerable: false, writable: false, configurable: true }), Object.defineProperties(e2, n(t2));
        }, e.promisify.custom = x, e.callbackify = function(t2) {
          if ("function" != typeof t2)
            throw new TypeError('The "original" argument must be of type Function');
          function e2() {
            for (var e3 = [], r2 = 0; r2 < arguments.length; r2++)
              e3.push(arguments[r2]);
            var n2 = e3.pop();
            if ("function" != typeof n2)
              throw new TypeError("The last argument must be of type Function");
            var i2 = this, o2 = function() {
              return n2.apply(i2, arguments);
            };
            t2.apply(this, e3).then(function(t3) {
              process.nextTick(o2.bind(null, null, t3));
            }, function(t3) {
              process.nextTick(I.bind(null, t3, o2));
            });
          }
          return Object.setPrototypeOf(e2, Object.getPrototypeOf(t2)), Object.defineProperties(e2, n(t2)), e2;
        };
      }, 6935: (__unused_webpack_module, exports) => {
        var indexOf = function(t, e) {
          if (t.indexOf)
            return t.indexOf(e);
          for (var r = 0; r < t.length; r++)
            if (t[r] === e)
              return r;
          return -1;
        }, Object_keys = function(t) {
          if (Object.keys)
            return Object.keys(t);
          var e = [];
          for (var r in t)
            e.push(r);
          return e;
        }, forEach = function(t, e) {
          if (t.forEach)
            return t.forEach(e);
          for (var r = 0; r < t.length; r++)
            e(t[r], r, t);
        }, defineProp = function() {
          try {
            return Object.defineProperty({}, "_", {}), function(t, e, r) {
              Object.defineProperty(t, e, { writable: true, enumerable: false, configurable: true, value: r });
            };
          } catch (t) {
            return function(t2, e, r) {
              t2[e] = r;
            };
          }
        }(), globals = ["Array", "Boolean", "Date", "Error", "EvalError", "Function", "Infinity", "JSON", "Math", "NaN", "Number", "Object", "RangeError", "ReferenceError", "RegExp", "String", "SyntaxError", "TypeError", "URIError", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "undefined", "unescape"];
        function Context() {
        }
        Context.prototype = {};
        var Script = exports.Script = function(t) {
          if (!(this instanceof Script))
            return new Script(t);
          this.code = t;
        };
        Script.prototype.runInContext = function(t) {
          if (!(t instanceof Context))
            throw new TypeError("needs a 'context' argument.");
          var e = document.createElement("iframe");
          e.style || (e.style = {}), e.style.display = "none", document.body.appendChild(e);
          var r = e.contentWindow, n = r.eval, i = r.execScript;
          !n && i && (i.call(r, "null"), n = r.eval), forEach(Object_keys(t), function(e2) {
            r[e2] = t[e2];
          }), forEach(globals, function(e2) {
            t[e2] && (r[e2] = t[e2]);
          });
          var o = Object_keys(r), a = n.call(r, this.code);
          return forEach(Object_keys(r), function(e2) {
            (e2 in t || -1 === indexOf(o, e2)) && (t[e2] = r[e2]);
          }), forEach(globals, function(e2) {
            e2 in t || defineProp(t, e2, r[e2]);
          }), document.body.removeChild(e), a;
        }, Script.prototype.runInThisContext = function() {
          return eval(this.code);
        }, Script.prototype.runInNewContext = function(t) {
          var e = Script.createContext(t), r = this.runInContext(e);
          return t && forEach(Object_keys(e), function(r2) {
            t[r2] = e[r2];
          }), r;
        }, forEach(Object_keys(Script.prototype), function(t) {
          exports[t] = Script[t] = function(e) {
            var r = Script(e);
            return r[t].apply(r, [].slice.call(arguments, 1));
          };
        }), exports.isContext = function(t) {
          return t instanceof Context;
        }, exports.createScript = function(t) {
          return exports.Script(t);
        }, exports.createContext = Script.createContext = function(t) {
          var e = new Context();
          return "object" == typeof t && forEach(Object_keys(t), function(r) {
            e[r] = t[r];
          }), e;
        };
      }, 1337: (t, e, r) => {
        "use strict";
        var n = r(4405), i = r(8468), o = r(1919), a = r(2787), s = r(1325), f = a("Object.prototype.toString"), h = r(6618)(), u = "undefined" == typeof globalThis ? r.g : globalThis, c = i(), d = a("String.prototype.slice"), l = Object.getPrototypeOf, p = a("Array.prototype.indexOf", true) || function(t2, e2) {
          for (var r2 = 0; r2 < t2.length; r2 += 1)
            if (t2[r2] === e2)
              return r2;
          return -1;
        }, b = { __proto__: null };
        n(c, h && s && l ? function(t2) {
          var e2 = new u[t2]();
          if (Symbol.toStringTag in e2) {
            var r2 = l(e2), n2 = s(r2, Symbol.toStringTag);
            if (!n2) {
              var i2 = l(r2);
              n2 = s(i2, Symbol.toStringTag);
            }
            b["$" + t2] = o(n2.get);
          }
        } : function(t2) {
          var e2 = new u[t2](), r2 = e2.slice || e2.set;
          r2 && (b["$" + t2] = o(r2));
        }), t.exports = function(t2) {
          if (!t2 || "object" != typeof t2)
            return false;
          if (!h) {
            var e2 = d(f(t2), 8, -1);
            return p(c, e2) > -1 ? e2 : "Object" === e2 && function(t3) {
              var e3 = false;
              return n(b, function(r2, n2) {
                if (!e3)
                  try {
                    r2(t3), e3 = d(n2, 1);
                  } catch (t4) {
                  }
              }), e3;
            }(t2);
          }
          return s ? function(t3) {
            var e3 = false;
            return n(b, function(r2, n2) {
              if (!e3)
                try {
                  "$" + r2(t3) === n2 && (e3 = d(n2, 1));
                } catch (t4) {
                }
            }), e3;
          }(t2) : null;
        };
      }, 2198: (t, e, r) => {
        var n = r(480), i = r(7655), o = (r(6855), r(2369).Ber, r(7413)._), a = r(7413), s = r(1899), f = r(8351);
        void 0 === n.RSA_NO_PADDING && (n.RSA_NO_PADDING = 3), t.exports = function() {
          var t2 = { node10: ["md4", "md5", "ripemd160", "sha1", "sha224", "sha256", "sha384", "sha512"], node: ["md4", "md5", "ripemd160", "sha1", "sha224", "sha256", "sha384", "sha512"], iojs: ["md4", "md5", "ripemd160", "sha1", "sha224", "sha256", "sha384", "sha512"], browser: ["md5", "ripemd160", "sha1", "sha256", "sha512"] }, e2 = "pkcs1_oaep", r2 = "pkcs1", n2 = { private: "pkcs1-private-pem", "private-der": "pkcs1-private-der", public: "pkcs8-public-pem", "public-der": "pkcs8-public-der" };
          function h(t3, n3, s2) {
            if (!(this instanceof h))
              return new h(t3, n3, s2);
            o.isObject(n3) && (s2 = n3, n3 = void 0), this.$options = { signingScheme: r2, signingSchemeOptions: { hash: "sha256", saltLength: null }, encryptionScheme: e2, encryptionSchemeOptions: { hash: "sha1", label: null }, environment: a.detectEnvironment(), rsaUtils: this }, this.keyPair = new i.Key(), this.$cache = {}, Buffer.isBuffer(t3) || o.isString(t3) ? this.importKey(t3, n3) : o.isObject(t3) && this.generateKeyPair(t3.b, t3.e), this.setOptions(s2);
          }
          return h.prototype.setOptions = function(n3) {
            if ((n3 = n3 || {}).environment && (this.$options.environment = n3.environment), n3.signingScheme) {
              if (o.isString(n3.signingScheme)) {
                var i2 = n3.signingScheme.toLowerCase().split("-");
                1 == i2.length ? t2.node.indexOf(i2[0]) > -1 ? (this.$options.signingSchemeOptions = { hash: i2[0] }, this.$options.signingScheme = r2) : (this.$options.signingScheme = i2[0], this.$options.signingSchemeOptions = { hash: null }) : (this.$options.signingSchemeOptions = { hash: i2[1] }, this.$options.signingScheme = i2[0]);
              } else
                o.isObject(n3.signingScheme) && (this.$options.signingScheme = n3.signingScheme.scheme || r2, this.$options.signingSchemeOptions = o.omit(n3.signingScheme, "scheme"));
              if (!s.isSignature(this.$options.signingScheme))
                throw Error("Unsupported signing scheme");
              if (this.$options.signingSchemeOptions.hash && -1 === t2[this.$options.environment].indexOf(this.$options.signingSchemeOptions.hash))
                throw Error("Unsupported hashing algorithm for " + this.$options.environment + " environment");
            }
            if (n3.encryptionScheme) {
              if (o.isString(n3.encryptionScheme) ? (this.$options.encryptionScheme = n3.encryptionScheme.toLowerCase(), this.$options.encryptionSchemeOptions = {}) : o.isObject(n3.encryptionScheme) && (this.$options.encryptionScheme = n3.encryptionScheme.scheme || e2, this.$options.encryptionSchemeOptions = o.omit(n3.encryptionScheme, "scheme")), !s.isEncryption(this.$options.encryptionScheme))
                throw Error("Unsupported encryption scheme");
              if (this.$options.encryptionSchemeOptions.hash && -1 === t2[this.$options.environment].indexOf(this.$options.encryptionSchemeOptions.hash))
                throw Error("Unsupported hashing algorithm for " + this.$options.environment + " environment");
            }
            this.keyPair.setOptions(this.$options);
          }, h.prototype.generateKeyPair = function(t3, e3) {
            if (e3 = e3 || 65537, (t3 = t3 || 2048) % 8 != 0)
              throw Error("Key size must be a multiple of 8.");
            return this.keyPair.generate(t3, e3.toString(16)), this.$cache = {}, this;
          }, h.prototype.importKey = function(t3, e3) {
            if (!t3)
              throw Error("Empty key given");
            if (e3 && (e3 = n2[e3] || e3), !f.detectAndImport(this.keyPair, t3, e3) && void 0 === e3)
              throw Error("Key format must be specified");
            return this.$cache = {}, this;
          }, h.prototype.exportKey = function(t3) {
            return t3 = n2[t3 = t3 || "private"] || t3, this.$cache[t3] || (this.$cache[t3] = f.detectAndExport(this.keyPair, t3)), this.$cache[t3];
          }, h.prototype.isPrivate = function() {
            return this.keyPair.isPrivate();
          }, h.prototype.isPublic = function(t3) {
            return this.keyPair.isPublic(t3);
          }, h.prototype.isEmpty = function(t3) {
            return !(this.keyPair.n || this.keyPair.e || this.keyPair.d);
          }, h.prototype.encrypt = function(t3, e3, r3) {
            return this.$$encryptKey(false, t3, e3, r3);
          }, h.prototype.decrypt = function(t3, e3) {
            return this.$$decryptKey(false, t3, e3);
          }, h.prototype.encryptPrivate = function(t3, e3, r3) {
            return this.$$encryptKey(true, t3, e3, r3);
          }, h.prototype.decryptPublic = function(t3, e3) {
            return this.$$decryptKey(true, t3, e3);
          }, h.prototype.$$encryptKey = function(t3, e3, r3, n3) {
            try {
              var i2 = this.keyPair.encrypt(this.$getDataForEncrypt(e3, n3), t3);
              return "buffer" != r3 && r3 ? i2.toString(r3) : i2;
            } catch (t4) {
              throw Error("Error during encryption. Original error: " + t4);
            }
          }, h.prototype.$$decryptKey = function(t3, e3, r3) {
            try {
              e3 = o.isString(e3) ? Buffer.from(e3, "base64") : e3;
              var n3 = this.keyPair.decrypt(e3, t3);
              if (null === n3)
                throw Error("Key decrypt method returns null.");
              return this.$getDecryptedData(n3, r3);
            } catch (t4) {
              throw Error("Error during decryption (probably incorrect key). Original error: " + t4);
            }
          }, h.prototype.sign = function(t3, e3, r3) {
            if (!this.isPrivate())
              throw Error("This is not private key");
            var n3 = this.keyPair.sign(this.$getDataForEncrypt(t3, r3));
            return e3 && "buffer" != e3 && (n3 = n3.toString(e3)), n3;
          }, h.prototype.verify = function(t3, e3, r3, n3) {
            if (!this.isPublic())
              throw Error("This is not public key");
            return n3 = n3 && "buffer" != n3 ? n3 : null, this.keyPair.verify(this.$getDataForEncrypt(t3, r3), e3, n3);
          }, h.prototype.getKeySize = function() {
            return this.keyPair.keySize;
          }, h.prototype.getMaxMessageSize = function() {
            return this.keyPair.maxMessageLength;
          }, h.prototype.$getDataForEncrypt = function(t3, e3) {
            if (o.isString(t3) || o.isNumber(t3))
              return Buffer.from("" + t3, e3 || "utf8");
            if (Buffer.isBuffer(t3))
              return t3;
            if (o.isObject(t3))
              return Buffer.from(JSON.stringify(t3));
            throw Error("Unexpected data type");
          }, h.prototype.$getDecryptedData = function(t3, e3) {
            return "buffer" == (e3 = e3 || "buffer") ? t3 : "json" == e3 ? JSON.parse(t3.toString()) : t3.toString(e3);
          }, h;
        }();
      }, 5705: (t, e, r) => {
        var n = r(6855);
        t.exports = { getEngine: function(t2, e2) {
          var i = r(6510);
          return "node" === e2.environment && "function" == typeof n.publicEncrypt && "function" == typeof n.privateDecrypt && (i = "function" == typeof n.privateEncrypt && "function" == typeof n.publicDecrypt ? r(4145) : r(482)), i(t2, e2);
        } };
      }, 4145: (t, e, r) => {
        var n = r(6855), i = r(480), o = r(1899);
        t.exports = function(t2, e2) {
          var r2 = o.pkcs1.makeScheme(t2, e2);
          return { encrypt: function(t3, o2) {
            var a;
            if (o2)
              return a = i.RSA_PKCS1_PADDING, e2.encryptionSchemeOptions && e2.encryptionSchemeOptions.padding && (a = e2.encryptionSchemeOptions.padding), n.privateEncrypt({ key: e2.rsaUtils.exportKey("private"), padding: a }, t3);
            a = i.RSA_PKCS1_OAEP_PADDING, "pkcs1" === e2.encryptionScheme && (a = i.RSA_PKCS1_PADDING), e2.encryptionSchemeOptions && e2.encryptionSchemeOptions.padding && (a = e2.encryptionSchemeOptions.padding);
            var s = t3;
            return a === i.RSA_NO_PADDING && (s = r2.pkcs0pad(t3)), n.publicEncrypt({ key: e2.rsaUtils.exportKey("public"), padding: a }, s);
          }, decrypt: function(t3, o2) {
            var a;
            if (o2)
              return a = i.RSA_PKCS1_PADDING, e2.encryptionSchemeOptions && e2.encryptionSchemeOptions.padding && (a = e2.encryptionSchemeOptions.padding), n.publicDecrypt({ key: e2.rsaUtils.exportKey("public"), padding: a }, t3);
            a = i.RSA_PKCS1_OAEP_PADDING, "pkcs1" === e2.encryptionScheme && (a = i.RSA_PKCS1_PADDING), e2.encryptionSchemeOptions && e2.encryptionSchemeOptions.padding && (a = e2.encryptionSchemeOptions.padding);
            var s = n.privateDecrypt({ key: e2.rsaUtils.exportKey("private"), padding: a }, t3);
            return a === i.RSA_NO_PADDING ? r2.pkcs0unpad(s) : s;
          } };
        };
      }, 6510: (t, e, r) => {
        var n = r(214), i = r(1899);
        t.exports = function(t2, e2) {
          var r2 = i.pkcs1.makeScheme(t2, e2);
          return { encrypt: function(e3, i2) {
            var o, a;
            return i2 ? (o = new n(r2.encPad(e3, { type: 1 })), a = t2.$doPrivate(o)) : (o = new n(t2.encryptionScheme.encPad(e3)), a = t2.$doPublic(o)), a.toBuffer(t2.encryptedDataLength);
          }, decrypt: function(e3, i2) {
            var o, a = new n(e3);
            return i2 ? (o = t2.$doPublic(a), r2.encUnPad(o.toBuffer(t2.encryptedDataLength), { type: 1 })) : (o = t2.$doPrivate(a), t2.encryptionScheme.encUnPad(o.toBuffer(t2.encryptedDataLength)));
          } };
        };
      }, 482: (t, e, r) => {
        var n = r(6855), i = r(480), o = r(1899);
        t.exports = function(t2, e2) {
          var a = r(6510)(t2, e2), s = o.pkcs1.makeScheme(t2, e2);
          return { encrypt: function(t3, r2) {
            if (r2)
              return a.encrypt(t3, r2);
            var o2 = i.RSA_PKCS1_OAEP_PADDING;
            "pkcs1" === e2.encryptionScheme && (o2 = i.RSA_PKCS1_PADDING), e2.encryptionSchemeOptions && e2.encryptionSchemeOptions.padding && (o2 = e2.encryptionSchemeOptions.padding);
            var f = t3;
            return o2 === i.RSA_NO_PADDING && (f = s.pkcs0pad(t3)), n.publicEncrypt({ key: e2.rsaUtils.exportKey("public"), padding: o2 }, f);
          }, decrypt: function(t3, r2) {
            if (r2)
              return a.decrypt(t3, r2);
            var o2 = i.RSA_PKCS1_OAEP_PADDING;
            "pkcs1" === e2.encryptionScheme && (o2 = i.RSA_PKCS1_PADDING), e2.encryptionSchemeOptions && e2.encryptionSchemeOptions.padding && (o2 = e2.encryptionSchemeOptions.padding);
            var f = n.privateDecrypt({ key: e2.rsaUtils.exportKey("private"), padding: o2 }, t3);
            return o2 === i.RSA_NO_PADDING ? s.pkcs0unpad(f) : f;
          } };
        };
      }, 1195: (t, e, r) => {
        r(7413)._, r(7413), t.exports = { privateExport: function(t2, e2) {
          return { n: t2.n.toBuffer(), e: t2.e, d: t2.d.toBuffer(), p: t2.p.toBuffer(), q: t2.q.toBuffer(), dmp1: t2.dmp1.toBuffer(), dmq1: t2.dmq1.toBuffer(), coeff: t2.coeff.toBuffer() };
        }, privateImport: function(t2, e2, r2) {
          if (!(e2.n && e2.e && e2.d && e2.p && e2.q && e2.dmp1 && e2.dmq1 && e2.coeff))
            throw Error("Invalid key data");
          t2.setPrivate(e2.n, e2.e, e2.d, e2.p, e2.q, e2.dmp1, e2.dmq1, e2.coeff);
        }, publicExport: function(t2, e2) {
          return { n: t2.n.toBuffer(), e: t2.e };
        }, publicImport: function(t2, e2, r2) {
          if (!e2.n || !e2.e)
            throw Error("Invalid key data");
          t2.setPublic(e2.n, e2.e);
        }, autoImport: function(e2, r2) {
          return !(!r2.n || !r2.e || (r2.d && r2.p && r2.q && r2.dmp1 && r2.dmq1 && r2.coeff ? (t.exports.privateImport(e2, r2), 0) : (t.exports.publicImport(e2, r2), 0)));
        } };
      }, 8351: (t, e, r) => {
        function n(t2) {
          t2 = t2.split("-");
          for (var e2 = "private", r2 = { type: "default" }, n2 = 1; n2 < t2.length; n2++)
            if (t2[n2])
              switch (t2[n2]) {
                case "public":
                case "private":
                  e2 = t2[n2];
                  break;
                case "pem":
                case "der":
                  r2.type = t2[n2];
              }
          return { scheme: t2[0], keyType: e2, keyOpt: r2 };
        }
        r(7413)._, t.exports = { pkcs1: r(8269), pkcs8: r(5222), components: r(1195), openssh: r(9717), isPrivateExport: function(e2) {
          return t.exports[e2] && "function" == typeof t.exports[e2].privateExport;
        }, isPrivateImport: function(e2) {
          return t.exports[e2] && "function" == typeof t.exports[e2].privateImport;
        }, isPublicExport: function(e2) {
          return t.exports[e2] && "function" == typeof t.exports[e2].publicExport;
        }, isPublicImport: function(e2) {
          return t.exports[e2] && "function" == typeof t.exports[e2].publicImport;
        }, detectAndImport: function(e2, r2, i) {
          if (void 0 === i) {
            for (var o in t.exports)
              if ("function" == typeof t.exports[o].autoImport && t.exports[o].autoImport(e2, r2))
                return true;
          } else if (i) {
            var a = n(i);
            if (!t.exports[a.scheme])
              throw Error("Unsupported key format");
            "private" === a.keyType ? t.exports[a.scheme].privateImport(e2, r2, a.keyOpt) : t.exports[a.scheme].publicImport(e2, r2, a.keyOpt);
          }
          return false;
        }, detectAndExport: function(e2, r2) {
          if (r2) {
            var i = n(r2);
            if (t.exports[i.scheme]) {
              if ("private" === i.keyType) {
                if (!e2.isPrivate())
                  throw Error("This is not private key");
                return t.exports[i.scheme].privateExport(e2, i.keyOpt);
              }
              if (!e2.isPublic())
                throw Error("This is not public key");
              return t.exports[i.scheme].publicExport(e2, i.keyOpt);
            }
            throw Error("Unsupported key format");
          }
        } };
      }, 9717: (t, e, r) => {
        var n = r(7413)._, i = r(7413), o = r(214);
        const a = "-----BEGIN OPENSSH PRIVATE KEY-----", s = "-----END OPENSSH PRIVATE KEY-----";
        function f(t2) {
          const e2 = t2.buf.readInt32BE(t2.off);
          t2.off += 4;
          const r2 = t2.buf.slice(t2.off, t2.off + e2);
          return t2.off += e2, r2;
        }
        function h(t2, e2) {
          t2.buf.writeInt32BE(e2.byteLength, t2.off), t2.off += 4, t2.off += e2.copy(t2.buf, t2.off);
        }
        t.exports = { privateExport: function(t2, e2) {
          const r2 = t2.n.toBuffer();
          let n2 = Buffer.alloc(4);
          for (n2.writeUInt32BE(t2.e, 0); 0 === n2[0]; )
            n2 = n2.slice(1);
          const o2 = t2.d.toBuffer(), f2 = t2.coeff.toBuffer(), u = t2.p.toBuffer(), c = t2.q.toBuffer();
          let d;
          d = void 0 !== t2.sshcomment ? Buffer.from(t2.sshcomment) : Buffer.from([]);
          const l = 15 + n2.byteLength + 4 + r2.byteLength, p = 23 + r2.byteLength + 4 + n2.byteLength + 4 + o2.byteLength + 4 + f2.byteLength + 4 + u.byteLength + 4 + c.byteLength + 4 + d.byteLength;
          let b = 43 + l + 4 + p;
          b += 8 * Math.ceil(p / 8) - p;
          const y = Buffer.alloc(b), g = { buf: y, off: 0 };
          y.write("openssh-key-v1", "utf8"), y.writeUInt8(0, 14), g.off += 15, h(g, Buffer.from("none")), h(g, Buffer.from("none")), h(g, Buffer.from("")), g.off = g.buf.writeUInt32BE(1, g.off), g.off = g.buf.writeUInt32BE(l, g.off), h(g, Buffer.from("ssh-rsa")), h(g, n2), h(g, r2), g.off = g.buf.writeUInt32BE(b - 47 - l, g.off), g.off += 8, h(g, Buffer.from("ssh-rsa")), h(g, r2), h(g, n2), h(g, o2), h(g, f2), h(g, u), h(g, c), h(g, d);
          let m = 1;
          for (; g.off < b; )
            g.off = g.buf.writeUInt8(m++, g.off);
          return "der" === e2.type ? g.buf : a + "\n" + i.linebrk(y.toString("base64"), 70) + "\n" + s + "\n";
        }, privateImport: function(t2, e2, r2) {
          var h2;
          if ("der" !== (r2 = r2 || {}).type) {
            if (Buffer.isBuffer(e2) && (e2 = e2.toString("utf8")), !n.isString(e2))
              throw Error("Unsupported key format");
            var u = i.trimSurroundingText(e2, a, s).replace(/\s+|\n\r|\n|\r$/gm, "");
            h2 = Buffer.from(u, "base64");
          } else {
            if (!Buffer.isBuffer(e2))
              throw Error("Unsupported key format");
            h2 = e2;
          }
          const c = { buf: h2, off: 0 };
          if ("openssh-key-v1" !== h2.slice(0, 14).toString("ascii"))
            throw "Invalid file format.";
          if (c.off += 15, "none" !== f(c).toString("ascii"))
            throw Error("Unsupported key type");
          if ("none" !== f(c).toString("ascii"))
            throw Error("Unsupported key type");
          if ("" !== f(c).toString("ascii"))
            throw Error("Unsupported key type");
          if (c.off += 4, c.off += 4, "ssh-rsa" !== f(c).toString("ascii"))
            throw Error("Unsupported key type");
          if (f(c), f(c), c.off += 12, "ssh-rsa" !== f(c).toString("ascii"))
            throw Error("Unsupported key type");
          const d = f(c), l = f(c), p = f(c), b = f(c), y = f(c), g = f(c), m = new o(p), v = new o(g), w = new o(y), _ = m.mod(w.subtract(o.ONE)), S = m.mod(v.subtract(o.ONE));
          t2.setPrivate(d, l, p, y, g, _.toBuffer(), S.toBuffer(), b), t2.sshcomment = f(c).toString("ascii");
        }, publicExport: function(t2, e2) {
          let r2 = Buffer.alloc(4);
          for (r2.writeUInt32BE(t2.e, 0); 0 === r2[0]; )
            r2 = r2.slice(1);
          const n2 = t2.n.toBuffer(), i2 = Buffer.alloc(r2.byteLength + 4 + n2.byteLength + 4 + 7 + 4), o2 = { buf: i2, off: 0 };
          h(o2, Buffer.from("ssh-rsa")), h(o2, r2), h(o2, n2);
          let a2 = t2.sshcomment || "";
          return "der" === e2.type ? o2.buf : "ssh-rsa " + i2.toString("base64") + " " + a2 + "\n";
        }, publicImport: function(t2, e2, r2) {
          var i2;
          if ("der" !== (r2 = r2 || {}).type) {
            if (Buffer.isBuffer(e2) && (e2 = e2.toString("utf8")), !n.isString(e2))
              throw Error("Unsupported key format");
            {
              if ("ssh-rsa " !== e2.substring(0, 8))
                throw Error("Unsupported key format");
              let r3 = e2.indexOf(" ", 8);
              -1 === r3 ? r3 = e2.length : t2.sshcomment = e2.substring(r3 + 1).replace(/\s+|\n\r|\n|\r$/gm, "");
              const n2 = e2.substring(8, r3).replace(/\s+|\n\r|\n|\r$/gm, "");
              i2 = Buffer.from(n2, "base64");
            }
          } else {
            if (!Buffer.isBuffer(e2))
              throw Error("Unsupported key format");
            i2 = e2;
          }
          const o2 = { buf: i2, off: 0 }, a2 = f(o2).toString("ascii");
          if ("ssh-rsa" !== a2)
            throw Error("Invalid key type: " + a2);
          const s2 = f(o2), h2 = f(o2);
          t2.setPublic(h2, s2);
        }, autoImport: function(e2, r2) {
          return /^[\S\s]*-----BEGIN OPENSSH PRIVATE KEY-----\s*(?=(([A-Za-z0-9+/=]+\s*)+))\1-----END OPENSSH PRIVATE KEY-----[\S\s]*$/g.test(r2) ? (t.exports.privateImport(e2, r2), true) : !!/^[\S\s]*ssh-rsa \s*(?=(([A-Za-z0-9+/=]+\s*)+))\1[\S\s]*$/g.test(r2) && (t.exports.publicImport(e2, r2), true);
        } };
      }, 8269: (t, e, r) => {
        var n = r(2369).Ber, i = r(7413)._, o = r(7413);
        const a = "-----BEGIN RSA PRIVATE KEY-----", s = "-----END RSA PRIVATE KEY-----", f = "-----BEGIN RSA PUBLIC KEY-----", h = "-----END RSA PUBLIC KEY-----";
        t.exports = { privateExport: function(t2, e2) {
          e2 = e2 || {};
          var r2 = t2.n.toBuffer(), i2 = t2.d.toBuffer(), f2 = t2.p.toBuffer(), h2 = t2.q.toBuffer(), u = t2.dmp1.toBuffer(), c = t2.dmq1.toBuffer(), d = t2.coeff.toBuffer(), l = r2.length + i2.length + f2.length + h2.length + u.length + c.length + d.length + 512, p = new n.Writer({ size: l });
          return p.startSequence(), p.writeInt(0), p.writeBuffer(r2, 2), p.writeInt(t2.e), p.writeBuffer(i2, 2), p.writeBuffer(f2, 2), p.writeBuffer(h2, 2), p.writeBuffer(u, 2), p.writeBuffer(c, 2), p.writeBuffer(d, 2), p.endSequence(), "der" === e2.type ? p.buffer : a + "\n" + o.linebrk(p.buffer.toString("base64"), 64) + "\n" + s;
        }, privateImport: function(t2, e2, r2) {
          var f2;
          if ("der" !== (r2 = r2 || {}).type) {
            if (Buffer.isBuffer(e2) && (e2 = e2.toString("utf8")), !i.isString(e2))
              throw Error("Unsupported key format");
            var h2 = o.trimSurroundingText(e2, a, s).replace(/\s+|\n\r|\n|\r$/gm, "");
            f2 = Buffer.from(h2, "base64");
          } else {
            if (!Buffer.isBuffer(e2))
              throw Error("Unsupported key format");
            f2 = e2;
          }
          var u = new n.Reader(f2);
          u.readSequence(), u.readString(2, true), t2.setPrivate(u.readString(2, true), u.readString(2, true), u.readString(2, true), u.readString(2, true), u.readString(2, true), u.readString(2, true), u.readString(2, true), u.readString(2, true));
        }, publicExport: function(t2, e2) {
          e2 = e2 || {};
          var r2 = t2.n.toBuffer(), i2 = r2.length + 512, a2 = new n.Writer({ size: i2 });
          return a2.startSequence(), a2.writeBuffer(r2, 2), a2.writeInt(t2.e), a2.endSequence(), "der" === e2.type ? a2.buffer : f + "\n" + o.linebrk(a2.buffer.toString("base64"), 64) + "\n" + h;
        }, publicImport: function(t2, e2, r2) {
          var a2;
          if ("der" !== (r2 = r2 || {}).type) {
            if (Buffer.isBuffer(e2) && (e2 = e2.toString("utf8")), i.isString(e2)) {
              var s2 = o.trimSurroundingText(e2, f, h).replace(/\s+|\n\r|\n|\r$/gm, "");
              a2 = Buffer.from(s2, "base64");
            }
          } else {
            if (!Buffer.isBuffer(e2))
              throw Error("Unsupported key format");
            a2 = e2;
          }
          var u = new n.Reader(a2);
          u.readSequence(), t2.setPublic(u.readString(2, true), u.readString(2, true));
        }, autoImport: function(e2, r2) {
          return /^[\S\s]*-----BEGIN RSA PRIVATE KEY-----\s*(?=(([A-Za-z0-9+/=]+\s*)+))\1-----END RSA PRIVATE KEY-----[\S\s]*$/g.test(r2) ? (t.exports.privateImport(e2, r2), true) : !!/^[\S\s]*-----BEGIN RSA PUBLIC KEY-----\s*(?=(([A-Za-z0-9+/=]+\s*)+))\1-----END RSA PUBLIC KEY-----[\S\s]*$/g.test(r2) && (t.exports.publicImport(e2, r2), true);
        } };
      }, 5222: (t, e, r) => {
        var n = r(2369).Ber, i = r(7413)._, o = "1.2.840.113549.1.1.1", a = r(7413);
        const s = "-----BEGIN PRIVATE KEY-----", f = "-----END PRIVATE KEY-----", h = "-----BEGIN PUBLIC KEY-----", u = "-----END PUBLIC KEY-----";
        t.exports = { privateExport: function(t2, e2) {
          e2 = e2 || {};
          var r2 = t2.n.toBuffer(), i2 = t2.d.toBuffer(), h2 = t2.p.toBuffer(), u2 = t2.q.toBuffer(), c = t2.dmp1.toBuffer(), d = t2.dmq1.toBuffer(), l = t2.coeff.toBuffer(), p = r2.length + i2.length + h2.length + u2.length + c.length + d.length + l.length + 512, b = new n.Writer({ size: p });
          b.startSequence(), b.writeInt(0), b.writeBuffer(r2, 2), b.writeInt(t2.e), b.writeBuffer(i2, 2), b.writeBuffer(h2, 2), b.writeBuffer(u2, 2), b.writeBuffer(c, 2), b.writeBuffer(d, 2), b.writeBuffer(l, 2), b.endSequence();
          var y = new n.Writer({ size: p });
          return y.startSequence(), y.writeInt(0), y.startSequence(), y.writeOID(o), y.writeNull(), y.endSequence(), y.writeBuffer(b.buffer, 4), y.endSequence(), "der" === e2.type ? y.buffer : s + "\n" + a.linebrk(y.buffer.toString("base64"), 64) + "\n" + f;
        }, privateImport: function(t2, e2, r2) {
          var h2;
          if ("der" !== (r2 = r2 || {}).type) {
            if (Buffer.isBuffer(e2) && (e2 = e2.toString("utf8")), !i.isString(e2))
              throw Error("Unsupported key format");
            var u2 = a.trimSurroundingText(e2, s, f).replace("-----END PRIVATE KEY-----", "").replace(/\s+|\n\r|\n|\r$/gm, "");
            h2 = Buffer.from(u2, "base64");
          } else {
            if (!Buffer.isBuffer(e2))
              throw Error("Unsupported key format");
            h2 = e2;
          }
          var c = new n.Reader(h2);
          if (c.readSequence(), c.readInt(0), new n.Reader(c.readString(48, true)).readOID(6, true) !== o)
            throw Error("Invalid Public key format");
          var d = new n.Reader(c.readString(4, true));
          d.readSequence(), d.readString(2, true), t2.setPrivate(d.readString(2, true), d.readString(2, true), d.readString(2, true), d.readString(2, true), d.readString(2, true), d.readString(2, true), d.readString(2, true), d.readString(2, true));
        }, publicExport: function(t2, e2) {
          e2 = e2 || {};
          var r2 = t2.n.toBuffer(), i2 = r2.length + 512, s2 = new n.Writer({ size: i2 });
          s2.writeByte(0), s2.startSequence(), s2.writeBuffer(r2, 2), s2.writeInt(t2.e), s2.endSequence();
          var f2 = new n.Writer({ size: i2 });
          return f2.startSequence(), f2.startSequence(), f2.writeOID(o), f2.writeNull(), f2.endSequence(), f2.writeBuffer(s2.buffer, 3), f2.endSequence(), "der" === e2.type ? f2.buffer : h + "\n" + a.linebrk(f2.buffer.toString("base64"), 64) + "\n" + u;
        }, publicImport: function(t2, e2, r2) {
          var s2;
          if ("der" !== (r2 = r2 || {}).type) {
            if (Buffer.isBuffer(e2) && (e2 = e2.toString("utf8")), i.isString(e2)) {
              var f2 = a.trimSurroundingText(e2, h, u).replace(/\s+|\n\r|\n|\r$/gm, "");
              s2 = Buffer.from(f2, "base64");
            }
          } else {
            if (!Buffer.isBuffer(e2))
              throw Error("Unsupported key format");
            s2 = e2;
          }
          var c = new n.Reader(s2);
          if (c.readSequence(), new n.Reader(c.readString(48, true)).readOID(6, true) !== o)
            throw Error("Invalid Public key format");
          var d = new n.Reader(c.readString(3, true));
          d.readByte(), d.readSequence(), t2.setPublic(d.readString(2, true), d.readString(2, true));
        }, autoImport: function(e2, r2) {
          return /^[\S\s]*-----BEGIN PRIVATE KEY-----\s*(?=(([A-Za-z0-9+/=]+\s*)+))\1-----END PRIVATE KEY-----[\S\s]*$/g.test(r2) ? (t.exports.privateImport(e2, r2), true) : !!/^[\S\s]*-----BEGIN PUBLIC KEY-----\s*(?=(([A-Za-z0-9+/=]+\s*)+))\1-----END PUBLIC KEY-----[\S\s]*$/g.test(r2) && (t.exports.publicImport(e2, r2), true);
        } };
      }, 214: (t, e, r) => {
        var n = r(6855), i = r(7413)._;
        function o(t2, e2) {
          null != t2 && ("number" == typeof t2 ? this.fromNumber(t2, e2) : Buffer.isBuffer(t2) ? this.fromBuffer(t2) : null == e2 && "string" != typeof t2 ? this.fromByteArray(t2) : this.fromString(t2, e2));
        }
        function a() {
          return new o(null);
        }
        o.prototype.am = function(t2, e2, r2, n2, i2, o2) {
          for (var a2 = 16383 & e2, s2 = e2 >> 14; --o2 >= 0; ) {
            var f2 = 16383 & this[t2], h2 = this[t2++] >> 14, u2 = s2 * f2 + h2 * a2;
            i2 = ((f2 = a2 * f2 + ((16383 & u2) << 14) + r2[n2] + i2) >> 28) + (u2 >> 14) + s2 * h2, r2[n2++] = 268435455 & f2;
          }
          return i2;
        }, o.prototype.DB = 28, o.prototype.DM = 268435455, o.prototype.DV = 1 << 28, o.prototype.FV = Math.pow(2, 52), o.prototype.F1 = 24, o.prototype.F2 = 4;
        var s, f, h = new Array();
        for (s = "0".charCodeAt(0), f = 0; f <= 9; ++f)
          h[s++] = f;
        for (s = "a".charCodeAt(0), f = 10; f < 36; ++f)
          h[s++] = f;
        for (s = "A".charCodeAt(0), f = 10; f < 36; ++f)
          h[s++] = f;
        function u(t2) {
          return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t2);
        }
        function c(t2, e2) {
          var r2 = h[t2.charCodeAt(e2)];
          return null == r2 ? -1 : r2;
        }
        function d(t2) {
          var e2 = a();
          return e2.fromInt(t2), e2;
        }
        function l(t2) {
          var e2, r2 = 1;
          return 0 != (e2 = t2 >>> 16) && (t2 = e2, r2 += 16), 0 != (e2 = t2 >> 8) && (t2 = e2, r2 += 8), 0 != (e2 = t2 >> 4) && (t2 = e2, r2 += 4), 0 != (e2 = t2 >> 2) && (t2 = e2, r2 += 2), 0 != (e2 = t2 >> 1) && (t2 = e2, r2 += 1), r2;
        }
        function p(t2) {
          this.m = t2;
        }
        function b(t2) {
          this.m = t2, this.mp = t2.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t2.DB - 15) - 1, this.mt2 = 2 * t2.t;
        }
        function y(t2, e2) {
          return t2 & e2;
        }
        function g(t2, e2) {
          return t2 | e2;
        }
        function m(t2, e2) {
          return t2 ^ e2;
        }
        function v(t2, e2) {
          return t2 & ~e2;
        }
        function w(t2) {
          if (0 === t2)
            return -1;
          var e2 = 0;
          return 65535 & t2 || (t2 >>= 16, e2 += 16), 255 & t2 || (t2 >>= 8, e2 += 8), 15 & t2 || (t2 >>= 4, e2 += 4), 3 & t2 || (t2 >>= 2, e2 += 2), 1 & t2 || ++e2, e2;
        }
        function _(t2) {
          for (var e2 = 0; 0 != t2; )
            t2 &= t2 - 1, ++e2;
          return e2;
        }
        function S() {
        }
        function E(t2) {
          return t2;
        }
        function M(t2) {
          this.r2 = a(), this.q3 = a(), o.ONE.dlShiftTo(2 * t2.t, this.r2), this.mu = this.r2.divide(t2), this.m = t2;
        }
        p.prototype.convert = function(t2) {
          return t2.s < 0 || t2.compareTo(this.m) >= 0 ? t2.mod(this.m) : t2;
        }, p.prototype.revert = function(t2) {
          return t2;
        }, p.prototype.reduce = function(t2) {
          t2.divRemTo(this.m, null, t2);
        }, p.prototype.mulTo = function(t2, e2, r2) {
          t2.multiplyTo(e2, r2), this.reduce(r2);
        }, p.prototype.sqrTo = function(t2, e2) {
          t2.squareTo(e2), this.reduce(e2);
        }, b.prototype.convert = function(t2) {
          var e2 = a();
          return t2.abs().dlShiftTo(this.m.t, e2), e2.divRemTo(this.m, null, e2), t2.s < 0 && e2.compareTo(o.ZERO) > 0 && this.m.subTo(e2, e2), e2;
        }, b.prototype.revert = function(t2) {
          var e2 = a();
          return t2.copyTo(e2), this.reduce(e2), e2;
        }, b.prototype.reduce = function(t2) {
          for (; t2.t <= this.mt2; )
            t2[t2.t++] = 0;
          for (var e2 = 0; e2 < this.m.t; ++e2) {
            var r2 = 32767 & t2[e2], n2 = r2 * this.mpl + ((r2 * this.mph + (t2[e2] >> 15) * this.mpl & this.um) << 15) & t2.DM;
            for (t2[r2 = e2 + this.m.t] += this.m.am(0, n2, t2, e2, 0, this.m.t); t2[r2] >= t2.DV; )
              t2[r2] -= t2.DV, t2[++r2]++;
          }
          t2.clamp(), t2.drShiftTo(this.m.t, t2), t2.compareTo(this.m) >= 0 && t2.subTo(this.m, t2);
        }, b.prototype.mulTo = function(t2, e2, r2) {
          t2.multiplyTo(e2, r2), this.reduce(r2);
        }, b.prototype.sqrTo = function(t2, e2) {
          t2.squareTo(e2), this.reduce(e2);
        }, S.prototype.convert = E, S.prototype.revert = E, S.prototype.mulTo = function(t2, e2, r2) {
          t2.multiplyTo(e2, r2);
        }, S.prototype.sqrTo = function(t2, e2) {
          t2.squareTo(e2);
        }, M.prototype.convert = function(t2) {
          if (t2.s < 0 || t2.t > 2 * this.m.t)
            return t2.mod(this.m);
          if (t2.compareTo(this.m) < 0)
            return t2;
          var e2 = a();
          return t2.copyTo(e2), this.reduce(e2), e2;
        }, M.prototype.revert = function(t2) {
          return t2;
        }, M.prototype.reduce = function(t2) {
          for (t2.drShiftTo(this.m.t - 1, this.r2), t2.t > this.m.t + 1 && (t2.t = this.m.t + 1, t2.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t2.compareTo(this.r2) < 0; )
            t2.dAddOffset(1, this.m.t + 1);
          for (t2.subTo(this.r2, t2); t2.compareTo(this.m) >= 0; )
            t2.subTo(this.m, t2);
        }, M.prototype.mulTo = function(t2, e2, r2) {
          t2.multiplyTo(e2, r2), this.reduce(r2);
        }, M.prototype.sqrTo = function(t2, e2) {
          t2.squareTo(e2), this.reduce(e2);
        };
        var A = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997], k = (1 << 26) / A[A.length - 1];
        o.prototype.copyTo = function(t2) {
          for (var e2 = this.t - 1; e2 >= 0; --e2)
            t2[e2] = this[e2];
          t2.t = this.t, t2.s = this.s;
        }, o.prototype.fromInt = function(t2) {
          this.t = 1, this.s = t2 < 0 ? -1 : 0, t2 > 0 ? this[0] = t2 : t2 < -1 ? this[0] = t2 + DV : this.t = 0;
        }, o.prototype.fromString = function(t2, e2, r2) {
          var n2;
          switch (e2) {
            case 2:
              n2 = 1;
              break;
            case 4:
              n2 = 2;
              break;
            case 8:
              n2 = 3;
              break;
            case 16:
              n2 = 4;
              break;
            case 32:
              n2 = 5;
              break;
            case 256:
              n2 = 8;
              break;
            default:
              return void this.fromRadix(t2, e2);
          }
          this.t = 0, this.s = 0;
          for (var i2 = t2.length, a2 = false, s2 = 0; --i2 >= 0; ) {
            var f2 = 8 == n2 ? 255 & t2[i2] : c(t2, i2);
            f2 < 0 ? "-" == t2.charAt(i2) && (a2 = true) : (a2 = false, 0 === s2 ? this[this.t++] = f2 : s2 + n2 > this.DB ? (this[this.t - 1] |= (f2 & (1 << this.DB - s2) - 1) << s2, this[this.t++] = f2 >> this.DB - s2) : this[this.t - 1] |= f2 << s2, (s2 += n2) >= this.DB && (s2 -= this.DB));
          }
          !r2 && 8 == n2 && 128 & t2[0] && (this.s = -1, s2 > 0 && (this[this.t - 1] |= (1 << this.DB - s2) - 1 << s2)), this.clamp(), a2 && o.ZERO.subTo(this, this);
        }, o.prototype.fromByteArray = function(t2, e2) {
          this.fromString(t2, 256, e2);
        }, o.prototype.fromBuffer = function(t2) {
          this.fromString(t2, 256, true);
        }, o.prototype.clamp = function() {
          for (var t2 = this.s & this.DM; this.t > 0 && this[this.t - 1] == t2; )
            --this.t;
        }, o.prototype.dlShiftTo = function(t2, e2) {
          var r2;
          for (r2 = this.t - 1; r2 >= 0; --r2)
            e2[r2 + t2] = this[r2];
          for (r2 = t2 - 1; r2 >= 0; --r2)
            e2[r2] = 0;
          e2.t = this.t + t2, e2.s = this.s;
        }, o.prototype.drShiftTo = function(t2, e2) {
          for (var r2 = t2; r2 < this.t; ++r2)
            e2[r2 - t2] = this[r2];
          e2.t = Math.max(this.t - t2, 0), e2.s = this.s;
        }, o.prototype.lShiftTo = function(t2, e2) {
          var r2, n2 = t2 % this.DB, i2 = this.DB - n2, o2 = (1 << i2) - 1, a2 = Math.floor(t2 / this.DB), s2 = this.s << n2 & this.DM;
          for (r2 = this.t - 1; r2 >= 0; --r2)
            e2[r2 + a2 + 1] = this[r2] >> i2 | s2, s2 = (this[r2] & o2) << n2;
          for (r2 = a2 - 1; r2 >= 0; --r2)
            e2[r2] = 0;
          e2[a2] = s2, e2.t = this.t + a2 + 1, e2.s = this.s, e2.clamp();
        }, o.prototype.rShiftTo = function(t2, e2) {
          e2.s = this.s;
          var r2 = Math.floor(t2 / this.DB);
          if (r2 >= this.t)
            e2.t = 0;
          else {
            var n2 = t2 % this.DB, i2 = this.DB - n2, o2 = (1 << n2) - 1;
            e2[0] = this[r2] >> n2;
            for (var a2 = r2 + 1; a2 < this.t; ++a2)
              e2[a2 - r2 - 1] |= (this[a2] & o2) << i2, e2[a2 - r2] = this[a2] >> n2;
            n2 > 0 && (e2[this.t - r2 - 1] |= (this.s & o2) << i2), e2.t = this.t - r2, e2.clamp();
          }
        }, o.prototype.subTo = function(t2, e2) {
          for (var r2 = 0, n2 = 0, i2 = Math.min(t2.t, this.t); r2 < i2; )
            n2 += this[r2] - t2[r2], e2[r2++] = n2 & this.DM, n2 >>= this.DB;
          if (t2.t < this.t) {
            for (n2 -= t2.s; r2 < this.t; )
              n2 += this[r2], e2[r2++] = n2 & this.DM, n2 >>= this.DB;
            n2 += this.s;
          } else {
            for (n2 += this.s; r2 < t2.t; )
              n2 -= t2[r2], e2[r2++] = n2 & this.DM, n2 >>= this.DB;
            n2 -= t2.s;
          }
          e2.s = n2 < 0 ? -1 : 0, n2 < -1 ? e2[r2++] = this.DV + n2 : n2 > 0 && (e2[r2++] = n2), e2.t = r2, e2.clamp();
        }, o.prototype.multiplyTo = function(t2, e2) {
          var r2 = this.abs(), n2 = t2.abs(), i2 = r2.t;
          for (e2.t = i2 + n2.t; --i2 >= 0; )
            e2[i2] = 0;
          for (i2 = 0; i2 < n2.t; ++i2)
            e2[i2 + r2.t] = r2.am(0, n2[i2], e2, i2, 0, r2.t);
          e2.s = 0, e2.clamp(), this.s != t2.s && o.ZERO.subTo(e2, e2);
        }, o.prototype.squareTo = function(t2) {
          for (var e2 = this.abs(), r2 = t2.t = 2 * e2.t; --r2 >= 0; )
            t2[r2] = 0;
          for (r2 = 0; r2 < e2.t - 1; ++r2) {
            var n2 = e2.am(r2, e2[r2], t2, 2 * r2, 0, 1);
            (t2[r2 + e2.t] += e2.am(r2 + 1, 2 * e2[r2], t2, 2 * r2 + 1, n2, e2.t - r2 - 1)) >= e2.DV && (t2[r2 + e2.t] -= e2.DV, t2[r2 + e2.t + 1] = 1);
          }
          t2.t > 0 && (t2[t2.t - 1] += e2.am(r2, e2[r2], t2, 2 * r2, 0, 1)), t2.s = 0, t2.clamp();
        }, o.prototype.divRemTo = function(t2, e2, r2) {
          var n2 = t2.abs();
          if (!(n2.t <= 0)) {
            var i2 = this.abs();
            if (i2.t < n2.t)
              return null != e2 && e2.fromInt(0), void (null != r2 && this.copyTo(r2));
            null == r2 && (r2 = a());
            var s2 = a(), f2 = this.s, h2 = t2.s, u2 = this.DB - l(n2[n2.t - 1]);
            u2 > 0 ? (n2.lShiftTo(u2, s2), i2.lShiftTo(u2, r2)) : (n2.copyTo(s2), i2.copyTo(r2));
            var c2 = s2.t, d2 = s2[c2 - 1];
            if (0 !== d2) {
              var p2 = d2 * (1 << this.F1) + (c2 > 1 ? s2[c2 - 2] >> this.F2 : 0), b2 = this.FV / p2, y2 = (1 << this.F1) / p2, g2 = 1 << this.F2, m2 = r2.t, v2 = m2 - c2, w2 = null == e2 ? a() : e2;
              for (s2.dlShiftTo(v2, w2), r2.compareTo(w2) >= 0 && (r2[r2.t++] = 1, r2.subTo(w2, r2)), o.ONE.dlShiftTo(c2, w2), w2.subTo(s2, s2); s2.t < c2; )
                s2[s2.t++] = 0;
              for (; --v2 >= 0; ) {
                var _2 = r2[--m2] == d2 ? this.DM : Math.floor(r2[m2] * b2 + (r2[m2 - 1] + g2) * y2);
                if ((r2[m2] += s2.am(0, _2, r2, v2, 0, c2)) < _2)
                  for (s2.dlShiftTo(v2, w2), r2.subTo(w2, r2); r2[m2] < --_2; )
                    r2.subTo(w2, r2);
              }
              null != e2 && (r2.drShiftTo(c2, e2), f2 != h2 && o.ZERO.subTo(e2, e2)), r2.t = c2, r2.clamp(), u2 > 0 && r2.rShiftTo(u2, r2), f2 < 0 && o.ZERO.subTo(r2, r2);
            }
          }
        }, o.prototype.invDigit = function() {
          if (this.t < 1)
            return 0;
          var t2 = this[0];
          if (!(1 & t2))
            return 0;
          var e2 = 3 & t2;
          return (e2 = (e2 = (e2 = (e2 = e2 * (2 - (15 & t2) * e2) & 15) * (2 - (255 & t2) * e2) & 255) * (2 - ((65535 & t2) * e2 & 65535)) & 65535) * (2 - t2 * e2 % this.DV) % this.DV) > 0 ? this.DV - e2 : -e2;
        }, o.prototype.isEven = function() {
          return 0 === (this.t > 0 ? 1 & this[0] : this.s);
        }, o.prototype.exp = function(t2, e2) {
          if (t2 > 4294967295 || t2 < 1)
            return o.ONE;
          var r2 = a(), n2 = a(), i2 = e2.convert(this), s2 = l(t2) - 1;
          for (i2.copyTo(r2); --s2 >= 0; )
            if (e2.sqrTo(r2, n2), (t2 & 1 << s2) > 0)
              e2.mulTo(n2, i2, r2);
            else {
              var f2 = r2;
              r2 = n2, n2 = f2;
            }
          return e2.revert(r2);
        }, o.prototype.chunkSize = function(t2) {
          return Math.floor(Math.LN2 * this.DB / Math.log(t2));
        }, o.prototype.toRadix = function(t2) {
          if (null == t2 && (t2 = 10), 0 === this.signum() || t2 < 2 || t2 > 36)
            return "0";
          var e2 = this.chunkSize(t2), r2 = Math.pow(t2, e2), n2 = d(r2), i2 = a(), o2 = a(), s2 = "";
          for (this.divRemTo(n2, i2, o2); i2.signum() > 0; )
            s2 = (r2 + o2.intValue()).toString(t2).substr(1) + s2, i2.divRemTo(n2, i2, o2);
          return o2.intValue().toString(t2) + s2;
        }, o.prototype.fromRadix = function(t2, e2) {
          this.fromInt(0), null == e2 && (e2 = 10);
          for (var r2 = this.chunkSize(e2), n2 = Math.pow(e2, r2), i2 = false, a2 = 0, s2 = 0, f2 = 0; f2 < t2.length; ++f2) {
            var h2 = c(t2, f2);
            h2 < 0 ? "-" == t2.charAt(f2) && 0 === this.signum() && (i2 = true) : (s2 = e2 * s2 + h2, ++a2 >= r2 && (this.dMultiply(n2), this.dAddOffset(s2, 0), a2 = 0, s2 = 0));
          }
          a2 > 0 && (this.dMultiply(Math.pow(e2, a2)), this.dAddOffset(s2, 0)), i2 && o.ZERO.subTo(this, this);
        }, o.prototype.fromNumber = function(t2, e2) {
          if ("number" == typeof e2)
            if (t2 < 2)
              this.fromInt(1);
            else
              for (this.fromNumber(t2), this.testBit(t2 - 1) || this.bitwiseTo(o.ONE.shiftLeft(t2 - 1), g, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(e2); )
                this.dAddOffset(2, 0), this.bitLength() > t2 && this.subTo(o.ONE.shiftLeft(t2 - 1), this);
          else {
            var r2 = n.randomBytes(1 + (t2 >> 3)), i2 = 7 & t2;
            i2 > 0 ? r2[0] &= (1 << i2) - 1 : r2[0] = 0, this.fromByteArray(r2);
          }
        }, o.prototype.bitwiseTo = function(t2, e2, r2) {
          var n2, i2, o2 = Math.min(t2.t, this.t);
          for (n2 = 0; n2 < o2; ++n2)
            r2[n2] = e2(this[n2], t2[n2]);
          if (t2.t < this.t) {
            for (i2 = t2.s & this.DM, n2 = o2; n2 < this.t; ++n2)
              r2[n2] = e2(this[n2], i2);
            r2.t = this.t;
          } else {
            for (i2 = this.s & this.DM, n2 = o2; n2 < t2.t; ++n2)
              r2[n2] = e2(i2, t2[n2]);
            r2.t = t2.t;
          }
          r2.s = e2(this.s, t2.s), r2.clamp();
        }, o.prototype.changeBit = function(t2, e2) {
          var r2 = o.ONE.shiftLeft(t2);
          return this.bitwiseTo(r2, e2, r2), r2;
        }, o.prototype.addTo = function(t2, e2) {
          for (var r2 = 0, n2 = 0, i2 = Math.min(t2.t, this.t); r2 < i2; )
            n2 += this[r2] + t2[r2], e2[r2++] = n2 & this.DM, n2 >>= this.DB;
          if (t2.t < this.t) {
            for (n2 += t2.s; r2 < this.t; )
              n2 += this[r2], e2[r2++] = n2 & this.DM, n2 >>= this.DB;
            n2 += this.s;
          } else {
            for (n2 += this.s; r2 < t2.t; )
              n2 += t2[r2], e2[r2++] = n2 & this.DM, n2 >>= this.DB;
            n2 += t2.s;
          }
          e2.s = n2 < 0 ? -1 : 0, n2 > 0 ? e2[r2++] = n2 : n2 < -1 && (e2[r2++] = this.DV + n2), e2.t = r2, e2.clamp();
        }, o.prototype.dMultiply = function(t2) {
          this[this.t] = this.am(0, t2 - 1, this, 0, 0, this.t), ++this.t, this.clamp();
        }, o.prototype.dAddOffset = function(t2, e2) {
          if (0 !== t2) {
            for (; this.t <= e2; )
              this[this.t++] = 0;
            for (this[e2] += t2; this[e2] >= this.DV; )
              this[e2] -= this.DV, ++e2 >= this.t && (this[this.t++] = 0), ++this[e2];
          }
        }, o.prototype.multiplyLowerTo = function(t2, e2, r2) {
          var n2, i2 = Math.min(this.t + t2.t, e2);
          for (r2.s = 0, r2.t = i2; i2 > 0; )
            r2[--i2] = 0;
          for (n2 = r2.t - this.t; i2 < n2; ++i2)
            r2[i2 + this.t] = this.am(0, t2[i2], r2, i2, 0, this.t);
          for (n2 = Math.min(t2.t, e2); i2 < n2; ++i2)
            this.am(0, t2[i2], r2, i2, 0, e2 - i2);
          r2.clamp();
        }, o.prototype.multiplyUpperTo = function(t2, e2, r2) {
          --e2;
          var n2 = r2.t = this.t + t2.t - e2;
          for (r2.s = 0; --n2 >= 0; )
            r2[n2] = 0;
          for (n2 = Math.max(e2 - this.t, 0); n2 < t2.t; ++n2)
            r2[this.t + n2 - e2] = this.am(e2 - n2, t2[n2], r2, 0, 0, this.t + n2 - e2);
          r2.clamp(), r2.drShiftTo(1, r2);
        }, o.prototype.modInt = function(t2) {
          if (t2 <= 0)
            return 0;
          var e2 = this.DV % t2, r2 = this.s < 0 ? t2 - 1 : 0;
          if (this.t > 0)
            if (0 === e2)
              r2 = this[0] % t2;
            else
              for (var n2 = this.t - 1; n2 >= 0; --n2)
                r2 = (e2 * r2 + this[n2]) % t2;
          return r2;
        }, o.prototype.millerRabin = function(t2) {
          var e2 = this.subtract(o.ONE), r2 = e2.getLowestSetBit();
          if (r2 <= 0)
            return false;
          var n2 = e2.shiftRight(r2);
          (t2 = t2 + 1 >> 1) > A.length && (t2 = A.length);
          for (var i2 = a(), s2 = 0; s2 < t2; ++s2) {
            i2.fromInt(A[Math.floor(Math.random() * A.length)]);
            var f2 = i2.modPow(n2, this);
            if (0 != f2.compareTo(o.ONE) && 0 != f2.compareTo(e2)) {
              for (var h2 = 1; h2++ < r2 && 0 != f2.compareTo(e2); )
                if (0 === (f2 = f2.modPowInt(2, this)).compareTo(o.ONE))
                  return false;
              if (0 != f2.compareTo(e2))
                return false;
            }
          }
          return true;
        }, o.prototype.toString = function(t2) {
          if (this.s < 0)
            return "-" + this.negate().toString(t2);
          var e2;
          if (16 == t2)
            e2 = 4;
          else if (8 == t2)
            e2 = 3;
          else if (2 == t2)
            e2 = 1;
          else if (32 == t2)
            e2 = 5;
          else {
            if (4 != t2)
              return this.toRadix(t2);
            e2 = 2;
          }
          var r2, n2 = (1 << e2) - 1, i2 = false, o2 = "", a2 = this.t, s2 = this.DB - a2 * this.DB % e2;
          if (a2-- > 0)
            for (s2 < this.DB && (r2 = this[a2] >> s2) > 0 && (i2 = true, o2 = u(r2)); a2 >= 0; )
              s2 < e2 ? (r2 = (this[a2] & (1 << s2) - 1) << e2 - s2, r2 |= this[--a2] >> (s2 += this.DB - e2)) : (r2 = this[a2] >> (s2 -= e2) & n2, s2 <= 0 && (s2 += this.DB, --a2)), r2 > 0 && (i2 = true), i2 && (o2 += u(r2));
          return i2 ? o2 : "0";
        }, o.prototype.negate = function() {
          var t2 = a();
          return o.ZERO.subTo(this, t2), t2;
        }, o.prototype.abs = function() {
          return this.s < 0 ? this.negate() : this;
        }, o.prototype.compareTo = function(t2) {
          var e2 = this.s - t2.s;
          if (0 != e2)
            return e2;
          var r2 = this.t;
          if (0 != (e2 = r2 - t2.t))
            return this.s < 0 ? -e2 : e2;
          for (; --r2 >= 0; )
            if (0 != (e2 = this[r2] - t2[r2]))
              return e2;
          return 0;
        }, o.prototype.bitLength = function() {
          return this.t <= 0 ? 0 : this.DB * (this.t - 1) + l(this[this.t - 1] ^ this.s & this.DM);
        }, o.prototype.mod = function(t2) {
          var e2 = a();
          return this.abs().divRemTo(t2, null, e2), this.s < 0 && e2.compareTo(o.ZERO) > 0 && t2.subTo(e2, e2), e2;
        }, o.prototype.modPowInt = function(t2, e2) {
          var r2;
          return r2 = t2 < 256 || e2.isEven() ? new p(e2) : new b(e2), this.exp(t2, r2);
        }, o.prototype.clone = function() {
          var t2 = a();
          return this.copyTo(t2), t2;
        }, o.prototype.intValue = function() {
          if (this.s < 0) {
            if (1 == this.t)
              return this[0] - this.DV;
            if (0 === this.t)
              return -1;
          } else {
            if (1 == this.t)
              return this[0];
            if (0 === this.t)
              return 0;
          }
          return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
        }, o.prototype.byteValue = function() {
          return 0 == this.t ? this.s : this[0] << 24 >> 24;
        }, o.prototype.shortValue = function() {
          return 0 == this.t ? this.s : this[0] << 16 >> 16;
        }, o.prototype.signum = function() {
          return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1;
        }, o.prototype.toByteArray = function() {
          var t2 = this.t, e2 = new Array();
          e2[0] = this.s;
          var r2, n2 = this.DB - t2 * this.DB % 8, i2 = 0;
          if (t2-- > 0)
            for (n2 < this.DB && (r2 = this[t2] >> n2) != (this.s & this.DM) >> n2 && (e2[i2++] = r2 | this.s << this.DB - n2); t2 >= 0; )
              n2 < 8 ? (r2 = (this[t2] & (1 << n2) - 1) << 8 - n2, r2 |= this[--t2] >> (n2 += this.DB - 8)) : (r2 = this[t2] >> (n2 -= 8) & 255, n2 <= 0 && (n2 += this.DB, --t2)), 128 & r2 && (r2 |= -256), 0 === i2 && (128 & this.s) != (128 & r2) && ++i2, (i2 > 0 || r2 != this.s) && (e2[i2++] = r2);
          return e2;
        }, o.prototype.toBuffer = function(t2) {
          var e2 = Buffer.from(this.toByteArray());
          if (true === t2 && 0 === e2[0])
            e2 = e2.slice(1);
          else if (i.isNumber(t2)) {
            if (e2.length > t2) {
              for (var r2 = 0; r2 < e2.length - t2; r2++)
                if (0 !== e2[r2])
                  return null;
              return e2.slice(e2.length - t2);
            }
            if (e2.length < t2) {
              var n2 = Buffer.alloc(t2);
              return n2.fill(0, 0, t2 - e2.length), e2.copy(n2, t2 - e2.length), n2;
            }
          }
          return e2;
        }, o.prototype.equals = function(t2) {
          return 0 == this.compareTo(t2);
        }, o.prototype.min = function(t2) {
          return this.compareTo(t2) < 0 ? this : t2;
        }, o.prototype.max = function(t2) {
          return this.compareTo(t2) > 0 ? this : t2;
        }, o.prototype.and = function(t2) {
          var e2 = a();
          return this.bitwiseTo(t2, y, e2), e2;
        }, o.prototype.or = function(t2) {
          var e2 = a();
          return this.bitwiseTo(t2, g, e2), e2;
        }, o.prototype.xor = function(t2) {
          var e2 = a();
          return this.bitwiseTo(t2, m, e2), e2;
        }, o.prototype.andNot = function(t2) {
          var e2 = a();
          return this.bitwiseTo(t2, v, e2), e2;
        }, o.prototype.not = function() {
          for (var t2 = a(), e2 = 0; e2 < this.t; ++e2)
            t2[e2] = this.DM & ~this[e2];
          return t2.t = this.t, t2.s = ~this.s, t2;
        }, o.prototype.shiftLeft = function(t2) {
          var e2 = a();
          return t2 < 0 ? this.rShiftTo(-t2, e2) : this.lShiftTo(t2, e2), e2;
        }, o.prototype.shiftRight = function(t2) {
          var e2 = a();
          return t2 < 0 ? this.lShiftTo(-t2, e2) : this.rShiftTo(t2, e2), e2;
        }, o.prototype.getLowestSetBit = function() {
          for (var t2 = 0; t2 < this.t; ++t2)
            if (0 != this[t2])
              return t2 * this.DB + w(this[t2]);
          return this.s < 0 ? this.t * this.DB : -1;
        }, o.prototype.bitCount = function() {
          for (var t2 = 0, e2 = this.s & this.DM, r2 = 0; r2 < this.t; ++r2)
            t2 += _(this[r2] ^ e2);
          return t2;
        }, o.prototype.testBit = function(t2) {
          var e2 = Math.floor(t2 / this.DB);
          return e2 >= this.t ? 0 != this.s : !!(this[e2] & 1 << t2 % this.DB);
        }, o.prototype.setBit = function(t2) {
          return this.changeBit(t2, g);
        }, o.prototype.clearBit = function(t2) {
          return this.changeBit(t2, v);
        }, o.prototype.flipBit = function(t2) {
          return this.changeBit(t2, m);
        }, o.prototype.add = function(t2) {
          var e2 = a();
          return this.addTo(t2, e2), e2;
        }, o.prototype.subtract = function(t2) {
          var e2 = a();
          return this.subTo(t2, e2), e2;
        }, o.prototype.multiply = function(t2) {
          var e2 = a();
          return this.multiplyTo(t2, e2), e2;
        }, o.prototype.divide = function(t2) {
          var e2 = a();
          return this.divRemTo(t2, e2, null), e2;
        }, o.prototype.remainder = function(t2) {
          var e2 = a();
          return this.divRemTo(t2, null, e2), e2;
        }, o.prototype.divideAndRemainder = function(t2) {
          var e2 = a(), r2 = a();
          return this.divRemTo(t2, e2, r2), new Array(e2, r2);
        }, o.prototype.modPow = function(t2, e2) {
          var r2, n2, i2 = t2.bitLength(), o2 = d(1);
          if (i2 <= 0)
            return o2;
          r2 = i2 < 18 ? 1 : i2 < 48 ? 3 : i2 < 144 ? 4 : i2 < 768 ? 5 : 6, n2 = i2 < 8 ? new p(e2) : e2.isEven() ? new M(e2) : new b(e2);
          var s2 = new Array(), f2 = 3, h2 = r2 - 1, u2 = (1 << r2) - 1;
          if (s2[1] = n2.convert(this), r2 > 1) {
            var c2 = a();
            for (n2.sqrTo(s2[1], c2); f2 <= u2; )
              s2[f2] = a(), n2.mulTo(c2, s2[f2 - 2], s2[f2]), f2 += 2;
          }
          var y2, g2, m2 = t2.t - 1, v2 = true, w2 = a();
          for (i2 = l(t2[m2]) - 1; m2 >= 0; ) {
            for (i2 >= h2 ? y2 = t2[m2] >> i2 - h2 & u2 : (y2 = (t2[m2] & (1 << i2 + 1) - 1) << h2 - i2, m2 > 0 && (y2 |= t2[m2 - 1] >> this.DB + i2 - h2)), f2 = r2; !(1 & y2); )
              y2 >>= 1, --f2;
            if ((i2 -= f2) < 0 && (i2 += this.DB, --m2), v2)
              s2[y2].copyTo(o2), v2 = false;
            else {
              for (; f2 > 1; )
                n2.sqrTo(o2, w2), n2.sqrTo(w2, o2), f2 -= 2;
              f2 > 0 ? n2.sqrTo(o2, w2) : (g2 = o2, o2 = w2, w2 = g2), n2.mulTo(w2, s2[y2], o2);
            }
            for (; m2 >= 0 && !(t2[m2] & 1 << i2); )
              n2.sqrTo(o2, w2), g2 = o2, o2 = w2, w2 = g2, --i2 < 0 && (i2 = this.DB - 1, --m2);
          }
          return n2.revert(o2);
        }, o.prototype.modInverse = function(t2) {
          var e2 = t2.isEven();
          if (this.isEven() && e2 || 0 === t2.signum())
            return o.ZERO;
          for (var r2 = t2.clone(), n2 = this.clone(), i2 = d(1), a2 = d(0), s2 = d(0), f2 = d(1); 0 != r2.signum(); ) {
            for (; r2.isEven(); )
              r2.rShiftTo(1, r2), e2 ? (i2.isEven() && a2.isEven() || (i2.addTo(this, i2), a2.subTo(t2, a2)), i2.rShiftTo(1, i2)) : a2.isEven() || a2.subTo(t2, a2), a2.rShiftTo(1, a2);
            for (; n2.isEven(); )
              n2.rShiftTo(1, n2), e2 ? (s2.isEven() && f2.isEven() || (s2.addTo(this, s2), f2.subTo(t2, f2)), s2.rShiftTo(1, s2)) : f2.isEven() || f2.subTo(t2, f2), f2.rShiftTo(1, f2);
            r2.compareTo(n2) >= 0 ? (r2.subTo(n2, r2), e2 && i2.subTo(s2, i2), a2.subTo(f2, a2)) : (n2.subTo(r2, n2), e2 && s2.subTo(i2, s2), f2.subTo(a2, f2));
          }
          return 0 != n2.compareTo(o.ONE) ? o.ZERO : f2.compareTo(t2) >= 0 ? f2.subtract(t2) : f2.signum() < 0 ? (f2.addTo(t2, f2), f2.signum() < 0 ? f2.add(t2) : f2) : f2;
        }, o.prototype.pow = function(t2) {
          return this.exp(t2, new S());
        }, o.prototype.gcd = function(t2) {
          var e2 = this.s < 0 ? this.negate() : this.clone(), r2 = t2.s < 0 ? t2.negate() : t2.clone();
          if (e2.compareTo(r2) < 0) {
            var n2 = e2;
            e2 = r2, r2 = n2;
          }
          var i2 = e2.getLowestSetBit(), o2 = r2.getLowestSetBit();
          if (o2 < 0)
            return e2;
          for (i2 < o2 && (o2 = i2), o2 > 0 && (e2.rShiftTo(o2, e2), r2.rShiftTo(o2, r2)); e2.signum() > 0; )
            (i2 = e2.getLowestSetBit()) > 0 && e2.rShiftTo(i2, e2), (i2 = r2.getLowestSetBit()) > 0 && r2.rShiftTo(i2, r2), e2.compareTo(r2) >= 0 ? (e2.subTo(r2, e2), e2.rShiftTo(1, e2)) : (r2.subTo(e2, r2), r2.rShiftTo(1, r2));
          return o2 > 0 && r2.lShiftTo(o2, r2), r2;
        }, o.prototype.isProbablePrime = function(t2) {
          var e2, r2 = this.abs();
          if (1 == r2.t && r2[0] <= A[A.length - 1]) {
            for (e2 = 0; e2 < A.length; ++e2)
              if (r2[0] == A[e2])
                return true;
            return false;
          }
          if (r2.isEven())
            return false;
          for (e2 = 1; e2 < A.length; ) {
            for (var n2 = A[e2], i2 = e2 + 1; i2 < A.length && n2 < k; )
              n2 *= A[i2++];
            for (n2 = r2.modInt(n2); e2 < i2; )
              if (n2 % A[e2++] == 0)
                return false;
          }
          return r2.millerRabin(t2);
        }, o.int2char = u, o.ZERO = d(0), o.ONE = d(1), o.prototype.square = function() {
          var t2 = a();
          return this.squareTo(t2), t2;
        }, t.exports = o;
      }, 7655: (t, e, r) => {
        var n = r(7413)._, i = (r(6855), r(214)), o = r(7413), a = r(1899), s = r(5705);
        e.BigInteger = i, t.exports.Key = function() {
          function t2() {
            this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, this.dmq1 = null, this.coeff = null;
          }
          return t2.prototype.setOptions = function(t3) {
            var e2 = a[t3.signingScheme], r2 = a[t3.encryptionScheme];
            e2 === r2 ? this.signingScheme = this.encryptionScheme = r2.makeScheme(this, t3) : (this.encryptionScheme = r2.makeScheme(this, t3), this.signingScheme = e2.makeScheme(this, t3)), this.encryptEngine = s.getEngine(this, t3);
          }, t2.prototype.generate = function(t3, e2) {
            var r2 = t3 >> 1;
            this.e = parseInt(e2, 16);
            for (var n2 = new i(e2, 16); ; ) {
              for (; this.p = new i(t3 - r2, 1), 0 !== this.p.subtract(i.ONE).gcd(n2).compareTo(i.ONE) || !this.p.isProbablePrime(10); )
                ;
              for (; this.q = new i(r2, 1), 0 !== this.q.subtract(i.ONE).gcd(n2).compareTo(i.ONE) || !this.q.isProbablePrime(10); )
                ;
              if (this.p.compareTo(this.q) <= 0) {
                var o2 = this.p;
                this.p = this.q, this.q = o2;
              }
              var a2 = this.p.subtract(i.ONE), s2 = this.q.subtract(i.ONE), f = a2.multiply(s2);
              if (0 === f.gcd(n2).compareTo(i.ONE)) {
                if (this.n = this.p.multiply(this.q), this.n.bitLength() < t3)
                  continue;
                this.d = n2.modInverse(f), this.dmp1 = this.d.mod(a2), this.dmq1 = this.d.mod(s2), this.coeff = this.q.modInverse(this.p);
                break;
              }
            }
            this.$$recalculateCache();
          }, t2.prototype.setPrivate = function(t3, e2, r2, a2, s2, f, h, u) {
            if (!(t3 && e2 && r2 && t3.length > 0 && (n.isNumber(e2) || e2.length > 0) && r2.length > 0))
              throw Error("Invalid RSA private key");
            this.n = new i(t3), this.e = n.isNumber(e2) ? e2 : o.get32IntFromBuffer(e2, 0), this.d = new i(r2), a2 && s2 && f && h && u && (this.p = new i(a2), this.q = new i(s2), this.dmp1 = new i(f), this.dmq1 = new i(h), this.coeff = new i(u)), this.$$recalculateCache();
          }, t2.prototype.setPublic = function(t3, e2) {
            if (!(t3 && e2 && t3.length > 0 && (n.isNumber(e2) || e2.length > 0)))
              throw Error("Invalid RSA public key");
            this.n = new i(t3), this.e = n.isNumber(e2) ? e2 : o.get32IntFromBuffer(e2, 0), this.$$recalculateCache();
          }, t2.prototype.$doPrivate = function(t3) {
            if (this.p || this.q)
              return t3.modPow(this.d, this.n);
            for (var e2 = t3.mod(this.p).modPow(this.dmp1, this.p), r2 = t3.mod(this.q).modPow(this.dmq1, this.q); e2.compareTo(r2) < 0; )
              e2 = e2.add(this.p);
            return e2.subtract(r2).multiply(this.coeff).mod(this.p).multiply(this.q).add(r2);
          }, t2.prototype.$doPublic = function(t3) {
            return t3.modPowInt(this.e, this.n);
          }, t2.prototype.encrypt = function(t3, e2) {
            var r2 = [], n2 = [], i2 = t3.length, o2 = Math.ceil(i2 / this.maxMessageLength) || 1, a2 = Math.ceil(i2 / o2 || 1);
            if (1 == o2)
              r2.push(t3);
            else
              for (var s2 = 0; s2 < o2; s2++)
                r2.push(t3.slice(s2 * a2, (s2 + 1) * a2));
            for (var f = 0; f < r2.length; f++)
              n2.push(this.encryptEngine.encrypt(r2[f], e2));
            return Buffer.concat(n2);
          }, t2.prototype.decrypt = function(t3, e2) {
            if (t3.length % this.encryptedDataLength > 0)
              throw Error("Incorrect data or key");
            for (var r2 = [], n2 = 0, i2 = 0, o2 = t3.length / this.encryptedDataLength, a2 = 0; a2 < o2; a2++)
              i2 = (n2 = a2 * this.encryptedDataLength) + this.encryptedDataLength, r2.push(this.encryptEngine.decrypt(t3.slice(n2, Math.min(i2, t3.length)), e2));
            return Buffer.concat(r2);
          }, t2.prototype.sign = function(t3) {
            return this.signingScheme.sign.apply(this.signingScheme, arguments);
          }, t2.prototype.verify = function(t3, e2, r2) {
            return this.signingScheme.verify.apply(this.signingScheme, arguments);
          }, t2.prototype.isPrivate = function() {
            return !!(this.n && this.e && this.d);
          }, t2.prototype.isPublic = function(t3) {
            return this.n && this.e && !(t3 && this.d) || false;
          }, Object.defineProperty(t2.prototype, "keySize", { get: function() {
            return this.cache.keyBitLength;
          } }), Object.defineProperty(t2.prototype, "encryptedDataLength", { get: function() {
            return this.cache.keyByteLength;
          } }), Object.defineProperty(t2.prototype, "maxMessageLength", { get: function() {
            return this.encryptionScheme.maxMessageLength();
          } }), t2.prototype.$$recalculateCache = function() {
            this.cache = this.cache || {}, this.cache.keyBitLength = this.n.bitLength(), this.cache.keyByteLength = this.cache.keyBitLength + 6 >> 3;
          }, t2;
        }();
      }, 1818: (t, e, r) => {
        r(214);
        var n = r(6855);
        t.exports = { isEncryption: true, isSignature: false }, t.exports.digestLength = { md4: 16, md5: 16, ripemd160: 20, rmd160: 20, sha1: 20, sha224: 28, sha256: 32, sha384: 48, sha512: 64 };
        var i = "sha1";
        t.exports.eme_oaep_mgf1 = function(e2, r2, o) {
          o = o || i;
          for (var a = t.exports.digestLength[o], s = Math.ceil(r2 / a), f = Buffer.alloc(a * s), h = Buffer.alloc(4), u = 0; u < s; ++u) {
            var c = n.createHash(o);
            c.update(e2), h.writeUInt32BE(u, 0), c.update(h), c.digest().copy(f, u * a);
          }
          return f.slice(0, r2);
        }, t.exports.makeScheme = function(e2, r2) {
          function o(t2, e3) {
            this.key = t2, this.options = e3;
          }
          return o.prototype.maxMessageLength = function() {
            return this.key.encryptedDataLength - 2 * t.exports.digestLength[this.options.encryptionSchemeOptions.hash || i] - 2;
          }, o.prototype.encPad = function(e3) {
            var r3 = this.options.encryptionSchemeOptions.hash || i, o2 = this.options.encryptionSchemeOptions.mgf || t.exports.eme_oaep_mgf1, a = this.options.encryptionSchemeOptions.label || Buffer.alloc(0), s = this.key.encryptedDataLength, f = t.exports.digestLength[r3];
            if (e3.length > s - 2 * f - 2)
              throw new Error("Message is too long to encode into an encoded message with a length of " + s + " bytes, increaseemLen to fix this error (minimum value for given parameters and options: " + (s - 2 * f - 2) + ")");
            var h = n.createHash(r3);
            h.update(a), h = h.digest();
            var u = Buffer.alloc(s - e3.length - 2 * f - 1);
            u.fill(0), u[u.length - 1] = 1;
            for (var c = Buffer.concat([h, u, e3]), d = n.randomBytes(f), l = o2(d, c.length, r3), p = 0; p < c.length; p++)
              c[p] ^= l[p];
            for (l = o2(c, f, r3), p = 0; p < d.length; p++)
              d[p] ^= l[p];
            var b = Buffer.alloc(1 + d.length + c.length);
            return b[0] = 0, d.copy(b, 1), c.copy(b, 1 + d.length), b;
          }, o.prototype.encUnPad = function(e3) {
            var r3 = this.options.encryptionSchemeOptions.hash || i, o2 = this.options.encryptionSchemeOptions.mgf || t.exports.eme_oaep_mgf1, a = this.options.encryptionSchemeOptions.label || Buffer.alloc(0), s = t.exports.digestLength[r3];
            if (e3.length < 2 * s + 2)
              throw new Error("Error decoding message, the supplied message is not long enough to be a valid OAEP encoded message");
            for (var f = e3.slice(1, s + 1), h = e3.slice(1 + s), u = o2(h, s, r3), c = 0; c < f.length; c++)
              f[c] ^= u[c];
            for (u = o2(f, h.length, r3), c = 0; c < h.length; c++)
              h[c] ^= u[c];
            var d = n.createHash(r3);
            if (d.update(a), d = d.digest(), h.slice(0, s).toString("hex") != d.toString("hex"))
              throw new Error("Error decoding message, the lHash calculated from the label provided and the lHash in the encrypted data do not match.");
            for (c = s; 0 === h[c++] && c < h.length; )
              ;
            if (1 != h[c - 1])
              throw new Error("Error decoding message, there is no padding message separator byte");
            return h.slice(c);
          }, new o(e2, r2);
        };
      }, 93: (t, e, r) => {
        var n = r(214), i = r(6855), o = r(480), a = { md2: Buffer.from("3020300c06082a864886f70d020205000410", "hex"), md5: Buffer.from("3020300c06082a864886f70d020505000410", "hex"), sha1: Buffer.from("3021300906052b0e03021a05000414", "hex"), sha224: Buffer.from("302d300d06096086480165030402040500041c", "hex"), sha256: Buffer.from("3031300d060960864801650304020105000420", "hex"), sha384: Buffer.from("3041300d060960864801650304020205000430", "hex"), sha512: Buffer.from("3051300d060960864801650304020305000440", "hex"), ripemd160: Buffer.from("3021300906052b2403020105000414", "hex"), rmd160: Buffer.from("3021300906052b2403020105000414", "hex") }, s = { ripemd160: "rmd160" }, f = "sha256";
        t.exports = { isEncryption: true, isSignature: true }, t.exports.makeScheme = function(t2, e2) {
          function r2(t3, e3) {
            this.key = t3, this.options = e3;
          }
          return r2.prototype.maxMessageLength = function() {
            return this.options.encryptionSchemeOptions && this.options.encryptionSchemeOptions.padding == o.RSA_NO_PADDING ? this.key.encryptedDataLength : this.key.encryptedDataLength - 11;
          }, r2.prototype.encPad = function(t3, e3) {
            var r3;
            if (e3 = e3 || {}, t3.length > this.key.maxMessageLength)
              throw new Error("Message too long for RSA (n=" + this.key.encryptedDataLength + ", l=" + t3.length + ")");
            if (this.options.encryptionSchemeOptions && this.options.encryptionSchemeOptions.padding == o.RSA_NO_PADDING)
              return (r3 = Buffer.alloc(this.key.maxMessageLength - t3.length)).fill(0), Buffer.concat([r3, t3]);
            if (1 === e3.type)
              return (r3 = Buffer.alloc(this.key.encryptedDataLength - t3.length - 1)).fill(255, 0, r3.length - 1), r3[0] = 1, r3[r3.length - 1] = 0, Buffer.concat([r3, t3]);
            (r3 = Buffer.alloc(this.key.encryptedDataLength - t3.length))[0] = 0, r3[1] = 2;
            for (var n2 = i.randomBytes(r3.length - 3), a2 = 0; a2 < n2.length; a2++) {
              for (var s2 = n2[a2]; 0 === s2; )
                s2 = i.randomBytes(1)[0];
              r3[a2 + 2] = s2;
            }
            return r3[r3.length - 1] = 0, Buffer.concat([r3, t3]);
          }, r2.prototype.encUnPad = function(t3, e3) {
            e3 = e3 || {};
            var r3 = 0;
            if (this.options.encryptionSchemeOptions && this.options.encryptionSchemeOptions.padding == o.RSA_NO_PADDING)
              return "function" == typeof t3.lastIndexOf ? t3.slice(t3.lastIndexOf("\0") + 1, t3.length) : t3.slice(String.prototype.lastIndexOf.call(t3, "\0") + 1, t3.length);
            if (t3.length < 4)
              return null;
            if (1 === e3.type) {
              if (0 !== t3[0] || 1 !== t3[1])
                return null;
              for (r3 = 3; 0 !== t3[r3]; )
                if (255 != t3[r3] || ++r3 >= t3.length)
                  return null;
            } else {
              if (0 !== t3[0] || 2 !== t3[1])
                return null;
              for (r3 = 3; 0 !== t3[r3]; )
                if (++r3 >= t3.length)
                  return null;
            }
            return t3.slice(r3 + 1, t3.length);
          }, r2.prototype.sign = function(t3) {
            var e3 = this.options.signingSchemeOptions.hash || f;
            if ("browser" === this.options.environment) {
              e3 = s[e3] || e3;
              var r3 = i.createHash(e3);
              r3.update(t3);
              var o2 = this.pkcs1pad(r3.digest(), e3);
              return this.key.$doPrivate(new n(o2)).toBuffer(this.key.encryptedDataLength);
            }
            var a2 = i.createSign("RSA-" + e3.toUpperCase());
            return a2.update(t3), a2.sign(this.options.rsaUtils.exportKey("private"));
          }, r2.prototype.verify = function(t3, e3, r3) {
            if (this.options.encryptionSchemeOptions && this.options.encryptionSchemeOptions.padding == o.RSA_NO_PADDING)
              return false;
            var a2 = this.options.signingSchemeOptions.hash || f;
            if ("browser" === this.options.environment) {
              a2 = s[a2] || a2, r3 && (e3 = Buffer.from(e3, r3));
              var h = i.createHash(a2);
              h.update(t3);
              var u = this.pkcs1pad(h.digest(), a2);
              return this.key.$doPublic(new n(e3)).toBuffer().toString("hex") == u.toString("hex");
            }
            var c = i.createVerify("RSA-" + a2.toUpperCase());
            return c.update(t3), c.verify(this.options.rsaUtils.exportKey("public"), e3, r3);
          }, r2.prototype.pkcs0pad = function(t3) {
            var e3 = Buffer.alloc(this.key.maxMessageLength - t3.length);
            return e3.fill(0), Buffer.concat([e3, t3]);
          }, r2.prototype.pkcs0unpad = function(t3) {
            return "function" == typeof t3.lastIndexOf ? t3.slice(t3.lastIndexOf("\0") + 1, t3.length) : t3.slice(String.prototype.lastIndexOf.call(t3, "\0") + 1, t3.length);
          }, r2.prototype.pkcs1pad = function(t3, e3) {
            var r3 = a[e3];
            if (!r3)
              throw Error("Unsupported hash algorithm");
            var n2 = Buffer.concat([r3, t3]);
            if (n2.length + 10 > this.key.encryptedDataLength)
              throw Error("Key is too short for signing algorithm (" + e3 + ")");
            var i2 = Buffer.alloc(this.key.encryptedDataLength - n2.length - 1);
            return i2.fill(255, 0, i2.length - 1), i2[0] = 1, i2[i2.length - 1] = 0, Buffer.concat([i2, n2]);
          }, new r2(t2, e2);
        };
      }, 5465: (t, e, r) => {
        var n = r(214), i = r(6855);
        t.exports = { isEncryption: false, isSignature: true };
        var o = "sha1";
        t.exports.makeScheme = function(t2, e2) {
          var a = r(1899).pkcs1_oaep;
          function s(t3, e3) {
            this.key = t3, this.options = e3;
          }
          return s.prototype.sign = function(t3) {
            var e3 = i.createHash(this.options.signingSchemeOptions.hash || o);
            e3.update(t3);
            var r2 = this.emsa_pss_encode(e3.digest(), this.key.keySize - 1);
            return this.key.$doPrivate(new n(r2)).toBuffer(this.key.encryptedDataLength);
          }, s.prototype.verify = function(t3, e3, r2) {
            r2 && (e3 = Buffer.from(e3, r2)), e3 = new n(e3);
            var a2 = Math.ceil((this.key.keySize - 1) / 8), s2 = this.key.$doPublic(e3).toBuffer(a2), f = i.createHash(this.options.signingSchemeOptions.hash || o);
            return f.update(t3), this.emsa_pss_verify(f.digest(), s2, this.key.keySize - 1);
          }, s.prototype.emsa_pss_encode = function(t3, e3) {
            var r2 = this.options.signingSchemeOptions.hash || o, n2 = this.options.signingSchemeOptions.mgf || a.eme_oaep_mgf1, s2 = this.options.signingSchemeOptions.saltLength || 20, f = a.digestLength[r2], h = Math.ceil(e3 / 8);
            if (h < f + s2 + 2)
              throw new Error("Output length passed to emBits(" + e3 + ") is too small for the options specified(" + r2 + ", " + s2 + "). To fix this issue increase the value of emBits. (minimum size: " + (8 * f + 8 * s2 + 9) + ")");
            var u = i.randomBytes(s2), c = Buffer.alloc(8 + f + s2);
            c.fill(0, 0, 8), t3.copy(c, 8), u.copy(c, 8 + t3.length);
            var d = i.createHash(r2);
            d.update(c), d = d.digest();
            var l = Buffer.alloc(h - u.length - f - 2);
            l.fill(0);
            var p = Buffer.alloc(l.length + 1 + u.length);
            l.copy(p), p[l.length] = 1, u.copy(p, l.length + 1);
            for (var b = n2(d, p.length, r2), y = Buffer.alloc(p.length), g = 0; g < b.length; g++)
              y[g] = p[g] ^ b[g];
            var m = 8 * h - e3, v = 255 ^ 255 >> 8 - m << 8 - m;
            y[0] = y[0] & v;
            var w = Buffer.alloc(y.length + d.length + 1);
            return y.copy(w, 0), d.copy(w, y.length), w[w.length - 1] = 188, w;
          }, s.prototype.emsa_pss_verify = function(t3, e3, r2) {
            var n2 = this.options.signingSchemeOptions.hash || o, s2 = this.options.signingSchemeOptions.mgf || a.eme_oaep_mgf1, f = this.options.signingSchemeOptions.saltLength || 20, h = a.digestLength[n2], u = Math.ceil(r2 / 8);
            if (u < h + f + 2 || 188 != e3[e3.length - 1])
              return false;
            var c = Buffer.alloc(u - h - 1);
            e3.copy(c, 0, 0, u - h - 1);
            for (var d = 0, l = 0, p = 8 * u - r2; l < p; l++)
              d |= 1 << 7 - l;
            if (c[0] & d)
              return false;
            var b = e3.slice(u - h - 1, u - 1), y = s2(b, c.length, n2);
            for (l = 0; l < c.length; l++)
              c[l] ^= y[l];
            for (d = 255 ^ 255 >> 8 - (p = 8 * u - r2) << 8 - p, c[0] = c[0] & d, l = 0; 0 === c[l] && l < c.length; l++)
              ;
            if (1 != c[l])
              return false;
            var g = c.slice(c.length - f), m = Buffer.alloc(8 + h + f);
            m.fill(0, 0, 8), t3.copy(m, 8), g.copy(m, 8 + t3.length);
            var v = i.createHash(n2);
            return v.update(m), v = v.digest(), b.toString("hex") === v.toString("hex");
          }, new s(t2, e2);
        };
      }, 1899: (t, e, r) => {
        t.exports = { pkcs1: r(93), pkcs1_oaep: r(1818), pss: r(5465), isEncryption: function(e2) {
          return t.exports[e2] && t.exports[e2].isEncryption;
        }, isSignature: function(e2) {
          return t.exports[e2] && t.exports[e2].isSignature;
        } };
      }, 7413: (t, e, r) => {
        r(6855), t.exports.linebrk = function(t2, e2) {
          for (var r2 = "", n = 0; n + e2 < t2.length; )
            r2 += t2.substring(n, n + e2) + "\n", n += e2;
          return r2 + t2.substring(n, t2.length);
        }, t.exports.detectEnvironment = function() {
          return "browser";
        }, t.exports.get32IntFromBuffer = function(t2, e2) {
          var r2;
          if (e2 = e2 || 0, (r2 = t2.length - e2) > 0) {
            if (r2 >= 4)
              return t2.readUIntBE(e2, r2);
            for (var n = 0, i = e2 + r2, o = 0; i > e2; i--, o += 2)
              n += t2[i - 1] * Math.pow(16, o);
            return n;
          }
          return NaN;
        }, t.exports._ = { isObject: function(t2) {
          var e2 = typeof t2;
          return !!t2 && ("object" == e2 || "function" == e2);
        }, isString: function(t2) {
          return "string" == typeof t2 || t2 instanceof String;
        }, isNumber: function(t2) {
          return "number" == typeof t2 || !isNaN(parseFloat(t2)) && isFinite(t2);
        }, omit: function(t2, e2) {
          var r2 = {};
          for (var n in t2)
            t2.hasOwnProperty(n) && n !== e2 && (r2[n] = t2[n]);
          return r2;
        } }, t.exports.trimSurroundingText = function(t2, e2, r2) {
          var n = 0, i = t2.length, o = t2.indexOf(e2);
          o >= 0 && (n = o + e2.length);
          var a = t2.indexOf(r2, o);
          return a >= 0 && (i = a), t2.substring(n, i);
        };
      }, 4654: () => {
      }, 4149: () => {
      }, 9780: () => {
      }, 9926: () => {
      }, 124: () => {
      }, 1220: () => {
      }, 8854: () => {
      }, 8468: (t, e, r) => {
        "use strict";
        var n = r(2830), i = "undefined" == typeof globalThis ? r.g : globalThis;
        t.exports = function() {
          for (var t2 = [], e2 = 0; e2 < n.length; e2++)
            "function" == typeof i[n[e2]] && (t2[t2.length] = n[e2]);
          return t2;
        };
      }, 9072: (t) => {
        "use strict";
        t.exports = JSON.parse('{"aes-128-ecb":{"cipher":"AES","key":128,"iv":0,"mode":"ECB","type":"block"},"aes-192-ecb":{"cipher":"AES","key":192,"iv":0,"mode":"ECB","type":"block"},"aes-256-ecb":{"cipher":"AES","key":256,"iv":0,"mode":"ECB","type":"block"},"aes-128-cbc":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes-192-cbc":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes-256-cbc":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes128":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes192":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes256":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes-128-cfb":{"cipher":"AES","key":128,"iv":16,"mode":"CFB","type":"stream"},"aes-192-cfb":{"cipher":"AES","key":192,"iv":16,"mode":"CFB","type":"stream"},"aes-256-cfb":{"cipher":"AES","key":256,"iv":16,"mode":"CFB","type":"stream"},"aes-128-cfb8":{"cipher":"AES","key":128,"iv":16,"mode":"CFB8","type":"stream"},"aes-192-cfb8":{"cipher":"AES","key":192,"iv":16,"mode":"CFB8","type":"stream"},"aes-256-cfb8":{"cipher":"AES","key":256,"iv":16,"mode":"CFB8","type":"stream"},"aes-128-cfb1":{"cipher":"AES","key":128,"iv":16,"mode":"CFB1","type":"stream"},"aes-192-cfb1":{"cipher":"AES","key":192,"iv":16,"mode":"CFB1","type":"stream"},"aes-256-cfb1":{"cipher":"AES","key":256,"iv":16,"mode":"CFB1","type":"stream"},"aes-128-ofb":{"cipher":"AES","key":128,"iv":16,"mode":"OFB","type":"stream"},"aes-192-ofb":{"cipher":"AES","key":192,"iv":16,"mode":"OFB","type":"stream"},"aes-256-ofb":{"cipher":"AES","key":256,"iv":16,"mode":"OFB","type":"stream"},"aes-128-ctr":{"cipher":"AES","key":128,"iv":16,"mode":"CTR","type":"stream"},"aes-192-ctr":{"cipher":"AES","key":192,"iv":16,"mode":"CTR","type":"stream"},"aes-256-ctr":{"cipher":"AES","key":256,"iv":16,"mode":"CTR","type":"stream"},"aes-128-gcm":{"cipher":"AES","key":128,"iv":12,"mode":"GCM","type":"auth"},"aes-192-gcm":{"cipher":"AES","key":192,"iv":12,"mode":"GCM","type":"auth"},"aes-256-gcm":{"cipher":"AES","key":256,"iv":12,"mode":"GCM","type":"auth"}}');
      }, 6178: (t) => {
        "use strict";
        t.exports = JSON.parse('{"sha224WithRSAEncryption":{"sign":"rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"RSA-SHA224":{"sign":"ecdsa/rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"sha256WithRSAEncryption":{"sign":"rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"RSA-SHA256":{"sign":"ecdsa/rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"sha384WithRSAEncryption":{"sign":"rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"RSA-SHA384":{"sign":"ecdsa/rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"sha512WithRSAEncryption":{"sign":"rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA512":{"sign":"ecdsa/rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA1":{"sign":"rsa","hash":"sha1","id":"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{"sign":"ecdsa","hash":"sha1","id":""},"sha256":{"sign":"ecdsa","hash":"sha256","id":""},"sha224":{"sign":"ecdsa","hash":"sha224","id":""},"sha384":{"sign":"ecdsa","hash":"sha384","id":""},"sha512":{"sign":"ecdsa","hash":"sha512","id":""},"DSA-SHA":{"sign":"dsa","hash":"sha1","id":""},"DSA-SHA1":{"sign":"dsa","hash":"sha1","id":""},"DSA":{"sign":"dsa","hash":"sha1","id":""},"DSA-WITH-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-WITH-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-WITH-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-WITH-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-RIPEMD160":{"sign":"dsa","hash":"rmd160","id":""},"ripemd160WithRSA":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"RSA-RIPEMD160":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"md5WithRSAEncryption":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"},"RSA-MD5":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"}}');
      }, 9644: (t) => {
        "use strict";
        t.exports = JSON.parse('{"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}');
      }, 480: (t) => {
        "use strict";
        t.exports = JSON.parse('{"O_RDONLY":0,"O_WRONLY":1,"O_RDWR":2,"S_IFMT":61440,"S_IFREG":32768,"S_IFDIR":16384,"S_IFCHR":8192,"S_IFBLK":24576,"S_IFIFO":4096,"S_IFLNK":40960,"S_IFSOCK":49152,"O_CREAT":512,"O_EXCL":2048,"O_NOCTTY":131072,"O_TRUNC":1024,"O_APPEND":8,"O_DIRECTORY":1048576,"O_NOFOLLOW":256,"O_SYNC":128,"O_SYMLINK":2097152,"O_NONBLOCK":4,"S_IRWXU":448,"S_IRUSR":256,"S_IWUSR":128,"S_IXUSR":64,"S_IRWXG":56,"S_IRGRP":32,"S_IWGRP":16,"S_IXGRP":8,"S_IRWXO":7,"S_IROTH":4,"S_IWOTH":2,"S_IXOTH":1,"E2BIG":7,"EACCES":13,"EADDRINUSE":48,"EADDRNOTAVAIL":49,"EAFNOSUPPORT":47,"EAGAIN":35,"EALREADY":37,"EBADF":9,"EBADMSG":94,"EBUSY":16,"ECANCELED":89,"ECHILD":10,"ECONNABORTED":53,"ECONNREFUSED":61,"ECONNRESET":54,"EDEADLK":11,"EDESTADDRREQ":39,"EDOM":33,"EDQUOT":69,"EEXIST":17,"EFAULT":14,"EFBIG":27,"EHOSTUNREACH":65,"EIDRM":90,"EILSEQ":92,"EINPROGRESS":36,"EINTR":4,"EINVAL":22,"EIO":5,"EISCONN":56,"EISDIR":21,"ELOOP":62,"EMFILE":24,"EMLINK":31,"EMSGSIZE":40,"EMULTIHOP":95,"ENAMETOOLONG":63,"ENETDOWN":50,"ENETRESET":52,"ENETUNREACH":51,"ENFILE":23,"ENOBUFS":55,"ENODATA":96,"ENODEV":19,"ENOENT":2,"ENOEXEC":8,"ENOLCK":77,"ENOLINK":97,"ENOMEM":12,"ENOMSG":91,"ENOPROTOOPT":42,"ENOSPC":28,"ENOSR":98,"ENOSTR":99,"ENOSYS":78,"ENOTCONN":57,"ENOTDIR":20,"ENOTEMPTY":66,"ENOTSOCK":38,"ENOTSUP":45,"ENOTTY":25,"ENXIO":6,"EOPNOTSUPP":102,"EOVERFLOW":84,"EPERM":1,"EPIPE":32,"EPROTO":100,"EPROTONOSUPPORT":43,"EPROTOTYPE":41,"ERANGE":34,"EROFS":30,"ESPIPE":29,"ESRCH":3,"ESTALE":70,"ETIME":101,"ETIMEDOUT":60,"ETXTBSY":26,"EWOULDBLOCK":35,"EXDEV":18,"SIGHUP":1,"SIGINT":2,"SIGQUIT":3,"SIGILL":4,"SIGTRAP":5,"SIGABRT":6,"SIGIOT":6,"SIGBUS":10,"SIGFPE":8,"SIGKILL":9,"SIGUSR1":30,"SIGSEGV":11,"SIGUSR2":31,"SIGPIPE":13,"SIGALRM":14,"SIGTERM":15,"SIGCHLD":20,"SIGCONT":19,"SIGSTOP":17,"SIGTSTP":18,"SIGTTIN":21,"SIGTTOU":22,"SIGURG":16,"SIGXCPU":24,"SIGXFSZ":25,"SIGVTALRM":26,"SIGPROF":27,"SIGWINCH":28,"SIGIO":23,"SIGSYS":12,"SSL_OP_ALL":2147486719,"SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION":262144,"SSL_OP_CIPHER_SERVER_PREFERENCE":4194304,"SSL_OP_CISCO_ANYCONNECT":32768,"SSL_OP_COOKIE_EXCHANGE":8192,"SSL_OP_CRYPTOPRO_TLSEXT_BUG":2147483648,"SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS":2048,"SSL_OP_EPHEMERAL_RSA":0,"SSL_OP_LEGACY_SERVER_CONNECT":4,"SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER":32,"SSL_OP_MICROSOFT_SESS_ID_BUG":1,"SSL_OP_MSIE_SSLV2_RSA_PADDING":0,"SSL_OP_NETSCAPE_CA_DN_BUG":536870912,"SSL_OP_NETSCAPE_CHALLENGE_BUG":2,"SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG":1073741824,"SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG":8,"SSL_OP_NO_COMPRESSION":131072,"SSL_OP_NO_QUERY_MTU":4096,"SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION":65536,"SSL_OP_NO_SSLv2":16777216,"SSL_OP_NO_SSLv3":33554432,"SSL_OP_NO_TICKET":16384,"SSL_OP_NO_TLSv1":67108864,"SSL_OP_NO_TLSv1_1":268435456,"SSL_OP_NO_TLSv1_2":134217728,"SSL_OP_PKCS1_CHECK_1":0,"SSL_OP_PKCS1_CHECK_2":0,"SSL_OP_SINGLE_DH_USE":1048576,"SSL_OP_SINGLE_ECDH_USE":524288,"SSL_OP_SSLEAY_080_CLIENT_DH_BUG":128,"SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG":0,"SSL_OP_TLS_BLOCK_PADDING_BUG":512,"SSL_OP_TLS_D5_BUG":256,"SSL_OP_TLS_ROLLBACK_BUG":8388608,"ENGINE_METHOD_DSA":2,"ENGINE_METHOD_DH":4,"ENGINE_METHOD_RAND":8,"ENGINE_METHOD_ECDH":16,"ENGINE_METHOD_ECDSA":32,"ENGINE_METHOD_CIPHERS":64,"ENGINE_METHOD_DIGESTS":128,"ENGINE_METHOD_STORE":256,"ENGINE_METHOD_PKEY_METHS":512,"ENGINE_METHOD_PKEY_ASN1_METHS":1024,"ENGINE_METHOD_ALL":65535,"ENGINE_METHOD_NONE":0,"DH_CHECK_P_NOT_SAFE_PRIME":2,"DH_CHECK_P_NOT_PRIME":1,"DH_UNABLE_TO_CHECK_GENERATOR":4,"DH_NOT_SUITABLE_GENERATOR":8,"NPN_ENABLED":1,"RSA_PKCS1_PADDING":1,"RSA_SSLV23_PADDING":2,"RSA_NO_PADDING":3,"RSA_PKCS1_OAEP_PADDING":4,"RSA_X931_PADDING":5,"RSA_PKCS1_PSS_PADDING":6,"POINT_CONVERSION_COMPRESSED":2,"POINT_CONVERSION_UNCOMPRESSED":4,"POINT_CONVERSION_HYBRID":6,"F_OK":0,"R_OK":4,"W_OK":2,"X_OK":1,"UV_UDP_REUSEADDR":4}');
      }, 4828: (t) => {
        "use strict";
        t.exports = JSON.parse('{"modp1":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},"modp2":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},"modp5":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},"modp14":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},"modp15":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},"modp16":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},"modp17":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},"modp18":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}');
      }, 2928: (t) => {
        "use strict";
        t.exports = { rE: "6.5.5" };
      }, 7029: (t) => {
        "use strict";
        t.exports = JSON.parse('{"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}');
      } }, __webpack_module_cache__ = {};
      function __webpack_require__(t) {
        var e = __webpack_module_cache__[t];
        if (void 0 !== e)
          return e.exports;
        var r = __webpack_module_cache__[t] = { id: t, loaded: false, exports: {} };
        return __webpack_modules__[t].call(r.exports, r, r.exports, __webpack_require__), r.loaded = true, r.exports;
      }
      __webpack_require__.g = function() {
        if ("object" == typeof globalThis)
          return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" == typeof window)
            return window;
        }
      }(), __webpack_require__.nmd = (t) => (t.paths = [], t.children || (t.children = []), t);
      var __webpack_exports__ = __webpack_require__(2198);
      return __webpack_exports__;
    })());
  }
});
export default require_main();
