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
}

CookieStore.prototype.rendomNumCust = function(){
  return Math.random() * (this.maxCust - this.minCust) + this.minCust; //Generates random number of customers in given range
};

CookieStore.prototype.cookieHour = function(){                                               //cookies sold every hour
  for (var i = 0; i < CookieStore.openHours.length; i++) {
    this.numCookieSold.push(Math.round(this.rendomNumCust() * this.aveSale));   //rounds up the value and pushes it into array
  }
};

CookieStore.prototype.totalCookieSold = function () {                                       // total cookies sold per day. adds each array value
  for (var i= 0; i < this.numCookieSold.length; i++) {
    this.cookieDay += this.numCookieSold[i];
  }
};

CookieStore.prototype.renderStore = function() {                                        //creates an anchor firstPike for html page
  var ulElem = document.getElementById(this.storeName);                  //creates a combined list from two arrays  
  for (var i = 0; i < this.numCookieSold.length; i++) {               //open hours and cookies sold in this hour.
    var liElem = document.createElement('li');
    liElem.textContent = CookieStore.openHours[i] + ' : ' + this.numCookieSold[i]; //parentElement.appendChild(childElement);
    ulElem.appendChild(liElem);
  }

  liElem.textContent = ' Total : ' + this.cookieDay;                 // takes total amount cookieDay and put it at the end of the list
  ulElem.appendChild(liElem);                                        // // parentElement.appendChild(childElement);
};

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
