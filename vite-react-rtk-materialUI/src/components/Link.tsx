import { Link as UILink } from '@material-ui/core';
import type { LinkProps, TypographyProps } from '@material-ui/core';
import { Link as WouterLink } from 'wouter';

type Link = {
  to: string;
  color?: TypographyProps['color'];
  children: JSX.Element | string;
} & LinkProps;

export function Link({ to, children, ...rest }: Link): JSX.Element {
  return (
    <WouterLink to={to}>
      <UILink {...rest}>{children}</UILink>
    </WouterLink>
  );
}
