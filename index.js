var Type = require('transformer-type');

module.exports = Type({
  // @context and type filled in automatically.
  'id': 'xml-string',
  'description': 'XML - eXtensible Markup Language as string.',
  'schema': "string"
});
