import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlModel } from '../../interfaces/form-control-model';
import { ValidationService } from '../../services/validation.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-text-control',
  templateUrl: './text-control.component.html',
  styleUrls: ['./text-control.component.scss'],
})
export class TextControlComponent {
  @Input() form!: FormGroup;
  @Input() formControlModel!: FormControlModel;
  @Output() iconClick = new EventEmitter<Event>();
  @Output() keyup = new EventEmitter();

  constructor(public validationService: ValidationService,
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry) { }

  ngOnInit() {
    this.registerCustomSvgIcon();
  }

  onIconClick(event: Event) {
    this.iconClick.emit(event);
    this.registerCustomSvgIcon();
  }

  getSvgIcon(): string {
    const iconName = this.formControlModel.iconName;
    if (iconName && iconName.endsWith('.svg')) {
      return this.formControlModel ? this.formControlModel.iconName || '' : '';
    }
    return ''
  }
  private registerCustomSvgIcon() {
    const iconName = this.formControlModel.iconName;
    if (iconName && iconName.endsWith('.svg')) {
      this.matIconRegistry.addSvgIcon(
        iconName,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `./assets/images/${iconName}`
        )
      );
    }
  }
}
