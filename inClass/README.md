# Data Binding
1. One-way data binding: {{ variable }}, [property]="variable", (event)="function()"
2. Two-way binding: [(ngModel)]="variable", imports FormsModule
3. FormControl: new FormControl(),  [formControl]="formControlVariable", import ReactiveFormsModule


# Routing
1. destroy prev comp
2. Gurads check
3. resolve the data
4. start navigation
5. render the new comp

# Observable
1. rxjs library, receive/emit a stream of data
2. lazy, only starts to emit when it's subscribed (obs.subscribe)
3. can be stopped by unsubscribing from the Subscription
4. has more operators from rxjs: pure function
5. unnecessary to unsubscribe: When the obs stop on its own
