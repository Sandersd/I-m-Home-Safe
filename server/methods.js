/*****************************************************************************/
/* Server Only Methods */
/*****************************************************************************/
Meteor.methods({
  /*
   * Example:
   *
   * '/app/items/insert': function (item) {
   * }
   */

    sendMsg: function () {
        console.log("working");
        twilio = Twilio('AC333bfe7ea01127968ff18c736e67ce0f', '0bfbc0d0952f41987f052537a11f52fd');
        twilio.sendSms({
            to:'07707019489', // Any number Twilio can deliver to
            from: '+441560412017', // A number you bought from Twilio and can use for outbound communication
            body: 'test' // body of the SMS message
        }, function(err, responseData) { //this function is executed when a response is received from Twilio
            if (!err) { // "err" is an error received during the request, if any
                // "responseData" is a JavaScript object containing data received from Twilio.
                // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
                // http://www.twilio.com/docs/api/rest/sending-sms#example-1
                console.log(responseData.from); // outputs "+14506667788"
                console.log(responseData.body); // outputs "word to your mother."
            } else {
                console.log(err);
            }
        });
    }
});


