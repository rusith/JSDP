/* Module Pattern 

    Module patterns encapsulates the privacy of the module
    using closures. There are no access modifiers on JS , so  we have
    no way to define something private inside a module natively.
    using the module pattern we can encapsule private implementation details
    and expose only some part of the module.
*/

var TestModule = (function(){
    /* count cannot be accessed from outside the function
       And acts as a private variable
    */
    count = 0;

    /*
        A private function
     */
    function divide(value, by) {
        return value / by;
    }

    return  {
        /* a public variable */
        callCount:0,
        incrementCount: function(by) {
            this.callCount++;
            count+=by;
        },
        decrementCount: function(by) {
            this.callCount++;
            count-=by
        },
        divideCount: function(by) {
            this.callCount++;
            return divide(count, by);
        }
    };
})();


TestModule.decrementCount(10);
TestModule.incrementCount(20);

console.log(TestModule.callCount);

/*
    There some improved patterns which based on this pattern like the 
    Revealing Module Pattern 
 */