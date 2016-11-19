(function(){ 
    
    var app = angular.module('store-products', [])
    
    app.directive('productShine', function(){
        return{
            restrict:'E',
            templateUrl: 'product-shine.html'
        }
    })
    
    app.directive('productDescription', function(){
        return{
            restrict:'E',
            templateUrl: 'product-description.html'
        }
    })
    
    app.directive('productReview', function(){
        return{
            restrict:'E',
            templateUrl: 'product-review.html'
        }
    })
    
        
    app.directive('productTabs', function(){
        return{
            restrict:'E',
            templateUrl: 'product-tabs.html',
            controller: function(){
        this.tab = 1

        this.setTab = function(sTab){
            this.tab = sTab
        }

        this.isSet = function(sTab){
            return this.tab == sTab 
        }
    },
            controllerAs:"panel"
        }
    })
    
    app.directive('productImage', function(){
        return{
            restrict:'E',
            templateUrl: 'product-image.html',
            controller: function(){
        this.currentImage = 0

        this.setImage = function(img){
            this.currentImage = img
        }
        this.getCurrentImage = function(){
            return this.currentImage
        }
    },
            controllerAs:"gallery"
        }
    })
    })(); 