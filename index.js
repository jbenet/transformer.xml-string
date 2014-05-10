var transformer = require('dat-transformer');

module.exports = new transformer.Type({
  // @context and type filled in automatically.
  'id': 'xml-string',
  'description': 'XML - eXtensible Markup Language as string.',
  'schema': "string"
});
