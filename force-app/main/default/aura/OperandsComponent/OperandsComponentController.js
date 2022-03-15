({
    calculation : function(component, event, helper) {
        var operand1 = component.find("operand1").getElement().value;
        var operand2 = component.find("operand2").getElement().value;
        var symbol = component.find("symbol").getElement().value;

        var appevent =$A.get("e.c:OperationEvent");
        appevent.setParams({"operand1":operand1, "operand2": operand2, "symbol": symbol});

        appevent.fire();
    }
})
