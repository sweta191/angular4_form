import { Component, OnInit } from '@angular/core';
export class MyItems {    
  Value: string;    
  constructor(Value:string)    
  {    
    this.Value = Value;    
  }    
}   
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
add(obj)
{

  //console.log(obj);
  this.myItems.push(    
    new MyItems(obj)
  );   
  
}

edit(x)
{
  //console.log(x.Value.name);
  this.newItem.push(    
    x.Value
  );
  console.log(this.newItem);
}

  
    
   
  myItems: MyItems[] = new Array();    
    
  // Other variables    
  IsForUpdate: boolean = false;    
  newItem: any = [];    
  updatedItem;    

  

  ngOnInit() {
  }

}
