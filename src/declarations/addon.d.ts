/** @noSelf **/
declare namespace Addon {
    export function OnInitialize(): void;
    export function OnLoad(this: any): void;
}

declare class AddonZ {
    static OnInitialize(this:any): void;
    static OnLoad(): void;
}

declare class Class {
    colon(arg: string): void;
    dot(this: void, arg: string): void;
  }
  