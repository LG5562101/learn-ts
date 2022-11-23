type Ioperate = 'plus' | 'minus'
interface Icacluate {
  (operate: Ioperate, numbers: number[]): number;
  plus: (numbers: number[]) => number;
  minus: (numbers: number[]) => number;
}
declare const cacluste: Icacluate