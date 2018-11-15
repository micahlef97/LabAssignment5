import { Component, OnInit } from '@angular/core';

interface IStudent {
  id: number;
  firstName: string;
  lastName: string;
  course: string;
}
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  students: Array<IStudent> = [];

  constructor() {
    this.students[0] = {
        id: 1,
        firstName: 'Micah',
        lastName: 'Lefebvre',
        course: 'Programing'
      }
      this.students[1] = {
        id: 1,
        firstName: 'Tom',
        lastName: 'Brady',
        course: 'Football'
      }
      this.students[2] = {
        id: 1,
        firstName: 'Elon',
        lastName: 'Musk',
        course: 'Space'
      }
      this.students[3] = {
        id: 1,
        firstName: 'Jack',
        lastName: 'Ma',
        course: 'Money'
    }
  }

  ngOnInit() {
  }

  addStudent() {
    const student: IStudent = {
      id: 1,
      firstName: 'Mike',
      lastName: 'Tyson',
      course: 'Boxing'
  };
    this.students.push(student);
  }
}
