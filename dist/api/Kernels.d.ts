import { PrimitiveType } from "../frontend/Type";
import { Template } from '../frontend/KernelFactory';
declare function addToKernelScope(obj: any): void;
declare function clearKernelScope(): void;
declare function template(): Template;
declare function kernel(argTypesOrCode: any, codeOrUndefined: any): ((...args: any[]) => void);
declare function classKernel(thisObj: any, argTypesOrCode: any, codeOrUndefined: any): ((...args: any[]) => void);
declare function func(f: any): ((...args: any[]) => any);
declare function sync(): Promise<void>;
declare const i32 = PrimitiveType.i32;
declare const f32 = PrimitiveType.f32;
export { addToKernelScope, clearKernelScope, kernel, classKernel, func, i32, f32, sync, template };