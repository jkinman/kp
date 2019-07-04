var request = require('request');

function mailchimpAddListCall(email, cb){
var subscriber = JSON.stringify({
        "email_address": email,
        "status": "subscribed",
        "source":"dlabs - API",
        "tags":["dlabs"],
        "marketing_permissions":[{"dlabs":"true"}]
    });

    console.log(subscriber)

request({
             method: 'POST',
             url: 'https://us20.api.mailchimp.com/3.0/lists/93c62bf4ab/members',
             body: subscriber,
             headers:
                    {
                        Authorization: 'apikey 57c1ac453dc00f9144fd5574d44acfa2-us20',
                        'Content-Type': 'application/json'
                    }

         },
          (error, response, body) => {
            if(error) {
                cb(err, null)
            } else {

                var bodyObj = JSON.parse(body);
                console.log(bodyObj.status);
                console.log(bodyObj);
                if(bodyObj.status === 400){
                    cb(bodyObj.detail, null);
                }
                var bodyObj = JSON.parse(body);
                cb(null, bodyObj.email_address +" added to list.");
            }
        });
}

module.exports = mailchimpAddListCall