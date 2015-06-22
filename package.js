Package.describe({
  name: 'goltfisch:filepicker',
  summary: 'Filepicker library for Meteor',
  version: '0.1.0',
  git: 'https://github.com/goltfisch/meteor-filepicker.git'
});

Package.onUse(function (api) {
  api.addFiles('filepicker.js', 'client');
});
