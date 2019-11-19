import { Cpu } from '../store/stats';

export type AddStatsAction = {
    type: 'ADD_STATS'
    cpuStats: Array<Cpu>
}
  
export type SelectCpuAction = {
    type: 'SELECT_CPU'
    selectedCpu: string
}
  
export type Action = AddStatsAction | SelectCpuAction

export const addStatsAction = (cpuStats: Array<Cpu>) => (
    {
        type: 'ADD_STATS',
        cpuStats
    }   
)

export const selectCpuAction = (selectedCpu: string) => (
    {
        type: 'SELECT_CPU',
        selectedCpu
    }   
)
  