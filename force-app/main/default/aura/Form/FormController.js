({
    sendData : function(component, event, helper) {
        var userName = component.find('name').getElement().value;
        var userSurname = component.find('surname').getElement().value;
        var userAge = component.find('age').getElement().value;

        var appEvent = $A.get("e.c:showOnScreen");
        appEvent.setParams({"eventName": userName, "eventSurname": userSurname, "eventAge": userAge})
        console.log("Firing event: "+ userName + " " + userSurname + " " + userAge);
        appEvent.fire();
    }
})
