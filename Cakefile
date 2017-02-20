fs = require 'fs'
os = require 'os'
{execSync} = require 'child_process'
###
# Replaces Makefile
#
###
appName = require('./package.json').name

exeFile = "bosco-player"
dskFile = "bosco-player.desktop"
icoFile = "bosco/bosco.png"
resFiles = [
    "bosco/player.ui"
    "bosco/project.glade"
]

###
# copy files to prefix location
#
# @param prefix location
# @return true if success
###
install = (prefix) ->

    ## fix up the executable
    lines = fs.readFileSync("bin/#{exeFile}", encoding: 'utf8').split('\n')
    lines[1] = "const PREFIX = \"#{prefix}/share/#{appName}\";"
    fs.writeFileSync("#{prefix}/bin/#{exeFile}", lines.join('\n'))
    try # make executable
        execSync "chmod +x #{prefix}/bin/#{exeFile}"
    catch e
        console.log e.message

    ## fix up the .desktop launcher
    lines = fs.readFileSync("share/applications/#{dskFile}", encoding: 'utf8').split('\n')
    out = []
    for line in lines
        [key,value] = line.split('=')
        if value? then switch key
            when 'Exec' then out.push "Exec=#{prefix}/bin/#{exeFile}"
            when 'Icon' then out.push "Icon=#{prefix}/share/#{icoFile}"
            else out.push line
        else out.push line
    fs.writeFileSync("#{prefix}/share/applications/#{dskFile}", out.join('\n'))
    try # make executable
        execSync "chmod +x #{prefix}/share/applications/#{dskFile}"
    catch e
        console.log e.message

    ## just copy the remaining resources 
    try 
        execSync "cp share/#{icoFile} #{prefix}/share/#{appName}"
        for file in resFiles
            execSync "cp share/#{file} #{prefix}/share/#{appName}"
    catch e
        console.log e.message



###
#
#   cake install
#
#   copy executable to ~/.local/bin
#   copy resources to ~/.local/share/bosco
#   copy .desktop to ~/.local/share/applications
#
###
task 'install', 'install application to desktop', ->
    install "#{os.homedir()}/.local"


