import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CollegeService } from '../../services/college.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-college',
  templateUrl: './add-college.component.html',
  styleUrls: ['./add-college.component.scss']
})
export class AddCollegeComponent {
  optionsList: string[] = ['Active', 'Inactive'];
  isEditMode: boolean = false;
  form: FormGroup; 

  constructor(public dialogRef: MatDialogRef<AddCollegeComponent>,
    private collegeService: CollegeService,
    private formBuilder: FormBuilder, 
     @Inject(MAT_DIALOG_DATA) public data: any) {
      this.form = this.formBuilder.group({
        name: ['', Validators.required], 
        abbreviation: ['', Validators.required],
        status: [true]
      });
  
      if (data && data.college) {
        this.isEditMode = true;
        const college = data.college;
      this.form.patchValue({
        ...college,
        status: college.status? 'Active' : 'Inactive', 
      });
      }
  }

  closeModal() {
    this.dialogRef.close();
  }
  
  onSaveClick(): void {
    if (this.form.valid) {
      const formData = this.form.value;
      formData.status = formData.status === "Active" ? true : false;
      if (!this.isEditMode) {
        this.collegeService.addCollege(formData).subscribe(
          (response: any) => {
              this.dialogRef.close({ refreshTable:true  });
          },
          (error) => {
            console.error('Error adding college:', error);
          }
        );
      } else {
        formData.id = this.data.college.id;
        this.collegeService.updateCollege(formData).subscribe(
          (response: any) => {
            this.dialogRef.close({ refreshTable: true  });
          },
          (error) => {
            console.error('Error updating college:', error);
          }
        );
      }
    }
  }
}

