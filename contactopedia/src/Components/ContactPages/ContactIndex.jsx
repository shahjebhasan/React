import React from "react";
import Header from "../Layout/Header";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContact from "./RemoveAllContact";
import AddContact from "./AddContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import Footer from "../Layout/Footer";

class ContactIndex extends React.Component{

    constructor(props){
        super(props);
        this.state={
            contactList: [
                {
                    id: 1,
                    name: "Shahjeb Ansari",
                    phone: "666-666-7770",
                    email: "ben@dotnet.com",
                    isFavorite: false,
                },
                {
                    id: 2,
                    name: "Satish Dabilpur",
                    phone: "666-666-7770",
                    email: "ben@dotnet.com",
                    isFavorite: true,
                },
                {
                    id: 3,
                    name: "Sanjay Jaiswal",
                    phone: "666-666-7770",
                    email: "ben@dotnet.com",
                    isFavorite: true,
                },
            ],
            selectedContact : undefined,
            isUpdating : false
        };
    }

    handleAddContact = (newContact) => {
        if(newContact.name==""){
            return {status: "failure", msg: "Please Enter a valid name"};
        }
        else if(newContact.phone==""){
            return {status: "failure", msg: "Please Enter a valid Phone number"};
        }
        const duplicateRecord = this.state.contactList.filter((x)=> {
            if(x.name==newContact.name && x.phone==newContact.phone){
                return true;
            }
        })
        if(duplicateRecord.length > 0){
            return {status: "failure", msg: "Duplicate Record"};
        }
        else {
        const newFinalContact = {
            ...newContact,
            id:this.state.contactList[this.state.contactList.length-1].id +1,
        isFavorite: false,
        };
        this.setState( (previousState) =>{
            return{
                contactList: previousState.contactList.concat([newFinalContact])
            };
        });
    }
    return {status: "success", msg: "Contact was added successfully"};
        
    }

    handleToggleFavourites = (contact) => {
        this.setState((previousState) => {
            return {
            contactList : previousState.contactList.map((obj) => {
                if(obj.id==contact.id){
                    return {...obj, isFavorite: !obj.isFavorite};
                }
                return obj;
            }),
        };
        });
    };

    handleDeleteContact = ((id)=>{
        this.setState((previousState) => {
            return {
                contactList: previousState.contactList.filter((item) => 
                    item.id != id
                )
            };
        })
    });

    handleAddRandomContact = (newContact) => {
        const newFinalContact = {
            ...newContact,
            id:this.state.contactList[this.state.contactList.length-1].id +1,
        isFavorite: false,
        };
        this.setState( (previousState) =>{
            return{
                contactList: previousState.contactList.concat([newFinalContact])
            };
        });
    };

    handleRemoveAllContact = () => {
        this.setState( (previousState) =>{
            return{
                contactList: [],
            };
        });
    };

    handleUpdateClick = (contact) => {
        this.setState( () =>{
            return{
                selectedContact: contact,
                isUpdating: true,
            };
        });
    };

    handleCancelClick = () => {
        this.setState( () =>{
            return{
                selectedContact: undefined,
                isUpdating: false,
            };
        });
    };

    handleUpdateContact = (updatedContact) => {
        if(updatedContact.name==""){
            return {status: "failure", msg: "Please Enter a valid name"};
        }
        else if(updatedContact.phone==""){
            return {status: "failure", msg: "Please Enter a valid Phone number"};
        }

        this.setState( (previousState) =>{
            return{
                contactList: previousState.contactList.map((obj) => {
                    if(obj.id == updatedContact.id)
                    {
                        return {
                            ...obj,
                            name : updatedContact.name,
                            email: updatedContact.email,
                            phone: updatedContact.phone,
                        };
                    }
                    return obj;
                }),
                isUpdating: false,
                selectedContact: undefined,
            };
        });
    return {status: "success", msg: "Contact was updated successfully"};
        
    }

    render(){
        return(
            <div>
                <Header/>
                <div className="container" style={{minHeight:"85vh"}}>
                    <div className="row py-3">
                        <div className="col-4 offset-2 row">
                            <AddRandomContact 
                            
                            addRandomContact={this.handleAddRandomContact}/>
                        </div>
                        <div className="col-4 row">
                            <RemoveAllContact
                            removeAllContact = {this.handleRemoveAllContact}
                            />
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <AddContact 
                                isUpdating={this.state.isUpdating}
                                selectedContact={this.state.selectedContact}
                                handleAddContact={this.handleAddContact}
                                cancleClick={this.handleCancelClick}
                                updateClick={this.handleUpdateContact}
                                />
                            </div>
                        </div>
                        <div className="row py-2">
                        <div className="col-8 offset-2 row">
                            <FavoriteContacts 
                            contacts ={this.state.contactList.filter(
                                (u) => u.isFavorite == true
                            )}
                            favoriteClick = {this.handleToggleFavourites}
                            removeClick = {this.handleDeleteContact}
                            updateClick = {this.handleUpdateClick}
                            />
                            </div>
                        </div>
                        <div className="row py-2">
                        <div className="col-8 offset-2 row">
                            <GeneralContacts
                            contacts ={this.state.contactList.filter(
                                (u) => u.isFavorite == false
                            )}
                            favoriteClick = {this.handleToggleFavourites}
                            removeClick = {this.handleDeleteContact}
                            updateClick = {this.handleUpdateClick}
                            />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default ContactIndex;