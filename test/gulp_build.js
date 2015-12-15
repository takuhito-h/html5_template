var exec    = require('child_process').exec;
var command = 'gulp build';

describe('gulp build', function(){
    it('gulp command', function(done){
        exec(command, {
            timeout : 1000
        }, function(error, stdout, stderr){
            done();
        });
    });
});