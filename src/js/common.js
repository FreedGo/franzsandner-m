/**
 * Created by Freed on 2017/3/20.
 * E-mail:flyxz@126.com.
 * GitHub:FreedGo@github.com.
 */
/**
 * ali高清方案rem
 * dec 根据设备屏幕的DPR（设备像素比，又称DPPX，比如dpr=2时，表示1个CSS像素由4个物理像素点组成） 动态设置 html 的font-size, 同时根据设备DPR调整页面的缩放值，进而达到高清效果。
 * 1rem = 100px
 */
!function (e) {
	function t(a) {
		if (i[a])return i[a].exports;
		var n = i[a] = {exports: {}, id: a, loaded: !1};
		return e[a].call(n.exports, n, n.exports, t), n.loaded = !0, n.exports
	}

	var i = {};
	return t.m = e, t.c = i, t.p = "", t(0)
}([function (e, t) {
	"use strict";
	Object.defineProperty(t, "__esModule", {value: !0});
	var i = window;
	t["default"] = i.flex = function (e, t) {
		var a = e || 100, n = t || 1, r = i.document, o = navigator.userAgent, d = o.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i), l = o.match(/U3\/((\d+|\.){5,})/i), c = l && parseInt(l[1].split(".").join(""), 10) >= 80, p = navigator.appVersion.match(/(iphone|ipad|ipod)/gi), s = i.devicePixelRatio || 1;
		p || d && d[1] > 534 || c || (s = 1);
		var u = 1 / s, m = r.querySelector('meta[name="viewport"]');
		m || (m = r.createElement("meta"), m.setAttribute("name", "viewport"), r.head.appendChild(m)), m.setAttribute("content", "width=device-width,user-scalable=no,initial-scale=" + u + ",maximum-scale=" + u + ",minimum-scale=" + u), r.documentElement.style.fontSize = a / 2 * s * n + "px"
	}, e.exports = t["default"]
}]);
flex(100, 1);