"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var createTimeTable = /** @class */ (function () {
    function createTimeTable(_fb, _router, _dataService, _timeTableService, _employeeService) {
        this._fb = _fb;
        this._router = _router;
        this._dataService = _dataService;
        this._timeTableService = _timeTableService;
        this._employeeService = _employeeService;
        this.periodList = [];
        this.newList = [];
        this.DayName = "";
        this.title = "Create";
        this.timeTableForm = this._fb.group({
            id: 0,
            CourseId: ['', [forms_1.Validators.required]],
            BatchId: ['', [forms_1.Validators.required]],
            Name: ['', [forms_1.Validators.required]]
        });
        this.periodId = 1;
        this.getTeachers();
        this.getCourse();
        this.getBatch();
        this.getSubjects();
    }
    //Subject Data Binding with DropDown
    createTimeTable.prototype.getSubjects = function () {
        var _this = this;
        this._dataService.getSubject()
            .subscribe(function (data) { _this.subjectList = data; });
    };
    //Teachers Data Binding with DropDown
    createTimeTable.prototype.getTeachers = function () {
        var _this = this;
        this._employeeService.getEmployee()
            .subscribe(function (data) { _this.teacherList = data; });
    };
    //Batch Data Binding with DropDown
    createTimeTable.prototype.getBatch = function () {
        var _this = this;
        this._dataService.getBatch()
            .subscribe(function (data) { _this.batchList = data; });
    };
    //Course Data Binding with DropDown
    createTimeTable.prototype.getCourse = function () {
        var _this = this;
        this._dataService.getCourse()
            .subscribe(function (data) { _this.courseList = data; });
    };
    //On Course Selection Change 
    createTimeTable.prototype.OnCourseSelection = function ($event) {
        var courseID = this.timeTableForm.controls["CourseId"].value;
        if (courseID) {
            this.subBatchList = this.batchList.filter(function (x) { return x.courseId == courseID && x != null; });
        }
    };
    //Generate Time Table
    createTimeTable.prototype.CreateTimeTable = function () {
        function removeDuplicateUsingFilter(arr) {
            var unique_array = arr.filter(function (elem, index, self) {
                return index == self.indexOf(elem);
            });
            return unique_array;
        }
        this.periodList = this.periodList.concat(this.newList);
        this.periodList = removeDuplicateUsingFilter(this.periodList);
        console.log(this.periodList);
    };
    //Select and set Week Days
    createTimeTable.prototype.SetWeekDays = function () {
        this.weekDayModal.show();
    };
    //Add Days to TimeTable
    createTimeTable.prototype.saveWeekDays = function () {
        this.weekDayModal.hide();
        var list = [];
        $('input[type="checkbox"]:checked').each(function () {
            list.push(this.id);
        });
        this.daysList = list;
    };
    //Show Period Model PopUp
    createTimeTable.prototype.ShowPeriodModel = function (day) {
        this.DayName = day;
        this.periodModal.show();
        if (this.newList) {
            this.newList = this.periodList.filter(function (x) { return x.Day == day && x != null; });
        }
    };
    //Add New Period
    createTimeTable.prototype.AddPeriod = function () {
        var Id = this.periodId;
        var Day = this.DayName;
        var s = document.getElementById('SubjectName');
        var SubjectId = s.options[s.selectedIndex].value;
        var SubjectName = s.options[s.selectedIndex].text;
        var StartTime = document.getElementById('StartTime').value;
        var EndTime = document.getElementById('EndTime').value;
        var TeacherId = '0';
        var TeacherName = '';
        var CourseId = '';
        var BatchId = '';
        var Name = '';
        if (SubjectName == 'Break')
            SubjectId = '0';
        this.newList.push({
            Id: Id,
            Day: Day,
            SubjectId: SubjectId,
            SubjectName: SubjectName,
            StartTime: StartTime,
            EndTime: EndTime,
            TeacherId: TeacherId,
            TeacherName: TeacherName,
            CourseId: CourseId,
            BatchId: BatchId,
            Name: Name
        });
        this.periodId++;
    };
    //Remove Period 
    createTimeTable.prototype.remove = function (id) {
        var index = id - 1;
        console.log(index);
        if (index > -1) {
            this.periodList.splice(index, 1);
            this.newList.splice(index, 1);
            this.ReOrder();
        }
    };
    //Show Assign Faculty Model PopUp
    createTimeTable.prototype.onFacultyModel = function (id) {
        this.SlotId = id;
        this.selectFacultyModal.show();
    };
    //Assign Faculty on Submit
    createTimeTable.prototype.AssignFaculty = function () {
        var index = this.SlotId - 1;
        if (index > -1) {
            var e = document.getElementById('Teacher');
            this.periodList[index].TeacherId = e.options[e.selectedIndex].value;
            this.periodList[index].TeacherName = e.options[e.selectedIndex].text;
            e.selectedIndex = 0;
            this.selectFacultyModal.hide();
        }
        console.log(this.periodList);
    };
    //Save TimeTable To DataBase
    createTimeTable.prototype.SaveToDataBase = function () {
        var _this = this;
        if (!this.timeTableForm.valid) {
            return;
        }
        if (this.title == "Create") {
            var Course = this.timeTableForm.controls["CourseId"].value;
            var Batch = this.timeTableForm.controls["BatchId"].value;
            var Name = this.timeTableForm.controls["Name"].value;
            for (var i = 0; i < this.periodList.length; i++) {
                this.periodList[i].CourseId = Course;
                this.periodList[i].BatchId = Batch;
                this.periodList[i].Name = Name;
            }
            this.timeTableData = this.periodList;
            console.log(this.timeTableData);
            this._timeTableService.saveTimeTable(this.timeTableData)
                .subscribe(function (data) {
                _this._router.navigate(['/timeTable']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    //ReArrange Lists
    createTimeTable.prototype.ReOrder = function () {
        var j = 1;
        for (var i = 0; i < this.newList.length; i++) {
            this.newList[i].Id = j;
            j++;
        }
        var l = 1;
        for (var i = 0; i < this.periodList.length; i++) {
            this.periodList[i].Id = l;
            l++;
        }
    };
    createTimeTable.prototype.cancel = function () {
        this._router.navigate(['/timeTable']);
    };
    createTimeTable.prototype.onDaysModalHidden = function () {
    };
    createTimeTable.prototype.onPeriodModalHidden = function () {
    };
    createTimeTable.prototype.onFacultyModalHidden = function () {
    };
    Object.defineProperty(createTimeTable.prototype, "CourseId", {
        get: function () { return this.timeTableForm.get('CourseId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createTimeTable.prototype, "BatchId", {
        get: function () { return this.timeTableForm.get('BatchId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createTimeTable.prototype, "Name", {
        get: function () { return this.timeTableForm.get('Name'); },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.ViewChild('periodModal')
    ], createTimeTable.prototype, "periodModal", void 0);
    __decorate([
        core_1.ViewChild('weekDayModal')
    ], createTimeTable.prototype, "weekDayModal", void 0);
    __decorate([
        core_1.ViewChild('selectFacultyModal')
    ], createTimeTable.prototype, "selectFacultyModal", void 0);
    createTimeTable = __decorate([
        core_1.Component({
            selector: 'createTimeTable',
            templateUrl: './AddTimeTable.component.html'
        })
    ], createTimeTable);
    return createTimeTable;
}());
exports.createTimeTable = createTimeTable;
//# sourceMappingURL=AddTimeTable.component.js.map