(function(){
  'use strict';

  angular
 	.module('CustomerDetailService',[])
 	.factory('RemoteDataService',function( $http ) {

    var urlSpreadSheet = "https://spreadsheets.google.com/feeds/list/11AReoR1QohZbVGfxait3iOr-G3wmMNLoUtZf7CLPhm0/1/public/values";
    var urlCorsIo = "http://cors.io/?u=";

    var formatJson = "?alt=json"
    var formatJsonP = "?alt=json-in-script"

    var CorsUrl, JsonpUrl;
    var aMyDataFromGoogleSpreadsheet = [];

    // CORS request
    CorsUrl = urlCorsIo + urlSpreadSheet + formatJson;
    $.getJSON(CorsUrl, showData);

    // JSONP request
    JsonpUrl = urlSpreadSheet + formatJsonP;

    $.ajax({
      url: JsonpUrl,
      jsonp: "callback",
      dataType: "jsonp",
      success: showData
    });

    // Manage data function
    function showData(oData) {
      //console.log("-----------------");
      var aRows = oData.feed.entry;
      var oCurrentRow;
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

      $scope.myData = aMyDataFromGoogleSpreadsheet;
      console.log($scope.myData);
    }




 	});



})();
 ______________________________________________________
