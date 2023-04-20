import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environment';
import { ChatgptService } from './chatgpt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ChatGPTUI';
  result : string = "";
  searchKeyword: string="";
  baseUrl: string = environment.baseUrl
  constructor(private chatgptService: ChatgptService) {
    
  }
  ngOnInit(): void {
    
  }

  getResult(){
    this.result = "";
    this.chatgptService.getResult(this.searchKeyword).subscribe(data => {
        this.result = data;
        console.log(data)
    })
  }
}
