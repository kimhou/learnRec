/**
 * @module mod1
 * @description
 * @author kimhou create on 15/10/12 10:07
 */
 

module.exports = class{
    constructor(name = 'mod1'){
        this.name = name;
        [1,8,3].sort((a, b) => {console.log(this.name);return a > b ? 1 : -1;});
    }

    say(str = ''){
        $('body').append('<div class="border">' + str+'</div>');
    }
}