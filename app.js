(function(){
    var app = angular.module("gemStore",['store-products']);
    //Parameters : Module name and dependencies


    app.controller('StoreController', [ '$http', function($http){
        var store = this;
        store.products = [];
        $http.get('/product-data.json')
            .success(function(data){
            store.products = data
        })
        
    }])
   
    app.controller('ReviewController', function(){
        this.review = {};
        
        this.addReview = function(product){
            this.review.createdOn = Date.now();
            product.reviews.push(this.review)
            this.review = {};
        }
    })
    

    
})();



