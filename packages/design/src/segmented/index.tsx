import React, { useContext } from 'react';
import { Segmented as AntSegmented, Typography } from 'antd';
import type { SegmentedProps as AntSegmentedProps } from 'antd/es/segmented';
import useStyle from './style';
import ConfigProvider from '../config-provider';

export * from 'antd/es/segmented';

export type SegmentedProps = AntSegmentedProps;

const Segmented: React.FC<SegmentedProps> = ({
  options,
  prefixCls: customizePrefixCls,
  ...restProps
}: any) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('segmented', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);

  const optionsItems = (option, { index }) => {
    return {
      label: <div className={'ant-segmented-ellipsis'}>{option.label || option}</div>,
      value: option.value || index,
      ...option,
    };
  };

  return wrapSSR(
    <AntSegmented
      options={options?.map((option, index) => optionsItems(option, { index }))}
      defaultValue={0}
      {...restProps}
    />
  );
};

export default Segmented;
