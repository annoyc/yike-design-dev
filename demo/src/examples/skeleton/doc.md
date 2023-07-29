## YkSkeleton 骨架屏

将加载中的数据用灰色占位。

:::snippet
基本用法
骨架屏组件提供`<a-skeleton-line> 和 <a-skeleton-shape>` 两种组件，用户可根据需要组合使用。
<SkeletonPrimary/>
:::

:::snippet
图形骨架屏
图形骨架屏分为 `square`-正方形（默认）、`circle`-圆形两种形状，并提供`small、medium、large`三种尺寸。
<SkeletonShape/>
:::

:::snippet
动画
通过设置 animation 属性，让骨架屏显示动画效果。
<SkeletonPrimaryAnimation/>
:::

:::snippet
自定义样式
当提供的模板不满足要求时，可以自定义样式，通过具名插槽`template`来自定义模板。
<SkeletonSlot/>
:::

:::snippet
加载状态
可定义加载状态的模板和非加载状态的内容。
<SkeletonLoading/>
:::

:::snippet
防止渲染抖动
在数据请求过快时，为了防止骨架屏刚被渲染接口数据就已经返回而导致用户界面会快速闪烁的问题，可以使用 throttle 属性来处理。
<SkeletonThrottle/>
:::

### API

#### Skeleton Props

| 参数        | 描述                                                                                                       | 类型       | 默认值  |
| ----------- | ---------------------------------------------------------------------------------------------------------- | ---------- | ------- |
| `loading`   | 是否展示骨架屏默认 slot 内容（为 true 时，需要定义具名插槽 template 的内容；为 false，则直接展示组件子内容 | ` boolean` | `false` |
| `animation` | 是否开启骨架屏动画                                                                                         | `boolean`  | `false` |
| `throttle`  | 渲染延迟（以毫秒为单位）                                                                                   | `number`   | `0`     |

#### Skeleton Slot

| 参数       | 描述                     | 类型     |
| ---------- | ------------------------ | -------- |
| `default`  | 真正渲染的 DOM           | `object` |
| `template` | 渲染 skeleton 模板的内容 | `object` |

#### SkeletonLine Props

| 参数           | 描述             | 类型                  | 默认值 |
| -------------- | ---------------- | --------------------- | ------ |
| `rows`         | 展示的行数       | `number`              | `1`    |
| `widths`       | 线型骨架的宽度   | `string ｜ string[] ` | `[]`   |
| `line-height`  | 线型骨架的行高   | `number`              | `20`   |
| `line-spacing` | 线型骨架的行间距 | `number`              | `15`   |

#### SkeletonShape Props

| 参数    | 描述           | 类型                         | 默认值     |
| ------- | -------------- | ---------------------------- | ---------- |
| `shape` | 图形骨架的形状 | ` 'square'｜'circle'`        | `'square'` |
| `size`  | 图形骨架的大小 | `'small'｜'medium'｜'large'` | `'medium'` |
