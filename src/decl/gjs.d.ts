/**
 * gjs.d.ts
 * 
 * Gjs declarations for typescript
 */

declare const ARGV: string[]
declare function print(...args: any[])
declare function require(name: string): any
declare module "Lang" {
    export function Class(properties: any)
}
