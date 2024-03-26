import {ReactNode} from 'react';
import {Metadata} from 'next';

/**
 * The Layout is needed to specify the page title and meta tags.
 */
export default function RegisterLayout({children}: {children: ReactNode}) {
	return (
		<>{children}</>
	);
}
export const metadata: Metadata = {
	title: 'Register',
	robots: 'noindex'
};
