import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<link rel='icon' href='/logo.svg' />
			</Head>
			<body className='overflow-x-hidden'>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
