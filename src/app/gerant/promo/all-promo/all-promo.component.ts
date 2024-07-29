import { Component, ViewChild } from '@angular/core';
import { CanalPlusServiceService } from '../../../_service/canal-plus-service.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Promos } from '../../../_models/promo';
import { DatePipe } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-all-promo',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    DatePipe,
    MatSortModule,
    MatPaginatorModule,
  ],
  templateUrl: './all-promo.component.html',
  styleUrl: './all-promo.component.css',
})
export class AllPromoComponent {
  displayedColumns: string[] = ['dateDebut', 'dateFin', 'typePromo', 'status'];
  dataSource!: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private canalService: CanalPlusServiceService) {}

  ngOnInit() {
    this.canalService.allPromo().subscribe({
      next: (data: Promos[]) => {
        console.log(data);
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: () => {},
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
