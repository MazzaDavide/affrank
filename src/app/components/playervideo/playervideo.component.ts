import { Component, Input, OnInit } from '@angular/core';
import { PortfolioserviceService } from 'src/app/services/portfolioservice.service';

@Component({
  selector: 'app-playervideo',
  templateUrl: './playervideo.component.html',
  styleUrls: ['./playervideo.component.scss']
})
export class PlayervideoComponent implements OnInit {

  constructor(public portfolioservice: PortfolioserviceService) { }

  AllVideos =  this.portfolioservice.AllVideos
  voteNums = [1,2,3,4,5,6,7,8,9,10]
  rating!: any;

  ngOnInit(): void {
    this.element = localStorage.getItem("card")
    console.log("storage", this.element.title)
  }

  element!: any;

  GetSrc(card: any){
    this.portfolioservice.GetSrc(card);
  }

  vota(){
    this.portfolioservice.card.votes.push(this.rating);
    console.log("rating: ", this.rating)
  }

}