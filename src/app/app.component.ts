import { Component } from '@angular/core';
import { Album, MookDataService } from './mookdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'searchselect';
  data: any[] = [];
  constructor(private dataService: MookDataService) {
    dataService.getData().subscribe(d => {
      this.data = d;
      this.data.forEach(e => e.title2 = "ABC")
    });
  }
  public setString = (e: Album) => e.title;
  public setString2 = (e: any) => e.title2;
  public getData(): void {
    console.log(this.data);

  }

}
