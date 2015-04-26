/*****************************************************************************/
/* Checkout: Event Handlers */
/*****************************************************************************/
Template.Checkout.events({
});

/*****************************************************************************/
/* Checkout: Helpers */
/*****************************************************************************/
Template.Checkout.helpers({
});

/*****************************************************************************/
/* Checkout: Lifecycle Hooks */
/*****************************************************************************/
Template.Checkout.created = function () {
};

Template.Checkout.rendered = function () {
    /*gateway.clientToken.generate({}, function (err, response) {
        var clientToken = response.clientToken
    });*/
    var gateway = braintree.connect({
        environment:  braintree.Environment.Sandbox,
        merchantId:   '3rrtnk3y4m8fwq4p',
        publicKey:    'qwxqqy3h2j7fkwpb',
        privateKey:   'b5f86d7dc3c0e9a30b7c0862e29ae64c'
    });

    app.get("/client_token", function (req, res) {
        gateway.clientToken.generate({

        }, function (err, response) {
            res.send(response.clientToken);
        });
    });

    app.post("/purchases", function (req, res) {
        var nonce = req.body.payment_method_nonce;
        // Use payment method nonce here
    });

    gateway.transaction.sale({
        amount: '10.00',
        paymentMethodNonce: 'nonce-from-the-client',
    }, function (err, result) {
    });
};

Template.Checkout.destroyed = function () {
};
