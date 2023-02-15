import GlobalStyles from 'styles/GlobalStyle';
import ReactQueryProvider from 'Provider/QueryClientProvider';
import ThemeProvider from 'Provider/ThemeProvider';
import StyledComponentsRegistry from 'lib/register';

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <ThemeProvider>
            <GlobalStyles />
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
