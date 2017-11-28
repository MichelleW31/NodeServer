(function(){
  function FormController(DataService){
    var fc = this;
    fc.taskArray = [];
    fc.get = DataService.getData();
    fc.post = DataService.postData();
    fc.put = DataService.putData();
    fc.delete = DataService.deleteData();

    fc.addItem = function(item){
      fc.taskArray.push(item);
      fc.task = "";
      DataService.setData(item);
    }

    fc.removeItem = function(index){
      fc.taskArray.splice(index,1);
    }
  }

  function WelcomeController(){
    var vm = this;

  }

  angular
    .module("app")
    .controller("FormController", FormController)
    .controller("WelcomeController", WelcomeController);
})();
