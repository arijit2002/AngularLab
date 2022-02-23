import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Customer } from "../Models/customer";

@Component({
    selector: 'customer',
    templateUrl: './customer.component.html'
})

export class customerComponent {
    Customers:Array<Customer>;
    IsAddNew:boolean;
    FirstName:string;
    LastName:string;
    @ViewChild('myForm')
    CustomerForm!: NgForm;
    constructor(){
        this.IsAddNew=false;
        //this.Reset();
        this.Customers=new Array<Customer>();
        this.Customers.push(new Customer("Sukesh","Maria"));
        this.Customers.push(new Customer("Just","Compile"));
        //this.Customers.push(new Customer("Ram","Lakhan"));
        this.FirstName='FirstName';
        this.LastName='LastName'; 
    }
    //ChangeFirstName(value){
    //    this.FirstName=value;
    //}
    //ChangeLastName(value){
    //    this.LastName=value;
    //}
    Reset(){
        //this.FirstName="";
        //this.LastName="";
        this.CustomerForm.reset();
    }
    Save(){
        this.Customers.push(new Customer(this.FirstName,this.LastName));
        this.IsAddNew=false;
        this.Reset;
    }
    AddNew(){
        this.IsAddNew=true;
    }
    Cancel(){
        this.IsAddNew=false;
        this.Reset;
    }
}