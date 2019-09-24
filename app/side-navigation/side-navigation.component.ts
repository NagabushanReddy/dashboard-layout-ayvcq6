import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent{

  @HostBinding('class.expanded') expanded: boolean = false;

}