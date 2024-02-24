/**
 * Note: this script is not processed by Babel.
 * For IE compat purposes, do not use const, let, or other > ES5 features
 */
var scriptTag = document.querySelector("[src*='analysis.js']");
var _paq = _paq || [];
_paq.push(["disableAlwaysUseSendBeacon"]);
_paq.push(["disableCookies"]);
_paq.push(["setDomains", ["*.brave.com"]]);
_paq.push(["setSecureCookie", true]);
_paq.push(["setDoNotTrack", true]);
if (scriptTag.dataset.isBlogPost === "true") {
    var url = new URL(location.href);
    url.pathname = "/blog" + url.pathname;
    _paq.push(["setCustomUrl", url.toString()]);
}
if (navigator.brave && navigator.brave.isBrave) {
    var brave_ua = navigator.userAgent.replace("Chrome", "Chrome(Brave)");
    _paq.push(["appendToTrackingUrl", "ua=" + brave_ua]);
}
if (scriptTag.dataset["is-404"] === "true") {
    _paq.push(['setDocumentTitle',  '404/URL = ' +  encodeURIComponent(document.location.pathname+document.location.search) + '/From = ' + encodeURIComponent(document.referrer)]);
}
_paq.push(["trackPageView"]);
_paq.push(["enableLinkTracking"]);
(function () {
    var matomoId = parseInt(scriptTag.dataset.matomoId);
    var u = "https://analytics.brave.com/";
    _paq.push(["setTrackerUrl", u + "piwik.php"]);
    _paq.push(["setSiteId", matomoId]);
})();

