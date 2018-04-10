'use strict';
var firstPike = {
  minCust : 23,
  maxCust : 65,
  aveSale : 6.3,
  numCookieSold : [],
  cookieDay : 0,
  openHours : ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  rendomNumCust : function(){
    return Math.random() * (this.maxCust - this.minCust) + this.minCust; //Generates random number of customers in given range
  },
  cookieHour : function(){                                               //cookies sold every hour
    for (var i = 0; i < this.openHours.length; i++) {
      this.numCookieSold.push(Math.round(this.rendomNumCust() * this.aveSale));   //push value into array
    }
  },
  totalCookieSold : function () {                                       // total cookies sold per day. adds each array value
    for (var i= 0; i < this.numCookieSold.length; i++) {
      this.cookieDay += this.numCookieSold[i];
    }
  },
  renderFirstPike : function() {                                        //creates an anchor firstPike for html page
    var ulElem = document.getElementById('firstPike');                  //creates a combined list from two arrays  
    for (var i = 0; i < this.numCookieSold.length; i++) {               //open hours and cookies sold in this hour.
      var liElem = document.createElement('li');
      liElem.textContent = this.openHours[i] + ' : ' + this.numCookieSold[i];
      ulElem.appendChild(liElem);
    }

    liElem.textContent = ' Total : ' + this.cookieDay;                 // calculate total amount and put it at the end of the list
    ulElem.appendChild(liElem);                                        // // parentElement.appendChild(childElement);
  }
};

firstPike.cookieHour();
console.log(firstPike.numCookieSold);
firstPike.totalCookieSold();
console.log(firstPike.cookieDay);
firstPike.renderFirstPike();
console.log(firstPike.numCookieSold);

// SeatTac Store

