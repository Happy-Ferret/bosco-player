/**
 * xml2js.d.ts
 * 
 * xml2js declarations for typescript
 * @see https://github.com/Leonidas-from-XIV/node-xml2js
 */
type Continuation = (err: any, res: any) => void

declare module "xml2js" {
    export function parseString(xml: string, next: Continuation)
    export class Parser {
        parseString(xml: string, next: Continuation)
    }
}

