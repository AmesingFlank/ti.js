import {getTint}  from '../tint/tint'
class TaskParams {
    code:string = ""
    invocatoions: number = 0
    spv?: number[] = undefined
}

class CompiledTask {
    device: GPUDevice
    params: TaskParams
    pipeline: GPUComputePipeline|null = null
    bindGroup:GPUBindGroup | null = null
    constructor(device: GPUDevice, params:TaskParams){
        this.device = device
        this.params = params
        this.createPipeline()
    }
    createPipeline(){
        let code = this.params.code
        this.pipeline = this.device.createComputePipeline({
            compute: {
                module: this.device.createShaderModule({
                  code: code,
                }),
                entryPoint: 'main',
            },
        })
    }
}

class CompiledKernel {
    tasks: CompiledTask[] = []
    device: GPUDevice
    constructor(device: GPUDevice){
        this.device = device
    }
}

export {CompiledTask, CompiledKernel, TaskParams}