import { ReactNode } from 'react'
import { ReactComponent as Windows } from 'assets/images/windows.svg'
import { ReactComponent as PlayStation } from 'assets/images/playstation.svg'
import { ReactComponent as Xbox } from 'assets/images/xbox.svg'
import { ReactComponent as Nintendo } from 'assets/images/nintendo.svg'
import { ReactComponent as Apple } from 'assets/images/apple.svg'
import { ReactComponent as Android } from 'assets/images/android.svg'

export const platformIcons: Record<string, ReactNode> = {
  pc: <Windows />,
  android: <Android />,
  ios: <Apple />,
  playstation: <PlayStation />,
  xbox: <Xbox />,
  mac: <Apple />,
  nintendo: <Nintendo />,
}
