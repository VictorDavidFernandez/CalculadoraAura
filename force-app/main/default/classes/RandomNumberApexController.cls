public with sharing class RandomNumberApexController {
    
    @AuraEnabled
    public static Integer getNumber(){
        Integer randomNumber = Integer.valueof((1 + Math.random() * 10));
        return randomNumber;
    }
}
