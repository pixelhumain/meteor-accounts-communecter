Package.describe({
    name: 'djabatav:communecter-config-ui',
    summary: 'Blaze configuration templates for the Communecter OAuth flow.',
    version: '1.0.1'
    
});

Package.onUse(function (api) {
    api.use('templating@1.2.13', 'client');
    api.addFiles('communecter_login_button.css', 'client');
    api.addFiles(
        ['communecter_configure.html', 'communecter_configure.js'],
        'client'
    );
});