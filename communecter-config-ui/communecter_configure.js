Template.configureLoginServiceDialogForCommunecter.helpers({
    siteUrl: function () {
        return Meteor.absoluteUrl();
    }
});

Template.configureLoginServiceDialogForCommunecter.fields = function () {
    return [
        { property: 'clientId', label: 'Client ID' },
        { property: 'secret', label: 'Client Secret' },
        { property: 'idTokenWhitelistFields', label: 'Id Token Fields' }
    ];
};