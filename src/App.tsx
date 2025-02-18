import "./App.css";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  Paper,
} from "@mantine/core";
import { useLocalStorage, useHotkeys } from "@mantine/hooks";
import AppShellExample from "./components/AppShell";

import { AlephiumConnectProvider } from '@alephium/web3-react'

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <AlephiumConnectProvider useTheme="rounded" network="mainnet">
      <div className="App">
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
            <Paper>
              <AppShellExample />
            </Paper>
          </MantineProvider>
        </ColorSchemeProvider>
      </div>
    </AlephiumConnectProvider>
  );
}

export default App;
