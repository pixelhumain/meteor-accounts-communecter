Package.describe({
  name: 'djabatav:accounts-communecter',
  version: '0.0.1',
  summary: 'Login service for Communecter accounts',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  // api.versionsFrom('1.6.1.1');
  api.use('ecmascript@0.10.7');
  api.use('accounts-base@1.4.2', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);

  api.use('accounts-oauth@1.1.15', ['client', 'server']);
  api.use('djabatav:communecter-oauth@1.0.0');
  api.imply('djabatav:communecter-oauth');

  api.use(
    ['accounts-ui@1.3.0', 'djabatav:communecter-config-ui@1.0.1'],
    ['client', 'server'],
    { weak: true }
  );
  api.addFiles('notice.js');
  api.addFiles('communecter.js');
});