
import { ForwardedRef, forwardRef } from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface RouterLinkProps extends Omit<LinkProps, 'to'> {
  href: string;
}

const RouterLink = forwardRef((props: RouterLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
  <Link ref={ref} to={props.href} {...props} />
));

export default RouterLink;
