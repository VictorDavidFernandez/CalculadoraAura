({
    addToTable : function(component, event, helper) {
        var name = event.getParam("eventName");
        var surname = event.getParam("eventSurname");
        var age = event.getParam("eventAge");

        console.log(name +  surname + age);

        if(name){
           var list = component.get("v.output");
           var object = {oName: name, oSurname: surname, oAge: age }
           list.push(object);
           component.set("v.output",list);
       }
   }
})
