import { Component, ViewChild } from '@angular/core';
import { CanalPlusServiceService } from '../../../_service/canal-plus-service.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Offre } from '../../../_models/offre';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list-offre',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatIconModule, MatButtonModule],
  templateUrl: './list-offre.component.html',
  styleUrl: './list-offre.component.css',
})
export class ListOffreComponent {
  displayedColumns: string[] = ['bouquet', 'montant', 'action'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private canalService: CanalPlusServiceService) {}

  ngOnInit() {
    this.canalService.listesOffre().subscribe((data: Offre[]) => {
      console.log(data);
      this.dataSource = new MatTableDataSource<Offre>(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteOffre(id:number) {
    this.canalService.deleteOffres(id).subscribe(()=>{
      console.log('deleteOffre');
      window.location.reload();
    })
  }
}
