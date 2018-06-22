import { Component, Inject, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { BootstrapTabDirective } from "../../directives/bootstrap-tab.directive";

import { CasteComponent } from './caste.component';
import { ReligionComponent } from './religion.component';
import { createReligion } from './AddReligion.component';
import { createCaste } from './AddCaste.component';
import { editCaste } from './EditCaste.component';
import { editReligion } from './EditReligion.component';

@Component({

    selector: 'cr-Index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.html'],
}


export class CRIndexComponent implements OnInit, OnDestroy {

    isCasteActivated = true;
    isReligionActivated = false;
    fragmentSubscription: any;

    readonly casteTab = "nav-caste";
    readonly religionTab = "nav-religion";

    @ViewChild("tab")
    tab: BootstrapTabDirective;

    @ViewChild("indexCaste")
    indexCaste: CasteComponent;

    @ViewChild("indexReligion")
    indexReligion: ReligionComponent;

    @ViewChild("addCaste")
    addcaste: createCaste;

    @ViewChild("addReligion")
    addreligion: createReligion;

    @ViewChild("editCaste")
    editcaste: editCaste;

    @ViewChild("editReligion")
    editreligion: editReligion;

    @ViewChild('editorModal')
    editorModal: ModalDirective;

    constructor(private route: ActivatedRoute) {
    }
    ngOnInit() {
        this.fragmentSubscription = this.route.fragment.subscribe(anchor => this.showContent(anchor));
    }


    ngOnDestroy() {
        this.fragmentSubscription.unsubscribe();
    }
    showContent(anchor: string) {
        if ((this.isFragmentEquals(anchor, this.casteTab)) ||
            (this.isFragmentEquals(anchor, this.religionTab)))
            return;

        this.tab.show(`#${anchor || this.casteTab}Tab`);
    }
    isFragmentEquals(fragment1: string, fragment2: string) {

        if (fragment1 == null)
            fragment1 = "";

        if (fragment2 == null)
            fragment2 = "";

        return fragment1.toLowerCase() == fragment2.toLowerCase();
    }
    onShowTab(event) {
        let activeTab = event.target.hash.split("#", 2).pop();

        this.isCasteActivated = activeTab == this.casteTab;
        this.isReligionActivated = activeTab == this.religionTab;

    }
    onEditorModalHidden() {
        this.addcaste.casteForm.reset(true);
        this.addreligion.religionForm.reset(true);
    }
    AddNew() {
    this.editorModal.show();
    }
}