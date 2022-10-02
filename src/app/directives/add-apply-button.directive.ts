import { Directive, Input} from '@angular/core';

@Directive({
  selector: '[add-apply-button]'
})
export class AddApplyButtonDirective {

  @Input('dropdownId') dropdownId : string;

  ngAfterViewInit(){
    this.addButtonOnMultiselectDropdown(this.dropdownId);
  }

  addButtonOnMultiselectDropdown(dropdownId: string){
    const lu = document.createElement('lu');
    const li = document.createElement('li');
    li.setAttribute('style', 'list-style: none;');
    const div = document.createElement('div');
    div.setAttribute( 'class', 'd-flex justify-content-center');
    div.setAttribute('style', 'padding-bottom: 15px; padding-top: 15px;');
    const button =  document.createElement('button');
    button.setAttribute( 'class', 'btn btn-confirm text-center');
    const text = document.createTextNode('Apply');
    button.appendChild(text);
    div.appendChild(button);
    li.appendChild(div);
    lu.appendChild(li);
    let dropdown=document.getElementById(dropdownId);
    if(dropdown !== undefined || dropdown !== null ){
      let listDiv = dropdown.children[0].children[1];
      button.onclick =  function() {
        dropdown.click();
      };
      listDiv.appendChild(lu);
    }
  }

}
