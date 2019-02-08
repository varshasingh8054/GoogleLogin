import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute} from '@angular/router';
import { Task} from '../../taskmodel';
@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {

task=Task;
  constructor(private authService:AuthService,  private route : ActivatedRoute,private router:Router,  private flashMessage: FlashMessagesService) {
    
   }

  ngOnInit() {}
 model = new Task();
    updateTask(id,info)
    {
      var id = this.route.snapshot.params['_id'];
      this.authService.updateTask(id,this.model).subscribe( () => 
      {
        
        this.router.navigate(['/showtask']);
      })
    }
    
}

