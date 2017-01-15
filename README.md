# Neighborhood Map Project
Project Neighborhood Map from the Udacity Nanodegree

A single-page application featuring a map of Canterbury’s Cafes that are located on the highstreet. It required the use of Google Maps API that included the use of markers and infowindow. In addition to integrating Foursquare’s API. A search function was implemented using Knockout JS. 


## Main tools used:
- Google Maps API
- Foursquare API
- Knockout JS
- jQuery 

####The website can be accessed by clicking the download button on the top right, then downloading the zip folder, and finally opening the html file in the browser


##Resources used:
- [Knockout JS](http://knockoutjs.com/)
- [Foursquare’s API](https://developer.foursquare.com/)
- [Google Maps Documentation] (https://developers.google.com/maps/documentation/javascript/)
- [SnazzyMaps](https://snazzymaps.com/style/42415/bema-cafe)
- [Google Maps API 3 - Custom marker color for default (dot) marker](http://stackoverflow.com/questions/7095574/google-maps-api-3-custom-marker-color-for-default-dot-marker)
- [Google Maps API V3: Add multiple markers with InfoWindow to Google Map](http://stackoverflow.com/questions/11106671/google-maps-api-multiple-markers-with-infowindows)
- [Knouckout tutorials] (http://learn.knockoutjs.com/#/?tutorial=collections)
- [Google Maps - setIcon code makes marker disappear](http://stackoverflow.com/questions/14486908/google-maps-seticon-code-makes-marker-disappear)
-  Udacity Forums [Im stuck and I really need help!](https://discussions.udacity.com/t/im-stuck-and-i-really-need-help/195311)
-  Udacity Forums [Issue with the filter search list](https://discussions.udacity.com/t/issue-with-the-filter-search-list/206355)
- [jQuery](https://jquery.com/)
- Udacity Forums [Neighborhood Map project 5 - get data foursquare api](https://discussions.udacity.com/t/neighborhood-map-project-5-get-data-foursquare-api/30408)
- [Foursquare photo response](https://developer.foursquare.com/docs/responses/photo.html)
- Udacity Forums [Removing Map Pin with Search](https://stackoverflow.com/questions/29557938/removing-map-pin-with-search)
- [Google Marker Animations] (https://developers.google.com/maps/documentation/javascript/examples/marker-animations)
- Udacity Forums [Can’t get markers to stop bouncing](https://discussions.udacity.com/t/cant-get-markers-to-stop-bouncing/197938)
- [event namespace] (https://developers.google.com/maps/documentation/javascript/reference#event)
- [The ‘click’ binding] (http://knockoutjs.com/documentation/click-binding.html)
- [Google Maps Development](https://sites.google.com/site/gmapsdevelopment/)
- [Knockout JS Logo] (https://cdn.keycdn.com/support/wp-content/uploads/2016/04/knockoutjs-logo.png)
- [Foursquare Logo] (https://31.media.tumblr.com/ffaf0075be879b3ab0b87f0b8bcc6814/tumblr_inline_n965bkOymr1qzxhga.png)
- Udacity Forums [Handling Google Maps in Async and Fallback](https://discussions.udacity.com/t/handling-google-maps-in-async-and-fallback/34282)
- [onerror Event] (http://www.w3schools.com/jsref/event_onerror.asp)
- [jsbeautifier](http://jsbeautifier.org/)
- [jQuery.ajax()](http://api.jquery.com/jquery.ajax/)

### Changes made according to the review:
In the index.html file: 
- `Async defer` was removed from all the `<script>` tags except for G-Maps. 
- `overflow: auto` added to the side panel. 

In the jscript.js file: 
- Assigned the array's length to a variable 
- The marker bounce was changed to a multiplication of 700ms for a smoother stop/start. 
- `success:` and `error:` methods were replaced with the new `.done()` and `.fail()`.
- Removed the argument from inside the `.fail()` function 
- search filter bar shortened as suggested.
