/*
A western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it contains any gold. However, he could be more productive if he wrote an algorithm to do the job for him.

So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.
*/

//answer    
function checkTheBucket(bucket) {
    //returned a boolean base on whether the bucket contained gold
    return bucket.includes('gold')
}