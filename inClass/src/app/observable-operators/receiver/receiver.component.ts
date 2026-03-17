import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import{DataService} from '../publisher/data.service';
import { HttpClient } from '@angular/common/http';
import { from, fromEvent, interval, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-receiver',
  standalone: false,
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.scss'
})
export class ReceiverComponent implements OnInit , AfterViewInit{
  constructor(private dataService: DataService,  private http: HttpClient){

  }
  @ViewChild('btn') btn: ElementRef | undefined;
  // obsFromOperators = fromEvent();
  sub: Subscription[] =  []; // control the subscription/unsubscription
  dataArr ?: []

  ngOnInit(): void {
    of([1,2,3]).subscribe(val => console.log(val));
    from([1, 2, 3]).subscribe(val => console.log(val));
    interval(100).subscribe()
    // console.log(this.dataService.dataStream);
    // this.dataService.dataStream.subscribe(
    //   (res) => {console.log(res);
    //     this.dataArr = res;
    //     console.log(this.dataArr);}, //successfully returned data
    //   (error) => {console.log(error)}, // error handling
    //   () => {console.log("all data have been recieved")} // Once the observale is complete
    // );
    
  }

  ngAfterViewInit(): void {
    const elem = this.btn?.nativeElement;
    console.log(this.btn?.nativeElement);
    fromEvent(elem, "click").subscribe((val)=>{console.log("button is clicked", val)})
  }

  onGetData(){
    console.log("Get the data");
    this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments').subscribe();
  }

}
