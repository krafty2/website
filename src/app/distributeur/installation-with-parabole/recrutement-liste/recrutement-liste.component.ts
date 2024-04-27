import { Component, ViewChild } from '@angular/core';
import { CanalPlusServiceService } from '../../../_service/canal-plus-service.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-recrutement-liste',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './recrutement-liste.component.html',
  styleUrl: './recrutement-liste.component.css',
})
export class RecrutementListeComponent {

  displayedColumns: string[] = [
    'numero_decodeur',
    'bouquet',
    'duree',
    'commission',
  ];
  
  dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private distribService: CanalPlusServiceService) {}

  ngOnInit(){
    this.distribService.listRecrutement().subscribe((data)=>{
      console.table(data);
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
    })
  }
}
