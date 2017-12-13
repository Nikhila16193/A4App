import { Component, OnInit } from '@angular/core';
import {GetjsondataService} from '../getjsondata.service';

@Component({
    selector: 'post',
    templateUrl: './postjson.component.html',
    providers: [GetjsondataService],
    styleUrls: ['./postjson.component.css']
})
export class PostjsonComponent implements OnInit {
    errorMessage: string;
    posts:any[];
 
    // We don't call the get method in the constructor
    constructor(private GetjsondataService: GetjsondataService) {}
 
    // Fetching the records in the onInit lifecycle method makes the application easier to debug
    ngOnInit() { this.getPosts(); }
 
    // The subscribes to the getPosts stream from the PostService
    getPosts() {
        this.GetjsondataService.getPosts()
            .subscribe(
                 posts => this.posts = posts,
                 result => console.log(result)
                //error => this.errorMessage = error
            )
    }
}