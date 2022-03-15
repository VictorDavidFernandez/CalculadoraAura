({
    checkNumber : function(component, event, helper) {
        var playerNumber = event.getParam("playerNumber");
        var randomNumber = component.find("randomNumber").getElement().value;
        var invisible = document.getElementById("randomNumber");

        console.log("randomNumber = " + randomNumber)
        if(playerNumber == randomNumber){
            invisible.type= "Integer";
            alert("Son iguales");
        }
    },

    init: function(component, event, helper) {

        var action = component.get("c.getNumber");

        action.setCallback(this, function(response) {
            
            var state = response.getState();
            if (state === "SUCCESS") {
                var result = response.getReturnValue();
                component.find("randomNumber").getElement().value = result;
            }
        
        });
        $A.enqueueAction(action);
    }
})
