export interface AlertProps {
    /**
     * @description Alert的类型
     * @default 'info'
     */
    kind?: 'info' | 'positive' | 'negative' | 'warning';
}
export type KindMap = Record<Required<AlertProps>['kind'], string>;
