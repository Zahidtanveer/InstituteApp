"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/switchMap");
var CRIndexComponent = /** @class */ (function () {
    function CRIndexComponent(route) {
        this.route = route;
        this.isCasteActivated = true;
        this.isReligionActivated = false;
        this.casteTab = "nav-caste";
        this.religionTab = "nav-religion";
    }
    CRIndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fragmentSubscription = this.route.fragment.subscribe(function (anchor) { return _this.showContent(anchor); });
    };
    CRIndexComponent.prototype.ngOnDestroy = function () {
        this.fragmentSubscription.unsubscribe();
    };
    CRIndexComponent.prototype.showContent = function (anchor) {
        if ((this.isFragmentEquals(anchor, this.casteTab)) ||
            (this.isFragmentEquals(anchor, this.religionTab)))
            return;
        this.tab.show("#" + (anchor || this.casteTab) + "Tab");
    };
    CRIndexComponent.prototype.isFragmentEquals = function (fragment1, fragment2) {
        if (fragment1 == null)
            fragment1 = "";
        if (fragment2 == null)
            fragment2 = "";
        return fragment1.toLowerCase() == fragment2.toLowerCase();
    };
    CRIndexComponent.prototype.onShowTab = function (event) {
        var activeTab = event.target.hash.split("#", 2).pop();
        this.isCasteActivated = activeTab == this.casteTab;
        this.isReligionActivated = activeTab == this.religionTab;
    };
    __decorate([
        core_1.ViewChild("tab")
    ], CRIndexComponent.prototype, "tab", void 0);
    CRIndexComponent = __decorate([
        core_1.Component({
            selector: 'cr-Index',
            templateUrl: './index.component.html',
            styleUrls: ['./index.component.html'],
        })
    ], CRIndexComponent);
    return CRIndexComponent;
}());
exports.CRIndexComponent = CRIndexComponent;
//# sourceMappingURL=index.component.js.map