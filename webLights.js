function setHighlight(orderType){
    //  Array with elements list, new and old selected children
    var elementResponse = findElement(orderType);
    //  check if old selected children exists
    //  ...if so, remove selected attribute and background
    if (elementResponse["elementList"][elementResponse["oldSelected"]])
    {
        var oldSelected = elementResponse["elementList"][elementResponse["oldSelected"]];
        oldSelected.removeAttribute("selected");
        oldSelected.classList.remove("newSelected");
    }
    //  add selected attribute and background color
    //  ...to the new selected children
    var newSelected = elementResponse["elementList"][elementResponse["newSelected"]];
    newSelected.setAttribute("selected","true");
    newSelected.classList.add("newSelected");

    //  add background layer to focus selected children
    addLayer();
}

function addLayer(){

    if (!document.getElementById("newLayer")){
        newLayer = document.createElement("div");
        newLayer.id = "newLayer";
        document.body.appendChild(newLayer);
    }
}

function findElement(orderType){
    var elementType = document.getElementsByTagName("p");
    var elementList = Array.prototype.slice.call(elementType);
    var response = [];

    //  elements list
    response["elementList"] = elementList;
    //  find and return old and new selected
    for (let index = 0; index < elementList.length; index++) {
        const element = elementList[index];
        if (element.hasAttribute("selected")) {
            //  oldSelected 
            response["oldSelected"] = index ;
            //  define newSelected based on orderType(previous,next)
            switch (orderType) {
                case 'previous': 
                {
                    response["newSelected"] = index - 1;
                    //  back to the last chiildren
                    if (index == 0 ){
                        response["newSelected"] = (elementList.length - 1) ;
                    }
                    break;
                }
                case 'next': 
                {
                    response["newSelected"] = index + 1;            
                    //  back to the first chiildren
                    if (index == (elementList.length - 1) ){
                        response["newSelected"] = 0;
                    }
                    break;
                }
            }
            return response;
        }       
    }
    //  ...there's no selection already
    //  ...so the newSelected is the firt child
    response["newSelected"] = 0;
    return response;
}