/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.22/15.4.4.22-9-b-4.js
 * @description Array.prototype.reduceRight - properties added into own object in step 8 can be visited on an Array-like object
 */


function testcase() {

        var testResult = false;

        function callbackfn(preVal, curVal, idx, obj) {
            if (idx === 0 && curVal === 0) {
                testResult = true;
            }
        }

        var obj = { length: 2 };

        Object.defineProperty(obj, "1", {
            get: function () {
                Object.defineProperty(obj, "0", {
                    get: function () {
                        return 0;
                    },
                    configurable: true
                });
                return 1;
            },
            configurable: true
        });

        Array.prototype.reduceRight.call(obj, callbackfn);
        return testResult;
    }
runTestCase(testcase);