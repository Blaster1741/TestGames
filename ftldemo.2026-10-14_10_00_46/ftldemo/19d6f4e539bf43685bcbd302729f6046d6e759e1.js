! function(e) {
	var t = {};

	function n(o) {
		if (t[o]) return t[o].exports;
		var i = t[o] = {
			i: o,
			l: !1,
			exports: {}
		};
		return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
	}
	n.m = e, n.c = t, n.d = function(e, t, o) {
		n.o(e, t) || Object.defineProperty(e, t, {
			configurable: !1,
			enumerable: !0,
			get: o
		})
	}, n.r = function(e) {
		Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, n.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return n.d(t, "a", t), t
	}, n.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, n.p = "", n(n.s = 2542)
}({
	0: function(e, t) {
		e.exports = _
	},
	1: function(e, t) {
		e.exports = jQuery
	},
	10: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		t.CURRENCY_CONSTANTS = {
			CURRENCY_CODES: {
				PISOS: "PHP",
				RUBLES: "RUB",
				YUAN: "CNY",
				CA_DOLLARS: "CAD",
				EUROS: "EUR",
				AU_DOLLARS: "AUD",
				DOLLARS: "USD",
				POUNDS: "GBP",
				LIRAS: "TRY",
				NZ_DOLLARS: "NZD"
			},
			CURRENCY_NAMES: {
				TRY: "Turkey - Lira",
				USD: "United States - Dollars",
				AUD: "Australia - Dollars",
				GBP: "Europe (UK) - Pounds Sterling",
				NZD: "New Zealand - Dollars",
				RUB: "Russia - Rubles",
				CNY: "Chinese - Yuan",
				EUR: "Europe - Euros",
				PHP: "Philippines - Pisos",
				CAD: "Canada - Dollars"
			},
			PRIMARY_CURRENCY_COUNTRIES: ["AU", "CA", "PH", "RU", "TR", "NZ", "CN"],
			CHOICE_SUPPORTED_CURRENCIES: ["AUD", "CAD", "USD", "EUR", "NZD", "GBP", "RUB", "CNY"],
			ACTIVE_SUPPORTED_CURRENCIES: ["USD", "AUD", "CNY", "CAD", "GBP", "NZD", "PHP", "EUR"],
			SUPPORTED_CURRENCIES: ["USD", "EUR", "GBP", "AUD", "CAD", "PHP", "RUB", "TRY", "NZD", "CNY"],
			EURO_COUNTRIES: ["BE", "FR", "BG", "BA", "HR", "DE", "HU", "FI", "DK", "NL", "PT", "NO", "LI", "LV", "LT", "LU", "RO", "PL", "PM", "VA", "CH", "GR", "EE", "AL", "IT", "CZ", "CY", "AT", "AD", "IE", "ES", "ME", "MC", "RS", "MK", "SK", "MT", "SI", "SM", "SE"],
			GBP_COUNTRIES: ["GS", "GG", "SH", "IM", "BQ", "UK", "JE", "GB"],
			CURRENCY_SYMBOLS: {
				TRY: "₺",
				USD: "$",
				AUD: "AU$",
				GBP: "£",
				NZD: "NZ$",
				RUB: "₽",
				CNY: "¥",
				EUR: "€",
				PHP: "₱",
				CAD: "CA$"
			},
			REGION_CURRENCY_MAPPING: {
				BE: "EUR",
				FR: "EUR",
				BG: "EUR",
				BA: "EUR",
				BQ: "GBP",
				FI: "EUR",
				RU: "RUB",
				NL: "EUR",
				NO: "EUR",
				NZ: "NZD",
				RO: "EUR",
				CH: "EUR",
				GS: "GBP",
				CN: "CNY",
				CA: "CAD",
				GG: "GBP",
				CZ: "EUR",
				CY: "EUR",
				GB: "GBP",
				EUROPE_EURO: "EUR",
				SK: "EUR",
				SI: "EUR",
				SH: "GBP",
				SM: "EUR",
				SE: "EUR",
				DK: "EUR",
				HR: "EUR",
				DE: "EUR",
				HU: "EUR",
				MK: "EUR",
				JE: "GBP",
				GR: "EUR",
				PT: "EUR",
				TR: "TRY",
				LI: "EUR",
				LV: "EUR",
				LT: "EUR",
				LU: "EUR",
				PH: "PHP",
				PL: "EUR",
				PM: "EUR",
				VA: "EUR",
				AD: "EUR",
				EE: "EUR",
				AL: "EUR",
				IT: "EUR",
				AU: "AUD",
				AT: "EUR",
				IE: "EUR",
				ES: "EUR",
				ME: "EUR",
				MC: "EUR",
				RS: "EUR",
				US: "USD",
				MT: "EUR",
				UK: "GBP",
				IM: "GBP",
				EUROPE_GBP: "GBP"
			},
			PRIMARY_CURRENCY_REGIONS: ["US", "EUROPE_EURO", "EUROPE_GBP", "AU", "CA", "PH", "RU", "TR", "NZ", "CN"]
		}
	},
	12: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.sendEcommercePurchaseEvent = t.getSuccintUserSubscriptionState = t.logGtmEvent = t.logPageViewEvent = void 0;
		var o, i = n(1),
			r = (o = i) && o.__esModule ? o : {
				default: o
			},
			a = n(8);
		t.logPageViewEvent = function(e) {
			if (e) {
				var t = "/api/v1/analytics/" + e,
					n = (0, a.getWindow)()._hbgtm;
				n && n(!1, {
					event: "logPageViewEvent",
					details: {
						path: t
					}
				})
			}
		};
		var s = t.logGtmEvent = function(e, t) {
			var n = (0, a.getWindow)()._hbgtm;
			n && n(e, t)
		};
		t.getSuccintUserSubscriptionState = function() {
			var e = window.models.userSubscriptionState;
			return e.monthlyOwnsAnyContent ? e.willReceiveFutureMonths ? e.isPaused ? "paused" : e.failedBillingMonths > 0 ? "billing-error" : "active" : "unsubscribed" : "never-subscribed"
		}, t.sendEcommercePurchaseEvent = function(e) {
			var t = r.default.Deferred();
			return e ? (r.default.post("/analytics", {
				id: e
			}, function(e) {
				e.track || t.resolve(!1);
				try {
					if (e.ga) {
						var n = {
							transaction: e.ga.transaction,
							products: e.ga.items,
							additionalData: e.ga.additional_data
						};
						if (n.transaction && n.products && n.additionalData) {
							var o = 0,
								i = "",
								r = 0,
								l = n.additionalData.discounts.order_wallet_amount ? n.additionalData.discounts.order_wallet_amount : 0;
							if (n.additionalData.discounts.order_coupon_largest_name) r = n.additionalData.discounts.order_coupons;
							else(n.products || []).forEach(function(e) {
								e.discount > o && (o = e.discount, i = e.coupon), r += e.discount
							});
							s(!0, {
								event: "purchaseComplete",
								ecommerce: {
									currencyCode: n.transaction.currency,
									purchase: {
										actionField: {
											id: n.transaction.id,
											revenue: n.transaction.revenue,
											tax: n.transaction.tax,
											shipping: n.transaction.shipping,
											coupon: n.additionalData.discounts.order_coupon_largest_name ? n.additionalData.discounts.order_coupon_largest_name : i
										},
										products: n.products
									}
								},
								metric1: r > 0 ? -1 * r : r,
								metric2: l > 0 ? -1 * l : l,
								dimension6: n.additionalData.order_type,
								dimension8: n.additionalData.is_free_order,
								enabledTags: (0, a.getWindow)()._hbdl.transaction ? (0, a.getWindow)()._hbdl.transaction.enabledTags : {},
								details: (0, a.getWindow)()._hbdl.transaction ? (0, a.getWindow)()._hbdl.transaction.details : {}
							})
						} else s(!1, n.transaction ? {
							event: "purchaseError",
							detail: "missing order information",
							id: e.ga.transaction.id
						} : {
							event: "purchaseError",
							detail: "no transaction info available"
						})
					}
				} catch (e) {
					s(!1, {
						event: "purchaseError",
						detail: e && void 0 !== e.message ? e.message : ""
					})
				} finally {
					t.resolve(!0)
				}
			}, "json").fail(function() {
				t.reject(!1)
			}), t.promise()) : t.resolve(!1)
		}
	},
	1211: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.facebookShare = t.tweet = void 0;
		var o = n(5);
		t.tweet = function(e, t) {
			var n = (0, o.makeQueryString)({
				text: e,
				url: t
			});
			window.open("https://twitter.com/share?" + n, "twitter", "width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0")
		}, t.facebookShare = function(e) {
			var t = "http://www.facebook.com/sharer.php?s=100&p[url]=" + encodeURIComponent(e);
			window.open(t, "facebook", "width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0")
		}
	},
	1212: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.asmSharingModelInstance = void 0;
		var o = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var o = t[n];
						o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
					}
				}
				return function(t, n, o) {
					return n && e(t.prototype, n), o && e(t, o), t
				}
			}(),
			i = n(685);
		var r = function(e) {
			function t() {
				return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t),
					function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, i.LocalStorageModel), o(t, [{
				key: "defaults",
				value: function() {
					return {
						link: "https://www.humblebundle.com",
						humanName: "this game",
						pendingImage: !1,
						imgurIds: []
					}
				}
			}]), t
		}();
		r.prototype.identifier = "asm-social-sharing";
		t.asmSharingModelInstance = new r
	},
	1213: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.asmUserSettingsModelInstance = void 0;
		var o = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var o = t[n];
						o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
					}
				}
				return function(t, n, o) {
					return n && e(t.prototype, n), o && e(t, o), t
				}
			}(),
			i = n(685);
		var r = function(e) {
			function t() {
				return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t),
					function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, i.LocalStorageModel), o(t, [{
				key: "defaults",
				value: function() {
					return {
						autoDownload: !1,
						hideFullscreenRec: !1,
						spaceUsed: "calculating...",
						desiredVolume: 1
					}
				}
			}]), t
		}();
		r.prototype.identifier = "user-settings-model";
		t.asmUserSettingsModelInstance = new r
	},
	1280: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.asmSettingsModelInstance = void 0;
		var o, i = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var o = t[n];
						o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
					}
				}
				return function(t, n, o) {
					return n && e(t.prototype, n), o && e(t, o), t
				}
			}(),
			r = n(2),
			a = (o = r) && o.__esModule ? o : {
				default: o
			};
		var s = function(e) {
			function t() {
				return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t),
					function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, a.default.Model), i(t, [{
				key: "defaults",
				value: function() {
					return {
						asmConfig: {
							demoText: ""
						}
					}
				}
			}]), t
		}();
		t.asmSettingsModelInstance = new s
	},
	13: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		t.MoneyFormatConstants = {
			STYLIZED: "stylized",
			SHOW_ZERO_CENTS: "medium",
			HIDE_ZERO_CENTS: "short"
		}
	},
	14: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		t.COUNTRY_CONSTANTS = {
			PAYMENT_DISABLED_COUNTRIES: ["BY", "RU"],
			US_CC: "US",
			COUNTRIES: {
				WF: "Wallis and Futuna",
				JP: "Japan",
				JM: "Jamaica",
				JO: "Jordan",
				WS: "Samoa",
				JE: "Jersey",
				GW: "Guinea-Bissau",
				GU: "Guam",
				GT: "Guatemala",
				GS: "South Georgia and the South Sandwich Islands",
				GR: "Greece",
				GQ: "Equatorial Guinea",
				GP: "Guadeloupe",
				GY: "Guyana",
				GG: "Guernsey",
				GF: "French Guiana",
				GE: "Georgia",
				GD: "Grenada",
				GB: "United Kingdom",
				GA: "Gabon",
				GN: "Guinea",
				GM: "Gambia",
				GL: "Greenland",
				GI: "Gibraltar",
				GH: "Ghana",
				PR: "Puerto Rico",
				PS: "Palestine, State of",
				PW: "Palau",
				PT: "Portugal",
				PY: "Paraguay",
				PA: "Panama",
				PF: "French Polynesia",
				PG: "Papua New Guinea",
				PE: "Peru",
				PK: "Pakistan",
				PH: "Philippines",
				PN: "Pitcairn",
				PL: "Poland",
				PM: "Saint Pierre and Miquelon",
				ZM: "Zambia",
				ZA: "South Africa",
				ZW: "Zimbabwe",
				ME: "Montenegro",
				MD: "Moldova, Republic of",
				MG: "Madagascar",
				MF: "Saint Martin (French part)",
				MA: "Morocco",
				MC: "Monaco",
				MM: "Myanmar",
				ML: "Mali",
				MO: "Macao",
				MN: "Mongolia",
				MH: "Marshall Islands",
				MK: "Macedonia, the former Yugoslav Republic of",
				MU: "Mauritius",
				MT: "Malta",
				MW: "Malawi",
				MV: "Maldives",
				MQ: "Martinique",
				MP: "Northern Mariana Islands",
				MS: "Montserrat",
				MR: "Mauritania",
				MY: "Malaysia",
				MX: "Mexico",
				MZ: "Mozambique",
				FR: "France",
				FI: "Finland",
				FJ: "Fiji",
				FK: "Falkland Islands (Malvinas)",
				FM: "Micronesia, Federated States of",
				FO: "Faroe Islands",
				CK: "Cook Islands",
				CI: "Côte d'Ivoire",
				CH: "Switzerland",
				CO: "Colombia",
				CN: "China",
				CM: "Cameroon",
				CL: "Chile",
				CC: "Cocos (Keeling) Islands",
				CA: "Canada",
				CG: "Congo",
				CF: "Central African Republic",
				CD: "Congo, the Democratic Republic of the",
				CZ: "Czech Republic",
				CY: "Cyprus",
				CX: "Christmas Island",
				CS: "Serbia",
				CR: "Costa Rica",
				CW: "Curaçao",
				CV: "Cape Verde",
				CU: "Cuba",
				SZ: "Swaziland",
				SY: "Syrian Arab Republic",
				SX: "Sint Maarten (Dutch part)",
				SS: "South Sudan",
				SR: "Suriname",
				SV: "El Salvador",
				ST: "Sao Tome and Principe",
				SK: "Slovakia",
				SJ: "Svalbard and Jan Mayen",
				SI: "Slovenia",
				SH: "Saint Helena, Ascension and Tristan da Cunha",
				SO: "Somalia",
				SN: "Senegal",
				SM: "San Marino",
				SL: "Sierra Leone",
				SC: "Seychelles",
				SB: "Solomon Islands",
				SA: "Saudi Arabia",
				SG: "Singapore",
				SE: "Sweden",
				SD: "Sudan",
				YE: "Yemen",
				YT: "Mayotte",
				LB: "Lebanon",
				LC: "Saint Lucia",
				LA: "Lao People's Democratic Republic",
				LK: "Sri Lanka",
				LI: "Liechtenstein",
				LV: "Latvia",
				LT: "Lithuania",
				LU: "Luxembourg",
				LR: "Liberia",
				LS: "Lesotho",
				LY: "Libya",
				VA: "Holy See (Vatican City State)",
				VC: "Saint Vincent and the Grenadines",
				VE: "Venezuela, Bolivarian Republic of",
				VG: "Virgin Islands, British",
				IQ: "Iraq",
				VI: "Virgin Islands, US",
				IS: "Iceland",
				IR: "Iran, Islamic Republic of",
				IT: "Italy",
				VN: "Viet Nam",
				IM: "Isle of Man",
				IL: "Israel",
				IO: "British Indian Ocean Territory",
				IN: "India",
				IE: "Ireland",
				ID: "Indonesia",
				BD: "Bangladesh",
				BE: "Belgium",
				BF: "Burkina Faso",
				BG: "Bulgaria",
				BA: "Bosnia and Herzegovina",
				BB: "Barbados",
				BL: "Saint Barthélemy",
				BM: "Bermuda",
				BN: "Brunei Darussalam",
				BO: "Bolivia, Plurinational State of",
				BH: "Bahrain",
				BI: "Burundi",
				BJ: "Benin",
				BT: "Bhutan",
				BU: "Burma",
				BV: "Bouvet Island",
				BW: "Botswana",
				BQ: "Bonaire, Sint Eustatius and Saba",
				BR: "Brazil",
				BS: "Bahamas",
				BY: "Belarus",
				BZ: "Belize",
				RU: "Russia",
				RW: "Rwanda",
				RS: "Serbia",
				RE: "Réunion",
				RO: "Romania",
				OM: "Oman",
				HR: "Croatia",
				HT: "Haiti",
				HU: "Hungary",
				HK: "Hong Kong",
				HN: "Honduras",
				HM: "Heard Island and McDonald Islands",
				EH: "Western Sahara",
				EE: "Estonia",
				EG: "Egypt",
				EC: "Ecuador",
				ET: "Ethiopia",
				ES: "Spain",
				ER: "Eritrea",
				UY: "Uruguay",
				UZ: "Uzbekistan",
				US: "United States",
				UM: "United States Minor Outlying Islands",
				UG: "Uganda",
				UA: "Ukraine",
				VU: "Vanuatu",
				NI: "Nicaragua",
				NL: "Netherlands",
				NO: "Norway",
				NA: "Namibia",
				NC: "New Caledonia",
				NE: "Niger",
				NF: "Norfolk Island",
				NG: "Nigeria",
				NZ: "New Zealand",
				NP: "Nepal",
				NR: "Nauru",
				NU: "Niue",
				XK: "Kosovo",
				KG: "Kyrgyzstan",
				KE: "Kenya",
				KI: "Kiribati",
				KH: "Cambodia",
				KN: "Saint Kitts and Nevis",
				KM: "Comoros",
				KR: "Korea, Republic of",
				KP: "Korea, Democratic People's Republic of",
				KW: "Kuwait",
				KZ: "Kazakhstan",
				KY: "Cayman Islands",
				DO: "Dominican Republic",
				DM: "Dominica",
				DJ: "Djibouti",
				DK: "Denmark",
				DE: "Germany",
				DZ: "Algeria",
				TZ: "Tanzania, United Republic of",
				TV: "Tuvalu",
				TW: "Taiwan",
				TT: "Trinidad and Tobago",
				TR: "Turkey",
				TN: "Tunisia",
				TO: "Tonga",
				TL: "Timor-Leste",
				TM: "Turkmenistan",
				TJ: "Tajikistan",
				TK: "Tokelau",
				TH: "Thailand",
				TF: "French Southern Territories",
				TG: "Togo",
				TD: "Chad",
				TC: "Turks and Caicos Islands",
				AE: "United Arab Emirates",
				AD: "Andorra",
				AG: "Antigua and Barbuda",
				AF: "Afghanistan",
				AI: "Anguilla",
				AM: "Armenia",
				AL: "Albania",
				AO: "Angola",
				AN: "Netherlands Antilles",
				AQ: "Antarctica",
				AS: "American Samoa",
				AR: "Argentina",
				AU: "Australia",
				AT: "Austria",
				AW: "Aruba",
				AX: "Åland Islands",
				AZ: "Azerbaijan",
				QA: "Qatar"
			}
		}
	},
	15: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.makeHumbleDate = t.DAY_IN_MILLISECONDS = t.MINUTE_IN_MILLISECONDS = t.MONTH_AND_YEAR = t.FULL_DATE = void 0;
		var o, i = n(0),
			r = (o = i) && o.__esModule ? o : {
				default: o
			};
		t.FULL_DATE = "MMMM D, YYYY", t.MONTH_AND_YEAR = "MMMM YYYY";
		var a = t.MINUTE_IN_MILLISECONDS = 6e4,
			s = (t.DAY_IN_MILLISECONDS = 60 * a * 24, t.makeHumbleDate = function(e) {
				if (e instanceof Date) return e;
				if (!r.default.isString(e) && !r.default.isFinite(e)) throw new TypeError(e + " is not a valid datetime");
				r.default.isString(e) && !isNaN(e) && (e = r.default.toFinite(e)), r.default.isString(e) ? s(e) ? e = e.trim() + "T00:00Z" : l(e) && (e += "Z") : r.default.isFinite(e) && (e = u(e));
				var t = new Date(e);
				if (isNaN(t.valueOf())) throw new TypeError("An invalid Date object was created with " + e);
				return t
			}, function(e) {
				return !e.match(/[T ]\d\d:\d\d/)
			}),
			l = function(e) {
				return !e.match(/([\+-]\d\d:\d\d)|Z/)
			},
			u = function(e) {
				return e < 12623328e5 && (e *= 1e3), e
			}
	},
	18: function(e, t, n) {
		"use strict";
		(function(e) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.HumbleModal = void 0;
			var o, i = function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var o = t[n];
							o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
						}
					}
					return function(t, n, o) {
						return n && e(t.prototype, n), o && e(t, o), t
					}
				}(),
				r = n(2),
				a = (o = r) && o.__esModule ? o : {
					default: o
				},
				s = n(29);
			n(28);
			var l = t.HumbleModal = function(t) {
				function n() {
					return function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, n),
						function(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments))
				}
				return function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}(n, a.default.Modal), i(n, [{
					key: "initialize",
					value: function(e) {
						e || (e = {}), this.onDestroyCallback = e.onDestroyCallback
					}
				}, {
					key: "onDestroy",
					value: function() {
						(0, s.enableBodyScroll)(this.getScrollingElement()), this.onDestroyCallback && this.onDestroyCallback(this.getOnDestroyArgs())
					}
				}, {
					key: "getOnDestroyArgs",
					value: function() {
						return null
					}
				}, {
					key: "onRender",
					value: function() {
						e("#site-modal").append(this.$el), (0, s.disableBodyScroll)(this.getScrollingElement(), this.disableBodyScrollOptions), this.$el.prop("tabindex", "0"), this.$el.focus()
					}
				}, {
					key: "getScrollingElement",
					value: function() {
						return this.$el[0]
					}
				}, {
					key: "checkKey",
					value: function(e) {
						if (this.active) switch (e.keyCode) {
							case 27:
								return this.triggerCancel(e)
						}
					}
				}]), n
			}();
			l.prototype.cancelEl = ".js-close-modal", l.prototype.prefix = "humblemodal", l.prototype.submitEl = ".js-modal-submit", l.prototype.disableBodyScrollOptions = {
				reserveScrollBarGap: !0
			}
		}).call(this, n(1))
	},
	19: function(e, t) {
		function n(e) {
			return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}
		var o = function(e) {
				return "string" == typeof e
			},
			i = function(e) {
				return e instanceof Blob
			};
		(function() {
			if (function() {
					return "navigator" in this && "sendBeacon" in this.navigator
				}.call(this)) return;
			"navigator" in this || (this.navigator = {});
			"function" != typeof this.navigator.sendBeacon && (this.navigator.sendBeacon = function(e, t) {
				var n = this.event && this.event.type,
					r = "unload" === n || "beforeunload" === n,
					a = "XMLHttpRequest" in this ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
				a.open("POST", e, !r), a.withCredentials = !0, a.setRequestHeader("Accept", "*/*"), o(t) ? (a.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"), a.responseType = "text/plain") : i(t) && t.type && a.setRequestHeader("Content-Type", t.type);
				try {
					a.send(t)
				} catch (e) {
					return !1
				}
				return !0
			}.bind(this))
		}).call("object" === ("undefined" == typeof window ? "undefined" : n(window)) ? window : {})
	},
	2: function(e, t) {
		e.exports = Backbone
	},
	20: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		t.CSRF_CONSTANTS = {
			CSRF_COOKIE_KEY: "csrf_cookie",
			CSRF_COOKIE_VERSION: 1,
			CSRF_FORM_KEY: "_le_csrf_token",
			CSRF_HEADER_KEY: "CSRF-Prevention-Token"
		}
	},
	21: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.parseJSON = t.extractWebpackJsonData = void 0;
		var o, i = n(1),
			r = (o = i) && o.__esModule ? o : {
				default: o
			},
			a = n(4),
			s = n(15),
			l = n(7);
		t.extractWebpackJsonData = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "#webpack-json-data",
				t = (0, r.default)(e);
			if (t.length) {
				var n = u(t.html().trim());
				return t.remove(), n
			}
		};
		var u = t.parseJSON = function(e) {
				return JSON.parse(e, function(e, t) {
					if (c(e, "money")) {
						var n = d(e, "money");
						if (!t) return void(this[n] = null);
						var o = void 0;
						if (Array.isArray(t) ? o = l.Money.fromArray(t) : t instanceof Object && (o = l.Money.fromObject(t)), !o) throw new Error("Tagged money data is not valid: key=" + e + ", value=" + t);
						this[n] = o
					} else if (c(e, "datetime")) {
						var i = d(e, "datetime");
						if (!t) return void(this[i] = null);
						var r = (0, s.makeHumbleDate)(t);
						if (!r) throw new Error("Tagged datetime data is not valid: key=" + e + ", value=" + t);
						this[i] = r
					} else if (c(e, "date")) {
						var u = d(e, "date");
						if (!t) return void(this[u] = null);
						var f = (0, s.makeHumbleDate)(t);
						if (!f) throw new Error("Tagged date data is not valid: key=" + e + ", value=" + t);
						this[u] = f
					} else {
						if (!c(e, "decimal")) return t;
						var h = d(e, "decimal");
						if (!t && 0 != t) return void(this[h] = null);
						var p = new a.Decimal(t);
						if (!p) throw new Error("Tagged Decimal data is not valid: key=" + e + ", value=" + t);
						this[h] = p
					}
				})
			},
			c = function(e, t) {
				return e.endsWith("|" + t)
			},
			d = function(e, t) {
				return e.replace("|" + t, "")
			}
	},
	23: function(e, t) {
		e.exports = numeral
	},
	24: function(e, t, n) {
		"use strict";
		n.r(t);
		var o, i, r, a, s = n(1);
		/**
		 * @license In-Field Label jQuery Plugin
		 * http://fuelyourcoding.com/scripts/infield.html
		 * http://github.com/streetpc/jquery-infieldlabels
		 *
		 * Copyright (c) 2009 Doug Neiner, Adrien Lavoillotte
		 * Dual licensed under the MIT and GPL licenses, see:
		 * http://docs.jquery.com/License
		 *
		 * @version 0.2.1
		 */
		o = n.n(s).a, i = /^(?:text|password|search|number|tel|url|email|date(?:time(?:-local)?)?|time|month|week)?$/, (a = {})[(r = function(e, t) {
			return e << 3 | t
		})(1, 0)] = function(e) {
			e.fadeTo(1)
		}, a[r(2, 0)] = function(e) {
			e.$label.css({
				opacity: 1
			}).show(), e.emptied(!0)
		}, a[r(0, 1)] = function(e) {
			e.fadeTo(e.options.fadeOpacity)
		}, a[r(2, 1)] = function(e) {
			e.$label.css({
				opacity: e.options.fadeOpacity
			}).show(), e.emptied(!0)
		}, a[r(0, 2)] = function(e) {
			e.$label.hide(), e.emptied(!1)
		}, a[r(1, 2)] = a[r(0, 2)], o.InFieldLabels = function(e, t, n) {
			var i = this;
			i.$label = o(e), i.label = e, i.$field = o(t), i.field = t, i.$label.data("InFieldLabels", i), i.state = 0, i.init = function() {
				i.options = o.extend({}, o.InFieldLabels.defaultOptions, n), i.options.labelClass && i.$label.addClass(i.options.labelClass), i.options.disableAutocomplete && i.$field.attr("autocomplete", "off"), i.$field.bind("blur focus change keyup.infield cut", i.updateState).bind("paste", function(e) {
					i.setState(2)
				}), i.updateState()
			}, i.emptied = function(e) {
				i.options.emptyWatch || (e ? i.$field.bind("keyup.infield", i.updateState) : i.$field.unbind("keyup.infield", i.updateState))
			}, i.fadeTo = function(e) {
				i.options.fadeDuration ? i.$label.stop().animate({
					opacity: e
				}, i.options.fadeDuration) : i.$label.css({
					opacity: e
				})
			}, i.updateState = function(e, t) {
				var n = 2;
				if ("" === i.field.value) {
					var o = e && e.type;
					n = (o = "focus" === o || "keyup" === o || "blur" !== o && "change" !== o && i.$field.is(":focus")) ? 1 : 0
				}
				i.setState(n, t)
			}, i.setState = function(e, t) {
				if (e !== i.state) {
					var n = a[r(i.state, e)];
					"function" == typeof n ? (n(i), i.state = e) : t || i.updateState(null, !0)
				}
			}, i.init()
		}, o.InFieldLabels.defaultOptions = {
			emptyWatch: !0,
			disableAutocomplete: !0,
			fadeOpacity: .5,
			fadeDuration: 300,
			labelClass: "in-field"
		}, o.fn.inFieldLabels = function(e) {
			return this.each(function() {
				if ("LABEL" === this.tagName) {
					var t, n = this.getAttribute("for") || this.htmlFor,
						r = !0;
					n && (t = document.getElementById(n)) && ("INPUT" === t.tagName ? r = i.test(t.type.toLowerCase()) : "TEXTAREA" !== t.tagName && (r = !1), (r = r && !t.getAttribute("placeholder")) && new o.InFieldLabels(this, t, e))
				}
			})
		}
	},
	2514: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.uploadDataUrl = void 0;
		var o, i = n(1),
			r = (o = i) && o.__esModule ? o : {
				default: o
			};
		t.uploadDataUrl = function(e, t, n, o, i, a) {
			var s = {
				url: "https://api.imgur.com/3/upload.json",
				type: "POST",
				headers: {
					Authorization: "Client-ID 5e637b830f660b3"
				},
				data: {
					type: "base64",
					name: o,
					title: i,
					description: a,
					image: e.split(",")[1]
				},
				dataType: "json"
			};
			r.default.ajax(s).success(t).error(n)
		}
	},
	2515: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.register = t.providerInterface = t.API_ROOT = void 0;
		var o, i = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var o = t[n];
						o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
					}
				}
				return function(t, n, o) {
					return n && e(t.prototype, n), o && e(t, o), t
				}
			}(),
			r = n(0),
			a = (o = r) && o.__esModule ? o : {
				default: o
			},
			s = n(15);

		function l(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var u = t.API_ROOT = "/api/v1/cloudfile/",
			c = function(e) {
				return e.timestamp && (e.timestamp = (0, s.makeHumbleDate)(e.timestamp)), e
			},
			d = new(function() {
				function e() {
					l(this, e)
				}
				return i(e, [{
					key: "apiRoute",
					value: function(e) {
						return "" + window.location.origin + u + e
					}
				}, {
					key: "write",
					value: function(e, t, n, o) {
						var i = new XMLHttpRequest;
						i.open("POST", this.apiRoute(e), !0), i.setRequestHeader("Content-Type", "application/octet-stream"), i.onload = function(e) {
							var t = c(e);
							"function" == typeof n && n(t)
						}, i.onerror = o, i.send(new Blob([t]))
					}
				}, {
					key: "read",
					value: function(e, t, n) {
						var o = new XMLHttpRequest;
						o.open("GET", this.apiRoute(e), !0), o.responseType = "arraybuffer", o.onload = function() {
							var e = o.response;
							if (e) {
								var i = new Uint8Array(e);
								t(i)
							} else n()
						}, o.onerror = n, o.send()
					}
				}, {
					key: "ls",
					value: function(e, t, n) {
						var o = new XMLHttpRequest;
						o.open("GET", this.apiRoute(e), !0), o.responseType = "json", o.onload = function() {
							var e = o.response;
							if (e) {
								var i = c(e);
								t(i)
							} else n()
						}, o.onerror = n, o.send()
					}
				}, {
					key: "rm",
					value: function(e, t, n) {
						var o = new XMLHttpRequest;
						o.open("DELETE", this.apiRoute(e), !0), o.responseType = "json", o.onload = t, o.onerror = n
					}
				}]), e
			}()),
			f = function(e, t) {
				return t ? (t.startsWith("/") || (t = "/" + t), "" + e + t) : e + "/"
			},
			h = function() {
				function e() {
					l(this, e), this.throttledWriteFunctions = {}, this.vendor = "Humble Bundle Inc"
				}
				return i(e, [{
					key: "isAvailable",
					value: function(e) {
						var t = new XMLHttpRequest,
							n = d.apiRoute(f(e.applicationToken, "/"));
						t.open("GET", n, !1);
						try {
							return t.send(), 200 == t.status
						} catch (e) {
							return !1
						}
					}
				}, {
					key: "allFiles",
					value: function(e, t, n) {
						d.ls(f(e.applicationToken, "/"), t, n)
					}
				}, {
					key: "read",
					value: function(e, t, n, o) {
						! function(e) {
							return !e || e.endsWith("/")
						}(t) ? d.read(f(e.applicationToken, t), n, function(e) {
							e && 404 == e.status ? n([]) : o(e)
						}): d.ls(f(e.applicationToken, t), n, function(e) {
							e && 404 == e.status ? n([]) : o(e)
						})
					}
				}, {
					key: "write",
					value: function(e, t, n, o, i) {
						t.path in this.throttledWriteFunctions || (this.throttledWriteFunctions[t.path] = a.default.bind(a.default.throttle(d.write, 5e3), d)), this.throttledWriteFunctions[t.path](f(e.applicationToken, t.path), n, o, i)
					}
				}, {
					key: "rm",
					value: function(e, t, n, o) {
						d.rm(f(e.applicationToken, t.path), n, o)
					}
				}]), e
			}(),
			p = t.providerInterface = new h;
		t.register = function() {
			var e = void 0 !== e ? e : {};
			e.CloudFile = p, window.CLOUD_PROVIDERS = e
		}
	},
	2516: function(e, t) {
		e.exports = '<div class="demo-ended-image" style="background-image: url(\'<%- staticURL %><%- demoOverImage %>\');"></div>\n'
	},
	2517: function(e, t) {
		e.exports = '<input type="text" class="key-capture"/>\n<div class="aspect-ratio-wrapper js-game-click-target">\n  <div class="aspect-ratio js-aspect-ratio">\n    <div class="modal-holder"></div>\n<% if (previewImage) { %>\n    <canvas id="player-canvas" oncontextmenu="event.preventDefault()" data-default-bg="url(9db09df747b02199cdfec27ba91ac87370d214e9.png)" style="background-image: url(<%= previewImage %>)" class="custom-background"></canvas>\n<% } else { %>\n    <canvas id="player-canvas" oncontextmenu="event.preventDefault()" data-default-bg="url(9db09df747b02199cdfec27ba91ac87370d214e9.png)" style="background-image: url(9db09df747b02199cdfec27ba91ac87370d214e9.png)"></canvas>\n<% } %>\n    <div class="cover js-progress progress">\n      <div class="loading-bindle f0" style="background-image: url(fd3b5c29ec607afa25e5cfdd0dd89aaf7a59c440.svg)"></div>\n      <div class="progress-bar">\n        <div class="progress-done"></div>\n      </div>\n      <div class="status"></div>\n<% if (asmConfig.demoText) { %>\n      <div class="demo-message"><%= asmConfig.demoText.preLoad %></div>\n<% } %>\n    </div>\n    <img class="cover js-start start" src="5e36bc89c009e9c5060211ce2bef3952a98283e8.png" alt="Play game">\n    <img class="cover js-load load" src="5e36bc89c009e9c5060211ce2bef3952a98283e8.png" alt="Load game">\n  </div>\n</div>\n\n<div class="bottom-bar">\n  <div class="controls-left">\n<% if (showNewThings) { %>\n    <button class="js-twitter-share"><i class="hb hb-twitter"></i></button>\n    <button class="js-facebook-share"><i class="hb hb-facebook"></i></button>\n    <button class="js-share share">\n      <img src="e22075a98407e71fb53cc168a48ecc4682fb1459.svg" class="hb hb-share" alt="" aria-hidden="true">\n    </button>\n<% } %>\n  </div>\n  <div class="controls-right">\n    <button class="js-settings settings">\n      <i class="hb hb-gear"></i>\n    </button>\n<% if (showNewThings && !asmConfig.screenshotDisabled) { %>\n    <button class="js-screenshot screenshot">\n      <i class="hb hb-camera"></i>\n    </button>\n<% } %>\n    <% if (showVolumeControls) { %>\n    <button class="js-unmute unmute">\n      <i class="hb hb-volume-off"></i>\n    </button>\n    <button class="js-mute mute">\n      <i class="hb hb-volume-up"></i>\n    </button>\n    <% } %>\n    <button class="js-full-screen full-screen disabled" onclick="asmPlayer.userRequestsFullscreen()">\n      <i class="hb hb-expand"></i>\n    </button>\n  </div>\n</div>\n'
	},
	2518: function(e, t) {
		e.exports = '<div class="asm-modal-topbar">\n  <i class="hb hb-exclamation-triangle"></i>Please install a supported browser\n</div>\n<div class="asm-modal-section">\n  <p>This browser is not optimized for these games. We recommend downloading Mozilla Firefox for the best browser gaming experience.</p>\n  <img src="https://affiliates.mozilla.org/media/uploads/image_banners/2099b34508931a9744058af46bc05632f74fefff.png" class="js-get-supported-browser get-supported-browser" data-url="https://www.getfirefox.com" alt="Get Firefox"/>\n</div>\n<div class="asm-modal-bottombar">\n  <button class="button gray js-dismiss js-load js-load-anyway">Try anyway</button>\n</div>\n'
	},
	2519: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.AsmUnsupportedModal = void 0;
		var o = a(n(0)),
			i = n(502),
			r = a(n(2518));

		function a(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(t.AsmUnsupportedModal = function(e) {
			function t() {
				return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t),
					function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, i.AsmModal), t
		}()).prototype.template = o.default.template(r.default)
	},
	2520: function(e, t) {
		e.exports = '<div class="asm-modal-topbar">\n  Share <%= humanName %>\n</div>\n<div class="asm-modal-section sharing-modal-body">\n  <input type="text" value="<%= link %>"/>\n</div>\n<div class="asm-modal-bottombar">\n  <button class="button green js-dismiss">Ok</button>\n</div>\n'
	},
	2521: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.AsmShareModal = void 0;
		var o = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var o = t[n];
						o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
					}
				}
				return function(t, n, o) {
					return n && e(t.prototype, n), o && e(t, o), t
				}
			}(),
			i = u(n(0)),
			r = n(502),
			a = n(1212),
			s = u(n(2520)),
			l = n(1211);

		function u(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var c = t.AsmShareModal = function(e) {
			function t() {
				return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t),
					function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, r.AsmModal), o(t, [{
				key: "openTweet",
				value: function() {
					(0, l.tweet)("Checkout " + this.model.get("humanName"), this.model.get("shareUrl"))
				}
			}, {
				key: "openFacebook",
				value: function() {
					(0, l.facebookShare)(this.model.get("shareUrl"))
				}
			}]), t
		}();
		c.prototype.template = i.default.template(s.default), c.prototype.model = a.asmSharingModelInstance, c.prototype.events = {
			"click .js-twitter-share": "openTweet",
			"click .js-facebook-share": "openFacebook"
		}
	},
	2522: function(e, t) {
		e.exports = '<div class="asm-modal-topbar">\n  <i class="hb hb-gear"></i>Settings\n</div>\n<div class="asm-modal-section">\n  <p>\n    <label>\n      <input class="js-auto-download auto-download" type="checkbox" <%= autoDownload ? \'checked\' : \'\' %>/>\n      Auto-download games when possible\n    </label>\n    <label>\n      <input class="js-hide-fullscreen-rec hide-fullscreen-rec" type="checkbox" <%= hideFullscreenRec ? \'checked\' : \'\' %>/>\n      Don\'t recommend full-screen\n    </label>\n  </p>\n\n  <p>Total space used: <span class="js-space-used">calculating...</span> <a href="#" class="js-clear-database">clear all</a></p>\n</div>\n<div class="asm-modal-bottombar">\n  <button class="button gray js-dismiss">Close</button>\n</div>\n'
	},
	2523: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.AsmSettingsModal = void 0;
		var o = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var o = t[n];
						o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
					}
				}
				return function(t, n, o) {
					return n && e(t.prototype, n), o && e(t, o), t
				}
			}(),
			i = l(n(0)),
			r = n(502),
			a = n(1213),
			s = l(n(2522));

		function l(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var u = t.AsmSettingsModal = function(e) {
			function t() {
				return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t),
					function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, r.AsmModal), o(t, [{
				key: "onAutoDownloadChanged",
				value: function() {
					var e = this.$(".auto-download").prop("checked");
					this.model.set({
						autoDownload: e
					})
				}
			}, {
				key: "onHideFullscreenRecChanged",
				value: function() {
					var e = this.$(".js-hide-fullscreen-rec").prop("checked");
					this.model.set({
						hideFullscreenRec: e
					})
				}
			}, {
				key: "update",
				value: function() {
					this.$(".js-auto-download").prop("checked", this.model.get("autoDownload")), this.$(".js-hide-fullscreen-rec").prop("checked", this.model.get("hideFullscreenRec")), this.$(".js-space-used").text(this.model.get("spaceUsed"))
				}
			}]), t
		}();
		u.prototype.events = {
			"click .js-auto-download": "onAutoDownloadChanged",
			"click .js-hide-fullscreen-rec": "onHideFullscreenRecChanged"
		}, u.prototype.template = i.default.template(s.default), u.prototype.model = a.asmUserSettingsModelInstance
	},
	2524: function(e, t) {
		e.exports = '<div class="grid-item screenshot-item" id="<%= id %>">\n  <img class="content" src="<%= url %>" alt="Screenshot"/>\n  <div class="hover-wrapper">\n    <div class="shares">\n      <a href="#" class="js-twitter-share"><i class="hb hb-twitter"></i></a>\n      <a href="#" class="js-facebook-share"><i class="hb hb-facebook"></i></a>\n      <a href="https://www.imgur.com/<%= id %>" target="_blank" >imgur</a>\n    </div>\n    <div class="delete-screenshot js-delete-screenshot">\n      <i class="hb hb-trash-o"></i>\n    </div>\n  </div>\n</div>\n'
	},
	2525: function(e, t) {
		e.exports = '<div class="asm-modal-topbar">\n  <i class="hb hb-camera"></i>Screenshots\n</div>\n<p class="js-modal-message"></p>\n<div class="modal-gallery-wrapper">\n  <div class="grid-item take-screenshot js-take-screenshot">\n    <div class="content">\n      <i class="hb hb-camera"></i> New screenshot\n    </div>\n  </div><div class="grid-item pending-image-spinner js-pending-image-spinner">\n    <img src="2de55388a5f1201232a4c2b6a8d4f83b5006f418.gif" alt="" aria-hidden="true"/>\n  </div>\n</div>\n<div class="asm-modal-bottombar">\n  <button class="button green js-dismiss js-do-close">Ok</button>\n</div>\n'
	},
	2526: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.AsmScreenshotModal = void 0;
		var o = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var o = t[n];
						o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
					}
				}
				return function(t, n, o) {
					return n && e(t.prototype, n), o && e(t, o), t
				}
			}(),
			i = c(n(1)),
			r = n(502),
			a = n(1212),
			s = c(n(2525)),
			l = c(n(2524)),
			u = n(1211);

		function c(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var d = t.AsmScreenshotModal = function(e) {
			function t() {
				return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t),
					function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, r.AsmModal), o(t, [{
				key: "beforeCancel",
				value: function() {
					window.Module.wakeUp()
				}
			}, {
				key: "doDeleteScreenshot",
				value: function(e) {
					var t = (0, i.default)(e.target).closest(".grid-item"),
						n = t.attr("id");
					t.remove();
					var o = this.model.get("imgurIds"),
						r = o.indexOf(n);
					r >= 0 && o.splice(r, 1), this.model.set("imgurIds", o), this.model.sync()
				}
			}, {
				key: "doTwitterShare",
				value: function(e) {
					var t = (0, i.default)(e.target).closest(".grid-item");
					(0, u.tweet)("I am playing " + this.model.get("humanName") + " https://imgur.com/" + t.attr("id") + ".jpeg", this.model.get("shareUrl"))
				}
			}, {
				key: "doFacebookShare",
				value: function(e) {
					var t = (0, i.default)(e.target).closest(".grid-item");
					(0, u.facebookShare)("https://imgur.com/" + t.attr("id") + ".jpeg")
				}
			}, {
				key: "update",
				value: function() {
					var e = this.$(".modal-gallery-wrapper"),
						t = this.model.get("imgurIds");
					this.model.get("pendingImage") ? this.$(".js-pending-image-spinner").show() : this.$(".js-pending-image-spinner").hide();
					for (var n = t.length - 1; n >= 0; n--) {
						var o = t[t.length - n - 1];
						if (0 === e.find("#" + o).length) {
							var i = _.template(l.default)({
								url: "http://www.imgur.com/" + o + ".jpg",
								id: o
							});
							this.$(".js-pending-image-spinner").after(i)
						}
					}
				}
			}]), t
		}();
		d.prototype.template = _.template(s.default), d.prototype.model = a.asmSharingModelInstance, d.prototype.events = {
			"click .js-delete-screenshot": "doDeleteScreenshot",
			"click .js-twitter-share": "doTwitterShare",
			"click .js-facebook-share": "doFacebookShare",
			"click .js-imgur-link": "doImgurLink"
		}
	},
	2527: function(e, t) {
		e.exports = '<div class="asm-modal-topbar">\n  <i class="hb hb-exclamation-triangle"></i>Switch to fullscreen\n</div>\n<div class="asm-modal-section">\n  <p>It looks like this game will run best in full-screen</p>\n  <label>\n    <input class="js-hide-fullscreen-rec hide-fullscreen-rec" type="checkbox" <%= hideFullscreenRec ? \'checked\' : \'\' %>/>\n    Don\'t show this again\n  </label>\n</div>\n<div class="asm-modal-bottombar">\n  <button class="button gray js-dismiss">Play windowed</button>\n  <button class="button green" onclick="window.asmPlayer.userRequestsFullscreen()">Fullscreen</button>\n</div>\n'
	},
	2528: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.AsmRecommendFullscreenModal = void 0;
		var o = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var o = t[n];
						o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
					}
				}
				return function(t, n, o) {
					return n && e(t.prototype, n), o && e(t, o), t
				}
			}(),
			i = l(n(0)),
			r = n(502),
			a = n(1213),
			s = l(n(2527));

		function l(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var u = t.AsmRecommendFullscreenModal = function(e) {
			function t() {
				return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t),
					function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, r.AsmModal), o(t, [{
				key: "onHideFullscreenRecChanged",
				value: function() {
					var e = this.$(".js-hide-fullscreen-rec").prop("checked");
					this.model.set({
						hideFullscreenRec: e
					})
				}
			}, {
				key: "update",
				value: function() {
					this.$(".js-hide-fullscreen-rec").prop("checked", this.model.get("hideFullscreenRec"))
				}
			}]), t
		}();
		u.prototype.events = {
			"click .js-hide-fullscreen-rec": "onHideFullscreenRecChanged"
		}, u.prototype.template = i.default.template(s.default), u.prototype.model = a.asmUserSettingsModelInstance
	},
	2529: function(e, t) {
		e.exports = '<div class="asm-modal-topbar">\n  <i class="hb hb-exclamation-triangle"></i>Please update your browser\n</div>\n<div class="asm-modal-section">\n  <p>This browser is not optimized for these games</p>\n</div>\n<div class="asm-modal-bottombar">\n  <button class="button green js-update-browser">Update my browser</button>\n  <button class="button gray js-dismiss js-load load">Play anyway</button>\n</div>\n'
	},
	2530: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.AsmOutOfDateModal = void 0;
		var o = a(n(0)),
			i = n(502),
			r = a(n(2529));

		function a(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(t.AsmOutOfDateModal = function(e) {
			function t() {
				return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t),
					function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, i.AsmModal), t
		}()).prototype.template = o.default.template(r.default)
	},
	2531: function(e, t) {
		e.exports = '<div class="asm-modal-topbar">\n  <i class="hb hb-exclamation-circle"></i>Error loading game\n</div>\n<div class="asm-modal-section">\n  <p>Sorry, we were unable to load the game!</p>\n</div>\n<div class="asm-modal-bottombar">\n  <button class="button green js-load">Try again</button>\n</div>\n'
	},
	2532: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.AsmErrorModal = void 0;
		var o = a(n(0)),
			i = n(502),
			r = a(n(2531));

		function a(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(t.AsmErrorModal = function(e) {
			function t() {
				return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t),
					function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, i.AsmModal), t
		}()).prototype.template = o.default.template(r.default)
	},
	2533: function(e, t) {
		e.exports = '<div class="asm-modal-topbar">\n<% if (asmConfig.demoText) { %>\n  <%= asmConfig.demoText.overHeading %>\n<% } %>\n</div>\n<div class="asm-modal-section">\n<% if (asmConfig.demoText) { %>\n  <p><%= asmConfig.demoText.overBody %></p>\n<% } else { %>\n  <p>Purchase now to unlock the full game</p>\n<% }%>\n</div>\n<div class="asm-modal-bottombar">\n  <button class="button green js-contribute">Contribute</button>\n</div>\n'
	},
	2534: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.AsmDemoExpiredModal = void 0;
		var o = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var o = t[n];
						o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
					}
				}
				return function(t, n, o) {
					return n && e(t.prototype, n), o && e(t, o), t
				}
			}(),
			i = l(n(0)),
			r = n(502),
			a = n(1280),
			s = l(n(2533));

		function l(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var u = t.AsmDemoExpiredModal = function(e) {
			function t() {
				return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t),
					function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, r.AsmModal), o(t, [{
				key: "beforeCancel",
				value: function() {
					return !1
				}
			}]), t
		}();
		u.prototype.template = i.default.template(s.default), u.prototype.model = a.asmSettingsModelInstance
	},
	2535: function(e, t) {
		e.exports = '<div class="asm-modal-topbar">\n  Game data cleared.\n</div>\n<div class="asm-modal-section">\n  <p>Local game data has been removed.</p>\n</div>\n<div class="asm-modal-bottombar">\n  <button class="button green js-dismiss">Ok</button>\n</div>\n'
	},
	2536: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.AsmClearedModal = void 0;
		var o = a(n(0)),
			i = n(502),
			r = a(n(2535));

		function a(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(t.AsmClearedModal = function(e) {
			function t() {
				return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t),
					function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, i.AsmModal), t
		}()).prototype.template = o.default.template(r.default)
	},
	2537: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = /.*(Firefox|Chrome|Chromium)\/([0-9.]+)/g.exec(navigator.userAgent);
		t.getBrowser = function() {
			return o[1]
		}, t.isBrowserBrandSupported = function() {
			if (o) switch (o[1]) {
				case "Firefox":
				case "Chrome":
				case "Chromium":
					return !0;
				default:
					return !1
			}
			return !1
		}, t.isBrowserVersionSupported = function() {
			if (!o) return !1;
			var e = o[1],
				t = o[2],
				n = parseInt(t.split(".")[0], 10);
			switch (e) {
				case "Firefox":
					return n >= 22;
				case "Chrome":
				case "Chromium":
					return n >= 28;
				default:
					return !1
			}
		}, t.sendMessage = function(e) {
			window.parent.postMessage(JSON.stringify(e), "*")
		}, t.isFullScreen = function() {
			return document.webkitFullScreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.mozFullscreenElement || document.fullScreenElement || document.fullscreenElement || document.msFullScreenElement || document.msFullscreenElement || document.webkitCurrentFullScreenElement
		}
	},
	2538: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		t.initAsmModule = function(e) {
			return window.doNotStart = !1, {
				remotePackageUrl: e.manifest.asmData,
				preRun: [function() {
					if (window.Browser.resizeListeners.push(function(t, n) {
							e.requestResize(t, n)
						}), window.addRunDependency("DONT_START"), window.doNotStart = !0, window.FS.createFolder("/", e.cloudMountPoint, !0, !0), e.demoMode || void 0 === window.CLOUDFS || (window.addRunDependency("CLOUDFS_setup"), window.FS.mount(window.CLOUDFS, {
							provider: "CloudFile",
							scope: e.machineName,
							cloud: {
								applicationToken: e.machineName
							}
						}, "/" + e.cloudMountPoint), window.FS.syncfs(!0, function(e) {
							e && console.error("ERROR!", e), window.removeRunDependency("CLOUDFS_setup")
						})), void 0 !== window.HUMBLE_API) {
						var t = {
							locateAsset: window.Module.locateFile,
							buildCacheKey: function(t) {
								var n = t,
									o = e.manifest[t];
								if (o) {
									var i = o.split("?");
									i.length >= 1 && (n = i[0])
								}
								return {
									scope: e.machineName,
									path: n
								}
							},
							demoEndedCallback: e.onDemoExpired,
							setupMount: !0
						};
						window.HUMBLE_API.configure(t), e.skipSetAspectRatio || (window.HUMBLE_API.options.playerSize = function() {
							var t = e.$(".js-aspect-ratio");
							return {
								width: t.width(),
								height: t.height(),
								locked: !0
							}
						})
					}
				}],
				postRun: [function() {
					window.AsmEventBus.trigger("gameStarted")
				}],
				canvas: e.$("canvas")[0],
				setStatus: e.setStatus,
				totalDependencies: 0,
				setPlayerVolume: function(e) {
					if (void 0 !== window.HUMBLE_API && "setPlayerVolume" in window.HUMBLE_API) window.HUMBLE_API.setPlayerVolume(e);
					else if (void 0 !== window.AL)
						for (var t in window.AL.contexts) {
							window.AL.contexts[t].gain.gain.value = e
						}
				},
				setPlayerFullscreen: function(e) {
					return void 0 !== window.HUMBLE_API && "setPlayerFullscreen" in window.HUMBLE_API && (window.HUMBLE_API.setPlayerFullscreen(e), !0)
				},
				monitorRunDependencies: function(e) {
					this.totalDependencies = Math.max(this.totalDependencies, e), window.doNotStart && 1 === e && window.AsmEventBus.trigger("loadComplete")
				},
				locateFilePackage: function(e) {
					return this.locateFile(e)
				},
				locateFile: function(t) {
					var n = e.manifest[t];
					return n || (t = 0 !== t.indexOf("/") ? "/" + t : t.substring(1), n = e.manifest[t]), n || t
				}
			}
		}
	},
	2539: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function(t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}();
		t.AsmBindleAnimator = function() {
			function e(t, n) {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.TOTAL_FRAMES = 40, this.currentFrame = 0, this.$bindleElement = t, this.animator = null, this.interval = n
			}
			return o(e, [{
				key: "animateStep",
				value: function() {
					var e = (this.currentFrame + 1) % this.TOTAL_FRAMES;
					this.$bindleElement.removeClass("f" + this.currentFrame).addClass("f" + e), this.currentFrame = e
				}
			}, {
				key: "start",
				value: function() {
					this.animator = setInterval(this.animateStep.bind(this), this.interval)
				}
			}, {
				key: "stop",
				value: function() {
					clearInterval(this.animator)
				}
			}]), e
		}()
	},
	2540: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.AsmPlayerView = void 0;
		var o = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var o = t[n];
						o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
					}
				}
				return function(t, n, o) {
					return n && e(t.prototype, n), o && e(t, o), t
				}
			}(),
			i = A(n(2)),
			r = A(n(1)),
			a = A(n(0)),
			s = n(2539),
			l = n(2538),
			u = n(2537),
			c = n(2536),
			d = n(2534),
			f = n(2532),
			h = n(2530),
			p = n(2528),
			m = n(2526),
			v = n(2523),
			y = n(2521),
			g = n(2519),
			w = n(1280),
			b = n(1212),
			S = n(1213),
			E = A(n(2517)),
			C = A(n(2516)),
			_ = n(684),
			R = n(2515),
			M = n(12),
			O = n(2514),
			k = n(5),
			T = n(1211);

		function A(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var U, P = t.AsmPlayerView = function(e) {
			function t() {
				return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t),
					function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, i.default.View), o(t, [{
				key: "initialize",
				value: function(e) {
					(0, R.register)(), (0, _.initAsmEventBus)("AsmEventBus");
					try {
						void 0 === PannerNode.prototype.setVelocity && (window.PannerNode.prototype.setVelocity = function() {})
					} catch (e) {
						console.error(e)
					}
					try {
						void 0 === AudioListener.prototype.setVelocity && (AudioListener.prototype.setVelocity = function() {})
					} catch (e) {
						console.error(e)
					}
					var t = e.asmOptions;
					this.manifest = t.manifest, this.email = t.email, this.machineName = t.machineName, this.displayItem = t.displayItem, this.asmConfig = t.asmConfig, this.autoStart = t.autoStart, this.previewImage = t.previewImage, this.shareLink = this.asmConfig.shareLink || (0, k.getTopMostUrl)(), this.humanName = this.displayItem["human-name"], this.allowAutoDownload = t.allowAutoDownload, this.cloudMountPoint = this.asmConfig.cloudMountPoint || "user_data", this.showNewThings = t.showNewThings, this.skipSetAspectRatio = this.asmConfig.skipSetAspectRatio || !1, this.canAccessParent = null !== (0, k.getEnclosingIframe)(), this.staticURL = e.staticURL || "", S.asmUserSettingsModelInstance.on("change", this.onUserSettingsChanged), this.bindleAnimator = null, this.started = !1, this.fullScreenCanvasOnly = !0, this.asleep = !1, this.isDemoExpired = !1;
					var n = t.asmConfig ? t.asmConfig : {};
					(w.asmSettingsModelInstance.set({
						asmConfig: n
					}), a.default.bindAll(this, ["load", "onLoadComplete", "onLoadError", "onGameStarted", "onDemoExpired", "getDatabaseSize", "requestResize", "fullScreenChange", "goToSleep", "wakeUp", "setStatus"]), window.AsmEventBus.once("loadComplete", this.onLoadComplete), window.AsmEventBus.once("gameStarted", this.onGameStarted), window.AsmEventBus.on("goToSleep", this.goToSleep), window.AsmEventBus.on("wakeUp", this.wakeUp), document.addEventListener("fullscreenchange", this.fullScreenChange, !1), document.addEventListener("mozfullscreenchange", this.fullScreenChange, !1), document.addEventListener("webkitfullscreenchange", this.fullScreenChange, !1), document.addEventListener("MSFullscreenChange", this.fullScreenChange, !1), this.asmFileRequest = null, this.startDeadMansSwitch(), this.render(), (0, u.sendMessage)({
						action: "iframeReady"
					}), (0, u.isBrowserBrandSupported)() ? (0, u.isBrowserVersionSupported)() ? this.autoDownload && this.load() : this.showModal(h.AsmOutOfDateModal) : this.showModal(g.AsmUnsupportedModal), (0, r.default)(window).resize(this.requestResize), this.asmConfig.screenshotDisabled) || document.getElementsByTagName("canvas")[0].getContext("webgl", {
						preserveDrawingBuffer: !0
					})
				}
			}, {
				key: "isCloudSyncAvailable",
				value: function() {
					return this.email && !w.asmSettingsModelInstance.get("demoMode")
				}
			}, {
				key: "showModal",
				value: function(e, t, n) {
					var o = new e;
					"function" == typeof t && (o.onRender = t), "function" == typeof n && (o.beforeCancel = n), this.$(".modal-holder").html(o.render().el), o.update()
				}
			}, {
				key: "showScreenshotDialog",
				value: function() {
					var e = this;
					this.showModal(m.AsmScreenshotModal, function() {
						e.goToSleep()
					}, function() {
						e.wakeUp()
					})
				}
			}, {
				key: "onScreenshot",
				value: function() {
					b.asmSharingModelInstance.set({
						pendingImage: !0
					});
					var e = (0, r.default)("<canvas>").css({
							background: "black"
						})[0],
						t = this.canvas.width,
						n = this.canvas.height;
					e.width = t, e.height = n;
					var o = e.getContext("2d");
					o.fillStyle = "black", o.fillRect(0, 0, t, n), o.drawImage(this.canvas, 0, 0);
					var i = e.toDataURL("image/jpeg");
					(0, O.uploadDataUrl)(i, function(e) {
						var t = b.asmSharingModelInstance.get("imgurIds");
						t.push(e.data.id), b.asmSharingModelInstance.set({
							pendingImage: !1,
							imgurIds: t
						})
					}, function() {
						alert("There was an error uploading your image :(")
					})
				}
			}, {
				key: "openTweet",
				value: function() {
					var e = this.displayItem["human-name"] || "this game";
					(0, T.tweet)("Checkout " + e, this.shareLink)
				}
			}, {
				key: "openFacebook",
				value: function() {
					(0, T.facebookShare)(this.shareLink)
				}
			}, {
				key: "setProgress",
				value: function(e) {
					this.$progress.show(), this.$progressBar.find(".progress-done").css("width", e + "%")
				}
			}, {
				key: "getDatabaseSize",
				value: function(e) {
					var t = this,
						n = 0;
					if (window.indexedDB) {
						if (!this.alreadyCalculating) {
							this.alreadyCalculating = !0;
							var o = window.indexedDB.open(this.DB_NAME);
							o.onerror = function(e) {
								console.error(e)
							}, o.onsuccess = function(o) {
								for (var i = o.target.result, r = i.objectStoreNames, a = 0, s = 0; s < r.length; s++) {
									var l = r[s];
									i.transaction(l).objectStore(l).openCursor().onsuccess = function(o) {
										var i = o.target.result;
										i ? (i.value.byteLength && (n += i.value.byteLength), i.continue()) : "function" == typeof e && (a += 1) == r.length && (t.alreadyCalculating = !1, e(n))
									}
								}
							}
						}
					} else console.error("no indexedDB")
				}
			}, {
				key: "onClearDatabase",
				value: function() {
					window.indexedDB && window.indexedDB.deleteDatabase(this.DB_NAME), this.showModal(c.AsmClearedModal)
				}
			}, {
				key: "setStatus",
				value: function(e) {
					if (!this.isDemoExpired && (window.Module.setStatus.last || (window.Module.setStatus.last = {
							time: Date.now(),
							text: ""
						}), e !== window.Module.setStatus.text)) {
						var t = e.match(/([^(]+)\((\d+(\.\d+)?)\/(\d+)\)/);
						if (t) {
							this.$statusTextElement.text(t[1] + (0, k.humanFileSize)(t[2]));
							var n = Math.min(100, 100 * parseInt(t[2], 10) / parseInt(t[4], 10));
							(0, u.sendMessage)({
								action: "progress",
								machineName: this.machineName,
								progress: n
							}), this.setProgress(n)
						} else this.$statusTextElement.text(e)
					}
				}
			}, {
				key: "onDemoExpired",
				value: function() {
					this.isDemoExpired = !0, this.goToSleep(), this.exitFullscreen();
					var e = this.asmConfig.demoOverImage;
					e ? this.$(".modal-holder").html(a.default.template(C.default)({
						demoOverImage: e,
						staticURL: this.staticURL
					})) : this.showModal(d.AsmDemoExpiredModal)
				}
			}, {
				key: "load",
				value: function(e) {
					var t = this;
					this.loading = !0, window.Module = (0, l.initAsmModule)(this), this.$(".js-load").hide(), this.$(".js-start").hide(), this.$progress.show(), this.bindleAnimator.start(), this.asmFileRequest = new XMLHttpRequest, this.asmFileRequest.onprogress = function(e) {
						var n = e.loaded,
							o = e.total;
						n && o ? t.setStatus("Loading " + t.displayItem["human-name"] + ": (" + e.loaded + "/" + e.total + ")") : t.setStatus("Loading " + t.displayItem["human-name"])
					}, this.asmFileRequest.onload = function() {
						var e = t.asmFileRequest.response,
							n = new Blob([e]),
							o = document.createElement("script");
						o.src = URL.createObjectURL(n), document.body.appendChild(o), t.requestResize(), t.asmFileRequest.onload = function() {}, t.asmFileRequest.onprogress = function() {}, t.asmFileRequest = null
					}, this.asmFileRequest.addEventListener("error", this.onLoadError, !1), this.asmFileRequest.open("GET", this.manifest.asmFile), this.asmFileRequest.send()
				}
			}, {
				key: "onLoadError",
				value: function() {
					this.showModal(f.AsmErrorModal)
				}
			}, {
				key: "goToSleep",
				value: function() {
					this.asleep || (this.asleep = !0, void 0 !== window.Module && "function" == typeof window.Module.pauseMainLoop && window.Module.pauseMainLoop(), this.setVolume(0))
				}
			}, {
				key: "wakeUp",
				value: function() {
					if (this.asleep) {
						this.asleep = !1;
						try {
							window.Module.resumeMainLoop()
						} catch (e) {
							console.error(e)
						}
						this.setVolume(S.asmUserSettingsModelInstance.get("desiredVolume")), this.requestResize()
					}
				}
			}, {
				key: "requestResize",
				value: function(e) {
					var t = this,
						n = this.$("canvas"),
						o = n.width(),
						i = n.height(),
						r = this.$aspectRatio.width();
					(0, u.isFullScreen)() ? (this.$canvas.css("transform", "none"), this.$canvas.css("margin", "0")) : this.prevCanvasHeight === i && this.prevCanvasWidth === o && this.prevWindowWidth === r || setTimeout(function() {
						var e = t.$canvas.width(),
							o = t.$canvas.height(),
							i = t.$aspectRatio.width() / e,
							r = t.$aspectRatio.outerHeight() / o,
							a = Math.min(i, r),
							s = (1 - a) * o / 2,
							l = (1 - a) * e / 2,
							c = (0, k.getEnclosingIframe)();
						c && (c.height = t.$el.height()), a < .5 && t.started && !S.asmUserSettingsModelInstance.get("hideFullscreenRec") && !(0, u.isFullScreen)() && t.showModal(p.AsmRecommendFullscreenModal), n.css("transform", "scale(" + a + ", " + a + ")"), n.css("margin", -s + "px " + -l + "px")
					}, 500), this.prevCanvasWidth = o, this.prevCanvasHeight = i, this.prevWindowWidth = r
				}
			}, {
				key: "onSettingsClicked",
				value: function() {
					this.showModal(v.AsmSettingsModal);
					this.getDatabaseSize(function(e) {
						S.asmUserSettingsModelInstance.set({
							spaceUsed: (0, k.humanFileSize)(e)
						})
					})
				}
			}, {
				key: "onShareClicked",
				value: function() {
					b.asmSharingModelInstance.set({
						link: this.shareLink,
						humanName: this.humanName
					}), this.showModal(y.AsmShareModal)
				}
			}, {
				key: "onMuteClicked",
				value: function() {
					S.asmUserSettingsModelInstance.set({
						desiredVolume: 0
					}), this.setVolume(0)
				}
			}, {
				key: "onUnMuteClicked",
				value: function() {
					S.asmUserSettingsModelInstance.set({
						desiredVolume: 1
					}), this.setVolume(1)
				}
			}, {
				key: "setVolume",
				value: function(e) {
					this.asleep ? e = 0 : void 0 === e && (e = S.asmUserSettingsModelInstance.get("desiredVolume")), e > 0 ? (this.$(".mute").show(), this.$(".unmute").hide()) : (this.$(".mute").hide(), this.$(".unmute").show()), void 0 !== window.Module && window.Module.setPlayerVolume(e)
				}
			}, {
				key: "onLoadComplete",
				value: function() {
					this.bindleAnimator.stop(), this.autoStart ? this.start() : this.autoDownload ? this.$(".js-start").show() : this.start(), (0, M.logGtmEvent)(!1, {
						event: "asm.js player interaction",
						details: {
							action: "Loading Finished",
							product: this.machineName,
							isLegacyEvent: !0
						}
					})
				}
			}, {
				key: "onLogInClicked",
				value: function() {
					(0, u.sendMessage)({
						action: "logIn"
					})
				}
			}, {
				key: "onContributeClicked",
				value: function() {
					this.canAccessParent ? (0, u.sendMessage)({
						action: "scrollTo",
						selector: "[name=contribute]"
					}) : this.requestNavigation("https://www.humblebundle.com", "_blank")
				}
			}, {
				key: "start",
				value: function() {
					this.started = !0, window.removeRunDependency("DONT_START")
				}
			}, {
				key: "render",
				value: function() {
					var e = {
						autoDownload: this.autoDownload,
						allowAutoDownload: this.allowAutoDownload,
						hideFullscreenRec: this.hideFullscreenRec,
						displayItem: this.displayItem,
						previewImage: this.previewImage,
						showNewThings: this.showNewThings,
						asmConfig: w.asmSettingsModelInstance.get("asmConfig"),
						email: this.email,
						volume: this.desiredVolume,
						showVolumeControls: 0 !== this.machineName.indexOf("voxatron") && 0 !== this.machineName.indexOf("aaaaaa"),
						asmPlayer: this
					};
					return this.$el.html(a.default.template(E.default)(e)), this.autoDownload ? this.$(".js-start").show() : this.$(".js-load").show(), this.$aspectRatio = (0, r.default)(".js-aspect-ratio"), this.$canvas = this.$("canvas"), this.canvas = this.$canvas[0], this.$canvas.css({
						height: this.$aspectRatio.height(),
						width: this.$aspectRatio.width()
					}), this.$progress = this.$(".progress"), this.$progressBar = this.$(".progress-bar"), this.$statusTextElement = this.$(".status"), this.bindleAnimator = new s.AsmBindleAnimator(this.$(".loading-bindle"), 40), this.setVolume(), this.requestResize(), this
				}
			}, {
				key: "onFocusGame",
				value: function() {
					this.$(".key-capture").focus(), this.canAccessParent && (0, u.sendMessage)({
						action: "focusIframe",
						machineName: this.machineName
					})
				}
			}, {
				key: "lockPointer",
				value: function() {
					this.canvas.requestPointerLock()
				}
			}, {
				key: "updateBrowser",
				value: function() {
					var e = (0, u.getBrowser)();
					"Chrome" === e || "Chromium" === e ? this.requestNavigation("https://www.google.com/chrome", "_blank") : this.requestNavigation("https://www.getfirefox.com", "_blank")
				}
			}, {
				key: "getSupportedBrowser",
				value: function(e) {
					this.requestNavigation((0, r.default)(e.target).data("url"), "_blank")
				}
			}, {
				key: "requestNavigation",
				value: function(e, t) {
					this.canAccessParent && window.top.location !== window.location ? (0, u.sendMessage)({
						action: "navigate",
						location: e,
						target: t
					}) : t ? window.open(e, t) : window.location = e
				}
			}, {
				key: "fullScreenChange",
				value: function() {
					(0, u.isFullScreen)() ? ((0, r.default)(this.canvas).css("transform", "none"), (0, r.default)(this.canvas).css("margin", "0"), window.Browser.setFullScreenCanvasSize(), window.Browser.updateCanvasDimensions(this.canvas)) : (window.Browser.isFullScreen = !1, window.Browser.resizeCanvas = !0, window.Browser.lockPointer = !1, window.Browser.setWindowedCanvasSize(), window.Browser.updateCanvasDimensions(this.canvas), this.requestResize(), (0, u.sendMessage)({
						action: "scrollTo",
						selector: ".asm-frame"
					})), window.Module.onFullScreen && window.Module.onFullScreen(window.Browser.isFullScreen)
				}
			}, {
				key: "fullScreen",
				value: function() {
					var e = this;
					window.Browser.isFullScreen = !0, window.Browser.resizeCanvas = !0, window.Browser.lockPointer = !1, void 0 !== window.Module && window.Module.setPlayerFullscreen(!0) || (this.el.requestFullScreen = this.el.requestFullScreen || this.el.mozRequestFullScreen || this.el.msRequestFullscreen || (this.el.webkitRequestFullScreen ? function() {
						e.el.webkitRequestFullScreen(!0)
					} : null), this.el.requestFullScreen())
				}
			}, {
				key: "userRequestsFullscreen",
				value: function() {
					if (!this.$(".js-full-screen").hasClass("disabled"))
						if (this.fullScreenCanvasOnly) {
							if (void 0 !== window.Module)
								if (0 === this.machineName.indexOf("aaaaaa")) {
									if (void 0 === window.JSEvents) return void console.error("Player not loaded yet.");
									var e = window.JSEvents.canPerformEventHandlerRequests;
									window.JSEvents.canPerformEventHandlerRequests = function() {
										return 1
									}, window.Module.cwrap("SetFullscreen", "void", ["number"])(!0), window.JSEvents.canPerformEventHandlerRequests = e
								} else window.Module.requestFullScreen(!1)
						} else this.started ? this.fullScreen() : (window.Browser.resizeCanvas = !1, window.Browser.lockPointer = !0, (this.el.requestFullScreen || this.el.mozRequestFullScreen || this.el.msRequestFullscreen || this.el.webkitRequestFullScreen)())
				}
			}, {
				key: "exitFullscreen",
				value: function() {
					document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
				}
			}, {
				key: "startDeadMansSwitch",
				value: function() {
					var e = this,
						t = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame;
					clearTimeout(this.deadMansSwitch);
					t(function n() {
						e.canAccessParent ? "none" !== (0, r.default)((0, k.getEnclosingIframe)()).css("display") && (e.isDemoExpired || void 0 === e.wakeUp || e.wakeUp()) : e.wakeUp(), clearTimeout(e.deadMansSwitch), e.deadMansSwitch = setTimeout(function() {
							e.goToSleep()
						}, 1e3), setTimeout(function() {
							t(n, document.body)
						}, 500)
					}, document.body)
				}
			}]), t
		}();
		P.prototype.className = "asm-player", P.prototype.DB_NAME = "EM_PRELOAD_CACHE", P.prototype.events = {
			"click .js-cancel": "cancel",
			"click .js-start": "start",
			"click .js-mute": "onMuteClicked",
			"click .js-unmute": "onUnMuteClicked",
			"click .js-settings": "onSettingsClicked",
			"click .js-screenshot": "showScreenshotDialog",
			"click .js-take-screenshot": "onScreenshot",
			"click .js-share": "onShareClicked",
			"click .js-clear-database": "onClearDatabase",
			"click .js-load": "load",
			"click .js-update-browser": "updateBrowser",
			"click .js-get-supported-browser": "getSupportedBrowser",
			"click .js-log-in": "onLogInClicked",
			"click .js-contribute": "onContributeClicked",
			"click .js-twitter-share": "openTweet",
			"click .js-facebook-share": "openFacebook",
			"click .js-game-click-target": "onFocusGame"
		}, P.prototype.onGameStarted = (U = void 0, function() {
			var e = this,
				t = (0, r.default)(this.canvas);
			t.css({
				"background-image": ""
			}), t.removeClass("custom-background"), t.addClass("started"), (0, u.sendMessage)({
				action: "gameStarted"
			}), this.$(".cover").hide(), this.$(".js-full-screen").removeClass("disabled");
			var n = setInterval(function() {
				void 0 !== window.AL && window.AL.contexts.length > 0 && (e.asleep && e.goToSleep(), e.setVolume(), clearInterval(n))
			}, 200);
			(0, M.logGtmEvent)(!1, {
				event: "asm.js player interaction",
				details: {
					action: "Game Started",
					product: this.machineName,
					isLegacyEvent: !0
				}
			});
			var o = Number(new Date);
			void 0 !== U && (clearInterval(U), U = void 0), U = setInterval(function() {
				var t = Math.round((Number(new Date) - o) / 1e3);
				(t <= 60 && t % 10 == 0 || t <= 600 && t % 60 == 0 || t % 300 == 0) && (0, M.logGtmEvent)(!1, {
					event: "asm.js player interaction",
					details: {
						action: "Gameplay Tick",
						product: e.machineName,
						secondsSinceStart: t,
						isLegacyEvent: !0
					}
				})
			}, 1e3)
		})
	},
	2541: function(e, t, n) {
		"use strict";
		var o, i = n(1),
			r = (o = i) && o.__esModule ? o : {
				default: o
			},
			a = n(2540),
			s = n(21);
		(0, r.default)(document).ready(function() {
			var e, t = (0, s.extractWebpackJsonData)("#webpack-asm-player-data");
			t.el = ".asm-player", e = t, window.asmPlayer = new a.AsmPlayerView(e)
		})
	},
	2542: function(e, t, n) {
		n(19), e.exports = n(2541)
	},
	28: function(e, t, n) {
		var o, i, r;
		(function() {
			var a = function(e, t) {
					return function() {
						return e.apply(t, arguments)
					}
				},
				s = {}.hasOwnProperty,
				l = [].indexOf || function(e) {
					for (var t = 0, n = this.length; t < n; t++)
						if (t in this && this[t] === e) return t;
					return -1
				};
			i = [n(0), n(2), t], void 0 === (r = "function" == typeof(o = function(e, t, n) {
				return n = function(n) {
					function o() {
						this.triggerCancel = a(this.triggerCancel, this), this.triggerSubmit = a(this.triggerSubmit, this), this.triggerView = a(this.triggerView, this), this.clickOutsideElement = a(this.clickOutsideElement, this), this.clickOutside = a(this.clickOutside, this), this.checkKey = a(this.checkKey, this), this.rendererCompleted = a(this.rendererCompleted, this), this.args = Array.prototype.slice.apply(arguments), t.View.prototype.constructor.apply(this, this.args), this.setUIElements()
					}
					return function(e, t) {
						for (var n in t) s.call(t, n) && (e[n] = t[n]);

						function o() {
							this.constructor = e
						}
						o.prototype = t.prototype, e.prototype = new o, e.__super__ = t.prototype
					}(o, t.View), o.prototype.prefix = "bbm", o.prototype.animate = !0, o.prototype.keyControl = !0, o.prototype.showViewOnRender = !0, o.prototype.render = function(n) {
						var o, i;
						return o = this.serializeData(), n && !e.isEmpty(n) || (n = 0), this.$el.addClass(this.prefix + "-wrapper"), this.modalEl = t.$("<div />").addClass(this.prefix + "-modal"), this.template && this.modalEl.html(this.buildTemplate(this.template, o)), this.$el.html(this.modalEl), this.viewContainer ? (this.viewContainerEl = this.modalEl.find(this.viewContainer), this.viewContainerEl.addClass(this.prefix + "-modal__views")) : this.viewContainerEl = this.modalEl, t.$(":focus").blur(), (null != (i = this.views) ? i.length : void 0) > 0 && this.showViewOnRender && this.openAt(n), "function" == typeof this.onRender && this.onRender(), this.delegateModalEvents(), this.$el.fadeIn && this.animate ? (this.modalEl.css({
							opacity: 0
						}), this.$el.fadeIn({
							duration: 100,
							complete: this.rendererCompleted
						})) : this.rendererCompleted(), this
					}, o.prototype.rendererCompleted = function() {
						var e;
						return this.keyControl && (t.$("body").on("keyup.bbm", this.checkKey), this.$el.on("mouseup.bbm", this.clickOutsideElement), this.$el.on("click.bbm", this.clickOutside)), this.modalEl.css({
							opacity: 1
						}).addClass(this.prefix + "-modal--open"), "function" == typeof this.onShow && this.onShow(), null != (e = this.currentView) && "function" == typeof e.onShow ? e.onShow() : void 0
					}, o.prototype.setUIElements = function() {
						var t;
						if (this.template = this.getOption("template"), this.views = this.getOption("views"), null != (t = this.views) && (t.length = e.size(this.views)), this.viewContainer = this.getOption("viewContainer"), this.animate = this.getOption("animate"), e.isUndefined(this.template) && e.isUndefined(this.views)) throw new Error("No template or views defined for Backbone.Modal");
						if (this.template && this.views && e.isUndefined(this.viewContainer)) throw new Error("No viewContainer defined for Backbone.Modal")
					}, o.prototype.getOption = function(e) {
						if (e) return this.options && l.call(this.options, e) >= 0 && null != this.options[e] ? this.options[e] : this[e]
					}, o.prototype.serializeData = function() {
						var t;
						return t = {}, this.model && (t = e.extend(t, this.model.toJSON())), this.collection && (t = e.extend(t, {
							items: this.collection.toJSON()
						})), t
					}, o.prototype.delegateModalEvents = function() {
						var t, n, o, i, r, a, s;
						for (n in this.undelegateModalEvents(), this.active = !0, t = this.getOption("cancelEl"), (r = this.getOption("submitEl")) && this.$el.on("click", r, this.triggerSubmit), t && this.$el.on("click", t, this.triggerCancel), s = [], this.views) e.isString(n) && "length" !== n ? (a = (o = n.match(/^(\S+)\s*(.*)$/))[1], i = o[2], s.push(this.$el.on(a, i, this.views[n], this.triggerView))) : s.push(void 0);
						return s
					}, o.prototype.undelegateModalEvents = function() {
						var t, n, o, i, r, a, s;
						for (n in this.active = !1, t = this.getOption("cancelEl"), (r = this.getOption("submitEl")) && this.$el.off("click", r, this.triggerSubmit), t && this.$el.off("click", t, this.triggerCancel), s = [], this.views) e.isString(n) && "length" !== n ? (a = (o = n.match(/^(\S+)\s*(.*)$/))[1], i = o[2], s.push(this.$el.off(a, i, this.views[n], this.triggerView))) : s.push(void 0);
						return s
					}, o.prototype.checkKey = function(e) {
						if (this.active) switch (e.keyCode) {
							case 27:
								return this.triggerCancel(e);
							case 13:
								return this.triggerSubmit(e)
						}
					}, o.prototype.clickOutside = function(e) {
						var t;
						if ((null != (t = this.outsideElement) ? t.hasClass(this.prefix + "-wrapper") : void 0) && this.active) return this.triggerCancel()
					}, o.prototype.clickOutsideElement = function(e) {
						return this.outsideElement = t.$(e.target)
					}, o.prototype.buildTemplate = function(n, o) {
						return ("function" == typeof n ? n : e.template(t.$(n).html()))(o)
					}, o.prototype.buildView = function(n, o) {
						var i;
						if (n) return o && e.isFunction(o) && (o = o()), e.isFunction(n) ? (i = new n(o || this.args[0])) instanceof t.View ? {
							el: i.render().$el,
							view: i
						} : {
							el: n(o || this.args[0])
						} : {
							view: n,
							el: n.$el
						}
					}, o.prototype.triggerView = function(t) {
						var n, o, i, r, a, s, l;
						if (null != t && "function" == typeof t.preventDefault && t.preventDefault(), r = t.data, o = this.buildView(r.view, r.viewOptions), this.currentView && (this.previousView = this.currentView, !(null != (l = r.openOptions) ? l.skipSubmit : void 0))) {
							if (!1 === ("function" == typeof(a = this.previousView).beforeSubmit ? a.beforeSubmit(t) : void 0)) return;
							"function" == typeof(s = this.previousView).submit && s.submit()
						}
						for (i in this.currentView = o.view || o.el, n = 0, this.views) r.view === this.views[i].view && (this.currentIndex = n), n++;
						return r.onActive && (e.isFunction(r.onActive) ? r.onActive(this) : e.isString(r.onActive) && this[r.onActive].call(this, r)), this.shouldAnimate ? this.animateToView(o.el) : (this.shouldAnimate = !0, this.$(this.viewContainerEl).html(o.el))
					}, o.prototype.animateToView = function(e) {
						var n, o, i, r, a, s, l, u;
						return r = {
							position: "relative",
							top: -9999,
							left: -9999
						}, (a = t.$("<tester/>").css(r)).html(this.$el.clone().css(r)), 0 !== t.$("tester").length ? t.$("tester").replaceWith(a) : t.$("body").append(a), (n = this.viewContainer ? a.find(this.viewContainer) : a.find("." + this.prefix + "-modal")).removeAttr("style"), i = n.outerHeight(), n.html(e), i === (o = n.outerHeight()) ? (this.$(this.viewContainerEl).html(e), "function" == typeof(s = this.currentView).onShow && s.onShow(), null != (l = this.previousView) && "function" == typeof l.destroy ? l.destroy() : void 0) : this.animate ? (this.$(this.viewContainerEl).css({
							opacity: 0
						}), this.$(this.viewContainerEl).animate({
							height: o
						}, 100, (u = this, function() {
							var t, n;
							return u.$(u.viewContainerEl).css({
								opacity: 1
							}).removeAttr("style"), u.$(u.viewContainerEl).html(e), "function" == typeof(t = u.currentView).onShow && t.onShow(), null != (n = u.previousView) && "function" == typeof n.destroy ? n.destroy() : void 0
						}))) : this.$(this.viewContainerEl).css({
							height: o
						}).html(e)
					}, o.prototype.triggerSubmit = function(e) {
						var n, o;
						if (null != e && e.preventDefault(), !t.$(e.target).is("textarea") && !(this.beforeSubmit && !1 === this.beforeSubmit(e) || this.currentView && this.currentView.beforeSubmit && !1 === this.currentView.beforeSubmit(e))) {
							if (!this.submit && !(null != (n = this.currentView) ? n.submit : void 0) && !this.getOption("submitEl")) return this.triggerCancel();
							if (null != (o = this.currentView) && "function" == typeof o.submit && o.submit(), "function" == typeof this.submit && this.submit(), !this.handleAjax) return this.regionEnabled ? this.trigger("modal:destroy") : this.destroy()
						}
					}, o.prototype.triggerCancel = function(e) {
						if (null != e && e.preventDefault(), !this.beforeCancel || !1 !== this.beforeCancel()) return "function" == typeof this.cancel && this.cancel(), this.regionEnabled ? this.trigger("modal:destroy") : this.destroy()
					}, o.prototype.destroy = function() {
						var n, o;
						return t.$("body").off("keyup.bbm", this.checkKey), this.$el.off("mouseup.bbm", this.clickOutsideElement), this.$el.off("click.bbm", this.clickOutside), t.$("tester").remove(), "function" == typeof this.onDestroy && this.onDestroy(), this.shouldAnimate = !1, this.modalEl.addClass(this.prefix + "-modal--destroy"), o = this, n = function() {
							var e;
							return null != (e = o.currentView) && "function" == typeof e.remove && e.remove(), o.remove()
						}, this.$el.fadeOut && this.animate ? (this.$el.fadeOut({
							duration: 200
						}), e.delay(function() {
							return n()
						}, 200)) : n()
					}, o.prototype.openAt = function(t) {
						var n, o, i, r, a;
						for (r in e.isNumber(t) ? n = t : e.isNumber(t._index) && (n = t._index), i = 0, this.views)
							if ("length" !== r)
								if (e.isNumber(n)) i === n && (a = this.views[r]), i++;
								else if (e.isObject(t))
							for (o in this.views[r]) t[o] === this.views[r][o] && (a = this.views[r]);
						return a && (this.currentIndex = e.indexOf(this.views, a), this.triggerView({
							data: e.extend(a, {
								openOptions: t
							})
						})), this
					}, o.prototype.next = function(t) {
						if (null == t && (t = {}), this.currentIndex + 1 < this.views.length) return this.openAt(e.extend(t, {
							_index: this.currentIndex + 1
						}))
					}, o.prototype.previous = function(t) {
						if (null == t && (t = {}), this.currentIndex - 1 < this.views.length - 1) return this.openAt(e.extend(t, {
							_index: this.currentIndex - 1
						}))
					}, o
				}(), t.Modal = n, t.Modal
			}) ? o.apply(t, i) : o) || (e.exports = r)
		}).call(this)
	},
	29: function(e, t, n) {
		var o, i, r;
		i = [t], void 0 === (r = "function" == typeof(o = function(e) {
			"use strict";

			function t(e) {
				if (Array.isArray(e)) {
					for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
					return n
				}
				return Array.from(e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var n = !1;
			if ("undefined" != typeof window) {
				var o = {
					get passive() {
						n = !0
					}
				};
				window.addEventListener("testPassive", null, o), window.removeEventListener("testPassive", null, o)
			}
			var i = "undefined" != typeof window && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform),
				r = [],
				a = !1,
				s = -1,
				l = void 0,
				u = void 0,
				c = function(e) {
					return r.some(function(t) {
						return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e))
					})
				},
				d = function(e) {
					var t = e || window.event;
					return !!c(t.target) || 1 < t.touches.length || (t.preventDefault && t.preventDefault(), !1)
				},
				f = function() {
					setTimeout(function() {
						void 0 !== u && (document.body.style.paddingRight = u, u = void 0), void 0 !== l && (document.body.style.overflow = l, l = void 0)
					})
				};
			e.disableBodyScroll = function(e, o) {
				if (i) {
					if (!e) return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
					if (e && !r.some(function(t) {
							return t.targetElement === e
						})) {
						var f = {
							targetElement: e,
							options: o || {}
						};
						r = [].concat(t(r), [f]), e.ontouchstart = function(e) {
							1 === e.targetTouches.length && (s = e.targetTouches[0].clientY)
						}, e.ontouchmove = function(t) {
							var n, o, i, r;
							1 === t.targetTouches.length && (o = e, r = (n = t).targetTouches[0].clientY - s, !c(n.target) && (o && 0 === o.scrollTop && 0 < r ? d(n) : (i = o) && i.scrollHeight - i.scrollTop <= i.clientHeight && r < 0 ? d(n) : n.stopPropagation()))
						}, a || (document.addEventListener("touchmove", d, n ? {
							passive: !1
						} : void 0), a = !0)
					}
				} else {
					p = o, setTimeout(function() {
						if (void 0 === u) {
							var e = !!p && !0 === p.reserveScrollBarGap,
								t = window.innerWidth - document.documentElement.clientWidth;
							e && 0 < t && (u = document.body.style.paddingRight, document.body.style.paddingRight = t + "px")
						}
						void 0 === l && (l = document.body.style.overflow, document.body.style.overflow = "hidden")
					});
					var h = {
						targetElement: e,
						options: o || {}
					};
					r = [].concat(t(r), [h])
				}
				var p
			}, e.clearAllBodyScrollLocks = function() {
				i ? (r.forEach(function(e) {
					e.targetElement.ontouchstart = null, e.targetElement.ontouchmove = null
				}), a && (document.removeEventListener("touchmove", d, n ? {
					passive: !1
				} : void 0), a = !1), r = [], s = -1) : (f(), r = [])
			}, e.enableBodyScroll = function(e) {
				if (i) {
					if (!e) return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
					e.ontouchstart = null, e.ontouchmove = null, r = r.filter(function(t) {
						return t.targetElement !== e
					}), a && 0 === r.length && (document.removeEventListener("touchmove", d, n ? {
						passive: !1
					} : void 0), a = !1)
				} else 1 === r.length && r[0].targetElement === e ? (f(), r = []) : r = r.filter(function(t) {
					return t.targetElement !== e
				})
			}
		}) ? o.apply(t, i) : o) || (e.exports = r)
	},
	4: function(e, t) {
		e.exports = Decimal
	},
	5: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.hashObject = t.browserCanUsePositionSticky = t.toTitleCase = t.applyInfieldLabels = t.queryToHash = t.warnBeforeClosing = t.forceRedraw = t.preventPageReload = t.preloadBackgroundImageWithDefault = t.replaceAllInString = t.logoutUser = t.setGotoAndRedirect = t.redirectInDomain = t.isRetinaDisplay = t.randomString = t.serializeToJson = t.isDebugUnsafe = t.isDefaultVersion = t.selectText = t.initJQueryPlugin = t.getQueryParam = t.updateQueryString = t.makeQueryString = t.isHumbleUrl = t.getHostName = t.isIE11 = t.parseUrl = t.saveAs = t.loadFromLocalStorage = t.getTopMostUrl = t.getEnclosingIframe = t.renderTimeRemainingUntil = t.zeroPad = t.allCombination = t.kCombination = t.humanFileSize = t.getSessionStorage = t.getLocalStorage = t.asyncJs = t.isValidUrl = t.isValidEmail = t.twitterLinkify = t.stripJsonPrefix = t.listToEnglishStr = t.clamp = t.roundDecimalToMoneyAmount = t.unformatMoney = t.formatMoney = void 0;
		var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			},
			i = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var o = t[n];
						o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
					}
				}
				return function(t, n, o) {
					return n && e(t.prototype, n), o && e(t, o), t
				}
			}(),
			r = f(n(1)),
			a = f(n(0)),
			s = f(n(23)),
			l = n(10),
			u = f(n(4));
		n(24);
		var c = n(9),
			d = n(8);

		function f(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		t.formatMoney = function(e, t, n, o, i) {
			var r = {
					delimiters: {
						thousands: ",",
						decimal: "."
					},
					abbreviations: {
						thousand: "k",
						million: "m",
						billion: "b",
						trillion: "t"
					}
				},
				c = !0,
				d = !1,
				f = void 0;
			try {
				for (var h, p = l.CURRENCY_CONSTANTS.SUPPORTED_CURRENCIES[Symbol.iterator](); !(c = (h = p.next()).done); c = !0) {
					var m = h.value,
						v = a.default.extend({}, r);
					v.currency = {
						symbol: l.CURRENCY_CONSTANTS.CURRENCY_SYMBOLS[m]
					}, ["EUR", "RUB", "TRY"].includes(m) && (v = a.default.extend({}, v, {
						delimiters: {
							thousands: "",
							decimal: ","
						}
					})), s.default.language(m, v)
				}
			} catch (e) {
				d = !0, f = e
			} finally {
				try {
					!c && p.return && p.return()
				} finally {
					if (d) throw f
				}
			}
			if (Array.isArray(e)) throw "formatMoney: `amount` argument cannot be an array";
			"RUB" === t && void 0 === n && (n = !0);
			var y = "",
				g = i ? "$0,0[.]00" : "$0,0.00";
			return g = n ? "$0,0" : g, "USD" === t ? (s.default.language("en"), o && (y = " USD")) : l.CURRENCY_CONSTANTS.SUPPORTED_CURRENCIES.includes(t) ? s.default.language(t) : s.default.language("en"), e instanceof u.default && (e = e.toFixed(2, u.default.ROUND_HALF_UP)), isNaN(e) && (e = 0), "" + (0, s.default)(e).format(g) + y
		}, t.unformatMoney = function(e) {
			(e = e.replace(/[^0-9.,]/gi, "")).match(/[0-9.,]*[,.][0-9]{2}/) && (e = e.lastIndexOf(".") > e.lastIndexOf(",") ? e.replace(",", "") : (e = e.replace(".", "")).replace(",", "."));
			return e.match(/^[0-9]*([,.][0-9]{0,2})?$/) ? e : 0
		}, t.roundDecimalToMoneyAmount = function(e) {
			return e.toFixed(2, u.default.ROUND_HALF_UP)
		}, t.clamp = function(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
				n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
			return void 0 != t && e < t ? t : void 0 != n && e > n ? n : e
		}, t.listToEnglishStr = function(e, t) {
			var n = e.slice();
			return t = t ? t + " " : "", n.length <= 2 ? n.join(" " + t) : (n[n.length - 1] = "" + t + n[n.length - 1], n.join(", "))
		}, t.stripJsonPrefix = function(e) {
			return e.substr("while(1);".length)
		}, t.twitterLinkify = function(e) {
			var t = e.text();
			if (t.match(/@\S/)) {
				e.html("");
				var n = t.split(" ");
				n.forEach(function(t, o) {
					if (0 === t.indexOf("@") && t.length > 1 && -1 === t.indexOf("@", 1)) {
						var i = (0, r.default)("<a>");
						i.text(t), i.attr("href", "https://www.twitter.com/" + t), i.attr("target", "_blank"), i.appendTo(e), o !== n.length - 1 && e.append(document.createTextNode(" "))
					} else {
						var a = t;
						o !== n.length - 1 && (a += " "), e.append(document.createTextNode(a))
					}
				})
			}
		}, t.isValidEmail = function(e) {
			if (!e || "" === e) return !1;
			if (e.length >= 500) return !1;
			var t = e.lastIndexOf("@");
			if (-1 === t) return !1;
			var n = e.substring(0, t).toLowerCase(),
				o = e.substring(t + 1).toLowerCase();
			return !!n.match(/^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*$/) && !!o.match(/^(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)
		}, t.isValidUrl = function(e) {
			return /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(e)
		}, t.asyncJs = function(e, t) {
			var n = function() {
				var n = r.default.ajax({
					dataType: "script",
					cache: !0,
					url: e
				});
				t && n.done(t)
			};
			"complete" === document.readyState ? n() : (0, r.default)(window).load(n)
		};
		var h = function() {
				function e(t) {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e), this._type = t;
					var n = "session" === t ? window.name : this._readCookie("localStorage");
					this._data = n ? JSON.parse(n) : {}, this.length = a.default.size(this._data)
				}
				return i(e, [{
					key: "clear",
					value: function() {
						this._data = {}, this.length = 0, "session" === this._type ? window.name = "" : this._createCookie("localStorage", "", 180)
					}
				}, {
					key: "getItem",
					value: function(e) {
						return void 0 === this._data[e] ? null : this._data[e]
					}
				}, {
					key: "key",
					value: function(e) {
						var t = 0;
						for (var n in this._data) {
							if (t === e) return n;
							t++
						}
						return null
					}
				}, {
					key: "removeItem",
					value: function(e) {
						delete this._data[e], this.length--, this._setData(this._data)
					}
				}, {
					key: "setItem",
					value: function(e, t) {
						this._data[e] = "" + t, this.length++, this._setData(this._data)
					}
				}, {
					key: "_createCookie",
					value: function(e, t, n) {
						var o = void 0,
							i = void 0;
						n ? ((o = new Date).setTime(o.getTime() + 24 * n * 60 * 60 * 1e3), i = "; expires=" + o.toGMTString()) : i = "", document.cookie = e + "=" + (t + i) + "; path=/"
					}
				}, {
					key: "_readCookie",
					value: function(e) {
						for (var t = e + "=", n = document.cookie.split(";"), o = void 0, i = 0; i < n.length; i++) {
							for (o = n[i];
								" " === o.charAt(0);) o = o.substring(1, o.length);
							if (0 === o.indexOf(t)) return o.substring(t.length, o.length)
						}
						return null
					}
				}, {
					key: "_setData",
					value: function(e) {
						e = JSON.stringify(e), "session" === this._type ? window.name = e : this._createCookie("localStorage", e, 180)
					}
				}]), e
			}(),
			p = function() {
				return new h("local")
			},
			m = function() {
				return new h("session")
			},
			v = t.getLocalStorage = function e() {
				if (void 0 === e.storage) {
					var t = void 0;
					try {
						t = void 0 !== window.localStorage && null !== window.localStorage && function(e) {
							if (void 0 === e) return !1;
							try {
								return e.setItem("storage", ""), e.getItem("storage"), e.removeItem("storage"), !0
							} catch (e) {
								return !1
							}
						}(window.localStorage) ? window.localStorage : p()
					} catch (e) {
						t = p()
					}
					e.storage = t
				}
				return e.storage
			},
			y = (t.getSessionStorage = function e() {
				if (void 0 === e.storage) {
					var t = void 0;
					try {
						t = void 0 !== window.sessionStorage && null !== window.sessionStorage && function(e) {
							if (void 0 === e) return !1;
							try {
								return e.setItem("storage", ""), e.getItem("storage"), e.removeItem("storage"), !0
							} catch (e) {
								return !1
							}
						}(window.sessionStorage) ? window.sessionStorage : m()
					} catch (e) {
						t = m()
					}
					e.storage = t
				}
				return e.storage
			}, t.humanFileSize = function(e, t) {
				void 0 === t && (t = 2);
				var n = Math.floor(Math.log(e) / Math.log(1024));
				return (e / Math.pow(1024, n)).toFixed(t) + " " + ["B", "KB", "MB", "GB", "TB"][n]
			}, t.kCombination = function e(t, n) {
				var o = [];
				if (n > t.length || n <= 0) return o;
				if (n === t.length) o.push(t);
				else if (1 === n)
					for (var i = 0; i < t.length; i++) o.push([t[i]]);
				else
					for (var r = 0; r < t.length - n + 1; r++)
						for (var a = t.slice(r, r + 1), s = e(t.slice(r + 1), n - 1), l = 0; l < s.length; l++) o.push(a.concat(s[l]));
				return o
			}),
			g = (t.allCombination = function(e) {
				for (var t = [], n = 1; n <= e.length; n++)
					for (var o = y(e, n), i = 0; i < o.length; i++) t.push(o[i]);
				return t
			}, t.zeroPad = function(e) {
				return 1 == String(e).length ? "0" + e : "" + e
			}),
			w = (t.renderTimeRemainingUntil = function(e) {
				var t = e - (new Date).getTime() / 1e3;
				t < 0 && (t = 0);
				var n = Math.floor(t / 86400),
					o = Math.floor(t / 3600) % 24,
					i = Math.floor(t / 60) % 60,
					r = Math.floor(t) % 60,
					a = "";
				return n > 0 && (a += g(n) + ":"), a += g(o) + ":", a += g(i) + ":", a += g(r)
			}, t.getEnclosingIframe = function() {
				var e = void 0;
				try {
					e = parent.document.getElementsByTagName("iframe")
				} catch (e) {
					return null
				}
				for (var t = 0; t < e.length; t++) {
					var n = e[t];
					if (n.contentWindow === window) return n
				}
			}, t.getTopMostUrl = function() {
				var e = window,
					t = window.document.referrer || window.location.href;
				try {
					for (; e !== e.parent;) t = (e = e.parent).document.referrer
				} catch (e) {}
				return t
			}, t.loadFromLocalStorage = function(e, t) {
				try {
					return JSON.parse(v()[e])
				} catch (e) {
					return t
				}
			}, t.saveAs = function(e, t) {
				var n = (0, r.default)("<a/>", {
					href: e,
					download: t
				});
				n.appendTo((0, r.default)("body")), n[0].click(), n.remove()
			}, t.parseUrl = function(e) {
				for (var t = [], n = [], o = [], i = t, r = 0; r < e.length; r++) {
					var a = e[r];
					"?" === a ? i = o : "#" === a ? i = n : i.push(a)
				}
				return o = o.join(""), {
					baseUrl: t.join(""),
					hash: n.join(""),
					queryString: o,
					queryParams: function(e) {
						if (!(e = e || "").trim()) return {};
						var t = {};
						return e.split("&").forEach(function(e) {
							var n = e.split("=");
							t[n[0]] = n[1] || null
						}), t
					}(o)
				}
			}),
			b = t.isIE11 = function() {
				return !!window.MSInputMethodContext && !!document.documentMode
			},
			S = t.getHostName = function(e) {
				var t = (0, d.getWindow)();
				if (b()) {
					var n = document.createElement("a");
					return n.href = e, n.hostname
				}
				return new t.URL(e, location).hostname
			},
			E = (t.isHumbleUrl = function(e) {
				var t = S(e);
				// return "localhost" === t || a.default.endsWith(t, "-dot-hr-humblebundle.appspot.com") || a.default.endsWith(t, ".humblebundle.com")
				return true;
			}, t.makeQueryString = function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				return r.default.param(e, t)
			}),
			C = (t.updateQueryString = function(e, t) {
				var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					o = w(t);
				a.default.forEach(e, function(e, t) {
					null == e && n ? delete o.queryParams[t] : o.queryParams[t] = e
				});
				var i = E(o.queryParams),
					r = o.baseUrl + "?" + i;
				return o.hash && (r += "#" + o.hash), r
			}, t.getQueryParam = function(e, t) {
				t = t || (0, d.getWindow)().location, e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
				var n, o = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t.search);
				return null === o ? "" : (n = o[1], decodeURIComponent(n.replace(/\+/g, " ")))
			}, t.initJQueryPlugin = function(e, t, n, o, i) {
				void 0 === n && (n = []), void 0 === o && (o = 100), i || (i = r.default.noop);
				var a = function() {
					var o = (0, r.default)(e);
					if (o.length) {
						try {
							o[t].apply(o, n), i()
						} catch (e) {
							console.error("Error during initialization of " + t + ": " + e.stack)
						}
						return !0
					}
					return !1
				};
				if (!a()) var s = setInterval(function() {
					a() && clearInterval(s)
				}, o)
			}, t.selectText = function(e) {
				var t = void 0;
				e instanceof r.default && (e = e[0]);
				var n = document;
				if (n.body.createTextRange)(t = n.body.createTextRange()).moveToElementText(e), t.select();
				else if (window.getSelection) {
					var o = window.getSelection();
					(t = n.createRange()).selectNodeContents(e), o.removeAllRanges(), o.addRange(t)
				}
			}, t.isDefaultVersion = function() {
				// return a.default.endsWith(window.location.hostname, ".humblebundle.com")
				return false;
			}, t.isDebugUnsafe = function() {
				// return a.default.includes(["localhost:8080", "127.0.0.1:8080", "localhost:8888", "127.0.0.1:8888"], window.location.host)
				return true;
			}, t.serializeToJson = function(e) {
				var t = {},
					n = e.serializeArray();
				for (var o in n) {
					var i = n[o];
					t[i.name] ? (t[i.name].push || (t[i.name] = [t[i.name]]), t[i.name].push(i.value || "")) : t[i.name] = i.value || ""
				}
				return t
			}, t.randomString = function(e) {
				return (Math.random() + 1).toString(36).substr(2, e)
			}, t.isRetinaDisplay = function() {
				return window.devicePixelRatio > 1
			}, t.redirectInDomain = function(e) {
				var t = document.createElement("a");
				t.href = window.location.origin + e;
				var n = function(e) {
					var t = e.indexOf(":");
					return -1 === t ? e : e.substring(0, t)
				};
				n(t.host) !== n(window.location.host) || -1 !== t.pathname.indexOf("//") ? window.location.href = "/" : window.location.href = t.href
			});
		t.setGotoAndRedirect = function(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
				n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
				o = (0, d.getWindow)(),
				i = e,
				r = t || o.location.pathname,
				s = encodeURIComponent(r);
			a.default.includes(e, "?") ? i += "&goto=" + s : i += "?goto=" + s;
			var l = "";
			(o.location.search && (l = o.location.search.substring(1), n && (l += "&")), n && (l += "reason=" + n), l) && (i += "&qs=" + encodeURIComponent(l));
			C(i)
		}, t.logoutUser = function() {
			var e = ((0, d.getWindow)().models || {
				user_json: {}
			}).user_json.logout_url;
			e || (console.error("No logout URL available"), e = "/logout?goto=/");
			var t = (0, r.default)("<form>", {
				action: e,
				method: "POST"
			});
			(0, r.default)("<input>").attr({
				type: "hidden",
				class: "csrftoken",
				name: c.csrfFormKey,
				value: (0, c.getCsrf)()
			}).appendTo(t), t.appendTo("body").submit()
		}, t.replaceAllInString = function(e, t, n) {
			return e.replace(new RegExp(t, "g"), n)
		}, t.preloadBackgroundImageWithDefault = function(e, t) {
			var n = (0, r.default)(e),
				o = n.css("background-image");
			o = (o = /^url\((['"]?)(.*)\1\)$/.exec(o)) ? o[2] : "";
			var i = new Image;
			i.src = o, i.complete || (n.css("background-image", 'url("' + t + '")'), i.addEventListener("load", function() {
				n.css("background-image", 'url("' + o + '")')
			}))
		}, t.preventPageReload = function(e) {
			e.$rootEl.on("click", "a[href^='/']:not([data-reload=1])", function(t) {
				var n = (0, r.default)(t.currentTarget).attr("href");
				if (!(t.altKey || t.ctrlKey || t.metaKey || t.shiftKey)) {
					t.preventDefault();
					var o = n.replace(/^\//, "").replace("#!/", "");
					return e.navigate(o, {
						trigger: !0
					}), !1
				}
			})
		}, t.forceRedraw = function(e) {
			var t = e.style.display;
			e.style.display = "none", e.offsetHeight, e.style.display = t
		}, t.warnBeforeClosing = function(e, t) {
			window.addEventListener("beforeunload", function(n) {
				var o = !0;
				if (t && (o = t()), o) return n.returnValue = e, e
			})
		}, t.queryToHash = function(e) {
			if ("string" != typeof e || 0 === e.length) return {};
			var t = {};
			return e.split("&").forEach(function(e) {
				var n = e.split("="),
					o = decodeURIComponent(n[0]);
				if (0 !== o.length) {
					var i = decodeURIComponent(n[1]);
					Array.isArray(t[o]) ? t[o].push(i) : t[o] ? t[o] = [t[o], i] : t[o] = i
				}
			}), t
		}, t.applyInfieldLabels = function(e) {
			e.inFieldLabels({
				fadeOpacity: .6,
				fadeDuration: 250,
				hideDuration: 200
			})
		}, t.toTitleCase = function(e) {
			if (e) {
				var t = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
				return e.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(e, n, o) {
					return n > 0 && n + e.length !== o.length && e.search(t) > -1 && ":" !== o.charAt(n - 2) && ("-" !== o.charAt(n + e.length) || "-" === o.charAt(n - 1)) && o.charAt(n - 1).search(/[^\s-]/) < 0 ? e.toLowerCase() : e.substr(1).search(/[A-Z]|\../) > -1 ? e : e.charAt(0).toUpperCase() + e.substr(1)
				})
			}
		}, t.browserCanUsePositionSticky = function() {
			var e = document.createElement("test").style;
			return e.cssText = "position: sticky; position: -webkit-sticky;", -1 !== e.position.indexOf("sticky")
		}, t.hashObject = function(e) {
			var t = function e(t, n) {
					if (Array.isArray(t)) return "[" + t.map(function(t) {
						return e(t, n)
					}).join(",") + "]";
					if ("object" === (void 0 === t ? "undefined" : o(t)) && null !== t) {
						var i = Object.keys(t).sort(n);
						return "{" + (i = i.map(function(n) {
							return JSON.stringify(n) + ": " + e(t[n])
						})).join(",") + "}"
					}
					return JSON.stringify(t)
				}(e),
				n = 0;
			if (!t.length) return n;
			for (var i = 0; i < t.length; i++) {
				n = (n << 5) - n + t.charCodeAt(i), n &= n
			}
			return n
		}
	},
	502: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.AsmModal = void 0;
		var o = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var o = t[n];
						o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
					}
				}
				return function(t, n, o) {
					return n && e(t.prototype, n), o && e(t, o), t
				}
			}(),
			i = s(n(2)),
			r = s(n(0)),
			a = n(18);

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var l = t.AsmModal = function(e) {
			function t() {
				return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t),
					function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, a.HumbleModal), o(t, [{
				key: "initialize",
				value: function() {
					r.default.bindAll(this, ["update"]), this.model && this.model.on("change", this.update), i.default.Modal.prototype.initialize.call(this)
				}
			}, {
				key: "update",
				value: function() {}
			}]), t
		}();
		l.prototype.viewContainer = ".modal-holder", l.prototype.cancelEl = ".js-dismiss"
	},
	684: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.stripQueryStringAndHashFromPath = t.parseQueryString = t.initAsmEventBus = void 0;
		var o, i = n(2),
			r = (o = i) && o.__esModule ? o : {
				default: o
			};
		t.initAsmEventBus = function(e) {
			void 0 === window[e] && (window[e] = _.extend({}, r.default.Events), window.addEventListener("message", function(t) {
				var n = t.data;
				try {
					"string" == typeof n && (n = JSON.parse(n))
				} catch (e) {
					return
				}
				n && n.action && window[e].trigger(n.action, n)
			}))
		}, t.parseQueryString = function() {
			for (var e = /\+/g, t = /([^&=]+)=?([^&]*)/g, n = function(t) {
					return decodeURIComponent(t.replace(e, " "))
				}, o = window.location.search.substring(1), i = void 0, r = {}; i = t.exec(o);) r[n(i[1])] = n(i[2]);
			return r
		}, t.stripQueryStringAndHashFromPath = function(e) {
			return e.split("?")[0].split("#")[0]
		}
	},
	685: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.BootstrappedModel = t.LocalStorageModel = void 0;
		var o = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var o = t[n];
						o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
					}
				}
				return function(t, n, o) {
					return n && e(t.prototype, n), o && e(t, o), t
				}
			}(),
			i = s(n(2)),
			r = s(n(0)),
			a = s(n(877));

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function l(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function u(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}

		function c(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}(t.LocalStorageModel = function(e) {
			function t() {
				return l(this, t), u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return c(t, i.default.Model), o(t, [{
				key: "initialize",
				value: function() {
					this.on("change", this.sync)
				}
			}, {
				key: "fetch",
				value: function() {
					if (localStorage) {
						var e = localStorage.getItem(this.identifier);
						try {
							var t = JSON.parse(e);
							this.set(t)
						} catch (e) {
							console.error(e)
						}
					}
				}
			}, {
				key: "sync",
				value: function() {
					localStorage && localStorage.setItem(this.identifier, JSON.stringify(this.attributes))
				}
			}]), t
		}()).prototype.identifier = null;
		var d = t.BootstrappedModel = function(e) {
			function t() {
				return l(this, t), u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return c(t, i.default.Model), o(t, [{
				key: "initialize",
				value: function() {
					r.default.bindAll(this, ["isCacheValid", "loadFromCache", "sync", "writeCache"]), this.on("sync", this.writeCache), this.loadFromCache()
				}
			}, {
				key: "loadFromCache",
				value: function() {
					if (localStorage) {
						localStorage.removeItem(this.url());
						var e = localStorage.getItem("v2|" + this.url());
						if (e) try {
							var t = JSON.parse(a.default.decompressFromUTF16(e));
							this.isCacheValid(t) && (this.set(t), this.loaded = !0, this.trigger("loaded"))
						} catch (e) {
							console.error(e)
						}
					}
				}
			}, {
				key: "isCacheValid",
				value: function(e) {
					if (void 0 === e) return !1;
					if (e._modelVersion !== this.version) return !1;
					var t = new Date;
					return !(0 !== this.MAX_CACHE_AGE && t - e._lastUpdated > this.MAX_CACHE_AGE)
				}
			}, {
				key: "writeCache",
				value: function() {
					if (this.loaded = !0, this.trigger("loaded"), localStorage) {
						var e = "v2|" + this.url(),
							t = this.toJSON();
						t._modelVersion = this.version, t._lastUpdated = Date.now();
						try {
							localStorage.setItem(e, a.default.compressToUTF16(JSON.stringify(t)))
						} catch (t) {
							if (!r.default.includes(["QuotaExceededError", "QUOTA_EXCEEDED_ERROR", "NS_ERROR_DOM_QUOTA_REACHED"], t.name)) throw t;
							console.error("Unable to write " + e + " to local storage due to QuotaExceededError.")
						}
					}
				}
			}]), t
		}();
		d.prototype.loaded = !1, d.prototype.lastUpdated = 0, d.prototype.version = 0, d.prototype.MAX_CACHE_AGE = 0
	},
	7: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.calculateIncludedTax = t.calculateRequiredTax = t.parseMoneyStringToFloat = t.Money = void 0;
		var o, i = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var o = t[n];
						o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
					}
				}
				return function(t, n, o) {
					return n && e(t.prototype, n), o && e(t, o), t
				}
			}(),
			r = n(0),
			a = (o = r) && o.__esModule ? o : {
				default: o
			},
			s = n(4),
			l = n(14),
			u = n(10),
			c = n(13);

		function d(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		t.Money = function() {
			function e(t, n) {
				if (function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e), this.amount = void 0 !== t ? (0, s.Decimal)(t) : (0, s.Decimal)(NaN), !this.amount.isFinite() || "string" != typeof n) throw new Error("Invalid args for Money constructor: amount=" + JSON.stringify(t) + ", currency=" + JSON.stringify(n));
				if (this.currency = n.toUpperCase(), !a.default.includes(u.CURRENCY_CONSTANTS.SUPPORTED_CURRENCIES, this.currency)) throw new Error("Unsupported currency " + this.currency + ". Please use any of the following currencies: " + u.CURRENCY_CONSTANTS.SUPPORTED_CURRENCIES)
			}
			return i(e, null, [{
				key: "isMoney",
				value: function(t) {
					return t instanceof e
				}
			}, {
				key: "isScalar",
				value: function(e) {
					return Number.isFinite(e) || s.Decimal.isDecimal(e) && e.isFinite()
				}
			}, {
				key: "fromObject",
				value: function(t) {
					if (t instanceof Object && t.hasOwnProperty("amount") && t.hasOwnProperty("currency")) return new e(t.amount, t.currency);
					throw new Error("Invalid args passed into Money.fromObject: " + JSON.stringify(t))
				}
			}, {
				key: "fromArray",
				value: function(t) {
					if (Array.isArray(t) && 2 == t.length) return new e(t[0], t[1]);
					throw new Error("Invalid args passed into Money.fromArray: " + JSON.stringify(t))
				}
			}]), i(e, [{
				key: "toJSON",
				value: function() {
					return {
						amount: this.amount,
						currency: this.currency
					}
				}
			}, {
				key: "_localize",
				value: function(e, t, n) {
					var o, i = this,
						r = {
							style: "currency",
							currency: this.currency
						};
					a.default.includes([c.MoneyFormatConstants.HIDE_ZERO_CENTS, c.MoneyFormatConstants.STYLIZED], n) && this.amount.isInteger() && (r.maximumFractionDigits = 0, r.minimumFractionDigits = 0);
					var s = Intl.NumberFormat(e, r).format(this.amount.toNumber()),
						f = function(e, t, n) {
							return e.replace(t, n)
						},
						h = (d(o = {}, u.CURRENCY_CONSTANTS.CURRENCY_CODES.RUBLES, f(s, "RUB", u.CURRENCY_CONSTANTS.CURRENCY_SYMBOLS[this.currency])), d(o, u.CURRENCY_CONSTANTS.CURRENCY_CODES.PISOS, f(s, "PHP", u.CURRENCY_CONSTANTS.CURRENCY_SYMBOLS[this.currency])), d(o, u.CURRENCY_CONSTANTS.CURRENCY_CODES.LIRAS, f(s, "TRY", u.CURRENCY_CONSTANTS.CURRENCY_SYMBOLS[this.currency])), d(o, u.CURRENCY_CONSTANTS.CURRENCY_CODES.AU_DOLLARS, f(s, "A$", u.CURRENCY_CONSTANTS.CURRENCY_SYMBOLS[this.currency])), d(o, u.CURRENCY_CONSTANTS.CURRENCY_CODES.YUAN, f(s, "CN¥", u.CURRENCY_CONSTANTS.CURRENCY_SYMBOLS[this.currency])), o);
					return s = this.currency == u.CURRENCY_CONSTANTS.CURRENCY_CODES.DOLLARS && "en" == e && t != l.COUNTRY_CONSTANTS.US_CC ? f(s, "$", "US$") : f(s, "US$", "$"), n === c.MoneyFormatConstants.STYLIZED ? '<span class="stylized-price" role="complementary" aria-label="' + s + '">' + Intl.NumberFormat(e, r).formatToParts(this.amount.toNumber()).map(function(n, o) {
						var r = n.type,
							s = n.value;
						switch (r) {
							case "currency":
								return i.currency == u.CURRENCY_CONSTANTS.CURRENCY_CODES.DOLLARS ? "en" == e && t != l.COUNTRY_CONSTANTS.US_CC ? "US$" : u.CURRENCY_CONSTANTS.CURRENCY_SYMBOLS[u.CURRENCY_CONSTANTS.CURRENCY_CODES.DOLLARS] : a.default.includes(a.default.keys(h), i.currency) ? u.CURRENCY_CONSTANTS.CURRENCY_SYMBOLS[i.currency] : s;
							case "integer":
								return s;
							case "decimal":
								return '<span class="sr-only">' + s + "</span>";
							case "fraction":
								return '<span class="cents">' + s + "</span>";
							default:
								return ""
						}
					}).reduce(function(e, t) {
						return e + t
					}) + "</span>" : h[this.currency] || s
				}
			}, {
				key: "currencyMatches",
				value: function(e) {
					return this.currency.toLowerCase() === e.currency.toLowerCase()
				}
			}, {
				key: "mul",
				value: function(e) {
					return this.times(e)
				}
			}, {
				key: "times",
				value: function(t) {
					if (!e.isScalar(t)) throw new Error("Money objects can only be multiplied by scalars");
					return new e(this.amount.mul(t), this.currency)
				}
			}, {
				key: "div",
				value: function(e) {
					return this.dividedBy(e)
				}
			}, {
				key: "dividedBy",
				value: function(t) {
					if (e.isMoney(t)) {
						if (!this.currencyMatches(t)) throw new Error("If two Money objects are divided, they must be of the same currency");
						return this.amount.div(t.amount)
					}
					if (e.isScalar(t)) return new e(this.amount.div(t), this.currency);
					throw new Error("Money objects can only be divided with scalars or other Money objects")
				}
			}, {
				key: "add",
				value: function(e) {
					return this.plus(e)
				}
			}, {
				key: "plus",
				value: function(t) {
					var n = void 0;
					if (e.isMoney(t)) {
						if (!this.currencyMatches(t)) throw new Error("If adding two Money objects, they must be of the same currency");
						n = this.amount.add(t.amount)
					} else {
						if (!e.isScalar(t)) throw new Error("Money objects can only be added with scalars or other Money objects");
						n = this.amount.add(t)
					}
					return new e(n, this.currency)
				}
			}, {
				key: "sub",
				value: function(e) {
					return this.minus(e)
				}
			}, {
				key: "minus",
				value: function(t) {
					var n = void 0;
					if (e.isMoney(t)) {
						if (!this.currencyMatches(t)) throw new Error("If subtracting two Money objects, they must be of the same currency");
						n = this.amount.sub(t.amount)
					} else {
						if (!e.isScalar(t)) throw new Error("Money objects can only be subtracted by scalars or other Money objects");
						n = this.amount.sub(t)
					}
					return new e(n, this.currency)
				}
			}, {
				key: "toDecimalPlaces",
				value: function(e, t) {
					return this.toDP(e, t)
				}
			}, {
				key: "toDP",
				value: function(t, n) {
					return t = void 0 !== t ? t : 2, n = void 0 !== n ? n : s.Decimal.ROUND_HALF_UP, new e(this.amount.toDP(t, n), this.currency)
				}
			}, {
				key: "isZero",
				value: function() {
					return this.amount.eq((0, s.Decimal)(0))
				}
			}, {
				key: "equals",
				value: function(t) {
					if (e.isMoney(t)) return !!this.currencyMatches(t) && this.amount.equals(t.amount);
					if (e.isScalar(t)) return this.amount.equals(t);
					throw new Error("Money objects or scalar objects can only be used for comparisons")
				}
			}, {
				key: "eq",
				value: function(e) {
					return this.equals(e)
				}
			}, {
				key: "greaterThan",
				value: function(t) {
					if (e.isMoney(t)) {
						if (!this.currencyMatches(t)) throw new Error("Money objects should have same currency when using comparisons!");
						return this.amount.greaterThan(t.amount)
					}
					if (e.isScalar(t)) return this.amount.greaterThan(t);
					throw new Error("Money objects or scalar objects can only be used for comparisons")
				}
			}, {
				key: "gt",
				value: function(e) {
					return this.greaterThan(e)
				}
			}, {
				key: "greaterThanOrEqualTo",
				value: function(t) {
					if (e.isMoney(t)) {
						if (!this.currencyMatches(t)) throw new Error("Money objects should have same currency when using comparisons!");
						return this.amount.greaterThanOrEqualTo(t.amount)
					}
					if (e.isScalar(t)) return this.amount.greaterThanOrEqualTo(t);
					throw new Error("Money objects or scalar objects can only be used for comparisons")
				}
			}, {
				key: "gte",
				value: function(e) {
					return this.greaterThanOrEqualTo(e)
				}
			}, {
				key: "lessThan",
				value: function(t) {
					if (e.isMoney(t)) {
						if (!this.currencyMatches(t)) throw new Error("Money objects should have same currency when using comparisons!");
						return this.amount.lessThan(t.amount)
					}
					if (e.isScalar(t)) return this.amount.lessThan(t);
					throw new Error("Money objects or scalar objects can only be used for comparisons")
				}
			}, {
				key: "lt",
				value: function(e) {
					return this.lessThan(e)
				}
			}, {
				key: "lessThanOrEqualTo",
				value: function(t) {
					if (e.isMoney(t)) {
						if (!this.currencyMatches(t)) throw new Error("Money objects should have same currency when using comparisons!");
						return this.amount.lessThanOrEqualTo(t.amount)
					}
					if (e.isScalar(t)) return this.amount.lessThanOrEqualTo(t);
					throw new Error("Money objects or scalar objects can only be used for comparisons")
				}
			}, {
				key: "lte",
				value: function(e) {
					return this.lessThanOrEqualTo(e)
				}
			}, {
				key: "floor",
				value: function() {
					return new e(this.amount.floor(), this.currency)
				}
			}, {
				key: "ceil",
				value: function() {
					return new e(this.amount.ceil(), this.currency)
				}
			}, {
				key: "absoluteValue",
				value: function() {
					return new e(this.amount.abs(), this.currency)
				}
			}, {
				key: "abs",
				value: function() {
					return this.absoluteValue()
				}
			}, {
				key: "convertToCurrency",
				value: function(t, n) {
					if (!a.default.includes(a.default.keys(n), t)) throw new Error("Money object cannot be converted due to missing exchange rate");
					if (this.currency == t) return new e(this.amount, this.currency);
					var o = n[t],
						i = n[this.currency],
						r = this.div(i).times(o);
					return r.currency = t, r
				}
			}]), e
		}(), t.parseMoneyStringToFloat = function(e) {
			var t = /[^\d,.]*(\d+|\d.*?\d)?(?:[,.]+(\d{0,2}))?\D*$/.exec(e);
			if (!t) return 0;
			var n = t[1] ? t[1].replace(/\D/g, "") : "0",
				o = t[2] ? t[2] : "00";
			return parseFloat(n + "." + o)
		}, t.calculateRequiredTax = function(e, t) {
			return e.mul(t)
		}, t.calculateIncludedTax = function(e, t) {
			return e.minus(e.div(t.plus(1)))
		}
	},
	8: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		t.getWindow = function() {
			return window
		}
	},
	877: function(e, t, n) {
		var o, i = function() {
			var e = String.fromCharCode,
				t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
				n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
				o = {};

			function i(e, t) {
				if (!o[e]) {
					o[e] = {};
					for (var n = 0; n < e.length; n++) o[e][e[n]] = n
				}
				return o[e][t]
			}
			var r = {
				compressToBase64: function(e) {
					if (null == e) return "";
					var n = r._compress(e, 6, function(e) {
						return t.charAt(e)
					});
					switch (n.length % 4) {
						default:
						case 0:
							return n;
						case 1:
							return n + "===";
						case 2:
							return n + "==";
						case 3:
							return n + "="
					}
				},
				decompressFromBase64: function(e) {
					return null == e ? "" : "" == e ? null : r._decompress(e.length, 32, function(n) {
						return i(t, e.charAt(n))
					})
				},
				compressToUTF16: function(t) {
					return null == t ? "" : r._compress(t, 15, function(t) {
						return e(t + 32)
					}) + " "
				},
				decompressFromUTF16: function(e) {
					return null == e ? "" : "" == e ? null : r._decompress(e.length, 16384, function(t) {
						return e.charCodeAt(t) - 32
					})
				},
				compressToUint8Array: function(e) {
					for (var t = r.compress(e), n = new Uint8Array(2 * t.length), o = 0, i = t.length; o < i; o++) {
						var a = t.charCodeAt(o);
						n[2 * o] = a >>> 8, n[2 * o + 1] = a % 256
					}
					return n
				},
				decompressFromUint8Array: function(t) {
					if (null === t || void 0 === t) return r.decompress(t);
					for (var n = new Array(t.length / 2), o = 0, i = n.length; o < i; o++) n[o] = 256 * t[2 * o] + t[2 * o + 1];
					var a = [];
					return n.forEach(function(t) {
						a.push(e(t))
					}), r.decompress(a.join(""))
				},
				compressToEncodedURIComponent: function(e) {
					return null == e ? "" : r._compress(e, 6, function(e) {
						return n.charAt(e)
					})
				},
				decompressFromEncodedURIComponent: function(e) {
					return null == e ? "" : "" == e ? null : (e = e.replace(/ /g, "+"), r._decompress(e.length, 32, function(t) {
						return i(n, e.charAt(t))
					}))
				},
				compress: function(t) {
					return r._compress(t, 16, function(t) {
						return e(t)
					})
				},
				_compress: function(e, t, n) {
					if (null == e) return "";
					var o, i, r, a = {},
						s = {},
						l = "",
						u = "",
						c = "",
						d = 2,
						f = 3,
						h = 2,
						p = [],
						m = 0,
						v = 0;
					for (r = 0; r < e.length; r += 1)
						if (l = e[r], Object.prototype.hasOwnProperty.call(a, l) || (a[l] = f++, s[l] = !0), u = c + l, Object.prototype.hasOwnProperty.call(a, u)) c = u;
						else {
							if (Object.prototype.hasOwnProperty.call(s, c)) {
								if (c.charCodeAt(0) < 256) {
									for (o = 0; o < h; o++) m <<= 1, v == t - 1 ? (v = 0, p.push(n(m)), m = 0) : v++;
									for (i = c.charCodeAt(0), o = 0; o < 8; o++) m = m << 1 | 1 & i, v == t - 1 ? (v = 0, p.push(n(m)), m = 0) : v++, i >>= 1
								} else {
									for (i = 1, o = 0; o < h; o++) m = m << 1 | i, v == t - 1 ? (v = 0, p.push(n(m)), m = 0) : v++, i = 0;
									for (i = c.charCodeAt(0), o = 0; o < 16; o++) m = m << 1 | 1 & i, v == t - 1 ? (v = 0, p.push(n(m)), m = 0) : v++, i >>= 1
								}
								0 == --d && (d = Math.pow(2, h), h++), delete s[c]
							} else
								for (i = a[c], o = 0; o < h; o++) m = m << 1 | 1 & i, v == t - 1 ? (v = 0, p.push(n(m)), m = 0) : v++, i >>= 1;
							0 == --d && (d = Math.pow(2, h), h++), a[u] = f++, c = String(l)
						} if ("" !== c) {
						if (Object.prototype.hasOwnProperty.call(s, c)) {
							if (c.charCodeAt(0) < 256) {
								for (o = 0; o < h; o++) m <<= 1, v == t - 1 ? (v = 0, p.push(n(m)), m = 0) : v++;
								for (i = c.charCodeAt(0), o = 0; o < 8; o++) m = m << 1 | 1 & i, v == t - 1 ? (v = 0, p.push(n(m)), m = 0) : v++, i >>= 1
							} else {
								for (i = 1, o = 0; o < h; o++) m = m << 1 | i, v == t - 1 ? (v = 0, p.push(n(m)), m = 0) : v++, i = 0;
								for (i = c.charCodeAt(0), o = 0; o < 16; o++) m = m << 1 | 1 & i, v == t - 1 ? (v = 0, p.push(n(m)), m = 0) : v++, i >>= 1
							}
							0 == --d && (d = Math.pow(2, h), h++), delete s[c]
						} else
							for (i = a[c], o = 0; o < h; o++) m = m << 1 | 1 & i, v == t - 1 ? (v = 0, p.push(n(m)), m = 0) : v++, i >>= 1;
						0 == --d && (d = Math.pow(2, h), h++)
					}
					for (i = 2, o = 0; o < h; o++) m = m << 1 | 1 & i, v == t - 1 ? (v = 0, p.push(n(m)), m = 0) : v++, i >>= 1;
					for (;;) {
						if (m <<= 1, v == t - 1) {
							p.push(n(m));
							break
						}
						v++
					}
					return p.join("")
				},
				decompress: function(e) {
					return null == e ? "" : "" == e ? null : r._decompress(e.length, 32768, function(t) {
						return e.charCodeAt(t)
					})
				},
				_decompress: function(t, n, o) {
					var i, r, a, s, l, u, c, d = [],
						f = 4,
						h = 4,
						p = 3,
						m = "",
						v = [],
						y = {
							val: o(0),
							position: n,
							index: 1
						};
					for (i = 0; i < 3; i += 1) d[i] = i;
					for (a = 0, l = Math.pow(2, 2), u = 1; u != l;) s = y.val & y.position, y.position >>= 1, 0 == y.position && (y.position = n, y.val = o(y.index++)), a |= (s > 0 ? 1 : 0) * u, u <<= 1;
					switch (a) {
						case 0:
							for (a = 0, l = Math.pow(2, 8), u = 1; u != l;) s = y.val & y.position, y.position >>= 1, 0 == y.position && (y.position = n, y.val = o(y.index++)), a |= (s > 0 ? 1 : 0) * u, u <<= 1;
							c = e(a);
							break;
						case 1:
							for (a = 0, l = Math.pow(2, 16), u = 1; u != l;) s = y.val & y.position, y.position >>= 1, 0 == y.position && (y.position = n, y.val = o(y.index++)), a |= (s > 0 ? 1 : 0) * u, u <<= 1;
							c = e(a);
							break;
						case 2:
							return ""
					}
					for (d[3] = c, r = c, v.push(c);;) {
						if (y.index > t) return "";
						for (a = 0, l = Math.pow(2, p), u = 1; u != l;) s = y.val & y.position, y.position >>= 1, 0 == y.position && (y.position = n, y.val = o(y.index++)), a |= (s > 0 ? 1 : 0) * u, u <<= 1;
						switch (c = a) {
							case 0:
								for (a = 0, l = Math.pow(2, 8), u = 1; u != l;) s = y.val & y.position, y.position >>= 1, 0 == y.position && (y.position = n, y.val = o(y.index++)), a |= (s > 0 ? 1 : 0) * u, u <<= 1;
								d[h++] = e(a), c = h - 1, f--;
								break;
							case 1:
								for (a = 0, l = Math.pow(2, 16), u = 1; u != l;) s = y.val & y.position, y.position >>= 1, 0 == y.position && (y.position = n, y.val = o(y.index++)), a |= (s > 0 ? 1 : 0) * u, u <<= 1;
								d[h++] = e(a), c = h - 1, f--;
								break;
							case 2:
								return v.join("")
						}
						if (0 == f && (f = Math.pow(2, p), p++), d[c]) m = d[c];
						else {
							if (c !== h) return null;
							m = r + r[0]
						}
						v.push(m), d[h++] = r + m[0], r = m, 0 == --f && (f = Math.pow(2, p), p++)
					}
				}
			};
			return r
		}();
		void 0 === (o = function() {
			return i
		}.call(t, n, t, e)) || (e.exports = o)
	},
	9: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.csrfHeaderKey = t.csrfFormKey = t.getCsrf = void 0;
		var o = n(20);
		t.getCsrf = function() {
			var e = document.cookie,
				t = e.lastIndexOf(o.CSRF_CONSTANTS.CSRF_COOKIE_KEY);
			t = t + o.CSRF_CONSTANTS.CSRF_COOKIE_KEY.length + 1;
			var n = "";
			if ((e = e.slice(t)).length) {
				var i = e.indexOf(";");
				n = i > -1 ? e.slice(0, i) : e
			}
			return n
		}, t.csrfFormKey = o.CSRF_CONSTANTS.CSRF_FORM_KEY, t.csrfHeaderKey = o.CSRF_CONSTANTS.CSRF_HEADER_KEY
	}
});
