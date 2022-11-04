# Dato custom field extension bug

## Steps

### Dato & Extension setup

1. Clone this repo
1. run the extension using `npm run start`
1. create a sandbox dato instance
1. register the plugin as a custom private plugin with the entry point `http://localhost:3000/`
1. create a model with a JSON field type, with the id `custom_field_ext` so the extension can look for it
1. create a record of that new model

## Bug reproduction

Given a model that has a field extension applied to it:

- create a new record of the model
- check the UI of the field

or

- view a record that already has the extension on it
- check the UI of the field

or

- view a record that already has the extension on it
- verify the custom field UI is there
- navigate away (click settings)
- navigate back (click content)
- check the UI of the field, it is now missing

If the field is displayed refresh the page. for my sandbox I can refresh "https://sandbox-9778.admin.datocms.com/editor/item_types/877647/items/new" and the field extension will disappear

## Expected outcome

The registered custom field UI is applied, replacing the standard JSON UI.

## Actual outcome

`renderFieldExtension` is never called, the default JSON view is shown. This can be verified by seeing the console logs
