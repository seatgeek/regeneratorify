'use strict';

var regenerator = require('regenerator');
var through     = require('through');

module.exports = function(file) {
  var data = "";
  var header = "var regeneratorRuntime = require('regenerator/runtime');\n";
  var stream = through(write, end);

  return stream;

  function write(buf) {
    data += buf;
  }

  function end() {
    var rdata = regenerator.compile(data).code;
    if (rdata !== data) {
      rdata = header + data;
    }
    stream.queue(rdata);
    stream.queue(null);
  }
}