document.addEventListener("DOMContentLoaded", function () {
    var click_events = [
        [
            ".is-desktop .site-nav .nav-item__download",
            [
                "trackEvent",
                "Research",
                "Download Button",
                "Sticky Navigation (Desktop)",
            ],
        ],
        [
            ".is-mobile .site-nav .nav-item__download",
            [
                "trackEvent",
                "Research",
                "Download Button",
                "Sticky Navigation (Mobile)",
            ],
        ],
        [
            "body.home-page .desktop-download-button a",
            [
                "trackEvent",
                "Research",
                "Download Button",
                "New Home Download (Desktop)",
            ],
        ],
        [
            "body.home-page .mobile-download-button a",
            [
                "trackEvent",
                "Research",
                "Download Button",
                "New Home Download (Mobile)",
            ],
        ],
        [
            "body.home-page .brave-the-web-button a",
            [
                "trackEvent",
                "Research",
                "Download Button",
                "Brave the Web Download",
            ],
        ],
        [
            "#footer-section a[href$='/download/']",
            ["trackEvent", "Research", "Download Button", "Footer Link"],
        ],
        [
            "#btnDownload",
            [
                "trackEvent",
                "Brave Ads Trial",
                "Download Button",
                "Windows (Release)",
            ],
        ],
        [
            "#btnDownload2",
            [
                "trackEvent",
                "Brave Ads Trial",
                "Download Button",
                "macOS (Release)",
            ],
        ],
        [
            "#download-page .download-macOS.desktop",
            ["trackEvent", "Brave Core", "Download Button", "macOS (Release)"],
        ],
        [
            "#download-page .download-win32.desktop",
            ["trackEvent", "Brave Core", "Download Button", "Win32 (Release)"],
        ],
        [
            "#download-page .download-win64.desktop",
            ["trackEvent", "Brave Core", "Download Button", "Win64 (Release)"],
        ],
        [
            "#download-page .download-DUM.desktop",
            ["trackEvent", "Brave Core", "Download Button", "Linux (Release)"],
        ],
        [
            "#tips-download-header",
            [
                "trackEvent",
                "Rewards tips",
                "Download Button Header",
                "Nightly Tips Download",
            ],
        ],
        [
            "#tips-download-footer",
            [
                "trackEvent",
                "Rewards tips",
                "Download Button Footer",
                "Nightly Tips Download",
            ],
        ],
        [
            "#tips-creators-header",
            [
                "trackEvent",
                "Rewards tips",
                "Creators Button",
                "Tips Become a Creator",
            ],
        ],
        [
            "#tips-creators-footer",
            [
                "trackEvent",
                "Rewards tips",
                "Creators Button",
                "Tips Become a Creator",
            ],
        ],
        [
            "#tips-creators-tweet a[href='https://creators.brave.com/']",
            [
                "trackEvent",
                "Rewards tips",
                "Creators Link",
                "Tips Creator Tweet Widget",
            ],
        ],
        [
            "#tips-creators-twitch a[href='https://creators.brave.com/']",
            [
                "trackEvent",
                "Rewards tips",
                "Creators Link",
                "Tips Creator Twitch Widget",
            ],
        ],
        [
            "#tips-creators-youtube a[href='https://creators.brave.com/']",
            [
                "trackEvent",
                "Rewards tips",
                "Creators Link",
                "Tips Creator YouTube Widget",
            ],
        ],
        [
            "#home-download-button-hero",
            [
                "trackEvent",
                "Research",
                "Download Button",
                "Hero Download Button",
            ],
        ],
        [
            "#wallet-download-button-hero",
            [
                "trackEvent",
                "Research",
                "Download Button",
                "Wallet Hero Download Button",
            ],
        ],
        [
            "#wallet-download-button-lower",
            [
                "trackEvent",
                "Research",
                "Download Button",
                "Wallet Lower Download Button",
            ],
        ],
        [
            "#firewall-vpn-download-button-hero",
            [
                "trackEvent",
                "Research",
                "Download Button",
                "Firewall VPN Download Button"
            ],
        ],
        [
            "#rewards-page-download-button-hero",
            [
                "trackEvent",
                "Research",
                "Download Button",
                "Rewards Page Hero Download Button",
            ],
        ],
        [
            "#rewards-page-download-button-lower",
            [
                "trackEvent",
                "Research",
                "Download Button",
                "Rewards Page Lower Download Button",
            ],
        ],
        [
            "#news-page-download-button-hero",
            [
                "trackEvent",
                "Research",
                "Download Button",
                "Brave News Page Hero Download Button",
            ],
        ],
        [
            "#top-nav-download-button-desktop",
            [
                "trackEvent",
                "Research",
                "Download Button",
                "Top Nav Download Button",
            ],
        ],
        [
            "#top-nav-download-button-mobile",
            [
                "trackEvent",
                "Research",
                "Download Button",
                "Top Nav Download Button",
            ],
        ],
        [
            "#top-nav-try-search-button",
            [
                "trackEvent",
                "Research",
                "Try Search",
                "Top Nav Search Button",
            ],
        ],
        [
            "#home-download-button-lower",
            [
                "trackEvent",
                "Research",
                "Download Button",
                "Lower Hero Download Button",
            ],
        ],
        [
            "#talk-download-button-hero",
            [
                "trackEvent",
                "Research",
                "Download Button",
                "Brave Talk Hero Download Button",
            ],
        ],
        [
            "#talk-download-button-lower",
            [
                "trackEvent",
                "Research",
                "Download Button",
                "Brave Talk Lower Download Button",
            ],
        ],
        [
            "#ms-store-download-badge",
            [
                "trackEvent",
                "Research",
                "MS Store Download Badge",
                "Microsoft store download badge",
            ],
        ],
        [
            "#download-page-download-button-hero",
            [
                "trackEvent",
                "Downloads",
                "Download Button",
                "Download Page Download Button",
            ],
        ]
    ];

    var tracked_buttons = [];

    // Capture buttons with data-event-track attribute
    forEach(document.querySelectorAll("[data-track-event]"), function (button) {
        if (
            button.dataset.trackEvent !== "false" &&
            button.dataset.eventCategory &&
            button.dataset.eventAction &&
            button.dataset.eventName
        ) {
            var config = [
                "trackEvent",
                button.dataset.eventCategory,
                button.dataset.eventAction,
                button.dataset.eventName
            ];
            tracked_buttons.push([button, config]);
        }
    });

    // Capture buttons from array
    forEach(click_events, function (config) {
        var button = document.querySelector(config[0]);
        if (!button) return;
        if (tracked_buttons.some(v => v[0] === button)) {
            return;
        }
        tracked_buttons.push([button, config[1]]);
    });

    // Add tracking to all buttons
    forEach(tracked_buttons, function ([ button, config ]) {
        button.addEventListener("click", function (e) {
            if (!!button.disabled) return;
            _paq.push(config);
        });
    })
});
