(function(){

  function DataService($http){
    var things=[];

    this.setData = function(item){
      things.push(item);
    };

    this.getData = function(){
      return $http({
          url: "/tasks",
          method: "GET"
      }).then(function(response){
          console.log("Get request worked");
      });
    };

    this.postData = function(){
      return $http({
          url: "/tasks",
          method: "POST"
      }).then(function(response){
          console.log("Post request worked");
      });
    };

    this.putData = function(){
      return $http({
          url: "/tasks",
          method: "PUT"
      }).then(function(response){
          console.log("Put request worked");
      });
    };

    this.deleteData = function(){
      return $http({
          url: "/tasks",
          method: "DELETE"
      }).then(function(response){
          console.log("Delete request worked");
      });
    };

  }

  angular
    .module("app")
    .service("DataService", DataService)
})();
