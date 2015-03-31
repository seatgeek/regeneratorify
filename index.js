'use strict';

var regenerator = require('regenerator');
var through     = require('through');

module.exports = function(file) {
  var data = "";
  var header = "var regeneratorRuntime = require('regenerator/runtime');\n";

  function write(buf) {
    data += buf;
  }

  function end() {
    try {
      var rdata = regenerator.compile(data).code;
    } catch (e) {
      stream.emit("error", e);
      stream.queue(null);
      return;
    }

    if (rdata !== data) {
      rdata = header + rdata;
    }
    stream.queue(rdata);
    stream.queue(null);
  }

  var stream = through(write, end);

  return stream;
}
