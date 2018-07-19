declare var require: any;
import {
    Component, HostListener, ElementRef, ViewChild, forwardRef, Input, Output,
    AfterViewInit, OnDestroy, EventEmitter, ChangeDetectorRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MdInput } from '@angular/material';
import { TranslationHelper } from './pickadateTranslationLoader';

import * as _ from 'lodash';

import * as moment from 'moment';

window['$'] = require('jquery/dist/jquery');
window['jQuery'] = require('jquery/dist/jquery');
window['picker'] = require('./shared/picker');
import './shared/picker.date';

@Component({
    selector: 'ng2-pickadate',
    template: `<md-input 
                 #inputMaterial 
                 *ngIf="design=='material'" 
                 [value]="value"
                 [placeholder]="placeholder"></md-input>
               <input 
                 type="text" 
                 #inputNormal 
                 *ngIf="design==''"
                 [placeholder]="placeholder" />`,
    styles: [`
        /* to use the full width of the host component */
        input {
            width: 100%;
        }
        md-input{
            width: 100%; 
        }
    `],
    providers: [
        {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PickadateComponent), multi: true}
    ]
})
export class PickadateComponent implements AfterViewInit, OnDestroy, ControlValueAccessor {

    @Input() public design: string = ''; // TODO datepicker should be 'design'-independent (e.g. use it as directive)
    @Input() public modelFormat: string = '';
    @Input() public format: string = 'yyyy.mm.dd';
    @Input() public locale: string = navigator.language;
    @Input() public disabled: boolean = false;
    @Input() public disabledDates: any = [];
    @Input() public min: Pickadate.MinOrMaxDateOption;
    @Input() public max: Pickadate.MinOrMaxDateOption;
    @Input() public placeholder: string;

    @Output('open') public onOpen: EventEmitter<void> = new EventEmitter<void>();
    @Output('close') public onClose: EventEmitter<void> = new EventEmitter<void>();
    @Output('select') public onSelect: EventEmitter<Date> = new EventEmitter<Date>();

    @ViewChild('inputNormal') inputRef: ElementRef;
    @ViewChild('inputMaterial') inputRefMaterial: MdInput;
    private input: HTMLInputElement;
    private _value: string = '';

    private propagateChange: any = () => {
    };

    private datepicker: Pickadate.DatePicker;
    private initialized: boolean = false;

    constructor(private changeDetector: ChangeDetectorRef, private el: ElementRef) {
    }

    @HostListener('click', ['$event'])
    onClick(event) {
        if (this.design == 'material' && !this.disabled) {
            $(this.el.nativeElement).find('.picker__holder').focus();
        }
    }


    ngAfterViewInit(): any {
        new TranslationHelper(this.locale).loadLanguage();

        this.input = this.findInputElement();

        let picker: JQuery = $(this.input).pickadate(this.options);
        this.datepicker = picker.pickadate('picker');
        this.initialized = true;

        if (this.placeholder) {
            this.input.placeholder = this.placeholder;
        }

        if (this.value) {
            this.setDatepickerValue(this.value);
        }

        if (this.disabled) {
            this.input.disabled = true;
            this.input.readOnly = true;
        }
        this.registerListeners();
    }

    ngAfterViewChecked(): void {
        this.input.value = moment(this.value).format(this.format.toUpperCase());
    }

    ngOnChanges() {
        if (!this.initialized || this.disabled) {
            return;
        }

        if (!_.isNil(this.min)) {
            this.datepicker.set('min', this.min);
        }
        if (!_.isNil(this.max)) {
            this.datepicker.set('max', this.max);
        }
        if (!_.isEmpty(this.disabledDates)) {
            this.datepicker.set('_disabledDates', this.disabledDates);
        }
    }

    ngOnDestroy(): void {
        this.datepicker.off('open', 'close', 'set');
    }

    writeValue(value: string) {
        this.value = value;
        if (!this.initialized) {
            return;
        }
        this.setDatepickerValue(value);
    }

    registerOnChange(fn) {
        this.propagateChange = fn;
    }

    registerOnTouched() {
    }

    private findInputElement(): HTMLInputElement {
        if (this.design === 'material') {
            return this.inputRefMaterial._inputElement.nativeElement;
        }
        else if (this.design === '') {
            return this.inputRef.nativeElement;
        }
    }

    private registerListeners() {
        this.datepicker.on('open', () => this.onOpen.emit(null));
        this.datepicker.on('close', () => this.onClose.emit(null));

        this.datepicker.on('set', (value) => {
            if (!_.isNil(value.select)) { // the set event is fired for every set, but we should listen only to set->select
                this.value = this.input.value;
                this.onSelect.emit(value);
            }
        });
    }

    get value() {
        return this._value;
    }

    set value(val: string) {
        this._value = val;
        let modelValue: string = moment(val, this.format.toUpperCase()).format(this.modelFormat ? this.modelFormat.toUpperCase() : 'x');

        this.propagateChange(modelValue); //set to model
        this.changeDetector.markForCheck();
    }

    private setDatepickerValue(val: string) {
        if (!this.initialized) {
            return;
        }

        if (val) {
            this.datepicker.set('select', this.value, {format: this.format});
        } else {
            this.datepicker.clear();
        }
    }

    get options(): Pickadate.DateOptions {
        if (_.isNil(this.disabledDates)) {
            this.disabledDates = [];
        }

        return {
            disable: this.disabledDates,
            format: this.format,
            today: '',
            clear: '',
            close: ''
        }
    }
}
