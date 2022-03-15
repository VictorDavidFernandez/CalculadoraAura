public with sharing class ApexController {
    
    @AuraEnabled
    public static Integer getString(){
        Integer randomNumber = Integer.valueof((1 + Math.random() * 10));
        return randomNumber;
    }
}
