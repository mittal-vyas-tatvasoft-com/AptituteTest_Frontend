import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddProfileComponent } from '../add-profile/add-profile.component';
import { DeleteConfirmationDialogComponent } from 'src/app/shared/dialogs/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { ProfileService } from '../../services/profile.service';
import { SnackbarService } from 'src/app/shared/snackbar/snackbar.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  displayedColumns: string[] = ['name', 'status', 'action'];
  dataSource!: MatTableDataSource<any>;
  constructor(
    public dialog: MatDialog,
    private profileService: ProfileService,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit(): void {
    this.getAllProfileData();
  }

  getAllProfileData() {
    this.profileService.GetAllProfiles().subscribe({
      next: (res: any) => {
        this.dataSource = new MatTableDataSource(res.data);
      },
    });
  }

  handleAddProfileDialog(id: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = ['primary-dialog'];
    dialogConfig.autoFocus = false;
    dialogConfig.width = '556px';
    dialogConfig.data = id;
    this.dialog
      .open(AddProfileComponent, dialogConfig)
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          if (res.id == 0) {
            this.profileService.AddNewProfile(res).subscribe({
              next: (res: any) => {
                if (res.statusCode == 200) {
                  this.getAllProfileData();
                  this.snackbarService.success(res.message);
                } else {
                  this.snackbarService.error(res.message);
                }
              },
            });
          } else {
            this.profileService.UpdateProfile(res).subscribe({
              next: (res: any) => {
                if (res.statusCode == 200) {
                  this.getAllProfileData();
                  this.snackbarService.success(res.message);
                } else {
                  this.snackbarService.error(res.message);
                }
              },
            });
          }
        }
      });
  }

  handleDeleteProfileDialog(id: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = ['confirmation-dialog'];
    dialogConfig.autoFocus = false;
    this.dialog
      .open(DeleteConfirmationDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe((res) => {
        if (res == true) {
          this.profileService.DeleteProfile(id).subscribe({
            next: (res: any) => {
              if (res.statusCode == 200) {
                this.getAllProfileData();
                this.snackbarService.success(res.message);
              } else {
                this.snackbarService.error(res.message);
              }
            },
          });
        }
      });
  }

  changeSingleProfileStatus(id: number, status: boolean) {
    this.profileService.ChangeSingleProfileStatus(id, status).subscribe({
      next: (res: any) => {
        if (res.statusCode == 200) {
          this.getAllProfileData();
          this.snackbarService.success(res.message);
        } else {
          this.snackbarService.error(res.message);
        }
      },
    });
  }
}
