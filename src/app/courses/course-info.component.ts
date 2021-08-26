import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "../models/course";
import { CourseService } from "../services/course.service";

@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{

  course: Course;

  constructor(private activatedRoute:ActivatedRoute, private courseService: CourseService){

  }

  ngOnInit():void{
    this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
      next: course => this.course = course,
      error: err => console.log('Error', err)
    })
  }

  save():void{
    console.log("teste")
    this.courseService.save(this.course).subscribe({
      next: course => {console.log('Saved with Success', course)},
      error: err => console.log('Erro', err)
    });
  }
}
