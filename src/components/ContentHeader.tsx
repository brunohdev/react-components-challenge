import '../styles/content-header.scss';

interface ContentHeaderProps {
  selectedGenre: {
    title: string
  }
}

export function ContentHeader({ selectedGenre }: ContentHeaderProps) {
  return (
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>
  )
}