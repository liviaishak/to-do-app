function findOdd(A) {
  var results = 0;
  var count = 0;

    for (var i = 0; i < A.length; i++) {
      for ( var j = 0; j < i; j++) {
        if ( A[j] === A[i]) {
          results = A[j];
            count++;
        }
      }
    }
        if ( count % 2 !== 0) {
          return results;

}
