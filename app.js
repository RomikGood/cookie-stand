'use strict';
CookieStore.openHours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
CookieStore.allStores = [];
function CookieStore (storeName, minCust, maxCust, aveSale) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.aveSale = aveSale;
  this.cookieDay = 0;                  // total amount of cookies sold per day
  this.numCookieSold = [];             // array of amount of cookies sold per hour
  CookieStore.allStores.push(this);    //array of all cookie stores
}
CookieStore.prototype.rendomNumCust = function(){
  return Math.random() * (this.maxCust - this.minCust) + this.minCust; //Generates random number of customers in given range
};
CookieStore.prototype.cookieHour = function(){                                               //cookies sold every hour
  for (var i = 0; i < CookieStore.openHours.length; i++) {
    this.numCookieSold.push(Math.round(this.rendomNumCust() * this.aveSale));   //rounds up the value and pushes it into array
  }
};
CookieStore.prototype.totalCookieSold = function () {       // total cookies sold per day. adds each array value
  for (var i= 0; i < this.numCookieSold.length; i++) {
    this.cookieDay += this.numCookieSold[i];
  }
};

var CookieStoreTable = document.getElementById('cookieStore');  // we access table in the DOM (html)

CookieStore.prototype.renderStore = function() {

  var trElement = document.createElement('tr'); // create tr
  var tdElement = document.createElement('th'); // create td / th
  
  tdElement.textContent = this.storeName; //give td content (name of each store)
  trElement.appendChild(tdElement); //append td to tr

  for (var i = 0; i < this.numCookieSold.length; i++) {   //
    var cookieSoldData = document.createElement('td');    // create td
    cookieSoldData.textContent = this.numCookieSold[i];   // takes data from i element of arrany # cookies sold per hour
    trElement.appendChild(cookieSoldData);               // append this data to tr
  }

  var totalElement = document.createElement('th');         //create td (or th) for total
  totalElement.textContent = this.cookieDay;               //give td content of total sold per day
  trElement.appendChild(totalElement);                     //append this total td to tr


  CookieStoreTable.appendChild(trElement);          //append tr to table 
};

function renderHeader() {   // create header row function

  var headerRow = document.createElement('tr'); // create tr

  var headings = ['','6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','Total'];
  for(var i of headings) {
    var thElement = document.createElement('th');  // creat th (or td) for each hour
    thElement.textContent = [i];  // fill in their content
    headerRow.appendChild(thElement);  //append th to headerRow
  }

  CookieStoreTable.appendChild(headerRow); // append hours row to the table
}

renderHeader(); // call function to create hours header row 

new CookieStore ('firstPike', 23, 65, 6.3); // create new object
new CookieStore ('seaTac', 3, 24, 1.2);
new CookieStore ('capHill', 23, 65, 6.3);
new CookieStore ('seaCenter', 11, 38, 3.7);
new CookieStore ('alkiStore', 2, 16, 4.6);

for(var i = 0; i < CookieStore.allStores.length; i++){   // call all functions for each store
  CookieStore.allStores[i].rendomNumCust();
  CookieStore.allStores[i].cookieHour();
  CookieStore.allStores[i].totalCookieSold();
  CookieStore.allStores[i].renderStore(); // call function to append data to the table
}

function addNewStoreSubmitted(event) {
  event.preventDefault();
  var formElement = event.target;
  var newStore = new CookieStore(formElement.storeName.value, formElement.minCust.value, 
    formElement.maxCust.value, formElement.aveSale.value);
  newStore.rendomNumCust();
  newStore.cookieHour();
  newStore.totalCookieSold();
  newStore.renderStore();

}

var storeFormElement = document.getElementById('add-store');
storeFormElement.addEventListener('submit', addNewStoreSubmitted);
