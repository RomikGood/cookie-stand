'use strict';
CookieStore.openHours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
CookieStore.allStores = [];
function CookieStore (storeName, minCust, maxCust, aveSale) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.aveSale = aveSale;
  this.cookieDay = 0; // total amount of cookies sold per day
  this.numCookieSold = []; // amount of cookies sold per hour
  CookieStore.allStores.push(this);
  
  this.rendomNumCust = function(){
    return Math.random() * (maxCust - minCust) + minCust; //Generates random number of customers in given range
  };
  this.cookieHour = function(){                                               //cookies sold every hour
    for (var i = 0; i < CookieStore.openHours.length; i++) {
      this.numCookieSold.push(Math.round(this.rendomNumCust() * aveSale));   //rounds up the value and pushes it into array
    }
  };
  this.totalCookieSold = function () {                                       // total cookies sold per day. adds each array value
    for (var i= 0; i < this.numCookieSold.length; i++) {
      this.cookieDay += this.numCookieSold[i];
    }
  };
  this.renderStore = function() {                                        //creates an anchor firstPike for html page
    var ulElem = document.getElementById(storeName);                  //creates a combined list from two arrays  
    for (var i = 0; i < this.numCookieSold.length; i++) {               //open hours and cookies sold in this hour.
      var liElem = document.createElement('li');
      liElem.textContent = CookieStore.openHours[i] + ' : ' + this.numCookieSold[i]; //parentElement.appendChild(childElement);
      ulElem.appendChild(liElem);
    }

    liElem.textContent = ' Total : ' + this.cookieDay;                 // takes total amount cookieDay and put it at the end of the list
    ulElem.appendChild(liElem);                                        // // parentElement.appendChild(childElement);
  };
}

new CookieStore ('firstPike', 23, 65, 6.3);
new CookieStore ('seaTac', 3, 24 ,1.2);
new CookieStore ('capHill', 23, 65, 6.3);
new CookieStore ('seaCenter', 11 , 38, 3.7);
new CookieStore ('alkiStore', 2 ,16 , 4.6);
//console.log(CookieStore.allStores[0]);
for(var i = 0; i < CookieStore.allStores.length; i++){
  CookieStore.allStores[i].cookieHour();
  CookieStore.allStores[i].totalCookieSold();
  CookieStore.allStores[i].renderStore(); 
}
// var seaTac = new CookieStore('seaTac', )



////////////////////////////////


// var firstPike = {
//   minCust : 23,
//   maxCust : 65,
//   aveSale : 6.3,
//   cookieDay : 0, // total amount of cookies sold per day
//   numCookieSold : [], // amount of cookies sold per hour
//   openHours : ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   rendomNumCust : function(){
//     return Math.random() * (this.maxCust - this.minCust) + this.minCust; //Generates random number of customers in given range
//   },
//   cookieHour : function(){                                               //cookies sold every hour
//     for (var i = 0; i < this.openHours.length; i++) {
//       this.numCookieSold.push(Math.round(this.rendomNumCust() * this.aveSale));   //rounds up the value and pushes it into array
//     }
//   },
//   totalCookieSold : function () {                                       // total cookies sold per day. adds each array value
//     for (var i= 0; i < this.numCookieSold.length; i++) {
//       this.cookieDay += this.numCookieSold[i];
//     }
//   },
//   renderFirstPike : function() {                                        //creates an anchor firstPike for html page
//     var ulElem = document.getElementById('firstPike');                  //creates a combined list from two arrays  
//     for (var i = 0; i < this.numCookieSold.length; i++) {               //open hours and cookies sold in this hour.
//       var liElem = document.createElement('li');
//       liElem.textContent = this.openHours[i] + ' : ' + this.numCookieSold[i]; //parentElement.appendChild(childElement);
//       ulElem.appendChild(liElem);
//     }

//     liElem.textContent = ' Total : ' + this.cookieDay;                 // takes total amount cookieDay and put it at the end of the list
//     ulElem.appendChild(liElem);                                        // // parentElement.appendChild(childElement);
//   }
// };

// firstPike.cookieHour();
// console.log(firstPike.numCookieSold);
// firstPike.totalCookieSold();
// console.log(firstPike.cookieDay);
// firstPike.renderFirstPike();
// console.log(firstPike.numCookieSold);

// SeatTac Store
///////////////////////////////////////////////////////////////////////////

// var seaTac = {
//   minCust : 3,
//   maxCust : 24,
//   aveSale : 1.2,
//   cookieDay : 0, // total amount of cookies sold per day
//   numCookieSold : [], // amount of cookies sold per hour
//   openHours : ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   rendomNumCust : function(){
//     return Math.random() * (this.maxCust - this.minCust) + this.minCust; //Generates random number of customers in given range
//   },
//   cookieHour : function(){                                               //cookies sold every hour
//     for (var i = 0; i < this.openHours.length; i++) {
//       this.numCookieSold.push(Math.round(this.rendomNumCust() * this.aveSale));   //rounds up the value and pushes it into array
//     }
//   },
//   totalCookieSold : function () {                                       // total cookies sold per day. adds each array value
//     for (var i= 0; i < this.numCookieSold.length; i++) {
//       this.cookieDay += this.numCookieSold[i];
//     }
//   },
//   renderSeaTac : function() {                                        //creates an anchor firstPike for html page
//     var ulElem = document.getElementById('seaTac');                  //creates a combined list from two arrays  
//     for (var i = 0; i < this.numCookieSold.length; i++) {               //open hours and cookies sold in this hour.
//       var liElem = document.createElement('li');
//       liElem.textContent = this.openHours[i] + ' : ' + this.numCookieSold[i]; //parentElement.appendChild(childElement);
//       ulElem.appendChild(liElem);
//     }

