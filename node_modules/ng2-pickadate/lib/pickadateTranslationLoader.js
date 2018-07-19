"use strict";
var TranslationHelper = (function () {
    function TranslationHelper(userLang) {
        this.userLang = 'en';
        jQuery.fn.pickatime = { defaults: {} };
    }
    TranslationHelper.prototype.loadLanguage = function () {
        switch (this.userLang) {
            case 'DE':
                require('pickadate/lib/translations/de_DE');
                break;
            case 'ES':
                require('pickadate/lib/translations/es_ES');
                break;
            case 'FR':
                require('pickadate/lib/translations/fr_FR');
            case 'GB':
                break;
            case 'EN':
                break;
            default:
                break;
        }
    };
    return TranslationHelper;
}());
exports.TranslationHelper = TranslationHelper;
//# sourceMappingURL=pickadateTranslationLoader.js.map