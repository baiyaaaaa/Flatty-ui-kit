/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-settings': '&#x30;',
		'icon-user': '&#x31;',
		'icon-brightness': '&#x32;',
		'icon-grid': '&#x33;',
		'icon-menu': '&#x34;',
		'icon-list': '&#x35;',
		'icon-lock': '&#x36;',
		'icon-minus': '&#x37;',
		'icon-search': '&#x38;',
		'icon-comments': '&#x39;',
		'icon-users': '&#x3a;',
		'icon-heart': '&#x3b;',
		'icon-smiley': '&#x3c;',
		'icon-pin-alt': '&#x3d;',
		'icon-sound-alt': '&#x3e;',
		'icon-chat': '&#x3f;',
		'icon-calendar': '&#x40;',
		'icon-play': '&#x41;',
		'icon-sound': '&#x42;',
		'icon-bubbles': '&#x43;',
		'icon-envelope': '&#x44;',
		'icon-wind': '&#x45;',
		'icon-droplet': '&#x46;',
		'icon-forward': '&#x47;',
		'icon-arrow-right': '&#x48;',
		'icon-arrow-left': '&#x49;',
		'icon-pause': '&#x4a;',
		'icon-next': '&#x4b;',
		'icon-previous': '&#x4c;',
		'icon-chevron-right': '&#x4d;',
		'icon-chevron-left': '&#x4e;',
		'icon-checkmark': '&#x4f;',
		'icon-resize': '&#x50;',
		'icon-plus': '&#x51;',
		'icon-smile': '&#x52;',
		'icon-film': '&#x53;',
		'icon-picture': '&#x54;',
		'icon-repeat': '&#x55;',
		'icon-star': '&#x56;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
