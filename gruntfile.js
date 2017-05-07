module.exports = function(grunt) {
    "use strict";

    grunt.initConfig({
        copy: {
            sql: {
                files: [{
                    cwd: './src/db/sql',
                    src: ['\*\*/\*.sql'],
                    dest: './dist/db/sql/',
                    expand: true
                }]
            }
        },
        ts: {
            app: {
                files: [{
                    src: ["src/\*\*/\*.ts", "!src/.baseDir.ts"],
                    dest: "./dist"
                }],
                options: {
                    module: "commonjs",
                    target: "es6",
                    sourceMap: false
                }
            }
        },
        watch: {
            ts: {
                files: ["src/\*\*/\*.ts"],
                tasks: ['ts']
            }
        },
        run: {
            server: {
                cmd: "nodemon",
                args: [
                    "./bin/www"
                ]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-run");

    grunt.registerTask("default", [
        "copy",
        "ts",
        "run",
        "watch"
    ]);

};
