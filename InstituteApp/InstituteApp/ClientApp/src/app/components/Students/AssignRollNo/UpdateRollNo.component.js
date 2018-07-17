"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var $ = require("jquery");
require("datatables.net");
require("datatables.net-bs4");
var UpdateRollNoComponent = /** @class */ (function () {
    function UpdateRollNoComponent(_router, http, baseUrl, _studentService, alertService, chRef) {
        var _this = this;
        this._router = _router;
        this._studentService = _studentService;
        this.alertService = alertService;
        this.chRef = chRef;
        http.get(baseUrl + 'api/Student/Index').subscribe(function (result) {
            _this.dList = result.json();
            _this.chRef.detectChanges();
            var table = $('#dttable');
            _this.dataTable = table.DataTable({
                "displayLength": 5,
                ordering: false,
                "pagingType": "full_numbers",
            });
        }, function (error) { return console.error(error); });
        this.getStudents;
    }
    UpdateRollNoComponent.prototype.getStudents = function () {
        var _this = this;
        this._studentService.getStudent()
            .subscribe(function (data) { _this.dList = data; });
    };
    UpdateRollNoComponent.prototype.SaveData = function () {
        var dictRollNo = [];
        $('table tr input[type=text]').each(function () {
            var str = $(this).val();
            var tRowId = this.closest('tr').children.item(0).innerHTML;
            dictRollNo.push({
                id: tRowId,
                rollNo: str
            });
        });
        this.updateList = dictRollNo;
        console.log(this.updateList);
        this.UpdateRollNo(this.updateList);
    };
    UpdateRollNoComponent.prototype.UpdateRollNo = function (studentData) {
        var _this = this;
        this._studentService.UpdateStudentRollNo(studentData)
            .subscribe(function (data) {
            _this._router.navigate(['/student-rollno']);
        });
    };
    UpdateRollNoComponent = __decorate([
        core_1.Component({
            selector: 'Student-UpdateRollNo',
            templateUrl: './UpdateRollNo.component.html'
        }),
        __param(2, core_1.Inject('BASE_URL'))
    ], UpdateRollNoComponent);
    return UpdateRollNoComponent;
}());
exports.UpdateRollNoComponent = UpdateRollNoComponent;
//# sourceMappingURL=UpdateRollNo.component.js.map