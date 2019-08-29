import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/servies/utils.service';
import { Player } from 'src/app/models/player.model';

@Component({
  selector: 'app-users-list-component',
  templateUrl: './users-list-component.component.html',
  styleUrls: ['./users-list-component.component.css']
})
export class UsersListComponentComponent implements OnInit {

  selectedCategory: string;
  playersList: Player[];

  constructor(private utilsService: UtilsService) { }

  ngOnInit() {
    this.utilsService.selectedCategory.subscribe(selectedCategory => {
      this.selectedCategory = selectedCategory;
    });

    this.utilsService.selectedPlayers.subscribe(playersList => {
      this.playersList = playersList;
    });
  }

}
