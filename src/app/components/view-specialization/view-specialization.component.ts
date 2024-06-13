import { Specialization } from './../../models/specialization';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view-specialization',
  templateUrl: './view-specialization.component.html',
  styleUrls: ['./view-specialization.component.css']
})
export class ViewSpecializationComponent {
  specialization: Specialization[] = [];

  // constructor(private specializationService: SpecializationService) {}

  // ngOnInit(): void {
  //   this.specializationService.getSpecialization().subscribe(data => {
  //     this.specialization = data;
  //   });
  // }
}
