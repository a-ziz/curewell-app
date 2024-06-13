import { Component } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent {

  doctor = {
    name: '',
  };

  message = '';

  constructor(private doctorService: DoctorService){ }

  onSubmit(){
    this.doctorService.addDoctor(this.doctor).subscribe(response => {
      this.message = 'Doctor added successfully!';

      // clear the form
      this.doctor = {
        name: '',
      };
    }, error => {
      this.message = "An error occurred while adding the doctor.";
    });
  }

}
