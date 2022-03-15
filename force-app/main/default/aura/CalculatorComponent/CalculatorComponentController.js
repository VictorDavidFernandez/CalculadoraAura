({
    calculating : function(component, event, helper) {
        var operand1 = event.getParam("operand1");
        var operand2 = event.getParam("operand2");
        var symbol = event.getParam("symbol");

        if(symbol == "+")
            component.find("result").getElement().value = parseInt(operand1) + parseInt(operand2);
        else if(symbol == "-")
            component.find("result").getElement().value = operand1 - operand2;
        else if(symbol == "*")
            component.find("result").getElement().value = operand1 * operand2;
        else if(symbol == "/")
            component.find("result").getElement().value = operand1 / operand2;
        
        
    },
    callApex : function(component, event, helper) {

        var action = component.get("c.getString");

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
