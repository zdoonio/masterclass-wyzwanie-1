import { Component, OnInit } from '@angular/core';
import { Name } from '../name';
import { NamesService } from '../core/services/names.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public names: Name[] = [];
  public name = '';
  public errorMessages = 'Cannot connect with resources';

  constructor(private namesService: NamesService) { }

  ngOnInit() {
    this.namesService.getNames().subscribe(
      names => {
        this.names = names;
        this.randomName();
      },
      error => this.errorMessages = error
    );

  }

  randomName() {
    const num = Math.floor(Math.random() * 11);
    this.name = this.names[num].name;
  }

}
