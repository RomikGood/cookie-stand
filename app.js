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
  ulElem.appendChild(liElem);                                        // parentElement.appendChild(childElement);
};

var CookieStoreTable = document.getElementById('cookieStore');

CookieStore.prototype.renderStore = function() {
  var trElement = document.createElement('tr'); // create tr
  var tdElement = document.createElement('td'); // create td
  tdElement.textContent = this.storeName; //content
  trElement.appendChild(tdElement); //append to tr

  for (var i = 0; i < this.numCookieSold.length; i++) {   //
    var cookieSoldData = document.createElement('td');    //
    cookieSoldData.textContent = this.numCookieSold[i];   //
    trElement.appendChild(cookieSoldData);               //
  }

  var totalElement = document.createElement('td');         //
  totalElement.textContent = this.cookieDay;               //
  trElement.appendChild(totalElement);                     //


  CookieStoreTable.appendChild(trElement);
};


function renderHeader() {
  // create a row
  var headerRow = document.createElement('tr');

  var headings = ['','6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','Total'];
  for(var i of headings) {
    var thElement = document.createElement('th');

    // fill in their content
    // Note, if using "for(var i in headings)" then the following line would be written as:
    //    "thElement.textContent = headings[i]"
    thElement.textContent = [i];

    //append th to headerRow
    headerRow.appendChild(thElement);
  }

  // append to the table
  CookieStoreTable.appendChild(headerRow);
}



new CookieStore ('firstPike', 23, 65, 6.3);
new CookieStore ('seaTac', 3, 24, 1.2);
new CookieStore ('capHill', 23, 65, 6.3);
new CookieStore ('seaCenter', 11, 38, 3.7);
new CookieStore ('alkiStore', 2, 16, 4.6);
//console.log(CookieStore.allStores[0]);

renderHeader();

for(var i = 0; i < CookieStore.allStores.length; i++){
  console.log(CookieStore.allStores[i]);
  CookieStore.allStores[i].cookieHour();
  CookieStore.allStores[i].totalCookieSold();
  CookieStore.allStores[i].renderStore();
}



