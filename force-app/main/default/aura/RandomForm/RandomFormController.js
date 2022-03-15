({
    sendNumber : function(component, event, helper) {
        var playerNumber = component.find("playerNumber").getElement().value;

        var appevent =$A.get("e.c:checkingTheNumber");
        appevent.setParams({"playerNumber":playerNumber});

        appevent.fire()
    }
})
