/**
 * Created by ddxx on 2016/11/1.
 */
// function getTemplate(templateName) {
//     return require('./test/'+templateName);
// }

import {ModuleFactory} from './moduleFactory.js';

class Main2
{
    constructor()
    {
        this.moduleFactory = new ModuleFactory();
    }

    loadModule(module){
        this.moduleFactory.load(module,this.getModuleResult);
    }

    getModuleResult(R){
        let r = new R();
        r.ta();
    }
}

let main = new Main2();
main.loadModule('a');
main.loadModule('b');
main.loadModule('c');

// function loadModule(murl) {
//     require.ensure([],function (require) {
//         var fun = require(murl);
//         console.log(fun());
//     });
// }
// function loadModuleb() {
//     require.ensure([],function (require) {
//         var fun = require('./test/b.js');
//         console.log(fun());
//     });
// }
// function loadModulec() {
//     require.ensure([],function (require) {
//         var fun = require('./test/c.js');
//         console.log(fun());
//     });
// }
// console.log('ssssss');
// console.log(getTemplate('a')());
// console.log(getTemplate('b')());
// console.log(getTemplate('c')());

// loadModule('./test/b.js');
// loadModule('./test/a.js');
// loadModule('./test/c.js');
// loadModuleb();
// loadModulec();