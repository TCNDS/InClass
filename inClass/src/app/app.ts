import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
})
export class App implements OnInit, AfterViewInit{
  showContent = true;
  @ViewChild('btn') myBtn: ElementRef | undefined;

  num = -1;
  
  ngOnInit(): void {
    console.log(this.myBtn)
  }
  ngAfterViewInit(){
    const button = this.myBtn?.nativeElement;
    if (!button) {
      return;
    }

    const clickObs = fromEvent(button, 'click');

    // because zonless
    interval(1000).pipe(
      takeUntil(clickObs)
    ).subscribe((val) => {
      this.num = val;
      console.log(val);
    });
  }

}
