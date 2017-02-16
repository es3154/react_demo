/**
 * Created by ddxx on 2016/11/1.
 */


class A
{
    constructor()
    {
        console.log('hhhhhh');

        let [a,b,c,d,e,f] = [1,2,'3',4,5,{'c':'e'}];
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
        console.log(e);
        console.log(f.c);

        let arr = [1,2,3,4,5,6];
        let r = arr.find(value => value > 4);
        console.log(r);

        let r1 = arr.findIndex(n => n > 10);
        console.log(r1);

        arr.fill(1,2,4);
        console.log(arr);
        for(let index of arr.keys()) {
            console.log(index);
        }

        for(let value of arr.values()) {
            console.log(value);
        }

        for(let [index,value] of arr.entries()) {
            console.log(index,value);
        }
    }

    ta()
    {
        console.log('aaaaaaaaaaaaaaaaaaa');
    }

}

module.exports = A;