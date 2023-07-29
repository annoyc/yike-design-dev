import { PropType } from 'vue';

export type SkeletonProps = {
  loading?: boolean;
  animation?: boolean;
  throttle?: number;
};

export type SkeletonLineProps = {
  rows?: number;
  widths?: PropType<Array<number | string>>;
  lineHeight?: number;
  lineSpacing?: number;
};

export type SkeletonShapeProps = {
  shape?: 'square' | 'circle';
  size?: string;
};
