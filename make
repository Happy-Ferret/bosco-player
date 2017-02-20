#!/usr/bin/env node
/**
 * copy files to prefix location
 *
 *   copy executable to ~/.local/bin
 *   copy resources to ~/.local/share/bosco
 *   copy .desktop to ~/.local/share/applications
 * 
 */
const fs = require('fs')
const os = require('os')
const {execSync} = require('child_process')

const prefix = `${os.homedir()}/.local`
const appName = "bosco"
const exeFile = "bosco-player"
const dskFile = "bosco-player.desktop"
const icoFile = "bosco/bosco.png"
const resFiles = [
    "bosco/player.ui",
    "bosco/project.glade"
]

//
//  Make sure the application folder exists
//
if (!fs.existsSync(`${prefix}/share/${appName}`)){
    fs.mkdirSync(`${prefix}/share/${appName}`);
}

//
//  Set the executable prefix
//
let lines = fs.readFileSync(`bin/${exeFile}`, {encoding: 'utf8'}).split('\n')
lines[1] = `const PREFIX = \"${prefix}/share/${appName}\";`
fs.writeFileSync(`${prefix}/bin/${exeFile}`, lines.join('\n'))

//
//  set the executable bit
//
execSync(`chmod +x ${prefix}/bin/${exeFile}`)

//
//  Set the .desktop prefix
//
lines = fs.readFileSync(`share/applications/${dskFile}`, {encoding: 'utf8'}).split('\n')
let out = []
for (let line of lines) {
    let [key,value] = line.split('=')
    if (value != null) {
        switch (key) {
            case 'Exec': out.push(`Exec=${prefix}/bin/${exeFile}`); break
            case 'Icon': out.push(`Icon=${prefix}/share/${icoFile}`); break
            default: out.push(line)
        }
    } else {
        out.push(line)
    }
}
fs.writeFileSync(`${prefix}/share/applications/${dskFile}`, out.join('\n'))

//
//  set the executable bit
//
execSync(`chmod +x ${prefix}/share/applications/${dskFile}`)

//
// copy the icon 
//
execSync(`cp share/${icoFile} ${prefix}/share/${appName}`)

//
// just copy the remaining resources 
//
for (let file of resFiles) {
    execSync(`cp share/${file} ${prefix}/share/${appName}`)
}

