"use strict";
function KgToLbs(weight) {
    //Narrowing
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
KgToLbs(20);
KgToLbs('20');
