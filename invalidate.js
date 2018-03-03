
   /*
* Cloudfront distribution ID as the user parameter.
* To use in lambda, use this JSON as your test:
* { dist: '<Cloudfront distribution ID>' }
*/

var AWS = require('aws-sdk');
var cloudfront = new AWS.CloudFront();
  // call cloudfront
  var params = {
    DistributionId: 'yourDistibutionId',
    InvalidationBatch: {
      CallerReference: Date.now().toString(),
      Paths: {
        Quantity: 1,
        Items: [
          '/your-url-to-invalidate/*'
        ]
      }
    }
  };
  


function handler(evt, ctx, cb) {
   cloudfront.createInvalidation(params, function(err, data) {
    if (err)
      console.log(true, err);
    else
      console.log(false, data);
  });
}

exports.handler = handler;
