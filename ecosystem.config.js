module.exports = {
    apps: [{
        name: '3089-moving-next',
        script: 'node_modules/next/dist/bin/next',
        args: 'start -p 3089', // Running on port 3128
        cwd: './app',
        exec_mode: 'fork',
        watch: false
    }]
}