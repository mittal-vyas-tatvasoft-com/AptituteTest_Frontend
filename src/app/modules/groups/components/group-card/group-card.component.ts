import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GroupsModel } from '../../interfaces/groups.interface';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.scss'],
})
export class GroupCardComponent {
  @Input() groupData: GroupsModel;
  @Output() editClicked = new EventEmitter<GroupsModel>();
  @Output() deleteClicked = new EventEmitter<number>();
  @Output() setDefaultClicked = new EventEmitter<GroupsModel>();

  constructor(public dialog: MatDialog) {}

  handleEdit(group: GroupsModel) {
    this.editClicked.emit(group);
  }

  handleDelete(id: number) {
    this.deleteClicked.emit(id);
  }

  setAsDefault(group: GroupsModel) {
    this.setDefaultClicked.emit(group);
  }
}
