//decorators
//add "experimentalDecorators": true in tsconfig.json

//decorator is nothing but special kind of declaration that can be attached to class , method or properties

//get evaluated into function that we call at one time

@Component({
    selector: 'my-app', // tag 
    template: `<h1> Tutorials</h1>`// when my-app tag is encounered in html it is replaced by this 
}) // no semicolon

export class AppComponent {

}