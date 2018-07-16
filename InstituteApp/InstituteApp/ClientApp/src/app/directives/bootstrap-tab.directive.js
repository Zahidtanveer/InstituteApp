"use strict";
// ====================================================
// More Templates: https://www.ebenmonney.com/templates
// Email: support@ebenmonney.com
// ====================================================
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/fromEvent");
var BootstrapTabDirective = /** @class */ (function () {
    function BootstrapTabDirective(el, zone) {
        var _this = this;
        this.el = el;
        this.zone = zone;
        this.showBSTab = new core_1.EventEmitter();
        this.hideBSTab = new core_1.EventEmitter();
        this.tabShownSubscription = Observable_1.Observable.fromEvent($(this.el.nativeElement), 'show.bs.tab')
            .subscribe(function (e) {
            _this.runInZone(function () { return _this.showBSTab.emit({ type: e.type, target: e.target, relatedTarget: e.relatedTarget }); });
        });
        this.tabHiddenSubscription = Observable_1.Observable.fromEvent($(this.el.nativeElement), 'hidden.bs.tab')
            .subscribe(function (e) {
            _this.runInZone(function () { return _this.hideBSTab.emit({ type: e.type, target: e.target, relatedTarget: e.relatedTarget }); });
        });
    }
    BootstrapTabDirective.prototype.ngOnDestroy = function () {
        this.tabShownSubscription.unsubscribe();
        this.tabHiddenSubscription.unsubscribe();
    };
    BootstrapTabDirective.prototype.runInZone = function (delegate) {
        this.zone.run(function () {
            delegate();
        });
    };
    BootstrapTabDirective.prototype.show = function (selector) {
        $(selector).tab('show');
    };
    __decorate([
        core_1.Output()
    ], BootstrapTabDirective.prototype, "showBSTab", void 0);
    __decorate([
        core_1.Output()
    ], BootstrapTabDirective.prototype, "hideBSTab", void 0);
    BootstrapTabDirective = __decorate([
        core_1.Directive({
            selector: '[bootstrapTab]',
            exportAs: 'bootstrap-tab'
        })
    ], BootstrapTabDirective);
    return BootstrapTabDirective;
}());
exports.BootstrapTabDirective = BootstrapTabDirective;
//# sourceMappingURL=bootstrap-tab.directive.js.map