/**
 * Created by Suraj on 04/07/2017.
 */

/*
https://stackoverflow.com/questions/18223550/javascript-how-to-assign-json-data-to-an-html-element-and-send-to-api-onclick#18223772
https://market.mashape.com/srj/applications/default-application
https://quotesondesign.com/api-v4-0/
 https://www.reddit.com/r/FreeCodeCamp/comments/4b1fox/free_api_for_random_quote_machine/

 */

$(document).ready(function () {

    var theQuote = $("#para");
    var theAuthor = $("#auth");
    var theButton = $("#btnNxt");
    changeQuote();

    theButton.on("click", changeQuote);

    function changeQuote() {
        var jqxhr = $.ajax({
            url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
            type: "GET", // default is GET but you can use other verbs based on your needs.
            cache: false, // default is true, but false for dataType 'script' and 'jsonp', so set it on need basis.
            data: {}, // a
            // dd your request parameters in the data object.
            dataType: "json", // specify the dataType for future reference
            jsonp: "callback", // only specify this to match the name of callback parameter your API is expecting for JSONP requests.
            statusCode: { // if you want to handle specific error codes, use the status code mapping settings.
                //404: handler404,
                //500: handler500
            }
        });

        jqxhr.done(function (data) {

            var post = data.shift();

            theQuote.html( post.content );              // for wp-json
            theAuthor.text( "-"+post.title );           // for wp-json
            theAuthor.attr( "title", post.title );

        });
        jqxhr.fail(function () {
            console.log("jqxhr Failed!");
        });
    }

});

/*

------------------------------> $.ajax reference

var jqxhr = $.ajax({
    url: url,
    type: "GET", // default is GET but you can use other verbs based on your needs.
    cache: true, // default is true, but false for dataType 'script' and 'jsonp', so set it on need basis.
    data: {}, // add your request parameters in the data object.
    dataType: "json", // specify the dataType for future reference
    jsonp: "callback", // only specify this to match the name of callback parameter your API is expecting for JSONP requests.
    statusCode: { // if you want to handle specific error codes, use the status code mapping settings.
        404: handler404,
        500: handler500
    }
});
jqxhr.done(successHandler);
jqxhr.fail(failureHandler);

---------------------------------
*/
