exports.readString = function(str){
    var str = str.toLowerCase();
    var arr = str.split('');
    var result = '';
    var count;
    for (var i = 0; i < arr.length; i++) {
        count = 0;
        for (var j = 0; j < arr.length; j++) 
        {
          if (arr[i] === arr[j]) {
            count+= 1;
          }
        }
        if (count == 1) {
          result = arr[i];
          break;
        }
    }
    return result;
  };

