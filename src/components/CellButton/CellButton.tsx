import React, { ButtonHTMLAttributes, ElementType } from 'react';
import Tappable from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import { HasAlign } from '../../types';
import withAdaptivity, { AdaptivityProps } from '../../hoc/withAdaptivity';

export interface CellButtonProps extends ButtonHTMLAttributes<HTMLElement>, HasAlign, AdaptivityProps {
  mode?: 'primary' | 'danger';
  before?: React.ReactNode;
  Component?: ElementType;
  stopPropagation?: boolean;
  href?: string;
  target?: string;
}

const CellButton: React.FunctionComponent<CellButtonProps> = ({
  className,
  align,
  mode,
  before,
  children,
  stopPropagation,
  Component,
  sizeX,
  ...restProps
}: CellButtonProps) => {
  const platform = usePlatform();

  return (
    <Tappable
      {...restProps}
      className={classNames(
        getClassName('CellButton', platform),
        className,
        `CellButton--sizeX-${sizeX}`,
        `CellButton--lvl-${mode}`,
        `CellButton--aln-${align}`,
      )}
      Component={restProps.href ? 'a' : Component}
    >
      <div className="CellButton__in">
        {before && <div className="CellButton__before">{before}</div>}
        {children && <div className="CellButton__content">{children}</div>}
      </div>
    </Tappable>
  );
};

CellButton.defaultProps = {
  mode: 'primary',
  Component: 'button',
  align: 'left',
  stopPropagation: true,
};

export default withAdaptivity(CellButton, { sizeX: true });
