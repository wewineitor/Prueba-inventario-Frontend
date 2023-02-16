import { Component } from '@angular/core';
import { Medicament } from 'src/app/classes/medicament/medicament';
import { MedicamentService } from 'src/app/services/medicament.service';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-table-medicaments',
  templateUrl: './table-medicaments.component.html',
  styleUrls: ['./table-medicaments.component.css']
})
export class TableMedicamentsComponent {
  medicaments: Medicament[]
  name: string;
  laboratory: string;
  manufacturingDate: string;
  dueDate: string;
  stock: number;
  unitValue: number
  amount: number

  dataToUpdate:any
  nameToUpdate:string

  constructor(private medicamentService: MedicamentService, private salesService: SalesService) {

  }

  ngOnInit(): void {
    this.medicamentService.getData().subscribe((data: any[]) => {
      console.log(data);
      this.medicaments = data;
    });
  }

  deleteMedicament(name: string) {
    this.medicamentService.deleteMedicament(name)
      .subscribe((response) => {
        console.log('Solicitud DELETE exitosa', response);
        this.medicaments = this.medicaments.filter((medicament) => medicament.name !== name);
      }, (error) => {
        console.error('Error en la solicitud DELETE', error);
      });
  }

  updateMedicament(name: string, formData: any) {
    this.medicamentService.updateMedicament(this.nameToUpdate, formData).subscribe(response => {
      console.log(response);
      window.location.reload();
    });
  }

  saveSale(data: any) {

    data = this.dataToUpdate
    console.log(data.name);
    if(this.amount <= data.stock) {
      const newData = {
        "medicament": data.name,
        "amount": this.amount,
        "unitValue": data.unitValue,
        "totalValue": (this.amount * data.unitValue)
      }
      this.salesService.saveSale(newData).subscribe(response => {
        console.log(response);
      });
  
      data.stock - this.amount
      console.log(data.name);
      const newMedicament = {
        "name": data.name,
        "laboratory": data.laboratory,
        "manufacturingDate": data.manufacturingDate,
        "dueDate": data.dueDate,
        "stock": data.stock - this.amount,
        "unitValue": data.unitValue
      }
      console.log(data.name);
      this.medicamentService.updateMedicament(data.name, newMedicament).subscribe(response => {
        console.log(response);

        window.location.reload();
      });
    }

    
    
  }
}
