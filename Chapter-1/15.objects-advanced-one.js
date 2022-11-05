
/********************************Object with functions ****************/

//Declaration
function getCustomerExactInfo(key){
    var customer =  {
        "name"            : "Clerk",
        "price"           :  100.09,
        "location"        : "London",
        "isAdmin"         :  true,
        "family_details"  :  [ "Mary", "Robert.J" , 10 ],
        "streetname"      :  null,
        "travelldtoIndia" :  undefined
    };

    var customerKeyValue = customer[key];
    return customerKeyValue;
}

//Calling the function
//First approach
getCustomerExactInfo("price");

//Calling the function
//Second approach
var key = "price";
getCustomerExactInfo(key);




/*****************  REMOVED FROM THE CLASS  *********************/
/************** How to check if property is available or not in the object *****/
              //A : hasownproperty

var customer =  {
    "name"            : "Clerk",
    "price"           :  100.09,
    "location"        : "London",
    "isAdmin"         :  true,
    "family details"  :  [ "Mary", "Robert.J" , 10 ],
    "streetname"      :  null,
    "travelldtoIndia" :  undefined
};



/********   Creating the multi-objects in the array ***********/

var customersList = [
    {
        "name"            : "Clerk",
        "price"           :  100.09,
        "location"        : "London",
        "isAdmin"         :  true,
        "family_details"  :  [ "Mary", "Robert.J" , 10 ],
        "streetname"      :  null,
        "travelldtoIndia" :  undefined
    },
    {
        "name"            : "Peter.Sr",
        "price"           :  200.57,
        "location"        : "Denmark",
        "isAdmin"         :  false,
        "family_details"  :  [ "Milenda", "Peter.Jr" , 15 ],
        "streetname"      :  null,
        "travelldtoIndia" :  "Yes"
    },
]


