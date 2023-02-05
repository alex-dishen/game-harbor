import { ReactComponent as Windows } from 'assets/windows.svg';
import { ReactComponent as PlayStation } from 'assets/playstation.svg';
import { ReactComponent as Xbox } from 'assets/xbox.svg';
import { ReactComponent as Nintendo } from 'assets/nintendo.svg';
import { ReactComponent as Apple } from 'assets/apple.svg';
import { ReactComponent as Android } from 'assets/android.svg';
import { ReactNode } from 'react';

export const platformIcons: Record<string, ReactNode> = {
  pc: <Windows />,
  android: <Android />,
  ios: <Apple />,
  playstation: <PlayStation />,
  xbox: <Xbox />,
  mac: <Apple />,
  nintendo: <Nintendo />,
};
