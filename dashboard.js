/* ==========================================================================================
    DataTable
   =========================================================================================*/
$(document).ready(function(){
    var dataTable = $('#filtertable').DataTable({
        'pageLength':5,
        'aoColumnDefs':[{
            'bSortable':false,
            'aTargets':['nosort'],
        }],
        columnDefs:[
            {type:'date-dd-mm-yyy',aTargets:[5]}
        ],
        // "aoColumns":[
        //     null,
        //     null,
        //     null,
        //     null,
        //     null,
        //     null,
        //     null,
        //     null
        // ],
        "order":false,
        "bLengthChange":false,
        "dom":'<"top">ct<"top"p><"clear">',
    });

    $('#filterbox').on('keyup', function () {
            dataTable.search( this.value ).draw();
        }
    );
})


/* ==========================================================================================
    Render_UserArray
   =========================================================================================*/
//#region Render
let userArray =  JSON.parse(localStorage.getItem("userTable")) || [];

function renderTableRow(){
    let tr = document.getElementById("tablebody");
    tr.innerHTML = "";
    if(tr){
        for (let i = 0; i < userArray.length; i++) {
            if(userArray[i].uType == "admin"){
                tr.innerHTML += trs(
                    i+1,
                    userArray[i].fullName,
                    userArray[i].uPassword,
                    userArray[i].uEmail,
                    userArray[i].uType,
                    "bg-primary",
                    userArray[i].uId
                );
            }
            else if(userArray[i].uType == "creater"){
                tr.innerHTML+=trs(
                    i+1,
                    userArray[i].fullName,
                    userArray[i].uPassword,
                    userArray[i].uEmail,
                    userArray[i].uType,
                    "bg-dark",
                    userArray[i].uId,
                    "invisible"
                );
            }
            else{
                tr.innerHTML+=trs(
                    i+1,
                    userArray[i].fullName,
                    userArray[i].uPassword,
                    userArray[i].uEmail,
                    userArray[i].uType,
                    "bg-warning",
                    userArray[i].uId,
                );    
            }   
        }
    }
}
renderTableRow();

function trs(s_N,fName,uPassword,uEmail,uType,colorClass,id,disable){
    return `
        <tr>
        <td>${s_N}</td>
        <td>${fName}</td>
        <td><span class="mode mode_process">${uPassword}</span></td>
        <td>${uEmail}</td>
        <td><span class="mode mode_on badge rounded-pill ${colorClass} py-2 px-3">${uType}</span></td>
        <td>
            <div class="btn-group">
                <a class="dropdown_icon ${disable}" onclick="EditUserAdmin(${id})" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i class="fa fa-pencil"></i>
                </a>
            </div>

            <span class="actionCust">
                <a href="#"><i class="fa fa-line-chart chart_icon"></i></a>
            </span>

            <div class="btn-group dropdown">
                <a href="#" class="dropdown_icon ${disable}" data-bs-toggle="dropdown">
                <i class="fa fa-ellipsis-h"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end dropdown_more">
                    <li>
                        <a href="#" target="_black" class="dropdown-item" onclick="DeleteUserAdminCreate(${id})">
                        <i class="fa fa-trash"></i> Delete
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_black" class="dropdown-item">
                        <i class="fa fa-clone"></i> Duplication
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_black" class="dropdown-item">
                        <i class="fa fa-list"></i> Activity
                        </a>
                    </li>
                </ul>
                </div>
            </td>
        </tr>
    `;
}
//#endregion 



/* ==========================================================================================
    Delete_User / Admin
   =========================================================================================*/
//#region Delete_TableRow
function DeleteUserAdminCreate(id){
    for (let i = 0; i < userArray.length; i++) {
        if(userArray[i].uId == id && (userArray[i].uType == "user" || userArray[i].uType == "admin")){
            // alert(id + " Deleted Successfuly");
            // ___ Delete ___
            deleteType(userArray[i].uType) //Swal message

            userArray.splice(i,1);

            localStorage.setItem('userTable',JSON.stringify(userArray));
            
            renderTableRow();
            resetLoger();
        }
        else if(userArray[i].uId == id && userArray[i].uType == "creater"){
            deleteType(userArray[i].uType) //Swal message
        }
    }
    
}
function deleteType(type){
    if(type=="admin" || type=="user"){
        Swal.fire(`${type} Deleted Successfuly`,"","success");  
    }
    else if(type=="creater"){
        Swal.fire("Create Not Allowed! ","","error");
    }
}

//#endregion

function resetLoger(){
    localStorage.setItem("detaiAfterLogin",[]); 
}


/* ==========================================================================================
    Create/Update    User/Admin
   =========================================================================================*/
//#region Create_Update

function Modal(id){
    return `
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">User Data</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <label class="form-label text-secondary">Full Name</label>
        <input class="form-control" id="fullName">

        <label class="form-label text-secondary">Password</label>
        <input class="form-control" type="password" id="password">

        <label class="form-label text-secondary">Email</label>
        <input class="form-control" type="email" id="email">

        <label class="form-label text-secondary">Status</label>
        <select id="userAdmin" class="form-select my-3">
            <option value="admin">Admin</option>
            <option value="user">User</option>
        </select>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onclick="createUpdate(${id})"  data-bs-dismiss="modal">Set Record</button>
    </div>
    `;
}

