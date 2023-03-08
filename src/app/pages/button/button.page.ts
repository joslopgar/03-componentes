import {Component} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage {

  liked: boolean = false;

  setLiked() {
    this.liked = !this.liked;

  }
}
