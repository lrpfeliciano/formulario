import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-nova',
  templateUrl: './nova.component.html',
  styleUrls: ['./nova.component.css']
})
export class NovaComponent  implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,){

  }
  ngOnInit(): void {
    alert("Oi");
  }
}
