import { Component } from '@angular/core';
import { MedicamentService } from 'src/app/services/medicament.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  name: string;
  laboratory: string;
  manufacturingDate: string;
  dueDate: string;
  stock: number;
  unitValue: number
  constructor(private medicamentService: MedicamentService) { }

  onSubmit(formData: any): void {
    console.log(formData);
    this.medicamentService.saveMedicament(formData).subscribe(response => {
      console.log(response);
      window.location.reload();
    });
  }
}
