Accounts.oauth.registerService('communecter');

if (Meteor.isClient) {
    const loginWithCommunecter = function (options, callback) {
        // support a callback without options
        if (!callback && typeof options === "function") {
            callback = options;
            options = null;
        }

        var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
        Communecter.requestCredential(options, credentialRequestCompleteCallback);
    };
    Accounts.registerClientLoginFunction('communecter', loginWithCommunecter);
    Meteor.loginWithCommunecter = function () {
        return Accounts.applyLoginFunction('communecter', arguments);
    };
} else {
    Accounts.addAutopublishFields({
        // publish all fields including access token, which can legitimately
        // be used from the client (if transmitted over ssl or on
        // localhost). http://www.communecter.com/communecter_api/auth/#oauth2implicit
        forLoggedInUser: ['services.communecter'],
        forOtherUsers: ['services.communecter.id']
    });
}