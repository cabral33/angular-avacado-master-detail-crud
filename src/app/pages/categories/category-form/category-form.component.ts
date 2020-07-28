import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { Category } from './../shared/category.model';
import { CategoryService } from './../shared/category.service';

import { switchMap } from "rxjs/operators";

import toastr from "toastr";
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  currentAction: string
  categoryForm: FormGroup
  pageTitle: string
  serverErrorMessages: string[] = null
  submittingForm: boolean = false
  category: Category = new Category()

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.setCurrentAction()
    this.buildCategoryForm()
    this.loadCategory()
  }

  ngAfterContentChecked(){
    this.setPageTitle()
}

//PRIVATE METHODS

private setCurrentAction(){
  if (  this.route.snapshot.url[0].path == 'new')
    this.currentAction = 'new'
  else
  this.currentAction = 'new'
}

private buildCategoryForm(){
  this.categoryForm = this.formBuilder.group({
    id: [null],
    name: [null, [Validators.required, Validators.minLength(2)]],
    description: [null]
  })
}

private loadCategory(){
  if (this.currentAction == 'edit') {
    this.route.paramMap.pipe(
      switchMap(params => this.categoryService.getById(+params.get('id')))
    )
    .subscribe(
      (category) => {
        this.category = category
        this.categoryForm.patchValue(this.category)
      },
      (error) => alert('Ocorreu um erro meu chará')
    )
    }
  }

  private setPageTitle() {
    if (this.currentAction == 'new')
      this.pageTitle = "Cadastro de nova Categoria"
    else{
      const categoryName = this.category.name || ''
       this.pageTitle = 'Editando Categorias: ' + categoryName
    }
    
  }
}
