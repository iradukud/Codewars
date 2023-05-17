/*
DESCRIPTION:
Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

Examples
* With input "10.0.0.0", "10.0.0.50"  => return   50 
* With input "10.0.0.0", "10.0.1.0"   => return  256 
* With input "20.0.0.10", "20.0.1.0"  => return  246

*/

//Solution  
const ipsBetween = (ip1, ip2) => {
    let diff = 0;
    const aIp1 = ip1.split(".");
    const aIp2 = ip2.split(".");

    // check that the IPs are well formed
    if (aIp1.length !== 4 || aIp2.length !== 4) {
        return "Invalid IPs: incorrect format";
    }

    for (x = 0; x < 4; x++) {
        // check that all the parts are valid (numeric and 0-255)
        if (
            isNaN(aIp1[x]) || isNaN(aIp2[x])
            || aIp1[x] < 0 || aIp1[x] > 255
            || aIp2[x] < 0 || aIp2[x] > 255
        ) {
            return "Invalid IPs: incorrect values"
        }
        diff += (aIp1[x] - aIp2[x]) * (256 ** (3 - x));
    }
    return Math.abs(diff);
}