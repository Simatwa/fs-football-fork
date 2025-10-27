"use strict";
(self.webpackChunkflashscore = self.webpackChunkflashscore || []).push([[6593], {11890: () => {
  var t;
  t = navigator.userAgent || navigator.vendor || window.opera, (window.browser = window.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4));
}, 32384: (t, e, i) => {
  i(11890);
  window.JXG = {exists: function (t) {
    return !(null == t);
  }}, window.JXG.decompress = function (t) {
    return window.JXG.Util.RawUrlDecode(new window.JXG.Util.Unzip(window.JXG.Util.Base64.decodeAsArray(t)).unzip()[0][0]);
  }, window.JXG.Util = {}, window.JXG.Util.RawUrlDecode = function (t) {
    var e, i, n, s, a, o, r, l, h;
    for (s = "", i = 0, n = t.length; i < n; i++) "%" == (e = t.charAt(i)) ? (a = parseInt(t.charAt(i + 1) + t.charAt(i + 2), 16), isNaN(a) ? s += "%" : (i += 2, s += String.fromCharCode(a))) : s += e;
    for (t = s, s = "", i = 0, n = t.length; i < n; i++) 128 & (a = t.charCodeAt(i)) ? 192 == (224 & a) ? (i++, o = t.charCodeAt(i), s += String.fromCharCode((31 & a) << 6 | 63 & o)) : 224 == (240 & a) ? (i++, o = t.charCodeAt(i), i++, r = t.charCodeAt(i), s += String.fromCharCode((15 & a) << 12 | (63 & o) << 6 | 63 & r)) : 240 == (248 & a) && (i++, o = t.charCodeAt(i), i++, r = t.charCodeAt(i), i++, (a = (7 & a) << 18 | (63 & o) << 12 | (63 & r) << 6 | 63 & t.charCodeAt(i)) >= 65536 ? (l = (1047552 & (a -= 65536)) >> 10, h = 1023 & a, l += 55296, h += 56320, s += String.fromCharCode(l, h)) : s += String.fromCharCode(a)) : s += t.charAt(i);
    return s;
  }, window.JXG.Util.Unzip = function (t) {
    var e, i, n = [], s = false, a = 0, o = [], r = new Array(32768), l = 0, h = false, u = [0, 128, 64, 192, 32, 160, 96, 224, 16, 144, 80, 208, 48, 176, 112, 240, 8, 136, 72, 200, 40, 168, 104, 232, 24, 152, 88, 216, 56, 184, 120, 248, 4, 132, 68, 196, 36, 164, 100, 228, 20, 148, 84, 212, 52, 180, 116, 244, 12, 140, 76, 204, 44, 172, 108, 236, 28, 156, 92, 220, 60, 188, 124, 252, 2, 130, 66, 194, 34, 162, 98, 226, 18, 146, 82, 210, 50, 178, 114, 242, 10, 138, 74, 202, 42, 170, 106, 234, 26, 154, 90, 218, 58, 186, 122, 250, 6, 134, 70, 198, 38, 166, 102, 230, 22, 150, 86, 214, 54, 182, 118, 246, 14, 142, 78, 206, 46, 174, 110, 238, 30, 158, 94, 222, 62, 190, 126, 254, 1, 129, 65, 193, 33, 161, 97, 225, 17, 145, 81, 209, 49, 177, 113, 241, 9, 137, 73, 201, 41, 169, 105, 233, 25, 153, 89, 217, 57, 185, 121, 249, 5, 133, 69, 197, 37, 165, 101, 229, 21, 149, 85, 213, 53, 181, 117, 245, 13, 141, 77, 205, 45, 173, 109, 237, 29, 157, 93, 221, 61, 189, 125, 253, 3, 131, 67, 195, 35, 163, 99, 227, 19, 147, 83, 211, 51, 179, 115, 243, 11, 139, 75, 203, 43, 171, 107, 235, 27, 155, 91, 219, 59, 187, 123, 251, 7, 135, 71, 199, 39, 167, 103, 231, 23, 151, 87, 215, 55, 183, 119, 247, 15, 143, 79, 207, 47, 175, 111, 239, 31, 159, 95, 223, 63, 191, 127, 255], c = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], d = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99], f = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577], p = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], m = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], v = t, g = 0, y = 1, b = 0, _ = 256, w = [];
    function T() {
      y = 1;
    }
    function k() {
      var t;
      return b++, t = 1 & y, 0 == (y >>= 1) && (t = 1 & (y = (b += 8, g < v.length ? v[g++] : -1)), y = y >> 1 | 128), t;
    }
    function S(t) {
      for (var e = 0, i = t; i--;) e = e << 1 | k();
      return t && (e = u[e] >> 8 - t), e;
    }
    function E() {
      l = 0;
    }
    function I(t) {
      r[l++] = t, n.push(String.fromCharCode(t)), 32768 == l && (l = 0);
    }
    function C() {
      this.b0 = 0, this.b1 = 0, this.jump = null, this.jumppos = -1;
    }
    var A, R, M = new Array(288), P = new Array(32), x = 0, L = null, N = (new Array(64), new Array(64), 0), D = new Array(17);
    function F() {
      for (;;) {
        if (D[N] >= R) return -1;
        if (A[D[N]] == N) return D[N]++;
        D[N]++;
      }
    }
    function H() {
      var t, e = L[x];
      if (s && document.write("<br>len:" + N + " treepos:" + x), 17 == N) return -1;
      if (x++, N++, t = F(), s && document.write("<br>IsPat " + t), t >= 0) e.b0 = t, s && document.write("<br>b0 " + e.b0); else if (e.b0 = 32768, s && document.write("<br>b0 " + e.b0), H()) return -1;
      if ((t = F()) >= 0) e.b1 = t, s && document.write("<br>b1 " + e.b1), e.jump = null; else if (e.b1 = 32768, s && document.write("<br>b1 " + e.b1), e.jump = L[x], e.jumppos = x, H()) return -1;
      return N--, 0;
    }
    function U(t, e, i, n) {
      var a;
      for (s && document.write("currentTree " + t + " numval " + e + " lengths " + i + " show " + n), L = t, x = 0, A = i, R = e, a = 0; a < 17; a++) D[a] = 0;
      if (N = 0, H()) return s && alert("invalid huffman tree\n"), -1;
      if (s) {
        document.write("<br>Tree: " + L.length);
        for (var o = 0; o < 32; o++) document.write("Places[" + o + "].b0=" + L[o].b0 + "<br>"), document.write("Places[" + o + "].b1=" + L[o].b1 + "<br>");
      }
      return 0;
    }
    function B(t) {
      for (var e, i, n, a = 0, o = t[a];;) if (n = k(), s && document.write("b=" + n), n) {
        if (!(32768 & o.b1)) return s && document.write("ret1"), o.b1;
        for (o = o.jump, e = t.length, i = 0; i < e; i++) if (t[i] === o) {
          a = i;
          break;
        }
      } else {
        if (!(32768 & o.b0)) return s && document.write("ret2"), o.b0;
        o = t[++a];
      }
      return s && document.write("ret3"), -1;
    }
    function j() {
      var t, e, i;
      do {
        switch (t = k(), e = S(2)) {
          case 0:
            s && alert("Stored\n");
            break;
          case 1:
            s && alert("Fixed Huffman codes\n");
            break;
          case 2:
            s && alert("Dynamic Huffman codes\n");
            break;
          case 3:
            s && alert("Reserved block type!!\n");
            break;
          default:
            s && alert("Unexpected value %d!\n", e);
        }
        var n, a;
        if (0 == e) for (T(), n = (b += 8, g < v.length ? v[g++] : -1), n |= (b += 8, g < v.length ? v[g++] : -1) << 8, a = (b += 8, g < v.length ? v[g++] : -1), 65535 & (n ^ ~(a |= (b += 8, g < v.length ? v[g++] : -1) << 8)) && document.write("BlockLen checksum mismatch\n"); n--;) I((b += 8, g < v.length ? v[g++] : -1)); else if (1 == e) for (;;) if ((o = u[S(7)] >> 1) > 23 ? (o = o << 1 | k()) > 199 ? o = (o -= 128) << 1 | k() : (o -= 48) > 143 && (o += 136) : o += 256, o < 256) I(o); else {
          if (256 == o) break;
          for (L = S(d[o -= 257]) + c[o], o = u[S(5)] >> 3, p[o] > 8 ? (N = S(8), N |= S(p[o] - 8) << 8) : N = S(p[o]), N += f[o], o = 0; o < L; o++) {
            I(r[l - N & 32767]);
          }
        } else if (2 == e) {
          var o, h, v, g, y, _ = new Array(320);
          for (v = 257 + S(5), g = 1 + S(5), y = 4 + S(4), o = 0; o < 19; o++) _[o] = 0;
          for (o = 0; o < y; o++) _[m[o]] = S(3);
          for (L = P.length, i = 0; i < L; i++) P[i] = new C;
          if (U(P, 19, _, 0)) return E(), 1;
          if (s) {
            document.write("<br>distanceTree");
            for (var w = 0; w < P.length; w++) document.write("<br>" + P[w].b0 + " " + P[w].b1 + " " + P[w].jump + " " + P[w].jumppos);
          }
          h = v + g, i = 0;
          var A = -1;
          for (s && document.write("<br>n=" + h + " bits: " + b + "<br>"); i < h;) if (A++, o = B(P), s && document.write("<br>" + A + " i:" + i + " decode: " + o + "    bits " + b + "<br>"), o < 16) _[i++] = o; else if (16 == o) {
            var R;
            if (i + (o = 3 + S(2)) > h) return E(), 1;
            for (R = i ? _[i - 1] : 0; o--;) _[i++] = R;
          } else {
            if (i + (o = 17 == o ? 3 + S(3) : 11 + S(7)) > h) return E(), 1;
            for (; o--;) _[i++] = 0;
          }
          for (L = M.length, i = 0; i < L; i++) M[i] = new C;
          if (U(M, v, _, 0)) return E(), 1;
          for (L = M.length, i = 0; i < L; i++) P[i] = new C;
          var x = new Array;
          for (i = v; i < _.length; i++) x[i - v] = _[i];
          if (U(P, g, x, 0)) return E(), 1;
          for (s && document.write("<br>literalTree");;) if ((o = B(M)) >= 256) {
            var L, N;
            if (0 == (o -= 256)) break;
            for (o--, L = S(d[o]) + c[o], o = B(P), p[o] > 8 ? (N = S(8), N |= S(p[o] - 8) << 8) : N = S(p[o]), N += f[o]; L--;) {
              I(r[l - N & 32767]);
            }
          } else I(o);
        }
      } while (!t);
      return E(), T(), 0;
    }
    function q() {
      s && alert("NEXTFILE"), n = [];
      var t = [];
      if (h = false, t[0] = (b += 8, g < v.length ? v[g++] : -1), t[1] = (b += 8, g < v.length ? v[g++] : -1), s && alert("type: " + t[0] + " " + t[1]), t[0] == parseInt("78", 16) && t[1] == parseInt("da", 16) && (s && alert("GEONExT-GZIP"), j(), s && alert(n.join("")), o[a] = new Array(2), o[a][0] = n.join(""), o[a][1] = "geonext.gxt", a++), t[0] == parseInt("1f", 16) && t[1] == parseInt("8b", 16) && (s && alert("GZIP"), Y(), s && alert(n.join("")), o[a] = new Array(2), o[a][0] = n.join(""), o[a][1] = "file", a++), t[0] == parseInt("50", 16) && t[1] == parseInt("4b", 16) && (h = true, t[2] = (b += 8, g < v.length ? v[g++] : -1), t[3] = (b += 8, g < v.length ? v[g++] : -1), t[2] == parseInt("3", 16) && t[3] == parseInt("4", 16))) {
        t[0] = (b += 8, g < v.length ? v[g++] : -1), t[1] = (b += 8, g < v.length ? v[g++] : -1), s && alert("ZIP-Version: " + t[1] + " " + t[0] / 10 + "." + t[0] % 10), e = (b += 8, g < v.length ? v[g++] : -1), e |= (b += 8, g < v.length ? v[g++] : -1) << 8, s && alert("gpflags: " + e);
        var r = (b += 8, g < v.length ? v[g++] : -1);
        r |= (b += 8, g < v.length ? v[g++] : -1) << 8, s && alert("method: " + r), (b += 8, g < v.length ? v[g++] : -1), (b += 8, g < v.length ? v[g++] : -1), (b += 8, g < v.length ? v[g++] : -1), (b += 8, g < v.length ? v[g++] : -1);
        var l = (b += 8, g < v.length ? v[g++] : -1);
        l |= (b += 8, g < v.length ? v[g++] : -1) << 8, l |= (b += 8, g < v.length ? v[g++] : -1) << 16, l |= (b += 8, g < v.length ? v[g++] : -1) << 24;
        var u = (b += 8, g < v.length ? v[g++] : -1);
        u |= (b += 8, g < v.length ? v[g++] : -1) << 8, u |= (b += 8, g < v.length ? v[g++] : -1) << 16, u |= (b += 8, g < v.length ? v[g++] : -1) << 24;
        var c = (b += 8, g < v.length ? v[g++] : -1);
        c |= (b += 8, g < v.length ? v[g++] : -1) << 8, c |= (b += 8, g < v.length ? v[g++] : -1) << 16, c |= (b += 8, g < v.length ? v[g++] : -1) << 24, s && alert("local CRC: " + l + "\nlocal Size: " + c + "\nlocal CompSize: " + u);
        var d = (b += 8, g < v.length ? v[g++] : -1);
        d |= (b += 8, g < v.length ? v[g++] : -1) << 8;
        var f = (b += 8, g < v.length ? v[g++] : -1);
        for (f |= (b += 8, g < v.length ? v[g++] : -1) << 8, s && alert("filelen " + d), m = 0, w = []; d--;) {
          var p = (b += 8, g < v.length ? v[g++] : -1);
          "/" == p | ":" == p ? m = 0 : m < _ - 1 && (w[m++] = String.fromCharCode(p));
        }
        s && alert("nameBuf: " + w), i || (i = w);
        for (var m = 0; m < f;) p = (b += 8, g < v.length ? v[g++] : -1), m++;
        (c = 0) && s && alert("skipdir"), 8 == r && (j(), s && alert(n.join("")), o[a] = new Array(2), o[a][0] = n.join(""), o[a][1] = w.join(""), a++), Y();
      }
    }
    function Y() {
      var t, i, n = [];
      if (8 & e && (n[0] = (b += 8, g < v.length ? v[g++] : -1), n[1] = (b += 8, g < v.length ? v[g++] : -1), n[2] = (b += 8, g < v.length ? v[g++] : -1), n[3] = (b += 8, g < v.length ? v[g++] : -1), n[0] == parseInt("50", 16) && n[1] == parseInt("4b", 16) && n[2] == parseInt("07", 16) && n[3] == parseInt("08", 16) ? (b += 8, g < v.length ? v[g++] : -1, (b += 8, g < v.length ? v[g++] : -1) << 8, (b += 8, g < v.length ? v[g++] : -1) << 16, (b += 8, g < v.length ? v[g++] : -1) << 24) : n[0] | n[1] << 8 | n[2] << 16 | n[3] << 24, (b += 8, g < v.length ? v[g++] : -1), (b += 8, g < v.length ? v[g++] : -1) << 8, (b += 8, g < v.length ? v[g++] : -1) << 16, (b += 8, g < v.length ? v[g++] : -1) << 24, (b += 8, g < v.length ? v[g++] : -1), (b += 8, g < v.length ? v[g++] : -1) << 8, (b += 8, g < v.length ? v[g++] : -1) << 16, (b += 8, g < v.length ? v[g++] : -1) << 24, s && alert("CRC:")), h && q(), n[0] = (b += 8, g < v.length ? v[g++] : -1), 8 != n[0]) return s && alert("Unknown compression method!"), 0;
      if (e = (b += 8, g < v.length ? v[g++] : -1), s && e & ~parseInt("1f", 16) && alert("Unknown flags set!"), (b += 8, g < v.length ? v[g++] : -1), (b += 8, g < v.length ? v[g++] : -1), (b += 8, g < v.length ? v[g++] : -1), (b += 8, g < v.length ? v[g++] : -1), (b += 8, g < v.length ? v[g++] : -1), (b += 8, g < v.length ? v[g++] : -1), 4 & e) for (n[0] = (b += 8, g < v.length ? v[g++] : -1), n[2] = (b += 8, g < v.length ? v[g++] : -1), N = n[0] + 256 * n[1], s && alert("Extra field size: " + N), t = 0; t < N; t++) b += 8, g < v.length ? v[g++] : -1;
      if (8 & e) {
        for (t = 0, w = []; i = (b += 8, g < v.length ? v[g++] : -1);) "7" != i && ":" != i || (t = 0), t < _ - 1 && (w[t++] = i);
        s && alert("original file name: " + w);
      }
      if (16 & e) for (; i = (b += 8, g < v.length ? v[g++] : -1);) ;
      2 & e && (b += 8, g < v.length ? v[g++] : -1, (b += 8, g < v.length ? v[g++] : -1)), j(), (b += 8, g < v.length ? v[g++] : -1), (b += 8, g < v.length ? v[g++] : -1), (b += 8, g < v.length ? v[g++] : -1), (b += 8, g < v.length ? v[g++] : -1), (b += 8, g < v.length ? v[g++] : -1), (b += 8, g < v.length ? v[g++] : -1), (b += 8, g < v.length ? v[g++] : -1), (b += 8, g < v.length ? v[g++] : -1), h && q();
    }
    D[0] = 0, window.JXG.Util.Unzip.prototype.unzipFile = function (t) {
      var e;
      for (this.unzip(), e = 0; e < o.length; e++) if (o[e][1] == t) return o[e][0];
    }, window.JXG.Util.Unzip.prototype.unzip = function () {
      return s && alert(v), q(), o;
    };
  }, window.JXG.Util.Base64 = {_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (t) {
    var e, i, n, s, a, o, r, l = [], h = 0;
    for (t = window.JXG.Util.Base64._utf8_encode(t); h < t.length;) s = (e = t.charCodeAt(h++)) >> 2, a = (3 & e) << 4 | (i = t.charCodeAt(h++)) >> 4, o = (15 & i) << 2 | (n = t.charCodeAt(h++)) >> 6, r = 63 & n, isNaN(i) ? o = r = 64 : isNaN(n) && (r = 64), l.push([this._keyStr.charAt(s), this._keyStr.charAt(a), this._keyStr.charAt(o), this._keyStr.charAt(r)].join(""));
    return l.join("");
  }, decode: function (t, e) {
    var i, n, s, a, o, r, l = [], h = 0;
    for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); h < t.length;) i = this._keyStr.indexOf(t.charAt(h++)) << 2 | (a = this._keyStr.indexOf(t.charAt(h++))) >> 4, n = (15 & a) << 4 | (o = this._keyStr.indexOf(t.charAt(h++))) >> 2, s = (3 & o) << 6 | (r = this._keyStr.indexOf(t.charAt(h++))), l.push(String.fromCharCode(i)), 64 != o && l.push(String.fromCharCode(n)), 64 != r && l.push(String.fromCharCode(s));
    return l = l.join(""), e && (l = window.JXG.Util.Base64._utf8_decode(l)), l;
  }, _utf8_encode: function (t) {
    t = t.replace(/\r\n/g, "\n");
    for (var e = "", i = 0; i < t.length; i++) {
      var n = t.charCodeAt(i);
      n < 128 ? e += String.fromCharCode(n) : n > 127 && n < 2048 ? (e += String.fromCharCode(n >> 6 | 192), e += String.fromCharCode(63 & n | 128)) : (e += String.fromCharCode(n >> 12 | 224), e += String.fromCharCode(n >> 6 & 63 | 128), e += String.fromCharCode(63 & n | 128));
    }
    return e;
  }, _utf8_decode: function (t) {
    for (var e = [], i = 0, n = 0, s = 0, a = 0; i < t.length;) (n = t.charCodeAt(i)) < 128 ? (e.push(String.fromCharCode(n)), i++) : n > 191 && n < 224 ? (s = t.charCodeAt(i + 1), e.push(String.fromCharCode((31 & n) << 6 | 63 & s)), i += 2) : (s = t.charCodeAt(i + 1), a = t.charCodeAt(i + 2), e.push(String.fromCharCode((15 & n) << 12 | (63 & s) << 6 | 63 & a)), i += 3);
    return e.join("");
  }, _destrip: function (t, e) {
    var i, n, s = [], a = [];
    for (null == e && (e = 76), t.replace(/ /g, ""), i = t.length / e, n = 0; n < i; n++) s[n] = t.substr(n * e, e);
    for (i != t.length / e && (s[s.length] = t.substr(i * e, t.length - i * e)), n = 0; n < s.length; n++) a.push(s[n]);
    return a.join("\n");
  }, decodeAsArray: function (t) {
    var e, i = this.decode(t), n = [];
    for (e = 0; e < i.length; e++) n[e] = i.charCodeAt(e);
    return n;
  }, decodeGEONExT: function (t) {
    return decodeAsArray(destrip(t), false);
  }}, window.JXG.Util.asciiCharCodeAt = function (t, e) {
    var i = t.charCodeAt(e);
    if (i > 255) switch (i) {
      case 8364:
        i = 128;
        break;
      case 8218:
        i = 130;
        break;
      case 402:
        i = 131;
        break;
      case 8222:
        i = 132;
        break;
      case 8230:
        i = 133;
        break;
      case 8224:
        i = 134;
        break;
      case 8225:
        i = 135;
        break;
      case 710:
        i = 136;
        break;
      case 8240:
        i = 137;
        break;
      case 352:
        i = 138;
        break;
      case 8249:
        i = 139;
        break;
      case 338:
        i = 140;
        break;
      case 381:
        i = 142;
        break;
      case 8216:
        i = 145;
        break;
      case 8217:
        i = 146;
        break;
      case 8220:
        i = 147;
        break;
      case 8221:
        i = 148;
        break;
      case 8226:
        i = 149;
        break;
      case 8211:
        i = 150;
        break;
      case 8212:
        i = 151;
        break;
      case 732:
        i = 152;
        break;
      case 8482:
        i = 153;
        break;
      case 353:
        i = 154;
        break;
      case 8250:
        i = 155;
        break;
      case 339:
        i = 156;
        break;
      case 382:
        i = 158;
        break;
      case 376:
        i = 159;
    }
    return i;
  }, window.JXG.Util.utf8Decode = function (t) {
    var e, i = [], n = 0, s = 0, a = 0;
    if (!window.JXG.exists(t)) return "";
    for (; n < t.length;) (s = t.charCodeAt(n)) < 128 ? (i.push(String.fromCharCode(s)), n++) : s > 191 && s < 224 ? (a = t.charCodeAt(n + 1), i.push(String.fromCharCode((31 & s) << 6 | 63 & a)), n += 2) : (a = t.charCodeAt(n + 1), e = t.charCodeAt(n + 2), i.push(String.fromCharCode((15 & s) << 12 | (63 & a) << 6 | 63 & e)), n += 3);
    return i.join("");
  }, window.JXG.Util.genUUID = function () {
    for (var t, e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), i = new Array(36), n = 0, s = 0; s < 36; s++) 8 == s || 13 == s || 18 == s || 23 == s ? i[s] = "-" : 14 == s ? i[s] = "4" : (n <= 2 && (n = 33554432 + 16777216 * Math.random() | 0), t = 15 & n, n >>= 4, i[s] = e[19 == s ? 3 & t | 8 : t]);
    return i.join("");
  }, function (t, e) {
    function i(i, n) {
      function a(t) {
        return function (e) {
          var i = this._s;
          return i && i._a ? t.call(this, e) : null;
        };
      }
      this.setupOptions = {url: i || null, flashVersion: 8, debugMode: true, debugFlash: false, useConsole: true, consoleOnly: true, waitForWindowLoad: false, bgColor: "#ffffff", useHighPerformance: false, flashPollingInterval: null, html5PollingInterval: null, flashLoadTimeout: 1e3, wmode: null, allowScriptAccess: "always", useFlashBlock: false, useHTML5Audio: true, forceUseGlobalHTML5Audio: false, ignoreMobileRestrictions: false, html5Test: /^(probably|maybe)$/i, preferFlash: false, noSWFCache: false, idPrefix: "sound"}, this.defaultOptions = {autoLoad: false, autoPlay: false, from: null, loops: 1, onid3: null, onerror: null, onload: null, whileloading: null, onplay: null, onpause: null, onresume: null, whileplaying: null, onposition: null, onstop: null, onfinish: null, multiShot: true, multiShotEvents: false, position: null, pan: 0, playbackRate: 1, stream: true, to: null, type: null, usePolicyFile: false, volume: 100}, this.flash9Options = {onfailure: null, isMovieStar: null, usePeakData: false, useWaveformData: false, useEQData: false, onbufferchange: null, ondataerror: null}, this.movieStarOptions = {bufferTime: 3, serverURL: null, onconnect: null, duration: null}, this.audioFormats = {mp3: {type: ['audio/mpeg; codecs="mp3"', "audio/mpeg", "audio/mp3", "audio/MPA", "audio/mpa-robust"], required: true}, mp4: {related: ["aac", "m4a", "m4b"], type: ['audio/mp4; codecs="mp4a.40.2"', "audio/aac", "audio/x-m4a", "audio/MP4A-LATM", "audio/mpeg4-generic"], required: false}, ogg: {type: ["audio/ogg; codecs=vorbis"], required: false}, opus: {type: ["audio/ogg; codecs=opus", "audio/opus"], required: false}, wav: {type: ['audio/wav; codecs="1"', "audio/wav", "audio/wave", "audio/x-wav"], required: false}, flac: {type: ["audio/flac"], required: false}}, this.movieID = "sm2-container", this.id = n || "sm2movie", this.debugID = "soundmanager-debug", this.debugURLParam = /([#?&])debug=1/i, this.versionNumber = "V2.97a.20170601", this.altURL = this.movieURL = this.version = null, this.enabled = this.swfLoaded = false, this.oMC = null, this.sounds = {}, this.soundIDs = [], this.didFlashBlock = this.muted = false, this.filePattern = null, this.filePatterns = {flash8: /\.mp3(\?.*)?$/i, flash9: /\.mp3(\?.*)?$/i}, this.features = {buffering: false, peakData: false, waveformData: false, eqData: false, movieStar: false}, this.sandbox = {}, this.html5 = {usingFlash: null}, this.flash = {}, this.ignoreFlash = this.html5Only = false;
      var o, r, l, h, u, c, d, f, p, m, v, g, y, b, _, w, O, T, k, S, E, I, C, A, R, M, P, x, L, N, D, F, H, U, B, j, q, Y, W, z, X, V, G, K, Z, J, Q, $, tt, et, it, nt, st, at, ot, rt, lt, ht, ut = this, ct = null, dt = null, ft = navigator.userAgent, pt = t.location.href.toString(), mt = document, vt = [], gt = false, yt = false, bt = false, _t = false, wt = false, Ot = null, Tt = null, kt = false, St = false, Et = 0, It = null, Ct = [], At = null, Rt = Array.prototype.slice, Mt = false, Pt = 0, xt = ft.match(/(ipad|iphone|ipod)/i), Lt = ft.match(/android/i), Nt = ft.match(/msie|trident/i), Dt = ft.match(/webkit/i), Ft = ft.match(/safari/i) && !ft.match(/chrome/i), Ht = ft.match(/opera/i), Ut = ft.match(/(mobile|pre\/|xoom)/i) || xt || Lt, Bt = !pt.match(/usehtml5audio/i) && !pt.match(/sm2-ignorebadua/i) && Ft && !ft.match(/silk/i) && ft.match(/OS\sX\s10_6_([3-7])/i), jt = mt.hasFocus !== e ? mt.hasFocus() : null, qt = Ft && (mt.hasFocus === e || !mt.hasFocus()), Yt = !qt, Wt = /(mp3|mp4|mpa|m4a|m4b)/i, zt = mt.location ? mt.location.protocol.match(/http/i) : null, Xt = zt ? "" : "//", Vt = /^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4|m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i, Gt = "mpeg4 aac flv mov mp4 m4v f4v m4a m4b mp4v 3gp 3g2".split(" "), Kt = new RegExp("\\.(" + Gt.join("|") + ")(\\?.*)?$", "i");
      this.mimePattern = /^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i, this.useAltURL = !zt, Z = [null, "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED"];
      try {
        ht = Audio !== e && (Ht && opera !== e && 10 > opera.version() ? new Audio(null) : new Audio).canPlayType !== e;
      } catch (t) {
        ht = false;
      }
      this.hasHTML5 = ht, this.setup = function (t) {
        var i = !ut.url;
        return t !== e && bt && At && ut.ok(), p(t), Mt || (Ut ? ut.setupOptions.ignoreMobileRestrictions && !ut.setupOptions.forceUseGlobalHTML5Audio || (Ct.push(k.globalHTML5), Mt = true) : ut.setupOptions.forceUseGlobalHTML5Audio && (Ct.push(k.globalHTML5), Mt = true)), !lt && Ut && (ut.setupOptions.ignoreMobileRestrictions ? Ct.push(k.ignoreMobile) : (ut.setupOptions.useHTML5Audio = true, ut.setupOptions.preferFlash = false, xt ? ut.ignoreFlash = true : (Lt && !ft.match(/android\s2\.3/i) || !Lt) && (Mt = true))), t && (i && C && t.url !== e && ut.beginDelayedInit(), C || t.url === e || "complete" !== mt.readyState || setTimeout(E, 1)), lt = true, ut;
      }, this.supported = this.ok = function () {
        return At ? bt && !_t : ut.useHTML5Audio && ut.hasHTML5;
      }, this.getMovie = function (e) {
        return r(e) || mt[e] || t[e];
      }, this.createSound = function (t, i) {
        var s, a = null;
        if (!bt || !ut.ok()) return false;
        if (i !== e && (t = {id: t, url: i}), (s = f(t)).url = z(s.url), s.id === e && (s.id = ut.setupOptions.idPrefix + Pt++), j(s.id, true)) return ut.sounds[s.id];
        if (G(s)) (a = (s = U(s), ut.sounds[s.id] = new o(s), ut.soundIDs.push(s.id), ut.sounds[s.id]))._setup_html5(s); else {
          if (ut.html5Only || ut.html5.usingFlash && s.url && s.url.match(/data:/i)) return s = U(s), ut.sounds[s.id] = new o(s), ut.soundIDs.push(s.id), ut.sounds[s.id];
          8 < c && null === s.isMovieStar && (s.isMovieStar = !!(s.serverURL || s.type && s.type.match(Vt) || s.url && s.url.match(Kt))), s = B(s, undefined), a = (s = U(s), ut.sounds[s.id] = new o(s), ut.soundIDs.push(s.id), ut.sounds[s.id]), 8 === c ? dt._createSound(s.id, s.loops || 1, s.usePolicyFile) : (dt._createSound(s.id, s.url, s.usePeakData, s.useWaveformData, s.useEQData, s.isMovieStar, !!s.isMovieStar && s.bufferTime, s.loops || 1, s.serverURL, s.duration || null, s.autoPlay, true, s.autoLoad, s.usePolicyFile), s.serverURL || (a.connected = true, s.onconnect && s.onconnect.apply(a))), s.serverURL || !s.autoLoad && !s.autoPlay || a.load(s);
        }
        return !s.serverURL && s.autoPlay && a.play(), a;
      }, this.destroySound = function (t, e) {
        if (!j(t)) return false;
        var i, n = ut.sounds[t];
        for (n.stop(), n._iO = {}, n.unload(), i = 0; i < ut.soundIDs.length; i++) if (ut.soundIDs[i] === t) {
          ut.soundIDs.splice(i, 1);
          break;
        }
        return e || n.destruct(true), delete ut.sounds[t], true;
      }, this.load = function (t, e) {
        return !!j(t) && ut.sounds[t].load(e);
      }, this.unload = function (t) {
        return !!j(t) && ut.sounds[t].unload();
      }, this.onposition = this.onPosition = function (t, e, i, n) {
        return !!j(t) && ut.sounds[t].onposition(e, i, n);
      }, this.clearOnPosition = function (t, e, i) {
        return !!j(t) && ut.sounds[t].clearOnPosition(e, i);
      }, this.start = this.play = function (t, e) {
        var i = null, n = e && !(e instanceof Object);
        if (!bt || !ut.ok()) return false;
        if (j(t, n)) n && (e = {url: e}); else {
          if (!n) return false;
          n && (e = {url: e}), e && e.url && (e.id = t, i = ut.createSound(e).play());
        }
        return null === i && (i = ut.sounds[t].play(e)), i;
      }, this.setPlaybackRate = function (t, e, i) {
        return !!j(t) && ut.sounds[t].setPlaybackRate(e, i);
      }, this.setPosition = function (t, e) {
        return !!j(t) && ut.sounds[t].setPosition(e);
      }, this.stop = function (t) {
        return !!j(t) && ut.sounds[t].stop();
      }, this.stopAll = function () {
        for (var t in ut.sounds) ut.sounds.hasOwnProperty(t) && ut.sounds[t].stop();
      }, this.pause = function (t) {
        return !!j(t) && ut.sounds[t].pause();
      }, this.pauseAll = function () {
        var t;
        for (t = ut.soundIDs.length - 1; 0 <= t; t--) ut.sounds[ut.soundIDs[t]].pause();
      }, this.resume = function (t) {
        return !!j(t) && ut.sounds[t].resume();
      }, this.resumeAll = function () {
        var t;
        for (t = ut.soundIDs.length - 1; 0 <= t; t--) ut.sounds[ut.soundIDs[t]].resume();
      }, this.togglePause = function (t) {
        return !!j(t) && ut.sounds[t].togglePause();
      }, this.setPan = function (t, e) {
        return !!j(t) && ut.sounds[t].setPan(e);
      }, this.setVolume = function (t, i) {
        var n, s;
        if (t !== e && !isNaN(t) && i === e) {
          for (n = 0, s = ut.soundIDs.length; n < s; n++) ut.sounds[ut.soundIDs[n]].setVolume(t);
          return false;
        }
        return !!j(t) && ut.sounds[t].setVolume(i);
      }, this.mute = function (t) {
        var e = 0;
        if (t instanceof String && (t = null), t) return !!j(t) && ut.sounds[t].mute();
        for (e = ut.soundIDs.length - 1; 0 <= e; e--) ut.sounds[ut.soundIDs[e]].mute();
        return ut.muted = true;
      }, this.muteAll = function () {
        ut.mute();
      }, this.unmute = function (t) {
        if (t instanceof String && (t = null), t) return !!j(t) && ut.sounds[t].unmute();
        for (t = ut.soundIDs.length - 1; 0 <= t; t--) ut.sounds[ut.soundIDs[t]].unmute();
        return ut.muted = false, true;
      }, this.unmuteAll = function () {
        ut.unmute();
      }, this.toggleMute = function (t) {
        return !!j(t) && ut.sounds[t].toggleMute();
      }, this.getMemoryUse = function () {
        var t = 0;
        return dt && 8 !== c && (t = parseInt(dt._getMemoryUse(), 10)), t;
      }, this.disable = function (i) {
        var n;
        if (i === e && (i = false), _t) return false;
        for (_t = true, n = ut.soundIDs.length - 1; 0 <= n; n--) x(ut.sounds[ut.soundIDs[n]]);
        return x(ut), d(i), et.remove(t, "load", y), true;
      }, this.canPlayMIME = function (t) {
        var e;
        return ut.hasHTML5 && (e = K({type: t})), !e && At && (e = t && ut.ok() ? !!(8 < c && t.match(Vt) || t.match(ut.mimePattern)) : null), e;
      }, this.canPlayURL = function (t) {
        var e;
        return ut.hasHTML5 && (e = K({url: t})), !e && At && (e = t && ut.ok() ? !!t.match(ut.filePattern) : null), e;
      }, this.canPlayLink = function (t) {
        return !(t.type === e || !t.type || !ut.canPlayMIME(t.type)) || ut.canPlayURL(t.href);
      }, this.getSoundById = function (t, e) {
        return t ? ut.sounds[t] : null;
      }, this.onready = function (e, i) {
        if ("function" != typeof e) throw D("needFunction", "onready");
        return i || (i = t), v("onready", e, i), g(), true;
      }, this.ontimeout = function (e, i) {
        if ("function" != typeof e) throw D("needFunction", "ontimeout");
        return i || (i = t), v("ontimeout", e, i), g({type: "ontimeout"}), true;
      }, this._wD = this._writeDebug = function (t, e) {
        return true;
      }, this._debug = function () {}, this.reboot = function (e, i) {
        var n, s, a;
        for (n = ut.soundIDs.length - 1; 0 <= n; n--) ut.sounds[ut.soundIDs[n]].destruct();
        if (dt) try {
          Nt && (Tt = dt.innerHTML), Ot = dt.parentNode.removeChild(dt);
        } catch (t) {}
        if (Tt = Ot = At = dt = null, ut.enabled = C = bt = kt = St = gt = yt = _t = Mt = ut.swfLoaded = false, ut.soundIDs = [], ut.sounds = {}, Pt = 0, lt = false, e) vt = []; else for (n in vt) if (vt.hasOwnProperty(n)) for (s = 0, a = vt[n].length; s < a; s++) vt[n][s].fired = false;
        return ut.html5 = {usingFlash: null}, ut.flash = {}, ut.html5Only = false, ut.ignoreFlash = false, t.setTimeout(function () {
          i || ut.beginDelayedInit();
        }, 20), ut;
      }, this.reset = function () {
        return ut.reboot(true, true);
      }, this.getMoviePercent = function () {
        return dt && "PercentLoaded" in dt ? dt.PercentLoaded() : null;
      }, this.beginDelayedInit = function () {
        wt = true, E(), setTimeout(function () {
          return !St && (R(), S(), St = true);
        }, 20), b();
      }, this.destruct = function () {
        ut.disable(true);
      }, o = function (t) {
        var i, n, s, a, o, r, l, h, u, d, p, m = this, v = false, g = [], y = 0, b = null;
        n = i = null, this.sID = this.id = t.id, this.url = t.url, this._iO = this.instanceOptions = this.options = f(t), this.pan = this.options.pan, this.volume = this.options.volume, this.isHTML5 = false, this._a = null, p = !this.url, this.id3 = {}, this._debug = function () {}, this.load = function (t) {
          var i;
          if (t !== e ? m._iO = f(t, m.options) : (t = m.options, m._iO = t, b && b !== m.url && (m._iO.url = m.url, m.url = null)), m._iO.url || (m._iO.url = m.url), m._iO.url = z(m._iO.url), !(i = m.instanceOptions = m._iO).url && !m.url) return m;
          if (i.url === m.url && 0 !== m.readyState && 2 !== m.readyState) return 3 === m.readyState && i.onload && rt(m, function () {
            i.onload.apply(m, [!!m.duration]);
          }), m;
          if (m.loaded = false, m.readyState = 1, m.playState = 0, m.id3 = {}, G(i)) m._setup_html5(i)._called_load || (m._html5_canplay = false, m.url !== i.url && (m._a.src = i.url, m.setPosition(0)), m._a.autobuffer = "auto", m._a.preload = "auto", m._a._called_load = true); else {
            if (ut.html5Only || m._iO.url && m._iO.url.match(/data:/i)) return m;
            try {
              m.isHTML5 = false, m._iO = B(U(i)), m._iO.autoPlay && (m._iO.position || m._iO.from) && (m._iO.autoPlay = false), i = m._iO, 8 === c ? dt._load(m.id, i.url, i.stream, i.autoPlay, i.usePolicyFile) : dt._load(m.id, i.url, !!i.stream, !!i.autoPlay, i.loops || 1, !!i.autoLoad, i.usePolicyFile);
            } catch (t) {
              M({type: "SMSOUND_LOAD_JS_EXCEPTION", fatal: true});
            }
          }
          return m.url = i.url, m;
        }, this.unload = function () {
          return 0 !== m.readyState && (m.isHTML5 ? (r(), m._a && (m._a.pause(), b = Q(m._a))) : 8 === c ? dt._unload(m.id, "about:blank") : dt._unload(m.id), ut.preferFlash && nt && !ut.ignoreFlash && ut.flash[t] !== e && ut.flash[t]), m;
        }, this.destruct = function (t) {
          m.isHTML5 ? (r(), m._a && (m._a.pause(), Q(m._a), Mt || o(), m._a._s = null, m._a = null)) : (m._iO.onfailure = null, dt._destroySound(m.id)), t || ut.destroySound(m.id, true);
        }, this.start = this.play = function (t, i) {
          var n, s, a, o;
          if (n = true, i = i === e || i, t || (t = {}), m.url && (m._iO.url = m.url), m._iO = f(m._iO, m.options), m._iO = f(t, m._iO), m._iO.url = z(m._iO.url), m.instanceOptions = m._iO, !m.isHTML5 && m._iO.serverURL && !m.connected) return m.getAutoPlay() || m.setAutoPlay(true), m;
          if (G(m._iO) && (m._setup_html5(m._iO), l()), 1 === m.playState && !m.paused && !(n = m._iO.multiShot)) return m.isHTML5 && m.setPosition(m._iO.position), m;
          if (t.url && t.url !== m.url && (m.readyState || m.isHTML5 || 8 !== c || !p ? m.load(m._iO) : p = false), !m.loaded) if (0 === m.readyState) {
            if (m.isHTML5 || ut.html5Only) {
              if (!m.isHTML5) return m;
              m.load(m._iO);
            } else m._iO.autoPlay = true, m.load(m._iO);
            m.instanceOptions = m._iO;
          } else if (2 === m.readyState) return m;
          return !m.isHTML5 && 9 === c && 0 < m.position && m.position === m.duration && (t.position = 0), m.paused && 0 <= m.position && (!m._iO.serverURL || 0 < m.position) ? m.resume() : (m._iO = f(t, m._iO), (!m.isHTML5 && null !== m._iO.position && 0 < m._iO.position || null !== m._iO.from && 0 < m._iO.from || null !== m._iO.to) && 0 === m.instanceCount && 0 === m.playState && !m._iO.serverURL && (n = function () {
            m._iO = f(t, m._iO), m.play(m._iO);
          }, m.isHTML5 && !m._html5_canplay ? m.load({_oncanplay: n}) : m.isHTML5 || m.loaded || m.readyState && 2 === m.readyState || m.load({onload: n}), m._iO = d()), (!m.instanceCount || m._iO.multiShotEvents || m.isHTML5 && m._iO.multiShot && !Mt || !m.isHTML5 && 8 < c && !m.getAutoPlay()) && m.instanceCount++, m._iO.onposition && 0 === m.playState && h(m), m.playState = 1, m.paused = false, m.position = m._iO.position === e || isNaN(m._iO.position) ? 0 : m._iO.position, m.isHTML5 || (m._iO = B(U(m._iO))), m._iO.onplay && i && (m._iO.onplay.apply(m), v = true), m.setVolume(m._iO.volume, true), m.setPan(m._iO.pan, true), 1 !== m._iO.playbackRate && m.setPlaybackRate(m._iO.playbackRate), m.isHTML5 ? 2 > m.instanceCount ? (l(), n = m._setup_html5(), m.setPosition(m._iO.position), n.play()) : (s = new Audio(m._iO.url), a = function () {
            et.remove(s, "ended", a), m._onfinish(m), Q(s), s = null;
          }, o = function () {
            et.remove(s, "canplay", o);
            try {
              s.currentTime = m._iO.position / 1e3;
            } catch (t) {}
            s.play();
          }, et.add(s, "ended", a), m._iO.volume !== e && (s.volume = Math.max(0, Math.min(1, m._iO.volume / 100))), m.muted && (s.muted = true), m._iO.position ? et.add(s, "canplay", o) : s.play()) : (n = dt._start(m.id, m._iO.loops || 1, 9 === c ? m.position : m.position / 1e3, m._iO.multiShot || false), 9 !== c || n || m._iO.onplayerror && m._iO.onplayerror.apply(m))), m;
        }, this.stop = function (t) {
          var e = m._iO;
          return 1 === m.playState && (m._onbufferchange(0), m._resetOnPosition(0), m.paused = false, m.isHTML5 || (m.playState = 0), u(), e.to && m.clearOnPosition(e.to), m.isHTML5 ? m._a && (t = m.position, m.setPosition(0), m.position = t, m._a.pause(), m.playState = 0, m._onTimer(), r()) : (dt._stop(m.id, t), e.serverURL && m.unload()), m.instanceCount = 0, m._iO = {}, e.onstop && e.onstop.apply(m)), m;
        }, this.setAutoPlay = function (t) {
          m._iO.autoPlay = t, m.isHTML5 || (dt._setAutoPlay(m.id, t), t && (m.instanceCount || 1 !== m.readyState || m.instanceCount++));
        }, this.getAutoPlay = function () {
          return m._iO.autoPlay;
        }, this.setPlaybackRate = function (t) {
          if (t = Math.max(0.5, Math.min(4, t)), m.isHTML5) try {
            m._iO.playbackRate = t, m._a.playbackRate = t;
          } catch (t) {}
          return m;
        }, this.setPosition = function (t) {
          t === e && (t = 0);
          var i = m.isHTML5 ? Math.max(t, 0) : Math.min(m.duration || m._iO.duration, Math.max(t, 0));
          if (m.position = i, t = m.position / 1e3, m._resetOnPosition(m.position), m._iO.position = i, m.isHTML5) {
            if (m._a) {
              if (m._html5_canplay) {
                if (m._a.currentTime.toFixed(3) !== t.toFixed(3)) try {
                  m._a.currentTime = t, (0 === m.playState || m.paused) && m._a.pause();
                } catch (t) {}
              } else if (t) return m;
              m.paused && m._onTimer(true);
            }
          } else t = 9 === c ? m.position : t, m.readyState && 2 !== m.readyState && dt._setPosition(m.id, t, m.paused || !m.playState, m._iO.multiShot);
          return m;
        }, this.pause = function (t) {
          return m.paused || 0 === m.playState && 1 !== m.readyState || (m.paused = true, m.isHTML5 ? (m._setup_html5().pause(), r()) : (t || t === e) && dt._pause(m.id, m._iO.multiShot), m._iO.onpause && m._iO.onpause.apply(m)), m;
        }, this.resume = function () {
          var t = m._iO;
          return m.paused ? (m.paused = false, m.playState = 1, m.isHTML5 ? (m._setup_html5().play(), l()) : (t.isMovieStar && !t.serverURL && m.setPosition(m.position), dt._pause(m.id, t.multiShot)), !v && t.onplay ? (t.onplay.apply(m), v = true) : t.onresume && t.onresume.apply(m), m) : m;
        }, this.togglePause = function () {
          return 0 === m.playState ? (m.play({position: 9 !== c || m.isHTML5 ? m.position / 1e3 : m.position}), m) : (m.paused ? m.resume() : m.pause(), m);
        }, this.setPan = function (t, i) {
          return t === e && (t = 0), i === e && (i = false), m.isHTML5 || dt._setPan(m.id, t), m._iO.pan = t, i || (m.pan = t, m.options.pan = t), m;
        }, this.setVolume = function (t, i) {
          return t === e && (t = 100), i === e && (i = false), m.isHTML5 ? m._a && (ut.muted && !m.muted && (m.muted = true, m._a.muted = true), m._a.volume = Math.max(0, Math.min(1, t / 100))) : dt._setVolume(m.id, ut.muted && !m.muted || m.muted ? 0 : t), m._iO.volume = t, i || (m.volume = t, m.options.volume = t), m;
        }, this.mute = function () {
          return m.muted = true, m.isHTML5 ? m._a && (m._a.muted = true) : dt._setVolume(m.id, 0), m;
        }, this.unmute = function () {
          m.muted = false;
          var t = m._iO.volume !== e;
          return m.isHTML5 ? m._a && (m._a.muted = false) : dt._setVolume(m.id, t ? m._iO.volume : m.options.volume), m;
        }, this.toggleMute = function () {
          return m.muted ? m.unmute() : m.mute();
        }, this.onposition = this.onPosition = function (t, i, n) {
          return g.push({position: parseInt(t, 10), method: i, scope: n !== e ? n : m, fired: false}), m;
        }, this.clearOnPosition = function (t, e) {
          var i;
          if (t = parseInt(t, 10), !isNaN(t)) for (i = 0; i < g.length; i++) t !== g[i].position || e && e !== g[i].method || (g[i].fired && y--, g.splice(i, 1));
        }, this._processOnPosition = function () {
          var t, e;
          if (!(t = g.length) || !m.playState || y >= t) return false;
          for (--t; 0 <= t; t--) !(e = g[t]).fired && m.position >= e.position && (e.fired = true, y++, e.method.apply(e.scope, [e.position]));
          return true;
        }, this._resetOnPosition = function (t) {
          var e, i;
          if (!(e = g.length)) return false;
          for (--e; 0 <= e; e--) (i = g[e]).fired && t <= i.position && (i.fired = false, y--);
          return true;
        }, d = function () {
          var t, e, i = m._iO, n = i.from, s = i.to;
          return e = function () {
            m.clearOnPosition(s, e), m.stop();
          }, t = function () {
            null === s || isNaN(s) || m.onPosition(s, e);
          }, null === n || isNaN(n) || (i.position = n, i.multiShot = false, t()), i;
        }, h = function () {
          var t, e = m._iO.onposition;
          if (e) for (t in e) e.hasOwnProperty(t) && m.onPosition(parseInt(t, 10), e[t]);
        }, u = function () {
          var t, e = m._iO.onposition;
          if (e) for (t in e) e.hasOwnProperty(t) && m.clearOnPosition(parseInt(t, 10));
        }, l = function () {
          m.isHTML5 && q(m);
        }, r = function () {
          m.isHTML5 && Y(m);
        }, s = function (t) {
          t || (g = [], y = 0), v = false, m._hasTimer = null, m._a = null, m._html5_canplay = false, m.bytesLoaded = null, m.bytesTotal = null, m.duration = m._iO && m._iO.duration ? m._iO.duration : null, m.durationEstimate = null, m.buffered = [], m.eqData = [], m.eqData.left = [], m.eqData.right = [], m.failures = 0, m.isBuffering = false, m.instanceOptions = {}, m.instanceCount = 0, m.loaded = false, m.metadata = {}, m.readyState = 0, m.muted = false, m.paused = false, m.peakData = {left: 0, right: 0}, m.waveformData = {left: [], right: []}, m.playState = 0, m.position = null, m.id3 = {};
        }, ut.preferFlash && nt && !ut.ignoreFlash && ut.flash[t] !== e && ut.flash[t], this._onTimer = function (t) {
          var e, s = false, a = {};
          return (m._hasTimer || t) && m._a && (t || (0 < m.playState || 1 === m.readyState) && !m.paused) && ((e = m._get_html5_duration()) !== i && (i = e, m.duration = e, s = true), m.durationEstimate = m.duration, (e = 1e3 * m._a.currentTime || 0) !== n && (n = e, s = true), (s || t) && m._whileplaying(e, a, a, a, a)), s;
        }, this._get_html5_duration = function () {
          var t = m._iO;
          return (t = m._a && m._a.duration ? 1e3 * m._a.duration : t && t.duration ? t.duration : null) && !isNaN(t) && Infinity !== t ? t : null;
        }, this._apply_loop = function (t, e) {
          t.loop = 1 < e ? "loop" : "";
        }, this._setup_html5 = function (t) {
          t = f(m._iO, t);
          var e, i = Mt ? ct : m._a, n = decodeURI(t.url);
          if (Mt ? n === decodeURI(it) && (e = true) : n === decodeURI(b) && (e = true), i) {
            if (i._s) if (Mt) i._s && i._s.playState && !e && i._s.stop(); else if (!Mt && n === decodeURI(b)) return m._apply_loop(i, t.loops), i;
            e || (b && (ut.preferFlash && nt && !ut.ignoreFlash && ut.flash[false] !== e && ut.flash[false]), i.src = t.url, it = b = m.url = t.url, i._called_load = false);
          } else t.autoLoad || t.autoPlay ? (m._a = new Audio(t.url), m._a.load()) : m._a = Ht && 10 > opera.version() ? new Audio(null) : new Audio, (i = m._a)._called_load = false, Mt && (ct = i);
          return m.isHTML5 = true, m._a = i, i._s = m, a(), m._apply_loop(i, t.loops), t.autoLoad || t.autoPlay ? m.load() : (i.autobuffer = false, i.preload = "auto"), i;
        }, a = function () {
          if (m._a._added_events) return false;
          var t;
          for (t in m._a._added_events = true, ot) ot.hasOwnProperty(t) && m._a && m._a.addEventListener(t, ot[t], false);
          return true;
        }, o = function () {
          var t;
          for (t in m._a._added_events = false, ot) ot.hasOwnProperty(t) && m._a && m._a.removeEventListener(t, ot[t], false);
        }, this._onload = function (t) {
          var e = !!t || !m.isHTML5 && 8 === c && m.duration;
          return m.loaded = e, m.readyState = e ? 3 : 2, m._onbufferchange(0), e || m.isHTML5 || m._onerror(), m._iO.onload && rt(m, function () {
            m._iO.onload.apply(m, [e]);
          }), true;
        }, this._onerror = function (t, e) {
          m._iO.onerror && rt(m, function () {
            m._iO.onerror.apply(m, [t, e]);
          });
        }, this._onbufferchange = function (t) {
          return !(0 === m.playState || t && m.isBuffering || !t && !m.isBuffering) && (m.isBuffering = 1 === t, m._iO.onbufferchange && m._iO.onbufferchange.apply(m, [t]), true);
        }, this._onsuspend = function () {
          return m._iO.onsuspend && m._iO.onsuspend.apply(m), true;
        }, this._onfailure = function (t, e, i) {
          m.failures++, m._iO.onfailure && 1 === m.failures && m._iO.onfailure(t, e, i);
        }, this._onwarning = function (t, e, i) {
          m._iO.onwarning && m._iO.onwarning(t, e, i);
        }, this._onfinish = function () {
          var t = m._iO.onfinish;
          m._onbufferchange(0), m._resetOnPosition(0), m.instanceCount && (m.instanceCount--, m.instanceCount || (u(), m.playState = 0, m.paused = false, m.instanceCount = 0, m.instanceOptions = {}, m._iO = {}, r(), m.isHTML5 && (m.position = 0)), (!m.instanceCount || m._iO.multiShotEvents) && t && rt(m, function () {
            t.apply(m);
          }));
        }, this._whileloading = function (t, e, i, n) {
          var s = m._iO;
          m.bytesLoaded = t, m.bytesTotal = e, m.duration = Math.floor(i), m.bufferLength = n, m.durationEstimate = m.isHTML5 || s.isMovieStar ? m.duration : s.duration ? m.duration > s.duration ? m.duration : s.duration : parseInt(m.bytesTotal / m.bytesLoaded * m.duration, 10), m.isHTML5 || (m.buffered = [{start: 0, end: m.duration}]), (3 !== m.readyState || m.isHTML5) && s.whileloading && s.whileloading.apply(m);
        }, this._whileplaying = function (t, i, n, s, a) {
          var o = m._iO;
          return !isNaN(t) && null !== t && (m.position = Math.max(0, t), m._processOnPosition(), !m.isHTML5 && 8 < c && (o.usePeakData && i !== e && i && (m.peakData = {left: i.leftPeak, right: i.rightPeak}), o.useWaveformData && n !== e && n && (m.waveformData = {left: n.split(","), right: s.split(",")}), o.useEQData && a !== e && a && a.leftEQ && (t = a.leftEQ.split(","), m.eqData = t, m.eqData.left = t, a.rightEQ !== e && a.rightEQ && (m.eqData.right = a.rightEQ.split(",")))), 1 === m.playState && (m.isHTML5 || 8 !== c || m.position || !m.isBuffering || m._onbufferchange(0), o.whileplaying && o.whileplaying.apply(m)), true);
        }, this._oncaptiondata = function (t) {
          m.captiondata = t, m._iO.oncaptiondata && m._iO.oncaptiondata.apply(m, [t]);
        }, this._onmetadata = function (t, e) {
          var i, n, s = {};
          for (i = 0, n = t.length; i < n; i++) s[t[i]] = e[i];
          m.metadata = s, m._iO.onmetadata && m._iO.onmetadata.call(m, m.metadata);
        }, this._onid3 = function (t, e) {
          var i, n, s = [];
          for (i = 0, n = t.length; i < n; i++) s[t[i]] = e[i];
          m.id3 = f(m.id3, s), m._iO.onid3 && m._iO.onid3.apply(m);
        }, this._onconnect = function (t) {
          t = 1 === t, (m.connected = t) && (m.failures = 0, j(m.id) && (m.getAutoPlay() ? m.play(e, m.getAutoPlay()) : m._iO.autoLoad && m.load()), m._iO.onconnect && m._iO.onconnect.apply(m, [t]));
        }, this._ondataerror = function (t) {
          0 < m.playState && m._iO.ondataerror && m._iO.ondataerror.apply(m);
        };
      }, A = function () {
        return mt.body || mt.getElementsByTagName("div")[0];
      }, r = function (t) {
        return mt.getElementById(t);
      }, f = function (t, i) {
        var n, s, a = t || {};
        for (s in n = i === e ? ut.defaultOptions : i) n.hasOwnProperty(s) && a[s] === e && (a[s] = "object" != typeof n[s] || null === n[s] ? n[s] : f(a[s], n[s]));
        return a;
      }, rt = function (e, i) {
        e.isHTML5 || 8 !== c ? i() : t.setTimeout(i, 0);
      }, m = {onready: 1, ontimeout: 1, defaultOptions: 1, flash9Options: 1, movieStarOptions: 1}, p = function (t, i) {
        var n, s = true, a = i !== e, o = ut.setupOptions;
        for (n in t) if (t.hasOwnProperty(n)) if ("object" != typeof t[n] || null === t[n] || t[n] instanceof Array || t[n] instanceof RegExp) a && m[i] !== e ? ut[i][n] = t[n] : o[n] !== e ? (ut.setupOptions[n] = t[n], ut[n] = t[n]) : m[n] === e ? s = false : ut[n] instanceof Function ? ut[n].apply(ut, t[n] instanceof Array ? t[n] : [t[n]]) : ut[n] = t[n]; else {
          if (m[n] !== e) return p(t[n], n);
          s = false;
        }
        return s;
      }, et = function () {
        function e(t) {
          var e = (t = Rt.call(t)).length;
          return n ? (t[1] = "on" + t[1], 3 < e && t.pop()) : 3 === e && t.push(false), t;
        }
        function i(t, e) {
          var i = t.shift(), a = [s[e]];
          n ? i[a](t[0], t[1]) : i[a].apply(i, t);
        }
        var n = t.attachEvent, s = {add: n ? "attachEvent" : "addEventListener", remove: n ? "detachEvent" : "removeEventListener"};
        return {add: function () {
          i(e(arguments), "add");
        }, remove: function () {
          i(e(arguments), "remove");
        }};
      }(), ot = {abort: a(function () {}), canplay: a(function () {
        var t, i = this._s;
        if (!i._html5_canplay) {
          if (i._html5_canplay = true, i._onbufferchange(0), t = i._iO.position === e || isNaN(i._iO.position) ? null : i._iO.position / 1e3, this.currentTime !== t) try {
            this.currentTime = t;
          } catch (t) {}
          i._iO._oncanplay && i._iO._oncanplay();
        }
      }), canplaythrough: a(function () {
        var t = this._s;
        t.loaded || (t._onbufferchange(0), t._whileloading(t.bytesLoaded, t.bytesTotal, t._get_html5_duration()), t._onload(true));
      }), durationchange: a(function () {
        var t, e = this._s;
        t = e._get_html5_duration(), isNaN(t) || t === e.duration || (e.durationEstimate = e.duration = t);
      }), ended: a(function () {
        this._s._onfinish();
      }), error: a(function () {
        var t = Z[this.error.code] || null;
        this._s._onload(false), this._s._onerror(this.error.code, t);
      }), loadeddata: a(function () {
        var t = this._s;
        t._loaded || Ft || (t.duration = t._get_html5_duration());
      }), loadedmetadata: a(function () {}), loadstart: a(function () {
        this._s._onbufferchange(1);
      }), play: a(function () {
        this._s._onbufferchange(0);
      }), playing: a(function () {
        this._s._onbufferchange(0);
      }), progress: a(function (t) {
        var e, i, n = this._s, s = 0;
        s = t.target.buffered;
        e = t.loaded || 0;
        var a = t.total || 1;
        if (n.buffered = [], s && s.length) {
          for (e = 0, i = s.length; e < i; e++) n.buffered.push({start: 1e3 * s.start(e), end: 1e3 * s.end(e)});
          s = 1e3 * (s.end(0) - s.start(0)), e = Math.min(1, s / (1e3 * t.target.duration));
        }
        isNaN(e) || (n._whileloading(e, a, n._get_html5_duration()), e && a && e === a && ot.canplaythrough.call(this, t));
      }), ratechange: a(function () {}), suspend: a(function (t) {
        var e = this._s;
        ot.progress.call(this, t), e._onsuspend();
      }), stalled: a(function () {}), timeupdate: a(function () {
        this._s._onTimer();
      }), waiting: a(function () {
        this._s._onbufferchange(1);
      })}, G = function (t) {
        return !(!t || !(t.type || t.url || t.serverURL)) && (!(t.serverURL || t.type && (ut.preferFlash && nt && !ut.ignoreFlash && ut.flash[t.type] !== e && ut.flash[t.type])) && (t.type ? K({type: t.type}) : K({url: t.url}) || ut.html5Only || t.url.match(/data:/i)));
      }, Q = function (t) {
        var i;
        return t && (i = Ft ? "about:blank" : ut.html5.canPlayType("audio/wav") ? "data:audio/wave;base64,/UklGRiYAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQIAAAD//w==" : "about:blank", t.src = i, t._called_unload !== e && (t._called_load = false)), Mt && (it = null), i;
      }, K = function (t) {
        if (!ut.useHTML5Audio || !ut.hasHTML5) return false;
        var i = t.url || null;
        t = t.type || null;
        var n, a = ut.audioFormats;
        if (t && ut.html5[t] !== e) return ut.html5[t] && !(ut.preferFlash && nt && !ut.ignoreFlash && ut.flash[t] !== e && ut.flash[t]);
        if (!J) {
          for (n in J = [], a) a.hasOwnProperty(n) && (J.push(n), a[n].related && (J = J.concat(a[n].related)));
          J = new RegExp("\\.(" + J.join("|") + ")(\\?.*)?$", "i");
        }
        return (n = i ? i.toLowerCase().match(J) : null) && n.length ? n = n[1] : t && (n = (-1 !== (i = t.indexOf(";")) ? t.substr(0, i) : t).substr(6)), n && ut.html5[n] !== e ? i = ut.html5[n] && !(ut.preferFlash && nt && !ut.ignoreFlash && ut.flash[n] !== e && ut.flash[n]) : (t = "audio/" + n, i = ut.html5.canPlayType({type: t}), i = (ut.html5[n] = i) && ut.html5[t] && !(ut.preferFlash && nt && !ut.ignoreFlash && ut.flash[t] !== e && ut.flash[t])), i;
      }, tt = function () {
        function t(t) {
          var e, i = e = false;
          if (!o || "function" != typeof o.canPlayType) return e;
          if (t instanceof Array) {
            for (a = 0, e = t.length; a < e; a++) (ut.html5[t[a]] || o.canPlayType(t[a]).match(ut.html5Test)) && (i = true, ut.html5[t[a]] = true, ut.flash[t[a]] = !!t[a].match(Wt));
            e = i;
          } else e = !(!(t = !(!o || "function" != typeof o.canPlayType) && o.canPlayType(t)) || !t.match(ut.html5Test));
          return e;
        }
        if (!ut.useHTML5Audio || !ut.hasHTML5) return At = ut.html5.usingFlash = true, false;
        var i, n, s, a, o = Audio !== e ? Ht && 10 > opera.version() ? new Audio(null) : new Audio : null, r = {};
        for (i in s = ut.audioFormats) if (s.hasOwnProperty(i) && (n = "audio/" + i, r[i] = t(s[i].type), r[n] = r[i], i.match(Wt) ? (ut.flash[i] = true, ut.flash[n] = true) : (ut.flash[i] = false, ut.flash[n] = false), s[i] && s[i].related)) for (a = s[i].related.length - 1; 0 <= a; a--) r["audio/" + s[i].related[a]] = r[i], ut.html5[s[i].related[a]] = r[i], ut.flash[s[i].related[a]] = r[i];
        return r.canPlayType = o ? t : null, ut.html5 = f(ut.html5, r), ut.html5.usingFlash = V(), At = ut.html5.usingFlash, true;
      }, k = {}, D = function () {}, U = function (t) {
        return 8 === c && 1 < t.loops && t.stream && (t.stream = false), t;
      }, B = function (t, e) {
        return t && !t.usePolicyFile && (t.onid3 || t.usePeakData || t.useWaveformData || t.useEQData) && (t.usePolicyFile = true), t;
      }, l = function () {
        return false;
      }, x = function (t) {
        for (var e in t) t.hasOwnProperty(e) && "function" == typeof t[e] && (t[e] = l);
      }, L = function (t) {
        t === e && (t = false), (_t || t) && ut.disable(t);
      }, N = function (t) {
        if (t) if (t.match(/\.swf(\?.*)?$/i)) {
          if (t.substr(t.toLowerCase().lastIndexOf(".swf?") + 4)) return t;
        } else t.lastIndexOf("/") !== t.length - 1 && (t += "/");
        return t = (t && -1 !== t.lastIndexOf("/") ? t.substr(0, t.lastIndexOf("/") + 1) : "./") + ut.movieURL, ut.noSWFCache && (t += "?ts=" + (new Date).getTime()), t;
      }, O = function () {
        8 !== (c = parseInt(ut.flashVersion, 10)) && 9 !== c && (ut.flashVersion = c = 8);
        var t = ut.debugMode || ut.debugFlash ? "_debug.swf" : ".swf";
        ut.useHTML5Audio && !ut.html5Only && ut.audioFormats.mp4.required && 9 > c && (ut.flashVersion = c = 9), ut.version = ut.versionNumber + (ut.html5Only ? " (HTML5-only mode)" : 9 === c ? " (AS3/Flash 9)" : " (AS2/Flash 8)"), 8 < c ? (ut.defaultOptions = f(ut.defaultOptions, ut.flash9Options), ut.features.buffering = true, ut.defaultOptions = f(ut.defaultOptions, ut.movieStarOptions), ut.filePatterns.flash9 = new RegExp("\\.(mp3|" + Gt.join("|") + ")(\\?.*)?$", "i"), ut.features.movieStar = true) : ut.features.movieStar = false, ut.filePattern = ut.filePatterns[8 !== c ? "flash9" : "flash8"], ut.movieURL = (8 === c ? "soundmanager2.swf" : "soundmanager2_flash9.swf").replace(".swf", t), ut.features.peakData = ut.features.waveformData = ut.features.eqData = 8 < c;
      }, P = function (t, e) {
        dt && dt._setPolling(t, e);
      }, j = this.getSoundById, H = function () {
        var t = [];
        return ut.debugMode && t.push("sm2_debug"), ut.debugFlash && t.push("flash_debug"), ut.useHighPerformance && t.push("high_performance"), t.join(" ");
      }, F = function () {
        D("fbHandler");
        var t = ut.getMoviePercent(), e = {type: "FLASHBLOCK"};
        ut.html5Only || (ut.ok() ? ut.oMC && (ut.oMC.className = [H(), "movieContainer", "swf_loaded" + (ut.didFlashBlock ? " swf_unblocked" : "")].join(" ")) : (At && (ut.oMC.className = H() + " movieContainer " + (null === t ? "swf_timedout" : "swf_error")), ut.didFlashBlock = true, g({type: "ontimeout", ignoreInit: true, error: e}), M(e)));
      }, v = function (t, i, n) {
        vt[t] === e && (vt[t] = []), vt[t].push({method: i, scope: n || null, fired: false});
      }, g = function (t) {
        if (t || (t = {type: ut.ok() ? "onready" : "ontimeout"}), !bt && t && !t.ignoreInit || "ontimeout" === t.type && (ut.ok() || _t && !t.ignoreInit)) return false;
        var e, i = {success: t && t.ignoreInit ? ut.ok() : !_t}, n = t && t.type && vt[t.type] || [], s = [], a = (i = [i], At && !ut.ok());
        for (t.error && (i[0].error = t.error), t = 0, e = n.length; t < e; t++) true !== n[t].fired && s.push(n[t]);
        if (s.length) for (t = 0, e = s.length; t < e; t++) s[t].scope ? s[t].method.apply(s[t].scope, i) : s[t].method.apply(this, i), a || (s[t].fired = true);
        return true;
      }, y = function () {
        t.setTimeout(function () {
          ut.useFlashBlock && F(), g(), "function" == typeof ut.onload && ut.onload.apply(t), ut.waitForWindowLoad && et.add(t, "load", y);
        }, 1);
      }, st = function () {
        if (nt !== e) return nt;
        var i, n, s = false, a = navigator, o = t.ActiveXObject;
        try {
          n = a.plugins;
        } catch (t) {
          n = undefined;
        }
        if (n && n.length) (a = a.mimeTypes) && a["application/x-shockwave-flash"] && a["application/x-shockwave-flash"].enabledPlugin && a["application/x-shockwave-flash"].enabledPlugin.description && (s = true); else if (o !== e && !ft.match(/MSAppHost/i)) {
          try {
            i = new o("ShockwaveFlash.ShockwaveFlash");
          } catch (t) {
            i = null;
          }
          s = !!i;
        }
        return nt = s;
      }, V = function () {
        var t, e, i = ut.audioFormats;
        if (xt && ft.match(/os (1|2|3_0|3_1)\s/i) ? (ut.hasHTML5 = false, ut.html5Only = true, ut.oMC && (ut.oMC.style.display = "none")) : !ut.useHTML5Audio || ut.html5 && ut.html5.canPlayType || (ut.hasHTML5 = false), ut.useHTML5Audio && ut.hasHTML5) for (e in X = true, i) i.hasOwnProperty(e) && i[e].required && (ut.html5.canPlayType(i[e].type) ? ut.preferFlash && (ut.flash[e] || ut.flash[i[e].type]) && (t = true) : (X = false, t = true));
        return ut.ignoreFlash && (t = false, X = true), ut.html5Only = ut.hasHTML5 && ut.useHTML5Audio && !t, !ut.html5Only;
      }, z = function (t) {
        var e, i, n = 0;
        if (t instanceof Array) {
          for (e = 0, i = t.length; e < i; e++) if (t[e] instanceof Object) {
            if (ut.canPlayMIME(t[e].type)) {
              n = e;
              break;
            }
          } else if (ut.canPlayURL(t[e])) {
            n = e;
            break;
          }
          t[n].url && (t[n] = t[n].url), t = t[n];
        }
        return t;
      }, q = function (t) {
        t._hasTimer || (t._hasTimer = true, !Ut && ut.html5PollingInterval && (null === It && 0 === Et && (It = setInterval(W, ut.html5PollingInterval)), Et++));
      }, Y = function (t) {
        t._hasTimer && (t._hasTimer = false, !Ut && ut.html5PollingInterval && Et--);
      }, W = function () {
        var t;
        if (null === It || Et) for (t = ut.soundIDs.length - 1; 0 <= t; t--) ut.sounds[ut.soundIDs[t]].isHTML5 && ut.sounds[ut.soundIDs[t]]._hasTimer && ut.sounds[ut.soundIDs[t]]._onTimer(); else clearInterval(It), It = null;
      }, M = function (i) {
        i = i !== e ? i : {}, "function" == typeof ut.onerror && ut.onerror.apply(t, [{type: i.type !== e ? i.type : null}]), i.fatal !== e && i.fatal && ut.disable();
      }, at = function () {
        if (Bt && st()) {
          var t, e, i = ut.audioFormats;
          for (e in i) if (i.hasOwnProperty(e) && ("mp3" === e || "mp4" === e) && (ut.html5[e] = false, i[e] && i[e].related)) for (t = i[e].related.length - 1; 0 <= t; t--) ut.html5[i[e].related[t]] = false;
        }
      }, this._setSandboxType = function (t) {}, this._externalInterfaceOK = function (t) {
        ut.swfLoaded || (ut.swfLoaded = true, qt = false, Bt && at(), setTimeout(u, Nt ? 100 : 1));
      }, R = function (t, i) {
        if (gt && yt) return false;
        if (ut.html5Only) return O(), ut.oMC = r(ut.movieID), u(), yt = gt = true, false;
        var s, a, o, l = i || ut.url, h = ut.altURL || l, c = A(), d = H(), f = null;
        f = (f = mt.getElementsByTagName("html")[0]) && f.dir && f.dir.match(/rtl/i);
        if (t = t === e ? ut.id : t, O(), ut.url = N(zt ? l : h), i = ut.url, ut.wmode = !ut.wmode && ut.useHighPerformance ? "transparent" : ut.wmode, null !== ut.wmode && (ft.match(/msie 8/i) || !Nt && !ut.useHighPerformance) && navigator.platform.match(/win32|win64/i) && (Ct.push(k.spcWmode), ut.wmode = null), c = {name: t, id: t, src: i, quality: "high", allowScriptAccess: ut.allowScriptAccess, bgcolor: ut.bgColor, pluginspage: Xt + "www.macromedia.com/go/getflashplayer", title: "JS/Flash audio component (SoundManager 2)", type: "application/x-shockwave-flash", wmode: ut.wmode, hasPriority: "true"}, ut.debugFlash && (c.FlashVars = "debug=1"), ut.wmode || delete c.wmode, Nt) l = mt.createElement("div"), a = ['<object id="' + t + '" data="' + i + '" type="' + c.type + '" title="' + c.title + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">', '<param name="movie" value="' + i + '" />', '<param name="AllowScriptAccess" value="' + ut.allowScriptAccess + '" />', '<param name="quality" value="' + c.quality + '" />', ut.wmode ? '<param name="wmode" value="' + ut.wmode + '" />' : "", '<param name="bgcolor" value="' + ut.bgColor + '" />', '<param name="hasPriority" value="true" />', ut.debugFlash ? '<param name="FlashVars" value="' + c.FlashVars + '" />' : "", "</object>"].join(""); else for (s in l = mt.createElement("embed"), c) c.hasOwnProperty(s) && l.setAttribute(s, c[s]);
        if (d = H(), c = A()) if (ut.oMC = r(ut.movieID) || mt.createElement("div"), ut.oMC.id) o = ut.oMC.className, ut.oMC.className = (o ? o + " " : "movieContainer") + (d ? " " + d : ""), ut.oMC.appendChild(l), Nt && ((s = ut.oMC.appendChild(mt.createElement("div"))).className = "sm2-object-box", s.innerHTML = a), yt = true; else {
          if (ut.oMC.id = ut.movieID, ut.oMC.className = "movieContainer " + d, s = d = null, ut.useFlashBlock || (ut.useHighPerformance ? d = {position: "fixed", width: "8px", height: "8px", bottom: "0px", left: "0px", overflow: "hidden"} : (d = {position: "absolute", width: "6px", height: "6px", top: "-9999px", left: "-9999px"}, f && (d.left = Math.abs(parseInt(d.left, 10)) + "px"))), Dt && (ut.oMC.style.zIndex = 1e4), !ut.debugFlash) for (o in d) d.hasOwnProperty(o) && (ut.oMC.style[o] = d[o]);
          try {
            Nt || ut.oMC.appendChild(l), c.appendChild(ut.oMC), Nt && ((s = ut.oMC.appendChild(mt.createElement("div"))).className = "sm2-object-box", s.innerHTML = a), yt = true;
          } catch (t) {
            throw Error(D("domError") + " \n" + t.toString());
          }
        }
        return gt = true;
      }, S = function () {
        return ut.html5Only ? (R(), false) : !(dt || !ut.url) && ((dt = ut.getMovie(ut.id)) || (Ot ? (Nt ? ut.oMC.innerHTML = Tt : ut.oMC.appendChild(Ot), Ot = null, gt = true) : R(ut.id, ut.url), dt = ut.getMovie(ut.id)), "function" == typeof ut.oninitmovie && setTimeout(ut.oninitmovie, 1), true);
      }, b = function () {
        setTimeout(_, 1e3);
      }, w = function () {
        t.setTimeout(function () {
          ut.setup({preferFlash: false}).reboot(), ut.didFlashBlock = true, ut.beginDelayedInit();
        }, 1);
      }, _ = function () {
        var e, i = false;
        ut.url && !kt && (kt = true, et.remove(t, "load", b), nt && qt && !jt || (bt || 0 < (e = ut.getMoviePercent()) && 100 > e && (i = true), setTimeout(function () {
          e = ut.getMoviePercent(), i ? (kt = false, t.setTimeout(b, 1)) : !bt && Yt && (null === e ? ut.useFlashBlock || 0 === ut.flashLoadTimeout ? ut.useFlashBlock && F() : !ut.useFlashBlock && X ? w() : g({type: "ontimeout", ignoreInit: true, error: {type: "INIT_FLASHBLOCK"}}) : 0 !== ut.flashLoadTimeout && (!ut.useFlashBlock && X ? w() : L(true)));
        }, ut.flashLoadTimeout)));
      }, T = function () {
        return jt || !qt ? (et.remove(t, "focus", T), true) : (jt = Yt = true, kt = false, b(), et.remove(t, "focus", T), true);
      }, d = function (e) {
        if (bt) return false;
        if (ut.html5Only) return bt = true, y(), true;
        var i, n = true;
        return ut.useFlashBlock && ut.flashLoadTimeout && !ut.getMoviePercent() || (bt = true), i = {type: !nt && At ? "NO_FLASH" : "INIT_TIMEOUT"}, (_t || e) && (ut.useFlashBlock && ut.oMC && (ut.oMC.className = H() + " " + (null === ut.getMoviePercent() ? "swf_timedout" : "swf_error")), g({type: "ontimeout", error: i, ignoreInit: true}), M(i), n = false), _t || (ut.waitForWindowLoad && !wt ? et.add(t, "load", y) : y()), n;
      }, h = function () {
        var t, i = ut.setupOptions;
        for (t in i) i.hasOwnProperty(t) && (ut[t] === e ? ut[t] = i[t] : ut[t] !== i[t] && (ut.setupOptions[t] = ut[t]));
      }, u = function () {
        if (bt) return false;
        if (ut.html5Only) return bt || (et.remove(t, "load", ut.beginDelayedInit), ut.enabled = true, d()), true;
        S();
        try {
          dt._externalInterfaceTest(false), P(true, ut.flashPollingInterval || (ut.useHighPerformance ? 10 : 50)), ut.debugMode || dt._disableDebug(), ut.enabled = true, ut.html5Only || et.add(t, "unload", l);
        } catch (t) {
          return M({type: "JS_TO_FLASH_EXCEPTION", fatal: true}), L(true), d(), false;
        }
        return d(), et.remove(t, "load", ut.beginDelayedInit), true;
      }, E = function () {
        return !C && (C = true, h(), !nt && ut.hasHTML5 && ut.setup({useHTML5Audio: true, preferFlash: false}), tt(), !nt && At && (Ct.push(k.needFlash), ut.setup({flashLoadTimeout: 1})), mt.removeEventListener && mt.removeEventListener("DOMContentLoaded", E, false), S(), true);
      }, $ = function () {
        return "complete" === mt.readyState && (E(), mt.detachEvent("onreadystatechange", $)), true;
      }, I = function () {
        wt = true, E(), et.remove(t, "load", I);
      }, st(), et.add(t, "focus", T), et.add(t, "load", b), et.add(t, "load", I), mt.addEventListener ? mt.addEventListener("DOMContentLoaded", E, false) : mt.attachEvent ? mt.attachEvent("onreadystatechange", $) : M({type: "NO_DOM2_EVENTS", fatal: true});
    }
    if (!t || !t.document) throw Error("SoundManager requires a browser with window and document objects.");
    var n = null;
    t.SM2_DEFER !== e && SM2_DEFER || (n = new i), "object" == typeof module && module && "object" == typeof module.exports ? (module.exports.SoundManager = i, module.exports.soundManager = n) : "function" == typeof define && define.amd && define(function () {
      return {constructor: i, getInstance: function (e) {
        return !t.soundManager && e instanceof Function && ((e = e(i)) instanceof i && (t.soundManager = e)), t.soundManager;
      }};
    }), t.SoundManager = i, t.soundManager = n;
  }(window);
  var n = i(96175), s = i(77617);
  window.PushClient = n.A, window.Tooltip = s.A;
}, 77617: (t, e, i) => {
  i.d(e, {A: () => n});
  class n {
    constructor(t, e, i) {
      this.maxWidth = 400, this.isInit = false, this.div = null, this.divContent = null, this.isDisabled = undefined, this.divId = undefined, this.ident = undefined, this.containerId = undefined, this.defaultZIndex = "var(--zIndex-tooltip)", this.currentZIndex = undefined, this.timeoutId = null, this.isDisabled = i || false, this.divId = undefined === t ? null : t, this.ident = undefined === e ? 1 : e, this.containerId = "tooltip-" + this.ident, this.currentZIndex = this.defaultZIndex, this.init();
    }
    init() {
      this.isInit || this.isDisabled || this.createTooltipElement() && (this.isInit = true);
    }
    show(t, e, i, n) {
      if (this.timeoutId && clearTimeout(this.timeoutId), this.isInit && !this.isDisabled && this.div && this.divContent) {
        var s = t.title;
        if (s || (s = t.getAttribute("title") || ""), s) {
          var a = s.length;
          if (s = (s = (s = (s = (s = (s = (s = (s = s.replace(/\[bl\]([^]+)/gi, (e, i) => {
            var n = t.closest("[data-bookmaker-id]");
            if (!n) return "";
            var s = n.getAttribute("data-bookmaker-id");
            if (s) {
              var a = (i = i.replace(/\[br\]/, "\n")).split("\n"), o = a[0], r = "";
              a[1] && (r = '<span class="tooltip-second-row">' + a[1] + "</span>");
              var l = false, h = null, u = "";
              "undefined" != typeof cjs && cjs.Api.loader.get("bookmakerSettings").call(t => {
                h = t.getLogo(s), u = t.getBookmakerNameByGeoIpAndId(cjs.geoIP, cjs.geoIPIsoSubdivisionCode0, s), l = 1 === t.showBookmakerLogoMatchSummary(cjs.geoIP, cjs.geoIPIsoSubdivisionCode0);
              });
              var c = "";
              return h && (c = '<span class="tooltip-logo"><a><span class="tooltip-first-row"><span style="background: transparent url(' + h.getUrl() + ') no-repeat" class="detail-blogos"></span><span class="tooltip-first-row__text">' + o + "</span></span>" + r + "</a></span>", l && (c = '<span class="tooltip-logo"><a><span class="tooltip-first-row"><span class="tooltip-first-row__text">' + u + " " + o + "</span></span>" + r + "</a></span>")), c;
            }
            return "";
          })).replace(/\[b\]/gi, "<strong>")).replace(/\[\/b\]/gi, "</strong>")).replace(/\[br\]/gi, "<br />")).replace(/\[u\]/i, " &raquo; ")).replace(/\[d\]/i, " &raquo; ")).replace(/\n/g, "<br />")).replace(/\\'/g, "'"), a > 0) {
            var o = e.clientX;
            this.divContent.innerHTML = s, t.title = "", this.div.style.display = "block", (this.div.style.width = "auto") && (this.div.style.width = this.div.offsetWidth + "px");
            var r = this.div.offsetWidth;
            if (r > this.maxWidth && (r = this.maxWidth, this.div.style.width = this.maxWidth + "px", this.divContent.style.whiteSpace = "normal"), undefined !== i && null === i && null != n) {
              var l = document.getElementById(n);
              if (l) i = true, o + r > parseFloat(getComputedStyle(l, null).width.replace("px", "")) && (i = false);
            } else {
              i = parseFloat(getComputedStyle(window.document.body, null).width.replace("px", "")) / 2 - o > 0;
            }
            true === i && this.div.classList.add("revert"), this.div.style.zIndex = this.getZIndex();
            var h = t.getBoundingClientRect(), u = t.ownerDocument.defaultView;
            if (!u) return;
            var c, d = {top: h.top + u.pageYOffset, left: h.left + u.pageXOffset}, f = parseFloat(getComputedStyle(t, null).width.replace("px", "")), p = parseFloat(getComputedStyle(t, null).height.replace("px", "")), m = isNaN(f) ? 10 : f, v = isNaN(p) ? 10 : p, g = d.top + 10 + v, y = d.left ? Math.floor(m / 2) : Math.ceil(m / 2), b = d.left + y - 11, _ = d.left - r + Math.ceil(m / 2) + 11;
            !i && _ > 0 ? c = _ : !i && _ <= 0 ? (c = 0, this.div.style.width = this.div.offsetWidth + _ - 10 + "px", this.div.classList.add("tooltip-wide")) : (c = b, this.div.classList.add("revert-wide")), this.div.title = "", this.div.style.top = g + "px", this.div.style.left = c + "px";
          }
        }
      }
    }
    hide(t) {
      if (this.isInit && !this.isDisabled && this.div && this.divContent) {
        var e = this.divContent.innerHTML.replace(/<br( \/){0,1}>/gi, "\n");
        (e = (e = e.replace(/\<strong\>/gi, "[b]")).replace(/\<\/strong\>/gi, "[/b]")).length > 0 && (null != t && "" === t.title && (t.title = e), this.div.style.display = "none", this.div.style.width = "auto", this.divContent.innerHTML = "", this.div.classList.remove("revert"), this.div.classList.remove("revert-wide"), this.div.classList.remove("tooltip-wide"));
      }
    }
    hide_all() {
      this.isInit && !this.isDisabled && this.div && (this.div.style.display = "none", this.div.style.width = "auto", this.div.classList.remove("revert"), this.div.classList.remove("revert-wide"), this.div.classList.remove("tooltip-wide"));
    }
    setMaxWidth(t) {
      this.maxWidth = t - 0;
    }
    getTooltipWrapper() {
      return this.divId ? document.getElementById(this.divId) : document.getElementsByTagName("body")[0];
    }
    createTooltipElement() {
      if (this.div = document.getElementById(this.containerId), null !== this.div) return this.divContent = this.div.getElementsByTagName("span")[0], true;
      var t = this.getTooltipWrapper();
      if (!t) return false;
      this.div = document.createElement("div"), this.div.id = this.containerId, this.div.className = "tooltip", this.divContent = document.createElement("span"), this.div.appendChild(this.divContent);
      var e = document.createElement("div");
      e.id = this.containerId + "-lt", e.className = "tooltip-lt", this.div.appendChild(e);
      var i = document.createElement("div");
      i.id = this.containerId + "-rt", i.className = "tooltip-rt", this.div.appendChild(i);
      var n = document.createElement("div");
      n.id = this.containerId + "-lb", n.className = "tooltip-lb", this.div.appendChild(n);
      var s = document.createElement("div");
      s.id = this.containerId + "-cb", s.className = "tooltip-cb", this.div.appendChild(s);
      var a = document.createElement("div");
      a.id = this.containerId + "-rb", a.className = "tooltip-rb", this.div.appendChild(a);
      var o = document.createElement("div");
      return o.id = this.containerId + "-ct", o.className = "tooltip-ct", this.div.appendChild(o), t.appendChild(this.div), true;
    }
    setZIndex(t) {
      this.currentZIndex = t;
    }
    getZIndex() {
      return this.currentZIndex;
    }
    getDefaultZIndex() {
      return this.defaultZIndex;
    }
    revertZIndex() {
      this.setZIndex(this.getDefaultZIndex());
    }
    setTimeoutId(t) {
      this.timeoutId = t;
    }
  }
}, 96175: (t, e, i) => {
  var n, s, a;
  function o() {
    Number.MAX_SAFE_INTEGER || (Number.MAX_SAFE_INTEGER = Math.pow(2, 53) - 1), this.a(), this.b = true, this.c(false), this.d = "PushClient WebSocket Client v5.1.3", this.e = o.f, this.g = this.h, this.i = this.j, this.l = this.k = false;
  }
  i.d(e, {A: () => o}), o.prototype.m = function () {}, o.prototype.n = function () {}, o.prototype.a = function () {
    this.o = function (t) {
      console.log(t);
    }, this.p = 1, this.r = this.q = false, this.s = 2, this.t = true, this.u = null, this.v = [], this.x = this.w = null, this.y = [], this.z = 0, this.a0 = (new Date).getTime(), this.b = false, this.a2 = this.a1 = null, this.a3 = [], this.a4 = {}, this.a5 = {}, this.a6 = [], this.a7 = {}, this.a7[""] = {seqid: 7e4, seq: 0, history: 0, conflation: 0, needsRecovery: false, nrOfConsecutiveRecovery: 0, messagesReceivedUntilRecovery: 0, cacheRecoveryStatus: o.a8, currentSubscribeType: o.a9}, this.ac = this.ab = this.aa = null, this.ad = (new Date).getTime(), this.ae = null, this.af = [], this.ah = this.ag = 0, this.ai = false, this.aj = null, this.ak = [], this.ao = this.an = this.am = this.al = null, this.ap = {}, this.ap.aq = (new Date).getTime(), this.ap.ar = null, this.ap.as = [], this.at = 3, this.au = 5e3, this.av = o.TRUNCATED_EXPONENTIAL_BACKOFF, this.aw = 2e4, this.ax = 36e4, this.ay = 3e4 + Math.floor(1e4 * Math.random()), this.az = true;
  }, o.b0 = 2, o.b1 = 9e5, o.b2 = 1e4, o.b3 = "SUBSCRIBE", o.b4 = "UNSUBSCRIBE", o.b5 = "PING", o.b6 = "CONNECT", o.b7 = "PUBLISH", o.b8 = "PAUSE", o.b9 = "RESUME", o.ba = 0, o.bb = 1, o.bc = 2, o.bd = 3, o.be = 4, o.bf = 5, o.bg = 6, o.bh = 7, o.f = 8, o.bi = 9, o.bj = 10, o.bk = "SERVER_UP", o.bl = "SERVER_DOWN", o.bm = "SERVER_RECYCLE", o.bn = "1", o.bo = "2", o.bp = "3", o.bq = 1, o.br = "ERROR_TIMEOUT", o.bs = "ERROR_HTTP", o.bt = "ERROR_SERVER", o.a9 = "SUBSCRIBE_TYPE_NORMAL", o.bu = "SUBSCRIBE_TYPE_CONFLATION", o.bv = "SUBSCRIBE_TYPE_HISTORY", o.bw = "SUBSCRIBE_TYPE_RECOVERY", o.a8 = "cache_ok", o.bx = "cache_ok_no_new_message", o.by = "cache_ok_new_epoch", o.bz = "no_cache", o.c0 = "no_seq", o.c1 = "end", o.c2 = 0, o.c3 = 1, o.c4 = 2, (n = o.prototype).c5 = function (t, e) {
    if (t.name) t = t.name; else {
      var i = t.toString();
      if (0 === (t = (t = i.substring(i.indexOf("function") + 8, i.indexOf("("))).replace(/^\s+|\s+$/g, "")).length && (t = "anonymous"), "anonymous" === t && "object" == typeof e) for (var n = 0; n < e.length; n++) for (var s in e[n]) if (e[n].hasOwnProperty(s) && "function" == typeof e[n][s] && e[n][s].toString() === i) return s;
    }
    return t;
  }, n.c6 = function (t) {
    if (null == t || "number" == typeof t || "boolean" == typeof t) return t;
    if ("string" == typeof t) return '"' + t + '"';
    if ("function" == typeof t) return this.c5(t, this) + "()";
    if (t instanceof Array) return this.c7(t);
    var e = "{", i = 0;
    for (var n in t) i > 0 && (e += ", "), t.hasOwnProperty(n) && (e += n + ":" + this.c6(t[n])), i++;
    return e += "}";
  }, n.c8 = function () {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
      var e = 16 * Math.random() | 0;
      return ("x" == t ? e : 3 & e | 8).toString(16);
    });
  }, n.c9 = function (t, e) {
    var i = o.b2;
    return t > 0 && (t <= this.at ? i = t * this.au - Math.floor(Math.random() * this.au) : this.av === o.TRUNCATED_EXPONENTIAL_BACKOFF ? (t -= this.at, i = Math.min(this.aw * Math.pow(2, t) - Math.floor(Math.random() * this.aw * t), this.ax)) : i = this.aw, undefined !== e && i < o.b2 && (i = o.b2)), i;
  }, n.ca = function (t, e) {
    var i = {};
    if (e.length > 0) for (var n = 0; n < e.length; n++) e[n] in t && (i[e[n]] = t[e[n]]); else for (n in t) i[n] = t[n];
    return i;
  }, n.cb = function (t, e) {
    for (var i = [], n = 0; n < e.length; n++) e[n] in t && i.push(e[n]);
    return i;
  }, n.cc = function (t, e) {
    for (var i = 0; i < t.length; i++) if (t[i] === e) return i;
    return -1;
  }, n.cd = function (t) {
    for (var e = [], i = 0; i < t.length; i++) e.push(t[i]);
    return e;
  }, n.ce = function (t, e) {
    for (var i = [], n = 0; n < t.length; n++) -1 === this.cc(e, t[n]) && i.push(t[n]);
    return i;
  }, n.cf = function (t, e) {
    for (var i = [], n = 0; n < t.length; n++) -1 !== this.cc(e, t[n]) && i.push(t[n]);
    return i;
  }, n.cg = function (t, e) {
    for (var i = this.cd(t), n = 0; n < e.length; n++) -1 === this.cc(t, e[n]) && i.push(e[n]);
    return i;
  }, n.ch = function (t, e, i, n, s, a) {
    if ("object" != typeof e || "number" != typeof e.length) throw "Error: " + t + ". The argument should be a list!";
    if (null !== n && e.length < n) throw "Error: " + t + ". The list argument should have at minimum " + n + " elements!";
    if (null !== i) for (n = 0; n < e.length; n++) if (typeof e[n] !== i) throw "Error: " + t + ". The list argument should contain only '" + i + "' elements, the " + n + "-th element is not of type '" + i + "'!";
    if ("object" == typeof s && "function" == typeof s.test) for (n = 0; n < e.length; n++) if (!s.test(e[n])) throw "Error: " + t + ". " + a + ". The " + n + "-th element is the cause of the error!";
  }, n.c7 = function (t) {
    for (var e = "[", i = 0; i < t.length; i++) i > 0 && (e += ", "), e += this.c6(t[i]);
    return e += "]";
  }, n.ci = function (t, e, i, n, s) {
    this.ch(t, e, i, n, /^\/[^\/*]+\/([^\/*]+\/)*([^\/*]+|\*)$/, s);
  }, n.cj = function (t, e) {
    t === this.ck.cl ? this.cm(e) : t === this.ck.cn ? this.co(e) : t === this.ck.cp ? this.cq(e) : t === this.ck.cr ? this.cs(e) : null !== this.al && (this.al.ct === o.b3 && t === this.ck.b3 ? this.cu(e) : this.al.ct === o.b4 && t === this.ck.b4 && this.cv(e));
  }, n.cu = function (t) {
    var e = t[this.ck.cw];
    if (undefined !== e) this.cx(o.bt, this.cy.cz[e]); else {
      if (this.a2 !== o.bk) {
        if (undefined === (e = t[this.ck.d0])) return this.o("Received a initial subscribe response without sessionId - message ignored!"), void this.cx(o.bt, "server subscribe response is missing the session id");
        this.aa = e, null != (e = t[this.ck.d1]) && 1 == e && (this.q = true), null != (e = t[this.ck.d2]) && (this.ay = 1e3 * e * 1.4), null != (e = t[this.ck.d3]) && 1 == e && (this.r = true), this.ab = t[this.ck.d4], t = this.a2, this.a2 = o.bk, this.ah = this.ag = 0, this.d5(), t !== o.bm ? (undefined !== this.ap.as[this.a1] && this.ap.as[this.a1].d6++, (null === t || this.ai) && this.d8({type: o.NOTIFY_SERVER_UP, info: this.v[this.a1].d7})) : undefined !== this.ap.as[this.a1] && this.ap.as[this.a1].d9++, this.ai = false;
      }
      this.da();
    }
  }, n.cv = function (t) {
    undefined !== (t = t[this.ck.cw]) ? this.cx(o.bt, this.cy.cz[t]) : this.da();
  }, n.cm = function (t) {
    var e = this.ck.db, i = this.ck.dc, n = this.ck.dd, s = this.ck.de, a = this.ck.df, r = this.ck.dg;
    if (undefined === t[e] || undefined === t[i]) this.o("Received an invalid PUBLISH message: missing db or/and dc - message ignored!"); else if (undefined !== this.a7[t[e]]) {
      var l = false, h = false;
      if (undefined !== t[a] && (t[a] == o.bn ? l = true : t[a] == o.bp && (h = true)), a = [], n = t[n], s = t[s], undefined !== n && null != s) if (n instanceof Array) for (var u = 0; u < n.length; u++) a[u] = {name: n[u], value: s[u]}; else a[0] = {name: n, value: s};
      if (i = {subject: t[e], content: t[i], fields: a, replyToSubject: t[r], snapshot: l, recovery: h, seq: 0, epoch: 0}, undefined !== t[r = this.ck.dh] && (r = (16777215 & (new Date).getTime()) - t[r]) > -144e5 && (i.latency = r), 1 == this.q && 0 === this.a7[t[e]].conflation) if (e = parseInt(t[this.ck.di]), r = parseInt(t[this.ck.dj]), i.seq = r, i.epoch = e, "in_order" == (e = this.dk(i.subject, this.a7[i.subject], r, e))) 1 == this.r && this.dn(this.dm(i.subject, i.seq, i.epoch, this.aa, t[this.ck.dl], this.e, this.ck)); else if ("higher" == e) return void this.dp();
      undefined !== this.ap.as[this.a1] && this.ap.as[this.a1].dq++, this.d8({message: i});
    }
  }, n.dk = function (t, e, i, n) {
    return e.seqid != n ? (e.seq = i, e.messagesReceivedUntilRecovery++, e.seqid = n, "in_order") : i <= e.seq ? "lower" : i == e.seq + 1 ? (e.currentSubscribeType == o.bw && (e.currentSubscribeType = o.a9, t = {type: o.NOTIFY_DATA_SYNC, info: t}, this.d8(t)), e.seq += 1, e.messagesReceivedUntilRecovery++, "in_order") : e.messagesReceivedUntilRecovery > 0 ? (this.o("Missing data: expected seq " + (e.seq + 1) + ", instead received seq " + i + " !"), "higher") : (this.o("Reset seq '" + e.seq + "'. New seq is '" + i + "' !"), e.seq = i, e.messagesReceivedUntilRecovery++, t = {type: o.NOTIFY_DATA_RESYNC, info: t}, this.d8(t), "in_order");
  }, n.cx = function (t, e) {
    t = t + ", " + e, undefined === (e = this.ap.as[this.a1].cz)[t] ? e[t] = 1 : e[t]++, this.ah++, this.dp();
  }, n.co = function (t) {
    var e = this.ck.dr, i = this.ck.db;
    if (undefined === t[e] || undefined === t[i]) this.o("Received an invalid ENTITLEMENT_CHECK message: missing db or/and dr - message ignored!"); else {
      var n = true, s = o.NOTIFY_SUBSCRIBE_DENY;
      switch (t[e]) {
        case "a":
          s = o.NOTIFY_SUBSCRIBE_ALLOW, n = false;
          break;
        case "d":
          undefined !== (e = t[this.ck.cw]) ? e == o.c4 && (s = o.NOTIFY_SUBSCRIBE_TIMEOUT) : s = o.NOTIFY_SUBSCRIBE_DENY;
      }
      true === n && (this.a6 = this.ce(this.a6, [t[i]]), delete this.a7[t[i]]), this.d8(undefined === t[this.ck.ds] || null === t[this.ck.ds] ? {type: s, info: t[i]} : {type: t[this.ck.ds], info: t[i]});
    }
  }, n.d8 = function (t) {
    var e;
    this.y.push(t), setTimeout((e = this, function () {
      var t = e.y.shift();
      "message" in t ? e.w(t.message) : e.x(t);
    }), 0);
  }, n.cq = function (t) {
    null != t && Object.keys(t).length > 0 && this.dt(t);
  }, n.dt = function (t) {
    var e = t[this.ck.du], i = t[this.ck.dr];
    t = t[this.ck.ds], null != e && this.d8(null != t ? {type: t, info: e} : {type: this.dv(i), info: e});
  }, n.cs = function (t) {
    var e = t[this.ck.db];
    if (t = t[this.ck.df], this.o("recovery status for subject:" + e + " is:" + t), o.c1 == t) for (t = 0; t < this.a6.length; t++) {
      var i = (e = this.a7[this.a6[t]]).cacheRecoveryStatus;
      o.a8 == i || o.by == i || o.bx == i ? e.nrOfConsecutiveRecovery = 0 : (e.messagesReceivedUntilRecovery = 0, 7e4 != e.seqid && e.nrOfConsecutiveRecovery++);
    } else null !== (e = this.a7[e]) && (e.cacheRecoveryStatus = t);
  }, n.dv = function (t) {
    if (null == t) return o.NOTIFY_PUBLISH_FAILED;
    switch (t) {
      case "OK":
        return o.NOTIFY_PUBLISH_OK;
      case "DENY":
        return o.NOTIFY_PUBLISH_DENIED;
      default:
        return o.NOTIFY_PUBLISH_FAILED;
    }
  }, n.dw = function () {
    this.ap.ar = (new Date).getTime(), undefined !== this.ap.as[this.a1] && this.ap.as[this.a1].dx++, null !== this.ae && this.d5(), null !== this.al && this.al.ct === o.b5 && this.da();
    var t = (new Date).getTime();
    t - this.ad >= o.b1 && (this.ad = t, (t = {}).ct = o.b5, this.dy(t));
  }, n.d5 = function () {
    var t;
    null !== this.ae && clearTimeout(this.ae), this.ay > 0 && (this.ae = setTimeout((t = this, function () {
      t.ah++, t.dp();
    }), this.ay));
  }, n.dp = function () {
    undefined !== this.ap.as[this.a1] && this.ap.as[this.a1].dz++, (new Date).getTime() - this.a0 < 18e4 ? this.z++ : (this.z = 0, this.a0 = (new Date).getTime()), null !== this.ao && (clearTimeout(this.ao), this.ao = null), this.e0(), this.e1(), this.e2(), null !== this.a2 && (this.a2 = o.bl);
    var t = this.v[this.a1].d7;
    this.af.push(this.v[this.a1]), this.ab = this.aa = this.a1 = null, this.ag++, null !== this.ae && (clearTimeout(this.ae), this.ae = null), this.ai || this.ag !== this.p && this.ag !== this.v.length || (this.ai = true, this.d8({type: o.NOTIFY_SERVER_DOWN, info: t})), this.v.length > 0 && ((t = {}).ct = o.b6, this.dy(t)), this.t = true, this.a6.length > 0 && ((t = {}).ct = o.b3, t.a6 = this.a6, this.dy(t));
  }, n.e3 = function () {
    undefined !== this.ap.as[this.a1] && this.ap.as[this.a1].dz++, (new Date).getTime() - this.a0 < 18e4 ? this.z++ : (this.z = 0, this.a0 = (new Date).getTime()), null !== this.ao && (clearTimeout(this.ao), this.ao = null), this.aj = "", this.e0(), this.e1(), this.e2(), null !== this.a2 && (this.a2 = o.bl);
    var t = this.v[this.a1].d7;
    this.af.push(this.v[this.a1]), this.ab = this.aa = this.a1 = null, this.ag++, null !== this.ae && (clearTimeout(this.ae), this.ae = null), this.ai || this.ag !== this.p && this.ag !== this.v.length || (this.ai = true, this.d8({type: o.NOTIFY_SERVER_DOWN, info: t}));
  }, n.e4 = function () {
    if (this.da(), this.v.length > 0) {
      var t = {};
      t.ct = o.b6, this.dy(t);
    }
    this.t = true, this.a6.length > 0 && ((t = {}).ct = o.b3, t.a6 = this.a6, this.dy(t));
  }, n.e5 = function () {
    this.e6();
    var t = this.v[this.a1].d7;
    (0 == this.k || this.l) && "/" !== t.substring(t.length - 1, t.length) && (t += "/");
    var e, i = this.c9(this.ah, o.b6);
    this.an = setTimeout((e = this, function () {
      e.an = null, e.cx(o.br, e.al.ct);
    }), i), this.g(t, this.a1);
  }, n.e7 = function () {
    this.a6 = this.cg(this.a6, this.al.a6);
    var t, e = this.ck, i = null, n = null;
    this.a2 !== o.bk && (i = this.d, n = o.bq);
    for (var s = "", a = 0; a < this.al.a6.length; a++) {
      var r = this.al.a6[a];
      undefined !== this.al.e8 && true === this.al.e8 && (this.a7[r] = {seqid: 7e4, seq: 0, history: r in this.al.e9 ? this.al.e9[r] : 0, conflation: r in this.al.ea ? this.al.ea[r] : 0, needsRecovery: false, nrOfConsecutiveRecovery: 0, messagesReceivedUntilRecovery: 0, cacheRecoveryStatus: o.a8, currentSubscribeType: o.a9});
      var l = this.a7[r];
      this.t ? (this.t = false, s += this.eb(r, l, this.e, this.aa, e, this.u, i, n, o.b0, this.r)) : s += this.eb(r, l, this.e, this.aa, e, null, null, null, o.b0, this.r);
    }
    this.an = setTimeout((t = this, function () {
      t.an = null, t.cx(o.br, t.al.ct);
    }), o.b2), this.i(s);
  }, n.ec = function () {
    if (this.a6 = this.ce(this.a6, this.al.a6), this.a2 !== o.bk) {
      this.da();
      for (var t = 0; t < this.al.a6.length; t++) delete this.a7[this.al.a6[t]];
    } else {
      var e = this.ck, i = "";
      for (t = 0; t < this.al.a6.length; t++) {
        var n = this.al.a6[t];
        i += this.ed(n, this.a7[n], this.e, this.aa, e), delete this.a7[n];
      }
      this.an = setTimeout((s = this, function () {
        s.an = null, s.cx(o.br, s.al.ct);
      }), o.b2), this.i(i);
    }
    var s;
  }, n.ee = function () {
    if (this.a2 !== o.bk) this.da(); else {
      var t = this.ef(this.aa, this.ck, this.e, this.ab);
      this.an = setTimeout((e = this, function () {
        e.an = null, e.cx(o.br, e.al.ct);
      }), o.b2), this.i(t);
    }
    var e;
  }, n.eg = function () {
    var t = this.ck;
    this.a2 !== o.bk ? null != (t = this.al.eh.closure) && this.d8({type: o.NOTIFY_PUBLISH_FAILED, info: t}) : this.i(this.ei(this.al.eh, this.e, this.aa, t, this.u, this.ab));
  }, n.da = function (t) {
    0 !== this.ak.length && (null != t ? this.ak[0].ct === t && (this.ak.shift(), this.e1(), this.c(false)) : (this.ak.shift(), this.e1(), this.c(false)));
  }, n.dy = function (t) {
    this.ak.push(t), this.ej(false);
  }, n.c = function (t) {
    var e;
    0 !== this.ak.length && setTimeout((e = this, function () {
      e.ej(t);
    }), 0);
  }, n.ej = function (t) {
    if (this.b && (t || null === this.al && 0 !== this.ak.length)) switch (this.al = this.ak[0], this.al.ct) {
      case o.b3:
        this.e7();
        break;
      case o.b4:
        this.ec();
        break;
      case o.b5:
        this.ee();
        break;
      case o.b6:
        this.e5();
        break;
      case o.b7:
        this.eg(), this.da();
        break;
      case o.b8:
        this.e3();
        break;
      case o.b9:
        this.e4();
    }
  }, n.e0 = function () {
    for (; this.ak.length > 0;) {
      var t = this.ak[0];
      switch (t.ct) {
        case o.b3:
          var e = this.ce(t.a6, this.a6);
          if (e.length > 0 && (this.a6 = this.cg(this.a6, e), undefined !== t.e8 && true === t.e8)) for (var i = 0; i < e.length; i++) this.a7[e[i]] = {seqid: 7e4, seq: 0, history: e[i] in t.e9 ? t.e9[e[i]] : 0, conflation: e[i] in t.ea ? t.ea[e[i]] : 0, needsRecovery: false, nrOfConsecutiveRecovery: 0, messagesReceivedUntilRecovery: 0, cacheRecoveryStatus: o.a8, currentSubscribeType: o.a9};
          break;
        case o.b4:
          if ((e = this.cf(t.a6, this.a6)).length > 0) for (this.a6 = this.ce(this.a6, e), i = 0; i < e.length; i++) delete this.a7[e[i]];
          break;
        case o.b7:
          undefined !== t.eh.closure && null !== t.eh.closure && this.d8({type: o.NOTIFY_PUBLISH_FAILED, info: t.eh.closure});
      }
      this.ak.shift();
    }
  }, n.e1 = function () {
    this.al = null, null !== this.an && (clearTimeout(this.an), this.an = null);
  }, n.e2 = function () {
    this.m(), null !== this.ac && (this.k ? this.l ? (this.ac.removeAllListeners("close"), this.ac.close()) : (this.ac.removeAllListeners("close"), this.ac.destroy()) : (this.ac.onmessage = function () {}, this.ac.onopen = function () {}, this.ac.onclose = function () {}, this.ac.close()), delete this.ac, this.ac = null);
  }, n.ek = function () {
    this.e1(), this.e2(), this.a2 = this.a1 = null, this.a6 = [], this.ab = this.aa = null, this.af = [], this.z = this.ag = 0, this.a0 = (new Date).getTime(), this.ah = 0, this.ai = false, this.ak = [], this.a7 = {}, this.a7[""] = {seqid: 7e4, seq: 0, history: 0, conflation: 0, needsRecovery: false, nrOfConsecutiveRecovery: 0, messagesReceivedUntilRecovery: 0, cacheRecoveryStatus: o.a8, currentSubscribeType: o.a9}, this.t = true, this.q = false, null !== this.ae && (clearTimeout(this.ae), this.ae = null), null !== this.ao && (clearTimeout(this.ao), this.ao = null);
  }, n.e6 = function () {
    null === this.a1 && (this.a1 = this.em());
  }, n.em = function () {
    var t = this.ce(this.v, this.af);
    if (0 === t.length && (this.af = [], t = this.v), 0 === t.length) throw "Error: em() No available servers!";
    for (var e = 0, i = 0; i < t.length; i++) e += t[i].en;
    var n = -1;
    if (0 === e) n = Math.floor(t.length * Math.random()); else {
      var s = Math.floor(e * Math.random());
      for (i = e = 0; i < t.length; i++) if ((e += t[i].en) > s) {
        n = i;
        break;
      }
    }
    return this.cc(this.v, t[n]);
  }, n.h = function (t) {
    var e;
    t = "http" === t.substring(0, t.indexOf("://")) ? "ws://" + t.substring(t.indexOf("://") + 3) + "WebSocketConnection" : "wss://" + t.substring(t.indexOf("://") + 3) + "WebSocketConnection-Secure", this.ac = new WebSocket(t), this.aj = this.c8(), this.ac.eo = this.aj, this.ac.onmessage = (e = this, function (t) {
      e.ep(t.data);
    }), this.ac.onopen = function (t) {
      return function () {
        t.da();
      };
    }(this), this.ac.onerror = function (t) {
      return function (e) {
        t.o(e);
      };
    }(this), this.ac.onclose = function (t) {
      return function () {
        if (t.aj === t.ac.eo) {
          t.e1(), t.ah++, t.da(o.b6);
          var e = t.c9(t.ah);
          t.ao = setTimeout((i = t, function () {
            i.dp();
          }), e);
        }
        var i;
      };
    }(this);
  }, n.j = function (t) {
    null != this.ac && 1 === this.ac.readyState && this.ac.send(t);
  }, n.ep = function (t) {
    var e = this.ac;
    if (null !== e && 1 === e.readyState && t) for (var i = (e = t).indexOf(this.ck.eq); -1 !== i;) e = e.substring(0, i), this.er(e), i = (e = t.substring(i + 1)).indexOf(this.ck.eq);
  }, n.er = function (t) {
    for (var e = 0, i = " ", n = {};;) {
      var s = t.indexOf(this.ck.es, e);
      if (-1 === s) break;
      s - e > 0 && (i = (e = t.substring(e, s)).charAt(0), n = this.et(e), this.cj(i, n)), e = s + 1;
    }
    this.dw();
  }, n.et = function (t) {
    var e = t.charAt(0);
    if (undefined !== this.ck.eu[e]) {
      var i = 1;
      for (e = {}; !(i >= t.length);) {
        var n = t.charAt(i), s = t.indexOf(this.ck.ev, i + 1);
        if (-1 === s) return this.o("Received an invalid message: header end missing, header='" + n + "' [char code '" + n.charCodeAt(0) + "']- message ignored, msg='" + t + "', header position=" + i), e;
        if (undefined === this.ck.ew[n]) this.o("Received an invalid message: unknown header: '" + n + "' [char code '" + n.charCodeAt(0) + "'] - header ignored, msg='" + t + "', header position=" + i); else {
          i++;
          var a = "";
          switch (this.ck.ex[n]) {
            case this.cy.ey:
              a = this.ez(this.ck, t.substring(i, s));
              break;
            case this.cy.f0:
              a = this.f1(this.ck, t.substring(i, s));
          }
          undefined === (i = e[n]) ? e[n] = a : e[n] instanceof Array ? e[n][e[n].length] = a : (e[n] = [], e[n][0] = i, e[n][1] = a);
        }
        i = s + 1;
      }
      return e;
    }
    this.o("Received an invalid message: operation unknown: '" + e + "' [char code '" + e.charCodeAt(0) + "'] - message ignored!");
  }, n.eb = function (t, e, i, n, s, a, r, l, h, u) {
    var c = "";
    return c += s.b3, c += s.db, c += this.f2(s, t), c += s.ev, null !== i && (c += s.f3, c += this.f4(s, i), c += s.ev), null !== a && (c += s.f5, c += this.f2(s, a), c += s.ev), null !== n && (c += s.d0, c += this.f4(s, n), c += s.ev), (t = this.f6(e)) == o.bu ? (c += s.f7, c += this.f4(s, e.conflation), c += s.ev) : t == o.bv ? (c += s.f8, c += this.f4(s, e.history), c += s.ev) : t == o.bw && (c += s.di, c += this.f4(s, e.seqid), c += s.ev, c += s.dj, c += this.f4(s, e.seq + 1), c += s.ev), null !== r && (c += s.f9, c += this.f2(s, r), c += s.ev), null !== l && (c += s.fa, c += this.f4(s, l), c += s.ev), c += s.fb, c += this.f4(s, h), c += s.ev, 1 == u && (c += s.d3, c += this.f4(s, 1), c += s.ev), c += s.es;
  }, n.ed = function (t, e, i, n, s) {
    var a = "";
    return a += s.b4, a += s.db, a += this.f2(s, t), a += s.ev, undefined !== e && e.conflation > 0 && (a += s.f7, a += this.f4(s, e.conflation), a += s.ev), null !== n && (a += s.d0, a += this.f4(s, n), a += s.ev), null !== i && (a += s.f3, a += this.f4(s, i), a += s.ev), a += s.es;
  }, n.ef = function (t, e, i, n) {
    var s = "";
    return s += e.b5, s += e.d0, s += this.f4(e, t), s += e.ev, null !== i && (s += e.f3, s += this.f4(e, i), s += e.ev), null !== n && (s += e.d4, s += this.f4(e, n), s += e.ev), s += e.es;
  }, n.ei = function (t, e, i, n, s, a) {
    var o = "";
    if (o += n.b7, o += n.db, o += this.f2(n, t.subject), o += n.ev, o += n.dc, o += this.f2(n, t.content), o += n.ev, undefined !== t.closure && null !== t.closure && (o += n.du, o += this.f2(n, t.closure), o += n.ev), undefined !== t.fields && null !== t.fields) for (var r = 0; r < t.fields.length; r++) {
      var l = t.fields[r].name, h = t.fields[r].value;
      o += n.dd, o += this.f2(n, l), o += n.ev, o += n.de, o += this.f2(n, h), o += n.ev;
    }
    return undefined !== t.replyToSubject && null !== t.replyToSubject && (o += n.dg, o += this.f2(n, t.replyToSubject), o += n.ev), null !== e && (o += n.f3, o += this.f4(n, e), o += n.ev), null !== i && (o += n.d0, o += this.f4(n, i), o += n.ev), null !== a && (o += n.d4, o += this.f4(n, a), o += n.ev), null !== s && (o += n.f5, o += this.f2(n, s), o += n.ev), o += n.es;
  }, n.dm = function (t, e, i, n, s, a, o) {
    var r = "";
    return r += o.fc, r += o.db, r += this.f2(o, t), r += o.ev, r += o.dj, r += this.f4(o, e), r += o.ev, r += o.di, r += this.f4(o, i), r += o.ev, null !== n && (r += o.d0, r += this.f4(o, n), r += o.ev), null !== s && (r += o.dl, r += this.f4(o, s), r += o.ev), r += o.f3, r += this.f4(o, a), r += o.ev, r += o.es;
  }, n.f6 = function (t) {
    var e = o.a9;
    return t.conflation >= 100 ? e = o.bu : 7e4 != t.seqid ? t.nrOfConsecutiveRecovery >= this.s ? t.history > 0 && (e = o.bv) : e = o.bw : t.history > 0 && (e = o.bv), e != o.a9 && e != o.bv && e != o.bu || (t.cacheRecoveryStatus = o.a8, t.nrOfConsecutiveRecovery = 0), t.currentSubscribeType = e;
  }, n.ck = {}, n.ck.es = "", n.ck.eq = "", n.ck.ev = "", n.ck.fd = "", n.ck.fe = " ", n.ck.ff = "\n", n.ck.fg = "\r", n.ck.fh = '"', n.ck.fi = "\\", n.ck.b3 = "", n.ck.b4 = "", n.ck.cl = "", n.ck.b5 = "", n.ck.fj = "", n.ck.fk = "", n.ck.cn = "	", n.ck.fl = "", n.ck.b7 = "", n.ck.cp = "", n.ck.cr = "", n.ck.fc = "", n.ck.db = "", n.ck.dc = "", n.ck.dj = "", n.ck.di = "", n.ck.f3 = "", n.ck.d0 = "", n.ck.fm = "", n.ck.fn = "", n.ck.fo = "	", n.ck.cw = "", n.ck.fp = "", n.ck.dh = "", n.ck.fq = "", n.ck.du = "", n.ck.d1 = "", n.ck.f5 = "", n.ck.dr = "", n.ck.d4 = "", n.ck.dd = "", n.ck.de = "", n.ck.f7 = "", n.ck.df = "'", n.ck.f9 = "#", n.ck.fa = "$", n.ck.d2 = "%", n.ck.f8 = "(", n.ck.dg = ",", n.ck.fb = "-", n.ck.d3 = ".", n.ck.dl = "/", n.ck.ds = "0", n.ck.fr = {}, s = o.prototype.ck, (a = s.fr)[s.es] = "", a[s.ev] = "", a[s.fd] = "", a[s.fe] = "", a[s.ff] = "", a[s.fg] = "", a[s.fh] = "", a[s.fi] = "", a["!"] = "	", a[s.eq] = "", o.prototype.ck.fs = {}, function (t) {
    for (var e in t.fr) t.fr.hasOwnProperty(e) && (t.fs[t.fr[e]] = e);
  }(o.prototype.ck), o.prototype.ck.eu = {}, function (t) {
    t.eu[t.b3] = true, t.eu[t.b4] = true, t.eu[t.cl] = true, t.eu[t.b5] = true, t.eu[t.fj] = true, t.eu[t.fk] = true, t.eu[t.cn] = true, t.eu[t.fl] = true, t.eu[t.b7] = true, t.eu[t.cp] = true, t.eu[t.cr] = true, t.eu[t.fc] = true;
  }(o.prototype.ck), o.prototype.ck.ew = {}, function (t) {
    t.ew[t.db] = true, t.ew[t.dc] = true, t.ew[t.dj] = true, t.ew[t.di] = true, t.ew[t.f3] = true, t.ew[t.d0] = true, t.ew[t.fm] = true, t.ew[t.fn] = true, t.ew[t.fo] = true, t.ew[t.cw] = true, t.ew[t.fp] = true, t.ew[t.dh] = true, t.ew[t.fq] = true, t.ew[t.d1] = true, t.ew[t.f5] = true, t.ew[t.dr] = true, t.ew[t.d4] = true, t.ew[t.dd] = true, t.ew[t.de] = true, t.ew[t.f7] = true, t.ew[t.df] = true, t.ew[t.f9] = true, t.ew[t.fa] = true, t.ew[t.du] = true, t.ew[t.f8] = true, t.ew[t.d2] = true, t.ew[t.dg] = true, t.ew[t.fb] = true, t.ew[t.d3] = true, t.ew[t.dl] = true, t.ew[t.ds] = true;
  }(o.prototype.ck), (n = o.prototype).cy = {}, n.cy.ft = 1, n.cy.fu = 2, n.cy.f0 = 3, n.cy.ey = 4, n.cy.fv = {}, function (t) {
    var e = t.fv;
    e.db = t.f0, e.dc = t.f0, e.dj = t.ey, e.di = t.ey, e.f3 = t.ey, e.d0 = t.ey, e.fm = t.f0, e.fn = t.f0, e.fo = t.f0, e.cw = t.ey, e.fp = t.f0, e.dh = t.ey, e.fq = t.ey, e.f5 = t.f0, e.dr = t.f0, e.d4 = t.ey, e.dd = t.f0, e.de = t.f0, e.df = t.f0, e.f9 = t.f0, e.fa = t.ey, e.du = t.f0, e.d1 = t.ey, e.d2 = t.ey, e.dg = t.f0, e.fb = t.ey, e.d3 = t.ey, e.dl = t.ey, e.ds = t.f0;
  }(o.prototype.cy), o.prototype.ck.ex = {}, function () {
    for (var t in o.prototype.cy.fv) o.prototype.cy.fv.hasOwnProperty(t) && (o.prototype.ck.ex[o.prototype.ck[t]] = o.prototype.cy.fv[t]);
  }(), o.prototype.f2 = function (t, e) {
    for (var i = "", n = 0; n < e.length; n++) {
      var s = t.fr[e.charAt(n)];
      undefined !== s ? (i += t.fd, i += s) : i += e.charAt(n);
    }
    return i;
  }, o.prototype.f1 = function (t, e) {
    for (var i = "", n = 0; n < e.length; n++) {
      var s = e.charAt(n);
      if (s === t.fd) {
        if (n + 1 >= e.length || undefined === t.fs[e.charAt(n + 1)]) throw "Error: f1() Illegal argument '" + e + "'!";
        s = t.fs[e.charAt(n + 1)], n++;
      }
      i += s;
    }
    return i;
  }, o.prototype.f4 = function (t, e) {
    if (!(4294967168 & e)) {
      var i = String.fromCharCode(e), n = t.fr[i];
      return undefined === n ? i : t.fd + n;
    }
    var s;
    for (s = 4278190080 & e ? 24 : 16711680 & e ? 16 : 8, i = [], n = 0; n < 10; n++) i.push(0);
    for (var a = 0, o = 0; s >= 0;) {
      var r = e >> s & 255;
      o++, i[a] |= r >> o, undefined !== (n = t.fr[String.fromCharCode(i[a])]) && (i[a] = t.fd.charCodeAt(0), i[a + 1] = n.charCodeAt(0), a++), i[++a] |= r << 7 - o & 127, s -= 8;
    }
    for (undefined !== (n = t.fr[String.fromCharCode(i[a])]) && (i[a] = t.fd.charCodeAt(0), i[a + 1] = n.charCodeAt(0), a++), a++, t = "", n = 0; n < a; n++) t += String.fromCharCode(i[n]);
    return t;
  }, o.prototype.ez = function (t, e) {
    var i, n = "Error: ez() Illegal argument '" + e + "'!", s = 0, a = -1, o = 0, r = e.length, l = 0;
    if (1 === r) return e.charCodeAt(0);
    if (2 === r && e.charAt(0) === t.fd) {
      if (undefined !== (i = t.fs[e.charAt(1)])) return i.charCodeAt(0);
      throw n;
    }
    for (; r > 0; r--) {
      if (i = e.charAt(l), l++, i === t.fd) {
        if (r - 1 < 0) throw n;
        if (r--, i = e.charAt(l), l++, undefined === (i = t.fs[i])) throw n;
      }
      a > 0 ? (s = s << 8 | (o |= i.charCodeAt(0) >> a), o = i.charCodeAt(0) << 8 - a) : o = i.charCodeAt(0) << -a, a = (a + 7) % 8;
    }
    return s;
  }, o.NOTIFY_UNSUPPORTED_BROWSER = "NOTIFY_UNSUPPORTED_BROWSER", o.NOTIFY_SERVER_DOWN = "NOTIFY_SERVER_DOWN", o.NOTIFY_SERVER_UP = "NOTIFY_SERVER_UP", o.NOTIFY_DATA_RESYNC = "NOTIFY_DATA_RESYNC", o.NOTIFY_DATA_SYNC = "NOTIFY_DATA_SYNC", o.NOTIFY_PUBLISH_OK = "NOTIFY_PUBLISH_OK", o.NOTIFY_PUBLISH_FAILED = "NOTIFY_PUBLISH_FAILED", o.NOTIFY_PUBLISH_DENIED = "NOTIFY_PUBLISH_DENIED", o.NOTIFY_SUBSCRIBE_ALLOW = "NOTIFY_SUBSCRIBE_ALLOW", o.NOTIFY_SUBSCRIBE_DENY = "NOTIFY_SUBSCRIBE_DENY", o.NOTIFY_SUBSCRIBE_TIMEOUT = "NOTIFY_SUBSCRIBE_TIMEOUT", o.NOTIFY_RECONNECT_RATE_EXCEEDED = "NOTIFY_RECONNECT_RATE_EXCEEDED", o.CONSTANT_WINDOW_BACKOFF = "CONSTANT_WINDOW_BACKOFF", o.TRUNCATED_EXPONENTIAL_BACKOFF = "TRUNCATED_EXPONENTIAL_BACKOFF", o.TRANSPORT_HTTP = "TRANSPORT_HTTP", o.TRANSPORT_WEBSOCKET = "TRANSPORT_WEBSOCKET", (n = o.prototype).connect = function () {
    if (this.fw) throw "Error: connect() - already connected";
    if (undefined === this.v || null === this.v || 0 === this.v.length) throw "Error: connect() - no server to connect to; use setServers() to specify one or more servers";
    if (undefined === this.w || null === this.w) throw "Error: connect() - no message handler; use setMessageHandler() to specify a message handler";
    if (undefined === this.x || null === this.x) throw "Error: connect() - no status handler; use setStatusHandler() to specify a status handler";
    this.fw = true;
    var t = {};
    if (t.ct = o.b6, this.dy(t), this.a3.length > 0) {
      var e = this.cb(this.a4, this.a3);
      e.length > 0 && ((t = {}).ct = o.b3, t.a6 = e, t.e9 = this.ca(this.a4, e), t.ea = {}, t.e8 = true, this.dy(t)), (e = this.cb(this.a5, this.a3)).length > 0 && ((t = {}).ct = o.b3, t.a6 = e, t.e9 = {}, t.ea = this.ca(this.a5, e), t.e8 = true, this.dy(t));
    } else (t = {}).ct = o.b3, t.a6 = [""], this.dy(t);
  }, n.setServers = function (t) {
    if (this.fw) throw "Error: setServers() - already connected; use this method before connect()";
    this.ch("setServers", t, "string", 1, /^(\d+)?\s*https?:\/\/(\w|-)+(\.(\w|-)+)*(:\d+)?$/i, "Error: setServers() - invalid argument; expected a list of URLs");
    for (var e = [], i = 0; i < t.length; i++) {
      var n = /https?:\/\/(\w|-)+(\.(\w|-)+)*(:\d+)?$/i.exec(t[i])[0], s = /^\d+/.exec(t[i]);
      if (null === s) s = 100; else if ((s = parseInt(s[0])) > 100) throw "Error: setServers() - invalid weight; expected a number between 0 and 100";
      e.push({d7: n, en: s});
    }
    for (this.v = e, this.ap.as = [], i = 0; i < t.length; i++) this.ap.as[i] = {}, this.ap.as[i].d6 = 0, this.ap.as[i].dz = 0, this.ap.as[i].d9 = 0, this.ap.as[i].dx = 0, this.ap.as[i].dq = 0, this.ap.as[i].cz = {};
  }, n.subscribe = function (t) {
    this.subscribeWithHistory(t, 0);
  }, n.subscribeWithHistory = function (t, e) {
    if (this.ci("subscribeWithHistory", t, "string", 1, "Error: subscribe() - invalid first argument; expected a list of valid topics"), "number" != typeof e || e < 0) throw "Error: subscribeWithHistory() - invalid second argument; expected an integer higher or equal to 0";
    if (0 !== (t = this.ce(t, this.a3)).length) {
      for (var i = 0; i < t.length; i++) this.a4[t[i]] = e;
      this.a3 = this.cg(this.a3, t), this.fw && ((e = {}).ct = o.b3, e.a6 = t, e.e9 = this.ca(this.a4, t), e.ea = {}, e.e8 = true, this.dy(e));
    }
  }, n.subscribeWithConflation = function (t, e) {
    if (this.ci("subscribeWithConflation", t, "string", 1, "Error: subscribe() - invalid first argument; expected a list of valid topics"), 0 !== (t = this.ce(t, this.a3)).length) {
      e = e >= 100 ? 100 * Math.floor(e / 100) : 0;
      for (var i = 0; i < t.length; i++) this.a5[t[i]] = e;
      this.a3 = this.cg(this.a3, t), this.fw && ((e = {}).ct = o.b3, e.a6 = t, e.e9 = {}, e.ea = this.ca(this.a5, t), e.e8 = true, this.dy(e));
    }
  }, n.unsubscribe = function (t) {
    if (this.ci("unsubscribe", t, "string", 1, "Error: unsubscribe() - invalid argument; expected a list of valid topics"), 0 !== (t = this.cf(t, this.a3)).length) {
      for (var e = 0; e < t.length; e++) delete this.a4[t[e]];
      for (e = 0; e < t.length; e++) delete this.a5[t[e]];
      this.a3 = this.ce(this.a3, t), this.fw && ((e = {}).ct = o.b4, e.a6 = t, this.dy(e));
    }
  }, n.disconnect = function () {
    this.fw && (this.fw = false, this.ek());
  }, n.setEntitlementToken = function (t) {
    if (this.fw) throw "Error: setEntitlementToken() - already connected; use this method before connect()";
    this.u = t;
  }, n.getInfo = function () {
    if (!this.fw) throw "Error: getInfo() - not connected; use this method after connect()";
    var t = "Date: " + (new Date).toString() + "\n";
    t += "Uptime: " + ((new Date).getTime() - this.ap.aq) + " ms\n", t += "Servers: ";
    for (var e = 0; e < this.v.length; e++) e > 0 && (t += ", "), t += this.v[e].en + " " + this.v[e].d7;
    for (t += "\nSubjects: " + this.a6.toString() + "\n", t += "Connection status [" + (null === this.a1 ? null : this.v[this.a1].d7) + "]: " + this.a2 + "\n", t += "Time from last server activity: " + (null !== this.ap.ar ? (new Date).getTime() - this.ap.ar : null) + " ms\n", t += "Servers down before notify: " + this.p + "\n", t += "Consecutive server down count: " + this.ag + " times\n", e = 0; e < this.ap.as.length; e++) for (var i in t += "\nServer up [" + this.v[e].d7 + "]: " + this.ap.as[e].d6 + " times\n", t += "Server down [" + this.v[e].d7 + "]: " + this.ap.as[e].dz + " times\n", t += "Server connection recycled [" + this.v[e].d7 + "]: " + this.ap.as[e].d9 + " times\n", t += "Received server events [" + this.v[e].d7 + "]: " + this.ap.as[e].dx + "\n", t += "Received messages [" + this.v[e].d7 + "]: " + this.ap.as[e].dq + "\n", this.ap.as[e].cz) this.ap.as[e].cz.hasOwnProperty(i) && (t += "Error [" + this.v[e].d7 + "] x" + this.ap.as[e].cz[i] + " times : " + i + "\n");
    return t;
  }, n.publish = function (t) {
    if (!this.fw) throw "Error: publish() - not connected; use this method after connect()";
    if (null == t) throw "Error: publish() - invalid argument; expected a valid message";
    if (undefined === t.subject || null === t.subject) throw "Error: publish() - invalid argument; expected a valid message with a non-empty topic";
    if (this.ci("publish", [t.subject], "string", 1, "Error: publish() - invalid argument; expected a valid message,  " + t.subject + " is the cause of the error"), undefined === t.content || null === t.content) throw "Error: publish() - invalid argument; expected a valid message with a non-empty content";
    if (undefined !== t.fields && null !== t.fields) {
      if ("object" != typeof t.fields || "number" != typeof t.fields.length) throw "Error: publish() - the message.fields element should be a list!";
      for (var e = 0; e < t.fields.length; e++) {
        if (!("name" in t.fields[e])) throw "Error: publish() - the " + e + "-th element from fields list doesn't have the name key!";
        if (!("value" in t.fields[e])) throw "Error: publish() - the " + e + "-th element from fields list doesn't have the value key!";
      }
    }
    undefined !== t.replyToSubject && null !== t.replyToSubject && this.subscribe([t.replyToSubject]), (e = {}).ct = o.b7, e.eh = t, this.dy(e);
  }, n.notifyAfterReconnectRetries = function (t) {
    if (this.fw) throw "Error: notifyAfterReconnectRetries() - already connected; use this method before connect()";
    if ("number" != typeof t || t < 1) throw "Error: notifyAfterReconnectRetries() - invalid argument; expected a positive integer";
    this.p = t;
  }, n.getSubjects = function () {
    return this.cd(this.a3);
  }, n.setMessageHandler = function (t) {
    if (this.fw) throw "Error: setMessageHandler() - already connected; use this method before connect()";
    if ("function" != typeof t) throw "Error: setMessageHandler() - invalid argument; expected a function";
    this.w = t;
  }, n.setStatusHandler = function (t) {
    if (this.fw) throw "Error: setStatusHandler() - already connected; use this method before connect()";
    if ("function" != typeof t) throw "Error: setStatusHandler() - invalid argument; expected a function";
    this.x = t;
  }, n.setQuickReconnectMaxRetries = function (t) {
    if (this.fw) throw "Error: setQuickReconnectMaxRetries() - already connected; use this method before connect()";
    if ("number" != typeof t || t < 2) throw "Error: setQuickReconnectMaxRetries() - invalid argument; expected an integer higher or equal to 2";
    this.at = t;
  }, n.setQuickReconnectInitialDelay = function (t) {
    if (this.fw) throw "Error: setQuickReconnectInitialDelay() - already connected; use this method before connect()";
    if ("number" != typeof t || t < 1) throw "Error: setQuickReconnectInitialDelay() - invalid argument; expected an integer higher or equal to 1";
    this.au = 1e3 * t;
  }, n.setReconnectPolicy = function (t) {
    if (this.fw) throw "Error: setReconnectPolicy()  - already connected; use this method before connect()";
    if (undefined === t || t !== o.CONSTANT_WINDOW_BACKOFF && t !== o.TRUNCATED_EXPONENTIAL_BACKOFF) throw "Error: setReconnectPolicy() - invalid argument; expected CONSTANT_WINDOW_BACKOFF or TRUNCATED_EXPONENTIAL_BACKOFF";
    this.av = t;
  }, n.setReconnectTimeInterval = function (t) {
    if (this.fw) throw "Error: setReconnectTimeInterval() - already connected; use this method before connect()";
    if ("number" != typeof t || t < 1) throw "Error: setReconnectTimeInterval() - invalid argument; expected an integer higher or equal to 1";
    this.aw = 1e3 * t;
  }, n.setReconnectMaxDelay = function (t) {
    if (this.fw) throw "Error: setReconnectMaxDelay() - already connected; use this method before connect()";
    if ("number" != typeof t || t < 1) throw "Error: setReconnectMaxDelay() - invalid argument; expected an integer higher or equal to 1";
    this.ax = 1e3 * t;
  }, n.pause = function () {
    if (!this.fw) throw "Error: pause() - not connected; use this method after connect()";
    if (0 != this.az) {
      this.az = false, this.o("Enter pause!");
      var t = {};
      t.ct = o.b8, this.dy(t);
    }
  }, n.resume = function () {
    if (!this.fw) throw "Error: resume() - not connected; use this method after connect()";
    if (1 != this.az) {
      this.az = true, this.o("Enter resume!");
      var t = {};
      t.ct = o.b9, this.dy(t);
    }
  }, n.setLogHandler = function (t) {
    if ("function" != typeof t) throw "Error: setLogHandler() - invalid argument; expected a function";
    this.o = t;
  }, n.setTransport = function (t) {
    if (this.fw) throw "Error: setTransport() - already connected; use this method before connect()";
    if (undefined === t || t !== o.TRANSPORT_HTTP && t !== o.TRANSPORT_WEBSOCKET) throw "Error: setTransport() - invalid argument; expected TRANSPORT_HTTP or TRANSPORT_WEBSOCKET";
    0 == this.k && 0 == this.l ? this.o("Warning: setTransport() - ignore method call for browser (use websocket by default)") : this.n(t);
  }, "undefined" != typeof module && (module.exports = o);
}}, t => {
  var e;
  e = 32384, t(t.s = e);
}]);
