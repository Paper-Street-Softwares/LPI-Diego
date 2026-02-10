export function AlternatingSection({
  index,
  colorMode,
  children,
  forcePrimaryDark = false,
}) {
  const colors = {
    light: ['bg-white', 'bg-terciary'],
    defaultDark: ['bg-white', 'bg-terciary'],
    defaultLight: ['bg-white', 'bg-terciary'],
    dark: ['bg-black', 'bg-darkOpacity'],
  }

  // caso especial do default
  if (colorMode === 'defaultDark' && forcePrimaryDark) {
    return <section className="bg-primaryDark">{children}</section>
  }

  if (colorMode === 'defaultLight' && forcePrimaryDark) {
    return <section className="bg-white">{children}</section>
  }

  const bgClass = colors[colorMode][index % 2]

  return <section className={bgClass}>{children}</section>
}
