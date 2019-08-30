import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  players: Player[];

  private category = new BehaviorSubject('');
  private playersList = new BehaviorSubject<Player[]>([]);

  selectedCategory = this.category.asObservable();
  selectedPlayers = this.playersList.asObservable();

  private categories = ['C', 'Java', 'Python', 'Go', 'Node.js'];
  constructor() {
    this.categories.sort();
    this.players = [{
      id: 101,
      name: 'A',
      categories: ['C', 'Java']
    },
    {
      id: 102,
      name: 'B',
      categories: ['Python', 'Java']
    },
    {
      id: 103,
      name: 'C',
      categories: ['Go']
    },
    {
      id: 104,
      name: 'D',
      categories: ['Node.js', 'Java']
    },
    {
      id: 105,
      name: 'E',
      categories: ['Python']
    },
    {
      id: 106,
      name: 'F',
      categories: ['Python', 'Java']
    },
    {
      id: 107,
      name: 'G',
      categories: ['Python', 'Java']
    },
    {
      id: 108,
      name: 'H',
      categories: ['Go', 'Java']
    },
    {
      id: 109,
      name: 'I',
      categories: ['Python', 'Java']
    },
    {
      id: 110,
      name: 'J',
      categories: ['Python', 'C', 'Go']
    },
    {
      id: 111,
      name: 'K',
      categories: ['Python', 'Java']
    },
    {
      id: 112,
      name: 'L',
      categories: ['Python', 'Java']
    },
    {
      id: 113,
      name: 'M',
      categories: ['Node.js', 'Java']
    },
    {
      id: 114,
      name: 'N',
      categories: ['Python']
    },
    {
      id: 115,
      name: 'O',
      categories: ['Python']
    },
    {
      id: 116,
      name: 'P',
      categories: ['Java']
    },
    {
      id: 117,
      name: 'Q',
      categories: ['Python', 'Java', 'C']
    },
    {
      id: 118,
      name: 'R',
      categories: ['Node.js', 'Java']
    },
    {
      id: 119,
      name: 'S',
      categories: ['Go', 'Java']
    },
    {
      id: 120,
      name: 'T',
      categories: ['Python', 'Go']
    },
    {
      id: 121,
      name: 'U',
      categories: ['C', 'Java']
    },
    {
      id: 122,
      name: 'V',
      categories: ['Python', 'Java']
    },
    {
      id: 123,
      name: 'W',
      categories: ['Python', 'C']
    },
    {
      id: 124,
      name: 'X',
      categories: ['Python', 'Java']
    },
    {
      id: 125,
      name: 'Y',
      categories: ['Node.js', 'Java']
    },
    {
      id: 126,
      name: 'Z',
      categories: ['Python', 'Java']
    }
    ];
  }

  getCetegoriesList() {
    return this.categories;
  }

  setSelectedCategory(category: string) {
    this.category.next(category);
    this.getPlayersList(category);
  }

  getPlayersList(category: string) {
    let selectedPlayersList: Player[];
    if (category === 'All') {
      selectedPlayersList = this.players;
    } else {
      selectedPlayersList = this.players.filter(player => player.categories.includes(category));
    }
    this.playersList.next(selectedPlayersList);
  }
}
