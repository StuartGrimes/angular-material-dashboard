(function(){
  'use strict';

  angular
      .module('app')
     	.factory('RemoteDataService',function( $http ) {

        /* get data from external server. returns a Promise */
        function getData() {
          var urlSpreadSheet = "https://spreadsheets.google.com/feeds/list/11AReoR1QohZbVGfxait3iOr-G3wmMNLoUtZf7CLPhm0/1/public/values";
          var urlCorsIo = "http://cors.io/?u=";
          var formatJson = "?alt=json"
          var CorsUrl, JsonpUrl;

          // CORS request
          CorsUrl = urlCorsIo + urlSpreadSheet + formatJson;

          return $http.get( CorsUrl ); // returns a promise
        }

        /* creates a nicer object from data got from external server. returns an object */
        function showData(oData) {
          //console.log("-----------------");

          var aRows = oData.data.feed.entry;
          var oCurrentRow;
          var aMyDataFromGoogleSpreadsheet = [];
          var id, companyname, industry, contact, phone, email, address1, city, region, country;

          $.each(aRows, function(index, oRow) {
            oCurrentRow = {};
            oCurrentRow.id = oRow.gsx$id.$t;
            oCurrentRow.companyname = oRow.gsx$companyname.$t;
            oCurrentRow.industry = oRow.gsx$industry.$t;
            oCurrentRow.contact = oRow.gsx$contact.$t;
            oCurrentRow.phone = oRow.gsx$phone.$t;
            oCurrentRow.email = oRow.gsx$email.$t;
            oCurrentRow.address1 = oRow.gsx$address1.$t;
            oCurrentRow.city = oRow.gsx$city.$t;
            oCurrentRow.region = oRow.gsx$region.$t;
            oCurrentRow.country = oRow.gsx$country.$t;
            aMyDataFromGoogleSpreadsheet.push(oCurrentRow)
          });

          return aMyDataFromGoogleSpreadsheet;

        }


    		return {
    			getData: getData,
          showData: showData
    		};


     	});



})();
