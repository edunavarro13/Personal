import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-view',
  templateUrl: './header-view.component.html',
  styleUrls: ['./header-view.component.scss']
})
export class HeaderViewComponent implements OnInit {

  @Input() typeHeader;
  constructor() { }

  ngOnInit() {
  }

}
