/*global System */
'use strict';

alert("test");
/* if you need any specific jspm config place it here */
System.config({
  transpiler: 'babel',
  packages: {
    './': {
      defaultExtension: false
    }
  },
  map: {
    //'react': 'npm:react@0.13'
  }
});
