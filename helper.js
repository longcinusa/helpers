       'use strict';

        module.exports = {
          passwordCheck: passwordCheck
        };

        function passwordCheck(username, password, cb) {
          var loginrequired = (username === 'longcinusa' && password === '12345');
          cb(null, loginrequired);
        }
