import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, DoCheck } from '@angular/core';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent implements OnInit, OnDestroy, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, DoCheck {

  @Input() quoteVariable = "";

  validTill = new Date(2022, 11, 31);
  amount = 2000;

  constructor() { 
    console.log("[LifecycleHooksComponent] - Constructor");
  }
  ngDoCheck(): void {
    console.log("[LifecycleHooksComponent] - Do Check");
  }
  ngAfterViewChecked(): void {
    console.log("[LifecycleHooksComponent] - After View Checked");
  }
  ngAfterViewInit(): void {
    console.log("[LifecycleHooksComponent] - After View Init");
  }
  ngAfterContentChecked(): void {
    console.log("[LifecycleHooksComponent] - After Content Checked");
  }
  ngAfterContentInit(): void {
    console.log("[LifecycleHooksComponent] - After Content Init");
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log("[LifecycleHooksComponent] - OnChanges");
  }

  ngOnDestroy(): void {
    console.log("[LifecycleHooksComponent] - OnDestroy");
  }

  // Lifecycle Hook/ CallBack
  ngOnInit(): void {
    console.log("[LifecycleHooksComponent] - onInit");
  }

}
