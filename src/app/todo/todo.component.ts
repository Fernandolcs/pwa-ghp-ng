import { Component, OnInit } from '@angular/core';
import { TagService } from '../services/tag.service';
import { Tag } from '../models/tag.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tag: Tag = new Tag();
  tags: Tag[] = [];
  
  constructor(private tagService: TagService) { }

  ngOnInit() {
      this.tagService.getAll().subscribe(tags => {
        console.log(tags);
        this.tags = tags;    
      })
  }

  save(tag: Tag) {
    this.tagService.insert(tag).subscribe(() => {
        this.tags.push(tag);
        this.tag = new Tag();
        this.tags = Object.assign([], this.tags);
    });
  }

  delete(tag: Tag) {
    this.tags.splice(this.tags.indexOf(tag), 1);
  }
}