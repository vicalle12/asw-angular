angular.module('routing').controller('ContributionController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
    $http.get("https://hackernewsasw2016.herokuapp.com/contributions/"+$stateParams.contributionId+".json")
    .then(function(response) {
      $scope.titulo = response.data.titulo;
      $scope.puntos = response.data.puntos;
      $scope.cid = response.data.id;
      $scope.url = response.data.url;
      $http.get("https://hackernewsasw2016.herokuapp.com/users/"+response.data.user_id+".json").then(function(response2) {
        $scope.autor = response2.data.name;  
      });
      $scope.date = response.data.created_at;
    });

    $scope.sendComment = function(){
      $http.post("https://hackernewsasw2016.herokuapp.com/comments/", { content: $scope.newComment,contribution_id: $stateParams.contributionId,user_token: localStorage.getItem('hackerNewsToken') } )
      .success(function(data, status) {
        //console.log(data);
        window.location.reload();
      });
    }
    
    $http.get("https://hackernewsasw2016.herokuapp.com/comments.json?contribution_id="+$stateParams.contributionId+"")
    .then(function(responsecomments) {
      $scope.comments = responsecomments.data;
      for (var i = 0; i < $scope.comments.length; i++) {
        var replies = getReplies(i, $scope.comments);
        var autor = getAutor(i, $scope.comments);
      }
    });

    var getReplies = function(i, object){
      $http.get("https://hackernewsasw2016.herokuapp.com/replies.json?comment_id="+object[i].id)
        .success(function(data) {
            $scope.comments[i].replies = data;
            //console.log("entra en el for de relies");
            for (var j = 0; j < $scope.comments[i].replies.length; j++) {
              var autor = getAutorFromReplies(i,j, $scope.comments[i].replies[j]);
            }
      });
    }

    var getAutor = function(i, object){
      $http.get("https://hackernewsasw2016.herokuapp.com/users/"+object[i].user_id+".json").then(function(response2) {
        $scope.comments[i].autor = response2.data.name;  
      });
    }

    var getAutorFromReplies = function(i, j, object){
      console.log(object);
      $http.get("https://hackernewsasw2016.herokuapp.com/users/"+object.user_id+".json").then(function(response2) {
        $scope.comments[i].replies[j].autor = response2.data.name;  
        console.log("reply autor: "+ $scope.comments[i].replies[j].autor );
      });
    }

    $scope.voteContribution = function(id){
      $http.put("https://hackernewsasw2016.herokuapp.com/contributions/"+id+"/like", { user_token: localStorage.getItem('hackerNewsToken') } )
      .success(function(data, status) {
        console.log("he votado");
        window.location.reload();
      });
    }

    $scope.voteComment = function(id){
      $http.put("https://hackernewsasw2016.herokuapp.com/comments/"+id+"/like", { user_token: localStorage.getItem('hackerNewsToken') } )
      .success(function(data, status) {
        console.log("he votado");
        window.location.reload();
      });
    }

    $scope.voteReply = function(id){
      $http.put("https://hackernewsasw2016.herokuapp.com/replies/"+id+"/like", { user_token: localStorage.getItem('hackerNewsToken') } )
      .success(function(data, status) {
        console.log("he votado");
        window.location.reload();
      });
    }

    $scope.sendReply = function(){
      console.log("content:"+ $scope.newReply);
      console.log("idC:"+$scope.newReplyID);
      $http.post("https://hackernewsasw2016.herokuapp.com/replies/", { content: $scope.newReply, comment_id: $scope.newReplyID, user_token: localStorage.getItem('hackerNewsToken')  } )
      .success(function(data, status) {
        //console.log(data);
        window.location.reload();
      });
    }

    $scope.showFormS = false;
    $scope.replyId = null;

    $scope.showForm = function(id){
      
      console.log(id);
      
      if ( id == $scope.newReplyID ) {
        $scope.showFormS = false;
        $scope.newReplyID = null;
      }
      else {
        $scope.newReplyID = id;
        $scope.showFormS = true;
      }
      
    }

    

}]);
