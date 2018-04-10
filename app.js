'use strict';
var firstPike = {
  minCust : 23,
  maxCust : 65,
  aveSale : 6.3,
  cookieDay : 0, // total amount of cookies sold per day
  numCookieSold : [], // amount of cookies sold per hour
  openHours : ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  rendomNumCust : function(){
    return Math.random() * (this.maxCust - this.minCust) + this.minCust; //Generates random number of customers in given range
  },
  cookieHour : function(){                                               //cookies sold every hour
    for (var i = 0; i < this.openHours.length; i++) {
      this.numCookieSold.push(Math.round(this.rendomNumCust() * this.aveSale));   //rounds up the value and pushes it into array
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
      liElem.textContent = this.openHours[i] + ' : ' + this.numCookieSold[i]; //parentElement.appendChild(childElement);
      ulElem.appendChild(liElem);
    }

    liElem.textContent = ' Total : ' + this.cookieDay;                 // takes total amount cookieDay and put it at the end of the list
    ulElem.appendChild(liElem);                                        // // parentElement.appendChild(childElement);
  }
};

firstPike.cookieHour();
console.log(firstPike.numCookieSold);
firstPike.totalCookieSold();
console.log(firstPike.cookieDay);
//firstPike.renderFirstPike();
console.log(firstPike.numCookieSold);

// SeatTac Store
///////////////////////////////////////////////////////////////////////////

var seaTac = {
  minCust : 3,
  maxCust : 24,
  aveSale : 1.2,
  cookieDay : 0, // total amount of cookies sold per day
  numCookieSold : [], // amount of cookies sold per hour
  openHours : ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  rendomNumCust : function(){
    return Math.random() * (this.maxCust - this.minCust) + this.minCust; //Generates random number of customers in given range
  },
  cookieHour : function(){                                               //cookies sold every hour
    for (var i = 0; i < this.openHours.length; i++) {
      this.numCookieSold.push(Math.round(this.rendomNumCust() * this.aveSale));   //rounds up the value and pushes it into array
    }
  },
  totalCookieSold : function () {                                       // total cookies sold per day. adds each array value
    for (var i= 0; i < this.numCookieSold.length; i++) {
      this.cookieDay += this.numCookieSold[i];
    }
  },
  renderSeaTac : function() {                                        //creates an anchor firstPike for html page
    var ulElem = document.getElementById('seaTac');                  //creates a combined list from two arrays  
    for (var i = 0; i < this.numCookieSold.length; i++) {               //open hours and cookies sold in this hour.
      var liElem = document.createElement('li');
      liElem.textContent = this.openHours[i] + ' : ' + this.numCookieSold[i]; //parentElement.appendChild(childElement);
      ulElem.appendChild(liElem);
    }

    liElem.textContent = ' Total : ' + this.cookieDay;                 // takes total amount cookieDay and put it at the end of the list
    ulElem.appendChild(liElem);                                        // // parentElement.appendChild(childElement);
  }
};
seaTac.cookieHour();
seaTac.totalCookieSold();
seaTac.renderSeaTac();

// seaCenter Store
///////////////////////////////////////////////////////////////////////////
var seaCenter = {
  minCust : 11,
  maxCust : 38,
  aveSale : 3.7,
  cookieDay : 0, // total amount of cookies sold per day
  numCookieSold : [], // amount of cookies sold per hour
  openHours : ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  rendomNumCust : function(){
    return Math.random() * (this.maxCust - this.minCust) + this.minCust; //Generates random number of customers in given range
  },
  cookieHour : function(){                                               //cookies sold every hour
    for (var i = 0; i < this.openHours.length; i++) {
      this.numCookieSold.push(Math.round(this.rendomNumCust() * this.aveSale));   //rounds up the value and pushes it into array
    }
  },
  totalCookieSold : function () {                                       // total cookies sold per day. adds each array value
    for (var i= 0; i < this.numCookieSold.length; i++) {
      this.cookieDay += this.numCookieSold[i];
    }
  },
  renderSeaCenter : function() {                                        //creates an anchor firstPike for html page
    var ulElem = document.getElementById('seaCenter');                  //creates a combined list from two arrays  
    for (var i = 0; i < this.numCookieSold.length; i++) {               //open hours and cookies sold in this hour.
      var liElem = document.createElement('li');
      liElem.textContent = this.openHours[i] + ' : ' + this.numCookieSold[i]; //parentElement.appendChild(childElement);
      ulElem.appendChild(liElem);
    }

    liElem.textContent = ' Total : ' + this.cookieDay;                 // takes total amount cookieDay and put it at the end of the list
    ulElem.appendChild(liElem);                                        // // parentElement.appendChild(childElement);
  }
};
seaCenter.cookieHour();
seaCenter.totalCookieSold();
seaCenter.renderSeaCenter();


