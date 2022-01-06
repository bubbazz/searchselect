import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-searchselect',
  templateUrl: './searchselect.component.html',
  styleUrls: ['./searchselect.component.scss']
})
export class SearchselectComponent implements OnChanges {
  @Input() data: any[] = [];
  @Input() stringify!: Function;
  @Output() item = new EventEmitter<any>();
  datatype: any;
  showme: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.data.forEach(e => {
      this.showme.push(new SearchObject(e, this.stringify))
    });
  }
  itemSelected = "select an Item";
  itemSelector(item: SearchObject): void {
    this.itemSelected = item.toString();
    this.item.emit(item.obj);
  }

  filterData(search: string) {
    //this.showme = this.data.filter(v => v.toString().toUpperCase().includes(search.toUpperCase()));
    this.showme.forEach(v => v.filter = v.toString().toUpperCase().includes(search.toUpperCase()));
  }
}
class SearchObject extends Object {
  public filter: boolean;
  public obj;
  constructor(obj: any, func: Function) {
    super(obj);
    this.obj = obj;
    this.filter = true;
    this.toString = () => func(obj);
  }

}