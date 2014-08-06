// view helpers

module.exports = {

  truncate: function(text, limit) {
    if (text.length > limit)
      return text.substr(0, limit);
    else
      return text;
  },

  escape_attribute: function(text) {
    return text.replace(/\"/g, "&quot;");
  }

  report_url: function(report) {
    return "/report/" + report.inspector + "/" + report.report_id;
  }

}