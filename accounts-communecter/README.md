# djabatav:accounts-communecter package

A Meteor login service for Communecter Connect .

## Installation

    meteor add djabatav:accounts-communecter

## Usage

`Meteor.loginWithCommunecter(options, callback)`
* `options` - object containing options, see below (optional)
* `callback` - callback function (optional)

#### Example

```js
Template.myTemplateName.events({
  'click #login-button': function() {
    Meteor.loginWithCommunecter();
  }
);
```


## Options

These options override service configuration stored in the database.

* `loginStyle`: `redirect` or `popup`
* `redirectUrl`: Where to redirect after successful login. Only used if `loginStyle` is set to `redirect`

## Manual Configuration Setup

You can manually configure this package by upserting the service configuration on startup. First, add the `service-configuration` package:

    meteor add service-configuration

### Service Configuration

The following service configuration are available:

* `clientId`: Communecter client identifier
* `secret`: Communecter client shared secret
* `idTokenWhitelistFields`: A list of fields from IDToken to be added to Meteor.user().services.communecter object

### Project Configuration

Then in your project:

```js
if (Meteor.isServer) {
  Meteor.startup(function () {
    ServiceConfiguration.configurations.upsert(
      { service: 'communecter' },
      {
        $set: {
          loginStyle: 'redirect',
          clientId: 'my-client-id-registered-with-the-communecter-server',
          secret: 'my-client-shared-secret',
          idTokenWhitelistFields: []
        }
      }
    );
  });
}
```