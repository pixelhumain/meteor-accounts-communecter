Package.describe({
    name: 'djabatav:communecter-oauth',
    summary: 'Communecter OAuth flow',
    version: '1.0.0'
});

Package.onUse(function (api) {
    api.use('oauth2@1.1.0', ['client', 'server']);
    api.use('oauth@1.1.0', ['client', 'server']);
    api.use('http@1.1.0', ['server']);
    api.use('underscore@1.0.0', 'client');
    api.use('random@1.0.0', 'client');
    api.use('service-configuration@1.0.0', ['client', 'server']);

    api.addFiles('communecter_server.js', 'server');
    api.addFiles('communecter_client.js', 'client');

    api.export('Communecter');
});