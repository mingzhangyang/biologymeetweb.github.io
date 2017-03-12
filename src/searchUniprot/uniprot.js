/**
 * Created by mingzhang on 3/11/17.
 */
'use strict';

function search() {
  var baseUrl = 'http://www.uniprot.org/uniprot/?';
  var opts = '&limit=8&sort=score&columns=id,entry' +
    ' name,protein names,organism,length&format=tab';
  var query = document.getElementById('query').value;
  var url = baseUrl + `query=${query}` + opts;
  $.ajax({
    url: url,
    method: 'GET',
    crossDomain: true,
    success: function (res) {
      var data = readTSV(res, true);
      var html = prepTable(data);
      document.getElementById('output').innerHTML = html;
    },
    error: function (err) {console.log(err);}
  });

  function readTSV(str, head) {
    var result = {};
    var strArr = str.split('\n');
    if (head) {
      result.th = strArr[0];
      result.td = strArr.slice(1);
      return result;
    }
    result.td = strArr;
    return result;
  }

  function prepTable(data) {
    var html = '<table>';
    if (data.th) {
      var vals = data.th.split('\t');
      html += '<tr>';
      for (var i = 0, len = vals.length; i < len; i++) {
        html += `<th>${vals[i]}</th>`;
      }
      html += '<th>Sequence</th></tr>';
    }
    for (i = 0, len = data.td.length; i < len; i++) {
      if (data.td[i]) {
        var row = '<tr>';
        var line = data.td[i].split('\t');
        for (var j = 0; j < line.length; j++) {
          row += `<td>${line[j]}</td>`;
        }
        row += '<td><a' +
          ' onclick="clickShow(this)">show</a>/<a' +
          ' onclick="clickHide(this)">hide</a></td></tr>';
        html += row;
        html += `<tr class="folded"><td id="${line[0]}" colspan="7"></td></tr>`;
      }
    }
    return html + '</table>';
  }
}


function clickShow(elem) {
  var row = elem.parentNode.parentNode;
  var entry = row.firstChild.textContent;
  getEntry(entry);
}

function getEntry(entry) {
  var baseUrl = 'http://www.uniprot.org/uniprot/';
  $.ajax({
    url: baseUrl + entry + '.fasta',
    method: 'GET',
    crossDomain: true,
    success: function (res) {
      document.getElementById(entry).innerText = res;
      document.getElementById(entry).parentNode.style.display = 'table-row';
    },
    error: function (err) {console.log(err);}
  });
}

function clickHide(elem) {
  var row = elem.parentNode.parentNode;
  var entry = row.firstChild.textContent;
  document.getElementById(entry).parentNode.style.display = 'none';
}