// _____ create ______ (Modal call)
function createUserAdmin(id){
    document.getElementById("dialog").innerHTML= Modal(id);
}

// ____ Only Create _____
// function create(){
//     let fName = document.getElementById("fullName");
//     let pass = document.getElementById("password");
//     let email = document.getElementById("email");
//     let adminUser = document.getElementById("userAdmin");
//     if(fName.value == "" || pass.value=="" || email.value == "" || adminUser.value==""){
//         Swal.fire("Empty Value! ","","error");
//     }
//     else{
//         if(userArray.some((user)=>user.uEmail == email.value)){
//             Swal.fire('Create Unique Email','create New Email!','info')
//         }
//         else{
//             let myArray = {
//                 uId : userArray.length+1,
//                 fullName : fName.value,
//                 uEmail : email.value,
//                 uPassword : password.value,
//                 uType : adminUser.value,
//             }
//             userArray.push(myArray);

//             localStorage.setItem("userTable",JSON.stringify(userArray));

//             Swal.fire("Added Successfuly","","success");  
//             renderTableRow();
//         }
//     }
// }


//____ Globle Create/Update ______(Modal call)
function EditUserAdmin(id){
    alert(id);
    document.getElementById("dialog").innerHTML = Modal(id);

    let fName = document.getElementById("fullName");
    let pass = document.getElementById("password");
    let email = document.getElementById("email");
    let adminUser = document.getElementById("userAdmin");

    for (let i = 0; i < userArray.length; i++) {
        if(userArray[i].uId == id){
            fName.value = userArray[i].fullName;
            pass.value = userArray[i].uPassword;
            email.value = userArray[i].uEmail;
            adminUser.value = userArray[i].uType;
        }
    }    
}

// ____ Globle Create/Update ______
function createUpdate(id){
    let fName = document.getElementById("fullName");
    let pass = document.getElementById("password");
    let email = document.getElementById("email");
    let adminUser = document.getElementById("userAdmin");

    if(id==0){
        if(fName.value == "" || pass.value=="" || email.value == "" || adminUser.value==""){
            Swal.fire("Empty Value! ","","error");
        }
        else{
            if(userArray.some((user)=>user.uEmail == email.value)){
                Swal.fire('Create Unique Email','create New Email!','info')
            }
            else{
                let myArray = {
                    uId : userArray.length+1,
                    fullName : fName.value,
                    uEmail : email.value,
                    uPassword : password.value,
                    uType : adminUser.value,
                }
                userArray.push(myArray);

                localStorage.setItem("userTable",JSON.stringify(userArray));

                Swal.fire("Added Successfuly","","success");  
                renderTableRow();
            }
        }
    }
    else{
        // alert(fName.value);
        // alert(pass.value);
        // alert(email.value);
        // alert(adminUser.value);
        for (let i = 0; i < userArray.length; i++) {
            if(userArray[i].uId == id ){

                let checkEamil= 1;
                // __________ Check Emails of other Users ____________
                //---filter array accept  current Array---
                let temArray = userArray.filter(function(x){return x !== userArray[i]});
                //---check temp array email 
                for (let a = 0; a < temArray.length; a++) {
                    if(temArray[a].uEmail == email.value){
                        Swal.fire('Email Matchs to Other User !','create New Email!','error')
                        checkEamil=0;
                    }
                    else{
                    }
                }

                //___________ After Checking Email of Other users ____________
                if(checkEamil == 1){
                    userArray[i].fullName = fName.value ;
                    userArray[i].uPassword = pass.value;
                    userArray[i].uEmail = email.value;
                    userArray[i].uType = adminUser.value;

                    userArray.splice(i, 1, userArray[i]);
                    renderTableRow();

                    localStorage.setItem('userTable',JSON.stringify(userArray));

                    Swal.fire('Updated Successfuly','create New Email!','success')   
                }
                
                
                
                // if(userArray.some((user)=>user.uEmail == email.value)){
                //     Swal.fire('Update Unique Email','create New Email!','warning')
                // }
                // else{
                    // userArray[i].fullName = fName.value ;
                    // userArray[i].uPassword = pass.value;
                    // userArray[i].uEmail = email.value;
                    // userArray[i].uType = adminUser.value;

                    // userArray.splice(i, 1, userArray[i]);
                    // renderTableRow();

                    // localStorage.setItem('userTable',JSON.stringify(userArray));

                    // Swal.fire('Updated Successfuly','create New Email!','success')
                // }
            }
        } 
    }   
}
//#endregion


/* ==========================================================================================
    LogOut
   =========================================================================================*/
let login = localStorage.getItem("logger");
if(login == "1" || login == "2"){
//show all pages
}
else{
    //show login Page
    window.location = "signin.html";
}

document.getElementById("logOut").addEventListener("click",function(){
    localStorage.setItem("logger","0");
})


/* ==========================================================================================
    set Editor Name
   =========================================================================================*/
   let userTable = JSON.parse(localStorage.getItem("userTable"));
   if(userTable == null){
    let editor = [{
      uId : 1,
      fullName : "M Boota",
      uEmail : "m43577535@gmail.com",
      uPassword : "boota12345",
      uType : "creater",
    }];
    localStorage.setItem("userTable",JSON.stringify(editor))
   }

   
