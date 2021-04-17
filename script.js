function nextHighlight(){
    //  Array with elements list, new and old selected children
    var elementResponse = findElement();
    //  check if old selected children exists
    //  ...if so, remove selected attribute and background
    if (elementResponse["elementList"][elementResponse["oldSelected"]])
    {
        var oldSelected = elementResponse["elementList"][elementResponse["oldSelected"]];
        oldSelected.removeAttribute("selected");
        oldSelected.style.background = "blue";
    }
    //  add selected attribute and background color
    //  ...to the new selected children
    var newSelected = elementResponse["elementList"][elementResponse["newSelected"]];
    newSelected.setAttribute("selected","true");
    newSelected.style.background = "red";
    console.log(elementResponse);   
}

function findElement(){
    var elementType = document.getElementsByTagName("p");
    var elementList = Array.prototype.slice.call(elementType);
    var response = [];

    //  elements list
    response["elementList"] = elementList;
    //  find and return old and new selected
    for (let index = 0; index < elementList.length; index++) {
        const element = elementList[index];
        if (element.hasAttribute("selected")){
            response["oldSelected"] = index ;
            response["newSelected"] = index + 1;
            //  back to the first chiildren
            if (index == (elementList.length - 1) ){
                response["newSelected"] = 0;
            }
            return response;
        }       
    }

    //  ...there's no selection already
    //  ...so the newSelected is the firt child
    response["newSelected"] = 0;
    return response;
}