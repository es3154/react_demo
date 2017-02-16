/**
 * Created by ddxx on 2016/11/1.
 *
 */
export class ModuleFactory
{
    constructor()
    {

    }

    load(module,callBack) {
        if(module == 'a') {
            loadA(callBack);
        } else if (module == 'b'){
            loadB(callBack);
        }else if (module == 'c'){
            loadC(callBack);
        }

    }

    // loadA(callBack)
    // {
    //     require.ensure([],function (require) {
    //         let A = require('./test/a.js');
    //         callBack(A);
    //     });
    // }
    //
    // loadB(callBack)
    // {
    //     require.ensure([],function (require) {
    //         let B = require('./test/b.js');
    //         callBack(B);
    //     });
    // }
    //
    // loadC(callBack)
    // {
    //     require.ensure([],function (require) {
    //         let B = require('./test/c.js');
    //         callBack(B);
    //     });
    // }


}

function loadA(callBack) {
    require.ensure([],function (require) {
        let A = require('./test/a.js');
        callBack(A);
    });
}
function loadB(callBack)
{
    require.ensure([],function (require) {
        let B = require('./test/b.js');
        callBack(B);
    });
}

function loadC(callBack)
{
    require.ensure([],function (require) {
        let B = require('./test/c.js');
        callBack(B);
    });
}