//     liElem.textContent = ' Total : ' + this.cookieDay;                 // takes total amount cookieDay and put it at the end of the list
//     ulElem.appendChild(liElem);                                        // // parentElement.appendChild(childElement);
//   }
// };
// seaTac.cookieHour();
// seaTac.totalCookieSold();
// seaTac.renderSeaTac();

// // seaCenter Store
// ///////////////////////////////////////////////////////////////////////////
// var seaCenter = {
//   minCust : 11,
//   maxCust : 38,
//   aveSale : 3.7,
//   cookieDay : 0, // total amount of cookies sold per day
//   numCookieSold : [], // amount of cookies sold per hour
//   openHours : ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   rendomNumCust : function(){
//     return Math.random() * (this.maxCust - this.minCust) + this.minCust; //Generates random number of customers in given range
//   },
//   cookieHour : function(){                                               //cookies sold every hour
//     for (var i = 0; i < this.openHours.length; i++) {
//       this.numCookieSold.push(Math.round(this.rendomNumCust() * this.aveSale));   //rounds up the value and pushes it into array
//     }
//   },
//   totalCookieSold : function () {                                       // total cookies sold per day. adds each array value
//     for (var i= 0; i < this.numCookieSold.length; i++) {
//       this.cookieDay += this.numCookieSold[i];
//     }
//   },
//   renderSeaCenter : function() {                                        //creates an anchor firstPike for html page
//     var ulElem = document.getElementById('seaCenter');                  //creates a combined list from two arrays  
//     for (var i = 0; i < this.numCookieSold.length; i++) {               //open hours and cookies sold in this hour.
//       var liElem = document.createElement('li');
//       liElem.textContent = this.openHours[i] + ' : ' + this.numCookieSold[i]; //parentElement.appendChild(childElement);
//       ulElem.appendChild(liElem);
//     }

//     liElem.textContent = ' Total : ' + this.cookieDay;                 // takes total amount cookieDay and put it at the end of the list
//     ulElem.appendChild(liElem);                                        // // parentElement.appendChild(childElement);
//   }
// };
// seaCenter.cookieHour();
// seaCenter.totalCookieSold();
// seaCenter.renderSeaCenter();


// ////////////////
// ///////Capitol Hill Store

// var capHill = {
//   minCust : 20,
//   maxCust : 38,
//   aveSale : 3.7,
//   cookieDay : 0, // total amount of cookies sold per day
//   numCookieSold : [], // amount of cookies sold per hour
//   openHours : ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   rendomNumCust : function(){
//     return Math.random() * (this.maxCust - this.minCust) + this.minCust; //Generates random number of customers in given range
//   },
//   cookieHour : function(){                                               //cookies sold every hour
//     for (var i = 0; i < this.openHours.length; i++) {
//       this.numCookieSold.push(Math.round(this.rendomNumCust() * this.aveSale));   //rounds up the value and pushes it into array
//     } 
//   },
//   totalCookieSold : function () {                                       // total cookies sold per day. adds each array value
//     for (var i= 0; i < this.numCookieSold.length; i++) {
//       this.cookieDay += this.numCookieSold[i];
//     }
//   },
//   renderCapHill: function() {                                        //creates an anchor firstPike for html page
//     var ulElem = document.getElementById('capHill');                  //creates a combined list from two arrays  
//     for (var i = 0; i < this.numCookieSold.length; i++) {               //open hours and cookies sold in this hour.
//       var liElem = document.createElement('li');
//       liElem.textContent = this.openHours[i] + ' : ' + this.numCookieSold[i]; //parentElement.appendChild(childElement);
//       ulElem.appendChild(liElem);
//     }
//     liElem.textContent = ' Total : ' + this.cookieDay;                 // takes total amount cookieDay and put it at the end of the list
//     ulElem.appendChild(liElem);                                        // // parentElement.appendChild(childElement);
//   }
// };
// capHill.cookieHour();
// capHill.totalCookieSold();
// capHill.renderCapHill();


// ////////////////
// ///////Capitol Hill Store

// var alkiStore = {
//   minCust : 2,
//   maxCust : 16,
//   aveSale : 4.6,
//   cookieDay : 0, // total amount of cookies sold per day
//   numCookieSold : [], // amount of cookies sold per hour
//   openHours : ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   rendomNumCust : function(){
//     return Math.random() * (this.maxCust - this.minCust) + this.minCust; //Generates random number of customers in given range
//   },
//   cookieHour : function(){                                               //cookies sold every hour
//     for (var i = 0; i < this.openHours.length; i++) {
//       this.numCookieSold.push(Math.round(this.rendomNumCust() * this.aveSale));   //rounds up the value and pushes it into array
//     } 
//   },
//   totalCookieSold : function () {                                       // total cookies sold per day. adds each array value
//     for (var i= 0; i < this.numCookieSold.length; i++) {
//       this.cookieDay += this.numCookieSold[i];
//     }
//   },
//   renderAlkiStore: function() {                                        //creates an anchor firstPike for html page
//     var ulElem = document.getElementById('alkiStore');                  //creates a combined list from two arrays  
//     for (var i = 0; i < this.numCookieSold.length; i++) {               //open hours and cookies sold in this hour.
//       var liElem = document.createElement('li');
//       liElem.textContent = this.openHours[i] + ' : ' + this.numCookieSold[i]; //parentElement.appendChild(childElement);
//       ulElem.appendChild(liElem);
//     }
//     liElem.textContent = ' Total : ' + this.cookieDay;                 // takes total amount cookieDay and put it at the end of the list
//     ulElem.appendChild(liElem);                                        // // parentElement.appendChild(childElement);
//   }
// };
// alkiStore.cookieHour();
// alkiStore.totalCookieSold();
// alkiStore.renderAlkiStore();