////////////////
///////Capitol Hill Store

var capHill = {
  minCust : 20,
  maxCust : 38,
  aveSale : 3.7,
  cookieDay : 0, // total amount of cookies sold per day
  numCookieSold : [], // amount of cookies sold per hour
  openHours : ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  rendomNumCust : function(){
    return Math.random() * (this.maxCust - this.minCust) + this.minCust; //Generates random number of customers in given range
  },
  cookieHour : function(){                                               //cookies sold every hour
    for (var i = 0; i < this.openHours.length; i++) {
      this.numCookieSold.push(Math.round(this.rendomNumCust() * this.aveSale));   //rounds up the value and pushes it into array
    } 
  },
  totalCookieSold : function () {                                       // total cookies sold per day. adds each array value
    for (var i= 0; i < this.numCookieSold.length; i++) {
      this.cookieDay += this.numCookieSold[i];
    }
  },
  renderCapHill: function() {                                        //creates an anchor firstPike for html page
    var ulElem = document.getElementById('capHill');                  //creates a combined list from two arrays  
    for (var i = 0; i < this.numCookieSold.length; i++) {               //open hours and cookies sold in this hour.
      var liElem = document.createElement('li');
      liElem.textContent = this.openHours[i] + ' : ' + this.numCookieSold[i]; //parentElement.appendChild(childElement);
      ulElem.appendChild(liElem);
    }
    liElem.textContent = ' Total : ' + this.cookieDay;                 // takes total amount cookieDay and put it at the end of the list
    ulElem.appendChild(liElem);                                        // // parentElement.appendChild(childElement);
  }
};
capHill.cookieHour();
capHill.totalCookieSold();
capHill.renderCapHill();


////////////////
///////Capitol Hill Store

var alkiStore = {
  minCust : 2,
  maxCust : 16,
  aveSale : 4.6,
  cookieDay : 0, // total amount of cookies sold per day
  numCookieSold : [], // amount of cookies sold per hour
  openHours : ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  rendomNumCust : function(){
    return Math.random() * (this.maxCust - this.minCust) + this.minCust; //Generates random number of customers in given range
  },
  cookieHour : function(){                                               //cookies sold every hour
    for (var i = 0; i < this.openHours.length; i++) {
      this.numCookieSold.push(Math.round(this.rendomNumCust() * this.aveSale));   //rounds up the value and pushes it into array
    } 
  },
  totalCookieSold : function () {                                       // total cookies sold per day. adds each array value
    for (var i= 0; i < this.numCookieSold.length; i++) {
      this.cookieDay += this.numCookieSold[i];
    }
  },
  renderAlkiStore: function() {                                        //creates an anchor firstPike for html page
    var ulElem = document.getElementById('alkiStore');                  //creates a combined list from two arrays  
    for (var i = 0; i < this.numCookieSold.length; i++) {               //open hours and cookies sold in this hour.
      var liElem = document.createElement('li');
      liElem.textContent = this.openHours[i] + ' : ' + this.numCookieSold[i]; //parentElement.appendChild(childElement);
      ulElem.appendChild(liElem);
    }
    liElem.textContent = ' Total : ' + this.cookieDay;                 // takes total amount cookieDay and put it at the end of the list
    ulElem.appendChild(liElem);                                        // // parentElement.appendChild(childElement);
  }
};
alkiStore.cookieHour();
alkiStore.totalCookieSold();
alkiStore.renderAlkiStore();
